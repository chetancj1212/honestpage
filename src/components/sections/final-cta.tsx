import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="rounded-2xl border border-border/80 bg-gradient-to-b from-card to-muted/30 px-6 py-10 text-center shadow-lg sm:px-12">
        <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Secure Your Grades
        </p>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Stop second-guessing during exams.
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground leading-relaxed">
          Get Honest today. Sub-second speed, unmatched accuracy, and total peace of mind for your test portals.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="https://t.me/Contira?text=Hi%2C%20I%20want%20to%20get%20started%20with%20Honest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="h-11 px-6 font-semibold">
              Message Support to Start →
            </Button>
          </Link>
          <Link
            href="https://brewpage.app/honestusernamual/oGUH2BoZ6a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="h-11 px-6 font-semibold">
              View User Manual ↗
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
