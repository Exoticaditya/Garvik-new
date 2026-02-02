import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-black text-white py-20 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 z-0 bg-mesh opacity-20" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                    <div className="lg:col-span-2">
                        <Logo className="mb-8" />
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light italic">
                            &quot;The Beginning Of Success&quot; - Garvik India is an architects&apos; house of brand identity, crafting legacies through cinematic advertising and futuristic digital strategies.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-gold">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Our Story</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Expertise</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">Work</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-gold">Reach Us</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary transition-all duration-500">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors pt-2">Noida, Uttar Pradesh, India</span>
                            </div>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold transition-all duration-500">
                                    <i className="fa-solid fa-phone text-gold"></i>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center space-x-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary transition-all duration-500">
                                    <i className="fa-solid fa-envelope text-primary"></i>
                                </div>
                                <span className="text-gray-400 group-hover:text-white transition-colors">contact@garvikindia.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Garvik India. All rights reserved.
                    </p>
                    <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                            Designed & Developed by{" "}
                            <a
                                href="https://garvikadvertising.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-black hover:text-gold transition-colors duration-300"
                            >
                                Garvik India
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

