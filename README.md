# CATERPI11AR Landing Pages

[中文版](./README.zh-CN.md)

The official landing site for **Caterpi11ar AI** — a single-page marketing site showcasing our products and principles.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Animation**: [GSAP](https://gsap.com/) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) smooth scroll
- **Fonts**: IBM Plex Sans, IBM Plex Mono, Bebas Neue
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint
pnpm lint
```

## Project Structure

```
app/
├── layout.tsx          # Root layout (fonts, smooth scroll, metadata)
├── page.tsx            # Single-page entry with all sections
└── globals.css         # Design tokens and global styles

components/
├── hero-section.tsx    # Hero with split-flap text animation
├── signals-section.tsx # Signals / metrics section
├── work-section.tsx    # Product showcase cards
├── principles-section.tsx # Core principles
├── colophon-section.tsx   # Footer / about section
├── side-nav.tsx        # Fixed sidebar navigation
├── smooth-scroll.tsx   # Lenis smooth scroll wrapper
├── scramble-text.tsx   # Text scramble animation
├── split-flap-text.tsx # Split-flap display effect
├── animated-noise.tsx  # Canvas noise texture
├── bitmap-chevron.tsx  # Pixel-art SVG chevron
└── ui/                 # shadcn/ui components
```

## Design

- **Theme**: Forced dark mode, monochrome palette with orange accent (`oklch(0.7 0.2 45)`)
- **Typography**: IBM Plex Sans (body), IBM Plex Mono (labels), Bebas Neue (headings)
- **Layout**: Five full-screen sections with anchor-based navigation (`#hero`, `#signals`, `#work`, `#principles`, `#colophon`)
- **Effects**: CSS noise overlay, grid background, GSAP scroll-driven animations

## License

Copyright © 2025 Caterpi11ar AI. All rights reserved.
