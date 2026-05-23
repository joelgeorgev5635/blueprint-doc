# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 1. Project Vision

BlueprintDoc is a premium medical education platform that closes the gap between graduating medical school and functioning as a competent FY1/junior doctor on day one.

The product is not a textbook. It is not a revision app. It is an operational survival system — the internal knowledge layer that experienced residents carry in their head, made accessible to every final-year student.

Every decision — product, engineering, visual, content — is evaluated against this question: **does this make a new resident doctor more capable and less overwhelmed on their first ward shift?**

The business model is SaaS: tiered subscriptions, premium content, AI-powered tools. The quality bar is Stripe Docs meets a clinical decision support system.

---

## 2. Product Philosophy

- **Practical over theoretical.** Every piece of content must reflect real ward situations, not textbook ideals.
- **Systems thinking.** The product teaches workflows, mental models, and decision trees — not isolated facts.
- **Calm under pressure.** The UI, content tone, and information architecture must reduce cognitive load, not add to it.
- **Depth without noise.** Premium means fewer, better things — not more features, more tabs, more alerts.
- **Trust is the product.** Medical students will rely on this at 3am. Every recommendation must be defensible, accurate, and clearly scoped.

---

## 3. Brand Principles

| Principle | Meaning |
|---|---|
| Blueprint | Structured, precise, architectural — clinical thinking made visual |
| Calm intelligence | The product never shouts; it guides |
| Premium minimalism | Less visible = more considered |
| Earned trust | No hype, no clickbait, no overstatement |
| Practitioner-made | Tone reflects clinical credibility, not marketing |

The name "Blueprint" is literal. The design language borrows from technical drawing: grids, precision, negative space, ruled lines. Not sterile hospital design — engineered design.

Never use: red crosses, stethoscopes, cartoon anatomy, generic medical stock imagery, pill icons, heartbeat lines as decoration.

---

## 4. UX Philosophy

**Principle: lowest path to utility.**

A user opening BlueprintDoc at 6am pre-ward-round should reach the information they need in two taps or fewer. Every page is optimized for that constraint.

- Navigation must be predictable, not creative.
- Search is the primary navigation for power users.
- Hierarchy is communicated through whitespace, not borders.
- Dense content is broken into scannable chunks with clear anchors.
- No interstitials. No forced onboarding flows that can't be skipped.
- Empty states are purposeful — they guide action, not show clipart.
- Progressive disclosure: surface essentials first, detail on demand.

Mobile is not a "mobile version". It is the primary surface for a user on a ward. Every component is designed for one hand, on a phone, standing up.

---

## 5. UI Design Standards

Design references: Linear, Notion, Vercel Dashboard, Stripe Docs, Raycast.

**Do:**
- Use consistent 4px/8px spatial grid throughout
- Achieve depth through subtle shadows and background contrast, not borders
- Use hover states that feel instant (`transition-colors duration-150`)
- Apply micro-interactions only where they communicate state change
- Make interactive targets minimum 44px on mobile
- Use full-bleed layouts on mobile, max-width containers on desktop
- Maintain visual rhythm: heading → description → action → content

**Don't:**
- Use gradients as decoration (only for brand accents, sparingly)
- Add borders to everything — use background color contrast instead
- Build modals when a drawer or inline expansion will do
- Animate on every render
- Use card shadows heavier than `shadow-sm` in content areas
- Mix spacing scales — stick to Tailwind's default scale

---

## 6. Typography System

Font stack: `Inter` (UI), `JetBrains Mono` (code/clinical values/doses).

```
Heading 1:  text-3xl font-semibold tracking-tight
Heading 2:  text-2xl font-semibold tracking-tight
Heading 3:  text-xl font-medium
Heading 4:  text-base font-medium
Body:       text-sm leading-relaxed text-foreground
Muted:      text-sm text-muted-foreground
Label:      text-xs font-medium uppercase tracking-wider text-muted-foreground
Code/dose:  font-mono text-sm
```

