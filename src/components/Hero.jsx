import { contacts, copy } from '../content/ru';
import { Icon, Panda } from './UI';

export default function Hero() {
  const text = copy.hero;
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow location">
            <span className="status-dot" />
            {text.eyebrow}
          </p>
          <h1 id="hero-title">
            {text.title[0]}
            <br />
            <span>{text.title[1]}</span>
          </h1>
          <p className="hero-description">{text.description}</p>
          <div className="hero-actions">
            <a
              className="button button-dark"
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="telegram" />
              {copy.telegramCta}
            </a>
            <a className="button button-outline" href="#services">
              {copy.servicesCta}
              <Icon name="down" />
            </a>
          </div>
          <p className="hero-note">
            <Icon name="check" />
            {text.note}
          </p>
        </div>
        <div className="hero-panel">
          <div className="panel-top">
            <span className="eyebrow">{text.panelEyebrow}</span>
            <span className="panel-spark" aria-hidden="true">
              ✳
            </span>
          </div>
          <h2>{text.panelLabel}</h2>
          <div className="route-list">
            {text.routes.map((route) => (
              <a className="route" href={route.href} key={route.href}>
                <span className="route-icon">
                  <Icon name={route.icon} />
                </span>
                <span>
                  <strong>{route.title}</strong>
                  <small>{route.subtitle}</small>
                </span>
                <Icon name="northeast" />
              </a>
            ))}
          </div>
          <div className="panel-bottom">
            <div>
              <p>{text.panelNote}</p>
              <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                {text.panelLink}
              </a>
            </div>
            <Panda />
          </div>
        </div>
      </div>
      <ul className="hero-facts">
        {text.facts.map((fact) => (
          <li key={fact}>
            <Icon name="check" />
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}
