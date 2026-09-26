import { copy } from '../content/ru';
import { SectionHeading } from './UI';
export default function Process() {
  const text = copy.process;
  return (
    <section className="process section" id="process" tabIndex="-1">
      <div className="container">
        <SectionHeading eyebrow={text.eyebrow} title={text.title} description={text.intro} />
        <ol className="steps">
          {text.steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
