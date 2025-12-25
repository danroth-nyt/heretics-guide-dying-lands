import React, { useState } from 'react';
import { X, Swords } from 'lucide-react';
import { MOVES, Move } from '../data/moves';
import CategoryFilter from './CategoryFilter';
import MoveCard from './MoveCard';

interface MovesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MovesModal: React.FC<MovesModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<Move['category'] | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  // Filter moves by category and search query
  const filteredMoves = MOVES.filter((move) => {
    const matchesCategory = selectedCategory === 'All' || move.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      move.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      move.trigger.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="fixed inset-0 mork-modal-backdrop flex items-center justify-center p-4 no-print"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="mobile-modal-container mork-modal w-full modal-responsive-container overflow-hidden flex flex-col lg:max-w-7xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pull indicator for mobile */}
        <div className="pt-2 pb-1 md:hidden">
          <div className="pull-indicator"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b-2 border-mork-yellow modal-header-responsive landscape-modal-header">
          <div className="flex items-center gap-3">
            <Swords size={28} className="text-mork-blood" />
            <div>
              <h2 className="text-2xl md:text-3xl font-pirata uppercase">Moves</h2>
              <p className="text-xs opacity-75 mt-1">
                PBtA-style character actions and outcomes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mork-button text-xs py-2 px-2 min-h-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search and Category Filter */}
        <div className="p-4 border-b-2 border-mork-yellow space-y-3">
          <input
            type="text"
            placeholder="Search moves..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm border-2 border-mork-black bg-mork-yellow text-mork-black focus:outline-none focus:ring-2 focus:ring-mork-blood"
          />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Moves List */}
        <div className="flex-1 overflow-y-auto p-4 landscape-modal-body">
          {filteredMoves.length === 0 ? (
            <div className="text-center py-12">
              <Swords size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-sm opacity-75">No moves found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 landscape-modal-content">
              {filteredMoves.map((move) => (
                <MoveCard key={move.id} move={move} />
              ))}
            </div>
          )}
        </div>

        {/* Footer with stats */}
        <div className="p-4 border-t-2 border-mork-yellow text-xs opacity-75 text-center modal-footer-responsive landscape-compact-buttons">
          <p>
            Showing {filteredMoves.length} of {MOVES.length} moves
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovesModal;

