# SM Photography

Wedding photography and cinematography studio site for SM Photography — Jaipur, Delhi NCR, and destination weddings.

The site is built as a digital wedding album: invitation hero, ritual chapters, stories, films, and a WhatsApp / email enquiry path. Copy and contact details come from [smphotography.in](https://smphotography.in). Photographs are the studio’s published work.

![Hero](docs/screenshots/hero-desktop.png)

## Features

- Invitation-style hero with arch reveal and scroll unfold
- Chaptered wedding day: Before, Mehndi, Haldi, Sangeet, Baraat, Ceremony, Reception
- Album story pages with sequenced photography
- Published Vimeo teasers (no autoplay audio)
- Editorial services list and enquiry form (WhatsApp + email)
- Real studio contact details, hours, and Jaipur address
- LocalBusiness / Photographer JSON-LD, reduced-motion support, keyboard-visible focus

![Stories](docs/screenshots/stories-desktop.png)

![Contact](docs/screenshots/contact-desktop.png)

## Stack

- [TanStack Start](https://tanstack.com/start) (SSR, file routes)
- React 19 + TypeScript
- Vite 8 + Nitro (Vercel preset)
- Tailwind CSS 4
- TanStack Router / Query

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — invitation through enquiry |
| `/stories` | Album index |
| `/stories/$slug` | Individual album |
| `/contact` | Contact + enquiry |

Story slugs: `the-wedding-day`, `the-functions`, `before-the-wedding`.

## Setup

Requires Node.js 22+.

```sh
git clone https://github.com/Amaar-Ali/indian-album-unfolding.git
cd indian-album-unfolding
npm install
npm run dev
```

Dev server: Vite (`vite dev`). No environment variables are required.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build (Nitro → `.vercel/output`) |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier |

## Project structure

```
public/photos/          Optimised WebP photography
src/routes/             File-based pages (__root, index, contact, stories)
src/components/site/    Page sections (Hero, Chapters, Nav, Enquiry, …)
src/lib/site.ts         Verified business details, films, reviews
src/lib/photos.ts       Image paths and alt text
src/lib/stories.ts      Album collections
src/styles.css          Colour, type, and motion tokens
```

## Deploy

Vercel, TanStack Start preset. Build command is `vite build`. Nitro emits `.vercel/output`.

```sh
npx vercel --prod
```

No secrets to configure. Enquiry goes to WhatsApp (`+91 70233 36664`) and `Dasman702@gmail.com`.

## Credits

Photography, films, and client quotes belong to SM Photography. Studio: Windsor Plaza, Sindhi Camp, Jaipur.
