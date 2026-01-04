"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, Star } from "lucide-react"
import RatingWithSummary from "./testi_rate"

const testimonials = [
  { id: 1, name: "James Mitchell", country: "AUSTRALIA", rating: 5.0, text: "I've been trading with 500x.pro for six months now and the platform stability is incredible. Withdrawals are processed within 24 hours which is exactly what I need." },
  { id: 2, name: "Sarah Chen", country: "GERMANY", rating: 4.9, text: "The customer support team responds quickly to all my questions. The trading conditions are transparent and I appreciate the educational resources they provide regularly." },
  { id: 3, name: "Mohammed Al-Rashid", country: "UAE", rating: 4.8, text: "As a full-time trader, I need reliable execution and 500x.pro delivers. The spreads are competitive and I've had no issues with order fills during volatile markets." },
  { id: 4, name: "Emma Thompson", country: "FRANCE", rating: 5.0, text: "What impressed me most is how user-friendly the platform is. Even as a beginner, I found everything I needed quickly. The mobile app works perfectly too." },
  { id: 5, name: "Michael Rodriguez", country: "CANADA", rating: 4.7, text: "After trying several prop firms, 500x.pro stands out for their fair rules and consistent payouts. The evaluation process was straightforward and I passed on my first attempt." },
]

export function TestimonialsSection() {
  const [currentTestimonials, setCurrentTestimonials] = useState<number[]>([0, 1])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentTestimonials(prev => {
          const nextFirst = (prev[0] + 2) % testimonials.length
          const nextSecond = (prev[1] + 2) % testimonials.length
          return [nextFirst, nextSecond]
        })
        setIsAnimating(false)
      }, 150)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(rating) ? "fill-[#fcd535] text-[#fcd535]" : "text-gray-600"}`}
      />
    ))

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#181a20]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Left column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-[#fcd535]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#fcd535] uppercase">
                TESTIMONIALS
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Stories that
                <br className="hidden sm:block" />
                Inspire Confidence
              </h2>
              <p className="text-sm sm:text-base text-[#848E9C]">
                Real traders sharing their success stories with us.
              </p>
            </div>

            <div className="curve-text">
              <div className="rounded-xl border border-[#848E9C]/30 bg-[#1e2329] p-3 sm:p-4 backdrop-blur">
                <RatingWithSummary />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative space-y-6 sm:space-y-8">
            {currentTestimonials.map((index: number, cardIndex: number) => {
              const t = testimonials[index]
              return (
                <div key={`${t.id}-${cardIndex}`} className="relative">
                  <Card
                    className={`relative rounded-xl border border-[#848E9C]/30 bg-[#1e2329] p-4 sm:p-6 lg:p-8 shadow-md transition-all duration-200 ease-in-out hover:shadow-lg ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                      }`}
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base sm:text-lg font-semibold text-white">
                          {t.name},{" "}
                          <span className="text-xs sm:text-sm font-normal tracking-wide text-[#848E9C] uppercase">
                            {t.country}
                          </span>
                        </h4>
                      </div>

                      {/* Stars on small screens */}
                      <div className="flex items-center gap-1 sm:hidden">
                        {renderStars(t.rating)}
                        <span className="ml-1 text-xs font-medium text-[#fcd535]">{t.rating.toFixed(1)}</span>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-[#848E9C] line-clamp-5 sm:line-clamp-none">
                        {t.text}
                      </p>
                    </div>

                    {/* Card notch */}
                    <div className="absolute -right-1 bottom-8 hidden sm:block h-0 w-0 border-l-8 border-l-[#1e2329] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </Card>

                  {/* Rating badge */}
                  <div className="absolute -top-3 -right-3 sm:-right-5 hidden sm:flex items-center justify-center rounded-lg bg-[#181a20] border border-[#848E9C]/30 px-3 py-2 shadow-sm">
                    <div className="flex flex-col items-center leading-none">
                      <Star className="mb-1 h-4 w-4 fill-[#fcd535] text-[#fcd535]" />
                      <span className="text-sm font-bold text-[#fcd535]">{t.rating}</span>
                    </div>
                  </div>

                  {/* Initial Avatar */}
                  <div className="absolute bottom-[5px] right-2 sm:bottom-[5px] sm:right-3">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#fcd535] flex items-center justify-center border-2 sm:border-4 border-[#181a20] shadow-lg">
                      <span className="text-base sm:text-lg font-bold text-[#181a20] uppercase">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
    </section>
  )
}
