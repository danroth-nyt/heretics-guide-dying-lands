import { Table } from '../types';

/**
 * Global tables for setting the scene
 * Oracle (d66), Fate (d20), Loot (d66), Landscape (d10), Weather (d10)
 * Based on Pages 44-47 of the PDF
 * 
 * Enhanced with Recluse oracle tables for expanded options
 */

// Import Recluse oracle tables for enhanced NPC generation
import { 
  npcFirstNamesTable, 
  npcSurnamesTable,
  villageNamesTable
} from './oracles/recluse_names';
import {
  npcSummaryTable,
  npcMotivationTable,
  npcAppearanceTable,
  npcTraitsTable,
  npcGenderTable,
  npcBodyFeatureTable,
  npcHairGroomingTable,
  npcClothingDetailTable,
  npcOverallPresenceTable,
  itemColorTable,
  itemQualityTable
} from './oracles/recluse_npc';
import {
  weatherPrecipitationTable,
  weatherWindTable,
  weatherTemperatureTable
} from './oracles/recluse_wilderness';
import {
  actionOracleTable,
  themeOracleTable,
  descriptorOracleTable,
  focusOracleTable,
  detailOracleTable
} from './oracles/recluse_general';

export const oracleTable: Table = {
  name: 'Oracle (d66)',
  entries: [
    { roll: 11, result: 'Mystery' },
    { roll: 12, result: 'Wonder' },
    { roll: 13, result: 'Pledge' },
    { roll: 14, result: 'Brick' },
    { roll: 15, result: 'Crystal' },
    { roll: 16, result: 'Obsidian' },
    { roll: 21, result: 'Scare' },
    { roll: 22, result: 'Skull' },
    { roll: 23, result: 'Fire' },
    { roll: 24, result: 'Darkness' },
    { roll: 25, result: 'Quake' },
    { roll: 26, result: 'Core' },
    { roll: 31, result: 'Scream' },
    { roll: 32, result: 'Bone' },
    { roll: 33, result: 'Love' },
    { roll: 34, result: 'Pastry' },
    { roll: 35, result: 'Pumpkin' },
    { roll: 36, result: 'Fish' },
    { roll: 41, result: 'Hammer' },
    { roll: 42, result: 'Sight' },
    { roll: 43, result: 'Water' },
    { roll: 44, result: 'Needle' },
    { roll: 45, result: 'Reaper' },
    { roll: 46, result: 'Fruit' },
    { roll: 51, result: 'Scent' },
    { roll: 52, result: 'Bloodlust' },
    { roll: 53, result: 'Revenge' },
    { roll: 54, result: 'History' },
    { roll: 55, result: 'Phlegm' },
    { roll: 56, result: 'Judge' },
    { roll: 61, result: 'Light' },
    { roll: 62, result: 'Beam' },
    { roll: 63, result: 'Book' },
    { roll: 64, result: 'Step' },
    { roll: 65, result: 'Serpent' },
    { roll: 66, result: 'Crescent' },
  ],
};

export const fateTable: Table = {
  name: 'Fate Prophecies (d20)',
  entries: [
    { roll: 1, result: 'Jester: Shackles fall' },
    { roll: 2, result: 'Priestess: Inner voice alarms' },
    { roll: 3, result: 'Queen: Idea is downfall' },
    { roll: 4, result: 'King: Abandoned by close one' },
    { roll: 5, result: 'Priest: Magic granted' },
    { roll: 6, result: 'Lovers: Solitude wisdom' },
    { roll: 7, result: 'Chariot: Path known' },
    { roll: 8, result: 'Justice: Misery occurs' },
    { roll: 9, result: 'Hermit: Path lost forever' },
    { roll: 10, result: 'Fortune: Change saves/harms' },
    { roll: 11, result: 'Strength: Crisis power' },
    { roll: 12, result: 'Hanged One: Loss leads to gains' },
    { roll: 13, result: 'Death: Cycle breaks' },
    { roll: 14, result: 'Temperance: Middle path unsafe for you' },
    { roll: 15, result: 'Basilisk: Four is answer' },
    { roll: 16, result: 'Sun: Success via failure' },
    { roll: 17, result: 'Star: Beware guide' },
    { roll: 18, result: 'Moon: Illusion of choice' },
    { roll: 19, result: 'Sky: Disaster to comfort' },
    { roll: 20, result: 'Judgement: All judged' },
  ],
};

