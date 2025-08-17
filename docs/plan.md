# Agentic IDE prompt for Bitspark Solutions portfolio (dark-first, ultra-detailed)

Build a premium, animated, parallax-rich portfolio site for Bitspark Solutions using Next.js and Material UI. The site must be dark-first, performance-focused, and visually consistent with the provided “B” logo. Do not include any personal names or resumes. Team section must be role-based. Include integrations for Adyen, Stripe, Unit.co, and SSLCommerz. Target industries: garments, logistics, fintech. Include an Engagement Models section in v1.

---

## Project goals and constraints

- **Primary goals:** 
  - **Credibility:** Demonstrate enterprise-grade capability in ERP, CRM, e-commerce, and banking/payments.
  - **Conversion:** Drive demo requests and qualified leads via clear CTAs.
  - **Distinctiveness:** Dynamic motion design, geometric patterns, and tasteful 3D moments.
- **Hard constraints:** 
  - **No personal names or employer mentions** anywhere.
  - **Role-based team** cards only.
  - **Dark-first** theme by default with light-mode toggle.
  - **Animation everywhere** (parallax on most sections; include 2–3 3D scenes with fallbacks).
  - **Accessibility:** Respect prefers-reduced-motion; AA color contrast; keyboard navigable.

---

## Tech stack and dependencies

- **Framework:** Next.js 14+ (App Router) + TypeScript
- **UI:** Material UI v5 (SX system, theme, components)
- **Animation:** Framer Motion (variants, useScroll, ScrollProgress), react-scroll-parallax (optional)
- **3D:** react-three-fiber + drei (dynamic import; fallbacks for reduced motion)
- **Assets:** Lottie for vector micro-animations (optional)
- **Data:** JSON/MDX content directory; SWR for client reads if needed
- **Forms/validation:** Next.js API routes + Zod; reCAPTCHA (invisible)
- **SEO:** next-seo, next-sitemap; Open Graph images per page
- **Testing:** Jest, React Testing Library, Playwright

---

## Brand system and theme

- **Logo usage:** 
  - **Placement:** Navbar left, footer, favicon, and OG images.
  - **Safe area:** 16px padding around logo in navbar; maintain minimum size 28px height.
  - **Monochrome variant:** Provide white and grayscale logo for dark backgrounds.
- **Color palette (dark-first):**
  - **Primary base:** Midnight Indigo #2E2A5E
  - **Primary accent:** Electric Blue #3DA9FC
  - **Secondary accent:** Sea Teal #2CB9B0
  - **CTA/accent:** Coral Pop #FF7A59
  - **Background default:** #0B0F1A
  - **Background paper:** #11162A
  - **Text primary:** #F6F7FB
  - **Text secondary:** #C6CBDF
  - **Borders/dividers:** #21263A
- **Typography:**
  - **Headings:** Sora, 600–700 weight
  - **Body:** Inter, 400–500
  - **Mono:** JetBrains Mono for small technical flourishes
  - **H1/H2 rhythm:** H1 56/64 desktop, 36/44 mobile; H2 40/48 desktop, 28/36 mobile
- **Tokens:**
  - **Radius:** 12px default, 20px for feature cards
  - **Shadows:** Elevations e1–e5 tuned for dark; use transparent shadows with brand hues
  - **Spacing scale:** 4px grid; section vertical rhythm 96–128px desktop, 64–96px mobile
- **Motif:** Angular geometric patterns echoing the logo: diagonals, triangles, grids, spark particles.

---

## Information architecture (14 sections)

Each section includes goal, content, motion, 3D (if any), and JSON schema.

### 1. Hero — Intelligent systems for garments, logistics, and fintech
- **Goal:** Immediate value prop, brand impression, and CTAs.
- **Content:** 
  - **Title:** “Build, scale, and integrate your core systems.”
  - **Subtitle:** “ERP, CRM, e‑commerce, and banking solutions with deep payments integrations.”
  - **CTAs:** Book a demo (primary), Explore solutions (secondary)
  - **Badges:** Security-first, SLA-backed, Event-driven
