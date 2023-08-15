import { createClient } from '@supabase/supabase-js'

export const supabase =
    createClient(
        'https://hscamkrhrsoaxsbgjtnn.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzY2Fta3JocnNvYXhzYmdqdG5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMzE3OTEsImV4cCI6MjAwNzcwNzc5MX0.LdsEiaagQJEB2rzz7zFAumTroa6uqBb49rSS37A5Ofs'
    )