import { Table } from '../../types';

/**
 * Recluse Encounter Oracles
 * Based on Recluse PDF pages 93-97
 */

export const encounterContextTable: Table = {
  name: 'Encounter Context (d12)',
  entries: [
    { roll: 1, result: 'Ambush – You\'re attacked from hiding' },
    { roll: 2, result: 'Chance Meeting – Neutral crossing of paths' },
    { roll: 3, result: 'Territorial Defense – You\'ve intruded' },
    { roll: 4, result: 'Hunting Party – They\'re tracking prey' },
    { roll: 5, result: 'Ritual in Progress – You interrupt a ceremony' },
    { roll: 6, result: 'Prisoner Transport – They\'re moving a captive' },
    { roll: 7, result: 'Resting Group – Camped, vulnerable, or eating' },
    { roll: 8, result: 'Fleeing Danger – They\'re running from something worse' },
    { roll: 9, result: 'Guarding a Site – Protecting something of value' },
    { roll: 10, result: 'Negotiation Gone Wrong – Two groups are already in conflict' },
    { roll: 11, result: 'Summoned – Called here by magic or signal' },
    { roll: 12, result: 'Lost & Desperate – Stranded, starving, cursed' },
  ],
};

export const encounterDispositionTable: Table = {
  name: 'Encounter Disposition (d10)',
  entries: [
    { roll: 1, result: 'Hostile – Immediate violence' },
    { roll: 2, result: 'Wary – Weapons ready, but talking possible' },
    { roll: 3, result: 'Curious – Studying you before acting' },
    { roll: 4, result: 'Indifferent – Ignore you unless threatened' },
    { roll: 5, result: 'Fearful – See you as a threat' },
    { roll: 6, result: 'Desperate – Need something you have' },
    { roll: 7, result: 'Manipulative – False friendliness' },
    { roll: 8, result: 'Honor-Bound – Formal challenge issued' },
    { roll: 9, result: 'Broken – No fight left' },
    { roll: 10, result: 'Unaware – Haven\'t noticed you' },
  ],
};

export const encounterGoalTable: Table = {
  name: 'Encounter Goal (d10)',
  entries: [
    { roll: 1, result: 'Kill You' },
    { roll: 2, result: 'Capture You' },
    { roll: 3, result: 'Drive You Away' },
    { roll: 4, result: 'Steal Your Supplies' },
    { roll: 5, result: 'Use You (guide, shield, sacrifice)' },
    { roll: 6, result: 'Warn You of danger' },
    { roll: 7, result: 'Seek Your Aid' },
    { roll: 8, result: 'Deliver a Message' },
    { roll: 9, result: 'Test Your Worth' },
    { roll: 10, result: 'Ignore You' },
  ],
};

// Page 94
export const socialNarrativeComplicationsTable: Table = {
  name: 'Social/Narrative Complications (d10)',
  entries: [
    { roll: 1, result: 'Lie uncovered – Deceit is revealed' },
    { roll: 2, result: 'Third Party Arrives – New group intervenes' },
    { roll: 3, result: 'Cultural Offense – Unintentional insult' },
    { roll: 4, result: 'Time Pressure – Danger approaches quickly' },
    { roll: 5, result: 'Hidden Motive Exposed – True goal revealed' },
    { roll: 6, result: 'Emotional Outburst – Rage, fear, or grief takes over' },
    { roll: 7, result: 'Bribe Offered – Temptation to switch sides' },
    { roll: 8, result: 'Past History – They recognize you' },
    { roll: 9, result: 'Superstitious Fear – They fixate on an omen' },
    { roll: 10, result: 'Language Barrier – Communication breaks down' },
  ],
};

// Page 95
export const strangeMeetingsTable: Table = {
  name: 'Strange Meetings (d10)',
  entries: [
    { roll: 1, result: 'Talking corpse with one last message' },
    { roll: 2, result: 'Reflection that moves on its own' },
    { roll: 3, result: 'Silent child holding a key' },
    { roll: 4, result: 'Knight in rusted armor who doesn\'t know he\'s dead' },
    { roll: 5, result: 'Merchant selling memories in bottles' },
    { roll: 6, result: 'Beast with human eyes that pleads silently' },
    { roll: 7, result: 'Specter standing alone in wilderness' },
    { roll: 8, result: 'Ghost repeating its final moments' },
    { roll: 9, result: 'Well that whispers promises' },
    { roll: 10, result: 'Statue that weeps black tears' },
  ],
};

// Page 95
export const arcaneEncountersTable: Table = {
  name: 'Arcane Encounters (d8)',
  entries: [
    { roll: 1, result: 'Rune-carved stones humming with power' },
    { roll: 2, result: 'Floating book, pages turning' },
    { roll: 3, result: 'Pool showing visions of other times' },
    { roll: 4, result: 'Cursed weapon in stone' },
    { roll: 5, result: 'Shrine to a dead god, faintly glowing' },
    { roll: 6, result: 'Cage holding a captive spirit' },
    { roll: 7, result: 'Circle of mushrooms where time moves differently' },
    { roll: 8, result: 'Altar demanding a sacrifice' },
  ],
};

// Page 95
export const immediateAftermathTable: Table = {
  name: 'Immediate Aftermath (d10)',
  entries: [
    { roll: 1, result: 'Loot & Bodies – Standard spoils' },
    { roll: 2, result: 'Survivors Fled – May return for revenge' },
    { roll: 3, result: 'Area Tainted – Blood, poison, or curse stains the place' },
    { roll: 4, result: 'Clue Left Behind – Map, letter, or token with story value' },
    { roll: 5, result: 'Ally Gained – Freed prisoner or impressed foe' },
    { roll: 6, result: 'Wounded Enemy – Lives but broken; may beg mercy' },
    { roll: 7, result: 'Ritual Completed – Something summoned or unleashed' },
    { roll: 8, result: 'Fire or Flood – Area now burning or submerged' },
    { roll: 9, result: 'Silence Falls – Unnatural quiet' },
    { roll: 10, result: 'Vision or Omen – Glimpse of future danger' },
  ],
};

