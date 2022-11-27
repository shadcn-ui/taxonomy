import { connect } from "@planetscale/database"

export const planetScale = connect({
  url: process.env.PLANETSCALE_DATABASE_URL,
})
