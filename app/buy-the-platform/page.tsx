import { Header } from "@/components/header"
import BuyThePlatformPage from "@/components/buy-the-platform"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BuyThePlatformPage />
      <Footer />
    </div>
  )
}
