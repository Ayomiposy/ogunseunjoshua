# Joshua Ogunseun Portfolio Site

This project is a personal portfolio and service website for Joshua Ogunseun, a media buyer and automation specialist. It presents Joshua's positioning, services, process, portfolio work, pricing, testimonials, FAQs, and contact call-to-action in a single-page marketing experience.

The site is built around a centralized content model in `src/content/site.ts`, so most copy, navigation labels, portfolio items, pricing packages, testimonials, and FAQ entries can be updated without changing the page components directly.

## Tech Stack

- **Runtime and package manager:** Bun, with dependencies locked in `bun.lock`.
- **Framework:** TanStack Start for full-stack React routing and server rendering.
- **Frontend:** React 19 and TypeScript.
- **Routing:** TanStack Router with file-based routes in `src/routes`.
- **Data fetching foundation:** TanStack Query, configured in `src/router.tsx`.
- **Build tool:** Vite 7.
- **Deployment target:** Nitro with the Vercel preset, configured in `vite.config.ts`.
- **Styling:** Tailwind CSS v4 through `@tailwindcss/vite`, with project theme tokens and utilities in `src/styles.css`.
- **UI primitives:** Radix UI components, with reusable wrappers in `src/components/ui`.
- **Icons:** `lucide-react`.
- **Forms and validation:** React Hook Form, Zod, and `@hookform/resolvers`.
- **Quality tools:** ESLint, Prettier, and TypeScript.

## Project Structure

```text
src/
  assets/              Static images used by the portfolio and page sections
  components/ui/       Reusable UI components based on Radix primitives
  content/site.ts      Main content source for the website
  hooks/               Shared React hooks
  lib/                 Utilities, server config, API examples, and error handling
  routes/              TanStack Router file routes
  router.tsx           Router and QueryClient setup
  server.ts            Server fetch entry with error normalization
  start.ts             TanStack Start setup and request middleware
  styles.css           Tailwind v4 theme, base styles, and custom utilities
```

## Main Application Flow

The homepage lives in `src/routes/index.tsx`. It imports the `site` object from `src/content/site.ts` and renders the complete landing page from smaller section components, including:

- Header and mobile navigation
- Hero section
- Brand strip and performance metrics
- About section
- Services and process sections
- Portfolio filter UI
- Pricing packages
- Testimonials
- FAQ
- Final booking/contact CTA
- Footer

This makes `src/content/site.ts` the safest first place to edit marketing content, while `src/routes/index.tsx` controls layout and interaction.

## Styling System

Global styling is defined in `src/styles.css`. The project uses Tailwind CSS v4 CSS-first configuration with:

- Theme variables for colors, radius, and fonts
- Custom utility classes such as `container-x`, `btn-primary`, `btn-ghost`, `card-surface`, `eyebrow`, `chip`, and `section-y`
- A dark, high-contrast visual design with blue primary accents and warm secondary accents

The UI component files under `src/components/ui` provide reusable building blocks for dialogs, menus, forms, inputs, tabs, tables, cards, and other interface patterns.

## Error Handling

The app includes custom server-side error handling:

- `src/start.ts` registers TanStack Start request middleware that renders a custom error page for unexpected server errors.
- `src/server.ts` wraps the server entry fetch handler and normalizes certain swallowed SSR failures into a custom HTML error response.
- `src/lib/error-page.ts` and `src/lib/error-capture.ts` support the custom error experience.

## Available Commands

```bash
bun install
bun run dev
bun run build
bun run preview
bun run lint
bun run format
```

- `bun install` installs dependencies.
- `bun run dev` starts the Vite dev server. The configured dev port is `8080`.
- `bun run build` creates a production build.
- `bun run preview` previews the production build locally.
- `bun run lint` runs ESLint across the project.
- `bun run format` formats files with Prettier.

## Deployment

The app is configured for Vercel through Nitro:

```ts
nitro({
  preset: "vercel",
})
```

Vite, TanStack Start, Tailwind CSS, React, and Nitro are wired together in `vite.config.ts`.

## Updating Content

For most content updates, edit `src/content/site.ts`.

Common edits include:

- Site name, role, email, phone, booking URL, and Upwork URL
- Navigation items
- Hero title, description, and CTAs
- Metrics and brand labels
- Services and process steps
- Portfolio items and links
- Pricing packages
- Testimonials
- FAQs

Images are stored in `src/assets` and imported into the content or route files where needed.
