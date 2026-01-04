"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight, BarChart3, Bot, Shuffle, Network, Rocket, Phone, MessageCircle } from "lucide-react"
import { FeatureCard } from "./AI_card"
import { AnimatedStatsCard } from "./About_Card"
import { useChatbot } from "./chatbot-provider"

/* viewport mobile detector */
function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

/* count-up hook */
function useCountUp(target: number, { duration = 1200, start = 0 } = {}) {
  const [value, setValue] = useState(start)
  const startedRef = useRef(false)
  const elRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const t0 = performance.now()
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(start + (target - start) * eased)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.25 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, duration, start])

  return { value, ref: elRef }
}

/* phone-only 3-stat card */
function MobileStatsCard() {
  const { value: vol, ref: volRef } = useCountUp(2.5, { duration: 1400, start: 0 })
  const { value: brokers, ref: brokersRef } = useCountUp(500, { duration: 1100, start: 0 })
  const { value: latency, ref: latencyRef } = useCountUp(0.1, { duration: 1200, start: 0 })

  return (
    <div
      className="block lg:hidden rounded-2xl p-4 sm:p-5 bg-[#1e2329] 
      bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(252,213,53,0.12),transparent_55%)]
      border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="grid grid-cols-3 items-center text-center gap-2 sm:gap-4 divide-x divide-white/10">
        <div ref={volRef as any} className="px-1 sm:px-2">
          <div className="text-base sm:text-lg font-extrabold tracking-tight">
            <span className="text-[#fcd535]">₹{vol.toFixed(1)}B+</span>
          </div>
          <div className="text-[9px] sm:text-xs text-[#848E9C] mt-0.5">Monthly Volume</div>
        </div>

        <div ref={brokersRef as any} className="px-1 sm:px-2">
          <div className="text-base sm:text-lg font-extrabold tracking-tight text-white">
            {Math.round(brokers)}+
          </div>
          <div className="text-[9px] sm:text-xs text-[#848E9C] mt-0.5">Active Brokers</div>
        </div>

        <div ref={latencyRef as any} className="px-1 sm:px-2">
          <div className="text-base sm:text-lg font-extrabold tracking-tight text-[#fcd535]">
            {latency.toFixed(1)}ms
          </div>
          <div className="text-[9px] sm:text-xs text-[#848E9C] mt-0.5">Latency</div>
        </div>
      </div>
    </div>
  )
}

