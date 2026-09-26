import { copy } from '../content/ru';
import { Icon, Panda, SectionHeading } from './UI';
export default function Trust() {
  return (
    <>
      <section className="section rules" id="rules" tabIndex="-1">
        <div className="container">
          <SectionHeading eyebrow={copy.rules.eyebrow} title={copy.rules.title} />
          <div className="rules-grid">
            {copy.rules.items.map((rule) => (
              <article key={rule.title}>
                <Icon name={rule.icon} />
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about section container" aria-labelledby="about-title">
        <div className="about-identity">
          <div className="avatar">
            <Panda />
          </div>
          <span>{copy.about.owner}</span>
          <p>{copy.about.signature}</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h2 id="about-title">{copy.about.title}</h2>
          <p>{copy.about.text}</p>
          <p className="about-note">{copy.about.note}</p>
        </div>
      </section>
    </>
  );
}
