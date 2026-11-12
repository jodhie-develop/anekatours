import { company, FACEBOOK_URL, navLinks } from '../data/site';
import { Link } from '../router';

export default function Footer() {
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
          <div className="footer__contact-row">
            <div className="footer__company-details">
              <p className="footer__address">
                <a href="https://www.google.com/maps/search/?api=1&amp;query=Jl.+Manyar+Kertoarjo+V-50,+Surabaya+60285,+Indonesia" target="_blank" rel="noopener noreferrer">
                  Jl. Manyar Kertoarjo V-50, Surabaya 60285, Indonesia
                </a>
              </p>
              <p>Phone: <a href="tel:+62315929000">+62 31 5929000</a></p>
              <p>Email: <a href="mailto:info@aneka-tours.co.id">info@aneka-tours.co.id</a></p>
              <p>License: ASITA/02/XII/DPP/1994</p>
              <p>Facebook: {FACEBOOK_URL ? (
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Aneka Kartika Tours and Travel Services</a>
              ) : 'Aneka Kartika Tours and Travel Services'}</p>
              <p>Instagram: <a href="https://www.instagram.com/AnekaKartikaTours" target="_blank" rel="noopener noreferrer">AnekaKartikaTours</a></p>
              <p>URL: <a href="https://www.aneka-tours.co.id" target="_blank" rel="noopener noreferrer">https://www.aneka-tours.co.id</a></p>
            </div>
            <div className="footer__wonderful-logo">
              <img src="/images/logo/wonderfulindonesia.png" alt="Wonderful Indonesia" loading="lazy" />
            </div>
          </div>
          <Link to="/contact" className="footer__cta btn btn--primary">
            Request a Quote
          </Link>
        </div>
      </footer>

    </>
  );
}
