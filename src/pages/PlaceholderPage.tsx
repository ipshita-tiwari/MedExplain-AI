import { SiteHeader } from "@/components/SiteHeader"
import { DisclaimerFooter } from "@/components/DisclaimerFooter"

export default function PlaceholderPage({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-clinic-sky">
        <div className="container max-w-3xl py-24 text-center">
          <h1 className="text-3xl font-semibold text-clinic-slate">{title}</h1>
          <p className="mt-4 text-clinic-slate/70">{description}</p>
        </div>
      </main>
      <DisclaimerFooter />
    </div>
  )
}
