import React, { useState } from 'react';
import { Dices } from 'lucide-react';
import { Table } from '../types';
import { rollDice } from '../utils/diceUtils';

interface TableDisplayProps {
  table: Table | null;
}

const TableDisplay: React.FC<TableDisplayProps> = ({ table }) => {
  const [rolledResult, setRolledResult] = useState<string | null>(null);

  if (!table) {
    return (
      <div className="flex items-center justify-center h-full text-center p-8">
        <div>
          <p className="text-2xl font-pirata mb-2">Select a table</p>
          <p className="text-sm opacity-75">Choose a table from the left to view its contents</p>
        </div>
      </div>
    );
  }

  const handleRoll = () => {
    // Determine dice type from table name or entries
    const firstEntry = table.entries[0];
    let diceType = 20; // default
    
    if (table.name.includes('d66')) {
      const roll = rollDice(6) * 10 + rollDice(6);
      const entry = table.entries.find((e) => e.roll === roll);
      setRolledResult(entry ? `[${roll}] ${entry.result}` : 'Unknown');
      return;
    } else if (table.name.includes('d20')) {
      diceType = 20;
    } else if (table.name.includes('d12')) {
      diceType = 12;
    } else if (table.name.includes('d10')) {
      diceType = 10;
    } else if (table.name.includes('d8')) {
      diceType = 8;
    } else if (table.name.includes('d6')) {
      diceType = 6;
    } else if (table.name.includes('d4')) {
      diceType = 4;
    } else if (typeof firstEntry.roll === 'number') {
      // Infer from max roll value
      const maxRoll = Math.max(...table.entries.map(e => typeof e.roll === 'number' ? e.roll : 0));
      if (maxRoll <= 4) diceType = 4;
      else if (maxRoll <= 6) diceType = 6;
      else if (maxRoll <= 8) diceType = 8;
      else if (maxRoll <= 10) diceType = 10;
      else if (maxRoll <= 12) diceType = 12;
      else diceType = 20;
    }

    const roll = rollDice(diceType);
    const entry = table.entries.find((e) => {
      if (typeof e.roll === 'number') {
        return e.roll === roll;
      } else if (typeof e.roll === 'string') {
        // Handle range strings like "1-4"
        const rangeParts = e.roll.split('-');
        if (rangeParts.length === 2) {
          const min = parseInt(rangeParts[0]);
          const max = parseInt(rangeParts[1]);
          return roll >= min && roll <= max;
        }
      }
      return false;
    });

    setRolledResult(entry ? `[${roll}] ${entry.result}` : `[${roll}] Unknown`);
  };

  return (
    <div className="space-y-4">
      {/* Table Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-pirata">{table.name}</h2>
        <button
          onClick={handleRoll}
          className="mork-button text-sm flex items-center gap-2"
        >
          <Dices size={16} />
          Roll
        </button>
      </div>

      {/* Rolled Result */}
      {rolledResult && (
        <div className="mork-panel bg-mork-pink text-white">
          <h3 className="text-sm font-bold uppercase mb-1">Result:</h3>
          <p className="text-sm">{rolledResult}</p>
        </div>
      )}

      {/* Table Entries */}
      <div className="mork-panel max-h-[600px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-mork-yellow border-b-2 border-mork-black">
            <tr>
              <th className="text-left p-2 font-bold uppercase w-20">Roll</th>
              <th className="text-left p-2 font-bold uppercase">Result</th>
            </tr>
          </thead>
          <tbody>
            {table.entries.map((entry, index) => (
              <tr
                key={index}
                className="border-b border-mork-black border-opacity-20 hover:bg-mork-black hover:bg-opacity-5"
              >
                <td className="p-2 font-mono font-bold">{entry.roll}</td>
                <td className="p-2">{entry.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDisplay;

