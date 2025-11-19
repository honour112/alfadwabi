import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MailIcon, MapPinIcon, WhatsAppIcon } from '../components/icons';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-deep-black text-soft-gray pt-24 pb-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Build Something Great Together</h1>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                        Reach out for quotes, consultations, partnerships, or project inquiries.
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <AnimatedSection>
                        <form className="bg-charcoal-gray p-8 rounded-lg shadow-xl space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-deep-black border border-soft-gray/30 rounded-md p-3 focus:ring-bright-yellow focus:border-bright-yellow" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-deep-black border border-soft-gray/30 rounded-md p-3 focus:ring-bright-yellow focus:border-bright-yellow" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                                <input type="tel" id="phone" name="phone" className="w-full bg-deep-black border border-soft-gray/30 rounded-md p-3 focus:ring-bright-yellow focus:border-bright-yellow" />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                                <select id="service" name="service" className="w-full bg-deep-black border border-soft-gray/30 rounded-md p-3 focus:ring-bright-yellow focus:border-bright-yellow">
                                    <option>Construction & Civil Works</option>
                                    <option>Project Management</option>
                                    <option>Cleaning Materials</option>
                                    <option>Maintenance & Renovations</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} className="w-full bg-deep-black border border-soft-gray/30 rounded-md p-3 focus:ring-bright-yellow focus:border-bright-yellow"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-bright-yellow text-deep-black font-bold py-3 px-8 rounded-md hover:bg-gold transition-all duration-300">
                                    Submit Inquiry
                                </button>
                            </div>
                        </form>
                    </AnimatedSection>
                    
                    <AnimatedSection>
                        <div className="space-y-8 bg-charcoal-gray p-8 rounded-lg shadow-xl">
                            <h2 className="text-2xl font-bold text-bright-yellow">Contact Info</h2>
                            <div className="flex items-start space-x-4">
                                <MailIcon className="w-6 h-6 text-gold mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:alfdwabi@outlook.com" className="text-soft-gray/90 hover:text-bright-yellow transition-colors">alfdwabi@outlook.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPinIcon className="w-6 h-6 text-gold mt-1" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-soft-gray/90">Bosplaas, Hammanskraal, Pretoria, Gauteng</p>
                                </div>
                            </div>
                            <div className="border-t border-soft-gray/20 pt-8">
                                <h3 className="text-lg font-semibold mb-4 text-center">Chat with us instantly on WhatsApp.</h3>
                                <a href="https://wa.me/27671268673" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition-all duration-300">
                                    <WhatsAppIcon className="w-6 h-6 mr-3" />
                                    Open WhatsApp
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection className="mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Find Us</h2>
                    <div className="bg-charcoal-gray rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28819.8370481283!2d28.32488883955078!3d-25.385312500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfde8f52605f6d%3A0xf60395b05615a5a3!2sBosplaas%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1716305414169!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location of ALFDWABI CONSTRUCTION"
                            className="w-full"
                        ></iframe>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ContactPage;