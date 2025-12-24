# Project Directory Structure

This document explains the organization of the Heretic Map Generator project.

## Root Directory

```
heretics-guide-dying-lands/
├── README.md                    # Main project readme
├── package.json                 # Node.js dependencies
├── package-lock.json           # Locked dependency versions
├── tsconfig.json               # TypeScript configuration
├── tsconfig.node.json          # TypeScript config for Node
├── vite.config.ts              # Vite build configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── index.html                  # HTML entry point
│
├── docs/                       # 📁 ALL DOCUMENTATION
│   ├── README.md               # Documentation index
│   ├── QUICKSTART.md           # Quick start guide
│   ├── INSTRUCTIONS.md         # Detailed instructions
│   ├── CONTRIBUTING.md         # Contributing guidelines
│   ├── DATA_TEMPLATE.md        # Data structure reference
│   ├── DEPLOYMENT.md           # Deployment guide
│   ├── PROJECT_SUMMARY.md      # Project overview
│   ├── IMPLEMENTATION_COMPLETE.md  # Feature notes
│   ├── AESTHETIC_IMPROVEMENTS.md   # Visual enhancements (Phase 1-6)
│   ├── HORIZONTAL_OPTIMIZATION.md  # Desktop & mobile landscape optimization
│   ├── ORACLE_SYSTEM.md        # Comprehensive oracle documentation
│   └── DIRECTORY_STRUCTURE.md  # This file
│
├── src/                        # 📁 SOURCE CODE
│   ├── App.tsx                 # Main React component
│   ├── main.tsx                # React entry point
│   ├── index.css               # Global styles
│   ├── vite-env.d.ts           # Vite type definitions
│   │
│   ├── components/             # React components
│   │   ├── AccordionSection.tsx # Collapsible panel component
│   │   ├── LocationModal.tsx    # Responsive location detail modal
│   │   ├── LocationNode.tsx     # Map location markers
│   │   ├── LocationOracles.tsx  # Location generation oracles (dungeon, city, wilderness)
│   │   ├── MapCanvas.tsx        # SVG map with zoom/pan controls
│   │   ├── MobileNav.tsx        # Mobile hamburger menu
│   │   ├── NameOracles.tsx      # Name generation oracles
│   │   ├── Oracles.tsx          # General oracles (encounters, beasts, signs, hazards, etc.)
│   │   ├── ReferenceModal.tsx   # Full table browser modal
│   │   ├── Road.tsx             # Road connections
│   │   ├── RoadTooltip.tsx      # Responsive road detail popup
│   │   ├── SaveLoadModal.tsx    # Save/load functionality
│   │   ├── Sidebar.tsx          # Sidebar UI / mobile drawer
│   │   ├── TableBrowser.tsx     # Table category navigation
│   │   └── TableDisplay.tsx     # Table content viewer
│   │
│   ├── data/                   # Game data tables
│   │   ├── oracles/            # Reclvse Version 1.9 oracle tables
│   │   │   ├── recluse_adventure.ts   # Adventure generation
│   │   │   ├── recluse_city.ts        # City, neighborhood, street generation
│   │   │   ├── recluse_creature.ts    # Beast/creature generation
│   │   │   ├── recluse_dungeon.ts     # Dungeon and room generation
│   │   │   ├── recluse_encounter.ts   # Encounters and complications
│   │   │   ├── recluse_faction.ts     # Faction generation
│   │   │   ├── recluse_general.ts     # General oracles (loot, wander, fate)
│   │   │   ├── recluse_hazards.ts     # Comprehensive hazards (11 types)
│   │   │   ├── recluse_names.ts       # Name generation
│   │   │   ├── recluse_npc.ts         # NPC generation
│   │   │   ├── recluse_signs.ts       # Signs and omens (11 types)
│   │   │   └── recluse_wilderness.ts  # Wilderness generation
│   │   ├── regionTables.ts     # Region-specific data
│   │   ├── locationTables.ts   # Location type tables
│   │   ├── roadTables.ts       # Road encounter tables
│   │   └── globalTables.ts     # Omens tables
│   │
│   ├── utils/                  # Utility functions
│   │   ├── diceUtils.ts        # Dice rolling logic
│   │   ├── mapEngine.ts        # Map generation engine
│   │   └── tableLookup.ts      # Table lookup helpers
│   │
│   └── types/                  # TypeScript types
│       └── index.ts            # Type definitions
│
├── public/                     # Static assets
│   └── vite.svg                # Vite logo
│
├── dist/                       # 📁 BUILD OUTPUT (generated)
│   ├── index.html
│   └── assets/
│
└── node_modules/               # 📁 DEPENDENCIES (generated)
```

## Directory Organization Principles

### 1. Documentation (`docs/`)
- All `.md` files except `README.md` live here
- Organized by purpose (quickstart, dev guides, deployment)
- `docs/README.md` provides navigation index

### 2. Source Code (`src/`)
- Organized by type (components, data, utils, types)
- Clear separation of concerns
- Easy to navigate for developers

### 3. Configuration (root)
- All build tool configs at root level
- Package management files at root
- Main entry point (`index.html`) at root

### 4. Generated Directories
- `dist/` - Build output (gitignored)
- `node_modules/` - Dependencies (gitignored)
- These are regenerated and should not be committed

## Key Files by Purpose

### Getting Started
- Start here: `README.md`
- Quick setup: `docs/QUICKSTART.md`

### Development
- Instructions: `docs/INSTRUCTIONS.md`
- Contributing: `docs/CONTRIBUTING.md`
- Data format: `docs/DATA_TEMPLATE.md`

### Deployment
- Guide: `docs/DEPLOYMENT.md`
- Config: `vite.config.ts`

### Recent Changes
- Visual updates: `docs/AESTHETIC_IMPROVEMENTS.md` (Phase 1-6, includes landscape mobile optimization)
- Display optimization: `docs/HORIZONTAL_OPTIMIZATION.md` (Desktop wide-screen + mobile landscape)
- Features: `docs/IMPLEMENTATION_COMPLETE.md`
- Oracle system: `docs/ORACLE_SYSTEM.md` (200+ tables from Reclvse Version 1.9)

## Navigation Tips

1. **Documentation**: All in `docs/` - check `docs/README.md` first
2. **Code**: All in `src/` - organized by component type
3. **Configuration**: Root level - clearly named config files
4. **Don't touch**: `node_modules/` and `dist/` are auto-generated

## Benefits of This Structure

- ✅ Clean root directory
- ✅ Easy to find documentation
- ✅ Clear code organization
- ✅ Standard project layout
- ✅ Scales well as project grows

