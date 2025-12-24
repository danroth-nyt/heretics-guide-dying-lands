# Oracle System Documentation

## Overview

The Heretic Map Generator includes a comprehensive oracle system with 200+ tables from Reclvse Version 1.9 for MÖRK BORG's "Heretic's Guide to Dying Lands". This system provides instant random generation for virtually any game element you need during solo or GM-guided play.

## Oracle Categories

### General Oracles (Oracles.tsx)

Located in the main sidebar under "Oracles" accordion section.

#### Roll Loot
Generates random treasure on a d66 table.

#### Roll Wander
Generates character motivation ("Why do you wander?") - perfect for quick character hooks.

#### Roll NPC
Generates a complete NPC with:
- Appearance
- Personality
- Motivation
- Secret
- Capability

#### Roll Encounter
Generates a full encounter with:
- Context (situation and setting)
- Disposition (attitude toward party)
- Goal (what they want)
- Strange Meeting (unusual aspects)
- Arcane Encounter (magical elements)
- Immediate Aftermath (consequences)

#### Roll Complication
Rolls on all 5 complication types simultaneously:
- **Positional Complications** - Environmental challenges affecting position
- **Tactical Complications** - Combat-specific challenges
- **Narrative Complications** - Story-driven twists
- **Multi-Entity Complications** - Challenges involving multiple factions/creatures
- **Social/Narrative Complications** - Interpersonal or story complications

#### Roll Beast
Generates a complete creature/beast with:
- Creature Type (humanoid, beast, undead, etc.)
- Armor Tier
- Morale
- Damage Die
- Behavior
- Appearance
- Wildlife Type (if applicable)

#### Roll Signs
Rolls on all 11 sign types to detect nearby threats and features:
- Dungeon Entrance Signs
- City Approach Signs
- Undercity Signs
- Large Creature Signs
- Human Threat Signs
- Infestation Signs
- Ambush Signs
- Stalking Signs
- Traveler Signs
- Lost People Signs
- Strange Omens

#### Roll Hazards
Comprehensive hazard generation covering all environments:
- **Natural Hazards** - Environmental dangers (d20)
- **Weather-Driven Hazards** - Weather-related threats (d20)
- **Terrain Dangers** - Difficult or dangerous terrain (d20)
- **Unnatural Hazards** - Supernatural or magical hazards (d20)
- **Wildlife Hazards** - Animal-related dangers (d19)
- **Resource Loss Hazards** - Equipment/supply problems (d12)
- **Travel Cost Hazards** - Time and distance complications (d20)
- **Misleading Hazards** - Deceptive environmental features (d12)
- **Dungeon Entrance Hazards** - Specific to dungeon entrances
- **Dungeon Room Hazards** - Specific to dungeon rooms
- **City Street Hazards** - Urban environmental dangers

#### Roll Adventure
Generates a complete adventure framework with:
- Inciting Incident (what starts the adventure)
- Destination (where it takes place)
- Danger (primary threat)
- Twist (unexpected complication)

