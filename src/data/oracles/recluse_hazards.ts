import { Table } from '../../types';

/**
 * Recluse Hazards Oracles
 * Based on Recluse PDF pages 90-92
 */

// ==========================================
// OVERLAND HAZARDS (Pages 90-92)
// ==========================================

// Page 90
export const naturalHazardsTable: Table = {
  name: 'Natural Hazards (d20)',
  entries: [
    { roll: 1, result: 'Sudden sinkhole' },
    { roll: 2, result: 'Mudslide' },
    { roll: 3, result: 'Falling rocks' },
    { roll: 4, result: 'Cracking ice' },
    { roll: 5, result: 'Flash flood' },
    { roll: 6, result: 'Thorn maze causing bleeding' },
    { roll: 7, result: 'Swamp mire pulling you under' },
    { roll: 8, result: 'Cliff giving way' },
    { roll: 9, result: 'Poisonous plants' },
    { roll: 10, result: 'River surge' },
    { roll: 11, result: 'Collapsing cavern roof' },
    { roll: 12, result: 'Earth tremor' },
    { roll: 13, result: 'Dense thorns trapping you' },
    { roll: 14, result: 'Rapid temperature drop' },
    { roll: 15, result: 'Intense heat wave' },
    { roll: 16, result: 'Lightning strike nearby' },
    { roll: 17, result: 'Thick fog rapidly rolls in' },
    { roll: 18, result: 'Tree fall' },
    { roll: 19, result: 'Quicksand' },
    { roll: 20, result: 'Wildfire sparks' },
  ],
};

// Page 90
export const weatherDrivenHazardsTable: Table = {
  name: 'Weather-Driven Hazards (d20)',
  entries: [
    { roll: 1, result: 'Blinding rain reduces visibility' },
    { roll: 2, result: 'Snowblind glare' },
    { roll: 3, result: 'Gale-force winds knocking you down' },
    { roll: 4, result: 'A freezing gust chills you deeply' },
    { roll: 5, result: 'Hail pummels exposed skin' },
    { roll: 6, result: 'Heatstroke looming' },
    { roll: 7, result: 'Sudden bitter cold' },
    { roll: 8, result: 'Flash freeze and ice' },
    { roll: 9, result: 'Fog hides a drop' },
    { roll: 10, result: 'Thunder booming dangerously close' },
    { roll: 11, result: 'Rain turning ground to sludge' },
    { roll: 12, result: 'Icy rain soaking gear' },
    { roll: 13, result: 'Hypothermia risk' },
    { roll: 14, result: 'Sunstroke' },
    { roll: 15, result: 'Waterlogged supplies' },
    { roll: 16, result: 'Winds tearing at equipment' },
    { roll: 17, result: 'Storm surge from river' },
    { roll: 18, result: 'Ash falling from sky' },
    { roll: 19, result: 'Sudden unnatural calm' },
    { roll: 20, result: 'Weather shifts violently in seconds' },
  ],
};

// Page 90
export const terrainDangersTable: Table = {
  name: 'Terrain Dangers (d20)',
  entries: [
    { roll: 1, result: 'Sudden Drop' },
    { roll: 2, result: 'Shifting Ground' },
    { roll: 3, result: 'Treacherous Footing' },
    { roll: 4, result: 'Falling Debris' },
    { roll: 5, result: 'Hidden Trap' },
    { roll: 6, result: 'Clinging Growth' },
    { roll: 7, result: 'Toxic Air' },
    { roll: 8, result: 'Avalanche' },
    { roll: 9, result: 'Unnerving Silence' },
    { roll: 10, result: 'Shifting Light' },
    { roll: 11, result: 'Unstable Structure' },
    { roll: 12, result: 'Narrow Passage' },
    { roll: 13, result: 'Deceptive Path' },
    { roll: 14, result: 'Earth Tremble' },
    { roll: 15, result: 'Acid Pools' },
    { roll: 16, result: 'Aggressive Flora' },
    { roll: 17, result: 'Predator Sign' },
    { roll: 18, result: 'Temperature Shift' },
    { roll: 19, result: 'Seismic Tremors' },
    { roll: 20, result: 'Unnatural Influence' },
  ],
};

// Page 91
export const unnaturalHazardsTable: Table = {
  name: 'Unnatural Hazards (d20)',
  entries: [
    { roll: 1, result: 'Ground pulses as if breathing' },
    { roll: 2, result: 'Whispers in the wind confuse direction' },
    { roll: 3, result: 'Gravity feels warped' },
    { roll: 4, result: 'Light bends strangely' },
    { roll: 5, result: 'Shadow grows unnaturally long' },
    { roll: 6, result: 'Plants move subtly' },
    { roll: 7, result: 'Water turns black' },
    { roll: 8, result: 'Area suddenly freezing without cause' },
    { roll: 9, result: 'Area suddenly overheated' },
    { roll: 10, result: 'Rocks vibrating' },
    { roll: 11, result: 'A thin veil of mist causes hallucinations' },
    { roll: 12, result: 'A runic mark on ground begins glowing' },
    { roll: 13, result: 'Trees bleed sap like blood' },
    { roll: 14, result: 'Dead animals arranged ritualistically' },
    { roll: 15, result: 'Time seems to stretch' },
    { roll: 16, result: 'Earth cracking in straight lines' },
    { roll: 17, result: 'Footprints appear beside yours' },
    { roll: 18, result: 'Strange hum grows louder' },
    { roll: 19, result: 'A presence pushes you back' },
    { roll: 20, result: 'An omen manifests in sky' },
  ],
};

