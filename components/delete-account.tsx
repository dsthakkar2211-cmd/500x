"use client";

import { Button } from "@/components/ui/button";
import { useChatbot } from "./chatbot-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Trash2, FileText, Shield } from "lucide-react";
import Link from "next/link";

export default function DeleteAccountPage() {
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

      {/* Hero with background video */}
      <section className="relative overflow-hidden border-b border-white/10 min-h-[280px] md:min-h-[320px] flex items-center justify-center">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#181a20]/85" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1e2329]/70 backdrop-blur px-4 py-2 mb-4 md:mb-5">
            <Trash2 className="h-3.5 w-3.5 text-[#848E9C]" />
            <span className="text-xs tracking-wider uppercase text-[#848E9C]">
              500X Account
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fcd535] animate-fade-in-up-delay-1">
            Delete Account
          </h1>
          <p className="mt-3 md:mt-5 max-w-2xl mx-auto text-[#848E9C] text-sm md:text-base animate-fade-in-up-delay-2">
            Request permanent deletion of your 500X account and associated data.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-8 md:space-y-10">
        {/* How to request deletion */}
        <Section id="request-deletion" title="To request account deletion" badge="REQUEST">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 md:p-6 space-y-4">
            <p className="text-[#848E9C] leading-relaxed">
              To permanently delete your account, please contact us by email. We will process your request within 7 working days.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-[#fcd535]/30 bg-[#181a20]/70 p-4">
              <Mail className="h-5 w-5 text-[#fcd535] shrink-0" />
              <div>
                <p className="text-white font-medium">Email us at:</p>
                <a
                  href="mailto:support@500x.pro"
                  className="text-[#fcd535] hover:underline break-all"
                >
                  support@500x.pro
                </a>
              </div>
            </div>
            <p className="text-[#848E9C] leading-relaxed text-sm">
              Please include your <strong className="text-white">registered email</strong> or <strong className="text-white">username</strong> so we can identify your account. We will delete your account within <strong className="text-white">7 working days</strong>.
            </p>
            <div className="pt-2">
              <Button
                onClick={openChatbot}
                className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-6 py-2.5 transition-all duration-300"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </Section>

        {/* Data that will be deleted */}
        <Section id="data-deleted" title="Data that will be deleted" badge="DELETED">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 md:p-6">
            <ul className="space-y-3 text-[#848E9C]">
              {[
                "Profile information",
                "Uploaded photos",
                "Messages",
                "Account credentials",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#fcd535] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Data retained */}
        <Section id="data-retained" title="Data retained" badge="RETENTION">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 md:p-6">
            <div className="flex gap-3">
              <Shield className="h-5 w-5 text-[#848E9C] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-[#848E9C] leading-relaxed">
                  <strong className="text-white">Legal or tax records</strong> (if required by law) may be retained for up to <strong className="text-white">30 days</strong> after account deletion. After this period, all such data is removed from our systems.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" title="Frequently asked questions" badge="FAQ">
          <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1" className="border-white/10 px-4 md:px-6">
                <AccordionTrigger className="text-white hover:text-[#fcd535] hover:no-underline py-4 text-left">
                  How long does account deletion take?
                </AccordionTrigger>
                <AccordionContent className="text-[#848E9C] pb-4">
                  We process deletion requests within 7 working days after we confirm your identity. You will receive a confirmation email once the process is complete.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-white/10 px-4 md:px-6">
                <AccordionTrigger className="text-white hover:text-[#fcd535] hover:no-underline py-4 text-left">
                  Can I recover my account after deletion?
                </AccordionTrigger>
                <AccordionContent className="text-[#848E9C] pb-4">
                  No. Account deletion is permanent. All associated data is removed and cannot be recovered. You would need to create a new account if you wish to use our services again.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-white/10 px-4 md:px-6">
                <AccordionTrigger className="text-white hover:text-[#fcd535] hover:no-underline py-4 text-left">
                  What if I have an active subscription or balance?
                </AccordionTrigger>
                <AccordionContent className="text-[#848E9C] pb-4">
                  We recommend resolving any open subscriptions or withdrawing any balance before requesting deletion. Contact support if you need assistance with this before deleting your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-white/10 px-4 md:px-6 border-b-0">
                <AccordionTrigger className="text-white hover:text-[#fcd535] hover:no-underline py-4 text-left">
                  Where can I read more about privacy and data?
                </AccordionTrigger>
                <AccordionContent className="text-[#848E9C] pb-4">
                  For full details on how we collect, use, and protect your data, see our{" "}
                  <Link href="/privacy-policy" className="text-[#fcd535] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/legal" className="text-[#fcd535] hover:underline">
                    Legal Information
                  </Link>.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        {/* Related links */}
        <section className="rounded-3xl border border-white/10 bg-[#1e2329]/40 backdrop-blur p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-[#fcd535] shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Need more help?</h3>
                <p className="text-sm text-[#848E9C] mt-0.5">
                  Contact support or read our legal and privacy documents.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={openChatbot}
                className="bg-[#fcd535] hover:bg-[#f5e49e] text-black font-medium px-6 py-2.5 rounded-lg min-h-[44px]"
              >
                Contact Support
              </Button>
              <Button asChild className="border-2 border-[#fcd535] bg-transparent text-[#fcd535] hover:bg-[#fcd535]/10 font-medium px-6 py-2.5 rounded-lg min-h-[44px]">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Divider after Need more help? */}
        <div
          className="w-full h-px mt-2 mb-2 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 15%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 85%, transparent 100%)",
            boxShadow: "0 0 12px rgba(255,255,255,0.08)",
          }}
          aria-hidden
        />
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
      className="rounded-3xl border border-white/10 bg-[#1e2329]/40 backdrop-blur p-6 md:p-8"
    >
      <div className="flex flex-col gap-4 mb-5 md:mb-6">
        {badge && (
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs tracking-wider uppercase text-[#848E9C] w-fit">
            {badge}
          </div>
        )}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#fcd535]">
          {title}
        </h2>
        <div className="h-1 w-16 md:w-24 rounded-full bg-[#848E9C]" />
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
