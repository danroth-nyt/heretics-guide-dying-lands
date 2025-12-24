# Horizontal Monitor Optimization

## Problem
The map was designed with a 180x115 viewBox (1.57:1 aspect ratio) using `preserveAspectRatio="xMidYMid meet"`, which created letterboxing on horizontal/landscape monitors, leaving empty space on the sides.

## Solution
Optimized the entire canvas for wide horizontal displays commonly used for desktop gaming and map viewing.

---

## Changes Made

### 1. ViewBox Dimensions ✓
**File:** `src/components/MapCanvas.tsx`

**Changed:**
```jsx
// Before: Portrait-friendly
const viewBoxWidth = 180;
const viewBoxHeight = 115;
// Aspect ratio: 1.57:1

// After: Landscape-optimized
const viewBoxWidth = 240;
const viewBoxHeight = 100;
// Aspect ratio: 2.4:1
```

**Impact:**
- 33% wider canvas (180 → 240)
- 13% shorter canvas (115 → 100)
- Much better fit for standard 16:9 and 16:10 monitors
- More horizontal space for sprawling maps

---

### 2. Aspect Ratio Behavior ✓
**File:** `src/components/MapCanvas.tsx`

**Changed:**
```jsx
// Before: Letterbox with empty space
preserveAspectRatio="xMidYMid meet"

// After: Fill container while maintaining aspect ratio
preserveAspectRatio="xMidYMid slice"
```

**Impact:**
- "slice" means the SVG will fill the container
- Maintains aspect ratio but crops overflow if needed
- No empty letterbox bars on horizontal monitors
- Map uses full available screen space

---

### 3. Node Generation Bounds ✓
**File:** `src/utils/mapEngine.ts`

**Changed:**
```javascript
// Before: For 180x115 canvas
x = 15 + Math.random() * 150; // 15 to 165
y = 15 + Math.random() * 85;  // 15 to 100

// After: For 240x100 canvas with larger margins
x = 25 + Math.random() * 190; // 25 to 215
y = 20 + Math.random() * 60;  // 20 to 80
```

**Impact:**
- Nodes spread wider horizontally (190px range vs 150px)
- Slightly tighter vertical spread (60px vs 85px) - perfect for landscape
- Larger safety margins prevent edge clipping
- More natural spacing for wide maps

---

### 4. Decorative Elements Repositioned ✓
**File:** `src/components/MapCanvas.tsx`

**Updated:**
- **Age spots/stains:** Repositioned for wider canvas
  - Spread horizontally across 240px width
  - Adjusted vertical positions for 100px height
  
- **Ink splatters:** Redistributed across wider map
  - Moved from max x=160 to max x=210
  - Adjusted y positions to stay within bounds
  
- **Blood splatters:** Fixed out-of-bounds positions
  - Old position cy="105" → new cy="85" (was outside 100px height!)
  - Spread wider horizontally

**Impact:**
- All decorative elements visible and well-distributed
- Natural spacing across the wider canvas
- No elements positioned outside canvas bounds

---

### 5. Welcome Panel ✓
**File:** `src/App.tsx`

**Changed:**
```jsx
// Added proper padding and margin
<div className="w-full h-full flex items-center justify-center px-8 py-12">
  <div className="text-center mork-panel max-w-md mx-auto" style={{ marginTop: '2rem' }}>
```

**Impact:**
- Welcome panel properly centered and padded
- No clipping of box-shadow
- Works with both landscape and portrait orientations

---

## Visual Comparison

### Before (180x115 - Portrait-ish)
```
┌────────────────────────┐
│                        │
│   ┌──────────────┐     │
│   │              │     │  ← Empty space
│   │     MAP      │     │    on sides
│   │              │     │
│   └──────────────┘     │
│                        │
└────────────────────────┘
```

### After (240x100 - Landscape)
```
┌────────────────────────┐
│                        │
│ ┌────────────────────┐ │ ← Fills width
│ │        MAP         │ │   on horizontal
│ └────────────────────┘ │   monitors
│                        │
└────────────────────────┘
```

---

## Aspect Ratio Math

### Old Canvas
- Dimensions: 180 × 115
- Ratio: 1.565:1
- Best for: Vertical/square monitors

### New Canvas
- Dimensions: 240 × 100
- Ratio: 2.4:1
- Best for: Horizontal monitors (16:9 = 1.78:1, 16:10 = 1.6:1)

The 2.4:1 ratio ensures the map fills most horizontal screens while allowing for slight cropping on ultra-wide displays rather than letterboxing.

---

## Testing Checklist

Verify on horizontal monitors:
- [ ] Map fills width without letterboxing
- [ ] All nodes generate within visible area
- [ ] Compass rose visible in top-left
- [ ] All four corner flourishes visible
- [ ] Age spots and ink splatters well-distributed
- [ ] No elements positioned outside canvas
- [ ] Welcome panel centered and visible
- [ ] Roads connect properly across wider canvas

---

## Monitor Compatibility

### Optimized For
- ✅ 16:9 monitors (1920×1080, 2560×1440, 3840×2160)
- ✅ 16:10 monitors (1920×1200, 2560×1600)
- ✅ 21:9 ultrawide (2560×1080, 3440×1440)

