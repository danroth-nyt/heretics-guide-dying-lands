# AI Plan: Dice System Overhaul & UI Enhancements

**Date**: December 26, 2025  
**Status**: Completed  
**Branch**: Current working branch

## Request

Update documentation to reflect current state of code after major system changes and UI enhancements.

## Summary of Changes Made

### 1. Core Dice System Overhaul (MAJOR BREAKING CHANGE)

**Old System**: 2d6 + modifier (PBtA style)
- Roll two six-sided dice
- Add modifier
- Compare total to thresholds:
  - 10+ = Strong Hit
  - 7-9 = Weak Hit
  - 6- = Miss

**New System**: 2d20 vs DR (Difficulty Rating)
- Roll two twenty-sided dice
- Add modifier to EACH die separately
- Compare each adjusted die to DR (default 12)
- Count hits:
  - 2 hits = Strong Hit (both dice meet/exceed DR)
  - 1 hit = Weak Hit (one die meets/exceeds DR)
  - 0 hits = Miss (neither die meets DR)

**Implementation**:
- Added `CoreRollResult` interface in `src/utils/diceUtils.ts`
- Added `rollCoreMove(modifier: number, dr: number = 12)` function
- Deprecated old `MoveRollResult` and `roll2d6WithMod()` (kept for backwards compatibility)
- Updated `MoveCard.tsx` to use new system with detailed visual display

### 2. Mobile & Touch Optimizations

**Viewport Changes** (`index.html`):
- Added `maximum-scale=1.0, user-scalable=no` for better mobile control
- Added `viewport-fit=cover` for safe area handling on notched devices

**CSS Changes** (`src/index.css`):
- Added `touch-action: manipulation` for better touch response
- Added `-webkit-text-size-adjust: 100%` to prevent text zoom
- New Oracle drawer styles with smooth animations

### 3. Oracle System UI Enhancements

**Collapsible Categories** (`src/components/Oracles.tsx`):
- Added `OracleCategory` component for expandable sections
- Organized oracles into 3 main categories:
  - **Quick Access**: Complication, NPC, Loot (3-column grid)
  - **Characters**: NPC, Faction
  - **Threats**: Encounter, Complication, Beast, Hazards
  - **Story & World**: Wander, Adventure, Signs
- Added expand/collapse animations with chevron icons
- Improved mobile usability with compact layouts

**Name Oracles** (`src/components/NameOracles.tsx`):
- Changed from 1-column to 2-column grid layout
- Reduced button text size and padding for mobile
- Vertical icon + text layout for better space usage

### 4. Weather Icon System

**Dynamic Icons** (`src/components/Sidebar.tsx`):
- Added `getWeatherIcon()` helper function
- Maps weather text to appropriate Lucide icons:
  - Precipitation: CloudRain, CloudSnow, CloudDrizzle, CloudFog
  - Wind: Wind
  - Temperature: Snowflake (cold), Sun (hot), Thermometer (mild)
- Icons displayed next to weather descriptions
- Consistent pink coloring for visual cohesion

### 5. Move Card Visual Updates

**Roll Display** (`src/components/MoveCard.tsx`):
- Shows both dice with individual results: [d20] + mod = adjusted vs DR12
- Color-coded results: green (success), red (failure)
- Check marks (✓) or crosses (✗) for each die
- Displays total hits and outcome
- Updated outcome labels:
  - "Strong Hit (Both Dice Meet DR)"
  - "Weak Hit (One Die Meets DR)"
  - "Miss (Neither Die Meets DR)"

## Files Changed

### Core System
- `src/utils/diceUtils.ts` - New 2d20 system, deprecated old 2d6
- `src/components/MoveCard.tsx` - Updated to use new dice system

### UI Enhancements
- `index.html` - Mobile viewport optimization
- `src/index.css` - Touch controls, oracle styles, animations
- `src/components/Oracles.tsx` - Collapsible categories, quick access
- `src/components/NameOracles.tsx` - Compact 2-column grid
- `src/components/Sidebar.tsx` - Weather icons

## Documentation Updates Needed

### Critical (System Changes)
- [x] `docs/MOVES_SYSTEM.md` - Complete rewrite for 2d20 system
- [x] `docs/PROJECT_SUMMARY.md` - Update dice system description
- [x] `README.md` - Update moves system section

### Important (Feature Changes)
- [x] Update oracle system description (collapsible categories)
- [x] Update mobile optimization notes (viewport, touch)
- [x] Update UI/UX feature list (weather icons, compact layouts)

## Technical Notes

### Backwards Compatibility
- Old `roll2d6WithMod()` function marked as `@deprecated` but still functional
- Old `MoveRollResult` interface preserved
- No existing code should break, but new code should use `rollCoreMove()`

### Design Rationale - Why 2d20 vs DR?

**Advantages over 2d6**:
1. **More granular probability**: d20 provides finer control
2. **Individual die tracking**: Each die tells a story
3. **Scalable difficulty**: DR can be adjusted per situation
4. **Partial success clarity**: Visual feedback on which dice succeeded
5. **Better for gritty gameplay**: Lower success rates match MÖRK BORG tone

**Probability Comparison**:
- 2d6+0 for 10+ (Strong): 16.67% chance
- 2d20+0 for DR12 (both): 20.25% chance (2 hits)
- Similar feel but more dramatic presentation

### Animation Details
- Dice roll button shakes for 150ms on click
- Outcome boxes pulse with color-coded borders
- Oracle categories slide down with 200ms ease-out
- Chevron icons rotate 180° on expand/collapse

## Issues Encountered

None - all changes implemented successfully.

## Testing Checklist

- [x] Dice roller shows correct 2d20 results
- [x] Both dice display individually with modifiers
- [x] Hit counting works correctly (0, 1, or 2 hits)
- [x] Outcome highlighting matches hit count
- [x] Oracle categories expand/collapse smoothly
- [x] Quick Access buttons work on mobile
- [x] Weather icons display correctly
- [x] Mobile viewport prevents unwanted zoom
- [x] Touch targets are adequately sized (44px+)
- [x] Animations perform smoothly

## Future Considerations

### Possible Enhancements
1. **Adjustable DR**: Allow players to set DR per move (easy/hard mode)
2. **Critical Success**: Special outcome when both dice roll 20
3. **Critical Failure**: Special outcome when both dice roll 1
4. **Advantage/Disadvantage**: Roll 3d20, keep best/worst 2
5. **Modifier Presets**: Save common modifiers for characters
6. **Roll History**: Track last 10 rolls with timestamps
7. **Oracle Favorites**: Pin frequently used oracles to Quick Access
8. **Weather Forecast**: Roll multiple days of weather at once

### Performance Notes
- No performance regressions detected
- Oracle collapse animations are CSS-only (hardware accelerated)
- Weather icon matching is O(1) lookup with fallback
- All changes client-side, no API calls needed

---

**Status**: All changes implemented and tested. Documentation updates in progress.

**FOR THE DYING LANDS** ☠