- Line length: max 68ch for body copy.
- Clinical values (drug doses, lab thresholds) always render in `font-mono` — visual distinction matters for accuracy.
- Never use `font-bold` for body text. Use weight hierarchy sparingly.
- Heading tracking: `-0.02em` on large headings only.

---

## 7. Color System

Defined in `tailwind.config.ts` via CSS custom properties. Never hardcode hex values in components.

```
Primary:        hsl(var(--primary))          — Blueprint blue
Background:     hsl(var(--background))       — Near-white / dark-mode near-black
Foreground:     hsl(var(--foreground))       — Primary text
Muted:          hsl(var(--muted))            — Section backgrounds, chips
Muted-fg:       hsl(var(--muted-foreground)) — Secondary text
Border:         hsl(var(--border))           — Subtle dividers
Accent:         hsl(var(--accent))           — Interactive highlights
Destructive:    hsl(var(--destructive))      — Errors, warnings
```

Blueprint blue sits around `hsl(213, 94%, 45%)` in light mode. Clinical urgency signals (red/amber) are used exclusively for actual clinical urgency communication — never for decorative emphasis.

Dark mode is required from day one. Use `dark:` variants. Test all surfaces in both modes before shipping.

---

## 8. Component Design Rules

Components live in `src/components/`. Shared primitives in `src/components/ui/` (shadcn base). Feature-specific in `src/components/[feature]/`.

**Rules:**
- Every component has a single, clear responsibility.
- Props are typed with explicit interfaces — no `any`, no `object`.
- Components do not fetch data. Data fetching belongs in server components or custom hooks.
- Default exports for page components. Named exports for everything else.
- Composition over configuration: prefer `children` and slot patterns over a prop explosion.
- If a component exceeds 150 lines, it needs decomposition.
- shadcn/ui components are the base layer — extend, don't rebuild.

**Naming:**
```
PascalCase          → all components
use-kebab-case.ts   → hooks
kebab-case.ts       → utilities
SCREAMING_SNAKE     → constants
```

---

## 9. Mobile-First Standards

Mobile is the primary deployment target. Every component must be built mobile-first and validated on a 390px viewport before desktop.

- Use `sm:` breakpoint to enhance for tablet, `lg:` for desktop — never the reverse.
- Touch targets: minimum 44×44px for all interactive elements.
- Bottom navigation on mobile for primary actions (not top nav).
- Avoid horizontal scroll at all costs.
- Drawer pattern replaces modals on mobile (`vaul` via shadcn).
- Sticky elements (headers, CTAs) must not consume more than 10% of viewport height.
- Test with thumb-zone reachability in mind — primary actions bottom-right or centered.

---

## 10. Accessibility Standards

WCAG 2.1 AA is the floor. Keyboard navigation must work on all interactive surfaces.

- All images have meaningful `alt` text. Decorative images use `alt=""`.
- Color is never the sole conveyor of information.
- Contrast ratio: 4.5:1 for body text, 3:1 for large text and UI components.
- Focus rings are visible and styled (never `outline: none` without a custom `ring`).
- All form inputs have associated `<label>` elements.
- ARIA roles added where semantic HTML is insufficient — not as a first resort.
- Clinical warning content uses `role="alert"` where appropriate.

---

## 11. Engineering Principles

1. **Prefer boring technology.** Use established patterns. The product differentiation is content and UX, not clever infrastructure.
2. **Delete more than you write.** Every abstraction has a maintenance cost. Earn it.
3. **Co-locate by feature, not by type.** Logic, types, and components that belong together, live together.
4. **Types are documentation.** Write types that make intent obvious. Avoid generic utility types as a crutch.
5. **Server-first data fetching.** Use React Server Components for data. Reach for client state only when user interaction demands it.
6. **Explicit over implicit.** Prop names, function names, and module names declare their purpose.
7. **Fail loudly in development, gracefully in production.** Assertions and invariant checks in dev; structured error boundaries in prod.
8. **Optimize for the reader.** Code is read 10× more than it is written.

