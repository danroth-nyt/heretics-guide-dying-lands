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
      className="fixed inset-0 z-50 flex items-center justify-center mork-modal-backdrop fade-in md:pl-72"
      onClick={handleBackdropClick}
    >
      <div className="mork-modal modal-responsive-container landscape-modal-container w-full md:max-w-2xl md:rounded-lg md:mx-4 flex flex-col overflow-hidden">
        {/* Pull indicator - mobile only, hidden in landscape */}
        <div className="md:hidden landscape-hide px-6 pt-2 pb-3">
          <div className="pull-indicator"></div>
        </div>

        {/* Sticky Header - Compact in landscape */}
        <div className="flex-shrink-0 modal-header-responsive landscape-modal-header px-6 pb-4 md:px-8 md:pb-4 border-b-2 border-mork-yellow">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-pirata mb-2 leading-tight break-words">{node.locationType}</h2>
              <p className="text-sm md:text-base opacity-75 landscape-hide">
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

        {/* Scrollable Content - 2 columns in landscape */}
        <div className="flex-1 overflow-y-auto landscape-modal-body px-6 py-4 md:px-8">
          <div className="space-y-4 landscape-modal-content">
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

        {/* Sticky Actions Footer - Compact buttons in landscape */}
        <div className="flex-shrink-0 modal-footer-responsive landscape-compact-buttons px-6 pt-4 md:px-8 border-t-2 border-mork-yellow bg-mork-black">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => onReroll(node)}
              className="mork-button flex items-center justify-center gap-2 w-full sm:flex-1"
            >
              <RefreshCw size={18} />
              <span>Reroll</span>
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

