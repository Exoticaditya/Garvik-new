"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-white selection:bg-primary selection:text-white">
            {/* Extraordinary Background */}
            <div className="absolute inset-0 z-0 bg-mesh opacity-60" />

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
                <div
                    className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed mix-blend-overlay"
                />

                {/* Animated Premium Glows */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[140px] animation-delay-2000" />
            </div>

            <div className="container relative z-20 px-4 md:px-6 mt-8">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-3 px-6 py-2 mb-10 border border-white/10 rounded-full glass backdrop-blur-md shadow-2xl"
                        >
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_15px_#D4AF37]" />
                            <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm">
                                Premium Creative Agency
                            </span>
                        </motion.div>

                        <h1 className="font-heading text-7xl md:text-9xl lg:text-[10rem] font-black mb-10 uppercase tracking-tighter leading-[0.8] text-white">
                            Beyond <br />
                            <span className="text-gradient-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                Ordinary
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto mb-14 text-lg md:text-2xl text-gray-300 leading-relaxed font-light tracking-wide italic">
                            Garvik India: Where cinematic vision meets data-driven success. We don&apos;t just build brands; we cultivate legacies.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
                        >
                            <ScrollLink
                                to="portfolio"
                                smooth={true}
                                duration={800}
                                className="group relative px-10 py-5 bg-gold text-black font-black text-lg uppercase tracking-[0.2em] rounded-none transition-all hover:-translate-y-1 hover:shadow-[20px_20px_0px_rgba(145,38,143,0.3)] cursor-pointer"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Legacies <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </ScrollLink>

                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={800}
                                className="group px-10 py-5 text-white font-bold text-lg uppercase tracking-[0.2em] transition-all flex items-center gap-4 cursor-pointer hover:text-gold"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-500">
                                    <Play className="w-5 h-5 fill-current ml-1 transition-transform group-hover:scale-125" />
                                </div>
                                The Vision
                            </ScrollLink>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold/60 font-black rotate-90 mb-10 origin-left">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-gold/80 via-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}

