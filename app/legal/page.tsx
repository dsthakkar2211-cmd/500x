import { Header } from "@/components/header"
import LegalInformationPage from "@/components/legal"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <LegalInformationPage />
      <Footer />
    </div>
  )
}
