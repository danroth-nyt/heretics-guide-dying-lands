import React from 'react';
import { Territory, GlobalOmens } from '../types';
import { territoryNames, territoryDescriptions } from '../data/regionTables';
import { Map, Dices, Eye, Cloud, Mountain, Skull, Printer } from 'lucide-react';

interface SidebarProps {
  selectedTerritory: Territory;
  onTerritoryChange: (territory: Territory) => void;
  onGenerateMap: () => void;
  onGenerateOmens: () => void;
  globalOmens: GlobalOmens | null;
  onPrint: () => void;
  isGenerating?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedTerritory,
  onTerritoryChange,
  onGenerateMap,
  onGenerateOmens,
  globalOmens,
  onPrint,
  isGenerating,
}) => {
  return (
    <aside className="w-80 h-screen bg-mork-yellow border-r-4 border-mork-black p-6 overflow-y-auto no-print">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Skull size={32} />
          <h1 className="text-3xl font-pirata">HERETIC</h1>
        </div>
        <p className="text-xs uppercase tracking-wider opacity-75">Map Generator</p>
      </div>

      {/* Territory Selection */}
      <div className="mb-6">
        <label className="block mb-2 font-bold text-sm uppercase tracking-wide">
          <Mountain className="inline mr-2" size={16} />
          Select Territory
        </label>
        <select
          value={selectedTerritory}
          onChange={(e) => onTerritoryChange(e.target.value as Territory)}
          className="mork-select w-full"
        >
          {Object.entries(territoryNames).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
        <p className="text-xs mt-2 opacity-75 italic">
          {territoryDescriptions[selectedTerritory]}
        </p>
      </div>

      {/* Generate Map Button */}
      <button
        onClick={onGenerateMap}
        disabled={isGenerating}
        className="mork-button w-full mb-6 flex items-center justify-center gap-2"
      >
        <Map size={20} />
        {isGenerating ? 'Generating...' : 'Generate Map'}
      </button>

      {/* Divider */}
      <div className="border-t-4 border-mork-black my-6"></div>

      {/* Global Omens Section */}
      <div className="mb-6">
        <h2 className="text-xl font-pirata mb-3 flex items-center gap-2">
          <Eye size={20} />
          Global Omens
        </h2>
        
        <button
          onClick={onGenerateOmens}
          className="mork-button w-full mb-4 text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Omens
        </button>

        {globalOmens ? (
          <div className="mork-panel space-y-3">
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Oracle:</h3>
              <p className="text-sm">{globalOmens.oracle}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Landscape:</h3>
              <p className="text-sm">{globalOmens.landscape}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Weather:</h3>
              <p className="text-sm flex items-center gap-2">
                <Cloud size={14} />
                {globalOmens.weather}
              </p>
            </div>
          </div>
        ) : (
          <div className="mork-panel text-center py-6 opacity-50">
            <Eye size={32} className="mx-auto mb-2" />
            <p className="text-sm italic">No omens yet...</p>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t-4 border-mork-black my-6"></div>

      {/* Print Button */}
      <button
        onClick={onPrint}
        className="mork-button w-full flex items-center justify-center gap-2"
      >
        <Printer size={20} />
        Print Map
      </button>

      {/* Instructions */}
      <div className="mt-8 mork-panel">
        <h3 className="text-sm font-bold uppercase mb-2">How to Use:</h3>
        <ul className="text-xs space-y-1 opacity-75">
          <li>• Select a territory</li>
          <li>• Generate a new map</li>
          <li>• Click nodes for details</li>
          <li>• Click roads for encounters</li>
          <li>• Roll omens for atmosphere</li>
          <li>• Print when ready</li>
        </ul>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="mt-4 mork-panel">
        <h3 className="text-sm font-bold uppercase mb-2">Shortcuts:</h3>
        <ul className="text-xs space-y-1 opacity-75">
          <li>• Ctrl/Cmd + G: Generate Map</li>
          <li>• Ctrl/Cmd + O: Roll Omens</li>
          <li>• Ctrl/Cmd + P: Print</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t-2 border-mork-black text-center">
        <p className="text-xs opacity-50">
          Based on Heretic's Guide to Dying Lands
        </p>
        <p className="text-xs opacity-50 mt-1">
          For MÖRK BORG
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

