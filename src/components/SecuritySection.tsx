import React from 'react';

const securityFeatures = [
  {
    title: "Offline Storage",
    description: "Your private keys never leave your device, keeping them safe from online threats and hackers."
  },
  {
    title: "Physical Protection",
    description: "Tamper-resistant hardware design prevents physical attacks and unauthorized access to your device."
  },
  {
    title: "PIN Protection",
    description: "Multiple layers of PIN protection with progressive time delays to prevent brute force attacks."
  },
  {
    title: "Recovery Seed Backup",
    description: "24-word recovery seed allows you to restore your wallet even if your device is lost or damaged."
  },
  {
    title: "Open-Source Firmware",
    description: "Transparent, auditable code ensures no hidden backdoors or security vulnerabilities."
  },
  {
    title: "Advanced Encryption",
    description: "Military-grade encryption protects your assets with the highest security standards available."
  }
];

const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Uncompromising
            </span> Security
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-200 transform translate-y-8">
            Discover the advanced security features that make Trezor the most trusted hardware wallet for protecting digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 animate-on-scroll opacity-0 transition-all duration-1000 delay-500 transform translate-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">Why Security Matters in the Digital Age</h3>
              <p className="text-gray-300 mb-4">
                In today's interconnected world, digital assets face unprecedented threats from sophisticated hackers and malicious actors. Traditional online wallets and exchanges remain vulnerable to breaches, putting your investments at risk.
              </p>
              <p className="text-gray-300">
                Trezor's hardware wallet provides the ultimate security solution by keeping your private keys offline and protected by multiple layers of security. With Trezor, you maintain complete control over your digital assets while ensuring they remain inaccessible to unauthorized parties.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300">Protection against online threats and phishing attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300">Immunity to computer malware and keyloggers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-gray-300">Defense against physical tampering and unauthorized access</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-75"></div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                    alt="Digital Security" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;