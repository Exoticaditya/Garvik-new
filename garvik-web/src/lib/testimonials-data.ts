// Testimonials data
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
    projectType: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Rajesh Kumar",
        role: "CEO",
        company: "TechStart India",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        content: "Garvik India transformed our brand identity completely. Their cinematic approach to advertising helped us connect with our audience in ways we never imagined. Our brand recognition increased by 300% within 6 months.",
        rating: 5,
        projectType: "Brand Identity",
    },
    {
        id: "2",
        name: "Priya Sharma",
        role: "Marketing Director",
        company: "Fashion Hub",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
        content: "Working with Garvik was a game-changer for our social media presence. Their team's creativity and strategic thinking helped us grow from 10K to 500K followers in just one year. Absolutely phenomenal results!",
        rating: 5,
        projectType: "Social Media",
    },
    {
        id: "3",
        name: "Amit Patel",
        role: "Founder",
        company: "GreenEarth Foods",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        content: "The ad film Garvik created for our product launch was nothing short of cinema quality. It captured the essence of our brand perfectly and drove our sales up by 150%. They truly understand storytelling.",
        rating: 5,
        projectType: "Video Production",
    },
    {
        id: "4",
        name: "Neha Gupta",
        role: "CMO",
        company: "LuxurySpaces",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
        content: "Garvik's attention to detail and premium aesthetic aligned perfectly with our luxury brand. Their photography and branding work elevated our entire market positioning. Worth every rupee invested.",
        rating: 5,
        projectType: "Photography",
    },
    {
        id: "5",
        name: "Vikram Singh",
        role: "Managing Director",
        company: "AutoWorld",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
        content: "The digital campaign Garvik executed for our new vehicle launch was exceptional. Their data-driven approach combined with creative excellence delivered ROI that exceeded our expectations by 200%.",
        rating: 5,
        projectType: "Digital Marketing",
    },
    {
        id: "6",
        name: "Ananya Reddy",
        role: "Brand Manager",
        company: "SkinCare Plus",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
        content: "From concept to execution, Garvik delivered a complete brand overhaul that resonated with our target demographic. Their understanding of the Indian market is unparalleled. Highly recommend!",
        rating: 5,
        projectType: "Branding",
    },
];
