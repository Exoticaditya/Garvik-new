import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCaseStudyBySlug, caseStudies } from "@/lib/case-studies-data";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        return {
            title: "Case Study Not Found",
        };
    }

    return {
        title: `${study.title} | Case Study | Garvik India`,
        description: study.challenge.slice(0, 160),
        openGraph: {
            title: study.title,
            description: study.challenge.slice(0, 160),
            images: [{ url: study.images.hero }],
        },
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-white">
            {/* Hero */}
            <div className="relative h-[60vh] md:h-[70vh]">
                <Image
                    src={study.images.hero}
                    alt={study.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-6"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            <span className="text-sm uppercase tracking-wider">All Case Studies</span>
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                            {study.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-400">
                            <span>{study.client}</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span>{study.industry}</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span>{study.year}</span>
                            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            <span>{study.duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {study.results.map((result, i) => (
                        <div
                            key={i}
                            className="p-6 bg-white/5 border border-white/10 text-center"
                        >
                            <div className="text-3xl md:text-4xl font-black text-gradient-gold mb-2">
                                {result.value}
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">
                                {result.metric}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {/* Challenge */}
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
                            The <span className="text-gradient-gold">Challenge</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {study.challenge}
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
                            Our <span className="text-gradient-gold">Solution</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
                        Project <span className="text-gradient-gold">Gallery</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {study.images.gallery.map((img, i) => (
                            <div
                                key={i}
                                className="relative aspect-[4/3] overflow-hidden border border-white/10"
                            >
                                <Image
                                    src={img}
                                    alt={`${study.title} gallery ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                    <div className="mb-20 p-10 md:p-16 bg-gradient-to-br from-primary/10 to-gold/5 border border-gold/20 text-center">
                        <i className="fa-solid fa-quote-left text-gold text-4xl mb-6"></i>
                        <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto">
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <div>
                            <p className="text-gold font-bold">{study.testimonial.author}</p>
                            <p className="text-gray-500 text-sm">{study.testimonial.role}</p>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <div className="text-center py-16 border-t border-white/10">
                    <h3 className="text-3xl font-black mb-4">
                        Ready for Similar <span className="text-gradient-gold">Results?</span>
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Let&apos;s discuss how we can transform your brand and drive measurable growth for your business.
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
