---
name: Brandon Hernandez
description: Portfolio of a software developer and data scientist — ambitious, earnest, building
colors:
  accent: "#e8641c"
  accent-dim: "#c24e0e"
  accent-light: "#f0a06a"
  text: "#f0ece2"
  text-secondary: "#b8af98"
  muted: "#857a68"
  bg: "#100e09"
  surface: "#17140e"
  card: "#201c12"
  border: "#2e2818"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.6rem, 9vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "28px"
  lg: "52px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "11px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dim}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "11px 26px"
  button-ghost-hover:
    backgroundColor: "{colors.card}"
    textColor: "{colors.accent-light}"
  skill-tag:
    backgroundColor: "{colors.card}"
    textColor: "{colors.accent-light}"
    rounded: "{rounded.md}"
    padding: "5px 14px"
  project-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: Brandon Hernandez

## 1. Overview

**Creative North Star: "The Engineer's Bench"**

A space clearly in use. Everything at hand has earned its place: the tools are organized not for display but for reach, the surfaces are dark because focus is the point, and the one bright color marks exactly what matters. Nothing decorative. Nothing there to prove the bench exists — only evidence that work happens here.

The visual system holds a single committed accent (named Marty Supreme Orange by the brand, a vivid burnt orange in practice) against a near-black field built from three tiers of tonal depth. Mono type earns its presence by labeling data, not by costuming as "technical." Interactions are confirmations, not celebrations: borders sharpen, elements lift slightly, and then settle. Prose breathes at 1.8 line-height because reading is the point, not scanning.

This system explicitly rejects the generic dark SaaS developer aesthetic: uniform card grids, purple-on-charcoal scroll reveals, floating particle effects, and identical uppercase eyebrow labels scaffolding every section. It also rejects corporate light grays, the editorial-magazine lane (italic display serifs, ruled broadsheet columns), and brutalist experimentation. The anti-reference is any portfolio that looks like it was generated, not built.

**Key Characteristics:**
- Three-tier tonal dark stack (Night Field → Raised Surface → Elevated Card) creates depth without shadows at rest
- One committed accent color used exclusively as a signal: CTAs, hover borders, active labels
- JetBrains Mono used only for metadata and code — never body copy, never display
- Hover pattern: accent border + slight Y lift (-2px to -4px). No celebration, just confirmation
- Backdrop-blur navbar is the only surface with blur; glassmorphism is otherwise prohibited

---

## 2. Colors: The Night Field Palette

One signal color against a warm dark stack. The orange earns its name — Marty Supreme Orange — by commanding every surface it touches with heat against deep charcoal.

### Primary

- **Marty Supreme Orange** (`#e8641c`): The brand's one committed color. Used on primary CTAs, hover borders across all interactive surfaces, active-state labels, the navbar logo badge, and the section-label mono text. Bold vivid orange that reads clearly and hot against every dark surface. Forbidden on backgrounds and decorative elements.

- **Char Orange** (`#c24e0e`): Pressed and hover state for the primary button. Darker, same hue family. Conveys depth without a new color role.

- **Faded Amber** (`#f0a06a`): Link text, ghost button hover text, skill tag text, tech tag text. The warm, desaturated expression of the accent — used where the full orange would be too loud or where text needs to read against the card surface.

### Neutral

- **Night Field** (`#100e09`): The deepest surface. Body background. Not pure black: a faint warm brown undertone keeps it from reading as cold or digital.

- **Raised Surface** (`#17140e`): Sections that step one tier above the body background. Used in About, Interests, and Footer to create section rhythm without borders.

- **Elevated Card** (`#201c12`): Card and contained-UI background. The third and final tier of the tonal stack. Anything that sits on the page as a discrete object uses this surface.

- **Warm Divider** (`#2e2818`): Borders, separators, and the navbar's bottom edge on scroll. Never used for text.

- **Warm Ivory** (`#f0ece2`): Primary text. Headings, card titles, button text. Not pure white — the warm cast ties it to the orange accent family and reads softly against dark surfaces.

- **Warm Stone** (`#b8af98`): Body copy, card descriptions, bio paragraphs. Contrast against Night Field: approximately 9:1. Comfortable reading at all sizes.

- **Warm Ash** (`#857a68`): Navigation links at rest, footer copy, icon links. Contrast against Night Field: approximately 4.7:1 — passes WCAG AA. Approved for secondary UI text, labels, and icon fills.

**The Signal Rule.** Marty Supreme Orange appears on ≤15% of any given screen. Its rarity is the signal. If the accent is everywhere, nothing is signaled.

**The Tonal Stack Rule.** Depth is expressed through the three-tier neutral ramp (Night Field → Raised Surface → Elevated Card). Do not add new warm-dark tones to the stack. If a surface needs to feel distinct, use the next tier — not a custom intermediate value.

