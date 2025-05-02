# Style Guide

This document defines design system rules for styling components and layouts within the Give Back Dashboard.

## Tailwind CSS

- Use utility classes in JSX
- Use the `@apply` directive for commonly repeated styles
- Build reusable Tailwind components for patterns like cards and stat blocks

## Layout & Spacing

- Responsive grid layouts using Tailwind `grid` or `flex` utilities
- Use consistent padding and margins (e.g., `p-4`, `gap-6`)
- Apply responsive breakpoints using `sm:`, `md:`, `lg:`, etc.

## Typography

- Base text: `text-base`
- Headings: `text-xl` to `text-3xl`
- Muted/secondary text: `text-sm`, `text-neutral-500`
- CTA text: bold or medium font weight

## Color and Theme

- **Black**: `#000000`
- **Accent/Brand**: `#000000`
- **Grays**: Tailwind `neutral` palette for background, border, and text elements

## Iconography

- Use consistent sizing (e.g., `w-5 h-5`)
- Use icons to reinforce meaning, not repeat labels
- Icons come from the Lucide library

## ShadCN UI

- Use ShadCN components for inputs, cards, and basic layout blocks
- Extend with Tailwind and Radix if needed
- Avoid modifying base ShadCN primitives

## Radix UI

- Use Radix for popovers, tooltips, dialogs, and composable behaviors
- Wrap components using `asChild` for styling
- Follow accessibility best practices

## Accessibility

- Ensure all text and interactions meet contrast ratios
- Provide focus indicators for all interactive components
- Use semantic HTML and ARIA roles when needed
