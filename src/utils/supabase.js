import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance = null;

const supabaseClient = (supabaseAccessToken) => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey, {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    });
  } else {
    // Update the Authorization header dynamically if supabaseInstance already exists
    supabaseInstance.auth.setAuth(supabaseAccessToken);
  }

  return supabaseInstance;
};

export default supabaseClient;
