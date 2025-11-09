import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';
import { Countdown } from './components/Countdown';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { RocketScroll } from './components/RocketScroll';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Countdown />
      <Team />
      <ContactForm />
      <Footer />
      <BackToTop />
      <RocketScroll />
    </div>
  );
}
