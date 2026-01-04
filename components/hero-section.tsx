"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Empower your",
    highlight: "Trading",
    subtitle: "journey today!",
    description: "Do not know how to pursue pleasure rationally encounter.",
    buttonText: "Request Demo",
  },
  {
    id: 2,
    title: "Tools built to",
    highlight: "Maximize",
    subtitle: "your trading profits!",
    description: "Advanced trading tools and analytics for professional traders.",
    buttonText: "Schedule Demo",
  },
  {
    id: 3,
    title: "Join the",
    highlight: "Bull Market",
    subtitle: "revolution today!",
    description: "Experience the power of intelligent trading with our platform.",
    buttonText: "Explore Now",
  },
];

export function HeroSection() {
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentSlideData = slides[currentSlide];

  const handleRequestDemoClick = () => {
    window.location.href = "https://client.500x.exchange/demo-create/";
  };

  const handleExploreNowClick = () => {
    window.location.href = "https://client.500x.exchange/demo-create/";
  };

  return (
    <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[100vh] flex items-center">
      {/* ---- Background Video ---- */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/main-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-8 items-center min-h-[48vh] sm:min-h-[60vh] lg:min-h-[80vh]">
          {/* Left Navigation (desktop only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col space-y-3">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-10 h-10 border border-white/30 text-white hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center group disabled:opacity-50"
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-10 h-10 border border-white/30 text-white hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center group disabled:opacity-50"
            >
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Page Counter */}
            <div className="text-white/60 text-[11px] sm:text-xs md:text-sm mb-3 sm:mb-5 lg:mb-8 animate-fade-in">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="text-white/40">/{String(slides.length).padStart(2, "0")}</span>
            </div>

            <div
              className={`transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
            >
              <div className="border-l-4 border-[#fcd535] pl-3 sm:pl-5">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2.5 sm:mb-4 lg:mb-6 leading-tight">
                  <span className="block text-[13px] sm:text-base md:text-lg font-normal text-white/80 mb-1 sm:mb-2 animate-slide-in-left">
                    {currentSlideData.title}
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white animate-slide-in-right animation-delay-200">
                    {currentSlideData.highlight}
                  </span>
                  <span className="block text-[13px] sm:text-base md:text-lg font-normal text-white/80 mt-1.5 sm:mt-3 animate-slide-in-left animation-delay-400">
                    {currentSlideData.subtitle}
                  </span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-white/70 mb-4 sm:mb-6 lg:mb-8 max-w-[18rem] sm:max-w-xl animate-fade-in-up animation-delay-600">
                  {currentSlideData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 animate-fade-in-up animation-delay-800">
                  <Button
                    onClick={handleRequestDemoClick}
                    className="bg-[#fcd535] hover:bg-[#f5e49e]/90 text-black px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    {currentSlideData.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    onClick={handleExploreNowClick}
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1e2329] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-transparent"
                  >
                    Platfrom
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Social Icons (desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end">
            <div className="flex flex-col items-center space-y-5">
              <div className="text-white/60 text-xs sm:text-sm font-medium tracking-wider transform -rotate-90 mb-6">
                Social
              </div>
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="w-10 h-10 border border-white/30 text-white hover:bg-[#fcd535] hover:border-[#848E9C] transition-all duration-300 flex items-center justify-center rounded-full group"
                >
                  <span className="text-xs font-bold transition-transform group-hover:scale-110 group-hover:text-black">
                    i
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/30 text-white hover:bg-[#fcd535] hover:border-[#848E9C] transition-all duration-300 flex items-center justify-center rounded-full group"
                >
                  <span className="text-xs font-bold transition-transform group-hover:scale-110 group-hover:text-black">
                    f
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/30 text-white hover:bg-[#fcd535] hover:border-[#848E9C] transition-all duration-300 flex items-center justify-center rounded-full group"
                >
                  <span className="text-xs font-bold transition-transform group-hover:scale-110 group-hover:text-black">
                    in
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/30 text-white hover:bg-[#fcd535] hover:border-[#848E9C] transition-all duration-300 flex items-center justify-center rounded-full group"
                >
                  <span className="text-xs font-bold transition-transform group-hover:scale-110 group-hover:text-black">
                    X
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#f5e49e] text-black hover:bg-[#fcd535]/90 hover:scale-110 transition-all duration-300 flex items-center justify-center rounded-full group"
                >
                  <span className="text-xs font-bold transition-transform group-hover:scale-110">@</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-center space-x-3 sm:space-x-4 mt-5 sm:mt-6">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-10 h-10 border border-white/30 text-white hover:bg-white/20 transition-colors flex items-center justify-center disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-10 h-10 border border-white/30 text-white hover:bg-white/20 transition-colors flex items-center justify-center disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
