# Silvia Scano — Portfolio

Personal portfolio website built with **Vite + React + TypeScript**, featuring a dark/light mode toggle, smooth animations, and a fully working contact form.

🔗 **Live site:** [silviascano.co.uk](https://silviascano.co.uk)

---

## Built With

| Technology | Purpose |
|---|---|
| React + TypeScript | UI components and type safety |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and scroll effects |
| EmailJS | Contact form email delivery |
| Vercel | Hosting and CI/CD |

---

## Features

- Dark / light mode toggle with localStorage persistence and system preference detection
- Smooth scroll navigation between sections
- Animated section reveals using Framer Motion
- Fully responsive — mobile, tablet, and desktop
- Working contact form powered by EmailJS
- Vercel Analytics for visitor tracking

---

## Sections

- **Hero** — Introduction with profile photo, tagline, and CV download
- **About** — Background, motivations, and highlights
- **Skills** — Technical skills grouped by category
- **Projects** — Allergen Label App, Staff Directory App, Gazetteer
- **Contact** — Contact info and working email form

---

## Run Locally

```bash
git clone https://github.com/Mifa75/silviascano-portfolio.git
cd silviascano-portfolio
npm install
npm run dev
```

The app runs at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useTheme.ts
├── types/
│   └── project.ts
└── App.tsx
```

---

## Deployment

Deployed on **Vercel** with automatic deployments on every push to `main`.

Custom domain configured via Hostinger DNS → Vercel.

---

## Contact

**Silvia Scano** — [scanosilvia75@gmail.com](mailto:scanosilvia75@gmail.com)

[silviascano.co.uk](https://silviascano.co.uk) · [GitHub](https://github.com/Mifa75)
