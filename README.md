# Iron & Grit — Custom Motorcycles

A two-page React application showcasing Iron & Grit's custom motorcycle builds, implementing the Figma design with React Router v6 navigation.

## Features

- **React Router v6** setup with two routes
- **Declarative navigation** using `<Link>` and `<NavLink>` components
- **Browser history support** - back/forward buttons work correctly
- **Responsive design** - mobile and desktop layouts
- **Production-ready** with TypeScript and Vite

## Routes

- `/` - Home page featuring builds, workshop preview, and call-to-action
- `/workshop` - Workshop page with team information and process details

## Navigation

All navigation uses React Router's declarative `Link` component:
- Header navigation links between pages
- "Inside the workshop" and "Meet the makers" links
- Logo returns to home page
- No hash-based navigation or anchor links for routing

## Tech Stack

- **React 18** with TypeScript
- **React Router v6** for routing
- **Vite** for build tooling
- **Google Fonts** - Barlow Condensed & Inter

## Project Structure

```
src/
├── App.tsx           # Router configuration
├── main.tsx          # React entry point
├── index.css         # Global styles & CSS variables
└── pages/
    ├── Home.tsx      # Home page component
    ├── Home.css      # Home page styles
    ├── Workshop.tsx  # Workshop page component
    └── Workshop.css  # Workshop page styles
```

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Knowledge Base Applied

- **KB-0156**: React Router v6 Multi-Page SPA Setup Pattern
- **KB-0008**: Avoid Using window.history.length for In-App Navigation State Detection
- **KB-0009**: Reliable Back Navigation Pattern with Fallback URLs

Navigation state is managed entirely by React Router's built-in history management. Browser back/forward buttons work correctly without custom history detection logic.

## Design Implementation

Implemented from Figma design with:
- Exact typography (Barlow Condensed for headings, Inter for body)
- Precise color palette (#1c1e1a, #f3f1e9, #e4ed87, etc.)
- Responsive breakpoints at 1024px and 768px
- Local asset references from `/figma-assets/`
- Semantic HTML structure

All visual elements are implemented as real components - no reference screenshots used as page content.
