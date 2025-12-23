import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Table, LocationType } from '../types';
import {
  oracleTable,
  fateTable,
  lootTable,
  landscapeTable,
  weatherTable,
  wanderTable,
  npcNameTable,
  npcOccupationTable,
  npcHabitTable,
  npcMoodTable,
  npcWantsTable,
  weaponsTable,
  additionalStockTable,
} from '../data/globalTables';
import { locationTables } from '../data/locationTables';
import {
  difficultyTable,
  encounterTables,
  opportunityTables,
  usageTable,
  ageTable,
  smellTable,
  wanderersTable,
  surfaceTable,
} from '../data/roadTables';

interface TableBrowserProps {
  onSelectTable: (table: Table) => void;
  selectedTable: Table | null;
  searchQuery: string;
}

interface Category {
  name: string;
  tables: { name: string; table: Table }[];
}

const TableBrowser: React.FC<TableBrowserProps> = ({
  onSelectTable,
  selectedTable,
  searchQuery,
}) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['Global'])
  );

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName);
    } else {
      newExpanded.add(categoryName);
    }
    setExpandedCategories(newExpanded);
  };

  const categories: Category[] = [
    {
      name: 'Global',
      tables: [
        { name: 'Oracle', table: oracleTable },
        { name: 'Fate Prophecies', table: fateTable },
        { name: 'Loot', table: lootTable },
        { name: 'Landscape', table: landscapeTable },
        { name: 'Weather', table: weatherTable },
      ],
    },
    {
      name: 'Character',
      tables: [
        { name: 'Why Wander?', table: wanderTable },
        { name: 'NPC Name', table: npcNameTable },
        { name: 'NPC Occupation', table: npcOccupationTable },
        { name: 'NPC Habit', table: npcHabitTable },
        { name: 'NPC Mood', table: npcMoodTable },
        { name: 'NPC Wants', table: npcWantsTable },
      ],
    },
    {
      name: 'Items',
      tables: [
        { name: 'Weapons & Gear', table: weaponsTable },
        { name: 'Additional Shop Stock', table: additionalStockTable },
      ],
    },
    {
      name: 'Roads',
      tables: [
        { name: 'Difficulty', table: difficultyTable },
        { name: 'Easy Encounters', table: encounterTables.easy },
        { name: 'Unpleasant Encounters', table: encounterTables.unpleasant },
        { name: 'Problematic Encounters', table: encounterTables.problematic },
        { name: 'Grueling Encounters', table: encounterTables.grueling },
        { name: 'Easy Opportunities', table: opportunityTables.easy },
        { name: 'Unpleasant Opportunities', table: opportunityTables.unpleasant },
        { name: 'Problematic Opportunities', table: opportunityTables.problematic },
        { name: 'Grueling Opportunities', table: opportunityTables.grueling },
        { name: 'Road Usage', table: usageTable },
        { name: 'Road Age', table: ageTable },
        { name: 'Road Smell', table: smellTable },
        { name: 'Road Wanderers', table: wanderersTable },
        { name: 'Road Surface', table: surfaceTable },
      ],
    },
  ];

  // Add location categories
  const locationTypes: LocationType[] = [
    'Graveyard',
    'Tavern',
    'Tower',
    'Fort',
    'Shrine',
    'Monument',
    'Battlefield',
    'Cannibal Camp',
    'Castle',
    'Mine',
    'Monster Lair',
    'Village',
    'Manor',
    'Dungeon',
    'Ruins',
    'Hermit\'s Cabin',
    'Swamps',
    'Academy',
    'Prison',
    'Shop',
  ];

  locationTypes.forEach((locationType) => {
    const tables = locationTables[locationType];
    if (tables) {
      const locationCategory: Category = {
        name: locationType,
        tables: Object.entries(tables).map(([, table]) => ({
          name: table.name,
          table: table,
        })),
      };
      categories.push(locationCategory);
    }
  });

  // Filter tables based on search query
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      tables: category.tables.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.tables.length > 0);

  return (
    <div className="space-y-2">
      {filteredCategories.map((category) => (
        <div key={category.name}>
          <button
            onClick={() => toggleCategory(category.name)}
            className="w-full flex items-center gap-2 p-2 bg-mork-black text-mork-yellow hover:bg-opacity-90 transition-colors"
          >
            {expandedCategories.has(category.name) ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
            <span className="font-bold text-sm uppercase">{category.name}</span>
          </button>

          {expandedCategories.has(category.name) && (
            <div className="ml-4 mt-1 space-y-1">
              {category.tables.map((tableItem) => (
                <button
                  key={tableItem.name}
                  onClick={() => onSelectTable(tableItem.table)}
                  className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                    selectedTable === tableItem.table
                      ? 'bg-mork-pink text-white font-bold'
                      : 'hover:bg-mork-black hover:bg-opacity-10'
                  }`}
                >
                  • {tableItem.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TableBrowser;

