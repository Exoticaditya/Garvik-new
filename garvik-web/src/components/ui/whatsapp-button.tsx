"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hi! I'm interested in Garvik India's services. Can we discuss my project?");

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        // Show tooltip after 3 seconds for first-time visitors
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 5000);
        }, 3000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(tooltipTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    {/* Tooltip */}
                    <AnimatePresence>
                        {showTooltip && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                            >
                                <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium relative">
                                    Chat with us on WhatsApp!
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Button */}
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                        aria-label="Chat on WhatsApp"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <i className="fa-brands fa-whatsapp text-white text-3xl group-hover:scale-110 transition-transform"></i>
                    </a>

                    {/* Pulse Ring */}
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
