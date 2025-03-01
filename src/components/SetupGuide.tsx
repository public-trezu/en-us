import React from 'react';

const steps = [
  {
    number: "01",
    title: "Unbox Your Device",
    description: "Carefully unpack your Trezor device and verify all components are included. Check for any signs of tampering with the security seal.",
    image: "https://images.unsplash.com/photo-1563770660941-10a63a9ed33d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    number: "02",
    title: "Connect to Computer",
    description: "Use the provided USB cable to connect your Trezor device to your computer. Ensure you're using a secure computer free from malware.",
    image: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    number: "03",
    title: "Install Trezor Suite",
    description: "Download and install the official Trezor Suite application from trezor.io/start. Verify the authenticity of the download.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    number: "04",
    title: "Create New Wallet",
    description: "Follow the on-screen instructions to create a new wallet. Write down your recovery seed on the provided recovery card.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    number: "05",
    title: "Secure Your Recovery Seed",
    description: "Store your recovery seed in a secure location, preferably in a fireproof and waterproof container. Never store it digitally.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  },
  {
    number: "06",
    title: "Set PIN Protection",
    description: "Create a strong PIN code to protect your device from unauthorized access. Avoid using easily guessable combinations.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
  }
];

const SetupGuide: React.FC = () => {
  return (
    <section id="setup-guide" className="py-20 md:py-32 bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Step-by-Step
            </span> Setup Guide
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-200 transform translate-y-8">
            Follow our comprehensive guide to set up your Trezor device securely and start protecting your digital assets in minutes.
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-75"></div>
                  <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-cyan-500">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center animate-on-scroll opacity-0 transition-all duration-1000 delay-1000 transform translate-y-8">
          <a 
            href="#get-started" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;