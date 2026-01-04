import { Header } from "@/components/header"
import PaymentGatewaysPage from "@/components/payment"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PaymentGatewaysPage />
      <Footer />
    </div>
  )
}
