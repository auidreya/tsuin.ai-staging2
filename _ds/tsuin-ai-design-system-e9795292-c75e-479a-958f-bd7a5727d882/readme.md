# Shibasuke Design System

**tsuin** — Japanese for twin. ツイン.

tsuin makes the **Cognitive AI Twin — your personal AGI**. A personal digital clone that captures your thinking and continuously learns from you to become more like you. You train it. You own it.

Most of what an expert knows was never written down. Right now it leaks into someone else's model. tsuin ends that.

**The line, inside and out: Train your twin.**

The enemy is the one big model everyone uses. Your data trains it every day, but you never train a model of your own. It gets smarter about everyone and never becomes yours.

## The mascots

Two shibas. The ochre painted one is you. The blue circuit-lit one — **Shibasuke (シバスケ)** — is your twin. Note the split between artwork and role colour: the human's *art* is ochre with a teal bandana, while teal is the human's *token* colour. The design system takes its name from him.

## Sources

This system is authored against three brand documents, which are the authority:

- **`uploads/tsuin-brand-on-a-page.md`** — Brand Strategy v2 condensed (12 Aug 2026). The words, the pillars, the pricing, the hero's journeys.
- **`uploads/tsuin-taste-spec.md`** — creative direction. The authority on every aesthetic decision, including Rule 0 (The Contrast) and the never-list.
- **`uploads/tsuin-design-site-brief-for-opus.md`** — the implementation brief for restyling design.tsuin.ai.

Two repositories supplied the component architecture, real product copy, and the logo files:

- **https://github.com/auidreya/tsuin.ai-design-system** (branch `main`) — the docs app, formerly "Antigravity Design System". The ShadCN/Radix component inventory and the CSS-custom-property token mechanism come from here.
- **https://github.com/auidreya/tsuin.ai-website-staging** (branch `main`) — the marketing site. Page composition, the terminal mockup, and `public/tsuin.ai-logo.ai/`.

**Both repos still ship v1 of the brand** — Funnel Display + JetBrains Mono, Solarized Teal / Tokyo Night Storm, purple accents, "Capture the Why". Where the repos and the brand documents disagree, **the documents win**; that is the whole point of this rebuild. Read the repos for structure and real copy, not for colour or type.

## Products

| Surface | What it is | Where it lives here |
|---|---|---|
| Marketing site | tsuin.ai — the pre-order pitch, RLPF, Solo plan, pricing | `ui_kits/website/` |
| Shibasuke docs app | design.tsuin.ai — brand and component reference | `ui_kits/docs/` |
| Desktop app | The twin is a floating window on your desk, Steam first, then the terminal, then your phone. No UI source exists yet. | — |
| Twin-to-Twin (teams) | Next year, when twins learn to talk to each other. | — |

---

## Rule 0 — The Contrast

The brand is a human and their twin, so the visual system has **two voices, always in contrast**. Every meaningful layout shows both, because the product is both. The contrast *is* the message: what you bring, and what your twin mirrors back.

| | The Human | The Twin |
|---|---|---|
| Colour | Teal | Tokyo Night blue |
| Type | **Lora** — warm humanist serif | **Martian Mono** — precise technical mono |
| Rendering | Watercolour, handmade, soft edges | Spec-Sheet Futurism: grids, labels, registration marks, circuit line |
| Shiba | Ochre, painted, teal bandana | Blue, circuit-lit, crisp |
| Texture | Paper grain, paint | Clean grids, file labels |
| Words | Story, warmth, the why | Data, receipts, confidence levels, "not yet" |

Spec-Sheet Futurism and the watercolour kawaii were never competitors — they are the twin's register and the human's register of one system. **Never blend them into mush.** The point is the edge between them: a watercolour shiba inside a crisp spec-sheet frame is the brand in one image.

**Where it applies.** Chat and demo surfaces: the human speaks in Lora, the twin answers in Martian Mono — the typography alone tells you who is talking. Marketing pages: Lora headlines carry the emotional claim; Martian Mono carries the labels, specs, captions, and system voice underneath.

---

## Content fundamentals

