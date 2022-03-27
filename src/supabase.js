import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hixvfoanylpmkbxtokwk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpeHZmb2FueWxwbWtieHRva3drIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwMjk2OTUsImV4cCI6MTk2MzYwNTY5NX0.Jkt20r7-ApIOsK0jqKMBBgydaK6hwjWX-Hysmi5rDxQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)