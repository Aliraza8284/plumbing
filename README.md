# FlowFix Plumbing website

React + Vite + Tailwind CSS plumbing company landing page. Components are separated into individual files under `src/components/`.

## Run locally

1. Install Node.js (LTS).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL Vite prints in your terminal.

## Before publishing
- Replace the demo phone, email, city, opening hours, and social links with real company details.
- Connect the contact form to a backend or form service; it currently demonstrates front-end validation and a success state only.
- Replace sample reviews with real, permissioned customer reviews.
- Confirm image usage and choose a hosting provider/domain.

## Structure
- `src/App.jsx`: assembles the page sections
- `src/components/`: one component per file (Navbar, Footer, Hero, Services, etc.)
- `src/index.css`: Tailwind directives and global styles
- `tailwind.config.js`: theme colors and content paths
