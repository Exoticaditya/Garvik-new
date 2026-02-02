"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function UdaanSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <section ref={sectionRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-black py-32">
            {/* Extraordinary Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-mesh opacity-20" />
                <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            </div>

            <div className="container relative z-10 px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative group">
                        <motion.div style={{ y, scale }} className="relative z-10">
                            <div className="relative aspect-[3/4] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(145,38,143,0.1)] transition-all duration-700 group-hover:border-gold/30">
                                <Image
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                                    alt="Udaan Flagship Event"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                <div className="absolute top-10 right-10 p-5 glass-dark border border-white/10 group-hover:border-gold transition-all duration-500">
                                    <i className="fa-solid fa-star text-gold text-3xl animate-pulse"></i>
                                </div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="font-black text-7xl md:text-9xl text-white/10 group-hover:text-gold/20 transition-colors uppercase tracking-tighter">
                                        2024
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
                    </div>

                    {/* Content Side */}
                    <motion.div
                        style={{ opacity }}
                        className="lg:w-1/2 space-y-10 text-center lg:text-left"
                    >
                        <div>
                            <span className="inline-block py-2 px-6 glass-dark border border-white/10 text-gold text-[10px] font-black tracking-[0.4em] uppercase mb-8">
                                Annual Flagship Experience
                            </span>
                            <h2 className="text-8xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">
                                Udaan
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-light text-white/60 uppercase tracking-widest leading-none">
                                The <span className="font-black text-gradient-purple">Rise</span>
                            </h3>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light italic">
                            A cinematic celebration of ambition, widespread success, and the soaring spirit of Garvik India. Udaan is where the elite meet to redefine the horizon of possibility.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start pt-10">
                            <button className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-gold hover:text-black">
                                <span className="relative z-10 flex items-center gap-4">
                                    Experience Udaan <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                                </span>
                                <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                            <button className="px-10 py-5 bg-transparent border border-white/10 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-white/5 transition-all">
                                Gallery
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
