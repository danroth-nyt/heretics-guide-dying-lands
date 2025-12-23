# HERETIC MAP GENERATOR

A web-based procedural map generator for MÖRK BORG's "Heretic's Guide to Dying Lands" system. Generate hex-crawl maps with locations, roads, encounters, and atmospheric omens in the distinctive MÖRK BORG aesthetic.

![MÖRK BORG aesthetic](https://img.shields.io/badge/aesthetic-M%C3%96RK%20BORG-fde047?style=for-the-badge&logo=skull&logoColor=black)

## Features

- **4 Territories**: Kergüs, Wästland, Grift, and Tveland, each with unique location types
- **Procedural Generation**: Random map generation with 6 locations and connecting roads
- **Interactive Nodes**: Click any location to see detailed information from sub-tables
- **Road Details**: Click roads to see difficulty, encounters, opportunities, and aesthetics
- **Global Omens**: Roll for Oracle, Landscape, and Weather to set the scene
- **Print-Ready**: Export maps to A4 format for physical use
- **Authentic Theme**: Yellow and black high-contrast design with grunge textures

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

1. **Select Territory**: Choose from Kergüs, Wästland, Grift, or Tveland
2. **Generate Map**: Click "Generate Map" to create a new random map
3. **Explore Locations**: Click on any location node to see its details
4. **Check Roads**: Click on roads to see encounters and difficulty
5. **Roll Omens**: Generate atmospheric elements for your adventure
6. **Print**: Use the Print Map button to create a physical copy

## Project Structure

```
src/
├── components/         # React components
│   ├── Sidebar.tsx
│   ├── MapCanvas.tsx
│   ├── LocationNode.tsx
│   ├── Road.tsx
│   ├── LocationModal.tsx
│   └── RoadTooltip.tsx
├── data/              # Game tables and data
│   ├── regionTables.ts
│   ├── locationTables.ts
│   ├── roadTables.ts
│   └── globalTables.ts
├── utils/             # Utilities and logic
│   ├── diceUtils.ts
│   ├── mapEngine.ts
│   └── tableLookup.ts
└── types/             # TypeScript interfaces
    └── index.ts
```

## Customization

### Adding PDF Data

The current implementation includes placeholder data. To populate with actual PDF content:

1. Open `src/data/locationTables.ts`
2. Fill in the table entries for each location type
3. Ensure dice roll ranges match the PDF

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

- [ ] Add full PDF data for all location types
- [ ] Implement save/load map functionality
- [ ] Add map sharing via URL
- [ ] Create mobile-responsive design
- [ ] Add more territories and location types
- [ ] Implement advanced road pathfinding
- [ ] Add sound effects and music (optional)

---

**FOR THE DYING LANDS** ☠

