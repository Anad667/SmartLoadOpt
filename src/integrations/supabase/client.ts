// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dfexrfssbzqqisfrjwcx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZXhyZnNzYnpxcWlzZnJqd2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NDc5NTgsImV4cCI6MjA2MDIyMzk1OH0.Eg9P8RgcmZetJKK1W4hdY834wgwuh1_0qRXuScKcwUg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);