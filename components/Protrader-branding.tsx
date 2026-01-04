import { Card } from "@/components/ui/card"
import { Users, Shield, Clock, Award, TrendingUp } from "lucide-react"
import { AboutSection } from "./about-section"

export function ProTrader5proBranding() {
  return (
    <section className="relative -mt-32 z-20" style={{background: "linear-gradient(to bottom, transparent 0px, transparent 125px, #181a20 125px, #181a20 100%)", }}>
      <div className="container mx-auto px-4">
        <div className="bg-[#1e2329] rounded-2xl shadow-2xl p-6 md:p-12 md:mx-8 animate-fade-in-up">
        <AboutSection/>

          {/* <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00B2A9] rounded-lg flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xl">FX</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003B5C]">ProTrader5.pro</h2>
                  <p className="text-sm text-[#E53E3E] font-medium">Since 2022</p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4 text-balance">
                Pioneering the Future of Forex Trading
              </h3>

              <p className="text-[#6B7280] text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E53E3E] rounded-full"></div>
                  <span className="text-[#1F2937] font-medium">Beginner's Guide to Forex Trading</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#E53E3E] rounded-full"></div>
                  <span className="text-[#1F2937] font-medium">Beginner's Guide to Forex Trading</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-[#00B2A9]">$1.4</div>
                <div className="text-[#6B7280]">
                  <div className="text-sm">Million</div>
                  <div className="text-xs">Trading Volume</div>
                </div>
                <button className="ml-4 bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1F2937]/90 transition-colors">
                  Read More
                </button>
              </div>
            </div>

           
            <div className="flex-1 max-w-md">
              
              <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] rounded-xl p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Award className="w-8 h-8 text-[#EA580C] opacity-20" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#EA580C] rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1F2937]">Best Forex Pairs Firm of the Year</div>
                    <div className="text-sm text-[#6B7280]">ProTrader5.pro Winner</div>
                  </div>
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border-l-4 border-[#00B2A9]">
                  <TrendingUp className="w-6 h-6 text-[#00B2A9] mx-auto mb-2 group-hover:animate-bounce" />
                  <div className="text-sm text-[#6B7280] mb-1">Commitment to Trading Success</div>
                  <div className="text-lg font-bold text-[#1F2937]">Excellence</div>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border-l-4 border-[#E53E3E]">
                  <Shield className="w-6 h-6 text-[#E53E3E] mx-auto mb-2 group-hover:animate-bounce" />
                  <div className="text-sm text-[#6B7280] mb-1">Embracing Global Trading Excellence</div>
                  <div className="text-lg font-bold text-[#1F2937]">Security</div>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border-l-4 border-[#10B981]">
                  <Users className="w-6 h-6 text-[#10B981] mx-auto mb-2 group-hover:animate-bounce" />
                  <div className="text-sm text-[#6B7280] mb-1">How Our Values Shape Your Success</div>
                  <div className="text-lg font-bold text-[#1F2937]">Community</div>
                </Card>

                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group border-l-4 border-[#8B5CF6]">
                  <Clock className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2 group-hover:animate-bounce" />
                  <div className="text-sm text-[#6B7280] mb-1">24/7 Support</div>
                  <div className="text-lg font-bold text-[#1F2937]">Available</div>
                </Card>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className=" pt-32 pb-8 -mt-16">
        <div className="container mx-auto px-4">{/* This space allows the white card to overlap both sections */}</div>
      </div>
    </section>
  )
}