---

## 3. Typography

**Display / Body Font:** Inter (with -apple-system, BlinkMacSystemFont, sans-serif fallback)
**Label / Mono Font:** JetBrains Mono (with Fira Code, monospace fallback)

**Character:** A single family tuned through weight and size contrast rather than through pairing. Inter at 800 weight with tight negative letter-spacing reads as display; the same family at 400 weight and 1rem reads as prose. The mono font is the only other voice — strictly functional, never decorative.

Note: Inter appears on the brand reflex-reject list (common AI generation default for developer surfaces). The current design has committed to it and identity-preservation applies. A future `/impeccable typeset` pass is recommended to evaluate a more distinctive body pairing before the next major version.

### Hierarchy

- **Display** (800, `clamp(2.6rem, 9vw, 5.5rem)`, lh 1.05, ls -0.035em): Hero name only. The one place the system goes loud.
- **Headline** (800, `clamp(1.8rem, 4vw, 2.6rem)`, lh 1.2, ls -0.025em): Section titles (`h2`). One per section.
- **Title** (700, 1.1rem, lh 1.3, ls -0.01em): Card and component headings (`h3`). Content-level hierarchy.
- **Body** (400, 1rem, lh 1.8): Bio paragraphs, card descriptions, any flowing prose. Max line length: 65–75ch.
- **Label** (JetBrains Mono 400/500, 0.72–0.8rem, ls 0.12em, uppercase): Tech tags, skill tags, section labels (used sparingly — see Do's and Don'ts), category badges. Mono-only territory.

**The Mono-as-Metadata Rule.** JetBrains Mono labels one thing: this is technical data, not prose. Use it for skill chips, tech tags, section labels, the email address in the footer, and inline code. Never for body paragraphs, headings, or any text longer than a short phrase. A mono-heavy page is costume, not craft.

**The Tight-at-Large Rule.** Display and headline weights use negative letter-spacing (−0.035em, −0.025em). As the scale descends, tracking loosens. Body text never has explicit letter-spacing set. Mono labels use positive tracking (0.12em) because mono spacing is looser by default.

---

## 4. Elevation

This system is **flat at rest and structural on interaction**. The three-tier tonal stack (Night Field → Raised Surface → Elevated Card) is the primary depth signal. Surfaces at rest never cast shadows. Shadows are a reward for interaction and for the one structural floating element (the navbar).

### Shadow Vocabulary

- **Hover lift** (`0 16px 40px rgba(0, 0, 0, 0.35)`): Project and plan cards on hover. Large, soft, dark. Reinforces the Y lift without competing with the accent border.
- **Accent glow** (`0 8px 24px rgba(232, 100, 28, 0.18)`): Primary button hover. A faint orange bloom under the button — present only while hovered, never at rest.
- **Navbar edge** (`0 1px 0 #2e2818`): The navbar's bottom border on scroll. A structural separator, not a shadow. One pixel only.

### Named Rules

**The Flat-at-Rest Rule.** No surface casts a shadow in its default state. Depth is tonal. Shadows appear only as state response: hover lifts a card, focus rings a button, scroll reveals the navbar edge. A shadow at rest means a surface is trying to float; on a dark background, floating reads as noise.

**The One Blur Rule.** Backdrop-filter blur is used exclusively on the scrolled navbar (`blur(14px)` at `rgba(8,8,15,0.85)`). It is the one surface where content scrolls underneath a floating element. Any additional blur panels are glassmorphism by default and are prohibited.

---

## 5. Components

### Buttons

Gently rounded (8px radius / `{rounded.md}`), compact at 0.925rem / 600 weight, designed to sit inline with prose links without dominating.

