import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { email, password, hwid } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const supabase = getServiceSupabase();

    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("id, email, name, credits, hwid")
      .eq("id", authData.user.id)
      .maybeSingle();

    if (userError || !userData) {
      return NextResponse.json({ error: "User account not found." }, { status: 404 });
    }

    if (hwid) {
      if (!userData.hwid) {
        await supabase
          .from("users")
          .update({ hwid })
          .eq("id", userData.id);
      } else if (userData.hwid !== hwid) {
        return NextResponse.json(
          { error: "Account locked to another PC (1 Account = 1 PC). Contact support for device reset." },
          { status: 403 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      user: {
        id: userData.id,
        email: userData.email,
        name: userData.name,
        credits: userData.credits || 0,
      },
      token: authData.session?.access_token,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Login failed." }, { status: 500 });
  }
}
