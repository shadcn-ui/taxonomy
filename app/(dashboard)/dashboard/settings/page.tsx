import { headers } from "next/headers"
import { notFound } from "next/navigation"

import { getSession } from "@/lib/session"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { UserNameForm } from "@/components/user-name-form"

async function getUser() {
  const session = await getSession(headers().get("cookie"))

  if (!session?.user) {
    return null
  }

  return session.user
}

export default async function SettingsPage() {
  const user = await getUser()

  if (!user) {
    notFound()
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name }} />
      </div>
    </DashboardShell>
  )
}
