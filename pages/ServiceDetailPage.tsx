
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon } from '../components/icons';
import { servicesData } from './ServicesPage';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? servicesData.find(s => s.slug === slug) : null;

    if (!service) {
        return <div className="text-center py-40">Service not found.</div>;
    }

    return (
        <div className="bg-deep-black text-soft-gray">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${service.heroImageUrl}')`, filter: 'brightness(0.4)' }}></div>
                <div className="relative z-10 px-6">
                    <AnimatedSection>
                        <h1 className="text-4xl md:text-5xl font-bold text-soft-gray">{service.detail.pageTitle}</h1>
                    </AnimatedSection>
                </div>
            </section>
            
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <h2 className="text-3xl font-bold mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed mb-10">{service.detail.overview}</p>
                        </AnimatedSection>

                        <AnimatedSection>
                             <h3 className="text-2xl font-bold text-bright-yellow mb-6">Our Work Includes:</h3>
                             <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                {service.detail.workIncludes.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircleIcon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-1">
                        <AnimatedSection>
                            <div className="bg-charcoal-gray p-8 rounded-lg sticky top-28">
                                <h3 className="text-2xl font-bold text-bright-yellow mb-6">Benefits</h3>
                                <ul className="space-y-4 mb-8">
                                    {service.detail.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <CheckCircleIcon className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="w-full text-center bg-bright-yellow text-deep-black font-bold py-3 px-8 rounded-md hover:bg-gold transition-all duration-300 block">
                                    {service.detail.ctaButton}
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;