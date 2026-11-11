# Project instructions

## Project

Build a polished, responsive portfolio website from the supplied Figma designs. Treat the Figma file and any user-provided content as the source of truth for layout, visual styling, copy, assets, and interactions. Do not invent portfolio facts, project details, or testimonials.

## Stack and conventions

- Use the existing Next.js version and project structure. Assume App Router and TypeScript only when the repository confirms them; do not migrate frameworks or add dependencies without a clear need.
- Use Tailwind CSS for styling and follow the configuration already in the repository. Avoid adding a second styling system.
- Reuse existing components, tokens, fonts, and assets before creating alternatives.
- Keep components focused, typed, and readable. Prefer semantic HTML and server components; add client components only when browser state or event handling requires them.
- Keep secrets and private credentials out of source files.

## Design fidelity

- Inspect the relevant Figma frame, variants, and available assets before implementing a screen. Confirm the target frame, viewport, and interaction states when those are not clear from the task.
- Match the design's hierarchy, spacing, typography, colors, borders, radii, imagery, and responsive behavior. Use supplied assets instead of approximating them with emoji, placeholders, or unrelated stock imagery.
- Extract repeated values into the project's existing design tokens or theme conventions. Do not create arbitrary values when a supplied token exists.
- Make layouts work at mobile, tablet, and desktop widths. Preserve the design's intent when adapting between breakpoints.
- Implement only interactions shown in the design or requested by the user. Ensure links and controls have meaningful behavior and visible focus states.

## Accessibility and quality

- Use landmarks, logical heading order, descriptive link text, labels, keyboard-operable controls, and useful alternative text.
- Respect reduced-motion preferences when adding nonessential animation. Avoid motion that interferes with reading or navigation.
- Keep images optimized using the repository's Next.js image conventions where appropriate.
- Follow nearby code style and naming conventions. Avoid unrelated refactors and unnecessary dependencies.

## Working process

1. Inspect the repository and the relevant Figma references before editing.
2. Identify the page, components, assets, and existing design tokens involved.
3. Implement the smallest coherent change that satisfies the task.
4. When asked to verify, run the relevant existing checks and report their results. Do not claim a check passed unless it was run.
5. Summarize changed files, notable design decisions, and any unresolved mismatch or missing input.

If a required Figma frame, asset, or content is unavailable, state the specific gap and use a clearly identified temporary assumption only when implementation can still proceed safely.
