# ⚡ Strategysphere Frontend

Strategysphere's frontend that consumes content from the Sanity CMS in `../backend` (hosted on sanity.io).

## 📦 Technologies

- `Next.js`
- `React.js`
- `TypeScript`
- `Tailwind CSS`
- `Sanity` 
- `Vercel` 

## 🔥 Features

- Responsive business pages (web & mobile)
- Dynamic blog pages sourced from Sanity (GROQ queries)
- Category pages with dynamic routing and sorting (date, author); server-rendered per-category lists and client-driven pagination
- Responsive image handling via Next/Image and Sanity URL builder
- Image galleries and lazy-loaded YouTube embeds
- Reusable UI components and light animations for polish

---

## 👩🏽‍🍳 The Process

I started from a consulting business theme and adapted it with quick layout sketches in Figma. I built small, reusable components headers, cards and hero sections and shipped a fast static consulting site.

Later I added a blog and integrated Sanity Studio to manage posts. This area consumed most of the development effort.

I modelled schemas in the Studio and wrote GROQ queries to fetch the fields the frontend needs. I implemented filtering by date, author, and category, and a client-driven "load more" pagination (page size controlled by the `NEXT_PUBLIC_POST_AMOUNT` environment variable).

I mapped query results into UI components and refined the presentation through several design iterations.

To support category pages I used Next.js dynamic routes (App Router) to server-render per-category lists and implemented sorting options (by published date and a author flag). The category pages are generated server-side for SEO and fast first load, while the index and pagination controls are client-driven to keep interactions snappy.

To improve perceived performance I added skeleton loaders on the blog index and lazy-loaded offscreen embeds and galleries.

For runtime performance I relied on Next/Image and the Sanity URL builder (responsive sizes, width/quality transforms and CDN caching), prioritized hero/LCP images, and kept the initial payload small by loading additional content on demand.

---

## 📚 What I learned

- GROQ basics: querying, projections and filtering for lists and single documents.
- Pagination + incremental loading patterns (client-driven "load more" fetching POST_AMOUNT-sized pages).
- Designing Sanity schemas and mapping them to TypeScript types on the frontend.
- Converting Sanity Portable Text content into React components (manual content rendering with mixed media types).
- Image optimization strategies with Next/Image and Sanity image URL transforms.
- Practical experience with Next.js rendering modes (SSG/SSR/ISR) for blogs.
- Building reusable components and progressively enhancing UX with lazy-loading and animations.

---

## 🚦 Running the project

Run these commands from inside the `frontend/` folder.

1) Install dependencies and start the dev server

```bash
npm install
npm run dev
```

2) Build and serve production

```bash
npm run build
npm run start
```

Notes
- Copy `.env.example` → `.env` and fill your values locally.
- If you see env-related errors, ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set.

---

## 💭 Potential Future improvements

- Add localization (i18n) to reach more markets, middleware is already in place for routing.
- Add more business pages: Services, Pricing, Case Studies / Portfolio, FAQ, and Press.
- Expand customer-facing pages: Testimonials, Reviews, and a richer Contact / Lead capture form (newsletter signups).
- Team & Careers: add team bios and a simple careers listing page for credibility.
- Legal: Privacy Policy and Terms pages for production readiness.
- Add a Preview mode so editors can view unpublished drafts in the frontend.

---

## 📸 Showcase

- Home/Landing

https://github.com/user-attachments/assets/5bbd6883-6cc5-458e-85ea-1b4a96d71987

- Blog page

https://github.com/user-attachments/assets/2e2dd4b9-5309-4d2d-b7cb-95b3781d2e0a

- Single post

https://github.com/user-attachments/assets/25b07b3b-bb98-4359-ad39-6ed505d3973a





