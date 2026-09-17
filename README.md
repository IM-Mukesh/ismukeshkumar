# Portfolio Site

A dark, terminal-styled developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and an optional **MongoDB + Resend** backed contact form.

## Sections

- Boot-up preloader (name + progress bar)
- Sticky navbar with smooth-scroll links
- Scroll-scrubbed hero (headline changes as you scroll through the pinned hero)
- About / profile card
- Technical skills grouped by category
- Engineering roadmap timeline
- Featured projects grid
- Certifications
- Contact form with a live JSON payload preview, backed by a `/api/contact` route

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making it yours

All editable content — name, role, taglines, bio, skills, projects, certifications, socials — lives in one file: [`src/lib/data.ts`](src/lib/data.ts). Edit that file and the whole site updates.

To use your own photo, drop it in `public/` and swap the placeholder block in [`src/components/Hero.tsx`](src/components/Hero.tsx) and [`src/components/About.tsx`](src/components/About.tsx) for a `next/image` `<Image>`.

## Contact form: MongoDB + email notifications (optional)

The contact form works out of the box with zero config — without MongoDB configured, submissions are just logged server-side (not persisted). To actually receive and store messages:

### 1. MongoDB Atlas (storage — no SQL needed)

1. Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) (the free "M0" tier is enough).
2. In Atlas, click **Connect → Drivers**, copy the connection string (looks like `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/`).
3. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to that string (append a database name, e.g. `.../portfolio`).
4. Restart the dev server. No table/schema setup needed — the `Message` model in [`src/models/Message.ts`](src/models/Message.ts) creates the collection automatically on first submission.
5. To view messages later, open Atlas → **Browse Collections** → `portfolio.messages`.

### 2. Resend (instant email notification per submission)

1. Create a free account at [resend.com](https://resend.com) and grab an API key.
2. Set `RESEND_API_KEY` in `.env.local`. Optionally set `CONTACT_TO_EMAIL` (defaults to the email in `src/lib/data.ts`) and `RESEND_FROM_EMAIL` (defaults to Resend's shared test sender — verify your own domain in Resend to send from your own address).
3. Restart the dev server. Every submission now also lands in your inbox, with reply-to set to the sender.

Both integrations are independent — you can enable just one, both, or neither (form still works and logs to the server console either way).

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (scroll-linked animation, no three.js)
- MongoDB / Mongoose (optional message persistence)
- Resend (optional email notifications)
- lucide-react (icons)
