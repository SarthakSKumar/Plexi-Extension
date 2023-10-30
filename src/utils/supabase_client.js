import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kdsaalltghizdeqdygxg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkc2FhbGx0Z2hpemRlcWR5Z3hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODA0NjgsImV4cCI6MjAxNDE1NjQ2OH0.AENrBPO8e4ciIPV8s1N6648f6DZUrhk2_RKxG5Rv-co";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
