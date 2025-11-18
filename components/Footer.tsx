
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon, MailIcon, MapPinIcon } from './icons'; // Assuming you have these icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-gray text-soft-gray/80 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={encodeURI('/logo.jpg')} alt="ALFDWABI logo" className="w-12 h-12 mr-3 object-contain" />
              <h3 className="text-xl font-bold text-soft-gray">ALFDWABI</h3>
            </div>
            <p className="text-sm">
              Committed to Quality, Safety, and Community Transformation.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-soft-gray/80 hover:text-bright-yellow transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
              <a href="mailto:alfdwabi@outlook.com" className="text-soft-gray/80 hover:text-bright-yellow transition-colors"><MailIcon className="w-6 h-6" /></a>
              <a href="#" className="text-soft-gray/80 hover:text-bright-yellow transition-colors"><MapPinIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-soft-gray mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-bright-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-bright-yellow transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-bright-yellow transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-bright-yellow transition-colors">Contact</Link></li>
              <li><Link to="/legal" className="hover:text-bright-yellow transition-colors">Legal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-soft-gray mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:alfdwabi@outlook.com" className="hover:text-bright-yellow transition-colors">alfdwabi@outlook.com</a></li>
              <li>Bosplaas, Hammanskraal, Pretoria, Gauteng</li>
            </ul>
          </div>
          
          {/* Registrations */}
          <div>
            <h4 className="font-semibold text-soft-gray mb-4">Registrations</h4>
            <ul className="space-y-2 text-sm">
              <li>Reg No: 2025/351660/07</li>
              <li>NHBRC Reg No: 4000020657</li>
              <li>CIDB Reg No: 10431162</li>
              <li>Insurance: OUTsurance</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-soft-gray/20 text-center text-sm">
          <p>&copy; 2025 ALFDWABI Construction and Projects (PTY) LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
