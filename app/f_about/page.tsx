import { Header } from "@/components/header"
import AboutPage from "@/components/f_about"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}
