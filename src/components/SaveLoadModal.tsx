import React, { useState, useRef } from 'react';
import { X, Save, Upload, Download, Trash2 } from 'lucide-react';
import {
  SavedMap,
  getSavedMaps,
  saveMap,
  deleteMap,
  exportMapToFile,
  importMapFromFile,
} from '../utils/mapStorage';
import { Territory, MapNode, Road, Omens } from '../types';

interface SaveLoadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTerritory: Territory;
  currentNodes: MapNode[];
  currentRoads: Road[];
  currentOmens: Omens | null;
  onLoadMap: (state: { territory: Territory; nodes: MapNode[]; roads: Road[]; omens: Omens | null }) => void;
}

const SaveLoadModal: React.FC<SaveLoadModalProps> = ({
  isOpen,
  onClose,
  currentTerritory,
  currentNodes,
  currentRoads,
  currentOmens,
  onLoadMap,
}) => {
  const [savedMaps, setSavedMaps] = useState<SavedMap[]>(getSavedMaps());
  const [mapName, setMapName] = useState('');
  const [activeTab, setActiveTab] = useState<'save' | 'load'>('load');
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!mapName.trim()) {
      alert('Please enter a map name');
      return;
    }

    if (currentNodes.length === 0) {
      alert('No map to save! Generate a map first.');
      return;
    }

    try {
      saveMap(mapName, currentTerritory, currentNodes, currentRoads, currentOmens);
      setSavedMaps(getSavedMaps());
      setMapName('');
      alert(`Map "${mapName}" saved successfully!`);
      setActiveTab('load');
    } catch (error) {
      alert('Failed to save map');
      console.error(error);
    }
  };

  const handleLoad = (map: SavedMap) => {
    onLoadMap({
      territory: map.state.territory,
      nodes: map.state.nodes,
      roads: map.state.roads,
      omens: map.state.omens,
    });
    onClose();
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Delete map "${name}"?`)) {
      deleteMap(id);
      setSavedMaps(getSavedMaps());
      if (selectedMapId === id) {
        setSelectedMapId(null);
      }
    }
  };

  const handleExport = (map: SavedMap) => {
    exportMapToFile(map);
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await importMapFromFile(file);
      setSavedMaps(getSavedMaps());
      alert('Map imported successfully!');
    } catch (error) {
      alert('Failed to import map: ' + (error as Error).message);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
      <div className="mork-panel max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-mork-black">
          <h2 className="text-3xl font-pirata">Campaign Maps</h2>
          <button
            onClick={onClose}
            className="mork-button p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('save')}
            className={`mork-button flex-1 ${activeTab === 'save' ? 'ring-2 ring-mork-yellow' : ''}`}
          >
            <Save size={16} className="inline mr-2" />
            Save Map
          </button>
          <button
            onClick={() => setActiveTab('load')}
            className={`mork-button flex-1 ${activeTab === 'load' ? 'ring-2 ring-mork-yellow' : ''}`}
          >
            <Upload size={16} className="inline mr-2" />
            Load Map
          </button>
        </div>

        {/* Save Tab */}
        {activeTab === 'save' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Map Name</label>
              <input
                type="text"
                value={mapName}
                onChange={(e) => setMapName(e.target.value)}
                placeholder="e.g., Session 1 - Kergus Exploration"
                className="w-full p-2 border-2 border-mork-black rounded bg-mork-tan"
                onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              />
            </div>
            <div className="text-sm opacity-75">
              <p><strong>Current Map:</strong></p>
              <p>Territory: {currentTerritory}</p>
              <p>Locations: {currentNodes.length}</p>
              <p>Roads: {currentRoads.length}</p>
            </div>
            <button
              onClick={handleSave}
              className="mork-button w-full"
              disabled={!mapName.trim() || currentNodes.length === 0}
            >
              <Save size={16} className="inline mr-2" />
              Save Current Map
            </button>
          </div>
        )}

        {/* Load Tab */}
        {activeTab === 'load' && (
          <div className="space-y-4">
            {/* Import Button */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="mork-button w-full"
              >
                <Upload size={16} className="inline mr-2" />
                Import Map from File
              </button>
            </div>

            {/* Saved Maps List */}
            <div>
              <h3 className="text-xl font-pirata mb-2">Saved Maps ({savedMaps.length})</h3>
              {savedMaps.length === 0 ? (
                <p className="text-sm opacity-75 italic">No saved maps yet. Save your first map!</p>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {savedMaps.sort((a, b) => b.timestamp - a.timestamp).map((map) => (
                    <div
                      key={map.id}
                      className={`p-3 border-2 rounded ${
                        selectedMapId === map.id
                          ? 'border-mork-yellow bg-mork-yellow bg-opacity-10'
                          : 'border-mork-black bg-mork-parchment'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{map.name}</h4>
                          <p className="text-xs opacity-75">{formatDate(map.timestamp)}</p>
                          <p className="text-sm mt-1">
                            <span className="font-bold">{map.state.territory}</span> • {map.state.nodes.length} locations • {map.state.roads.length} roads
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleLoad(map)}
                          className="mork-button flex-1 text-sm py-1"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => handleExport(map)}
                          className="mork-button px-3 text-sm py-1"
                          title="Export to file"
                        >
                          <Download size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(map.id, map.name)}
                          className="mork-button px-3 text-sm py-1 hover:bg-red-600"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaveLoadModal;

