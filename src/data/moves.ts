export interface MoveResult {
  description: string;
  mechanicalEffect?: string;
}

export interface Move {
  id: string;
  name: string;
  category: 'Travel' | 'City' | 'Dungeon' | 'Connection' | 'Quest' | 'Advancement' | 'Hearth' | 'Adventure';
  trigger: string;
  roll: string; // e.g. "+presence", "+toughness", "+highest"
  strongHit: MoveResult;
  weakHit: MoveResult;
  miss: MoveResult;
}

export const MOVES: Move[] = [
  // ===========================================================================
  // TRAVEL MOVES (Wilderness & Overland)
  // ===========================================================================
  {
    id: 'travel_determine_length',
    name: 'Determine Length of Journey',
    category: 'Travel',
    trigger: 'Before beginning a trip, define its physical distance',
    roll: '+presence',
    strongHit: { description: 'Trip - 2 days. Journey - 4 days. Trek - 8 days.' },
    weakHit: { description: 'Add 1d4 days to the base time.' },
    miss: { description: 'Trip - 4 days. Journey - 8 days. Trek - 14 days.' }
  },
  {
    id: 'travel_weather',
    name: 'Weather',
    category: 'Travel',
    trigger: 'At morning, after rolling the Calendar of Nechrubel',
    roll: '+presence',
    strongHit: { description: 'Unusually favorable weather. Travel gains advantage for the day.' },
    weakHit: { description: 'Poor weather (wind, rain, cold, gloom). Apply minor penalties or visibility loss.' },
    miss: { description: 'Severe weather (storms, blizzards, choking heat). Travel rolls suffer disadvantage.' }
  },
  {
    id: 'travel_the_road',
    name: 'Travel the Road',
    category: 'Travel',
    trigger: 'When you follow a road or worn path through the dying world',
    roll: '+agility',
    strongHit: { description: 'You make solid progress. Reduce remaining travel days by 1. Avoid danger.' },
    weakHit: { description: 'Reduce travel days by 1, but face a complication (hazard, weather shift, resource loss).' },
    miss: { description: 'You become lost. Trigger "Hold Your Bearing" move to continue travel.' }
  },
  {
    id: 'travel_move_area',
    name: 'Move Through the Area',
    category: 'Travel',
    trigger: 'When traveling through safe, known, or previously mapped regions',
    roll: '+agility',
    strongHit: { description: 'Make progress without trouble. Reduce travel days by 1.' },
    weakHit: { description: 'Reduce travel days by 1. Introduce a minor complication (fatigue, delay, poor terrain).' },
    miss: { description: 'Increase travel days by 1. A threat emerges or a significant setback occurs.' }
  },
  {
    id: 'travel_face_wilds',
    name: 'Face the Wilds',
    category: 'Travel',
    trigger: 'When navigating dangerous terrain, avoiding detection, or attempting a risky wilderness approach',
    roll: '+agility or +strength',
    strongHit: { description: 'You move safely and gain a positional advantage. The environment does not impede you.' },
    weakHit: { description: 'You made progress, but face a complication: minor injury, noise, instability, or warning.' },
    miss: { description: 'The wilderness acts. A threat, hazard, creature, or obstacle emerges immediately.' }
  },
  {
    id: 'travel_tracking',
    name: 'Tracking',
    category: 'Travel',
    trigger: 'When studying the environment for clues, footprints, or terrain features',
    roll: '+presence',
    strongHit: { description: 'Obtain clear and useful information. Identify routes, threats, or recent activity accurately.' },
    weakHit: { description: 'Gain partial or unclear information. Introduce ambiguity or a minor complication.' },
    miss: { description: 'Your search exposes you. A hidden threat or hazard activates.' }
  },
  {
    id: 'travel_endure',
    name: 'Endure the Environment',
    category: 'Travel',
    trigger: 'When directly subjected to a hazard or resisting environmental danger',
    roll: '+toughness',
    strongHit: { description: 'You resist the hazard and remain stable.' },
    weakHit: { description: 'You endure but suffer a minor cost: lost time, damp gear, fatigue.' },
    miss: { description: 'You suffer harm or loss. The hazard escalates or causes an immediate setback.' }
  },
  {
    id: 'travel_discover',
    name: 'Discover a Feature',
    category: 'Travel',
    trigger: 'When traveling through unknown lands and the fiction calls for discovery',
    roll: '+presence',
    strongHit: { description: 'Discover a meaningful location: ruin, shrine, camp, trackway, cave, or marker.' },
    weakHit: { description: 'Discover something minor or incomplete: remnants, scraps, fragments, partial clues.' },
    miss: { description: 'Discover something dangerous: lair, trap, monster sign, hostile ground.' }
  },
  {
    id: 'travel_hunt',
    name: 'Hunt',
    category: 'Travel',
    trigger: 'When searching for meat in the wild',
    roll: '+presence',
    strongHit: { description: 'Locate prey. Must enter combat to harvest rations.' },
    weakHit: { description: 'Locate prey, but with a complication (hazard, rival predator, noise, terrain).' },
    miss: { description: 'No prey found. Something else hunts you.' }
  },
  {
    id: 'travel_butcher',
    name: 'Butcher the Kill',
    category: 'Travel',
    trigger: 'When you have defeated the prey',
    roll: '+toughness',
    strongHit: { description: 'Gain rations equal to the creature\'s HP (or appropriate amount).' },
    weakHit: { description: 'Gain half the rations.' },
    miss: { description: 'Meat is spoiled or unsafe.' }
  },
  {
    id: 'travel_forage',
    name: 'Foraging',
    category: 'Travel',
    trigger: 'When searching for non-meat sustenance in the wild',
    roll: '+presence',
    strongHit: { description: 'Gain 1 ration by discovering edible plants, fungus, or salvageable sustenance.' },
    weakHit: { description: 'Roll 1d6. 1-3: Ration edible. 4-6: Contaminated.' },
    miss: { description: 'You find nothing. Reveal a hazard or threat.' }
  },
  {
    id: 'travel_camp',
    name: 'Camp',
    category: 'Travel',
    trigger: 'When resting outdoors without shelter',
    roll: '+toughness',
    strongHit: { description: 'Rest is safe; regain d6 HP.' },
    weakHit: { description: 'Rest is uneasy; regain d4 HP. Trigger Night Encounter Move.' },
    miss: { description: 'No healing. Trigger Night Encounter Move immediately.' }
  },
  {
    id: 'travel_night_encounter',
    name: 'Night Encounter',
    category: 'Travel',
    trigger: 'When a rest doesn\'t go as planned',
    roll: '+presence',
    strongHit: { description: 'The night is uneventful.' },
    weakHit: { description: 'A complication arises: sound in the dark, signs of danger, nearby presence.' },
    miss: { description: 'A threat emerges; creature, foe, weather, or omen.' }
  },
  {
    id: 'travel_hold_bearing',
    name: 'Hold Your Bearing',
    category: 'Travel',
    trigger: 'When navigating confusing or shifting terrain where losing direction is possible',
    roll: '+presence',
    strongHit: { description: 'You stay on course with no trouble.' },
    weakHit: { description: 'You stay on course but lose time, suffer fatigue, or encounter a minor complication.' },
    miss: { description: 'You become lost. Immediately trigger Face the Wilds Move.' }
  },
  {
    id: 'travel_tend_wounds',
    name: 'Tend Wounds',
    category: 'Travel',
    trigger: 'When treating injuries in the field using cloth, bandages, or herbs',
    roll: '+toughness',
    strongHit: { description: 'You clean and stabilize the injury. Recover d2 HP.' },
    weakHit: { description: 'You partially heal the wound. Recover 1 HP.' },
    miss: { description: 'Your treatment backfires. Take d2 damage instead.' }
  },

  // ===========================================================================
  // DUNGEON MOVES (Delving & Ruins)
  // ===========================================================================
  {
    id: 'dungeon_delve',
    name: 'Delve the Depths',
    category: 'Dungeon',
    trigger: 'When exploring a new room, chamber, passage, or structural space',
    roll: '+agility',
    strongHit: { description: 'You enter safely. The room is stable and contains no immediate danger. Consult Room Generation.' },
    weakHit: { description: 'You enter, but there\'s a complication (unstable floor, eerie sound). Consult Room Gen, then introduce complication.' },
    miss: { description: 'Danger waits. Consult Room Gen, then immediately trigger a threat, trap, creature, or collapse.' }
  },
  {
    id: 'dungeon_navigate',
    name: 'Navigate the Passage',
    category: 'Dungeon',
    trigger: 'When moving through a passage, hall, stairway, or narrow corridor',
    roll: '+agility',
    strongHit: { description: 'Passage is clear: Proceed safely.' },
    weakHit: { description: 'Something slows you: rubble, noise, dust clouds, strange markings.' },
    miss: { description: 'Passage is hazardous: traps, collapse, lurking monster, or instability.' }
  },
  {
    id: 'dungeon_search',
    name: 'Search the Room',
    category: 'Dungeon',
    trigger: 'When examining surfaces, furniture, debris, alcoves, or hidden spaces',
    roll: '+presence',
    strongHit: { description: 'You find something valuable or meaningful. Roll on Equipment or Loot tables.' },
    weakHit: { description: 'You find something minor or nothing important. May trigger complication or noise.' },
    miss: { description: 'Your searching triggers a hidden danger. A trap, creature, or structural shift activates.' }
  },
  {
    id: 'dungeon_trap',
    name: 'Face the Trap',
    category: 'Dungeon',
    trigger: 'When a trap activates or when interacting with a suspected trap',
    roll: '+agility or +toughness',
    strongHit: { description: 'Avoid full effect. You take minor cosmetic harm or startling shock.' },
    weakHit: { description: 'Reduce the effect, but suffer partial harm or drawback.' },
    miss: { description: 'Suffer the trap\'s full effect.' }
  },
  {
    id: 'dungeon_room_encounter',
    name: 'Room Encounter',
    category: 'Dungeon',
    trigger: 'When a room result indicates a creature, entity, or threat',
    roll: '+presence',
    strongHit: { description: 'You sense it early; prepare or reposition.' },
    weakHit: { description: 'You misread its behavior; begin in a compromised position.' },
    miss: { description: 'It is upon you immediately; begin combat.' }
  },
  {
    id: 'dungeon_reveal',
    name: 'Reveal a Secret',
    category: 'Dungeon',
    trigger: 'When attempting to uncover hidden rooms or passages',
    roll: '+presence',
    strongHit: { description: 'You discover a hidden door or secret feature.' },
    weakHit: { description: 'You find something, but it is difficult to access or risky.' },
    miss: { description: 'You miss the secret entirely, or trigger a hazard while searching.' }
  },
  {
    id: 'dungeon_retrace',
    name: 'Retrace your Steps',
    category: 'Dungeon',
    trigger: 'When navigating through previously explored dungeon sections',
    roll: '+presence',
    strongHit: { description: 'You return safely.' },
    weakHit: { description: 'Something has shifted—the environment is different or compromised.' },
    miss: { description: 'A new threat occupies your old path.' }
  },
  {
    id: 'dungeon_ruin',
    name: 'Withstand the Ruin',
    category: 'Dungeon',
    trigger: 'When the dungeon shifts, collapses, floods, or becomes unstable',
    roll: '+toughness',
    strongHit: { description: 'You endure or avoid the worst of it.' },
    weakHit: { description: 'You survive, but suffer lost time, gear damage, or fatigue.' },
    miss: { description: 'Significant structural failure harms or traps you.' }
  },
  {
    id: 'dungeon_loot',
    name: 'Loot Bodies',
    category: 'Dungeon',
    trigger: 'After defeating enemies or finding corpses',
    roll: '+presence',
    strongHit: { description: 'Gain useful loot: silver, gear, tools, scrolls, or keys. Add 1 valuable item.' },
    weakHit: { description: 'Gain minimal or damaged loot.' },
    miss: { description: 'You find nothing useful.' }
  },

  // ===========================================================================
  // CITY MOVES (Urban Exploration)
  // ===========================================================================
  {
    id: 'city_crawl',
    name: 'City Crawl',
    category: 'City',
    trigger: 'When navigating any settlement, street, ruins, alleys, or districts',
    roll: '+presence',
    strongHit: { description: 'You navigate confidently. Consult Street Generation. Choose next direction with clarity.' },
    weakHit: { description: 'Consult Street Gen. A complication emerges: crowding, obstruction, suspicious figures.' },
    miss: { description: 'Consult Street Gen. A major danger manifests: confrontation, trap, ambush, or hostility.' }
  },
  {
    id: 'city_collect_info',
    name: 'Collect Information',
    category: 'City',
    trigger: 'When searching for rumors, asking questions, spying, or listening to crowds',
    roll: '+presence',
    strongHit: { description: 'Gain clear and valuable information: local threats, opportunities, or identities.' },
    weakHit: { description: 'Gain partial or unclear info. Introduce a complication: suspicion, misleading clue.' },
    miss: { description: 'A hostile force, informant, or authority becomes aware of your presence.' }
  },
  {
    id: 'city_prepare',
    name: 'Prepare',
    category: 'City',
    trigger: 'When taking tactical action in streets, alleys, or crowded places',
    roll: '+presence',
    strongHit: { description: 'Gain advantage on your next Move.' },
    weakHit: { description: 'Gain advantage on your next Move with a complication.' },
    miss: { description: 'You expose yourself to danger or unwanted attention.' }
  },
  {
    id: 'city_influence',
    name: 'Influence',
    category: 'City',
    trigger: 'When interacting with NPCs in any social manner requiring influence',
    roll: '+presence',
    strongHit: { description: 'The NPC cooperates or yields. Gain what you asked for, within reason.' },
    weakHit: { description: 'They agree, but demand something in return or impose a condition.' },
    miss: { description: 'They refuse, alert others, or escalate tension.' }
  },
  {
    id: 'city_find_location',
    name: 'Find a Location',
    category: 'City',
    trigger: 'When searching for a shop, inn, temple, ruin, or specific district',
    roll: '+presence',
    strongHit: { description: 'You locate it quickly and without trouble.' },
    weakHit: { description: 'You locate it, but face a complication (cost increase, patrol, crowding).' },
    miss: { description: 'You fail to find it or reach it too late. A threat intervenes or blocks access.' }
  },
  {
    id: 'city_barter',
    name: 'Barter',
    category: 'City',
    trigger: 'When you attempt to exchange goods, silver, rations, or services',
    roll: '+presence',
    strongHit: { description: 'You make a favorable deal. Reduce cost or gain extra value.' },
    weakHit: { description: 'You complete the trade, but pay more, receive less, or worse quality.' },
    miss: { description: 'The trade collapses. The NPC becomes suspicious or offended.' }
  },
  {
    id: 'city_reassure',
    name: 'Reassure or Steady',
    category: 'City',
    trigger: 'When calming an ally, preventing panic, or restoring confidence',
    roll: '+presence or +strength',
    strongHit: { description: 'They regain composure. Remove disadvantage caused by fear/stress.' },
    weakHit: { description: 'They calm slightly, but carry lingering tension.' },
    miss: { description: 'You fail to help. Their condition worsens or escalates.' }
  },
  {
    id: 'city_read_intent',
    name: 'Read Intent',
    category: 'City',
    trigger: 'When you attempt to understand an NPC\'s motives, emotions, or truthfulness',
    roll: '+presence',
    strongHit: { description: 'You read them clearly. Learn their true intent or hidden motive.' },
    weakHit: { description: 'You sense partial truth, but misread something important.' },
    miss: { description: 'Your attempt is noticed. The NPC becomes defensive or deceptive.' }
  },
  {
    id: 'city_deceive',
    name: 'Deceive or Mislead',
    category: 'City',
    trigger: 'When lying, disguising intent, or misleading an NPC',
    roll: '+presence',
    strongHit: { description: 'They believe the lie.' },
    weakHit: { description: 'They believe most of it, but demand evidence or remain unsure.' },
    miss: { description: 'They see through your deception. Suspicion or danger escalates.' }
  },
  {
    id: 'city_intimidate',
    name: 'Intimidate',
    category: 'City',
    trigger: 'When you attempt to coerce through fear, threat, or show of strength',
    roll: '+presence or +strength',
    strongHit: { description: 'They yield or back down.' },
    weakHit: { description: 'They comply, but tension spikes and future interactions worsen.' },
    miss: { description: 'They resist, retaliate, or call for reinforcements.' }
  },
  {
    id: 'city_parley',
    name: 'Parley',
    category: 'City',
    trigger: 'When negotiating under threat or attempting to avoid violence',
    roll: '+presence',
    strongHit: { description: 'You de-escalate. Gain temporary safety or concession.' },
    weakHit: { description: 'You delay violence, but must offer something immediately.' },
    miss: { description: 'Talks collapse. The encounter becomes dangerous or violent.' }
  },

  // ===========================================================================
  // CONNECTION MOVES (NPCs & Factions)
  // ===========================================================================
  {
    id: 'conn_form',
    name: 'Form a Connection',
    category: 'Connection',
    trigger: 'When you establish a meaningful relationship with an NPC, faction, or group',
    roll: '+presence',
    strongHit: { description: 'The connection forms solidly. Mark 2 points on the Connection Track. Gain advantage next interaction.' },
    weakHit: { description: 'The connection forms, but uneasily. Mark 1 point on the Connection Track.' },
    miss: { description: 'The relationship starts poorly. Mark no points. They distrust you or demand something.' }
  },
  {
    id: 'conn_develop',
    name: 'Develop a Connection',
    category: 'Connection',
    trigger: 'When you take a meaningful action that strengthens a relationship',
    roll: '+agility (mental agility/action)',
    strongHit: { description: 'Mark 2 points on the Connection Track. Relationship becomes significantly stronger.' },
    weakHit: { description: 'Mark 1 point. The relationship improves, but some tension remains.' },
    miss: { description: 'Mark no points. The relationship suffers a setback.' }
  },
  {
    id: 'conn_test',
    name: 'Test a Connection',
    category: 'Connection',
    trigger: 'When you call upon a connection for help, resources, or action',
    roll: '+presence',
    strongHit: { description: 'They provide full assistance. Gain advantage on your next related Move.' },
    weakHit: { description: 'They offer limited help or require something in return.' },
    miss: { description: 'They refuse or are unable to aid you. Lose 1 connection point.' }
  },
  {
    id: 'conn_maintain',
    name: 'Maintain a Connection',
    category: 'Connection',
    trigger: 'When you check in, write, bring supplies, or do something to keep the relationship alive',
    roll: '+presence',
    strongHit: { description: 'The relationship remains strong. If already at max, gain a one-time benefit.' },
    weakHit: { description: 'It holds, but tension forms.' },
    miss: { description: 'Lose 1 point on the track.' }
  },

  // ===========================================================================
  // QUEST MOVES (Progress & Goals)
  // ===========================================================================
  {
    id: 'quest_start',
    name: 'Start a Quest',
    category: 'Quest',
    trigger: 'When you commit yourself to pursuing a meaningful goal',
    roll: '+toughness or +presence',
    strongHit: { description: 'You establish your direction with clarity. Gain advantage on your next quest-related Move.' },
    weakHit: { description: 'You begin the quest, but something complicates the path forward.' },
    miss: { description: 'You begin blindly. A threat or obstacle reveals itself immediately.' }
  },
  {
    id: 'quest_advance',
    name: 'Advance a Quest',
    category: 'Quest',
    trigger: 'When you take a meaningful action towards the quest objective',
    roll: '+toughness or +presence',
    strongHit: { description: 'Mark 2 segments of progress. Gain advantage on your next Move.' },
    weakHit: { description: 'Mark 1 segment of progress. A complication arises or delay occurs.' },
    miss: { description: 'Mark no progress. The world pushes back—hazard, setback, or threat emerges.' }
  },
  {
    id: 'quest_setback',
    name: 'Face Setback',
    category: 'Quest',
    trigger: 'When an obstacle blocks your progress or you encounter a significant challenge related to the quest',
    roll: '+toughness',
    strongHit: { description: 'You clear the obstacle. Mark 1 segment of progress.' },
    weakHit: { description: 'You succeed, but encounter a minor complication: injury, delay, or lost resources.' },
    miss: { description: 'The setback worsens. Reduce quest progress by 1 segment.' }
  },
  {
    id: 'quest_fulfill',
    name: 'Fulfill a Quest',
    category: 'Quest',
    trigger: 'When the final action towards a quest\'s objective is taken and the quest track is fully marked',
    roll: '+presence',
    strongHit: { description: 'You complete the quest decisively. Gain 1 advancement opportunity.' },
    weakHit: { description: 'You complete the quest, but at a narrative cost.' },
    miss: { description: 'The quest collapses at the final moment. Significant danger, loss, or reversal occurs. Reduce to half progress.' }
  },

  // ===========================================================================
  // ADVANCEMENT
  // ===========================================================================
  {
    id: 'advance_pursuit',
    name: 'Pursuit of Growth',
    category: 'Advancement',
    trigger: 'When your character has survived a significant session or made major progress',
    roll: '+any ability',
    strongHit: { description: 'You advance. Choose one Advancement Option.' },
    weakHit: { description: 'You advance, but at a cost. Choose one Option AND a narrative complication occurs.' },
    miss: { description: 'You fail to progress. Something interferes with your progress.' }
  },

  // ===========================================================================
  // HEARTH / SHELTER MOVES
  // ===========================================================================
  {
    id: 'hearth_claim',
    name: 'Claim a Shelter',
    category: 'Hearth',
    trigger: 'When you find a potentially habitable location and decide to make it yours',
    roll: '+presence (negotiate) or +strength (force) or +agility (sneak)',
    strongHit: { description: 'You secure the location. Roll on Home Features table.' },
    weakHit: { description: 'You claim it, but it comes with a flaw or occupant (Home Complications table).' },
    miss: { description: 'The place is already claimed, cursed, or falling apart. You may still stay, but danger is imminent.' }
  },
  {
    id: 'hearth_build',
    name: 'Build or Barricade',
    category: 'Hearth',
    trigger: 'When you attempt a permanent improvement or fortification',
    roll: '+strength + 1d4 days',
    strongHit: { description: 'Improvement succeeds without issue.' },
    weakHit: { description: 'It works, but costs extra time or draws unwanted attention.' },
    miss: { description: 'The effort fails catastrophically—collapse, injury, or curse.' }
  },
  {
    id: 'hearth_maintain',
    name: 'Maintain your Shelter',
    category: 'Hearth',
    trigger: 'When you spend a day fixing, cleaning, fortifying, or warding your home',
    roll: '+strength (fortifying) or +presence (warding) or +agility (repairs)',
    strongHit: { description: 'Reduce Upkeep by 2. Add a temporary benefit (safe rest, hidden cache).' },
    weakHit: { description: 'Reduce Upkeep by 1. Choose one minor cost (supplies, fatigue, noise).' },
    miss: { description: 'You attract attention or break something important. Add a Complication immediately.' }
  },

  // ===========================================================================
  // ADVENTURE REVEAL MOVES (Module Play)
  // ===========================================================================
  {
    id: 'reveal_clarify',
    name: 'Clarify the Text',
    category: 'Adventure',
    trigger: 'When written adventure is unclear, incomplete, or requires GM interpretation',
    roll: '+highest attribute',
    strongHit: { description: 'Critical Insight. You grasp intent perfectly. Interpret logically; do not reveal secrets.' },
    weakHit: { description: 'Clear Enough. Apply simplest, most straightforward interpretation.' },
    miss: { description: 'Uncertain Read. You misinterpret part of it. Your understanding is flawed or misleading.' }
  },
  {
    id: 'reveal_direction',
    name: 'Choose a Direction',
    category: 'Adventure',
    trigger: 'When adventure does not specify where character goes next',
    roll: '+highest attribute',
    strongHit: { description: 'Likely Path. Choose direction that makes most sense; favor logic.' },
    weakHit: { description: 'Wandering Path. Randomly determine direction or choose least obvious option.' },
    miss: { description: 'False Trail. Confidently head wrong way. Leads to difficulty, delay, or complication.' }
  },
  {
    id: 'reveal_npc_intent',
    name: 'Determine NPC Intent',
    category: 'Adventure',
    trigger: 'When NPC/Adventure state is not clearly stated (intent, attitude, next action)',
    roll: '+presence',
    strongHit: { description: 'Clear Motive.' },
    weakHit: { description: 'Uncertain Motive.' },
    miss: { description: 'Hidden Motive.' }
  },

  // ===========================================================================
  // COMBAT MOVES (if any - placeholder for future expansion)
  // ===========================================================================
];

// Helper function to get moves by category
export function getMovesByCategory(category: Move['category']): Move[] {
  return MOVES.filter(move => move.category === category);
}

// Helper function to get all unique categories
export function getAllCategories(): Move['category'][] {
  return ['Travel', 'Dungeon', 'City', 'Connection', 'Quest', 'Hearth', 'Advancement', 'Adventure'];
}

