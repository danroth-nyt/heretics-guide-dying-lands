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

  // A4 aspect ratio (210mm x 297mm ≈ 0.707)
  const viewBoxWidth = 100;
  const viewBoxHeight = 141; // 100 / 0.707

  return (
    <div className="relative w-full h-full">
      {/* SVG Canvas */}
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        {/* Background */}
        <rect
          x="0"
          y="0"
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill="var(--mork-yellow)"
          opacity="0.3"
        />

        {/* Grid lines for aesthetic */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="var(--mork-black)"
              strokeWidth="0.2"
              opacity="0.2"
            />
          </pattern>
        </defs>
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


