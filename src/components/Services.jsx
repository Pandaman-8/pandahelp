import { contacts, copy, formatPrice, services } from '../content/ru';
import { Icon, SectionHeading } from './UI';

export default function Services() {
  const text = copy.services;
  return (
    <section
      className="section services container"
      id="services"
      tabIndex="-1"
      aria-labelledby="services-title"
    >
      <SectionHeading
        id="services-title"
        eyebrow={text.eyebrow}
        title={text.title}
        description={text.intro}
      />
      <div className="service-grid">
        {services.map((service) => (
          <article
            className={`service-card service-${service.id}`}
            id={service.id}
            tabIndex="-1"
            key={service.id}
          >
            <div className="service-top">
              <span className="service-brand">
                <Icon name={service.icon} />
                {service.name}
              </span>
              <span className="service-label">{service.label}</span>
            </div>
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="topic-list">
              {service.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <div className="service-note">
              <strong>{service.noteTitle}</strong>
              <p>{service.note}</p>
            </div>
            <div className="service-bottom">
              <a
                href={contacts.telegram}
                className="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.cta}
                <Icon name="arrow" />
              </a>
              <span>{formatPrice(service.price)}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="service-other">
        <p>
          <strong>{text.other}</strong> {text.otherText}
        </p>
        <a className="text-link" href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
          {copy.whatsapp}
          <Icon name="northeast" />
        </a>
      </div>
      <div className="go-strip" id="go">
        <span className="go-icon">
          <Icon name="pin" />
        </span>
        <div>
          <h3>
            {text.go.name} <span>{text.go.title}</span>
          </h3>
          <p>{text.go.text}</p>
        </div>
        <span className="unavailable">{text.go.status}</span>
      </div>
    </section>
  );
}
