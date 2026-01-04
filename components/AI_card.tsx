"use client"

import React, { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

type Variant = "success" | "info"

interface FeatureCardProps {
  icon?: LucideIcon
  title: string
  description: string
  buttonText: string
  variant?: Variant
  className?: string
  onButtonClick?: () => void
}

export function FeatureCard({
  icon,
  title,
  description,
  buttonText,
  variant = "info",
  className,
  onButtonClick,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = useMemo(() => icon ?? CheckCircle2, [icon])

  if (!Card || !Button) {
    throw new Error("[FeatureCard] UI imports are undefined.")
  }

  return (
    <Card
      className={cn(
        // Glass base
        "group relative overflow-hidden rounded-xl bg-[#1e2329]/70 backdrop-blur-xl",
        "border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
        // tighter padding on mobile
        "p-3 sm:p-4",
        // motion
        "transition-all duration-500 ease-out active:scale-[0.99] hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 sm:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* column on mobile (button below text), row on md+ */}
      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* icon + text */}
        <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
          <div
            className={cn(
              "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl",
              "bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),_0_8px_20px_rgba(0,0,0,0.25)]",
              "transition-transform duration-500 group-hover:scale-110",
              isHovered && "animate-pulse-glow"
            )}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#fcd535]" />
          </div>

          <div className="flex-1 space-y-1 min-w-0">
            <h3 className="truncate text-base sm:text-lg font-semibold text-white group-hover:text-[#fcd535] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[#848E9C]">
              {description}
            </p>
          </div>
        </div>

        {/* button: full width & under text on mobile; right side on desktop */}
        <div className="w-full md:w-auto md:ml-6">
          <Button
            onClick={onButtonClick}
            className={cn(
              "w-full rounded-lg px-4 py-2 font-medium",
              "bg-[#fcd535] text-black hover:bg-[#f5e49e] hover:text-[#1e2329]",
              "focus-visible:ring-2 focus-visible:ring-[#fcd535]/40",
              "transition-all duration-300 hover:scale-105 active:scale-95",
              isHovered && "md:animate-float"
            )}
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* decorative orbs */}
      <div className="absolute -right-8 -top-8 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-[#fcd535]/10 to-transparent opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
      <div className="absolute -bottom-4 -left-4 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-transparent to-[#fcd535]/10 opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 delay-100" />
    </Card>
  )
}
