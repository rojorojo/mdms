# Folder Structure

This project uses the App Router in Next.js 15, organized for clarity and AI-assisted development.

## Root Structure

- `app/` – Next.js route-based components
- `app/createitem/` – Main dashboard route and UI
- `app/createitem/components/` – All feature-level and atomic components
- `app/data/` – Mock JSON data for frontend use
- `lib/` – Zustand stores and utility functions
- `styles/` – Tailwind globals and shared styles
- `public/` – Static files and image assets

## Naming Conventions

- Components: PascalCase (`FormContainer.tsx`)
- JSON files: kebab-case or snake_case (`donation_summary.json`)
- CSS utilities: named using feature-based or functional groupings

## Notes

- Create item is single-page only (`/createitem`)
- Routes should be colocated with layout and metadata where possible
- Future pages or features should follow this modular pattern
