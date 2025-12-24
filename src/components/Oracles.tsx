import React, { useState } from 'react';
import { Dices, User, Compass, Swords, DoorOpen, Map, Users, Building2, Trees } from 'lucide-react';
import { rollOnTable } from '../utils/tableLookup';
import {
  lootTable,
  wanderTable,
  npcOccupationTable,
  npcHabitTable,
  npcMoodTable,
  npcWantsTable,
  npcFirstNamesTable,
  npcSurnamesTable,
  npcAppearanceTable,
  npcSummaryTable,
  npcMotivationTable,
  npcTraitsTable,
} from '../data/globalTables';
import {
  encounterContextTable,
  encounterDispositionTable,
  encounterGoalTable,
} from '../data/oracles/recluse_encounter';
import {
  dungeonOriginTable,
  dungeonThemeTable,
  dungeonRoomArchitectureTable,
  dungeonRoomDressingTable,
  dungeonInhabitantsTable,
  dungeonPrimaryMotiveTable,
  entranceFirstImpressionTable,
  entranceImmediateChallengeTable,
  entrancePossibleHelpTable,
  roomAtmosphereTable,
  roomSizeDetailedTable,
  roomExitCountTable,
  roomExitTypeTable,
} from '../data/oracles/recluse_dungeon';
import {
  factionPlotHooksTable,
  factionOriginsTable,
  factionPurposeTable,
  factionAttitudeTable,
  factionPowerTable,
  factionResourcesTable,
  factionWeaknessTable,
} from '../data/oracles/recluse_npc';
import {
  adventureIncitingIncidentTable,
  adventureDestinationTable,
  adventureDangerHeartTable,
  adventureTwistTable,
} from '../data/oracles/recluse_adventure';
import {
  wildernessTemperatureTable,
  wildernessVisibilityTable,
  unnaturalWeatherTable,
  minorNaturalDiscoveriesTable,
  signsOfTravelersTable,
  remainsAndRuinsTable,
  strangeOmensTable,
  wildResourcesTable,
  wildernessTerrainDangersTable,
  weatherShiftTable,
  weatherOmenSignsTable,
  naturalOdditiesTable,
  landmarkWaterTable,
  landmarkDetailsTable,
  signsOfLostPeopleTable,
  creatureSignsLargeTable,
  signsOfAmbushTable,
  wildlifeHazardsTable,
  resourceLossHazardsTable,
} from '../data/oracles/recluse_wilderness';
import {
  cityOriginTable,
  cityConditionTable,
  citySignsEnteringTable,
  cityGatekeeperTable,
  cityDiscoveriesTable,
  cityUrbanOdditiesTable,
  neighborhoodMoodTable,
  neighborhoodAttitudeTable,
  neighborhoodProblemTable,
  neighborhoodSecretTable,
  streetNoiseTable,
  buildingExteriorTable,
  buildingNotableObjectTable,
  socialDiscoveriesTable,
  signsOfUndercityTable,
  cityThreatsTable,
} from '../data/oracles/recluse_city';

interface RollResult {
  type: 'loot' | 'wander' | 'npc' | 'encounter' | 'dungeonRoom' | 'adventure' | 'faction' | 'city' | 'wilderness';
  result: string | NPCResult | EncounterResult | DungeonRoomResult | AdventureResult | FactionResult | CityResult | WildernessResult;
}

interface NPCResult {
  name: string;
  summary: string;
  appearance: string;
  traits: string;
  motivation: string;
  occupation: string;
  habit: string;
  mood: string;
  wants: string;
}

interface EncounterResult {
  context: string;
  disposition: string;
  goal: string;
}

interface DungeonRoomResult {
  origin: string;
  theme: string;
  architecture: string;
  dressing: string;
  inhabitants: string;
  motive: string;
  firstImpression: string;
  immediateChallenge: string;
  possibleHelp: string;
  atmosphere: string;
  sizeDetailed: string;
  exitCount: string;
  exitType: string;
}

interface AdventureResult {
  incitingIncident: string;
  destination: string;
  dangerHeart: string;
  twist: string;
}

