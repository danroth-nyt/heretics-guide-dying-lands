import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  storageKey?: string;
  icon?: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  children,
  defaultOpen = false,
  storageKey,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      return saved !== null ? JSON.parse(saved) : defaultOpen;
    }
    return defaultOpen;
  });

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(isOpen));
    }
  }, [isOpen, storageKey]);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-mork-black text-mork-yellow p-3 border-2 border-mork-black hover:bg-opacity-90 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-bold uppercase text-sm">{title}</span>
        </div>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-3 pb-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;

