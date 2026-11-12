import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Play,
  Eye,
  Pause,
  EyeOff,
  Move,
  Power,
  Coins,
  LogOut,
  AlertTriangle,
  CheckCircle2,
  Send,
} from "lucide-react";

export const metadata = {
  title: "Honest User Manual — Complete Guide & Shortcuts",
  description:
    "Official documentation and operational manual for Honest Desktop Assistant. Hotkeys, troubleshooting, quota, and best practices.",
};

const hotkeys = [
  {
    key: "F8",
    title: "Analyze & Auto Select",
    desc: "Analyzes the on-screen question, identifies the correct option, selects the radio button, and continues to the Next question automatically.",
    icon: Play,
  },
  {
    key: "F9",
    title: "Advisory Analysis (No Click)",
    desc: "Analyzes the visible question and displays the suggested answer on the overlay without making any mouse clicks.",
    icon: Eye,
  },
  {
    key: "Ctrl + F8",
    title: "Pause / Resume",
    desc: "Temporarily halts or resumes automated question processing on the active test portal.",
    icon: Pause,
  },
  {
    key: "F10",
    title: "Instant Ghost Mode",
    desc: "Instantly toggles the overlay between 100% invisible and visible within milliseconds when someone approaches.",
    icon: EyeOff,
  },
  {
    key: "Ctrl + Arrow Keys",
    title: "Reposition Overlay",
    desc: "Moves the compact HUD window anywhere on your screen (Up, Down, Left, Right) to avoid blocking exam elements.",
    icon: Move,
  },
  {
    key: "Ctrl + F10",
    title: "Quit / Close Honest",
    desc: "Immediately terminates the background application process cleanly.",
    icon: Power,
  },
];

const troubleshooting = [
  {
    q: "Honest does not open",
    steps: [
      "Close any lingering background Honest.exe processes in Task Manager.",
      "Start Honest.exe again as administrator.",
      "If Windows Defender shows SmartScreen, choose 'More info' and 'Run anyway'.",
      "Restart your computer if the problem persists.",
    ],
  },
  {
    q: "I cannot sign in",
    steps: [
      "Ensure the email and password match what you entered during website checkout.",
      "Make sure there are no accidental spaces before or after your email address.",
      "Check your active internet connection.",
      "Contact support on Telegram if you need a password reset.",
    ],
  },
  {
    q: "Account is being used on another device",
    steps: [
      "Each account is locked to 1 physical PC via hardware ID (1 Account = 1 PC).",
      "If you recently changed your laptop or motherboard, contact support on Telegram for a quick device reset.",
    ],
  },
  {
    q: "Answer is not selected automatically",
    steps: [
      "Ensure the entire question and all options (A, B, C, D) are completely visible on screen.",
      "Move the Honest overlay away using Ctrl + Arrow keys so it doesn't cover option text.",
      "Close any sticky banners, proctor webcam widgets, or drop-downs obscuring choices.",
      "Do not scroll or switch windows while Honest is computing.",
    ],
  },
  {
    q: "Quota shows zero or not updating",
    steps: [
      "Verify you are logged in by checking your username beside the gear icon.",
      "One quota credit is deducted when an exam question is successfully computed.",
      "Purchase a new pass from the pricing section or contact support to top up your balance.",
    ],
  },
];

export default function ManualPage() {
  return (
    <>
      <div className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-60" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-200/60 to-transparent blur-[100px]" />
        <div className="absolute -right-24 bottom-[10%] h-[400px] w-[480px] rounded-full bg-gradient-to-b from-zinc-200/40 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <Navbar />

        <main className="min-w-0 flex-1 overflow-x-clip px-4 py-10 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-foreground text-background">
                <BookOpen className="size-6" />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                Official Documentation
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Honest User Manual
              </h1>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                Everything you need to know to operate Honest.exe: setup, hotkey mappings, quota rules, and troubleshooting.
              </p>
            </div>

            <section className="mb-10 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span>What Honest Does</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Honest helps you answer visual questions on your screen. It reads the question, computes the result, displays the recommendation, and can automatically select the answer for you.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Getting Started in 6 Steps
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Download and run Honest.exe (no installer needed).",
                  "Open the settings panel using the gear icon button.",
                  "Enter the Email and Password you created during website checkout.",
                  "Click Sign In to authenticate.",
                  "Check your session quota displayed next to the gear button.",
                  "Open your test portal or quiz tab on screen.",
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-3.5"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-foreground text-background font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Your login session is saved automatically. You do not need to re-enter your password every time you launch the executable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Hotkey Controls &amp; Shortcuts
              </h2>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {hotkeys.map((hk) => {
                  const Icon = hk.icon;
                  return (
                    <Card key={hk.key} className="border-border/70 bg-card/70 p-4">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between mb-2">
                          <kbd className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-xs font-bold text-foreground">
                            {hk.key}
                          </kbd>
                          <Icon className="size-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1">
                          {hk.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {hk.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            <section className="mb-10 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Coins className="size-5 text-foreground" />
                <h2 className="text-lg font-bold text-foreground">Quota &amp; Credits</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                The quota number shows how many question credits you have remaining:
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                  <span>The number updates and refreshes automatically after each question is analyzed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                  <span>Credits never expire. Unused credits remain banked in your account indefinitely.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                  <span>If your quota reaches zero, simply purchase a session pass on the homepage.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="size-5 text-foreground" />
                <h2 className="text-lg font-bold text-foreground">Troubleshooting Common Problems</h2>
              </div>
              <div className="space-y-3">
                {troubleshooting.map((t, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border/70 bg-card/70 p-4"
                  >
                    <h3 className="text-sm font-bold text-foreground mb-2">
                      {t.q}
                    </h3>
                    <ul className="space-y-1.5">
                      {t.steps.map((st, sidx) => (
                        <li key={sidx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="font-mono text-[10px] text-foreground font-bold shrink-0 mt-0.5">
                            {sidx + 1}.
                          </span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-foreground">Best Practices for Maximum Accuracy</h2>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Keep the complete question fully visible on screen.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Ensure all answer options (A, B, C, D) are in view.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Avoid scrolling while analysis is in progress.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Close pop-ups or menus covering options.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Do not move or resize the browser window mid-click.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>Keep your account credentials confidential.</span>
                </li>
              </ul>
            </section>

            <div className="rounded-2xl border border-border/80 bg-card p-6 text-center">
              <h3 className="text-base font-bold text-foreground">Need Additional Assistance?</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                For questions, account resets, or technical help, reach our official Telegram support.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="https://t.me/Contira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="h-9 gap-1.5 text-xs font-semibold">
                    <Send className="size-3.5" /> Contact @Contira on Telegram
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" size="sm" className="h-9 text-xs font-semibold">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
