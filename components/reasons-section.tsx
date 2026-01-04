"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Monitor, BookOpen, Clock, DollarSign, Shield, Rocket } from "lucide-react"

export function ReasonsSection() {
  const reasons = [
    { number: "01", icon: TrendingUp, title: "High Profit Splits", description: "Dolore magnam aliquam quaer autem enim ad minima veniam.", position: "top-left" },
    { number: "02", icon: Monitor, title: "Advanced Platforms", description: "Business it will frequently occur that have to be all repudiated.", position: "top-right" },
    { number: "03", icon: BookOpen, title: "Custom Development", description: "Custom solutions and integrations designed to fit your business needs and give you a competitive edge.", position: "middle-left" },
    { number: "04", icon: Clock, title: "24/7 Support", description: "24/7 support ensures seamless trading assistance during global market hours.", position: "middle-right" },
    { number: "05", icon: Rocket, title: "Fast Launch", description: "Rapid white-label deployment within 2–4 weeks, enabling brokers to enter markets quickly.", position: "bottom-left" },
    { number: "06", icon: Shield, title: "Highly Scalable", description: "Designed for seamless growth from 100 to 100,000+ traders without performance degradation.", position: "bottom-right" },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-[#181a20]">
      <div className="container mx-auto px-4">
        {/* ---------- Section Header ---------- */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#848E9C]" />
            <span className="text-[#848E9C] font-semibold text-sm uppercase tracking-wider">
              Why Industry Leaders
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#fcd535]">
            Choosing 500x
          </h2>
        </div>

        {/* ---------- MOBILE VIEW ---------- */}
        <div className="lg:hidden relative">
          <div className="relative mx-auto mb-10 flex items-center justify-center">
            <div className="relative w-44 h-44">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer rotating ring (soft gold tone) */}
                <div className="absolute w-48 h-48 rounded-full border-2 border-dotted border-[#f5e49e]/30 opacity-40 animate-[spin_30s_linear_infinite]" />
                {/* Inner rotating ring (brighter gold tone, reverse direction) */}
                <div className="absolute w-40 h-40 rounded-full border-2 border-dotted border-[#fcd535]/50 opacity-60 animate-[spin_18s_linear_infinite_reverse]" />
              </div>

              {/* Floating coin center */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/coin.png"
                  alt="Rising coin"
                  className="w-28 h-28 object-contain drop-shadow-[0_0_16px_rgba(252,213,53,0.55)] animate-[floatY_3.2s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>


          {/* Vertical timeline cards */}
          <div className="relative max-w-xl mx-auto pl-7">
            <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dotted border-[#fcd535]/40" />
            <ul className="space-y-6">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <li key={idx} className="relative pb-6 last:pb-0">
                    {/* Dots + Pulse */}
                    <span className="absolute -left-[6px] top-6 h-3 w-3 rounded-full bg-[#fcd535] shadow-md" />
                    <span className="absolute -left-[10px] top-5 h-5 w-5 rounded-full bg-[#f5e49e]/40 animate-ping" />

                    <div className="relative">
                      <Card className="p-5 bg-[#1e2329] border border-white/10 shadow-lg">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 bg-[#fcd535]/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#fcd535]" />
                          </div>

                          <div className="flex-1">
                            <div className="text-5xl font-light text-[#848E9C] leading-none mb-1">
                              {reason.number}
                            </div>
                            <h3 className="text-lg font-bold text-[#fcd535] mb-1">
                              {reason.title}
                            </h3>
                            <p className="text-[#848E9C] text-sm leading-relaxed">
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>

        {/* ---------- DESKTOP VIEW ---------- */}
        <div className="relative max-w-7xl mx-auto hidden lg:block">
          {/* Center coin with larger size */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[250px] border-2 border-dotted border-[#fcd535]/30 rounded-full animate-[spin_30s_linear_infinite] opacity-30" />
                <div className="absolute w-[350px] h-[350px] border-2 border-dotted border-[#f5e49e]/50 rounded-full animate-[spin_18s_linear_infinite_reverse] opacity-25" />
              </div>

              <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#fcd535]/10 to-transparent blur-2xl rounded-full" />
                <img
                  src="/coin.png"
                  alt="Rising coin"
                  className="w-[300px] h-[300px] object-contain drop-shadow-[0_0_25px_rgba(252,213,53,0.5)] animate-[floatY_3.2s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>


          {/* Feature cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[420px] gap-y-12 items-center min-h-[700px]">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              const isLeft = reason.position.includes("left")
              const isTop = reason.position.includes("top")
              const isMiddle = reason.position.includes("middle")
              return (
                <div
                  key={index}
                  className={`group relative ${isLeft ? "lg:justify-self-end lg:text-right" : "lg:justify-self-start lg:text-left"
                    } ${isTop ? "lg:self-start" : isMiddle ? "lg:self-center" : "lg:self-end"}`}
                >
                  <div
                    className={`hidden lg:block absolute top-1/2 ${isLeft ? "-right-[200px]" : "-left-[200px]"
                      } w-[200px] h-px border-t-2 border-dotted border-gray-600 group-hover:border-[#fcd535] transition-colors duration-300`}
                  >
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "-right-2" : "-left-2"
                        } w-4 h-4 bg-[#1e2329] border-2 border-gray-600 rounded-full group-hover:border-[#fcd535] group-hover:bg-[#fcd535]/10 transition-colors duration-300`}
                    />
                  </div>

                  {/* Updated dark card */}
                  <Card className="p-8 max-w-sm bg-[#1e2329] border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className={`flex items-start gap-4 ${isLeft ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#fcd535]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#fcd535]/10 transition-colors">
                          <Icon className="w-6 h-6 text-[#fcd535]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className={`text-6xl font-light text-gray-500 mb-2 ${isLeft ? "lg:text-right" : ""}`}>
                          {reason.number}
                        </div>
                        <h3 className="text-xl font-bold text-[#fcd535] mb-3 group-hover:text-[#fcd535] transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating bubbles */}
      {/* Floating bubbles with responsive size & position */}
      <div className="absolute top-8 left-8 w-10 h-10 bg-[#848E9C] rounded-full opacity-20 animate-[floatY_5s_ease-in-out_infinite] sm:top-16 sm:left-8 sm:w-16 sm:h-16 md:top-20 md:left-10 md:w-20 md:h-20 lg:top-24 lg:left-14" />
      <div className="absolute bottom-5 right-5 w-10 h-10 bg-[#848E9C] rounded-full opacity-20 animate-[floatY_6s_ease-in-out_infinite_800ms] sm:bottom-16 sm:right-8 sm:w-12 sm:h-12 md:bottom-20 md:right-10 md:w-16 md:h-16 lg:bottom-24 lg:right-14" />

      {/* Local motion keyframes */}
      <style jsx global>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}
