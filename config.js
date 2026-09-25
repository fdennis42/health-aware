// Connection settings for the secure data service (Supabase).
// The anon key is designed to be public: access to data is enforced by sign-in
// and storage policies (see supabase-setup.sql), not by keeping this key secret.
window.HA_CONFIG = {
  supabaseUrl: 'https://pdrvzppfxxksxnbbpyiq.supabase.co',
  supabaseAnonKey: 'sb_publishable_Tx7oBXd0KdTZAaZfzpafaA_XnsAcpu9',  // publishable key
  bucket: 'health-data'
};
