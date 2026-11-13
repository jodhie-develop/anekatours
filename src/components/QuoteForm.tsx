import { useEffect, useRef, useState, type FormEvent } from 'react';
import Reveal from './Reveal';
import { destinations as mainDestinations, quote } from '../data/site';
import { baliAttractions, destinationPagesWithoutContent, javaAttractions } from '../data/destinations';

declare global {
  interface Window {
    turnstile?: { render: (container: HTMLElement, options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void }) => string };
  }
}

type Field = { name: string; label: string; type: string; required?: boolean };
const baseFields: Field[] = [
  { name: 'agency', label: 'Agency name', type: 'text', required: true },
  { name: 'email', label: 'Work email', type: 'email', required: true },
  { name: 'country', label: 'Country', type: 'text', required: true },
  { name: 'destinations', label: 'Destinations', type: 'text' },
  { name: 'dates', label: 'Travel dates', type: 'text' },
  { name: 'groupSize', label: 'Group size', type: 'text' },
  { name: 'language', label: 'Guide language', type: 'text' },
];

export default function QuoteForm({ full = false }: { full?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const siteKey = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey || !turnstileRef.current) return;
    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: setTurnstileToken,
          'expired-callback': () => setTurnstileToken(''),
        });
      }
    };
    const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile]');
    if (window.turnstile) renderWidget();
    else if (existing) existing.addEventListener('load', renderWidget, { once: true });
    else {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.dataset.turnstile = 'true';
      script.addEventListener('load', renderWidget, { once: true });
      document.head.appendChild(script);
    }
  }, [siteKey]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const destinationParam = params.get('destination') ?? '';
    const selectedAttraction = [...javaAttractions, ...baliAttractions].find((item) => item.slug === destinationParam);
    const selectedDestination = mainDestinations.find((item) => item.slug === destinationParam)
      ?? destinationPagesWithoutContent.find((item) => item.slug === destinationParam);
    const values: Record<string, string> = {
      destinations: selectedAttraction?.h1.split(':')[0] ?? selectedDestination?.name ?? destinationParam,
      program: params.get('program') ?? '',
      notes: params.get('group') ? `Group type: ${params.get('group')}` : '',
    };
    for (const [name, value] of Object.entries(values)) {
      const field = formRef.current?.elements.namedItem(name);
      if (value && (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) field.value = value;
    }
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus('sending');
    const formData = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), turnstileToken };
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      formElement.reset();
    } catch {
      setStatus('error');
    }
  };

  const fields = full ? [...baseFields, { name: 'program', label: 'Program name', type: 'text' }] : baseFields;
  const form = (
    <form ref={formRef} className="form" method="post" action="/api/quote" onSubmit={onSubmit}>
      <div className="form__honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {fields.map((field) => (
        <label key={field.name} className="field">
          <span>{field.label}</span>
          <input name={field.name} type={field.type} placeholder={field.label} required={field.required} maxLength={field.name === 'email' ? 254 : 300} />
        </label>
      ))}
      <label className={`field ${full ? '' : 'field--notes'}`}>
        <span>Notes</span>
        <textarea name="notes" placeholder="Notes" rows={4} maxLength={3000} />
      </label>
      <label className="field">
        <span>Hotel class</span>
        <select name="hotel" defaultValue={quote.hotelClasses[0]}>{quote.hotelClasses.map((hotel) => <option key={hotel}>{hotel}</option>)}</select>
      </label>
      {siteKey && <div className="form__turnstile" ref={turnstileRef} />}
      <div className="form__submit">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Request a Quote'}
        </button>
        <p className="form__thanks" aria-live="polite">
          {status === 'success' && 'Thank you — your request has been sent to our team.'}
          {status === 'error' && 'We could not send your request. Please try again or email info@aneka-tours.co.id.'}
        </p>
      </div>
    </form>
  );

  return full ? <Reveal as="section" className="section container section--tight-top">{form}</Reveal> : (
    <Reveal as="section" className="section container">
      <h2 className="h2">{quote.title}</h2><p className="lead">{quote.subtitle}</p>{form}
    </Reveal>
  );
}
