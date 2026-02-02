import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://garvikindia.com"),
  title: {
    default: "Garvik India | Architects of Brand Identity & Cinematic Advertising",
    template: "%s | Garvik India"
  },
  description: "Garvik India is a premier integrated brand management and advertising agency in Noida, Delhi NCR. We specialize in cinematic ad films, broadcast media, print advertising, event management, and futuristic digital strategies for global legacies.",
  keywords: [
    "advertising agency india",
    "brand management",
    "digital marketing",
    "ad film production",
    "creative agency noida",
    "integrated marketing",
    "cinematic advertising",
    "event management delhi ncr",
    "corporate films",
    "tv commercials india",
    "print media advertising",
    "brand identity design",
    "public relations agency",
    "road show marketing",
    "business conference organizer",
    "graphic design services",
    "marketing agency india"
  ],
  authors: [{ name: "Garvik India", url: "https://garvikindia.com" }],
  creator: "Garvik India",
  publisher: "Garvik India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://garvikindia.com",
  },
  openGraph: {
    title: "Garvik India | Architects of Brand Identity & Cinematic Advertising",
    description: "Transform your business into an iconic legacy. Premier advertising agency specializing in cinematic ad films, brand management, and integrated marketing solutions.",
    url: "https://garvikindia.com",
    siteName: "Garvik India",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garvik India - Premium Creative Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garvik India | Architects of Brand Identity",
    description: "Transform your business into an iconic legacy through cinematic advertising and digital excellence.",
    images: ["/og-image.png"],
    creator: "@garvikindia",
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "Advertising Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Garvik India",
    "description": "Premier integrated brand management and advertising agency in India",
    "url": "https://garvikindia.com",
    "logo": "https://garvikindia.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/garvikindia",
      "https://www.instagram.com/garvikindia",
      "https://www.linkedin.com/company/garvikindia",
      "https://twitter.com/garvikindia"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
