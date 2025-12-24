import React, { useState } from 'react';
import { Dices, User, Compass, Swords, DoorOpen, Map, Users, Building2, Trees } from 'lucide-react';
import { rollDice } from '../utils/diceUtils';
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
} from '../data/globalTables';

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

const QuickRollers: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

  const rollLoot = () => {
    const roll = rollDice(6) * 10 + rollDice(6);
    const entry = lootTable.entries.find((e) => e.roll === roll);
    setLastRoll({
      type: 'loot',
      result: entry ? entry.result : 'Unknown',
    });
  };

  const rollWander = () => {
    const roll = rollDice(20);
    const entry = wanderTable.entries.find((e) => e.roll === roll);
    setLastRoll({
      type: 'wander',
      result: entry ? entry.result : 'Unknown',
    });
  };

  const rollNPC = () => {
    // Roll on ALL NPC oracle tables
    const firstNameRoll = rollDice(100);
    const surnameRoll = rollDice(100);
    const summaryRoll = rollDice(20);
    const appearanceRoll = rollDice(100);
    const traitsRoll = rollDice(100);
    const motivationRoll = rollDice(20);
    const occupationRoll = rollDice(12);
    const habitRoll = rollDice(12);
    const moodRoll = rollDice(12);
    const wantsRoll = rollDice(12);

    const firstName = npcFirstNamesTable.entries.find((e) => e.roll === firstNameRoll)?.result || 'Unknown';
    const surname = npcSurnamesTable.entries.find((e) => e.roll === surnameRoll)?.result || 'Unknown';
    const name = `${firstName} ${surname}`;
    const summary = npcSummaryTable.entries.find((e) => e.roll === summaryRoll)?.result || 'Unknown';
    const appearance = npcAppearanceTable.entries.find((e) => e.roll === appearanceRoll)?.result || 'Unknown';
    const traits = npcTraitsTable.entries.find((e) => e.roll === traitsRoll)?.result || 'Unknown';
    const motivation = npcMotivationTable.entries.find((e) => e.roll === motivationRoll)?.result || 'Unknown';
    const occupation = npcOccupationTable.entries.find((e) => e.roll === occupationRoll)?.result || 'Unknown';
    const habit = npcHabitTable.entries.find((e) => e.roll === habitRoll)?.result || 'Unknown';
    const mood = npcMoodTable.entries.find((e) => e.roll === moodRoll)?.result || 'Unknown';
    const wants = npcWantsTable.entries.find((e) => e.roll === wantsRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'npc',
      result: { name, summary, appearance, traits, motivation, occupation, habit, mood, wants },
    });
  };

  const rollEncounter = () => {
    const contextRoll = rollDice(12);
    const dispositionRoll = rollDice(10);
    const goalRoll = rollDice(10);

    const context = encounterContextTable.entries.find((e) => e.roll === contextRoll)?.result || 'Unknown';
    const disposition = encounterDispositionTable.entries.find((e) => e.roll === dispositionRoll)?.result || 'Unknown';
    const goal = encounterGoalTable.entries.find((e) => e.roll === goalRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'encounter',
      result: { context, disposition, goal },
    });
  };

  const rollDungeonRoom = () => {
    const originRoll = rollDice(6);
    const themeRoll = rollDice(12);
    const architectureRoll = rollDice(20);
    const dressingRoll = rollDice(20);
    const inhabitantsRoll = rollDice(20);
    const motiveRoll = rollDice(12);
    const firstImpressionRoll = rollDice(12);
    const challengeRoll = rollDice(12);
    const helpRoll = rollDice(6);
    const atmosphereRoll = rollDice(6);
    const sizeRoll = rollDice(6);
    const exitCountRoll = rollDice(6);
    const exitTypeRoll = rollDice(6);

    const origin = dungeonOriginTable.entries.find((e) => e.roll === originRoll)?.result || 'Unknown';
    const theme = dungeonThemeTable.entries.find((e) => e.roll === themeRoll)?.result || 'Unknown';
    const architecture = dungeonRoomArchitectureTable.entries.find((e) => e.roll === architectureRoll)?.result || 'Unknown';
    const dressing = dungeonRoomDressingTable.entries.find((e) => e.roll === dressingRoll)?.result || 'Unknown';
    const inhabitants = dungeonInhabitantsTable.entries.find((e) => e.roll === inhabitantsRoll)?.result || 'Unknown';
    const motive = dungeonPrimaryMotiveTable.entries.find((e) => e.roll === motiveRoll)?.result || 'Unknown';
    const firstImpression = entranceFirstImpressionTable.entries.find((e) => e.roll === firstImpressionRoll)?.result || 'Unknown';
    const immediateChallenge = entranceImmediateChallengeTable.entries.find((e) => e.roll === challengeRoll)?.result || 'Unknown';
    const possibleHelp = entrancePossibleHelpTable.entries.find((e) => e.roll === helpRoll)?.result || 'Unknown';
    const atmosphere = roomAtmosphereTable.entries.find((e) => e.roll === atmosphereRoll)?.result || 'Unknown';
    const sizeDetailed = roomSizeDetailedTable.entries.find((e) => e.roll === sizeRoll)?.result || 'Unknown';
    const exitCount = roomExitCountTable.entries.find((e) => e.roll === exitCountRoll)?.result || 'Unknown';
    const exitType = roomExitTypeTable.entries.find((e) => e.roll === exitTypeRoll)?.result || 'Unknown';

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
    const incidentRoll = rollDice(20);
    const destinationRoll = rollDice(20);
    const dangerRoll = rollDice(20);
    const twistRoll = rollDice(20);

    const incitingIncident = adventureIncitingIncidentTable.entries.find((e) => e.roll === incidentRoll)?.result || 'Unknown';
    const destination = adventureDestinationTable.entries.find((e) => e.roll === destinationRoll)?.result || 'Unknown';
    const dangerHeart = adventureDangerHeartTable.entries.find((e) => e.roll === dangerRoll)?.result || 'Unknown';
    const twist = adventureTwistTable.entries.find((e) => e.roll === twistRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'adventure',
      result: { incitingIncident, destination, dangerHeart, twist },
    });
  };

  const rollFaction = () => {
    const originRoll = rollDice(20);
    const purposeRoll = rollDice(20);
    const attitudeRoll = rollDice(20);
    const powerRoll = rollDice(20);
    const resourcesRoll = rollDice(20);
    const weaknessRoll = rollDice(20);
    const plotHookRoll = rollDice(20);

    const origin = factionOriginsTable.entries.find((e) => e.roll === originRoll)?.result || 'Unknown';
    const purpose = factionPurposeTable.entries.find((e) => e.roll === purposeRoll)?.result || 'Unknown';
    const attitude = factionAttitudeTable.entries.find((e) => e.roll === attitudeRoll)?.result || 'Unknown';
    const power = factionPowerTable.entries.find((e) => e.roll === powerRoll)?.result || 'Unknown';
    const resources = factionResourcesTable.entries.find((e) => e.roll === resourcesRoll)?.result || 'Unknown';
    const weakness = factionWeaknessTable.entries.find((e) => e.roll === weaknessRoll)?.result || 'Unknown';
    const plotHook = factionPlotHooksTable.entries.find((e) => e.roll === plotHookRoll)?.result || 'Unknown';

    setLastRoll({
      type: 'faction',
      result: { origin, purpose, attitude, power, resources, weakness, plotHook },
    });
  };

  const rollCity = () => {
    const originRoll = rollDice(6);
    const conditionRoll = rollDice(12);
    const signsRoll = rollDice(20);
    const gatekeeperRoll = rollDice(12);
    const discoveriesRoll = rollDice(20);
    const urbanOddityRoll = rollDice(20);
    const moodRoll = rollDice(12);
    const attitudeRoll = rollDice(6);
    const problemRoll = rollDice(20);
    const secretRoll = rollDice(12);
    const noiseRoll = rollDice(12);
    const exteriorRoll = rollDice(20);
    const notableObjectRoll = rollDice(20);
    const socialDiscoveryRoll = rollDice(12);
    const undercityRoll = rollDice(12);
    const threatRoll = rollDice(20);

    const origin = cityOriginTable.entries.find((e) => e.roll === originRoll)?.result || 'Unknown';
    const condition = cityConditionTable.entries.find((e) => e.roll === conditionRoll)?.result || 'Unknown';
    const signsEntering = citySignsEnteringTable.entries.find((e) => e.roll === signsRoll)?.result || 'Unknown';
    const gatekeeper = cityGatekeeperTable.entries.find((e) => e.roll === gatekeeperRoll)?.result || 'Unknown';
    const discoveries = cityDiscoveriesTable.entries.find((e) => e.roll === discoveriesRoll)?.result || 'Unknown';
    const urbanOddity = cityUrbanOdditiesTable.entries.find((e) => e.roll === urbanOddityRoll)?.result || 'Unknown';
    const neighborhoodMood = neighborhoodMoodTable.entries.find((e) => e.roll === moodRoll)?.result || 'Unknown';
    const neighborhoodAttitude = neighborhoodAttitudeTable.entries.find((e) => e.roll === attitudeRoll)?.result || 'Unknown';
    const neighborhoodProblem = neighborhoodProblemTable.entries.find((e) => e.roll === problemRoll)?.result || 'Unknown';
    const neighborhoodSecret = neighborhoodSecretTable.entries.find((e) => e.roll === secretRoll)?.result || 'Unknown';
    const streetNoise = streetNoiseTable.entries.find((e) => e.roll === noiseRoll)?.result || 'Unknown';
    const buildingExterior = buildingExteriorTable.entries.find((e) => e.roll === exteriorRoll)?.result || 'Unknown';
    const buildingNotableObject = buildingNotableObjectTable.entries.find((e) => e.roll === notableObjectRoll)?.result || 'Unknown';
    const socialDiscovery = socialDiscoveriesTable.entries.find((e) => e.roll === socialDiscoveryRoll)?.result || 'Unknown';
    const signsOfUndercity = signsOfUndercityTable.entries.find((e) => e.roll === undercityRoll)?.result || 'Unknown';
    const threat = cityThreatsTable.entries.find((e) => e.roll === threatRoll)?.result || 'Unknown';

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
    const temperatureRoll = rollDice(20);
    const visibilityRoll = rollDice(20);
    const unnaturalWeatherRoll = rollDice(20);
    const minorDiscoveryRoll = rollDice(20);
    const travelersRoll = rollDice(20);
    const ruinsRoll = rollDice(20);
    const omenRoll = rollDice(20);
    const resourceRoll = rollDice(12);
    const terrainDangerRoll = rollDice(20);
    const weatherShiftRoll = rollDice(12);
    const weatherOmenRoll = rollDice(12);
    const oddityRoll = rollDice(20);
    const waterRoll = rollDice(12);
    const detailRoll = rollDice(12);
    const lostPeopleRoll = rollDice(12);
    const creatureRoll = rollDice(20);
    const ambushRoll = rollDice(12);
    const wildlifeRoll = rollDice(20);
    const resourceLossRoll = rollDice(12);

    const temperature = wildernessTemperatureTable.entries.find((e) => e.roll === temperatureRoll)?.result || 'Unknown';
    const visibility = wildernessVisibilityTable.entries.find((e) => e.roll === visibilityRoll)?.result || 'Unknown';
    const unnaturalWeather = unnaturalWeatherTable.entries.find((e) => e.roll === unnaturalWeatherRoll)?.result || 'Unknown';
    const minorDiscovery = minorNaturalDiscoveriesTable.entries.find((e) => e.roll === minorDiscoveryRoll)?.result || 'Unknown';
    const signsOfTravelers = signsOfTravelersTable.entries.find((e) => e.roll === travelersRoll)?.result || 'Unknown';
    const remainsAndRuins = remainsAndRuinsTable.entries.find((e) => e.roll === ruinsRoll)?.result || 'Unknown';
    const strangeOmen = strangeOmensTable.entries.find((e) => e.roll === omenRoll)?.result || 'Unknown';
    const wildResource = wildResourcesTable.entries.find((e) => e.roll === resourceRoll)?.result || 'Unknown';
    const terrainDanger = wildernessTerrainDangersTable.entries.find((e) => e.roll === terrainDangerRoll)?.result || 'Unknown';
    const weatherShift = weatherShiftTable.entries.find((e) => e.roll === weatherShiftRoll)?.result || 'Unknown';
    const weatherOmenSign = weatherOmenSignsTable.entries.find((e) => e.roll === weatherOmenRoll)?.result || 'Unknown';
    const naturalOddity = naturalOdditiesTable.entries.find((e) => e.roll === oddityRoll)?.result || 'Unknown';
    const landmarkWater = landmarkWaterTable.entries.find((e) => e.roll === waterRoll)?.result || 'Unknown';
    const landmarkDetail = landmarkDetailsTable.entries.find((e) => e.roll === detailRoll)?.result || 'Unknown';
    const signsOfLostPeople = signsOfLostPeopleTable.entries.find((e) => e.roll === lostPeopleRoll)?.result || 'Unknown';
    const creatureSignsLarge = creatureSignsLargeTable.entries.find((e) => e.roll === creatureRoll)?.result || 'Unknown';
    const signsOfAmbush = signsOfAmbushTable.entries.find((e) => e.roll === ambushRoll)?.result || 'Unknown';
    const wildlifeHazard = wildlifeHazardsTable.entries.find((e) => e.roll === wildlifeRoll)?.result || 'Unknown';
    const resourceLossHazard = resourceLossHazardsTable.entries.find((e) => e.roll === resourceLossRoll)?.result || 'Unknown';

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
          <h3 className="text-sm font-bold uppercase text-mork-pink">Dungeon Room:</h3>
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
      <div className="grid grid-cols-1 gap-2">
        <button
          onClick={rollLoot}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Loot
        </button>
        
        <button
          onClick={rollNPC}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <User size={16} />
          Roll NPC
        </button>
        
        <button
          onClick={rollWander}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Compass size={16} />
          Why Wander?
        </button>

        <button
          onClick={rollEncounter}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Swords size={16} />
          Roll Encounter
        </button>

        <button
          onClick={rollDungeonRoom}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <DoorOpen size={16} />
          Roll Dungeon Room
        </button>

        <button
          onClick={rollAdventure}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Map size={16} />
          Roll Adventure
        </button>

        <button
          onClick={rollFaction}
          className="mork-button text-sm flex items-center justify-center gap-2"
        >
          <Users size={16} />
          Roll Faction
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

export default QuickRollers;

