"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Updated service list with Font Awesome icons
const services = [
    {
        id: 1,
        title: "Integrated Brand Mgmt",
        icon: "fa-solid fa-bullhorn",
        short: "360° Brand Strategy",
        full: "Complete brand lifecycle management from identity creation to market positioning. We ensure your brand speaks one coherent language across all platforms.",
    },
    {
        id: 2,
        title: "Broadcast Advertising",
        icon: "fa-solid fa-tv",
        short: "TV & Radio Commercials",
        full: "High-impact television and radio commercials. We handle media buying, slot management, and creative direction to reach millions.",
    },
    {
        id: 3,
        title: "Print Media",
        icon: "fa-solid fa-print",
        short: "Newspapers & Magazines",
        full: "Traditional print advertising remains a powerhouse. We design and place compelling ads in top-tier newspapers and magazines.",
    },
    {
        id: 4,
        title: "Ad Films",
        icon: "fa-solid fa-clapperboard",
        short: "Corporate Films & TVC",
        full: "End-to-end production of corporate films, TV commercials, and digital video content that tells your brand's story visually.",
    },
    {
        id: 5,
        title: "PR / Felicitations",
        icon: "fa-solid fa-award",
        short: "Public Relations Events",
        full: "Managing reputation and media relations through strategic PR events, press conferences, and award felicitation ceremonies.",
    },
    {
        id: 6,
        title: "Business Conferences",
        icon: "fa-solid fa-users",
        short: "Corporate Meets & Summits",
        full: "Seamless execution of large-scale business conferences, summits, and dealer meets with premium hospitality and logistics.",
    },
    {
        id: 7,
        title: "Product Road Show",
        icon: "fa-solid fa-map-location-dot",
        short: "BTL Activations",
        full: "Taking your product to the consumer. We organize multi-city road shows and van activations for direct consumer engagement.",
    },
    {
        id: 8,
        title: "Creative Design",
        icon: "fa-solid fa-pen-ruler",
        short: "Visual Identity & Content",
        full: "World-class graphic design, logo creation, and content writing services to support all your marketing collateral.",
    },
];

export function ServicesSection() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="services" className="bg-black py-32 px-4 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-mesh opacity-10" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                        viewport={{ once: true }}
                        className="text-gold font-black uppercase text-[10px] md:text-xs mb-6 block"
                    >
                        Mastery & Expertise
                    </motion.span>
                    <h2 className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-8">
                        Our <span className="text-gradient-purple">Pillars</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary via-gold to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedId(service.id)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group cursor-pointer glass-dark p-10 hover:border-gold/30 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
                        >
                            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-150 rotate-12">
                                <i className={`${service.icon} text-[180px] text-white`}></i>
                            </div>

                            <div className="w-20 h-20 rounded-none border border-white/5 flex items-center justify-center mb-8 text-white group-hover:border-gold group-hover:bg-gold transition-all duration-500 relative z-10 group-hover:text-black">
                                <i className={`${service.icon} text-3xl`}></i>
                            </div>

                            <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tighter group-hover:text-gold transition-colors relative z-10">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide relative z-10 group-hover:text-gray-300 transition-colors">
                                {service.short}
                            </p>

                            <div className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold/40 group-hover:text-gold transition-colors">
                                <span>Deep Dive</span>
                                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-zinc-900 w-full max-w-2xl border border-primary/30 p-8 md:p-12 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 p-2 bg-transparent text-gray-500 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>

                            {(() => {
                                const service = services.find(s => s.id === selectedId)!;
                                return (
                                    <>
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-20 h-20 bg-primary text-white flex items-center justify-center shadow-lg">
                                                <i className={`${service.icon} text-4xl`}></i>
                                            </div>
                                            <div>
                                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Service Detail</h4>
                                                <motion.h3 layoutId={`title-${service.id}`} className="text-3xl md:text-4xl font-black text-white uppercase font-heading">
                                                    {service.title}
                                                </motion.h3>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-lg text-gray-300 leading-relaxed mb-10 border-l-2 border-primary/50 pl-6">
                                                {service.full}
                                            </p>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="group px-8 py-3 bg-white text-black font-bold uppercase hover:bg-primary hover:text-white transition-colors tracking-wider flex items-center gap-2"
                                            >
                                                Close Details <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                            </button>
                                        </motion.div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