/* phone highlights list + dots */
function MobileHighlights({
  items,
  currentIndex,
  setCurrentIndex,
}: {
  items: { title: string; description: string; icon: any }[]
  currentIndex: number
  setCurrentIndex: (i: number) => void
}) {
  return (
    <div className="block lg:hidden space-y-4">
      {items.map((item, i) => {
        const Icon = item.icon
        const isActive = i === currentIndex
        return (
          <div
            key={`mhl-${i}`}
            className={`rounded-xl p-4 shadow-sm border transition-all duration-300 ${isActive
              ? "bg-white border-[#fcd535]-200 shadow-md ring-1 ring-[#fcd535]-100"
              : "bg-white/90 border-gray-100"
              }`}
          >
            <div className="flex items-start gap-3">
              <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#fcd535]" : "text-gray-300"}`} />
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold text-base ${isActive ? "text-gray-500" : "text-gray-700"}`}>
                  {item.title}
                </h4>
                <p className="text-sm text-[#848E9C] mt-1">{item.description}</p>
              </div>
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? "bg-[#fcd535]/20 text-[#1e2329]/80" : "bg-gray-100 text-gray-400"
                  }`}
              >
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        )
      })}

      <div className="flex justify-center gap-2 pt-1">
        {items.map((_, i) => (
          <button
            key={`dot-m-${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[#fcd535] w-8" : "bg-gray-300 w-2"
              }`}
            aria-label={`Go to item ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

/* data */
const rotatingContent = [
  { title: "Advanced Analytics", description: "Deep market analysis for smarter investment decisions.", icon: BarChart3 },
  { title: "AI Risk Management", description: "AI intelligence for automated risk and compliance.", icon: Bot },
  { title: "Multi-Asset Trading", description: "Seamless multi-asset trading with real-time execution.", icon: Shuffle },
  { title: "API Integration", description: "Powerful trading APIs for automation and insights.", icon: Network },
]

/* component */
export function AboutSection() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile(1024)
  const { openChatbot } = useChatbot()

  useEffect(() => {
    const t = setInterval(() => setCurrentIndex((p) => (p + 1) % rotatingContent.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="about"
      className="relative bg-[#1e2329]/10 py-5 sm:py-14 lg:py-24 overflow-hidden backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-2xl"
    >
      {/* background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-bl from-red-500 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 sm:gap-10 lg:gap-16 items-start">
          {/* RIGHT column (first on mobile) */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* desktop stats card */}
            <div className="hidden lg:block px-1 sm:px-4 md:px-8 rounded-2xl">
              <AnimatedStatsCard />
            </div>

            {/* highlights */}
            <div className="lg:space-y-4">
              {/* desktop stacked list */}
              <div className="hidden lg:block space-y-4">
                {rotatingContent.map((item, i) => {
                  const isActive = i === currentIndex
                  return (
                    <div
                      key={`d-${i}`}
                      className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 transform ${isActive
                        ? "scale-105 shadow-xl border-2 border-[#fcd535]-100"
                        : "scale-100 opacity-70 hover:opacity-100"
                        }`}
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <ChevronRight className={`w-5 h-5 ${isActive ? "text-[#fcd535]" : "text-gray-400"}`} />
                          <div className="flex-1 min-w-0">
                            <h4
                              className={`font-bold text-lg mb-2 ${isActive ? "text-gray-500" : "text-gray-700"}`}
                            >
                              {item.title}
                            </h4>
                            <p className="text-[#848E9C] text-sm break-words">{item.description}</p>
                          </div>
                        </div>
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${isActive ? "bg-[#fcd535]/20 text-[#1e2329]/80" : "bg-gray-100 text-gray-400"
                            }`}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* desktop dots */}
            <div className="hidden lg:flex justify-center gap-2">
              {rotatingContent.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-[#fcd535] w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* LEFT column (second on mobile) */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-7 lg:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-[#fcd535]" />
                <span className="text-[#fcd535] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  About Us
                </span>
              </div>

              <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-white leading-tight min-w-0 break-words whitespace-normal">
                Powering the Future of Trading
                <br /> with Artificial Intelligence
              </h2>

              <p className="text-[#848E9C] text-sm sm:text-lg leading-relaxed max-w-prose">
                500x.pro — a next-generation, multi-asset trading platform powered by <strong className="text-[#9d977e]">Autonomous AI Neural System</strong>{" "}
                , a Dubai-based AI and fintech company. Emphasize advanced AI-driven trading algorithms, institutional-grade market data, and a robust broker ecosystem delivering scalable white-label solutions for brokers, sub-brokers, and introducing brokers worldwide, with a focus on reliability, flexibility, and rapid market deployment.
              </p>

              {/* feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-5">
                <FeatureCard
                  icon={Rocket}
                  title="New: Smart Broker Panel"
                  description="Perfect for sub-brokers and IBs"
                  buttonText="Get Started"
                  variant="success"
                  onButtonClick={() => router.push("/for-owner")}
                />

                <FeatureCard
                  icon={Phone}
                  title="AI Voice Assistant Available"
                  description="Speak directly with our AI consultant - Get instant answers to complex questions"
                  buttonText="Try Voice Ai"
                  variant="info"
                  onButtonClick={() => console.log("Voice AI card clicked")}
                />

                <FeatureCard
                  icon={MessageCircle}
                  title="AI Chat Assistant Available"
                  description="Smart AI chat assistant, always ready to guide and support."
                  buttonText="AI Chat"
                  variant="info"
                  onButtonClick={openChatbot} // Open chatbot on AI Chat button click
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile-only: stats + highlights below the section */}
        <div className="lg:hidden mt-6 sm:mt-8 space-y-4 px-1">
          <MobileStatsCard />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <MobileHighlights items={rotatingContent} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </section>
  )
}
