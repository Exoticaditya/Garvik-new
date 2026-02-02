import { Metadata } from "next";
import PricingPageContent from "@/components/sections/pricing-page-content";

export const metadata: Metadata = {
    title: "Pricing & Packages | Garvik India - Creative Agency",
    description: "Explore our flexible pricing plans and packages for branding, advertising, digital marketing, and video production services. Find the perfect plan for your business.",
    openGraph: {
        title: "Pricing & Packages | Garvik India",
        description: "Flexible pricing plans for all your creative marketing needs.",
    },
};

export default function PricingPage() {
    return <PricingPageContent />;
}
