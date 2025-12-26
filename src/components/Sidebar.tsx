import React from 'react';
import { Territory, Omens } from '../types';
import { territoryNames, territoryDescriptions } from '../data/regionTables';
import { Map, Dices, Eye, Cloud, Mountain, Skull, Printer, HelpCircle, BookOpen, Save, MapPin, Type, Swords, CloudRain, CloudSnow, Wind, Snowflake, Sun, Thermometer, CloudDrizzle, CloudFog } from 'lucide-react';
import AccordionSection from './AccordionSection';
import Oracles from './Oracles';
import LocationOracles from './LocationOracles';
import NameOracles from './NameOracles';

interface SidebarProps {
  selectedTerritory: Territory;
  onTerritoryChange: (territory: Territory) => void;
  onGenerateMap: () => void;
  onGenerateOmens: () => void;
  omens: Omens | null;
  onPrint: () => void;
  onOpenReference?: () => void;
  onOpenSaveLoad?: () => void;
  onOpenMoves?: () => void;
  isGenerating?: boolean;
  isMobileDrawer?: boolean;
}

// Helper function to get weather icon based on text
const getWeatherIcon = (text: string, size: number = 14) => {
  const lowerText = text.toLowerCase();
  
  // Precipitation icons
  if (lowerText.includes('snow')) return <CloudSnow size={size} className="text-mork-pink" />;
  if (lowerText.includes('rain') || lowerText.includes('downpour')) return <CloudRain size={size} className="text-mork-pink" />;
  if (lowerText.includes('drizzle') || lowerText.includes('drops')) return <CloudDrizzle size={size} className="text-mork-pink" />;
  if (lowerText.includes('fog') || lowerText.includes('mist')) return <CloudFog size={size} className="text-mork-pink" />;
  if (lowerText.includes('sleet') || lowerText.includes('hail') || lowerText.includes('icy')) return <Snowflake size={size} className="text-mork-pink" />;
  
  // Wind icons
  if (lowerText.includes('wind') || lowerText.includes('gust') || lowerText.includes('gale') || lowerText.includes('breeze')) return <Wind size={size} className="text-mork-pink" />;
  
  // Temperature icons
  if (lowerText.includes('cold') || lowerText.includes('freez') || lowerText.includes('frost') || lowerText.includes('chill')) return <Snowflake size={size} className="text-mork-pink" />;
  if (lowerText.includes('hot') || lowerText.includes('warm') || lowerText.includes('heat') || lowerText.includes('scorch')) return <Sun size={size} className="text-mork-pink" />;
  if (lowerText.includes('temperature') || lowerText.includes('mild') || lowerText.includes('cool')) return <Thermometer size={size} className="text-mork-pink" />;
  
  // Default
  return <Cloud size={size} className="text-mork-pink" />;
};

