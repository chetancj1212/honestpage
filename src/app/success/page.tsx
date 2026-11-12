import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, KeyRound, ExternalLink } from "lucide-react";
import { PaymentGate } from "./payment-gate";

export const metadata = {
  title: "Payment Confirmed — Honest",
  description: "Your session credits are active. Follow these steps to start using Honest.exe.",
};

export default function SuccessPage() {
  return (
    <>
      <div className="dot-grid pointer-events-none fixed inset-0 z-0 opacity-60" />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-200/60 to-transparent blur-[100px]" />
        <div className="absolute -right-24 bottom-[10%] h-[400px] w-[480px] rounded-full bg-gradient-to-b from-zinc-200/40 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
        <Navbar />

        <PaymentGate>
          <main className="min-w-0 flex-1 overflow-x-clip px-4 py-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-emerald-500/10 text-emerald-600">
              <CheckCircle2 className="size-8 stroke-[2.5]" />
            </div>

            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-600">
              Payment Successful &bull; Credits Active
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              You&apos;re All Set.
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground leading-relaxed">
              Your account and session credits have been activated. You do not need to log in to this website. Follow these 3 steps to start:
            </p>

            <div className="mt-8 space-y-4 text-left">
              <Card className="border-border/70 bg-card/70 p-5 shadow-xs">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-foreground text-background font-mono text-xs font-black">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-foreground">
                      Download Honest Desktop App
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Download the standalone Windows executable. No installation or setup required.
                    </p>
                    <div className="mt-3">
                      <a href="/Honest.exe" download="Honest.exe">
                        <Button size="sm" className="h-9 gap-1.5 px-4 text-xs font-semibold">
                          <Download className="size-3.5" /> Download Honest.exe
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card/70 p-5 shadow-xs">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-foreground text-background font-mono text-xs font-black">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-foreground">
                      Log In Inside Honest.exe
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Launch the app and enter the exact <strong>Email</strong> and <strong>Password</strong> you just set during checkout.
                    </p>
                    <div className="mt-2.5 rounded-lg bg-muted/40 p-2.5 font-mono text-[11px] text-muted-foreground flex items-center gap-2">
                      <KeyRound className="size-3.5 text-foreground shrink-0" />
                      <span>Single PC bound &bull; Credits loaded automatically</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card/70 p-5 shadow-xs">
                <CardContent className="flex items-start gap-4 p-0">
                  <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-foreground text-background font-mono text-xs font-black">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-foreground">
                      Open Test Portal &amp; Press F8 / F10
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Open your test portal in your browser. Press <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground">F8</kbd> for automated mode or <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground">F10</kbd> to hide the overlay instantly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://brewpage.app/honestusernamual/oGUH2BoZ6a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="h-9 gap-1.5 text-xs font-semibold">
                  <ExternalLink className="size-3.5" /> Read User Manual
                </Button>
              </Link>
              <Link
                href="https://t.me/Contira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="h-9 text-xs font-semibold text-muted-foreground">
                  Need Help? Contact Support
                </Button>
              </Link>
            </div>
          </div>
          </main>
        </PaymentGate>

        <Footer />
      </div>
    </>
  );
}
