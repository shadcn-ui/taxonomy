import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

export const dynamic = "force-dynamic" // 🔑 CRITICAL

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
