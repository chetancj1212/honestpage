import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Terms and Conditions — Honest",
  description: "Terms of service, liability disclaimer, and acceptable usage policy.",
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By downloading, accessing, installing, or operating Honest (the 'Software'), you enter into a legally binding agreement and agree to follow these Terms and Conditions. If you do not agree with any portion of these terms, you must immediately remove the binary and cease all usage.",
  },
  {
    title: "2. Educational and Research Purpose Only",
    content:
      "Honest is engineered solely for testing local software environments, personal productivity benchmarks, simulated practice environments, and accessibility research. It is neither marketed nor permitted for bypassing institutional testing codes, unauthorized proctored assessments, or academic dishonesty.",
  },
  {
    title: "3. Absolute Disclaimer of Liability & Unauthorized Use",
    highlight: true,
    content:
      "WE EXPRESSLY DISCLAIM ANY AND ALL RESPONSIBILITY FOR UNAUTHORIZED, IMPROPER, UNLAWFUL, OR MALICIOUS USE OF THIS SOFTWARE. You acknowledge and accept that you are exclusively, solely, and completely liable for any consequences resulting from running this tool on any system, portal, or network. We hold zero liability for any suspension, expulsion, disqualification, examination cancellation, disciplinary hearings, fines, penalties, or institutional sanctions brought against you.",
  },
  {
    title: "4. User Responsibility for Damages & System Impact",
    highlight: true,
    content:
      "YOU ASSUME TOTAL RESPONSIBILITY FOR ANY DAMAGES CAUSED TO YOUR HARDWARE, OPERATING SYSTEM, DATA INTEGRITY, NETWORK INFRASTRUCTURE, OR THIRD-PARTY ASSETS. Under no circumstances will the creators, contributors, or maintainers of Honest be held liable for direct, indirect, incidental, punitive, or consequential damages resulting from system crashes, data loss, operating system alerts, security flags, or portal account terminations.",
  },
  {
    title: "5. Single-Device License & Access Rights",
    content:
      "Software access tokens, credentials, and session allowances are non-exclusive, non-transferable, and locked strictly to one physical hardware device (1 PC = 1 Device Identifier). Reselling, decompiling, tampering with anti-tamper routines, reverse engineering, or redistributing software assets without explicit permission will result in immediate and permanent credential termination without refund.",
  },
  {
    title: "6. Third-Party Portals & Non-Affiliation",
    content:
      "Honest is an independent desktop utility. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with any educational portal, university test system, proctoring software, or assessment provider. All product and company names are trademarks of their respective holders.",
  },
  {
    title: "7. No Warranty / 'As-Is' Provision",
    content:
      "The software is provided strictly on an 'as-is' and 'as-available' basis without warranties of any kind, whether express, statutory, or implied. We do not warrant that operation will be error-free, uninterrupted, compatible with all future platform revisions, or undetected by newly introduced heuristics.",
  },
  {
    title: "8. Amendments & Jurisdictional Prerogative",
    content:
      "We reserve the right to revise or modify these Terms and Conditions at any given point without prior individual notice. Continuous operation of the software following amendments signifies your explicit acknowledgment and agreement to all updated terms.",
  },
];

export default function TermsPage() {
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
            <div className="mb-8 text-center">
              <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Legal & Compliance
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                Terms and Conditions
              </h1>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                Please read this document carefully before using the software.
              </p>
            </div>

            <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/5 p-4 text-xs text-muted-foreground sm:p-5">
              <p className="font-bold text-foreground">Important Notice on Unauthorized Usage:</p>
              <p className="mt-1 leading-relaxed">
                We take zero responsibility for unauthorized use or policy violations. Any outcome, institutional consequence, or damage caused to systems or accounts is strictly your own responsibility.
              </p>
            </div>

            <div className="space-y-4">
              {termsSections.map((sec, idx) => (
                <Card
                  key={idx}
                  className={`border-border/70 bg-card/70 p-5 ${
                    sec.highlight ? "border-foreground/30 bg-card/90" : ""
                  }`}
                >
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-base font-bold text-foreground">
                      {sec.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {sec.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground underline underline-offset-4"
              >
                ← Return to Homepage
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
