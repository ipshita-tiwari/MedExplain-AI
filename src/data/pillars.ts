import type { LucideIcon } from "lucide-react"
import { Eye, Gauge, Stethoscope, ShieldCheck } from "lucide-react"

export interface Pillar {
  slug: string
  label: string
  icon: LucideIcon
  summary: string
  body: string[]
}

export const pillars: Pillar[] = [
  {
    slug: "explainable-ai",
    label: "Explainable AI",
    icon: Eye,
    summary:
      "Every output is traced back to the evidence that produced it, in language a clinician can verify.",
    body: [
      "MedExplain AI never returns a bare prediction. Alongside every suggested finding, the system surfaces the specific inputs — symptoms, lab values, imaging regions, or prior history — that most influenced the output, ranked by contribution.",
      "Explanations are rendered in plain clinical language, not raw model weights, so a physician can check the reasoning the way they would check a colleague's differential: against the underlying evidence, not a black box.",
      "This is a foundation of the platform rather than an add-on. Any feature that cannot produce a legible rationale for its output does not ship.",
    ],
  },
  {
    slug: "uncertainty-awareness",
    label: "Uncertainty Awareness",
    icon: Gauge,
    summary:
      "Confidence is reported honestly — including when the model doesn't know.",
    body: [
      "Every insight is shown with a calibrated confidence range rather than a single, falsely precise number. When the underlying data is sparse, ambiguous, or outside the range the model was trained on, MedExplain AI says so explicitly.",
      "Low-confidence cases are flagged for closer human review rather than smoothed over, and the system tracks how often its stated confidence matches real-world outcomes so that its calibration is measurable and auditable over time.",
      "The goal is a tool that knows the edges of its own competence, and communicates them clearly to the clinician using it.",
    ],
  },
  {
    slug: "clinical-focus",
    label: "Clinical Focus",
    icon: Stethoscope,
    summary:
      "Built around real clinical workflows, with practicing clinicians involved at every stage.",
    body: [
      "MedExplain AI is designed with input from practicing physicians, nurses, and allied health professionals, and it is validated against real clinical scenarios rather than isolated benchmark datasets.",
      "Interfaces follow the shape of an actual care workflow — triage, differential review, medication cross-checks — so insights show up at the moment a clinician needs them, not as a disconnected report.",
      "Ongoing review cycles with clinical advisors keep the system aligned with current practice guidelines as they evolve.",
    ],
  },
  {
    slug: "safe-and-responsible",
    label: "Safe & Responsible",
    icon: ShieldCheck,
    summary:
      "Guardrails, audit trails, and human oversight are built in from the ground up.",
    body: [
      "MedExplain AI is built as a decision-support tool, not a diagnostic authority. Every session is logged with a full audit trail of inputs, outputs, and the explanation shown, so any recommendation can be reviewed after the fact.",
      "The system is built to defer to a licensed clinician on anything outside its stated scope, and it is tested against known failure modes — edge cases, rare conditions, and adversarial inputs — before those safeguards are relied upon in practice.",
      "Patient data handling follows applicable privacy and security standards, with access controls scoped to each user's clinical role.",
    ],
  },
]
