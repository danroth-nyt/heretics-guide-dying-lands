import React, { useState } from 'react';
import { MapNode, Road as RoadType } from '../types';
import LocationNode from './LocationNode';
import Road from './Road';
import LocationModal from './LocationModal';
import RoadTooltip from './RoadTooltip';
import { regenerateNodeDetails, regenerateRoad } from '../utils/mapEngine';

interface MapCanvasProps {
  nodes: MapNode[];
  roads: RoadType[];
  onNodesUpdate: (nodes: MapNode[]) => void;
  onRoadsUpdate: (roads: RoadType[]) => void;
  isGenerating?: boolean;
}

const MapCanvas: React.FC<MapCanvasProps> = ({ 
  nodes, 
  roads, 
  onNodesUpdate, 
  onRoadsUpdate,
  isGenerating 
}) => {
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null);
  const [selectedRoad, setSelectedRoad] = useState<RoadType | null>(null);
  const [roadTooltipPosition, setRoadTooltipPosition] = useState({ x: 0, y: 0 });

  const handleNodeClick = (node: MapNode) => {
    setSelectedNode(node);
    setSelectedRoad(null);
  };

  const handleRoadClick = (road: RoadType, event: React.MouseEvent) => {
    setRoadTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
    setSelectedRoad(road);
    setSelectedNode(null);
  };

  const handleRerollNode = (node: MapNode) => {
    const newNode = regenerateNodeDetails(node);
    const updatedNodes = nodes.map(n => n.id === node.id ? newNode : n);
    onNodesUpdate(updatedNodes);
    setSelectedNode(newNode);
  };

  const handleRerollRoad = (road: RoadType) => {
    const newRoad = regenerateRoad(road);
    const updatedRoads = roads.map(r => r.id === road.id ? newRoad : r);
    onRoadsUpdate(updatedRoads);
    setSelectedRoad(newRoad);
  };

  // Wide landscape orientation for better viewport fit
  const viewBoxWidth = 180;
  const viewBoxHeight = 115;

  return (
    <div className="relative w-full h-full" style={{ position: 'relative', zIndex: 1 }}>
      {/* SVG Canvas - stretches to fill entire container */}
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{
          backgroundColor: 'transparent',
          display: 'block',
        }}
      >
        {/* Background - Weathered map parchment */}
        <defs>
          <filter id="paper-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" seed="2" />
            <feColorMatrix in="noise" type="matrix" 
              values="0.3 0 0 0 0
                      0.2 0.3 0 0 0
                      0.1 0.1 0.2 0 0
                      0 0 0 0.3 0" />
          </filter>
          <radialGradient id="parchment-gradient">
            <stop offset="0%" stopColor="#f5e6d3" />
            <stop offset="50%" stopColor="#e8d4b8" />
            <stop offset="100%" stopColor="#d4b896" />
          </radialGradient>
        </defs>
        
        {/* Base parchment color */}
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill="url(#parchment-gradient)"
        />
        
        {/* Paper texture overlay */}
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          filter="url(#paper-texture)"
          opacity="0.4"
        />
        
        {/* Age spots and stains */}
        <circle cx="20" cy="30" r="8" fill="#9a7856" opacity="0.1" />
        <circle cx="75" cy="20" r="12" fill="#8b6f47" opacity="0.08" />
        <circle cx="85" cy="120" r="10" fill="#9a7856" opacity="0.12" />
        <circle cx="15" cy="100" r="15" fill="#8b6f47" opacity="0.09" />

        {/* Subtle hand-drawn grid */}
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="#8b6f47"
            strokeWidth="0.15"
            opacity="0.25"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill="url(#grid)"
        />
        

        {/* Roads (render first so they're behind nodes) */}
        <g>
          {roads.map(road => (
            <g
              key={road.id}
              onClick={(e) => handleRoadClick(road, e as any)}
            >
              <Road road={road} nodes={nodes} onClick={() => {}} />
            </g>
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map(node => (
            <LocationNode
              key={node.id}
              node={node}
              onClick={handleNodeClick}
              isShaking={isGenerating}
            />
          ))}
        </g>
      </svg>

      {/* Modals and Tooltips */}
      <LocationModal
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
        onReroll={handleRerollNode}
      />

      <RoadTooltip
        road={selectedRoad}
        position={roadTooltipPosition}
        onClose={() => setSelectedRoad(null)}
        onReroll={handleRerollRoad}
      />
    </div>
  );
};

export default MapCanvas;