interface FactionResult {
  origin: string;
  purpose: string;
  attitude: string;
  power: string;
  resources: string;
  weakness: string;
  plotHook: string;
}

interface CityResult {
  origin: string;
  condition: string;
  signsEntering: string;
  gatekeeper: string;
  discoveries: string;
  urbanOddity: string;
  neighborhoodMood: string;
  neighborhoodAttitude: string;
  neighborhoodProblem: string;
  neighborhoodSecret: string;
  streetNoise: string;
  buildingExterior: string;
  buildingNotableObject: string;
  socialDiscovery: string;
  signsOfUndercity: string;
  threat: string;
}

interface WildernessResult {
  temperature: string;
  visibility: string;
  unnaturalWeather: string;
  minorDiscovery: string;
  signsOfTravelers: string;
  remainsAndRuins: string;
  strangeOmen: string;
  wildResource: string;
  terrainDanger: string;
  weatherShift: string;
  weatherOmenSign: string;
  naturalOddity: string;
  landmarkWater: string;
  landmarkDetail: string;
  signsOfLostPeople: string;
  creatureSignsLarge: string;
  signsOfAmbush: string;
  wildlifeHazard: string;
  resourceLossHazard: string;
}

const Oracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

  const rollLoot = () => {
    setLastRoll({
      type: 'loot',
      result: rollOnTable(lootTable),
    });
  };

  const rollWander = () => {
    setLastRoll({
      type: 'wander',
      result: rollOnTable(wanderTable),
    });
  };

  const rollNPC = () => {
    const firstName = rollOnTable(npcFirstNamesTable);
    const surname = rollOnTable(npcSurnamesTable);
    const name = `${firstName} ${surname}`;
    const summary = rollOnTable(npcSummaryTable);
    const appearance = rollOnTable(npcAppearanceTable);
    const traits = rollOnTable(npcTraitsTable);
    const motivation = rollOnTable(npcMotivationTable);
    const occupation = rollOnTable(npcOccupationTable);
    const habit = rollOnTable(npcHabitTable);
    const mood = rollOnTable(npcMoodTable);
    const wants = rollOnTable(npcWantsTable);

    setLastRoll({
      type: 'npc',
      result: { name, summary, appearance, traits, motivation, occupation, habit, mood, wants },
    });
  };

  const rollEncounter = () => {
    const context = rollOnTable(encounterContextTable);
    const disposition = rollOnTable(encounterDispositionTable);
    const goal = rollOnTable(encounterGoalTable);

    setLastRoll({
      type: 'encounter',
      result: { context, disposition, goal },
    });
  };

  const rollDungeonRoom = () => {
    const origin = rollOnTable(dungeonOriginTable);
    const theme = rollOnTable(dungeonThemeTable);
    const architecture = rollOnTable(dungeonRoomArchitectureTable);
    const dressing = rollOnTable(dungeonRoomDressingTable);
    const inhabitants = rollOnTable(dungeonInhabitantsTable);
    const motive = rollOnTable(dungeonPrimaryMotiveTable);
    const firstImpression = rollOnTable(entranceFirstImpressionTable);
    const immediateChallenge = rollOnTable(entranceImmediateChallengeTable);
    const possibleHelp = rollOnTable(entrancePossibleHelpTable);
    const atmosphere = rollOnTable(roomAtmosphereTable);
    const sizeDetailed = rollOnTable(roomSizeDetailedTable);
    const exitCount = rollOnTable(roomExitCountTable);
    const exitType = rollOnTable(roomExitTypeTable);

    setLastRoll({
      type: 'dungeonRoom',
      result: { 
        origin, 
        theme, 
        architecture, 
        dressing, 
        inhabitants, 
        motive, 
        firstImpression, 
        immediateChallenge, 
        possibleHelp, 
        atmosphere, 
        sizeDetailed, 
        exitCount, 
        exitType 
      },
    });
  };

  const rollAdventure = () => {
    const incitingIncident = rollOnTable(adventureIncitingIncidentTable);
    const destination = rollOnTable(adventureDestinationTable);
    const dangerHeart = rollOnTable(adventureDangerHeartTable);
    const twist = rollOnTable(adventureTwistTable);

    setLastRoll({
      type: 'adventure',
      result: { incitingIncident, destination, dangerHeart, twist },
    });
  };

  const rollFaction = () => {
    const origin = rollOnTable(factionOriginsTable);
    const purpose = rollOnTable(factionPurposeTable);
    const attitude = rollOnTable(factionAttitudeTable);
    const power = rollOnTable(factionPowerTable);
    const resources = rollOnTable(factionResourcesTable);
    const weakness = rollOnTable(factionWeaknessTable);
    const plotHook = rollOnTable(factionPlotHooksTable);

    setLastRoll({
      type: 'faction',
      result: { origin, purpose, attitude, power, resources, weakness, plotHook },
    });
  };

  const rollCity = () => {
    const origin = rollOnTable(cityOriginTable);
    const condition = rollOnTable(cityConditionTable);
    const signsEntering = rollOnTable(citySignsEnteringTable);
    const gatekeeper = rollOnTable(cityGatekeeperTable);
    const discoveries = rollOnTable(cityDiscoveriesTable);
    const urbanOddity = rollOnTable(cityUrbanOdditiesTable);
    const neighborhoodMood = rollOnTable(neighborhoodMoodTable);
    const neighborhoodAttitude = rollOnTable(neighborhoodAttitudeTable);
    const neighborhoodProblem = rollOnTable(neighborhoodProblemTable);
    const neighborhoodSecret = rollOnTable(neighborhoodSecretTable);
    const streetNoise = rollOnTable(streetNoiseTable);
    const buildingExterior = rollOnTable(buildingExteriorTable);
    const buildingNotableObject = rollOnTable(buildingNotableObjectTable);
    const socialDiscovery = rollOnTable(socialDiscoveriesTable);
    const signsOfUndercity = rollOnTable(signsOfUndercityTable);
    const threat = rollOnTable(cityThreatsTable);

    setLastRoll({
      type: 'city',
      result: { 
        origin, 
        condition, 
        signsEntering, 
        gatekeeper, 
        discoveries, 
        urbanOddity, 
        neighborhoodMood, 
        neighborhoodAttitude, 
        neighborhoodProblem, 
        neighborhoodSecret, 
        streetNoise, 
        buildingExterior, 
        buildingNotableObject, 
        socialDiscovery, 
        signsOfUndercity, 
        threat 
      },
    });
  };

  const rollWilderness = () => {
    const temperature = rollOnTable(wildernessTemperatureTable);
    const visibility = rollOnTable(wildernessVisibilityTable);
    const unnaturalWeather = rollOnTable(unnaturalWeatherTable);
    const minorDiscovery = rollOnTable(minorNaturalDiscoveriesTable);
    const signsOfTravelers = rollOnTable(signsOfTravelersTable);
    const remainsAndRuins = rollOnTable(remainsAndRuinsTable);
    const strangeOmen = rollOnTable(strangeOmensTable);
    const wildResource = rollOnTable(wildResourcesTable);
    const terrainDanger = rollOnTable(wildernessTerrainDangersTable);
    const weatherShift = rollOnTable(weatherShiftTable);
    const weatherOmenSign = rollOnTable(weatherOmenSignsTable);
    const naturalOddity = rollOnTable(naturalOdditiesTable);
    const landmarkWater = rollOnTable(landmarkWaterTable);
    const landmarkDetail = rollOnTable(landmarkDetailsTable);
    const signsOfLostPeople = rollOnTable(signsOfLostPeopleTable);
    const creatureSignsLarge = rollOnTable(creatureSignsLargeTable);
    const signsOfAmbush = rollOnTable(signsOfAmbushTable);
    const wildlifeHazard = rollOnTable(wildlifeHazardsTable);
    const resourceLossHazard = rollOnTable(resourceLossHazardsTable);

    setLastRoll({
      type: 'wilderness',
      result: {
        temperature,
        visibility,
        unnaturalWeather,
        minorDiscovery,
        signsOfTravelers,
        remainsAndRuins,
        strangeOmen,
        wildResource,
        terrainDanger,
        weatherShift,
        weatherOmenSign,
        naturalOddity,
        landmarkWater,
        landmarkDetail,
        signsOfLostPeople,
        creatureSignsLarge,
        signsOfAmbush,
        wildlifeHazard,
        resourceLossHazard,
      },
    });
  };

  const renderResult = () => {
    if (!lastRoll) return null;

    if (lastRoll.type === 'npc' && typeof lastRoll.result === 'object' && 'occupation' in lastRoll.result) {
      const npc = lastRoll.result as NPCResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Random NPC:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Name:</strong> {npc.name}</p>
            <p><strong>Summary:</strong> {npc.summary}</p>
            <p><strong>Appearance:</strong> {npc.appearance}</p>
            <p><strong>Traits:</strong> {npc.traits}</p>
            <p><strong>Motivation:</strong> {npc.motivation}</p>
            <p><strong>Occupation:</strong> {npc.occupation}</p>
            <p><strong>Habit:</strong> {npc.habit}</p>
            <p><strong>Mood:</strong> {npc.mood}</p>
            <p><strong>Wants:</strong> {npc.wants}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'encounter' && typeof lastRoll.result === 'object' && 'context' in lastRoll.result) {
      const encounter = lastRoll.result as EncounterResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Random Encounter:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Context:</strong> {encounter.context}</p>
            <p><strong>Disposition:</strong> {encounter.disposition}</p>
            <p><strong>Goal:</strong> {encounter.goal}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'dungeonRoom' && typeof lastRoll.result === 'object' && 'origin' in lastRoll.result) {
      const room = lastRoll.result as DungeonRoomResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Dungeon:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {room.origin}</p>
            <p><strong>Theme:</strong> {room.theme}</p>
            <p><strong>Inhabitants:</strong> {room.inhabitants}</p>
            <p><strong>Motive:</strong> {room.motive}</p>
            <p><strong>First Impression:</strong> {room.firstImpression}</p>
            <p><strong>Immediate Challenge:</strong> {room.immediateChallenge}</p>
            <p><strong>Possible Help:</strong> {room.possibleHelp}</p>
            <p><strong>Atmosphere:</strong> {room.atmosphere}</p>
            <p><strong>Size:</strong> {room.sizeDetailed}</p>
            <p><strong>Architecture:</strong> {room.architecture}</p>
            <p><strong>Dressing:</strong> {room.dressing}</p>
            <p><strong>Exit Count:</strong> {room.exitCount}</p>
            <p><strong>Exit Type:</strong> {room.exitType}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'adventure' && typeof lastRoll.result === 'object' && 'incitingIncident' in lastRoll.result) {
      const adventure = lastRoll.result as AdventureResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Adventure Hook:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Inciting Incident:</strong> {adventure.incitingIncident}</p>
            <p><strong>Destination:</strong> {adventure.destination}</p>
            <p><strong>Danger:</strong> {adventure.dangerHeart}</p>
            <p><strong>Twist:</strong> {adventure.twist}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'faction' && typeof lastRoll.result === 'object' && 'plotHook' in lastRoll.result) {
      const faction = lastRoll.result as FactionResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Faction:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {faction.origin}</p>
            <p><strong>Purpose:</strong> {faction.purpose}</p>
            <p><strong>Power:</strong> {faction.power}</p>
            <p><strong>Resources:</strong> {faction.resources}</p>
            <p><strong>Weakness:</strong> {faction.weakness}</p>
            <p><strong>Attitude:</strong> {faction.attitude}</p>
            <p><strong>Plot Hook:</strong> {faction.plotHook}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'city' && typeof lastRoll.result === 'object' && 'threat' in lastRoll.result) {
      const city = lastRoll.result as CityResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">City:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {city.origin}</p>
            <p><strong>Condition:</strong> {city.condition}</p>
            <p><strong>Signs Entering:</strong> {city.signsEntering}</p>
            <p><strong>Gatekeeper:</strong> {city.gatekeeper}</p>
            <p><strong>Discoveries:</strong> {city.discoveries}</p>
            <p><strong>Urban Oddity:</strong> {city.urbanOddity}</p>
            <p><strong>Neighborhood Mood:</strong> {city.neighborhoodMood}</p>
            <p><strong>Neighborhood Attitude:</strong> {city.neighborhoodAttitude}</p>
            <p><strong>Problem:</strong> {city.neighborhoodProblem}</p>
            <p><strong>Secret:</strong> {city.neighborhoodSecret}</p>
            <p><strong>Street Noise:</strong> {city.streetNoise}</p>
            <p><strong>Building Exterior:</strong> {city.buildingExterior}</p>
            <p><strong>Notable Object:</strong> {city.buildingNotableObject}</p>
            <p><strong>Social Discovery:</strong> {city.socialDiscovery}</p>
            <p><strong>Signs of Undercity:</strong> {city.signsOfUndercity}</p>
            <p><strong>Threat:</strong> {city.threat}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'wilderness' && typeof lastRoll.result === 'object' && 'temperature' in lastRoll.result) {
      const wild = lastRoll.result as WildernessResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Wilderness:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Temperature:</strong> {wild.temperature}</p>
            <p><strong>Visibility:</strong> {wild.visibility}</p>
            <p><strong>Unnatural Weather:</strong> {wild.unnaturalWeather}</p>
            <p><strong>Minor Discovery:</strong> {wild.minorDiscovery}</p>
            <p><strong>Signs of Travelers:</strong> {wild.signsOfTravelers}</p>
            <p><strong>Remains & Ruins:</strong> {wild.remainsAndRuins}</p>
            <p><strong>Strange Omen:</strong> {wild.strangeOmen}</p>
            <p><strong>Wild Resource:</strong> {wild.wildResource}</p>
            <p><strong>Terrain Danger:</strong> {wild.terrainDanger}</p>
            <p><strong>Weather Shift:</strong> {wild.weatherShift}</p>
            <p><strong>Weather Omen Sign:</strong> {wild.weatherOmenSign}</p>
            <p><strong>Natural Oddity:</strong> {wild.naturalOddity}</p>
            <p><strong>Landmark Water:</strong> {wild.landmarkWater}</p>
            <p><strong>Landmark Detail:</strong> {wild.landmarkDetail}</p>
            <p><strong>Signs of Lost People:</strong> {wild.signsOfLostPeople}</p>
            <p><strong>Creature Signs (Large):</strong> {wild.creatureSignsLarge}</p>
            <p><strong>Signs of Ambush:</strong> {wild.signsOfAmbush}</p>
            <p><strong>Wildlife Hazard:</strong> {wild.wildlifeHazard}</p>
            <p><strong>Resource Loss Hazard:</strong> {wild.resourceLossHazard}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="mork-panel">
        <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">
          {lastRoll.type === 'loot' ? 'Loot:' : 'Why Wander:'}
        </h3>
        <p className="text-xs">{lastRoll.result as string}</p>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* General Oracles */}
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={rollWander}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Compass size={16} />
          Why Wander?
        </button>

        <button
          onClick={rollAdventure}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Map size={16} />
          Roll Adventure
        </button>

        <button
          onClick={rollEncounter}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Swords size={16} />
          Roll Encounter
        </button>
        
        <button
          onClick={rollNPC}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <User size={16} />
          Roll NPC
        </button>

        <button
          onClick={rollFaction}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Users size={16} />
          Roll Faction
        </button>

        <button
          onClick={rollLoot}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Loot
        </button>
      </div>

      {/* Location Oracles */}
      <div className="border-2 border-mork-black p-3">
        <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-center opacity-75">
          Locations
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <button
            onClick={rollDungeonRoom}
            className="mork-button text-sm flex items-center justify-center gap-2"
          >
            <DoorOpen size={16} />
            Roll Dungeon
          </button>

          <button
            onClick={rollCity}
            className="mork-button text-sm flex items-center justify-center gap-2"
          >
            <Building2 size={16} />
            Roll City
          </button>

          <button
            onClick={rollWilderness}
            className="mork-button text-sm flex items-center justify-center gap-2"
          >
            <Trees size={16} />
            Roll Wilderness
          </button>
        </div>
      </div>

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default Oracles;