export const lootTable: Table = {
  name: 'Loot (d66)',
  entries: [
    { roll: 11, result: 'Stained cloth' },
    { roll: 12, result: 'Stained cloth' },
    { roll: 13, result: 'Stained cloth' },
    { roll: 14, result: 'Stained cloth' },
    { roll: 15, result: 'Stained cloth' },
    { roll: 16, result: 'Stained cloth' },
    { roll: 21, result: 'Shards (Agility DR6 or cut yourself)' },
    { roll: 22, result: 'Broken horn' },
    { roll: 23, result: 'Golden key (melts in an hour)' },
    { roll: 24, result: 'Sticky black stuff (edible)' },
    { roll: 25, result: 'Green flame torch' },
    { roll: 26, result: 'Jerky (human?)' },
    { roll: 31, result: 'Blood wooden knife' },
    { roll: 32, result: 'Eye bag' },
    { roll: 33, result: 'Teeth necklace' },
    { roll: 34, result: 'Small lizard' },
    { roll: 35, result: 'Invisible gunpowder (Toughness DR14 or die)' },
    { roll: 36, result: '7ft skin strip' },
    { roll: 41, result: 'd7 metal dice' },
    { roll: 42, result: 'Crown (worth d666 silver)' },
    { roll: 43, result: 'Coin with a PC\'s face on it' },
    { roll: 44, result: 'Broken arrow' },
    { roll: 45, result: 'Glowing bread' },
    { roll: 46, result: 'Poisoned wine' },
    { roll: 51, result: 'Cat fur' },
    { roll: 52, result: 'Crumbled pie' },
    { roll: 53, result: 'Feather' },
    { roll: 54, result: '7 fingers' },
    { roll: 55, result: '18-legged spider' },
    { roll: 56, result: 'Water-based fluid' },
    { roll: 61, result: 'Tavern map' },
    { roll: 62, result: 'Love letter' },
    { roll: 63, result: 'Non-human brain' },
    { roll: 64, result: 'Peach and rot incense' },
    { roll: 65, result: 'Mineral ingot' },
    { roll: 66, result: 'Tiny cat' },
  ],
};

export const landscapeTable: Table = {
  name: 'Landscape (d10)',
  entries: [
    { roll: 1, result: 'Meteor crater' },
    { roll: 2, result: 'Ashen woods' },
    { roll: 3, result: 'Frozen plains' },
    { roll: 4, result: 'Acid river' },
    { roll: 5, result: 'Black desert' },
    { roll: 6, result: 'Skeletal trees' },
    { roll: 7, result: 'Thorns of flesh' },
    { roll: 8, result: 'Bottomless valley' },
    { roll: 9, result: 'Rotting steppe' },
    { roll: 10, result: 'Everscorching forest' },
  ],
};

export const weatherTable: Table = {
  name: 'Weather (d10)',
  entries: [
    { roll: 1, result: 'Freezing sun' },
    { roll: 2, result: 'Whispering fog' },
    { roll: 3, result: 'Invisible snow' },
    { roll: 4, result: 'Blood moon' },
    { roll: 5, result: 'Acid rain' },
    { roll: 6, result: 'Screaming squall' },
    { roll: 7, result: 'Slug hail' },
    { roll: 8, result: 'Sharp diamond dust' },
    { roll: 9, result: 'Bleeding sun' },
    { roll: 10, result: 'Scorching hot wind' },
  ],
};

