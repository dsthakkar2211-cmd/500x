"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Platform500xPage() {
  return (
    <div className="min-h-screen bg-[#181a20] text-white">
      {/* --- Minimal global helpers (same style family as your reference) --- */}
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

      {/* =========================================================
          VIDEO HERO (same as ContactHero style)
          ========================================================= */}
      <PlatformHero />

      {/* =========================================================
          SECTION (Recreated): “500x platform for hedge funds”
          ========================================================= */}
      <section className="relative overflow-hidden py-1 sm:py-2">
        {/* subtle background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] opacity-15"
        />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Title */}
          <div className="text-center animate-fade-in-up">
            <p className="mt-6 max-w-4xl mx-auto text-[#848E9C] leading-relaxed animate-fade-in-up-delay-1">
              Create a multi-asset infrastructure{" "}
              <span className="text-[#fcd535]">on a single platform</span> in a
              couple of days. You no longer need separate terminals with
              disparate analytics. Work in different markets, customize
              necessary tools, try various strategies — use a single exchange
              terminal with integrated risk management and analytics.
            </p>
          </div>

          {/* Exchange row + funnel lines */}
          <div className="mt-10 animate-fade-in-up-delay-2 flex justify-center">
            <img
              src="./client/c-12.png"
              alt="Multiple exchanges funneling into a single platform"
              className="w-full max-w-4xl opacity-90"
            />
          </div>

          {/* Center logo + role boxes */}
          <div className="mt-6 animate-fade-in-up-delay-3">
            <div className="flex flex-col items-center">
              <div className="mb-1">
                <Button
                  className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-12 py-6 text-base rounded-md 
             md:px-40 md:py-6 md:text-lg"
                  onClick={() => window.location.href = 'https://client.500x.exchange/demo-create/'}
                >
                  Request access to 500x Platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over 80 exchanges */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Over <span className="text-[#fcd535]">80</span> exchanges and
            liquidity providers
          </h2>
          <p className="mt-4 text-[#848E9C] leading-relaxed max-w-4xl">
            Receive access to over 80 exchanges around the world. 500x Platform
            can be linked to global financial exchanges and popular liquidity
            providers. Gateways are easy to manage: control and re-structure
            your business, manage risks, generate reports, receive quotes, and
            handle withdrawals.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-[#1e2329]/60 overflow-hidden">
            <img
              src="./client/c-13.jpg"
              alt="Dummy symbols screenshot"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Security</h2>
          <p className="mt-4 text-[#848E9C] leading-relaxed max-w-5xl">
            Deploy software on your own hardware and maintain full control of
            infrastructure, administration, and access. This model avoids
            partial external management or third-party control of operations and
            reduces exposure of servers, accounts, and trading history. The
            platform is designed to prioritize user data security and align
            with modern operational safety requirements.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 py-6 text-base rounded-md md:px-40 md:py-6 md:text-lg"
              onClick={() => window.location.href = 'https://client.500x.exchange/demo-create/'}
            >
              Request access to 500x Platform
            </Button>
          </div>

          {/* Benefits */}
          <div className="mt-14">
            <h3 className="text-center text-lg md:text-xl font-semibold">
              Benefits for a hedge fund
            </h3>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                title="Reduce costs and increase profits"
                icon={<MiniChartIcon />}
              />
              <BenefitCard
                title="Use powerful data analysis tools"
                icon={<MiniAnalyticsIcon />}
              />
              <BenefitCard
                title="Combine different trading systems"
                icon={<MiniSystemsIcon />}
              />
              <BenefitCard
                title="Automate trading and management"
                icon={<MiniAutomationIcon />}
              />
              <BenefitCard
                title="Simplify fund management"
                icon={<MiniManageIcon />}
              />
              <BenefitCard
                title="Get instant access to algorithmic trading and backtesting"
                icon={<MiniAlgoIcon />}
              />
            </div>
          </div>

          {/* You also get */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h3 className="text-center text-lg md:text-xl font-semibold">
              You also get
            </h3>
            <ul className="mt-6 space-y-3 text-[#848E9C]">
              <li className="flex gap-3">
                <span className="text-[#fcd535]">✓</span> Free installation and
                training
              </li>
              <li className="flex gap-3">
                <span className="text-[#fcd535]">✓</span> Technical support:
                online chat, service desk, hotline, documentation, FAQ, and
                other materials
              </li>
              <li className="flex gap-3">
                <span className="text-[#fcd535]">✓</span> Access to back-office
                APIs: ready-made documentation with examples and consulting
              </li>
              <li className="flex gap-3">
                <span className="text-[#fcd535]">✓</span> Auto update
              </li>
            </ul>

            <div className="mt-10 flex justify-center">
              <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-8 py-6 text-base rounded-md md:px-40 md:py-6 md:text-lg" onClick={() => window.location.href = '/downloads'}>
                Get Instant Access to 500x Platform
              </Button>
            </div>

            <p className="mt-3 text-center text-xs text-[#848E9C]">
              If you want to try 500x Platform features, we can provide demo
              access for two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ADDED SECTION (at the end)
          ========================================================= */}
      <section
        id="contact"
        className="relative py-1 sm:py-1 px-3 sm:px-4 bg-[#181a20] overflow-hidden"
      >
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </div>
  );
}

