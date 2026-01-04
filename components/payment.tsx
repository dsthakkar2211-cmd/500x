"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HeroSplit } from "@/components/hero-split";
import { FadeIn } from "@/components/fade-in";

type Gateway = {
  name: string;
  methods: string[];
  fees: "Low" | "Standard" | "Network";
  region: string;
  status: "Live" | "Beta";
};

const gateways: Gateway[] = [
  { name: "Razorpay", methods: ["UPI", "Cards", "NetBanking", "Wallets"], fees: "Standard", region: "IN", status: "Live" },
  { name: "PayU", methods: ["UPI", "Cards", "NetBanking"], fees: "Standard", region: "IN", status: "Live" },
  { name: "Stripe", methods: ["Cards", "Wallets"], fees: "Standard", region: "Global", status: "Beta" },
  { name: "PhonePe", methods: ["UPI"], fees: "Low", region: "IN", status: "Live" },
  { name: "Coinbase Commerce", methods: ["Crypto"], fees: "Network", region: "Global", status: "Live" },
];

// Floating image cluster with subtle looping animations
function SecureCryptoRight() {
  return (
    <div className="relative">
      {/* Main image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md md:max-w-lg mx-auto p-4 sm:p-6 md:p-10 flex items-center justify-center drop-shadow-xl"
      >
        <img
          src="Smile.png"
          alt="Smile 3D Illustration"
          loading="lazy"
          className="w-48 sm:w-64 md:w-80 h-auto"
        />
      </motion.div>


      {/* Green coin */}
      <motion.div
        className="absolute top-2 right-12 w-10 md:top-3 md:right-15 md:w-18"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      >
        <img
          src="Dollar.png"
          alt="Coin 3D Illustration"
          loading="lazy"
          className="w-full"
        />
      </motion.div>

      {/* Yellow coin */}
      <motion.div
        className="absolute right-8 top-30 -translate-y-1/2 w-10 md:right-10 md:top-50 md:translate-y-0 md:w-18"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <img
          src="euro.png"
          alt="Coin 3D Illustration"
          loading="lazy"
          className="w-full"
        />
      </motion.div>

      {/* Silver coin */}
      <motion.div
        className="absolute left-18 top-6 w-10 md:left-[20%] md:top-10 md:w-18"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <img
          src="rupee.png"
          alt="Coin 3D Illustration"
          loading="lazy"
          className="w-full"
        />
      </motion.div>

      {/* Circle */}
      <motion.div
        className="absolute bottom-4 left-10 w-6 md:bottom-8 md:left-25 md:w-8"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <img
          src="circle.png"
          alt="Circle 3D Illustration"
          loading="lazy"
          className="w-full"
        />
      </motion.div>

      {/* Cross */}
      <motion.div
        className="absolute bottom-2 right-2 w-8 md:bottom-0 md:right-0 md:w-10"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.0,
        }}
      >
        <img
          src="xicon.png"
          alt="Cross 3D Illustration"
          loading="lazy"
          className="w-full"
        />
      </motion.div>
    </div>

  );
}