---

## 12. Folder Architecture

```
src/
  app/                    # Next.js App Router — routes only
    (auth)/               # Auth-gated routes
    (marketing)/          # Public marketing routes
    (dashboard)/          # Authenticated app shell
    api/                  # API route handlers
  components/
    ui/                   # shadcn/ui primitives
    layout/               # Shell, nav, sidebar
    content/              # Content rendering components
    dashboard/            # Dashboard-specific components
    [feature]/            # Feature-scoped components
  lib/
    db.ts                 # Prisma client singleton
    auth.ts               # Auth helpers
    stripe.ts             # Stripe client
    ai.ts                 # AI client setup
    utils.ts              # cn() and shared utilities
  hooks/                  # Shared React hooks
  types/                  # Shared TypeScript types
  server/                 # Server-only actions and services
    actions/              # Next.js Server Actions
    services/             # Business logic layer
  content/                # MDX/static content files
  config/                 # App config, feature flags, nav structure
  styles/                 # Global CSS
prisma/
  schema.prisma
  migrations/
public/
  fonts/
  images/
```

Route groups (`(auth)`, `(dashboard)`) share layouts without polluting the URL. Do not create route segments purely for organizational preference.

---

## 13. Naming Conventions

| Pattern | Convention | Example |
|---|---|---|
| Components | PascalCase | `WardRoundCard.tsx` |
| Hooks | camelCase with `use` prefix | `useUserSubscription.ts` |
| Server actions | camelCase verbs | `createReferral.ts` |
| DB models | PascalCase singular | `User`, `ContentModule` |
| API routes | kebab-case nouns | `/api/content-modules` |
| Env vars | SCREAMING_SNAKE | `NEXT_PUBLIC_STRIPE_KEY` |
| CSS variables | kebab-case | `--muted-foreground` |
| Constants | SCREAMING_SNAKE | `MAX_FREE_RESOURCES` |

Avoid abbreviations in names unless they are universal in the medical domain (`FY1`, `BP`, `HR`). `handleSubmit` not `hndlSbmt`. `prescriptionGuide` not `rxGuide`.

---

## 14. State Management Philosophy

State lives as close to where it's used as possible.

**Decision tree:**
1. Can this be a URL param or search param? → Use that.
2. Is this server data that doesn't need optimistic updates? → Server Component + fetch.
3. Is this shared across a small subtree? → `useState` + prop drilling or `useContext`.
4. Is this a form? → `react-hook-form` + `zod`.
5. Is this complex client state with mutations? → `zustand` (single store, feature-sliced).
6. Is this server state with caching needs? → `SWR` or `React Query` — pick one, use it everywhere.

No Redux. No MobX. No client-side global state for data that belongs on the server.

---

## 15. API Design Rules

All external API routes follow REST conventions. Internal data access uses Server Actions.

**Route conventions:**
```
GET    /api/resources              — list
GET    /api/resources/[id]         — single item
POST   /api/resources              — create
PATCH  /api/resources/[id]         — partial update
DELETE /api/resources/[id]         — delete
```

- All responses return `{ data, error, meta }` envelope.
- HTTP status codes are used correctly — `200`, `201`, `400`, `401`, `403`, `404`, `422`, `500`.
- Input validated with `zod` before hitting the database.
- Auth checked before any data access — never after.
- Rate limiting on all AI-powered endpoints.
- Never expose internal IDs — use public-facing slugs or UUIDs where appropriate.

---

## 16. Database Philosophy

Prisma + PostgreSQL. Schema is the source of truth.

- Model names are singular PascalCase (`User`, `ContentModule`, `Subscription`).
- Foreign keys are explicit: `userId`, `moduleId`.
- Soft deletes (`deletedAt DateTime?`) on anything that has audit value.
- Never use `findFirst` where `findUnique` is appropriate.
- Query only the fields you need — use `select` to avoid over-fetching.
- Indexes defined in schema for all FK columns and common query patterns.
- Migrations are never edited after they run in production.
- Seed script in `prisma/seed.ts` — runnable, idempotent.

