import React, { useEffect, useRef } from 'react';
import { Shield, Lock, Cpu, Zap, ChevronDown, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SetupGuide from './components/SetupGuide';
import SecuritySection from './components/SecuritySection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add intersection observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="relative z-10">
        <Hero />
        <Features />
        <SetupGuide />
        <SecuritySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;