"use client";

import Image from "next/image";
import { Monitor, Download, Check } from "lucide-react";

export function DownloadSection() {
  const desktopPlatforms = [
    {
      name: "Windows",
      icon: "/Window.svg",
      label: "Download for Windows",
      href: "https://builds-exchange.s3.ap-south-1.amazonaws.com/client/500x%20Exchange%20Client%20Setup%200.1.0.exe",
      Download: true,
    },
    {
      name: "macOS",
      icon: "/mac-logo.svg",
      label: "For macOS",
      href: "#",
      primary: false,
    },
    {
      name: "WebTerminal",
      icon: "monitor",
      label: "WebTerminal",
      href: "https://client.500x.exchange/",
      primary: false,
    },
  ];

  const mobilePlatforms = [
    {
      name: "App Store",
      icon: "/apple-logo-minimalist.png",
      topText: "DOWNLOAD ON THE",
      bottomText: "App Store",
      href: "#",
    },
    {
      name: "Google Play",
      icon: "/android.svg",
      topText: "GET IT ON",
      bottomText: "Google Play",
      href: "#",
    },
  ];

  // Handle download clicks
  const handleDownload = (platform: string, href: string) => {
    if (href !== "#") {
      window.open(href, "_blank");
    }
  };

  return (
    <section className="min-h-screen bg-[#181a20]">
      {/* =========================================================
          VIDEO HERO (Added like ContactHero)
          ========================================================= */}
      <section className="relative w-full overflow-hidden mb-10 sm:mb-12">
        <div className="relative h-[230px] sm:h-[280px] md:h-[280px]">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#181a20]/80" />

          {/* Centered content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Download 500x
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              For PCs, smartphones, and tablets or launch the web platform.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Platforms Row */}
        <div className="mb-8 sm:mb-12 px-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {desktopPlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleDownload(platform.name, platform.href)}
                className="
                  group relative flex items-center gap-3 sm:gap-4
                  px-5 sm:px-6 py-4 sm:py-5 rounded-lg border-2
                  bg-white border-[#fcd535]/30
                  transition-all duration-200
                  hover:bg-[#fcd535] hover:border-[#fcd535]
                  active:bg-[#fcd535] active:border-[#fcd535]
                  focus-visible:bg-[#fcd535] focus-visible:border-[#fcd535]
                  cursor-pointer
                "
              >
                {platform.icon === "monitor" ? (
                  <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                ) : (
                  <div className="w-6 h-6 sm:w-7 sm:h-7 relative">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-contain filter brightness-0"
                    />
                  </div>
                )}

                <span className="font-semibold text-sm sm:text-base text-black whitespace-nowrap">
                  {platform.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Platforms Row */}
        <div className="mb-16 sm:mb-20 px-10 sm:px-6 lg:px-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6">
            {mobilePlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleDownload(platform.name, platform.href)}
                className="
                  group flex items-center gap-3 sm:gap-4
                  px-5 sm:px-6 py-4 sm:py-5 rounded-lg border-2
                  bg-white border-[#fcd535]/30
                  transition-all duration-200
                  hover:bg-[#fcd535] hover:border-[#fcd535]
                  active:bg-[#fcd535] active:border-[#fcd535]
                  focus-visible:bg-[#fcd535] focus-visible:border-[#fcd535]
                  cursor-pointer text-left w-full
                "
              >
                {platform.icon === "apk" ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded flex items-center justify-center">
                    <Download className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                    <Image
                      src={platform.icon}
                      alt={platform.name}
                      fill
                      className="object-contain filter brightness-0"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1">
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wide text-black">
                    {platform.topText}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-black">
                    {platform.bottomText}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: 500x platform for Desktop */}
        <div className="bg-[#1e2329] rounded-xl p-6 sm:p-8 lg:p-12 border border-gray-800">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              500x for Desktop & Mobile
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Download 500x and start trading Forex, Stocks and Futures!
              Rich trading functionality, technical and fundamental market
              analysis, copy trading and automated trading are all exciting
              features that you can access for free right now!
            </p>
          </div>

          {/* Desktop Image */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <div className="relative w-full max-w-5xl h-auto">
              <Image
                src="/client/C-11.png"
                alt="500x Desktop"
                width={1200}
                height={600}
                className="rounded-lg object-contain w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Features Introduction */}
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            500x offers a wide variety of functions for the modern forex
            and exchange market trader:
          </p>

          {/* Features List - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="space-y-4">
              {[
                "Full set of trading orders for flexible Forex, Stocks and other securities trading",
                "Two position accounting systems: netting and hedging",
                "Unlimited amount of charts with 21 timeframes and one-minute history of quotes",
                "Technical analysis with over 80 built-in technical indicators and analytical tools",
                "Fundamental analysis based on financial news and economic calendar",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#fcd535] flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-300">{t}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "The largest store of ready-to-use trading applications at 500x Market",
                "Powerful algorithmic trading with the built-in 500x development environment and scripting tools",
                "Trading Signals allowing you to automatically copy deals of experienced traders",
                "A system of alerts to keep track of all important market events",
                "Built-in Forex VPS",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#fcd535] flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-gray-300">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Concluding Sentence */}
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-300">
            Use all the advanced trading and analysis tools while trading Forex,
            Stocks and Futures!
          </p>
        </div>

        {/* --- The rest of your sections remain unchanged --- */}
        {/* Section 2, 3, 4, Additional Info... keep as-is */}

        {/* =========================================================
            CONTACT DIVIDER SECTION (Added)
            ========================================================= */}
        <section
          id="contact"
          className="relative py-1 sm:py-1 px-3 sm:px-4 bg-[#181a20] overflow-hidden"
        >
          <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
        </section>
      </div>
    </section>
  );
}
