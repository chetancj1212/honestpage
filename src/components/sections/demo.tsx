"use client";

import { useRef } from "react";

export function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Live Capture
        </p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Automating quiz options in real time.
        </h2>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Watch Honest read questions on screen, compute answers instantly, and auto-navigate without mouse interaction.
        </p>
      </div>

      <div
        className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl"
      >
        <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-400/80" />
              <span className="size-2.5 rounded-full bg-yellow-400/80" />
              <span className="size-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="ml-2 font-mono text-[11px] font-medium text-muted-foreground">
              Honest — Automated Quiz Run (1080p 60fps)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex size-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Autoplay Loop
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <video
            src="/demo_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-muted/30 px-5 py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-semibold text-foreground">
              STATUS: CONTINUOUS AUTOMATION
            </span>
            <span className="text-border">•</span>
            <span>Sub-second question deciphering</span>
          </div>
          <div className="font-mono text-[11px]">
            Press <kbd className="rounded border bg-card px-1.5 py-0.5 font-semibold text-foreground">F10</kbd> for instant ghost mode
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border/70 bg-card/60 p-5 text-sm text-muted-foreground shadow-xs backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="leading-relaxed">
            <strong className="text-foreground">Teacher &amp; Invigilator Proof:</strong>{" "}
            Honest runs on an independent desktop layer. When someone approaches your desk, pressing{" "}
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[11px] font-semibold text-foreground">
              F10
            </kbd>{" "}
            instantly fades the overlay into 100% invisibility.
          </p>
        </div>
      </div>
    </section>
  );
}
