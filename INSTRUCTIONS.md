# Installation & Running Instructions

## Prerequisites

Before you can run this application, you need to have Node.js installed on your system.

### Install Node.js

1. **Download Node.js**: Visit [https://nodejs.org](https://nodejs.org)
2. **Download the LTS version** (Long Term Support) - recommended for most users
3. **Run the installer** and follow the prompts
4. **Verify installation**: Open a terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```
   Both commands should display version numbers.

## Running the Application

Once Node.js is installed:

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will download all required packages. It may take a few minutes.

### 2. Start the Development Server

After dependencies are installed, run:

```bash
npm run dev
```

### 3. Open in Browser

The terminal will display a URL, typically:
```
Local: http://localhost:5173
```

Open this URL in your web browser.

## Using the Application

1. **Select a Territory**: Use the dropdown in the sidebar to choose Kergüs, Wästland, Grift, or Tveland

2. **Generate a Map**: Click the "Generate Map" button to create a new random map with locations and roads

3. **Interact with Locations**: Click on any location node (circle/square/hexagon) to see detailed information

4. **Check Roads**: Click on the lines connecting locations to see road difficulty, encounters, and opportunities

5. **Roll Global Omens**: Click "Roll Omens" to generate atmospheric elements (Oracle, Landscape, Weather)

6. **Print the Map**: Click "Print Map" to create a print-friendly version optimized for A4 paper

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory. You can deploy these to any static hosting service.

## Troubleshooting

### "npm is not recognized"
- Node.js is not installed or not in your system PATH
- Reinstall Node.js and ensure "Add to PATH" is checked during installation

### Port Already in Use
- If port 5173 is in use, Vite will automatically try the next available port
- Check the terminal output for the actual URL

### Missing Dependencies
- Delete the `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Browser Shows Blank Page
- Check the browser console (F12) for errors
- Ensure you're using a modern browser (Chrome, Firefox, Edge, Safari)

## Adding PDF Data

The application currently uses placeholder data. To add complete data from the PDF:

1. Open `src/data/locationTables.ts`
2. Locate the `locationTables` object
3. Fill in the table entries for each location type based on the PDF
4. Save the file - the app will hot-reload automatically

## System Requirements

- **OS**: Windows 10+, macOS 10.14+, or Linux
- **Browser**: Modern browser with ES6+ support (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **RAM**: 2GB minimum
- **Disk Space**: 500MB for Node.js and dependencies

---

**Need Help?** Check the [README.md](README.md) for more information.