- **Motion:** Multi-layer parallax background; staggered text reveal; CTA ripple
- **3D:** react-three-fiber “spark network” with glowing nodes and slow orbit; pause on hover; reduce on low power
- **JSON:**
  ```json
  {
    "title": "Build, scale, and integrate your core systems.",
    "subtitle": "ERP, CRM, e‑commerce, and banking solutions with deep payments integrations.",
    "ctas": [
      { "label": "Book a demo", "href": "/contact", "variant": "contained" },
      { "label": "Explore solutions", "href": "/solutions", "variant": "outlined" }
    ],
    "badges": ["Security-first", "SLA-backed", "Event-driven"],
    "backgroundLayers": [
      { "shape": "triangle", "color": "#2E2A5E", "depth": 0.2 },
      { "shape": "grid", "color": "#21263A", "depth": 0.4 }
    ]
  }
  ```

### 2. Industries we serve — Garments, logistics, fintech
- **Goal:** Map solutions to vertical outcomes.
- **Content:** Three panels with icons, pain points, outcomes, CTA to case studies.
- **Motion:** Staggered card entry; parallax diagonals
- **JSON:**
  ```json
  {
    "industries": [
      {
        "name": "Garments",
        "icon": "/icons/garments.svg",
        "description": "Plan, produce, and fulfill with real-time visibility across suppliers and channels.",
        "benefits": ["Inventory precision", "Omnichannel sync", "Compliance automation"],
        "cta": { "label": "See garment solutions", "href": "/solutions#garments" }
      },
      {
        "name": "Logistics",
        "icon": "/icons/logistics.svg",
        "description": "Track, route, and bill with data-driven logistics and warehouse orchestration.",
        "benefits": ["Fleet visibility", "Route optimization", "Integrated billing"],
        "cta": { "label": "See logistics solutions", "href": "/solutions#logistics" }
      },
      {
        "name": "Fintech",
        "icon": "/icons/fintech.svg",
        "description": "Secure banking and payments experiences with global and local rails.",
        "benefits": ["PCI-aligned", "Instant settlement", "Risk analytics"],
        "cta": { "label": "See fintech solutions", "href": "/solutions#fintech" }
      }
    ]
  }
  ```

### 3. Core solutions — ERP, CRM, e‑commerce, banking
- **Goal:** Clarify productized capabilities.
- **Content:** Four solution cards with problem → capability → outcome bullets; deep links.
- **Motion:** Staggered slide-in; hover elevate with micro-tilt
- **JSON:**
  ```json
  {
    "solutions": [
      {
        "title": "ERP",
        "description": "Plan, procure, produce, and account with modular control.",
        "bullets": ["MRP & BOM", "Financials", "Supplier portals"],
        "href": "/solutions#erp"
      },
      {
        "title": "CRM",
        "description": "Unified pipeline, service desk, and customer 360.",
        "bullets": ["Lead-to-cash", "Journey automation", "Support SLAs"],
        "href": "/solutions#crm"
      },
      {
        "title": "E‑commerce",
        "description": "Headless storefronts and OMS built for scale.",
        "bullets": ["Catalog & pricing", "OMS & returns", "A/B experiments"],
        "href": "/solutions#ecommerce"
      },
      {
        "title": "Banking & Payments",
        "description": "Cards, accounts, payouts, and risk controls.",
        "bullets": ["KYC/KYB flows", "Ledgering", "Payouts & disputes"],
        "href": "/solutions#banking"
      }
    ]
  }
  ```