---

## 17. AI Integration Philosophy

AI features augment the content layer — they do not replace the editorial layer.

**Three sanctioned AI use cases:**
1. **Guideline simplification** — take NICE/BNF/local trust guidelines and render them scannable.
2. **Clinical scenario generation** — create ward-realistic practice cases with structured answers.
3. **Search augmentation** — semantic search over content modules.

AI must never be used to generate clinical recommendations that bypass editorial review. AI output in UI must be labelled. Users must understand they are reading AI-assisted content.

Model routing: use Claude for reasoning-heavy, long-context summarisation; GPT-4o for shorter, structured extractions. Route via a unified `src/lib/ai.ts` client — never instantiate model clients directly in components or routes.

---

## 18. Prompt Engineering Standards

All production prompts live in `src/server/prompts/`. They are version-controlled like code.

Structure:
```ts
export const simplifyGuidelinePrompt = (rawText: string) => `
You are a clinical educator simplifying NHS guidelines for final-year medical students.

Rules:
- Write at the level of a capable FY1 doctor, not a consultant
- Preserve all dose information exactly as written
- Flag any content that requires local trust protocol verification
- Output structured markdown with clear headings
- Do not add information not present in the source

Source:
${rawText}
`
```

**Standards:**
- System prompts define role and constraints explicitly.
- Never inject user-supplied content into a system prompt.
- All prompts include output format specification.
- Clinical prompts always include a "flag for verification" instruction.
- Streaming responses use `ReadableStream` with proper error handling.
- Token limits are set explicitly per prompt use case.

---

## 19. Content Generation Rules

BlueprintDoc content must sound like a senior registrar briefing their FY1, not like a medical textbook or a marketing email.

**Tone targets:**
- Confident, not arrogant
- Thorough, not exhaustive
- Practical, not theoretical
- Direct, not blunt
- Warm, not casual

**Format standards:**
- Clinical decision trees render as actual step structures, not prose paragraphs.
- Drug doses in `monospace`, always with unit.
- Differential lists are ranked by probability in a real ward context.
- Every practical guide ends with "red flags" — when to escalate immediately.
- MDX for rich content modules; plain markdown for reference sheets.

---

## 20. SEO Standards

- All marketing pages (`(marketing)/`) use Next.js `generateMetadata`.
- Each content module has a unique `<title>`, `<description>`, and `<og:image>`.
- Structured data (`JSON-LD`) on content pages for `MedicalWebPage` schema.
- Canonical URLs set on all indexable pages.
- `robots.txt` excludes dashboard and API routes.
- `sitemap.ts` auto-generated from CMS content.
- Core Web Vitals monitored via Vercel Analytics — LCP < 2.5s, CLS < 0.1.

---

## 21. Performance Optimization Rules

- Images: `next/image` everywhere. No `<img>` tags. WebP with appropriate `sizes`.
- Fonts: `next/font` with `display: swap`. No external font CDN calls.
- Bundle: use `@next/bundle-analyzer` — audit before adding any dependency > 50kb.
- Code splitting: dynamic imports for heavy components (rich text editors, chart libraries).
- Server Components by default. Add `"use client"` only when the feature requires browser APIs or interactivity.
- Prefetch critical dashboard routes with `<Link prefetch>`.
- Database: N+1 queries are a bug. Use Prisma `include` carefully; measure with query logging in dev.

---

## 22. Animation Guidelines

Animations communicate state. They are not decoration.

**Sanctioned animations:**
- Page transitions: `opacity` fade, 150ms
- Component mount: subtle `translateY(4px) → 0` + `opacity`, 200ms
- Loading states: skeleton shimmer, not spinners (spinners for async actions only)
- Hover: `transition-colors duration-150` — instant feel
- Accordion/drawer: height/transform transitions, `duration-200 ease-out`

