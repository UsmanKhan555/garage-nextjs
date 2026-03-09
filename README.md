# Al Mezan Garage — Demo Site

Demo website for Al Mezan Garage, Deira Dubai. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

---

## What this is

Before cold-contacting a business that has no website, customise this template with their info and deploy a live demo. Walk in with a URL already showing their name, phone number, and services. The goal is to sell — not to ship.

---

## How to use it

1. Find a target business (garage, repair shop, etc.) with no website
2. Edit `lib/config.ts` with their real details (name, phone, city, services)
3. Run `npm run dev` and verify everything looks right
4. Deploy (Vercel free tier is instant — `vercel --prod`)
5. Walk in / call with the live URL
6. After closing: hand over the repo or continue maintaining it for them

---

## How to rebrand

**Edit only one file: `lib/config.ts`**

```ts
export const SITE = {
  name: 'Their Business Name',
  city: 'Their City',
  phone: '+1 555 000 1234',
  whatsapp: '15550001234',   // no +, with country code
  address: '123 Their Street, Their City',
  hours: 'Mon – Sat  9:00 AM – 6:00 PM',
  // ...
}
```

Every component — navbar, footer, hero, contact section, WhatsApp button, SEO metadata — reads from this single config. Nothing else needs touching.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Geist (Google Fonts) |
| Deployment | Vercel (recommended) |

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
garage/
├── lib/
│   └── config.ts          ← EDIT THIS to rebrand
├── app/
│   ├── layout.tsx          SEO metadata (reads from config)
│   ├── page.tsx            Home
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── contact/page.tsx
│   └── gallery/page.tsx
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── footer.tsx
│   ├── contact-section.tsx
│   ├── whatsapp-button.tsx
│   └── testimonials.tsx
└── public/images/          Drop in real photos here
```