// Page 91
export const wildlifeHazardsTable: Table = {
  name: 'Wildlife Hazards (d19)',
  entries: [
    { roll: 1, result: 'Territorial beast roaring nearby' },
    { roll: 2, result: 'Charging but not attacking' },
    { roll: 3, result: 'Stampede ahead' },
    { roll: 4, result: 'Nesting ground discovered' },
    { roll: 5, result: 'Hornet swarm disturbed' },
    { roll: 6, result: 'Venomous snakes sunning nearby' },
    { roll: 7, result: 'Tracks leading toward you' },
    { roll: 8, result: 'Bears rummaging through area' },
    { roll: 9, result: 'Wolves pacing at distance' },
    { roll: 10, result: 'Giant insects buzzing dangerously' },
    { roll: 11, result: 'Boar startled' },
    { roll: 12, result: 'Birds dive' },
    { roll: 13, result: 'A carcass attracts scavengers' },
    { roll: 14, result: 'Spider nest broken open' },
    { roll: 15, result: 'Territorial marking area' },
    { roll: 16, result: 'Giant bat swooping low' },
    { roll: 17, result: 'Beetle swarm near your path' },
    { roll: 18, result: 'A beast corpse spreading disease' },
    { roll: 19, result: 'A camouflaged creature suddenly moves' },
  ],
};

// Page 91
export const resourceLossHazardsTable: Table = {
  name: 'Resource Loss Hazards (d12)',
  entries: [
    { roll: 1, result: 'Backpack strap snaps' },
    { roll: 2, result: 'Water is contaminated' },
    { roll: 3, result: 'Animals tear open supplies' },
    { roll: 4, result: 'Fire burns part of your pack' },
    { roll: 5, result: 'Food spoils in heat' },
    { roll: 6, result: 'Rope frays and breaks' },
    { roll: 7, result: 'Container cracks' },
    { roll: 8, result: 'Bugs infest rations' },
    { roll: 9, result: 'Rain soaks everything' },
    { roll: 10, result: 'Theft while sleeping' },
    { roll: 11, result: 'Gear drops into water' },
    { roll: 12, result: 'Wind carries item away' },
  ],
};

// Page 92
export const travelCostHazardsTable: Table = {
  name: 'Travel Cost Hazards (d20)',
  entries: [
    { roll: 1, result: 'Path washed away' },
    { roll: 2, result: 'Forced detour' },
    { roll: 3, result: 'Bridge out' },
    { roll: 4, result: 'Wrong turn into thick brush' },
    { roll: 5, result: 'Travel slowed to crawl' },
    { roll: 6, result: 'Gear snagged, taking time' },
    { roll: 7, result: 'A steep climb' },
    { roll: 8, result: 'Path obscured' },
    { roll: 9, result: 'Animals block way' },
    { roll: 10, result: 'Fog forces slow progress' },
    { roll: 11, result: 'Wind pushes against you' },
    { roll: 12, result: 'Marsh forces circling' },
    { roll: 13, result: 'Unexpected river crossing' },
    { roll: 14, result: 'Rocks collapse behind you' },
    { roll: 15, result: 'Directions become unclear' },
    { roll: 16, result: 'Sun setting sooner than expected' },
    { roll: 17, result: 'Encounter evidence forces detour' },
    { roll: 18, result: 'Old trail gone' },
    { roll: 19, result: 'Treefall blocking path' },
    { roll: 20, result: 'Strange noise leading you off track' },
  ],
};

// Page 92
export const misleadingHazardsTable: Table = {
  name: 'Misleading Hazards (d12)',
  entries: [
    { roll: 1, result: 'Footprints leading to a dead end' },
    { roll: 2, result: 'A false camp' },
    { roll: 3, result: 'A trail that loops' },
    { roll: 4, result: 'Signs of help that vanish' },
    { roll: 5, result: 'A voice calling faintly' },
    { roll: 6, result: 'A glimmer of light' },
    { roll: 7, result: 'A path that\'s actually unsafe' },
    { roll: 8, result: 'An oasis that isn\'t' },
    { roll: 9, result: 'A moving bush' },
    { roll: 10, result: 'A distant silhouette' },
    { roll: 11, result: 'A promising cave full of danger' },
    { roll: 12, result: 'A faint glow that fades' },
  ],
};

