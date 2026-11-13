import { useEffect, useRef, useState, type FormEvent } from 'react';
import { company } from '../data/site';
import { Link } from '../router';

type ChatLink = { label: string; href: string; external?: boolean };
type ChatMessage = { id: number; from: 'assistant' | 'visitor'; text: string; links?: ChatLink[] };

const quickPrompts = ['Sample programs', 'Destinations', 'Request a quote', 'Contact us'];

function renderMessageText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [contactRequired, setContactRequired] = useState(false);
  const [contactSaved, setContactSaved] = useState(false);
  const [leadId, setLeadId] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactWhatsapp, setContactWhatsapp] = useState('');
  const [contactConsent, setContactConsent] = useState(false);
  const [contactError, setContactError] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, from: 'assistant', text: 'Hello! I’m Aneka Kartika Smart Assistant. How can I help with your Indonesia plans?' },
  ]);
  const nextId = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [messages, open]);

  const send = async (value: string) => {
    const query = value.trim();
    if (!query || sending) return;
    const visitor: ChatMessage = { id: nextId.current++, from: 'visitor', text: query };
    const conversation = [...messages, visitor];
    const visitorQuestionCount = conversation.filter((message) => message.from === 'visitor').length;
    setMessages(conversation);
    setInput('');
    setSending(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(leadId ? { leadId } : {}),
          messages: conversation.slice(-12).map((message) => ({
            role: message.from === 'visitor' ? 'user' : 'assistant',
            content: message.text,
          })),
        }),
      });
      const result = await response.json();
      if (!response.ok || typeof result.text !== 'string') throw new Error('Chat request failed');
      const reply: ChatMessage = { id: nextId.current++, from: 'assistant', text: result.text, links: result.links };
      const nextMessages = [...conversation, reply];
      if (visitorQuestionCount >= 2 && result.leadCaptureEnabled === true && !contactSaved) {
        nextMessages.push({
          id: nextId.current++,
          from: 'assistant',
          text: 'Before we continue, may I kindly ask you to provide your email address and WhatsApp number? We will use these details, together with a brief summary of this conversation, solely to follow up on your enquiry. Please submit the details below and confirm your consent.',
        });
        setContactRequired(true);
      }
      setMessages(nextMessages);
    } catch {
      const reply: ChatMessage = {
        id: nextId.current++,
        from: 'assistant',
        text: 'Sorry, I could not respond just now. Please try again or contact our team by email or WhatsApp.',
        links: [
          { label: 'Email our team', href: `mailto:${company.salesEmail}`, external: true },
          { label: 'Chat on WhatsApp', href: `https://wa.me/${company.whatsapp}`, external: true },
        ],
      };
      setMessages((current) => [...current, reply]);
    } finally {
      setSending(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contactRequired) void send(input);
  };

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactError('');
    if (!contactConsent) {
      setContactError('Please confirm your consent before continuing.');
      return;
    }
    setSending(true);
    try {
      const response = await fetch('/api/chat-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: contactEmail,
          whatsapp: contactWhatsapp,
          consent: contactConsent,
          messages: messages.slice(-12).map((message) => ({
            role: message.from === 'visitor' ? 'user' : 'assistant',
            content: message.text,
          })),
        }),
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || 'Could not save details.');
      setLeadId(result.leadId);
      setContactSaved(true);
      setContactRequired(false);
      setMessages((current) => [...current, {
        id: nextId.current++,
        from: 'assistant',
        text: 'Thank you. Your contact details and a brief summary of this conversation have been recorded securely. We can continue with your travel questions.',
      }]);
    } catch (error) {
      setContactError(error instanceof Error ? error.message : 'We could not save your details. Please try again shortly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="chatbot">
      {open && (
        <section className="chatbot-panel" aria-label="Aneka Kartika Smart Assistant">
          <header className="chatbot-panel__header">
            <img className="chatbot-panel__mark" src="/favicon-32x32.png" alt="Aneka Kartika logo" />
            <div>
              <strong>Aneka Kartika Smart Assistant</strong>
              <small>Indonesia travel planning</small>
            </div>
            <button className="chatbot-panel__close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </header>

          <div className="chatbot-panel__messages" role="log" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div className={`chatbot-message chatbot-message--${message.from}`} key={message.id}>
                <p>{renderMessageText(message.text)}</p>
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
                  <button type="button" key={prompt} onClick={() => void send(prompt)} disabled={sending}>{prompt}</button>
                ))}
              </div>
            )}
            {sending && <p className="chatbot-message chatbot-message--assistant" role="status">One moment, I’m checking that for you…</p>}
            <div ref={endRef} />
          </div>

          {contactRequired ? (
            <form className="chatbot-lead-form" onSubmit={submitContact}>
              <label>
                <span>Email address</span>
                <input type="email" value={contactEmail} onChange={(event) => setContactEmail(event.target.value)} maxLength={254} autoComplete="email" required disabled={sending} />
              </label>
              <label>
                <span>WhatsApp number</span>
                <input type="tel" value={contactWhatsapp} onChange={(event) => setContactWhatsapp(event.target.value)} maxLength={40} autoComplete="tel" placeholder="+62 …" required disabled={sending} />
              </label>
              <label className="chatbot-lead-form__consent">
                <input type="checkbox" checked={contactConsent} onChange={(event) => setContactConsent(event.target.checked)} required disabled={sending} />
                <span>I consent to Aneka Kartika Tours storing my contact details and a brief summary of this conversation to respond to my enquiry.</span>
              </label>
              {contactError && <p className="chatbot-lead-form__error" role="alert">{contactError}</p>}
              <button type="submit" disabled={sending || !contactEmail.trim() || !contactWhatsapp.trim() || !contactConsent}>
                {sending ? 'Saving securely…' : 'Share details and continue'}
              </button>
            </form>
          ) : (
            <form className="chatbot-panel__form" onSubmit={submit}>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={sending ? 'Please wait…' : 'Ask about travelling in Indonesia'}
                aria-label="Type your question"
                maxLength={1200}
                disabled={sending}
              />
              <button type="submit" aria-label="Send message" disabled={!input.trim() || sending}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M3 11.5 21 3l-5.6 18-3.1-7.3L3 11.5Zm9.3 2.2L21 3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}
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
