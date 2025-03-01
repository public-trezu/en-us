import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <Shield className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight">Trèzor.io</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Features', 'Setup Guide', 'Security', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {item}
            </a>
          ))}
          <a 
            href="#get-started" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm uppercase tracking-wider font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </nav>
        
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
        menuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {['Home', 'Features', 'Setup Guide', 'Security', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors text-lg py-2 border-b border-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#get-started" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-md text-center font-medium mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;