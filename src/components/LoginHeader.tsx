import { Link } from "react-router-dom"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/ui/button"

export function LoginHeader() {
  return (
    <header className="w-full border-b border-border/60 bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="#login-form">Already have an account?</a>
          </Button>
          <Button asChild size="sm">
            <a href="#login-form">Log in</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
