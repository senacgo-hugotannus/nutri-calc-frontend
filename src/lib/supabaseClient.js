import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gphnhovvuoeydruvdgis.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwaG5ob3Z2dW9leWRydXZkZ2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NjcwNTUsImV4cCI6MjA0NDE0MzA1NX0.BI5OV1MEoUnWVmOpfUvp75d7pEHx-TVlHZiOfQuD-6M')