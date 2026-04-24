# SKILL: Premium B2B Landing Page Architecture (Linear/Framer/Apple Style)

**Scope**: Workspace-scoped design and development workflow  
**Purpose**: Build conversion-optimized landing pages for B2B SaaS/Services with premium minimalist aesthetics  
**Complexity**: Full multi-step workflow (design specs → component strategy → implementation)

---

## 1. SKILL OVERVIEW

This skill enables your team to rapidly architect and build high-converting landing pages that blend:
- **Visual luxury** (Dark, minimal, breathing space)
- **Technical credibility** (Code snippets, architecture diagrams)
- **Frictionless conversion** (1-2 step forms, clear CTAs)

Perfect for B2B technology companies targeting enterprises (fintech, mining, logistics, education, SaaS platforms).

---

## 2. STEP-BY-STEP WORKFLOW

### PHASE 1: DESIGN SPECIFICATION & MESSAGING
**Decision Point**: Who is your buyer? (C-Suite, Technical Decision Maker, Finance)

1. **Define Core Message Architecture**
   - Badge (1 line): Position statement (e.g., "✦ ENGINEERING EFFICIENCY")
   - H1 (Massive, geometric): Core value proposition (benefit-driven, 5-7 words max)
   - H2 (Problem → Solution): 2-3 lines explaining problem and your approach
   - CTA Primary: Action-oriented + Location/Timeline (e.g., "Schedule Technical Review ↗ — Direct access in Arequipa")

2. **Map Section Hierarchy** (Non-negotiable order):
   - Hero (Establish credibility + visual wow)
   - Social Proof Tape (Build trust via industries/clients)
   - Bento Box Solutions (Show tailored offerings, not generic features)
   - Technical Stack Showcase (Prove engineering rigor)
   - Conversion Form (Lowest friction possible)

3. **Document Buyer Objections & Address per Section**
   - Hero: "Will this actually scale my operation?"
   - Proof Tape: "Do they have experience in MY industry?"
   - Bento: "Is the solution modular or all-or-nothing?"
   - Stack: "Is this custom or off-the-shelf?"
   - Form: "How long until I hear back?"

---

### PHASE 2: VISUAL DESIGN LANGUAGE SETUP
**Quality Criteria**: Every element must feel "premium" and "trustworthy"

1. **Color Palette & Contrast Rules**
   - Primary Background: Near-black (`#0A0A0A`)
   - Text Primary: Pure white (`#FFFFFF`)
   - Text Secondary: Light gray (`#EDEDED`)
   - Text Tertiary: Medium gray (`#888888`)
   - Accent: Brand gold/copper (e.g., `#D4AF37` or warm orange)
   - Subtle Glow: Radial gradient of accent color (10-20% opacity at edges)

2. **Typography System**
   - Sans-Serif (Geometric): Inter, Roboto Mono, or Geist (Vercel-standard)
   - H1: Bold/Semibold, XL size (3-4rem desktop), variable weight
   - H2: Semibold, large size (1.5-2rem)
   - Body: Regular, 0.95-1.1rem, high line-height (1.6-1.8)
   - Code/Technical: Monospace (Roboto Mono), smaller, gray accent

3. **Whitespace & Breathing**
   - Hero section: 120px+ padding top/bottom
   - Section gaps: 80px+ vertical spacing
   - Card padding: 24px minimum (tight = claustrophobic)
   - Line-height for body: 1.7–1.8 (readability = trust)

4. **Borders & Glass Effects**
   - Card borders: 1px semi-transparent white (`rgba(255,255,255,0.1)`)
   - Subtle shadows: Use `box-shadow: 0 10px 40px rgba(0,0,0,0.5)` (not heavy)
   - Glassmorphism: Light blur + subtle border (but minimal, not excessive)

---

### PHASE 3: COMPONENT ARCHITECTURE

#### **3.1 HERO SECTION**
- Visual anchor: Animated radial gradient or code snippet mockup (fades to dark)
- Text hierarchy: Badge → H1 → H2 → CTA Button
- Spacing: Generous vertical padding (200px+ viewport height)
- Button: Rounded corners, slight transparency, hover state with glow

