CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  credits INTEGER DEFAULT 0,
  hwid TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id TEXT UNIQUE NOT NULL,
  payment_id TEXT,
  user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  user_email TEXT NOT NULL,
  user_name TEXT,
  amount NUMERIC NOT NULL,
  currency TEXT DEFAULT 'INR',
  plan_id TEXT NOT NULL,
  sessions INTEGER DEFAULT 1,
  status TEXT DEFAULT 'created',
  payment_provider TEXT NOT NULL DEFAULT 'cashfree',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS payment_provider TEXT;
UPDATE public.orders
SET payment_provider = CASE
  WHEN order_id LIKE 'honest_%' THEN 'cashfree'
  ELSE 'razorpay'
END
WHERE payment_provider IS NULL;
ALTER TABLE public.orders ALTER COLUMN payment_provider SET DEFAULT 'cashfree';
ALTER TABLE public.orders ALTER COLUMN payment_provider SET NOT NULL;

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.users FROM anon, authenticated;
REVOKE ALL ON public.orders FROM anon, authenticated;

DROP POLICY IF EXISTS "Users can only read their own profile" ON public.users;
CREATE POLICY "Users can only read their own profile" ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can only read their own orders" ON public.orders;
CREATE POLICY "Users can only read their own orders" ON public.orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.apply_cashfree_payment(
  p_order_id TEXT,
  p_payment_id TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id UUID;
  v_sessions INTEGER;
BEGIN
  UPDATE public.orders
  SET payment_id = p_payment_id,
      status = 'paid',
      updated_at = NOW()
  WHERE order_id = p_order_id
    AND payment_provider = 'cashfree'
    AND status IS DISTINCT FROM 'paid'
  RETURNING user_id, sessions INTO v_user_id, v_sessions;

  IF NOT FOUND THEN
    RETURN EXISTS (
      SELECT 1
      FROM public.orders
      WHERE order_id = p_order_id
        AND payment_provider = 'cashfree'
        AND status = 'paid'
    );
  END IF;

  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Cashfree order % has no associated user', p_order_id;
  END IF;

  UPDATE public.users
  SET credits = COALESCE(credits, 0) + COALESCE(v_sessions, 1),
      updated_at = NOW()
  WHERE id = v_user_id;

  RETURN TRUE;
END;
$$;

REVOKE ALL ON FUNCTION public.apply_cashfree_payment(TEXT, TEXT) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.apply_cashfree_payment(TEXT, TEXT) TO service_role;
