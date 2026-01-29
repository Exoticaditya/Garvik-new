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
            // Simple mapping for demo matching
            if (filter === "Events") return item.category.includes("Events") || item.category.includes("Exhibition");
            return item.category === filter;
        });

    return (
        <div className="bg-black min-h-screen pb-20 text-white">
            <section className="bg-gradient-to-br from-secondary to-orange-700 py-32 px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase text-black">Our Work</h1>
                <p className="max-w-2xl mx-auto text-xl text-black/80 font-medium">
                    Showcasing successful campaigns and unforgettable events.
                </p>
            </section>

            <div className="container mx-auto px-4 md:px-8 mt-12">
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-none uppercase tracking-widest text-sm font-bold transition-all ${filter === cat
                                    ? "bg-secondary text-black"
                                    : "bg-neutral-900 text-gray-400 hover:text-white border border-neutral-800"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                                    <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2">{item.category}</span>
                                    <h3 className="text-white text-2xl font-black uppercase leading-none">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
