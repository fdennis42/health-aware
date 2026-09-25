# Health Aware

A small installable iPhone web app for tracking headaches, blood pressure, back/shoulder pain, weight and IBS/bowel movements, including medications and actions taken, with trends and a provider report (Print/PDF, shareable report file, CSV, email summary).

## Accounts and data
- Sign-in is required (email + password, invitation only, up to 5 family members).
- Each person's data is stored as one private JSON file, `health-data/<user id>/data.json`, in Supabase Storage. Storage policies allow each user to read and write only their own file.
- A copy is cached on the device so the app works offline and syncs when back online. Signing out removes it from the device.
- No health data is stored in this repository.

## One-time setup (Supabase)
1. Create a free project at supabase.com.
2. SQL Editor: run `supabase-setup.sql` (creates the private `health-data` bucket and per-user policies).
3. Authentication → Sign In / Providers: turn **off** "Allow new users to sign up" (email provider stays on). Optionally set the minimum password length to 10.
4. Authentication → URL Configuration: set Site URL and add a Redirect URL of `https://fdennis42.github.io/health-aware/`.
5. Put the Project URL and anon (publishable) key in `config.js`.
6. Authentication → Users → **Invite user** for each family member. They open the email link, choose a password, then sign in from the Home Screen app.

## Install on iPhone
Open `https://fdennis42.github.io/health-aware/` in Safari → Share → **Add to Home Screen**.
