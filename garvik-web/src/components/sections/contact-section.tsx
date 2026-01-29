"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronUp, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Disclosure, Transition } from "@headlessui/react";

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
];

export function ContactSection() {
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
        <section id="contact" className="bg-background py-32 px-4 border-t border-white/5 relative">
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-8">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Touch</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-gray-400 text-lg">
                        Ready to elevate your brand event? Reach out to us for a consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 border border-white/10 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white uppercase mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        type="text"
                                        className="w-full px-4 py-4 bg-black/50 border border-white/10 focus:border-primary text-white outline-none transition-all placeholder:text-gray-600 font-medium rounded-lg"
                                        placeholder="FULL NAME"
                                    />
                                    {errors.name && <span className="text-red-500 text-xs mt-2 block tracking-wide">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        type="email"
                                        className="w-full px-4 py-4 bg-black/50 border border-white/10 focus:border-primary text-white outline-none transition-all placeholder:text-gray-600 font-medium rounded-lg"
                                        placeholder="EMAIL ADDRESS"
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-2 block tracking-wide">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={4}
                                    className="w-full px-4 py-4 bg-black/50 border border-white/10 focus:border-primary text-white outline-none transition-all placeholder:text-gray-600 font-medium rounded-lg resize-none"
                                    placeholder="PROJECT DETAILS OR INQUIRY..."
                                />
                                {errors.message && <span className="text-red-500 text-xs mt-2 block tracking-wide">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 text-white bg-primary hover:bg-orange-600 font-black uppercase tracking-widest transition-all disabled:opacity-70 rounded-lg shadow-[0_0_20px_rgba(245,130,32,0.3)] hover:shadow-[0_0_30px_rgba(245,130,32,0.5)]"
                            >
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Submit Inquiry"}
                            </button>

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-400 bg-green-900/10 p-4 border border-green-900/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white uppercase mb-8">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors border border-transparent hover:border-white/5">
                                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Office</h4>
                                        <p className="text-white text-lg font-medium leading-snug">
                                            Sector 62, Noida,<br />Uttar Pradesh, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors border border-transparent hover:border-white/5">
                                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</h4>
                                        <p className="text-white text-lg font-medium hover:text-primary transition-colors">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-white transition-all rounded-full group">
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>

                        {/* Mini FAQ */}
                        <div className="space-y-4 pt-8 border-t border-white/10">
                            {faqs.map((faq, index) => (
                                <Disclosure as="div" key={index} className="border-b border-white/10 pb-4">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full text-left text-sm font-bold text-white hover:text-primary focus:outline-none transition-colors uppercase tracking-wide">
                                                <span className="text-sm">{faq.question}</span>
                                                <ChevronUp
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-4 h-4 text-gray-500 transition-transform duration-200`}
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
                                                <Disclosure.Panel className="pt-3 text-gray-400 text-sm leading-relaxed font-light">
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
        </section>
    );
}