**Forbidden:**
- Entrance animations on static content
- Parallax
- Looping background animations
- Animation on scroll unless it serves navigation context
- `framer-motion` for anything achievable with Tailwind transitions

---

## 23. Error Handling Standards

**Client:**
- React Error Boundaries wrap major route segments.
- Form errors are field-level via `react-hook-form`, not toast-only.
- Network errors trigger a contextual inline error state, not a full-page crash.
- Toast notifications for async action results (`sonner`).

**Server:**
- Server Actions return `{ success: boolean, error?: string, data?: T }`.
- Never expose raw database errors to the client.
- `500` errors are logged with full context; client receives a safe message.
- Zod validation errors are mapped to user-readable field messages.

**Logging:**
- Structured log events: `{ event, userId, metadata, timestamp }`.
- Error boundaries report to observability layer before rendering fallback.

---

## 24. Security Standards

- All user input validated server-side with `zod`, regardless of client validation.
- SQL injection is prevented structurally by Prisma — never use raw queries with user input.
- XSS: sanitize any user-generated content rendered as HTML (`DOMPurify` or equivalent).
- CSRF: Next.js Server Actions have built-in CSRF protection — do not bypass.
- Auth checks: every server action and API route begins with an auth assertion.
- Secrets: all in environment variables, never in source. `.env.local` is gitignored.
- `Content-Security-Policy` header configured in `next.config.ts`.
- Dependencies: `npm audit` in CI. No known-high-severity vulnerabilities ship.

---

## 25. Authentication Architecture

Clerk as the primary auth provider (or Auth.js if self-hosted is required).

```
Public routes:    /  /about  /pricing  /blog/*
Auth routes:      /sign-in  /sign-up
Protected:        /dashboard/*  /api/* (except webhooks)
```

- Session is validated on every protected server component and action.
- User object from auth is the single source of identity — no duplicating auth state in DB.
- `userId` stored on all user-created DB records.
- Webhooks (Stripe, Clerk) validate signature before processing — reject without 401.
- Role-based access (`free`, `pro`, `admin`) stored in user metadata, checked server-side.

---

## 26. Stripe / Payments Philosophy

Stripe is the payments layer. The application layer must remain correct regardless of payment state.

- Subscription status is synced to the DB via webhook, not queried live from Stripe on every request.
- Entitlement checks use the DB record — fast, not subject to Stripe API latency.
- Webhook handler is idempotent — safe to replay events.
- Price IDs and product IDs are in config, not hardcoded.
- Customer portal handles all subscription management — no custom billing UI.
- Free tier limits are enforced server-side. The UI can hint, but the server enforces.

```
Subscription states: active | trialing | past_due | canceled | incomplete
```

---

## 27. Dashboard Architecture

The dashboard shell lives in `src/app/(dashboard)/`. It shares a layout with a persistent sidebar on desktop and bottom navigation on mobile.

**Information architecture:**
```
Home          — prioritized today view (active rotations, recent content)
Guides        — browse all FY1 guides, filterable by specialty
Tools         — ward calculators, escalation frameworks, checklists
AI Tools      — guideline simplifier, scenario generator
Resources     — downloadable PDFs, cheat sheets
Account       — subscription, profile, preferences
```

- Dashboard home is not a vanity metrics page. It surfaces the most relevant content for where the user is in their training timeline.
- Sidebar items have clear iconography (Lucide) + labels — never icon-only at any breakpoint until the user learns the layout.
- Active route is visually clear but not garish.

---

## 28. CMS / Content Architecture

Content has two layers:

**1. Structured content (DB-backed):** modules, guides, resources — metadata, taxonomy, access tiers, search index.

**2. Rich content (MDX files in `src/content/`):** actual written content, rendered via `next-mdx-remote` with custom components.

