"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Zap, 
  Rocket, 
  Globe, 
  Brain, 
  Shield, 
  Cpu, 
  Database, 
  Server, 
  Monitor, 
  Cloud, 
  BarChart3,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Building2,
  Award,
  Users,
  Target,
  TrendingUp,
  Lock,
  Heart,
  BookOpen,
  Sparkles,
  Clock,
  Calendar,
  Eye
} from "lucide-react";
import { useChatbot } from "@/components/chatbot-provider";

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
      className="rounded-3xl border border-white/10 bg-[#1e2329]/40 backdrop-blur p-7 md:p-10 scroll-mt-24"
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

function FeatureItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 space-y-2">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#fcd535]/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-[#fcd535]" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">{title}</h4>
          <p className="text-[#848E9C] leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ValueItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-[#fcd535]" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <p className="text-[#848E9C] leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function TechStackItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#1e2329]/70 p-4">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-[#fcd535]" />
        <span className="text-sm font-semibold text-white">{label}</span>
      </div>
      <p className="text-[#848E9C] text-sm">{value}</p>
    </div>
  );
}

export default function AboutUsPage() {
  const { openChatbot } = useChatbot();

  return (
    <div className="min-h-screen bg-[#181a20] text-white">
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
              About 500x.pro
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fcd535] animate-fade-in-up-delay-1">
            About Us
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-[#848E9C] text-base md:text-lg animate-fade-in-up-delay-2">
            Democratizing institutional-grade trading through AI-powered technology
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-14 space-y-10">
        <Section id="registered-office" title="Registered Office" badge="COMPANY">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 text-[#fcd535] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold mb-2">Meydan Grandstand</p>
                <p className="text-[#848E9C]">Meydan Road, Nad Al Sheba</p>
                <p className="text-[#848E9C]">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="licensed-activities" title="Licensed Activities" badge="LICENSES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Computer Systems & Software Design",
              "Information Technology Consultancy",
              "Artificial Intelligence Development",
              "Innovation & AI Research",
              "Advanced Technology Services"
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1e2329]/70 p-4">
                <CheckCircle2 className="w-5 h-5 text-[#fcd535] flex-shrink-0" />
                <span className="text-[#848E9C] text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="legal" title="Legal" badge="LEGAL">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
            <div className="space-y-3">
              <p className="text-white font-semibold">Autonomous AI Neural System L.L.C-FZ</p>
              <div className="space-y-1 text-[#848E9C] text-sm">
                <p>License Number: 2537291.01</p>
                <p>Formation Number: 2537291</p>
                <p>Meydan Free Zone, Dubai, UAE</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-[#848E9C] text-sm">
                  Regulated under Meydan Free Zone Authority regulations. Trade License valid until 15/09/2026.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="vision" title="Our Vision" badge="VISION">
          <div className="rounded-2xl border border-[#fcd535]/30 bg-[#181a20]/70 p-6">
            <p className="text-white text-lg font-semibold mb-3 italic">
              "Democratizing institutional-grade trading through AI-powered technology."
            </p>
            <p className="text-[#848E9C] leading-relaxed">
              We envision a world where every trader—from retail to professional—has access to the same lightning-fast execution, intelligent analytics, and powerful tools that were once exclusive to Wall Street institutions.
            </p>
          </div>
        </Section>

        <Section id="values" title="Our Values" badge="VALUES">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ValueItem
              icon={Sparkles}
              title="Innovation First"
              description="Continuously pushing boundaries with AI and machine learning"
            />
            <ValueItem
              icon={TrendingUp}
              title="Performance Obsessed"
              description="Every millisecond matters; every feature is optimized"
            />
            <ValueItem
              icon={Eye}
              title="Transparency"
              description="Clear pricing, real-time metrics, no hidden fees"
            />
            <ValueItem
              icon={Shield}
              title="Security & Trust"
              description="Your capital and data are our highest priority"
            />
            <ValueItem
              icon={Users}
              title="Client Success"
              description="We succeed when our traders succeed"
            />
            <ValueItem
              icon={BookOpen}
              title="Continuous Learning"
              description="Markets evolve, and so do we"
            />
          </div>
        </Section>

        <Section id="difference" title="500x.pro Features" badge="FEATURES">
          <div className="space-y-6">
            <FeatureItem
              icon={Zap}
              title="AI-Powered Intelligence"
              description="Neural network-based market prediction, real-time pattern recognition, adaptive algorithmic trading strategies, and sentiment analysis from 10,000+ sources."
            />
            <FeatureItem
              icon={Rocket}
              title="Ultra-Fast Execution"
              description="Less than 10ms data latency, direct market connectivity, multi-provider redundancy, and 99.99% uptime guarantee."
            />
            <FeatureItem
              icon={Globe}
              title="Global Market Access"
              description="Stocks: NYSE, NASDAQ, LSE, NSE, and 50+ exchanges. Forex: 60+ currency pairs with institutional spreads. Crypto: 500+ cryptocurrencies, 24/7 trading. Commodities: Gold, Silver, Oil, Agricultural products."
            />
            <FeatureItem
              icon={Brain}
              title="Intelligent Analytics"
              description="AI-driven trade signals, risk management automation, portfolio optimization algorithms, and predictive market analysis."
            />
            <FeatureItem
              icon={Shield}
              title="Enterprise-Grade Security"
              description="Bank-level encryption (AES-256), multi-factor authentication, cold storage for crypto assets, regular security audits, and Dubai regulatory compliance."
            />
          </div>
        </Section>

        <Section id="technology-stack" title="Our Technology Stack" badge="TECHNOLOGY">
          <p className="text-[#848E9C] mb-6">
            We've built 500x.pro on a world-class infrastructure designed for speed and reliability:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechStackItem icon={Cpu} label="AI/ML Engine" value="TensorFlow, PyTorch Neural Networks" />
            <TechStackItem icon={Zap} label="Real-Time Data" value="Multi-provider aggregation, WebSocket streaming" />
            <TechStackItem icon={Database} label="Data Processing" value="Apache Kafka, Redis Cluster, TimescaleDB" />
            <TechStackItem icon={Server} label="Backend" value="Node.js, Go, Python microservices" />
            <TechStackItem icon={Monitor} label="Frontend" value="React, WebAssembly for performance" />
            <TechStackItem icon={Cloud} label="Cloud Infrastructure" value="AWS, Multi-region deployment" />
            <TechStackItem icon={BarChart3} label="Analytics" value="Custom ML models, Big Data processing" />
          </div>
        </Section>

        <Section id="by-the-numbers" title="By The Numbers" badge="STATISTICS">
          <div className="rounded-3xl border border-white/10 bg-[#1e2329]/70 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#848E9C] px-4 py-3 border-b border-white/10">
                      Metric
                    </th>
                    <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#848E9C] px-4 py-3 border-b border-white/10">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Data Latency", value: "<10ms average" },
                    { metric: "AI Models", value: "15+ proprietary algorithms" },
                    { metric: "Markets Covered", value: "50+ global exchanges" },
                    { metric: "Trading Instruments", value: "100,000+" },
                    { metric: "Uptime SLA", value: "99.99%" },
                    { metric: "Data Points/Second", value: "1M+ processed" },
                    { metric: "API Response Time", value: "<50ms" },
                    { metric: "Supported Assets", value: "Stocks, Forex, Crypto, Commodities" }
                  ].map((row, idx, arr) => (
                    <tr key={idx} className="group">
                      <td className="px-4 py-4 text-sm text-white/90 border-b border-white/10">
                        <span className="font-semibold">{row.metric}</span>
                      </td>
                      <td className="px-4 py-4 text-sm text-[#848E9C] border-b border-white/10">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section id="regulatory-compliance" title="Regulatory Compliance" badge="COMPLIANCE">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "UAE Free Zone Registered - Meydan Free Zone Authority",
              "Trade License Verified - License No. 2537291.01",
              "AI Development Licensed - Authorized for AI & Innovation",
              "Data Protection - GDPR & UAE data laws compliant",
              "Financial Standards - Following international best practices"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#1e2329]/70 p-4">
                <CheckCircle2 className="w-5 h-5 text-[#fcd535] flex-shrink-0 mt-0.5" />
                <span className="text-[#848E9C] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="commitment" title="Our Commitment to You" badge="COMMITMENT">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-[#fcd535]" />
                <h3 className="text-lg font-semibold text-white">Continuous Innovation</h3>
              </div>
              <ul className="space-y-2 text-[#848E9C] text-sm list-disc list-inside">
                <li>Monthly feature releases</li>
                <li>AI model improvements every quarter</li>
                <li>Community-requested features prioritized</li>
                <li>Beta access to new tools</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-[#fcd535]" />
                <h3 className="text-lg font-semibold text-white">Education & Support</h3>
              </div>
              <ul className="space-y-2 text-[#848E9C] text-sm list-disc list-inside">
                <li>24/7 multilingual support</li>
                <li>Free trading courses & webinars</li>
                <li>AI strategy guides</li>
                <li>One-on-one onboarding for premium users</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-[#fcd535]" />
                <h3 className="text-lg font-semibold text-white">Premium Experience</h3>
              </div>
              <ul className="space-y-2 text-[#848E9C] text-sm list-disc list-inside">
                <li>Institutional-grade tools for everyone</li>
                <li>No account minimums</li>
                <li>Competitive pricing</li>
                <li>API access for algorithmic traders</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-[#fcd535]" />
                <h3 className="text-lg font-semibold text-white">Global Accessibility</h3>
              </div>
              <ul className="space-y-2 text-[#848E9C] text-sm list-disc list-inside">
                <li>Multi-language platform (English, Arabic, Hindi, Chinese)</li>
                <li>Local payment methods</li>
                <li>Regional market focus</li>
                <li>Global customer support</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact Us" badge="CONTACT">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-6 text-center">
              <p className="text-[#848E9C] mb-6">
                Have questions or need assistance? We're here to help you.
              </p>
              <Link href="/contact">
                <Button 
                  className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-7 py-3"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
