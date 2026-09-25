import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { pillars } from "@/data/pillars"
import { Badge } from "@/components/ui/badge"

export function WhySection() {
  return (
    <section className="bg-clinic-navy text-white">
      <div className="container py-16">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-clinic-amber">The foundation</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            Why MedExplain AI?
          </h2>
          <p className="mt-3 text-white/70">
            Four commitments shape every feature we build. Select any of them
            to read how it's put into practice.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.slug}
                to={`/info/${pillar.slug}`}
                className="group flex flex-col justify-between gap-6 bg-clinic-navy p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5">
                    <Icon className="h-5 w-5 text-clinic-amber" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-colors group-hover:text-white" />
                </div>
                <div>
                  <Badge
                    variant="outline"
                    className="border-white/20 text-white/90"
                  >
                    {pillar.label}
                  </Badge>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {pillar.summary}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
