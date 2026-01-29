"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Award } from "lucide-react";
import Link from 'next/link';

const metrics = [
    { label: "Successful Events", value: "350+", icon: Calendar },
    { label: "Corporate Clients", value: "100+", icon: Users },
    { label: "Industry Awards", value: "15+", icon: Award },
];

export function AboutSummary() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Extraordinary Background */}
            <div className="absolute inset-0 z-0 bg-mesh opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-32" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold font-black uppercase text-[10px] md:text-xs mb-6 block tracking-[0.5em]"
                        >
                            The Beginning of Success
                        </motion.span>
                        <h2 className="text-6xl md:text-8xl font-black mb-10 uppercase leading-[0.85] tracking-tighter">
                            Architects of <br />
                            <span className="text-gradient-purple">Legacies</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed tracking-wide italic">
                            We don&apos;t just organize events or run ads; we curate cinematic experiences that amplify your brand&apos;s heartbeat.
                        </p>
                        <p className="text-gray-400 mb-12 leading-relaxed font-light max-w-xl">
                            From the high-stakes precision of a national press conference to the grand spectacle of a business summit, Garvik India fusion of cinematic vision and strategic data turns every project into a milestone.
                        </p>
                        <Link href="/about" className="group relative inline-flex items-center gap-4 border border-white/10 px-10 py-4 font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
                            <span className="relative z-10">Our Story</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-8 p-10 glass-dark border-l-4 border-gold group hover:border-primary transition-all duration-500"
                            >
                                <div className="text-gold bg-gold/5 p-5 border border-gold/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                                    <metric.icon size={36} />
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white tracking-tighter mb-1">{metric.value}</div>
                                    <div className="text-[10px] font-black text-gold/60 uppercase tracking-[0.4em]">{metric.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

