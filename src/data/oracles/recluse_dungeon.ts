import { Table } from '../../types';

/**
 * Recluse Dungeon Oracles
 * Based on Recluse PDF pages 60-67
 */

export const dungeonOriginTable: Table = {
  name: 'Dungeon Origin (d6)',
  entries: [
    { roll: 1, result: 'Forgotten Shrine: Once holy, now desecrated or repurposed.' },
    { roll: 2, result: 'War Ruin: A structure shattered by ancient conflict.' },
    { roll: 3, result: 'Burial Grounds: Tombs, crypts, necropolis halls, ossuaries.' },
    { roll: 4, result: 'Exiled Place: Somewhere placed deliberately out of sight.' },
    { roll: 5, result: 'Research Site: Arcane, alchemical, occult, or scientific.' },
    { roll: 6, result: 'Understructure: Sewer, pipeline, tunnels, caverns, foundations.' },
  ],
};

export const dungeonPurposeNowTable: Table = {
  name: 'Dungeon Purpose Now (d6)',
  entries: [
    { roll: 1, result: 'Lair for something dangerous' },
    { roll: 2, result: 'Hiding place for outcasts' },
    { roll: 3, result: 'Ritual site for dark powers' },
    { roll: 4, result: 'Abandoned and collapsing' },
    { roll: 5, result: 'Claimed by monsters' },
    { roll: 6, result: 'Controlled by a faction or cult' },
  ],
};

export const dungeonThemeTable: Table = {
  name: 'Dungeon Theme (d12)',
  entries: [
    { roll: 1, result: 'Rot and decay' },
    { roll: 2, result: 'Fire and ruin' },
    { roll: 3, result: 'Endless damp' },
    { roll: 4, result: 'Old machinery' },
    { roll: 5, result: 'Fungal overgrowth' },
    { roll: 6, result: 'Echoing voices' },
    { roll: 7, result: 'Blood and bone' },
    { roll: 8, result: 'Metallic clatter' },
    { roll: 9, result: 'Runes and sigils' },
    { roll: 10, result: 'Invasive roots' },
    { roll: 11, result: 'Shifting light' },
    { roll: 12, result: 'Unnatural silence' },
  ],
};

export const dungeonEntranceStateTable: Table = {
  name: 'Dungeon Entrance State (d12)',
  entries: [
    { roll: 1, result: 'Blocked but breakable' },
    { roll: 2, result: 'Gaping open' },
    { roll: 3, result: 'Half-collapsed' },
    { roll: 4, result: 'Recently disturbed' },
    { roll: 5, result: 'Guarded from within' },
    { roll: 6, result: 'Guarded on the outside' },
    { roll: 7, result: 'Hidden under debris' },
    { roll: 8, result: 'Reinforced or barred' },
    { roll: 9, result: 'Hanging ajar' },
    { roll: 10, result: 'Locked with strange mechanism' },
    { roll: 11, result: 'Covered in growth or roots' },
    { roll: 12, result: 'Almost invitingly open' },
  ],
};

export const dungeonRoomArchitectureTable: Table = {
  name: 'Dungeon Room Architecture (d20)',
  entries: [
    { roll: 1, result: 'Pillared' },
    { roll: 2, result: 'Vaulted ceiling' },
    { roll: 3, result: 'Low ceiling' },
    { roll: 4, result: 'Flooded floor' },
    { roll: 5, result: 'Cracked walls' },
    { roll: 6, result: 'Reinforced metal' },
    { roll: 7, result: 'Web-choked' },
    { roll: 8, result: 'Fungal overgrowth' },
    { roll: 9, result: 'Root-entangled' },
    { roll: 10, result: 'Mosaic floors' },
    { roll: 11, result: 'Carved reliefs' },
    { roll: 12, result: 'Chains hanging' },
    { roll: 13, result: 'Uneven or slanted' },
    { roll: 14, result: 'Burn-scarred' },
    { roll: 15, result: 'Frozen' },
    { roll: 16, result: 'Oil-slicked' },
    { roll: 17, result: 'Dust-choked' },
    { roll: 18, result: 'Rubble-strewn' },
    { roll: 19, result: 'Perfectly smooth' },
    { roll: 20, result: 'Alive or pulsing' },
  ],
};

