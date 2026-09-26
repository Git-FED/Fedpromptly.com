# FedPromptly

> **A place where people turn ideas into software.**
>
> A static-first builder ecosystem for learning, making, testing, deploying, and sharing useful work.

[Open the site](index.html) · [Explore projects](projects.html) · [Read the book](book.html) · [Support the work](support.html)

---

## What this is

FedPromptly is the public front door for a builder ecosystem. It is designed for people who have an idea, a question, a rough prototype, or a project that needs a clearer next step.

The site does four jobs well:

- **Orient:** explain what FedPromptly is and where to begin.
- **Show:** make projects, experiments, labs, and examples easy to explore.
- **Teach:** provide practical docs, prompts, checklists, and the interactive book *The Small Build*.
- **Invite:** make it clear how to contribute, submit a project, or support the work.

This is not a framework demo or a placeholder landing page. It is a complete, static-first site that can be opened, inspected, edited, and deployed without a build server.

## Start here

| If you want to… | Start with… |
|---|---|
| Understand the mission | [Mission](about.html) |
| Browse the ecosystem | [Projects](projects.html) |
| Learn how to build a first slice | [The Small Build](book.html) |
| Find practical guidance | [Docs](docs.html) |
| Submit something you made | [Submit a project](submit-project.html) |
| Choose a support method | [Support options](support/subscription-options.html) |
| Check provider integrations | [Provider status](support/provider-status.html) |

## The experience

### A clear public surface

The homepage introduces the ecosystem quickly, then surfaces the six support paths near the top of the page. The navigation stays intentionally small: Mission, Projects, Labs, Docs, Roadmap, Community, and Support.

### A real project family

Project cards lead to dedicated local HTML pages rather than dead links or raw source files. Each destination has context, a useful next step, and a return path.

### An interactive field guide

[*The Small Build*](book.html) is a complete browser-based book with:

- chapter completion tracking saved in the browser;
- a live reading-progress meter;
- expandable reflection prompts;
- a saved four-part workbook;
- a downloadable personal notes file; and
- responsive, print-friendly styling.

### A visible support menu

The [Support hub](support.html) and [subscription chooser](support/subscription-options.html) keep provider choices separate and understandable:

- [PayPal FedPromptly](support/paypal.html)
- [Stripe FedPromptly](support/stripe.html)
- [Ko-fi](support/ko-fi.html)
- [GitHub Sponsors](support/github-sponsors.html)
- [Buy Me a Book](support/buy-me-a-book.html)
- [NOWPayments](support/nowpayments.html)

Each option leads to its own local HTML destination. Provider-owned checkout scripts and embeds remain inside the relevant provider page so one blocked widget does not break the entire support menu.

## Run it locally

The site is static. Use a local HTTP server so JSON, scripts, and relative links behave like they will on GitHub Pages.

### Python

```bash
cd fedpromptly-promo
python3 -m http.server 8000 --bind 0.0.0.0
```

Open <http://localhost:8000>.

### Node

```bash
npx serve .
```

Do not use `file://` for normal testing. Browser security rules can block local data requests and make a healthy page look broken.

## Repository map

```text
.
├── index.html                    Homepage and visible support cards
├── book.html                     Interactive book and workbook
├── support.html                  Support hub
├── support/                      Provider pages and payment chooser
├── projects/                     Dedicated project destinations
├── docs/                         Rendered guides and design documentation
├── operations/                   Launch, support, content, and incident runbooks
├── prompts/                      Reusable copy, design, engineering, and launch prompts
├── data/portfolio.json           Project catalog data
├── assets/css/main.css           Shared visual system
├── assets/js/app.js              Shared progressive enhancement
├── assets/js/book.js             Book progress, notes, and workbook download
├── components/                   Reusable site components
├── .github/                      Contribution and funding files
└── FILE_MANIFEST.json            Package inventory
```

## Editing workflow

1. **Choose the visitor.** Decide whether the change serves a beginner, builder, contributor, supporter, or partner.
2. **Choose the destination.** Put user-facing information on an HTML page, not in a raw Markdown, JSON, or text link.
3. **Keep the path concrete.** Every prominent card should lead to a real local destination with a clear next action.
4. **Update data before duplication.** Add project metadata to `data/portfolio.json` when the content belongs in the project catalog.
5. **Label reality accurately.** Use language such as `Concept`, `Experiment`, `Building`, `Released`, or `Archived`.
6. **Test the whole path.** Check the page, its links, its empty or fallback state, keyboard focus, mobile layout, and return navigation.
7. **Make the change easy to review.** Explain the visitor problem, the implementation, and what you tested.

## Before publishing

- Replace remaining placeholder ownership fields and confirm project permissions.
- Confirm the GitHub organization, sponsor identity, support handles, and contact inboxes.
- Verify every payment product, plan, price, tax setting, cancellation path, and provider account in the provider dashboards.
- Review payment, consumer-protection, privacy, refund, accessibility, and regional requirements before enabling live billing.
- Test the homepage and provider chooser in a clean browser and on a narrow mobile viewport.
- Test keyboard navigation, visible focus, reduced motion, contrast, and blocked third-party script fallbacks.
- Confirm the launch owner knows how to handle support questions and provider incidents.

## Design principles

- **Clarity before decoration.** Motion and visual polish should reinforce the next step, never hide it.
- **Local destinations over dead ends.** A link should resolve to a complete page or be removed.
- **Progressive disclosure.** Show the essential decision first; place detail one step deeper.
- **Honest states.** A prototype should look and read like a prototype.
- **Accessible by default.** Keyboard access, readable contrast, reduced motion, and responsive layouts are product requirements.
- **Static-first portability.** The public surface should remain fast, inspectable, and easy to host.

## Contributing

Start with [CONTRIBUTING](CONTRIBUTING.html), then review the [Build and Test workflow](BUILD.html). For project submissions, use [Submit a project](submit-project.html). For problems, use the issue templates or contact the team through the [Contact page](contact.html).

A good contribution makes the next step clearer for a visitor or makes the site easier to maintain for another builder. If a change does not do one of those things, make the scope smaller.

## License and contact

Review the [license](LICENSE.html), [security guidance](SECURITY.html), and [code of conduct](CODE_OF_CONDUCT.html) before contributing.

For general questions: [contact@fedpromptly.com](mailto:contact@fedpromptly.com)  
For support: [support@fedpromptly.com](mailto:support@fedpromptly.com)

---

**FedPromptly** · Built in public. Designed for the next small step.
