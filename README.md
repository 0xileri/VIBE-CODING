# ILERI — Portfolio

Personal portfolio for ILERI ([@0xileri](https://x.com/0xileri)) — AI creator,
web3 content creator, and growth specialist. Built with React + Vite.

## Design

Editorial dark canvas with cream inverted blocks and a single amber accent.
Fraunces (display) / Inter (body) / JetBrains Mono (labels), all self-hosted.

## Sections

| # | Section | What it is |
|---|---------|------------|
| — | Hero | Headline, positioning, and the three-up reach/collaborations/recognition strip |
| — | Ticker | Scrolling marquee of ecosystems and projects |
| 01 | About | Positioning statement, bio, and current roles |
| 02 | Services | The offer — content, growth, AI creative — with deliverables |
| 03 | Process | How a collaboration runs, brief → report |
| 04 | By the Numbers | Headline stats |
| 05 | Featured Wins | Three headline results with screenshots |
| 06 | Index | Every result, filterable by win / placement / NFT spot |
| 07 | Proof of Work | Screenshot gallery with a lightbox viewer |
| 08 | Words | Testimonials — hidden until real quotes are added |
| — | Contact | X, Telegram, email, and social links |

## Editing content

All copy — name, bio, stats, services, process, achievements, proof-of-work
entries, contact links — lives in [`src/data.js`](src/data.js). Update that file
to change the site's content without touching components or styles.

### Adding testimonials

The `testimonials` array in `src/data.js` ships empty, and the section stays
hidden while it is. Add real entries and it appears automatically:

```js
export const testimonials = [
  {
    quote: 'What they actually said.',
    name: 'Person',
    title: 'Role',        // optional
    org: 'Project',       // optional
    url: 'https://x.com/…' // optional
  },
]
```

## Fonts

Fonts are self-hosted in [`public/fonts`](public/fonts) (latin + latin-ext
subsets, woff2) so the site has no third-party runtime dependency and renders
correctly where Google Fonts is blocked. Both families are licensed under the
SIL Open Font License 1.1.

## Social share card

`public/og.jpg` is the Open Graph preview (2400x1260, a 2x render of the
standard 1200x630). It is generated from
[`scripts/og-card.html`](scripts/og-card.html) — open that file in a browser
and screenshot the `.card` element at 1200x630 with a 2x device pixel ratio,
then save over `public/og.jpg`. The template uses relative paths, so it renders
correctly straight from disk with no server.

Edit the headline, stats, or portrait in that file to change the card. Type is
deliberately larger than it looks like it needs to be: feeds render the card
around 500px wide, so anything under ~20px in the design becomes unreadable.

## Deployment

Both hosts build the repository's **default branch**,
`claude/portfolio-website-M0DTT`. Merge work into that branch to ship it.

**Railway** (`railway.toml`) — Railway runs a process rather than serving files,
so the built site is served by [`serve`](https://www.npmjs.com/package/serve).
It is a real dependency rather than `npx`, so nothing is fetched at boot. It
binds to Railway's `$PORT`, falling back to 3000 locally. Reproduce a deploy
exactly with:

```bash
npm run build && npm start
```

**Netlify** (`netlify.toml`) — static hosting; the build command and publish
directory are auto-detected, so there is nothing to configure in the dashboard.

Cache headers are defined twice — `netlify.toml` for Netlify, `serve.json` for
Railway — and the two are kept in sync deliberately: hashed assets are immutable
for a year, fonts for a month (their filenames are stable, so `immutable` would
strand a replaced face), and `og.jpg` for an hour since it is regenerated
whenever the headline or stats change.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```
