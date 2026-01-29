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
        <section id="contact" className="bg-black py-32 px-4 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-mesh opacity-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-gold font-black uppercase text-[10px] md:text-xs mb-6 block"
                    >
                        Initiate Connection
                    </motion.span>
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none italic mb-10">
                        Get In <span className="text-gradient-purple">Touch</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 text-xl font-light italic leading-relaxed">
                        &quot;The conversation of legacy starts here.&quot; Ready to elevate your brand presence? Reach out to the architects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Form */}
                    <div className="glass-dark p-10 md:p-16 border border-white/5 relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-10 italic">Secure Channel</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        type="text"
                                        className="w-full px-6 py-5 bg-black/50 border border-white/5 focus:border-gold text-white outline-none transition-all placeholder:text-gray-700 font-light italic"
                                        placeholder="IDENTITY/NAME"
                                    />
                                    {errors.name && <span className="text-gold text-[10px] font-black uppercase mt-3 block tracking-widest">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        type="email"
                                        className="w-full px-6 py-5 bg-black/50 border border-white/5 focus:border-gold text-white outline-none transition-all placeholder:text-gray-700 font-light italic"
                                        placeholder="COMMUNICATION/EMAIL"
                                    />
                                    {errors.email && <span className="text-gold text-[10px] font-black uppercase mt-3 block tracking-widest">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    rows={5}
                                    className="w-full px-6 py-5 bg-black/50 border border-white/5 focus:border-gold text-white outline-none transition-all placeholder:text-gray-700 font-light italic resize-none"
                                    placeholder="MISSION DETAILS & BRIEF..."
                                />
                                {errors.message && <span className="text-gold text-[10px] font-black uppercase mt-3 block tracking-widest">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full py-6 px-10 bg-white text-black font-black uppercase tracking-[0.4em] text-xs transition-all hover:bg-gold hover:text-black overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initiate Brief"}
                                </span>
                                <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-4 text-gold bg-gold/5 p-6 border border-gold/20"
                                >
                                    <CheckCircle className="w-6 h-6" />
                                    <span className="text-sm font-black uppercase tracking-widest">Communication Received. The Architects will reach out.</span>
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* Info */}
                    <div className="space-y-16 lg:pt-10">
                        <div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-12 italic">Direct Lines</h3>
                            <div className="space-y-10">
                                <div className="flex items-start gap-8 group cursor-pointer transition-all">
                                    <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-500">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Primary Hub</h4>
                                        <p className="text-white text-2xl font-light italic leading-snug">
                                            Sector 62, Noida,<br />Uttar Pradesh 201301, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-8 group cursor-pointer transition-all">
                                    <div className="w-16 h-16 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-500">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Voice Comms</h4>
                                        <p className="text-white text-2xl font-light italic transition-colors">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-16 h-16 border border-white/5 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-500 group relative overflow-hidden">
                                    <Icon size={22} className="relative z-10 group-hover:scale-110 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>

                        {/* Mini FAQ */}
                        <div className="space-y-6 pt-16 border-t border-white/5">
                            {faqs.map((faq, index) => (
                                <Disclosure as="div" key={index} className="border-b border-white/5 pb-6">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex justify-between w-full text-left focus:outline-none group">
                                                <span className="text-base font-black text-gray-400 group-hover:text-gold transition-colors uppercase tracking-[0.2em]">{faq.question}</span>
                                                <ChevronUp
                                                    className={`${open ? 'transform rotate-180' : ''
                                                        } w-5 h-5 text-gray-600 group-hover:text-gold transition-all duration-300`}
                                                />
                                            </Disclosure.Button>
                                            <Transition
                                                enter="transition duration-500 ease-out"
                                                enterFrom="transform -translate-y-4 opacity-0"
                                                enterTo="transform translate-y-0 opacity-100"
                                                leave="transition duration-300 ease-out"
                                                leaveFrom="transform translate-y-0 opacity-100"
                                                leaveTo="transform -translate-y-4 opacity-0"
                                            >
                                                <Disclosure.Panel className="pt-6 text-gray-500 text-lg leading-relaxed font-light italic">
                                                    &quot;{faq.answer}&quot;
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
