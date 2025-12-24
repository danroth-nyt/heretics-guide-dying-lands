import { Table } from '../../types';

/**
 * Recluse Signs Oracles
 * Based on Recluse PDF pages 63, 69, 80, 84-85, 88-89
 */

// --- DUNGEON SIGNS (Page 63) ---

export const dungeonEntranceSignsTable: Table = {
  name: 'Dungeon Entrance Signs (d12)',
  entries: [
    { roll: 1, result: 'Fresh footprints' },
    { roll: 2, result: 'Broken tools' },
    { roll: 3, result: 'Scattered bones' },
    { roll: 4, result: 'A dropped satchel' },
    { roll: 5, result: 'Scrapes along the wall' },
    { roll: 6, result: 'Blood-smeared message' },
    { roll: 7, result: 'Claw marks' },
    { roll: 8, result: 'Torn clothing' },
    { roll: 9, result: 'Ritual residue' },
    { roll: 10, result: 'Candle stumps' },
    { roll: 11, result: 'Drag marks' },
    { roll: 12, result: 'Something watching you from the dark' },
  ],
};

// --- CITY SIGNS (Page 69 & 80) ---

export const cityApproachSignsTable: Table = {
  name: 'City Approach Signs (d20)',
  entries: [
    { roll: 1, result: 'Refugees fleeing' },
    { roll: 2, result: 'Smoke rising' },
    { roll: 3, result: 'Flyers posted everywhere' },
    { roll: 4, result: 'Strange banners' },
    { roll: 5, result: 'Heavy guard presence' },
    { roll: 6, result: 'Sounds of distant fighting' },
    { roll: 7, result: 'Market noise' },
    { roll: 8, result: 'Chanting' },
    { roll: 9, result: 'Rumbling earth' },
    { roll: 10, result: 'Foul smell' },
    { roll: 11, result: 'Blood on the gates' },
    { roll: 12, result: 'Long lines of travelers' },
    { roll: 13, result: 'Starved animals' },
    { roll: 14, result: 'Abandoned carts' },
    { roll: 15, result: 'Hushed whispers' },
    { roll: 16, result: 'Broken gates' },
    { roll: 17, result: 'Magic lights flickering' },
    { roll: 18, result: 'A corpse at the entrance' },
    { roll: 19, result: 'Gate taxes aggressively enforced' },
    { roll: 20, result: 'A holy procession entering' },
  ],
};

export const undercitySignsTable: Table = {
  name: 'Undercity Signs (d12)',
  entries: [
    { roll: 1, result: 'Hidden grate slightly ajar' },
    { roll: 2, result: 'Sewage backflow in odd places' },
    { roll: 3, result: 'Strange fungi growing through cracks' },
    { roll: 4, result: 'Muted chanting below' },
    { roll: 5, result: 'Torch smoke drifting up' },
    { roll: 6, result: 'An unusual rope' },
    { roll: 7, result: 'Brickwork newer than surroundings' },
    { roll: 8, result: 'Moisture on walls where it shouldn\'t be' },
    { roll: 9, result: 'A slab sunk slightly' },
    { roll: 10, result: 'A vent exhaling warm air' },
    { roll: 11, result: 'Gurgling beneath your feet' },
    { roll: 12, result: 'A ladder leading down' },
  ],
};

// --- WILDERNESS: THREATS (Page 88-89) ---

export const largeCreatureSignsTable: Table = {
  name: 'Large Creature Signs (d19)',
  entries: [
    { roll: 1, result: 'Massive footprints' },
    { roll: 2, result: 'Trees pushed aside' },
    { roll: 3, result: 'A crushed path through brush' },
    { roll: 4, result: 'Deep claw marks in bark' },
    { roll: 5, result: 'Branches broken overhead' },
    { roll: 6, result: 'A mound of disturbed earth' },
    { roll: 7, result: 'Water trembling in a pool' },
    { roll: 8, result: 'Large droppings' },
    { roll: 9, result: 'Fur snagged on thorns' },
    { roll: 10, result: 'A foul smell drifting' },
    { roll: 11, result: 'A half-eaten carcass' },
    { roll: 12, result: 'Bones broken clean' },
    { roll: 13, result: 'Tracks circling' },
    { roll: 14, result: 'Drag marks leading away' },
    { roll: 15, result: 'A deep growl far off' },
    { roll: 16, result: 'Newly crushed stones' },
    { roll: 17, result: 'A tree trunk snapped' },
    { roll: 18, result: 'Something splashing violently' },
    { roll: 19, result: 'Predator scat with human remains' },
  ],
};

