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
  const [adjustedPosition, setAdjustedPosition] = useState({ left: position.x, top: position.y, transform: 'translate(-50%, 0)' });
  const [isPositioned, setIsPositioned] = useState(false);

  // Difficulty color
  const getDifficultyColor = () => {
    switch (road?.difficulty) {
      case 'easy': return 'text-green-400';
      case 'unpleasant': return 'text-yellow-400';
      case 'problematic': return 'text-orange-400';
      case 'grueling': return 'text-mork-pink';
      default: return '';
    }
  };

  // Backdrop click handler
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Reset positioning state when road changes
    setIsPositioned(false);
    
    if (!tooltipRef.current || !road) return;

    // Small delay to let DOM render with new content before measuring
    const timeoutId = setTimeout(() => {
      if (!tooltipRef.current) return;
      
      const tooltip = tooltipRef.current;
      const rect = tooltip.getBoundingClientRect();
      const padding = 20;
      const gap = 20; // Gap between cursor and tooltip

      let left = position.x;
      let top = position.y;
      
      // Use a simpler, more reliable positioning strategy
      // If clicked in top third of screen, always go down
      // If clicked in bottom third, always go up
      // In middle, use smart positioning
      const screenThirdHeight = window.innerHeight / 3;
      let transformY: string;
      
      if (position.y < screenThirdHeight) {
        // Top third: always position below cursor
        top = position.y + gap;
        transformY = '0%';
      } else if (position.y > window.innerHeight - screenThirdHeight) {
        // Bottom third: always position above cursor
        top = position.y - gap;
        transformY = '-100%';
      } else {
        // Middle: check what fits best
        const fitsAbove = position.y - rect.height - gap >= padding;
        const fitsBelow = position.y + rect.height + gap <= window.innerHeight - padding;
        
        if (fitsBelow) {
          // Prefer below if it fits
          top = position.y + gap;
          transformY = '0%';
        } else if (fitsAbove) {
          // Otherwise try above
          top = position.y - gap;
          transformY = '-100%';
        } else {
          // Last resort: center in viewport
          top = window.innerHeight / 2;
          transformY = '-50%';
        }
      }

      // Calculate horizontal position
      let transformX = '-50%';
      const halfWidth = rect.width / 2;
      
      if (position.x - halfWidth < padding) {
        // Would go off left edge
        left = padding + halfWidth;
      } else if (position.x + halfWidth > window.innerWidth - padding) {
        // Would go off right edge
        left = window.innerWidth - padding - halfWidth;
      }

      setAdjustedPosition({
        left,
        top,
        transform: `translate(${transformX}, ${transformY})`
      });
      
      setIsPositioned(true);
    }, 10);
    
    return () => clearTimeout(timeoutId);
  }, [position, road]);

  if (!road) return null;

  return (
    <>
      {/* Mobile: Full-screen modal with backdrop */}
      <div 
        className="md:hidden fixed inset-0 z-50 flex items-center justify-center mork-modal-backdrop fade-in"
        onClick={handleBackdropClick}
      >
        <div className="mork-modal modal-responsive-container landscape-modal-container w-full flex flex-col overflow-hidden">
          {/* Pull indicator - hidden in landscape */}
          <div className="px-6 pt-2 pb-3 landscape-hide">
            <div className="pull-indicator"></div>
          </div>

          {/* Sticky Header - Compact in landscape */}
          <div className="flex-shrink-0 landscape-modal-header px-6 pb-4 border-b-2 border-mork-yellow">
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-2xl font-pirata flex-1">Road Details</h3>
              <button
                onClick={onClose}
                className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:bg-mork-yellow hover:text-mork-black transition-colors rounded flex-shrink-0"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Content - 2 columns in landscape */}
          <div className="flex-1 overflow-y-auto landscape-modal-body px-6 py-4">
            <div className="landscape-modal-content">
              {/* Difficulty */}
              <div className="mb-4 pb-4 border-b-2 border-mork-yellow">
                <span className="text-base opacity-75">Difficulty: </span>
                <span className={`text-xl font-bold uppercase ${getDifficultyColor()}`}>
                  {road.difficulty}
                </span>
              </div>

              {/* Encounter */}
              <div className="mb-4 pb-4 border-b-2 border-mork-yellow">
                <h4 className="text-xl font-pirata text-mork-pink mb-2">Encounter:</h4>
                <p className="text-base leading-relaxed">{road.encounter}</p>
              </div>

              {/* Opportunity */}
              <div className="mb-4 pb-4 border-b-2 border-mork-yellow">
                <h4 className="text-xl font-pirata text-mork-pink mb-2">Opportunity:</h4>
                <p className="text-base leading-relaxed">{road.opportunity}</p>
              </div>

              {/* Aesthetics */}
              <div className="mb-4">
                <h4 className="text-xl font-pirata text-mork-pink mb-3">Aesthetics:</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="opacity-75 block mb-1">Usage:</span>
                    <p className="font-semibold">{road.aesthetics.usage}</p>
                  </div>
                  <div>
                    <span className="opacity-75 block mb-1">Age:</span>
                    <p className="font-semibold">{road.aesthetics.age}</p>
                  </div>
                  <div>
                    <span className="opacity-75 block mb-1">Smell:</span>
                    <p className="font-semibold">{road.aesthetics.smell}</p>
                  </div>
                  <div>
                    <span className="opacity-75 block mb-1">Wanderers:</span>
                    <p className="font-semibold">{road.aesthetics.wanderers}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="opacity-75 block mb-1">Surface:</span>
                    <p className="font-semibold">{road.aesthetics.surface}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Actions Footer - Compact in landscape */}
          <div className="flex-shrink-0 modal-footer-responsive landscape-compact-buttons px-6 pt-4 border-t-2 border-mork-yellow bg-mork-black">
            <div className="flex gap-3">
              <button
                onClick={() => onReroll(road)}
                className="mork-button flex-1 flex items-center justify-center gap-2"
              >
                <RefreshCw size={16} />
                <span className="landscape-button-text">Reroll</span>
              </button>
              <button
                onClick={onClose}
                className="mork-button flex-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Positioned tooltip */}
      <div
        ref={tooltipRef}
        className="hidden md:block fixed z-40 mork-modal p-6 max-w-lg fade-in"
        style={{
          left: `${adjustedPosition.left}px`,
          top: `${adjustedPosition.top}px`,
          transform: adjustedPosition.transform,
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto',
          opacity: isPositioned ? 1 : 0,
          transition: 'opacity 0.15s ease-in',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-pirata">Road Details</h3>
          <button
            onClick={onClose}
            className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:bg-mork-yellow hover:text-mork-black transition-colors rounded"
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
          <p className="text-base leading-relaxed">{road.encounter}</p>
        </div>

        {/* Opportunity */}
        <div className="mb-3 pb-3 border-b border-mork-yellow">
          <h4 className="text-lg font-pirata text-mork-pink mb-1">Opportunity:</h4>
          <p className="text-base leading-relaxed">{road.opportunity}</p>
        </div>

        {/* Aesthetics */}
        <div className="mb-4">
          <h4 className="text-lg font-pirata text-mork-pink mb-2">Aesthetics:</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="opacity-75 block mb-1">Usage:</span>
              <p className="font-semibold">{road.aesthetics.usage}</p>
            </div>
            <div>
              <span className="opacity-75 block mb-1">Age:</span>
              <p className="font-semibold">{road.aesthetics.age}</p>
            </div>
            <div>
              <span className="opacity-75 block mb-1">Smell:</span>
              <p className="font-semibold">{road.aesthetics.smell}</p>
            </div>
            <div>
              <span className="opacity-75 block mb-1">Wanderers:</span>
              <p className="font-semibold">{road.aesthetics.wanderers}</p>
            </div>
            <div className="col-span-2">
              <span className="opacity-75 block mb-1">Surface:</span>
              <p className="font-semibold">{road.aesthetics.surface}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onReroll(road)}
            className="mork-button text-sm py-2 px-3 flex items-center gap-1 min-h-11"
          >
            <RefreshCw size={14} />
            Reroll
          </button>
          <button
            onClick={onClose}
            className="mork-button text-sm py-2 px-3 min-h-11"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default RoadTooltip;


