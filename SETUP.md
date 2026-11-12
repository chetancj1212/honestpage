# Setup & Deployment Guide

This guide contains everything needed to set up Supabase, Cashfree, environment variables, and run the project.

---

## 1. Install & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 2. Supabase Setup

### Step A: Create a Project
1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Wait 1–2 minutes for the database to spin up.

### Step B: Run the SQL Query
1. In the Supabase Dashboard, click **SQL Editor** on the left menu.
2. Click **New Query**, paste the full contents of [supabase_schema.sql](./supabase_schema.sql), and click **Run**. It creates the tables and the idempotent function that applies session credits once after Cashfree confirms payment.

### Step C: Get Supabase Keys
Go to **Project Settings** (gear icon) -> **API**:
- Copy **Project URL**
- Copy **anon / public** key
- Copy **service_role** secret key

---

## 3. Cashfree Setup

### Step A: Get API Keys
1. Log in to [Cashfree](https://merchant.cashfree.com/).
2. Open **Developers** -> **Payment Gateway** -> **API Keys**.
3. Copy the Cashfree **App ID** and **Secret Key**.

### Step B: Set Up Webhook
1. Open **Developers** -> **Webhooks** and add `https://your-domain.com/api/webhook/cashfree`.
2. Copy the webhook signing secret into `CASHFREE_WEBHOOK_SECRET`.
3. Subscribe to the successful payment event (`PAYMENT_SUCCESS_WEBHOOK`).
4. Whitelist your production website domain in Cashfree before using hosted checkout.

---

## 4. Environment Variables (.env.local)

Create a file named `.env.local` in the project root and fill in your values:

```ini
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Cashfree (never expose these secrets with a NEXT_PUBLIC_ prefix)
CASHFREE_CLIENT_ID=your_cashfree_app_id
CASHFREE_CLIENT_SECRET=your_cashfree_secret_key
CASHFREE_WEBHOOK_SECRET=your_cashfree_webhook_secret
CASHFREE_ENV=sandbox
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Use `CASHFREE_ENV=production` and your deployed site's URL in production. Keep the Cashfree secret and webhook signing secret server-side.

---

## 5. How App Login Connects to Honest.exe

When a user buys a pass, their account is registered with the email and password they set.

Inside `Honest.exe`, send a POST request:

- **Endpoint**: `POST https://your-domain.com/api/app-login`
- **Headers**: `Content-Type: application/json`
- **Payload**:
  ```json
  {
    "email": "student@college.edu",
    "password": "user_password",
    "hwid": "PC_HARDWARE_UUID"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "user": {
      "id": "uuid",
      "email": "student@college.edu",
      "name": "Student Name",
      "credits": 6
    },
    "token": "supabase_session_token"
  }
  ```
- **Device Lock Rule**: 1 Account = 1 PC. The hardware ID is bound on first login.
