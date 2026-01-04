"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PlatformSection() {
  const [selectedPlatform, setSelectedPlatform] = useState("500x")

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#181a20]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in w-full text-center lg:text-left">
            <div className="flex lg:justify-start gap-2 mb-4">
              <div className="flex flex-col gap-1">
                <div className="w-1 h-4 bg-[#fcd535]"></div>
                <div className="w-1 h-2 bg-[#fcd535]"></div>
                <div className="w-1 h-1 bg-[#fcd535]"></div>
              </div>
              <span className="text-[#fcd535] font-semibold text-xs sm:text-sm tracking-wider">PLATFORM</span>
            </div>

            <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Perfect Platform for&nbsp;
              <br className="hidden sm:block" />
              Every Trader
            </h2>

            <p className="text-[#848E9C] text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our platform is designed to empower traders of all levels—whether you’re just starting your journey or already a seasoned professional. With cutting-edge technology, real-time insights, and reliable security, we help you trade with confidence and efficiency.
            </p>

            {/* Platform Selection / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
              <Button
                className="w-full px-6 py-3 font-semibold transition-all duration-300 bg-[#fcd535] text-[#111827] hover:bg-[#f5e49e]"
              >
                <span className="flex items-center justify-center gap-2">Launch in 30 Days</span>
              </Button>

              <Button
                className="w-full px-6 py-3 font-semibold transition-all duration-300 bg-[#23272F] text-[#fcd535] border border-[#2f3a46] hover:bg-[#2a2f36]"
              >
                <span className="flex items-center justify-center gap-2">Global Compliance</span>
              </Button>

              <Button
                className="w-full px-6 py-3 font-semibold transition-all duration-300 bg-[#fcd535] text-[#111827] hover:bg-[#f5e49e]"
              >
                <span className="flex items-center justify-center gap-2">Bank-Grade Security</span>
              </Button>

              <Button
                className="w-full px-6 py-3 font-semibold transition-all duration-300 bg-[#23272F] text-[#fcd535] border border-[#2f3a46] hover:bg-[#2a2f36]"
              >
                <span className="flex items-center justify-center gap-2">99.9% Uptime SLA</span>
              </Button>
            </div>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
              <div className="flex items-start sm:items-center gap-3 animate-slide-in-left justify-start" style={{ animationDelay: "0.1s" }}>
                <svg className="w-5 h-5 text-[#fcd535] mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-[#848E9C] font-medium text-sm sm:text-base">
                  Perfect for both beginners & advanced traders.
                </span>
              </div>

              <div className="flex items-start sm:items-center gap-3 animate-slide-in-left justify-start" style={{ animationDelay: "0.2s" }}>
                <svg className="w-5 h-5 text-[#fcd535] mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-[#848E9C] font-medium text-sm sm:text-base">
                  Access live price movements.
                </span>
              </div>

              <div className="flex items-start sm:items-center gap-3 animate-slide-in-left justify-start" style={{ animationDelay: "0.3s" }}>
                <svg className="w-5 h-5 text-[#fcd535] mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-[#848E9C] font-medium text-sm sm:text-base">
                  Instant solution for 500x Queries.
                </span>
              </div>

              <div className="flex items-start sm:items-center gap-3 animate-slide-in-left justify-start" style={{ animationDelay: "0.4s" }}>
                <svg className="w-5 h-5 text-[#fcd535] mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-[#848E9C] font-medium text-sm sm:text-base">
                  AI-based cheating prevention system.
                </span>
              </div>
            </div>

            <Button
              className="w-full sm:w-auto bg-[#fcd535] hover:bg-[#f5e49e] text-[#111827] px-8 py-3 font-semibold transition-all duration-300"
              onClick={() => window.location.href = 'https://client.500x.exchange/demo-create/'}
            >
              Explore 500x Platform →
            </Button>

          </div>

          {/* Right Side - Device Mockups */}
          <div className="flex-1 relative w-full">
            {/* Giant rotated word (kept subtle for dark bg) */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <span className="text-[#2a2f36] text-[9rem] md:text-[12rem] lg:text-[16rem] font-bold opacity-30 select-none transform rotate-90 origin-center">
                PLATFORM
              </span>
            </div>

            <div className="relative z-10 w-full">
              {/* Accent gradient (yellow tone for dark theme) */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-56 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 bg-gradient-to-br from-[#fcd535] to-[#f7e27a] rounded-3xl opacity-80"></div>

              {/* Device mockup image */}
              <div className="relative">
                <div className="animate-float" style={{ animationDelay: "0s" }}>
                  <img
                    src="./platform-1.png"
                    alt="Trading Platform on Multiple Devices"
                    className="w-full h-auto relative z-20 max-w-[560px] sm:max-w-[640px] mx-auto drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