export const humanThreatSignsTable: Table = {
  name: 'Human Threat Signs (d20)',
  entries: [
    { roll: 1, result: 'Footprints from many running feet' },
    { roll: 2, result: 'Blood-stained cloth' },
    { roll: 3, result: 'A broken spear' },
    { roll: 4, result: 'Abandoned campsite' },
    { roll: 5, result: 'Torn backpack' },
    { roll: 6, result: 'Coins scattered' },
    { roll: 7, result: 'A crude trap left behind' },
    { roll: 8, result: 'A recently extinguished fire' },
    { roll: 9, result: 'A dropped arrow' },
    { roll: 10, result: 'Voices echoing faintly' },
    { roll: 11, result: 'Fresh graves' },
    { roll: 12, result: 'A warning sign carved into a tree' },
    { roll: 13, result: 'A severed rope bridge' },
    { roll: 14, result: 'A cart ransacked' },
    { roll: 15, result: 'A cloak pinned with a dagger' },
    { roll: 16, result: 'A hidden snare' },
    { roll: 17, result: 'A trail of bootprints circling' },
    { roll: 18, result: 'A stash of gear hastily dropped' },
    { roll: 19, result: 'A discarded helmet with a dent' },
    { roll: 20, result: 'A footprint filled with blood' },
  ],
};

export const infestationSignsTable: Table = {
  name: 'Infestation Signs (d12)',
  entries: [
    { roll: 1, result: 'Swarm of insects' },
    { roll: 2, result: 'Buzzing from a hollow log' },
    { roll: 3, result: 'Webs covering branches' },
    { roll: 4, result: 'Scratch marks everywhere' },
    { roll: 5, result: 'Gnawed food remains' },
    { roll: 6, result: 'Small burrows in clusters' },
    { roll: 7, result: 'Rotten areas crawling with bugs' },
    { roll: 8, result: 'A nest of tiny pale creatures' },
    { roll: 9, result: 'Trails of slime' },
    { roll: 10, result: 'Bursting seed pods full of spiders' },
    { roll: 11, result: 'Ants forming unnatural patterns' },
    { roll: 12, result: 'Multiple nests competing' },
  ],
};

// --- WILDERNESS: DANGER & PRESENCE (Page 89) ---

export const ambushSignsTable: Table = {
  name: 'Ambush Signs (d12)',
  entries: [
    { roll: 1, result: 'Birds silent' },
    { roll: 2, result: 'Rocks arranged unnaturally' },
    { roll: 3, result: 'A narrow choke point' },
    { roll: 4, result: 'A vantage point overlooking path' },
    { roll: 5, result: 'Disturbed ground' },
    { roll: 6, result: 'Bushes shaking' },
    { roll: 7, result: 'Branches angled toward path' },
    { roll: 8, result: 'Deadfall logs loosely placed' },
    { roll: 9, result: 'Loose stones near a cliff' },
    { roll: 10, result: 'Fresh footprints hiding behind rocks' },
    { roll: 11, result: 'Something watching from above' },
    { roll: 12, result: 'Shadow shapes flanking you' },
  ],
};

