import { Link } from "react-router-dom"
import { Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md",
          inverted ? "bg-white/10" : "bg-primary/10"
        )}
      >
        <Stethoscope
          className={cn("h-5 w-5", inverted ? "text-white" : "text-primary")}
          strokeWidth={2}
        />
      </span>
      <span
        className={cn(
          "font-serif text-lg font-semibold tracking-tight",
          inverted ? "text-white" : "text-clinic-slate"
        )}
      >
        MedExplain <span className={inverted ? "text-white/70" : "text-primary"}>AI</span>
      </span>
    </Link>
  )
}
