"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Printer, Tv, Clapperboard, Award, Users, Map, PenTool, ArrowRight, X } from "lucide-react";

// Updated service list based on Screenshot + User Request
const services = [
    {
        id: 1,
        title: "Integrated Brand Mgmt",
        icon: Megaphone,
        short: "360° Brand Strategy",
        full: "Complete brand lifecycle management from identity creation to market positioning. We ensure your brand speaks one coherent language across all platforms.",
    },
    {
        id: 2,
        title: "Broadcast Advertising",
        icon: Tv,
        short: "TV & Radio Commercials",
        full: "High-impact television and radio commercials. We handle media buying, slot management, and creative direction to reach millions.",
    },
    {
        id: 3,
        title: "Print Media",
        icon: Printer,
        short: "Newspapers & Magazines",
        full: "Traditional print advertising remains a powerhouse. We design and place compelling ads in top-tier newspapers and magazines.",
    },
    {
        id: 4,
        title: "Ad Films",
        icon: Clapperboard,
        short: "Corporate Films & TVC",
        full: "End-to-end production of corporate films, TV commercials, and digital video content that tells your brand's story visually.",
    },
    {
        id: 5,
        title: "PR / Felicitations",
        icon: Award,
        short: "Public Relations Events",
        full: "Managing reputation and media relations through strategic PR events, press conferences, and award felicitation ceremonies.",
    },
    {
        id: 6,
        title: "Business Conferences",
        icon: Users,
        short: "Corporate Meets & Summits",
        full: "Seamless execution of large-scale business conferences, summits, and dealer meets with premium hospitality and logistics.",
    },
    {
        id: 7,
        title: "Product Road Show",
        icon: Map,
        short: "BTL Activations",
        full: "Taking your product to the consumer. We organize multi-city road shows and van activations for direct consumer engagement.",
    },
    {
        id: 8,
        title: "Creative Design",
        icon: PenTool,
        short: "Visual Identity & Content",
        full: "World-class graphic design, logo creation, and content writing services to support all your marketing collateral.",
    },
];

export default function ServicesPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="bg-black min-h-screen pb-20 text-white">
            <section className="bg-gradient-to-b from-orange-600 to-black py-32 px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase">Our Expertise</h1>
                <p className="max-w-2xl mx-auto text-xl text-orange-100/90 font-light">
                    Delivering excellence in Events, Advertising, and Production.
                </p>
            </section>

            <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedId(service.id)}
                            className="group cursor-pointer bg-neutral-900 rounded-none border border-neutral-800 p-8 hover:bg-neutral-800 transition-all hover:border-secondary relative overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon size={100} />
                            </div>

                            <div className="w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                <service.icon size={24} />
                            </div>
                            <motion.h3 layoutId={`title-${service.id}`} className="text-xl font-bold mb-2 text-white uppercase tracking-wide">
                                {service.title}
                            </motion.h3>
                            <p className="text-gray-400 text-sm">{service.short}</p>

                            <div className="mt-6 w-full h-0.5 bg-neutral-800 group-hover:bg-secondary transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="bg-neutral-900 w-full max-w-2xl rounded-sm border border-secondary p-8 md:p-12 relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-black hover:text-secondary transition-colors text-white"
                            >
                                <X size={24} />
                            </button>

                            {(() => {
                                const service = services.find(s => s.id === selectedId)!;
                                return (
                                    <>
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-16 h-16 bg-secondary text-black flex items-center justify-center rounded-sm">
                                                <service.icon size={32} />
                                            </div>
                                            <motion.h3 layoutId={`title-${service.id}`} className="text-3xl font-bold text-white uppercase">
                                                {service.title}
                                            </motion.h3>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-secondary pl-6">
                                                {service.full}
                                            </p>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="px-8 py-3 bg-secondary text-black font-bold uppercase hover:bg-white transition-colors tracking-wider"
                                            >
                                                Close Details
                                            </button>
                                        </motion.div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
