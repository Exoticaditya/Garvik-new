"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials-data";

export function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, next]);

    const testimonial = testimonials[current];

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-mesh opacity-30" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 rounded-full">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
                        Client <span className="text-gradient-gold">Stories</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hear from the brands we&apos;ve helped transform into market leaders.
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div
                    className="max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-gold text-xl"></i>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                                &ldquo;{testimonial.content}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                    <span className="inline-block mt-1 px-3 py-1 bg-gold/20 text-gold text-xs uppercase tracking-wider">
                                        {testimonial.projectType}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={prev}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-all"
                            aria-label="Previous testimonial"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === current
                                            ? "w-8 bg-gold"
                                            : "bg-white/30 hover:bg-white/50"
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-all"
                            aria-label="Next testimonial"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