**Personality: few words, flat honesty.** When the twin doesn't know, it says so: *"I don't have enough from you on this yet."* We never fake an answer.

**Deadpan words on warm pictures.** The pairing is the brand — cozy watercolour plus flat, honest words. The warmth makes the deadpan land; the deadpan keeps the warmth from being cute. The standard is the cookie banner: *"We baked some cookies. Not the chocolate chip kind — sadly... lawyers insist."* Everything should sound like that.

**Person and address.** Second person, always: *your* twin, *your* judgment, *your* machine. First-person plural for the mission ("Most of what an expert knows was never written down. We end that."). The audience is developers first — the ones who built real systems by hand. Never "users".

**Casing and punctuation.** Sentence case everywhere; the brand name is lowercase **tsuin**. Headlines take terminal punctuation — "Train your twin.", "You train it. You own it." The only uppercase is the 10px Martian Mono micro-label with widest tracking.

**Receipts, not claims.** 400ms P99 at 50k req/s. 4,182 decisions. 23 minutes of deep work. Solo $500, one time. Vague quantifiers are off-brand.

**Vocabulary (v2).** Cognitive AI Twin — your personal AGI · personal digital clone (plain alternate) · **RLPF** (Reinforcement Learning from Personal Feedback) · logic capture (the positioning axis) · Shibasuke (the model line) · twin, train, own, judgment, taste.

**Retired — kill on sight.** "Capture the Why" · "save your thoughts" · "never forgets" · "personal intelligence layer" · any memory-layer framing · copilot / assistant · revolutionary, seamless, next-gen, cutting-edge · exclamation enthusiasm · emoji spam.

**Pricing language.** Solo: $500, one time, runs on your machine (USD 99 / RM500 pre-order). Teams: $200/mo/seat for the cloud *between* twins. The twin itself is never rented — never use subscription framing for an individual twin.

**Tone by context.** Marketing: the emotional claim in Lora, the receipts in mono. Empty states: brief, one next step. Errors: honest, actionable, no apology. The twin's own voice: short, sourced, and explicit about its limits. Onboarding: assume competence.

**The litmus test for copy:** could any other AI company have written this sentence? If yes, rewrite.

---

## Visual foundations

**The base is paper.** Solarized cream `#FDF6E3` for light, Tokyo Night `hsl(235 24% 13%)` for dark. Never pure white, never pure black. Base is ~90% of any layout.

**Colour has meaning.** Teal is the human: primary actions, training moments, warmth. Blue is the twin: system voice, links, active states, info. When both appear, they mean machine-and-human. Saturation stays natural — watercolour and safety paint, never signage or neon. Neon and glow-for-glow's-sake are still out.

**The surfaces are the original design.tsuin.ai palette, restored** — Solarized Light (`#FDF6E3` page, `#EEE8D5` bands) for light, Tokyo Night Storm (`hsl(235 24% 13%)`) for dark. Both role colours come straight out of the repo: the human is its light-mode primary teal (`#2AA198`, filled at `#207A73`), the twin is its dark-mode primary blue (`#7AA2F7`). The repo's decorative purple `--accent` is dropped — purple survives only as a syntax colour inside code blocks.

Text-use variants exist because the illustration colours don't pass contrast: use `--human` and `--twin-ink` for type on paper, and keep `--human-bright` (`#2AA198`) / `--twin-bright` (`#7AA2F7`) for illustration. Every documented pair is checked in `guidelines/colors-contrast.card.html`; all pass WCAG AA except `--human-bright` (2.6:1) and `--twin-bright` (2.2:1) on cream, which are illustration-only.

**Typography.** Two faces, both on Google Fonts. **Lora** — the human voice: emotional headlines, story and manifesto passages, the human side of dialogue. **Martian Mono** — the twin voice: all UI, labels, data, spec sheets, system messages, technical docs. Who is speaking decides the font, always. Pixel/8-bit display type is reserved for gaming moments (Steam, achievements, character sheets) and appears nowhere else. Japanese type is set properly, as language and never as texture: 双, ツイン, シバスケ — real words, correctly used.

