import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Search, 
  Cog, 
  Fuel, 
  Compass, 
  Car, 
  SlidersHorizontal, 
  Flame, 
  Truck, 
  Globe, 
  Zap, 
  ZoomIn, 
  ZoomOut 
} from 'lucide-react';

import { TOYOTA_DIESEL_ENGINES, SERIES_CATEGORIES as TOYOTA_SERIES_CATEGORIES } from './data/toyotaDieselData';
import { ISUZU_DIESEL_ENGINES, ISUZU_SERIES_CATEGORIES } from './data/isuzuDieselData';
import { NISSAN_DIESEL_ENGINES, NISSAN_SERIES_CATEGORIES } from './data/nissanDieselData';
import { MITSUBISHI_DIESEL_ENGINES, MITSUBISHI_SERIES_CATEGORIES } from './data/mitsubishiDieselData';
import { HINO_DIESEL_ENGINES, HINO_SERIES_CATEGORIES } from './data/hinoDieselData';
import { KOREA_DIESEL_ENGINES, KOREA_SERIES_CATEGORIES } from './data/koreaDieselData';
import { CHINA_DIESEL_ENGINES, CHINA_SERIES_CATEGORIES } from './data/chinaDieselData';
import { EUROPE_DIESEL_ENGINES, EUROPE_SERIES_CATEGORIES } from './data/europeDieselData';
import { SWEDEN_DIESEL_ENGINES, SWEDEN_SERIES_CATEGORIES } from './data/swedenDieselData';
import { UK_DIESEL_ENGINES, UK_SERIES_CATEGORIES } from './data/ukDieselData';
import { USA_DIESEL_ENGINES, USA_SERIES_CATEGORIES } from './data/usaDieselData';

import { TorqueConverter } from './components/TorqueConverter';
import { HeadTighteningDiagram } from './components/HeadTighteningDiagram';
import { TimingGuideView } from './components/TimingGuideView';
import { FuelAndFluidsView } from './components/FuelAndFluidsView';
import { ValveAdjustmentGuide } from './components/ValveAdjustmentGuide';
import { UnitInjectorGuideView } from './components/UnitInjectorGuideView';
import { BrandLogo } from './components/BrandLogo';
import { ZoomController } from './components/ZoomController';

type RegionType = 'ASIA' | 'EUROPE' | 'AMERICA';
type AsiaCountryType = 'JAPAN' | 'KOREA' | 'CHINA';
type EuropeCountryType = 'GERMANY' | 'SWEDEN' | 'UK';
type JapanBrandType = 'TOYOTA' | 'ISUZU' | 'NISSAN' | 'MITSUBISHI' | 'HINO';