### 4. Integrations hub — Adyen, Stripe, Unit.co, SSLCommerz
- **Goal:** Show depth in payment/banking rails.
- **Content:** Capsules for each provider with supported features and compliance notes.
- **Motion:** Floating parallax; hover expand; 
- **3D:** Rotating ring of integration logos; tap/hover centers detail
- **JSON:**
  ```json
  {
    "integrations": [
      { "name": "Adyen", "logo": "/logos/adyen.svg", "features": ["Unified payments", "Risk", "Tokenization"], "compliance": ["PSD2", "SCA"], "href": "/solutions#payments" },
      { "name": "Stripe", "logo": "/logos/stripe.svg", "features": ["Billing", "Connect", "Payment Links"], "compliance": ["PCI-DSS"], "href": "/solutions#payments" },
      { "name": "Unit.co", "logo": "/logos/unit.svg", "features": ["Accounts", "Cards", "KYC/KYB"], "compliance": ["AML/KYC"], "href": "/solutions#banking" },
      { "name": "SSLCommerz", "logo": "/logos/sslcommerz.svg", "features": ["Local rails", "Installments"], "compliance": ["Local regulations"], "href": "/solutions#payments" }
    ]
  }
  ```

### 5. Case studies — Outcomes by vertical (anonymized)
- **Goal:** Prove impact without client names.
- **Content:** 3–6 cases; each with context, solution, metrics.
- **Motion:** Horizontal scroll with momentum; card tilt on hover
- **JSON:**
  ```json
  {
    "cases": [
      {
        "industry": "Garments",
        "summary": "Unified inventory and order orchestration across 4 regions.",
        "challenges": ["Stockouts", "Manual transfers", "Delayed reporting"],
        "solution": ["ERP integration", "Realtime OMS", "Supplier EDI"],
        "results": [{ "metric": "Order latency", "value": "-38%" }, { "metric": "Inventory accuracy", "value": "99.2%" }]
      },
      {
        "industry": "Logistics",
        "summary": "Optimized fleet routing and warehouse picking.",
        "challenges": ["Idle miles", "Late deliveries"],
        "solution": ["Route optimization", "Pick-path planning"],
        "results": [{ "metric": "Cost/route", "value": "-21%" }, { "metric": "OTD", "value": "+13%" }]
      },
      {
        "industry": "Fintech",
        "summary": "Launched card issuing with risk analytics.",
        "challenges": ["Chargebacks", "Onboarding friction"],
        "solution": ["KYC/KYB workflow", "Risk scoring", "Ledgering"],
        "results": [{ "metric": "Approval rate", "value": "+9%" }, { "metric": "Chargeback rate", "value": "-27%" }]
      }
    ]
  }
  ```

### 6. Platform capabilities — Modular architecture
- **Goal:** Explain how systems scale and integrate.
- **Content:** Diagram: ingestion → services → integrations → analytics; SLAs, SLOs, observability, IaC.
- **Motion:** Stepwise reveal of diagram nodes on scroll; animated connectors
- **3D:** Optional: low-poly “service mesh” with node highlights
- **JSON:**
  ```json
  {
    "modules": [
      { "name": "Ingestion", "description": "APIs, webhooks, ETL, CDC" },
      { "name": "Services", "description": "Domain-driven microservices" },
      { "name": "Integrations", "description": "Payments, banking, ERP/CRM" },
      { "name": "Analytics", "description": "Dashboards, events, ML hooks" }
    ],
    "guarantees": [
      { "label": "SLA-backed uptime" },
      { "label": "Autoscaling" },
      { "label": "Observability" },
      { "label": "IaC & GitOps" }
    ]
  }
  ```

### 7. Security and compliance — Trust by design
- **Goal:** Address risk and governance.
- **Content:** Zero-trust, encryption at rest/in transit, secrets management, audit logging, incident response, data residency, least privilege.
- **Motion:** Shield morph Lottie; checkmarks animate inline
- **JSON:**
  ```json
  {
    "practices": [
      { "title": "Zero trust", "copy": "Identity-first access controls across environments." },
      { "title": "Encryption", "copy": "TLS in transit, AES-256 at rest." },
      { "title": "Secrets", "copy": "Rotated, scoped, and audited." },
      { "title": "Audit", "copy": "Immutable logs and anomaly alerts." }
    ],
    "certifications": ["SLA-backed", "Security review ready"],
    "policies": [{ "label": "Privacy", "href": "/privacy" }, { "label": "Terms", "href": "/terms" }]
  }
  ```

