
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircleIcon } from '../components/icons';

const coreValues = [
    { name: "Quality Excellence", description: "Structures built to last" },
    { name: "Safety First", description: "Zero-harm policy" },
    { name: "Accountability", description: "Transparent operations" },
    { name: "Innovation", description: "Modern techniques & technology" },
    { name: "Community Empowerment", description: "Local job creation" }
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-deep-black text-soft-gray pt-24 pb-20">
            <div className="container mx-auto px-6">
                
                <AnimatedSection className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
                    <p className="max-w-4xl mx-auto text-lg leading-relaxed">
                        <strong>ALFDWABI CONSTRUCTION AND PROJECTS (PTY) LTD</strong> is a Black-owned construction and project management company founded in 2025 by <strong>Alfred Tiisetso Ledwaba</strong>. Rooted in safety, compliance, and community upliftment, we bring modern engineering principles, skilled workmanship, and transparent project execution to every site.
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
                    <AnimatedSection>
                        <img src={encodeURI('/WhatsApp Image 2025-11-17 at 15.13.06_dcbe56a5.jpg')} alt="Construction site" className="rounded-lg shadow-2xl"/>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-bright-yellow mb-3">Our Vision</h2>
                                <p>To become a leading construction and project management company delivering safe, innovative, and sustainable infrastructure that transforms communities across South Africa.</p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-bright-yellow mb-3">Our Mission</h2>
                                <p>To provide cost-effective, compliant, and high-quality construction solutions through professional integrity, skilled workers, and a commitment to client satisfaction.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                
                <AnimatedSection className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {coreValues.map(value => (
                            <div key={value.name} className="bg-charcoal-gray p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                                <h3 className="text-xl font-bold text-bright-yellow mb-2">{value.name}</h3>
                                <p className="text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <div className="bg-charcoal-gray rounded-lg p-10 lg:p-16">
                    <div className="grid md:grid-cols-3 gap-12">
                                <AnimatedSection className="md:col-span-1 text-center md:text-left">
                                    <img src={encodeURI('/WhatsApp Image 2025-11-17 at 15.13.09_28e29438.jpg')} alt="Alfred Tiisetso Ledwaba" className="w-48 h-48 rounded-full mx-auto md:mx-0 mb-6 border-4 border-gold object-cover"/>
                            <h3 className="text-3xl font-bold">Alfred Tiisetso Ledwaba</h3>
                            <p className="text-gold mb-4">Founder</p>
                            <p className="text-sm">Diplomas in Structural Engineering, Building Construction Methodology, and Project Management. Experienced in QA, Safety, Civil Works, Site Management, and Compliance.</p>
                        </AnimatedSection>
                        <AnimatedSection className="md:col-span-2">
                             <h3 className="text-2xl font-bold text-bright-yellow mb-6">Professional Experience</h3>
                             <div className="space-y-6">
                                 <div>
                                     <h4 className="text-xl font-semibold">MSM Enterprise (2009–2010) – QA & Safety Officer</h4>
                                     <ul className="list-disc list-inside mt-2 text-soft-gray/80 pl-2">
                                         <li>Hoedspruit Stadium</li>
                                         <li>Giyani Bridges</li>
                                         <li>Mopani Worms Factory</li>
                                         <li>Giyani Roads</li>
                                         <li>Zebediela Mall</li>
                                     </ul>
                                 </div>
                                 <div>
                                     <h4 className="text-xl font-semibold">Tabor Group (2022–2024) – Site Manager</h4>
                                     <ul className="list-disc list-inside mt-2 text-soft-gray/80 pl-2">
                                         <li>Construction of 300 residential units, Highlands North, Johannesburg</li>
                                     </ul>
                                 </div>
                             </div>
                        </AnimatedSection>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
