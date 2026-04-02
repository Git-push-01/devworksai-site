import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import FocusAreas from './sections/FocusAreas';
import Capabilities from './sections/Capabilities';
import Work from './sections/Work';
import About from './sections/About';
import Testimonial from './sections/Testimonial';
import ContactBanner from './sections/ContactBanner';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FocusAreas />
        <Capabilities />
        <Work />
        <About />
        <Testimonial />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
