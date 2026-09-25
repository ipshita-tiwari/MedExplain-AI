import { Link, useLocation } from "react-router-dom"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const location = useLocation()

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        transparent
          ? "bg-transparent"
          : "border-b border-border/60 bg-background/95 backdrop-blur"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo inverted={transparent} />

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-clinic-slate/70 hover:text-clinic-slate",
                  active && (transparent ? "text-white" : "text-primary")
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className={cn(
              "text-sm",
              transparent && "text-white hover:bg-white/10 hover:text-white"
            )}
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
