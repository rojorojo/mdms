# State Management

This project uses Zustand for global state and React context/hooks for local UI state.

## Zustand Store

Manages:

- UI flags (e.g., isLoading, activeTab)

Benefits:

- Lightweight and composable
- Avoids prop drilling
- Compatible with React hooks

## React Context & Local State

Used for:

- UI toggles (e.g., expanded views)
- Modal open/close
- Component-local form state
- View settings or preferences

## Performance Optimization

- Use selectors in Zustand to minimize re-renders
- Use `useMemo` and `useCallback` for derived logic
- Break down stateful logic into separate stores when complexity increases
