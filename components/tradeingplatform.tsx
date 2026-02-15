"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"

import {
  Rocket,
  Shield,
  BarChart3,
  ArrowRight,
  Smartphone,
  Layers,
  Bell,
  Server,
  Store,
  Calendar,
  Clock3,
  Code2,
  Copy,
  Signal,
  Star,
  Play,
  ExternalLink,
  ActivityIcon,
  TrendingUp,
} from "lucide-react"

// shadcn carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import { trace } from "node:console"
import { transferableAbortController } from "node:util"

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const tryPlay = async () => {
      try {
        v.muted = true
        // @ts-ignore – iOS inline hint
        v.setAttribute("playsinline", "true")
        await v.play()
        setNeedsTap(false)
      } catch {
        setNeedsTap(true)
      }
    }

    if (v.readyState >= 1) tryPlay()
    else v.addEventListener("loadedmetadata", tryPlay, { once: true })
  }, [])

  const handleTap = async () => {
    const v = videoRef.current
    if (!v) return
    try {
      v.muted = true
      // @ts-ignore
      v.setAttribute("playsinline", "true")
      await v.play()
      setNeedsTap(false)
    } catch {
      v.controls = true
    }
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        loop
        preload="metadata"
        // @ts-ignore
        webkit-playsinline="true"
        poster="/client/c-01.jpg"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#181a20]/80 z-10 pointer-events-none" />

      {needsTap && (
        <button
          onClick={handleTap}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white z-20"
          aria-label="Play background video"
        >
          <svg width="64" height="64" viewBox="0 0 24 24" className="drop-shadow">
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.8" />
            <polygon points="10,8 16,12 10,16" fill="#111827" />
          </svg>
        </button>
      )}
    </div>
  )
}

