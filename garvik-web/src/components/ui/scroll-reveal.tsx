"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale" | "stagger";
    delay?: number;
    duration?: number;
    once?: boolean;
    threshold?: number;
}

const variants: Record<string, Variants> = {
    fadeUp: {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    fadeLeft: {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    stagger: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }
};

export function ScrollReveal({
    children,
    className = "",
    variant = "fadeUp",
    delay = 0,
    duration = 0.6,
    once = true,
    threshold = 0.2
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children container
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1,
    once = true
}: StaggerContainerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// Parallax scroll effect
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: -50 * speed }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Text reveal animation (word by word)
interface TextRevealProps {
    text: string;
    className?: string;
    wordClassName?: string;
}

export function TextReveal({ text, className = "", wordClassName = "" }: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className={`inline-block mr-[0.25em] ${wordClassName}`}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

// Counter animation
interface CounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export function Counter({ end, duration = 2, prefix = "", suffix = "", className = "" }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
            {prefix}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {isInView && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <CounterNumber end={end} duration={duration} isInView={isInView} />
                    </motion.span>
                )}
            </motion.span>
            {suffix}
        </motion.span>
    );
}

function CounterNumber({ end, duration, isInView }: { end: number; duration: number; isInView: boolean }) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    if (isInView && nodeRef.current) {
        const start = 0;
        const startTime = performance.now();

        const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentCount = Math.floor(start + (end - start) * easeProgress);

            if (nodeRef.current) {
                nodeRef.current.textContent = currentCount.toString();
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else if (nodeRef.current) {
                nodeRef.current.textContent = end.toString();
            }
        };

        requestAnimationFrame(updateCount);
    }

    return <span ref={nodeRef}>0</span>;
}
