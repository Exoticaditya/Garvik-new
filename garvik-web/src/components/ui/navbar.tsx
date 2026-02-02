"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "portfolio", label: "Work" },
    { to: "contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-black/60 backdrop-blur-xl py-2 border-b border-gold/20 shadow-[0_10px_30px_-10px_rgba(145,38,143,0.3)]"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">
                <ScrollLink to="home" smooth={true} duration={800} className="cursor-pointer z-50">
                    <Logo />
                </ScrollLink>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                    {links.map((link) => (
                        <ScrollLink
                            key={link.to}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={800}
                            activeClass="text-gold before:w-full"
                            className="relative text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] text-white/70 hover:text-white cursor-pointer transition-all group"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-gold transition-all duration-500 group-hover:w-full"></span>
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={800}
                        className="relative px-8 py-3 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-500 hover:bg-gold hover:text-black hover:scale-105 cursor-pointer overflow-hidden group"
                    >
                        <span className="relative z-10">Get Success</span>
                        <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    </ScrollLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-white z-50 relative group"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <div className="relative text-2xl">
                        {isOpen ? (
                            <i className="fa-solid fa-xmark text-gold"></i>
                        ) : (
                            <i className="fa-solid fa-bars group-hover:text-gold transition-colors"></i>
                        )}
                    </div>
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl lg:hidden flex flex-col justify-center items-center"
                    >
                        <div className="absolute inset-0 z-0 bg-mesh opacity-30" />
                        <div className="flex flex-col space-y-12 items-center text-center relative z-10">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        offset={-80}
                                        duration={800}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white hover:text-gold cursor-pointer transition-colors font-heading"
                                    >
                                        {link.label}
                                    </ScrollLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