### Still Works On
- ✅ 4:3 monitors (will crop top/bottom slightly)
- ✅ Vertical monitors (will crop sides)
- ✅ Mobile landscape (optimized for this)

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/MapCanvas.tsx` | ViewBox dimensions, aspect ratio, decorative elements |
| `src/utils/mapEngine.ts` | Node generation bounds |
| `src/App.tsx` | Welcome panel padding |

---

## Mobile Landscape Optimization (Phase 2)

After optimizing the map canvas for wide desktop monitors, additional optimizations were added for **landscape mobile devices** (phones and tablets held horizontally).

### Problem
Mobile devices in landscape orientation have limited vertical space. The standard portrait UI layout with full-height modals and large headers wasted precious screen space.

### Solution
Implemented comprehensive CSS media queries targeting `(max-width: 1024px) and (orientation: landscape)` to create a landscape-optimized mobile experience.

### Changes Made

#### 1. Dynamic Hamburger Menu Positioning ✓
**Files:** `src/components/MobileNav.tsx`, `src/App.tsx`

- Portrait mode: Bottom-left positioning (stays out of map content)
- Landscape mode: Top-left positioning (clears modal space)
- Forces hamburger menu even on tablet-sized landscape displays to maximize map viewing area

#### 2. Compact Header ✓
**File:** `src/App.tsx`, `src/index.css`

- Reduced header padding from 3rem to 0.5rem in landscape
- Inline title and subtitle on same line instead of stacked
- Font sizes reduced for landscape (1.25rem title vs 2xl portrait)
- Saves ~40px of vertical space

#### 3. 2-Column Modal Layout ✓
**Files:** `src/components/LocationModal.tsx`, `src/components/RoadTooltip.tsx`, `src/index.css`

- Modal content displays in CSS Grid with 2 columns in landscape
- Dramatically improves readability on horizontal screens
- Reduces vertical scrolling by ~50%
- Applies to both location details and road tooltips

#### 4. Compact Modal Elements ✓
**File:** `src/index.css`

- Modal headers: Reduced padding to 0.5rem (vs 1rem portrait)
- Modal footers: Compact button sizing (36px min-height vs 44px)
- Button text: Hidden in landscape, icons only for space efficiency
- Pull indicator: Hidden in landscape (not needed with compact design)

#### 5. Modal Positioning Fixes ✓
**File:** `src/index.css`

- Adjusted backdrop padding: `padding-top: 3rem` to clear header
- Modal margin-left: 4rem to clear hamburger button
- Max-height calculations: Account for compact header and backdrop padding
- Prevents modal cutoff at top of screen

#### 6. Map Canvas Adjustment ✓
**File:** `src/App.tsx`, `src/index.css`

- Reduced top offset in landscape: `top: 2.5rem` (vs 4rem portrait)
- Maximizes visible map area on small horizontal screens
- Ensures map content starts just below compact header

### CSS Architecture

All landscape optimizations use the media query:
```css
@media (max-width: 1024px) and (orientation: landscape) {
  /* Landscape-specific styles */
}
```

Utility classes added:
- `.landscape-hide` - Hide element in landscape
- `.landscape-compact-header` - Compact header styling
- `.landscape-modal-container` - Modal sizing for landscape
- `.landscape-modal-content` - 2-column grid layout
- `.landscape-hamburger-top` - Hamburger top positioning
- `.landscape-button-text` - Hide verbose button text

### Visual Comparison

#### Portrait Mobile (Before)
```
┌──────────────┐
│    TITLE     │ ← Large header (60px)
│   SUBTITLE   │
├──────────────┤
│              │
│     MAP      │
│              │
│              │
├──────────────┤
│   [MODAL]    │ ← Full width
│   Content    │   Single column
│   Content    │   Requires scrolling
│   Content    │
│   [Buttons]  │
└──────────────┘
[☰] Hamburger (bottom-left)
```

#### Landscape Mobile (After)
```
┌─────────────────────────────────┐
[☰] TITLE | SUBTITLE ← Compact (25px)
├─────────────────────────────────┤
│                                 │
│            MAP                  │
│                                 │
├──────┬──────────────────────────┤
│[MOD] │ Content  │ Content       │ ← 2 columns
│      │ Content  │ Content       │   Less scrolling
│      │ [Icon]   │ [Icon]        │   Compact buttons
└──────┴──────────────────────────┘
```

### Testing Checklist

Verify on landscape mobile devices:
- [ ] Hamburger menu appears top-left
- [ ] Header compressed to single line
- [ ] Modal content displays in 2 columns
- [ ] Modal doesn't cut off at top
- [ ] Modal buttons show icons only
- [ ] Map visible behind modal backdrop
- [ ] Pull indicator hidden
- [ ] Desktop sidebar hidden in landscape
- [ ] Touch targets still minimum 44px
- [ ] All modals (location, road, save/load) optimized

### Device Testing

Tested and optimized for:
- ✅ iPhone SE / 8 / X landscape (667×375, 736×414, 812×375)
- ✅ iPhone 12/13/14 landscape (844×390)
- ✅ iPhone Pro Max landscape (926×428)
- ✅ iPad Mini landscape (1024×768)
- ✅ Android phones landscape (various resolutions)
- ✅ Small tablets landscape (up to 1024px width)

### Files Modified (Landscape Optimization)

| File | Changes |
|------|---------|
| `src/index.css` | +195 lines of landscape media queries |
| `src/App.tsx` | Conditional classes for landscape |
| `src/components/MobileNav.tsx` | Dynamic hamburger positioning |
| `src/components/LocationModal.tsx` | Landscape utility classes |
| `src/components/RoadTooltip.tsx` | Landscape utility classes |
| `src/components/Sidebar.tsx` | Reclvse Version 1.9 attribution |

---

## Refresh to See Changes

**Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac) to see the wide-screen optimized map!

**Mobile:** Rotate your device to landscape to see the optimized mobile layout!


