"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ForOwnerPage() {
  return (
    <div className="min-h-screen bg-[#181a20] text-white">
      {/* Global animation helpers (same style family as your reference code) */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease both;
        }
        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.6s ease 0.1s both;
        }
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.6s ease 0.2s both;
        }
        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.6s ease 0.3s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-fade-in-up-delay-1,
          .animate-fade-in-up-delay-2,
          .animate-fade-in-up-delay-3 {
            animation: none !important;
          }
        }
      `}</style>

      {/* Video Hero Section */}
      <ForOwnerHero />

      {/* 500x Administrator Interface Image */}
      <section className="py-8 px-4">
        <div className="p-4">
          <div className="w-full h-[200px] md:h-[700px] rounded overflow-hidden relative">
            <Image
              src="/client/c-14.png"
              alt="Administrator"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>


      {/* Content Sections */}
      <section className="py-1 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Flexibility Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Flexibility</h2>
            <div className="space-y-4 text-[#848E9C] leading-relaxed">
              <p>
                500x provides extensive trading capabilities across multiple asset classes, including forex, stocks, futures, and cryptocurrencies. The platform supports automatic updates and seamless integration with various trading systems, ensuring you always have access to the latest features and market data. With built-in support for algorithmic trading, you can develop, test, and deploy automated strategies directly within the platform.
              </p>
              <p>
                The platform's flexible architecture allows you to customize trading parameters, risk management settings, and reporting tools to match your fund's specific requirements. You can access a comprehensive{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">library</a> of trading applications, indicators, and expert advisors through the{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">secure online store</a>, or develop custom solutions tailored to your needs. Additionally, the{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">Freelance service</a> connects you with professional developers who can create specialized tools for your fund.
              </p>
              <p>
                This flexibility extends to fund management, where you can configure different trading accounts, set up investor access levels, and automate distribution of profits and fees. 500x helps increase revenue by providing tools that streamline operations, reduce manual work, and enable more efficient capital allocation across different strategies and markets.
              </p>
            </div>
          </div>

          {/* Full control Section */}
          <div className="animate-fade-in-up-delay-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Full control</h2>
            <div className="space-y-4 text-[#848E9C] leading-relaxed">
              <p>
                As a hedge fund manager, you have complete control over your fund's operations through the 500x Administrator terminal. You can launch and configure funds with specific parameters, including maximum capital, investor limits, fee structures, and distribution methods. The platform allows you to create and manage multiple trading accounts, assign them to different traders or strategies, and monitor their performance in real-time.
              </p>
              <p>
                You can manage account balances, set up automatic profit distribution, configure management and success fees, and establish high water marks for performance calculations. The system provides comprehensive monitoring tools, including detailed{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">graphs</a> and reports that track fund performance, investor activity, and trading results. You can set up separate access levels for administrators, traders, and investors, ensuring that each user has appropriate permissions and visibility.
              </p>
              <p>
                The platform's control features extend to risk management, where you can set limits on positions, margins, and exposure. You can monitor fund status, track assets under management (AUM), net asset value (NAV), and share values, giving you complete visibility into your fund's financial health and performance metrics.
              </p>
            </div>
          </div>

          {/* Transparency Section */}
          <div className="animate-fade-in-up-delay-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transparency</h2>
            <div className="space-y-4 text-[#848E9C] leading-relaxed">
              <p>
                500x ensures complete transparency for both fund managers and investors. Clients can monitor their investments in real-time through{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">mobile device</a> applications or PC terminals, accessing up-to-date information about fund performance, their share values, and account balances. The platform provides clear visibility into assets under management (AUM), net asset value (NAV), and individual share values, allowing investors to track their investment growth and understand how their capital is being managed.
              </p>
              <p>
                For fund managers, transparency means having access to comprehensive reporting tools that show detailed trading activity, profit and loss statements, fee calculations, and investor distributions. The system automatically generates reports that comply with industry standards, making it easier to communicate fund performance to investors and regulatory bodies. This transparency builds trust with investors and helps attract new capital by demonstrating clear, verifiable performance metrics.
              </p>
            </div>
          </div>

          {/* Security Section */}
          <div className="animate-fade-in-up-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Security</h2>
            <div className="space-y-4 text-[#848E9C] leading-relaxed">
              <p>
                You independently deploy our software on your own hardware, as well as maintain your server infrastructure and fully control support and administration. We do not offer SaaS or other similar solutions which would permit even partial external management or third-party control over your company's operations, and thus we have no access to your servers, accounts, or your clients' trading history. 500x prioritizes user data security and strives to maintain product compliance with the industry's latest safety requirements.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="pt-8 pb-16 text-center animate-fade-in-up-delay-3">
            <p className="text-lg md:text-xl text-[#848E9C] mb-6">
              Buy access to 500x for your hedge fund to boost your client base and generate more profit. The platform includes everything the fund requires for success.
            </p>
            <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 py-6 text-lg font-semibold rounded-md transition-all duration-300" onClick={() => window.location.href = 'https://client.500x.exchange/demo-create/'}>
              Get Instant Access to 500x Platform
            </Button>
            <p className="mt-4 text-sm text-[#848E9C]">
              If you want to try 500x features, we will provide a free demo access for two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Footer separator */}
      <section
        id="contact"
        className="relative py-2 sm:py-1 px-3 sm:px-4 bg-[#181a20] overflow-hidden"
      >
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </div>
  );
}

/* =========================================================
   VIDEO HERO COMPONENT (same style as your existing pages)
   ========================================================= */
function ForOwnerHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[280px] sm:h-[280px] md:h-[320px]">
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
            500x for fund manager
          </h1>
          <p className="mt-6 max-w-4xl mx-auto text-[#848E9C] leading-relaxed animate-fade-in-up-delay-2 
              text-xs sm:text-base md:text-sm">
            500x suit accommodates administrator terminal allowing you to set up management, financial instruments, separate access along with other parameters for each fund. This is a ready-made out-of-the-box solution which helps in attracting more investments, control your employees, automate the fund operation and reduce routine tasks.
          </p>

        </div>
      </div>
    </section>
  );
}
