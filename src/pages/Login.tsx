
import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ShieldCheck,
  Stethoscope,
  Activity,
  LockKeyhole,
} from "lucide-react"

import { LoginHeader } from "@/components/LoginHeader"
import { DisclaimerFooter } from "@/components/DisclaimerFooter"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Login() {
  const [mode, setMode] = useState<"create" | "login">("create")

  return (
    <div className="min-h-screen bg-[#f5f9fc]">

      <LoginHeader />

      <main className="relative min-h-[calc(100vh-64px)] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#dff3ff_0,_transparent_35%),radial-gradient(circle_at_bottom_right,_#e5f7f3_0,_transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-12 lg:px-12">

          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <div className="hidden lg:block">

              <div className="max-w-xl">

                {/* Small badge */}
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>

                  Secure healthcare intelligence

                </div>

                {/* Main heading */}
                <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 xl:text-6xl">

                  Understand your
                  <span className="block text-blue-600">
                    medical reports
                  </span>

                </h1>

                {/* Description */}
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
                  MedExplain AI helps transform complex medical reports into
                  clear, understandable insights while keeping important
                  clinical context in focus.
                </p>

                {/* Features */}
                <div className="mt-10 space-y-5">

                  <Feature
                    icon={<Stethoscope className="h-5 w-5" />}
                    title="Clinical insights"
                    description="Understand important values and medical terms."
                  />

                  <Feature
                    icon={<Activity className="h-5 w-5" />}
                    title="Track your health"
                    description="View trends and changes across your reports."
                  />

                  <Feature
                    icon={<LockKeyhole className="h-5 w-5" />}
                    title="Privacy focused"
                    description="Your healthcare information stays protected."
                  />

                </div>

                {/* Small disclaimer */}
                <div className="mt-12 flex items-start gap-3 text-sm text-slate-400">

                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />

                  <p className="max-w-md leading-6">
                    MedExplain AI provides educational insights and does not
                    replace professional medical advice.
                  </p>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* RIGHT SIDE */}
            {/* ================================================= */}

            <div className="mx-auto w-full max-w-md">

              <Card className="border border-slate-200/80 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]">

                <CardHeader className="px-8 pb-4 pt-8">

                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                    <ShieldCheck className="h-5 w-5 text-blue-600" />

                  </div>

                  <CardTitle className="text-2xl font-semibold text-slate-900">

                    {mode === "create"
                      ? "Create your account"
                      : "Welcome back"}

                  </CardTitle>

                  <CardDescription className="mt-2 text-sm leading-6 text-slate-500">

                    {mode === "create"
                      ? "Create your secure MedExplain AI account."
                      : "Sign in to continue to your workspace."}

                  </CardDescription>

                  {/* Toggle */}
                  <div className="mt-6 grid grid-cols-2 rounded-lg bg-slate-100 p-1">

                    <button
                      type="button"
                      onClick={() => setMode("create")}
                      className={`rounded-md py-2.5 text-sm font-medium transition-all ${
                        mode === "create"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Create account
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className={`rounded-md py-2.5 text-sm font-medium transition-all ${
                        mode === "login"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Log in
                    </button>

                  </div>

                </CardHeader>

                <CardContent className="px-8 pb-8">

                  {/* ================================================= */}
                  {/* CREATE ACCOUNT */}
                  {/* ================================================= */}

                  {mode === "create" ? (

                    <form className="space-y-4">

                      {/* Name */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="fullName"
                          className="text-sm font-medium text-slate-700"
                        >
                          Full name
                        </Label>

                        <Input
                          id="fullName"
                          placeholder="Dr. Jane Doe"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      {/* Role */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="role"
                          className="text-sm font-medium text-slate-700"
                        >
                          Professional role
                        </Label>

                        <Select required>

                          <SelectTrigger
                            id="role"
                            className="h-11 rounded-lg border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100"
                          >
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>

                          <SelectContent>

                            <SelectItem value="doctor">
                              Doctor
                            </SelectItem>

                            <SelectItem value="medical-professional">
                              Medical professional
                            </SelectItem>

                            <SelectItem value="patient">
                              Patient
                            </SelectItem>

                            <SelectItem value="other">
                              Other
                            </SelectItem>

                          </SelectContent>

                        </Select>

                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-700"
                        >
                          Professional email
                        </Label>

                        <Input
                          id="email"
                          type="email"
                          placeholder="you@hospital.org"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      {/* Organization */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="org"
                          className="text-sm font-medium text-slate-700"
                        >
                          Organization{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </Label>

                        <Input
                          id="org"
                          placeholder="General Hospital"
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      {/* Password */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="password"
                          className="text-sm font-medium text-slate-700"
                        >
                          Password
                        </Label>

                        <Input
                          id="password"
                          type="password"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      {/* Confirm password */}
                      <div className="space-y-1.5">

                        <Label
                          htmlFor="confirmPassword"
                          className="text-sm font-medium text-slate-700"
                        >
                          Confirm password
                        </Label>

                        <Input
                          id="confirmPassword"
                          type="password"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      {/* Terms */}
                      <div className="flex items-start gap-2.5 pt-1">

                        <Checkbox
                          id="terms"
                          required
                          className="mt-0.5"
                        />

                        <Label
                          htmlFor="terms"
                          className="cursor-pointer text-xs font-normal leading-5 text-slate-500"
                        >
                          I agree to the terms and conditions and understand
                          that this application does not replace professional
                          medical advice.
                        </Label>

                      </div>

                      {/* Button */}
                      <Button
                        type="submit"
                        className="h-11 w-full rounded-lg bg-blue-600 font-semibold shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                      >
                        Create Account
                      </Button>

                      {/* Divider */}
                      <div className="flex items-center gap-3 py-1">

                        <div className="h-px flex-1 bg-slate-200" />

                        <span className="text-xs text-slate-400">
                          OR
                        </span>

                        <div className="h-px flex-1 bg-slate-200" />

                      </div>

                      {/* Google */}
                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 w-full rounded-lg border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50"
                      >

                        <GoogleIcon />

                        <span className="ml-2">
                          Continue with Google
                        </span>

                      </Button>

                    </form>

                  ) : (

                    /* ================================================= */
                    /* LOGIN */
                    /* ================================================= */

                    <form className="space-y-5">

                      <div className="space-y-1.5">

                        <Label
                          htmlFor="loginEmail"
                          className="text-sm font-medium text-slate-700"
                        >
                          Professional email
                        </Label>

                        <Input
                          id="loginEmail"
                          type="email"
                          placeholder="you@hospital.org"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      <div className="space-y-1.5">

                        <div className="flex items-center justify-between">

                          <Label
                            htmlFor="loginPassword"
                            className="text-sm font-medium text-slate-700"
                          >
                            Password
                          </Label>

                          <Link
                            to="#"
                            className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                          >
                            Forgot password?
                          </Link>

                        </div>

                        <Input
                          id="loginPassword"
                          type="password"
                          required
                          className="h-11 rounded-lg border-slate-200 bg-slate-50/50 transition focus:bg-white focus:ring-2 focus:ring-blue-100"
                        />

                      </div>

                      <Button
                        type="submit"
                        className="h-11 w-full rounded-lg bg-blue-600 font-semibold shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                      >
                        Log in
                      </Button>

                      <div className="flex items-center gap-3 py-1">

                        <div className="h-px flex-1 bg-slate-200" />

                        <span className="text-xs text-slate-400">
                          OR
                        </span>

                        <div className="h-px flex-1 bg-slate-200" />

                      </div>

                      <Button
                        type="button"
                        variant="outline"
                        className="h-11 w-full rounded-lg border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50"
                      >

                        <GoogleIcon />

                        <span className="ml-2">
                          Continue with Google
                        </span>

                      </Button>

                    </form>

                  )}

                  {/* Back */}
                  <div className="mt-7 border-t border-slate-100 pt-5 text-center">

                    <Link
                      to="/"
                      className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
                    >
                      ← Back to home
                    </Link>

                  </div>

                </CardContent>

              </Card>

              {/* Security */}
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">

                <ShieldCheck className="h-3.5 w-3.5" />

                <span>
                  Your information is protected
                </span>

              </div>

            </div>

          </div>

        </div>

      </main>

      <DisclaimerFooter />

    </div>
  )
}

/* ================================================= */
/* FEATURE COMPONENT */
/* ================================================= */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100">
        {icon}
      </div>

      <div>

        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {description}
        </p>

      </div>

    </div>
  )
}

/* ================================================= */
/* GOOGLE ICON */
/* ================================================= */

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      aria-hidden="true"
    >

      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.7 5.7 0 0 1-2.35 3.78v3.09h3.68c2.15-1.99 3.44-4.98 3.44-8.11z"
      />

      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.68-3.09c-1.02.68-2.33 1.09-4.25 1.09-3.27 0-6.03-2.21-7.02-5.18H1.15v3.19A12 12 0 0 0 12 24z"
      />

      <path
        fill="#FBBC05"
        d="M4.98 14.91a7.2 7.2 0 0 1-.38-2.28c0-.79.14-1.56.38-2.28V7.16H1.15A12 12 0 0 0 0 12.63c0 1.94.47 3.77 1.15 5.47z"
      />

      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.26-3.26C17.94 1.19 15.24 0 12 0A12 12 0 0 0 1.15 7.16l3.83 3.19c.99-2.97 3.75-5.6 7.02-5.6z"
      />

    </svg>
  )
}
