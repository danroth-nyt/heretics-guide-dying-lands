import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Hamburger Button - Bottom-left on portrait, top-left on landscape */}
      <button
        onClick={onToggle}
        className="fixed bottom-4 left-4 md:hidden landscape-show-hamburger bg-mork-black text-mork-yellow border-3 border-mork-black p-3 rounded shadow-2xl flex items-center justify-center landscape-hamburger-top"
        style={{ 
          minWidth: '56px', 
          minHeight: '56px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </>
  );
};

export default MobileNav;

