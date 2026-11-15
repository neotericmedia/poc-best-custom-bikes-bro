# Best Custom Bikes – React App

A two-page React 18 + Vite + TypeScript application showcasing custom bicycle designs with navigation between pages.

## Stack

- **React 18** – UI framework
- **Vite** – Fast build tool and dev server
- **TypeScript** – Type-safe development
- **React Router** – Client-side navigation
- **CSS Custom Properties** – Design tokens for consistent theming

## Project Structure

```
src/
├── pages/
│   ├── Page1.tsx        (Home page – Hero section)
│   └── Page2.tsx        (Gallery page – Bike showcase)
├── components/
│   ├── Header.tsx       (Navigation header)
│   ├── Hero.tsx         (Hero banner)
│   └── Gallery.tsx      (Bike gallery grid)
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── Page1.css
│   ├── Page2.css
│   └── Gallery.css
├── index.css            (Global styles + design tokens)
├── App.tsx              (Router setup)
└── main.tsx             (Entry point)
```

## Epics Map

1. **Figma Asset Extraction & Design Analysis** → Design tokens in `src/index.css`
2. **Page 1 Implementation** → `src/pages/Page1.tsx` + `src/components/Hero.tsx`
3. **Page 2 Implementation** → `src/pages/Page2.tsx` + `src/components/Gallery.tsx`
4. **Navigation & Routing** → React Router in `src/App.tsx`, links in `src/components/Header.tsx`
5. **Build first page UI from Figma** → Figma design reflected in Page1 and Page2 components

## Getting Started

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`.

## Design Tokens

All colors, spacing, typography, and radii are defined as CSS custom properties in `src/index.css` for easy theming.