Martian Mono runs wide and tall, so its ladder sits a step below a normal mono (13px body) and needs 1.7 line-height. Lora carries the large sizes: 52 / 38 / 28 / 19px.

**The theme rule (locked).** The theme decides whose world you are in, and the type follows. **Light mode is the human's** — Lora carries headlines *and* body (16px). **Dark mode is the twin's** — Martian Mono takes every line, the serif gives way, and the display ladder steps down to 34 / 26 / 20px with tighter tracking so the same layouts hold. Nothing in a component needs to know this: `--font-human` resolves to Martian Mono inside `.dark`, so existing usage follows automatically. Use `--font-voice` when you want the current theme's face explicitly. The one thing that never switches is `--font-twin` on labels, data and code — those stay mono in both themes.

**Texture over flatness.** Everything illustrated carries the hand. `--texture-paper` is a fine SVG noise layer at 5.5% multiply for hero and section surfaces; `--texture-wash` is coarser, for tint fills. Flat vector is the fastest way to lose the taste. **Texture never goes behind dense data UI** — tables, code, and long forms stay clean.

**Shadows are desk shadows.** Warm, soft, low, close — objects on a desk. `--shadow-desk-sm` through `--shadow-desk-lift`. No floating glass, no inner shadow, no glow. The neutral `--shadow-*` names are aliases onto the same set.

**The twin's register is a spec sheet.** `--spec-grid` (16px), `--spec-hairline` (teal at 35%), registration marks, file labels, confidence readouts. This replaces the old marketing gridlines motif, which belonged to v1.

**Corners.** Paper is cut, not rounded: 2px for printed artifacts, 6px base for controls, 10px for cards, 14px for the floating Twin window. `--radius-full` is only for seals, avatars and postmarks.

**Cards.** 1px `--rule`, `--paper-2` fill, `--shadow-desk-sm`. Hover moves the border toward teal at 35%. Never a coloured left border, never a gradient fill. **Icon-in-rounded-square card grids are not the default rhythm** — where the content allows, a printed-artifact frame (stamp, postmark, box label, certificate, seal) is the more tsuin answer.

**Characters, not decoration.** The canon scene is the reference: the painted shiba at his desk with a cookie and a coffee, Mount Fuji and cherry blossom behind him, his circuit-lit twin watching from the monitor. The shibas are actors: in scenes, doing things, earning 30–50% of a section's visual weight. The **head crops** (`shibasuke-human-head.png`, `shibasuke-twin-head.png`) are the sanctioned small form — chat avatars, inline attribution, favicons; they are the only crop allowed to shrink. Full bodies stay in scenes. Tiny corner mascots read as clipart. One scene per section — a scene is a statement; confetti is noise. Painted and circuit-lit together means human-and-twin; never two of the same treatment. Canon: green bandana with 双 on both characters, 合格 headband for achievement moments, the cookie for warmth and reward.

**Supporting marks.** A hand-drawn arrow links two ideas — it carries the hand and is never used as a UI chevron. The isometric monitor draws the twin's world as an object: flat blue planes, dotted shading, ink outline. Both come from the flyer and deck vocabulary.

**Imagery vibe.** Painterly watercolour with clean dark outlines. Warm ochre and teal for the human; cool blue with glowing circuit linework for the twin. No stock photography, no corporate-Memphis figures, no abstract blobs.

**Interaction.** Hover on actions is an opacity fade to 90%, not a colour shift. Focus is a 2px `--ring` (teal) outline with offset. There is no distinct press state. Disabled is 50% opacity.

**Motion.** Functional only: 120ms for dropdowns, 150ms for colour, 200ms for cards and the sidebar, on `cubic-bezier(.4,0,.2,1)`. Nothing bounces, nothing springs, nothing animates on scroll.

**Transparency and blur.** Two uses only: sticky headers (80% paper + 6px blur) and the dialog scrim. Everything else is opaque. Tints use `color-mix` at 5–35% of a token, never element opacity.

**Hard rules.** Never bake text into an image — all copy is live text. Real Japanese only. Both themes pass AA.

**The litmus test:** *"Does it look like someone made it by hand and mailed it to you — or like a template that shipped itself?"* If it could appear on any AI startup's site with the logo swapped, it fails.

