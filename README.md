# Yoga Flow Studio — Wellness Landing Template

A modern, animated single-page landing template for a yoga & wellness brand.
Built with **Next.js 16 (App Router)** on **Turbopack**.

> **Live demo:** https://yoga-barkat.vercel.app/

## Tech Stack

- **Next.js 16** — App Router, Server & Client Components, Turbopack build
- **React 19 + TypeScript** (strict mode)
- **Tailwind CSS v4** — via `@tailwindcss/postcss`
- **Framer Motion** — scroll-reveal & carousel animations
- **Lucide React** — icon set
- **next/font/google** — Inter, Crimson Pro, DM Serif Display, Geist

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   └── (commonLayout)/
│       ├── layout.tsx          # Header + Footer wrapper
│       └── page.tsx            # Home page (client)
├── modules/
│   ├── Home.tsx                # Composes all page sections
│   ├── components/             # Page sections
│   │   ├── Feature.tsx         #   Wellness programs (tab switcher)
│   │   ├── WhyChooseUs.tsx     #   Stats & why-us
│   │   ├── Testimonial.tsx     #   Testimonials
│   │   ├── Member.tsx          #   Coach carousel
│   │   ├── Pricing.tsx         #   Pricing plans
│   │   └── Contact.tsx         #   Contact info + form
│   └── shared/
│       ├── Header.tsx          # Navbar + hero
│       └── Footer.tsx          # Footer
└── app/globals.css             # Tailwind v4 + theme tokens
```

## Features

- One-page layout: Hero → Programs → Why Us → Testimonials → Coaches → Pricing → Contact
- Responsive design (mobile / tablet / desktop)
- Framer Motion scroll-reveal & animated carousels
- Next.js `<Image>` optimization with remote images (Unsplash + `cdn.jiro.build`, configured via `remotePatterns` in `next.config.ts`)
- Custom Google fonts via `next/font`

## Deployment

Deploys to **Vercel** from the repository. The production build is validated with
`npm run build` (Turbopack) plus `npx tsc --noEmit` and `npm run lint`.

## Notes

- All navigation links, social icons, and CTAs are currently `#` placeholders;
  section data (programs, coaches, testimonials, pricing) lives in static arrays
  inside each component and can be swapped for a CMS/API.
- Some sections still use plain `<img>`/`motion.img` (e.g. `WhyChooseUs.tsx`,
  `Member.tsx`); replacing them with `next/image` would further improve
  performance and satisfy `@next/next/no-img-element`.

