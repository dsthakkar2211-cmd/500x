import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSplit({
  eyebrow,
  title,
  sub,
  primary,
  secondary,
  onPrimaryHref = "#",
  onSecondaryHref = "#",
  imageSrc = "/abstract-fintech-visual.jpg",
  className,
}: {
  eyebrow?: string
  title: string
  sub?: string
  primary?: string
  secondary?: string
  onPrimaryHref?: string
  onSecondaryHref?: string
  imageSrc?: string
  className?: string
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="bg-gradient-to-br from-brand-navy to-black text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 py-12 md:py-20">
          <div className="flex flex-col items-start justify-center gap-4">
            {eyebrow ? (
              <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="text-balance text-3xl md:text-5xl font-semibold">{title}</h1>
            {sub ? <p className="text-white/80 leading-relaxed">{sub}</p> : null}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {primary ? (
                <Button asChild className="bg-brand-red hover:bg-brand-red-600 text-white">
                  <a href={onPrimaryHref}>{primary}</a>
                </Button>
              ) : null}
              {secondary ? (
                <Button asChild variant="outline" className="border-white bg-white text-brand-navy hover:bg-white/90">
                  <a href={onSecondaryHref}>{secondary}</a>
                </Button>
              ) : null}
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-auto">
            <Image src={imageSrc || "/placeholder.svg"} alt="Illustration" fill className="object-cover rounded-lg ring-1 ring-white/10"
              priority/>
          </div>
        </div>
      </div>
    </section>
  )
}