### 8. Process — From discovery to operate
- **Goal:** Set execution expectations.
- **Content:** 6 steps: Discover, Define, Design, Build, Integrate, Operate (with artifacts per step)
- **Motion:** Animated timeline; progress indicator bound to scroll
- **JSON:**
  ```json
  {
    "steps": [
      { "title": "Discover", "description": "Stakeholder goals, systems map.", "artifactExample": "Brief & roadmap" },
      { "title": "Define", "description": "Requirements & risk plan.", "artifactExample": "Specs & RACI" },
      { "title": "Design", "description": "Architecture & UX flows.", "artifactExample": "Diagrams & wireframes" },
      { "title": "Build", "description": "Iterative sprints & CI/CD.", "artifactExample": "Release notes" },
      { "title": "Integrate", "description": "Payment rails & partners.", "artifactExample": "Sandbox tests" },
      { "title": "Operate", "description": "SLOs, monitoring, support.", "artifactExample": "Runbooks" }
    ]
  }
  ```

### 9. Tech stack and tooling
- **Goal:** Signal engineering depth.
- **Content:** Grid of tools with blurbs: Next.js, Node/Nest, .NET, Go, Kafka/RabbitMQ, SQL/NoSQL, Docker/K8s, AWS, IaC, Datadog.
- **Motion:** Staggered reveal; hover detail overlay
- **JSON:**
  ```json
  {
    "tools": [
      { "name": "Next.js", "logo": "/logos/next.svg", "description": "App Router, RSC, edge-ready", "categories": ["Frontend"] },
      { "name": "NestJS", "logo": "/logos/nest.svg", "description": "Structured Node services", "categories": ["Backend"] },
      { "name": ".NET", "logo": "/logos/dotnet.svg", "description": "High-performance APIs", "categories": ["Backend"] },
      { "name": "Go", "logo": "/logos/go.svg", "description": "Concurrency-first services", "categories": ["Backend"] },
      { "name": "Kafka", "logo": "/logos/kafka.svg", "description": "Event streaming", "categories": ["Messaging"] },
      { "name": "RabbitMQ", "logo": "/logos/rabbitmq.svg", "description": "Task queues", "categories": ["Messaging"] },
      { "name": "Postgres", "logo": "/logos/postgres.svg", "description": "Relational core", "categories": ["Database"] },
      { "name": "MongoDB", "logo": "/logos/mongo.svg", "description": "Document store", "categories": ["Database"] },
      { "name": "Docker & K8s", "logo": "/logos/k8s.svg", "description": "Portable deployments", "categories": ["DevOps"] },
      { "name": "AWS", "logo": "/logos/aws.svg", "description": "Scalable infrastructure", "categories": ["Cloud"] },
      { "name": "IaC", "logo": "/logos/iac.svg", "description": "Terraform & GitOps", "categories": ["DevOps"] },
      { "name": "Datadog", "logo": "/logos/datadog.svg", "description": "Observability", "categories": ["Monitoring"] }
    ]
  }
  ```

### 10. Team — Role-based profiles
- **Goal:** Humanize without personal histories.
- **Content:** 6–8 role cards: Solutions Architect, Platform Engineer, Frontend Engineer, Backend Engineer, QA Lead, DevOps, Data Engineer, Product Designer; values
- **Motion:** Floating cards; avatar masks animate on hover
- **JSON:**
  ```json
  {
    "values": ["Ownership", "Clarity", "Security by default", "Measured delivery"],
    "team": [
      { "roleTitle": "Solutions Architect", "shortBio": "Designs systems from first principles.", "areasOfFocus": ["Architecture", "Integrations"], "avatarSrc": "/avatars/sa-1.png" },
      { "roleTitle": "Platform Engineer", "shortBio": "Builds resilient, observable platforms.", "areasOfFocus": ["SRE", "K8s"], "avatarSrc": "/avatars/pe-1.png" },
      { "roleTitle": "Backend Engineer", "shortBio": "Services that scale with confidence.", "areasOfFocus": ["APIs", "Data"], "avatarSrc": "/avatars/be-1.png" },
      { "roleTitle": "Frontend Engineer", "shortBio": "Delightful, accessible interfaces.", "areasOfFocus": ["Next.js", "MUI"], "avatarSrc": "/avatars/fe-1.png" },
      { "roleTitle": "QA Lead", "shortBio": "Quality as a culture, not a phase.", "areasOfFocus": ["Automation", "E2E"], "avatarSrc": "/avatars/qa-1.png" },
      { "roleTitle": "DevOps Engineer", "shortBio": "Deployments you barely notice.", "areasOfFocus": ["CI/CD", "Security"], "avatarSrc": "/avatars/devops-1.png" }
    ]
  }
  ```

