import { NextResponse } from "next/server";
import { getCashfreeOrder, getCashfreePayments } from "@/lib/cashfree";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId } = body;

    if (typeof orderId !== "string" || !orderId) {
      return NextResponse.json({ error: "A valid order ID is required." }, { status: 400 });
    }

    const supabase = getServiceSupabase();
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("order_id, amount, currency, status, payment_provider")
      .eq("order_id", orderId)
      .maybeSingle();

    if (orderError) {
      throw new Error(orderError.message);
    }

    if (!order || order.payment_provider !== "cashfree") {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    if (order.status !== "paid") {
      const cashfreeOrder = await getCashfreeOrder(orderId);
      if (
        cashfreeOrder.order_status !== "PAID" ||
        Number(cashfreeOrder.order_amount) !== Number(order.amount) ||
        cashfreeOrder.order_currency !== order.currency
      ) {
        return NextResponse.json({ error: "Payment has not been confirmed yet." }, { status: 409 });
      }

      const payments = await getCashfreePayments(orderId);
      const successfulPayment = payments.find((payment) => payment.payment_status === "SUCCESS");

      if (!successfulPayment) {
        return NextResponse.json({ error: "No successful payment was found for this order." }, { status: 409 });
      }

      const { data: applied, error: applyError } = await supabase.rpc("apply_cashfree_payment", {
        p_order_id: orderId,
        p_payment_id: String(successfulPayment.cf_payment_id),
      });

      if (applyError) {
        throw new Error(applyError.message);
      }

      if (!applied) {
        return NextResponse.json({ error: "Could not apply payment to this order." }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, message: "Payment verified and session credits applied." });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Verification failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
