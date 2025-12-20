import React from 'react';
import { MapNode } from '../types';

interface LocationNodeProps {
  node: MapNode;
  onClick: (node: MapNode) => void;
  isShaking?: boolean;
}

const LocationNode: React.FC<LocationNodeProps> = ({ node, onClick, isShaking }) => {
  const shapeSize = 60;
  const halfSize = shapeSize / 2;

  const renderShape = () => {
    switch (node.shape) {
      case 'circle':
        return (
          <circle
            cx={0}
            cy={0}
            r={halfSize}
            fill="var(--mork-yellow)"
            stroke="var(--mork-black)"
            strokeWidth="3"
          />
        );
      case 'square':
        return (
          <rect
            x={-halfSize}
            y={-halfSize}
            width={shapeSize}
            height={shapeSize}
            fill="var(--mork-yellow)"
            stroke="var(--mork-black)"
            strokeWidth="3"
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
            fill="var(--mork-yellow)"
            stroke="var(--mork-black)"
            strokeWidth="3"
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
      
      {/* Location type label */}
      <text
        x={0}
        y={0}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="var(--mork-black)"
        fontSize="10"
        fontWeight="bold"
        fontFamily="Special Elite, monospace"
        pointerEvents="none"
      >
        {node.locationType.toUpperCase()}
      </text>
      
      {/* Small dot in center */}
      <circle
        cx={0}
        cy={0}
        r={2}
        fill="var(--mork-black)"
        pointerEvents="none"
      />
    </g>
  );
};

export default LocationNode;

