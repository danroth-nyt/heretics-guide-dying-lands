import React from 'react';
import { MapNode } from '../types';

interface LocationNodeProps {
  node: MapNode;
  onClick: (node: MapNode) => void;
  isShaking?: boolean;
}

interface LocationNodeShapeProps {
  node: MapNode;
  onClick: (node: MapNode) => void;
  isShaking?: boolean;
}

interface LocationNodeLabelProps {
  node: MapNode;
}

const shapeSize = 14;  // Reduced from 20 for marker-style nodes
const halfSize = shapeSize / 2;

// Component that renders only the node shape
export const LocationNodeShape: React.FC<LocationNodeShapeProps> = ({ node, onClick, isShaking }) => {
  const renderShape = () => {
    // Ink-drawn colors for aged map aesthetic
    const fillColor = "#f4e4c1";
    const strokeColor = "#1a0f08";
    const strokeW = "2";
    
    switch (node.shape) {
      case 'circle':
        return (
          <circle
            cx={0}
            cy={0}
            r={halfSize}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
      case 'square':
        return (
          <rect
            x={-halfSize}
            y={-halfSize}
            width={shapeSize}
            height={shapeSize}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
      case 'hex':
        const hexPoints = Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 2;
          const x = halfSize * Math.cos(angle);
          const y = halfSize * Math.sin(angle);
          return `${x},${y}`;
        }).join(' ');
        return (
          <polygon
            points={hexPoints}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
    }
  };

  return (
    <g
      className={`map-node ${isShaking ? 'shake' : ''}`}
      transform={`translate(${node.x}, ${node.y})`}
      onClick={() => onClick(node)}
      style={{ cursor: 'pointer' }}
    >
      {renderShape()}
    </g>
  );
};

// Component that renders only the node label
export const LocationNodeLabel: React.FC<LocationNodeLabelProps> = ({ node }) => {
  return (
    <g transform={`translate(${node.x}, ${node.y})`}>
      {/* Location type label - positioned below shape with high contrast */}
      <text
        x={0}
        y={halfSize + 5}
        textAnchor="middle"
        dominantBaseline="hanging"
        fill="#0a0604"
        fontSize="4.5"
        fontWeight="bold"
        fontFamily="Pirata One, cursive"
        pointerEvents="none"
        stroke="#f4e4c1"
        strokeWidth="0.5"
        paintOrder="stroke fill"
        style={{
          filter: 'drop-shadow(0px 0.8px 0.8px rgba(0,0,0,0.4))'
        }}
      >
        {node.locationType.toUpperCase()}
      </text>
    </g>
  );
};

// Original component for backward compatibility (if needed elsewhere)
const LocationNode: React.FC<LocationNodeProps> = ({ node, onClick, isShaking }) => {
  const renderShape = () => {
    // Ink-drawn colors for aged map aesthetic
    const fillColor = "#f4e4c1";
    const strokeColor = "#1a0f08";
    const strokeW = "2";
    
    switch (node.shape) {
      case 'circle':
        return (
          <circle
            cx={0}
            cy={0}
            r={halfSize}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
      case 'square':
        return (
          <rect
            x={-halfSize}
            y={-halfSize}
            width={shapeSize}
            height={shapeSize}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
      case 'hex':
        const hexPoints = Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 3) * i - Math.PI / 2;
          const x = halfSize * Math.cos(angle);
          const y = halfSize * Math.sin(angle);
          return `${x},${y}`;
        }).join(' ');
        return (
          <polygon
            points={hexPoints}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeW}
            filter="url(#hand-drawn)"
          />
        );
    }
  };

  return (
    <g
      className={`map-node ${isShaking ? 'shake' : ''}`}
      transform={`translate(${node.x}, ${node.y})`}
      onClick={() => onClick(node)}
      style={{ cursor: 'pointer' }}
    >
      {renderShape()}
      
      {/* Location type label - positioned below shape with high contrast */}
      <text
        x={0}
        y={halfSize + 5}
        textAnchor="middle"
        dominantBaseline="hanging"
        fill="#0a0604"
        fontSize="4.5"
        fontWeight="bold"
        fontFamily="Pirata One, cursive"
        pointerEvents="none"
        stroke="#f4e4c1"
        strokeWidth="0.5"
        paintOrder="stroke fill"
        style={{
          filter: 'drop-shadow(0px 0.8px 0.8px rgba(0,0,0,0.4))'
        }}
      >
        {node.locationType.toUpperCase()}
      </text>
    </g>
  );
};

export default LocationNode;


