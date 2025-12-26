import React, { useState } from 'react';
import { User, Compass, Swords, Users, ChevronDown, Zap, AlertTriangle, Skull, Eye, Map, Package } from 'lucide-react';
import { rollOnTable } from '../utils/tableLookup';
import {
  lootTable,
  wanderTable,
  npcOccupationTable,
  npcHabitTable,
  npcMoodTable,
  npcWantsTable,
  npcFirstNamesTable,
  npcSurnamesTable,
  npcAppearanceTable,
  npcSummaryTable,
  npcMotivationTable,
  npcTraitsTable,
  npcGenderTable,
  npcBodyFeatureTable,
  npcHairGroomingTable,
  npcClothingDetailTable,
  npcOverallPresenceTable,
  itemColorTable,
  itemQualityTable,
} from '../data/globalTables';
import {
  encounterContextTable,
  encounterDispositionTable,
  encounterGoalTable,
  strangeMeetingsTable,
  arcaneEncountersTable,
  immediateAftermathTable,
  positionalComplicationsTable,
  tacticalComplicationsTable,
  narrativeComplicationsTable,
  multiEntityComplicationsTable,
  socialNarrativeComplicationsTable,
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
import {
  creatureTypeTable,
  armorTierTable,
  moraleTable,
  damageTable,
  beastBehaviorTable,
  beastAppearanceTable,
  wildlifeTypeTable,
} from '../data/oracles/recluse_creature';
import {
  dungeonEntranceSignsTable,
  cityApproachSignsTable,
  undercitySignsTable,
  largeCreatureSignsTable,
  humanThreatSignsTable,
  infestationSignsTable,
  ambushSignsTable,
  stalkingSignsTable,
  travelerSignsTable,
  lostPeopleSignsTable,
  strangeOmensTable,
} from '../data/oracles/recluse_signs';
import {
  naturalHazardsTable,
  weatherDrivenHazardsTable,
  terrainDangersTable,
  unnaturalHazardsTable,
  wildlifeHazardsTable,
  resourceLossHazardsTable,
  travelCostHazardsTable,
  misleadingHazardsTable,
} from '../data/oracles/recluse_hazards';
import {
  dungeonEntranceHazardsTable,
  dungeonHazardsTable,
} from '../data/oracles/recluse_dungeon';
import {
  streetHazardTable,
} from '../data/oracles/recluse_city';

interface RollResult {
  type: 'loot' | 'wander' | 'npc' | 'encounter' | 'adventure' | 'faction' | 'complication' | 'beast' | 'signs' | 'hazards';
  result: string | NPCResult | EncounterResult | AdventureResult | FactionResult | ComplicationResult | BeastResult | SignsResult | HazardsResult;
}

interface NPCResult {
  name: string;
  gender: string;
  summary: string;
  bodyFeature: string;
  hairGrooming: string;
  clothingDetail: string;
  overallPresence: string;
  appearance: string;
  traits: string;
  motivation: string;
  occupation: string;
  habit: string;
  mood: string;
  wants: string;
  itemColor: string;
  itemQuality: string;
}

interface EncounterResult {
  context: string;
  disposition: string;
  goal: string;
  strangeMeeting?: string;
  arcaneEncounter?: string;
  aftermath?: string;
}

interface ComplicationResult {
  positional: string;
  tactical: string;
  narrative: string;
  multiEntity: string;
  socialNarrative: string;
}

interface AdventureResult {
  incitingIncident: string;
  destination: string;
  dangerHeart: string;
  twist: string;
}

interface FactionResult {
  origin: string;
  purpose: string;
  attitude: string;
  power: string;
  resources: string;
  weakness: string;
  plotHook: string;
}

interface BeastResult {
  creatureType: string;
  armor: string;
  morale: string;
  damage: string;
  behavior: string;
  appearance: string;
  wildlife: string;
}

interface SignsResult {
  dungeonEntrance: string;
  cityApproach: string;
  undercity: string;
  largeCreature: string;
  humanThreat: string;
  infestation: string;
  ambush: string;
  stalking: string;
  traveler: string;
  lostPeople: string;
  strangeOmen: string;
}

interface HazardsResult {
  natural: string;
  weatherDriven: string;
  terrain: string;
  unnatural: string;
  wildlife: string;
  resourceLoss: string;
  travelCost: string;
  misleading: string;
  dungeonEntrance: string;
  dungeonRoom: string;
  cityStreet: string;
}

// Collapsible category component
interface OracleCategoryProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const OracleCategory: React.FC<OracleCategoryProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="oracle-category">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-2 bg-mork-black text-mork-yellow border-2 border-mork-black hover:bg-mork-yellow hover:text-mork-black transition-colors font-bold text-sm uppercase"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="p-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

const Oracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    characters: false,
    threats: false,
    story: false,
  });

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const rollLoot = () => {
    setLastRoll({
      type: 'loot',
      result: rollOnTable(lootTable),
    });
  };

  const rollWander = () => {
    setLastRoll({
      type: 'wander',
      result: rollOnTable(wanderTable),
    });
  };

  const rollNPC = () => {
    const firstName = rollOnTable(npcFirstNamesTable);
    const surname = rollOnTable(npcSurnamesTable);
    const name = `${firstName} ${surname}`;
    const gender = rollOnTable(npcGenderTable);
    const summary = rollOnTable(npcSummaryTable);
    const bodyFeature = rollOnTable(npcBodyFeatureTable);
    const hairGrooming = rollOnTable(npcHairGroomingTable);
    const clothingDetail = rollOnTable(npcClothingDetailTable);
    const overallPresence = rollOnTable(npcOverallPresenceTable);
    const appearance = rollOnTable(npcAppearanceTable);
    const traits = rollOnTable(npcTraitsTable);
    const motivation = rollOnTable(npcMotivationTable);
    const occupation = rollOnTable(npcOccupationTable);
    const habit = rollOnTable(npcHabitTable);
    const mood = rollOnTable(npcMoodTable);
    const wants = rollOnTable(npcWantsTable);
    const itemColor = rollOnTable(itemColorTable);
    const itemQuality = rollOnTable(itemQualityTable);

    setLastRoll({
      type: 'npc',
      result: { 
        name, 
        gender, 
        summary, 
        bodyFeature, 
        hairGrooming, 
        clothingDetail, 
        overallPresence, 
        appearance, 
        traits, 
        motivation, 
        occupation, 
        habit, 
        mood, 
        wants, 
        itemColor, 
        itemQuality 
      },
    });
  };

  const rollEncounter = () => {
    const context = rollOnTable(encounterContextTable);
    const disposition = rollOnTable(encounterDispositionTable);
    const goal = rollOnTable(encounterGoalTable);
    const strangeMeeting = rollOnTable(strangeMeetingsTable);
    const arcaneEncounter = rollOnTable(arcaneEncountersTable);
    const aftermath = rollOnTable(immediateAftermathTable);

    setLastRoll({
      type: 'encounter',
      result: { context, disposition, goal, strangeMeeting, arcaneEncounter, aftermath },
    });
  };

  const rollComplication = () => {
    const positional = rollOnTable(positionalComplicationsTable);
    const tactical = rollOnTable(tacticalComplicationsTable);
    const narrative = rollOnTable(narrativeComplicationsTable);
    const multiEntity = rollOnTable(multiEntityComplicationsTable);
    const socialNarrative = rollOnTable(socialNarrativeComplicationsTable);

    setLastRoll({
      type: 'complication',
      result: { positional, tactical, narrative, multiEntity, socialNarrative },
    });
  };

  const rollBeast = () => {
    const creatureType = rollOnTable(creatureTypeTable);
    const armor = rollOnTable(armorTierTable);
    const morale = rollOnTable(moraleTable);
    const damage = rollOnTable(damageTable);
    const behavior = rollOnTable(beastBehaviorTable);
    const appearance = rollOnTable(beastAppearanceTable);
    const wildlife = rollOnTable(wildlifeTypeTable);

    setLastRoll({
      type: 'beast',
      result: { creatureType, armor, morale, damage, behavior, appearance, wildlife },
    });
  };

  const rollSigns = () => {
    const dungeonEntrance = rollOnTable(dungeonEntranceSignsTable);
    const cityApproach = rollOnTable(cityApproachSignsTable);
    const undercity = rollOnTable(undercitySignsTable);
    const largeCreature = rollOnTable(largeCreatureSignsTable);
    const humanThreat = rollOnTable(humanThreatSignsTable);
    const infestation = rollOnTable(infestationSignsTable);
    const ambush = rollOnTable(ambushSignsTable);
    const stalking = rollOnTable(stalkingSignsTable);
    const traveler = rollOnTable(travelerSignsTable);
    const lostPeople = rollOnTable(lostPeopleSignsTable);
    const strangeOmen = rollOnTable(strangeOmensTable);

    setLastRoll({
      type: 'signs',
      result: { dungeonEntrance, cityApproach, undercity, largeCreature, humanThreat, infestation, ambush, stalking, traveler, lostPeople, strangeOmen },
    });
  };

  const rollHazards = () => {
    const natural = rollOnTable(naturalHazardsTable);
    const weatherDriven = rollOnTable(weatherDrivenHazardsTable);
    const terrain = rollOnTable(terrainDangersTable);
    const unnatural = rollOnTable(unnaturalHazardsTable);
    const wildlife = rollOnTable(wildlifeHazardsTable);
    const resourceLoss = rollOnTable(resourceLossHazardsTable);
    const travelCost = rollOnTable(travelCostHazardsTable);
    const misleading = rollOnTable(misleadingHazardsTable);
    const dungeonEntrance = rollOnTable(dungeonEntranceHazardsTable);
    const dungeonRoom = rollOnTable(dungeonHazardsTable);
    const cityStreet = rollOnTable(streetHazardTable);

    setLastRoll({
      type: 'hazards',
      result: { natural, weatherDriven, terrain, unnatural, wildlife, resourceLoss, travelCost, misleading, dungeonEntrance, dungeonRoom, cityStreet },
    });
  };

  const rollAdventure = () => {
    const incitingIncident = rollOnTable(adventureIncitingIncidentTable);
    const destination = rollOnTable(adventureDestinationTable);
    const dangerHeart = rollOnTable(adventureDangerHeartTable);
    const twist = rollOnTable(adventureTwistTable);

    setLastRoll({
      type: 'adventure',
      result: { incitingIncident, destination, dangerHeart, twist },
    });
  };

  const rollFaction = () => {
    const origin = rollOnTable(factionOriginsTable);
    const purpose = rollOnTable(factionPurposeTable);
    const attitude = rollOnTable(factionAttitudeTable);
    const power = rollOnTable(factionPowerTable);
    const resources = rollOnTable(factionResourcesTable);
    const weakness = rollOnTable(factionWeaknessTable);
    const plotHook = rollOnTable(factionPlotHooksTable);

    setLastRoll({
      type: 'faction',
      result: { origin, purpose, attitude, power, resources, weakness, plotHook },
    });
  };

  const renderResult = () => {
    if (!lastRoll) return null;

    if (lastRoll.type === 'npc' && typeof lastRoll.result === 'object' && 'occupation' in lastRoll.result) {
      const npc = lastRoll.result as NPCResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Random NPC:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Name:</strong> {npc.name}</p>
            <p><strong>Gender:</strong> {npc.gender}</p>
            <p><strong>Summary:</strong> {npc.summary}</p>
            <p><strong>Body:</strong> {npc.bodyFeature}</p>
            <p><strong>Hair/Grooming:</strong> {npc.hairGrooming}</p>
            <p><strong>Clothing:</strong> {npc.clothingDetail}</p>
            <p><strong>Presence:</strong> {npc.overallPresence}</p>
            <p><strong>Detailed Appearance:</strong> {npc.appearance}</p>
            <p><strong>Traits:</strong> {npc.traits}</p>
            <p><strong>Motivation:</strong> {npc.motivation}</p>
            <p><strong>Occupation:</strong> {npc.occupation}</p>
            <p><strong>Habit:</strong> {npc.habit}</p>
            <p><strong>Mood:</strong> {npc.mood}</p>
            <p><strong>Wants:</strong> {npc.wants}</p>
            <p><strong>Notable Item Color:</strong> {npc.itemColor}</p>
            <p><strong>Item Quality:</strong> {npc.itemQuality}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'encounter' && typeof lastRoll.result === 'object' && 'context' in lastRoll.result) {
      const encounter = lastRoll.result as EncounterResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Encounter:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Context:</strong> {encounter.context}</p>
            <p><strong>Disposition:</strong> {encounter.disposition}</p>
            <p><strong>Goal:</strong> {encounter.goal}</p>
            {encounter.strangeMeeting && <p><strong>Strange Meeting:</strong> {encounter.strangeMeeting}</p>}
            {encounter.arcaneEncounter && <p><strong>Arcane Encounter:</strong> {encounter.arcaneEncounter}</p>}
            {encounter.aftermath && <p><strong>Aftermath:</strong> {encounter.aftermath}</p>}
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'complication' && typeof lastRoll.result === 'object' && 'positional' in lastRoll.result) {
      const complication = lastRoll.result as ComplicationResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Complication:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Positional:</strong> {complication.positional}</p>
            <p><strong>Tactical:</strong> {complication.tactical}</p>
            <p><strong>Narrative:</strong> {complication.narrative}</p>
            <p><strong>Multi-Entity:</strong> {complication.multiEntity}</p>
            <p><strong>Social/Narrative:</strong> {complication.socialNarrative}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'beast' && typeof lastRoll.result === 'object' && 'creatureType' in lastRoll.result) {
      const beast = lastRoll.result as BeastResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Beast/Creature:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Type:</strong> {beast.creatureType}</p>
            <p><strong>Armor:</strong> {beast.armor}</p>
            <p><strong>Damage:</strong> {beast.damage}</p>
            <p><strong>Morale:</strong> {beast.morale}</p>
            <p><strong>Behavior:</strong> {beast.behavior}</p>
            <p><strong>Appearance:</strong> {beast.appearance}</p>
            <p><strong>Wildlife (if natural):</strong> {beast.wildlife}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'signs' && typeof lastRoll.result === 'object' && 'dungeonEntrance' in lastRoll.result) {
      const signs = lastRoll.result as SignsResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Signs:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Dungeon Entrance:</strong> {signs.dungeonEntrance}</p>
            <p><strong>City Approach:</strong> {signs.cityApproach}</p>
            <p><strong>Undercity:</strong> {signs.undercity}</p>
            <p><strong>Large Creature:</strong> {signs.largeCreature}</p>
            <p><strong>Human Threat:</strong> {signs.humanThreat}</p>
            <p><strong>Infestation:</strong> {signs.infestation}</p>
            <p><strong>Ambush:</strong> {signs.ambush}</p>
            <p><strong>Stalking:</strong> {signs.stalking}</p>
            <p><strong>Traveler:</strong> {signs.traveler}</p>
            <p><strong>Lost People:</strong> {signs.lostPeople}</p>
            <p><strong>Strange Omen:</strong> {signs.strangeOmen}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'hazards' && typeof lastRoll.result === 'object' && 'natural' in lastRoll.result) {
      const hazards = lastRoll.result as HazardsResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Hazards:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Natural:</strong> {hazards.natural}</p>
            <p><strong>Weather-Driven:</strong> {hazards.weatherDriven}</p>
            <p><strong>Terrain:</strong> {hazards.terrain}</p>
            <p><strong>Unnatural:</strong> {hazards.unnatural}</p>
            <p><strong>Wildlife:</strong> {hazards.wildlife}</p>
            <p><strong>Resource Loss:</strong> {hazards.resourceLoss}</p>
            <p><strong>Travel Cost:</strong> {hazards.travelCost}</p>
            <p><strong>Misleading:</strong> {hazards.misleading}</p>
            <p><strong>Dungeon Entrance:</strong> {hazards.dungeonEntrance}</p>
            <p><strong>Dungeon Room:</strong> {hazards.dungeonRoom}</p>
            <p><strong>City Street:</strong> {hazards.cityStreet}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'adventure' && typeof lastRoll.result === 'object' && 'incitingIncident' in lastRoll.result) {
      const adventure = lastRoll.result as AdventureResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Adventure Hook:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Inciting Incident:</strong> {adventure.incitingIncident}</p>
            <p><strong>Destination:</strong> {adventure.destination}</p>
            <p><strong>Danger:</strong> {adventure.dangerHeart}</p>
            <p><strong>Twist:</strong> {adventure.twist}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'faction' && typeof lastRoll.result === 'object' && 'plotHook' in lastRoll.result) {
      const faction = lastRoll.result as FactionResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Faction:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {faction.origin}</p>
            <p><strong>Purpose:</strong> {faction.purpose}</p>
            <p><strong>Power:</strong> {faction.power}</p>
            <p><strong>Resources:</strong> {faction.resources}</p>
            <p><strong>Weakness:</strong> {faction.weakness}</p>
            <p><strong>Attitude:</strong> {faction.attitude}</p>
            <p><strong>Plot Hook:</strong> {faction.plotHook}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="mork-panel">
        <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">
          {lastRoll.type === 'loot' ? 'Loot:' : 'Why Wander:'}
        </h3>
        <p className="text-xs">{lastRoll.result as string}</p>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Quick Access Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase font-bold text-mork-black opacity-75">
          <Zap size={14} />
          <span>Quick Access</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={rollComplication}
            className="oracle-quick-btn mork-button text-xs py-2 px-1 min-h-0 flex flex-col items-center justify-center gap-1"
          >
            <AlertTriangle size={16} />
            <span className="leading-tight text-center">Complication</span>
          </button>
          <button
            onClick={rollNPC}
            className="oracle-quick-btn mork-button text-xs py-2 px-1 min-h-0 flex flex-col items-center justify-center gap-1"
          >
            <User size={16} />
            <span className="leading-tight">NPC</span>
          </button>
          <button
            onClick={rollLoot}
            className="oracle-quick-btn mork-button text-xs py-2 px-1 min-h-0 flex flex-col items-center justify-center gap-1"
          >
            <Package size={16} />
            <span className="leading-tight">Loot</span>
          </button>
        </div>
      </div>

      {/* Categorized Oracles */}
      <div className="space-y-2">
        {/* Characters Category */}
        <OracleCategory
          title="Characters"
          isOpen={openCategories.characters}
          onToggle={() => toggleCategory('characters')}
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={rollNPC}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <User size={14} className="shrink-0" />
              <span className="leading-tight">NPC</span>
            </button>
            <button
              onClick={rollFaction}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Users size={14} className="shrink-0" />
              <span className="leading-tight">Faction</span>
            </button>
          </div>
        </OracleCategory>

        {/* Threats Category */}
        <OracleCategory
          title="Threats"
          isOpen={openCategories.threats}
          onToggle={() => toggleCategory('threats')}
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={rollEncounter}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Swords size={14} className="shrink-0" />
              <span className="leading-tight">Encounter</span>
            </button>
            <button
              onClick={rollComplication}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <AlertTriangle size={14} className="shrink-0" />
              <span className="leading-tight">Complication</span>
            </button>
            <button
              onClick={rollBeast}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Skull size={14} className="shrink-0" />
              <span className="leading-tight">Beast</span>
            </button>
            <button
              onClick={rollHazards}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Zap size={14} className="shrink-0" />
              <span className="leading-tight">Hazards</span>
            </button>
          </div>
        </OracleCategory>

        {/* Story & World Category */}
        <OracleCategory
          title="Story & World"
          isOpen={openCategories.story}
          onToggle={() => toggleCategory('story')}
        >
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={rollWander}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Compass size={14} className="shrink-0" />
              <span className="leading-tight">Wander</span>
            </button>
            <button
              onClick={rollAdventure}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Map size={14} className="shrink-0" />
              <span className="leading-tight">Adventure</span>
            </button>
            <button
              onClick={rollSigns}
              className="mork-button text-xs py-2 flex flex-col items-center justify-center gap-1 min-h-[3rem]"
            >
              <Eye size={14} className="shrink-0" />
              <span className="leading-tight">Signs</span>
            </button>
          </div>
        </OracleCategory>
      </div>

      {/* Results Section - Always at bottom */}
      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default Oracles;
