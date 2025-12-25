import { useState, useEffect } from 'react';
import { Territory, MapNode, Road, Omens } from './types';
import Sidebar from './components/Sidebar';
import MapCanvas from './components/MapCanvas';
import ReferenceModal from './components/ReferenceModal';
import MobileNav from './components/MobileNav';
import SaveLoadModal from './components/SaveLoadModal';
import MovesModal from './components/MovesModal';
import { generateMap, generateOmens } from './utils/mapEngine';
import { saveCurrentMapState, loadCurrentMapState } from './utils/mapStorage';

function App() {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory>('kergus');
  const [nodes, setNodes] = useState<MapNode[]>([]);
  const [roads, setRoads] = useState<Road[]>([]);
  const [omens, setOmens] = useState<Omens | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSaveLoadOpen, setIsSaveLoadOpen] = useState(false);
  const [isMovesOpen, setIsMovesOpen] = useState(false);

  // Auto-restore last map on mount
  useEffect(() => {
    const savedState = loadCurrentMapState();
    if (savedState && savedState.nodes.length > 0) {
      setSelectedTerritory(savedState.territory);
      setNodes(savedState.nodes);
      setRoads(savedState.roads);
      setOmens(savedState.omens);
    }
  }, []);

  // Auto-save current map state
  useEffect(() => {
    if (nodes.length > 0) {
      saveCurrentMapState(selectedTerritory, nodes, roads, omens);
    }
  }, [nodes, roads, omens, selectedTerritory]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Generate map: Ctrl/Cmd + G
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        handleGenerateMap();
      }
      // Generate omens: Ctrl/Cmd + O
      if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
        e.preventDefault();
        handleGenerateOmens();
      }
      // Print: Ctrl/Cmd + P (already handled by browser)
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedTerritory]); // Re-bind when territory changes

  const handleGenerateMap = () => {
    setIsGenerating(true);
    
    // Small delay for animation effect
    setTimeout(() => {
      try {
        const { nodes: newNodes, roads: newRoads } = generateMap(selectedTerritory, 6);
        setNodes(newNodes);
        setRoads(newRoads);
      } catch (error) {
        console.error('Error generating map:', error);
      }
      
      // Keep generating animation for a bit
      setTimeout(() => {
        setIsGenerating(false);
      }, 500);
    }, 100);
  };

  const handleGenerateOmens = () => {
    try {
      const newOmens = generateOmens();
      setOmens(newOmens);
    } catch (error) {
      console.error('Error generating omens:', error);
    }
  };

  const handleTerritoryChange = (territory: Territory) => {
    setSelectedTerritory(territory);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleLoadMap = (state: { 
    territory: Territory; 
    nodes: MapNode[]; 
    roads: Road[]; 
    omens: Omens | null 
  }) => {
    setSelectedTerritory(state.territory);
    setNodes(state.nodes);
    setRoads(state.roads);
    setOmens(state.omens);
  };

  return (
    <div className="flex h-full min-h-screen overflow-hidden">
      {/* Desktop Sidebar - Hidden on mobile and landscape mobile */}
      <div className="hidden md:block landscape-hide-sidebar">
        <Sidebar
          selectedTerritory={selectedTerritory}
          onTerritoryChange={handleTerritoryChange}
          onGenerateMap={handleGenerateMap}
          onGenerateOmens={handleGenerateOmens}
          omens={omens}
          onPrint={handlePrint}
          onOpenReference={() => setIsReferenceOpen(true)}
          onOpenSaveLoad={() => setIsSaveLoadOpen(true)}
          onOpenMoves={() => setIsMovesOpen(true)}
          isGenerating={isGenerating}
        />
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 md:hidden landscape-show-drawer fade-in"
          style={{ zIndex: 9998 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideInLeft 0.3s ease-out'
            }}
          >
            <Sidebar
              selectedTerritory={selectedTerritory}
              onTerritoryChange={handleTerritoryChange}
              onGenerateMap={() => {
                handleGenerateMap();
                setIsMobileMenuOpen(false);
              }}
              onGenerateOmens={handleGenerateOmens}
              omens={omens}
              onPrint={() => {
                handlePrint();
                setIsMobileMenuOpen(false);
              }}
              onOpenReference={() => {
                setIsReferenceOpen(true);
                setIsMobileMenuOpen(false);
              }}
              onOpenSaveLoad={() => {
                setIsSaveLoadOpen(true);
                setIsMobileMenuOpen(false);
              }}
              onOpenMoves={() => {
                setIsMovesOpen(true);
                setIsMobileMenuOpen(false);
              }}
              isGenerating={isGenerating}
              isMobileDrawer={true}
            />
          </div>
        </div>
      )}

      {/* Mobile Navigation Button */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <ReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      <SaveLoadModal
        isOpen={isSaveLoadOpen}
        onClose={() => setIsSaveLoadOpen(false)}
        currentTerritory={selectedTerritory}
        currentNodes={nodes}
        currentRoads={roads}
        currentOmens={omens}
        onLoadMap={handleLoadMap}
      />

      <MovesModal
        isOpen={isMovesOpen}
        onClose={() => setIsMovesOpen(false)}
      />
      
      <main className="flex-1 relative overflow-hidden h-full">
        {/* Title Bar - Compact in landscape */}
        <div className="absolute top-0 left-0 right-0 bg-mork-black text-mork-yellow p-3 md:p-6 border-b-4 border-mork-black no-print landscape-compact-header" style={{ zIndex: 5 }}>
          <div className="landscape-inline-header">
            <h1 className="mork-title text-center text-2xl md:text-4xl lg:text-5xl">
              HERETIC MAP GENERATOR
            </h1>
            <p className="text-center text-xs md:text-sm mt-1 md:mt-2 opacity-75 font-elite">
              FOR THE DYING LANDS
            </p>
          </div>
        </div>

        {/* Map Canvas - Full coverage to bottom with padding for UI elements */}
        <div className="absolute top-16 md:top-28 landscape-map-offset left-0 right-0 bottom-0 mork-background overflow-hidden">
          {nodes.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center px-8 py-12">
              <div className="text-center mork-panel max-w-md mx-auto" style={{ marginTop: '2rem' }}>
                <h2 className="text-3xl font-pirata mb-4">Welcome, Heretic</h2>
                <p className="mb-6 text-sm opacity-75">
                  Select your territory and generate a map to begin your journey through the dying lands.
                </p>
                <div className="text-6xl mb-4">☠</div>
                <p className="text-xs italic opacity-50">
                  "The world is ending, but there are still places to explore..."
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full">
              <MapCanvas
                nodes={nodes}
                roads={roads}
                onNodesUpdate={setNodes}
                onRoadsUpdate={setRoads}
                isGenerating={isGenerating}
              />
            </div>
          )}
        </div>

        {/* Print-only header */}
        <div className="hidden print-only">
          <h1 className="text-4xl font-pirata text-center mb-4">
            HERETIC MAP - {selectedTerritory.toUpperCase()}
          </h1>
          {omens && (
            <div className="text-sm mb-4 text-center">
              <p><strong>Oracle:</strong> {omens.oracle}</p>
              <p><strong>Landscape:</strong> {omens.landscape}</p>
              <p><strong>Weather:</strong></p>
              <ul className="text-xs space-y-1 mt-1">
                <li>• {omens.weatherDetailed.precipitation}</li>
                <li>• {omens.weatherDetailed.wind}</li>
                <li>• {omens.weatherDetailed.temperature}</li>
              </ul>
              <p><strong>Action:</strong> {omens.action}</p>
              <p><strong>Theme:</strong> {omens.theme}</p>
              <p><strong>Descriptor:</strong> {omens.descriptor}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

