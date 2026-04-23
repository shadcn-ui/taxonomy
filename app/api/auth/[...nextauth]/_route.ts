// Ensure this route is accessible at /api/auth/[...nextauth] and both GET and POST are exported for NextAuth to work properly.
// If you see 405 errors, check your deployment and NEXTAUTH_URL configuration.
import NextAuth from "next-auth"

import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
