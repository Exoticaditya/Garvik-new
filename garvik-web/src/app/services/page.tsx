import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Printer, Tv, Clapperboard, Award, Users, Map, PenTool, X } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Architects of Influence",
    description: "Discover the elite service suite of Garvik India. From cinematic ad films and broadcast media to 360° brand management and large-scale corporate summits.",
};

// Updated service list based on Screenshot + User Request
const services = [
    {
        id: 1,
        title: "Integrated Brand Mgmt",
        icon: Megaphone,
        short: "360° Brand Strategy",
        full: "Complete brand lifecycle management from identity creation to market positioning. We ensure your brand speaks one coherent language across all platforms.",
    },
    {
        id: 2,
        title: "Broadcast Advertising",
        icon: Tv,
        short: "TV & Radio Commercials",
        full: "High-impact television and radio commercials. We handle media buying, slot management, and creative direction to reach millions.",
    },
    {
        id: 3,
        title: "Print Media",
        icon: Printer,
        short: "Newspapers & Magazines",
        full: "Traditional print advertising remains a powerhouse. We design and place compelling ads in top-tier newspapers and magazines.",
    },
    {
        id: 4,
        title: "Ad Films",
        icon: Clapperboard,
        short: "Corporate Films & TVC",
        full: "End-to-end production of corporate films, TV commercials, and digital video content that tells your brand's story visually.",
    },
    {
        id: 5,
        title: "PR / Felicitations",
        icon: Award,
        short: "Public Relations Events",
        full: "Managing reputation and media relations through strategic PR events, press conferences, and award felicitation ceremonies.",
    },
    {
        id: 6,
        title: "Business Conferences",
        icon: Users,
        short: "Corporate Meets & Summits",
        full: "Seamless execution of large-scale business conferences, summits, and dealer meets with premium hospitality and logistics.",
    },
    {
        id: 7,
        title: "Product Road Show",
        icon: Map,
        short: "BTL Activations",
        full: "Taking your product to the consumer. We organize multi-city road shows and van activations for direct consumer engagement.",
    },
    {
        id: 8,
        title: "Creative Design",
        icon: PenTool,
        short: "Visual Identity & Content",
        full: "World-class graphic design, logo creation, and content writing services to support all your marketing collateral.",
    },
];

export default function ServicesPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Extraordinary Hero */}
            <section className="relative py-32 px-4 text-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 bg-mesh opacity-20" />
                <div className="container relative z-10 mx-auto">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-gold font-black uppercase text-xs mb-6 block"
                    >
                        The Pillars of Dominance
                    </motion.span>
                    <h1 className="text-7xl md:text-9xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                        Our <span className="text-gradient-purple">Expertise</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 font-light leading-relaxed tracking-wide italic">
                        &quot;Mastery in variety, excellence in consistency.&quot; Delivering industry-leading results in Events, Advertising, and cinematic Production.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 -mt-24 relative z-10 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layoutId={`card-${service.id}`}
                            onClick={() => setSelectedId(service.id)}
                            className="group cursor-pointer glass-dark border border-white/5 p-10 hover:border-gold transition-all duration-500 relative overflow-hidden"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <service.icon size={120} />
                            </div>

                            <div className="w-16 h-16 border border-gold/20 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                <service.icon size={28} />
                            </div>
                            <motion.h3 layoutId={`title-${service.id}`} className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">
                                {service.title}
                            </motion.h3>
                            <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide italic">{service.short}</p>

                            <div className="mt-8 w-12 h-[2px] bg-gold/30 group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl" onClick={() => setSelectedId(null)}>
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="glass-dark w-full max-w-3xl border border-gold/30 p-12 md:p-20 relative shadow-[0_0_100px_rgba(212,175,55,0.1)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-gold hover:text-black transition-all text-white border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            {(() => {
                                const service = services.find(s => s.id === selectedId)!;
                                return (
                                    <>
                                        <div className="flex items-center gap-8 mb-12">
                                            <div className="w-20 h-20 bg-gold text-black flex items-center justify-center border border-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                                <service.icon size={40} />
                                            </div>
                                            <motion.h3 layoutId={`title-${service.id}`} className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                                                {service.title}
                                            </motion.h3>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-2xl text-gray-300 leading-relaxed mb-12 border-l-4 border-gold pl-10 font-light italic">
                                                {service.full}
                                            </p>
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-gold hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                            >
                                                <span className="relative z-10">Initiate Project</span>
                                                <div className="absolute inset-0 bg-gold-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </button>
                                        </motion.div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

