# Gia Li Portfolio Design System

## Purpose

This portfolio helps recruiters and design leads understand three things quickly: who Gia is, how she thinks, and which projects prove it. The visual direction is an editorial product-design portfolio: calm, precise, research-led, and expressive in a few controlled moments.

The reference balance remains:

- 70% Bryn Taylor: clear information architecture and scannable work index
- 15% Niklas Bubori: large opening typography and image-led transitions
- 10% Pascal Strasche: friendly color, rounded details, and responsive feedback
- 5% Studio Direction: atmosphere reserved for the hero and project transitions

## Principles

1. **Clarity before spectacle.** Recruiters should understand the role, strengths, and strongest work within the first screen and first scroll.
2. **One expressive moment per view.** Use the large name treatment, the moving capability line, or a project-cover transition as the focal motion. Keep surrounding motion restrained.
3. **Structure carries meaning.** Rules, bilingual labels, filters, and hierarchy communicate content relationships; they are not decorative filler.
4. **Evidence stays close to claims.** Project details connect research, decisions, interface outcomes, and available process material.
5. **Every interaction works without hover.** Links and controls remain clear on touch and keyboard, with motion reduced when requested.

## Color

| Token         | Value     | Use                                     |
| ------------- | --------- | --------------------------------------- |
| Canvas        | `#F7F7F4` | Main page background                    |
| Ink           | `#17211E` | Primary text and strong rules           |
| Brand         | `#285743` | Identity, labels, selected emphasis     |
| Brand strong  | `#1F4637` | Primary-button hover fill               |
| Highlight     | `#D5F45A` | Selection and rare high-energy accents  |
| Muted text    | `#5D6861` | Supporting copy and metadata            |
| Line          | `#D6DCD6` | Dividers, borders, inactive controls    |
| Surface       | `#ECEEEA` | Capability cards and grouped content    |
| Surface muted | `#E9EBE7` | Contact area and quiet section contrast |

Project colors may identify individual cases, but they do not replace the portfolio palette. They appear mainly in project imagery, arrow badges, and experience marks.

## Typography

- Family: system sans stack — Arial, PingFang SC, Microsoft YaHei, sans-serif.
- Display: 500–600 weight, tight tracking, fluid sizes using `clamp()`.
- Chinese body: 16–17px with 1.9–1.95 line height for long reading.
- English labels: 12–13px, moderate tracking, used as bilingual wayfinding.
- Body line length: keep long paragraphs near 70–80 characters where layout allows.
- Heading wrapping: use balanced wrapping; body copy uses pretty wrapping.

The uppercase English labels are a deliberate bilingual navigation layer. Use one per section or content group; do not add extra eyebrow labels only for decoration.

## Layout

- Maximum content width: 1440px.
- Desktop gutters: 5.4%; fixed 70px only above 1600px.
- Main section rhythm: 88px on mobile and approximately 132–140px on desktop.
- Primary grid: 1:2 for section title to content.
- Work grid: one featured full-width case followed by a two-column system; one column on mobile.
- About index: sticky heading plus a scannable experience list on desktop; single column on mobile.

```text
Desktop
┌────────────────────────────────────────────────────────┐
│ identity / navigation                                  │
├────────────────────────────────────────────────────────┤
│ role                                                   │
│ GIA LI.                                                │
│ positioning                         primary actions     │
├────────────────────────────────────────────────────────┤
│ moving capability line                                │
├───────────────┬────────────────────────────────────────┤
│ section title │ filters / content                      │
└───────────────┴────────────────────────────────────────┘

Mobile
┌──────────────────────┐
│ compact navigation   │
│ role                 │
│ GIA LI.              │
│ positioning          │
│ actions              │
│ capability line      │
│ section title        │
│ filters              │
│ stacked content      │
└──────────────────────┘
```

## Shape and depth

- Cards and media: 5px radius.
- Small image frames: 4px radius.
- Pills and filters: fully rounded.
- Shadows appear only during an interaction or on lifted media; static content stays flat.
- Dividers use either Ink for major section boundaries or Line for internal separation.

## Components

### Section heading

- Thin Ink rule across the content width.
- English label above Chinese title.
- Chinese title uses the same scale across Work, Capabilities, and About.
- Filters or concise supporting information align to the lower edge on desktop and stack below on mobile.

### Buttons

- Minimum height: 52px for primary calls to action; 44px for compact controls.
- Primary: Brand fill with Brand Strong sliding hover.
- Secondary: transparent with Line border and Surface Hover sliding hover.
- Same rounded shape, weight, arrow treatment, focus ring, and magnetic feedback across pages.
- Button text says what happens: 查看作品、下载简历、查看案例、发送邮件.

### Project cards

- 16:9 media container with project image contained rather than cropped.
- Metadata, title, and short outcome follow the image.
- Pointer depth remains subtle; touch devices receive the static state.
- Hover may lift the image, move the title slightly, and rotate the directional arrow. Do not stack additional effects.

### Filters

- Native buttons with `aria-pressed`.
- At least 44px tall with 8px spacing.
- Selected state uses Ink fill; hover increases contrast.
- The visible count is announced politely to assistive technology.

## Motion

| Token      | Value                       | Use                                 |
| ---------- | --------------------------- | ----------------------------------- |
| Fast       | 180ms                       | Color and compact-control feedback  |
| Medium     | 280ms                       | Button and navigation movement      |
| Slow       | 520ms                       | Card lift and media depth           |
| Ease out   | `cubic-bezier(.22,1,.36,1)` | Most interface motion               |
| Expressive | `cubic-bezier(.16,1,.3,1)`  | Hero masks and project reveals only |

- Animate transform and opacity where possible.
- Every autonomous loop provides a pause control.
- `prefers-reduced-motion: reduce` removes page transitions, reveals, magnetic movement, and marquee motion while keeping all content visible.
- Page entry uses one orchestrated title reveal; avoid adding reveal motion to every small label.

## Accessibility and responsive rules

- Text contrast targets WCAG AA: 4.5:1 for normal text.
- Every link and button has a visible `:focus-visible` ring.
- Interactive targets are at least 44px where practical.
- Images include dimensions and meaningful alternative text; decorative marks remain hidden from assistive technology.
- The skip link remains the first focusable element.
- Validate at 375px, 768px, 1024px, and 1440px without horizontal scrolling.
- Filters and project navigation remain usable with keyboard only.

## Content voice

Use specific, plain Chinese. Describe what was understood, changed, or validated. Keep project labels factual and avoid promotional claims that the case cannot prove. English supports navigation and professional context; Chinese carries the main explanation.

## Implementation source of truth

- Tokens: `app/design-tokens.css`
- Layout and components: `app/globals.css`
- Motion behavior: `app/motion-effects.tsx`
- Homepage content: `app/page.tsx` and `app/work-showcase.tsx`
- About page: `app/about/page.tsx`

When adding a page, use these tokens and patterns first. Add a page-specific override under `pages/` only when the page has a real content need that the master system cannot express.
