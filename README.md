# home-page

Personal landing page for **Louis Deng** (`aeilot`) — student & indie developer.

Live at [aeilot.top](https://aeilot.top) / [aeilot.github.io](https://aeilot.github.io).

Built with [Next.js](https://nextjs.org) (App Router) and React 19.

## Features

- **Animated greeting hero** — cycles through multilingual greetings, with festive messages that change based on the date (New Year, Valentine's Day, Independence Day, Halloween, Thanksgiving, Christmas).
- **Snow effect** — falling snowflakes shown during December, on desktop, in dark mode only.
- **Subdomain navigator** — a searchable launcher that jumps to `*.aeilot.top` subdomains (blog, studio, etc.).
- **Social links** — email, Telegram, GitHub, LinkedIn, and Instagram.
- **SEO & social sharing** — Open Graph and Twitter Card metadata via the Next.js Metadata API (see [`METADATA.md`](./METADATA.md)).

## Tech Stack

- [Next.js 15](https://nextjs.org) with the App Router and Turbopack
- [React 19](https://react.dev)
- CSS Modules + [Sass](https://sass-lang.com) (`.scss`)
- [Remix Icon](https://remixicon.com) for social icons

## Getting Started

Install dependencies (this project uses [pnpm](https://pnpm.io)):

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page. It auto-updates as you edit files.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server with Turbopack |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout + site metadata (Open Graph, Twitter)
│   ├── page.js            # Home page (hero, greetings, social, navigator, bio)
│   ├── globals.css        # Global styles
│   └── page.module.css    # Home page styles
└── components/
    ├── NavigatorSection.js # Searchable subdomain launcher
    └── SnowEffect.js       # December dark-mode snowfall
```

## Customization

- **Greetings & festive messages** — edit `getFestiveGreetings()` in `src/app/page.js`.
- **Subdomain links** — edit the `subdomains` array in `src/components/NavigatorSection.js`.
- **Metadata / SEO** — edit the `metadata` export in `src/app/layout.js`. Update `metadataBase` when deploying to a custom domain. See [`METADATA.md`](./METADATA.md) for details.

## License

Personal project © Louis Deng. All rights reserved.
