import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.SUPABASE_URL as string
const SUPABASE_KEY = process.env.SUPABASE_KEY as string
// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
