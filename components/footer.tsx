"use client"
import Link from "next/link";
import { useChatbot } from "./chatbot-provider";
import { useLanguage } from "./language-provider";

import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react"

export function Footer() {
  const { openChatbot } = useChatbot();
  const { t } = useLanguage();

  const links = [
    { label: t("footer.home"), href: "/" },
    { label: t("footer.aboutUs"), href: "/f_about" },
    { label: t("footer.contactUs"), href: "/contact" },
    { label: t("footer.privacyPolicy"), href: "/privacy-policy" },
    { label: t("footer.support"), href: "/support", isChatbot: true },
    { label: t("Help Center") || "Help Center", href: "https://help.500x.pro", isExternal: true },
  ];
  return (
    <footer className="bg-[#181a20] text-white py-6 sm:py-7 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">

        {/* Brand + Social (compact) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-7">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="inline-block">
              <img
                src="/prologo.png"
                alt="500x Logo"
                className="h-10 w-auto sm:h-12 md:h-14 object-contain cursor-pointer"
              />
            </Link>
          </div>


          <div className="flex gap-2">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#fcd535] group"
              >
                <Icon className="w-3.5 h-3.5 group-hover:text-black transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* MAIN GRID - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-6 md:mb-7">
          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-sm sm:text-[15px] mb-2.5 sm:mb-3">
              {t("footer.usefulLinks")}
            </h4>

            <ul className="space-y-1.5 text-[13px] sm:text-sm text-white/70">
              {links.map((link) => (
                <li key={link.label}>
                  {link.isChatbot ? (
                    <button
                      onClick={openChatbot}
                      className="hover:text-[#fcd535] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {link.label}
                    </button>
                  ) : link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fcd535] flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="hover:text-[#fcd535] flex items-center gap-1.5 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 shrink-0" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Trader Solution */}
          <div>
            <h4 className="font-semibold text-sm sm:text-[15px] mb-2.5 sm:mb-3">{t("footer.traderSolution")}</h4>
            <ul className="space-y-1.5 text-[13px] sm:text-sm text-white/70">
              {[
                { label: t("footer.tradingPlatform"), href: "/tradingplatform" },
                { label: t("footer.forOwner"), href: "/for-owner" },
                { label: t("footer.forBroker"), href: "/for-broker" },
                { label: t("footer.buyPlatform"), href: "/buy-the-platform" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#fcd535] flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 shrink-0" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out - Full width on mobile, then grid column on desktop */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm sm:text-[15px] mb-2.5 sm:mb-3">{t("footer.reachOut")}</h4>
            <div className="text-[13px] sm:text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 mb-0.5"><span className="text-[12px] text-[#848E9C]">General Inquiries:</span></p>
                  <a href="mailto:info@500x.pro" className="text-white hover:text-[#fcd535] break-all">
                    info@500x.pro
                  </a>
                </div>
                <div>
                  <p className="text-white/70 mb-0.5"><span className="text-[12px] text-[#848E9C]">Support:</span></p>
                  <a href="mailto:support@500x.pro" className="text-white hover:text-[#fcd535] break-all">
                    support@500x.pro
                  </a>
                </div>
                <div>
                  <p className="text-white/70 mb-0.5"><span className="text-[12px] text-[#848E9C]">WhatsApp:</span></p>
                  <a href="https://wa.me/447452323598" className="text-white hover:text-[#fcd535]">+44 7452 323598</a>
                </div>
                <div>
                  <p className="text-white/70 mb-0.5"><span className="text-[12px] text-[#848E9C]">Phone:</span></p>
                  <a href="tel:+447452323598" className="text-white hover:text-[#fcd535]">+44 7452 323598</a>
                </div>
              </div>
            </div>
          </div>

          {/* Stay Updated - Full width on mobile, then grid column on desktop */}
          <div className="col-span-2 md:col-span-1">
            {/* Newsletter */}
            <h4 className="font-semibold text-sm sm:text-[15px] mb-2.5 sm:mb-3">{t("footer.stayUpdated")}</h4>
            <form
              onSubmit={(e) => { e.preventDefault(); /* your submit handler here */ }}
              className="w-full mb-4"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex w-full">
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  required
                  placeholder={t("footer.emailPlaceholder")}
                  className="
                              flex-1
                              px-3 md:px-4
                              py-2 md:py-2.5
                              text-[13px] sm:text-[14px] md:text-sm
                              rounded-l-md
                              bg-white/10
                              text-white
                              placeholder-white/50
                              border border-white/20
                              focus:outline-none focus:ring-2 focus:ring-[#fcd535] focus:border-transparent
                              transition
                            "
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="
                            shrink-0
                            bg-[#fcd535]
                            hover:bg-[#f5e49e]
                            transition
                            px-3 md:px-4
                            py-2 md:py-2.5
                            rounded-r-md
                            flex items-center justify-center
                          "
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>

            {/* Payments */}
            <div className="grid grid-cols-5 gap-2">
              {[
                "/visa-logo-generic.png",
                "/mastercard-logo.png",
                "/paypal-logo.png",
                "/american-express-logo.png",
                "/crypto-payment-logo.jpg",
              ].map((src, i) => (
                <div key={i} className="bg-white rounded p-2 flex items-center justify-center">
                  <img src={src} alt="payment" loading="lazy" className="h-5 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Apps - centered below the grid */}
        <div className="mt-6 md:mt-8 flex flex-col items-center justify-center">
          <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-4 w-full overflow-x-auto">
            {/* App download icons */}
            {[
              { href: "#", label: "Windows", icon: "/window.svg" },
              { href: "#", label: "macOS", icon: "/mac-logo.svg" },
              { href: "#", label: "Android", icon: "/android.svg" },
              { href: "#", label: "iOS", icon: "/ios.svg" },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={[
                  // layout
                  "w-16 h-16 sm:w-20 sm:h-20 rounded-xl p-[1px] shrink-0",
                  // remove gradient border → use subtle glass rim on hover
                  "bg-transparent",
                  // interaction
                  "transition-all duration-200",
                  "hover:-translate-y-0.5 active:translate-y-0",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-xl",
                ].join(" ")}
              >
                <div
                  className={[
                    // glassmorphism tile
                    "rounded-lg border border-white/15",
                    "bg-[#181a20]",
                    "p-3 sm:p-4",
                    "flex flex-col items-center justify-center gap-1.5",
                    "w-full h-full",
                    // soft shadow + hover glow
                    "shadow-[0_4px_20px_rgba(0,0,0,0.25)]",
                    "hover:shadow-[0_6px_28px_rgba(255,255,255,0.08)]",
                  ].join(" ")}
                >
                  <img
                    src={icon}
                    alt={label}
                    loading="lazy"
                    className={[
                      // icon gets a touch bigger and floats slightly on hover
                      "h-6 w-6 sm:h-7 sm:w-7 object-contain",
                      "transition-transform duration-200",
                      "group-hover:scale-105",
                    ].join(" ")}
                  />
                  {/* label hidden on mobile, shown from sm */}
                  <span
                    className={[
                      "hidden sm:inline text-xs font-medium",
                      // subtle glassy gradient text
                      "text-white/90",
                      "tracking-tight",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Copyright (compact) */}
        <div className="border-t border-white/10 pt-4 mt-6">
          <div className="text-center text-[12px] sm:text-[13px] text-white/60">
            {t("footer.copyright")}{" "}
            <span className="text-[#fcd535]">500x</span>.{" "}
            <a
              href="./legal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t("footer.legalInfo")}
            </a>
            .
          </div>


        </div>
      </div>
    </footer>
  )
}
