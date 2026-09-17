# AARON WATSON Official Website

A professional Next.js storefront for official fan cards and event tickets.

## Catalog
1. Standard Fan Card — $400
2. VIP Fan Card — $1,000
3. Regular Ticket — $30
4. VIP Ticket — $100

## Stack
- Next.js
- PostgreSQL
- Stripe Checkout
- Zod validation
- JWT admin session
- bcrypt password hashing

## Setup
1. Install Node.js 20+.
2. Run `npm install`.
3. Create a PostgreSQL database and run `db/schema.sql`.
4. Copy `.env.example` to `.env.local`.
5. Put Stripe TEST secret credentials in `.env.local`.
6. Generate an admin password hash:
   `node scripts/hash-password.mjs "YOUR-STRONG-PASSWORD"`
7. Put the resulting hash in `ADMIN_PASSWORD_HASH`.
8. Set `ADMIN_EMAIL` and a long random `SESSION_SECRET`.
9. Set `NEXT_PUBLIC_APP_URL` to your site URL.
10. Configure the Stripe webhook endpoint `/api/stripe/webhook` and set `STRIPE_WEBHOOK_SECRET`.
11. Run `npm run dev` for local testing or `npm run build && npm start`.

## Sandbox
This project is designed for Stripe test/sandbox mode until real credentials are supplied. It never claims a payment succeeded based only on a browser redirect; the order is marked paid/issued by the verified webhook.

## Email
Email confirmation is intentionally not faked. Connect an email provider and implement sending from the webhook after production credentials are configured.

## Production checklist
- Use a managed PostgreSQL database with backups.
- Use real Stripe production keys only when ready.
- Keep secrets in hosting environment variables.
- Add rate limiting/WAF for admin login.
- Consider 2FA for admin.
- Replace starter Terms & Conditions with final legal terms, refund policy and privacy notice.
- Confirm whether collecting date of birth is genuinely necessary and document the lawful business reason before production.
- Review data retention and access controls.

## Security
Card numbers, CVV and payment credentials are handled by Stripe and are not stored in the database. Verification returns only order number, product, type and status.