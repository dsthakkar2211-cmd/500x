"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, User, Mail, Phone, Clock, Globe } from "lucide-react"
import { useState } from "react"
import NavigationMenu from "./header_menu"
import Link from "next/link"
import { useChatbot } from "./chatbot-provider"
import { useLanguage } from "./language-provider"
import { Language } from "@/lib/translations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, setLanguage, t } = useLanguage()
  const { openChatbot } = useChatbot()

  const languages = [
    { code: "EN" as Language, name: "English" },
    { code: "HI" as Language, name: "हिन्दी" },
    { code: "GU" as Language, name: "ગુજરાતી" },
    { code: "AR" as Language, name: "العربية" },
    { code: "ES" as Language, name: "Español" },
    { code: "FR" as Language, name: "Français" },
    { code: "ZH" as Language, name: "中文" },
    { code: "PT" as Language, name: "Português" },
  ]

  const handleFreeTrialClick = () => {
    window.location.href = "https://client.500x.exchange/demo-create/"
  }

  const handleLoginClick = () => {
    window.location.href = "https://client.500x.exchange/"
  }

  const handleRequestDemoClick = () => {
    openChatbot()
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#181a20] text-white text-xs sm:text-sm !py-1">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center gap-3 flex-nowrap overflow-x-auto whitespace-nowrap sm:justify-between sm:flex-wrap sm:overflow-visible sm:whitespace-normal">
            {/* Left side: email + phone + support */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail size={14} className="text-[#848E9C]" />
                <span className="text-[#848E9C] hover:text-[#FCD535] transition-colors duration-200">
                  support@500x.pro
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={14} className="text-[#848E9C]" />
                <span className="text-[#848E9C] hover:text-[#FCD535] transition-colors duration-200">
                  +44 (7452) 323598
                </span>
              </div>
              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                <Clock size={14} className="text-[#848E9C]" />
                <span className="text-[#848E9C] hover:text-[#FCD535] transition-colors duration-200">
                  {t("header.24/7Support")}
                </span>
              </div>
            </div>

            {/* Right side: Help Center + Language Dropdown */}
            <div className="flex items-center gap-2 shrink-0 ml-auto sm:ml-0">
              <div className="relative group shrink-0">
              <button
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-[#1e2329]/50 hover:bg-[#1e2329] hover:border-[#fcd535]/30 hover:text-[#fcd535] transition-all duration-200 group"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                <Globe size={14} className="text-[#848E9C] group-hover:text-[#fcd535] transition-colors" />
                <span className="text-xs sm:text-sm font-medium">{language}</span>
                <ChevronDown size={12} className="text-[#848E9C] group-hover:text-[#fcd535] transition-colors" />
              </button>
              <div
                className="absolute top-full right-0 mt-2 w-44 bg-[#1e2329] rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm py-2 z-50
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                group-focus-within:opacity-100 group-focus-within:visible
                transition-all duration-200"
                role="menu"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2.5 text-white/90 hover:bg-[#fcd535]/10 hover:text-[#fcd535] transition-all duration-200 text-sm ${
                      language === lang.code ? "bg-[#fcd535]/15 text-[#fcd535] font-medium border-l-2 border-[#fcd535]" : ""
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center justify-between">
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="text-[#fcd535] text-xs">✓</span>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#181a20] shadow-sm border-[#181a20]">
        <div className="container mx-auto !px-1.5 sm:px-2 !py-1.5 sm:py-2">
          <div className="flex items-center justify-between">
            {/* Logo + Login */}
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <div className="flex items-center gap-2 min-w-0">
                <Link href="/" className="inline-block">
                  <img
                    src="/prologo.png"
                    alt="500x Logo"
                    className="h-8 w-auto sm:h-9 md:h-10 object-contain cursor-pointer"
                  />
                </Link>
              </div>

              {/* Login/Signup (hide on small) */}
              <div
                onClick={handleLoginClick}
                className="hidden lg:flex items-center gap-2 text-white hover:text-[#fcd535] transition-all duration-300 cursor-pointer group relative overflow-hidden px-3 py-2 rounded-md hover:bg-gray-20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcd535]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <User size={18} className="relative z-10" />
                <span className="text-sm font-medium relative z-10">{t("header.loginSignup")}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fcd535] group-hover:w-full transition-all duration-300" />
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6 ml-2">
              <NavigationMenu />
            </nav>

            {/* Buttons + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                onClick={handleRequestDemoClick}
                className="hidden md:block bg-[#fcd535] text-[#1e2329] px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:backdrop-blur-md hover:bg-opacity-70 hover:border hover:border-white/30 hover:text-[#fcd535] hover:bg-[#1e2329]"
              >
                {t("header.requestDemo")}
              </Button>

              <Button
                onClick={handleFreeTrialClick}
                className="hidden md:block bg-[#fcd535] text-[#1e2329] px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:backdrop-blur-md hover:bg-opacity-70 hover:border hover:border-white/30 hover:text-[#fcd535] hover:bg-[#1e2329]"
              >
                {t("header.startFreeTrial")}
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white p-2 -mr-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 space-y-3 rounded-md p-3 shadow-sm border border-white/10 bg-[#1e2329]/60 backdrop-blur-md backdrop-saturate-150">
              <NavigationMenu />
              <div className="flex flex-col gap-2 pt-1">
                <Button
                  onClick={handleRequestDemoClick}
                  className="border-2 border-[#fcd535] text-[#fcd535] hover:bg-[#f5e49e] hover:text-white w-full"
                >
                  {t("header.requestDemo")}
                </Button>
                <Button
                  onClick={handleFreeTrialClick}
                  className="bg-[#fcd535] hover:bg-[#f5e49e]/90 text-black w-full"
                >
                  {t("header.startFreeTrial")}
                </Button>
                <div className="flex justify-center items-center gap-2 text-white mt-1.5 hover:text-[#f5e49e]/50 transition-all">
                  <User size={18} />
                  <span className="text-sm font-medium">{t("header.loginSignup")}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
