import { Header } from "@/components/header"
import ContactPage from "@/components/contact"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  )
}
