---
applyTo: "app/**/*.{js,jsx,ts,tsx,css,mdx},src/app/**/*.{js,jsx,ts,tsx,css,mdx}"
---

# App Router guidance

- Follow the App Router structure already present (`app/` or `src/app/`). Do not create a duplicate route tree.
- Keep route files focused on route composition, metadata, and data loading. Move reusable UI into the established components directory.
- Prefer server components by default. Add `"use client"` only to the smallest component that needs state, effects, browser APIs, or client event handlers.
- Use the Next.js metadata API for page titles, descriptions, social metadata, and icons. Do not hardcode document-level tags inside page components.
- Use `next/link` for internal navigation and preserve meaningful URLs and native browser behavior.
- Add loading, error, or not-found UI only where the route or task requires it, following existing conventions.
- Keep route-specific styles and content near the route when that matches the repository's organization; avoid duplicating shared layout logic.
- Do not add API routes, data stores, or backend behavior to a visual portfolio task unless requested.