MDX components available in content files:
```
<ClinicalAlert>    — red flag callouts
<DoseBox>          — drug/dose tables in monospace
<DecisionTree>     — step-based clinical logic
<Checklist>        — interactive ward checklists
<ResourceLink>     — premium download gates
<EscalationBox>    — SBAR/escalation prompt templates
```

Content is versioned in git. Editorial changes go through PR review. AI-generated content drafts are reviewed by a clinician before merge.

---

## 29. Search System Philosophy

Search is a primary navigation surface, not a secondary feature.

- Full-text search powered by PostgreSQL `tsvector` + `tsquery` for MVP.
- Upgrade path: Algolia or Typesense when content volume justifies it.
- Search indexes: title, summary, tags, specialty, content body (weighted in that order).
- Semantic search (embedding-based) for AI tools section only.
- Command palette (`Cmd+K`) as primary keyboard navigation — powered by `cmdk`.
- Search results show: title, specialty tag, content type, premium indicator.
- Zero-result state offers a curated fallback, not a dead end.

---

## 30. Future Scalability Planning

Design decisions that must not be reversed without deliberate migration:

- Prisma schema supports multi-tenancy (`tenantId`) as a nullable field from day one.
- Content module taxonomy is tag-based, not category-tree — easier to extend.
- AI prompt layer is provider-agnostic via `src/lib/ai.ts` — swappable model backend.
- Stripe integration is webhook-driven — works regardless of future product SKU complexity.
- All user-facing text that could require localisation uses string constants (even before i18n is implemented).

Do not over-engineer for scale that doesn't exist yet. These are the specific carve-outs where forward-compatibility has zero implementation cost now but saves major migrations later.

---

## 31. Feature Flag Philosophy

Feature flags via environment variables for simple gates; a lightweight config object in `src/config/flags.ts` for runtime-readable flags.

```ts
// src/config/flags.ts
export const flags = {
  aiScenarioGenerator: process.env.NEXT_PUBLIC_FLAG_AI_SCENARIOS === 'true',
  semanticSearch: process.env.NEXT_PUBLIC_FLAG_SEMANTIC_SEARCH === 'true',
}
```

- No third-party feature flag services until audience scale demands it.
- Flags are checked at the component level, not buried in utilities.
- Dead flags are removed within one sprint of full rollout. No permanent flag debt.

---

## 32. Testing Philosophy

Tests verify behaviour, not implementation.

**Coverage targets:**
- Server actions and service functions: unit tested with mocked DB.
- API route handlers: integration tested against a test database.
- Critical UI flows (auth, paywall, subscription): E2E with Playwright.
- Complex clinical logic (dose calculators, decision trees): unit tested exhaustively.
- UI components: visual regression with Playwright screenshots, not unit tests.

Do not test: trivial getters, shadcn/ui internals, Next.js framework behaviour.

Framework: `vitest` for unit/integration, `@playwright/test` for E2E.

---

## 33. Logging & Observability

- Structured logging via `pino` in server-side code.
- Log levels: `debug` (dev only), `info`, `warn`, `error`.
- Every log event includes `{ userId, requestId, event, metadata }`.
- Error monitoring: Sentry in production. DSN in env vars.
- Performance: Vercel Analytics for Core Web Vitals. Vercel Speed Insights enabled.
- Uptime monitoring: external pinger on `/api/health` endpoint.
- Database query performance: slow query logging enabled in production Postgres.

---

## 34. Deployment Standards

- Production: Vercel. Preview deployments on every PR.
- Environment promotion: `dev` → `preview` → `production`.
- Database migrations run via `prisma migrate deploy` in CI before deployment.
- No manual production deployments. All changes via PR → merge → auto-deploy.
- Environment variables managed in Vercel dashboard — never committed.
- `NEXT_PUBLIC_*` vars audited before every release — no accidental secret exposure.

---

## 35. Git Workflow Standards

```
main          — production
develop       — integration branch
feature/      — new features (feature/ward-round-checklist)
fix/          — bug fixes (fix/prescription-dose-display)
content/      — content additions/edits (content/fy1-cardiology-guide)
chore/        — tooling, deps, config
```

