import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { mergeAttractions, mergeDestinations, mergePrograms, type CmsAttraction, type CmsDestination, type CmsProgram } from './cms';
import type { AttractionPageContent } from './destinations';
import type { FeaturedProgram } from './site';

type CmsValue = { destinations: CmsDestination[]; attractions: AttractionPageContent[]; programs: FeaturedProgram[] };
const CmsContext = createContext<CmsValue>({ destinations: mergeDestinations([]), attractions: mergeAttractions([]), programs: mergePrograms([]) });

export function CmsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<{ destinations: CmsDestination[]; attractions: CmsAttraction[]; programs: CmsProgram[]; hiddenDestinations: string[]; hiddenAttractions: string[]; hiddenPrograms: string[] }>({ destinations: [], attractions: [], programs: [], hiddenDestinations: [], hiddenAttractions: [], hiddenPrograms: [] });
  useEffect(() => {
    let active = true;
    fetch('/api/site-content', { cache: 'no-store' }).then(async (response) => {
      if (!response.ok) return null;
      return response.json();
    }).then((result) => {
      if (active && result && Array.isArray(result.destinations) && Array.isArray(result.attractions) && Array.isArray(result.programs)) setOverrides({
        destinations: result.destinations,
        attractions: result.attractions,
        programs: result.programs,
        hiddenDestinations: Array.isArray(result.hiddenDestinations) ? result.hiddenDestinations : [],
        hiddenAttractions: Array.isArray(result.hiddenAttractions) ? result.hiddenAttractions : [],
        hiddenPrograms: Array.isArray(result.hiddenPrograms) ? result.hiddenPrograms : [],
      });
    }).catch(() => undefined);
    return () => { active = false; };
  }, []);
  const value = {
    destinations: mergeDestinations(overrides.destinations, overrides.hiddenDestinations),
    attractions: mergeAttractions(overrides.attractions, overrides.hiddenAttractions),
    programs: mergePrograms(overrides.programs, overrides.hiddenPrograms),
  };
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms() {
  return useContext(CmsContext);
}
