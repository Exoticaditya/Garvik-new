import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page-content";

export const metadata: Metadata = {
    title: "Our Story | Transforming Brands into Legacies",
    description: "Discover the journey of Garvik India. From a vision of revolutionizing advertising to becoming architects of brand identity through cinematic vision and strategic data.",
};

export default function AboutPage() {
    return <AboutPageContent />;
}