export function App() {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('ASIA');
  const [selectedAsiaCountry, setSelectedAsiaCountry] = useState<AsiaCountryType>('JAPAN');
  const [selectedEuropeCountry, setSelectedEuropeCountry] = useState<EuropeCountryType>('GERMANY');
  const [selectedJapanBrand, setSelectedJapanBrand] = useState<JapanBrandType>('TOYOTA');
  const [selectedSeries, setSelectedSeries] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortByCc, setSortByCc] = useState<boolean>(false);
  const [activeEngineId, setActiveEngineId] = useState<string>('1kd-ftv');
  const [activeTab, setActiveTab] = useState<'torques' | 'specs' | 'timing' | 'fuel' | 'converter'>('torques');
  const [viewMode, setViewMode] = useState<'engines' | 'injectorGuide'>('engines');
  const [selectedInjectorEngineId, setSelectedInjectorEngineId] = useState<string>('scania-124g');

  // In-App Zoom State (80% to 200%)
  const [zoomLevel, setZoomLevel] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('gs_app_zoom');
      return saved ? parseInt(saved, 10) : 100;
    } catch {
      return 100;
    }
  });

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.min(200, Math.max(80, prev + delta));
      try {
        localStorage.setItem('gs_app_zoom', next.toString());
      } catch {}
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
    try {
      localStorage.setItem('gs_app_zoom', '100');
    } catch {}
  };

  // Touch Pinch-to-Zoom Gesture Detection for WebViews & Mobile browsers
  useEffect(() => {
    let startDist = 0;
    let baseZoom = zoomLevel;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        startDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        baseZoom = zoomLevel;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && startDist > 10) {
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const currentDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
        const scaleFactor = currentDist / startDist;
        const newZoom = Math.min(200, Math.max(80, Math.round(baseZoom * scaleFactor)));
        setZoomLevel(newZoom);
        try {
          localStorage.setItem('gs_app_zoom', newZoom.toString());
        } catch {}
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [zoomLevel]);

  // Current active brand engines
  const currentBrandEngines: any[] = 
    selectedRegion === 'AMERICA'
      ? USA_DIESEL_ENGINES
      : selectedRegion === 'EUROPE'
      ? selectedEuropeCountry === 'SWEDEN'
        ? SWEDEN_DIESEL_ENGINES
        : selectedEuropeCountry === 'UK'
        ? UK_DIESEL_ENGINES
        : EUROPE_DIESEL_ENGINES
      : selectedAsiaCountry === 'KOREA'
      ? KOREA_DIESEL_ENGINES
      : selectedAsiaCountry === 'CHINA'
      ? CHINA_DIESEL_ENGINES
      : selectedJapanBrand === 'TOYOTA'
      ? TOYOTA_DIESEL_ENGINES
      : selectedJapanBrand === 'ISUZU'
      ? ISUZU_DIESEL_ENGINES
      : selectedJapanBrand === 'NISSAN'
      ? NISSAN_DIESEL_ENGINES
      : selectedJapanBrand === 'MITSUBISHI'
      ? MITSUBISHI_DIESEL_ENGINES
      : HINO_DIESEL_ENGINES;

  const currentCategories: any[] = 
    selectedRegion === 'AMERICA'
      ? USA_SERIES_CATEGORIES
      : selectedRegion === 'EUROPE'
      ? selectedEuropeCountry === 'SWEDEN'
        ? SWEDEN_SERIES_CATEGORIES
        : selectedEuropeCountry === 'UK'
        ? UK_SERIES_CATEGORIES
        : EUROPE_SERIES_CATEGORIES
      : selectedAsiaCountry === 'KOREA'
      ? KOREA_SERIES_CATEGORIES
      : selectedAsiaCountry === 'CHINA'
      ? CHINA_SERIES_CATEGORIES
      : selectedJapanBrand === 'TOYOTA'
      ? TOYOTA_SERIES_CATEGORIES
      : selectedJapanBrand === 'ISUZU'
      ? ISUZU_SERIES_CATEGORIES
      : selectedJapanBrand === 'NISSAN'
      ? NISSAN_SERIES_CATEGORIES
      : selectedJapanBrand === 'MITSUBISHI'
      ? MITSUBISHI_SERIES_CATEGORIES
      : HINO_SERIES_CATEGORIES;

  const currentBrandName = 
    selectedRegion === 'AMERICA' ? 'AMERICA (Cummins / Chevrolet / Ford / Detroit / CAT)' :
    selectedRegion === 'EUROPE'
      ? selectedEuropeCountry === 'SWEDEN' ? 'SWEDEN (ဆွီဒင် Scania & Volvo)'
        : selectedEuropeCountry === 'UK' ? 'UK (ဗြိတိန် Ford & Land Rover)'
        : 'GERMANY (ဂျာမနီ Benz / MAN / BMW / Audi)'
      : selectedAsiaCountry === 'KOREA' ? 'KOREA (ကိုရီးယား Hyundai & Kia)'
      : selectedAsiaCountry === 'CHINA' ? 'CHINA (တရုတ် Cummins, Yuchai, Weichai)'
      : selectedJapanBrand;

  const handleRegionChange = (region: RegionType) => {
    setViewMode('engines');
    setSelectedRegion(region);
    setSelectedSeries('ALL');
    setSearchQuery('');
    if (region === 'AMERICA') {
      setActiveEngineId('usa-cummins-r28');
    } else if (region === 'EUROPE') {
      setSelectedEuropeCountry('GERMANY');
      setActiveEngineId('euro-man-tge');
    } else {
      setSelectedAsiaCountry('JAPAN');
      setSelectedJapanBrand('TOYOTA');
      setActiveEngineId('1kd-ftv');
    }
  };

  const handleAsiaCountryChange = (country: AsiaCountryType) => {
    setViewMode('engines');
    setSelectedAsiaCountry(country);
    setSelectedSeries('ALL');
    setSearchQuery('');
    if (country === 'KOREA') {
      setActiveEngineId('korea-d4cb');
    } else if (country === 'CHINA') {
      setActiveEngineId('china-isf28');
    } else {
      setSelectedJapanBrand('TOYOTA');
      setActiveEngineId('1kd-ftv');
    }
  };

  const handleJapanBrandChange = (brand: JapanBrandType) => {
    setSelectedJapanBrand(brand);
    setSelectedSeries('ALL');
    setSearchQuery('');
    const list = 
      brand === 'TOYOTA' ? TOYOTA_DIESEL_ENGINES :
      brand === 'ISUZU' ? ISUZU_DIESEL_ENGINES :
      brand === 'NISSAN' ? NISSAN_DIESEL_ENGINES :
      brand === 'MITSUBISHI' ? MITSUBISHI_DIESEL_ENGINES : HINO_DIESEL_ENGINES;
    if (list && list.length > 0) setActiveEngineId(list[0].id);
  };

  // Filtering
  const filteredEngines = currentBrandEngines.filter((eng: any) => {
    const matchesSeries = selectedSeries === 'ALL' || eng.series === selectedSeries;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      (eng.code && eng.code.toLowerCase().includes(q)) || 
      (eng.name && eng.name.toLowerCase().includes(q)) || 
      (eng.nameMm && eng.nameMm.toLowerCase().includes(q)) ||
      (eng.commonVehicles && eng.commonVehicles.some((v: string) => v.toLowerCase().includes(q)));
    return matchesSeries && matchesSearch;
  });

  const displayedEngines = sortByCc
    ? [...filteredEngines].sort((a, b) => (a.displacementCc || 0) - (b.displacementCc || 0))
    : filteredEngines;

  const currentEngine: any = currentBrandEngines.find((e: any) => e.id === activeEngineId) || currentBrandEngines[0] || TOYOTA_DIESEL_ENGINES[0];

  return (
    <div 
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-red-600 selection:text-white pb-20 origin-top"
      style={{ zoom: zoomLevel !== 100 ? `${zoomLevel}%` : undefined }}
    >
      {/* 1. TOP HEADER & MULTI-CONTINENT SELECTOR */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        
        {/* Row 1: Logo + 3 CONTINENTS (ASIA | EUROPE | AMERICA) + Converter */}
        <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <img 
              src="/app-logo.jpg" 
              alt="GreatStar Diesel Pro - Z.N.W" 
              className="w-9 h-9 rounded-xl shadow-lg ring-1 ring-amber-500/50 object-cover shrink-0" 
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-black text-xs sm:text-sm tracking-tight text-white whitespace-nowrap">GreatStar</span>
                <span className="font-black text-xs sm:text-sm text-amber-400 whitespace-nowrap">Diesel Pro</span>
                <span className="text-[8px] px-1 py-0.5 rounded font-black border font-mono uppercase bg-amber-500/10 text-amber-300 border-amber-500/30">
                  Z.N.W
                </span>
              </div>
              <span className="text-[8.5px] text-slate-400 font-mono leading-none mt-0.5 hidden sm:block">
                Author & Founder: Zaw Naing Win
              </span>
            </div>
          </div>

          {/* 3 CONTINENTS SELECTOR TABS */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar ml-2">
            <div className="bg-slate-950 p-0.5 sm:p-1 rounded-xl border border-slate-800 flex items-center gap-0.5 sm:gap-1">
              <button
                onClick={() => handleRegionChange('ASIA')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                  selectedRegion === 'ASIA' && viewMode === 'engines'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🌏 ASIA</span>
              </button>

              <button
                onClick={() => handleRegionChange('EUROPE')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                  selectedRegion === 'EUROPE' && viewMode === 'engines'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇪🇺 EUROPE</span>
              </button>

              <button
                onClick={() => handleRegionChange('AMERICA')}
                className={`px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                  selectedRegion === 'AMERICA' && viewMode === 'engines'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇺🇸 AMERICA</span>
              </button>
            </div>

            {/* UNIT INJECTOR TAPPET BUTTON */}
            <button
              onClick={() => setViewMode(viewMode === 'injectorGuide' ? 'engines' : 'injectorGuide')}
              className={`px-2 sm:px-2.5 py-1 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1 transition border shrink-0 ${
                viewMode === 'injectorGuide'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 border-amber-300 text-slate-950 shadow-lg shadow-amber-500/25 font-black ring-2 ring-amber-400/40'
                  : 'bg-slate-900 border-amber-500/50 text-amber-300 hover:bg-slate-800 hover:border-amber-400 hover:text-amber-200'
              }`}
              title="Unit Injector Tappet (နော်ဇယ်တိုက်ပစ် သီးသန့် လမ်းညွှန်)"
            >
              <Zap className={`w-3.5 h-3.5 ${viewMode === 'injectorGuide' ? 'fill-slate-950 text-slate-950' : 'fill-amber-400 text-amber-400'}`} />
              <span className="whitespace-nowrap font-bold hidden xs:inline">Injector</span>
              <span className="whitespace-nowrap font-bold xs:hidden">Tappet</span>
            </button>

            {/* IN-APP SCREEN ZOOM CONTROL */}
            <div className="flex items-center bg-slate-950 border border-slate-700/80 rounded-lg p-0.5 shrink-0 shadow-inner" title="မျက်နှာပြင် အကျဉ်း/အကျယ် ချိန်ညှိရန် (Screen Zoom Controls)">
              <button
                onClick={() => handleZoom(-10)}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
                title="ချုံ့ရန် (Zoom Out -10%)"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="px-1 text-[10px] font-mono font-bold text-amber-400 hover:text-amber-300 select-none"
                title="မူလအတိုင်းပြန်ထားရန် (Reset 100%)"
              >
                {zoomLevel}%
              </button>
              <button
                onClick={() => handleZoom(10)}
                className="p-1 text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
                title="ချဲ့ရန် (Zoom In +10%)"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* CONVERTER BUTTON */}
            <button
              onClick={() => {
                setViewMode('engines');
                setActiveTab('converter');
              }}
              className={`px-2 py-1 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-1 transition border shrink-0 ${
                activeTab === 'converter' && viewMode === 'engines'
                  ? 'bg-amber-600 border-amber-500 text-white shadow-lg'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Row 2: Sub-Country/Brand Selector */}
        {viewMode === 'engines' && (
          <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800 overflow-x-auto flex items-center justify-between no-scrollbar bg-slate-950/90">
            {selectedRegion === 'ASIA' && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleAsiaCountryChange('JAPAN')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedAsiaCountry === 'JAPAN' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇯🇵 JAPAN
                </button>
                <button
                  onClick={() => handleAsiaCountryChange('KOREA')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedAsiaCountry === 'KOREA' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇰🇷 KOREA
                </button>
                <button
                  onClick={() => handleAsiaCountryChange('CHINA')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedAsiaCountry === 'CHINA' ? 'bg-red-700 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇨🇳 CHINA
                </button>
              </div>
            )}

            {selectedRegion === 'EUROPE' && (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSelectedEuropeCountry('GERMANY')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedEuropeCountry === 'GERMANY' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇩🇪 GERMANY
                </button>
                <button
                  onClick={() => setSelectedEuropeCountry('SWEDEN')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedEuropeCountry === 'SWEDEN' ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇸🇪 SWEDEN
                </button>
                <button
                  onClick={() => setSelectedEuropeCountry('UK')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    selectedEuropeCountry === 'UK' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  🇬🇧 UK
                </button>
              </div>
            )}

            {/* Japan Brands (Toyota, Isuzu, Nissan, Mitsubishi, Hino) */}
            {selectedRegion === 'ASIA' && selectedAsiaCountry === 'JAPAN' && (
              <div className="flex items-center gap-1 ml-3 border-l border-slate-800 pl-3">
                {(['TOYOTA', 'ISUZU', 'NISSAN', 'MITSUBISHI', 'HINO'] as JapanBrandType[]).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleJapanBrandChange(brand)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold transition ${
                      selectedJapanBrand === brand
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Row 3: Categories Bar */}
        {viewMode === 'engines' && currentCategories.length > 0 && (
          <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800/80 overflow-x-auto flex items-center gap-1.5 no-scrollbar bg-slate-950/60">
            {currentCategories.map((cat: any) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSeries(cat.id)}
                className={`whitespace-nowrap px-2.5 py-0.5 rounded-md text-[11px] font-medium transition ${
                  selectedSeries === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      {viewMode === 'injectorGuide' ? (
        <div className="max-w-7xl mx-auto px-3 py-4 w-full flex-1">
          <UnitInjectorGuideView 
            initialEngineId={selectedInjectorEngineId}
            onBackToEngines={() => setViewMode('engines')}
          />
        </div>
      ) : (
        <main className="max-w-7xl mx-auto px-3 py-3 w-full flex-1 flex flex-col gap-4">
          
          {/* Engine Selector Cards */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <BrandLogo brand={selectedJapanBrand} size={18} className="text-amber-400" />
                <span>{currentBrandName} အင်ဂျင်များ ({displayedEngines.length})</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSortByCc(!sortByCc)}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-bold border transition bg-slate-950 text-slate-300 border-slate-800"
                >
                  {sortByCc ? '📊 CC အသေး ➔ အကြီး ⬆' : '🏷️ အမှတ်တံဆိပ် အတွဲလိုက်'}
                </button>
                <div className="relative w-36 sm:w-48">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search engine / car..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-2 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Horizontal Scrollable Engine Cards */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {displayedEngines.map((eng: any) => (
                <button
                  key={eng.id}
                  onClick={() => setActiveEngineId(eng.id)}
                  className={`px-3 py-2 rounded-xl text-left border shrink-0 transition flex flex-col gap-0.5 ${
                    activeEngineId === eng.id
                      ? 'bg-amber-500/15 border-amber-500 text-white shadow-md ring-1 ring-amber-500/30'
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className={`text-xs font-black font-mono ${activeEngineId === eng.id ? 'text-amber-400' : 'text-slate-200'}`}>
                    {eng.code}
                  </span>
                  <span className="text-[10px] text-slate-400 max-w-[140px] truncate">
                    {eng.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ACTIVE ENGINE DETAIL HEADER */}
          {currentEngine && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    {currentEngine.code}
                  </h1>
                  <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {currentEngine.displacementCc ? `${currentEngine.displacementCc} cc` : currentEngine.displacement || 'Diesel'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-medium">
                  {currentEngine.name} {currentEngine.nameMm && `(${currentEngine.nameMm})`}
                </p>
                {currentEngine.commonVehicles && (
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    🚗 သုံးစွဲသောကားများ - {currentEngine.commonVehicles.join(', ')}
                  </p>
                )}
              </div>

              {/* TABS */}
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('torques')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'torques' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  Torque Specs
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'specs' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  Valve & Specs
                </button>
                <button
                  onClick={() => setActiveTab('timing')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'timing' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  Timing
                </button>
                <button
                  onClick={() => setActiveTab('fuel')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeTab === 'fuel' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                >
                  Fuel & Fluids
                </button>
              </div>
            </div>
          )}

          {/* TAB 1: TORQUE SPECS & HEAD DIAGRAM */}
          {activeTab === 'torques' && currentEngine && (
            <div className="space-y-4">
              <HeadTighteningDiagram engine={currentEngine} />
            </div>
          )}

          {/* TAB 2: VALVE CLEARANCE & GENERAL SPECS */}
          {activeTab === 'specs' && currentEngine && (
            <div className="space-y-4">
              <ValveAdjustmentGuide engine={currentEngine} />
            </div>
          )}

          {/* TAB 3: TIMING GUIDE */}
          {activeTab === 'timing' && currentEngine && (
            <TimingGuideView engine={currentEngine} />
          )}

          {/* TAB 4: FUEL & FLUIDS */}
          {activeTab === 'fuel' && currentEngine && (
            <FuelAndFluidsView engine={currentEngine} />
          )}

          {/* TAB 5: TORQUE CONVERTER */}
          {activeTab === 'converter' && (
            <TorqueConverter />
          )}

        </main>
      )}

      {/* FOOTER */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/90 py-4 text-center text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5 px-3">
          <img src="/app-logo.jpg" alt="GreatStar Z.N.W" className="w-5 h-5 rounded-md object-cover ring-1 ring-amber-500/30" />
          <span className="font-bold text-slate-200">GreatStar Diesel Pro</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
            Founder & Developer: Z.N.W (Zaw Naing Win)
          </span>
        </div>
        <p className="text-[11px] text-slate-500">
          Global Multi-Brand Diesel Workshop Spec Guide · Japan, Korea, China, USA & Europe
        </p>
      </footer>

      {/* FLOATING WORKSHOP SCREEN ZOOM CONTROLLER */}
      <ZoomController 
        zoomPercent={zoomLevel} 
        onZoomIn={() => handleZoom(10)} 
        onZoomOut={() => handleZoom(-10)} 
        onReset={handleResetZoom} 
      />
    </div>
  );
}
