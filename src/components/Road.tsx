import React from 'react';
import { Road as RoadType, MapNode } from '../types';

interface RoadProps {
  road: RoadType;
  nodes: MapNode[];
  onClick: (road: RoadType) => void;
}

const Road: React.FC<RoadProps> = ({ road, nodes, onClick }) => {
  const fromNode = nodes.find(n => n.id === road.fromNodeId);
  const toNode = nodes.find(n => n.id === road.toNodeId);

  if (!fromNode || !toNode) {
    return null;
  }

  // Create a jagged/organic path between nodes
  const dx = toNode.x - fromNode.x;
  const dy = toNode.y - fromNode.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Calculate control points for a curved path with some randomness
  const midX = (fromNode.x + toNode.x) / 2;
  const midY = (fromNode.y + toNode.y) / 2;
  
  // Perpendicular offset for curve
  const perpX = -dy / distance * 15;
  const perpY = dx / distance * 15;
  
  // Seed-based "randomness" for consistent paths
  const seed = road.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const offset = (seed % 3 - 1) * 10;
  
  const pathData = `
    M ${fromNode.x} ${fromNode.y}
    Q ${midX + perpX + offset} ${midY + perpY + offset}
      ${toNode.x} ${toNode.y}
  `;

  // Determine stroke style based on difficulty
  const getStrokeStyle = () => {
    switch (road.difficulty) {
      case 'easy':
        return { strokeWidth: 2, strokeDasharray: 'none', opacity: 0.7 };
      case 'unpleasant':
        return { strokeWidth: 2.5, strokeDasharray: '5,3', opacity: 0.8 };
      case 'problematic':
        return { strokeWidth: 3, strokeDasharray: '8,4', opacity: 0.9 };
      case 'grueling':
        return { strokeWidth: 3.5, strokeDasharray: '3,2', opacity: 1 };
      default:
        return { strokeWidth: 2, strokeDasharray: 'none', opacity: 0.7 };
    }
  };

  const strokeStyle = getStrokeStyle();

  return (
    <g className="map-road" onClick={() => onClick(road)} style={{ cursor: 'pointer' }}>
      {/* Invisible wider path for easier clicking */}
      <path
        d={pathData}
        fill="none"
        stroke="transparent"
        strokeWidth="15"
      />
      
      {/* Visible road */}
      <path
        d={pathData}
        fill="none"
        stroke="var(--mork-black)"
        strokeWidth={strokeStyle.strokeWidth}
        strokeDasharray={strokeStyle.strokeDasharray}
        opacity={strokeStyle.opacity}
        strokeLinecap="round"
      />
    </g>
  );
};

export default Road;


