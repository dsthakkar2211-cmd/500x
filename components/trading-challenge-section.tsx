/* TradingChallengeSection.tsx */
"use client";
import { useState } from "react";

export function TradingChallengeSection() {
  const leaderboard = [
    { rank: 1, trader: "Alex Johnson", profit: "$45,230", winRate: "87%" },
    { rank: 2, trader: "Sarah Chen", profit: "$42,180", winRate: "84%" },
    { rank: 3, trader: "Mike Rodriguez", profit: "$38,950", winRate: "82%" },
    { rank: 4, trader: "Emma Wilson", profit: "$35,670", winRate: "79%" },
    { rank: 5, trader: "David Kim", profit: "$33,420", winRate: "76%" },
    { rank: 6, trader: "Lisa Thompson", profit: "$31,890", winRate: "74%" },
    { rank: 7, trader: "James Brown", profit: "$29,560", winRate: "72%" },
    { rank: 8, trader: "Anna Garcia", profit: "$27,340", winRate: "70%" },
  ];

  const tabs = [
    {
      key: "admin",
      title: "Smart Admin AI",
      gradient: "from-blue-500 to-purple-600",
      points: [
        "Automated KYC/AML verification with 99.2% accuracy",
        "Dynamic server scaling based on trading volume",
        "Predictive maintenance and error prevention",
        "Intelligent resource allocation optimization",
        "Real-time compliance monitoring and reporting",
        "Automated client risk profiling and categorization",
      ],
      blurb:
        "Advanced AI that automates onboarding, infra orchestration and compliance—cutting operational overhead up to 60%.",
      icon: AdminIcon,
    },
    {
      key: "crm",
      title: "CRM & RMS AI",
      gradient: "from-pink-500 to-rose-600",
      points: [
        "Personalized engagement & intelligent lead scoring",
        "Predictive customer & portfolio value analysis",
        "Automated support & margin management",
        "Behavioral & market volatility prediction",
        "Dynamic pricing, spread & hedging optimization",
        "Cross-asset stress testing & correlation monitoring",
      ],
      blurb:
        "ML-powered customer intelligence that lifts retention and boosts conversions—while guarding risk in real-time.",
      icon: UsersIcon,
    },
    {
      key: "stack",
      title: "AI Tech Stack",
      gradient: "from-cyan-500 to-emerald-600",
      points: [
        "Realtime event bus with feature flags for safe rollout",
        "LLM agents for ops runbooks & auto-triage",
        "Vector search for client insights across channels",
        "Risk engines with explainable features (XAI)",
        "Online learning loops from trade outcomes",
        "Air-gapped inference for sensitive workloads",
      ],
      blurb:
        "A modern, modular AI stack purpose-built for brokerages—fast, explainable, and production-grade.",
      icon: ChipIcon,
    },
  ] as const;

  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("admin");
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section className="relative overflow-hidden bg-[#1e2329] py-12 sm:py-16 lg:py-20">
      {/* Static background layers (no animation) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-blue-100 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#848E9C]" />
            Live brokerage AI platform
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-extrabold text-[#fcd535]">
            Revolutionary AI for Modern Brokerages
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#848E9C] px-4">
            Automate ops, supercharge CRM, and control risk—on a secure, scalable stack.
          </p>
        </div>

        {/* Top stats */}
        <div className="mb-6 sm:mb-8 lg:mb-10 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-4">
          <StatCard label="Avg Onboarding Time" value="⏱ 2m 14s" />
          <StatCard label="Ops Cost Reduction" value="↓ 58%" />
          <StatCard label="Retention Uplift" value="↑ 40%" />
          <StatCard label="Compliance Alerts" value="Real-time" />
        </div>

        {/* Main grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Tabs */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-2 sm:p-3 backdrop-blur">
            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {tabs.map(({ key, title }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={[
                    "rounded-xl px-2 sm:px-3 py-2 text-[10px] sm:text-xs lg:text-sm transition",
                    active === key
                      ? "bg-white/15 text-[#fcd535] shadow-sm"
                      : "text-[#848E9C] hover:bg-white/10 hover:text-[#fcd535]",
                  ].join(" ")}
                >
                  {title}
                </button>
              ))}
            </div>

            <div className="mt-3 sm:mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
              <div className="relative p-4 sm:p-6">
                <div className="mb-2 flex items-center gap-2 sm:gap-3">
                  <div className="inline-flex items-center justify-center rounded-xl bg-[#fcd535]/20 p-2 sm:p-3 shadow">
                    <activeTab.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#fcd535]" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#fcd535]">{activeTab.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-[#848E9C]">{activeTab.blurb}</p>

                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {activeTab.points.map((p, i) => (
                    <li
                      key={i}
                      className="group flex items-start gap-2 sm:gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-2 sm:p-3 transition hover:bg-white/[0.06]"
                    >
                      <span className="mt-0.5 sm:mt-1 inline-flex aspect-square w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f5e49e] text-[#111827] text-[9px] sm:text-[10px] font-bold">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-[#848E9C] group-hover:text-[#fcd535]">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-[#fcd535] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-[#111827] shadow transition-colors hover:bg-[#f5e49e]"
                  >
                    Start Now →
                  </a>
                  <a
                    href="/tradingplatform"
                    className="inline-flex items-center justify-center rounded-xl border border-[#fcd535]/40 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#fcd535] transition hover:bg-white/10"
                  >
                    Talk to Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-4 sm:p-6 backdrop-blur">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-16 translate-x-10 rounded-full bg-[#fcd535]/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 translate-y-8 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-400/20 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#fcd535]">Autonomous Ops Brain</h3>
              <p className="mt-2 text-xs sm:text-sm max-w-md text-[#848E9C]">
                A closed-loop AI that observes trades, forecasts load, scales infra, and flags risk—before it hits your P&amp;L.
              </p>

              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-3">
                <SmallMetric title="Avg API Latency" value="12.6 ms" />
                <SmallMetric title="Failover Time" value="< 300 ms" />
                <SmallMetric title="Drift Alerts/wk" value="1.2k" />
              </div>

              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <img
                  src="/w-icon.png"
                  alt="Rising coin"
                  className="h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px] object-contain"
                />
              </div>

              <div className="mt-4 sm:mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] py-2 text-xs sm:text-sm text-[#848E9C] relative">
                <div className="flex whitespace-nowrap animate-marquee">
                  <span className="mx-2">
                    Latency SLO 99.95% • GDPR &amp; ISO 27001 • Real-time Risk Scoring • Zero-downtime Releases •
                  </span>
                  <span className="mx-2">
                    Latency SLO 99.95% • GDPR &amp; ISO 27001 • Real-time Risk Scoring • Zero-downtime Releases •
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}

/* ---------- Subcomponents ---------- */
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center backdrop-blur hover:bg-white/[0.1] transition">
      <div className="text-xs text-blue-100/80">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
function SmallMetric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
      <div className="text-xs text-blue-100/80">{title}</div>
      <div className="mt-1 text-base font-semibold text-white">{value}</div>
    </div>
  );
}

/* ---------- Icons ---------- */
function AdminIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function UsersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0m6 3a2 2 0 11-4 0 2 2 0 014 0M7 10a2 2 0 11-4 0 2 2 0 014 0" />
    </svg>
  );
}
function ChipIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path stroke="currentColor" strokeWidth="1.7" d="M9 9h6v6H9z" />
      <path stroke="currentColor" strokeWidth="1.7" d="M7 12h2M15 12h2M12 7v2M12 15v2" />
    </svg>
  );
}
