import { BillingForm } from "@/components/billing-form"
import { DashboardHeader } from "@/components/header"
import { Icons } from "@/components/icons"
import { DashboardShell } from "@/components/shell"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import { stripe } from "@/lib/stripe"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Billing",
    description: "Manage billing and your subscription plan.",
}

export default async function BillingPage() {
    const user = await getCurrentUser()

    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login")
    }

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Generations"
                text="View all of your past generations here"
            />
            <div className="grid gap-8">
                <Alert className="!pl-14">
                    <Icons.warning />
                    <AlertTitle>This is a demo app.</AlertTitle>
                    <AlertDescription>
                        Taxonomy app is a demo app using a Stripe test
                        environment. You can find a list of test card numbers on
                        the{" "}
                        <a
                            href="https://stripe.com/docs/testing#cards"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-8"
                        >
                            Stripe docs
                        </a>
                        .
                    </AlertDescription>
                </Alert>
            </div>
        </DashboardShell>
    )
}