### 11. Testimonials — Anonymized quotes
- **Goal:** Build trust via outcomes.
- **Content:** Carousel of quotes with role/industry and rating.
- **Motion:** Autoplay with physics easing; pause on hover
- **JSON:**
  ```json
  {
    "testimonials": [
      { "quote": "Delivery quality was consistently high with measurable impact.", "role": "COO", "industry": "Garments", "rating": 5 },
      { "quote": "Integration timeline beat our estimates; risk stayed low.", "role": "CTO", "industry": "Fintech", "rating": 5 },
      { "quote": "Observability gave us confidence during peak.", "role": "Head of Ops", "industry": "Logistics", "rating": 4 }
    ]
  }
  ```

### 12. Insights and resources
- **Goal:** Thought leadership and SEO.
- **Content:** Filterable blog/resource cards; whitepaper CTA.
- **Motion:** Scale-in on viewport; background particles drift
- **JSON:**
  ```json
  {
    "posts": [
      { "title": "Designing event-driven ERPs", "excerpt": "When to stream, when to batch.", "date": "2025-01-15", "tags": ["ERP","Events"], "slug": "event-driven-erp", "coverSrc": "/covers/erp.jpg" },
      { "title": "Payments orchestration playbook", "excerpt": "Going global with control.", "date": "2025-02-02", "tags": ["Payments","Fintech"], "slug": "payments-orchestration", "coverSrc": "/covers/pay.jpg" }
    ],
    "whitepaper": { "title": "Scaling core systems", "href": "/insights/scaling-core-systems" }
  }
  ```

### 13. Engagement models — How we work
- **Goal:** Clarify pricing models and expectations.
- **Content:** Three cards: Fixed Scope, Time & Materials, Retainer; comparison table with attributes.
- **Motion:** Toggle-controlled animations; highlight on hover
- **JSON:**
  ```json
  {
    "models": [
      { "name": "Fixed Scope", "bestFor": ["Well-defined requirements"], "includes": ["Milestone-based plan","Fixed deliverables"], "billing": "Fixed-price", "cta": { "label": "Request estimate", "href": "/contact?type=fixed" } },
      { "name": "Time & Materials", "bestFor": ["Evolving requirements"], "includes": ["Weekly sprints","Transparent timesheets"], "billing": "Hourly/day rate", "cta": { "label": "Discuss T&M", "href": "/contact?type=tm" } },
      { "name": "Retainer", "bestFor": ["Long-term roadmap"], "includes": ["Reserved capacity","Continuous delivery"], "billing": "Monthly retainer", "cta": { "label": "Start retainer", "href": "/contact?type=retainer" } }
    ],
    "compare": [
      { "attribute": "Scope flexibility", "fixed": "Low", "tm": "High", "retainer": "High" },
      { "attribute": "Budget predictability", "fixed": "High", "tm": "Medium", "retainer": "High" },
      { "attribute": "Time to start", "fixed": "Medium", "tm": "Fast", "retainer": "Fast" }
    ]
  }
  ```