---

## Iconography

**lucide** is the icon system — it is what both repos import, and nothing else is. Stroke-only, 2px, 24px viewBox, rendered at 13–20px: 13px in nav rows and search fields, 14px in list checks and chips, 15px in header actions, 16–17px in buttons and feature tiles, 20px in icon tiles. Blue for the twin's system meaning, teal for human actions, `--ink-muted` for neutral chrome.

Neither repo vendors an icon font, sprite, or PNG icon set, so this system links lucide from CDN (`unpkg.com/lucide@0.469.0`) and reads its raw icon nodes — see `ui_kits/icon.jsx`. Three glyphs (`check`, `chevron-down`, `x`) are inlined in Checkbox, Select and Dialog so those components stay dependency-free.

**Icons are chrome, not the visual system.** An icon in a rounded square is the pattern the taste spec explicitly demotes; reach for a scene or an artifact frame first.

**Emoji are never used** — the voice doc marks `"Oops! Something went wrong 😔"` as the wrong way to write an error. Japanese characters carry real meaning where they appear: 双 (the logo and the bandana), シバスケ, ツイン, 合格.

---

## Intentional additions

- **`--human-*` / `--twin-*` token families** with separate fill and text-use values. The brief asks for the two-soul semantics to be named; the split into `--twin` (fill) and `--twin-ink` (text) is what makes AA achievable on cream.
- **`tokens/texture.css`** — paper grain, desk shadows, and the spec grid as tokens rather than per-page CSS.
- **`--success` / `--warning`.** The source `badge.tsx` and `alert.tsx` reach for Tailwind utilities that don't exist outside Tailwind; these are promoted to real, warm tokens.
- **`Card` `radius` prop** — the two repos disagree (8px vs 12px); both are kept.

No component families were invented. The inventory is exactly the 15 the source kit defines.

**Not built:** the Printed Artifacts component family (`Stamp`, `Postmark`, `BoxLabel`, `Certificate`, `HankoSeal`) called for in the brief — deferred at the user's request. The artifact *rules* are documented above, the tokens exist (`--radius-artifact`, `--hanko`, `--perf-size`), and `assets/artifacts/` now holds real reference art: the シバスケ 1.0 stamp (100円, perforated edge, 東京中央 postmark dated 26.08.15, 日本郵便, ツインモデル) and the "PROMO FOR 2 DAYS ONLY!!" stamped badge. Anyone building the components should copy those proportions rather than invent them.

---

## Templates

Starting folders a consuming project copies. Each has a `ds-base.js` with one `base` line to repoint at the bound design system.

| Template | Entry | What it seeds |
| --- | --- | --- |
| Marketing page | `templates/marketing-page/MarketingPage.dc.html` | Landing page: nav, hero with the Fuji desk scene, problem cards, human/twin chat demo, dark Solo band, EXIT close, footer. Tweaks: paper texture, hero scene. |
| Docs page | `templates/docs-page/DocsPage.dc.html` | Docs shell: sidebar nav, sticky header with the Shibasuke wordmark, component page with preview block, variant grid, props table, on-this-page rail. |

Starting Points (the older mechanism) have been removed — templates replaced them.

## Index

**Root** — `styles.css` (the single entry point), `readme.md`, `SKILL.md`, `github.md`, `thumbnail.html`.

**`tokens/`** — `fonts.css` (Lora + Martian Mono), `colors.css` (Solarized surfaces, human teal, twin blue, Tokyo Night dark), `code-syntax.css`, `typography.css` (two ladders), `texture.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`.

**`components/`** — 15 families, each with `.jsx`, `.d.ts`, `.prompt.md`, plus one card per directory.
- `core/` — Button, Card, Badge, Separator, Avatar
- `forms/` — Input, Label, Checkbox, Switch, Select
- `feedback/` — Alert, Dialog, Tooltip
- `navigation/` — Tabs, ThemeToggle (the floating Human / Twin theme switch — never a sun/moon icon in the nav)
- `data/` — Table

