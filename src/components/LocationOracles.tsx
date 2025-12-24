import React, { useState } from 'react';
import { DoorOpen, Building2, Trees } from 'lucide-react';
import { rollOnTable } from '../utils/tableLookup';
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
  roomShapeTable,
  roomSoundsTable,
  roomSmellsTable,
  roomEncounterTable,
  roomLootTable,
} from '../data/oracles/recluse_dungeon';
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

interface RollResult {
  type: 'dungeonRoom' | 'city' | 'wilderness';
  result: DungeonRoomResult | CityResult | WildernessResult;
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
  shape: string;
  sounds: string;
  smells: string;
  encounter: string;
  loot: string;
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

const LocationOracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

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
    const shape = rollOnTable(roomShapeTable);
    const sounds = rollOnTable(roomSoundsTable);
    const smells = rollOnTable(roomSmellsTable);
    const encounter = rollOnTable(roomEncounterTable);
    const loot = rollOnTable(roomLootTable);

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
        exitType,
        shape,
        sounds,
        smells,
        encounter,
        loot
      },
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

    if (lastRoll.type === 'dungeonRoom') {
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
            <p><strong>Shape:</strong> {room.shape}</p>
            <p><strong>Architecture:</strong> {room.architecture}</p>
            <p><strong>Dressing:</strong> {room.dressing}</p>
            <p><strong>Sounds:</strong> {room.sounds}</p>
            <p><strong>Smells:</strong> {room.smells}</p>
            <p><strong>Encounter:</strong> {room.encounter}</p>
            <p><strong>Loot:</strong> {room.loot}</p>
            <p><strong>Exit Count:</strong> {room.exitCount}</p>
            <p><strong>Exit Type:</strong> {room.exitType}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'city') {
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

    if (lastRoll.type === 'wilderness') {
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
            <p><strong>Creature Signs:</strong> {wild.creatureSignsLarge}</p>
            <p><strong>Signs of Ambush:</strong> {wild.signsOfAmbush}</p>
            <p><strong>Wildlife Hazard:</strong> {wild.wildlifeHazard}</p>
            <p><strong>Resource Loss Hazard:</strong> {wild.resourceLossHazard}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-4">
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

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default LocationOracles;

