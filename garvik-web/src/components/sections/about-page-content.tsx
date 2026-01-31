"use client";

import { Timeline } from "@/components/ui/timeline";
import { Target, Heart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const timelineData = [
    { year: "2014", title: "The Inception", description: "Garvik India was founded with a mission to redefine the intersection of creativity and strategy." },
    { year: "2016", title: "Broadening Horizon", description: "Scaled operations to master print and cinematic outdoor campaigns across the national capital." },
    { year: "2019", title: "Digital Renaissance", description: "Pioneered futuristic digital branding strategies that became the standard for 360-degree brand management." },
    { year: "2023", title: "Architects of Victory", description: "Reached a milestone of 500+ successful legacies crafted for elite corporate partners." },
];

export function AboutPageContent() {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-mesh opacity-20" />
                <div className="container relative z-10 mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-gold font-black uppercase text-xs mb-6 block"
                    >
                        The Beginning of Success
                    </motion.span>
                    <h1 className="text-7xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                        Our <span className="text-gradient-purple">Spirit</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide">
                        Powered by cinematic vision, grounded in data-driven strategy. We don&apos;t just lead the market; we create the icons that define it.
                    </p>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="py-32 container mx-auto px-4 md:px-8 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
                    <div className="p-12 glass-dark border-l-2 border-gold hover:border-primary transition-all duration-500 group">
                        <Target className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-white group-hover:text-gold transition-colors">Vision</h3>
                        <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">To be the sovereign architects of brand identity in India, recognized for transforming ordinary businesses into extraordinary legacies.</p>
                    </div>
                    <div className="p-12 glass-dark border-l-2 border-primary hover:border-gold transition-all duration-500 group">
                        <Zap className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-white group-hover:text-primary transition-colors">Mission</h3>
                        <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">To deliver high-impact, cinematic advertising solutions that accelerate growth and build permanent brand value for our partners.</p>
                    </div>
                    <div className="p-12 glass-dark border-l-2 border-gold hover:border-primary transition-all duration-500 group">
                        <Heart className="w-12 h-12 text-gold mb-8 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-white group-hover:text-gold transition-colors">Core</h3>
                        <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">Creative audacity, strategic integrity, and a relentless focus on our clients&apos; success are the heartbeats of our agency.</p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto py-20 bg-white/[0.02] border border-white/5 p-12 md:p-20">
                    <h2 className="text-5xl md:text-7xl font-black mb-20 text-center uppercase tracking-tighter">
                        The <span className="text-gradient-gold">Timeline</span>
                    </h2>
                    <Timeline items={timelineData} />
                </div>
            </section>
        </div>
    );
}
