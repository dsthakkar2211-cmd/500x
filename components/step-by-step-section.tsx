"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function StepByStepSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const steps = [
    {
      step: "01",
      label: "TEST YOUR SKILLS",
      title: "Trading Challenge",
      description: "Owing too through weakness. Every pleasure is to be and every pain avoid.",
      icon: (
        <svg className="w-12 h-12 text-[#E53E3E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          <path d="M12,11L13.5,13.5L17,10L13.5,6.5L12,9L10.5,6.5L7,10L10.5,13.5L12,11Z" />
        </svg>
      ),
    },
    {
      step: "02",
      label: "MEET THE STANDARDS",
      title: "Get Verified",
      description: "Every pleasure is to be and every pain avoid owing too through weakness.",
      icon: (
        <svg className="w-12 h-12 text-[#E53E3E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
        </svg>
      ),
    },
    {
      step: "03",
      label: "ACHIEVE FUNDING",
      title: "Get Funded",
      description: "Every pain avoid owing too through every pleasure is to be and weakness.",
      icon: (
        <svg className="w-12 h-12 text-[#E53E3E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,16L3,5H1V3H4L6,14L7,18H20V20H7L5,16M19,7V9H17V7H19M16,8V10H14V8H16M20,6H13V11H20V6Z" />
          <circle cx="8.5" cy="19.5" r="1.5" />
          <circle cx="17.5" cy="19.5" r="1.5" />
        </svg>
      ),
    },
    {
      step: "04",
      label: "GET PAID",
      title: "Get Rewarded",
      description: "Too through weakness every pleasure is to be and every pain avoid owing.",
      icon: (
        <svg className="w-12 h-12 text-[#E53E3E]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-1 h-4 bg-[#E53E3E] animate-pulse"></div>
            <span className="text-[#E53E3E] font-semibold text-xs sm:text-sm tracking-wider uppercase">HOW IT'S WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold text-[#003B5C] mb-4 sm:mb-6 text-balance px-4">
            Step-by-Step to Funded Trading
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 relative">
            {/* Step 01 */}
            <div
              className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Card className="p-4 sm:p-6 lg:p-8 text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 rounded-2xl">
                <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">{steps[0].icon}</div>
                </div>
                <div className="text-[#E53E3E] text-[10px] sm:text-xs font-bold tracking-wider mb-2 sm:mb-3 uppercase">{steps[0].label}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B5C] mb-3 sm:mb-4">{steps[0].title}</h3>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {steps[0].step}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{steps[0].description}</p>
              </Card>

              {/* Animated Arrow to Step 02 */}
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <div className="animate-bounce-x">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#E53E3E]">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div
              className={`relative transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Card className="p-4 sm:p-6 lg:p-8 text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 rounded-2xl">
                <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">{steps[1].icon}</div>
                </div>
                <div className="text-[#E53E3E] text-[10px] sm:text-xs font-bold tracking-wider mb-2 sm:mb-3 uppercase">{steps[1].label}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B5C] mb-3 sm:mb-4">{steps[1].title}</h3>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {steps[1].step}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{steps[1].description}</p>
              </Card>
            </div>

            {/* Vertical Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-[#E53E3E] to-transparent animate-pulse"></div>

            {/* Step 03 */}
            <div
              className={`relative transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <Card className="p-4 sm:p-6 lg:p-8 text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 rounded-2xl">
                <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">{steps[2].icon}</div>
                </div>
                <div className="text-[#E53E3E] text-[10px] sm:text-xs font-bold tracking-wider mb-2 sm:mb-3 uppercase">{steps[2].label}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B5C] mb-3 sm:mb-4">{steps[2].title}</h3>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {steps[2].step}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{steps[2].description}</p>
              </Card>

              {/* Animated Arrow to Step 04 */}
              <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                <div className="animate-bounce-x">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#E53E3E]">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div
              className={`relative transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Card className="p-4 sm:p-6 lg:p-8 text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 rounded-2xl">
                <div className="mb-4 sm:mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">{steps[3].icon}</div>
                </div>
                <div className="text-[#E53E3E] text-[10px] sm:text-xs font-bold tracking-wider mb-2 sm:mb-3 uppercase">{steps[3].label}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#003B5C] mb-3 sm:mb-4">{steps[3].title}</h3>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {steps[3].step}
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{steps[3].description}</p>
              </Card>
            </div>
          </div>

          <div
            className={`text-center mt-8 sm:mt-12 lg:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-4">
              Join the 500x Revolution ...
              <span className="text-[#003B5C] font-semibold ml-2 hover:text-[#E53E3E] transition-colors duration-300 cursor-pointer">
                Take The First Step
                <span className="text-[#E53E3E] ml-2 inline-block animate-bounce-x">→</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
