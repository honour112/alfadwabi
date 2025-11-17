
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuIcon, XIcon, ChevronDownIcon } from './icons';
import { servicesData } from '../pages/ServicesPage';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = 'text-bright-yellow';
  const inactiveLinkClass = 'text-soft-gray hover:text-bright-yellow transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-soft-gray">
          ALFDWABI
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium flex items-center`}
                  >
                    {link.label}
                    <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-charcoal-gray rounded-md shadow-lg py-2 transition-all duration-300 ease-in-out ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                    {servicesData.map(service => (
                      <NavLink
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className={({ isActive }) => `block w-full text-left px-4 py-2 text-sm ${isActive ? activeLinkClass : inactiveLinkClass}`}
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} font-medium`}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <XIcon className="w-6 h-6 text-soft-gray" /> : <MenuIcon className="w-6 h-6 text-soft-gray" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-charcoal-gray absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => {
              if (link.label === 'Services') {
                return (
                  <React.Fragment key={link.path}>
                    <NavLink
                      to={link.path}
                      end
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} text-lg`}
                    >
                      {link.label}
                    </NavLink>
                    <div className="flex flex-col items-center space-y-3 pt-2 pl-4 border-l-2 border-gold">
                      {servicesData.map(service => (
                        <NavLink
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => `text-sm ${isActive ? 'text-bright-yellow' : 'text-soft-gray/80 hover:text-bright-yellow'}`}
                        >
                          {service.title}
                        </NavLink>
                      ))}
                    </div>
                  </React.Fragment>
                );
              }
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} text-lg`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;