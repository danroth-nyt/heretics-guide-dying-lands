import { MapNode, Road, Territory, NodeShape, RoadDifficulty, RoadAesthetics, Omens } from '../types';
import { rollD12, rollD4, randomChoice } from './diceUtils';
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
  weatherTable,
  weatherPrecipitationTable,
  weatherWindTable,
  weatherTemperatureTable,
  actionOracleTable,
  themeOracleTable,
  descriptorOracleTable,
  focusOracleTable,
  detailOracleTable,
} from '../data/globalTables';

/**
 * Module-level counter for unique road IDs
 */
let roadCounter = 0;

/**
 * Generate a random map with nodes and roads
 */
export function generateMap(territory: Territory, nodeCount: number = 6): { nodes: MapNode[], roads: Road[] } {
  roadCounter = 0; // Reset counter for each new map
  const nodes = generateNodes(territory, nodeCount);
  let roads = generateRoads(nodes);
  roads = assignRoadSeparationOffsets(roads, nodes); // Assign offsets to prevent overlap
  
  return { nodes, roads };
}

/**
 * Generate map nodes with locations
 */
function generateNodes(territory: Territory, count: number): MapNode[] {
  const nodes: MapNode[] = [];
  const shapes: NodeShape[] = ['circle', 'square', 'hex'];
  const minDistance = 32; // Minimum distance between nodes to prevent label overlap
  
  for (let i = 0; i < count; i++) {
    let x: number, y: number;
    let attempts = 0;
    const maxAttempts = 50;
    
    // Try to find a position that doesn't overlap with existing nodes
    // Keep margins to prevent cutoff - optimized for 16:9 ratio (240x135 viewBox)
    do {
      x = 25 + Math.random() * 190; // 25 to 215 (viewBox width is 240, with 25px margins)
      y = 25 + Math.random() * 85; // 25 to 110 (viewBox height is 135, with 25px margins)
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
 * Check if two line segments intersect
 */
function doLinesIntersect(
  p1: {x: number, y: number}, 
  p2: {x: number, y: number},
  p3: {x: number, y: number}, 
  p4: {x: number, y: number}
): boolean {
  const ccw = (a: {x: number, y: number}, b: {x: number, y: number}, c: {x: number, y: number}): boolean => {
    return (c.y - a.y) * (b.x - a.x) > (b.y - a.y) * (c.x - a.x);
  };
  
  return ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);
}

/**
 * Calculate angle between two points in radians
 */
function getAngle(from: {x: number, y: number}, to: {x: number, y: number}): number {
  return Math.atan2(to.y - from.y, to.x - from.x);
}

/**
 * Check if a new road would be too close in angle to existing roads from the same node
 * Returns true if the road would overlap/be too close
 */
function wouldRoadOverlap(newRoad: {from: MapNode, to: MapNode}, existingRoads: Road[], nodes: MapNode[]): boolean {
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  const minAngleDiff = Math.PI / 6; // 30 degrees minimum between roads from same node
  
  // Get angle of new road from both endpoints
  const newAngleFromStart = getAngle(newRoad.from, newRoad.to);
  const newAngleFromEnd = getAngle(newRoad.to, newRoad.from);
  
  for (const road of existingRoads) {
    const roadFrom = nodeMap.get(road.fromNodeId);
    const roadTo = nodeMap.get(road.toNodeId);
    
    if (!roadFrom || !roadTo) continue;
    
    // Check if roads share the 'from' node
    if (roadFrom.id === newRoad.from.id || roadTo.id === newRoad.from.id) {
      const sharedNode = roadFrom.id === newRoad.from.id ? roadFrom : roadTo;
      const otherNode = roadFrom.id === newRoad.from.id ? roadTo : roadFrom;
      
      const existingAngle = getAngle(sharedNode, otherNode);
      const angleDiff = Math.abs(newAngleFromStart - existingAngle);
      const normalizedDiff = Math.min(angleDiff, 2 * Math.PI - angleDiff);
      
      if (normalizedDiff < minAngleDiff) {
        return true;
      }
    }
    
    // Check if roads share the 'to' node
    if (roadFrom.id === newRoad.to.id || roadTo.id === newRoad.to.id) {
      const sharedNode = roadFrom.id === newRoad.to.id ? roadFrom : roadTo;
      const otherNode = roadFrom.id === newRoad.to.id ? roadTo : roadFrom;
      
      const existingAngle = getAngle(sharedNode, otherNode);
      const angleDiff = Math.abs(newAngleFromEnd - existingAngle);
      const normalizedDiff = Math.min(angleDiff, 2 * Math.PI - angleDiff);
      
      if (normalizedDiff < minAngleDiff) {
        return true;
      }
    }
  }
  
  return false;
}

/**
 * Check if a new road would cross any existing roads
 */
function wouldRoadCross(newRoad: {from: MapNode, to: MapNode}, existingRoads: Road[], nodes: MapNode[]): boolean {
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  
  for (const road of existingRoads) {
    const roadFrom = nodeMap.get(road.fromNodeId);
    const roadTo = nodeMap.get(road.toNodeId);
    
    if (!roadFrom || !roadTo) continue;
    
    // Skip if roads share a node (they're supposed to meet)
    if (roadFrom.id === newRoad.from.id || roadFrom.id === newRoad.to.id ||
        roadTo.id === newRoad.from.id || roadTo.id === newRoad.to.id) {
      continue;
    }
    
    // Check if lines intersect
    if (doLinesIntersect(newRoad.from, newRoad.to, roadFrom, roadTo)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Generate roads between nodes
 */
function generateRoads(nodes: MapNode[]): Road[] {
  const roads: Road[] = [];
  const connections = new Map<string, Set<string>>();
  const roadKeys = new Set<string>(); // Track unique road connections
  const nodeRoads = new Map<string, Road[]>(); // Track roads from each node for uniqueness
  
  // Helper to create a normalized connection key (same regardless of direction)
  const getRoadKey = (id1: string, id2: string): string => {
    return [id1, id2].sort().join('|');
  };
  
  // Helper to check if a road is unique compared to existing roads from the same node
  const isRoadUnique = (newRoad: Road, nodeId: string): boolean => {
    const existingRoads = nodeRoads.get(nodeId) || [];
    
    // Check if any existing road from this node has the same characteristics
    return !existingRoads.some(existingRoad => {
      return existingRoad.difficulty === newRoad.difficulty &&
             existingRoad.encounter === newRoad.encounter &&
             existingRoad.opportunity === newRoad.opportunity;
    });
  };
  
  // Initialize connection tracking
  nodes.forEach(node => {
    connections.set(node.id, new Set());
    nodeRoads.set(node.id, []);
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
      const roadKey = getRoadKey(node.id, other.id);
      
      // Don't connect if already connected
      if (currentConnections.has(other.id)) {
        continue;
      }
      
      // Don't connect if this road already exists (extra safety check)
      if (roadKeys.has(roadKey)) {
        continue;
      }
      
      // Don't connect if it would give the other node too many connections
      if (otherConnections.size >= 3) {
        continue;
      }
      
      // Check if this road would cross existing roads
      if (wouldRoadCross({from: node, to: other}, roads, nodes)) {
        continue;
      }
      
      // Check if this road would overlap/be too close to existing roads from the same nodes
      if (wouldRoadOverlap({from: node, to: other}, roads, nodes)) {
        continue;
      }
      
      // Generate unique road - try multiple times to get unique characteristics
      let road: Road | null = null;
      let attempts = 0;
      const maxAttempts = 10;
      
      while (attempts < maxAttempts) {
        const candidateRoad = generateRoad(node.id, other.id);
        
        // Check if road is unique from both nodes' perspectives
        if (isRoadUnique(candidateRoad, node.id) && isRoadUnique(candidateRoad, other.id)) {
          road = candidateRoad;
          break;
        }
        
        attempts++;
      }
      
      // If we couldn't generate a unique road, use what we have
      if (!road) {
        road = generateRoad(node.id, other.id);
      }
      
      roads.push(road);
      
      // Track road from both nodes' perspectives
      nodeRoads.get(node.id)!.push(road);
      nodeRoads.get(other.id)!.push(road);
      
      // Track connection and road
      currentConnections.add(other.id);
      otherConnections.add(node.id);
      roadKeys.add(roadKey);
    }
  });
  
  // Final deduplication: ensure no duplicate roads based on ID
  const uniqueRoads = Array.from(
    new Map(roads.map(road => [road.id, road])).values()
  );
  
  return uniqueRoads;
}

/**
 * Assign separation offsets to roads to prevent overlap
 * Roads sharing the same node will be spread apart with increasing offsets
 */
function assignRoadSeparationOffsets(roads: Road[], nodes: MapNode[]): Road[] {
  // Create a map of nodeId -> all roads connected to that node
  const nodeRoadMap = new Map<string, Road[]>();
  
  // Initialize map for each node
  nodes.forEach(node => {
    nodeRoadMap.set(node.id, []);
  });
  
  // Group roads by the nodes they connect to
  roads.forEach(road => {
    const fromRoads = nodeRoadMap.get(road.fromNodeId);
    const toRoads = nodeRoadMap.get(road.toNodeId);
    
    if (fromRoads) fromRoads.push(road);
    if (toRoads) toRoads.push(road);
  });
  
  // Track which roads have already been assigned offsets
  const assignedRoads = new Set<string>();
  
  // For each node with multiple roads, assign separation offsets
  nodeRoadMap.forEach((roadsAtNode, nodeId) => {
    if (roadsAtNode.length > 1) {
      // Filter to only roads that haven't been assigned yet from this node's perspective
      const unassignedRoads = roadsAtNode.filter(road => !assignedRoads.has(road.id));
      
      if (unassignedRoads.length > 1) {
        // Sort roads by the other node's ID for consistency
        unassignedRoads.sort((a, b) => {
          const aOtherId = a.fromNodeId === nodeId ? a.toNodeId : a.fromNodeId;
          const bOtherId = b.fromNodeId === nodeId ? b.toNodeId : b.fromNodeId;
          return aOtherId.localeCompare(bOtherId);
        });
        
        // Calculate evenly-spaced offsets centered around 0
        const offsetStep = 15; // Units of separation between roads
        const centerOffset = -(unassignedRoads.length - 1) * offsetStep / 2;
        
        unassignedRoads.forEach((road, index) => {
          road.separationOffset = centerOffset + (index * offsetStep);
          assignedRoads.add(road.id);
        });
      }
    }
  });
  
  // Set offset to 0 for any roads that weren't assigned (single roads to/from a node)
  roads.forEach(road => {
    if (!assignedRoads.has(road.id)) {
      road.separationOffset = 0;
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
  
  // Create a unique ID for this road instance
  const sortedIds = [fromNodeId, toNodeId].sort();
  roadCounter++;
  const roadId = `road-${sortedIds[0]}-${sortedIds[1]}-${roadCounter}`;
  
  return {
    id: roadId,
    fromNodeId,
    toNodeId,
    difficulty,
    encounter,
    opportunity,
    aesthetics,
  };
}

/**
 * Generate omens for the map
 */
export function generateOmens(): Omens {
  return {
    oracle: rollOnTable(oracleTable),
    landscape: rollOnTable(landscapeTable),
    weather: rollOnTable(weatherTable), // Keep legacy for backwards compatibility
    weatherDetailed: {
      precipitation: rollOnTable(weatherPrecipitationTable),
      wind: rollOnTable(weatherWindTable),
      temperature: rollOnTable(weatherTemperatureTable),
    },
    action: rollOnTable(actionOracleTable),
    theme: rollOnTable(themeOracleTable),
    descriptor: rollOnTable(descriptorOracleTable),
    focus: rollOnTable(focusOracleTable),
    detail: rollOnTable(detailOracleTable),
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


