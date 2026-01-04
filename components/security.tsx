"use client";

import { HeroSplit } from "@/components/hero-split";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import React from "react";

export default function SecurityPage() {
  const faqs: [string, string][] = [
    ["How is my data encrypted?", "TLS 1.3 in transit; AES-256 at rest with KMS-managed keys."],
    ["Do you support SSO/SAML/OIDC?", "Enterprise plans support SSO via SAML/OIDC."],
    ["How often are security audits performed?", "Internal audits quarterly, external annually."],
    ["Is penetration testing included?", "Yes. Regular third-party pentests with public summaries."],
  ];

  return (
    <div>
      {/* ===================== HERO WITH BACKGROUND VIDEO ===================== */}
      <section className="relative overflow-hidden">
        {/* 🎥 Background Video Layer */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster=""
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 50% navy overlay */}
        <div className="absolute inset-0 bg-[#181a20]/80" />

        {/* Foreground content */}
        <div className="relative z-10">
          <HeroSplit
            eyebrow={
              <span className="text-[#f5e49e] font-semibold tracking-wide uppercase">
                Security
              </span>
            }
            title="Security by design. Protection at scale."
            sub={
              <>
                Defense-in-depth for data, payments, and real-time trading.
                <div className="mt-6">
                  <button className="px-8 py-3 rounded-full text-black font-semibold bg-[#fcd535] hover:bg-[#f5e49e] transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300">
                    Protect Now
                  </button>
                </div>
              </>
            }
            imageSrc="/shield-and-lock-mesh.jpg"
            className="hero-security"
          />

          <style jsx>{`
            /* 🎨 Custom style for HeroSplit image */
            .hero-security img {
              border: none !important;
              box-shadow: 0 20px 60px -10px rgba(0, 59, 92, 0.75) !important;
              border-radius: 16px;
              background: none !important;
            }

            /* 🔴 Protect Now button */
            .protect-btn {
              background-color: #e53e3e;
              color: #fff;
              border: none;
              border-radius: 10px;
              padding: 0.9rem 2rem;
              font-weight: 700;
              font-size: 1.05rem;
              cursor: pointer;
              transition: all 0.25s ease;
              box-shadow: 0 6px 18px rgba(229, 62, 62, 0.35);
            }

            .protect-btn:hover {
              background-color: #c53030;
              transform: translateY(-2px);
              box-shadow: 0 10px 26px rgba(229, 62, 62, 0.45);
            }
          `}</style>
        </div>
      </section>

      {/* ===================== CORE SECURITY FEATURES ===================== */}
      <section className="relative overflow-hidden bg-[#181A20] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight text-[#fcd535] md:text-4xl"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Core Security Features
          </motion.h2>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
          >
            {[
              '2FA / MFA Everywhere',
              'Role-Based Access Control (RBAC)',
              'Encryption at rest and in transit (TLS 1.3, AES-256)',
              'Web Application Firewall (WAF)',
              'Secrets Management (rotation, isolation)',
              'Audit Trails & Export',
            ].map((title) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
                className="group relative rounded-2xl border border-[#2a2f36] bg-[#1E2329] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#fcd535]/50 hover:shadow-[0_0_20px_rgba(252,213,53,0.1)]"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                {/* 🔹 Yellow gradient line */}
                <div className="mt-3 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#fcd535] via-[#fcd535]/80 to-[#fcd535]/50 transition-all duration-500 group-hover:w-24" />
                {/* 🔹 Hover background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fcd535]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ===================== PAYMENTS & PERSONAL DATA ===================== */}
      <section className="relative isolate overflow-hidden bg-[#181A20] py-24 text-white md:py-32">
        {/* Animated light mesh + subtle grid (dark-only theme) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* dark base background */}
          <div className="absolute inset-0 bg-[#181A20]" />

          {/* fine grid noise */}
          <div className="absolute inset-0 animate-[grain_10s_steps(10)_infinite] opacity-[0.07] [background-image:radial-gradient(#848E9C_1px,transparent_1px)] [background-size:18px_18px]" />

          {/* drifting yellow blobs */}
        </div>


        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <motion.h3
            className="text-center text-3xl font-semibold tracking-tight md:text-4xl text-[#fcd535]"
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Payments &amp; Personal Data
          </motion.h3>

          {/* Shimmer underline accent (yellow) */}
          <motion.div
            className="relative mx-auto mt-4 h-[4px] w-28 overflow-hidden rounded-full bg-gradient-to-r from-[#fcd535] via-[#fcd535]/80 to-[#fcd535]/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ transformOrigin: 'left center' }}
          >
            <span className="absolute inset-0 animate-[shine_2.2s_ease-in-out_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] opacity-50" />
          </motion.div>

          {/* Feature grid (cards) */}
          <motion.ul
            className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              'Tokenized cards via gateway; PAN never stored',
              'PCI-DSS-ready flows',
              'PII minimization & selective retention',
              'Field-level encryption, masking in UI & exports',
            ].map((text) => (
              <motion.li
                key={text}
                variants={{
                  hidden: { opacity: 0, y: 18, scale: 0.98 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="group relative rounded-2xl border border-[#2a2f36] bg-[#1E2329] p-5 backdrop-blur-[2px] transition-transform duration-300 hover:-translate-y-1"
              >
                {/* subtle yellow glow on hover */}
                <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#fcd535]/10 via-transparent to-[#fcd535]/10 blur-xl" />
                </span>

                {/* bullet + text */}
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-block h-3 w-3 flex-none animate-[pulseDot_2s_ease-in-out_infinite] rounded-full bg-[#fcd535] shadow-[0_0_0_6px_rgba(252,213,53,0.15)]" />
                  <p className="text-base font-medium leading-relaxed text-[#848E9C] md:text-lg">
                    {text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Keyframes (scoped) */}
        <style jsx>{`
    @keyframes aurora {
      0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      50% {
        transform: translate3d(10%, 5%, 0) rotate(15deg);
      }
      100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
    }
    @keyframes aurora_reverse {
      0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      50% {
        transform: translate3d(-10%, -5%, 0) rotate(-12deg);
      }
      100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
    }
    @keyframes shine {
      0% {
        transform: translateX(-120%);
      }
      50% {
        transform: translateX(120%);
      }
      100% {
        transform: translateX(120%);
      }
    }
    @keyframes pulseDot {
      0%,
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(252, 213, 53, 0.15);
      }
      50% {
        transform: scale(1.15);
        box-shadow: 0 0 0 10px rgba(252, 213, 53, 0.08);
      }
    }
    @keyframes grain {
      0% {
        transform: translate(0, 0);
      }
      10% {
        transform: translate(-5%, -10%);
      }
      20% {
        transform: translate(-15%, 5%);
      }
      30% {
        transform: translate(7%, -25%);
      }
      40% {
        transform: translate(-5%, 25%);
      }
      50% {
        transform: translate(-15%, 10%);
      }
      60% {
        transform: translate(15%, 0%);
      }
      70% {
        transform: translate(0%, 15%);
      }
      80% {
        transform: translate(3%, 35%);
      }
      90% {
        transform: translate(-10%, 10%);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `}</style>
      </section>


      {/* ===================== FRAUD & RUNTIME (IMPROVED) ===================== */}
      <section className="relative overflow-hidden bg-[#1E2329] py-24 md:py-32 text-white">
        {/* Animated blockchain background */}
        <BlockchainBg />

        {/* Soft floating particles */}
        <Dots className="absolute inset-0 -z-10 opacity-10" />

        {/* Gentle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#003B5C]/10 via-transparent to-[#000]/30" />

        {/* Frosted blur overlay */}
        <div className="pointer-events-none absolute inset-0 -z-[5] bg-white/5 backdrop-blur-[2px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-3xl font-semibold tracking-tight text-[#FCD535] md:text-4xl"
          >
            Intelligent Fraud & Runtime Protection
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base text-[#848E9C]"
          >
            Multi-layered signals and real-time safeguards to detect risky behavior early,
            throttle abusive traffic, and keep sessions safe without degrading user experience.
          </motion.p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Fraud & Anomaly Signals",
                body:
                  "Continuous monitoring of behavioral and network attributes — velocity checks, IP reputation scoring, device fingerprinting, and geofencing — to surface unusual or high-risk patterns before they escalate.",
                extra: null as React.ReactNode,
              },
              {
                title: "Runtime Protection",
                body:
                  "Smart rate limiting, brute-force detection, and instant revocation of suspicious sessions. Resilient by default, with graceful responses under stress or attack.",
                extra: (
                  <pre className="mt-3 overflow-auto rounded-xl bg-black/60 backdrop-blur-lg p-4 text-xs text-[#FCD535] border border-white/10">
                    <code>
                      {`HTTP/1.1 429 Too Many Requests
Retry-After: 60
Content-Type: application/json
{"error": "rate_limit_exceeded"}`}
                    </code>
                  </pre>
                ),
              },
              {
                title: "AI-Driven Risk Insights",
                body:
                  "Models analyze historical trading, login patterns, and device changes to flag anomalies and cluster suspicious activity — enabling proactive controls.",
                extra: null as React.ReactNode,
              },
              {
                title: "Secure Session Lifecycle",
                body:
                  "Short-lived, cryptographically signed tokens with automatic rotation. Sessions exhibiting risky behavior are invalidated in real time.",
                extra: null as React.ReactNode,
              },
            ].map(({ title, body, extra }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.08] backdrop-blur-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] 
                     transition-all duration-300 hover:-translate-y-1 
                     hover:border-[#FCD535]/30 hover:bg-white/[0.12]
                     hover:shadow-[0_8px_24px_rgba(255,255,255,0.05)]"
              >
                <h3 className="text-lg font-semibold text-[#FCD535]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#E5E5E5]">{body}</p>
                {extra}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#FCD535]/10 blur-[120px]" />
      </section>



      {/* ===================== FAQS ===================== */}
      <section className="relative bg-[#181A20] pt-24 pb-24 md:pt-32 md:pb-32 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Heading */}
          <motion.h2
            className="text-center text-2xl font-semibold text-[#FCD535] md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQs
          </motion.h2>

          {/* FAQ Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map(([q, a], i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-[#1E2329] bg-[#1E2329] p-5 shadow-sm transition hover:shadow-lg hover:border-[#FCD535]/30"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`q-${i}`}>
                    <AccordionTrigger className="font-medium text-[#FCD535] hover:text-[#FCD535]/90">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#848E9C] leading-relaxed">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional faint gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1E2329]/60 to-[#181A20]" />
        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section>

    </div>
  );
}

/** Dots layer (very subtle texture) */
function Dots({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(#ffffff60 1px, transparent 1px), radial-gradient(#ffffff30 1px, transparent 1px)",
        backgroundSize: "18px 18px, 36px 36px",
        backgroundPosition: "0 0, 9px 9px",
      }}
    />
  );
}

/** Moving “blockchain” network lines + blocks (light, subtle) */
function BlockchainBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
      {/* scrolling network layer */}
      <div className="absolute -inset-x-1 top-0 h-[140%] animate-[moveLeft_28s_linear_infinite]">
        <svg
          width="2200"
          height="1200"
          viewBox="0 0 2200 1200"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-[2200px] opacity-60"
        >
          {/* links */}
          <g stroke="#ffffff55" strokeWidth="1">
            {Array.from({ length: 80 }).map((_, i) => {
              const x1 = (i * 260) % 2200;
              const y1 = (i * 90) % 1200;
              const x2 = (x1 + 120) % 2200;
              const y2 = (y1 + 60) % 1200;
              return <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
          {/* blocks */}
          <g fill="#ffffff40">
            {Array.from({ length: 60 }).map((_, i) => {
              const x = (i * 180 + 40) % 2200;
              const y = (i * 110 + 30) % 1200;
              return <rect key={`r-${i}`} x={x} y={y} width="18" height="18" rx="4" />;
            })}
          </g>
        </svg>
      </div>

      {/* second layer, slower and larger for parallax */}
      <div className="absolute -inset-x-1 top-0 h-[140%] animate-[moveLeft_46s_linear_infinite]">
        <svg
          width="2600"
          height="1400"
          viewBox="0 0 2600 1400"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-[2600px] opacity-30"
        >
          <g stroke="#ffffff40" strokeWidth="1">
            {Array.from({ length: 70 }).map((_, i) => {
              const x1 = (i * 300) % 2600;
              const y1 = (i * 120) % 1400;
              const x2 = (x1 + 140) % 2600;
              const y2 = (y1 + 80) % 1400;
              return <line key={`l2-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
          <g fill="#ffffff35">
            {Array.from({ length: 50 }).map((_, i) => {
              const x = (i * 210 + 70) % 2600;
              const y = (i * 140 + 60) % 1400;
              return <rect key={`r2-${i}`} x={x} y={y} width="22" height="22" rx="5" />;
            })}
          </g>
        </svg>
      </div>

      {/* local keyframes for the move */}
      <style jsx>{`
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
