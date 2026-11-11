---
mode: agent
description: Implement or refine a portfolio page from a Figma frame.
---

# Implement a Figma screen

Implement the requested portfolio screen from the provided Figma reference.

## Inputs

- Figma link or frame: ${input:figmaReference:Paste the Figma URL or identify the frame}
- Target page or route: ${input:targetPage:Name the page or route}
- Target viewport(s): ${input:viewports:For example, mobile and desktop}
- Special interaction or content requirements: ${input:requirements:List any requirements not evident in Figma}

## Steps

1. Inspect the repository structure, package scripts, existing design tokens, fonts, assets, and relevant components. Follow the repository's actual setup.
2. Inspect the specified Figma frame and its related variants or states. Record the relevant layout, dimensions, typography, colors, spacing, assets, and responsive behavior.
3. Map Figma elements to existing project components. Identify missing assets or ambiguous content before approximating them.
4. Implement the screen using the established Next.js and Tailwind conventions. Reuse existing components and tokens where they match.
5. Add responsive behavior for the requested viewports. Preserve hierarchy and avoid overflow.
6. Implement only requested or visibly specified interactions. Make controls keyboard accessible and provide focus states.
7. If visual verification is available, compare the implementation at matching viewport sizes and correct clear differences.
8. Run checks only when requested or when the task explicitly requires verification; use the repository's existing scripts.

## Constraints

- Do not invent project copy, biography, metrics, testimonials, or portfolio details. Use supplied content or flag what is missing.
- Do not replace Figma assets with unrelated stock images, emoji, or decorative placeholders.
- Do not add dependencies or perform broad refactors for a single screen.
- Do not claim pixel-perfect matching unless you have compared the rendered result against the reference.

## Report

Summarize the files changed, the viewports and interactions handled, checks actually run, and any missing asset or design decision that still needs input.