export const dungeonRoomDressingTable: Table = {
  name: 'Dungeon Room Dressing (d20)',
  entries: [
    { roll: 1, result: 'Broken furniture' },
    { roll: 2, result: 'Scattered bones' },
    { roll: 3, result: 'Water pooling' },
    { roll: 4, result: 'Piles of rubble' },
    { roll: 5, result: 'Rusted chains' },
    { roll: 6, result: 'Rotten cloth' },
    { roll: 7, result: 'Wax drippings' },
    { roll: 8, result: 'Strange markings' },
    { roll: 9, result: 'Hollow statues' },
    { roll: 10, result: 'Torn banners' },
    { roll: 11, result: 'Rotting crates' },
    { roll: 12, result: 'Fallen shelves' },
    { roll: 13, result: 'Ritual chalk circles' },
    { roll: 14, result: 'Mutilated idols' },
    { roll: 15, result: 'Blood trails' },
    { roll: 16, result: 'Discarded tools' },
    { roll: 17, result: 'Thick dust blanket' },
    { roll: 18, result: 'Overturned tables' },
    { roll: 19, result: 'Pits or grates' },
    { roll: 20, result: 'Personal belongings left behind' },
  ],
};

export const dungeonHazardsTable: Table = {
  name: 'Dungeon Hazards (d20)',
  entries: [
    { roll: 1, result: 'Loose floor' },
    { roll: 2, result: 'Poisonous spores' },
    { roll: 3, result: 'Foul water' },
    { roll: 4, result: 'Unstable rubble' },
    { roll: 5, result: 'Falling stones' },
    { roll: 6, result: 'Aggressive mold' },
    { roll: 7, result: 'Sticky floor' },
    { roll: 8, result: 'Hidden drop' },
    { roll: 9, result: 'Flesh-eating insects' },
    { roll: 10, result: 'Animated debris' },
    { roll: 11, result: 'Burning patch' },
    { roll: 12, result: 'Bone splinters' },
    { roll: 13, result: 'Corrosive slime' },
    { roll: 14, result: 'Tangling roots' },
    { roll: 15, result: 'Sudden tremor' },
    { roll: 16, result: 'Drooping stalactite' },
    { roll: 17, result: 'Arcane flare' },
    { roll: 18, result: 'Chains reacting violently' },
    { roll: 19, result: 'Swarming pests' },
    { roll: 20, result: 'Mind-numbing presence' },
  ],
};

export const dungeonDiscoveryTable: Table = {
  name: 'Dungeon Discovery (d20)',
  entries: [
    { roll: 1, result: 'Hidden doorway' },
    { roll: 2, result: 'Secret inscription' },
    { roll: 3, result: 'Broken relic' },
    { roll: 4, result: 'Historical marker' },
    { roll: 5, result: 'Strange mechanism' },
    { roll: 6, result: 'Illusionary wall' },
    { roll: 7, result: 'Journal fragment' },
    { roll: 8, result: 'Arcane residue' },
    { roll: 9, result: 'Key or puzzle piece' },
    { roll: 10, result: 'Strange footprint' },
    { roll: 11, result: 'Unnatural growth' },
    { roll: 12, result: 'Whispering spirit' },
    { roll: 13, result: 'Old treasure map scrap' },
    { roll: 14, result: 'A corpse with a clue' },
    { roll: 15, result: 'Ritual remains' },
    { roll: 16, result: 'Unopened container' },
    { roll: 17, result: 'Communion with something unseen' },
    { roll: 18, result: 'Ancient mural' },
    { roll: 19, result: 'Curious artifact' },
    { roll: 20, result: 'Something important waiting to be uncovered' },
  ],
};

export const dungeonEntranceHazardsTable: Table = {
  name: 'Dungeon Entrance Hazards (d20)',
  entries: [
    { roll: 1, result: 'Loose stones overhead' },
    { roll: 2, result: 'Slick footing' },
    { roll: 3, result: 'Drop-off just inside' },
    { roll: 4, result: 'Tripwire' },
    { roll: 5, result: 'Dart trap' },
    { roll: 6, result: 'Collapsing ground' },
    { roll: 7, result: 'Nest of vermin' },
    { roll: 8, result: 'Rusted spikes' },
    { roll: 9, result: 'Webbed blockage' },
    { roll: 10, result: 'Toxic spores drifting' },
    { roll: 11, result: 'Strange runic snare' },
    { roll: 12, result: 'Pit filled with debris' },
    { roll: 13, result: 'Hidden snare line' },
    { roll: 14, result: 'Sudden gust of wind' },
    { roll: 15, result: 'Maggot-choked corpse' },
    { roll: 16, result: 'Shattered pottery underfoot' },
    { roll: 17, result: 'Acid drip' },
    { roll: 18, result: 'Swarm of insects' },
    { roll: 19, result: 'Rope binding releasing suddenly' },
    { roll: 20, result: 'A shadow moving in the dark' },
  ],
};

