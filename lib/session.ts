import { unstable_getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"

export async function getSession() {
  return await unstable_getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()

  return session?.user
}
