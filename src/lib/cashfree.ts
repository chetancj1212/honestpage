const API_VERSION = "2023-08-01";
const SANDBOX_URL = "https://sandbox.cashfree.com/pg";
const PRODUCTION_URL = "https://api.cashfree.com/pg";

interface CashfreeOrder {
  order_id: string;
  order_amount: number;
  order_currency: string;
  order_status: string;
  payment_session_id: string;
}

interface CashfreePayment {
  cf_payment_id: string | number;
  payment_status: string;
}

interface CashfreeError {
  message?: string;
  type?: string;
}

function getCashfreeCredentials() {
  const clientId = process.env.CASHFREE_CLIENT_ID;
  const clientSecret = process.env.CASHFREE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Cashfree is not configured. Set CASHFREE_CLIENT_ID and CASHFREE_CLIENT_SECRET.");
  }

  return { clientId, clientSecret };
}

function getCashfreeApiUrl() {
  return process.env.CASHFREE_ENV === "production" ? PRODUCTION_URL : SANDBOX_URL;
}

async function cashfreeRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const { clientId, clientSecret } = getCashfreeCredentials();
  const response = await fetch(`${getCashfreeApiUrl()}${path}`, {
    ...init,
    headers: {
      "x-client-id": clientId,
      "x-client-secret": clientSecret,
      "x-api-version": API_VERSION,
      "content-type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const error = (await response.json()) as CashfreeError;
    throw new Error(error.message || `Cashfree request failed (${response.status}).`);
  }

  return (await response.json()) as T;
}

export function createCashfreeOrder(
  orderId: string,
  idempotencyKey: string,
  orderAmount: number,
  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
  },
  returnUrl: string,
  notifyUrl: string,
) {
  return cashfreeRequest<CashfreeOrder>("/orders", {
    method: "POST",
    headers: { "x-idempotency-key": idempotencyKey },
    body: JSON.stringify({
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: "INR",
      customer_details: {
        customer_id: customer.id,
        customer_name: customer.name,
        customer_email: customer.email,
        customer_phone: customer.phone,
      },
      order_meta: {
        return_url: returnUrl,
        notify_url: notifyUrl,
      },
    }),
  });
}

export function getCashfreeOrder(orderId: string) {
  return cashfreeRequest<CashfreeOrder>(`/orders/${encodeURIComponent(orderId)}`);
}

export function getCashfreePayments(orderId: string) {
  return cashfreeRequest<CashfreePayment[]>(`/orders/${encodeURIComponent(orderId)}/payments`);
}

export function getCashfreeWebhookSecret() {
  return process.env.CASHFREE_WEBHOOK_SECRET;
}