export const wanderTable: Table = {
  name: 'Why Do You Wander? (d20)',
  entries: [
    { roll: 1, result: 'You look for someone important who might be dead by now.' },
    { roll: 2, result: 'You believe the world is not beyond saving.' },
    { roll: 3, result: 'You want money to spend your remaining days in luxury.' },
    { roll: 4, result: 'You are looking for an important heirloom that holds lots of memories.' },
    { roll: 5, result: 'You are trying to fulfill a prophecy that will save your soul.' },
    { roll: 6, result: 'You are trying to fill the void in your heart. Both literally and figuratively.' },
    { roll: 7, result: 'You are looking for penance for what you\'ve done.' },
    { roll: 8, result: 'You want to travel back home but don\'t remember where it is.' },
    { roll: 9, result: 'You were summoned by a force that holds a grip on you.' },
    { roll: 10, result: 'You love exploring and finding adventures, especially the dangerous kind.' },
    { roll: 11, result: 'You seek to fulfill a vow even though it\'s nearly impossible.' },
    { roll: 12, result: 'You want to pray at your destination to find salvation.' },
    { roll: 13, result: 'You try to find a cure for a rare illness.' },
    { roll: 14, result: 'You try to gather monster body parts to finish your collection.' },
    { roll: 15, result: 'You are driven by whatever binds you to the group you travel with.' },
    { roll: 16, result: 'You need to kill a certain person to silence the voices in your head.' },
    { roll: 17, result: 'You want to see the sunset in a specific spot that reminds you of your past.' },
    { roll: 18, result: 'You are an aspiring mapmaker, trying to fill the gaps in the knowledge of Dying Lands.' },
    { roll: 19, result: 'You are driven by an impulse you cannot grasp, but opposing it means death… doesn\'t it?' },
    { roll: 20, result: 'You lose most of your memories every morning, so you wander aimlessly.' },
  ],
};

export const npcNameTable: Table = {
  name: 'NPC Name (d12)',
  entries: [
    { roll: 1, result: 'Travor' },
    { roll: 2, result: 'Silhan' },
    { roll: 3, result: 'Perro' },
    { roll: 4, result: 'Gavain' },
    { roll: 5, result: 'Lexa' },
    { roll: 6, result: 'Silvya' },
    { roll: 7, result: 'Estell' },
    { roll: 8, result: 'Charoa' },
    { roll: 9, result: 'Nyeteri' },
    { roll: 10, result: 'Leom' },
    { roll: 11, result: 'Teravez' },
    { roll: 12, result: 'Somnar' },
  ],
};

export const npcOccupationTable: Table = {
  name: 'NPC Occupation (d12)',
  entries: [
    { roll: 1, result: 'Deserter' },
    { roll: 2, result: 'Scholar' },
    { roll: 3, result: 'Bandit' },
    { roll: 4, result: 'Assassin' },
    { roll: 5, result: 'Priest(ess)' },
    { roll: 6, result: 'Soldier' },
    { roll: 7, result: 'Trader' },
    { roll: 8, result: 'Escort' },
    { roll: 9, result: 'Traveler' },
    { roll: 10, result: 'Botanist' },
    { roll: 11, result: 'Bard' },
    { roll: 12, result: 'Bounty hunter' },
  ],
};

export const npcHabitTable: Table = {
  name: 'NPC Habit (d12)',
  entries: [
    { roll: 1, result: 'Gasps loudly' },
    { roll: 2, result: 'Licks wounds' },
    { roll: 3, result: 'Jumps each step' },
    { roll: 4, result: 'Whispers' },
    { roll: 5, result: 'Touching symmetrically' },
    { roll: 6, result: 'Bites nails' },
    { roll: 7, result: 'Zoning out' },
    { roll: 8, result: 'Nervous laughter' },
    { roll: 9, result: 'Misuses words' },
    { roll: 10, result: 'Avoids reflection' },
    { roll: 11, result: 'Collects (non-iron) nails' },
    { roll: 12, result: 'Needs hourly nap' },
  ],
};

export const npcMoodTable: Table = {
  name: 'NPC Mood (d12)',
  entries: [
    { roll: 1, result: 'Angry' },
    { roll: 2, result: 'Asleep' },
    { roll: 3, result: 'In pain' },
    { roll: 4, result: 'Curious' },
    { roll: 5, result: 'Starving' },
    { roll: 6, result: 'Aroused' },
    { roll: 7, result: 'Anxious' },
    { roll: 8, result: 'Delirious' },
    { roll: 9, result: 'Calm' },
    { roll: 10, result: 'Drunk' },
    { roll: 11, result: 'Possessed' },
    { roll: 12, result: 'Bored' },
  ],
};

