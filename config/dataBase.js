import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://kyvslouwubodsefsgllc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dnNsb3V3dWJvZHNlZnNnbGxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzMzgyMjUsImV4cCI6MjAxODkxNDIyNX0.jOY5v0AfRFuYJ1lmvhXcalGttrybZNqKukt7vttNLpE')

export default supabase