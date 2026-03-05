# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language

Always respond in Chinese (中文). All conversations, explanations, and commit messages should be in Chinese.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm lint       # Run ESLint
pnpm start      # Start production server
```

There are no tests configured in this project.

## Architecture

Single-page marketing/landing site for **Caterpi11ar AI** built with Next.js 16 App Router and React 19.

**Page structure** (`app/page.tsx`): One route with six full-screen sections stacked vertically — `HeroSection` → `SignalsSection` → `WorkSection` → `PrinciplesSection` → `FaqSection` → `ColophonSection`. Navigation is anchor-based (`#hero`, `#signals`, `#work`, `#principles`, `#faq`, `#colophon`). The `SideNav` uses `IntersectionObserver` to track the active section.

**Animation stack**: GSAP + ScrollTrigger is the primary animation library. Lenis provides smooth scrolling and is connected to GSAP's ticker in `SmoothScroll` (a client component wrapping the entire app in `layout.tsx`). All section components are client components (`"use client"`) that instantiate GSAP animations inside `gsap.context()` for proper cleanup. Framer Motion is used via `LazyMotion` + `m` for the split-flap display only.

**Custom animation components** in `components/`:
- `scramble-text.tsx` — `ScrambleTextOnHover` (animates on hover), using GSAP tweens
- `split-flap-text.tsx` — Split-flap display effect with an audio context provider (`SplitFlapAudioProvider`) and mute toggle, using `LazyMotion` + `m` from framer-motion
- `animated-noise.tsx` — Canvas-based animated noise texture (`aria-hidden`)
- `bitmap-chevron.tsx` — Pixel-art style SVG chevron
- `highlight-text.tsx` — Highlight text effect component
- `faq-section.tsx` — Visible FAQ accordion section

**shadcn/ui** components live in `components/ui/` using the New York style. Add new shadcn components with `pnpm dlx shadcn@latest add <component>`.

## Design System

The site is **forced dark** (`<html className="dark bg-background">`). The active design tokens are in `app/globals.css` (not `styles/globals.css`, which is an unused template).

- **Colors**: Monochrome palette with orange accent — `oklch(0.7 0.2 45)` for `--accent` and `--ring`
- **Border radius**: `--radius: 0rem` — everything is sharp/square by default
- **Fonts** (loaded via `next/font/google` in `layout.tsx`):
  - `--font-sans` → IBM Plex Sans (body text)
  - `--font-mono` → IBM Plex Mono (labels, code-style UI)
  - `--font-display` / `--font-bebas` → Bebas Neue (section headings)
- **Background effects**: A CSS noise overlay (`.noise-overlay`) and grid pattern (`.grid-bg`) are applied globally
- **Motion**: `prefers-reduced-motion: reduce` is respected globally via CSS

## SEO & AI Visibility

- Structured data uses `@graph` wrapper for product arrays
- All JSON-LD includes `datePublished` / `dateModified`
- `public/llms.txt` and `public/llms-full.txt` provide LLM-friendly content
- `app/robots.ts` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Signal cards and work cards link to `/products/[slug]` pages for internal linking

## Accessibility

- Both `<nav>` elements have distinct `aria-label` attributes
- Decorative elements (noise, custom cursor, grid) use `aria-hidden="true"`
- SplitFlapText uses `role="img"` with `aria-label`
- Colophon copyright area uses semantic `<footer>` tag
- Heading hierarchy: H1 (hero) → H2 (sections) → H3 (subsections)

## Key Conventions

- Section components are offset from the left sidebar nav: `pl-6 md:pl-28` on mobile/desktop
- The `cn()` utility from `lib/utils.ts` merges Tailwind classes (clsx + tailwind-merge)
- Path alias `@/` maps to the project root (configured in `tsconfig.json`)
- `next.config.mjs` has `typescript.ignoreBuildErrors: true` — TypeScript errors won't block builds
- CSS variables use `oklch()` color space throughout
- Use stable unique IDs (not array indices) as React `key` props
