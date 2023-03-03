import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { Card } from "@/components/ui/card"

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Billing"
        text="Manage billing and your subscription plan."
      />
      <div className="grid gap-10">
        <Card.Skeleton />
        <Card.Skeleton />
      </div>
    </DashboardShell>
  )
}
