# Adv. Pavan Rathod — Law Firm Website

Official website for **Advocate Pavan Rathod, BA. LL.B.** — Trusted Legal Advocate in Jalna, Maharashtra.

🌐 **Live:** [advpavanrathod.in](https://advpavanrathod.in)

## Tech Stack
- **Next.js 15** — App Router, Server Components
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **React Hook Form + Zod** — Form validation
- **Resend** — Email delivery
- **Lucide React** — Icons

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:
```bash
cp .env.example .env.local
```

Required variables:
```
RESEND_API_KEY=re_your_key_here
FROM_EMAIL=noreply@advpavanrathod.in
TO_EMAIL=adv.pavanrathod@gmail.com
NEXT_PUBLIC_SITE_URL=https://advpavanrathod.in
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

## Deployment (Vercel)
1. Push to GitHub
2. Import project in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy — done!

## Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── api/          # API routes (contact, callback, cases, testimonials, reviews)
│   ├── about/        # About page
│   ├── cases/        # Case studies listing + detail pages
│   ├── blog/         # Blog listing + detail pages
│   ├── gallery/      # Photo gallery
│   ├── contact/      # Contact page
│   └── ...           # Legal pages, sitemap, robots
├── components/       # React components
│   ├── home/         # Homepage sections
│   ├── layout/       # Navbar, Footer, FloatingActions
│   └── forms/        # Contact & Callback forms
├── data/             # JSON data (cases, testimonials, blogs, etc.)
├── lib/              # Utilities, constants, email
├── hooks/            # Custom React hooks
├── services/         # API service layer
└── types/            # TypeScript interfaces
```

## SEO Features
- Dynamic metadata per page
- JSON-LD schemas (Attorney, LocalBusiness, FAQ, Article)
- Auto-generated sitemap.xml
- Robots.txt
- Open Graph + Twitter Cards

## Email Setup (Resend)
1. Create account at [resend.com](https://resend.com)
2. Add domain `advpavanrathod.in`
3. Get API key → add to `.env.local`

## Advocate Details
- **Name:** Adv. Pavan Rathod, BA. LL.B.
- **Phone:** +91 98238 85688
- **Email:** adv.pavanrathod@gmail.com
- **Office:** Shop No. 3, Ambad, Jalna, Maharashtra
- **Court:** Jalna District Court
