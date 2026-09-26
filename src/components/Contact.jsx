import { contacts, copy } from '../content/ru';
import { ContactLinks, Icon, Panda } from './UI';
export default function Contact() {
  const text = copy.contactBlock;
  return (
    <section className="contact-section" id="contact" tabIndex="-1">
      <div className="container">
        <div className="contact-grid">
          <div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h2>{text.title}</h2>
            <p className="contact-description">{text.text}</p>
            <ContactLinks light />
            <p className="availability">{text.availability}</p>
          </div>
          <div className="message-guide">
            <h3>{text.checklistTitle}</h3>
            <ol>
              {text.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>{text.checklistNote}</p>
          </div>
        </div>
        <div className="secondary-contacts">
          <div>
            <span>{text.callLabel}</span>
            <a href={contacts.phone}>
              {contacts.phoneLabel}
              <Icon name="northeast" />
            </a>
            <small>{text.callHours}</small>
          </div>
          <div>
            <span>{text.emailLabel}</span>
            <a href={contacts.email}>
              {contacts.emailLabel}
              <Icon name="northeast" />
            </a>
            <small>{text.emailNote}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <footer className="site-footer container">
        <div>
          <a className="brand" href="#top">
            <Panda />
            <span>{copy.brand}</span>
          </a>
          <p>{copy.footer.note}</p>
        </div>
        <div className="footer-meta">
          <span>{copy.footer.location}</span>
          <span>
            © {new Date().getFullYear()} {copy.brand}
          </span>
        </div>
        <a className="text-link" href="#top">
          {copy.footer.top}
          <Icon name="northeast" />
        </a>
      </footer>
      <nav className="mobile-contact" aria-label={copy.contact}>
        <ContactLinks />
      </nav>
    </>
  );
}