export const dungeonRoomPurposeTable: Table = {
  name: 'Dungeon Room Purpose (d20)',
  entries: [
    { roll: 1, result: 'Shrine' },
    { roll: 2, result: 'Storage' },
    { roll: 3, result: 'Barracks' },
    { roll: 4, result: 'Workshop' },
    { roll: 5, result: 'Torture room' },
    { roll: 6, result: 'Crypt' },
    { roll: 7, result: 'Library' },
    { roll: 8, result: 'Study' },
    { roll: 9, result: 'Guard post' },
    { roll: 10, result: 'Ritual chamber' },
    { roll: 11, result: 'Feast hall' },
    { roll: 12, result: 'Armory' },
    { roll: 13, result: 'Treasury' },
    { roll: 14, result: 'Laboratory' },
    { roll: 15, result: 'Prison cell' },
    { roll: 16, result: 'Entrance antechamber' },
    { roll: 17, result: 'War room' },
    { roll: 18, result: 'Sleeping quarters' },
    { roll: 19, result: 'Dungeon crossroads' },
    { roll: 20, result: 'Unknown / alien purpose' },
  ],
};

export const dungeonAirTempTable: Table = {
  name: 'Dungeon Air Temperature (d12)',
  entries: [
    { roll: 1, result: 'Freezing' },
    { roll: 2, result: 'Cold' },
    { roll: 3, result: 'Mild' },
    { roll: 4, result: 'Warm' },
    { roll: 5, result: 'Stifling' },
    { roll: 6, result: 'Humid' },
    { roll: 7, result: 'Dry and brittle' },
    { roll: 8, result: 'Fog-laden' },
    { roll: 9, result: 'Dust-heavy' },
    { roll: 10, result: 'Breathable and clear' },
    { roll: 11, result: 'Wind currents' },
    { roll: 12, result: 'Shifting temperature' },
  ],
};

export const dungeonLightTable: Table = {
  name: 'Dungeon Light (d12)',
  entries: [
    { roll: 1, result: 'Pitch black' },
    { roll: 2, result: 'Dim natural glow' },
    { roll: 3, result: 'Flickering torches' },
    { roll: 4, result: 'Bioluminescent fungus' },
    { roll: 5, result: 'Candles nearly out' },
    { roll: 6, result: 'Glowing runes' },
    { roll: 7, result: 'Misty and low visibility' },
    { roll: 8, result: 'Sharp shadow-lines' },
    { roll: 9, result: 'Unstable magical light' },
    { roll: 10, result: 'Light from cracks above' },
    { roll: 11, result: 'Firelight' },
    { roll: 12, result: 'Total darkness suddenly shifts (roll again)' },
  ],
};

export const dungeonInhabitantsTable: Table = {
  name: 'Dungeon Inhabitants (d20)',
  entries: [
    { roll: 1, result: 'Vermin and pests' },
    { roll: 2, result: 'Hungry beasts' },
    { roll: 3, result: 'Cultists' },
    { roll: 4, result: 'Undead' },
    { roll: 5, result: 'Bandits' },
    { roll: 6, result: 'Sorcerers' },
    { roll: 7, result: 'Strange constructs' },
    { roll: 8, result: 'Demons' },
    { roll: 9, result: 'Bone walkers' },
    { roll: 10, result: 'Feral humans' },
    { roll: 11, result: 'Slimes or molds' },
    { roll: 12, result: 'Outsiders or spirits' },
    { roll: 13, result: 'Mechanical horrors' },
    { roll: 14, result: 'Cursed wretches' },
    { roll: 15, result: 'Starved scavengers' },
    { roll: 16, result: 'Fungus-hive creatures' },
    { roll: 17, result: 'Rogue experiments' },
    { roll: 18, result: 'Guard animals' },
    { roll: 19, result: 'Ancient wardens' },
    { roll: 20, result: 'Nothing... or something watching' },
  ],
};

