---
mode: agent
description: Review a portfolio UI implementation against its Figma design and quality requirements.
---

# Review portfolio UI

Review the implementation of ${input:scope:Identify the page, route, or components} against ${input:reference:Paste the Figma link/frame or describe the expected behavior}.

Inspect the relevant source and, when available, the rendered page at the same viewport sizes as the Figma reference. Report concrete findings with file and line references. Do not make changes unless the user asks you to fix the findings.

## Review criteria

- Visual match: hierarchy, layout, spacing, typography, colors, borders, radii, imagery, and component states.
- Responsive behavior: mobile, tablet, and desktop layout; text wrapping; image cropping; and horizontal overflow.
- Accessibility: semantic structure, heading order, link and button names, keyboard operation, focus visibility, contrast, and alternative text.
- Next.js conventions: routing, metadata, image and font handling, and client component scope.
- Tailwind consistency: use of existing tokens and conventions, avoidable arbitrary values, and duplicated styling.
- Functionality: links and controls behave as intended; no misleading or dead interactions.
- Content integrity: supplied copy and portfolio facts are preserved without invented claims.

## Output

List findings from highest to lowest impact. For each finding, include the location, what is wrong, why it matters, and a practical fix. Distinguish confirmed defects from items that could not be verified because a Figma reference, rendered page, or asset was unavailable. If no actionable issues are found, say so and state what you were able to inspect.
