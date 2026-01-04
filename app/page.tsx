import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProTrader5proBranding } from "@/components/Protrader-branding"
import { SolutionsSection } from "@/components/solutions-section"
import { MarketDataSection } from "@/components/market-data-section"
import { ReasonsSection } from "@/components/reasons-section"
import { TradingChallengeSection } from "@/components/trading-challenge-section"
import { StepByStepSection } from "@/components/step-by-step-section"
import { PlatformSection } from "@/components/platform-section"
import { NewsSection } from "@/components/tradeingplatform"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProTrader5proBranding />
      <SolutionsSection />
      <ReasonsSection />
      <TradingChallengeSection />
      <PlatformSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
