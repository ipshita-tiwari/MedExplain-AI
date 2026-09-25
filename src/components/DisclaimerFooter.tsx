import { AlertTriangle } from "lucide-react"

export function DisclaimerFooter() {
  return (
    <div className="border-t border-border/60 bg-clinic-navy">
      <div className="container flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:text-left">
        <AlertTriangle className="h-5 w-5 shrink-0 text-clinic-amber" />
        <p className="text-xs leading-relaxed text-white/70 sm:text-sm">
          MedExplain AI provides decision-support insights and does not
          replace professional medical judgement.
        </p>
      </div>
    </div>
  )
}
