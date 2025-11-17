import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const LegalPage: React.FC = () => {
    return (
        <div className="bg-deep-black text-soft-gray pt-24 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Information</h1>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="bg-charcoal-gray p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-bright-yellow mb-4">Privacy Policy</h2>
                        <p className="leading-relaxed">
                            We respect your privacy and comply with POPIA regulations. Your data is used only for communication and project-related processing.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="bg-charcoal-gray p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-bright-yellow mb-4">Terms & Conditions</h2>
                        <p className="leading-relaxed">
                            All quotations, services, and contractual engagements follow industry standards and comply with South African construction regulations.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default LegalPage;
