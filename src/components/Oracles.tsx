import React, { useState } from 'react';
import { Dices, User, Compass, Swords, Users } from 'lucide-react';
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
} from '../data/globalTables';
import {
  encounterContextTable,
  encounterDispositionTable,
  encounterGoalTable,
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

interface RollResult {
  type: 'loot' | 'wander' | 'npc' | 'encounter' | 'adventure' | 'faction';
  result: string | NPCResult | EncounterResult | AdventureResult | FactionResult;
}

interface NPCResult {
  name: string;
  summary: string;
  appearance: string;
  traits: string;
  motivation: string;
  occupation: string;
  habit: string;
  mood: string;
  wants: string;
}

interface EncounterResult {
  context: string;
  disposition: string;
  goal: string;
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

const Oracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

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
    const summary = rollOnTable(npcSummaryTable);
    const appearance = rollOnTable(npcAppearanceTable);
    const traits = rollOnTable(npcTraitsTable);
    const motivation = rollOnTable(npcMotivationTable);
    const occupation = rollOnTable(npcOccupationTable);
    const habit = rollOnTable(npcHabitTable);
    const mood = rollOnTable(npcMoodTable);
    const wants = rollOnTable(npcWantsTable);

    setLastRoll({
      type: 'npc',
      result: { name, summary, appearance, traits, motivation, occupation, habit, mood, wants },
    });
  };

  const rollEncounter = () => {
    const context = rollOnTable(encounterContextTable);
    const disposition = rollOnTable(encounterDispositionTable);
    const goal = rollOnTable(encounterGoalTable);

    setLastRoll({
      type: 'encounter',
      result: { context, disposition, goal },
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
            <p><strong>Summary:</strong> {npc.summary}</p>
            <p><strong>Appearance:</strong> {npc.appearance}</p>
            <p><strong>Traits:</strong> {npc.traits}</p>
            <p><strong>Motivation:</strong> {npc.motivation}</p>
            <p><strong>Occupation:</strong> {npc.occupation}</p>
            <p><strong>Habit:</strong> {npc.habit}</p>
            <p><strong>Mood:</strong> {npc.mood}</p>
            <p><strong>Wants:</strong> {npc.wants}</p>
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
      {/* General Oracles */}
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={rollWander}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Compass size={16} />
          Why Wander?
        </button>

        <button
          onClick={rollAdventure}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Compass size={16} />
          Roll Adventure
        </button>

        <button
          onClick={rollEncounter}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Swords size={16} />
          Roll Encounter
        </button>
        
        <button
          onClick={rollNPC}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <User size={16} />
          Roll NPC
        </button>

        <button
          onClick={rollFaction}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Users size={16} />
          Roll Faction
        </button>

        <button
          onClick={rollLoot}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Loot
        </button>
      </div>

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default Oracles;
