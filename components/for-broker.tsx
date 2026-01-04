"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForBrokerPage() {
  return (
    <div className="min-h-screen bg-[#181a20] text-white">
      {/* Global animation helpers */}
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

      {/* Hero Section */}
      <ForBrokerHero />

      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 500x Full-Cycle Platform Section */}
          <div className="animate-fade-in-up">
            <div className="text-center mb-8">
              <Image
                src="/prologo.png"
                alt="500x Logo"
                width={200}
                height={64}
                className="h-16 w-auto mx-auto mb-6"
              />
            </div>
            <div className="space-y-6 text-[#848E9C] leading-relaxed max-w-4xl mx-auto">
              <p className="text-lg">
                500x is a full-cycle platform that includes all elements that a company may need in order to provide comprehensive brokerage services without the need of any additional software. The 500x platform provides enhanced Back-end functionality, connectivity gateways for{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">exchanges, liquidity providers</a>, as well as{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">various APIs</a> for integration with your website, trading and post-trading systems.
              </p>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-16 py-6 text-base rounded-md 
                    sm:px-6 sm:py-3 sm:text-sm" onClick={() => window.location.href = '/downloads'}>
                <span className="block sm:hidden">Order 500x platform</span>
                <span className="hidden sm:block">Order 500x platform and run your successful brokerage business!</span>
              </Button>
            </div>

          </div>

          {/* Multi-Asset Trading Platform Section */}
          <div className="animate-fade-in-up-delay-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              A multi-asset trading platform
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed max-w-4xl mx-auto">
              <p>
                The 500x Trading Platform supports operations with different assets classes, including Forex and Futures.
              </p>
              <p>
                With 500x, your traders are equipped with{" "}
                <a href="#" className="text-[#fcd535] underline hover:text-[#f5e49e]">convenient and powerful trading functionality</a>. The flexible trading system with Market Depth and support for all order types, enables traders to execute any trading strategy on any financial market. The platform provides the netting system for trading exchange instruments and the hedging option for full-fledged Forex trading.
              </p>
              <p>
                In addition to the outstanding trading functions, you can offer professional technical and fundamental analysis tools to your traders. The platform ecosystem includes an impressive set of tools and services, through which your traders can use trading robots, copy deals of other traders, trade from mobile devices and any web browser. All these features are available in 500x.
              </p>
            </div>
          </div>

          {/* Enhanced Back-End Section */}
          <div className="animate-fade-in-up-delay-2 mb-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              Enhanced Back-End
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed max-w-4xl mx-auto">
              <p>
                The entire 500x structure is arranged to ensure maximum flexibility for your business. The platform ecosystem provides sets of configurations and parameters so that a platform operation can be arranged according to your specific business objectives.
              </p>
              <p>
                With 500x you can execute multiple business models. In the platform, you can assign role-based managers (e.g. accountants, administrators, dealers, risk managers, etc.) as well as effectively control trade conditions (margin requirements, contract terms, credit limits, swaps, trade sessions, spreads, markups, commissions, and other trading parameters).
              </p>
            </div>
          </div>

          {/* Platform Architecture Section */}
          <div className="animate-fade-in-up-delay-2">
            <div className="mt-1 mb-1">
              <div className="w-full max-w-5xl mx-auto overflow-hidden p-8">
                <img
                  src="./client/c-16.png"
                  alt="500x Architecture"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 text-[#848E9C] leading-relaxed max-w-4xl mx-auto">
              <p>
                500x provides preventive mechanisms to reduce risks, and tools for automatic monitoring of technological, financial, margin (credit/limit) and operational risks. The platform supports various risk management tools across different asset classes.
              </p>
              <p>
                It allows configuration and adjustment of settings based on operating, regulatory, and structural requirements of dealing desks. The platform provides tiered access permissions (e.g., senior dealers, dealers, risk managers) and supports multi-dealer operations for different client groups and market segments. It also offers full operative control over open positions, orders, and incoming requests.
              </p>
              <p>
                The platform supports corporate actions like bulk payments to clients based on positions, primarily for calculating and paying bonuses and dividends. It also handles splitting of tick and bar history and the reversal of consolidation (reverse split).
              </p>
            </div>
          </div>

          {/* 500x API Section */}
          <div className="animate-fade-in-up-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              Purpose of 500x API
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed max-w-4xl mx-auto">
              <p>
                500x's capabilities can be expanded using Application Programming Interfaces (APIs). These APIs allow users to customize 500x components, complement their functionality, or integrate the entire platform with their trading and post-trading systems.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#fcd535] font-bold text-xl">✓</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Report API</p>
                    <p className="text-[#848E9C]">Expands reports generated by 500x trade servers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#fcd535] font-bold text-xl">✓</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Server API</p>
                    <p className="text-[#848E9C]">Helps add more functions to 500x Trade Server and 500x History Server.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#fcd535] font-bold text-xl">✓</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Gateway API</p>
                    <p className="text-[#848E9C]">Used for 500x integration with other trading systems and for creating custom data feeds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#fcd535] font-bold text-xl">✓</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Manager API</p>
                    <p className="text-[#848E9C]">Allows development of custom administration and management utilities, or even a custom manager terminal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#fcd535] font-bold text-xl">✓</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Web API</p>
                    <p className="text-[#848E9C]">Used for platform integration with web resources and other services of the company.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gateways Section */}
          <div className="animate-fade-in-up-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gateways for connection to Exchanges and ECN
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed">
              <p>
                500x offers solutions for integration with popular liquidity providers on the Forex market and direct connectivity to global financial exchanges. These gateways are easy to operate, providing exceptional control and flexibility.
              </p>
              <p>
                A gateway is an integrated solution enabling brokers to instantly hedge operational risks (STP) through interaction with other 500x brokers, allowing them to provide traders access to various financial exchanges.
              </p>
            </div>
          </div>

          {/* Performance and Security Section */}
          <div className="animate-fade-in-up-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Performance and security
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed">
              <p>
                500x's superior performance, speed, efficiency, and cost-effectiveness position it as one of the fastest platforms globally. The platform's distributed architecture, where functions are performed on different servers, allows for increased performance and scalability by deploying more servers. This design helps manage growth and maintain service quality.
              </p>
              <p>
                The security system features encrypted connections for data exchange, advanced authentication for account protection, and securely encrypted databases with backup and recovery options. The distributed architecture also enhances resistance to hacker attacks, with trade servers hidden behind multiple access points, ensuring continued operation and data safety even during attacks.
              </p>
              <p>
                Users independently deploy the software on their own hardware, maintaining full control over server infrastructure, support, and administration. No SaaS or similar solutions are offered, preventing external or third-party management and ensuring the company has no access to user servers, accounts, or client trading history.
              </p>
            </div>
          </div>

          {/* Flexible Licensing Policy Section */}
          <div className="animate-fade-in-up-delay-3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Flexible licensing policy
            </h2>
            <div className="space-y-6 text-[#848E9C] leading-relaxed">
              <p>
                This flexible licensing approach allows users to select a license type suitable for their business model, current volumes, and future plans. Three license types are available: Entry, Standard, and Enterprise, which differ in the number of real accounts and system components included.
              </p>
              <p>
                This policy enables new brokers to enter the financial market with minimal initial investment and offers the ability to upgrade licenses and add components as their business grows.
              </p>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="pt-8 pb-16 text-center animate-fade-in-up-delay-3">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-[#848E9C]">
                Today, 500x is probably the best platform for providing brokerage services. 500x provides a universal solution for creating new brokerage companies and entering new financial markets. No compromise: One platform, many markets!
              </p>
              <p className="text-lg md:text-xl text-[#848E9C]">
                The flexible trading system, professional technical and fundamental analysis, algorithmic and social trading, desktop, web and mobile terminals — the platform delivers unmatched functionality and best opportunities for trading. Having access to 500x can be the key factor for many millions of traders when they choose a broker!
              </p>
              <p className="text-lg md:text-xl text-[#848E9C]">
                Hundreds of interactive brokers around the world have already chosen 500x for its premium performance and flexibility. Order the platform now and become a successful broker!
              </p>
              <div className="text-center mt-10">
                <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-16 py-6 text-base rounded-md 
                    sm:px-6 sm:py-3 sm:text-sm" onClick={() => window.location.href = '/downloads'}>
                  <span className="block sm:hidden">Order 500x platform</span>
                  <span className="hidden sm:block">Order 500x platform and run your successful brokerage business!</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer separator */}
      <section
        id="contact"
        className="relative py-1 sm:py-1 px-3 sm:px-4 bg-[#181a20] overflow-hidden"
      >
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </div>
  );
}

/* Hero Component */
function ForBrokerHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[200px] sm:h-[250px] md:h-[250px]">
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
            500x for Brokers
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#848E9C] animate-fade-in-up-delay-1">
            The best solution for organizing brokerage business in the financial markets
          </p>
        </div>
      </div>
    </section>
  );
}

