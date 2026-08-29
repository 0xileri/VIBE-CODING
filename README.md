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

Hosted on Netlify, built from `netlify.toml` — Netlify auto-detects the build
command (`npm run build`) and publish directory (`dist`) from that file, so
there is nothing to configure in the dashboard.

Netlify builds the repository's **default branch**, which is
`claude/portfolio-website-M0DTT`. Merge work into that branch to ship it.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```