### 14. Contact, demo, and newsletter
- **Goal:** Convert interest into action.
- **Content:** Contact form (name, email, company, message type, message), meeting scheduler link, newsletter signup.
- **Motion:** Focus glow on inputs; success confetti burst
- **JSON:**
  ```json
  {
    "contactForm": {
      "heading": "Let’s build what’s next",
      "fields": [
        { "name": "name", "label": "Full name", "type": "text", "required": true },
        { "name": "email", "label": "Work email", "type": "email", "required": true },
        { "name": "company", "label": "Company", "type": "text", "required": true },
        { "name": "topic", "label": "Project type", "type": "select", "options": ["ERP","CRM","E‑commerce","Banking/Payments"], "required": true },
        { "name": "message", "label": "How can we help?", "type": "textarea", "required": true }
      ],
      "privacyNote": "We’ll only use your info to respond to your inquiry.",
      "recaptcha": true
    },
    "channels": [
      { "label": "Email", "href": "mailto:hello@bitspark.solutions", "icon": "email" },
      { "label": "Schedule a demo", "href": "/contact#schedule", "icon": "calendar" }
    ],
    "newsletter": { "heading": "Stay in the loop", "copy": "Insights on systems at scale." }
  }
  ```

---

## Global motion and parallax specs

- **Parallax layers:** 
  - **Background:** depth 0.15–0.3 (slow drift shapes and grids)
  - **Midground:** depth 0.4–0.6 (particles, accents)
  - **Foreground:** depth 0.7–1.0 (UI elements slight offset)
- **Framer Motion defaults:** 
  - **Entrance:** opacity 0→1, y 24→0, duration 0.6, ease [0.22, 1, 0.36, 1]
  - **Hover:** scale 1→1.02, boxShadow elevation +1, spring { stiffness: 220, damping: 22 }
  - **Stagger:** parent delayChildren 0.1, staggerChildren 0.06
- **Reduced motion:** 
  - **Disable 3D and parallax;** replace with static SVG backgrounds and minimal fades.
  - **Respect prefers-reduced-motion** via CSS and conditional rendering.

---

## 3D scenes and performance

- **Scenes (3):** 
  - **Hero Spark Network:** 500–800 nodes, edges thresholded; low-poly; bloom subtle.
  - **Integrations Ring:** Torus ring with logo planes; rotation 0.02 rad/s; focus-on-hover.
  - **Platform Mesh:** Node graph highlighting active module on scroll.
- **Optimization:** 
  - **Dynamic import** 3D components; **suspend when offscreen**; DPR clamp 1.25; triangles < 60k; requestAnimationFrame throttling when tab hidden.

---

## Component structure and file layout

