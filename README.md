# Bitcoin-Only

This is the repository for [bitcoin-only.com](https://bitcoin-only.com), a collection of the highest quality Bitcoin resources: meetups, books, wallets, podcasts, conferences, and much more.

[Click here](https://github.com/bitcoin-only/bitcoin-only/issues/new/choose) to raise an issue (e.g. to request content be added).

## Content contributions

Content lives in `app/data/` as plain JavaScript modules (one per topic, e.g. `meetups.js`, `wallets.js`). To add or update an entry, edit the relevant data file and open a pull request. See the [listing requirements](/listing-requirements) page for what is expected of listing.

## Prerequisites

- Node.js >= 20 (a `.nvmrc` is provided — run `nvm use` or `nvm install`)

## Development

```bash
# install dependencies
npm install

# serve with hot reload at localhost:1111
npm run dev

# quality checks
npm run lint       # ESLint (flat config, whole tree)
npm run format     # Prettier (write)
npm run format:check

# create the static build (.output/public)
npm run generate
```

Every PR is validated in CI (`.github/workflows/check.yml`): lint, formatting, and a static `nuxt generate` build. Dependencies and GitHub Actions are kept up to date automatically via Dependabot.

## Built with

- [Nuxt 4](https://nuxt.com) (static generation, Vue 3) — SFCs under `app/`
- [@nuxtjs/sitemap](https://nuxtseo.com/sitemap) + `app/public/robots.txt` for SEO
- [ESLint](https://eslint.org) (flat config) + [Prettier](https://prettier.io)
- [Sass](https://sass-lang.com)
