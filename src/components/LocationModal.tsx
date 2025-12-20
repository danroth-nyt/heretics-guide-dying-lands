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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center mork-modal-backdrop fade-in"
      onClick={handleBackdropClick}
    >
      <div className="mork-modal max-w-2xl w-full mx-4 p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-4xl font-pirata mb-2">{node.locationType}</h2>
            <p className="text-sm opacity-75">
              Territory: {node.territory.charAt(0).toUpperCase() + node.territory.slice(1)} | 
              Shape: {node.shape}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-mork-yellow hover:text-mork-black transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          {node.details && Object.keys(node.details).length > 0 ? (
            Object.entries(node.details).map(([key, value]) => (
              <div key={key} className="border-t-2 border-mork-yellow pt-3">
                <h3 className="text-xl font-pirata mb-2 text-mork-pink">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </h3>
                <p className="text-base leading-relaxed">{value}</p>
              </div>
            ))
          ) : (
            <div className="border-t-2 border-mork-yellow pt-3">
              <p className="text-base italic opacity-75">
                No additional details available for this location type.
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t-2 border-mork-yellow">
          <button
            onClick={() => onReroll(node)}
            className="mork-button flex items-center gap-2"
          >
            <RefreshCw size={18} />
            Reroll Details
          </button>
          <button
            onClick={onClose}
            className="mork-button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;


