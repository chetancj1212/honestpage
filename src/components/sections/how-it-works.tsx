import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    num: "01",
    tag: "SETUP",
    title: "Download Honest.exe",
    desc: "Get the lightweight standalone Windows application. Compatible with Windows 10 & 11 (64-bit). No installers or dependencies needed.",
    action: (
      <a
        href="https://drive.google.com/drive/folders/1m3sY6kfQ4VsKNRh_VRIDjmfaZD9dvJTi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground underline-offset-4"
      >
        Download App Binary →
      </a>
    ),
  },
  {
    num: "02",
    tag: "SECURITY",
    title: "Sign In Securely",
    desc: "Enter your credentials once. Honest binds to your PC via hardware ID verification (1 Account = 1 PC) so your session balance remains safe.",
    action: (
      <span className="font-mono text-[11px] font-semibold text-emerald-600">
        HWID Locked &bull; Single PC
      </span>
    ),
  },
  {
    num: "03",
    tag: "AUTOMATION",
    title: "Purchase Credits & Go",
    desc: "Add session credits, launch your exam portal, hit F8, and let Honest handle question answering and option selection smoothly.",
    action: (
      <Link
        href="#pricing"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground underline-offset-4"
      >
        View Session Passes →
      </Link>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Effortless Onboarding
        </p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Three steps. Ready in 2 minutes.
        </h2>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          No complicated configuration, no browser extension tampering, and no technical knowledge required.
        </p>
      </div>

      <div className="mb-8 grid gap-5 sm:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.num} className="flex flex-col border-border/70 bg-card/70 p-6">
            <CardContent className="flex flex-1 flex-col p-0">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-foreground/30">
                  {s.num}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                  {s.tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">{s.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="border-t border-border/50 pt-4">{s.action}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-xs backdrop-blur-sm sm:flex sm:items-center sm:justify-between">
        <div className="space-y-1 mb-4 sm:mb-0">
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Official Documentation
          </p>
          <h4 className="text-base font-bold text-foreground">
            Need full hotkey mappings and overlay position guides?
          </h4>
          <p className="text-sm text-muted-foreground">
            Check the step-by-step user manual for complete control shortcuts and stealth tips.
          </p>
        </div>
        <div>
          <Link
            href="/manual"
          >
            <Button variant="outline" size="sm" className="whitespace-nowrap font-semibold">
              Read User Manual →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
