# Data Template for PDF Extraction

Use this template to systematically extract data from the "Heretic's Guide to Dying Lands" PDF.

## Region Table (Page 9)

Format for each territory:

```typescript
territory_name: {
  1: 'LocationType',
  2: 'LocationType',
  // ... etc
  12: 'LocationType',
}
```

## Location Tables (Pages 14-35)

For each location type, identify all sub-tables and their entries:

### Example: Graveyard

```typescript
Graveyard: {
  characteristic: {
    name: 'Graveyard Characteristic',
    entries: [
      { roll: 1, result: 'Description here' },
      { roll: 2, result: 'Description here' },
      // ... etc
    ],
  },
  hereLies: {
    name: 'Here Lies...',
    entries: [
      { roll: 1, result: 'Description here' },
      // ... etc
    ],
  },
  // ... other tables
}
```

### Location Type Checklist

- [ ] Tower
- [ ] Fort
- [ ] Graveyard
- [ ] Shrine
- [ ] Tavern
- [ ] Village
- [ ] Market
- [ ] Dungeon
- [ ] Ruins
- [ ] Cave
- [ ] Monastery
- [ ] Mill
- [ ] Bridge
- [ ] Crossroads
- [ ] Lake
- [ ] Forest
- [ ] Mountain
- [ ] Swamps
- [ ] Prison
- [ ] Academia

## Road Tables (Pages 10-11)

### Encounters by Difficulty

For each difficulty level (easy, unpleasant, problematic, grueling):

```typescript
difficulty_level: {
  name: 'Difficulty Level Encounters',
  entries: [
    { roll: 1, result: 'Encounter description' },
    { roll: 2, result: 'Encounter description' },
    // ... rolls 1-6
  ],
}
```

### Opportunities by Difficulty

Same format as encounters.

### Road Aesthetics

- Usage (d6)
- Age (d6)
- Smell (d6)
- Other Wanderers (d8)
- Surface Type (d8)

## Global Tables (Pages 44-47)

### Oracle (d66)

```typescript
entries: [
  { roll: 11, result: 'Keyword/phrase' },
  { roll: 12, result: 'Keyword/phrase' },
  // ... through 66
]
```

### Fate (d20)

```typescript
entries: [
  { roll: 1, result: 'Prophecy' },
  // ... through 20
]
```

### Loot (d66)

```typescript
entries: [
  { roll: 11, result: 'Item description' },
  // ... through 66
]
```

### Landscape (d10)

```typescript
entries: [
  { roll: 1, result: 'Landscape description' },
  // ... through 10
]
```

### Weather (d10)

```typescript
entries: [
  { roll: 1, result: 'Weather description' },
  // ... through 10
]
```

## How to Use This Template

1. Open the PDF alongside this file
2. For each section, systematically copy the entries
3. Paste into the corresponding file in `src/data/`
4. Test each section by generating maps and clicking elements
5. Verify that dice rolls match the PDF

## Quality Checklist

- [ ] All roll numbers match PDF exactly
- [ ] No typos in descriptions
- [ ] All special characters preserved
- [ ] d66 tables use correct format (11-66, not 1-36)
- [ ] All location types have at least one sub-table
- [ ] Road tables complete for all difficulty levels
- [ ] Global tables complete

## Notes

- Some descriptions may be shortened for screen display
- Maintain the tone and style of MÖRK BORG
- Keep formatting consistent across all entries
- Test thoroughly after each section is completed


