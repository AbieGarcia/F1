import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; //lee url
const supabaseAnnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; //lee clave

export const supabase = createClient(supabaseUrl, supabaseAnnonKey); //crea conexion con base de datos