export default function PaymentGatewaysPage() {
  // ✅ Hooks must be inside a component function
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visibleGateways = useMemo(() => {
    if (activeFilter === "All") return gateways;

    if (activeFilter === "Low Fees") {
      return gateways.filter((g) => g.fees === "Low");
    }

    if (["UPI", "Cards", "NetBanking", "Wallets", "Crypto"].includes(activeFilter)) {
      return gateways.filter((g) => g.methods.includes(activeFilter));
    }

    return gateways;
  }, [activeFilter]);

  return (
    <div>
      <section className="relative overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/bg.mp4"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 50% navy overlay */}
        <div className="absolute inset-0 bg-[#181a20]/80" />

        {/* Foreground Content */}
        <div className="relative z-10">
          {<HeroSplit
            eyebrow={
              <span className="text-[#f5e49e] font-semibold tracking-wide uppercase">
                Payment Methods
              </span>
            }
            title="Fast, secure payments for every trade"
            sub={
              <>
                Choose UPI, cards, net-banking, or crypto (BTC/ETH/USDT). Instant confirmations, low fees.
                Experience seamless transactions built for modern traders.
                <div className="mt-6">
                  <button
                    onClick={() => (window.location.href = "#gateways")}
                    className="px-8 py-3 rounded-full text-black font-semibold bg-[#fcd535] hover:bg-[#f5e49e] transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                   Payment Gateway Method
                  </button>
                </div>
              </>
            }
            imageSrc="/ai-pay.jpeg"
          />}
        </div>
      </section>

      <section className="section bg-[#181a20]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-widest text-[#fcd535] font-semibold">Payment Gateways</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white">
                Supported Payment Gateways
              </h2>
              <p className="mt-4 text-[#848E9C]">
                500x supports multiple trusted payment gateways for secure transactions, including Razorpay, PayU,
                PhonePe, Stripe, and Coinbase Commerce. These gateways enable seamless deposits and withdrawals via UPI,
                cards, net banking, wallets, and cryptocurrencies, ensuring fast, reliable, and globally accessible
                payment processing for traders and investors across supported regions.
              </p>
            </div>

            <div className="relative">
              <SecureCryptoRight />
            </div>
          </div>
        </div>
      </section>

      {/* Gateways grid */}
      <section id="gateways" className="section py-16 bg-[#181a20]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Filter bar */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-[#848E9C]">Filter:</span>
            {["All", "UPI", "Cards", "NetBanking", "Wallets", "Crypto", "Low Fees"].map((chip) => (
              <span
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={[
                  "cursor-pointer rounded-full px-4 py-1.5 text-sm border transition-all duration-200 bg-[#fcd535]",
                  activeFilter === chip
                    ? "bg-brand-navy text-black shadow-sm"
                    : "bg-white/5 text-[#848E9C] border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-md transition-colors",
                ].join(" ")}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Gateway cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleGateways.map((g) => (
              <FadeIn key={g.name} delay={60}>
                <Card className="h-full transition-transform hover:-translate-y-1 hover:shadow-lg bg-[#1e2329] border-white/10 text-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {/* Title: white */}
                      <span className="text-white">{g.name}</span>

                      {/* Status: Live = #fcd535, else a subtle badge */}
                      <span
                        className={
                          g.status === "Live"
                            ? "rounded px-2 py-0.5 text-xs font-medium bg-[#fcd535] text-black shadow"
                            : "rounded px-2 py-0.5 text-xs font-medium text-[#848E9C] bg-white/5 border border-white/10 backdrop-blur"
                        }
                      >
                        {g.status}
                      </span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Methods: labels white + glassmorphic tags */}
                    <div className="text-sm">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-white">Methods</strong>
                        {/* right side hint color (optional) */}
                        <span className="text-xs text-[#848E9C]">{g.methods.length} options</span>
                      </div>
                      <div className="flex flex-wrap">
                        {g.methods.map((m) => (
                          <span
                            key={m}
                            className="mr-2 mb-2 inline-block rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-2 py-0.5 text-xs text-white/90"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Fees: label white, value right & #848E9C */}
                    <div className="text-sm flex items-center justify-between">
                      <strong className="text-white">Fees</strong>
                      <span className="text-[#848E9C]">{g.fees}</span>
                    </div>

                    {/* Region: label white, value right & #848E9C */}
                    <div className="text-sm flex items-center justify-between">
                      <strong className="text-white">Region</strong>
                      <span className="text-[#848E9C]">{g.region}</span>
                    </div>

                    {/* Button: #fcd535 with black text */}
                    <Button className="w-full bg-[#fcd535] text-black hover:bg-[#fcd535]/90">
                      Use {g.name}
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

        </div>
      </section >

      {/* Compare table */}
      < section className="section bg-[#181a20]" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-16">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#fcd535]">Compare at a glance</h2>
          </FadeIn>
          <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.3)]">
            <table className="w-full text-left text-sm text-white/90">
              <thead className="bg-white/10 backdrop-blur-md text-[#848E9C]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Gateway</th>
                  <th className="px-4 py-3 font-semibold">UPI</th>
                  <th className="px-4 py-3 font-semibold">Cards</th>
                  <th className="px-4 py-3 font-semibold">Crypto</th>
                  <th className="px-4 py-3 font-semibold">Fees</th>
                  <th className="px-4 py-3 font-semibold">Region</th>
                </tr>
              </thead>
              <tbody>
                {visibleGateways.map((g, i) => {
                  const s = (v: boolean) =>
                    v ? (
                      <span className="rounded-full bg-[#00ff80]/20 text-[#00ff80] px-2 py-0.5 text-xs font-medium backdrop-blur-sm border border-[#00ff80]/30">
                        Yes
                      </span>
                    ) : (
                      <span className="rounded-full bg-[#ff4d4d]/20 text-[#ff4d4d] px-2 py-0.5 text-xs font-medium backdrop-blur-sm border border-[#ff4d4d]/30">
                        No
                      </span>
                    );

                  return (
                    <tr
                      key={g.name}
                      className={`transition-colors ${i % 2
                        ? "bg-white/[0.04] hover:bg-white/[0.08]"
                        : "bg-white/[0.02] hover:bg-white/[0.08]"
                        }`}
                    >
                      <td className="px-4 py-3 font-semibold text-white">{g.name}</td>
                      <td className="px-4 py-3">{s(g.methods.includes("UPI"))}</td>
                      <td className="px-4 py-3">{s(g.methods.includes("Cards"))}</td>
                      <td className="px-4 py-3">{s(g.methods.includes("Crypto"))}</td>
                      <td className="px-4 py-3 text-[#848E9C]">{g.fees}</td>
                      <td className="px-4 py-3 text-[#848E9C]">{g.region}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </section >

      {/* Crypto pay section */}
      < section
        className="section py-20"
        style={{ backgroundColor: "#1e2329", paddingTop: "5rem", paddingBottom: "5rem" }
        }
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-white">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl text-[#fcd535]">Pay with Crypto</h2>
            <p className="mt-2 text-[#848E9C]/80">BTC, ETH, USDT (TRC20 & ERC20)</p>
          </FadeIn>

          {/* Asset chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["BTC", "ETH", "USDT-TRC20", "USDT-ERC20"].map((a) => (
              <span key={a} className="rounded-full px-3 py-1 text-xs border border-white/20 bg-[#fcd535]/10">
                {a}
              </span>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <table className="w-full text-left text-bold text-black">
              <thead className="bg-[#fcd535]/90 backdrop-blur-md">
                <tr>
                  {["Asset", "Network", "Min Amount", "Confirmations", "Fee Notes", "Status"].map((head) => (
                    <th key={head} className="px-4 py-3 font-semibold tracking-wide uppercase text-sm border-b border-white/10">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[
                  { asset: "BTC", net: "Bitcoin", min: "0.0002 BTC", conf: "~1–3", fee: "Network fee applies", status: "Live" },
                  { asset: "ETH", net: "Ethereum (ERC20)", min: "0.01 ETH", conf: "~6–12", fee: "Gas fee applies", status: "Live" },
                  { asset: "USDT", net: "TRC20 (Tron)", min: "10 USDT", conf: "~1–5", fee: "Low network fee", status: "Live" },
                  { asset: "USDT", net: "ERC20 (Ethereum)", min: "10 USDT", conf: "~10–20", fee: "Higher gas fees", status: "Live" },
                ].map((row, i) => (
                  <tr
                    key={`${row.asset}-${row.net}`}
                    className={`transition-all duration-300 ${i % 2 === 0 ? "bg-white/5" : "bg-white/10"
                      } hover:bg-[#848E9C]/10 hover:scale-[1.01]`}
                  >
                    <td className="px-4 py-3 font-semibold text-white">{row.asset}</td>
                    <td className="px-4 py-3 text-white/90">{row.net}</td>
                    <td className="px-4 py-3 text-white/90">{row.min}</td>
                    <td className="px-4 py-3 text-white/90">{row.conf}</td>
                    <td className="px-4 py-3 text-[#848E9C]">{row.fee}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded-full bg-[#fcd535] text-black font-medium text-xs px-3 py-1 shadow-md backdrop-blur-sm">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* Helper legend / alerts */}
          <div className="mt-4 text-xs text-white/80">
            <p>
              <span className="font-semibold" style={{ color: "#FCD7D7" }}>Note:</span>{" "}
              Min amounts & confirmations are examples—configure from your backend. Always send on the correct network.
            </p>
          </div>
        </div>
      </section >

      {/* Security tiles */}
      < section className="section py-16 bg-[#181a20]" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#fcd535] text-center">
            Security & Compliance
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "PCI-DSS Processing",
              "256-bit SSL & HSTS",
              "KYC/AML Screening",
              "Fraud & Risk Monitoring",
            ].map((t, i) => (
              <FadeIn key={t} delay={i * 70}>
                <div
                  className="relative rounded-2xl border border-white/10 
                   bg-[#1e2329]/60 backdrop-blur-xl 
                   p-6 text-center font-medium text-white/90 
                   shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                   transition-all duration-500 
                   hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
                   hover:border-[#fcd535]/30 hover:text-[#fcd535]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent opacity-70" />
                  <span className="relative z-10 block text-base sm:text-lg tracking-wide">
                    {t}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section >

      {/* FAQs */}
      < section id="faqs" className="section py-20 bg-[#181a20]" >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#fcd535] text-center">
              FAQs
            </h2>
            <p className="mt-2 text-center text-white/70">
              Common questions about payments, refunds, and compliance.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ["How fast are confirmations?", "Most UPI/cards confirm instantly; crypto depends on network blocks."],
              ["Refunds & chargebacks?", "Handled per gateway policy; crypto transfers are irreversible."],
              ["Wrong network sent?", "Contact support with details; recovery may not be possible."],
              ["Do you store card details?", "No. Gateways tokenize PAN; we do not store card numbers."],
              ["Is GST included?", "GST is applied where applicable and visible before payment."],
              ["KYC requirements?", "Certain methods require KYC per regulations and risk policy."],
            ].map(([q, a], i) => (
              <FadeIn key={q} delay={i * 100}>
                <Accordion
                  type="single"
                  collapsible
                  className="rounded-2xl border border-white/10 
                     bg-[#1e2329]/70 backdrop-blur-xl 
                     p-5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] 
                     hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)] 
                     transition-all duration-500"
                >
                  <AccordionItem value={`q${i}`}>
                    <AccordionTrigger
                      className="text-white/90 font-medium hover:text-[#fcd535] transition-colors"
                    >
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 mt-2">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="hidden sm:block mx-auto my-8 h-px w-[86%] sm:w-[72%] md:w-[60%] lg:w-[48%] bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-30" />
      </section >
    </div >
  );
}