**`ui_kits/`** — `website/` (marketing site: home + pricing, paper/ink, clickable), `docs/` (Shibasuke docs app: Introduction, The Contrast, Typography, Voice & Tone, Texture, Button, Mascot), `icon.jsx`.

**`guidelines/`** — specimen cards. Brand: The Contrast, lockups, marks, mascot cast, mascot rules, code surface. Colors: paper & ink, the human (teal), the twin (blue), Tokyo Night Storm, semantic, code syntax, contrast check. Type: Lora, Martian Mono, dialogue, scale, micro-labels. Texture: paper grain, desk shadows, spec grid. Spacing, Elevation, Motion.

**`assets/`** — `logo/` (12 PNG lockups), `illustrations/` (11 text-free mascots and scenes), `artifacts/` (stamp, box art, promo badge), `reference/` (the two flyers — reference only, never composited into a layout: every word in them is baked into the artwork).

**`slides/`** — eight slide specimens built from the August 2026 pitch deck. See `slides/README.md`.

## Known gaps

- **The Printed Artifacts component family is not built** — `Stamp`, `Postmark`, `BoxLabel`, `Certificate`, `HankoSeal`, the centrepiece of the implementation brief. Deferred at the user's request. The rules and reference art are documented; the components are not authored, so consumers cannot use artifact frames in place of icon-card grids yet.
- **Mascot coverage.** Twelve text-free assets are now in `assets/illustrations/`: both full bodies, both head crops, six scenes (Fuji desk, desk sticker, high-five, 合格 training, EXIT, gate), the arrow and the monitor. Three earlier sticker PNGs have "tsuin.ai" baked into the artwork, which violates the hard rule that all copy is live text — they are quarantined in `illustrations/deprecated-baked-text/` and must not be used in any layout. Replacements would be the same three poses exported without the tag. The canonical 8-pose light/dark set (ball, cookie, mascot, rofl, running, sleep, snack, stretching) is still missing.
- **No usable SVG has arrived yet.** Three separate uploads (33 files) were Figma exports whose `<image>` payload was stripped, so they render blank; each was discarded. The artwork inside them is raster, so PNG is the correct format for the mascots, flyers and deck — but a true vector logo would still be worth having for the 16px favicon.
- **No watercolour-textured vectors.** Rule 1 prefers watercolour or textured SVG; the illustration assets are raster. The CSS texture layer covers surfaces, not illustration.
- **Missing artifact types.** The certificate and the hanko seal have no reference art yet. The stamp, the promo badge and the "Twin model" box art have arrived.
- **Two scenes carry painted lettering** — "Twin model / Shibasuke 1.0" on the box label and "EXIT" on the door sign. That is lettering *within* the illustration, not UI copy, so it stands; but never overlay live text on top of those areas, and never add new painted words to an asset.
- **Large source files.** Uploads arrive at 8304×6478 / 17 MB; anything over about 20 MB will fail to upload. Send the full-size file when you can and I will downscale on import (the box art went to 1800px, the EXIT scene to 1500px) — or export at roughly 2000px on the long edge yourself.
- **The deck's own visual layout was never seen.** The 26-slide PDF read as text (all copy is verbatim in `slides/`), but rendering its pages timed out, and the source deck runs on a third-party ("RamenTech") template — so the slide specimens use this system's foundations rather than copying that template. If you want the deck's actual look reproduced, send a few slides as PNG.
- **Seven deck sections have no specimen** — traction, go-to-market, team, competitor landscape, product roadmap grid, technical architecture, Fukuoka. They need charts, photography and diagram components the system does not have yet.
- **The flyers use emoji as list bullets** (⚡ 🕐 signpost on the Cognitive AI Twin flyer). That sits against the brand's own "no emoji spam" rule, so the system does not repeat it; icons come from Lucide instead. Worth deciding deliberately.
- **No vector logo, no font binaries.** Every lockup is PNG (the `tsuin.ai-logo.ai` folder holds rasters). Both faces load from the Google CDN; production should self-host.
- **The pixel/8-bit gaming face is undefined** — reserved by the taste spec, no family chosen.
- **Contrast ratios are computed, not instrument-measured.** Re-verify with a checker before shipping production surfaces.