/* =========================================================
   VIDEO HERO COMPONENT (ContactHero-style)
   ========================================================= */
function PlatformHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[130px] sm:h-[190px] md:h-[220px]">
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            500x Platform
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#848E9C]">
            Multi-asset infrastructure for hedge funds
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ UI Pieces ------------------------------ */

function RoleCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-xl bg-[#fcd535]/10 border border-[#fcd535]/20 flex items-center justify-center text-[#fcd535]">
          {icon}
        </div>
        <div className="font-medium text-white">{title}</div>
      </div>
    </div>
  );
}

function BenefitCard({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 backdrop-blur px-6 py-6">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#fcd535]">
          {icon}
        </div>
        <div className="text-sm text-[#848E9C]">{title}</div>
      </div>
    </div>
  );
}

/* ------------------------------ Icons ------------------------------ */

function ExchangeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#fcd535]">
      <path
        fill="currentColor"
        d="M12 2L3 7v2h18V7l-9-5zm7 9H5v9H3v2h18v-2h-2v-9zm-2 0v9H7v-9h10z"
      />
    </svg>
  );
}

function TradersIcon() {
  return <span className="text-sm font-bold">T</span>;
}
function ManagerIcon() {
  return <span className="text-sm font-bold">M</span>;
}
function InvestorsIcon() {
  return <span className="text-sm font-bold">I</span>;
}
function PayoutIcon() {
  return <span className="text-sm font-bold">P</span>;
}

function MiniChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M4 19h16v2H2V3h2v16zm3-2V9h2v8H7zm4 0V5h2v12h-2zm4 0v-6h2v6h-2z"
      />
    </svg>
  );
}
function MiniAnalyticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M3 3h18v2H3V3zm2 6h10v2H5V9zm0 4h14v2H5v-2zm0 4h8v2H5v-2z"
      />
    </svg>
  );
}
function MiniSystemsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M4 6h16v4H4V6zm0 8h10v4H4v-4zm12 0h4v4h-4v-4z"
      />
    </svg>
  );
}
function MiniAutomationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M12 2a4 4 0 014 4v1h2v2h-2v2h2v2h-2v1a4 4 0 01-8 0v-1H6v-2h2V9H6V7h2V6a4 4 0 014-4zm2 4a2 2 0 10-4 0v8a2 2 0 104 0V6z"
      />
    </svg>
  );
}
function MiniManageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M7 2h10v2H7V2zM5 6h14v16H5V6zm2 2v12h10V8H7z"
      />
    </svg>
  );
}
function MiniAlgoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-current">
      <path
        fill="currentColor"
        d="M7 3h10v2H7V3zM5 7h14v14H5V7zm2 2v10h10V9H7zm2 2h2v2H9v-2zm4 0h2v2h-2v-2z"
      />
    </svg>
  );
}
