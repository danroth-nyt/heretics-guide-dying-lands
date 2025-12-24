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
│   ├── AESTHETIC_IMPROVEMENTS.md   # Visual enhancements
│   ├── HORIZONTAL_OPTIMIZATION.md  # Landscape display optimization
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
│   │   ├── MapCanvas.tsx        # SVG map with zoom/pan controls
│   │   ├── MobileNav.tsx        # Mobile hamburger menu
│   │   ├── Oracles.tsx          # Quick reference tools
│   │   ├── ReferenceModal.tsx   # Full table browser modal
│   │   ├── Road.tsx             # Road connections
│   │   ├── RoadTooltip.tsx      # Responsive road detail popup
│   │   ├── Sidebar.tsx          # Sidebar UI / mobile drawer
│   │   ├── TableBrowser.tsx     # Table category navigation
│   │   └── TableDisplay.tsx     # Table content viewer
│   │
│   ├── data/                   # Game data tables
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
- Visual updates: `docs/AESTHETIC_IMPROVEMENTS.md`
- Display optimization: `docs/HORIZONTAL_OPTIMIZATION.md`
- Features: `docs/IMPLEMENTATION_COMPLETE.md`

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