- All commits are conventional: `feat:`, `fix:`, `content:`, `chore:`, `docs:`.
- PRs require passing CI (typecheck + lint + tests) before merge.
- No direct commits to `main`.
- PR descriptions include: what changed, why, how to test, screenshots for UI changes.
- Squash merge into `main` for clean history.

---

## 36. Code Review Philosophy

Reviews enforce correctness and architecture — not style (that's the linter's job).

**Review checklist:**
- Does this introduce an abstraction that will be used fewer than 3 times?
- Does this add a dependency heavier than the problem it solves?
- Is there a simpler way?
- Are auth and validation checks present on every server-side entry point?
- Will this read clearly in 6 months without the PR context?
- Clinical content changes: has a medically-qualified reviewer approved?

Nitpicks are prefixed `nit:` and are non-blocking. Architectural concerns block merge.

---

## 37. Technical Debt Prevention

- "We'll clean this up later" is not a ticket. It is a lie. Either clean it now or accept it as the permanent design.
- Every `// TODO` in source code requires an issue reference: `// TODO(#123): ...`.
- No commented-out code in production branches.
- Dependency upgrades: scheduled monthly. Breaking changes handled as dedicated PRs.
- If a component or utility has more than one `// hack` or `// workaround`, it is rewritten in the next sprint.

---

## 38. Anti-Bloat Engineering Rules

- Before adding a dependency, ask: can this be done in < 20 lines of code? If yes, do that.
- Page bundle > 100kb (gzipped) is a defect, not a feature.
- No UI library other than shadcn/ui and Tailwind. Custom components over importing a new library.
- Avoid `useEffect` for data fetching. That's what Server Components and Server Actions exist for.
- No ORM other than Prisma. No second database client.
- No global state management library until the app provably needs it.
- Remove unused exports, dead routes, and orphaned components on sight.

---

## 39. AI Anti-Slop Content Rules

BlueprintDoc content must not read like it was generated by a model prompted with "write a guide about X for medical students."

**Signs of AI slop — reject on sight:**
- Opening lines that restate the obvious: "Prescribing is an important skill for junior doctors..."
- Numbered lists with 5+ generic bullet points that could apply to any topic
- Vague hedges: "It is important to consider...", "One should always remember..."
- Paragraph-length sentences that say nothing specific
- Headers like "Introduction", "Overview", "Conclusion"
- Balanced arguments where a clear clinical hierarchy exists

**What good content looks like:**
- Starts with the situation, not the subject: "It's 2am and the nurse asks you to chart some analgesia..."
- Uses specific values: "Paracetamol 1g QDS, max 4g/24h — reduce to 500mg QDS if < 50kg"
- Has a clear hierarchy: most important thing first, caveats after
- Contains genuine clinical pearls a textbook would leave out
- Ends with red flags and escalation triggers

---

## 40. Editorial Tone Rules

BlueprintDoc speaks like a brilliant, senior registrar who genuinely wants to help — not like a compliance document, not like a textbook, not like a startup.

**Voice attributes:**
- Authoritative without being condescending
- Warm without being casual
- Specific without being exhausting
- Honest about uncertainty where uncertainty exists

**Tone by content type:**

| Content Type | Tone |
|---|---|
| FY1 survival guides | Direct, slightly warm, practical |
| Drug/dose references | Precise, terse, zero ambiguity |
| Escalation frameworks | Calm, structured, clear |
| Clinical scenarios | Engaging, ward-realistic |
| UI copy | Short, confident, no exclamation marks |
| Error messages | Direct, not apologetic |

---

## 41. Medical Accuracy Standards

- All clinical information references a source: NICE guideline, BNF, local trust protocol (noted as "check local protocol").
- Drug doses cite the BNF edition or accessed date.
- Content that is trust-specific (e.g., local formulary) is explicitly flagged: `⚠️ Check local protocol`.
- No content makes absolute claims in areas of clinical controversy.
- Time-sensitive content (guideline versions, drug formularies) has a review date.
- AI-generated clinical content is reviewed by a clinician with GMC registration before publishing.

