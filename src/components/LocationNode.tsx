import React from 'react';
import { MapNode } from '../types';

interface LocationNodeProps {
  node: MapNode;
  onClick: (node: MapNode) => void;
  isShaking?: boolean;
}

const LocationNode: React.FC<LocationNodeProps> = ({ node, onClick, isShaking }) => {
  const shapeSize = 14;  // Reduced from 20 for marker-style nodes
  const halfSize = shapeSize / 2;

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
      
      {/* Location type label - positioned below shape */}
      <text
        x={0}
        y={halfSize + 5}
        textAnchor="middle"
        dominantBaseline="hanging"
        fill="#1a0f08"
        fontSize="4"
        fontWeight="bold"
        fontFamily="Pirata One, cursive"
        pointerEvents="none"
        style={{
          filter: 'drop-shadow(0px 0.5px 0.5px rgba(0,0,0,0.3))'
        }}
      >
        {node.locationType.toUpperCase()}
      </text>
    </g>
  );
};

export default LocationNode;


