import { contacts, copy, faq } from '../content/ru';
import { Icon, SectionHeading } from './UI';
export default function FAQ() {
  return (
    <section className="faq section" id="faq" tabIndex="-1">
      <div className="faq-inner container">
        <div>
          <SectionHeading
            eyebrow={copy.faq.eyebrow}
            title={copy.faq.title}
            description={copy.faq.note}
          />
          <a
            className="text-link"
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.faq.cta}
            <Icon name="northeast" />
          </a>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Icon name="plus" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
