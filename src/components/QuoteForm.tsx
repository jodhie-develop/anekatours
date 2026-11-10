import { useState, type FormEvent } from 'react';
import Reveal from './Reveal';
import { company, quote, pages } from '../data/site';

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

const programField: Field = { name: 'program', label: 'Program name', type: 'text' };

const isPlaceholder = (v: string) => v.startsWith('[');

/**
 * Quote form. `full` = the /contact page version (adds "Program name" and
 * pre-fills from links such as /contact?program=... or ?destination=...).
 */
export default function QuoteForm({ full = false }: { full?: boolean }) {
  const [sent, setSent] = useState(false);
  const fields = full ? [...baseFields, programField] : baseFields;

  const params = new URLSearchParams(window.location.search);
  const prefill: Record<string, string> = {
    destinations: params.get('destination') ?? '',
    program: params.get('program') ?? '',
    notes: params.get('group') ? `Group type: ${params.get('group')}` : '',
  };

  // No backend yet: the form opens the visitor's email app with the brief pre-filled.
  // Swap this for Formspree / EmailJS / your own API when the sales inbox is ready.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const rows: [string, string][] = [
      ...fields.map((f): [string, string] => [f.label, f.name]),
      ['Hotel class', 'hotel'],
      ['Notes', 'notes'],
    ];
    const lines = rows.map(([label, name]) => `${label}: ${data.get(name) ?? ''}`);
    if (!isPlaceholder(company.salesEmail)) {
      const subject = encodeURIComponent(`Quote request — ${data.get('agency')}`);
      window.location.href = `mailto:${company.salesEmail}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
    } else {
      console.info('Quote request (no sales email configured yet):\n' + lines.join('\n'));
    }
    setSent(true);
  };

  const form = (
    <form className="form" onSubmit={onSubmit}>
      {fields.map((f) => (
        <label key={f.name} className="field">
          <span>{f.label}</span>
          <input name={f.name} type={f.type} placeholder={f.label} required={f.required} defaultValue={prefill[f.name] ?? ''} />
        </label>
      ))}
      <label className={`field ${full ? '' : 'field--notes'}`}>
        <span>Notes</span>
        <textarea name="notes" placeholder="Notes" rows={4} defaultValue={prefill.notes} />
      </label>
      <label className="field">
        <span>Hotel class</span>
        <select name="hotel" defaultValue={quote.hotelClasses[0]}>
          {quote.hotelClasses.map((h) => (
            <option key={h}>{h}</option>
          ))}
        </select>
      </label>
      <div className="form__submit">
        <button type="submit" className="btn btn--primary">
          Request a Quote
        </button>
        {sent && <p className="form__thanks">Thank you — our team will get back to you shortly.</p>}
        <p className="label">{full ? pages.contact.note : quote.note}</p>
      </div>
    </form>
  );

  if (full) {
    return (
      <Reveal as="section" className="section container section--tight-top">
        {form}
      </Reveal>
    );
  }

  return (
    <Reveal as="section" className="section container">
      <h2 className="h2">{quote.title}</h2>
      <p className="lead">{quote.subtitle}</p>
      {form}
    </Reveal>
  );
}
