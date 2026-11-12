import { company, navLinks } from '../data/site';
import { Link } from '../router';

export default function Footer() {
  const wa = company.whatsapp.startsWith('[') ? '#' : `https://wa.me/${company.whatsapp}`;
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <Link to="/" className="footer__brand" aria-label={`${company.brandName} — home`}>
            <img
              src="/images/logo-aneka-kartika-white.png"
              alt={`${company.brandName} tours & travel service`}
              width={1077}
              height={180}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((l) => (
              <Link key={l.href} to={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="footer__company-details">
            <p className="footer__address">
              <a href="https://www.google.com/maps/search/?api=1&amp;query=Jl.+Manyar+Kertoarjo+V-50,+Surabaya+60285,+Indonesia" target="_blank" rel="noreferrer">
                Jl. Manyar Kertoarjo V-50, Surabaya 60285, Indonesia
              </a>
            </p>
            <p>Telp : <a href="tel:+62315929000">+.62.31.5929000</a></p>
            <p>E-mail : <a href="mailto:info@aneka-tours.co.id">info@aneka-tours.co.id</a></p>
            <p>Licence ASITA/02/XII/DPP/1994</p>
            <p>Facebook: Aneka Kartika Tours and Travel Services</p>
            <p>Instagam: <a href="https://www.instagram.com/AnekaKartikaTours" target="_blank" rel="noreferrer">AnekaKartikaTours</a></p>
            <p>URL : <a href="http://www.aneka-tours.co.id" target="_blank" rel="noreferrer">http://www.aneka-tours.co.id</a></p>
          </div>
          <Link to="/contact" className="footer__cta">
            Request a Quote
          </Link>
        </div>
      </footer>

      <a href={wa} className="wa-float" target={wa === '#' ? undefined : '_blank'} rel="noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"
          />
        </svg>
        WhatsApp
      </a>
    </>
  );
}
