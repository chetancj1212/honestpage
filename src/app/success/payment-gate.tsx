"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function PaymentGate({ children }: { children: ReactNode }) {
  const [verified, setVerified] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const verifyPayment = useCallback(async () => {
    const orderId = new URLSearchParams(window.location.search).get("order_id");
    if (!orderId) {
      setError("The payment order ID is missing.");
      setChecking(false);
      return;
    }

    setChecking(true);
    setError(null);
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Payment could not be verified.");
      }

      setVerified(true);
    } catch (verificationError: unknown) {
      setError(verificationError instanceof Error ? verificationError.message : "Payment could not be verified.");
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void verifyPayment();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [verifyPayment]);

  if (verified) {
    return children;
  }

  return (
    <main className="flex min-w-0 flex-1 items-center justify-center px-4 py-10">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">
          {checking ? "Checking your payment..." : "Payment not confirmed"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {checking
            ? "Please wait while Cashfree confirms your payment."
            : error || "Your payment is still being processed. Try checking again shortly."}
        </p>
        {!checking && (
          <Button onClick={() => void verifyPayment()} className="mt-5">
            Check payment again
          </Button>
        )}
      </div>
    </main>
  );
}
