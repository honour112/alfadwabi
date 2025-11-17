
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import type { Service } from '../types';

export const servicesData: Service[] = [
    {
        slug: 'construction-civil-works',
        title: 'Construction & Civil Works',
        shortDescription: 'NHBRC-approved housing, commercial builds, foundations, concrete works, paving, stormwater, drainage, brickwork, roofing, and finishing.',
        imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.12.58_d5cfdc3e.jpg'),
        heroImageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.12.59_1bbc37af.jpg'),
        detail: {
            pageTitle: 'Reliable, Compliant, Quality-Driven Construction',
            overview: 'We deliver structural excellence using modern engineering, SABS-aligned quality systems, and NHBRC-compliant building methods.',
            workIncludes: [
                'Residential & commercial building', 'NHBRC-approved housing', 'Bricklaying, plastering & finishing',
                'Roofing & structural carpentry', 'Concrete works, paving & drainage', 'Civil engineering support'
            ],
            benefits: ['Strong technical excellence', 'Durable, safe structures', 'Transparent supervision', 'Experienced leadership'],
            ctaButton: 'Request a Quote'
        }
    },
    {
        slug: 'project-management',
        title: 'Project Management',
        shortDescription: 'Full lifecycle planning, quality monitoring, safety compliance, procurement, and subcontractor coordination.',
        imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.12.59_4c8cdfb3.jpg'),
        heroImageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.12.59_c144ab6d.jpg'),
        detail: {
            pageTitle: 'Professional, Compliant Project Oversight',
            overview: 'Our project management service ensures every project is delivered safely, on time, and according to industry standards.',
            workIncludes: ['Planning & scheduling', 'Risk assessments', 'Safety & compliance', 'Subcontractor administration', 'Quality management'],
            benefits: ['On-time delivery', 'Budget adherence', 'Reduced risk', 'Clear communication'],
            ctaButton: 'Book Consultation'
        }
    },
    {
        slug: 'cleaning-materials-manufacturing',
        title: 'Cleaning Materials Manufacturing',
        shortDescription: 'Production and supply of industrial detergents, household cleaners, disinfectants, and bulk orders.',
        imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.00_144e18c4.jpg'),
        heroImageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.01_1042467f.jpg'),
        detail: {
            pageTitle: 'High-Quality Industrial & Household Cleaning Products',
            overview: 'We manufacture and supply detergents, disinfectants, and cleaning products trusted by homes, businesses, and government buyers.',
            workIncludes: ['Industrial detergents', 'Dishwashing liquid', 'Toilet cleaners', 'Bleach & disinfectants', 'Bulk supply options'],
            benefits: ['Cost-effective pricing', 'Consistent quality', 'Reliable supply chain', 'Custom formulations'],
            ctaButton: 'Order Now'
        }
    },
    {
        slug: 'maintenance-renovations',
        title: 'Maintenance & Renovations',
        shortDescription: 'Repairs, electrical and plumbing support, painting, waterproofing, and building upgrades.',
        imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.01_237f622a.jpg'),
        heroImageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.12.58_82cd4314.jpg'),
        detail: {
            pageTitle: 'Reliable Building Repairs & Upgrades',
            overview: 'We keep buildings functional, safe, and attractive through professional maintenance and upgrade solutions.',
            workIncludes: ['Painting & waterproofing', 'Electrical & plumbing support', 'Structural repairs', 'Facility upgrades'],
            benefits: ['Increased property value', 'Proactive problem solving', 'Minimal disruption', 'Licensed professionals'],
            ctaButton: 'Get Maintenance Quote'
        }
    },
];

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-deep-black text-soft-gray pt-24 pb-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                        We offer end-to-end construction and management solutions delivered with precision, compliance, and quality.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {servicesData.map((service, index) => (
                        <AnimatedSection key={service.slug}>
                            <div className="bg-charcoal-gray rounded-lg overflow-hidden shadow-xl h-full flex flex-col group">
                                <img src={service.imageUrl} alt={service.title} className="w-full h-64 object-cover"/>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-bold text-bright-yellow mb-4">{service.title}</h2>
                                    <p className="text-soft-gray/90 mb-6 flex-grow">{service.shortDescription}</p>
                                    <Link 
                                        to={`/services/${service.slug}`}
                                        className="mt-auto self-start bg-gold text-deep-black font-bold py-2 px-6 rounded-md group-hover:bg-bright-yellow transition-all duration-300"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;