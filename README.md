# Designer Furniture & Interior — Mumbai

> A luxury, conversion-focused web application for **Designer Furniture & Interior**, Santacruz (West), Mumbai. Built with React, Vite, Tailwind CSS, and TypeScript.

---

## 1. Project Overview

**Designer Furniture & Interior** specializes in premium custom-built furniture, luxury interiors, and bespoke architectural woodwork. Located on Swami Vivekanand Road near the BEST Bus Depot in Santacruz (West), Mumbai, the brand offers tailored solutions for discerning homeowners, interior designers, and architects.

This website positions the business as an experienced, high-end bespoke furniture brand, with smooth lead generation paths via direct WhatsApp and telephone inquiries.

---

## 2. Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler / Tooling:** Vite
- **Styling:** Tailwind CSS (v4 with custom luxury design tokens and `@theme` scale)
- **Icons:** Lucide React
- **Typography:** Cormorant Garamond (Editorial Display Serif) + Plus Jakarta Sans (Readable Clean Body)
- **SEO & Structured Data:** Schema.org `HomeGoodsStore` / `LocalBusiness` JSON-LD, OpenGraph, Twitter Cards, robots.txt, and sitemap.xml

---

## 3. Installation

Ensure you have **Node.js 18+** installed.

```bash
# Clone or navigate to the project directory
cd designer-furniture-interior

# Install dependencies
npm install
```

---

## 4. Development Command

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

---

## 5. Production Build Command

To compile and optimize the production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 6. Vercel Deployment Instructions

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Log into your [Vercel](https://vercel.com/) dashboard.
3. Click **"Add New Project"** and select your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**.

---

## 7. Netlify Deployment Instructions

1. Log into your [Netlify](https://www.netlify.com/) account.
2. Click **"Add new site"** &gt; **"Import an existing project"**.
3. Choose your Git provider and repository.
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

---

## 8. Where to Change Business Information

All business details (phone number, WhatsApp URL, address, landmarks, coordinates, and taglines) are centralized in:

📁 `src/data/business.ts`

```typescript
export const businessInfo = {
  name: 'Designer Furniture & Interior',
  phone: '098214 32122',
  phoneRaw: '+919821432122',
  address: {
    line1: 'F-004, 1st Floor, Swami Vivekanand Rd',
    line2: 'BEST Colony, Santacruz (West)',
    landmark: 'Next to BUS DEPOT',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400054',
  },
  // ...
};
```

Updating this file automatically updates the Navbar, Hero, Contact section, Lead generation CTAs, and Footer.

---

## 9. Where to Replace Images

Images are stored in:

📁 `src/assets/images/`

To replace with real photographs of your showroom and completed projects:
1. Copy your JPEG/PNG/WebP photos into `src/assets/images/`.
2. Update the import paths in `src/data/portfolio.ts` and `src/sections/Hero.tsx`.
3. Clear comments are provided in `src/data/portfolio.ts` guiding exact dimensions and categories.

---

## 10. Where to Edit Testimonials

All customer reviews are stored in:

📁 `src/data/testimonials.ts`

To add, edit, or reorder verified client feedback, modify the `testimonialsData` array.

---

## 11. Where to Edit Services

The service offerings and categories are stored in:

📁 `src/data/services.ts`

You can add new categories (e.g., Office Furniture, Modular Kitchens) or edit existing lists.

---

## 12. How to Configure the Contact Form Backend

The frontend form in `src/components/ContactForm.tsx` handles client-side validation and offers instant WhatsApp pre-filled messaging to `+919821432122`.

To connect a persistent email/database backend:
1. **Formspree / Basin / Formkeep:** Change the form submission in `ContactForm.tsx` to POST directly to your endpoint:
   ```typescript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```
2. **EmailJS:** Install `emailjs-com` and send an automated email alert to your showroom team on submit.
3. **Custom Node/Express backend:** Point the submission to `/api/enquiry`.

---

## 13. How to Connect a Custom Domain

1. In your Vercel or Netlify project dashboard, navigate to **Settings** &gt; **Domains**.
2. Enter your custom domain (e.g. `designerfurnituremumbai.com`).
3. In your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace):
   - Add an **A Record** pointing `@` to the provider IP (e.g. `76.76.21.21` for Vercel).
   - Add a **CNAME Record** pointing `www` to your deployment URL (e.g. `cname.vercel-dns.com`).
4. SSL certificates are provisioned automatically.
