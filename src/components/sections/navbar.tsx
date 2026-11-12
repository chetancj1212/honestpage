"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-4 py-2 shadow-xs backdrop-blur-xl">
        <Link href="#top" className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-lg bg-foreground text-background font-mono text-xs font-black shadow-xs">
            H
          </div>
          <span className="text-base font-extrabold tracking-tight">
            Honest<span className="text-muted-foreground">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {[
            ["How It Works", "#how-it-works"],
            ["Pricing", "#pricing"],
            ["Documentation", "/manual"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-semibold text-muted-foreground"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="https://t.me/Contira"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button variant="ghost" size="sm" className="text-xs font-semibold">
              Support
            </Button>
          </Link>
          <a href="#pricing">
            <Button size="sm" className="text-xs font-semibold px-3.5">
              Get Session Pass →
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
