import React, { useState, useRef, useEffect } from 'react';
import { X, Save, Upload, Download, Trash2, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';
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
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'warning';
    text: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-dismiss status messages after 3 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => {
        setStatusMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  // Clear pending delete when clicking away
  useEffect(() => {
    if (pendingDeleteId) {
      const timer = setTimeout(() => {
        setPendingDeleteId(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [pendingDeleteId]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!mapName.trim()) {
      setStatusMessage({ type: 'warning', text: 'Please enter a map name' });
      return;
    }

    if (currentNodes.length === 0) {
      setStatusMessage({ type: 'warning', text: 'No map to save! Generate a map first.' });
      return;
    }

    try {
      saveMap(mapName, currentTerritory, currentNodes, currentRoads, currentOmens);
      setSavedMaps(getSavedMaps());
      const savedName = mapName;
      setMapName('');
      setStatusMessage({ type: 'success', text: `Map "${savedName}" saved successfully!` });
      setActiveTab('load');
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Failed to save map' });
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

  const handleDelete = (id: string) => {
    if (pendingDeleteId === id) {
      // Second click - actually delete
      deleteMap(id);
      setSavedMaps(getSavedMaps());
      if (selectedMapId === id) {
        setSelectedMapId(null);
      }
      setPendingDeleteId(null);
      setStatusMessage({ type: 'success', text: 'Map deleted successfully' });
    } else {
      // First click - show confirmation
      setPendingDeleteId(id);
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
      setStatusMessage({ type: 'success', text: 'Map imported successfully!' });
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Failed to import map: ' + (error as Error).message });
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

        {/* Status Message */}
        {statusMessage && (
          <div className={`p-3 mb-4 rounded border-2 flex items-center gap-2 ${
            statusMessage.type === 'success' ? 'bg-green-900 bg-opacity-20 border-green-600 text-green-100' :
            statusMessage.type === 'error' ? 'bg-red-900 bg-opacity-20 border-red-600 text-red-100' :
            'bg-yellow-900 bg-opacity-20 border-yellow-600 text-yellow-100'
          }`}>
            {statusMessage.type === 'success' && <CheckCircle size={20} />}
            {statusMessage.type === 'error' && <AlertCircle size={20} />}
            {statusMessage.type === 'warning' && <AlertTriangle size={20} />}
            <span className="flex-1">{statusMessage.text}</span>
            <button
              onClick={() => setStatusMessage(null)}
              className="opacity-75 hover:opacity-100"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>
        )}

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
                          onClick={() => handleDelete(map.id)}
                          className={`mork-button text-sm py-1 ${
                            pendingDeleteId === map.id 
                              ? 'bg-red-600 hover:bg-red-700 px-2' 
                              : 'px-3 hover:bg-red-600'
                          }`}
                          title={pendingDeleteId === map.id ? 'Click again to confirm' : 'Delete'}
                        >
                          {pendingDeleteId === map.id ? (
                            <span className="flex items-center gap-1">
                              <Trash2 size={14} />
                              <span className="text-xs">Confirm?</span>
                            </span>
                          ) : (
                            <Trash2 size={16} />
                          )}
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

