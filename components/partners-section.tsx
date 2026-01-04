export function PartnersSection() {
  const partners = [
    { name: "500x Platform", logo: "/prologo.png" },
    { name: "TradingView", logo: "/tradingview-logo.png" },
    { name: "Bloomberg", logo: "/bloomberg-logo.png" },
    { name: "Reuters", logo: "/reuters-logo.png" },
    { name: "Refinitiv", logo: "/refinitiv-logo.jpg" },
    { name: "FIX Protocol", logo: "/fix-protocol-logo.jpg" },
    { name: "Equinix", logo: "/equinix-logo.jpg" },
    { name: "AWS", logo: "/aws-logo.png" },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#181a20]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 mb-4 sm:mb-6 animate-fade-in-up px-4">
              Why Industry Leaders Choose 500x
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4">
              Trusted by leading brokerages worldwide for mission-critical trading operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-300 p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                🛡️
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 text-white">
                Bank-Grade Security
              </h4>
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Military-grade encryption, multi-factor authentication, and comprehensive security monitoring protect
                client funds and data.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                ⚡
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                Ultra-Low Latency
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Sub-millisecond execution speeds with direct market access and optimized routing algorithms for maximum
                performance.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-500">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                🌍
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">
                Global Compliance
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Built-in compliance for major financial regulations including MiFID II, ESMA, CFTC, and other
                international standards.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                📈
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Scalable Architecture
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Cloud-native design that automatically scales with your business growth, handling millions of
                transactions seamlessly.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-700">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                🤝
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-red-600 transition-colors duration-300">
                24/7 Support
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Dedicated support team with deep expertise in trading technology, available around the clock for
                mission-critical assistance.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up animation-delay-800">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-blue-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                🔧
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                Custom Development
              </h4>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                Tailored solutions and custom integrations to meet your specific business requirements and competitive
                differentiation.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}
