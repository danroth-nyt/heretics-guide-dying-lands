import { Table } from '../../types';

/**
 * Recluse Creature/Beast Oracles
 * Based on Recluse PDF pages 56-57
 */

// Page 56
export const creatureTypeTable: Table = {
  name: 'Creature Type (d20)',
  entries: [
    { roll: 1, result: 'Beast (3-8 HP)' },
    { roll: 2, result: 'Vermin swarm (3-6 HP)' },
    { roll: 3, result: 'Mutated animal (4-10 HP)' },
    { roll: 4, result: 'Undead (6-12 HP)' },
    { roll: 5, result: 'Spirit (5-10 HP)' },
    { roll: 6, result: 'Construct (8-18 HP)' },
    { roll: 7, result: 'Cult thrall (3-6 HP)' },
    { roll: 8, result: 'Cult fanatic (6-10 HP)' },
    { roll: 9, result: 'Aberration (10-20 HP)' },
    { roll: 10, result: 'Parasite (2-4 HP)' },
    { roll: 11, result: 'Predator (6-12 HP)' },
    { roll: 12, result: 'Pack hunter (2-5 HP each, 1d6 group)' },
    { roll: 13, result: 'Dungeon beast (12-20 HP)' },
    { roll: 14, result: 'City horror (6-14 HP)' },
    { roll: 15, result: 'Fog apparition (4-8 HP)' },
    { roll: 16, result: 'Fallen knight (8-14 HP)' },
    { roll: 17, result: 'Revenant (10-16 HP)' },
    { roll: 18, result: 'Massive brute (15-22 HP)' },
    { roll: 19, result: 'Winged creature (4-10 HP)' },
    { roll: 20, result: 'Eldritch anomaly (10-20 HP)' },
  ],
};

// Page 56
export const armorTierTable: Table = {
  name: 'Armor Tier (d6)',
  entries: [
    { roll: 1, result: 'No Armor – Armor 0' },
    { roll: 2, result: 'Light Armor – Armor 1' },
    { roll: 3, result: 'Light Armor – Armor 1' },
    { roll: 4, result: 'Medium Armor – Armor 2' },
    { roll: 5, result: 'Heavy Armor – Armor 3' },
    { roll: 6, result: 'Shield / Natural Shielding – Armor +1 (stacks)' },
  ],
};

// Page 57
export const moraleTable: Table = {
  name: 'Morale (d4)',
  entries: [
    { roll: 1, result: 'Flees or breaks (Roll 2-4)' },
    { roll: 2, result: 'Unsteady (Roll 5-7)' },
    { roll: 3, result: 'Resolute (Roll 8-10)' },
    { roll: 4, result: 'Unnaturally fearless (Roll 11-12)' },
  ],
};

// Page 57 - Damage Table (Input is d6)
export const damageTable: Table = {
  name: 'Damage (d6)',
  entries: [
    { roll: 1, result: 'd4' },
    { roll: 2, result: 'd4' },
    { roll: 3, result: 'd6' },
    { roll: 4, result: 'd6' },
    { roll: 5, result: 'd8' },
    { roll: 6, result: 'd10' },
  ],
};

// Page 57
export const beastBehaviorTable: Table = {
  name: 'Beast Behavior (d20)',
  entries: [
    { roll: 1, result: 'Stalking' },
    { roll: 2, result: 'Frenzied' },
    { roll: 3, result: 'Territorial' },
    { roll: 4, result: 'Curious' },
    { roll: 5, result: 'Mindless' },
    { roll: 6, result: 'Ambushing' },
    { roll: 7, result: 'Protective' },
    { roll: 8, result: 'Hungry' },
    { roll: 9, result: 'Defensive' },
    { roll: 10, result: 'Loud' },
    { roll: 11, result: 'Silent' },
    { roll: 12, result: 'Swift' },
    { roll: 13, result: 'Patient' },
    { roll: 14, result: 'Cowardly' },
    { roll: 15, result: 'Deceptive' },
    { roll: 16, result: 'Opportunistic' },
    { roll: 17, result: 'Calculating' },
    { roll: 18, result: 'Aggressive' },
    { roll: 19, result: 'Fanatical' },
    { roll: 20, result: 'Erratic' },
  ],
};

// Page 57
export const beastAppearanceTable: Table = {
  name: 'Beast Appearance (d20)',
  entries: [
    { roll: 1, result: 'Skeletal' },
    { roll: 2, result: 'Bulbous' },
    { roll: 3, result: 'Mangled' },
    { roll: 4, result: 'Patchwork' },
    { roll: 5, result: 'Glistening' },
    { roll: 6, result: 'Wreathed' },
    { roll: 7, result: 'Charred' },
    { roll: 8, result: 'Bone-plated' },
    { roll: 9, result: 'Horned' },
    { roll: 10, result: 'Inflated' },
    { roll: 11, result: 'Sagging' },
    { roll: 12, result: 'Carved' },
    { roll: 13, result: 'Fungoid' },
    { roll: 14, result: 'Thorned' },
    { roll: 15, result: 'Ooze-marked' },
    { roll: 16, result: 'Winged' },
    { roll: 17, result: 'Fractured' },
    { roll: 18, result: 'Masked' },
    { roll: 19, result: 'Haloed' },
    { roll: 20, result: 'Eyeless' },
  ],
};

// Page 57 - Wildlife Generation (Natural animals)
export const wildlifeTypeTable: Table = {
  name: 'Wildlife Type (d20)',
  entries: [
    { roll: 1, result: 'Boar (6-10 HP)' },
    { roll: 2, result: 'Wolf (6-8 HP)' },
    { roll: 3, result: 'Deer (4-6 HP)' },
    { roll: 4, result: 'Elk (8-12 HP)' },
    { roll: 5, result: 'Bear (12-18 HP)' },
    { roll: 6, result: 'Lynx (4-6 HP)' },
    { roll: 7, result: 'Badger (4-5 HP)' },
    { roll: 8, result: 'Goat (4-6 HP)' },
    { roll: 9, result: 'Hyena (5-8 HP)' },
    { roll: 10, result: 'Jackal (4-6 HP)' },
    { roll: 11, result: 'Vulture (3-5 HP)' },
    { roll: 12, result: 'Crow swarm (2-4 HP)' },
    { roll: 13, result: 'Serpent (3-6 HP)' },
    { roll: 14, result: 'Giant rat (2-4 HP)' },
    { roll: 15, result: 'Lizard (3-4 HP)' },
    { roll: 16, result: 'Frog (2-3 HP)' },
    { roll: 17, result: 'Hawk (3-4 HP)' },
    { roll: 18, result: 'Fox (4-6 HP)' },
    { roll: 19, result: 'Beetle (2-4 HP)' },
    { roll: 20, result: 'Wild dog (5-8 HP)' },
  ],
};

