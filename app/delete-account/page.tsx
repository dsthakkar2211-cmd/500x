import { Header } from "@/components/header"
import DeleteAccountPage from "@/components/delete-account"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Delete Account – 500X App",
  description:
    "Request account deletion for 500X. Email support@500x.pro with your registered email or username. We delete your account within 7 working days.",
}

export default function DeleteAccountRoute() {
  return (
    <div className="min-h-screen">
      <Header />
      <DeleteAccountPage />
      <Footer />
    </div>
  )
}
