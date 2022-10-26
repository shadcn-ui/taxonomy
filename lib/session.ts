import { Session } from "next-auth"

export async function getSession(cookie: string): Promise<Session> {
  const response = await fetch("http://localhost:3000/api/auth/session", {
    headers: { cookie },
  })

  if (!response?.ok) {
    return null
  }

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}
