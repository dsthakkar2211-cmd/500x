"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BuyThePlatformPage() {
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

      {/* =========================================================
          ADDED: About Us video section (like your ContactHero)
          (No existing content removed)
          ========================================================= */}
      <AboutUsVideoSection />

      {/* =========================================================
          2) Hedge Fund diagram section (dummy image + labels)
          ========================================================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Diagram container */}
          <div className="mt-2 rounded-[40px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            {/* Replace with your own diagram later */}
            <img
              src="./client/c-17.png"
              alt="500x cycle diagram"
              className="w-full h-auto object-cover"
            />

            {/* Optional overlay list (keeps meaning even with dummy image) */}
            <div className="px-6 py-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#848E9C]">
                <div>
                  <div className="text-white font-semibold mb-2">
                    Server license
                  </div>
                  <p className="text-sm leading-relaxed">
                    Cluster components: Access, Trade, History & Backup server.
                  </p>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">
                    Admin / Manager terminals
                  </div>
                  <p className="text-sm leading-relaxed">
                    Tools to configure instruments, permissions, and monitoring.
                  </p>
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">
                    Client access
                  </div>
                  <p className="text-sm leading-relaxed">
                    Desktop, Mobile, Web terminals plus Back-office APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 callouts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <MiniCallout
              title="Neutral position"
              desc="We do not perform financial operations."
            />
            <MiniCallout
              title="Confidentiality"
              desc="Only you have access to your data."
            />
            <MiniCallout
              title="No hidden fees"
              desc="We do not charge commission for trading operations."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          3) What will you get? (check list)
          ========================================================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-semibold">
            What will you get?
          </h3>

          <div className="mt-10 max-w-5xl mx-auto space-y-5">
            {[
              "Licenses for access, trade, history and backup servers — ensures smooth operation and helps restore data in cases of failure.",
              "Administrator terminal for a hedge fund manager — manage the fund, configure instruments, separate access, and adjust parameters.",
              "Trading terminal for hedge fund employees — analysis and trading tools (manual and algorithmic).",
              "Client terminal for investors — monitor fund activities and handle routine reporting tasks.",
              "Access via mobile and web terminals — work anytime from anywhere via PC and mobile devices.",
              "Back office APIs — customize components, extend functionality, or integrate with trading and post-trading systems.",
            ].map((text, idx) => (
              <CheckItem key={idx} text={text} />
            ))}
          </div>

          <div className="mt-16">
            <h4 className="text-center text-lg font-semibold">
              You will also get
            </h4>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <SimpleInfo
                title="Technical support"
                desc="Service desk, online chat and hotlines"
              />
              <SimpleInfo
                title="Documentation"
                desc="Manuals, guides and articles"
              />
              <SimpleInfo
                title="Free updates"
                desc="Software updates for the entire license duration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4) How to connect?
          ========================================================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-xl md:text-2xl font-semibold">
            How to connect?
          </h3>

          <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#1e2329]/60 p-8">
            <ol className="list-decimal list-inside space-y-3 text-[#848E9C]">
              <li>Fill in the form (name, email, phone and legal name)</li>
              <li>
                We explain how everything works, provide a presentation and a
                free two-week demo
              </li>
              <li>
                If everything satisfies your needs, you can sign the contract
                and start working
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================================
          5) Price section (image left + price card right)
          ========================================================= */}
      <section className="py-1 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="mt-1 text-center text-[#848E9C] max-w-5xl mx-auto">
            500x platform means full control over the fund, transparency for
            investors, and strong analytical and trading tools. Connect the
            platform to consolidate management, maximize profits in any markets,
            and attract new investments.
          </p>

          <div className="mt-10 flex justify-center">
          <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-25 py-6 text-base rounded-md 
                    sm:px-25 sm:py-3 sm:text-sm" onClick={() => window.location.href = '/downloads'}>
              <span className="block sm:hidden">500x platform</span>
              <span className="hidden sm:block">Request to access 500x platform</span>
            </Button>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative py-1 sm:py-1 px-3 sm:px-4 bg-[#181a20] overflow-hidden"
      >
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>
    </div>
  );
}

/* ----------------------- Small components ----------------------- */

function MiniCallout({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/60 p-6 text-center">
      <div className="text-[#fcd535] font-semibold text-lg">{title}</div>
      <p className="mt-2 text-sm text-[#848E9C]">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#fcd535] font-bold">✓</span>
      <p className="text-[#848E9C] leading-relaxed">{text}</p>
    </div>
  );
}

function SimpleInfo({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/50 p-8">
      <div className="text-white font-semibold">{title}</div>
      <div className="mt-2 text-sm text-[#848E9C]">{desc}</div>
    </div>
  );
}

/* =========================================================
   ADDED: About Us video section component (same style as your ContactHero)
   ========================================================= */
function AboutUsVideoSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[410px] sm:h-[280px] md:h-[320px]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg.mp4" // ← replace with your actual video path
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
            Buy 500x platform
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-[#848E9C] leading-relaxed animate-fade-in-up-delay-1">
            500x is a multi-market solution that brings{" "}
            <span className="text-[#fcd535]">different markets</span> into a
            single platform, <br />
            consolidates general statistics, and gives you full control over any
            number of funds <br />
            helping you earn the trust of potential and existing investors.
          </p>

          <div className="mt-10 animate-fade-in-up-delay-2">
            <Button className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-25 py-6 text-base rounded-md 
                    sm:px-25 sm:py-3 sm:text-sm" onClick={() => window.location.href = '/downloads'}>
              <span className="block sm:hidden">500x platform</span>
              <span className="hidden sm:block">Request to access 500x platform</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Kept as-is (not used on this page currently) */
function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] sm:h-[280px] md:h-[320px]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg.mp4" // ← replace with your actual video path
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#181a20]/80" />

        {/* Centered content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Contact</h1>
        </div>
      </div>
    </section>
  );
}
