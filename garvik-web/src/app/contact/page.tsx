"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUp, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type FormData = {
    name: string;
    email: string;
    message: string;
};

const faqs = [
    {
        question: "Do you organize events outside Delhi NCR?",
        answer: "Yes, we manage events and road shows on a Pan-India level with our extensive network of logistic partners.",
    },
    {
        question: "Can you handle Ad Film production?",
        answer: "Absolutely. We have an in-house team for scripting, shooting, and post-production of top-quality ad films.",
    },
    {
        question: "What is your typical lead time for a large conference?",
        answer: "We recommend a minimum of 4-6 weeks for large-scale conferences to ensure flawless execution, but we can also work on tighter deadlines.",
    },
];

export default function ContactPage() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const onSubmit = async (data: FormData) => {
        setStatus("idle");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (e) {
            console.error(e);
            setStatus("error");
        }
    };

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <section className="relative py-32 px-4 text-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 bg-mesh opacity-20" />
                <div className="container relative z-10 mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold font-black uppercase text-xs mb-6 block tracking-[0.5em]"
                    >
                        Connect with the Architects
                    </motion.span>
                    <h1 className="text-7xl md:text-9xl font-black mb-8 uppercase tracking-tighter leading-none italic">
                        Let&apos;s <span className="text-gradient-purple">Talk</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                        Your brand&apos;s evolution into a global legacy starts with one conversation.
                    </p>
                </div>
            </section>


            <div className="container mx-auto px-4 md:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-secondary uppercase">Get in Touch</h2>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-start space-x-4">
                                <div className="bg-neutral-800 p-3 text-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white uppercase">Visit Us</h3>
                                    <p className="text-gray-400">Sector 62, Noida, Uttar Pradesh, India</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-neutral-800 p-3 text-secondary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white uppercase">Call Us</h3>
                                    <p className="text-gray-400">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-neutral-800 p-3 text-secondary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white uppercase">Email Us</h3>
                                    <p className="text-gray-400">contact@garvikindia.com</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-neutral-900 p-8 border border-neutral-800">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-1 uppercase">Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    className="w-full px-4 py-3 bg-black border border-neutral-700 focus:border-secondary text-white outline-none transition-all placeholder:text-neutral-600"
                                    placeholder="YOUR NAME"
                                />
                                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-1 uppercase">Email</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                    })}
                                    type="email"
                                    className="w-full px-4 py-3 bg-black border border-neutral-700 focus:border-secondary text-white outline-none transition-all placeholder:text-neutral-600"
                                    placeholder="YOUR@EMAIL.COM"
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-1 uppercase">Message</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black border border-neutral-700 focus:border-secondary text-white outline-none transition-all placeholder:text-neutral-600"
                                    placeholder="HOW CAN WE HELP?"
                                />
                                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center py-4 px-6 text-black bg-secondary hover:bg-white font-bold uppercase tracking-wider transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                            </button>

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-900/20 p-4 border border-green-900">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-400 bg-red-900/20 p-4 border border-red-900">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Error sending message.</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Map & FAQ */}
                    <div>
                        <div className="bg-neutral-800 h-80 mb-12 grayscale invert">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8394209936!2d77.20898511475705!3d28.527581977717468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x1052432851d45dc5!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703606000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <h2 className="text-2xl font-bold mb-6 text-secondary uppercase">FAQ</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <Disclosure as="div" key={index} className="border border-neutral-800 bg-neutral-900">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-sm font-bold text-white hover:bg-neutral-800 focus:outline-none transition-colors uppercase">
                                                <span className="text-base">{faq.question}</span>
                                                <ChevronUp
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 text-secondary transition-transform duration-200`}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Disclosure.Panel className="px-6 pt-2 pb-6 text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
