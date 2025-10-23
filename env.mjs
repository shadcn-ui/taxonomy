import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const fallbackAppUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

const fallbackEnv = {
  NEXTAUTH_URL: fallbackAppUrl,
  NEXTAUTH_SECRET: "development-secret",
  GITHUB_CLIENT_ID: "github-client-id-placeholder",
  GITHUB_CLIENT_SECRET: "github-client-secret-placeholder",
  GITHUB_ACCESS_TOKEN: "github-access-token-placeholder",
  DATABASE_URL: "mysql://root:root@localhost:3306/taxonomy?schema=public",
  SMTP_FROM: "notifications@example.com",
  POSTMARK_API_TOKEN: "postmark-api-token-placeholder",
  POSTMARK_SIGN_IN_TEMPLATE: "0",
  POSTMARK_ACTIVATION_TEMPLATE: "0",
  STRIPE_API_KEY: "sk_test_placeholder",
  STRIPE_WEBHOOK_SECRET: "whsec_placeholder",
  STRIPE_PRO_MONTHLY_PLAN_ID: "price_placeholder",
  NEXT_PUBLIC_APP_URL: fallbackAppUrl,
}

const runtimeEnv = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? fallbackEnv.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ?? fallbackEnv.NEXTAUTH_SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID ?? fallbackEnv.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET:
    process.env.GITHUB_CLIENT_SECRET ?? fallbackEnv.GITHUB_CLIENT_SECRET,
  GITHUB_ACCESS_TOKEN:
    process.env.GITHUB_ACCESS_TOKEN ?? fallbackEnv.GITHUB_ACCESS_TOKEN,
  DATABASE_URL: process.env.DATABASE_URL ?? fallbackEnv.DATABASE_URL,
  SMTP_FROM: process.env.SMTP_FROM ?? fallbackEnv.SMTP_FROM,
  POSTMARK_API_TOKEN:
    process.env.POSTMARK_API_TOKEN ?? fallbackEnv.POSTMARK_API_TOKEN,
  POSTMARK_SIGN_IN_TEMPLATE:
    process.env.POSTMARK_SIGN_IN_TEMPLATE ?? fallbackEnv.POSTMARK_SIGN_IN_TEMPLATE,
  POSTMARK_ACTIVATION_TEMPLATE:
    process.env.POSTMARK_ACTIVATION_TEMPLATE ??
    fallbackEnv.POSTMARK_ACTIVATION_TEMPLATE,
  STRIPE_API_KEY: process.env.STRIPE_API_KEY ?? fallbackEnv.STRIPE_API_KEY,
  STRIPE_WEBHOOK_SECRET:
    process.env.STRIPE_WEBHOOK_SECRET ?? fallbackEnv.STRIPE_WEBHOOK_SECRET,
  STRIPE_PRO_MONTHLY_PLAN_ID:
    process.env.STRIPE_PRO_MONTHLY_PLAN_ID ??
    fallbackEnv.STRIPE_PRO_MONTHLY_PLAN_ID,
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ?? fallbackEnv.NEXT_PUBLIC_APP_URL,
}

export const env = createEnv({
  server: {
    // This is optional because it's only used in development.
    // See https://next-auth.js.org/deployment.
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    GITHUB_CLIENT_ID: z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
    GITHUB_ACCESS_TOKEN: z.string().min(1),
    DATABASE_URL: z.string().min(1),
    SMTP_FROM: z.string().min(1),
    POSTMARK_API_TOKEN: z.string().min(1),
    POSTMARK_SIGN_IN_TEMPLATE: z.string().min(1),
    POSTMARK_ACTIVATION_TEMPLATE: z.string().min(1),
    STRIPE_API_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
    STRIPE_PRO_MONTHLY_PLAN_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },
  runtimeEnv,
  emptyStringAsUndefined: true,
})

/**
 * Utility to check whether an environment variable has been provided
 * or if the application is still relying on the default placeholder.
 *
 * @param {keyof typeof fallbackEnv} key
 */
export const isEnvVarSet = (key) => runtimeEnv[key] !== fallbackEnv[key]
