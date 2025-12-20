import { MapNode, Road, Territory, NodeShape, RoadDifficulty, RoadAesthetics, GlobalOmens } from '../types';
import { rollD12, rollD4, rollD6, rollD8, rollD10, randomChoice } from './diceUtils';
import { regionTables } from '../data/regionTables';
import { getLocationTables } from '../data/locationTables';
import { rollOnTable, rollOnMultipleTables } from './tableLookup';
import { 
  difficultyTable, 
  encounterTables, 
  opportunityTables,
  usageTable,
  ageTable,
  smellTable,
  wanderersTable,
  surfaceTable
} from '../data/roadTables';
import {
  oracleTable,
  landscapeTable,
  weatherTable
} from '../data/globalTables';

/**
 * Generate a random map with nodes and roads
 */
export function generateMap(territory: Territory, nodeCount: number = 6): { nodes: MapNode[], roads: Road[] } {
  const nodes = generateNodes(territory, nodeCount);
  const roads = generateRoads(nodes);
  
  return { nodes, roads };
}

/**
 * Generate map nodes with locations
 */
function generateNodes(territory: Territory, count: number): MapNode[] {
  const nodes: MapNode[] = [];
  const shapes: NodeShape[] = ['circle', 'square', 'hex'];
  const minDistance = 15; // Minimum distance between nodes (percentage)
  
  for (let i = 0; i < count; i++) {
    let x: number, y: number;
    let attempts = 0;
    const maxAttempts = 50;
    
    // Try to find a position that doesn't overlap with existing nodes
    do {
      x = 15 + Math.random() * 70; // Keep nodes away from edges
      y = 15 + Math.random() * 70;
      attempts++;
      
      if (attempts > maxAttempts) {
        // Give up and use this position anyway
        break;
      }
    } while (nodes.some(node => {
      const distance = Math.sqrt(Math.pow(node.x - x, 2) + Math.pow(node.y - y, 2));
      return distance < minDistance;
    }));
    
    // Roll for location type
    const roll = rollD12();
    const locationType = regionTables[territory][roll];
    
    // Assign random shape
    const shape = randomChoice(shapes);
    
    // Roll for location details
    const locationTables = getLocationTables(locationType);
    const details = rollOnMultipleTables(locationTables);
    
    nodes.push({
      id: `node-${i}`,
      x,
      y,
      locationType,
      shape,
      territory,
      details,
    });
  }
  
  return nodes;
}

/**
 * Generate roads between nodes
 */
function generateRoads(nodes: MapNode[]): Road[] {
  const roads: Road[] = [];
  const connections = new Map<string, Set<string>>();
  
  // Initialize connection tracking
  nodes.forEach(node => {
    connections.set(node.id, new Set());
  });
  
  // Ensure minimum connectivity: each node connects to 1-3 nearest neighbors
  nodes.forEach(node => {
    const currentConnections = connections.get(node.id)!;
    const targetConnections = rollD4() > 3 ? 3 : rollD4() > 2 ? 2 : 1;
    
    if (currentConnections.size >= targetConnections) {
      return;
    }
    
    // Find nearest unconnected nodes
    const distances = nodes
      .filter(other => other.id !== node.id)
      .map(other => ({
        node: other,
        distance: Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2))
      }))
      .sort((a, b) => a.distance - b.distance);
    
    for (const { node: other } of distances) {
      if (currentConnections.size >= targetConnections) {
        break;
      }
      
      const otherConnections = connections.get(other.id)!;
      
      // Don't connect if already connected
      if (currentConnections.has(other.id)) {
        continue;
      }
      
      // Don't connect if it would give the other node too many connections
      if (otherConnections.size >= 3) {
        continue;
      }
      
      // Create road
      const road = generateRoad(node.id, other.id);
      roads.push(road);
      
      // Track connection
      currentConnections.add(other.id);
      otherConnections.add(node.id);
    }
  });
  
  return roads;
}

/**
 * Generate a single road with all its properties
 */
function generateRoad(fromNodeId: string, toNodeId: string): Road {
  // Roll for difficulty
  const difficultyRoll = rollD4();
  const difficultyResult = difficultyTable.entries.find(e => e.roll === difficultyRoll)?.result || 'easy';
  const difficulty = difficultyResult as RoadDifficulty;
  
  // Roll for encounter and opportunity based on difficulty
  const encounter = rollOnTable(encounterTables[difficulty]);
  const opportunity = rollOnTable(opportunityTables[difficulty]);
  
  // Roll for road aesthetics
  const aesthetics: RoadAesthetics = {
    usage: rollOnTable(usageTable),
    age: rollOnTable(ageTable),
    smell: rollOnTable(smellTable),
    wanderers: rollOnTable(wanderersTable),
    surface: rollOnTable(surfaceTable),
  };
  
  return {
    id: `road-${fromNodeId}-${toNodeId}`,
    fromNodeId,
    toNodeId,
    difficulty,
    encounter,
    opportunity,
    aesthetics,
  };
}

/**
 * Generate global omens for the map
 */
export function generateGlobalOmens(): GlobalOmens {
  return {
    oracle: rollOnTable(oracleTable),
    landscape: rollOnTable(landscapeTable),
    weather: rollOnTable(weatherTable),
  };
}

/**
 * Regenerate details for a specific node
 */
export function regenerateNodeDetails(node: MapNode): MapNode {
  const locationTables = getLocationTables(node.locationType);
  const details = rollOnMultipleTables(locationTables);
  
  return {
    ...node,
    details,
  };
}

/**
 * Regenerate a specific road
 */
export function regenerateRoad(road: Road): Road {
  return generateRoad(road.fromNodeId, road.toNodeId);
}

