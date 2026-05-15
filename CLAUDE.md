# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Static export build (outputs to /out)
npm run lint     # ESLint check
npm start        # Serve production build
```

No test runner is configured — there are no tests in this codebase.

## Architecture

This is a **static portfolio site** for Giusy Di Stasio (accounting professional), built with Next.js App Router and exported as a fully static site (`output: "export"` in [next.config.ts](next.config.ts)). The site language is Italian.

**Stack**: Next.js 16 · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · PostCSS

### Routing

File-based routing under [src/app/](src/app/):
- `/` — home page (implemented)
- `/about`, `/projects`, `/contact` — stub pages, not yet implemented

The root [layout.tsx](src/app/layout.tsx) wraps all pages with a shared `<Header>` and `<Footer>` from [src/components/layout/](src/components/layout/).

### Data Layer

All content lives in static TypeScript files under [src/data/](src/data/):
- `profile.ts` — typed `Profile` object for personal/professional info
- `projects.ts` — typed `Project[]` array for portfolio items

These are the **only** place to edit site content — no CMS or API is involved. Data fields are currently empty; fill them in before implementing stub pages.

### Styling

Tailwind CSS v4, configured via PostCSS (`@tailwindcss/postcss`) — **no `tailwind.config` file exists**. Custom theme tokens (font families, colors) are defined in the `@theme {}` block inside [src/app/globals.css](src/app/globals.css). Add new design tokens there.

Design language: cream background (`#f7f4ee`), black text, opacity variants (`text-black/65`, `border-black/10`).

Fonts loaded via `next/font/google`: Space Grotesk (`--font-space`, sans-serif) and JetBrains Mono (`--font-mono`, monospace). Both are registered as CSS variables in [layout.tsx](src/app/layout.tsx) and mapped into Tailwind via the `@theme` block.

### Utilities

[src/lib/utils.ts](src/lib/utils.ts) exports a hand-rolled `cn(...inputs: Array<string | false | null | undefined>)` helper — it filters falsy values and joins class strings. It is **not** clsx; it does not handle objects.

### Path Alias

`@/*` resolves to the **project root** (not `src/`), configured in [tsconfig.json](tsconfig.json). So `@/src/components/layout/Header` is the correct import path.

## Development Rules

- Always use TypeScript strictly (no `any`)
- Prefer functional components with hooks
- Use Tailwind only (no inline styles or CSS files)
- Reuse existing components before creating new ones
- Follow existing folder structure under `src/`
- Do not introduce new dependencies unless necessary
- Keep UI minimal and consistent with current design
- Use semantic HTML and accessibility best practices
- Keep components under 200 lines. Split when needed.
- Keep data access separated from UI rendering when practical
- Use client components only when interactivity is required
- Do not add server-only features, API routes, databases, or runtime server dependencies
- Keep the site compatible with static export and Netlify free hosting

## Data Editing Rules

- All content must be edited ONLY in `src/data/`
- Do not hardcode content inside components
- Ensure types in `profile.ts` and `projects.ts` are respected
