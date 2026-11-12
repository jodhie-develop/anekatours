import { useEffect, useRef, useState, type FormEvent } from 'react';
import { company } from '../data/site';
import { Link } from '../router';

type ChatLink = { label: string; href: string; external?: boolean };
type ChatMessage = { id: number; from: 'assistant' | 'visitor'; text: string; links?: ChatLink[] };

const quickPrompts = ['Sample programs', 'Destinations', 'Request a quote', 'Contact us'];

function answerFor(query: string): Omit<ChatMessage, 'id' | 'from'> {
  const text = query.toLowerCase();
  if (/program|itinerar|tour|trip|journey/.test(text)) {
    return {
      text: 'Explore our sample journeys across Java and Bali. Each program can be tailored to your travellers and schedule.',
      links: [{ label: 'View sample programs', href: '/programs' }],
    };
  }
  if (/destination|island|place|where|sumatra|bali|java|borneo|sulawesi/.test(text)) {
    return {
      text: 'We arrange journeys throughout Indonesia, from volcanic Java to Bali and the outer islands. Explore our destination overview.',
      links: [{ label: 'Explore destinations', href: '/destinations' }],
    };
  }
  if (/quote|price|cost|book|booking|request|group|traveller|traveler/.test(text)) {
    return {
      text: 'Tell us your travel dates, group size, interests and preferred hotel class. Our team will help shape a tailored proposal.',
      links: [{ label: 'Request a quote', href: '/contact' }],
    };
  }
  if (/contact|email|whatsapp|team|human|person/.test(text)) {
    return {
      text: 'You can reach our team by email or WhatsApp. We work with tour operators and travel agents on journeys across Indonesia.',
      links: [
        { label: 'Email our team', href: `mailto:${company.salesEmail}`, external: true },
        { label: 'Chat on WhatsApp', href: `https://wa.me/${company.whatsapp}`, external: true },
      ],
    };
  }
  if (/about|story|company|experience|1979/.test(text)) {
    return {
      text: 'Aneka Kartika has been welcoming travellers to Indonesia since 1979. Learn more about our story and local team.',
      links: [{ label: 'About Aneka Kartika', href: '/about' }],
    };
  }
  return {
    text: 'I can help you find sample programs, explore destinations, or request a tailored quote. What would you like to know?',
    links: [
      { label: 'Sample programs', href: '/programs' },
      { label: 'Contact our team', href: '/contact' },
    ],
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, from: 'assistant', text: 'Hello! I’m Aneka’s travel assistant. How can I help with your Indonesia plans?' },
  ]);
  const nextId = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [messages, open]);

  const send = (value: string) => {
    const query = value.trim();
    if (!query) return;
    const visitor: ChatMessage = { id: nextId.current++, from: 'visitor', text: query };
    const reply: ChatMessage = { id: nextId.current++, from: 'assistant', ...answerFor(query) };
    setMessages((current) => [...current, visitor, reply]);
    setInput('');
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send(input);
  };

  return (
    <div className="chatbot">
      {open && (
        <section className="chatbot-panel" aria-label="Aneka Tours travel assistant">
          <header className="chatbot-panel__header">
            <span className="chatbot-panel__mark" aria-hidden="true">A</span>
            <div>
              <strong>Aneka Tours Assistant</strong>
              <small>Indonesia travel planning</small>
            </div>
            <button className="chatbot-panel__close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="chatbot-panel__messages" role="log" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div className={`chatbot-message chatbot-message--${message.from}`} key={message.id}>
                <p>{message.text}</p>
                {message.links && (
                  <div className="chatbot-message__links">
                    {message.links.map((link) => (
                      link.external ? (
                        <a key={link.label} href={link.href} target={link.href.startsWith('https:') ? '_blank' : undefined} rel="noopener noreferrer">{link.label}</a>
                      ) : (
                        <Link key={link.label} to={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="chatbot-panel__quick-prompts" aria-label="Suggested questions">
                {quickPrompts.map((prompt) => (
                  <button type="button" key={prompt} onClick={() => send(prompt)}>{prompt}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="chatbot-panel__form" onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about travelling in Indonesia"
              aria-label="Type your question"
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim()}>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M3 11.5 21 3l-5.6 18-3.1-7.3L3 11.5Zm9.3 2.2L21 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        className={`chatbot-launcher ${open ? 'is-open' : ''}`}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Chat with us'}
      >
        {open ? (
          <span aria-hidden="true">×</span>
        ) : (
          <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
            <path d="M4.5 5.5h15v11h-9l-5.5 3v-14Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 9.5h8M8 13h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
