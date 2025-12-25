# Moves System Documentation

## Overview

The Heretic Map Generator includes a comprehensive PBtA (Powered by the Apocalypse) moves system with 40+ playbook moves. This system provides structured character actions with integrated dice rolling and automated outcome calculation, perfect for solo play or GM-guided sessions.

## Accessing the Moves System

### Desktop
- Click the **"Moves"** accordion section in the sidebar
- Click **"Browse Moves"** button to open the full moves modal

### Mobile
- Tap the hamburger menu (bottom-left in portrait, top-left in landscape)
- Tap the **"Moves"** section
- Tap **"Browse Moves"**

## Move Categories

The moves system includes 8 distinct categories, each covering different aspects of gameplay:

### Travel Moves
Character actions during overland travel and journey.
- **Examples**: Make Camp, Navigate, Scout Ahead, Forage

### Dungeon Moves
Actions specific to dungeon exploration and delving.
- **Examples**: Search for Traps, Force a Door, Descend Deeper

### City Moves
Urban interactions and city-based activities.
- **Examples**: Gather Information, Barter, Carouse, Hire Help

### Connection Moves
Building and maintaining relationships with NPCs and factions.
- **Examples**: Make a Friend, Call in a Favor, Build Trust

### Quest Moves
Actions related to pursuing goals and completing objectives.
- **Examples**: Accept a Quest, Pursue a Lead, Confront the Enemy

### Hearth Moves
Downtime activities and recovery.
- **Examples**: Rest and Recover, Tend Wounds, Resupply, Reflect

### Advancement Moves
Character progression and improvement.
- **Examples**: Level Up, Learn a Skill, Improve an Ability

### Adventure Moves
General adventuring actions that can apply in multiple contexts.
- **Examples**: Act Under Pressure, Defy Danger, Aid Another, Discern Realities

## How to Use a Move

### 1. Identify the Trigger
Each move has a **trigger** - a specific situation or action that activates the move.

**Example:**
- **Move**: Scout Ahead
- **Trigger**: "When you survey an area before the party enters..."

### 2. Choose Your Modifier
Select the appropriate modifier based on your character's stats. Typical modifiers range from -2 to +3.

**Common Modifiers:**
- **-2**: Severely weakened or untrained
- **-1**: Slightly disadvantaged
- **0**: Average or neutral
- **+1**: Competent or trained
- **+2**: Expert or specialized
- **+3**: Master level

### 3. Roll 2d6 + Modifier
Click the **"Roll 2d6"** button in the move card. The system automatically:
- Rolls two six-sided dice
- Adds your chosen modifier
- Calculates the total
- Determines the outcome

### 4. Read the Outcome

The move card will highlight the appropriate outcome based on your total:

#### Strong Hit (10+)
- **Green highlight** with pulse animation
- Best possible result
- Full success with no complications
- You achieve your goal completely

#### Weak Hit (7-9)
- **Amber/yellow highlight** with pulse animation
- Partial success
- You achieve your goal but with a cost, complication, or choice
- Mixed results

#### Miss (6 or less)
- **Red highlight** with pulse animation
- Failure or complications
- The GM makes a move against you
- Things get worse

## Move Structure

Each move card displays:

### Header
- **Category badge** (color-coded by type)
- **Roll instruction** (e.g., "Roll+PRESENCE")

### Move Name
Large, bold title in MÖRK BORG style

### Trigger
Italicized text describing when this move applies

### Dice Roller
- Modifier dropdown (-2 to +3)
- Roll 2d6 button
- Result display showing:
  - Individual dice results: [4] [5]
  - Modifier: +2
  - Total: 11

### Outcomes
Three distinct sections with automatic highlighting:

**Strong Hit (10+)**
- Description of full success
- Mechanical effects (if any)

**Weak Hit (7-9)**
- Description of partial success
- Costs, complications, or choices
- Mechanical effects (if any)

**Miss (6-)**
- Description of failure or complication
- GM move trigger
- Mechanical effects (if any)

## Features

### Search
Type in the search bar to filter moves by:
- Move name
- Trigger text
- Keywords

### Category Filter
Click category buttons to view only moves of that type:
- All (shows everything)
- Travel
- Dungeon
- City
- Connection
- Quest
- Hearth
- Advancement
- Adventure

### Persistent Rolling
- Each move card has its own dice roller
- Roll multiple times without closing the modal
- Try different modifiers to see how outcomes change
- Results persist until you roll again

### Visual Feedback
- **Shake animation** on dice button when rolling
- **Pulse animations** on outcome boxes based on result
- **Color-coded categories** for easy identification
- **Highlighted outcomes** show which result applies

## Example Play Session

### Scenario: Entering a Dark Forest

**1. You trigger "Scout Ahead"**
- Trigger: "When you survey an area before the party enters..."
- You decide your character's Wits modifier is +1

**2. Roll 2d6+1**
- Dice show: [3] [6]
- Modifier: +1
- Total: 10 (Strong Hit!)

