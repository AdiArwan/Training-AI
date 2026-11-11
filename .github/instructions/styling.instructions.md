---
applyTo: "**/*.{css,scss,tsx,jsx,html}"
---

# Styling guidance

- Use the repository's Tailwind version and conventions. Check its configuration before using version-specific directives or features.
- Prefer existing theme tokens, CSS variables, and shared utilities for colors, spacing, typography, radii, and shadows.
- Keep utility classes readable and grouped consistently. Extract repeated class combinations only when reuse or clarity justifies it.
- Avoid inline styles and arbitrary values when an existing token or standard utility expresses the design. If a precise Figma value is necessary, use the smallest justified arbitrary value and consider whether it belongs in a token.
- Match the supplied Figma typography, spacing, alignment, and component states. Do not substitute generic gradients, shadows, or decorative elements for missing design details.
- Build mobile-first responsive layouts and add breakpoints based on the design's content needs. Prevent horizontal overflow and preserve sensible reading order.
- Use CSS for global resets, font registration, and a small number of global rules; keep component-specific styling close to the component.
- Include hover, focus-visible, active, and disabled styles for interactive controls when those states apply.
- Support reduced motion for nonessential animations and maintain sufficient contrast and visible focus.
- Avoid using color alone to convey status or meaning.
