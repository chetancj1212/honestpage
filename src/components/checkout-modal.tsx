"use client";

import { useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck, Loader2 } from "lucide-react";

interface CashfreeCheckoutResult {
  error?: { message?: string };
}

declare global {
  interface Window {
    Cashfree?: (options: { mode: "sandbox" | "production" }) => {
      checkout: (options: { paymentSessionId: string; redirectTarget: "_self" }) => Promise<CashfreeCheckoutResult | undefined>;
    };
  }
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function CheckoutModal({ isOpen, onClose, defaultPlan = "bundle" }: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string>(defaultPlan);
  const [loading, setLoading] = useState(false);
  const [cashfreeReady, setCashfreeReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          planId: selectedPlan,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to initiate checkout");
      }

      if (!window.Cashfree) {
        throw new Error("Cashfree Checkout did not load. Please refresh the page and try again.");
      }

      const cashfree = window.Cashfree({ mode: data.environment });
      const result = await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_self",
      });

      if (result?.error) {
        setError(result.error.message || "Cashfree checkout could not be opened.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://sdk.cashfree.com/js/v3/cashfree.js"
        strategy="afterInteractive"
        onReady={() => setCashfreeReady(true)}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl border-0">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 grid size-7 place-items-center rounded-full bg-muted text-muted-foreground border-0"
          >
            <X className="size-4" />
          </button>

          <div className="mb-4">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Pass Checkout
            </p>
            <h2 className="text-xl font-black tracking-tight text-foreground">
              Get Honest Session Pass
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Account credentials & session credits are registered automatically to your Supabase account.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1.5">
                  Choose Pricing Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan("single")}
                    className={`rounded-xl p-3 text-left transition-colors border-0 ${
                      selectedPlan === "single"
                        ? "bg-red-500/10 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                        : "bg-muted/40 text-foreground"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs">Single Pass</span>
                      <span className="font-mono text-xs font-bold">₹120</span>
                    </div>
                    <p className={`text-[10px] ${selectedPlan === "single" ? "text-red-500/80 dark:text-red-400/80" : "text-muted-foreground"}`}>
                      1 Exam Session
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan("bundle")}
                    className={`rounded-xl p-3 text-left transition-colors relative border-0 ${
                      selectedPlan === "bundle"
                        ? "bg-red-500/10 text-red-600 dark:bg-red-950/30 dark:text-red-400"
                        : "bg-muted/40 text-foreground"
                    }`}
                  >
                    <span className="absolute -top-2 right-2 rounded-full bg-red-600 px-1.5 py-0.2 font-mono text-[8px] font-bold text-white uppercase">
                      16% OFF
                    </span>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs">6 Sessions</span>
                      <span className="font-mono text-xs font-bold">₹600</span>
                    </div>
                    <p className={`text-[10px] ${selectedPlan === "bundle" ? "text-red-500/80 dark:text-red-400/80" : "text-muted-foreground"}`}>
                      Full Semester Bundle
                    </p>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full rounded-lg border-0 bg-muted/30 px-3 py-2 text-xs text-foreground outline-none ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@college.edu"
                    className="w-full rounded-lg border-0 bg-muted/30 px-3 py-2 text-xs text-foreground outline-none ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-lg border-0 bg-muted/30 px-3 py-2 text-xs text-foreground outline-none ring-0 focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Set Desktop App Login Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Choose a password for Honest.exe"
                    className="w-full rounded-lg border-0 bg-muted/30 px-3 py-2 text-xs text-foreground outline-none ring-0 focus:ring-0 focus:outline-none"
                  />
                  <p className="text-[10px] text-muted-foreground mt-1">
                    You will use this email &amp; password to sign in inside Honest.exe.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                <span>Secure Cashfree Checkout &bull; Instant balance sync</span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading || !cashfreeReady}
                  className="w-full h-10 text-xs font-bold justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-3.5 animate-spin" /> Processing...
                    </span>
                  ) : !cashfreeReady ? (
                    "Loading secure checkout..."
                  ) : (
                    `Pay ₹${selectedPlan === "single" ? "120" : "600"} via Cashfree →`
                  )}
                </Button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}