/** Small “live” counters (kept, but 500x-relevant) */
function DynamicStats() {
  const [stats, setStats] = useState([
    { number: 0, target: 21, label: "Timeframes", suffix: "" },
    { number: 0, target: 38, label: "Built-in Indicators", suffix: "" },
    { number: 0, target: 44, label: "Analytical Objects", suffix: "" },
    { number: 0, target: 100, label: "Charts at Once", suffix: "" },
  ])

  useEffect(() => {
    const duration = 1800
    const steps = 60
    const interval = duration / steps
    const timers = stats.map((_s, idx) => {
      let step = 0
      return setInterval(() => {
        step++
        setStats((prev) =>
          prev.map((s, i) =>
            i === idx ? { ...s, number: Math.min(s.target, Math.round((s.target / steps) * step)) } : s
          )
        )
      }, interval)
    })
    const endTimer = setTimeout(() => timers.forEach(clearInterval), duration + 120)
    return () => {
      timers.forEach(clearInterval)
      clearTimeout(endTimer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="transition-all duration-700 ease-out transform hover:scale-105"
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#fcd535]">
            {stat.number}
            {stat.suffix}
          </div>
          <div className="text-white/90 mt-1 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

/** --------- IMAGE SLIDER (like your screenshot) --------- */
type PlatformSlide = {
  title: string
  subtitle: string
  description: string
  note?: string
  imageSrc: string
}

function useEmblaSelectedIndex(api: any) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setIndex(api.selectedScrollSnap())
    onSelect()
    api.on("select", onSelect)
    return () => api.off("select", onSelect)
  }, [api])

  return index
}

function PlatformImageSlider() {
  const slides: PlatformSlide[] = useMemo(
    () => [
      {
        title: "500x Trading Platform",
        description:
          "All-in-one market trading interface displaying crypto, commodities, forex, indices, and real-time analytics.",
        imageSrc: "/client/c-01.jpg",
      },
      {
        title: "Active Trading Platform",
        description:
          "Modern trading terminal for traders enabling instant buy sell execution with real time data",
        imageSrc: "/client/c-02.jpg",
      },
      {
        title: "Live Positions & Portfolio Management",
        description:
          "Monitor open trades, real time profits, margins, equity levels, and manage positions with instant controls",
        imageSrc: "/client/c-03.jpg",
      },
      {
        title: "Trade History & Execution Reports",
        description:
          "Review complete trade history with timestamps, commissions, booked profit loss, filters, and detailed execution records",
        imageSrc: "/client/c-04.jpg",
      },
      {
        title: "Active Positions Management",
        description:
          "Manage open positions with real time profit loss tracking, margins, stop loss, take profit controls",
        imageSrc: "/client/c-05.jpg",
      },
      {
        title: "Wallet Balance & Transaction History",
        description:
          "View estimated balance, manage funds, track deposits, download statements, and monitor transaction status easily",
        imageSrc: "/client/c-06.jpg",
      },
      {
        title: "Notifications & Alerts control",
        description:
          "Control trading alerts, system notifications, market updates, and important account messages in real time easily",
        imageSrc: "/client/c-07.jpg",
      },
      {
        title: "User Settings & Controls",
        description:
          "Access notifications, security options, brokerage settings, leverage controls, logs, and account preferences from one place",
        imageSrc: "/client/c-08.jpg",
      },
    ],
    []
  )

  const [api, setApi] = useState<any>(null)
  const activeIndex = useEmblaSelectedIndex(api)

  // ✅ Autoplay plugin instance (stable)
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  )

  const total = slides.length
  const current = activeIndex + 1
  const activeSlide = slides[activeIndex] ?? slides[0]

  return (
    <div className="mt-10 sm:mt-12">
      <div className="bg-[#1e2329]/30 backdrop-blur-md border border-[#848E9C]/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true }} plugins={[autoplayRef.current]}>
            <CarouselContent>
              {slides.map((s, i) => (
                <CarouselItem key={`${s.title}-${i}`}>
                  <div className="relative w-full aspect-[16/9] bg-[#0b0e11]">
                    <Image src={s.imageSrc} alt={s.title} fill className="object-contain" priority={i === 0} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 sm:left-4 bg-[#0b0e11]/70 border-[#848E9C]/30 text-white hover:bg-[#0b0e11]" />
            <CarouselNext className="right-3 sm:right-4 bg-[#0b0e11]/70 border-[#848E9C]/30 text-white hover:bg-[#0b0e11]" />

            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2.5 py-1 rounded-md bg-[#0b0e11]/75 border border-[#848E9C]/30 text-xs sm:text-sm text-white">
              {current} / {total}
            </div>
          </Carousel>
        </div>

        <div className="p-5 sm:p-7">
          <h3 className="text-lg sm:text-2xl font-bold text-white">{activeSlide.title}</h3>
          <p className="text-[#fcd535] font-semibold mt-1 text-sm sm:text-base">{activeSlide.subtitle}</p>
          <p className="text-[#848E9C] mt-3 leading-relaxed text-sm sm:text-base">{activeSlide.description}</p>
          {activeSlide.note ? (
            <p className="text-[#848E9C] mt-4 leading-relaxed text-sm sm:text-base">{activeSlide.note}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

/** ✅ NEW: Flexible Trading System card (replaces platform highlights on left side in Highlights section) */
function FlexibleTradingSystemCard() {
  return (
    <div className="space-y-5">
      <div className="overflow-hidden ">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/client/c-10.png"
            alt="Flexible trading system"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Multi-Asset Trading Platform</h3>

        <p className="text-[#c9d1d9] leading-relaxed">
          Trade global markets seamlessly with real-time execution, advanced analytics, and professional-grade trading infrastructure.
        </p>
      </div>

      <div className="space-y-4 text-[#848E9C] leading-relaxed">
        <p>
          Experience a powerful, multi-asset trading platform designed for active traders and institutions alike.
          The platform delivers real-time market data, fast order execution, advanced risk management tools, and a unified interface across desktop and mobile devices. With comprehensive analytics, flexible trading controls, and secure account management, traders gain full visibility and control over portfolios, margins, and performance—anytime, anywhere.
        </p>
      </div>
    </div>
  )
}


/** ✅ Trading Signals and Copy Trading section - Simple layout matching image */
function TradingSignalsSection() {
  return (
    <section id="signals" className="py-2 px-4 bg-[#181a20] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Web & Mobile <span className="text-[#fcd535]">Trading</span>
          </h2>
        </div>

        {/* Full-size Image */}
        <div className="mb-8 sm:mb-12">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/client/c-11.png"
              alt="Web & Mobile Trading"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text Content Below Image */}
        <div className="mx-auto space-y-6 text-[#848E9C] leading-relaxed text-base sm:text-lg">
          <p>
            Web and mobile trading have redefined market participation by removing traditional constraints of location, hardware, and operating systems. Through smartphones, tablets, and web browsers, traders gain uninterrupted access to global financial markets with professional-grade functionality. Mobile trading applications on Android and iOS allow users to open and close positions, modify orders, manage risk, and monitor accounts in real time. Despite the compact interface, advanced analytical tools such as interactive charts, multiple timeframes, technical indicators, and alerts enable effective market analysis and timely decision-making, ensuring traders remain connected and responsive wherever they are.
          </p>

          <p>
            Web trading complements mobility by offering full-featured market access directly through any modern browser, without the need for installation. Compatible across Windows, macOS, and Linux, browser-based platforms provide a rich trading environment that mirrors desktop capabilities, including charting, order placement, and position management. With seamless synchronization between web and mobile platforms, traders can switch devices effortlessly while maintaining full control over their accounts. Together, web and mobile trading deliver a unified, flexible, and efficient trading experience that empowers users to act on opportunities anytime and anywhere.
          </p>
        </div>
      </div>
    </section>
  )
}

/** ✅ 500x Trading Platform Section */
function Platform500xSection() {
  return (
    <section className="py-1 px-4 bg-[#181a20] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-30 sm:w-64 md:w-80">
            <Image
              src="/prologo.png"
              alt="500x Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* First Paragraph */}
        <div className="mb-6 mx-auto space-y-6 text-[#848E9C] leading-relaxed text-base sm:text-lg">
          <p>
            Our institutional-grade multi-asset trading platform is designed to deliver high-performance execution with leverage of up to 500x, enabling traders to maximize market exposure while maintaining precise control over their positions. Built for speed, stability, and flexibility, the 500x platform supports seamless trading across multiple asset classes including Forex, Stocks, Futures, and Cryptocurrencies, providing an intuitive yet powerful user experience for both professional and active traders.
          </p>
        </div>

        {/* Second Paragraph */}
        <div className="mb-10 sm:mb-12 mx-auto space-y-6 text-[#848E9C] leading-relaxed text-base sm:text-lg">
          <p>
            The 500x platform features advanced order management, real-time market data feeds, comprehensive technical and fundamental analysis tools, and robust risk management capabilities. Traders can develop, test, and deploy automated strategies using our professional-grade trading tools, customizable indicators, advanced alerts, and multi-asset strategy testing environment, ensuring consistent performance in dynamic market conditions. Our proprietary development environment enables creation of custom trading algorithms and expert advisors tailored to your trading style.
          </p>
        </div>

        {/* Third Paragraph */}
        <div className="mb-10 sm:mb-12 mx-auto space-y-6 text-[#848E9C] leading-relaxed text-base sm:text-lg">
          <p>
            With a globally accessible interface available in multiple languages, the 500x platform eliminates barriers for traders worldwide. Enhanced by an integrated ecosystem that includes automated trading solutions, copy trading services, signal providers, and virtual private server (VPS) hosting for uninterrupted execution, the platform combines cutting-edge technology with high leverage capabilities to support informed decision-making and long-term trading success. Access the 500x Market for ready-to-use trading applications, indicators, and expert advisors developed by our community.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center">
          <a href="/downloads">
            <Button
              size="lg"
              className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 sm:px-8 py-3 sm:py-6 text-xs sm:text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto text-center break-words"
            >
              {/* Text for mobile */}
              <span className="sm:hidden">Download 500x Platform, Experience trading!</span>

              {/* Text for larger screens */}
              <span className="hidden sm:inline">Download 500x, open a demo account and experience the best of trading!</span>
            </Button>
          </a>
        </div>


      </div>
    </section>
  )
}

export default function TradingPlatformPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  // ✅ added "fundamental" and "signals"
  const sectionIds = useMemo(() => ["hero", "about", "highlights", "fundamental", "signals", "stats", "capabilities", "contact"], [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setIsVisible((p) => ({ ...p, [entry.target.id]: true }))),
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    )
    const els = sectionIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [sectionIds])

  const show = (id: string) => !!isVisible[id]

  /** ---------- CTA ring layout (kept) ---------- */
  const artRef = useRef<HTMLDivElement | null>(null)
  const [sizes, setSizes] = useState({ smallCoin: 44, bigSize: 0 })
  const coinClasses = ["coin-1", "coin-2", "coin-3"]
  const dotClasses = ["dot-1", "dot-2", "dot-3"]

  useEffect(() => {
    if (!artRef.current) return
    const el = artRef.current

    const compute = () => {
      const rect = el.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      const minDim = Math.min(w, h)

      const BIG_FRAC = 0.78
      const bigSize = minDim * BIG_FRAC

      const smallCoin = minDim < 340 ? 32 : minDim < 360 ? 36 : minDim < 460 ? 44 : 52
      setSizes({ smallCoin, bigSize })
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const smallImages = useMemo(() => ["/Bitcoin-small.png", "/Bitcoin-small.png", "/Bitcoin-small.png"], [])
  const bigImage = "/Bitcoin-main.png"

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section
        id="hero"
        className="relative pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14 md:pb-16 px-3 sm:px-4 overflow-hidden text-white"
      >
        <HeroVideo />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center z-10">
          <div
            className={`transition-all duration-1000 ${show("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Badge className="mb-4 sm:mb-6 bg-white/10 text-[#f5e49e] hover:bg-white/20 px-3 py-1.5 text-xs sm:text-sm">
              <Rocket className="w-4 h-4 text-[#f5e49e]" />
              500x Trading Platform
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              The Best Application for Trading <span className="text-[#fcd535]">Currencies</span>,{" "}
              <span className="text-[#fcd535]">Stocks</span> and <span className="text-[#fcd535]">Futures</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 px-2">
              500x is a multi-asset trading platform providing powerful trading features and algorithmic trading support for Forex, stocks, and futures.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
              <Link href="/downloads">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#fcd535] hover:bg-[#f5e49e] text-black px-6 sm:px-8 py-4 text-base sm:text-lg"
                >
                  Download 500x <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="https://client.500x.exchange/demo-create/" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#1e2329] px-6 sm:px-8 py-4 text-base sm:text-lg bg-transparent"
              >
                Open Demo Account
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-2 sm:py-16 px-3 sm:px-4 bg-[#181a20] text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${show("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                About <span className="text-[#fcd535]">500x</span>
                <div className="w-16 sm:w-24 h-1 bg-[#848E9C] mx-auto mt-2" />
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#848E9C] max-w-4xl mx-auto leading-relaxed px-1">
                500x delivers a professional multi-asset trading platform combining advanced analytics, development tools, and a comprehensive ecosystem of trading services.
              </p>
            </div>

            <div className="mb-12 sm:mb-16">
              <PlatformImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-2 px-4 bg-[#181a20] text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${show("highlights") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Platform <span className="text-[#fcd535]">Highlights</span>
              </h2>
              <p className="text-xl text-[#848E9C] max-w-3xl mx-auto">
                A concise walkthrough of key 500x features—covering trading, analysis, and the ecosystem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="rounded-2xl border border-white/10 bg-[#1e2329]/35 backdrop-blur-md p-6">
                <FlexibleTradingSystemCard />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: ActivityIcon, title: "Real-Time Market Data", desc: "Live streaming prices with instant updates across crypto, forex, commodities, and indices." },
                  { icon: Rocket, title: "Fast Order Execution", desc: "Low-latency trade execution ensuring precision entry and exit in volatile market conditions." },
                  { icon: BarChart3, title: "Multi-Asset Coverage", desc: "Trade multiple asset classes from a single, unified trading terminal." },
                  { icon: Shield, title: "Risk Management", desc: "Built-in stop-loss, take-profit, margin monitoring, and position controls for capital protection." },
                  { icon: TrendingUp, title: "Portfolio & PnL Tracking", desc: "Real-time visibility into open positions, equity, used margin, and profit/loss performance." },
                  { icon: Smartphone, title: "Secure Account Controls", desc: "Robust security features including access controls, logs, and account management tools." },
                ].map((item, i) => (
                  <Card
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#1e2329]/55 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-xl bg-white/5 border border-white/10 p-2">
                          <item.icon className="w-5 h-5 text-[#fcd535]" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{item.title}</div>
                          <div className="text-[#848E9C] text-sm mt-1">{item.desc}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Trading Signals and Copy Trading (ADDED) */}
      <TradingSignalsSection />

      {/* ✅ 500x Trading Platform Section (ADDED) */}
      <Platform500xSection />

      {/* CTA */}
      <section id="contact" className="relative py-12 sm:py-16 px-3 sm:px-4 bg-[#181a20] overflow-hidden">
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </main>
  )
}
