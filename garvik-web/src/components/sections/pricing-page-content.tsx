"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { pricingPlans, addonServices } from "@/lib/pricing-data";

export default function PricingPageContent() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-background text-white pt-32 pb-20">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-mesh opacity-30" />
            <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
            <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[140px]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 rounded-full">
                        Pricing Plans
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        Invest in <span className="text-gradient-gold">Excellence</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Transparent pricing for transformative results. Choose a plan that fits your vision.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setSelectedPlan(plan.id)}
                            onMouseLeave={() => setSelectedPlan(null)}
                            className={`relative p-8 transition-all duration-500 ${
                                plan.highlighted
                                    ? "bg-gradient-to-br from-primary/20 to-gold/10 border-2 border-gold scale-105"
                                    : "bg-white/5 border border-white/10 hover:border-gold/50"
                            } ${selectedPlan === plan.id ? "transform -translate-y-2" : ""}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gold text-black text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>
                                <div className="mb-4">
                                    <span className="text-5xl font-black text-gradient-gold">{plan.price}</span>
                                    <span className="text-gray-400 text-sm ml-2">/{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <i className="fa-solid fa-check text-gold mt-1"></i>
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className={`block w-full py-4 text-center font-bold uppercase tracking-wider transition-all ${
                                    plan.highlighted
                                        ? "bg-gold text-black hover:bg-gold/90"
                                        : "border border-white/20 text-white hover:border-gold hover:text-gold"
                                }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Add-on Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-white">
                            Add-on <span className="text-gradient-gold">Services</span>
                        </h2>
                        <p className="text-gray-400">Enhance your package with specialized services.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {addonServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                                className="p-6 bg-white/5 border border-white/10 hover:border-gold/50 transition-all group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-all">
                                    <i className={`fa-solid ${service.icon} text-xl`}></i>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                                <p className="text-gold font-bold mb-2">{service.price}</p>
                                <p className="text-gray-400 text-sm">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-white">
                            Frequently Asked <span className="text-gradient-gold">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Can I customize a package to fit my needs?",
                                a: "Absolutely! We understand every business is unique. Contact us to discuss a customized solution tailored to your specific requirements and budget.",
                            },
                            {
                                q: "What is the typical project timeline?",
                                a: "Timelines vary based on project scope. A basic branding project takes 2-3 weeks, while comprehensive campaigns may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
                            },
                            {
                                q: "Do you offer payment plans?",
                                a: "Yes! For projects above ₹1 lakh, we offer flexible payment plans. Typically, we work with 50% upfront and 50% on completion, or milestone-based payments for larger projects.",
                            },
                            {
                                q: "What's included in the monthly retainer?",
                                a: "Monthly retainers include dedicated hours for content creation, social media management, performance reporting, and strategy optimization. The exact deliverables depend on your chosen plan.",
                            },
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="group p-6 bg-white/5 border border-white/10 cursor-pointer"
                            >
                                <summary className="list-none flex items-center justify-between font-bold text-white">
                                    {faq.q}
                                    <i className="fa-solid fa-plus text-gold group-open:rotate-45 transition-transform"></i>
                                </summary>
                                <p className="mt-4 text-gray-400">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center p-12 md:p-16 bg-gradient-to-br from-primary/20 to-gold/10 border border-white/10"
                >
                    <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-white">
                        Ready to Get <span className="text-gradient-gold">Started?</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        Let&apos;s discuss your project and find the perfect solution for your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors"
                        >
                            Schedule a Call
                        </Link>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:border-[#25D366] hover:text-[#25D366] transition-colors flex items-center justify-center gap-3"
                        >
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
