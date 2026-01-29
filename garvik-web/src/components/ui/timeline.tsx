"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-10 space-y-12 py-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 md:pl-12"
                >
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-md ring-2 ring-indigo-50" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <span className="text-sm font-bold text-primary px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full mt-1 sm:mt-0 w-fit">
                            {item.year}
                        </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
            ))}
        </div>
    );
}
