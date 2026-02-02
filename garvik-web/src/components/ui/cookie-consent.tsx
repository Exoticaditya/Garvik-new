"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "garvik-cookie-consent";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if consent already given
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Delay showing the banner
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
        setIsVisible(false);
        // Initialize analytics if needed
        initializeAnalytics();
    };

    const acceptSelected = () => {
        const consent = {
            ...preferences,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
        setIsVisible(false);
        if (preferences.analytics) {
            initializeAnalytics();
        }
    };

    const rejectAll = () => {
        const consent = {
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
        setIsVisible(false);
    };

    const initializeAnalytics = () => {
        // Google Analytics initialization would go here
        console.log("Analytics initialized");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-6xl mx-auto bg-black/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <i className="fa-solid fa-cookie-bite text-gold text-2xl"></i>
                                    <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    We use cookies to enhance your browsing experience, serve personalized content, 
                                    and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                                    <Link href="/privacy" className="text-gold hover:underline">
                                        Learn more
                                    </Link>
                                </p>

                                {/* Preferences Panel */}
                                <AnimatePresence>
                                    {showPreferences && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/10 pt-4 mt-4 space-y-4">
                                                {/* Necessary */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-white font-medium">Necessary Cookies</p>
                                                        <p className="text-gray-500 text-xs">Required for basic site functionality</p>
                                                    </div>
                                                    <div className="w-12 h-6 bg-gold/50 rounded-full relative cursor-not-allowed">
                                                        <div className="absolute right-1 top-1 w-4 h-4 bg-gold rounded-full" />
                                                    </div>
                                                </div>

                                                {/* Analytics */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-white font-medium">Analytics Cookies</p>
                                                        <p className="text-gray-500 text-xs">Help us understand how visitors use our site</p>
                                                    </div>
                                                    <button
                                                        onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                                                        className={`w-12 h-6 rounded-full relative transition-colors ${
                                                            preferences.analytics ? "bg-gold" : "bg-white/20"
                                                        }`}
                                                    >
                                                        <div
                                                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                                                                preferences.analytics ? "right-1" : "left-1"
                                                            }`}
                                                        />
                                                    </button>
                                                </div>

                                                {/* Marketing */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-white font-medium">Marketing Cookies</p>
                                                        <p className="text-gray-500 text-xs">Used for targeted advertising</p>
                                                    </div>
                                                    <button
                                                        onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                                                        className={`w-12 h-6 rounded-full relative transition-colors ${
                                                            preferences.marketing ? "bg-gold" : "bg-white/20"
                                                        }`}
                                                    >
                                                        <div
                                                            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                                                                preferences.marketing ? "right-1" : "left-1"
                                                            }`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[180px]">
                                <button
                                    onClick={acceptAll}
                                    className="px-6 py-3 bg-gold text-black font-bold text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
                                >
                                    Accept All
                                </button>
                                {showPreferences ? (
                                    <button
                                        onClick={acceptSelected}
                                        className="px-6 py-3 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setShowPreferences(true)}
                                        className="px-6 py-3 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                                    >
                                        Customize
                                    </button>
                                )}
                                <button
                                    onClick={rejectAll}
                                    className="px-6 py-3 text-gray-400 font-medium text-sm uppercase tracking-wider hover:text-white transition-colors"
                                >
                                    Reject All
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
