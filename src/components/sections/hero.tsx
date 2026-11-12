"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-[1360px] flex-col items-center overflow-x-clip px-4 pt-10 pb-10 sm:pt-14 sm:pb-14 text-center"
    >
      <div className="max-w-3xl space-y-4 mb-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Autonomous Test Portal Assistant
        </p>

        <div className="space-y-1">
          <p className="text-xl font-bold tracking-tight text-muted-foreground sm:text-2xl md:text-3xl">
            MST hai…? Dar lag raha hai? <span className="inline-block">👀</span>
          </p>
          <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-b from-zinc-950 via-zinc-800 to-zinc-900 bg-clip-text text-transparent">
              Fir NOT.
            </span>{" "}
            <span className="text-foreground">Honest Bot.</span>
          </h1>
        </div>

        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg font-normal leading-relaxed pt-1">
          The discreet desktop assistant engineered for test portals. <br className="hidden sm:inline" />
          <span className="text-foreground font-semibold">Sub-second accuracy</span>, zero browser footprint, and stealth so subtle{" "}
          <span className="text-foreground font-semibold">teachers can&apos;t see it running</span>.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
          <a href="/Honest.exe" download="Honest.exe" className="w-full sm:w-auto">
            <Button size="lg" className="h-11 w-full px-7 text-sm font-semibold shadow-xs">
              Download Honest.exe
            </Button>
          </a>
          <Link href="#pricing" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="h-11 w-full px-7 text-sm font-semibold border-border/80 bg-background/60"
            >
              Get Session Pass →
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-[1240px] mt-4 px-1 sm:px-4">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-full max-w-[950px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-transparent blur-[110px]" />

        <div className="w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-yellow-400/80" />
              <span className="size-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-[11px] font-medium text-muted-foreground">
                Honest.exe — Live Portal Automation (1080p 60fps)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
              <span className="font-mono text-[9px] font-semibold text-muted-foreground uppercase">
                Continuous Loop
              </span>
            </div>
          </div>

          <div className="relative aspect-video w-full bg-black overflow-hidden">
            <video
              src="/demo_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-3.5 grid grid-cols-2 md:grid-cols-4 gap-2.5 text-left">
          <div className="rounded-xl border border-border/40 bg-card/40 p-2.5 shadow-2xs backdrop-blur-md">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                LATENCY
              </span>
              <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            </div>
            <div className="text-xs font-black tracking-tight text-foreground">
              &lt; 0.38s Decision
            </div>
            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
              Instant on-screen deciphering.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card/40 p-2.5 shadow-2xs backdrop-blur-md">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                STEALTH
              </span>
              <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            </div>
            <div className="text-xs font-black tracking-tight text-foreground">
              F10 Ghost Mode
            </div>
            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
              Hardware overlay drops to 0%.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card/40 p-2.5 shadow-2xs backdrop-blur-md">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                ACCURACY
              </span>
              <span className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
            </div>
            <div className="text-xs font-black tracking-tight text-foreground">
              99.4% Match
            </div>
            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
              Negative marking safe.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-card/40 p-2.5 shadow-2xs backdrop-blur-md">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                DETECTION
              </span>
              <span className="size-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
            </div>
            <div className="text-xs font-black tracking-tight text-foreground">
              Zero Flags
            </div>
            <p className="text-[10px] text-muted-foreground truncate mt-0.5">
              No DOM or window blur alerts.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