export const dungeonPrimaryMotiveTable: Table = {
  name: 'Dungeon Primary Motive (d12)',
  entries: [
    { roll: 1, result: 'Hunger' },
    { roll: 2, result: 'Protection' },
    { roll: 3, result: 'Madness' },
    { roll: 4, result: 'Worship' },
    { roll: 5, result: 'Secrecy' },
    { roll: 6, result: 'Forbidden knowledge' },
    { roll: 7, result: 'Greed' },
    { roll: 8, result: 'Patience' },
    { roll: 9, result: 'Torment' },
    { roll: 10, result: 'Restoration' },
    { roll: 11, result: 'Escape' },
    { roll: 12, result: 'Transformation' },
  ],
};

export const entranceFirstImpressionTable: Table = {
  name: 'Entrance: First Impression (d12)',
  entries: [
    { roll: 1, result: 'An unnatural chill' },
    { roll: 2, result: 'A faint warm draft' },
    { roll: 3, result: 'Silence too deep' },
    { roll: 4, result: 'Whispering echoes' },
    { roll: 5, result: 'The smell of rot' },
    { roll: 6, result: 'Bitter metallic scent' },
    { roll: 7, result: 'Flickering lights inside' },
    { roll: 8, result: 'A smear of fresh blood' },
    { roll: 9, result: 'Strange symbols nearby' },
    { roll: 10, result: 'Pests crawling around the entrance' },
    { roll: 11, result: 'A distant scream' },
    { roll: 12, result: 'A slow, rhythmic thumping' },
  ],
};

export const entranceImmediateChallengeTable: Table = {
  name: 'Entrance: Immediate Challenge (d12)',
  entries: [
    { roll: 1, result: 'A blocked opening requiring effort' },
    { roll: 2, result: 'A fork in the entrance tunnels' },
    { roll: 3, result: 'A narrow squeeze' },
    { roll: 4, result: 'A brittle bridge' },
    { roll: 5, result: 'A ladder or rope descent' },
    { roll: 6, result: 'A flooded passage' },
    { roll: 7, result: 'A sudden drop' },
    { roll: 8, result: 'A guarded threshold' },
    { roll: 9, result: 'A dangerous climb down' },
    { roll: 10, result: 'A puzzle-like seal' },
    { roll: 11, result: 'A misdirection or illusion' },
    { roll: 12, result: 'Something tries to stop you from entering' },
  ],
};

export const entrancePossibleHelpTable: Table = {
  name: 'Entrance: Possible Help (d6)',
  entries: [
    { roll: 1, result: 'A shaken wanderer offering a warning' },
    { roll: 2, result: 'A survivor fleeing with a clue' },
    { roll: 3, result: 'A hidden cache of supplies' },
    { roll: 4, result: 'A crude map wedged under a stone' },
    { roll: 5, result: 'A whispered hint from an unseen source' },
    { roll: 6, result: 'A nearby lookout signaling safety or danger' },
  ],
};

export const roomAtmosphereTable: Table = {
  name: 'Room Atmosphere (d6)',
  entries: [
    { roll: 1, result: 'Dark and silent' },
    { roll: 2, result: 'Damp and cold' },
    { roll: 3, result: 'Foggy or dusty' },
    { roll: 4, result: 'Flickering light' },
    { roll: 5, result: 'Oppressively warm' },
    { roll: 6, result: 'Echoing with strange sounds' },
  ],
};

export const roomSizeDetailedTable: Table = {
  name: 'Room Size (Detailed) (d6)',
  entries: [
    { roll: 1, result: 'Tiny (closet, cramped crawlspace)' },
    { roll: 2, result: 'Small (cell, shrine)' },
    { roll: 3, result: 'Medium (hall, chamber)' },
    { roll: 4, result: 'Large (great hall, chamber with pillars)' },
    { roll: 5, result: 'Huge (cathedral chamber, cavern)' },
    { roll: 6, result: 'Enormous (vast expanse, echoing vault)' },
  ],
};

export const roomExitCountTable: Table = {
  name: 'Room Exit Count (d6)',
  entries: [
    { roll: 1, result: 'One' },
    { roll: 2, result: 'One' },
    { roll: 3, result: 'Two' },
    { roll: 4, result: 'Two' },
    { roll: 5, result: 'Three' },
    { roll: 6, result: 'Three or more' },
  ],
};

export const roomExitTypeTable: Table = {
  name: 'Room Exit Type (d6)',
  entries: [
    { roll: 1, result: 'Hallway' },
    { roll: 2, result: 'Doorway' },
    { roll: 3, result: 'Tunnel' },
    { roll: 4, result: 'Breach' },
    { roll: 5, result: 'Stairway' },
    { roll: 6, result: 'Hidden or concealed exit' },
  ],
};

