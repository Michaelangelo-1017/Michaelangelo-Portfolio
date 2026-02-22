# Step 1 — Responsive Refactor Audit Checklist

**Date:** 2025-02-22  
**Scope:** `/app/page.tsx` and all imported components

---

## Audit Results

### ✅ Horizontal overflow
- **body**: Has `overflow-x: hidden` in globals.css
- **Hero**: Section has `overflow-hidden`; background blobs (w-[500px], w-[400px]) are clipped
- **AutomationAngle**: Section has `overflow-hidden`
- **Contact**: Section has `overflow-hidden`
- **Issue**: Navbar on 375px — logo "MICHAELANGELO" + "Start a Project" button with `justify-between` may cause horizontal overflow or cramped layout. **FLAG**

### ⚠️ Fixed widths
- **Hero blobs**: `w-[500px] h-[500px]` and `w-[400px] h-[400px]` — fixed but off-screen, clipped by overflow-hidden. **OK**
- **AutomationAngle articles**: `min-h-[320px]` — intentional for equal-height cards. **OK**
- No problematic `w-[Xpx]` or `min-w-[Xpx]` that block scaling

### ⚠️ Navbar wrapping
- **Issue**: On mobile (<768px), nav links are `hidden md:flex` — only logo + "Start a Project" button visible. On 375px, logo + button may overflow or be cramped. **FLAG for hamburger menu treatment**

### ⚠️ Typography scaling
- **Hero h1**: `clamp(72px,12vw,160px)` — good
- **Services h2**: `clamp(44px,6vw,80px)` — good
- **Services body**: `text-lg` — should add `text-sm sm:text-base` per prompt
- **Services price**: `text-7xl` — no mobile counterpart; should scale down
- **Contact h2**: `clamp(56px,10vw,130px)` — good
- **Contact body**: `text-xl` — should add responsive scaling
- **About body**: `text-lg` — should add `text-sm sm:text-base`
- **About stat boxes**: `text-5xl` — no mobile scaling
- **AutomationAngle h3**: `text-3xl` — should add responsive stack
- **ProjectCard h3**: `text-3xl` — should add responsive stack

### ⚠️ Tap targets
- **Button size="sm"**: `py-2` ≈ 32px height — **below 44px. FLAG**
- **Button size="md"**: `py-3` ≈ 36px height — **below 44px. FLAG**
- **Button size="lg"**: `py-4` ≈ 44px — **OK**
- **ProjectCard link**: `p-2` icon area ≈ 36px — **FLAG** (below 44px)
- **ScrollIndicator**: Decorative, not interactive — **OK**
- **Nav links** (when in hamburger): Must ensure 44px min tap target

### ✅ Image overflow
- No `<img>` or `<Image>` in page content. Metadata images only.

### ⚠️ Grid/flex breakage
- **Footer**: `flex-col sm:flex-row` — good
- **Services**: `lg:grid-cols-2` — collapses on mobile. **OK**
- **AutomationAngle**: `grid-cols-1 md:grid-cols-3` — jumps 1→3 at md. Per prompt: use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Projects**: `md:grid-cols-3` — same, use `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **About**: `lg:grid-cols-2` — good
- **Contact**: `flex-col sm:flex-row` — good

### ✅ Form usability
- No forms; only buttons linking to external Google form

### ⚠️ Spacing/padding
- **All sections**: Fixed `py-24` or `py-32` — should use `py-10 sm:py-16 lg:py-24`
- **Section horizontal**: `px-6` — should align with main wrapper `px-4 sm:px-6 lg:px-8`
- **Main**: No wrapper classes — add `w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`

### ⚠️ Framer Motion tuning
- **FadeInView**: `y: 32`, `x: 32` — reduce on mobile
- **Navbar**: `y: -80` initial — may cause jank on mobile
- **Hero**: `y: 32`, `y: 24`, `y: 16` — large translates; add mobile-aware variants
- **Duration**: 0.65s — shorten on mobile per prompt

### ⚠️ Safe area
- No `pb-safe` or `px-safe` on outermost wrapper or fixed elements
- `tailwind-safe-area` not in package.json — add via CSS or plugin

### ⚠️ Focus states
- **Button**: Has `focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2` — **OK**
- **Nav links**: No visible focus ring — **FLAG**
- **ProjectCard link** (ArrowUpRight): No visible focus ring — **FLAG**

---

## Summary of Issues to Fix

1. Add main wrapper: `w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`
2. Navbar: Implement hamburger menu for <768px; ensure focus rings on nav links
3. Typography: Add responsive stacks for body text, price, stat boxes, h3s
4. Tap targets: Ensure buttons min-h-[44px] on mobile; ProjectCard link min 44×44
5. Grids: AutomationAngle and Projects → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
6. Spacing: Responsive py/px on sections
7. Framer Motion: Mobile-aware variants (shorter duration, smaller translate)
8. Safe area: Add pb-safe, px-safe
9. Focus: Add focus-visible rings to nav links and ProjectCard link

---

## Implementation Complete

All items above have been addressed. Build passes. Validate at: 375px, 414px, 768px, 1024px, 1280px, 1440px.
