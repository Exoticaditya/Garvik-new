// Pricing data
export interface PricingPlan {
    id: string;
    name: string;
    tagline: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
    popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter",
        tagline: "Perfect for startups",
        price: "₹49,999",
        period: "per project",
        description: "Essential branding and marketing services to launch your brand with impact.",
        features: [
            "Brand Identity Design",
            "Logo & Visual Guidelines",
            "Social Media Setup (3 platforms)",
            "Basic Website Design",
            "1 Month Social Media Management",
            "5 Content Pieces",
            "Email Support",
        ],
        highlighted: false,
        cta: "Get Started",
    },
    {
        id: "professional",
        name: "Professional",
        tagline: "For growing businesses",
        price: "₹1,49,999",
        period: "per project",
        description: "Comprehensive marketing solutions for brands ready to scale and dominate.",
        features: [
            "Everything in Starter",
            "Complete Brand Strategy",
            "Custom Website Development",
            "Ad Film Production (30 sec)",
            "3 Months Social Media Management",
            "20 Content Pieces/Month",
            "SEO Optimization",
            "Performance Analytics",
            "Priority Support",
        ],
        highlighted: true,
        cta: "Most Popular",
        popular: true,
    },
    {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Full-scale transformation",
        price: "Custom",
        period: "tailored pricing",
        description: "Premium end-to-end creative solutions for established brands seeking excellence.",
        features: [
            "Everything in Professional",
            "Cinematic Ad Film Production",
            "360° Marketing Campaign",
            "Influencer Marketing",
            "Events & Activations",
            "12 Months Partnership",
            "Dedicated Account Manager",
            "24/7 Premium Support",
            "Quarterly Strategy Reviews",
        ],
        highlighted: false,
        cta: "Contact Us",
    },
];

export interface AddonService {
    id: string;
    name: string;
    price: string;
    description: string;
    icon: string;
}

export const addonServices: AddonService[] = [
    {
        id: "photoshoot",
        name: "Product Photography",
        price: "From ₹15,000",
        description: "Professional product photography with styled shots",
        icon: "fa-camera",
    },
    {
        id: "video",
        name: "Video Production",
        price: "From ₹50,000",
        description: "High-quality promotional and explainer videos",
        icon: "fa-video",
    },
    {
        id: "influencer",
        name: "Influencer Campaign",
        price: "From ₹25,000",
        description: "Strategic influencer collaborations and management",
        icon: "fa-users",
    },
    {
        id: "seo",
        name: "SEO Optimization",
        price: "From ₹20,000",
        description: "Search engine optimization for better visibility",
        icon: "fa-search",
    },
    {
        id: "email",
        name: "Email Marketing",
        price: "From ₹10,000",
        description: "Email campaign design and automation",
        icon: "fa-envelope",
    },
    {
        id: "analytics",
        name: "Analytics & Reporting",
        price: "From ₹8,000",
        description: "Detailed performance analytics and insights",
        icon: "fa-chart-line",
    },
];
