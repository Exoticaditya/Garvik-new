"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: "fa-solid fa-clapperboard",
        title: "Ad Film Production",
        description: "Cinematic corporate films and TV commercials."
    },
    {
        icon: "fa-solid fa-users",
        title: "Corporate Events",
        description: "Product launches, conferences, and meets."
    },
    {
        icon: "fa-solid fa-map-location-dot",
        title: "Road Shows",
        description: "Pan-India promotional van activations."
    }
];

export function ServicesTeaser() {
    return (
        <section className="py-24 bg-neutral-950 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase">
                            Beyond Traditional <span className="text-secondary">Advertising</span>
                        </h2>
                    </div>
                    <Link href="/services" className="group flex items-center gap-2 text-lg font-semibold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                        View All Services <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 bg-neutral-900 border-l-4 border-transparent hover:border-secondary transition-all hover:bg-neutral-800"
                        >
                            <div className="mb-6 text-secondary">
                                <i className={`${service.icon} text-4xl`}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 uppercase">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
