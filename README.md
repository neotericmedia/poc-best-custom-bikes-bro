# Iron & Grit — Custom Motorcycles

A custom motorcycle workshop website built with React, TypeScript, and Vite.

## Features

- Homepage with hero section, build collection, workshop story, and process overview
- Fully responsive design optimized for desktop and mobile
- Clean, semantic HTML and CSS
- Custom typography using Barlow Condensed and Inter fonts
- Real image assets from Figma design
- Design tokens extracted and documented as CSS custom properties

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router v6
- CSS (no framework)

## Design

Implementation based on Figma design (frame: "01 — Iron & Grit / Home") with pixel-perfect attention to typography, spacing, and layout.

### Design Tokens

All colors, typography, and spacing extracted from Figma and documented as CSS custom properties in `src/index.css`.

### Assets

Image assets are served from `/figma-assets/` and loaded locally from the public directory. The following images are used:

- Hero background: `545d7ab798e730ea2aa8015a9701e9a993252347.jpg`
- The Outlaw build: `236d1609d3d140bfabb06b00489794fac9ef8ce8.jpg`
- The Rambler build: `da9a865c2f687d0407a1e64896a8bcea5ca0875b.jpg`
- The Ghost build: `e8ddda38f922c31b67544638156a7ad7c5a3f56d.jpg`
- Workshop craftsman: `4bd640a13c7a000e121b6491f6b4b29ac04a18fa.jpg`

## Project Structure

```
src/
├── App.tsx              # Router setup
├── main.tsx             # React entry point
├── index.css            # Global styles and design tokens
└── pages/
    ├── Home.tsx         # Homepage component
    └── Home.css         # Homepage styles
```
