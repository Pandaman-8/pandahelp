import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import Contact, { Footer } from './components/Contact';
import { copy } from './content/ru';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
