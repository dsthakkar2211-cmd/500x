import { Header } from "@/components/header"
import AITradingSystem from "@/components/AI_tradeing"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AITradingSystem />
      <Footer />
    </div>
  )
}
