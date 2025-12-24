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
