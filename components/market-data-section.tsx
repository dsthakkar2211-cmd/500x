export function MarketDataSection() {
  const marketData = [
    { pair: "EUR/USD", price: "1.0845", change: "+0.0012", changePercent: "+0.11%", trend: "up" },
    { pair: "GBP/USD", price: "1.2634", change: "-0.0023", changePercent: "-0.18%", trend: "down" },
    { pair: "USD/JPY", price: "149.85", change: "+0.45", changePercent: "+0.30%", trend: "up" },
    { pair: "AUD/USD", price: "0.6523", change: "+0.0008", changePercent: "+0.12%", trend: "up" },
    { pair: "USD/CAD", price: "1.3654", change: "-0.0015", changePercent: "-0.11%", trend: "down" },
    { pair: "EUR/GBP", price: "0.8589", change: "+0.0034", changePercent: "+0.40%", trend: "up" },
    { pair: "USD/CHF", price: "0.9123", change: "-0.0012", changePercent: "-0.13%", trend: "down" },
    { pair: "NZD/USD", price: "0.5987", change: "+0.0019", changePercent: "+0.32%", trend: "up" },
  ]

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003B5C] mb-3 sm:mb-4">Trending Pairs in the Market</h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A0AEC0]">Real-time forex market data and trends</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F1F5F9]">
                  <tr>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm lg:text-base text-[#003B5C] font-semibold">Currency Pair</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base text-[#003B5C] font-semibold">Price</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base text-[#003B5C] font-semibold">Change</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base text-[#003B5C] font-semibold">Change %</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm lg:text-base text-[#003B5C] font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {marketData.map((data, index) => (
                    <tr key={index} className="border-b border-[#E2E8F0] hover:bg-[#F1F5F9] transition-colors">
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm lg:text-base font-medium text-[#003B5C] whitespace-nowrap">{data.pair}</td>
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base text-[#1F2937] whitespace-nowrap">{data.price}</td>
                      <td
                        className={`px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap ${data.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {data.change}
                      </td>
                      <td
                        className={`px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap ${data.trend === "up" ? "text-green-600" : "text-red-600"}`}
                      >
                        {data.changePercent}
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center">
                      <span
                        className={`inline-block w-0 h-0 ${data.trend === "up" ? "border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-600" : "border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-red-600"}`}
                      ></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
