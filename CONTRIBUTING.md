# Contributing

Thanks for taking an interest in the SM Photography site.

This is a brand website. Contributions are welcome when invited. Photography,
copy, and studio facts must stay verified — do not invent weddings, awards,
counts, or contact details.

## Setup

```bash
npm install
npm run dev
```

Production check:

```bash
npm run typecheck
npm run lint
npm run build
```

## Expectations

- Keep PRs small and focused
- Match the existing visual language (editorial album, maroon / paper / gold)
- Do not replace photographs with stock or generated images
- Do not invent business information
- Prefer CSS `transform` / `opacity` for motion
- Respect `prefers-reduced-motion`
- Run `npm run build` before opening a PR

## Branches

- `main` — production
- Feature work on short-lived branches

## Pull requests

Include:

1. What changed and why
2. Screenshots for UI changes
3. Notes on anything left unfinished

By contributing, you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
