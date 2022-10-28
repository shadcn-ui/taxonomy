import NextAuth, { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { Client } from "postmark"
import { db } from "@/lib/db"

const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN)

const POSTMARK_SIGN_IN_TEMPLATE = 29559329
const POSTMARK_ACTIVATION_TEMPLATE = 29559329

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await db.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            emailVerified: true,
          },
        })

        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: user?.emailVerified
            ? POSTMARK_SIGN_IN_TEMPLATE
            : POSTMARK_ACTIVATION_TEMPLATE,
          To: identifier,
          From: provider.from,
          TemplateModel: {
            action_url: url,
            product_name: "Taxonomy",
          },
          Headers: [
            {
              // Set this to prevent Gmail from threading emails.
              // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
              Name: "X-Entity-Ref-ID",
              Value: new Date().getTime() + "",
            },
          ],
        })

        if (result.ErrorCode) {
          throw new Error(result.Message)
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id
      return session
    },
  },
}

export default NextAuth(authOptions)
