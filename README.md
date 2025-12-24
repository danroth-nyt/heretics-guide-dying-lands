# HERETIC MAP GENERATOR

A web-based procedural map generator for MÖRK BORG's "Heretic's Guide to Dying Lands" system. Generate hex-crawl maps with locations, roads, encounters, and atmospheric omens in the distinctive MÖRK BORG aesthetic.

![MÖRK BORG aesthetic](https://img.shields.io/badge/aesthetic-M%C3%96RK%20BORG-fde047?style=for-the-badge&logo=skull&logoColor=black)

## Features

### Map Generation
- **4 Territories**: Kergüs, Wästland, Grift, and Tveland, each with unique location types
- **Procedural Generation**: Random map generation with 6 locations and connecting roads
- **Interactive Nodes**: Click any location to see detailed information from sub-tables
- **Road Details**: Click roads to see difficulty, encounters, opportunities, and aesthetics
- **Print-Ready**: Export maps to A4 format for physical use

### Reference Tools
- **General Oracles**: Instant access to frequently used tables
  - Roll Loot (d66)
  - Roll Wander motivation
  - Generate complete NPCs with all attributes
  - Roll Encounters with complications
  - Roll Complications (5 types)
  - Roll Beasts/Creatures (7 attributes)
  - Roll Signs (11 types: dungeon, city, wilderness, threats)
  - Roll Hazards (11 types: natural, weather, terrain, unnatural, wildlife, resource loss, travel cost, misleading, dungeon entrance/room, city street)
  - Roll Adventures (4 components)
  - Roll Factions (8 attributes)
- **Location Oracles**: Comprehensive location generation
  - Roll Dungeon (overall characteristics)
  - Roll Dungeon Room (room-specific details)
  - Roll City (full city generation)
  - Roll Neighborhood (sounds, smells, activity)
  - Roll Street (size, shape, quality, buildings, encounters, exits)
  - Roll Wilderness (temperature, visibility, discoveries, landmarks)
- **Full Table Browser**: Comprehensive modal with 200+ game tables
  - Searchable by name or category
  - Organized by type (Encounters, Creatures, Hazards, Signs, Wilderness, City, Dungeon, NPCs, Adventures, Names, Items, and more)
  - Inline dice roller for any table
- **Omens**: Roll for Oracle, Landscape, and Weather to set the scene

### UI/UX
- **Collapsible Sections**: Clean, organized sidebar with accordion panels
- **Persistent State**: Section preferences saved between sessions
- **Authentic Theme**: Yellow and black high-contrast design with grunge textures
- **Complete Book Data**: All tables synced with Heretic's Guide to Dying Lands

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

Quick setup:
1. Enable GitHub Pages in your repo settings (Source: GitHub Actions)
2. Push to the main branch
3. Your site will be live at `https://YOUR-USERNAME.github.io/heretics-guide-dying-lands/`

## Usage

### Map Generation
1. **Select Territory**: Choose from Kergüs, Wästland, Grift, or Tveland
2. **Generate Map**: Click "Generate Map" to create a new random map
3. **Explore Locations**: Click on any location node to see its details
4. **Check Roads**: Click on roads to see encounters and difficulty
5. **Roll Omens**: Generate atmospheric elements for your adventure
6. **Print**: Use the Print Map button to create a physical copy

### Quick Reference
- **Oracles**: Expand the section to instantly roll on common tables
- **Reference Browser**: Click "Browse All Tables" to access the full table modal
- **Search**: Use the search bar to quickly find specific tables
- **Keyboard Shortcuts** (Desktop):
  - `Ctrl/Cmd + G`: Generate new map
  - `Ctrl/Cmd + O`: Roll omens
  - `Ctrl/Cmd + P`: Print map

### Mobile & Touch Controls
- **Mobile Menu**: Tap the hamburger menu (bottom-left in portrait, top-left in landscape) to access controls
- **Zoom & Pan**: Use pinch-to-zoom or tap the zoom buttons to navigate the map
- **Touch Targets**: All buttons are optimized for touch with minimum 44px tap areas
- **Modals**: Swipe down or tap the close button to dismiss modal windows
- **Landscape Mode**: Optimized 2-column modal layouts and compact UI for horizontal viewing

## Project Structure

```
src/
├── components/         # React components
│   ├── AccordionSection.tsx   # Collapsible panel component
│   ├── LocationModal.tsx      # Responsive location detail modal
│   ├── LocationNode.tsx       # Individual location nodes
│   ├── LocationOracles.tsx    # Location generation oracles (dungeon, city, wilderness)
│   ├── MapCanvas.tsx          # SVG map with zoom/pan controls
│   ├── MobileNav.tsx          # Mobile hamburger menu
│   ├── NameOracles.tsx        # Name generation oracles
│   ├── Oracles.tsx            # General oracles (encounters, beasts, signs, hazards, etc.)
│   ├── ReferenceModal.tsx     # Full table browser modal
│   ├── Road.tsx               # Road connections
│   ├── RoadTooltip.tsx        # Responsive road detail popup
│   ├── SaveLoadModal.tsx      # Save/load map functionality
│   ├── Sidebar.tsx            # Main sidebar / mobile drawer
│   ├── TableBrowser.tsx       # Table category navigation
│   └── TableDisplay.tsx       # Table content viewer
├── data/              # Complete game tables and data
│   ├── oracles/               # Oracle tables from Reclvse Version 1.9
│   │   ├── recluse_adventure.ts   # Adventure generation
│   │   ├── recluse_city.ts        # City, neighborhood, and street generation
│   │   ├── recluse_creature.ts    # Beast and creature generation
│   │   ├── recluse_dungeon.ts     # Dungeon and room generation
│   │   ├── recluse_encounter.ts   # Encounter and complication tables
│   │   ├── recluse_faction.ts     # Faction generation
│   │   ├── recluse_general.ts     # General oracle tables (loot, wander, fate)
│   │   ├── recluse_hazards.ts     # Comprehensive hazard tables
│   │   ├── recluse_names.ts       # Name generation tables
│   │   ├── recluse_npc.ts         # NPC generation
│   │   ├── recluse_signs.ts       # Signs and omens (11 types)
│   │   └── recluse_wilderness.ts  # Wilderness generation
│   ├── regionTables.ts        # Territory-specific locations (d12)
│   ├── locationTables.ts      # All 20 location sub-tables
│   ├── roadTables.ts          # Road encounters & aesthetics
│   └── globalTables.ts        # Oracle, Fate, Loot, NPC, Items
├── utils/             # Utilities and logic
│   ├── diceUtils.ts           # Dice rolling functions
│   ├── mapEngine.ts           # Map generation engine
│   └── tableLookup.ts         # Table rolling logic
└── types/             # TypeScript interfaces
    └── index.ts
```

## Customization

### Modifying Visual Theme

Edit `src/index.css` to customize:
- Colors (CSS variables)
- Fonts
- Border styles
- Animation effects

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **react-zoom-pan-pinch** - Map zoom and pan controls
- **SVG** - Map rendering

## License

This is a fan project based on MÖRK BORG by Ockult Örtmästare Games and Stockholm Kartell, and the "Heretic's Guide to Dying Lands" supplement. No copyright infringement intended.

## Documentation

Comprehensive documentation is available in the [docs/](docs/) directory:

- **[Quick Start Guide](docs/QUICKSTART.md)** - Get started quickly
- **[Development Instructions](docs/INSTRUCTIONS.md)** - Detailed dev guide
- **[Oracle System Guide](docs/ORACLE_SYSTEM.md)** - Complete oracle documentation (200+ tables)
- **[Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute
- **[Data Templates](docs/DATA_TEMPLATE.md)** - Data structure reference
- **[Implementation Notes](docs/AESTHETIC_IMPROVEMENTS.md)** - Recent changes
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deployment instructions

See the [docs/README.md](docs/README.md) for a complete index.

## Development Tips

### Viewing Changes on Local Server

When running `npm run dev`, Vite provides hot module reloading, but if changes don't appear:

**Windows:** `Ctrl + F5` or `Ctrl + Shift + R`
**Mac:** `Cmd + Shift + R`
**Alternative:** Open DevTools (F12), right-click refresh button, select "Empty Cache and Hard Reload"

The dev server auto-reloads most changes, but hard refresh may be needed for:
- CSS/style changes
- SVG filter modifications
- Configuration updates

## Contributing

This project was created as a tool for MÖRK BORG players. Feel free to modify and enhance it for your own use. See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## Roadmap

- [x] ~~Add full PDF data for all location types~~ ✅ Complete!
- [x] ~~Add comprehensive table reference browser~~ ✅ Complete!
- [x] ~~Add quick roller tools~~ ✅ Complete!
- [x] ~~Create mobile-responsive design~~ ✅ Complete!
- [x] ~~Implement save/load map functionality~~ ✅ Complete!
- [x] ~~Add comprehensive oracle system~~ ✅ Complete!
  - [x] General oracles (encounters, beasts, signs, hazards, adventures, factions)
  - [x] Location oracles (dungeon, city, neighborhood, street, wilderness)
  - [x] Name generation oracles
- [x] ~~Optimize for landscape mobile devices~~ ✅ Complete!
- [ ] Add map sharing via URL
- [ ] Export maps as images
- [ ] Add campaign tracking/notes
- [ ] Implement advanced road pathfinding
- [ ] Add PWA support for offline use

---

**FOR THE DYING LANDS** ☠

