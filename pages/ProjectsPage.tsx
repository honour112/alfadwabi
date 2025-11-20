import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import type { Project } from '../types';

const allProjects: Project[] = [
    { id: 1, title: "Modern Residence", category: "Residential", imageUrl: encodeURI('/Modern.jpg') },
    { id: 2, title: "Corporate HQ", category: "Commercial", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.03_3c75bca1.jpg') },
    { id: 3, title: "Stormwater Drainage System", category: "Civil Works", imageUrl: encodeURI('https://gsmplumbing.com.au/wp-content/uploads/2021/08/Stormwater-Drainage-1.jpg') },
    { id: 4, title: "Apartment Block Upgrade", category: "Renovations", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.04_01e2eb5e.jpg') },
    { id: 5, title: "Detergent Production Line", category: "Manufacturing", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.04_9f2e0320.jpg') },
    { id: 6, title: "Luxury Villa", category: "Residential", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 16.36.07_2d66981f.jpg') },
    { id: 7, title: "Retail Center Paving", category: "Civil Works", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.05_6da003a5.jpg') },
    { id: 8, title: "Office Interior Remodel", category: "Renovations", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.05_74fdc6a8.jpg') },
    { id: 9, title: "Wall Project", category: "Residential", imageUrl: encodeURI('/WhatsApp Image 2025-11-17 at 15.13.02_1b74e606.jpg') },
];

const categories: (Project['category'] | 'All')[] = ['All', 'Residential', 'Commercial', 'Civil Works', 'Renovations', 'Manufacturing'];

const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<Project['category'] | 'All'>('All');

    const filteredProjects = filter === 'All' ? allProjects : allProjects.filter(p => p.category === filter);

    return (
        <div className="bg-deep-black text-soft-gray pt-24 pb-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Speaks for Itself</h1>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                        A growing portfolio of civil works, building construction, renovations, and industrial projects delivered with precision and compliance.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${filter === category ? 'bg-bright-yellow text-deep-black' : 'bg-charcoal-gray text-soft-gray hover:bg-gold hover:text-deep-black'}`}
                        >
                            {category}
                        </button>
                    ))}
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <AnimatedSection key={project.id}>
                           <div className="group bg-charcoal-gray rounded-lg overflow-hidden shadow-xl relative">
                               <img src={project.imageUrl} alt={project.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"/>
                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                               <div className="absolute bottom-0 left-0 p-6">
                                   <p className="text-gold text-sm font-semibold">{project.category}</p>
                                   <h3 className="text-xl font-bold text-soft-gray">{project.title}</h3>
                               </div>
                           </div>
                        </AnimatedSection>
                    ))}
                </div>
                
                 {filteredProjects.length === 0 && (
                    <AnimatedSection className="text-center py-16">
                        <p className="text-lg">No projects found in this category yet.</p>
                    </AnimatedSection>
                )}

                 <AnimatedSection className="text-center mt-16">
                    <p className="max-w-3xl mx-auto text-lg">
                        Each project reflects our commitment to safety, durability, and client satisfaction. Browse our gallery to explore completed works and ongoing developments.
                    </p>
                </AnimatedSection>
                      
        {/* Video Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Project Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full">
                <video
                  className="w-full h-auto rounded-lg shadow-lg"
                  controls
                  playsInline
                  preload="metadata"
                  poster={encodeURI('/WhatsApp Image 2025-11-17 at 15.13.02_1b74e606.jpg')}
                  aria-label="Project video 1"
                >
                  <source src={encodeURI('/VID-20251120-WA0000.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="w-full">
                <video
                  className="w-full h-auto rounded-lg shadow-lg"
                  controls
                  playsInline
                  preload="metadata"
                  poster={encodeURI('/Modern.jpg')}
                  aria-label="Project video 2"
                >
                  <source src={encodeURI('/WhatsApp Video 2025-11-19 at 22.30.41_377cb4e1.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

            </div>

        </div>
        
    );
};

export default ProjectsPage;
