# Bright & Tidy — portfolio landing page

A demo landing page for a fictional Austin cleaning company. Built to show
client-ready work: responsive layout, real copy, working form validation, zero
frameworks.

**Stack:** plain HTML + CSS + JS (no build step).
**Deploy:** any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Why this exists

This is portfolio piece #1 for selling landing-page work. It is used as a link
in proposals: "I built a page like this for a cleaning company — here it is."

## Run locally

```bash
python3 -m http.server 8081
# open http://localhost:8081
```

## Deploy

```bash
npx vercel --prod
# or drag the folder into Netlify Drop
```

## What it demonstrates

- Mobile-first responsive layout (breakpoints at 700 / 800 / 900 / 960px)
- Semantic HTML and accessible form (labels, focus states, aria-live status)
- Client-side validation with inline error states
- CSS custom properties, no framework, no external requests
- Realistic English copy, pricing, FAQ, testimonials

## Notes

The form does not submit anywhere — it validates and shows a confirmation. In a
client build this would post to their CRM or an email API.
