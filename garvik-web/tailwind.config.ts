import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505", // Deep Rich Black
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#91268F", // Logo Purple
                    foreground: "#ffffff",
                    50: "#fdf4ff",
                    100: "#fae8ff",
                    200: "#f5d0fe",
                    300: "#f0abfc",
                    400: "#e879f9",
                    500: "#91268F",
                    600: "#d946ef",
                    700: "#c026d3",
                    800: "#a21caf",
                    900: "#86198f",
                },
                gold: {
                    DEFAULT: "#D4AF37", // Metallic Gold
                    foreground: "#18181b",
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#D4AF37",
                    600: "#ca8a04",
                    700: "#a16207",
                    800: "#854d0e",
                    900: "#713f12",
                },
                secondary: {
                    DEFAULT: "#18181b", // Deep Charcoal
                    foreground: "#e4e4e7",
                },
                accent: {
                    DEFAULT: "#D4AF37", // Gold as accent
                    foreground: "#18181b",
                },
                muted: {
                    DEFAULT: "#111111",
                    foreground: "#71717a",
                },
                card: {
                    DEFAULT: "rgba(15, 15, 15, 0.4)", // Premium glass
                    foreground: "#ffffff",
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                heading: ['var(--font-outfit)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-subtle': 'linear-gradient(to top right, #050505, #111111)',
                'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                'gradient-purple': 'linear-gradient(135deg, #91268F 0%, #d946ef 100%)',
                'mesh-purple': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.7s ease-out forwards',
                'scale-in': 'scaleIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
