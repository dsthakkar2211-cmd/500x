"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface StatItem {
  value: string
  target: number
  suffix: string
  label: string
  color: string
  delay: number
}

const stats: StatItem[] = [
  {
    value: "₹",
    target: 2.5,
    suffix: "B+",
    label: "Monthly Volume",
    color: "text-[#fcd535]",
    delay: 0,
  },
  {
    value: "",
    target: 500,
    suffix: "+",
    label: "Active Brokers",
    color: "text-[#f5e49e]",
    delay: 500,
  },
  {
    value: "",
    target: 0.1,
    suffix: "ms",
    label: "Latency",
    color: "text-[#fcd535]",
    delay: 1000,
  },
]

function AnimatedNumber({
  target,
  suffix,
  prefix = "",
  delay = 0,
  color,
}: {
  target: number
  suffix: string
  prefix?: string
  delay?: number
  color: string
}) {
  const [current, setCurrent] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const newValue = target * easeOutQuart

      setCurrent(newValue)

      if (step >= steps) {
        setCurrent(target)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, hasStarted])

  const formatNumber = (num: number) => {
    if (target >= 1) {
      return Math.floor(num * 10) / 10 // One decimal place for numbers >= 1
    } else {
      return Math.floor(num * 10) / 10 // One decimal place for decimals
    }
  }

  return (
    <span className={`text-4xl font-bold ${color} transition-all duration-300`}>
      {prefix}
      {formatNumber(current)}
      {suffix}
    </span>
  )
}

export function AnimatedStatsCard() {
  return (
    <Card className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#848E9C]/50">
        {stats.map((stat, index) => (
          <div key={index} className="p-8 text-center">
            <div className="space-y-2">
              <AnimatedNumber
                target={stat.target}
                suffix={stat.suffix}
                prefix={stat.value}
                delay={stat.delay}
                color={stat.color}
              />
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
