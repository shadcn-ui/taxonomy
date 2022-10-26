import { headers } from "next/headers"
// import { notFound } from "next/dist/client/components/not-found"

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

  // TODO: If I return notFound here, I get a linting error.
  // Type error: Page "app/(dashboard)/dashboard/settings/page.tsx" does not match the required types of a Next.js Page.
  // Expected "ReactNode", got "void | Element".
  // if (!user) {
  // return notFound()
  // }

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
