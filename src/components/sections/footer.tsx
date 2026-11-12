import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-8 pt-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="grid size-6 place-items-center rounded-md bg-foreground text-background font-mono text-[10px] font-black">
                H
              </div>
              <span className="text-base font-extrabold tracking-tight">
                Honest<span className="text-muted-foreground">.</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Speed, accuracy &amp; total stealth for online test portals.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-2.5">
              <span className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                Navigation
              </span>
              {[
                ["How It Works", "#how-it-works"],
                ["Pricing Plans", "#pricing"],
                ["Documentation", "/manual"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                Resources
              </span>
              <Link
                href="/manual"
                className="text-sm text-muted-foreground"
              >
                User Manual
              </Link>
              <Link
                href="https://t.me/Contira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                Support ↗
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="#faq"
                className="text-sm text-muted-foreground"
              >
                Compatibility &amp; FAQ
              </Link>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="max-w-md">
            Disclaimer: Honest is intended for authorized practice, revision
            workflows, and mock test simulations.
          </p>
          <p className="whitespace-nowrap font-mono">
            © 2026 Honest Bot. Windows 10/11 64-bit.
          </p>
        </div>
      </div>
    </footer>
  );
}
