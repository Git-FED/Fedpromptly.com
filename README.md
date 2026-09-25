# FedPromptly Promotional GitHub Site

FedPromptly is **a place where people turn ideas into software**. This repository is the promotional front door for that ecosystem: it explains the mission, points visitors toward useful next steps, showcases projects, and gives supporters a transparent way to help.

This is deliberately a static-first site. It can run on GitHub Pages with no build server, no database, and no framework. That keeps the public surface fast, inspectable, cheap to host, and easy for contributors to understand.

## What this repository contains

```text
.
├── index.html                  # Promotional landing page
├── 404.html                    # Branded missing-page experience
├── assets/
│   ├── css/main.css            # Visual system and responsive layout
│   ├── js/app.js               # Project rendering, age gate, card interactions
│   ├── js/payments.js          # Payment integration boundary notes
│   └── images/                 # Social preview, favicon, editable SVG sources
├── components/                 # Reusable HTML fragments and payment boundary
├── data/portfolio.json         # Projects, links, contact metadata
├── .github/                    # Actions, funding, issue forms, contribution templates
├── docs/                       # Product, content, launch, accessibility, and trust guidance
├── prompts/                    # Reusable AI prompts for copy, design, engineering, and launch
├── operations/                 # Runbooks for launch, support, incidents, and content updates
└── legal/                      # Review-required policy planning materials
```

## Local development

### Option A: Python

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

### Option B: Node

```bash
npx serve .
```

Do not open the files with `file://` when testing the project list: `app.js` fetches `data/portfolio.json`, and browsers block that request from some local file contexts.

## Content workflow

1. **Start with the audience.** Decide whether a change is for a curious beginner, active builder, developer, supporter, or partner.
2. **Edit data before markup.** Add projects and verified links to `data/portfolio.json`; let the page render them.
3. **Use the voice guide.** Keep copy direct, curious, warm, and honest. Avoid inflated scale claims.
4. **Label the state of work.** Use `Concept`, `Experiment`, `Building`, `Released`, or `Archived` rather than implying every idea is a live product.
5. **Validate locally.** Check the landing page, project cards, footer mail links, support links, age gate, keyboard focus, mobile layout, and 404 page.
6. **Open a focused pull request.** Explain the visitor problem, the change, and how it was tested.

## Before publishing

- Replace every `TBD` and placeholder URL.
- Confirm the GitHub organization, Sponsors handle, Ko-fi handle, Patreon handle, Discord invite, and custom domain.
- Confirm that every project link resolves and that every project owner has approved publication.
- Review payment embeds with the payment providers and qualified counsel.
- Confirm age, geography, tax, consumer-protection, cancellation, refund, privacy, and accessibility requirements.
- Test the site on a narrow mobile viewport and with keyboard-only navigation.
- Verify that support emails are monitored and that someone owns launch-day incident response.

## Payment boundary

The repository includes the requested PayPal and Stripe subscription markup behind an adult age-verification experience. The gate is a front-end interaction, **not** proof of legal compliance, identity verification, or payment-provider approval. Do not treat it as sufficient for regulated, age-restricted, or jurisdiction-specific use without professional review.

## Content ownership

The site should have a named owner for each of these areas:

| Area | Owner | Review cadence |
|---|---|---|
| Homepage narrative | TBD | Before every launch |
| Project catalog | TBD | Monthly |
| Payment/support links | TBD | Monthly and after provider changes |
| Security instructions | TBD | Quarterly and after incidents |
| Legal pages | Qualified reviewer TBD | Before publication and on material change |

## Design direction

- Background: deep obsidian `#07070a`
- Primary accent: neon cyan `#00f0ff`
- Secondary accent: violet `#7000ff`
- Typography: Plus Jakarta Sans for headings, Inter for body copy
- Layout: asymmetrical hero, glass panels, generous negative space, progressive disclosure
- Motion: subtle reveal and hover movement; never make essential information depend on animation

## Contribution promise

A contribution is successful when it makes the next step clearer for a visitor or makes the site easier to maintain for another builder. Visual polish matters, but clarity, truthfulness, and accessibility matter more.
