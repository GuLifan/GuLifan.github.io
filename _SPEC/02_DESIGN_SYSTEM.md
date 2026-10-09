# Design System

## Direction

A restrained academic interface based on AcadHomepage: a persistent author
profile, compact anchor navigation, and a readable single-column scholarly
record. The visual layer is dark, high-contrast, and technology-oriented, with
macOS-inspired translucent glass surfaces.

## Color tokens

Dark theme:

- Canvas: `#071116`
- Surface: `#0d1b22`
- Primary text: `#edf7f6`
- Muted text: `#a7bdc2`
- Accent: `#63e6cf`
- Secondary accent: `#78c7ff`
- Glass fill: `rgba(13, 27, 34, 0.68)`
- Glass border: `rgba(175, 235, 228, 0.14)`

Glass surfaces use `backdrop-filter` when supported and an opaque fallback
when not supported. Text contrast must not depend on backdrop blur.

Light theme must preserve the same hierarchy and meet contrast requirements.

## Typography

- Use a system font stack; do not load remote font services.
- Use compact uppercase eyebrow labels and large editorial headings.
- Maintain a readable body width and line height.
- Use the system font stack only; no remote font service.

## Interaction

- Every interactive element must expose a visible keyboard focus state.
- Honor `prefers-reduced-motion`.
- Theme choice persists locally in the browser.
- Navigation remains usable at 360 px without hiding core destinations.
- Motion is limited to subtle elevation, glow, and section-entry effects.
- Do not add decorative macOS red/yellow/green window controls.

## Accessibility target

- Semantic landmarks and heading order.
- WCAG 2.1 AA color contrast for normal text and controls.
- Descriptive link text and image alternative text.
- No information conveyed by color alone.
