/**
 * Dice rolling utilities for the MÖRK BORG map generator
 */

/**
 * Roll a die with the specified number of sides
 */
export function rollDice(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

/**
 * Roll a d4 (1-4)
 */
export function rollD4(): number {
  return rollDice(4);
}

/**
 * Roll a d6 (1-6)
 */
export function rollD6(): number {
  return rollDice(6);
}

/**
 * Roll a d8 (1-8)
 */
export function rollD8(): number {
  return rollDice(8);
}

/**
 * Roll a d10 (1-10)
 */
export function rollD10(): number {
  return rollDice(10);
}

/**
 * Roll a d12 (1-12)
 */
export function rollD12(): number {
  return rollDice(12);
}

/**
 * Roll a d20 (1-20)
 */
export function rollD20(): number {
  return rollDice(20);
}

/**
 * Roll a d100 (1-100)
 */
export function rollD100(): number {
  return rollDice(100);
}

/**
 * Roll a d66 (11-66)
 * This rolls two d6s and combines them as tens and units
 * Results: 11, 12, 13, 14, 15, 16, 21, 22, ..., 66
 */
export function rollD66(): number {
  const tens = rollD6();
  const units = rollD6();
  return tens * 10 + units;
}

/**
 * Roll multiple dice and return the sum
 */
export function rollMultiple(sides: number, count: number): number {
  let total = 0;
  for (let i = 0; i < count; i++) {
    total += rollDice(sides);
  }
  return total;
}

/**
 * Roll multiple dice and return all individual results
 */
export function rollMultipleIndividual(sides: number, count: number): number[] {
  const results: number[] = [];
  for (let i = 0; i < count; i++) {
    results.push(rollDice(sides));
  }
  return results;
}

/**
 * Get a random element from an array
 */
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle an array (Fisher-Yates algorithm)
 */
export function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Core Roll Result (2d20 vs DR)
 */
export interface CoreRollResult {
  dice: [number, number];           // raw d20 rolls
  modifier: number;
  adjustedDice: [number, number];   // each die + modifier
  dr: number;                       // difficulty rating (target)
  hits: number;                     // 0, 1, or 2 dice that meet/exceed DR
  outcome: 'strong' | 'weak' | 'miss';
}

/**
 * Roll 2d20 with a modifier against a DR (Difficulty Rating)
 * Each die is compared separately to the DR after adding the modifier
 * - Strong Hit: Both dice meet or exceed DR
 * - Weak Hit: One die meets or exceeds DR
 * - Miss: Neither die meets DR
 */
export function rollCoreMove(modifier: number, dr: number = 12): CoreRollResult {
  const die1 = rollD20();
  const die2 = rollD20();
  const adjusted1 = die1 + modifier;
  const adjusted2 = die2 + modifier;
  
  // Count how many dice meet or exceed the DR
  let hits = 0;
  if (adjusted1 >= dr) hits++;
  if (adjusted2 >= dr) hits++;
  
  let outcome: 'strong' | 'weak' | 'miss';
  if (hits === 2) {
    outcome = 'strong';
  } else if (hits === 1) {
    outcome = 'weak';
  } else {
    outcome = 'miss';
  }
  
  return {
    dice: [die1, die2],
    modifier,
    adjustedDice: [adjusted1, adjusted2],
    dr,
    hits,
    outcome
  };
}

/**
 * @deprecated Use rollCoreMove instead
 * Legacy PBtA Move Roll Result - kept for backwards compatibility
 */
export interface MoveRollResult {
  dice: [number, number];
  modifier: number;
  total: number;
  outcome: 'strong' | 'weak' | 'miss';
}

/**
 * @deprecated Use rollCoreMove instead
 * Roll 2d6 with a modifier for PBtA moves
 * - Strong Hit: 10+
 * - Weak Hit: 7-9
 * - Miss: 6 or less
 */
export function roll2d6WithMod(modifier: number): MoveRollResult {
  const die1 = rollD6();
  const die2 = rollD6();
  const total = die1 + die2 + modifier;
  
  let outcome: 'strong' | 'weak' | 'miss';
  if (total >= 10) {
    outcome = 'strong';
  } else if (total >= 7) {
    outcome = 'weak';
  } else {
    outcome = 'miss';
  }
  
  return {
    dice: [die1, die2],
    modifier,
    total,
    outcome
  };
}