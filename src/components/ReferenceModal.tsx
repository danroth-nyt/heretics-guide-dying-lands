import React, { useState } from 'react';
import { X } from 'lucide-react';
import TableBrowser from './TableBrowser';
import TableDisplay from './TableDisplay';
import { Table } from '../types';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferenceModal: React.FC<ReferenceModalProps> = ({ isOpen, onClose }) => {
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-mork-yellow border-4 border-mork-black w-full max-w-6xl h-[90vh] flex flex-col mx-2 md:mx-4">
        {/* Header */}
        <div className="bg-mork-black text-mork-yellow p-3 md:p-4 flex items-center justify-between border-b-4 border-mork-black">
          <h2 className="text-xl md:text-2xl font-pirata">📖 TABLE REFERENCE</h2>
          <button
            onClick={onClose}
            className="hover:text-mork-pink transition-colors min-h-11 min-w-11 flex items-center justify-center"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 md:p-4 border-b-2 border-mork-black">
          <input
            type="text"
            placeholder="🔍 Search tables..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 min-h-11 border-2 border-mork-black bg-white focus:outline-none focus:border-mork-pink"
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Panel - Table Browser */}
          <div className="w-full md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-mork-black overflow-y-auto p-3 md:p-4 max-h-48 md:max-h-none">
            <TableBrowser
              onSelectTable={setSelectedTable}
              selectedTable={selectedTable}
              searchQuery={searchQuery}
            />
          </div>

          {/* Right Panel - Table Display */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4">
            <TableDisplay table={selectedTable} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceModal;

