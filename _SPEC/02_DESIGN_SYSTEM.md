# Design System

## Direction

A restrained academic editorial style: dark by default, high-contrast text,
generous spacing, subtle borders, and limited motion.

## Color tokens

Dark theme:

- Canvas: `#071116`
- Surface: `#0d1b22`
- Primary text: `#edf7f6`
- Muted text: `#a7bdc2`
- Accent: `#63e6cf`
- Secondary accent: `#78c7ff`

Light theme must preserve the same hierarchy and meet contrast requirements.

## Typography

- Use a system font stack; do not load remote font services.
- Use compact uppercase eyebrow labels and large editorial headings.
- Maintain a readable body width and line height.

## Interaction

- Every interactive element must expose a visible keyboard focus state.
- Honor `prefers-reduced-motion`.
- Theme choice persists locally in the browser.
- Navigation remains usable at 360 px without hiding core destinations.

## Accessibility target

- Semantic landmarks and heading order.
- WCAG 2.1 AA color contrast for normal text and controls.
- Descriptive link text and image alternative text.
- No information conveyed by color alone.
