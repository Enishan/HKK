import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase Config Check:');
console.log('URL:', supabaseUrl ? 'Defined' : 'Missing');
console.log('Key:', supabaseAnonKey ? 'Defined' : 'Missing');

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase environment variables are missing!');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
