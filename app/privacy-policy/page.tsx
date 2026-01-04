import { Header } from "@/components/header"
import PrivacyPolicyPage from "@/components/privacy-policy"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </div>
  )
}
