import { Header } from "@/components/header"
import ForOwnerPage from "@/components/for-owner"
import { Footer } from "@/components/footer"

export default function ForOwnerPageRoute() {
  return (
    <div className="min-h-screen">
      <Header />
      <ForOwnerPage />
      <Footer />
    </div>
  )
}
