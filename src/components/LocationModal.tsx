import React from 'react';
import { MapNode } from '../types';
import { X, RefreshCw } from 'lucide-react';

interface LocationModalProps {
  node: MapNode | null;
  onClose: () => void;
  onReroll: (node: MapNode) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ node, onClose, onReroll }) => {
  if (!node) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Convert camelCase to Title Case with spaces
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .trim() // Remove leading space
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center mork-modal-backdrop fade-in"
      onClick={handleBackdropClick}
    >
      <div className="mork-modal w-full h-full md:max-w-2xl md:h-auto md:max-h-[90vh] md:rounded-lg md:mx-4 flex flex-col overflow-hidden" style={{
        paddingTop: window.innerWidth >= 768 ? '2rem' : 'max(2.5rem, calc(env(safe-area-inset-top) + 2rem))'
      }}>
        {/* Pull indicator - mobile only */}
        <div className="md:hidden px-6 pt-2 pb-3">
          <div className="pull-indicator"></div>
        </div>

        {/* Sticky Header */}
        <div className="flex-shrink-0 px-6 pb-4 md:px-8 md:pt-8 md:pb-4 border-b-2 border-mork-yellow" style={{
          paddingTop: window.innerWidth >= 768 ? undefined : '0'
        }}>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-pirata mb-2 leading-tight break-words">{node.locationType}</h2>
              <p className="text-sm md:text-base opacity-75">
                Territory: {node.territory.charAt(0).toUpperCase() + node.territory.slice(1)} | 
                Shape: {node.shape}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 min-h-11 min-w-11 flex items-center justify-center hover:bg-mork-yellow hover:text-mork-black transition-colors rounded flex-shrink-0"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 md:px-8">
          <div className="space-y-4">
            {node.details && Object.keys(node.details).length > 0 ? (
              Object.entries(node.details).map(([key, value]) => (
                <div key={key} className="border-t-2 border-mork-yellow pt-4 first:border-t-0 first:pt-0">
                  <h3 className="text-xl md:text-2xl font-pirata mb-2 text-mork-pink">
                    {formatKey(key)}:
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed">{value}</p>
                </div>
              ))
            ) : (
              <div className="border-t-2 border-mork-yellow pt-4">
                <p className="text-base md:text-lg italic opacity-75">
                  No additional details available for this location type.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Actions Footer */}
        <div className="flex-shrink-0 px-6 pt-4 md:px-8 md:pb-8 border-t-2 border-mork-yellow bg-mork-black" style={{
          paddingBottom: window.innerWidth >= 768 ? undefined : 'max(1rem, env(safe-area-inset-bottom))'
        }}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => onReroll(node)}
              className="mork-button flex items-center justify-center gap-2 w-full sm:flex-1"
            >
              <RefreshCw size={18} />
              Reroll Details
            </button>
            <button
              onClick={onClose}
              className="mork-button w-full sm:flex-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;


