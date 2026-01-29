"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Events", "Ad Films", "Outdoor", "Road Show"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? portfolioItems
        : portfolioItems.filter(item => {
            if (filter === "Events") return item.category.includes("Events") || item.category.includes("Exhibition");
            return item.category === filter;
        });

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Extraordinary Hero */}
            <section className="relative py-32 px-4 text-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 bg-mesh opacity-20" />
                <div className="container relative z-10 mx-auto">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-gold font-black uppercase text-xs mb-6 block"
                    >
                        The Excellence Archive
                    </motion.span>
                    <h1 className="text-7xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                        Our <span className="text-gradient-purple">Works</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide italic">
                        &quot;Precision in execution, majesty in result.&quot; Explore our sovereign journey of crafting legacies for global icons.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 mt-24">
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-10 py-4 rounded-none uppercase tracking-[0.4em] text-[10px] font-black transition-all border ${filter === cat
                                ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                : "bg-transparent text-gray-400 hover:text-white border-white/10 hover:border-white/30"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                                className="group relative overflow-hidden aspect-[4/5] bg-black border border-white/5 cursor-pointer"
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
        </div>
    );
}

