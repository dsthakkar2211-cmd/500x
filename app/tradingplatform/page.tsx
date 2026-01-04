import { Header } from "@/components/header"
import  TradingPlatformPage  from "@/components/tradeingplatform"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <TradingPlatformPage />
      <Footer />
    </div>
  )
}
