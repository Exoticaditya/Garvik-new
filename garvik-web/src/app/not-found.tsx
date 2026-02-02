"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-white flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-mesh opacity-60" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[140px]" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-[12rem] md:text-[16rem] font-black leading-none text-gradient-gold">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-md mx-auto">
                        Oops! The page you&apos;re looking for seems to have vanished into the creative void.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="/"
                        className="group px-10 py-4 bg-gold text-black font-black text-sm uppercase tracking-[0.2em] transition-all hover:-translate-y-1 hover:shadow-[20px_20px_0px_rgba(145,38,143,0.3)]"
                    >
                        <span className="flex items-center gap-3">
                            <i className="fa-solid fa-house"></i>
                            Back to Home
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] transition-all hover:border-gold hover:text-gold"
                    >
                        <span className="flex items-center gap-3">
                            <i className="fa-solid fa-envelope"></i>
                            Contact Us
                        </span>
                    </Link>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-16 flex justify-center gap-8 text-gray-500"
                >
                    <Link href="/services" className="hover:text-gold transition-colors">
                        <i className="fa-solid fa-briefcase mr-2"></i> Services
                    </Link>
                    <Link href="/portfolio" className="hover:text-gold transition-colors">
                        <i className="fa-solid fa-images mr-2"></i> Portfolio
                    </Link>
                    <Link href="/about" className="hover:text-gold transition-colors">
                        <i className="fa-solid fa-users mr-2"></i> About
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
