import { useState, useEffect } from 'react';
import { Territory, MapNode, Road, GlobalOmens } from './types';
import Sidebar from './components/Sidebar';
import MapCanvas from './components/MapCanvas';
import { generateMap, generateGlobalOmens } from './utils/mapEngine';

function App() {
  const [selectedTerritory, setSelectedTerritory] = useState<Territory>('kergus');
  const [nodes, setNodes] = useState<MapNode[]>([]);
  const [roads, setRoads] = useState<Road[]>([]);
  const [globalOmens, setGlobalOmens] = useState<GlobalOmens | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

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
      const omens = generateGlobalOmens();
      setGlobalOmens(omens);
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

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        selectedTerritory={selectedTerritory}
        onTerritoryChange={handleTerritoryChange}
        onGenerateMap={handleGenerateMap}
        onGenerateOmens={handleGenerateOmens}
        globalOmens={globalOmens}
        onPrint={handlePrint}
        isGenerating={isGenerating}
      />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Title Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-mork-black text-mork-yellow p-6 border-b-4 border-mork-black no-print">
          <h1 className="mork-title text-center">
            HERETIC MAP GENERATOR
          </h1>
          <p className="text-center text-sm mt-2 opacity-75 font-elite">
            FOR THE DYING LANDS
          </p>
        </div>

        {/* Map Canvas */}
        <div className="absolute inset-0 pt-32 pb-8 px-8">
          {nodes.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center mork-panel max-w-md">
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
            <div className="w-full h-full mork-border bg-white">
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
          {globalOmens && (
            <div className="text-sm mb-4 text-center">
              <p><strong>Oracle:</strong> {globalOmens.oracle}</p>
              <p><strong>Landscape:</strong> {globalOmens.landscape}</p>
              <p><strong>Weather:</strong> {globalOmens.weather}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

