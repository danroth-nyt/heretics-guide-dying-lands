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
- **Quick Rollers**: Instant access to frequently used tables
  - Roll random Loot (d66)
  - Generate complete NPCs with all attributes
  - Roll character motivations (Why do you wander?)
- **Full Table Browser**: Comprehensive modal with 100+ game tables
  - Searchable by name or category
  - Organized by type (Global, Character, Items, Roads, Locations)
  - Inline dice roller for any table
- **Global Omens**: Roll for Oracle, Landscape, and Weather to set the scene

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
- **Quick Rollers**: Expand the section to instantly roll on common tables
- **Reference Browser**: Click "Browse All Tables" to access the full table modal
- **Search**: Use the search bar to quickly find specific tables
- **Keyboard Shortcuts**:
  - `Ctrl/Cmd + G`: Generate new map
  - `Ctrl/Cmd + O`: Roll global omens
  - `Ctrl/Cmd + P`: Print map

## Project Structure

```
src/
├── components/         # React components
│   ├── Sidebar.tsx            # Main sidebar with accordion sections
│   ├── MapCanvas.tsx          # SVG map rendering
│   ├── LocationNode.tsx       # Individual location nodes
│   ├── Road.tsx               # Road connections
│   ├── LocationModal.tsx      # Location detail popup
│   ├── RoadTooltip.tsx        # Road encounter tooltip
│   ├── AccordionSection.tsx   # Collapsible panel component
│   ├── QuickRollers.tsx       # Quick table rollers
│   ├── ReferenceModal.tsx     # Full table browser modal
│   ├── TableBrowser.tsx       # Table category navigation
│   └── TableDisplay.tsx       # Table content viewer
├── data/              # Complete game tables and data
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
- **SVG** - Map rendering

## License

This is a fan project based on MÖRK BORG by Ockult Örtmästare Games and Stockholm Kartell, and the "Heretic's Guide to Dying Lands" supplement. No copyright infringement intended.

## Documentation

Comprehensive documentation is available in the [docs/](docs/) directory:

- **[Quick Start Guide](docs/QUICKSTART.md)** - Get started quickly
- **[Development Instructions](docs/INSTRUCTIONS.md)** - Detailed dev guide
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
- [ ] Implement save/load map functionality
- [ ] Add map sharing via URL
- [ ] Create mobile-responsive design
- [ ] Export maps as images
- [ ] Add campaign tracking/notes
- [ ] Implement advanced road pathfinding

---

**FOR THE DYING LANDS** ☠

