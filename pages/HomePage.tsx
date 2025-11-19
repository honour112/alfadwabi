import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from '../components/icons';

const whyChooseUsItems = [
    "15+ Years Industry Experience", "NHBRC & CIDB Certified", "Safety-First Operations",
    "High-Quality Workmanship", "Professional Indemnity Insurance", "On-Time Project Delivery",
    "Skilled & Qualified Leadership", "Community Empowerment Focus"
];

const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Major Projects Completed" },
    { value: "100%", label: "Safety Compliance" },
    { value: "Fully", label: "Registered & Insured" }
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-deep-black text-soft-gray">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${encodeURI('/WhatsApp Image 2025-11-17 at 15.13.06_ee46bbcf.jpg')}')`, filter: 'brightness(0.4)' }}></div>
        <div className="relative z-10 px-6">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Building South Africa’s Future—One Project at a Time</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white">Premium construction, civil works, project management, and innovative manufacturing solutions backed by 15+ years of industry experience.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-bright-yellow text-black font-bold py-3 px-8 rounded-md hover:bg-gold transition-all duration-300">Request a Quote</Link>
              <Link to="/services" className="bg-transparent border-2 border-bright-yellow text-bright-yellow font-bold py-3 px-8 rounded-md hover:bg-bright-yellow hover:text-black transition-all duration-300">Explore Our Services</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-charcoal-gray">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-bright-yellow mb-6">ALFDWABI CONSTRUCTION AND PROJECTS</h2>
            <p className="max-w-4xl mx-auto text-lg leading-relaxed">A NHBRC and CIDB-registered construction company delivering safe, high-quality, and compliant projects across South Africa. With 15+ years in civil works, building, project management, and manufacturing, we provide solutions that improve communities and empower local talent.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUsItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-bright-yellow flex-shrink-0 mt-1" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Highlighted Services */}
      <section className="py-20 bg-charcoal-gray">
        <div className="container mx-auto px-6 text-center">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Highlighted Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {['Construction & Civil Works', 'Project Management', 'Cleaning Materials Manufacturing', 'Maintenance & Renovations'].map((service, i) => (
                    <div key={i} className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-bright-yellow mb-4">{service}</h3>
                    </div>
                  ))}
                </div>
                <Link to="/services" className="bg-bright-yellow text-black font-bold py-3 px-8 rounded-md hover:bg-gold transition-all duration-300">View All Services</Link>
            </AnimatedSection>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `url('${encodeURI('/WhatsApp Image 2025-11-17 at 15.13.06_ef037f63.jpg')}')` }}>
          <div className="bg-deep-black/70 py-20">
              <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                      {stats.map((stat, i) => (
                          <AnimatedSection key={i}>
                              <div className="text-white">
                                  <p className="text-5xl font-bold text-bright-yellow">{stat.value}</p>
                                  <p className="text-xl mt-2">{stat.label}</p>
                              </div>
                          </AnimatedSection>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[
                  encodeURI('/WhatsApp Image 2025-11-17 at 15.13.07_0d2b4972.jpg'),
                  encodeURI('/WhatsApp Image 2025-11-17 at 15.13.07_79c34cbb.jpg'),
                  encodeURI('/WhatsApp Image 2025-11-17 at 15.13.06_ef037f63.jpg')
                ].map((src, i) => (
                  <div key={i} className="group overflow-hidden rounded-lg shadow-lg">
                    <img src={src} alt={`Project ${i+1}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
            </div>
            <Link to="/projects" className="bg-gold text-deep-black font-bold py-3 px-8 rounded-md hover:bg-bright-yellow transition-all duration-300">See Full Portfolio</Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-charcoal-gray">
          <div className="container mx-auto px-6">
              <AnimatedSection>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div className="bg-deep-black p-8 rounded-lg shadow-lg">
                          <p className="italic mb-4">“Professional, compliant, and reliable. Their safety discipline is unmatched.”</p>
                          <p className="font-bold text-gold">- Satisfied Client A</p>
                      </div>
                      <div className="bg-deep-black p-8 rounded-lg shadow-lg">
                          <p className="italic mb-4">“Delivered ahead of schedule with high-quality finishes.”</p>
                          <p className="font-bold text-gold">- Satisfied Client B</p>
                      </div>
                  </div>
              </AnimatedSection>
          </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-bright-yellow text-deep-black py-8">
          <div className="container mx-auto px-6">
              <AnimatedSection>
                  <div className="flex flex-wrap justify-around items-center gap-8">
                      <a href="https://wa.me/27671268673" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 font-bold hover:text-charcoal-gray transition-colors">
                          <WhatsAppIcon className="w-8 h-8"/> 
                          <span>WhatsApp</span>
                      </a>
                      <a href="mailto:alfdwabi@outlook.com" className="flex items-center space-x-2 font-bold hover:text-charcoal-gray transition-colors">
                          <MailIcon className="w-8 h-8"/>
                          <span>Email</span>
                      </a>
                       <a href="tel:+27671268673" className="flex items-center space-x-2 font-bold hover:text-charcoal-gray transition-colors">
                          <PhoneIcon className="w-8 h-8"/> 
                          <span>Phone</span>
                      </a>
                       <Link to="/contact" className="flex items-center space-x-2 font-bold hover:text-charcoal-gray transition-colors">
                          <MapPinIcon className="w-8 h-8"/> 
                          <span>Location</span>
                      </Link>
                  </div>
              </AnimatedSection>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
