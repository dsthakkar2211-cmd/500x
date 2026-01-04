import { Header } from "@/components/header"
import SecurityPage from "@/components/security"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SecurityPage />
      <Footer />
    </div>
  )
}
