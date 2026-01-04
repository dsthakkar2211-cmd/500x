import { Header } from "@/components/header"
import ForBrokerPage from "@/components/for-broker"
import { Footer } from "@/components/footer"

export default function ForBrokerPageRoute() {
  return (
    <div className="min-h-screen">
      <Header />
      <ForBrokerPage />
      <Footer />
    </div>
  )
}