- **Primary:** Marty Supreme Orange background (#e8641c), Warm Ivory text, 11px / 26px padding. On hover: Char Orange background (#c24e0e), −2px Y lift, Accent Glow shadow. The only button that uses the brand accent as a fill.
- **Ghost:** Elevated Card background (#201c12), Warm Ivory text, 1px Warm Divider border. On hover: accent border color, Faded Amber text, −2px Y lift. Reads as secondary without fading into the background.
- **Focus:** Both variants receive a 2px Marty Supreme Orange outline at 3px offset on `:focus-visible`.

### Chips and Tags

Two distinct chip types. Both use JetBrains Mono per The Mono-as-Metadata Rule.

- **Skill tag** (interactive): Elevated Card background, Faded Amber text, 1px Warm Divider border, 6px radius, 5px / 14px padding. On hover: Warm Divider border → accent border, Faded Amber → Warm Ivory. Communicates a capability.
- **Tech tag** (read-only): Orange-tinted background (`rgba(232,100,28,0.12)`), orange-tinted border (`rgba(232,100,28,0.25)`), Faded Amber text, 4px radius, 3px / 10px padding. No hover state — these are indicators, not controls.

### Cards and Containers

Elevated Card background, 1px Warm Divider border, 12px radius, 28px internal padding. Shadow-free at rest.

On hover: border transitions to Marty Supreme Orange, card lifts −4px on Y-axis, Hover Lift shadow appears. The border transition is the primary signal; the lift is confirmation.

No top-edge gradient stripes, side stripes, or colored top bars on cards. The hover border is sufficient.

### Navigation

- **Default state:** Fully transparent. No background, no border.
- **Scrolled state:** Night Field at 85% opacity with 14px backdrop blur, 1px Warm Divider bottom edge. The scroll-triggered reveal is the one structured motion event in the system.
- **Logo badge:** 34px × 34px Marty Supreme Orange square (8px radius), white "BH" initials at 700 weight. The only place the accent color fills a background element that isn't a primary CTA.
- **Nav links at rest:** Warm Ash text, no background. On hover: Warm Ivory text, Elevated Card background.
- **CTA link:** Faded Amber text, Warm Divider border. On hover: Warm Ivory text, Marty Supreme Orange fill, accent border.

### Avatar / Identity Badge

The About section's circular avatar uses a near-black card background with a subtle accent ring (1px Marty Supreme Orange at 35% opacity). The initials inside the avatar are currently rendered as gradient text — this violates The No-Gradient-Text Rule (see Do's and Don'ts) and should be replaced with a solid Marty Supreme Orange fill (now fixed in the current build).

---

## 6. Do's and Don'ts

### Do:

- **Do** use the three-tier tonal stack (Night Field → Raised Surface → Elevated Card) when a new surface needs to feel distinct. The three tiers already exist; use them before inventing a new shade.
- **Do** reserve Marty Supreme Orange for interactive signals: primary buttons, hover borders, active-state labels. Rarity is the mechanism. If unsure whether a use is "signal" or "decoration," it's decoration — remove it.
- **Do** use JetBrains Mono exclusively for metadata: tech tags, skill tags, code snippets, the email address. Switch to Inter the moment a label becomes a sentence.
- **Do** apply the hover pattern consistently: accent border transition + Y lift (−2px for small elements, −4px for cards). The uniformity makes interactions feel like a system, not accidents.
- **Do** add `@media (prefers-reduced-motion: reduce)` alternatives for every animation. Current animations that need it: hero cursor blink, scroll-hint drop, section fade-ins, card hover lifts.
- **Do** ensure body-sized text meets 4.5:1 contrast against its background. Warm Stone (#b8af98) on Night Field is approximately 9:1 — use it for all body-sized secondary text. Warm Ash (#857a68) at 4.7:1 is approved for UI labels and icons but not paragraphs.

### Don't:

- **Don't** use gradient text (`background-clip: text` with a gradient `background`). The hero name and avatar initials previously violated this — both are now fixed with solid colors (Warm Ivory and Marty Supreme Orange respectively). Gradient text is decoration without meaning.
- **Don't** use the generic dark SaaS developer portfolio aesthetic — the one this site currently partially inhabits. Purple-on-charcoal backgrounds, identical card grid sections, floating particles, and eyebrow labels on every heading are the anti-reference. Every new feature should ask: "does this look generated?"
- **Don't** put uppercase tracked mono labels above every section heading. The `.section-label` pattern currently appears on every section (About, Projects, Interests, Future Plans). This is AI-scaffold grammar, not brand voice. One deliberate section kicker can be voice; repeating the same pattern as structural scaffolding on every section is a tell.
- **Don't** use the editorial-magazine aesthetic: italic display serifs, ruled separators, broadsheet column layouts, Fraunces or Cormorant Garamond. This portfolio is built by an engineer, not an art director.
- **Don't** use corporate light grays or near-white backgrounds. This is not a LinkedIn template.
- **Don't** use Warm Ash (#857a68) for body paragraph copy. At 4.7:1 it clears AA but has no margin to spare. Use Warm Stone (#b8af98) for any flowing text — it has 9:1 and reads comfortably at all sizes.
- **Don't** add decorative top-edge gradient stripes to cards. The `plan-card::before` gradient-stripe hover effect is a decorative side-stripe variant; remove it in favor of the standard hover border transition used on project cards.
- **Don't** add backdrop blur to surfaces other than the scrolled navbar. One blur element is structural; a second is glassmorphism.
- **Don't** nest cards inside cards. The card surface is Elevated Card (#201c12), one tier above Raised Surface. There is no fourth tier.
