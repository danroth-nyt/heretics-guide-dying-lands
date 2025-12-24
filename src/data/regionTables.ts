import { RegionTable, Territory } from '../types';

/**
 * Region tables mapping d12 rolls to location types
 * Based on the Heretic's Guide to Dying Lands PDF (Page 9)
 */

export const regionTables: Record<Territory, RegionTable> = {
  kergus: {
    1: 'Tower',
    2: 'Fort',
    3: 'Shrine',
    4: 'Monument',
    5: 'Tavern',
    6: 'Shop',
    7: 'Castle',
    8: 'Village',
    9: 'Manor',
    10: 'Dungeon',
    11: 'Academy',
    12: 'Prison',
  },
  wastland: {
    1: 'Graveyard',
    2: 'Fort',
    3: 'Battlefield',
    4: 'Tavern',
    5: 'Cannibal Camp',
    6: 'Monster Lair',
    7: 'Mine',
    8: 'Village',
    9: 'Dungeon',
    10: 'Ruins',
    11: 'Swamps',
    12: 'Prison',
  },
  grift: {
    1: 'Graveyard',
    2: 'Tower',
    3: 'Shrine',
    4: 'Monument',
    5: 'Battlefield',
    6: 'Cannibal Camp',
    7: 'Monster Lair',
    8: 'Mine',
    9: 'Dungeon',
    10: 'Ruins',
    11: 'Hermit\'s Cabin',
    12: 'Swamps',
  },
  tveland: {
    1: 'Fort',
    2: 'Shrine',
    3: 'Monument',
    4: 'Tavern',
    5: 'Shop',
    6: 'Castle',
    7: 'Mine',
    8: 'Village',
    9: 'Manor',
    10: 'Dungeon',
    11: 'Hermit\'s Cabin',
    12: 'Academy',
  },
};

export const territoryNames: Record<Territory, string> = {
  kergus: 'Kergüs',
  wastland: 'Wästland',
  grift: 'Grift',
  tveland: 'Tveland',
};

export const territoryDescriptions: Record<Territory, string> = {
  kergus: 'A land of military might and ancient towers',
  wastland: 'A desolate wasteland haunted by the dead',
  grift: 'A mercantile realm of trade and treachery',
  tveland: 'A mystical territory of faith and knowledge',
};
