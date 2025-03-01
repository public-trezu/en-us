import React from 'react';
import { Shield, Lock, Cpu, Zap } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-10 w-10 text-cyan-400" />,
    title: "Military-Grade Security",
    description: "Benefit from advanced cryptographic security that keeps your digital assets safe from online threats and physical tampering."
  },
  {
    icon: <Lock className="h-10 w-10 text-cyan-400" />,
    title: "Complete Asset Control",
    description: "Maintain full ownership of your private keys, ensuring you have complete control over your digital assets at all times."
  },
  {
    icon: <Cpu className="h-10 w-10 text-cyan-400" />,
    title: "Intuitive Interface",
    description: "Navigate through a user-friendly interface designed for both beginners and experienced users in the cryptocurrency space."
  },
  {
    icon: <Zap className="h-10 w-10 text-cyan-400" />,
    title: "Multi-Currency Support",
    description: "Store and manage a wide range of cryptocurrencies and tokens all in one secure hardware wallet solution."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Next-Generation
            </span> Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-200 transform translate-y-8">
            Discover why Trèzor is the leading choice for securing digital assets in the evolving landscape of cryptocurrency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="bg-gray-900/80 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll opacity-0 transition-all duration-1000 delay-1000 transform translate-y-8">
          <a 
            href="#setup-guide" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Explore Setup Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;