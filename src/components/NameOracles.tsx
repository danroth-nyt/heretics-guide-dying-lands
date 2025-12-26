import React, { useState } from 'react';
import { MapPin, Building2, Map, Compass, Type } from 'lucide-react';
import { rollOnTable } from '../utils/tableLookup';
import {
  villageNamesTable,
  cityNamesTable,
  regionNamesTable,
  landmarkNamesTable,
  tavernNamesTable,
} from '../data/oracles/recluse_names';

interface RollResult {
  type: 'villageName' | 'cityName' | 'regionName' | 'landmarkName' | 'tavernName';
  result: string;
}

const NameOracles: React.FC = () => {
  const [lastRoll, setLastRoll] = useState<RollResult | null>(null);

  const rollVillageName = () => {
    const name = rollOnTable(villageNamesTable);
    setLastRoll({
      type: 'villageName',
      result: name,
    });
  };

  const rollCityName = () => {
    const name = rollOnTable(cityNamesTable);
    setLastRoll({
      type: 'cityName',
      result: name,
    });
  };

  const rollRegionName = () => {
    const name = rollOnTable(regionNamesTable);
    setLastRoll({
      type: 'regionName',
      result: name,
    });
  };

  const rollLandmarkName = () => {
    const name = rollOnTable(landmarkNamesTable);
    setLastRoll({
      type: 'landmarkName',
      result: name,
    });
  };

  const rollTavernName = () => {
    const name = rollOnTable(tavernNamesTable);
    setLastRoll({
      type: 'tavernName',
      result: name,
    });
  };

  const renderResult = () => {
    if (!lastRoll) return null;

    const nameTypeMap: Record<string, string> = {
      villageName: 'Village Name',
      cityName: 'City Name',
      regionName: 'Region Name',
      landmarkName: 'Landmark Name',
      tavernName: 'Tavern Name',
    };
    const nameType = nameTypeMap[lastRoll.type];

    return (
      <div className="mork-panel">
        <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">
          {nameType}:
        </h3>
        <p className="text-xs">{lastRoll.result}</p>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={rollVillageName}
          className="mork-button text-xs py-2 flex items-center justify-center gap-1"
        >
          <MapPin size={14} />
          Village
        </button>

        <button
          onClick={rollCityName}
          className="mork-button text-xs py-2 flex items-center justify-center gap-1"
        >
          <Building2 size={14} />
          City
        </button>

        <button
          onClick={rollRegionName}
          className="mork-button text-xs py-2 flex items-center justify-center gap-1"
        >
          <Map size={14} />
          Region
        </button>

        <button
          onClick={rollLandmarkName}
          className="mork-button text-xs py-2 flex items-center justify-center gap-1"
        >
          <Compass size={14} />
          Landmark
        </button>

        <button
          onClick={rollTavernName}
          className="mork-button text-xs py-2 flex items-center justify-center gap-1"
        >
          <Type size={14} />
          Tavern
        </button>
      </div>

      {lastRoll && <div className="mt-4">{renderResult()}</div>}
    </div>
  );
};

export default NameOracles;

