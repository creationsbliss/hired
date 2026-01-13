import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export function createSupabaseClient(getToken) {
  return createClient(supabaseUrl, supabaseKey, {
    accessToken: getToken,
  });
}
