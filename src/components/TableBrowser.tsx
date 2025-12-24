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
  // Recluse oracle imports
  npcFirstNamesTable,
  npcSurnamesTable,
  villageNamesTable,
  npcSummaryTable,
  npcMotivationTable,
  npcAppearanceTable,
  npcTraitsTable,
  weatherPrecipitationTable,
  weatherWindTable,
  weatherTemperatureTable,
  actionOracleTable,
  themeOracleTable,
  descriptorOracleTable,
} from '../data/globalTables';
import {
  dungeonOriginTable,
  dungeonPurposeNowTable,
  dungeonThemeTable,
  dungeonEntranceStateTable,
  dungeonRoomArchitectureTable,
  dungeonRoomDressingTable,
  dungeonHazardsTable,
  dungeonDiscoveryTable,
  dungeonEntranceHazardsTable,
  dungeonRoomPurposeTable,
  dungeonAirTempTable,
  dungeonLightTable,
} from '../data/oracles/recluse_dungeon';
import {
  cityMoodTable,
  neighborhoodTypeTable,
  streetActivityTable,
  buildingTypeTable,
  cityRumorsTable,
  cityThreatsTable,
  streetSurfaceTable,
  streetSmellTable,
  streetFeatureTable,
  buildingInteriorTable,
  buildingHiddenElementTable,
} from '../data/oracles/recluse_city';
import {
  majorLandmarksTable,
  ruinousLandmarksTable,
  wildernessThreatSignsTable,
  strangeLandmarksTable,
  wildernessHazardsTable,
  unnaturalHazardsTable,
} from '../data/oracles/recluse_wilderness';
import {
  encounterContextTable,
  encounterDispositionTable,
  encounterGoalTable,
  encounterComplicationsTable,
} from '../data/oracles/recluse_encounter';
import {
  factionPlotHooksTable,
  factionOriginsTable,
  factionPurposeTable,
  factionAttitudeTable,
  factionPowerTable,
  factionResourcesTable,
  factionWeaknessTable,
} from '../data/oracles/recluse_npc';
import {
  adventureIncitingIncidentTable,
  adventureDestinationTable,
  adventureDangerHeartTable,
  adventureTwistTable,
} from '../data/oracles/recluse_adventure';
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
        // Recluse expanded weather
        { name: 'Weather: Precipitation', table: weatherPrecipitationTable },
        { name: 'Weather: Wind', table: weatherWindTable },
        { name: 'Weather: Temperature', table: weatherTemperatureTable },
      ],
    },
    {
      name: 'Character',
      tables: [
        { name: 'Why Wander?', table: wanderTable },
        { name: 'NPC Name (Simple)', table: npcNameTable },
        { name: 'NPC Occupation', table: npcOccupationTable },
        { name: 'NPC Habit', table: npcHabitTable },
        { name: 'NPC Mood', table: npcMoodTable },
        { name: 'NPC Wants', table: npcWantsTable },
        // Recluse expanded NPC
        { name: 'NPC First Name (d100)', table: npcFirstNamesTable },
        { name: 'NPC Surname (d100)', table: npcSurnamesTable },
        { name: 'NPC Summary', table: npcSummaryTable },
        { name: 'NPC Motivation', table: npcMotivationTable },
        { name: 'NPC Appearance (d100)', table: npcAppearanceTable },
        { name: 'NPC Traits (d100)', table: npcTraitsTable },
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
    {
      name: 'Encounters',
      tables: [
        { name: 'Encounter Context', table: encounterContextTable },
        { name: 'Encounter Disposition', table: encounterDispositionTable },
        { name: 'Encounter Goal', table: encounterGoalTable },
        { name: 'Encounter Complications', table: encounterComplicationsTable },
      ],
    },
    {
      name: 'Wilderness',
      tables: [
        { name: 'Major Landmarks', table: majorLandmarksTable },
        { name: 'Ruinous Landmarks', table: ruinousLandmarksTable },
        { name: 'Threat Signs', table: wildernessThreatSignsTable },
        { name: 'Strange Landmarks', table: strangeLandmarksTable },
        { name: 'Natural Hazards', table: wildernessHazardsTable },
        { name: 'Unnatural Hazards', table: unnaturalHazardsTable },
      ],
    },
    {
      name: 'City',
      tables: [
        { name: 'City Mood', table: cityMoodTable },
        { name: 'Neighborhood Type', table: neighborhoodTypeTable },
        { name: 'Street Activity', table: streetActivityTable },
        { name: 'Building Type', table: buildingTypeTable },
        { name: 'City Rumors', table: cityRumorsTable },
        { name: 'City Threats', table: cityThreatsTable },
        { name: 'Street Surface', table: streetSurfaceTable },
        { name: 'Street Smell', table: streetSmellTable },
        { name: 'Street Feature', table: streetFeatureTable },
        { name: 'Building Interior', table: buildingInteriorTable },
        { name: 'Hidden Element', table: buildingHiddenElementTable },
      ],
    },
    {
      name: 'Adventures',
      tables: [
        { name: 'Inciting Incident', table: adventureIncitingIncidentTable },
        { name: 'Destination', table: adventureDestinationTable },
        { name: 'Danger at Heart', table: adventureDangerHeartTable },
        { name: 'Twist', table: adventureTwistTable },
      ],
    },
    {
      name: 'Factions',
      tables: [
        { name: 'Faction Origins', table: factionOriginsTable },
        { name: 'Faction Purpose', table: factionPurposeTable },
        { name: 'Faction Attitude', table: factionAttitudeTable },
        { name: 'Faction Power Level', table: factionPowerTable },
        { name: 'Faction Resources', table: factionResourcesTable },
        { name: 'Faction Weakness', table: factionWeaknessTable },
        { name: 'Faction Plot Hooks', table: factionPlotHooksTable },
      ],
    },
    {
      name: 'Recluse Oracles',
      tables: [
        // General oracles
        { name: 'Action Oracle (d100)', table: actionOracleTable },
        { name: 'Theme Oracle (d100)', table: themeOracleTable },
        { name: 'Descriptor Oracle (d100)', table: descriptorOracleTable },
        // Names
        { name: 'Village Names (d100)', table: villageNamesTable },
        // Dungeon
        { name: 'Dungeon Origin', table: dungeonOriginTable },
        { name: 'Dungeon Purpose Now', table: dungeonPurposeNowTable },
        { name: 'Dungeon Theme', table: dungeonThemeTable },
        { name: 'Dungeon Entrance State', table: dungeonEntranceStateTable },
        { name: 'Dungeon Room Architecture', table: dungeonRoomArchitectureTable },
        { name: 'Dungeon Room Dressing', table: dungeonRoomDressingTable },
        { name: 'Dungeon Hazards', table: dungeonHazardsTable },
        { name: 'Dungeon Discovery', table: dungeonDiscoveryTable },
        { name: 'Dungeon Entrance Hazards', table: dungeonEntranceHazardsTable },
        { name: 'Dungeon Room Purpose', table: dungeonRoomPurposeTable },
        { name: 'Dungeon Air/Temp', table: dungeonAirTempTable },
        { name: 'Dungeon Light', table: dungeonLightTable },
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

