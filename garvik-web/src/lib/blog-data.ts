// Blog post data - can be moved to CMS later
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    category: string;
    tags: string[];
    coverImage: string;
    publishedAt: string;
    readTime: number;
    featured: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "power-of-cinematic-advertising",
        title: "The Power of Cinematic Advertising in 2026",
        excerpt: "Discover how cinematic storytelling is revolutionizing brand communication and creating unforgettable customer experiences.",
        content: `
# The Power of Cinematic Advertising in 2026

In today's hyper-connected world, traditional advertising is no longer enough. Brands need to create emotional connections that resonate deeply with their audience. This is where cinematic advertising comes in.

## What is Cinematic Advertising?

Cinematic advertising goes beyond traditional commercials. It's about creating mini-movies that tell compelling stories, evoke emotions, and leave lasting impressions.

### Key Elements:
- **Visual Excellence**: Hollywood-quality production values
- **Emotional Storytelling**: Narratives that connect on a human level
- **Brand Integration**: Seamless weaving of brand messaging
- **Multi-platform Optimization**: Content that works across all screens

## Why It Works

Studies show that emotionally-charged content is:
- 22x more memorable than factual content
- 3x more likely to be shared on social media
- 2x more effective at driving purchase intent

## Getting Started

At Garvik India, we specialize in creating cinematic campaigns that transform brands into legends. Contact us to learn how we can elevate your brand story.
        `,
        author: {
            name: "Aditya Sharma",
            avatar: "/team/aditya.jpg",
            role: "Creative Director",
        },
        category: "Advertising",
        tags: ["cinematic", "advertising", "branding", "storytelling"],
        coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200",
        publishedAt: "2026-01-15",
        readTime: 5,
        featured: true,
    },
    {
        id: "2",
        slug: "social-media-trends-2026",
        title: "Social Media Marketing Trends to Watch in 2026",
        excerpt: "Stay ahead of the curve with these emerging social media strategies that are reshaping digital marketing.",
        content: `
# Social Media Marketing Trends to Watch in 2026

The social media landscape continues to evolve at breakneck speed. Here's what brands need to know to stay relevant.

## 1. AI-Powered Personalization

Machine learning algorithms are now capable of delivering hyper-personalized content experiences at scale.

## 2. Short-Form Video Dominance

Reels, Shorts, and TikTok continue to dominate attention spans. Brands must master the art of storytelling in 60 seconds or less.

## 3. Social Commerce Evolution

Shopping directly within social platforms has become seamless, making social media a primary sales channel.

## 4. Authentic Creator Partnerships

Micro and nano influencers are proving more effective than celebrity endorsements for building genuine brand connections.

## Our Approach

At Garvik India, we combine data-driven insights with creative excellence to help brands navigate this dynamic landscape.
        `,
        author: {
            name: "Priya Kapoor",
            avatar: "/team/priya.jpg",
            role: "Social Media Lead",
        },
        category: "Social Media",
        tags: ["social media", "trends", "marketing", "digital"],
        coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200",
        publishedAt: "2026-01-28",
        readTime: 4,
        featured: true,
    },
    {
        id: "3",
        slug: "building-brand-identity",
        title: "Building a Brand Identity That Lasts",
        excerpt: "Learn the essential elements of creating a timeless brand identity that resonates with your target audience.",
        content: `
# Building a Brand Identity That Lasts

A strong brand identity is the foundation of all marketing success. Here's how to build one that stands the test of time.

## The Core Elements

### 1. Brand Purpose
Why does your brand exist beyond making money? Your purpose drives everything else.

### 2. Visual Identity
Logo, colors, typography, and imagery that instantly communicate your brand's personality.

### 3. Voice and Tone
How your brand speaks across all touchpoints, from social media to customer service.

### 4. Brand Story
The narrative that connects your brand's history, values, and vision.

## The Process

1. **Discovery**: Deep dive into your brand's DNA
2. **Strategy**: Define positioning and messaging
3. **Creation**: Develop visual and verbal identity
4. **Implementation**: Roll out across all channels
5. **Evolution**: Continuously refine and adapt

## Ready to Transform Your Brand?

Garvik India has helped dozens of brands discover and express their unique identity. Let's talk.
        `,
        author: {
            name: "Raj Malhotra",
            avatar: "/team/raj.jpg",
            role: "Brand Strategist",
        },
        category: "Branding",
        tags: ["branding", "identity", "strategy", "design"],
        coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
        publishedAt: "2026-02-01",
        readTime: 6,
        featured: false,
    },
];

export const categories = [
    "All",
    "Advertising",
    "Branding",
    "Social Media",
    "Web Design",
    "Photography",
    "Video Production",
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
    if (category === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === category);
}
