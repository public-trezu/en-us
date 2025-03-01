import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 animate-pulse">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
              <Shield className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Next-Gen Digital Asset Security</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-on-scroll opacity-0 transition-all duration-1000 delay-300 transform translate-y-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Secure Your Digital Future
            </span>
            <br />
            <span>With Trèzor Hardware Wallet</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-500 transform translate-y-8">
            The ultimate guide to setting up your Trezor device, ensuring maximum security for your digital assets in an increasingly virtual world.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-on-scroll opacity-0 transition-all duration-1000 delay-700 transform translate-y-8">
            <a 
              href="#setup-guide" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Start Setup Guide
            </a>
            <a 
              href="#features" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-medium text-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Features
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#features" className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;