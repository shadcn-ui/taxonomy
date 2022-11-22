import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan as getUserSubscriptionPlan } from "@/lib/subscription"
import { Card } from "@/ui/card"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { BillingForm } from "@/components/dashboard/billing-form"

export default async function BillingPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false
  if (subscriptionPlan.isPro) {
    const stripePlan = await stripe.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    )
    isCanceled = stripePlan.cancel_at_period_end
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <BillingForm
          subscriptionPlan={{
            ...subscriptionPlan,
            isCanceled,
          }}
        />
        <Card>
          <Card.Header>
            <Card.Title>Note</Card.Title>
          </Card.Header>
          <Card.Content className="space-y-4 pb-6 text-sm">
            <p>
              Taxonomy app is a demo app using a Stripe test environment.{" "}
              <strong>
                You can test the upgrade and won&apos;t be charged.
              </strong>
            </p>
            <p>
              You can find a list of test card numbers on the{" "}
              <a
                href="https://stripe.com/docs/testing#cards"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-8"
              >
                Stripe docs
              </a>
              .
            </p>
          </Card.Content>
        </Card>
      </div>
    </DashboardShell>
  )
}
