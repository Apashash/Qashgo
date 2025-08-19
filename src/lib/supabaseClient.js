import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gqjillrxivmuqxdihxes.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxamlsbHJ4aXZtdXF4ZGloeGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NjYyNDEsImV4cCI6MjA2NTE0MjI0MX0.J3CHvVeAeQO8WdjWFJ_ZN80OjumjhmQ3o3y2ilkcKB8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);