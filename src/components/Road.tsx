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
  
  // Calculate control points for a curved path with separation
  const midX = (fromNode.x + toNode.x) / 2;
  const midY = (fromNode.y + toNode.y) / 2;
  
  // Perpendicular offset for curve - this creates the base curve
  const perpX = -dy / distance * 15;
  const perpY = dx / distance * 15;
  
  // Use separation offset to prevent road overlap
  // If not set, fall back to seed-based offset for backwards compatibility
  const separationOffset = road.separationOffset ?? ((road.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 3 - 1) * 10);
  
  // Apply separation perpendicular to the road direction
  const controlX = midX + perpX + (separationOffset * perpX / 15);
  const controlY = midY + perpY + (separationOffset * perpY / 15);
  
  const pathData = `
    M ${fromNode.x} ${fromNode.y}
    Q ${controlX} ${controlY}
      ${toNode.x} ${toNode.y}
  `;

  // Determine stroke style based on difficulty
  const getStrokeStyle = () => {
    switch (road.difficulty) {
      case 'easy':
        return { strokeWidth: 2, strokeDasharray: 'none', opacity: 0.8, doubleLine: true };
      case 'unpleasant':
        return { strokeWidth: 2, strokeDasharray: '6,3', opacity: 0.75, doubleLine: false };
      case 'problematic':
        return { strokeWidth: 1.5, strokeDasharray: '8,4,2,4', opacity: 0.7, doubleLine: false };
      case 'grueling':
        return { strokeWidth: 1.8, strokeDasharray: '3,2,1,2', opacity: 0.85, doubleLine: false };
      default:
        return { strokeWidth: 2, strokeDasharray: 'none', opacity: 0.7, doubleLine: false };
    }
  };

  const strokeStyle = getStrokeStyle();
  
  // Calculate distance markers along the path
  const getDistanceMarkers = () => {
    const markers = [];
    const numMarkers = Math.floor(distance / 15); // One marker every ~15 units
    
    for (let i = 1; i <= numMarkers; i++) {
      const t = i / (numMarkers + 1); // Parametric position along curve
      // Quadratic bezier formula: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
      // Use the already-calculated control points that include separation offset
      const x = Math.pow(1-t, 2) * fromNode.x + 2*(1-t)*t * controlX + Math.pow(t, 2) * toNode.x;
      const y = Math.pow(1-t, 2) * fromNode.y + 2*(1-t)*t * controlY + Math.pow(t, 2) * toNode.y;
      
      markers.push({ x, y });
    }
    
    return markers;
  };
  
  const distanceMarkers = getDistanceMarkers();

  return (
    <g className="map-road" onClick={() => onClick(road)} style={{ cursor: 'pointer' }}>
      {/* Invisible wider path for easier clicking */}
      <path
        d={pathData}
        fill="none"
        stroke="transparent"
        strokeWidth="15"
      />
      
      {/* Double-line effect for easy roads */}
      {strokeStyle.doubleLine && (
        <>
          <path
            d={pathData}
            fill="none"
            stroke="#1a0f08"
            strokeWidth={strokeStyle.strokeWidth + 1.5}
            opacity={strokeStyle.opacity * 0.6}
            strokeLinecap="round"
          />
          <path
            d={pathData}
            fill="none"
            stroke="#f4e4c1"
            strokeWidth={strokeStyle.strokeWidth - 0.5}
            opacity={0.8}
            strokeLinecap="round"
          />
        </>
      )}
      
      {/* Main road line - ink-drawn style */}
      <path
        d={pathData}
        fill="none"
        stroke="#1a0f08"
        strokeWidth={strokeStyle.strokeWidth}
        strokeDasharray={strokeStyle.strokeDasharray}
        opacity={strokeStyle.opacity}
        strokeLinecap="round"
      />
      
      {/* Distance markers - small dots along the path */}
      {distanceMarkers.map((marker, idx) => (
        <circle
          key={idx}
          cx={marker.x}
          cy={marker.y}
          r={0.8}
          fill="#1a0f08"
          opacity={0.5}
        />
      ))}
    </g>
  );
};

export default Road;


