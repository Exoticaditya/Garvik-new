import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies-data";

export const metadata: Metadata = {
    title: "Case Studies | Garvik India - Success Stories",
    description: "Explore our portfolio of successful brand transformations, marketing campaigns, and creative projects. See how we've helped businesses achieve extraordinary results.",
    openGraph: {
        title: "Case Studies | Garvik India",
        description: "Success stories and client transformations from India's premier creative agency.",
    },
};

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-background text-white pt-32 pb-20">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-mesh opacity-30" />
            <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
            <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[140px]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 rounded-full">
                        Case Studies
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        Success <span className="text-gradient-gold">Stories</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Deep dives into our most impactful projects. See how we transform brands and drive measurable results.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <Link
                            key={study.id}
                            href={`/case-studies/${study.slug}`}
                            className={`group relative overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500 ${
                                index === 0 ? "md:col-span-2" : ""
                            }`}
                        >
                            {/* Image */}
                            <div className={`relative overflow-hidden ${index === 0 ? "h-[400px]" : "h-[300px]"}`}>
                                <Image
                                    src={study.images.hero}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.services.slice(0, 3).map((service, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold"
                                        >
                                            {service}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-gold transition-colors">
                                    {study.title}
                                </h2>

                                <p className="text-gray-400 text-sm mb-4">
                                    {study.client} • {study.industry}
                                </p>

                                {/* Key Result */}
                                <div className="flex items-center gap-4">
                                    <div className="text-gold text-3xl font-black">
                                        {study.results[0].value}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {study.results[0].description}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="absolute right-6 bottom-6 w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                                    <i className="fa-solid fa-arrow-right text-white group-hover:text-black transition-colors"></i>
                                </div>
                            </div>

                            {/* Featured Badge */}
                            {study.featured && (
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gold text-black text-[10px] font-bold uppercase tracking-wider">
                                        Featured
                                    </span>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        Ready to become our next success story?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-5 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold/90 transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </main>
    );
}
