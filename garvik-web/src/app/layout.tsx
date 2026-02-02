import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ServiceWorkerRegistration } from "@/components/pwa/service-worker-registration";

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
  // Organization Schema
  const organizationSchema = {
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

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://garvikindia.com/#localbusiness",
    "name": "Garvik India",
    "image": "https://garvikindia.com/logo.png",
    "description": "Premium creative agency specializing in cinematic advertising, brand management, and digital marketing solutions in Noida, Delhi NCR.",
    "url": "https://garvikindia.com",
    "telephone": "+91-98765-43210",
    "email": "hello@garvikindia.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 62",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6273",
      "longitude": "77.3714"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Advertising and Marketing Agency",
    "provider": {
      "@type": "Organization",
      "name": "Garvik India"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Creative Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design",
            "description": "Complete brand identity development including logo, visual language, and brand guidelines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cinematic Ad Film Production",
            "description": "High-quality TV commercials and digital video advertisements with cinematic quality"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "Comprehensive digital marketing including social media, SEO, and paid advertising"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Management",
            "description": "Corporate events, product launches, and brand activations"
          }
        }
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Garvik India offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garvik India offers comprehensive creative services including brand identity design, cinematic ad film production, digital marketing, social media management, event management, print advertising, and public relations."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Garvik India located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garvik India is headquartered in Sector 62, Noida, Uttar Pradesh, India. We serve clients across Delhi NCR and throughout India."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a quote for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by filling out our contact form, calling us at +91-98765-43210, or reaching out via WhatsApp. We typically respond within 24 hours with a customized proposal."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Garvik India work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with diverse industries including technology, fashion, food & beverage, automotive, real estate, healthcare, education, and startups. Our versatile team adapts to each industry's unique needs."
        }
      }
    ]
  };

  const allSchemas = [organizationSchema, localBusinessSchema, serviceSchema, faqSchema];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        {allSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground min-h-screen flex flex-col selection:bg-primary-500 selection:text-white`}>
        <GoogleAnalytics />
        <ServiceWorkerRegistration />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
