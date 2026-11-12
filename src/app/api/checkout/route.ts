import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createCashfreeOrder } from "@/lib/cashfree";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, planId, password } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !password ||
      !/^\d{10}$/.test(phone) ||
      !planId
    ) {
      return NextResponse.json(
        { error: "Name, email, password, and a valid 10-digit phone number are required." },
        { status: 400 },
      );
    }

    const plans: Record<string, { price: number; sessions: number; title: string }> = {
      single: { price: 120, sessions: 1, title: "Single Session" },
      bundle: { price: 600, sessions: 6, title: "6-Session Bundle" },
    };

    const selectedPlan = plans[planId];
    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid plan selected." }, { status: 400 });
    }

    const supabase = getServiceSupabase();
    const normalizedEmail = email.trim().toLowerCase();

    let userId: string | null = null;
    const { data: existingUser, error: existingUserError } = await supabase
      .from("users")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (existingUserError) {
      throw new Error(existingUserError.message);
    }

    if (existingUser) {
      userId = existingUser.id;
    } else {
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: normalizedEmail,
        password,
        email_confirm: true,
        user_metadata: { name: name.trim() },
      });

      if (authError || !authData.user) {
        throw new Error(authError?.message || "Could not create your account.");
      }

      userId = authData.user.id;
      const { error: insertUserError } = await supabase.from("users").insert({
        id: userId,
        email: normalizedEmail,
        name: name.trim(),
        credits: 0,
      });

      if (insertUserError) {
        throw new Error(insertUserError.message);
      }
    }

    if (!userId) {
      throw new Error("Could not resolve your account.");
    }

    const orderId = `honest_${randomUUID().replace(/-/g, "")}`;
    const requestUrl = new URL(req.url);
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin).replace(/\/$/, "");
    const cashfreeOrder = await createCashfreeOrder(
      orderId,
      randomUUID(),
      selectedPlan.price,
      {
        id: userId,
        name: name.trim(),
        email: normalizedEmail,
        phone,
      },
      `${siteUrl}/success?order_id=${encodeURIComponent(orderId)}`,
      `${siteUrl}/api/webhook/cashfree`,
    );

    const { error: insertOrderError } = await supabase.from("orders").insert({
      order_id: cashfreeOrder.order_id,
      user_id: userId,
      user_email: normalizedEmail,
      user_name: name.trim(),
      amount: selectedPlan.price,
      currency: "INR",
      plan_id: planId,
      sessions: selectedPlan.sessions,
      status: "created",
      payment_provider: "cashfree",
    });

    if (insertOrderError) {
      throw new Error(insertOrderError.message);
    }

    return NextResponse.json({
      orderId: cashfreeOrder.order_id,
      paymentSessionId: cashfreeOrder.payment_session_id,
      environment: process.env.CASHFREE_ENV === "production" ? "production" : "sandbox",
      plan: selectedPlan,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create order.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
