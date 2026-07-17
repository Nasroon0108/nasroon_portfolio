# Nasroon Fareeha — Portfolio

Personal portfolio site. Editorial-dark aesthetic. Serif + mono typography, animated grid, custom cursor, and interactive project cards.

## Stack

- Vite + React 19
- Tailwind CSS 4 (Vite plugin)
- Framer Motion
- Lucide React icons

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.jsx               # section composition
  data.js               # single source of truth for content
  index.css             # tailwind + design tokens
  components/
    Nav.jsx
    Hero.jsx
    Marquee.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Research.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
    Cursor.jsx
    SectionLabel.jsx
```

## Edit content

Everything is in `src/data.js`. Update your role, summary, projects, or skills there and the whole site follows.
