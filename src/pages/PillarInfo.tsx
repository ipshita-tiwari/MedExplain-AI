import { Link, useParams, Navigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/SiteHeader"
import { DisclaimerFooter } from "@/components/DisclaimerFooter"
import { pillars } from "@/data/pillars"

export default function PillarInfo() {
  const { slug } = useParams()
  const pillar = pillars.find((p) => p.slug === slug)

  if (!pillar) return <Navigate to="/" replace />

  const Icon = pillar.icon

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1 bg-clinic-sky">
        <div className="container max-w-3xl py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
            </span>
            <h1 className="text-3xl font-semibold text-clinic-slate">
              {pillar.label}
            </h1>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-clinic-slate/80">
            {pillar.summary}
          </p>

          <div className="mt-8 space-y-5 border-t border-border pt-8">
            {pillar.body.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-clinic-slate/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>

      <DisclaimerFooter />
    </div>
  )
}