export const stalkingSignsTable: Table = {
  name: 'Stalking Signs (d12)',
  entries: [
    { roll: 1, result: 'Footprints behind your own' },
    { roll: 2, result: 'A second set of prints cutting in' },
    { roll: 3, result: 'Extra rustling in brush' },
    { roll: 4, result: 'A broken twig where you didn\'t step' },
    { roll: 5, result: 'A soft cough behind you' },
    { roll: 6, result: 'Glimpsed movement' },
    { roll: 7, result: 'Breath on cold morning air' },
    { roll: 8, result: 'New prints appearing mid-trail' },
    { roll: 9, result: 'A shape disappearing over a ridge' },
    { roll: 10, result: 'A noise getting closer' },
    { roll: 11, result: 'A distant figure matching your pace' },
    { roll: 12, result: 'Movement every time you stop' },
  ],
};

// --- WILDERNESS: DISCOVERY (Page 84-85) ---

export const travelerSignsTable: Table = {
  name: 'Traveler Signs (d20)',
  entries: [
    { roll: 1, result: 'Footprints leading off the path' },
    { roll: 2, result: 'A burnt-out campfire' },
    { roll: 3, result: 'Tattered cloth snagged on a branch' },
    { roll: 4, result: 'An abandoned cloak' },
    { roll: 5, result: 'Empty ration pouch' },
    { roll: 6, result: 'Broken weapon' },
    { roll: 7, result: 'A snapped bowstring' },
    { roll: 8, result: 'An overturned crate' },
    { roll: 9, result: 'Drag marks' },
    { roll: 10, result: 'Bootprints circling an area' },
    { roll: 11, result: 'A crude signpost' },
    { roll: 12, result: 'Shredded backpack' },
    { roll: 13, result: 'Lost journal page' },
    { roll: 14, result: 'Carved initials in bark' },
    { roll: 15, result: 'Bits of rope left behind' },
    { roll: 16, result: 'A camp disturbed violently' },
    { roll: 17, result: 'A note weighted by a stone' },
    { roll: 18, result: 'A trail suddenly stopping' },
    { roll: 19, result: 'A dropped coin' },
    { roll: 20, result: 'A snapped-off arrow in a tree' },
  ],
};

export const lostPeopleSignsTable: Table = {
  name: 'Lost People Signs (d12)',
  entries: [
    { roll: 1, result: 'A necklace with initials' },
    { roll: 2, result: 'A journal missing pages' },
    { roll: 3, result: 'A bloodstained scarf' },
    { roll: 4, result: 'A crude map' },
    { roll: 5, result: 'A carved wooden idol' },
    { roll: 6, result: 'A child\'s toy' },
    { roll: 7, result: 'A broken mirror' },
    { roll: 8, result: 'A torn boot' },
    { roll: 9, result: 'A waterskin with a message inside' },
    { roll: 10, result: 'A trail of buttons' },
    { roll: 11, result: 'A half-buried satchel' },
    { roll: 12, result: 'A discarded helmet with a dent' },
  ],
};

// --- OMENS (Page 85) ---

export const strangeOmensTable: Table = {
  name: 'Strange Omens (d20)',
  entries: [
    { roll: 1, result: 'A tree with faces in its bark' },
    { roll: 2, result: 'A skull perfectly cleaned' },
    { roll: 3, result: 'A stone warm to the touch' },
    { roll: 4, result: 'Ants forming symbols' },
    { roll: 5, result: 'An animal staring unnervingly' },
    { roll: 6, result: 'A deer standing still' },
    { roll: 7, result: 'A single crow following' },
    { roll: 8, result: 'A scream carried on wind' },
    { roll: 9, result: 'A sudden darkness' },
    { roll: 10, result: 'A bright streak in sky' },
    { roll: 11, result: 'A soft voice whispering' },
    { roll: 12, result: 'A flash of movement' },
    { roll: 13, result: 'A sudden stench' },
    { roll: 14, result: 'An area colder than others' },
    { roll: 15, result: 'A shallow grave' },
    { roll: 16, result: 'A carved warning' },
    { roll: 17, result: 'A feeling of being watched' },
    { roll: 18, result: 'A plant growing impossibly fast' },
    { roll: 19, result: 'A swirling vortex of leaves' },
    { roll: 20, result: 'A figure glimpsed far away... gone when looked at twice' },
  ],
};

