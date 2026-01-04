"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SolutionsSection() {
  return (
    <section className="py-8 bg-[#181a20]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#fcd535] mb-4 animate-fade-in-up">
            Comprehensive Brokerage Solutions
          </h2>
          <p className="text-lg text-[#848E9C] max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            Everything you need to launch, operate, and scale a successful brokerage
            business in today's competitive financial markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Broker Panel */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    Smart Broker Panel
                  </CardTitle>
                  <p className="text-sm text-gray-400">Complete Trading Solution</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Complete broker management system designed for international brokers,
                introducing brokers (IBs), and sub-brokers. Launch your brokerage
                operations with professional tools and unbeatable pricing.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Advanced broker management dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Multi-level IB management system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Client onboarding and account management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Automated commission calculations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Real-time reporting and analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Basic risk management tools
                </li>
              </ul>

              <div className="flex gap-2">
                {/* Get Started -> /for-owner */}
                <Link href="/for-owner" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full hover:scale-105 transition-all duration-300 bg-transparent border border-white/15 text-[#fcd535]"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* White Label Platform */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up animation-delay-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    White Label Platform
                  </CardTitle>
                  <p className="text-sm text-gray-400">Complete Trading Solution</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Fully customizable trading platform with your branding, including
                web, desktop, and mobile applications. Launch your brokerage with
                professional-grade technology.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Custom branding and UI/UX design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Multi-platform deployment (Web, iOS, Android)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Advanced charting and technical analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Order management and execution system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Back office administration tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Regulatory compliance framework
                </li>
              </ul>

              <div className="flex gap-2">
                <Link href="https://client.500x.exchange/demo-create/" target="_blank" className="flex-1">
                  <Button className="w-full bg-[#fcd535] text-black hover:bg-[#f5e49e] transition-colors duration-300">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Liquidity Solutions */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up animation-delay-400">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    Liquidity Solutions
                  </CardTitle>
                  <p className="text-sm text-[#848E9C]">Deep Market Access</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Access to tier-1 liquidity providers with competitive spreads, fast
                order execution, and deep liquidity across all major asset classes.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-18">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> 50+ tier-1 liquidity providers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Forex, Stocks, Crypto, Commodities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> STP/ECN execution models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Dynamic spread optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Real-time market depth and pricing
                </li>
              </ul>

              <Link href="/500x-platform" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full hover:scale-105 transition-all duration-300 bg-transparent border border-white/15 text-[#fcd535]"
                >
                  Get Solution
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Risk Management */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up animation-delay-600">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    Risk Management
                  </CardTitle>
                  <p className="text-sm text-gray-400">AI-Powered Protection</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Advanced risk management system with real-time monitoring,
                automated controls, and AI-driven analytics to protect your
                brokerage and market volatility.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Real-time position monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Automated margin call systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Stop-out protection mechanisms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Exposure management tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Client risk profiling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Regulatory reporting automation
                </li>
              </ul>

              <div className="flex gap-2">
                <Link href="/for-owner" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full hover:scale-105 transition-all duration-300 bg-transparent border border-white/15 text-[#fcd535]"
                  >
                    Risk Features
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* CRM & Back Office */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up animation-delay-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    CRM & Back Office
                  </CardTitle>
                  <p className="text-sm text-gray-400">Complete Business Management</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Comprehensive client relationship management and back office tools
                designed specifically for forex and CFD brokers with built-in security.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-11">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Client onboarding and KYC automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Lead management and conversion
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Account management dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Payment processing integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Reporting and analytics suite
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Customer support ticketing system
                </li>
              </ul>

              <div className="flex gap-2">
                <Link href="/for-owner" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full hover:scale-105 transition-all duration-300 bg-transparent border border-white/15 text-[#fcd535]"
                  >
                    Back Office Features
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* API & Integration */}
          <Card className="bg-[#1e2329] border border-white/15 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group border-l-4 border-l-[#848E9C] animate-fade-in-up animation-delay-1000">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#fcd535] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <CardTitle className="text-xl text-white group-hover:text-[#fcd535] transition-colors duration-300">
                    API & Integration
                  </CardTitle>
                  <p className="text-sm text-gray-400">Seamless Connectivity</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#848E9C] mb-4 text-sm">
                Robust REST and WebSocket APIs for custom integrations, third-party
                connections, and automated trading systems with comprehensive documentation.
              </p>
              <ul className="text-sm text-[#848E9C] space-y-2 mb-11">
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> RESTful API with full documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Real-time WebSocket data feeds
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Fix protocol support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Third-party plugin architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> Webhook notifications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#e53e3e]">✓</span> SDK for popular programming languages
                </li>
              </ul>

              <div className="flex gap-2">
                <Link href="/buy-the-platform" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full hover:scale-105 transition-all duration-300 bg-transparent border border-white/15 text-[#fcd535]"
                  >
                    Integration Guide
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
