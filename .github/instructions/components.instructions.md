---
applyTo: "components/**/*.{js,jsx,ts,tsx},src/components/**/*.{js,jsx,ts,tsx}"
---

# Component guidance

- Build components around clear UI responsibilities and keep them small enough to understand at a glance.
- Use descriptive PascalCase component names and typed props. Avoid `any`; model optional content and variants explicitly.
- Reuse components when the same visual pattern or behavior appears more than once. Do not abstract a one-off element without a clear benefit.
- Keep content separate from presentation when it makes repeated portfolio data easier to maintain. Preserve the supplied wording and ordering.
- Use semantic elements (`nav`, `main`, `section`, `article`, `footer`, buttons, and links) according to their meaning.
- Interactive elements must use the correct native control, support keyboard use, expose accessible names, and show a visible focus state.
- Avoid clickable noninteractive containers and nested interactive elements.
- Keep browser-only APIs, state, and effects in client components; do not turn a whole page into a client component to support one small interaction.
- Follow the project's import aliases and file naming conventions. Do not add a component library for simple, project-specific UI.
