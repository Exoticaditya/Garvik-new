import { Metadata } from "next";
import BlogPageContent from "@/components/sections/blog-page-content";

export const metadata: Metadata = {
    title: "Blog | Garvik India - Creative Marketing Insights",
    description: "Discover insights, trends, and strategies in advertising, branding, social media, and digital marketing from Garvik India's expert team.",
    openGraph: {
        title: "Blog | Garvik India",
        description: "Creative marketing insights and industry trends from Garvik India.",
    },
};

export default function BlogPage() {
    return <BlogPageContent />;
}
