"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, blogPosts } from "@/lib/blog-data";

interface Props {
    post: BlogPost;
}

export default function BlogPostContent({ post }: Props) {
    const relatedPosts = blogPosts
        .filter((p) => p.id !== post.id && p.category === post.category)
        .slice(0, 2);

    return (
        <main className="min-h-screen bg-background text-white pt-32 pb-20">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-mesh opacity-30" />

            <article className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Back to Blog
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gold border border-gold/30">
                        {post.category}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-gray-400">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                                <i className="fa-solid fa-user text-gold"></i>
                            </div>
                            <div className="text-left">
                                <p className="text-white font-medium">{post.author.name}</p>
                                <p className="text-xs">{post.author.role}</p>
                            </div>
                        </div>
                        <span className="w-px h-8 bg-white/20"></span>
                        <span className="flex items-center gap-2">
                            <i className="fa-regular fa-calendar"></i>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </span>
                        <span className="flex items-center gap-2">
                            <i className="fa-regular fa-clock"></i>
                            {post.readTime} min read
                        </span>
                    </div>
                </motion.header>

                {/* Cover Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-[21/9] mb-12 overflow-hidden max-w-5xl mx-auto"
                >
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-gold prose-strong:text-white prose-blockquote:border-l-gold"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
                />

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-3xl mx-auto mt-12 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-wrap gap-3">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 bg-white/5 text-gray-400 text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Share */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-3xl mx-auto mt-8 flex items-center gap-4"
                >
                    <span className="text-gray-400">Share:</span>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://garvikindia.com/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#1DA1F2] transition-colors"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://garvikindia.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#0A66C2] transition-colors"
                    >
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://garvikindia.com/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-[#1877F2] transition-colors"
                    >
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </motion.div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-20 max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl font-black uppercase mb-8 text-center">
                            Related <span className="text-gradient-gold">Articles</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block"
                                >
                                    <div className="relative overflow-hidden mb-4 aspect-[16/10]">
                                        <Image
                                            src={relatedPost.coverImage}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-lg font-bold group-hover:text-gold transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                </Link>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 p-10 md:p-16 bg-gradient-to-br from-primary/20 to-gold/10 border border-white/10 text-center max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl font-black uppercase mb-4">
                        Ready to Transform Your <span className="text-gradient-gold">Brand</span>?
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Let&apos;s create something extraordinary together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </article>
        </main>
    );
}
