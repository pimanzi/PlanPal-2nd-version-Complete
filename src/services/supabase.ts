import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://axqzrqgarjnblclotzkq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4cXpycWdhcmpuYmxjbG90emtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NTk0OTgsImV4cCI6MjA0MzQzNTQ5OH0.MbXxKkyNwAggJWjFlwfNRpBpohT977MiwULER6hjkJk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