// Page 96
export const positionalComplicationsTable: Table = {
  name: 'Positional Complications (d12)',
  entries: [
    { roll: 1, result: 'Creature Blocks the Only Exit – Escape is cut off' },
    { roll: 2, result: 'You Are Cornered – No room to maneuver' },
    { roll: 3, result: 'Separated from Gear – Weapon, pack, or lantern is out of reach' },
    { roll: 4, result: 'Knocked Prone – You fall or stumble as danger arrives' },
    { roll: 5, result: 'Between Multiple Threats – Flanked or pinched between hazards' },
    { roll: 6, result: 'High Ground Against You – Enemies above have a clear advantage' },
    { roll: 7, result: 'Ambushed – The creature strikes before you can prepare' },
    { roll: 8, result: 'Blinded Momentarily – Dust, glare, or darkness overwhelms your sight' },
    { roll: 9, result: 'Trapped Footing – Snagged on roots, debris, or collapsed structure' },
    { roll: 10, result: 'Back to a Drop – Cliffs, pits, or voids loom behind you' },
    { roll: 11, result: 'Confined Space – Too tight to swing weapons or dodge' },
    { roll: 12, result: 'Forced Into the Open – Nowhere to hide; exposed completely' },
  ],
};

// Page 96
export const tacticalComplicationsTable: Table = {
  name: 'Tactical Complications (d12)',
  entries: [
    { roll: 1, result: 'Creature Gains Advantage – It acts swiftly or brutally' },
    { roll: 2, result: 'You Lose Advantage – Hesitation, fear, or surprise seizes you' },
    { roll: 3, result: 'Weapon Obstructed – Entangled, wedged, or trapped' },
    { roll: 4, result: 'Armor Compromised – Dent, crack, tear, or buckle' },
    { roll: 5, result: 'Noise Attracts More Trouble – Future encounter soon' },
    { roll: 6, result: 'Your Path is Blocked – Debris, flame, or bodies obstruct movement' },
    { roll: 7, result: 'Limited Range – You cannot use long-range weapons here' },
    { roll: 8, result: 'Narrow Sightlines – The creature uses cover expertly' },
    { roll: 9, result: 'Sudden Pain – Twisted ankle, slammed shoulder, or jolt of shock' },
    { roll: 10, result: 'Momentum Stolen – An opening you thought you had disappears' },
    { roll: 11, result: 'The Creature Reads You – It anticipates your next move' },
    { roll: 12, result: 'The Creature Bears a Wound That Makes It Wild – Furious, unpredictable, dangerous' },
  ],
};

// Page 97
export const narrativeComplicationsTable: Table = {
  name: 'Narrative Complications (d12)',
  entries: [
    { roll: 1, result: 'Someone Screams for Help – Victim, prisoner, or bystander' },
    { roll: 2, result: 'Creature Guards a Hostage – Your choices become restricted' },
    { roll: 3, result: 'Something Valuable is at Risk – Pack, torch, map, or treasure' },
    { roll: 4, result: 'Time Pressure – A door is closing, a fuse burning, a ritual ending' },
    { roll: 5, result: 'Collapsing Environment – The room, alley, or clearing won\'t stay intact' },
    { roll: 6, result: 'Unstable Magic – Runes flare, sigils swell, energies pulse' },
    { roll: 7, result: 'Memory Triggered – Flashback, omen, or disturbing vision' },
    { roll: 8, result: 'Spreading Fire – Flames crawl across surfaces' },
    { roll: 9, result: 'Someone Arrives at the Worst Time – Witness, rival, guard, ally' },
    { roll: 10, result: 'The Creature Calls for Reinforcements – Echoes roll through the area' },
    { roll: 11, result: 'Swift Infection – Wound, breath, or contact threatens contagion' },
    { roll: 12, result: 'The Ground Trembles – Something deeper is moving' },
  ],
};

// Page 97
export const multiEntityComplicationsTable: Table = {
  name: 'Multi-Entity Complications (d12)',
  entries: [
    { roll: 1, result: 'A Second Creature Emerges – Roll on Creature Nature' },
    { roll: 2, result: 'Two Factions Collide – A chaotic three-way conflict' },
    { roll: 3, result: 'Predator Becomes Prey – Something else hunts your foe' },
    { roll: 4, result: 'Feeding Frenzy – Scavengers swarm to the scent of blood' },
    { roll: 5, result: 'Stampede / Charge – Animals or crowds surge unpredictably' },
    { roll: 6, result: 'Rival Adventurers Appear – Hostile, neutral, or opportunistic' },
    { roll: 7, result: 'Cultists Watching – Observing, chanting, or preparing a rite' },
    { roll: 8, result: 'Town Guard or Militia Approaches – Orders unclear' },
    { roll: 9, result: 'Panic Following NPC – May collide with you or reveal something' },
    { roll: 10, result: 'Patrol Mistakes You for the Threat – Tension spikes' },
    { roll: 11, result: 'A Distant Roar – Another monster approaches soon' },
    { roll: 12, result: 'Someone Tries to Intervene – For good... or ill' },
  ],
};

// Legacy alias for backwards compatibility
export const encounterComplicationsTable = positionalComplicationsTable;

