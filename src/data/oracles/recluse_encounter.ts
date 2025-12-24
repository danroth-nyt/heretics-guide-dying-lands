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

export const encounterComplicationsTable: Table = {
  name: 'Encounter Complications (d12)',
  entries: [
    { roll: 1, result: 'Creature Blocks the Only Exit' },
    { roll: 2, result: 'You Are Cornered' },
    { roll: 3, result: 'Separated from Gear' },
    { roll: 4, result: 'Knocked Prone' },
    { roll: 5, result: 'Between Multiple Threats' },
    { roll: 6, result: 'High Ground Against You' },
    { roll: 7, result: 'Ambushed' },
    { roll: 8, result: 'Blinded Momentarily' },
    { roll: 9, result: 'Trapped Footing' },
    { roll: 10, result: 'Back to a Drop' },
    { roll: 11, result: 'Confined Space' },
    { roll: 12, result: 'Forced Into the Open' },
  ],
};