const Sidebar: React.FC<SidebarProps> = ({
  selectedTerritory,
  onTerritoryChange,
  onGenerateMap,
  onGenerateOmens,
  omens,
  onPrint,
  onOpenReference,
  onOpenSaveLoad,
  onOpenMoves,
  isGenerating,
  isMobileDrawer = false,
}) => {
  return (
    <aside className={`w-80 h-screen bg-mork-yellow border-mork-black p-6 overflow-y-auto no-print ${
      isMobileDrawer ? '' : 'border-r-4'
    }`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Skull size={32} />
          <h1 className="text-3xl font-pirata">HERETIC</h1>
        </div>
        <p className="text-xs uppercase tracking-wider opacity-75">Map Generator</p>
      </div>

      {/* Map Controls Accordion */}
      <AccordionSection
        title="Map Controls"
        icon={<Map size={16} />}
        defaultOpen={true}
        storageKey="accordion-map-controls"
      >
        <div className="space-y-4">
          {/* Territory Selection */}
          <div>
            <label className="block mb-2 font-bold text-sm uppercase tracking-wide">
              <Mountain className="inline mr-2" size={16} />
              Select Territory
            </label>
            <select
              value={selectedTerritory}
              onChange={(e) => onTerritoryChange(e.target.value as Territory)}
              className="mork-select w-full"
            >
              {Object.entries(territoryNames).map(([key, name]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
            <p className="text-xs mt-2 opacity-75 italic">
              {territoryDescriptions[selectedTerritory]}
            </p>
          </div>

          {/* Generate Map Button */}
          <button
            onClick={onGenerateMap}
            disabled={isGenerating}
            className="mork-button w-full flex items-center justify-center gap-2"
          >
            <Map size={20} />
            {isGenerating ? 'Generating...' : 'Generate Map'}
          </button>

          {/* Campaign Maps Button */}
          <button
            onClick={onOpenSaveLoad}
            className="mork-button w-full flex items-center justify-center gap-2"
          >
            <Save size={20} />
            Campaign Maps
          </button>

          {/* Print Button */}
          <button
            onClick={onPrint}
            className="mork-button w-full flex items-center justify-center gap-2"
          >
            <Printer size={20} />
            Print Map
          </button>
        </div>
      </AccordionSection>

      {/* Omens Accordion */}
      <AccordionSection
        title="Omens"
        icon={<Eye size={16} />}
        defaultOpen={false}
        storageKey="accordion-omens"
      >
        <button
          onClick={onGenerateOmens}
          className="mork-button w-full mb-4 text-sm flex items-center justify-center gap-2"
        >
          <Dices size={16} />
          Roll Omens
        </button>

        {omens ? (
          <div className="mork-panel space-y-3">
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Oracle:</h3>
              <p className="text-sm">{omens.oracle}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Landscape:</h3>
              <p className="text-sm">{omens.landscape}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Weather:</h3>
              <div className="text-sm space-y-1">
                <p className="flex items-center gap-2">
                  {getWeatherIcon(omens.weatherDetailed.precipitation)}
                  {omens.weatherDetailed.precipitation}
                </p>
                <p className="flex items-center gap-2">
                  {getWeatherIcon(omens.weatherDetailed.wind)}
                  {omens.weatherDetailed.wind}
                </p>
                <p className="flex items-center gap-2">
                  {getWeatherIcon(omens.weatherDetailed.temperature)}
                  {omens.weatherDetailed.temperature}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Action:</h3>
              <p className="text-sm">{omens.action}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Theme:</h3>
              <p className="text-sm">{omens.theme}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Descriptor:</h3>
              <p className="text-sm">{omens.descriptor}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Focus:</h3>
              <p className="text-sm">{omens.focus}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-1 text-mork-pink">Detail:</h3>
              <p className="text-sm">{omens.detail}</p>
            </div>
          </div>
        ) : (
          <div className="mork-panel text-center py-6 opacity-50">
            <Eye size={32} className="mx-auto mb-2" />
            <p className="text-sm italic">No omens yet...</p>
          </div>
        )}
      </AccordionSection>

      {/* Moves Accordion */}
      <AccordionSection
        title="Moves"
        icon={<Swords size={16} />}
        defaultOpen={false}
        storageKey="accordion-moves"
      >
        <button
          onClick={onOpenMoves}
          className="mork-button-blood w-full flex items-center justify-center gap-2 bg-mork-blood text-mork-yellow border-2 border-mork-black hover:bg-mork-black hover:text-mork-blood transition-colors py-2 px-4 font-bold uppercase"
        >
          <Swords size={20} />
          Browse Moves
        </button>
        <p className="text-xs mt-2 opacity-75 italic text-center">
          PBtA-style character actions with integrated dice roller
        </p>
      </AccordionSection>

      {/* Oracles Accordion */}
      <AccordionSection
        title="Oracles"
        icon={<Dices size={16} />}
        defaultOpen={false}
        storageKey="accordion-oracles"
      >
        <Oracles />
      </AccordionSection>

      {/* Locations Accordion */}
      <AccordionSection
        title="Locations"
        icon={<MapPin size={16} />}
        defaultOpen={false}
        storageKey="accordion-locations"
      >
        <LocationOracles />
      </AccordionSection>

      {/* Names Accordion */}
      <AccordionSection
        title="Names"
        icon={<Type size={16} />}
        defaultOpen={false}
        storageKey="accordion-names"
      >
        <NameOracles />
      </AccordionSection>

      {/* Reference Tables Accordion */}
      <AccordionSection
        title="Reference Tables"
        icon={<BookOpen size={16} />}
        defaultOpen={false}
        storageKey="accordion-reference"
      >
        <button
          onClick={onOpenReference}
          className="mork-button w-full flex items-center justify-center gap-2"
        >
          <BookOpen size={20} />
          Browse All Tables
        </button>
        <p className="text-xs mt-2 opacity-75 italic text-center">
          Access all game tables for quick reference
        </p>
      </AccordionSection>

      {/* Help Accordion */}
      <AccordionSection
        title="Help"
        icon={<HelpCircle size={16} />}
        defaultOpen={false}
        storageKey="accordion-help"
      >
        <div className="mork-panel mb-4">
          <h3 className="text-sm font-bold uppercase mb-2">How to Use:</h3>
          <ul className="text-xs space-y-1 opacity-75">
            <li>• Select a territory</li>
            <li>• Generate a new map</li>
            <li>• Click nodes for details</li>
            <li>• Click roads for encounters</li>
            <li>• Roll omens for atmosphere</li>
            <li>• Print when ready</li>
          </ul>
        </div>

        <div className="mork-panel">
          <h3 className="text-sm font-bold uppercase mb-2">Shortcuts:</h3>
          <ul className="text-xs space-y-1 opacity-75">
            <li>• Ctrl/Cmd + G: Generate Map</li>
            <li>• Ctrl/Cmd + O: Roll Omens</li>
            <li>• Ctrl/Cmd + P: Print</li>
          </ul>
        </div>
      </AccordionSection>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t-2 border-mork-black text-center">
        <p className="text-xs opacity-50">
          Based on Heretic's Guide to Dying Lands
        </p>
        <p className="text-xs opacity-50 mt-1">
          Oracle tables from Reclvse Version 1.9
        </p>
        <p className="text-xs opacity-50 mt-1">
          For MÖRK BORG
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

