import { connect } from "@planetscale/database"

export const planetScale = connect({
  url: process.env.PLANETSCALE_SERVERLESS_DATABASE_URL,
})
