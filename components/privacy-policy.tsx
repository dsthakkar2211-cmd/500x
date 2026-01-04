"use client";

import React, { useMemo, useRef, useState } from "react";
import { Copy, Link as LinkIcon, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatbot } from "@/components/chatbot-provider";

type PolicySection = {
  id: string;
  title: string;
  body: React.ReactNode;
  badge?: string;
};

function slugToHash(id: string) {
  return `#${id}`;
}

function normalizeText(s: string) {
  return s.trim().toLowerCase();
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function copyToClipboard(text: string) {
  if (navigator?.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  return Promise.resolve();
}

function highlightText(text: string, query: string) {
  if (!query) return text;
  const q = normalizeText(query);
  if (!q) return text;

  const parts = text.split(new RegExp(`(${escapeRegExp(query)})`, "gi"));
  return parts.map((p, idx) => {
    if (normalizeText(p) === q) {
      return (
        <mark
          key={idx}
          className="rounded bg-yellow-200/70 px-1 py-0.5 text-slate-900"
        >
          {p}
        </mark>
      );
    }
    return <React.Fragment key={idx}>{p}</React.Fragment>;
  });
}

function inlineHighlight(text: string, query: string) {
  if (!query) return text;
  return <>{highlightText(text, query)}</>;
}

function countMatchesInString(text: string, query: string) {
  if (!query) return 0;
  const re = new RegExp(escapeRegExp(query), "gi");
  const m = text.match(re);
  return m ? m.length : 0;
}

function Definition({
  term,
  definition,
  search,
}: {
  term: string;
  definition: string;
  search: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 space-y-2">
      <div className="font-semibold text-white">{inlineHighlight(term, search)}</div>
      <div className="text-[#848E9C] leading-relaxed text-sm">
        {inlineHighlight(definition, search)}
      </div>
    </div>
  );
}

function RightItem({
  label,
  text,
  search,
}: {
  label: string;
  text: string;
  search: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1e2329]/70 p-5 space-y-2">
      <div className="font-semibold text-white">{inlineHighlight(label, search)}</div>
      <div className="text-[#848E9C] leading-relaxed text-sm">
        {inlineHighlight(text, search)}
      </div>
    </div>
  );
}

function CompanyInfoTable({ search }: { search: string }) {
  const rows: Array<{ field: string; details: string }> = [
    { field: "Platform", details: "500x.pro" },
    { field: "Legal Entity", details: "Autonomous AI Neural System L.L.C-FZ" },
    { field: "License No.", details: "2537291.01" },
    { field: "Jurisdiction", details: "Meydan Free Zone, Dubai, UAE" },
    { field: "Established", details: "September 2025" },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-[#1e2329]/70 overflow-hidden">
      <div className="px-6 py-4 border-b border-white/10">
        <h3 className="text-lg font-semibold text-white">
          {inlineHighlight("Company Information", search)}
        </h3>
        <p className="mt-1 text-sm text-[#848E9C]">
          {inlineHighlight(
            "The following details identify the operating platform and legal entity information.",
            search
          )}
        </p>
      </div>

      <div className="p-2 md:p-4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#848E9C] px-4 py-3 border-b border-white/10">
                  {inlineHighlight("Field", search)}
                </th>
                <th className="text-left text-xs font-semibold tracking-wider uppercase text-[#848E9C] px-4 py-3 border-b border-white/10">
                  {inlineHighlight("Details", search)}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={r.field} className="group">
                  <td
                    className={[
                      "align-top px-4 py-4 text-sm text-white/90",
                      "border-b border-white/10",
                      idx === rows.length - 1 ? "border-b-0" : "",
                    ].join(" ")}
                  >
                    <span className="font-semibold">
                      {inlineHighlight(r.field, search)}
                    </span>
                  </td>
                  <td
                    className={[
                      "align-top px-4 py-4 text-sm text-[#848E9C] leading-relaxed",
                      "border-b border-white/10",
                      idx === rows.length - 1 ? "border-b-0" : "",
                    ].join(" ")}
                  >
                    {inlineHighlight(r.details, search)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <p className="text-xs text-[#848E9C] leading-relaxed">
            {inlineHighlight(
              "Note: These details are provided for transparency and identification purposes.",
              search
            )}
          </p>
        </div>
      </div>
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
          <div className="mt-3 text-xs text-[#848E9C]">{slugToHash(id)}</div>
        </div>

      </div>

      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const { openChatbot } = useChatbot();

  function setToastMessage(msg: string) {
    setToast(msg);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 1600);
  }

  const sections: PolicySection[] = useMemo(
    () => [
      {
        id: "overview",
        title: "Privacy and Data Protection Policy",
        badge: "OVERVIEW",
        body: (
          <>
            <p className="text-[#848E9C] leading-relaxed">
              This Privacy and Data Protection Policy sets out the basis which Autonomous AI Neural System L.L.C-FZ (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) may collect, use or otherwise
              process personal data via our website{" "}
              <span className="font-semibold text-white">www.500x.pro</span>{" "}
              (&quot;Website&quot;) and all related websites, downloadable software, mobile
              applications including desktop applications (collectively &quot;Products&quot;),
              and other services provided by us (collectively together with the Website and
              Products, our &quot;Services&quot;).
            </p>

            <p className="mt-3 text-[#848E9C] leading-relaxed">
              We are committed to safeguarding your personal information while you use our
              websites and Services, including:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-1 text-[#848E9C]">
              <li>www.500x.pro and all related subdomains</li>
              <li>500x trading platform applications for Windows, iOS and Android</li>
              <li>Web-based trading terminals and client portals</li>
              <li>Back office and administrative systems</li>
              <li>Mobile applications for trading and account management</li>
            </ul>
          </>
        ),
      },
      {
        id: "company-information",
        title: "Company Information",
        badge: "COMPANY",
        body: <CompanyInfoTable search={search} />,
      },
      {
        id: "definitions",
        title: "Definitions",
        badge: "DEFINITIONS",
        body: (
          <div className="space-y-3">
            <Definition
              term="Personal Data"
              definition="Any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly..."
              search={search}
            />
            <Definition
              term="Processing"
              definition="Any operation or set of operations which is performed on personal data... such as collection, recording, organisation, storage, use, disclosure..."
              search={search}
            />
            <Definition
              term="Restriction of Processing"
              definition="The marking of stored personal data with the aim of limiting their processing in the future."
              search={search}
            />
            <Definition
              term="Controller"
              definition="The natural or legal person, public authority, agency or other body which determines the purposes and means of processing."
              search={search}
            />
            <Definition
              term="Processor"
              definition="A natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller."
              search={search}
            />
            <Definition
              term="Consent of the Data Subject"
              definition="Any freely given, specific, informed and unambiguous indication of the data subject's wishes..."
              search={search}
            />
          </div>
        ),
      },
      {
        id: "collection-and-use",
        title: "1. Collection and use of information",
        badge: "COLLECTION",
        body: (
          <div className="space-y-4">
            <h4 className="font-semibold text-white">
              1.1 We generally collect information that:
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-[#848E9C]">
              <li>
                {inlineHighlight(
                  "you directly provide us via our websites or upon your request regarding our products or services,",
                  search
                )}
              </li>
              <li>
                {inlineHighlight(
                  "we receive from the use of our products and services including but not limited to our websites.",
                  search
                )}
              </li>
            </ul>

            <h4 className="font-semibold text-white">
              1.2 We may collect your personal information through several sources, including:
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-[#848E9C]">
              <li>
                {inlineHighlight(
                  "Website forms and registrations to software products/applications",
                  search
                )}
              </li>
              <li>{inlineHighlight("Physical forms", search)}</li>
              <li>{inlineHighlight("Over the telephone or email", search)}</li>
              <li>{inlineHighlight("Introducing agent", search)}</li>
              <li>{inlineHighlight("Service desk tickets", search)}</li>
              <li>{inlineHighlight("Online live assistance and support", search)}</li>
              <li>{inlineHighlight("Social media and social networking", search)}</li>
              <li>{inlineHighlight("Advertising counters and identifiers on websites", search)}</li>
            </ul>

            <h4 className="font-semibold text-white">
              1.3 We may collect and use your personal data for the following purposes:
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-[#848E9C]">
              <li>{inlineHighlight("performing obligations under a contract, including providing trading services, account management, and transaction processing;", search)}</li>
              <li>{inlineHighlight("verifying your identity and conducting know-your-customer (KYC) and anti-money laundering (AML) checks as required by financial regulations;", search)}</li>
              <li>{inlineHighlight("responding to queries, requests, complaints, and feedback regarding our trading platform and services;", search)}</li>
              <li>{inlineHighlight("sending marketing information, surveys, and questionnaires about our trading products, market updates, and educational content;", search)}</li>
              <li>{inlineHighlight("complying with applicable laws, regulations, and assisting regulatory investigations and reporting requirements;", search)}</li>
              <li>{inlineHighlight("administering and improving product features and functionality of the 500x trading platform;", search)}</li>
              <li>{inlineHighlight("analyzing application performance via statistical data to enhance trading execution, platform stability, and user experience.", search)}</li>
            </ol>

            <div className="rounded-xl border border-[#fcd535]/30 bg-[#181a20]/70 p-4">
              <p className="text-[#fcd535] font-semibold mb-2">Public disclosures</p>
              <p className="text-[#848E9C] leading-relaxed">
                {inlineHighlight(
                  "When you voluntarily disclose your personal information in your profile, on forums and comment online in forum /chat areas, it becomes publicly available...",
                  search
                )}
              </p>
            </div>

            <h4 className="font-semibold text-white">
              1.4 Minor&apos;s personal information and privacy
            </h4>
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "We do not knowingly collect any personal information from minors under eighteen (18) years of age...",
                search
              )}
            </p>
          </div>
        ),
      },
      {
        id: "cookies",
        title: "2. Cookies",
        badge: "COOKIES",
        body: (
          <div className="space-y-3">
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "Cookies are small text files containing a string of numbers and letters that are placed on your hard disk by a web page server. We use cookies on our 500x.pro website and trading platform to enhance your user experience, maintain your session, remember your preferences, and analyze how you use our services. Cookies help us provide personalized content and improve the functionality of our trading platform.",
                search
              )}
            </p>
            <div className="rounded-xl border border-white/10 bg-[#1e2329]/70 p-4">
              <p className="text-[#848E9C]">
                {inlineHighlight("We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). You can control cookie settings through your browser preferences, though disabling certain cookies may affect the functionality of our trading platform.", search)}
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "protection",
        title: "3. Protection of personal data",
        badge: "SECURITY",
        body: (
          <div className="space-y-3">
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "We maintain appropriate administrative, technical and physical safeguards to protect Personal Data against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure socket layer (SSL) technology for data transmission, multi-factor authentication, regular security audits, and access controls to ensure that only authorized personnel can access your personal information.",
                search
              )}
            </p>
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security. We recommend that you take appropriate measures to protect your account credentials and notify us immediately of any unauthorized access to your account.",
                search
              )}
            </p>
          </div>
        ),
      },
      {
        id: "retention",
        title: "4. Retention of personal data",
        badge: "RETENTION",
        body: (
          <p className="text-[#848E9C] leading-relaxed">
            {inlineHighlight(
              "We may retain data for different periods of time for different purposes as required by statute, regulation, or legitimate business needs. Financial and trading records are typically retained for a minimum period as required by financial regulations (usually 5-7 years), while account information may be retained for the duration of your account's existence plus a reasonable period thereafter. Marketing data may be retained until you opt out or request deletion. We will securely delete or anonymize personal data once the retention period expires, unless we are legally required to retain it longer.",
              search
            )}
          </p>
        ),
      },
      {
        id: "transfers",
        title: "5. Data Transfers outside the EEA",
        badge: "TRANSFERS",
        body: (
          <p className="text-[#848E9C] leading-relaxed">
            {inlineHighlight(
              "We may have processors in different countries around the world and thus your personal data may be processed, used or transferred outside the EEA (European Economic Area). As a global trading platform, we operate in multiple jurisdictions including the UAE and India. When we transfer your personal data outside the EEA, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission, or we rely on adequacy decisions by the European Commission. By using our services, you consent to the transfer of your personal data to these locations.",
              search
            )}
          </p>
        ),
      },
      {
        id: "changes",
        title: "6. Changes to this Privacy and Data Protection Policy",
        badge: "UPDATES",
        body: (
          <div className="space-y-2">
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "We reserve the right to revise and update this Privacy and Data Protection Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you through email, a prominent notice on our website, or through the trading platform. The updated policy will be effective as of the date specified in the revised policy.",
                search
              )}
            </p>
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight("We encourage you to check our Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information. Your continued use of our services after any changes to this policy constitutes your acceptance of the updated terms.", search)}
            </p>
          </div>
        ),
      },
      {
        id: "rights",
        title: "7. Your Rights",
        badge: "RIGHTS",
        body: (
          <div className="space-y-3">
            <RightItem
              label="(a) the right to access"
              text="You have the right to confirmation as to whether or not we process your personal data and, where we do, access..."
              search={search}
            />
            <RightItem
              label="(b) the right to rectification"
              text="You have the right to request to have any inaccurate personal data about you rectified..."
              search={search}
            />
            <RightItem
              label="(c) the right to erasure"
              text="In some circumstances you have the right to request the erasure of your personal data..."
              search={search}
            />
            <RightItem
              label="(d) the right to restrict processing"
              text="In some circumstances you have the right to restrict the processing of your personal data..."
              search={search}
            />
            <RightItem
              label="(e) the right to object to processing"
              text="You have the right to object to our processing of your personal data on grounds relating to your particular situation..."
              search={search}
            />
            <RightItem
              label="(f) the right to data portability"
              text="You have the right to obtain the personal information provided to us in a structured, commonly used and machine-readable format..."
              search={search}
            />
          </div>
        ),
      },
      {
        id: "breaches",
        title: "8. Notification of Breaches",
        badge: "INCIDENTS",
        body: (
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "In the event of unauthorized breaches or intrusions into our systems that may compromise your personal data, we will notify you as soon as it is practically feasible and in accordance with applicable data protection laws. We will provide information about the nature of the breach, the types of data that may have been affected, the steps we are taking to address the breach, and recommendations for actions you can take to protect yourself. We are committed to maintaining the highest standards of data security and will take all necessary measures to prevent and respond to security incidents.",
                search
              )}
            </p>
        ),
      },
      {
        id: "contact",
        title: "9. Contact us",
        badge: "CONTACT",
        body: (
          <div className="rounded-3xl border border-white/10 bg-[#1e2329]/70 p-8 space-y-4">
            <p className="text-[#848E9C] leading-relaxed">
              {inlineHighlight(
                "If you have questions about this Privacy and Data Protection Policy, wish to exercise your rights regarding your personal data, or need assistance with data-related inquiries, please contact us through our support channels. Your request must include your name, email address, and a clear description of your inquiry or the right you wish to exercise.",
                search
              )}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button 
                onClick={openChatbot}
                className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-7 py-3"
              >
                Contact Support
              </Button>
            </div>
          </div>
        ),
      },
    ],
    [search]
  );

  const matchCount = useMemo(() => {
    if (!search) return 0;
    const q = normalizeText(search);
    if (!q) return 0;

    let total = 0;
    const rawTextBuckets: string[] = [
      `This Privacy and Data Protection Policy sets out the basis which Autonomous AI Neural System L.L.C-FZ may collect, use...`,
      `Cookies are small text files containing a string of numbers and letters...`,
      `Platform 500x.pro Legal Entity Autonomous AI Neural System L.L.C-FZ Trade Name ArcLight Solutions License No. 2537291.01 Jurisdiction Meydan Free Zone, Dubai, UAE Established September 2025 Development Hub AANS Private Limited, Ahmedabad, India`,
    ];
    for (const t of rawTextBuckets) total += countMatchesInString(t.toLowerCase(), q);
    return total;
  }, [search]);

  return (
    <div className="min-h-screen bg-[#181a20] text-white">
      {/* Page-only global styles (same as reference) */}
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

      {/* Header / Hero (same approach as reference) */}
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
              Privacy policy & data protection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#fcd535] animate-fade-in-up-delay-1">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-[#848E9C] text-base md:text-lg animate-fade-in-up-delay-2">
            Search, navigate by section, and copy permalinks.
            {search ? ` • Search active` : ""}
            {search && matchCount ? ` • ~${matchCount} matches` : ""}
          </p>

          <div className="mt-8 flex justify-center animate-fade-in-up-delay-3">
            <Button 
              onClick={openChatbot}
              className="bg-[#fcd535] hover:bg-[#f5e49e] text-black px-25 py-3 transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-10">

        {sections.map((s) => (
          <Section
            key={s.id}
            id={s.id}
            title={s.title}
            badge={s.badge}
          >

            {s.body}
          </Section>
        ))}
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#1e2329]/90 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}
