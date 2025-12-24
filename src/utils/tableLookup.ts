import { Table } from '../types';
import { rollD4, rollD6, rollD8, rollD10, rollD12, rollD20, rollD100, rollD66, rollDice } from './diceUtils';

/**
 * Roll on a table and return the result
 */
export function rollOnTable(table: Table): string {
  if (!table || !table.entries || table.entries.length === 0) {
    return 'No table data available';
  }

  // Determine dice type from table entries
  const rolls = table.entries.map(e => typeof e.roll === 'number' ? e.roll : parseInt(String(e.roll)));
  const maxRoll = Math.max(...rolls);
  const minRoll = Math.min(...rolls);

  let roll: number;

  // Detect d66 table (rolls like 11, 12, ..., 66)
  // d66 has both tens and ones digits between 1-6, so no ones digit should be > 6
  if (minRoll >= 11 && maxRoll <= 66 && rolls.every(r => r % 10 <= 6 && r % 10 >= 1)) {
    roll = rollD66();
  }
  // Detect d100
  else if (maxRoll <= 100 && maxRoll > 20 && minRoll === 1) {
    roll = rollD100();
  }
  // Detect d20
  else if (maxRoll <= 20 && minRoll === 1) {
    roll = rollD20();
  }
  // Detect d12
  else if (maxRoll <= 12 && minRoll === 1) {
    roll = rollD12();
  }
  // Detect d10
  else if (maxRoll <= 10 && minRoll === 1) {
    roll = rollD10();
  }
  // Detect d8
  else if (maxRoll <= 8 && minRoll === 1) {
    roll = rollD8();
  }
  // Detect d6
  else if (maxRoll <= 6 && minRoll === 1) {
    roll = rollD6();
  }
  // Detect d4
  else if (maxRoll <= 4 && minRoll === 1) {
    roll = rollD4();
  }
  // Default to generic roll based on maxRoll
  else {
    roll = rollDice(maxRoll);
  }

  // Find matching entry
  const entry = table.entries.find(e => {
    const entryRoll = typeof e.roll === 'number' ? e.roll : parseInt(String(e.roll));
    return entryRoll === roll;
  });

  if (entry) {
    return entry.result;
  }

  // Fallback: return closest entry
  const closest = table.entries.reduce((prev, curr) => {
    const prevRoll = typeof prev.roll === 'number' ? prev.roll : parseInt(String(prev.roll));
    const currRoll = typeof curr.roll === 'number' ? curr.roll : parseInt(String(curr.roll));
    return Math.abs(currRoll - roll) < Math.abs(prevRoll - roll) ? curr : prev;
  });

  return closest.result;
}

/**
 * Roll on multiple tables and return results as an object
 */
export function rollOnMultipleTables(tables: Record<string, Table>): Record<string, string> {
  const results: Record<string, string> = {};
  
  for (const [key, table] of Object.entries(tables)) {
    results[key] = rollOnTable(table);
  }
  
  return results;
}
