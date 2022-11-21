import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { getUserSubscriptionPlan as getUserSubscriptionPlan } from "@/lib/subscription"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { BillingForm } from "@/components/dashboard/billing-form"

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <BillingForm subscriptionPlan={subscriptionPlan} />
      </div>
    </DashboardShell>
  )
}
