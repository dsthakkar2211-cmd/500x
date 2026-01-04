"use client"
import { useId } from "react"
import { Star } from "lucide-react"

/** Reusable circular text badge */
function RatingCircle({
  value = "4.9",
  ringText = "TRADER FEEDBACK AND RATINGS · ",
  size = 112,          // svg width/height
  radius = 45,         // text radius
  valueColor = "#fcd535", // yellow
  ringColor = "#848E9C",  // near gray
}: {
  value?: string
  ringText?: string
  size?: number
  radius?: number
  valueColor?: string
  ringColor?: string
}) {
  const id = useId()
  const repeated = (ringText.repeat(3)).trim() // repeat so it fills the circle

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      {/* center number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span style={{ fontSize: size * 0.25, fontWeight: 700, color: valueColor }}>{value}</span>
      </div>

      {/* circular text */}
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden>
        <defs>
          <path
            id={`${id}-circle`}
            d={`M ${size / 2} ${size / 2} m -${radius} 0 a ${radius} ${radius} 0 1 1 ${radius * 2} 0 a ${radius} ${radius} 0 1 1 -${radius * 2} 0`}
            fill="none"
          />
        </defs>
        <text fontSize={size * 0.09} fontWeight={600} letterSpacing="2" fill={ringColor}>
          <textPath href={`#${id}-circle`} startOffset="0%" lengthAdjust="spacingAndGlyphs">
            {repeated}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

/** Full block: circle on the left, stars + caption on the right */
export default function RatingWithSummary() {
  return (
    <div className="flex items-center gap-6">
      {/* Left: circular text badge */}
      <RatingCircle value="4.9" />

      {/* Right: stars + caption */}
      <div className="space-y-2">
        {/* 5 stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
          ))}
        </div>

        {/* two-line caption */}
        <div className="leading-snug">
          <p className="text-[15px] text-gray-600">From 2k Members, Reviewed</p>
          <p className="text-[15px] text-gray-600">by Google.</p>
        </div>
      </div>
    </div>
  )
}
