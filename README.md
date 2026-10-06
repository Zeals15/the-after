# THE AFTER — Corporate Website

> Ideas Today • A Better Tomorrow

Marketing website for **THE AFTER**, a software development & IT consulting company.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static prerendering, `next/image`, `next/font`)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, staggered grids, hover states
- [Lucide](https://lucide.dev/) icons
- Fonts: Plus Jakarta Sans (headings) + Open Sans (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

Requires Node.js 20+.

## Project structure

```
app/            layout (SEO metadata), page, globals.css, icons, OG image, robots & sitemap
components/     one component per page section (Navbar, Hero, About, Services, Industries,
                Process, Portfolio, Testimonials, CtaBanner, Contact, Footer) + motion helpers
lib/content.ts  ALL site copy & data (services, industries, case studies, stats, contact info)
public/         logo and optimized photography
```

## Editing content

Almost everything you'll want to change lives in [`lib/content.ts`](lib/content.ts):

- `site` — company name, URL, email, phone, address, social links
- `stats`, `services`, `industries`, `processSteps`, `caseStudies`, `testimonials`, `trustedBy`

> **Note:** client names, stats, testimonials, case studies and contact details are placeholder
> copy and should be replaced with real information before launch.

Set `NEXT_PUBLIC_SITE_URL` to the production domain so Open Graph / sitemap URLs are correct.

## Contact form

The contact form currently opens the visitor's email client (`mailto:`) pre-filled with their
details. Swap `onSubmit` in `components/Contact.tsx` for an API route or a form service
(Formspree, Resend, HubSpot, etc.) when a backend is available.

## Credits

Photography from [Unsplash](https://unsplash.com/) (Unsplash License).
