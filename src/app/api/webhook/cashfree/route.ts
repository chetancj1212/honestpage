import { NextResponse } from "next/server";
import crypto from "crypto";
import { getCashfreeWebhookSecret } from "@/lib/cashfree";
import { getServiceSupabase } from "@/lib/supabase";

interface CashfreeWebhook {
  type?: string;
  data?: {
    order?: { order_id?: string };
    payment?: { cf_payment_id?: string | number; payment_status?: string };
  };
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-webhook-signature");
    const timestamp = req.headers.get("x-webhook-timestamp");
    const secret = getCashfreeWebhookSecret();

    if (!secret || !signature || !timestamp) {
      return NextResponse.json({ error: "Cashfree webhook signature is not configured or is missing." }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${timestamp}${rawBody}`)
      .digest("base64");
    const expectedBuffer = Buffer.from(expectedSignature);
    const receivedBuffer = Buffer.from(signature);

    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      return NextResponse.json({ error: "Webhook signature is invalid." }, { status: 400 });
    }

    const event = JSON.parse(rawBody) as CashfreeWebhook;
    if (event.type === "PAYMENT_SUCCESS_WEBHOOK" && event.data?.payment?.payment_status === "SUCCESS") {
      const orderId = event.data.order?.order_id;
      const paymentId = event.data.payment.cf_payment_id;

      if (!orderId || !paymentId) {
        return NextResponse.json({ error: "Webhook is missing its order or payment ID." }, { status: 400 });
      }

      const supabase = getServiceSupabase();
      const { error } = await supabase.rpc("apply_cashfree_payment", {
        p_order_id: orderId,
        p_payment_id: String(paymentId),
      });

      if (error) {
        throw new Error(error.message);
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Webhook processing error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
