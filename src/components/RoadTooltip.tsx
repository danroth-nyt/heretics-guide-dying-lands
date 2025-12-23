import React, { useEffect, useRef, useState } from 'react';
import { Road } from '../types';
import { X, RefreshCw } from 'lucide-react';

interface RoadTooltipProps {
  road: Road | null;
  position: { x: number; y: number };
  onClose: () => void;
  onReroll: (road: Road) => void;
}

const RoadTooltip: React.FC<RoadTooltipProps> = ({ road, position, onClose, onReroll }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [adjustedPosition, setAdjustedPosition] = useState({ left: position.x, top: position.y, transform: 'translate(-50%, -110%)' });

  // Difficulty color
  const getDifficultyColor = () => {
    switch (road.difficulty) {
      case 'easy': return 'text-green-600';
      case 'unpleasant': return 'text-yellow-600';
      case 'problematic': return 'text-orange-600';
      case 'grueling': return 'text-mork-pink';
      default: return '';
    }
  };

  useEffect(() => {
    if (!tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const rect = tooltip.getBoundingClientRect();
    const padding = 20;

    let left = position.x;
    let top = position.y;
    let transformX = '-50%';
    let transformY = 'calc(-100% - 20px)'; // Default: above the click point with gap

    // Check if tooltip would go off left edge
    if (position.x - rect.width / 2 < padding) {
      left = rect.width / 2 + padding;
      transformX = '-50%';
    }
    
    // Check if tooltip would go off right edge
    if (position.x + rect.width / 2 > window.innerWidth - padding) {
      left = window.innerWidth - rect.width / 2 - padding;
      transformX = '-50%';
    }

    // Check if tooltip would go off top edge
    if (position.y - rect.height - 20 < padding) {
      transformY = '20px'; // Show below the click point
    }

    // Check if showing below would go off bottom edge
    const wouldGoOffBottom = position.y + rect.height + 40 > window.innerHeight;
    const hasRoomAbove = position.y - rect.height - 20 >= padding;
    
    if (wouldGoOffBottom && hasRoomAbove) {
      transformY = 'calc(-100% - 20px)'; // Keep above
    }

    setAdjustedPosition({
      left,
      top,
      transform: `translate(${transformX}, ${transformY})`
    });
  }, [position, road]);

  if (!road) return null;

  return (
    <div
      ref={tooltipRef}
      className="fixed z-40 mork-modal p-6 max-w-lg fade-in"
      style={{
        left: `${adjustedPosition.left}px`,
        top: `${adjustedPosition.top}px`,
        transform: adjustedPosition.transform,
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-pirata">Road Details</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-mork-yellow hover:text-mork-black transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Difficulty */}
      <div className="mb-4">
        <span className="text-sm opacity-75">Difficulty: </span>
        <span className={`text-lg font-bold uppercase ${getDifficultyColor()}`}>
          {road.difficulty}
        </span>
      </div>

      {/* Encounter */}
      <div className="mb-3 pb-3 border-b border-mork-yellow">
        <h4 className="text-lg font-pirata text-mork-pink mb-1">Encounter:</h4>
        <p className="text-sm">{road.encounter}</p>
      </div>

      {/* Opportunity */}
      <div className="mb-3 pb-3 border-b border-mork-yellow">
        <h4 className="text-lg font-pirata text-mork-pink mb-1">Opportunity:</h4>
        <p className="text-sm">{road.opportunity}</p>
      </div>

      {/* Aesthetics */}
      <div className="mb-4">
        <h4 className="text-lg font-pirata text-mork-pink mb-2">Aesthetics:</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="opacity-75">Usage:</span>
            <p className="font-semibold">{road.aesthetics.usage}</p>
          </div>
          <div>
            <span className="opacity-75">Age:</span>
            <p className="font-semibold">{road.aesthetics.age}</p>
          </div>
          <div>
            <span className="opacity-75">Smell:</span>
            <p className="font-semibold">{road.aesthetics.smell}</p>
          </div>
          <div>
            <span className="opacity-75">Wanderers:</span>
            <p className="font-semibold">{road.aesthetics.wanderers}</p>
          </div>
          <div className="col-span-2">
            <span className="opacity-75">Surface:</span>
            <p className="font-semibold">{road.aesthetics.surface}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onReroll(road)}
          className="mork-button text-sm py-2 px-3 flex items-center gap-1"
        >
          <RefreshCw size={14} />
          Reroll
        </button>
        <button
          onClick={onClose}
          className="mork-button text-sm py-2 px-3"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RoadTooltip;


