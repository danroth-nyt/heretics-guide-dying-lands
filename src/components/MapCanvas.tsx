import React, { useState } from 'react';
import { MapNode, Road as RoadType } from '../types';
import { LocationNodeShape, LocationNodeLabel } from './LocationNode';
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

  // Landscape orientation optimized for 16:9 horizontal monitors
  const viewBoxWidth = 240;
  const viewBoxHeight = 135;

  return (
    <div className="relative w-full h-full" style={{ position: 'relative', zIndex: 1 }}>
      {/* SVG Canvas - stretches to fill entire container */}
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
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
          
          {/* Hand-drawn wobble filter for organic shapes */}
          <filter id="hand-drawn">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise" seed="5" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          
          {/* Torn edge clip path for aged map effect - with 5px margins */}
          <clipPath id="torn-edge">
            <path d={`
              M 5,8 
              L 7,5 10,7 13,6 17,8 20,6 23,7 27,5 30,8 
              L 33,6 37,7 40,5 45,8 50,6 55,7 60,5 65,8 
              L 70,6 75,7 80,5 85,8 90,6 95,7 100,5 105,8 
              L 110,6 115,7 120,5 125,8 130,6 135,7 140,5 145,8 
              L 150,6 155,7 160,5 165,8 170,6 175,7 ${viewBoxWidth - 5},8
              L ${viewBoxWidth - 5},${viewBoxHeight - 8}
              L ${viewBoxWidth - 8},${viewBoxHeight - 5} ${viewBoxWidth - 11},${viewBoxHeight - 7} ${viewBoxWidth - 14},${viewBoxHeight - 6}
              L ${viewBoxWidth - 17},${viewBoxHeight - 8} ${viewBoxWidth - 20},${viewBoxHeight - 6} ${viewBoxWidth - 23},${viewBoxHeight - 7}
              L ${viewBoxWidth - 27},${viewBoxHeight - 5} ${viewBoxWidth - 30},${viewBoxHeight - 8} ${viewBoxWidth - 35},${viewBoxHeight - 6}
              L ${viewBoxWidth / 2},${viewBoxHeight - 7}
              L 35,${viewBoxHeight - 6} 30,${viewBoxHeight - 8} 25,${viewBoxHeight - 5} 20,${viewBoxHeight - 7}
              L 17,${viewBoxHeight - 6} 14,${viewBoxHeight - 8} 11,${viewBoxHeight - 7} 8,${viewBoxHeight - 5}
              L 5,${viewBoxHeight - 8}
              L 5,8 Z
            `} />
          </clipPath>
          
          <radialGradient id="parchment-gradient">
            <stop offset="0%" stopColor="#f5e6d3" />
            <stop offset="50%" stopColor="#e8d4b8" />
            <stop offset="100%" stopColor="#c4a882" />
          </radialGradient>
          
          {/* Darker vignette gradient */}
          <radialGradient id="vignette">
            <stop offset="40%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </radialGradient>
        </defs>
        
        {/* Main map group with torn edge effect */}
        <g clipPath="url(#torn-edge)">
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
          
          {/* Skull watermark - very subtle */}
          <g transform={`translate(${viewBoxWidth / 2}, ${viewBoxHeight / 2})`} opacity="0.03">
            <circle cx="0" cy="-8" r="15" fill="#1a0f08" />
            <circle cx="-6" cy="-12" r="4" fill="#f4e4c1" />
            <circle cx="6" cy="-12" r="4" fill="#f4e4c1" />
            <path d="M -4,-5 L -4,0 L -2,2 L 0,0 L 2,2 L 4,0 L 4,-5" fill="#1a0f08" />
            <ellipse cx="0" cy="8" rx="12" ry="8" fill="#1a0f08" />
          </g>
          
          {/* More dramatic age spots and stains - adjusted for 240x135 canvas */}
          <circle cx="30" cy="28" r="10" fill="#7a5840" opacity="0.18" />
          <ellipse cx="32" cy="30" rx="12" ry="8" fill="#6a4830" opacity="0.12" transform="rotate(25 32 30)" />
          
          <circle cx="195" cy="22" r="14" fill="#8b6f47" opacity="0.15" />
          <ellipse cx="197" cy="24" rx="10" ry="6" fill="#7a5840" opacity="0.1" transform="rotate(-15 197 24)" />
          
          <circle cx="110" cy="80" r="12" fill="#6a4830" opacity="0.2" />
          <circle cx="112" cy="82" r="8" fill="#5a3820" opacity="0.15" />
          
          <circle cx="25" cy="72" r="16" fill="#8b6f47" opacity="0.14" />
          <ellipse cx="27" cy="74" rx="14" ry="10" fill="#7a5840" opacity="0.1" transform="rotate(40 27 74)" />
          
          {/* Additional stains for taller canvas */}
          <circle cx="160" cy="105" r="13" fill="#7a5840" opacity="0.16" />
          <ellipse cx="162" cy="107" rx="11" ry="7" fill="#6a4830" opacity="0.11" transform="rotate(-30 162 107)" />
          
          <circle cx="70" cy="115" r="10" fill="#8b6f47" opacity="0.13" />
          <ellipse cx="72" cy="117" rx="8" ry="5" fill="#7a5840" opacity="0.09" transform="rotate(20 72 117)" />
          
          {/* Blood/dark ink splatters - more dramatic, adjusted for taller canvas */}
          <g opacity="0.25">
            <circle cx="80" cy="15" r="3.5" fill="#4a1a1a" />
            <ellipse cx="82" cy="16" rx="2" ry="1.5" fill="#3a0a0a" transform="rotate(30 82 16)" />
            <circle cx="78" cy="14" r="1.2" fill="#4a1a1a" />
            <path d="M 81,17 L 83,19 L 82,18" fill="#3a0a0a" />
            
            <circle cx="180" cy="68" r="4" fill="#3a0a0a" />
            <ellipse cx="182" cy="70" rx="2.5" ry="1.8" fill="#4a1a1a" transform="rotate(-25 182 70)" />
            <circle cx="178" cy="66" r="1.5" fill="#3a0a0a" />
            
            <circle cx="45" cy="85" r="3.2" fill="#4a1a1a" />
            <circle cx="47" cy="86" r="1.8" fill="#3a0a0a" />
            <path d="M 44,88 L 42,90 L 43,89" fill="#3a0a0a" />
            
            {/* Additional blood for taller canvas */}
            <circle cx="200" cy="112" r="3.8" fill="#3a0a0a" />
            <ellipse cx="202" cy="114" rx="2.2" ry="1.6" fill="#4a1a1a" transform="rotate(15 202 114)" />
            <circle cx="198" cy="110" r="1.3" fill="#3a0a0a" />
            <path d="M 201,116 L 203,118 L 202,117" fill="#3a0a0a" />
          </g>
          
          {/* Enhanced vignette */}
          <rect
            x="0"
            y="0"
            width={viewBoxWidth}
            height={viewBoxHeight}
            fill="url(#vignette)"
          />
        </g>

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
        
        {/* Decorative corner flourishes - with proper margins */}
        <g opacity="0.3" stroke="#1a0f08" fill="none" strokeWidth="0.5">
          {/* Top-left corner */}
          <path d="M 10 16 Q 10 10 16 10" />
          <circle cx="10" cy="10" r="0.8" fill="#1a0f08" />
          <circle cx="13" cy="10" r="0.5" fill="#1a0f08" />
          <circle cx="10" cy="13" r="0.5" fill="#1a0f08" />
          
          {/* Top-right corner */}
          <path d={`M ${viewBoxWidth - 16} 10 Q ${viewBoxWidth - 10} 10 ${viewBoxWidth - 10} 16`} />
          <circle cx={viewBoxWidth - 10} cy="10" r="0.8" fill="#1a0f08" />
          <circle cx={viewBoxWidth - 13} cy="10" r="0.5" fill="#1a0f08" />
          <circle cx={viewBoxWidth - 10} cy="13" r="0.5" fill="#1a0f08" />
          
          {/* Bottom-left corner */}
          <path d={`M 10 ${viewBoxHeight - 16} Q 10 ${viewBoxHeight - 10} 16 ${viewBoxHeight - 10}`} />
          <circle cx="10" cy={viewBoxHeight - 10} r="0.8" fill="#1a0f08" />
          <circle cx="13" cy={viewBoxHeight - 10} r="0.5" fill="#1a0f08" />
          <circle cx="10" cy={viewBoxHeight - 13} r="0.5" fill="#1a0f08" />
          
          {/* Bottom-right corner */}
          <path d={`M ${viewBoxWidth - 16} ${viewBoxHeight - 10} Q ${viewBoxWidth - 10} ${viewBoxHeight - 10} ${viewBoxWidth - 10} ${viewBoxHeight - 16}`} />
          <circle cx={viewBoxWidth - 10} cy={viewBoxHeight - 10} r="0.8" fill="#1a0f08" />
          <circle cx={viewBoxWidth - 13} cy={viewBoxHeight - 10} r="0.5" fill="#1a0f08" />
          <circle cx={viewBoxWidth - 10} cy={viewBoxHeight - 13} r="0.5" fill="#1a0f08" />
        </g>
        
        {/* Compass Rose - top left with proper margins */}
        <g transform="translate(28, 28)" opacity="0.6">
          {/* 8-point star */}
          <g stroke="#1a0f08" strokeWidth="0.8" fill="#f4e4c1">
            <path d="M 0,-8 L -1.5,-2 L -8,0 L -1.5,2 L 0,8 L 1.5,2 L 8,0 L 1.5,-2 Z" />
          </g>
          {/* Center circle */}
          <circle cx="0" cy="0" r="2" fill="#1a0f08" stroke="none" />
          {/* Cardinal direction labels */}
          <text x="0" y="-10" textAnchor="middle" fontSize="3" fontWeight="bold" fontFamily="Pirata One, cursive" fill="#1a0f08">N</text>
          <text x="10" y="1" textAnchor="middle" fontSize="3" fontWeight="bold" fontFamily="Pirata One, cursive" fill="#1a0f08">E</text>
          <text x="0" y="13" textAnchor="middle" fontSize="3" fontWeight="bold" fontFamily="Pirata One, cursive" fill="#1a0f08">S</text>
          <text x="-10" y="1" textAnchor="middle" fontSize="3" fontWeight="bold" fontFamily="Pirata One, cursive" fill="#1a0f08">W</text>
        </g>
        
        {/* Ink splatters - scattered across taller map */}
        <g opacity="0.15" fill="#1a0f08">
          <circle cx="60" cy="22" r="2.5" />
          <ellipse cx="61" cy="23" rx="1.5" ry="1" transform="rotate(30 61 23)" />
          <circle cx="59" cy="21" r="0.8" />
          
          <circle cx="180" cy="45" r="3" />
          <ellipse cx="182" cy="46" rx="1.8" ry="1.2" transform="rotate(-20 182 46)" />
          <circle cx="178" cy="44" r="1" />
          
          <circle cx="120" cy="75" r="2.2" />
          <ellipse cx="121" cy="76" rx="1.3" ry="0.9" transform="rotate(45 121 76)" />
          
          <circle cx="35" cy="65" r="2.8" />
          <circle cx="37" cy="66" r="1.1" />
          <circle cx="34" cy="63" r="0.7" />
          
          <circle cx="210" cy="30" r="2" />
          <ellipse cx="211" cy="31" rx="1.2" ry="0.8" transform="rotate(15 211 31)" />
          
          {/* Additional splatters for taller canvas */}
          <circle cx="145" cy="110" r="2.6" />
          <ellipse cx="146" cy="111" rx="1.4" ry="1" transform="rotate(-40 146 111)" />
          <circle cx="144" cy="109" r="0.9" />
          
          <circle cx="90" cy="120" r="2.3" />
          <ellipse cx="91" cy="121" rx="1.3" ry="0.8" transform="rotate(25 91 121)" />
        </g>

        {/* Layer 1: Roads (render first so they're behind everything) */}
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

        {/* Layer 2: Node Shapes (render before labels) */}
        <g>
          {nodes.map(node => (
            <LocationNodeShape
              key={node.id}
              node={node}
              onClick={handleNodeClick}
              isShaking={isGenerating}
            />
          ))}
        </g>

        {/* Layer 3: Node Labels (render on top so they're never covered) */}
        <g>
          {nodes.map(node => (
            <LocationNodeLabel
              key={node.id}
              node={node}
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


