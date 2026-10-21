import { useEffect } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useReveal';

// Editorial Components for House of Blush by Sargam
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SignatureSection from './components/SignatureSection';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Booking from './components/Booking';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Activate scroll animations
  useScrollReveal();

  // Smooth scroll handler for anchor navigation
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const section = document.querySelector(href);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app" id="app-root">
      {/* Accessibility Skip Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <SignatureSection />
        <Gallery />
        <WhyUs />
        <Booking />
        <Instagram />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
