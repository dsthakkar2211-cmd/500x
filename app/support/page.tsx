import { Header } from "@/components/header"
import SupportChatPage from "@/components/support"
//import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <SupportChatPage />
      <Footer />
    </div>
  )
}
