"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { CheckoutModal } from "@/components/checkout-modal";

const plans = [
  {
    id: "single",
    tag: "OPTION A • SINGLE RUN",
    title: "Single Session",
    subtitle: "Ideal for 1 full exam or test portal mock run.",
    price: 120,
    period: "/ 1 session",
    features: [
      "1 Full exam or test portal run",
      "Full F8 Auto & F9 Stealth modes",
      "F10 Ghost mode & hotkey repositioning",
      "Instant credentials & session activation",
      "Credits valid until used (No expiry)",
    ],
    cta: "Get Single Pass (₹120)",
    featured: false,
  },
  {
    id: "bundle",
    tag: "VALUE BUNDLE • MOST POPULAR",
    title: "6-Session Bundle",
    subtitle: "Full coverage for your entire semester MST & finals.",
    price: 600,
    period: "/ 6 sessions",
    effective: "₹100/session",
    badge: "BUY 5, GET 1 FREE — 16% OFF",
    features: [
      "6 Full exam / test portal runs (Save ₹120)",
      "Full F8 Auto & F9 Stealth modes",
      "F10 Ghost mode & instant stealth toggle",
      "Priority 1-on-1 instant Support",
      "Lifetime credit validity on registered PC",
    ],
    cta: "Claim Value Bundle (₹600)",
    featured: true,
  },
];

export function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState("bundle");

  const openCheckout = (planId: string) => {
    setSelectedPlanId(planId);
    setModalOpen(true);
  };

  return (
    <>
      <CheckoutModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPlan={selectedPlanId}
      />

      <section id="pricing" className="mx-auto max-w-5xl px-4 py-10 sm:py-14 scroll-mt-20">
        <div className="mb-8 text-center">
          <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Transparent Pricing
          </p>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pay Per Session. No Lock-in.
          </h2>
          <p className="mx-auto max-w-lg text-sm text-muted-foreground">
            Affordable passes crafted for college mid-terms and test portals. Zero
            subscriptions.
          </p>
        </div>

        <div className="mx-auto grid max-w-[880px] gap-5 sm:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`relative flex flex-col overflow-visible ${
                plan.featured
                  ? "border-2 border-foreground shadow-xl"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <Badge className="whitespace-nowrap rounded-full px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider font-bold shadow-sm bg-foreground text-background border-none">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="space-y-3 pt-8">
                <p
                  className={`font-mono text-[10px] font-bold tracking-wider ${
                    plan.featured
                      ? "text-emerald-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.tag}
                </p>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <div className="flex items-baseline gap-1 border-b pb-5">
                  <span className="text-lg font-bold">₹</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {plan.period}{" "}
                    {plan.effective && (
                      <span className="font-bold text-emerald-600">
                        ({plan.effective})
                      </span>
                    )}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          plan.featured
                            ? "text-emerald-500"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={
                          i === 0 && plan.featured ? "font-bold" : ""
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  onClick={() => openCheckout(plan.id)}
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta} →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-muted-foreground">
          Credentials &amp; credits activated instantly after payment.{" "}
          <Link
            href="https://t.me/Contira"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground underline underline-offset-4"
          >
            Contact Support for Instant Help →
          </Link>
        </p>
      </section>
    </>
  );
}
