import { CallToActionSection } from "@/components/landing/call-to-action-section";
import { DesignPhilosophySection } from "@/components/landing/design-philosophy-section";
import { ExitIntentPopup } from "@/components/landing/exit-intent-popup"; // New
import { FeaturesHighlightSection } from "@/components/landing/features-highlight-section";
import { Footer } from "@/components/landing/footer";
import { FreeAppBanner } from "@/components/landing/free-app-banner";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { PersonalizedPathFinder } from "@/components/landing/personalized-path-finder";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { ScreenshotsSection } from "@/components/landing/screenshots-section";
import { UserBenefitsSection } from "@/components/landing/user-benefits-section";
import { WhatTheAppDoesSection } from "@/components/landing/what-the-app-does-section";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "iOS, Android",
    applicationCategory: "Lifestyle",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9", // Placeholder value
      ratingCount: "256", // Placeholder value
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: siteConfig.description,
    url: siteConfig.url,
    screenshot: [
      `${siteConfig.url}/screenshot-1.jpg`,
      `${siteConfig.url}/screenshot-2.jpg`,
      `${siteConfig.url}/screenshot-3.jpg`,
      `${siteConfig.url}/screenshot-4.jpg`,
    ],
  };

  return (
    <div className="flex flex-col min-h-dvh bg-vos-bg-light text-vos-text-primary selection:bg-vos-accent/30 selection:text-vos-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FreeAppBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatTheAppDoesSection />
        <FeaturesHighlightSection />
        <UserBenefitsSection />
        <PersonalizedPathFinder />
        <ReviewsSection />
        <DesignPhilosophySection />
        <ScreenshotsSection />
        <CallToActionSection />
      </main>
      <Footer />
      <ExitIntentPopup /> {/* Added Exit Intent Popup */}
    </div>
  );
}
