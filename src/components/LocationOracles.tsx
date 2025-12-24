import React, { useState } from 'react';
import { DoorOpen, Building2, Trees } from 'lucide-react';
import { rollOnTable } from '../utils/tableLookup';
import {
  dungeonOriginTable,
  dungeonPurposeNowTable,
  dungeonThemeTable,
  dungeonEntranceStateTable,
  dungeonEntranceHazardsTable,
  dungeonRoomArchitectureTable,
  dungeonRoomDressingTable,
  dungeonRoomPurposeTable,
  dungeonInhabitantsTable,
  dungeonPrimaryMotiveTable,
  dungeonLightTable,
  dungeonAirTempTable,
  dungeonDiscoveryTable,
  dungeonHazardsTable,
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
  roomContentsTypeTable,
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
  neighborhoodTypeTable,
  neighborhoodSoundTable,
  neighborhoodSmellTable,
  neighborhoodActivityTable,
  streetNoiseTable,
  streetSizeTable,
  streetShapeTable,
  streetQualityTable,
  streetSurfaceTable,
  streetSmellTable,
  streetFeatureTable,
  streetLightLevelTable,
  streetNoiseLevelTable,
  streetActivityTable,
  streetBuildingsTable,
  streetHazardTable,
  streetDiscoveryTable,
  streetEncounterTable,
  streetExitsCountTable,
  streetExitTypeTable,
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
  weatherShiftTable,
  weatherOmenSignsTable,
  naturalOdditiesTable,
  landmarkWaterTable,
  landmarkDetailsTable,
  signsOfLostPeopleTable,
  creatureSignsLargeTable,
  signsOfAmbushTable,
} from '../data/oracles/recluse_wilderness';

interface RollResult {
  type: 'dungeon' | 'dungeonRoom' | 'city' | 'wilderness' | 'neighborhood' | 'street';
  result: DungeonResult | DungeonRoomResult | CityResult | WildernessResult | NeighborhoodResult | StreetResult;
}

interface DungeonResult {
  origin: string;
  purposeNow: string;
  theme: string;
  inhabitants: string;
  motive: string;
  entranceState: string;
  firstImpression: string;
  immediateChallenge: string;
  possibleHelp: string;
  entranceHazards: string;
}

interface DungeonRoomResult {
  size: string;
  shape: string;
  purpose: string;
  architecture: string;
  light: string;
  airTemp: string;
  atmosphere: string;
  dressing: string;
  sounds: string;
  smells: string;
  contentsType: string;
  discovery: string;
  hazard: string;
  encounter: string;
  loot: string;
  exitCount: string;
  exitType: string;
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
  weatherShift: string;
  weatherOmenSign: string;
  naturalOddity: string;
  landmarkWater: string;
  landmarkDetail: string;
  signsOfLostPeople: string;
  creatureSignsLarge: string;
  signsOfAmbush: string;
}

interface NeighborhoodResult {
  type: string;
  mood: string;
  sound: string;
  smell: string;
  activity: string;
  problem: string;
  secret: string;
  attitude: string;
}

interface StreetResult {
  size: string;
  shape: string;
  quality: string;
  surface: string;
  lightLevel: string;
  noiseLevel: string;
  smell: string;
  features: string;
  activity: string;
  buildings: string;
  hazard: string;
  discovery: string;
  encounter: string;
  exitsCount: string;
  exitType: string;
}

const LocationOracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

  const rollDungeon = () => {
    const origin = rollOnTable(dungeonOriginTable);
    const purposeNow = rollOnTable(dungeonPurposeNowTable);
    const theme = rollOnTable(dungeonThemeTable);
    const inhabitants = rollOnTable(dungeonInhabitantsTable);
    const motive = rollOnTable(dungeonPrimaryMotiveTable);
    const entranceState = rollOnTable(dungeonEntranceStateTable);
    const firstImpression = rollOnTable(entranceFirstImpressionTable);
    const immediateChallenge = rollOnTable(entranceImmediateChallengeTable);
    const possibleHelp = rollOnTable(entrancePossibleHelpTable);
    const entranceHazards = rollOnTable(dungeonEntranceHazardsTable);

    setLastRoll({
      type: 'dungeon',
      result: { 
        origin, 
        purposeNow,
        theme, 
        inhabitants, 
        motive, 
        entranceState,
        firstImpression, 
        immediateChallenge, 
        possibleHelp, 
        entranceHazards
      },
    });
  };

  const rollDungeonRoom = () => {
    const size = rollOnTable(roomSizeDetailedTable);
    const shape = rollOnTable(roomShapeTable);
    const purpose = rollOnTable(dungeonRoomPurposeTable);
    const architecture = rollOnTable(dungeonRoomArchitectureTable);
    const light = rollOnTable(dungeonLightTable);
    const airTemp = rollOnTable(dungeonAirTempTable);
    const atmosphere = rollOnTable(roomAtmosphereTable);
    const dressing = rollOnTable(dungeonRoomDressingTable);
    const sounds = rollOnTable(roomSoundsTable);
    const smells = rollOnTable(roomSmellsTable);
    const contentsType = rollOnTable(roomContentsTypeTable);
    const discovery = rollOnTable(dungeonDiscoveryTable);
    const hazard = rollOnTable(dungeonHazardsTable);
    const encounter = rollOnTable(roomEncounterTable);
    const loot = rollOnTable(roomLootTable);
    const exitCount = rollOnTable(roomExitCountTable);
    const exitType = rollOnTable(roomExitTypeTable);

    setLastRoll({
      type: 'dungeonRoom',
      result: { 
        size,
        shape,
        purpose,
        architecture, 
        light,
        airTemp,
        atmosphere,
        dressing, 
        sounds,
        smells,
        contentsType,
        discovery,
        hazard,
        encounter,
        loot,
        exitCount, 
        exitType
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
    const weatherShift = rollOnTable(weatherShiftTable);
    const weatherOmenSign = rollOnTable(weatherOmenSignsTable);
    const naturalOddity = rollOnTable(naturalOdditiesTable);
    const landmarkWater = rollOnTable(landmarkWaterTable);
    const landmarkDetail = rollOnTable(landmarkDetailsTable);
    const signsOfLostPeople = rollOnTable(signsOfLostPeopleTable);
    const creatureSignsLarge = rollOnTable(creatureSignsLargeTable);
    const signsOfAmbush = rollOnTable(signsOfAmbushTable);

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
        weatherShift,
        weatherOmenSign,
        naturalOddity,
        landmarkWater,
        landmarkDetail,
        signsOfLostPeople,
        creatureSignsLarge,
        signsOfAmbush,
      },
    });
  };

  const rollNeighborhood = () => {
    const type = rollOnTable(neighborhoodTypeTable);
    const mood = rollOnTable(neighborhoodMoodTable);
    const sound = rollOnTable(neighborhoodSoundTable);
    const smell = rollOnTable(neighborhoodSmellTable);
    const activity = rollOnTable(neighborhoodActivityTable);
    const problem = rollOnTable(neighborhoodProblemTable);
    const secret = rollOnTable(neighborhoodSecretTable);
    const attitude = rollOnTable(neighborhoodAttitudeTable);

    setLastRoll({
      type: 'neighborhood',
      result: {
        type,
        mood,
        sound,
        smell,
        activity,
        problem,
        secret,
        attitude,
      },
    });
  };

  const rollStreet = () => {
    const size = rollOnTable(streetSizeTable);
    const shape = rollOnTable(streetShapeTable);
    const quality = rollOnTable(streetQualityTable);
    const surface = rollOnTable(streetSurfaceTable);
    const lightLevel = rollOnTable(streetLightLevelTable);
    const noiseLevel = rollOnTable(streetNoiseLevelTable);
    const smell = rollOnTable(streetSmellTable);
    const features = rollOnTable(streetFeatureTable);
    const activity = rollOnTable(streetActivityTable);
    const buildings = rollOnTable(streetBuildingsTable);
    const hazard = rollOnTable(streetHazardTable);
    const discovery = rollOnTable(streetDiscoveryTable);
    const encounter = rollOnTable(streetEncounterTable);
    const exitsCount = rollOnTable(streetExitsCountTable);
    const exitType = rollOnTable(streetExitTypeTable);

    setLastRoll({
      type: 'street',
      result: {
        size,
        shape,
        quality,
        surface,
        lightLevel,
        noiseLevel,
        smell,
        features,
        activity,
        buildings,
        hazard,
        discovery,
        encounter,
        exitsCount,
        exitType,
      },
    });
  };

  const renderResult = () => {
    if (!lastRoll) return null;

    if (lastRoll.type === 'dungeon') {
      const dungeon = lastRoll.result as DungeonResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Dungeon:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Origin:</strong> {dungeon.origin}</p>
            <p><strong>Purpose Now:</strong> {dungeon.purposeNow}</p>
            <p><strong>Theme:</strong> {dungeon.theme}</p>
            <p><strong>Inhabitants:</strong> {dungeon.inhabitants}</p>
            <p><strong>Motive:</strong> {dungeon.motive}</p>
            <p><strong>Entrance State:</strong> {dungeon.entranceState}</p>
            <p><strong>First Impression:</strong> {dungeon.firstImpression}</p>
            <p><strong>Immediate Challenge:</strong> {dungeon.immediateChallenge}</p>
            <p><strong>Possible Help:</strong> {dungeon.possibleHelp}</p>
            <p><strong>Entrance Hazards:</strong> {dungeon.entranceHazards}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'dungeonRoom') {
      const room = lastRoll.result as DungeonRoomResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Dungeon Room:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Size:</strong> {room.size}</p>
            <p><strong>Shape:</strong> {room.shape}</p>
            <p><strong>Purpose:</strong> {room.purpose}</p>
            <p><strong>Architecture:</strong> {room.architecture}</p>
            <p><strong>Light:</strong> {room.light}</p>
            <p><strong>Air/Temp:</strong> {room.airTemp}</p>
            <p><strong>Atmosphere:</strong> {room.atmosphere}</p>
            <p><strong>Dressing:</strong> {room.dressing}</p>
            <p><strong>Sounds:</strong> {room.sounds}</p>
            <p><strong>Smells:</strong> {room.smells}</p>
            <p><strong>Contents Type:</strong> {room.contentsType}</p>
            <p><strong>Discovery:</strong> {room.discovery}</p>
            <p><strong>Hazard:</strong> {room.hazard}</p>
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
            <p><strong>Weather Shift:</strong> {wild.weatherShift}</p>
            <p><strong>Weather Omen Sign:</strong> {wild.weatherOmenSign}</p>
            <p><strong>Natural Oddity:</strong> {wild.naturalOddity}</p>
            <p><strong>Landmark Water:</strong> {wild.landmarkWater}</p>
            <p><strong>Landmark Detail:</strong> {wild.landmarkDetail}</p>
            <p><strong>Signs of Lost People:</strong> {wild.signsOfLostPeople}</p>
            <p><strong>Creature Signs:</strong> {wild.creatureSignsLarge}</p>
            <p><strong>Signs of Ambush:</strong> {wild.signsOfAmbush}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'neighborhood') {
      const neighborhood = lastRoll.result as NeighborhoodResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Neighborhood:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Type:</strong> {neighborhood.type}</p>
            <p><strong>Mood:</strong> {neighborhood.mood}</p>
            <p><strong>Sound:</strong> {neighborhood.sound}</p>
            <p><strong>Smell:</strong> {neighborhood.smell}</p>
            <p><strong>Activity:</strong> {neighborhood.activity}</p>
            <p><strong>Problem:</strong> {neighborhood.problem}</p>
            <p><strong>Secret:</strong> {neighborhood.secret}</p>
            <p><strong>Attitude:</strong> {neighborhood.attitude}</p>
          </div>
        </div>
      );
    }

    if (lastRoll.type === 'street') {
      const street = lastRoll.result as StreetResult;
      return (
        <div className="mork-panel space-y-2">
          <h3 className="text-sm font-bold uppercase text-mork-pink">Street:</h3>
          <div className="text-xs space-y-1">
            <p><strong>Size:</strong> {street.size}</p>
            <p><strong>Shape:</strong> {street.shape}</p>
            <p><strong>Quality:</strong> {street.quality}</p>
            <p><strong>Surface:</strong> {street.surface}</p>
            <p><strong>Light Level:</strong> {street.lightLevel}</p>
            <p><strong>Noise Level:</strong> {street.noiseLevel}</p>
            <p><strong>Smell:</strong> {street.smell}</p>
            <p><strong>Features:</strong> {street.features}</p>
            <p><strong>Activity:</strong> {street.activity}</p>
            <p><strong>Buildings:</strong> {street.buildings}</p>
            <p><strong>Hazard:</strong> {street.hazard}</p>
            <p><strong>Discovery:</strong> {street.discovery}</p>
            <p><strong>Encounter:</strong> {street.encounter}</p>
            <p><strong>Exits Count:</strong> {street.exitsCount}</p>
            <p><strong>Exit Type:</strong> {street.exitType}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={rollDungeon}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <DoorOpen size={16} />
          Roll Dungeon
        </button>

        <button
          onClick={rollDungeonRoom}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <DoorOpen size={16} />
          Roll Dungeon Room
        </button>

        <button
          onClick={rollCity}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Building2 size={16} />
          Roll City
        </button>

        <button
          onClick={rollNeighborhood}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Building2 size={16} />
          Roll Neighborhood
        </button>

        <button
          onClick={rollStreet}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Building2 size={16} />
          Roll Street
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


