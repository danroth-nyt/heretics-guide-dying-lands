import React from 'react';
import { Move } from '../data/moves';

interface CategoryFilterProps {
  selectedCategory: Move['category'] | 'All';
  onCategoryChange: (category: Move['category'] | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: (Move['category'] | 'All')[] = [
    'All',
    'Travel',
    'Dungeon',
    'City',
    'Connection',
    'Quest',
    'Hearth',
    'Advancement',
    'Adventure',
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-3 py-1.5 text-xs font-bold uppercase whitespace-nowrap transition-all border-2 border-mork-black ${
            selectedCategory === category
              ? 'bg-mork-blood text-mork-yellow'
              : 'bg-mork-yellow text-mork-black hover:bg-mork-black hover:text-mork-yellow'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

