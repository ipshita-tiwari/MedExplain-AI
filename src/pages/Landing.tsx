import { Link } from "react-router-dom"
import { Play, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/SiteHeader"
import { WhySection } from "@/components/WhySection"
import { DisclaimerFooter } from "@/components/DisclaimerFooter"
import { Button } from "@/components/ui/button"

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <SiteHeader transparent />

      {/* BODY */}
      <main
        className="relative flex-1 -mt-16 bg-clinic-gradient bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(15,42,61,0.94) 10%, rgba(19,74,74,0.88) 55%, rgba(29,122,115,0.8) 100%), url('https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="container flex min-h-screen flex-col justify-center pb-24 pt-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              Decision-support, not a diagnosis
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Clinical reasoning you can see, question, and trust.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              MedExplain AI turns patient data into clear, evidence-linked
              insights — every suggestion shows its reasoning and its
              confidence, so the clinician stays in charge of the decision.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/login">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              >
                <Link to="/how-it-works">
                  <Play className="h-4 w-4" /> Watch demo
                </Link>
              </Button>
            </div>

            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <dt className="text-2xl font-semibold text-white">40+</dt>
                <dd className="mt-1 text-xs text-white/60">
                  clinical partner sites
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">100%</dt>
                <dd className="mt-1 text-xs text-white/60">
                  outputs shown with rationale
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-white">24/7</dt>
                <dd className="mt-1 text-xs text-white/60">
                  human oversight required
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer>
        <WhySection />
        <DisclaimerFooter />
      </footer>
    </div>
  )
}
