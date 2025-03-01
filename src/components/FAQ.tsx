import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a hardware wallet and why do I need one?",
    answer: "A hardware wallet is a physical device designed to securely store the private keys to your cryptocurrency and digital assets offline. Unlike software wallets or exchange accounts, hardware wallets keep your private keys isolated from internet-connected devices, protecting them from online threats such as hacking, phishing, and malware. If you own any significant amount of cryptocurrency, a hardware wallet is essential for long-term security."
  },
  {
    question: "How does Trezor compare to other hardware wallets?",
    answer: "Trezor stands out with its combination of security, ease of use, and transparency. As the world's first hardware wallet, Trezor has pioneered many security features now considered industry standard. Unlike competitors, Trezor is fully open-source, allowing security researchers to verify its code. It also offers a more intuitive user interface, supports a wider range of cryptocurrencies, and provides regular firmware updates to maintain the highest security standards."
  },
  {
    question: "What happens if I lose my Trezor device?",
    answer: "If you lose your Trezor device, your funds remain safe as long as no one has access to both your device and PIN. You can recover all your assets by purchasing a new Trezor (or any compatible wallet) and using your recovery seed phrase that you wrote down during the initial setup. This 12 or 24-word recovery seed allows you to restore your wallet exactly as it was, including all accounts and transaction history."
  },
  {
    question: "Can I use Trezor with my smartphone?",
    answer: "Yes, Trezor is compatible with both Android and iOS devices. For Android, you can connect your Trezor directly using an OTG cable. For iOS devices, you'll need to use the Trezor web interface through a compatible browser. The Trezor Suite mobile app also provides a convenient way to manage your assets on the go, though some advanced features may require a desktop connection."
  },
  {
    question: "How many cryptocurrencies does Trezor support?",
    answer: "Trezor supports thousands of cryptocurrencies and tokens. This includes major cryptocurrencies like Bitcoin, Ethereum, Litecoin, and Ripple, as well as all ERC-20 tokens and assets on multiple blockchains. The list of supported cryptocurrencies is constantly expanding with regular firmware updates, ensuring compatibility with the evolving digital asset ecosystem."
  },
  {
    question: "Is it difficult to set up a Trezor device?",
    answer: "Not at all. Trezor is designed with user-friendliness in mind. The setup process is straightforward and guided by the Trezor Suite application, which walks you through each step. The entire process typically takes less than 10 minutes, even for beginners. Our comprehensive setup guide at Trèzor.io/start provides additional assistance with detailed instructions and visual aids."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Frequently Asked
            </span> Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 delay-200 transform translate-y-8">
            Find answers to common questions about Trezor setup, security features, and usage.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-700 rounded-xl overflow-hidden animate-on-scroll opacity-0 transition-all duration-1000 transform translate-y-8"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                className="w-full text-left p-6 bg-gray-800/50 hover:bg-gray-800/80 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-cyan-400" /> : 
                  <ChevronDown className="h-5 w-5 text-cyan-400" />
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 text-gray-300 border-t border-gray-700 bg-gray-800/30">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0 transition-all duration-1000 delay-1000 transform translate-y-8">
          <p className="text-gray-300 mb-6">Still have questions? We're here to help.</p>
          <a 
            href="#get-started" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;