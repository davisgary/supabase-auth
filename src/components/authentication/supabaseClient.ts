import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'yours.supabase.co';
const supabaseAnonKey = 'your-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);