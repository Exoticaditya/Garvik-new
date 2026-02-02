"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";

export function GoogleAnalytics() {
    // Check for consent before loading analytics
    const hasConsent = () => {
        if (typeof window === "undefined") return false;
        try {
            const consent = localStorage.getItem("garvik-cookie-consent");
            if (consent) {
                const parsed = JSON.parse(consent);
                return parsed.analytics === true;
            }
        } catch {
            return false;
        }
        return false;
    };

    // Only load GA if consent is given
    if (typeof window !== "undefined" && !hasConsent()) {
        return null;
    }

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
}

// Analytics event helpers
export const analyticsEvents = {
    pageView: (url: string) => {
        if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
            (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("config", GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    },
    event: (action: string, category: string, label?: string, value?: number) => {
        if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
            (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        }
    },
    contactFormSubmit: () => {
        analyticsEvents.event("submit", "Contact Form", "Contact Page");
    },
    portfolioView: (projectName: string) => {
        analyticsEvents.event("view", "Portfolio", projectName);
    },
    serviceClick: (serviceName: string) => {
        analyticsEvents.event("click", "Services", serviceName);
    },
    whatsappClick: () => {
        analyticsEvents.event("click", "WhatsApp", "Chat Button");
    },
};
