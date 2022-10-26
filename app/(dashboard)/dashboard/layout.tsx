import { headers } from "next/headers"

import { getSession } from "@/lib/session"
import { DashboardBranding } from "@/components/dashboard-branding"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { notFound } from "next/navigation"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

async function getUser() {
  const session = await getSession(headers().get("cookie"))

  if (!session?.user) {
    return null
  }

  return session.user
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getUser()

  if (!user) {
    return notFound()
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <aside className="hidden w-14 flex-col border-r border-slate-100 bg-slate-50 py-4 md:flex lg:w-56 lg:flex-shrink-0 lg:px-4">
          <div className="flex flex-1 flex-col space-y-4">
            <DashboardBranding />
            <DashboardNav />
          </div>
          <UserAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </aside>
        <main className="flex w-0 flex-1 flex-col overflow-hidden px-12 py-10">
          {children}
        </main>
      </div>
    </>
  )
}
