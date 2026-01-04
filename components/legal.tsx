"use client";

import { Button } from "@/components/ui/button";
import { useChatbot } from "./chatbot-provider";

export default function LegalInformationPage() {
  const { openChatbot } = useChatbot()
  return (
    <div className="min-h-screen bg-[#181a20] text-white">
      {/* Page-only global styles */}
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

      {/* Header / Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#181a20]/80" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1e2329]/70 backdrop-blur px-5 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-[#848E9C]" />
            <span className="text-xs tracking-wider uppercase text-[#848E9C]">
              Legal information & resources
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fcd535] animate-fade-in-up-delay-1">
            Legal Information
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-[#848E9C] text-base md:text-lg animate-fade-in-up-delay-2">
            Legal information and resources
          </p>

          <div className="mt-8 flex justify-center animate-fade-in-up-delay-3">
            <Button 
              onClick={openChatbot}
              className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-25 py-3 transition-all duration-300 hover:scale-105 "
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-10">
        {/* LEGAL DISCLAIMER */}
        <Section
          id="legal-disclaimer"
          title="Legal Disclaimer"
          badge="DISCLAIMER"
        >
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 space-y-4">
            <p className="text-[#848E9C] leading-relaxed">
              <strong className="text-white">500x.pro</strong> is a B2B trading
              technology platform operated by{" "}
              <strong className="text-white">
                Autonomous AI Neural System L.L.C-FZ
              </strong>{" "}
              (License: 2537291.01), registered in Meydan Free Zone, Dubai, UAE.
            </p>

            <div className="rounded-xl border border-[#fcd535]/30 bg-[#181a20]/70 p-4">
              <p className="text-[#fcd535] font-semibold mb-2">Risk Warning</p>
              <p className="text-[#848E9C] leading-relaxed">
                CFD trading involves substantial risk. Losses can exceed
                deposits. Trading is not suitable for all investors. Clients
                should ensure they fully understand the risks involved.
              </p>
            </div>

            <p className="text-[#848E9C] leading-relaxed">
              500x.pro provides technology infrastructure only. Brokers using our
              white-label solution are responsible for obtaining appropriate
              regulatory licenses in their operating jurisdictions.
            </p>
          </div>
        </Section>

        {/* COPYRIGHT */}
        <Section id="copyright" title="Copyright" badge="COPYRIGHT">
          <p className="text-[#848E9C] leading-relaxed">
            © 2025, Autonomous AI Neural System L.L.C-FZ. All rights reserved.
          </p>
          <p className="text-[#848E9C] leading-relaxed mt-3">
            The information on this site is protected by copyright. You may not
            distribute, link, or reproduce any portion of this website without
            prior written consent of Autonomous AI Neural System L.L.C-FZ.
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5">
            <p className="text-[#848E9C] leading-relaxed">
              Autonomous AI Neural System L.L.C-FZ is a software and trading
              technology development company and does not provide nor offer any
              kind of financial, investment, brokerage, trading or data feed
              services in any financial market, nor is it involved directly or
              indirectly in any commission-based payments concerning trading
              operations.
            </p>
          </div>
        </Section>

        {/* PRIVACY */}
        <Section
          id="privacy"
          title="Privacy Policy and Terms of Personal Data Processing"
        >
          <p className="text-[#848E9C] leading-relaxed">
            You can familiarize yourself with our Privacy Policy and terms of
            processing personal data regarding any personal information you
            provide via our websites and applications operated by Autonomous AI
            Neural System L.L.C-FZ.
          </p>
        </Section>

        {/* COOKIES */}
        <Section id="cookies" title="Cookies Policy">
          <p className="text-[#848E9C] leading-relaxed">
            We use cookies and similar tools to improve performance and enhance
            user experience.
          </p>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="How to Contact Us">
          <div className="rounded-3xl border border-white/10 bg-[#1e2329]/70 p-8">
            <p className="text-[#848E9C] leading-relaxed">
              If you have any questions or legal inquiries, please contact our
              support team.
            </p>

            <div className="mt-6 flex gap-4">
              <Button 
                onClick={openChatbot}
                className="bg-[#fcd535] text-black px-7 py-3"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({
  id,
  title,
  badge,
  children,
}: {
  id: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-white/10 bg-[#1e2329]/40 backdrop-blur p-7 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          {badge && (
            <div className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs tracking-wider uppercase text-[#848E9C]">
              {badge}
            </div>
          )}
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#fcd535]">
            {title}
          </h2>
          <div className="mt-3 h-1 w-24 rounded-full bg-[#848E9C]" />
        </div>
      </div>

      <div className="space-y-4">{children}</div>
    </section>
  );
}
