"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  BarChart3,
  Shield,
  Globe,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  Rocket,
} from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AITradingSystem() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Scoped styles for hover-shake */}
      <style jsx>{`
        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0); }
          20% { transform: translate(-2px, 1px) rotate(-1deg); }
          40% { transform: translate(-1px, -1px) rotate(1deg); }
          60% { transform: translate(1px, 1px) rotate(0deg); }
          80% { transform: translate(1px, -1px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0); }
        }
        /* Trigger a short shake on hover of each card */
        :global(.group:hover .card-visual) {
          animation: shake 0.4s ease-in-out;
        }
        /* Respect reduced-motion preferences */
        @media (prefers-reduced-motion: reduce) {
          :global(.group:hover .card-visual) {
            animation: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* 🎥 Background video only */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster=""  // optional: fallback image
        >
          <source src="/bg.mp4" type="video/mp4" />
          {/* Fallback text for very old browsers */}
          Your browser does not support the video tag.
        </video>

        {/* 50% navy overlay */}
        <div className="absolute inset-0 bg-[#181a20]/80" />

        {/* Foreground content */}
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left text section */}
            <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              <Badge className="mb-6 bg-white/20 text-[#f5e49e] border-white/30 hover:bg-[#848E9C]/30">
                <Rocket className="w-4 h-4 text-[#f5e49e]" /> AI-Powered Trading Revolution
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-md">
                Maximize
                <span className="block text-[#fcd535]">Your Trading</span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-sm">
                Harness the power of artificial intelligence to transform your trading strategies. Our advanced ML
                algorithms analyze market patterns in real-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 py-4 text-lg font-semibold"
                >
                  Start Trading Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="relative border border-white/20 text-white bg-white/5 backdrop-blur-md 
             px-8 py-4 text-lg font-semibold transition-all duration-300 
             hover:text-[#fcd535] hover:bg-white/10"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>

              </div>
            </div>

            {/* Right image block */}
            <div className={`relative ${isVisible ? "animate-fade-in animate-delay-300" : "opacity-0"}`}>
              <div className="relative">
                <img
                  src="/modern-trading-dashboard.jpg"
                  alt="AI Trading Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div
                  className="absolute -bottom-4 -left-4 rounded-lg px-3 py-2 shadow-md backdrop-blur-sm bg-white/10 border border-white/20 animate-float"
                  style={{ marginLeft: 45 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-[#f5e49e] rounded-full shadow-[0_0_6px_#f5e49e] animate-pulse" />
                    <span className="text-xs font-medium text-white whitespace-nowrap">
                      Live Trading Active
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 bg-[#181a20]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-[#fcd535] mb-6">
              500x AI
              <div className="w-24 h-1 bg-[#848E9C] mx-auto mt-2 rounded-full"></div>
            </h2>

            <p className="text-lg leading-relaxed text-white/70 animate-fade-in-up-delay-1">
              <strong className="text-white">
                Trade smarter with intelligence that never sleeps.
              </strong>
              <br />
              <strong className="text-[#fcd535]">500x AI</strong> is an
              <strong className="text-white/90"> AI-powered fintech and brokerage platform</strong> built for
              <strong className="text-white/90"> brokers, institutions, and modern trading startups</strong>.
              It combines <strong className="text-white/90">real-time analytics</strong>,{" "}
              <strong className="text-white/90">automated risk management</strong>, and
              <strong className="text-white/90"> multi-asset execution</strong> in one powerful ecosystem.
              With <strong className="text-white/90">predictive insights</strong>,{" "}
              <strong className="text-white/90">hierarchical control</strong>, and
              <strong className="text-white/90"> enterprise-grade scalability</strong>, you can launch, monitor, and grow your trading business
              with unmatched <strong className="text-[#fcd535]">speed</strong>,{" "}
              <strong className="text-[#fcd535]">transparency</strong>, and{" "}
              <strong className="text-[#fcd535]">precision</strong>.
            </p>

          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="py-20 bg-[#181a20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-4">
              Solutions For Every Trader
            </h2>
            <p className="text-lg text-[#848E9C]/70 max-w-2xl mx-auto">
              From individual traders to institutional brokers, our AI-powered platform scales to meet your trading needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Algorithmic Trading",
                description: "Automated strategies powered by machine learning",
                icon: Brain,
                image: "/algo-trading.webp",
              },
              {
                title: "Risk Management",
                description: "AI-driven portfolio protection and optimization",
                icon: Shield,
                image: "/risk.webp",
              },
              {
                title: "Market Analysis",
                description: "Real-time insights and predictive analytics",
                icon: BarChart3,
                image: "/analysis.webp",
              },
              {
                title: "Multi-Asset Trading",
                description: "Forex, stocks, crypto, and commodities support",
                icon: Globe,
                image: "/Multi-Asset.webp",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                // Glassmorphism card styling
                className={[
                  "group relative overflow-hidden rounded-2xl border border-white/10",
                  "bg-[#1e2329]/70 backdrop-blur-xl",
                  "transition-all duration-500",
                  "hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]",
                ].join(" ")}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Soft gold glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(252,213,53,0.12),transparent_60%)]" />
                </div>

                {/* Image Section (centered, no cropping) */}
                <div className="relative overflow-hidden rounded-t-2xl flex items-center justify-center h-56">
                  <img
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="card-visual max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#1e2329] border border-white/10 flex items-center justify-center shadow-md">
                    <solution.icon className="w-5 h-5 text-[#fcd535]" />
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-white/70">{solution.description}</p>

                  {/* subtle underline accent on hover */}
                  <div className="mt-4 h-0.5 w-0 bg-[#fcd535]/70 mx-auto transition-all duration-500 group-hover:w-16 rounded-full" />
                </CardContent>

                {/* Focus/hover ring accent */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#fcd535]/20 transition-all duration-500 group-hover:ring-2" />
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Trading Pairs Section */}
      <section className="py-20 bg-[#181a20]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-4">
              Trending Pairs in the Market
            </h2>
            <p className="text-lg text-[#848E9C]">Real-time data from global markets</p>
          </div>

          {/* Table Card */}
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/60 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#1e2329]/80 border-b border-white/10">
                  <tr>
                    {["Pair", "Price", "Change", "Volume", "AI Signal"].map((th) => (
                      <th
                        key={th}
                        className="px-6 py-4 text-sm font-semibold text-white/80 uppercase tracking-wider"
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    {
                      pair: "EUR/USD",
                      price: "1.0856",
                      change: "+0.23%",
                      volume: "$2.1B",
                      signal: "BUY",
                      positive: true,
                    },
                    {
                      pair: "GBP/USD",
                      price: "1.2734",
                      change: "-0.15%",
                      volume: "$1.8B",
                      signal: "HOLD",
                      positive: false,
                    },
                    {
                      pair: "USD/JPY",
                      price: "149.82",
                      change: "+0.41%",
                      volume: "$1.9B",
                      signal: "BUY",
                      positive: true,
                    },
                    {
                      pair: "BTC/USD",
                      price: "43,250",
                      change: "+2.15%",
                      volume: "$890M",
                      signal: "STRONG BUY",
                      positive: true,
                    },
                    {
                      pair: "ETH/USD",
                      price: "2,580",
                      change: "+1.87%",
                      volume: "$650M",
                      signal: "BUY",
                      positive: true,
                    },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white/5 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 font-semibold text-white/90">{item.pair}</td>
                      <td className="px-6 py-4 text-white/80">{item.price}</td>
                      <td
                        className={`px-6 py-4 font-semibold ${item.positive ? "text-green-400" : "text-red-400"
                          }`}
                      >
                        {item.change}
                      </td>
                      <td className="px-6 py-4 text-white/70">{item.volume}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${item.signal === "STRONG BUY"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : item.signal === "BUY"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            }`}
                        >
                          {item.signal}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* Reason For Choosing Us */}
      <section className="py-20 bg-[#181a20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-4">Reason For Choosing Us</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Advanced AI Algorithms",
                  description:
                    "Machine learning models trained on years of market data for superior prediction accuracy.",
                },
                {
                  title: "Real-Time Execution",
                  description: "Lightning-fast trade execution with minimal latency for optimal entry and exit points.",
                },
                {
                  title: "Risk Management",
                  description: "Intelligent portfolio protection with automated stop-loss and position sizing.",
                },
                {
                  title: "24/7 Monitoring",
                  description: "Continuous market surveillance and instant alerts for trading opportunities.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 bg-[#fcd535] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-yellow-500/20" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-[#848E9C]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br rounded-full flex items-center justify-center animate-float">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/coin.png" // ← replace with your actual image path
                      alt="Coin illustration"
                      className="w-[400px] h-[400px] object-contain"
                    />
                  </div>


                </div>
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$50M+</div>
                    <div className="text-sm text-[#848E9C]">Profits Generated</div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">0.1ms</div>
                    <div className="text-sm text-[#848E9C]">Execution Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Challenge Section */}
      <section className="py-20 bg-[#1e2329]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-4">Enter a Trading Challenge</h2>
            <p className="text-xl text-[#848E9C]/90">Test your skills with our AI-powered trading competitions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Challenge</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Prize Pool</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Participants</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    {
                      name: "AI Forex Master",
                      prize: "$100,000",
                      participants: "2,847",
                      duration: "30 days",
                      status: "Active",
                    },
                    {
                      name: "Crypto Prediction",
                      prize: "$50,000",
                      participants: "1,923",
                      duration: "14 days",
                      status: "Starting Soon",
                    },
                    {
                      name: "Stock Market Pro",
                      prize: "$75,000",
                      participants: "3,156",
                      duration: "45 days",
                      status: "Active",
                    },
                  ].map((challenge, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{challenge.name}</td>
                      <td className="px-6 py-4 text-[#E53E3E] font-bold">{challenge.prize}</td>
                      <td className="px-6 py-4">{challenge.participants}</td>
                      <td className="px-6 py-4">{challenge.duration}</td>
                      <td className="px-6 py-4">
                        <Badge
                          className={`${challenge.status === "Active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                            }`}
                        >
                          {challenge.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-[#181A20]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-4">
              Step-by-Step to AI-Powered Trading
            </h2>
            <p className="text-lg text-[#848E9C]">
              Get started with our intelligent trading platform in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description:
                  "Sign up and verify your identity to access our AI trading platform",
                icon: Users,
              },
              {
                step: "02",
                title: "Configure AI",
                description:
                  "Set your risk preferences and let our AI customize strategies for you",
                icon: Brain,
              },
              {
                step: "03",
                title: "Start Trading",
                description:
                  "Begin automated trading with real-time AI insights and execution",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group bg-[#1E2329] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(252,213,53,0.15)]"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-[#fcd535] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-[#1E2329]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1E2329] rounded-full flex items-center justify-center text-[#fcd535] text-sm font-bold border border-[#fcd535]/50">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-[#848E9C]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Perfect Platform Section (with Webflow banner block + Bitcoin animation) */}
      <section className="py-20 bg-[#181a20]">
        <div className="container mx-auto px-4">
          {/* Two panes: text (left) + sticky visual (right) */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT: Text column with tidy max width */}
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-[#fcd535] mb-6">
                Perfect Platform for Every Trader
              </h2>

              <p className="text-lg text-[#848E9C] mb-8">
                Whether you're a beginner or professional trader, our AI-powered platform adapts to your experience
                level and trading style.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Multi-device synchronization",
                  "Advanced charting tools",
                  "Real-time market data",
                  "AI-powered insights",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#fcd535]" />
                    <span className="text-[#848E9C]/70">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg"
                className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 py-4 transition-all duration-300"
              >
                Get Started Today
              </Button>

            </div>

            {/* RIGHT: Its own div/section with sticky positioning on lg+ */}
            <div className="relative">
              <div className="lg:sticky lg:top-24">
                {/* Webflow banner block */}
                <div
                  className="banner-image-block right-3 -top-8 lg:right-6 lg:-top-6 pointer-events-none"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src="/sup.png"
                    loading="lazy"
                    alt="3D Illustration Banner"
                    className="image-banner mt-3 rounded-xl"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 410px, (max-width: 991px) 489px, (max-width: 1439px) 442px, (max-width: 1919px) 412px, 518px"
                  />
                </div>

                {/* Bitcoin animation */}
                <motion.div
                  className="absolute -left-8 -top-6 lg:-left-20 lg:-top-18"
                  initial={{ y: 0, rotate: 0, scale: 0.9 }}
                  animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="/Rot-coin.png"
                    alt="Bitcoin floating"
                    className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 drop-shadow-2xl"
                  />
                </motion.div>


              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </main>
  )
}
