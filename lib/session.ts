import { getServerSession } from "next-auth/next"

import { authOptions, mockUser } from "@/lib/auth"

export async function getCurrentUser() {
  return mockUser
  const session = await getServerSession(authOptions)

  return session?.user
}