**3. Read Strong Hit outcome**
- The Strong Hit box pulses green
- "You spot all dangers and opportunities clearly. Ask 3 questions about the area."
- You learn the forest has:
  - A hidden path
  - Signs of recent goblin activity
  - An old shrine

**4. Proceed with knowledge**
- Use this information to plan your approach
- Maybe trigger another move like "Navigate" or "Avoid Danger"

## Tips for Solo Play

### Use Moves to Structure Actions
Instead of narrating freely, trigger moves for major actions. This creates:
- **Structure**: Clear framework for what happens
- **Uncertainty**: Dice add unpredictability
- **Consequences**: Weak hits and misses create complications

### Let Outcomes Guide Fiction
Don't predetermine what happens. Roll first, then interpret:
- **Strong Hit**: The best version of what you hoped
- **Weak Hit**: Success but introduce a complication
- **Miss**: Something goes wrong or gets harder

### Combine with Oracles
Mix moves with oracle tables for rich gameplay:
1. **Roll a move** (for character action)
2. **Roll oracles** (for world details)
3. **Combine results** (for emergent narrative)

**Example:**
- Roll "Gather Information" (Weak Hit: you learn something but attract attention)
- Roll "NPC" oracle (generate who noticed you)
- Roll "Disposition" oracle (determine their attitude)

### Chain Moves Together
One move often triggers another:
- Scout Ahead → Navigate → Make Camp
- Gather Information → Barter → Carouse
- Search for Traps → Force a Door → Descend Deeper

## Customization Ideas

### Add Your Own Moves
The moves system can be extended by editing `src/data/moves.ts`:

```typescript
{
  id: 'custom_move_1',
  name: 'Your Move Name',
  category: 'Adventure',
  trigger: 'When you...',
  roll: 'Roll+STAT',
  strongHit: {
    description: 'On a strong hit...',
    mechanicalEffect: 'Take +1 forward'
  },
  weakHit: {
    description: 'On a weak hit...',
    mechanicalEffect: 'Choose 1...'
  },
  miss: {
    description: 'On a miss...',
    mechanicalEffect: 'Take -1 ongoing'
  }
}
```

### Create Custom Categories
Add new move categories by:
1. Adding to the `Move['category']` type
2. Adding to the categories list in `CategoryFilter.tsx`
3. Adding color in `MoveCard.tsx` getCategoryColor function

### Modify Outcome Animations
Edit `src/index.css` to change the pulse animation colors and timing:
- `.outcome-strong` - Green pulse
- `.outcome-weak` - Amber pulse
- `.outcome-miss` - Red pulse

## Integration with Other Systems

### With Oracles
**Before Move**: Roll oracles to set the scene
**After Move**: Roll oracles to determine consequences

### With Map Generation
**Travel Moves**: Use when navigating between map locations
**Arrival**: Roll location oracles when you reach a node
**Encounters**: Use combat/social moves when roads show encounters

### With NPC System
**Connection Moves**: Use with generated NPCs
**Roll NPC**: Generate someone, then use connection moves
**Disposition**: Let move outcomes affect NPC attitudes

## Technical Details

### Dice Algorithm
- Uses cryptographically random `Math.random()`
- Each d6 is independent (1-6)
- Total = die1 + die2 + modifier
- Outcomes:
  - `total >= 10`: Strong Hit
  - `7 <= total <= 9`: Weak Hit
  - `total <= 6`: Miss

### Data Structure
Moves are defined in `src/data/moves.ts`:
- **id**: Unique identifier
- **name**: Display name
- **category**: Move type (8 categories)
- **trigger**: When to use this move
- **roll**: Which stat to roll with
- **strongHit**: 10+ outcome
- **weakHit**: 7-9 outcome
- **miss**: 6- outcome

Each outcome contains:
- **description**: Narrative result
- **mechanicalEffect** (optional): Game mechanics

## Keyboard Shortcuts

Currently, moves are accessed via mouse/touch only. Future updates may include:
- Keyboard navigation through move list
- Hotkeys for rolling
- Quick search focus

## Mobile Optimization

The moves system is fully responsive:
- **Touch-optimized**: Buttons sized for fingers (44px minimum)
- **Swipeable**: Modal can be swiped down to close
- **Scrollable**: Move list scrolls independently
- **Landscape mode**: Optimized for horizontal viewing
- **Search**: Easy filtering on small screens

## Known Limitations

1. **No Character Sheet Integration**: Modifiers are manual
2. **No History**: Previous rolls aren't saved
3. **No Automation**: Mechanical effects require manual tracking
4. **Single Player**: No move sharing or multiplayer support

## Future Enhancements

Potential improvements:
- Character sheet with tracked stats
- Roll history log
- Move favorites/bookmarks
- Custom move creator (in-app)
- Move chains (suggested follow-ups)
- Integration with saved maps
- Multiplayer move sharing

---

**FOR THE DYING LANDS** ☠

