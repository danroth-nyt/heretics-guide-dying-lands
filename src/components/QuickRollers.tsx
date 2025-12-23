import React, { useState } from 'react';
import { Dices, User, Compass, Swords, DoorOpen } from 'lucide-react';
import { rollDice } from '../utils/diceUtils';
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
  dungeonOriginTable,
  dungeonThemeTable,
  dungeonRoomArchitectureTable,
  dungeonRoomDressingTable,
} from '../data/oracles/recluse_dungeon';

interface RollResult {
  type: 'loot' | 'wander' | 'npc' | 'encounter' | 'dungeonRoom';
  result: string | NPCResult | EncounterResult | DungeonRoomResult;
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

interface DungeonRoomResult {
  origin: string;
  theme: string;
  architecture: string;
  dressing: string;
}

const QuickRollers: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

  const rollLoot = () => {
    const roll = rollDice(6) * 10 + rollDice(6);
    const entry = lootTable.entries.find((e) => e.roll === roll);
    setLastRoll({
      type: 'loot',
      result: entry ? entry.result : 'Unknown',
    });
  };

  const rollWander = () => {
    const roll = rollDice(20);
    const entry = wanderTable.entries.find((e) => e.roll === roll);
    setLastRoll({
      type: 'wander',
      result: entry ? entry.result : 'Unknown',
    });
  };

  const rollNPC = () => {
    // Roll on ALL NPC oracle tables
    const firstNameRoll = rollDice(100);
    const surnameRoll = rollDice(100);
    const summaryRoll = rollDice(20);
    const appearanceRoll = rollDice(100);
    const traitsRoll = rollDice(100);
    const motivationRoll = rollDice(20);
    const occupationRoll = rollDice(12);
    const habitRoll = rollDice(12);
    const moodRoll = rollDice(12);
    const wantsRoll = rollDice(12);

    const firstName = npcFirstNamesTable.entries.find((e) => e.roll === firstNameRoll)?.result || 'Unknown';
    const surname = npcSurnamesTable.entries.find((e) => e.roll === surnameRoll)?.result || 'Unknown';
    const name = `${firstName} ${surname}`;
    const summary = npcSummaryTable.entries.find((e) => e.roll === summaryRoll)?.result || 'Unknown';
    const appearance = npcAppearanceTable.entries.find((e) => e.roll === appearanceRoll)?.result || 'Unknown';
    const traits = npcTraitsTable.entries.find((e) => e.roll === traitsRoll)?.result || 'Unknown';
    const motivation = npcMotivationTable.entries.find((e) => e.roll === motivationRoll)?.result || 'Unknown';
    const occupation = npcOccupationTable.entries.find((e) => e.roll === occupationRoll)?.result || 'Unknown';
    const habit = npcHabitTable.entries.find((e) => e.roll === habitRoll)?.result || 'Unknown';
    const mood = npcMoodTable.entries.find((e) => e.roll === moodRoll)?.result || 'Unknown';
    const wants = npcWantsTable.entries.find((e) => e.roll === wantsRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'npc',
      result: { name, summary, appearance, traits, motivation, occupation, habit, mood, wants },
    });
  };

  const rollEncounter = () => {
    const contextRoll = rollDice(12);
    const dispositionRoll = rollDice(10);
    const goalRoll = rollDice(10);

    const context = encounterContextTable.entries.find((e) => e.roll === contextRoll)?.result || 'Unknown';
    const disposition = encounterDispositionTable.entries.find((e) => e.roll === dispositionRoll)?.result || 'Unknown';
    const goal = encounterGoalTable.entries.find((e) => e.roll === goalRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'encounter',
      result: { context, disposition, goal },
    });
  };

  const rollDungeonRoom = () => {
    const originRoll = rollDice(6);
    const themeRoll = rollDice(12);
    const architectureRoll = rollDice(20);
    const dressingRoll = rollDice(20);

    const origin = dungeonOriginTable.entries.find((e) => e.roll === originRoll)?.result || 'Unknown';
    const theme = dungeonThemeTable.entries.find((e) => e.roll === themeRoll)?.result || 'Unknown';
    const architecture = dungeonRoomArchitectureTable.entries.find((e) => e.roll === architectureRoll)?.result || 'Unknown';
    const dressing = dungeonRoomDressingTable.entries.find((e) => e.roll === dressingRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'dungeonRoom',
      result: { origin, theme, architecture, dressing },
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
          <h3 className="text-sm font-bold uppercase text-mork-pink">Random Encounter:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Context:</strong> {encounter.context}</p>
            <p><strong>Disposition:</strong> {encounter.disposition}</p>
            <p><strong>Goal:</strong> {encounter.goal}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'dungeonRoom' && typeof lastRoll.result === 'object' && 'origin' in lastRoll.result) {
      const room = lastRoll.result as DungeonRoomResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Dungeon Room:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {room.origin}</p>
            <p><strong>Theme:</strong> {room.theme}</p>
            <p><strong>Architecture:</strong> {room.architecture}</p>
            <p><strong>Dressing:</strong> {room.dressing}</p>
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
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={rollLoot}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Loot
        </button>
        
        <button
          onClick={rollNPC}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <User size={16} />
          Roll NPC
        </button>
        
        <button
          onClick={rollWander}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Compass size={16} />
          Why Wander?
        </button>

        <button
          onClick={rollEncounter}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Swords size={16} />
          Roll Encounter
        </button>

        <button
          onClick={rollDungeonRoom}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <DoorOpen size={16} />
          Roll Dungeon Room
        </button>
      </div>

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default QuickRollers;

