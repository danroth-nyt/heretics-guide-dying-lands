import { MapState, Territory, MapNode, Road, Omens } from '../types';

export interface SavedMap {
  id: string;
  name: string;
  timestamp: number;
  state: MapState;
}

// LocalStorage keys
const STORAGE_KEY = 'heretic-saved-maps';
const CURRENT_MAP_KEY = 'heretic-current-map';

/**
 * Save a map to localStorage
 */
export function saveMap(
  name: string,
  territory: Territory,
  nodes: MapNode[],
  roads: Road[],
  omens: Omens | null
): SavedMap {
  const savedMap: SavedMap = {
    id: `map-${crypto.randomUUID()}`,
    name,
    timestamp: Date.now(),
    state: {
      territory,
      nodes,
      roads,
      omens: omens || generateDefaultOmens(),
    },
  };

  // Get existing maps
  const existingMaps = getSavedMaps();
  
  // Add new map
  existingMaps.push(savedMap);
  
  // Save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingMaps));
  
  return savedMap;
}

/**
 * Get all saved maps
 */
export function getSavedMaps(): SavedMap[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error parsing saved maps:', error);
    return [];
  }
}

/**
 * Load a specific map by ID
 */
export function loadMap(id: string): SavedMap | null {
  const maps = getSavedMaps();
  return maps.find(map => map.id === id) || null;
}

/**
 * Delete a saved map
 */
export function deleteMap(id: string): void {
  const maps = getSavedMaps();
  const filtered = maps.filter(map => map.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

/**
 * Update an existing saved map
 */
export function updateMap(
  id: string,
  name: string,
  territory: Territory,
  nodes: MapNode[],
  roads: Road[],
  omens: Omens | null
): SavedMap | null {
  const maps = getSavedMaps();
  const index = maps.findIndex(map => map.id === id);
  
  if (index === -1) return null;
  
  const updatedMap: SavedMap = {
    ...maps[index],
    name,
    timestamp: Date.now(),
    state: {
      territory,
      nodes,
      roads,
      omens: omens || generateDefaultOmens(),
    },
  };
  
  maps[index] = updatedMap;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(maps));
  
  return updatedMap;
}

/**
 * Export map as JSON file
 */
export function exportMapToFile(savedMap: SavedMap): void {
  const dataStr = JSON.stringify(savedMap, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${savedMap.name.replace(/\s+/g, '-')}-${savedMap.id}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Import map from JSON file
 */
export function importMapFromFile(file: File): Promise<SavedMap> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const savedMap: SavedMap = JSON.parse(content);
        
        // Validate structure
        if (!savedMap.id || !savedMap.state || !savedMap.state.nodes) {
          throw new Error('Invalid map file format');
        }
        
        // Generate new ID to avoid conflicts
        savedMap.id = `map-${crypto.randomUUID()}`;
        savedMap.timestamp = Date.now();
        
        // Save to localStorage
        const existingMaps = getSavedMaps();
        existingMaps.push(savedMap);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingMaps));
        
        resolve(savedMap);
      } catch (error) {
        reject(new Error('Failed to parse map file'));
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

/**
 * Save current map state (for auto-save)
 */
export function saveCurrentMapState(
  territory: Territory,
  nodes: MapNode[],
  roads: Road[],
  omens: Omens | null
): void {
  const state: MapState = {
    territory,
    nodes,
    roads,
    omens: omens || generateDefaultOmens(),
  };
  
  localStorage.setItem(CURRENT_MAP_KEY, JSON.stringify(state));
}

/**
 * Load current map state (for auto-restore)
 */
export function loadCurrentMapState(): MapState | null {
  const stored = localStorage.getItem(CURRENT_MAP_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error parsing current map state:', error);
    return null;
  }
}

/**
 * Clear current map state
 */
export function clearCurrentMapState(): void {
  localStorage.removeItem(CURRENT_MAP_KEY);
}

// Helper to generate default omens if none exist
function generateDefaultOmens(): Omens {
  return {
    oracle: 'Unknown',
    landscape: 'Unknown',
    weather: 'Unknown',
    weatherDetailed: {
      precipitation: 'Unknown',
      wind: 'Unknown',
      temperature: 'Unknown',
    },
    action: 'Unknown',
    theme: 'Unknown',
    descriptor: 'Unknown',
  };
}

