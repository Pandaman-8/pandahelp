import { contacts, copy, formatPrice, priceGroups } from '../content/ru';
import { Icon, SectionHeading } from './UI';
function PriceRows({ rows }) {
  return (
    <dl className="price-list">
      {rows.map(([label, value]) => (
        <div className="price-row" key={label}>
          <dt>{label}</dt>
          <dd>{formatPrice(value)}</dd>
        </div>
      ))}
    </dl>
  );
}
export default function Pricing() {
  const text = copy.prices;
  return (
    <section className="section container pricing" id="prices" tabIndex="-1">
      <SectionHeading eyebrow={text.eyebrow} title={text.title} description={text.intro} />
      <div className="free-assessment">
        <span>
          <Icon name="check" />
          {text.free}
        </span>
        <strong>{text.freePrice}</strong>
      </div>
      <div className="pricing-grid">
        {priceGroups.map((group, index) => (
          <div className="price-group" key={group.name}>
            <div className="price-group-heading">
              <Icon name={group.icon} />
              <div>
                <h3>{group.name}</h3>
                <p>{group.label}</p>
              </div>
            </div>
            <PriceRows rows={group.rows} />
            <details className="extra-prices">
              <summary>
                {text.additional}
                <Icon name="plus" />
              </summary>
              <PriceRows rows={group.extra} />
            </details>
            <p className="price-note">{index === 0 ? text.studyNote : text.remoteNote}</p>
          </div>
        ))}
      </div>
      <div className="price-cta">
        <a
          className="button button-dark"
          href={contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.cta}
          <Icon name="northeast" />
        </a>
      </div>
      {copy.offer.enabled && (
        <aside className="launch-offer">
          <span className="offer-badge">{copy.offer.badge}</span>
          <div>
            <h3>{copy.offer.title}</h3>
            <p>{copy.offer.text}</p>
          </div>
          <span className="offer-number" aria-hidden="true">
            −20%
          </span>
        </aside>
      )}
    </section>
  );
}
