import { contacts, copy } from '../content/ru';

export function Icon({ name, className = '', ...props }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    northeast: (
      <>
        <path d="M6 18 18 6M6 6h12v12" />
      </>
    ),
    down: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    study: (
      <>
        <path d="m2 9 10-5 10 5-10 5-10-5Z" />
        <path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" />
      </>
    ),
    computer: (
      <>
        <rect x="3" y="3" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 16v5m-3-14-2 2 2 2m6-4 2 2-2 2" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    telegram: (
      <>
        <path d="m21 3-4 18-6-5-4 3 1-7L21 3 3 10l5 2M8 12l9-6-6 10" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
        <path d="M8 7c-1 4 3 8 7 8l1-2-3-1-1 1-2-2 1-1-1-3H8Z" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M3 7V5l14-3v3m0 7h4v4h-4Z" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4m10-4v4M3 11h18m-14 5 3 2 6-4" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    plus: <path d="M5 12h14M12 5v14" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function Panda({ className = '' }) {
  return (
    <svg
      className={`panda ${className}`}
      width="48"
      height="44"
      viewBox="0 0 64 58"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="13" cy="13" r="11" fill="currentColor" />
      <circle cx="51" cy="13" r="11" fill="currentColor" />
      <path
        d="M59 32c0 16-12 23-27 23S5 48 5 32C5 17 16 8 32 8s27 9 27 24Z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <ellipse cx="20" cy="30" rx="8" ry="10" transform="rotate(32 20 30)" fill="currentColor" />
      <ellipse cx="44" cy="30" rx="8" ry="10" transform="rotate(-32 44 30)" fill="currentColor" />
      <circle cx="22" cy="28" r="2.6" fill="#fff" />
      <circle cx="42" cy="28" r="2.6" fill="#fff" />
      <path d="M28 40q4-3 8 0l-4 4-4-4Z" fill="currentColor" />
      <path d="M32 43v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ContactLinks({ full = false, light = false }) {
  return (
    <div className="contact-buttons">
      <a
        className={`button ${light ? 'button-white' : 'button-dark'}`}
        href={contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="telegram" />
        {full ? copy.telegramCta : copy.telegram}
        <Icon name="northeast" />
      </a>
      <a
        className={`button ${light ? 'button-outline-light' : 'button-outline'}`}
        href={contacts.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" />
        {copy.whatsapp}
        <Icon name="northeast" />
      </a>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
