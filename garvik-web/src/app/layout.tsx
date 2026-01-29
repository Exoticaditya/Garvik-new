import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Garvik India | Architects of Brand Identity & Cinematic Advertising",
    template: "%s | Garvik India"
  },
  description: "Garvik India is a premier integrated brand management and advertising agency. We specialize in cinematic ad films, broadcast media, and futuristic digital strategies for global legacies.",
  keywords: ["advertising agency india", "brand management", "digital marketing", "ad film production", "creative agency noida", "integrated marketing", "cinematic advertising"],
  authors: [{ name: "Garvik India" }],
  creator: "Garvik India",
  publisher: "Garvik India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Garvik India | Architects of Brand Identity",
    description: "Transforming businesses into icons through integrated advertising and digital excellence.",
    url: "https://garvikindia.com",
    siteName: "Garvik India",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Garvik India Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvik India | Architects of Brand Identity",
    description: "Transforming businesses into icons through integrated advertising and digital excellence.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-primary-500 selection:text-white`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
