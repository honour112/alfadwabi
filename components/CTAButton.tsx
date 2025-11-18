import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';

const CTAButton: React.FC = () => {
  const [href, setHref] = useState('/contact');

  useEffect(() => {
    // On small screens prefer direct WhatsApp chat, otherwise go to contact page
    const update = () => {
      if (window.innerWidth <= 640) {
        setHref('https://wa.me/27000000000');
      } else {
        setHref('/contact');
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label="Get a quote or contact us"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-bright-yellow text-black font-semibold px-4 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="hidden sm:inline">Get a Quote</span>
    </a>
  );
};

export default CTAButton;
