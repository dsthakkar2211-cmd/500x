import { Header } from "@/components/header"
import Platform500xPage from "@/components/500x-platform"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Platform500xPage />
      <Footer />
    </div>
  )
}
