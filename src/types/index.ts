// Core map types
export type Territory = 'kergus' | 'wastland' | 'grift' | 'tveland';
export type NodeShape = 'circle' | 'square' | 'hex';
export type RoadDifficulty = 'easy' | 'unpleasant' | 'problematic' | 'grueling';

// Location types based on the Region Table
export type LocationType = 
  | 'Tower' | 'Fort' | 'Graveyard' | 'Shrine' | 'Tavern' 
  | 'Village' | 'Shop' | 'Dungeon' | 'Ruins' | 'Monument'
  | 'Mine' | 'Castle' | 'Manor' | 'Battlefield' | 'Cannibal Camp'
  | 'Monster Lair' | 'Swamps' | 'Prison' | 'Academy' | 'Hermit\'s Cabin';

// Map Node
export interface MapNode {
  id: string;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  locationType: LocationType;
  shape: NodeShape;
  territory: Territory;
  details?: LocationDetails;
}

// Location details from sub-tables
export interface LocationDetails {
  [key: string]: string | number;
}

// Road between nodes
export interface Road {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  difficulty: RoadDifficulty;
  encounter: string;
  opportunity: string;
  aesthetics: RoadAesthetics;
  separationOffset?: number; // Offset for preventing road overlap
}

// Road aesthetics
export interface RoadAesthetics {
  usage: string;
  age: string;
  smell: string;
  wanderers: string;
  surface: string;
}

// Global omens
export interface GlobalOmens {
  oracle: string;
  landscape: string;
  weather: string;
}

// Table entry
export interface TableEntry {
  roll: number | string;
  result: string;
}

// Table structure
export interface Table {
  name: string;
  entries: TableEntry[];
}

// Region table mapping
export interface RegionTable {
  [key: number]: LocationType;
}

// Complete map state
export interface MapState {
  territory: Territory;
  nodes: MapNode[];
  roads: Road[];
  globalOmens: GlobalOmens;
}

