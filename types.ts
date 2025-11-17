
export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    imageUrl: string; // for service cards
    heroImageUrl: string; // for service detail page hero
    detail: {
        pageTitle: string;
        overview: string;
        workIncludes: string[];
        benefits: string[];
        ctaButton: string;
    };
}

export interface Project {
    id: number;
    title: string;
    category: 'Residential' | 'Commercial' | 'Civil Works' | 'Renovations' | 'Manufacturing';
    imageUrl: string;
}