#### **3.2 SOCIAL PROOF TAPE (Infinite Scroll)**
- Visual: Horizontal tape, slow scroll (right ← left), seamless loop
- Content: Minimal icons + single-line text per industry
- Purpose: Subconscious trust-building (doesn't need to be interactive)
- Height: Thin, 60-80px, minimal visual weight

#### **3.3 BENTO BOX GRID**
- Layout strategy:
  - Top: 1 wide card (full width or ~60%)
  - Middle: 2 square cards (side by side)
  - Bottom: 1 wide card (full width or ~60%)
- Card anatomy: Large icon/illustration (top-right corner) + H3 title + descriptive text
- Hover state: Subtle border highlight, slight lift (transform: translateY)
- Purpose: Show solutions are tailored, not commoditized

#### **3.4 TECHNICAL STACK SHOWCASE**
- Visual strategy: Black background + animated code/architecture diagram (scroll-triggered)
- Text reveal: Stagger animation as user scrolls (appears one by one)
- Content: 4 bullet points (Frontend → Backend → Low-Code → SaaS + Staffing)
- Credibility signal: Specific tech names + philosophy (why each choice matters)

#### **3.5 CONVERSION SECTION**
- Design: Centered, ultra-clean form
- Form fields: Only essential (Email, Name, Company, Problem Selector)
- Input style: Minimal (bottom border only, no box outline)
- CTA Button: Full width, prominent, clear completion language ("Submit")
- Sub-text: Trust signal (e.g., "Response within 24 hours")

---

### PHASE 4: IMPLEMENTATION STRATEGY

1. **Choose Stack**
   - Recommended: Next.js (React) + Tailwind CSS (for rapid dark-mode styling)
   - Alternative: Framer (if visual prototyping is priority)
   - Static export option: For simpler hosting (Vercel, Netlify)

2. **Build Checklist**
   - ☐ Establish CSS variables for all colors, spacing, typography
   - ☐ Create reusable component library (Card, Button, Section, Grid)
   - ☐ Implement dark mode by default (no light mode)
   - ☐ Add scroll-triggered animations (Intersection Observer API or Framer Motion)
   - ☐ Form validation + submission handling (Next.js API route recommended)
   - ☐ Performance optimization: Image optimization, lazy loading
   - ☐ Mobile responsiveness (breakpoints: 640px, 1024px)

3. **Testing & Refinement**
   - Visual: Compare against Linear.app, Vercel.com for reference
   - Performance: Lighthouse score 90+ (CLS < 0.1)
   - Mobile: Test on 375px (iPhone) and 768px (iPad)
   - Form: Verify submission tracking + CRM integration

4. **Launch Readiness**
   - ☐ Analytics setup (Google Analytics 4 + event tracking for CTA clicks)
   - ☐ SEO basics (Meta tags, Open Graph, structured data)
   - ☐ A/B test CTA copy + button color if conversion is critical

---

## 3. KEY DECISION POINTS & BRANCHING

| Question | Option A | Option B | Option C |
|----------|----------|----------|----------|
| **Buyer Persona** | Exec (Speed, ROI) | Engineer (Tech, Architecture) | Finance (Risk, Cost) |
| **Message Emphasis** | Speed to value | Robustness | Cost savings |
| **Hero Visual** | Code snippet | Architecture diagram | Company metric |
| **Form Length** | 2 fields (Email, Company) | 4 fields (Full contact) | 1 field (Email only) |
| **Animation Level** | Heavy (Scroll jacking) | Medium (Hover + fade-in) | Light (Static + CTA pulse) |

**Recommendation**: Match buyer persona + messaging to hero visual + form complexity.

---

## 4. QUALITY CRITERIA & COMPLETION CHECKS

### **Visual Quality**
- [ ] Every element has 1-3px breathing room
- [ ] Text contrast ratio ≥ 7:1 (WCAG AAA for accessibility)
- [ ] Color palette uses no more than 5 distinct colors (+ whites/grays)
- [ ] Icons/illustrations are consistent in style (line weight, fill, sizing)

### **Copy Quality**
- [ ] H1 is benefit-driven (what user gains, not what product does)
- [ ] No jargon unless the target buyer speaks it natively
- [ ] Every section answers one buyer concern
- [ ] CTA copy includes urgency or specificity ("Schedule," "Get Access," not "Learn More")

### **Conversion Quality**
- [ ] Form has ≤4 fields (studies show drop-off after 4)
- [ ] CTA button is visually dominant (color/size/position)
- [ ] Thank-you message or next-step communication is clear post-submission
- [ ] Form success rate tracked + monitored weekly

### **Technical Quality**
- [ ] Lighthouse score ≥90 (Performance, Accessibility, Best Practices)
- [ ] Page loads in ≤2 seconds (Core Web Vitals compliant)
- [ ] Mobile viewport is fully responsive
- [ ] Dark mode enforced (no light theme fallback)

---

## 5. EXAMPLE PROMPTS TO TRIGGER THIS SKILL

1. **"Design the landing page for NIGHTFALL DS following the premium B2B style. Start with the Hero section."**
2. **"Build the Bento Box solutions grid for a fintech company. Each card should target a different buyer objection."**
3. **"Create a Technical Stack section that proves engineering rigor for a regulated industry (fintech/mining)."**
4. **"Design a high-converting contact form for a B2B SaaS. 3 fields max, ultra-minimal input style."**
5. **"Compare our landing page against Linear.app and Vercel.com. What design patterns should we adopt?"**

---

## 6. RELATED SKILLS & EXTENSIONS

**Next Steps to Create:**
- 🎨 **Color Psychology for B2B**: When to use accent colors (copper vs. silver vs. blue) by industry
- 📊 **Landing Page Copy Formula**: Crafting H1s and CTA text for different buyer personas
- 🚀 **Performance Optimization**: Implementing scroll-triggered animations without tanking LCP
- 📱 **Mobile-First Conversion**: Responsive design patterns for landing pages on small screens
- 🔧 **Form Psychology**: Field ordering, placeholder copy, and error messaging strategies

---

## 7. TEMPLATE CHECKLIST (Copy & Paste for New Projects)

```markdown
## Landing Page Project: [Company/Product]

### PHASE 1: SPECIFICATION
- [ ] Buyer persona defined (Exec/Engineer/Finance)
- [ ] Core message (Badge, H1, H2, CTA) written & approved
- [ ] Section order confirmed: Hero → Proof → Solutions → Stack → Form
- [ ] Objection mapping complete (one concern per section)

### PHASE 2: DESIGN LANGUAGE
- [ ] Color palette finalized (primary, secondary, accent)
- [ ] Typography scale defined (H1, H2, Body, Mono sizes)
- [ ] Whitespace rules documented (padding, margins, gaps)
- [ ] Component library (Card, Button, Section, Grid) designed

### PHASE 3: BUILD
- [ ] Project scaffolded (Next.js/Framer/Other)
- [ ] CSS variables + Tailwind config set up
- [ ] Components built & tested responsively
- [ ] Form integrated with backend/CRM

### PHASE 4: QA
- [ ] Lighthouse score ≥90
- [ ] Mobile responsiveness verified (375px, 768px, 1024px+)
- [ ] Form submission tested end-to-end
- [ ] Analytics tracking implemented

### LAUNCH
- [ ] SEO tags & Open Graph configured
- [ ] A/B test variants prepared (CTA copy, button color)
- [ ] Client/stakeholder sign-off received
- [ ] Deployment to production
```

---

## 8. NOTES FOR YOUR TEAM

- **This is a system, not a template.** Every landing page differs by buyer + industry, but the *structure* and *principles* remain.
- **Minimalism = Effort.** A clean, dark landing page requires more design discipline than a colorful one. Attention to pixel-level details matters.
- **Form friction kills conversions.** If your form has >4 fields, you're asking too much upfront. Qualify leads *after* the first touchpoint.
- **Trust through specificity.** "Custom infrastructure for fintech" beats "Enterprise solutions." Buyers want proof you understand *their* problem.
