"use client";

import React, { useState } from "react";
import { useChatbot } from "./chatbot-provider";

/* -------------------------------------------------------------------------- */
/*                               Reusable Inputs                              */
/* -------------------------------------------------------------------------- */

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={[
        // layout
        "mt-1 block w-full",
        // visuals
        "rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm",
        // typography
        "text-[15px] leading-6 text-[#0B0D17] placeholder:text-gray-400",
        // focus
        "outline-none focus:border-[#E53E3E] focus:ring-2 focus:ring-[#FBD5D5]",
        // mobile friendliness
        "sm:text-[15px]",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={[
        "mt-1 block w-full min-h-[160px] resize-y",
        "rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm",
        "text-[15px] leading-6 text-[#0B0D17] placeholder:text-gray-400",
        "outline-none focus:border-[#E53E3E] focus:ring-2 focus:ring-[#FBD5D5]",
        "sm:text-[15px]",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
};
function Button({ className = "", variant = "solid", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 font-semibold transition-colors";
  const styles =
    variant === "ghost"
      ? [
        "border border-gray-200 bg-white text-[#0B0D17]",
        "hover:bg-[#E53E3E] hover:text-white",
      ].join(" ")
      : [
        // explicit color codes
        "bg-[#0B0D17] text-white",
        "hover:bg-[#10131f] active:bg-[#0a0d18]",
        "focus:ring-2 focus:ring-offset-2 focus:ring-[#E53E3E]",
      ].join(" ");
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

/* Simple Select (native) */
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={[
        "mt-1 block w-full",
        "rounded-lg border border-gray-300 bg-white px-3 py-2.5 shadow-sm",
        "text-[15px] leading-6 text-[#0B0D17]",
        "outline-none focus:border-[#E53E3E] focus:ring-2 focus:ring-[#FBD5D5]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </select>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Icons                                   */
/* -------------------------------------------------------------------------- */

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.59 2.5a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.57-1.14a2 2 0 0 1 2.11-.45c.8.27 1.64.47 2.5.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function MessageSquareTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M9 10h6M9 14h3" />
    </svg>
  );
}
function BookTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
      <path d="M20 22V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v13" />
      <path d="M8 8h8M8 12h8" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Top Hero (optional)                            */
/* -------------------------------------------------------------------------- */

function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[180px] sm:h-[280px] md:h-[200px]">
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

/* -------------------------------------------------------------------------- */
/*                            Stay Connected (cards)                           */
/* -------------------------------------------------------------------------- */

function StayConnected() {
  const { openChatbot } = useChatbot()
  
  return (
    <section className="bg-[#181a20] py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#848E9C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#848E9C]" />
          Get In Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#fcd535] sm:text-4xl">
          Stay Connected with 500x
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {/* Dial Us */}
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1">
            <div className="relative mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <PhoneIcon className="h-8 w-8 text-[#1e2329]" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Dial Us</h3>
            <p className="mt-2 text-[#848E9C]">For instant help & friendly service.</p>
            <div className="mt-3 space-y-2 text-base font-semibold text-[#fcd535]">
              <p><span className="text-sm text-[#848E9C]">WhatsApp:</span> +971 54 314 1177</p>
              <p><span className="text-sm text-[#848E9C]">Phone:</span> +971 54 314 1177</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1">
            <div className="relative mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <MailIcon className="h-8 w-8 text-[#1e2329]" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Mail Us</h3>
            <p className="mt-2 text-[#848E9C]">Solutions delivered to your inbox.</p>
            <div className="mt-3 space-y-2 text-base font-semibold text-[#fcd535]">
              <p><span className="text-sm text-[#848E9C]">General Inquiries:</span> info@500x.pro</p>
              <p><span className="text-sm text-[#848E9C]">Support:</span> support@500x.pro</p>
            </div>
          </div>

          {/* Market Hours */}
          <div className="flex flex-col items-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1">
            <div className="relative mb-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <ClockIcon className="h-8 w-8 text-[#1e2329]" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white">Market Hours</h3>
            <p className="mt-2 text-[#848E9C]">Visit us, the house of traders.</p>
            <div className="mt-3 space-y-2 text-base font-semibold text-[#fcd535]">
              <p className="text-sm text-[#848E9C]">24/7 (Live Chat)</p>
              <p>9 AM - 6 PM GST</p>
              <p>Mon - Sat</p>
            </div>
          </div>
        </div>


        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Chat Us */}
          <div className="relative flex items-center rounded-md bg-[#1e2329] p-6 text-white shadow-md">
            <div className="absolute -left-7 top-1/2 -translate-y-1/2 rotate-90">
              <div className="rounded-t-md text-black bg-[#fcd535] px-3 py-1 text-xs font-bold uppercase sm:text-sm">
                Chat Us
              </div>
            </div>
            <div className="ml-12 flex-shrink-0">
              <div className="rounded-full bg-white p-4">
                <MessageSquareTextIcon className="h-8 w-8 text-[#1e2329]" />
              </div>
            </div>
            <div className="ml-5 text-left">
              <p className="text-sm text-[#848E9C] sm:text-base">
                Instant support at your fingertips. Connect with us anytime.
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault()
                  openChatbot()
                }}
                className="mt-2 inline-flex items-center font-semibold text-white transition-colors hover:text-[#fcd535] cursor-pointer"
              >
                Live Chat
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* FAQs */}
          <div className="relative flex items-center rounded-md bg-[#1e2329] p-6 text-white shadow-md">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 rotate-90">
              <div className="rounded-t-md text-black bg-[#fcd535] px-3 py-1 text-xs font-bold uppercase sm:text-sm">
                FAQs
              </div>
            </div>
            <div className="ml-12 flex-shrink-0">
              <div className="rounded-full bg-white p-4">
                <BookTextIcon className="h-8 w-8 text-[#1e2329]" />
              </div>
            </div>
            <div className="ml-5 text-left">
              <p className="text-sm text-[#848E9C] sm:text-base">
                Find solutions fast in our customer support FAQs.
              </p>
              <a href="#" className="mt-2 inline-flex items-center font-semibold text-white transition-colors hover:text-[#fcd535]">
                Read FAQs
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                     SEND MESSAGE — polished & responsive                    */
/* -------------------------------------------------------------------------- */

function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<"existing" | "new">("existing");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "bill-payment",
  });

  function update<K extends keyof typeof form>(key: K, val: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // HTML5 validation will handle required fields; keep payload handy
    console.log("Submitting contact form:", { activeTab, ...form });
    alert("Thanks! We received your message.");
  }

  return (
    <section className="bg-[#1e2329] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Section label & title */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#848E9C]">
          Send Message
        </p>
        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#fcd535] sm:text-4xl">
          We’d Love to Hear From You
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500">
          Tell us a little about yourself and your query. We’ll get back to you shortly.
        </p>

        {/* Tab bar */}
        <div className="mx-auto mt-8 w-full max-w-2xl">
          <div className="flex w-full rounded-t-md border border-gray-200">
            <button
              onClick={() => setActiveTab("existing")}
              type="button"
              className={`w-1/2 py-3 text-sm font-semibold sm:text-base ${activeTab === "existing" ? "bg-[#fcd535] text-black" : "bg-white text-gray-500"
                }`}
            >
              Existing Trader
            </button>
            <button
              onClick={() => setActiveTab("new")}
              type="button"
              className={`w-1/2 py-3 text-sm font-semibold sm:text-base ${activeTab === "new" ? "bg-[#fcd535] text-black" : "bg-white text-gray-500"
                }`}
            >
              New Trader
            </button>
          </div>

          {/* Form box */}
          <div className="rounded-b-md border-x border-b border-gray-200 bg-white p-5 text-left shadow-sm sm:p-8">
            <form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-[#0B0D17] sm:text-sm">
                  Your Name <span className="text-[#E53E3E]">*</span>
                </label>
                <Input
                  id="name"
                  placeholder="Enter Name Here"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-[#0B0D17] sm:text-sm">
                  Email <span className="text-[#E53E3E]">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[13px] font-medium text-[#0B0D17] sm:text-sm">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="+971 54 314 1177"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  autoComplete="tel"
                />
              </div>

              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-[13px] font-medium text-[#0B0D17] sm:text-sm">
                  Reason for Contact
                </label>
                <Select
                  id="reason"
                  value={form.reason}
                  onChange={(e) => update("reason", e.target.value)}
                  className="w-full"
                >
                  <option value="">Select a reason…</option>
                  <option value="bill-payment">Bill Payment Inquiries</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="delete-account">Delete Account</option>
                </Select>
                {form.reason === "delete-account" && (
                  <div className="mt-2 rounded-md border border-red-200 bg-red-50 p-3">
                    <p className="text-sm font-bold text-red-600">
                      ⚠️ You are requesting to delete your account. This action is permanent and cannot be undone. Please provide your account details in the message below for verification.
                    </p>
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-[#0B0D17] sm:text-sm">
                  Message <span className="text-[#E53E3E]">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message…"
                  rows={8}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  required
                />
                <p className="mt-1 text-xs text-gray-400">Min 10 characters. No sensitive info.</p>
              </div>

              {/* Submit (full width) */}
              <div>
                <Button
                  type="submit"
                  className="w-full py-3 text-black bg-[#fcd535] text-black hover:bg-[#848E9C] hover:text-white focus:ring-2 focus:ring-[#fcd535] focus:ring-offset-2 transition-all"
                >
                  Submit Button
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>

              </div>

              {/* Footer note */}
              <p className="pt-1 text-center text-xs text-black">
                By submitting, you agree to be contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

/* -------------------------------------------------------------------------- */
/*                                Main Page Comp                               */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <ContactHero />
        <StayConnected />
        <ContactFormSection />
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                         Tailwind Color Tokens (Notes)                       */
/* -------------------------------------------------------------------------- */
/**
 * Make sure these are in your Tailwind config (theme.extend.colors):
 * 'fxzone-red': '#E53E3E',
 * 'fxzone-dark-gray': '#0B0D17',
 * 'fxzone-gray': '#6B7280',
 * 'fxzone-dark-blue': '#0F172A',
 * 'fxzone-light-gray': '#F3F4F6',
 *
 * Buttons use explicit HEX:
 *  - Primary button bg:        #0B0D17
 *  - Primary button hover:     #10131f
 *  - Primary button focus ring:#E53E3E
 * Tab active bg:               #E53E3E
 */
