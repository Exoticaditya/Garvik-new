"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categories } from "@/lib/blog-data";

export default function BlogPageContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-background text-white pt-32 pb-20">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-mesh opacity-30" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold border border-gold/30 rounded-full">
                        Insights & Ideas
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                        Our <span className="text-gradient-gold">Blog</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Expert insights on advertising, branding, and digital marketing to help your brand thrive.
                    </p>
                </motion.div>

                {/* Search & Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto mb-8">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                        />
                        <i className="fa-solid fa-search absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                    activeCategory === category
                                        ? "bg-gold text-black"
                                        : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative overflow-hidden mb-5 aspect-[16/10]">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-gold text-black text-xs font-bold uppercase">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <i className="fa-regular fa-calendar"></i>
                                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <i className="fa-regular fa-clock"></i>
                                        {post.readTime} min read
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                    {post.excerpt}
                                </p>

                                <span className="text-gold text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Read More <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <i className="fa-regular fa-face-frown text-6xl text-gray-600 mb-6 block"></i>
                        <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
                    </div>
                )}

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 p-10 md:p-16 bg-gradient-to-br from-primary/20 to-gold/10 border border-white/10 text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">
                        Stay <span className="text-gradient-gold">Updated</span>
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Get the latest marketing insights delivered straight to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-gold/50"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
