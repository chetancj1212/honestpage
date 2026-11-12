"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which Windows versions and systems are compatible?",
    a: "Honest is fully optimized for Windows 10 and Windows 11 (64-bit). It runs as a lightweight standalone executable — no external runtimes or complex setups required.",
  },
  {
    q: "Can I use one account on multiple PCs or share it?",
    a: (
      <>
        No. Each Honest account is strictly bound to{" "}
        <strong>1 physical PC (1 Account = 1 PC)</strong> via hardware ID
        verification. If you switch laptops, contact{" "}
        <Link
          href="https://t.me/Contira"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-foreground underline underline-offset-4"
        >
          Support
        </Link>{" "}
        for a device reset.
      </>
    ),
  },
  {
    q: "How long do my purchased session credits remain valid?",
    a: "Session credits never expire. Whether you buy the single ₹120 pass or the ₹600 Value Bundle, unused credits stay banked in your account until you actually run your exams.",
  },
  {
    q: "Can teachers or invigilators notice Honest on my screen?",
    a: (
      <>
        Honest was specifically built to ensure invigilators cannot see it. It
        runs on a low-profile overlay that can be positioned anywhere using{" "}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold text-foreground">
          Ctrl + Arrow keys
        </kbd>
        . Pressing{" "}
        <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold text-foreground">
          F10
        </kbd>{" "}
        instantly triggers Ghost Mode — making the overlay 100% invisible
        within a split second.
      </>
    ),
  },
  {
    q: "How do I purchase credits and receive my login?",
    a: (
      <>
        Select your plan above or contact{" "}
        <Link
          href="https://t.me/Contira"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-foreground underline underline-offset-4"
        >
          Support
        </Link>{" "}
        directly. You&apos;ll receive secure login credentials and session balance
        immediately via UPI or instant transfer.
      </>
    ),
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
      <div className="mb-8 text-center">
        <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Clear Answers
        </p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Frequently asked questions.
        </h2>
        <p className="mx-auto max-w-lg text-sm text-muted-foreground">
          Everything you need to know about compatibility, safety, and credits.
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border/70 bg-card/70"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-foreground transition-all sm:text-base"
              >
                <span>{faq.q}</span>
                <span
                  className={`ml-4 grid size-6 shrink-0 place-items-center rounded-full border border-border/70 bg-muted/40 transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  <ChevronDown className="size-3.5" />
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-border/40 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
