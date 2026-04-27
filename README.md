# Affif Chowdhury Portfolio

A modern, responsive developer portfolio website built to showcase projects, skills, education, and contact information for internship and junior software engineering opportunities.

## Features

- Animated hero section with gradient background and floating code elements
- Sticky navigation with mobile-friendly menu
- Professional About, Skills, Projects, Education, and Experience sections
- Animated project cards with tech badges and action links
- Responsive Contact section with social links and frontend-only contact form
- Smooth scrolling, section reveal animations, and glassmorphism UI
- SEO-ready metadata for search and social sharing

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- ESLint

## Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
```

2. Move into the project folder:

```bash
cd <your-repo>
```

3. Install dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Open your browser at:

```text
http://localhost:3000
```

## Deploy on Vercel

### Option 1: Vercel Dashboard

1. Push your code to GitHub.
2. Go to Vercel and click New Project.
3. Import your GitHub repository.
4. Keep default Next.js settings.
5. Click Deploy.

### Option 2: Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Deploy to production:

```bash
vercel --prod
```

## Folder Structure

```text
Portfolio/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  └─ portfolio/
│  │     └─ portfolio-page.tsx
│  └─ data/
│     └─ portfolio.ts
├─ package.json
└─ README.md
```

## Screenshots

Add screenshots after final UI polish:

```markdown
![Homepage](./public/screenshots/homepage.png)
![Projects Section](./public/screenshots/projects.png)
![Contact Section](./public/screenshots/contact.png)
```

## Author

**Affif Chowdhury**

- GitHub: https://github.com/alexrahman
- LinkedIn: https://www.linkedin.com/in/alexrahman-dev