#### Roll Faction
Generates a complete faction with:
- Leader (who's in charge)
- Structure (organization type)
- Resources (what they control)
- Goals (what they want)
- Methods (how they operate)
- Reputation (how they're perceived)
- Weakness (their vulnerability)
- Symbol (their emblem/sign)

---

### Location Oracles (LocationOracles.tsx)

Located in the sidebar under "Location Oracles" accordion section.

#### Roll Dungeon
Generates overall dungeon characteristics:
- Origin (how it was created)
- Entrance Location (where you enter)
- Entrance Hazard (danger at entrance)
- Entrance Possible Help (potential aid)
- Dungeon Atmosphere (overall feel)
- Dungeon Architecture (construction style)
- Light Level (visibility)
- Air Temperature (climate)

#### Roll Dungeon Room
Generates detailed room characteristics:
- Room Purpose (what it was used for)
- Room Architecture (structural details)
- Room Dressing (decorative elements)
- Room Atmosphere (emotional tone)
- Room Size (dimensions)
- Room Shape (geometry)
- Room Sounds (auditory details)
- Room Smells (olfactory details)
- Exit Count (number of exits)
- Exit Type (kind of passage)
- **Contents** (conditional, rolled on d4):
  - Discovery (if rolled)
  - Hazard (if rolled)
  - Encounter (if rolled)
  - Loot (if rolled)

#### Roll City
Generates complete city characteristics:
- Origin (city's history)
- Condition (current state)
- District Type (area character)
- Governance (who rules)
- Primary Problem (main conflict)
- Secondary Problem (additional issue)
- Secret (hidden truth)
- Discovery (interesting find)

#### Roll Neighborhood
Generates neighborhood atmosphere:
- Sound (auditory character)
- Smell (olfactory character)
- Activity (what's happening)

#### Roll Street
Generates detailed street characteristics:
- Size (width and scale)
- Shape (geometry and layout)
- Quality (condition and maintenance)
- Light Level (visibility)
- Noise Level (auditory activity)
- Buildings (what structures are present)
- Hazard (street-specific danger)
- Discovery (what you can find)
- Encounter (who you meet)
- Exit Count (number of ways out)
- Exit Type (kind of passage)

#### Roll Wilderness
Generates complete wilderness environment:
- Temperature (climate)
- Visibility (how far you can see)
- Unnatural Weather (strange atmospheric effects)
- Minor Discovery (small interesting find)
- Signs of Travelers (evidence of others)
- Remains & Ruins (ancient structures)
- Strange Omen (supernatural portent)
- Wild Resource (useful materials)
- Weather Shift (changing conditions)
- Weather Omen Sign (weather-related portent)
- Natural Oddity (unusual natural feature)
- Landmark: Water (water feature type)
- Landmark Detail (specific landmark description)
- Signs of Lost People (evidence of missing persons)
- Creature Signs: Large (evidence of big creatures)
- Signs of Ambush (indicators of danger)

---

### Name Oracles (NameOracles.tsx)

Located in the sidebar under "Name Oracles" accordion section.

#### Roll Given Name
Generates a character's first name (d100).

#### Roll Surname
Generates a character's family name (d100).

#### Roll Title
Generates a formal or earned title (d20).

#### Roll Epithet
Generates a descriptive nickname or byname (d66).

---

## Table Browser

Access all 200+ tables individually through the "Browse All Tables" modal.

### Categories in Table Browser

1. **Encounters**
   - Context, Disposition, Goal
   - Strange Meetings, Arcane Encounters, Aftermath
   
2. **Combat Complications**
   - Positional, Tactical, Narrative
   - Multi-Entity, Social Narrative

3. **Creatures & Beasts**
   - Creature Type, Wildlife Type
   - Armor, Damage, Morale
   - Behavior, Appearance

4. **Hazards**
   - Natural, Weather-Driven, Terrain
   - Unnatural, Wildlife, Resource Loss
   - Travel Cost, Misleading

5. **Signs**
   - Dungeon, City, Undercity
   - Threats (Large Creature, Human, Infestation)
   - Ambush, Stalking, Traveler, Lost People
   - Strange Omens

6. **Wilderness**
   - Temperature, Visibility, Weather
   - Discoveries, Landmarks, Resources
   - Signs and Omens

7. **City**
   - City Generation (Origin, Condition, District, Governance)
   - Neighborhood (Sounds, Smells, Activity)
   - Street Generation (Size, Shape, Quality, Buildings, etc.)
   - Problems, Secrets, Discoveries

8. **Dungeon**
   - Dungeon Generation (Origin, Entrance, Atmosphere)
   - Room Generation (Size, Shape, Purpose, Architecture)
   - Sensory Details (Sounds, Smells)
   - Contents (Exits, Discoveries, Hazards, Encounters, Loot)

9. **NPCs**
   - Appearance, Personality, Motivation
   - Secrets, Capabilities

10. **Adventures**
    - Inciting Incident, Destination
    - Danger, Twist

11. **Factions**
    - Leader, Structure, Resources
    - Goals, Methods, Reputation
    - Weakness, Symbol

12. **Names**
    - Given Names, Surnames
    - Titles, Epithets

13. **Items & Loot**
    - General Loot, Cursed Items
    - Weapons, Armor, Scrolls

14. **General**
    - Fate, Oracle
    - Wander Motivation

## Using the Oracle System

### Quick Rolling
1. Expand the appropriate accordion section in the sidebar
2. Click the desired "Roll" button
3. View comprehensive results in the result panel
4. Results stay visible until you roll again

### Table Browser
1. Click "Browse All Tables" button
2. Search for specific tables or browse by category
3. Click any table to view its entries
4. Use the inline dice roller to roll on any table individually

### Combining Oracles
The oracle system is designed to work together:

**Example: Dungeon Crawl**
1. Roll Dungeon → Get overall dungeon atmosphere
2. Roll Dungeon Room → Get specific room details
3. Roll Encounter → If room has encounter
4. Roll Complication → Add combat challenge
5. Roll Hazards → Check for environmental danger
6. Roll Signs → Notice nearby threats

**Example: City Exploration**
1. Roll City → Get overall city character
2. Roll Neighborhood → Get area atmosphere
3. Roll Street → Get specific location
4. Roll NPC → Meet someone interesting
5. Roll Signs → Notice city approach signs
6. Roll Hazards → Check for urban dangers

**Example: Wilderness Travel**
1. Roll Wilderness → Get environment details
2. Roll Hazards → Check for travel dangers
3. Roll Signs → Notice signs of threats
4. Roll Encounter → If signs indicate presence
5. Roll Beast → If encounter is creature

## Data Sources

All oracle tables are sourced from:
- **Heretic's Guide to Dying Lands** by Third Kingdom Games
- **Recluse** supplement (pages specified in code comments)

Tables are organized by:
- `src/data/oracles/recluse_*.ts` files
- Each file contains related tables with page number annotations
- All tables follow the same TypeScript interface for consistency

## Technical Details

### Table Structure
All tables use the `Table` interface:
```typescript
interface Table {
  name: string;
  entries: Array<{
    roll: number;
    result: string;
  }>;
}
```

### Dice Rolling
The system automatically detects dice type from table size:
- d4, d6, d8, d10, d12, d19, d20 - Standard dice
- d36 - Roll 2d6, multiply first by 6, add second
- d66 - Roll 2d6, concatenate digits
- d100 - Roll percentile dice

### Result Display
- Comprehensive results show all rolled values
- Results persist until new roll
- Mobile-optimized display with proper text wrapping
- Print-friendly output

## Tips for Use

1. **Prep Sessions**: Generate multiple elements in advance
2. **Solo Play**: Use comprehensive rolls (Encounter, Beast, Hazards) for instant scenarios
3. **GM Tools**: Quick NPC/Faction generation during play
4. **Location Building**: Combine location oracles for rich, detailed settings
5. **Random Encounters**: Stack Encounter + Complication + Beast for variety
6. **Environmental Storytelling**: Use Signs + Hazards together for atmospheric tension

## Future Enhancements

Potential additions to the oracle system:
- Favorite/bookmarked tables
- Custom user tables
- Roll history log
- Saved oracle result sets
- Macro rolls (combine multiple oracles)
- Export oracle results to text

---

**FOR THE DYING LANDS** ☠

