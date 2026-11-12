"use client";

import { Check, X } from "lucide-react";

const comparisonFeatures = [
  {
    feature: "Response Speed",
    honest: { text: "< 0.5s (Instant)", pass: true },
    googleLens: { text: "5 – 8s (Slow)", pass: false },
    chatgpt: { text: "10 – 15s (Laggy)", pass: false },
    gemini: { text: "8 – 12s (Slow)", pass: false },
  },
  {
    feature: "Hands-Free Auto Click & Next",
    honest: { text: "Full Automation [F8]", pass: true },
    googleLens: { text: "No Automation", pass: false },
    chatgpt: { text: "No Automation", pass: false },
    gemini: { text: "No Automation", pass: false },
  },
  {
    feature: "Proctor / Tab-Switch Detection",
    honest: { text: "Zero Flags (Hardware Layer)", pass: true },
    googleLens: { text: "Phone in Hand (High Risk)", pass: false },
    chatgpt: { text: "Alt-Tab Triggers Portal Alert", pass: false },
    gemini: { text: "Window Blur Flagged", pass: false },
  },
  {
    feature: "Teacher & Invigilator Stealth",
    honest: { text: "F10 Instant Ghost Invisibility", pass: true },
    googleLens: { text: "Visible Phone Screen", pass: false },
    chatgpt: { text: "Open Browser Tab Visible", pass: false },
    gemini: { text: "Open Browser Tab Visible", pass: false },
  },
  {
    feature: "Negative Marking Protection",
    honest: { text: "Precise Option Match (99%+)", pass: true },
    googleLens: { text: "Random Web Links", pass: false },
    chatgpt: { text: "Hallucinates on Logical MCQs", pass: false },
    gemini: { text: "Verbose / Misses Options", pass: false },
  },
  {
    feature: "Workflow Effort",
    honest: { text: "Single Keystroke [F8]", pass: true },
    googleLens: { text: "Align Camera + Crop", pass: false },
    chatgpt: { text: "Screenshot + Prompt + Read", pass: false },
    gemini: { text: "Upload Image + Wait", pass: false },
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Benchmark &amp; Speed Analysis
        </p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          More accurate. 10x faster. <br className="hidden sm:inline" />
          Zero tab-switch risk.
        </h2>
        <p className="mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed">
          Generic AI tools force you to leave the exam window, hold your phone, or read lengthy paragraphs.
          Honest was engineered purely for test portal speed and safety.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border/80 bg-card/60 shadow-xl backdrop-blur-sm">
        <table className="w-full text-left text-sm border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-border/70 bg-muted/40 font-mono text-xs uppercase tracking-wider">
              <th className="py-4 px-5 text-muted-foreground font-semibold w-1/4">
                Capability
              </th>
              <th className="py-4 px-5 text-foreground font-bold bg-primary/5 border-x border-border/60">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                  <span>Honest Bot</span>
                </div>
              </th>
              <th className="py-4 px-5 text-muted-foreground font-medium">
                Google Lens
              </th>
              <th className="py-4 px-5 text-muted-foreground font-medium">
                ChatGPT
              </th>
              <th className="py-4 px-5 text-muted-foreground font-medium">
                Gemini / Others
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {comparisonFeatures.map((row, idx) => (
              <tr key={idx}>
                <td className="py-4 px-5 font-semibold text-foreground text-xs sm:text-sm">
                  {row.feature}
                </td>

                <td className="py-4 px-5 bg-primary/5 border-x border-border/60 font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <span className="grid size-4 place-items-center rounded-full bg-emerald-500/20 text-emerald-600">
                      <Check className="size-3 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm text-foreground font-bold">
                      {row.honest.text}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-5 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="grid size-4 place-items-center rounded-full bg-red-500/10 text-red-500">
                      <X className="size-3 stroke-[2.5]" />
                    </span>
                    <span className="text-xs">{row.googleLens.text}</span>
                  </div>
                </td>

                <td className="py-4 px-5 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="grid size-4 place-items-center rounded-full bg-red-500/10 text-red-500">
                      <X className="size-3 stroke-[2.5]" />
                    </span>
                    <span className="text-xs">{row.chatgpt.text}</span>
                  </div>
                </td>

                <td className="py-4 px-5 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="grid size-4 place-items-center rounded-full bg-red-500/10 text-red-500">
                      <X className="size-3 stroke-[2.5]" />
                    </span>
                    <span className="text-xs">{row.gemini.text}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
          <span className="font-mono text-xs font-bold text-muted-foreground mb-3 block">
            SPEED ANALYSIS
          </span>
          <h4 className="text-base font-bold text-foreground mb-2">
            10x Faster Than Google Lens
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Google Lens requires picking up your phone, framing the camera, and waiting for web links. Honest decodes the question right on your screen in <strong>under 0.5s</strong>.
          </p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
          <span className="font-mono text-xs font-bold text-muted-foreground mb-3 block">
            AUTOMATION
          </span>
          <h4 className="text-base font-bold text-foreground mb-2">
            Hands-Free Option Selection
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            ChatGPT outputs lengthy text explanations you must read through. Honest actually identifies the exact radio button, clicks it, and advances to the next question.
          </p>
        </div>

        <div className="rounded-2xl border border-border/70 bg-card/70 p-6 shadow-xs">
          <span className="font-mono text-xs font-bold text-muted-foreground mb-3 block">
            STEALTH
          </span>
          <h4 className="text-base font-bold text-foreground mb-2">
            Zero Tab-Switch / Blur Flags
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Test portals immediately flag you when switching to ChatGPT tabs. Honest runs as an independent overlay with <strong>F10 ghost mode</strong>, triggering zero browser events.
          </p>
        </div>
      </div>
    </section>
  );
}