- **App structure:**
  - **app/(site)/page.tsx** — Home assembling 14 sections
  - **app/solutions/page.tsx** — Deep-dive into ERP/CRM/e‑commerce/banking
  - **app/case-studies/[slug]/page.tsx** — Case study details
  - **app/insights/[slug]/page.tsx** — Blog article page
  - **app/careers/page.tsx** — Optional route (not a home section)
  - **app/contact/page.tsx** — Full contact page
  - **app/api/contact/route.ts** — Form handler
  - **components/sections/** — One component per section (Hero.tsx, Industries.tsx, etc.)
  - **components/ui/** — MUI wrappers (MotionBox, ParallaxLayer, SectionHeading, CTAGroup)
  - **components/3d/** — SparkNetwork.tsx, IntegrationsRing.tsx, PlatformMesh.tsx
  - **content/** — JSON for each section
  - **styles/theme.ts** — MUI theme with dark/light
  - **lib/seo.ts, lib/validation.ts, lib/analytics.ts**
- **MUI theme specifics:**
  - **palette.primary.main:** #3DA9FC; **secondary.main:** #2CB9B0; **error.main:** #FF7A59
  - **background.default:** #0B0F1A; **paper:** #11162A
  - **text.primary:** #F6F7FB; **text.secondary:** #C6CBDF
  - **components:** 
    - **MuiButton:** default elevation 0, rounded 12px, focus ring 2px Electric Blue
    - **MuiCard:** variant “elevated” with gradient borders on hover
    - **MuiAppBar:** translucent with blur; hides on scroll down, shows on up
    - **MuiLink:** underline on focus only; animated color shift on hover

---

## Navigation, footer, and CTAs

- **Navbar:** Logo left; links: Solutions, Case Studies, Insights, Engagement, Contact; Theme toggle; Sticky; collapse to Drawer on mobile.
- **Footer:** Logo, short mission copy, quick links, email contact, newsletter form, legal links; subtle particle background.
- **CTA cadence:** 
  - **Primary:** “Book a demo”
  - **Secondary:** “Talk to engineering”, “Explore solutions”
  - **Placement:** Hero, end of sections 2, 4, 6, 8, 13, and final contact.

---

## Content rules and editorial guidelines

- **Voice:** Confident, technically credible, benefit-focused.
- **Structure per card:** Headline ≤ 8 words; body 1–2 sentences; 3 bullet benefits max.
- **Metrics:** Prefer percentage deltas and measurable outcomes; keep anonymized.
- **Prohibited:** Any personal names or employers; keep team role-based.

---

## Forms, validation, and security

- **Zod schema:**
  ```ts
  const ContactSchema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    company: z.string().min(2).max(120),
    topic: z.enum(["ERP","CRM","E‑commerce","Banking/Payments"]),
    message: z.string().min(20).max(1500),
    token: z.string().optional()
  });
  ```
- **API handler outline (POST /api/contact):**
  - **Validate** with Zod
  - **Rate-limit** by IP (e.g., 5/min)
  - **Verify** reCAPTCHA if present
  - **Send** via email provider; store in log (optional)
  - **Respond** JSON { ok: true }
- **Headers/CSP:** 
  - **Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy**
  - **CSP:** default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' (hashes if needed)

---

## SEO and schema

- **next-seo defaults:** Title template “%s | Bitspark Solutions”; default description about ERP/CRM/e‑commerce/banking.
- **OG images:** Per page, with logo and gradient background.
- **Schemas:** 
  - **Organization** with logo and sameAs (placeholders)
  - **WebSite** with search action (optional)
  - **Service** for Solutions pages
  - **BreadcrumbList** on inner pages
- **Sitemap/robots:** Include core routes; disallow API routes.

---

## Accessibility

- **Contrast:** Ensure AA across dark mode.
- **Keyboard:** Visible focus rings; skip-to-content link.
- **ARIA:** Role and label landmarks; alt text for logos; live regions for form success.
- **Reduced motion:** Respect user setting globally.

---

## Performance budgets

- **LCP target:** < 2.5s desktop; < 3.0s mobile
- **Hero payload:** ≤ 180KB gz (excluding fonts); 3D dynamically imported
- **Images:** Next/Image, responsive, AVIF/WEBP; lazy by default; priority for hero assets
- **Fonts:** Subset Sora/Inter; display=swap; ≤ 2 fonts, 4 weights total

---

## Testing and QA

- **Unit:** Render each section; motion fallbacks; theme tokens present.
- **Integration:** Form submission (valid/invalid), navigation, reduced-motion mode.
- **E2E (Playwright):** 
  - **Scroll perf** (no jank > 50ms task)
  - **3D fallback** in reduced motion
  - **SEO** tags presence; OG image metadata
  - **Mobile drawer** accessibility and focus trap

---

## Sample microcopy per section

- **Hero:** “Intelligent systems that scale.” / “From order to settlement, engineered for uptime.”
- **Industries:** “Garments: From fabric to fulfillment, visible.” / “Logistics: Every mile measured.” / “Fintech: Money moves with confidence.”
- **Solutions:** “ERP that adapts to your supply chain.” / “CRM that closes the loop.”
- **Integrations:** “Stripe for marketplaces with Connect.” / “Adyen for unified risk and routing.” / “Unit.co for accounts and cards.” / “SSLCommerz for local rails.”
- **Process:** “Clarity over chaos. Delivery in predictable increments.”
- **Engagement:** “Pick the model that matches your certainty.”

---

## Animation blueprints (Framer Motion)

- **Variants:**
  ```ts
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };
  const tiltHover = {
    hover: { rotateX: -2, rotateY: 2, transition: { type: "spring", stiffness: 220, damping: 22 } }
  };
  ```
- **Scroll mapping:** useScroll + useTransform to map scroll progress → parallax translateY for background layers.
- **Particles:** Canvas-backed layer moves at depth 0.3–0.5 relative to scroll.

---

## Example components and usage

- **MotionBox:** Wrapper around MUI Box with motion props for variants; default fadeUp.
- **ParallaxLayer:** Props { depth, children }; maps depth → translateY on scroll.
- **SectionHeading:** Renders overline, title, subtitle with consistent spacing.
- **CTAGroup:** Primary and secondary buttons with consistent sizes.

---

## Example section code stub (Hero)

```tsx
// components/sections/Hero.tsx
"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SparkNetwork = dynamic(() => import("../3d/SparkNetwork"), { ssr: false });

export default function Hero({ data }: { data: HeroData }) {
  return (
    <Box component={motion.section} initial="hidden" animate="show" sx={{ position: "relative", py: { xs: 12, md: 20 }, overflow: "hidden" }}>
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.5 }}>
        <SparkNetwork />
      </Box>
      <Stack spacing={3} sx={{ position: "relative", zIndex: 1, maxWidth: 960, mx: "auto", px: 2, textAlign: "center" }}>
        <Typography variant="h1">{data.title}</Typography>
        <Typography variant="h5" color="text.secondary">{data.subtitle}</Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          {data.ctas.map((c) => (
            <Button key={c.label} href={c.href} variant={c.variant as any} size="large">{c.label}</Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          {data.badges.map((b) => (
            <Box key={b} sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: "primary.main", color: "background.default" }}>{b}</Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
```

---

## Content directory scaffolding

- **content/home/hero.json**
- **content/home/industries.json**
- **content/home/solutions.json**
- **content/home/integrations.json**
- **content/home/case-studies.json**
- **content/home/platform.json**
- **content/home/security.json**
- **content/home/process.json**
- **content/home/stack.json**
- **content/home/team.json**
- **content/home/testimonials.json**
- **content/home/insights.json**
- **content/home/engagement.json**
- **content/home/contact.json**

---

## Analytics and privacy

- **Analytics:** Lightweight (e.g., simple pageview + CTA click tracking); defer scripts.
- **Consent:** Banner for cookies only if non-essential cookies are added later; keep v1 minimal.

---

## Deliverables and acceptance criteria

- **Complete 14 sections** with dark-first theme and consistent animations.
- **3D scenes implemented** with fallbacks for reduced motion.
- **Performance targets met:** Lighthouse ≥ 90 on desktop for Performance/SEO/Best Practices.
- **AA accessibility:** Keyboard nav, focus states, alt text, reduced-motion.
- **No personal references:** Team is role-based only.
- **Docs:** README for theme tokens, content schemas, and how to edit JSON.

---

## Final build tasks for the agent

1. **Scaffold Next.js 14 TS project** with MUI, Framer Motion, react-three-fiber/drei, next-seo, next-sitemap.
2. **Implement dark-first theme** with palette and typography above; add light toggle.
3. **Create MotionBox, ParallaxLayer, SectionHeading, CTAGroup** primitives.
4. **Build 3D components** (SparkNetwork, IntegrationsRing, PlatformMesh) with performance constraints.
5. **Implement all 14 sections** as data-driven components reading from content JSON.
6. **Wire contact API** with Zod validation, rate limiting, and reCAPTCHA verify.
7. **Add SEO config** with per-route titles/descriptions/OG; sitemap and robots.
8. **Test** unit/integration/E2E with reduced-motion and mobile drawer coverage.
9. **Document** content update workflow and theming in README.

---

If you want, I’ll generate all 14 JSON files pre-populated with polished copy tailored to garments, logistics, and fintech, plus a starter MUI theme.ts. Do you want that scaffold next?