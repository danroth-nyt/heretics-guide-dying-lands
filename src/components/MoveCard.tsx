import React, { useState } from 'react';
import { Move } from '../data/moves';
import { roll2d6WithMod, MoveRollResult } from '../utils/diceUtils';
import { Dices } from 'lucide-react';

interface MoveCardProps {
  move: Move;
}

const MoveCard: React.FC<MoveCardProps> = ({ move }) => {
  const [modifier, setModifier] = useState<number>(0);
  const [lastRoll, setLastRoll] = useState<MoveRollResult | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    setIsRolling(true);
    
    // Animate the roll
    setTimeout(() => {
      const result = roll2d6WithMod(modifier);
      setLastRoll(result);
      setIsRolling(false);
    }, 300);
  };

  const getCategoryColor = (category: Move['category']) => {
    const colors: Record<Move['category'], string> = {
      Travel: 'bg-green-700',
      City: 'bg-blue-700',
      Dungeon: 'bg-purple-700',
      Connection: 'bg-pink-700',
      Quest: 'bg-orange-700',
      Advancement: 'bg-yellow-700',
      Hearth: 'bg-teal-700',
      Adventure: 'bg-indigo-700',
    };
    return colors[category];
  };

  return (
    <div className="mork-panel space-y-3">
      {/* Header with category and roll info */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs font-bold text-white ${getCategoryColor(move.category)}`}>
            {move.category}
          </span>
        </div>
        <div className="text-xs font-bold text-mork-blood">
          {move.roll}
        </div>
      </div>

      {/* Move name */}
      <h3 className="text-lg font-pirata text-mork-blood uppercase">
        {move.name}
      </h3>

      {/* Trigger */}
      <div className="border-t-2 border-mork-black pt-2">
        <p className="text-xs font-bold uppercase mb-1 text-mork-blood">Trigger:</p>
        <p className="text-xs italic text-mork-black">{move.trigger}</p>
      </div>

      {/* Dice Roller */}
      <div className="border-t-2 border-b-2 border-mork-black py-3 space-y-2">
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold uppercase text-mork-black">Modifier:</label>
          <select
            value={modifier}
            onChange={(e) => setModifier(Number(e.target.value))}
            className="mork-select text-sm py-1 px-2 min-h-0"
          >
            {[-2, -1, 0, 1, 2, 3].map((mod) => (
              <option key={mod} value={mod}>
                {mod >= 0 ? '+' : ''}{mod}
              </option>
            ))}
          </select>
          <button
            onClick={handleRoll}
            disabled={isRolling}
            className={`mork-button text-xs py-1 px-3 min-h-0 flex items-center gap-1 ${
              isRolling ? 'shake' : ''
            }`}
          >
            <Dices size={14} />
            Roll 2d6
          </button>
        </div>

        {/* Roll Result Display */}
        {lastRoll && (
          <div className="text-xs space-y-1 text-mork-black">
            <div className="flex items-center gap-2">
              <span className="font-bold">Dice:</span>
              <span className="font-mono">[{lastRoll.dice[0]}] [{lastRoll.dice[1]}]</span>
              <span className="font-bold">+</span>
              <span className="font-mono">{lastRoll.modifier >= 0 ? '+' : ''}{lastRoll.modifier}</span>
              <span className="font-bold">=</span>
              <span className={`font-mono font-bold text-lg ${
                lastRoll.outcome === 'strong' ? 'text-green-900' :
                lastRoll.outcome === 'weak' ? 'text-amber-900' :
                'text-red-900'
              }`}>
                {lastRoll.total}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Outcomes */}
      <div className="space-y-2">
        <div className={`p-2 border-2 transition-all ${
          lastRoll?.outcome === 'strong' 
            ? 'border-green-800 bg-green-50 outcome-strong' 
            : 'border-mork-black bg-transparent'
        }`}>
          <p className="text-xs font-bold uppercase text-green-900 mb-1">
            Strong Hit (10+):
          </p>
          <p className="text-xs text-mork-black">{move.strongHit.description}</p>
          {move.strongHit.mechanicalEffect && (
            <p className="text-xs italic mt-1 opacity-75 text-mork-black">
              {move.strongHit.mechanicalEffect}
            </p>
          )}
        </div>

        <div className={`p-2 border-2 transition-all ${
          lastRoll?.outcome === 'weak' 
            ? 'border-amber-700 bg-amber-50 outcome-weak' 
            : 'border-mork-black bg-transparent'
        }`}>
          <p className="text-xs font-bold uppercase text-amber-900 mb-1">
            Weak Hit (7-9):
          </p>
          <p className="text-xs text-mork-black">{move.weakHit.description}</p>
          {move.weakHit.mechanicalEffect && (
            <p className="text-xs italic mt-1 opacity-75 text-mork-black">
              {move.weakHit.mechanicalEffect}
            </p>
          )}
        </div>

        <div className={`p-2 border-2 transition-all ${
          lastRoll?.outcome === 'miss' 
            ? 'border-red-800 bg-red-50 outcome-miss' 
            : 'border-mork-black bg-transparent'
        }`}>
          <p className="text-xs font-bold uppercase text-red-900 mb-1">
            Miss (6-):
          </p>
          <p className="text-xs text-mork-black">{move.miss.description}</p>
          {move.miss.mechanicalEffect && (
            <p className="text-xs italic mt-1 opacity-75 text-mork-black">
              {move.miss.mechanicalEffect}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoveCard;

