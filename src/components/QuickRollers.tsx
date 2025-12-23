import React, { useState } from 'react';
import { Dices, User, Compass } from 'lucide-react';
import { rollDice } from '../utils/diceUtils';
import {
  lootTable,
  wanderTable,
  npcNameTable,
  npcOccupationTable,
  npcHabitTable,
  npcMoodTable,
  npcWantsTable,
} from '../data/globalTables';

interface RollResult {
  type: 'loot' | 'wander' | 'npc';
  result: string | NPCResult;
}

interface NPCResult {
  name: string;
  occupation: string;
  habit: string;
  mood: string;
  wants: string;
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
    const nameRoll = rollDice(12);
    const occupationRoll = rollDice(12);
    const habitRoll = rollDice(12);
    const moodRoll = rollDice(12);
    const wantsRoll = rollDice(12);

    const name = npcNameTable.entries.find((e) => e.roll === nameRoll)?.result || 'Unknown';
    const occupation = npcOccupationTable.entries.find((e) => e.roll === occupationRoll)?.result || 'Unknown';
    const habit = npcHabitTable.entries.find((e) => e.roll === habitRoll)?.result || 'Unknown';
    const mood = npcMoodTable.entries.find((e) => e.roll === moodRoll)?.result || 'Unknown';
    const wants = npcWantsTable.entries.find((e) => e.roll === wantsRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'npc',
      result: { name, occupation, habit, mood, wants },
    });
  };

  const renderResult = () => {
    if (!lastRoll) return null;

    if (lastRoll.type === 'npc' && typeof lastRoll.result === 'object') {
      const npc = lastRoll.result;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Random NPC:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Name:</strong> {npc.name}</p>
            <p><strong>Occupation:</strong> {npc.occupation}</p>
            <p><strong>Habit:</strong> {npc.habit}</p>
            <p><strong>Mood:</strong> {npc.mood}</p>
            <p><strong>Wants:</strong> {npc.wants}</p>
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
      </div>

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default QuickRollers;