export const npcWantsTable: Table = {
  name: 'NPC Wants (d12)',
  entries: [
    { roll: 1, result: 'Blood' },
    { roll: 2, result: 'Peace of mind' },
    { roll: 3, result: 'Treasures' },
    { roll: 4, result: 'Vengeance' },
    { roll: 5, result: 'Redemption' },
    { roll: 6, result: 'To survive' },
    { roll: 7, result: 'Glory/fame' },
    { roll: 8, result: 'A way out' },
    { roll: 9, result: 'Honorable death' },
    { roll: 10, result: 'To find someone' },
    { roll: 11, result: 'Courage' },
    { roll: 12, result: 'Misery' },
  ],
};

export const weaponsTable: Table = {
  name: 'Weapons & Gear (d6)',
  entries: [
    { roll: 1, result: 'War Scythe (d6+1, 30s)' },
    { roll: 2, result: 'Two huge nails (2d4, 15s/pair, dual-wielding)' },
    { roll: 3, result: 'Billhook (d4, 20s, 25% bleed 1 dmg/d4 rounds)' },
    { roll: 4, result: 'Spiked shield (d2, 25s, -1 damage taken)' },
    { roll: 5, result: 'Chakram (d4/d6, 16s, thrown)' },
    { roll: 6, result: 'Boomerang (d2/d4, 12s, thrown, Agility DR8 to catch)' },
  ],
};

export const additionalStockTable: Table = {
  name: 'Additional Shop Stock (d12)',
  entries: [
    { roll: 1, result: 'Jar with eyeballs (20s): Eat for +1 Presence/day, lose 1HP' },
    { roll: 2, result: 'Potion of invisibility (100s): d4 hours, causes diarrhea' },
    { roll: 3, result: 'Brass compass (8s): 50% broken, +1 road difficulty' },
    { roll: 4, result: 'Deck of cards (3s): Wraith pursues owner' },
    { roll: 5, result: 'Skewed flute (15s): Lures skeleton rats' },
    { roll: 6, result: '7-sided dice (5s): Useless' },
    { roll: 7, result: 'Green wooden mask (70s): Turn clothes yellow' },
    { roll: 8, result: 'Crystal ball (30s): Glimpses of future' },
    { roll: 9, result: 'Human-skin hand fan (37s): Is it a face?' },
    { roll: 10, result: 'Haunted toy (11s): Tells worst jokes' },
    { roll: 11, result: 'Empty scroll (2s): Name on it vomits glass' },
    { roll: 12, result: 'Bag of "magical" ash (999s): Not magical' },
  ],
};

/**
 * Re-export Recluse oracle tables for easy access
 * These provide expanded options beyond the original tables
 */

// Enhanced NPC Names (d100 vs original d12)
export { npcFirstNamesTable, npcSurnamesTable, villageNamesTable };

// Re-export city tables from Recluse oracles
export {
  cityMoodTable,
  neighborhoodTypeTable,
  streetActivityTable,
  buildingTypeTable,
  cityRumorsTable,
  cityThreatsTable,
  streetSurfaceTable,
  streetSmellTable,
  streetFeatureTable,
  buildingInteriorTable,
  buildingHiddenElementTable,
  cityOriginTable,
  cityGatekeeperTable,
  cityConditionTable,
  neighborhoodMoodTable,
  neighborhoodProblemTable,
  cityDiscoveriesTable,
  cityUrbanOdditiesTable,
  citySignsEnteringTable,
  neighborhoodAttitudeTable,
  neighborhoodSecretTable,
  streetNoiseTable,
  buildingExteriorTable,
  buildingNotableObjectTable,
  socialDiscoveriesTable,
  signsOfUndercityTable,
} from './oracles/recluse_city';

// Enhanced NPC Details  
export { 
  npcSummaryTable, 
  npcMotivationTable, 
  npcAppearanceTable, 
  npcTraitsTable,
  npcGenderTable,
  npcBodyFeatureTable,
  npcHairGroomingTable,
  npcClothingDetailTable,
  npcOverallPresenceTable,
  itemColorTable,
  itemQualityTable
};

// Enhanced Weather Details
export { weatherPrecipitationTable, weatherWindTable, weatherTemperatureTable };

// General Oracles for improvisation
export { actionOracleTable, themeOracleTable, descriptorOracleTable, focusOracleTable, detailOracleTable };

