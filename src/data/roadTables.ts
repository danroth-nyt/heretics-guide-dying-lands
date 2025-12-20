import { Table } from '../types';

/**
 * Road-related tables for generating encounters, difficulty, and aesthetics
 * Based on the actual Heretic's Guide to Dying Lands PDF
 */

export const difficultyTable: Table = {
  name: 'Road Difficulty',
  entries: [
    { roll: 1, result: 'easy' },
    { roll: 2, result: 'unpleasant' },
    { roll: 3, result: 'problematic' },
    { roll: 4, result: 'grueling' },
  ],
};

// Encounters by difficulty (d6)
export const encounterTables: Record<string, Table> = {
  easy: {
    name: 'Easy Road Encounters',
    entries: [
      { roll: 1, result: 'd2 bandit scums' },
      { roll: 2, result: 'A mysterious man offers suspicious goods' },
      { roll: 3, result: 'A brawl between two deserters' },
      { roll: 4, result: 'A booby-trapped empty chest' },
      { roll: 5, result: 'The road is filled with holes and traps' },
      { roll: 6, result: 'A glowing wraith' },
    ],
  },
  unpleasant: {
    name: 'Unpleasant Road Encounters',
    entries: [
      { roll: 1, result: 'd4 hungry goblins' },
      { roll: 2, result: 'A traveling merchant selling poisonous food' },
      { roll: 3, result: 'Villagers running amok' },
      { roll: 4, result: 'Weather gets much, much worse' },
      { roll: 5, result: 'The road is flooded' },
      { roll: 6, result: 'A lone, angry berserker' },
    ],
  },
  problematic: {
    name: 'Problematic Road Encounters',
    entries: [
      { roll: 1, result: 'd6 raging zombies' },
      { roll: 2, result: 'd6 wolves with silver knives in their mouths' },
      { roll: 3, result: 'Misery in progress (roll for random Misery)' },
      { roll: 4, result: 'A field of toxic mushrooms that stretches far across the road' },
      { roll: 5, result: 'The road is blocked by a mountain of bloated, half-eaten animal corpses' },
      { roll: 6, result: 'Necromancer and d2 skeletons' },
    ],
  },
  grueling: {
    name: 'Grueling Road Encounters',
    entries: [
      { roll: 1, result: 'd4 berserkers' },
      { roll: 2, result: 'Bounty hunter pursuing the PCs (HP 25 Morale - Leather -d2 Dreihänder d12)' },
      { roll: 3, result: 'Two Miseries triggered at once' },
      { roll: 4, result: 'A death cult looking for an unwilling sacrifices' },
      { roll: 5, result: 'The road is gone, go around (consume all your rations)' },
      { roll: 6, result: 'A two-headed troll' },
    ],
  },
};

// Opportunities by difficulty (d6)
export const opportunityTables: Record<string, Table> = {
  easy: {
    name: 'Easy Road Opportunities',
    entries: [
      { roll: 1, result: 'd10 silver to be found' },
      { roll: 2, result: 'A bag with d2 random loot' },
      { roll: 3, result: 'Traveling merchant with small discounts' },
      { roll: 4, result: 'Bunch of sharpened femurs lying in a pit' },
      { roll: 5, result: 'Bag with d4 random supplies' },
      { roll: 6, result: 'Small river and an apple tree (surprisingly not toxic)' },
    ],
  },
  unpleasant: {
    name: 'Unpleasant Road Opportunities',
    entries: [
      { roll: 1, result: 'd20 silver' },
      { roll: 2, result: 'A dead body with d4 random loot' },
      { roll: 3, result: 'An outcast, willing to join in' },
      { roll: 4, result: 'A shiny axe (d8) stuck in a tree' },
      { roll: 5, result: 'A trained dog, tied to a tree' },
      { roll: 6, result: 'Small medicine box' },
    ],
  },
  problematic: {
    name: 'Problematic Road Opportunities',
    entries: [
      { roll: 1, result: 'd66 silver' },
      { roll: 2, result: 'Empty caravan with d8 random loot' },
      { roll: 3, result: 'Friendly mercenary, willing to join in' },
      { roll: 4, result: 'Hanged man with a crossbow and d66 bolts on his back' },
      { roll: 5, result: 'Thankful priestess with a random sacred scroll to reward you' },
      { roll: 6, result: 'A hot spring with healing waters (heal up once to max HP)' },
    ],
  },
  grueling: {
    name: 'Grueling Road Opportunities',
    entries: [
      { roll: 1, result: 'd100+10 silver' },
      { roll: 2, result: 'A chest with d10 random loot' },
      { roll: 3, result: 'Traveling merchant with huge discounts' },
      { roll: 4, result: 'Bunch of dead warriors with d6 high-quality weapons' },
      { roll: 5, result: 'A knight in silver plate armor, turned into stone' },
      { roll: 6, result: 'Abandoned hut full of food and comfortable beds' },
    ],
  },
};

// Road aesthetics (d6, d8)
export const usageTable: Table = {
  name: 'Road Usage',
  entries: [
    { roll: 1, result: 'Empty or almost empty' },
    { roll: 2, result: 'A few people' },
    { roll: 3, result: 'A few groups' },
    { roll: 4, result: 'Moderate traffic' },
    { roll: 5, result: 'Lots of people' },
    { roll: 6, result: 'Congested with people' },
  ],
};

export const ageTable: Table = {
  name: 'Road Age',
  entries: [
    { roll: 1, result: 'New' },
    { roll: 2, result: 'A few years old' },
    { roll: 3, result: 'A few decades old' },
    { roll: 4, result: 'Ancient' },
    { roll: 5, result: 'Forgotten' },
    { roll: 6, result: 'Built in a different era' },
  ],
};

export const smellTable: Table = {
  name: 'Road Smell',
  entries: [
    { roll: 1, result: 'Fresh soil' },
    { roll: 2, result: 'Musty' },
    { roll: 3, result: 'Floral scent and blood' },
    { roll: 4, result: 'Stench of decay' },
    { roll: 5, result: 'Smoke' },
    { roll: 6, result: 'Incomprehensible' },
  ],
};

export const wanderersTable: Table = {
  name: 'Other Wanderers',
  entries: [
    { roll: 1, result: 'Scared peasants' },
    { roll: 2, result: 'Murky soldiers' },
    { roll: 3, result: 'Cheerful caravan' },
    { roll: 4, result: 'Debilitated nobles' },
    { roll: 5, result: 'Haunted family' },
    { roll: 6, result: 'Lone bounty hunter' },
    { roll: 7, result: 'Pack of dogs' },
    { roll: 8, result: 'Overconfident adventurers' },
  ],
};

export const surfaceTable: Table = {
  name: 'Road Surface',
  entries: [
    { roll: 1, result: 'Dirt' },
    { roll: 2, result: 'Mud' },
    { roll: 3, result: 'Gravel' },
    { roll: 4, result: 'Cobblestone' },
    { roll: 5, result: 'Brick' },
    { roll: 6, result: 'Sand' },
    { roll: 7, result: 'Timber' },
    { roll: 8, result: 'Stone slab' },
  ],
};
