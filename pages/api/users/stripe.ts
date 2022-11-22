import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth/next"

import { proPlan } from "@/config/subscriptions"
import { withMethods } from "@/lib/api-middlewares/with-methods"
import { getUserSubscriptionPlan } from "@/lib/subscription"
import { stripe } from "@/lib/stripe"
import { withAuthentication } from "@/lib/api-middlewares/with-authentication"
import { absoluteUrl } from "@/lib/utils"
import { authOptions } from "@/lib/auth"

const billingUrl = absoluteUrl("/dashboard/billing")

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const session = await unstable_getServerSession(req, res, authOptions)
      const user = session.user
      const subscriptionPlan = await getUserSubscriptionPlan(user.id)

      // The user is on the pro plan.
      // Create a portal session to manage subscription.
      if (subscriptionPlan.isPro) {
        const stripeSession = await stripe.billingPortal.sessions.create({
          customer: subscriptionPlan.stripeCustomerId,
          return_url: billingUrl,
        })

        return res.json({ url: stripeSession.url })
      }

      // The user is on the free plan.
      // Create a checkout session to upgrade.
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        customer_email: user.email,
        line_items: [
          {
            price: proPlan.stripePriceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId: user.id,
        },
      })

      return res.json({ url: stripeSession.url })
    } catch (error) {
      return res.status(500).end()
    }
  }
}

export default withMethods(["GET"], withAuthentication(handler))
