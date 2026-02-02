// Case Studies data
export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client: string;
    industry: string;
    services: string[];
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
        description: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    images: {
        hero: string;
        gallery: string[];
    };
    duration: string;
    year: string;
    featured: boolean;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "1",
        slug: "techstart-brand-transformation",
        title: "TechStart Brand Transformation",
        client: "TechStart India",
        industry: "Technology",
        services: ["Brand Identity", "Digital Marketing", "Video Production"],
        challenge: "TechStart India, a promising B2B SaaS startup, struggled with brand recognition in a crowded market. Their existing brand identity was generic and failed to communicate their innovative solutions.",
        solution: "We developed a complete brand overhaul including a new visual identity, cinematic brand video, and comprehensive digital marketing strategy focused on thought leadership and targeted LinkedIn campaigns.",
        results: [
            { metric: "Brand Recognition", value: "300%", description: "Increase in brand awareness" },
            { metric: "Lead Generation", value: "250%", description: "Increase in qualified leads" },
            { metric: "Social Following", value: "50K+", description: "New followers in 6 months" },
            { metric: "Revenue Impact", value: "₹5Cr+", description: "Attributed to rebranding" }
        ],
        testimonial: {
            quote: "Garvik India transformed our brand identity completely. Their cinematic approach to advertising helped us connect with our audience in ways we never imagined.",
            author: "Rajesh Kumar",
            role: "CEO, TechStart India"
        },
        images: {
            hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600",
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
                "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600"
            ]
        },
        duration: "4 months",
        year: "2025",
        featured: true
    },
    {
        id: "2",
        slug: "fashionhub-social-explosion",
        title: "Fashion Hub Social Media Explosion",
        client: "Fashion Hub",
        industry: "Fashion & Retail",
        services: ["Social Media Management", "Influencer Marketing", "Content Creation"],
        challenge: "Fashion Hub had strong products but minimal digital presence. With only 10K followers and low engagement, they were invisible to their target demographic of fashion-conscious millennials.",
        solution: "We implemented a comprehensive social media strategy including influencer partnerships, user-generated content campaigns, trend-jacking content, and Instagram Reels/TikTok short-form video series.",
        results: [
            { metric: "Followers", value: "500K+", description: "Grown from 10K in 12 months" },
            { metric: "Engagement Rate", value: "8.5%", description: "Industry average is 1.5%" },
            { metric: "Website Traffic", value: "400%", description: "Increase from social" },
            { metric: "E-commerce Sales", value: "₹2Cr+", description: "Social-attributed revenue" }
        ],
        testimonial: {
            quote: "Working with Garvik was a game-changer for our social media presence. Their team's creativity and strategic thinking helped us grow from 10K to 500K followers in just one year.",
            author: "Priya Sharma",
            role: "Marketing Director, Fashion Hub"
        },
        images: {
            hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600"
            ]
        },
        duration: "12 months",
        year: "2025",
        featured: true
    },
    {
        id: "3",
        slug: "greenearth-launch-campaign",
        title: "GreenEarth Foods Product Launch",
        client: "GreenEarth Foods",
        industry: "Food & Beverage",
        services: ["Ad Film Production", "Launch Campaign", "Print Advertising"],
        challenge: "GreenEarth Foods was launching a premium organic food line but needed to differentiate from competitors and justify premium pricing in a price-sensitive market.",
        solution: "We created a cinematic 90-second brand film showcasing farm-to-table journey, supported by print campaigns and strategic OOH advertising in premium urban locations.",
        results: [
            { metric: "Sales Increase", value: "150%", description: "First quarter post-launch" },
            { metric: "Ad Recall", value: "72%", description: "Target audience recall rate" },
            { metric: "Market Share", value: "15%", description: "In premium organic segment" },
            { metric: "ROI", value: "4.5x", description: "On marketing investment" }
        ],
        testimonial: {
            quote: "The ad film Garvik created for our product launch was nothing short of cinema quality. It captured the essence of our brand perfectly and drove our sales up by 150%.",
            author: "Amit Patel",
            role: "Founder, GreenEarth Foods"
        },
        images: {
            hero: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600",
                "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600",
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
            ]
        },
        duration: "3 months",
        year: "2024",
        featured: true
    },
    {
        id: "4",
        slug: "luxuryspaces-premium-rebrand",
        title: "LuxurySpaces Premium Rebrand",
        client: "LuxurySpaces",
        industry: "Real Estate",
        services: ["Brand Identity", "Photography", "Website Design"],
        challenge: "LuxurySpaces, a high-end real estate developer, needed a brand refresh to match their move into ultra-luxury segment, targeting HNI buyers.",
        solution: "We developed an ultra-premium brand identity with bespoke typography, architectural photography, and an immersive website experience with 3D property tours.",
        results: [
            { metric: "Inquiries", value: "200%", description: "Increase in qualified leads" },
            { metric: "Avg Deal Size", value: "35%", description: "Increase in transaction value" },
            { metric: "Brand Perception", value: "Top 3", description: "In luxury segment surveys" },
            { metric: "Website Engagement", value: "5 min", description: "Average session duration" }
        ],
        images: {
            hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
            gallery: [
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
            ]
        },
        duration: "5 months",
        year: "2024",
        featured: false
    }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find(study => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
    return caseStudies.filter(study => study.featured);
}
