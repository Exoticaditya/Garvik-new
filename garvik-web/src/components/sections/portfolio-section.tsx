"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Events", "Ad Films", "Outdoor", "Road Show"];

export function PortfolioSection() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? portfolioItems
        : portfolioItems.filter(item => {
            if (filter === "Events") return item.category.includes("Events") || item.category.includes("Exhibition");
            return item.category === filter;
        });

    return (
        <section id="portfolio" className="bg-black py-32 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-mesh opacity-10" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 px-2">
                    <div className="mb-12 lg:mb-0">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold font-black uppercase text-[10px] md:text-xs mb-6 block tracking-[0.5em]"
                        >
                            The Excellence Archive
                        </motion.span>
                        <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                            Our <span className="text-gradient-purple">Works</span>
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-none uppercase tracking-[0.2em] text-[10px] font-black transition-all border ${filter === cat
                                    ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    : "bg-transparent text-gray-500 hover:text-white border-white/10 hover:border-white/30"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Venture: BizzShort */}
                {filter === "All" && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="glass-dark border border-white/5 group cursor-pointer hover:border-gold/30 transition-all duration-700 relative overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="h-[400px] lg:h-full relative min-h-[400px] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                        alt="BizzShort - A Garvik India Venture"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                                </div>
                                <div className="p-12 md:p-20 flex flex-col justify-center relative bg-white/[0.02]">
                                    <div className="absolute top-12 right-12">
                                        <div className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                            <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
                                        </div>
                                    </div>
                                    <span className="text-gold font-black tracking-[0.4em] uppercase text-[10px] mb-6">Flagship Venture</span>
                                    <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 italic">BizzShort</h3>
                                    <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light tracking-wide max-w-xl italic">
                                        &quot;Precision in information.&quot; Revolutionizing news consumption with concise, impactful business summaries. A Garvik India sovereign venture into digital media technology.
                                    </p>
                                    <span className="group-hover:text-gold text-white border-b-2 border-gold/40 hover:border-gold pb-2 text-xs font-black uppercase tracking-[0.4em] w-max transition-all">
                                        Visit Platform
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative overflow-hidden aspect-[4/5] rounded-none border border-white/5 cursor-pointer bg-black"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-12 h-[2px] bg-gold mb-6 group-hover:w-full transition-all duration-700" />
                                        <span className="text-gold font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">{item.category}</span>
                                        <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none italic">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