---

## 42. Clinical Safety Principles

This is a medical education platform. It is not a clinical decision support system. This distinction must be communicated clearly and consistently.

- Every content page carries a contextual disclaimer: "For education and preparation. Always follow your trust's protocols and escalate appropriately."
- No tool generates patient-specific recommendations.
- Escalation thresholds cite ranges, not single values — clinical context always matters.
- Content never instructs a user to deviate from consultant/senior advice.
- "Ask for help" is always presented as a valid and prioritised option.

---

## 43. Legal / Compliance Considerations

- Platform is classified as educational software, not a medical device (CE/UKCA medical device regulation does not apply at current scope — monitor as AI features expand).
- Privacy: GDPR compliant. Data processing agreement with Vercel, Stripe, Clerk, OpenAI/Anthropic.
- User data stored in EU/UK region where possible.
- Terms of Service and Privacy Policy reviewed by a solicitor before public launch.
- Stripe handles all cardholder data — no PCI scope beyond SAQ A.
- AI tool outputs are not stored against user records without explicit opt-in.
- Medical disclaimer is visible on every content page — not buried in footer.

---

## 44. Future Product Expansion Ideas

Document for roadmap context — not for premature engineering:

- **Rotation-specific packs**: Cardiology, Surgery, Paediatrics, Psychiatry rotations
- **On-call simulator**: AI-generated on-call scenarios with structured feedback
- **Procedure guides**: practical procedural walk-throughs (cannulation, ABG, catheterisation)
- **Referral letter templates**: specialty-specific, editable
- **Bleep simulator**: audio-based on-call practice
- **FY1 community**: peer cohort features, rotation reviews
- **Trust-specific modules**: licensed content tailored to specific NHS trusts
- **Mobile app**: React Native with offline-capable content packs

---

## 45. Internal Developer Rules

- If you're adding a component that won't be used in two or more places, it doesn't need to be in `components/ui/`.
- Run `tsc --noEmit` before raising a PR. Type errors are not PR review feedback — they are pre-commit failures.
- Never `console.log` in production code. Use the logger.
- If you're copying a pattern from somewhere else in the codebase, that pattern should probably be extracted.
- Don't reach for `any`. If the type is genuinely unknown, use `unknown` and narrow it.
- A PR that only adds tests is a good PR.
- If a feature requires changes to more than 5 unrelated files, reconsider the architecture.

---

## 46. What Good Looks Like

**A good page:**
- Loads in under 1.5 seconds on 4G
- Has a clear visual hierarchy within 3 seconds of viewing
- Has no more than one primary action
- Works perfectly on a 390px mobile screen
- Passes WCAG 2.1 AA
- Has been reviewed by at least one non-engineer

**A good component:**
- Has one job
- Has TypeScript types for all props
- Has no direct database or API calls
- Works in isolation in Storybook (or equivalent)
- Has sensible defaults

**A good content module:**
- Has a specific, clinical scenario as its opening
- Contains at least one piece of information a textbook wouldn't include
- Has clear escalation triggers
- Has a review date
- Has been reviewed by a clinician

---

## 47. What We Never Ship

- A page with inconsistent spacing that breaks the 4/8px grid
- A mobile layout with horizontally scrollable content
- A form without accessible labels
- A loading state that shows a blank screen
- An AI-generated clinical recommendation without editorial review
- A dependency added to solve a problem solvable in < 20 lines
- A hard-coded hex colour
- A `console.log` statement
- A `TODO` without an issue reference
- A drug dose without a unit
- A clinical guide without a disclaimer
- An empty state with no action
- A dashboard that makes the user feel behind, overwhelmed, or confused

---

*This document is the engineering and product constitution for BlueprintDoc. It is updated when architectural decisions change — not to record history, but to keep future work coherent.*
