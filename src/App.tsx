import { useState, useEffect } from 'react';
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
import { TOYOTA_DIESEL_ENGINES, SERIES_CATEGORIES } from './data/toyotaDieselData';
import { ISUZU_DIESEL_ENGINES } from './data/isuzuDieselData';
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

const ISUZU_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All Isuzu (အားလုံး)', desc: 'Isuzu ဒီဇယ်အင်ဂျင်အားလုံး' },
  { id: 'J_SERIES', name: '4JJ1 / 4JK1 / 4JX1', desc: 'D-Max 3.0/2.5L & Bighorn (Trooper) 3.0L HEUI' },
  { id: 'RZ_SERIES', name: 'RZ4E (1.9 BluePower)', desc: '1.9L D-Max New Model' },
  { id: 'H_SERIES', name: 'Elf & Forward (အလတ်စား)', desc: '4HF1 (4.3L), 4HG1 (4.6L), 4HK1 (5.2L)' },
  { id: 'HEAVY_TRUCK', name: 'GIGA / Trailer (ကားကြီး/တွဲကား)', desc: '6HK1 (7.8L), 6UZ1 (9.8L), 6WG1 (15.7L), 10PE1 (V10)' },
  { id: 'B_SERIES', name: '4JB1 (2.8L Classic)', desc: 'Rodeo, Elf 2.8L Classic Diesel' },
];

type RegionType = 'ASIA' | 'EUROPE' | 'AMERICA';
type AsiaCountryType = 'JAPAN' | 'KOREA' | 'CHINA';
type EuropeCountryType = 'GERMANY' | 'SWEDEN' | 'UK';
type JapanBrandType = 'TOYOTA' | 'ISUZU' | 'NISSAN' | 'MITSUBISHI' | 'HINO';

export function App() {
  // Continent/Region: ASIA | EUROPE | AMERICA
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
  
  // In-App Zoom state (persisted) to guarantee zoom works on any Android APK / WebView
  const [zoomLevel, setZoomLevel] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('gs_app_zoom');
      return saved ? parseInt(saved, 10) : 100;
    } catch {
      return 100;
    }
  });

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => {
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

  // Multi-touch Pinch-to-Zoom gesture listener (Ensures 2-finger zoom works on Android WebViews, APKs & browsers)
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

  const getUnitInjectorGuideId = (eng: any): string => {
    if (!eng) return 'scania-124g';
    const str = `${eng.id} ${eng.code} ${eng.name} ${eng.nameMm || ''} ${eng.fuelSystemSpecs?.type || ''}`.toLowerCase();
    if (str.includes('scania') || str.includes('dc12') || str.includes('dsc12') || str.includes('124g')) return 'scania-124g';
    if (str.includes('volvo') || str.includes('d12') || str.includes('d9') || str.includes('d16') || str.includes('fh12')) return 'volvo-d12';
    if (str.includes('ge13') || str.includes('gh11') || str.includes('quon')) return 'ud-ge13';
    if (str.includes('cat') || str.includes('c15') || str.includes('3406') || str.includes('c12') || str.includes('c13')) return 'cat-c15';
    if (str.includes('detroit') || str.includes('s60') || str.includes('series 60')) return 'detroit-s60';
    if (str.includes('isx') || str.includes('qsx')) return 'cummins-isx';
    if (str.includes('nta855') || str.includes('kta19') || str.includes('kta38') || str.includes('pt system')) return 'cummins-pt';
    if (str.includes('vw') || str.includes('tdi') || str.includes('pumpe') || str.includes('1.9 tdi') || str.includes('2.0 tdi')) return 'vw-tdi-pd';
    return 'scania-124g';
  };

  const isUnitInjectorEngine = (eng: any): boolean => {
    if (!eng) return false;
    const str = `${eng.id} ${eng.code} ${eng.name} ${eng.nameMm || ''} ${eng.fuelSystemSpecs?.type || ''}`.toLowerCase();
    return (
      str.includes('pde') ||
      str.includes('eui') ||
      str.includes('meui') ||
      str.includes('pumpe') ||
      str.includes('unit injector') ||
      str.includes('pt system') ||
      str.includes('dc12') ||
      str.includes('dsc12') ||
      str.includes('124g') ||
      str.includes('d12') ||
      str.includes('ge13') ||
      str.includes('3406e') ||
      str.includes('c15') ||
      str.includes('series 60') ||
      str.includes('s60') ||
      str.includes('isx15') ||
      str.includes('qsx15') ||
      str.includes('nta855') ||
      str.includes('kta19') ||
      str.includes('kta38')
    );
  };

  // Resolve current active brand name and engines
  const currentBrandName = 
    selectedRegion === 'AMERICA' ? 'AMERICA (Cummins / ချက်ဗလက် Chevrolet / Ford / Detroit / CAT)' :
    selectedRegion === 'EUROPE'
      ? selectedEuropeCountry === 'SWEDEN' ? 'SWEDEN (ဆွီဒင်)'
        : selectedEuropeCountry === 'UK' ? 'UK (ဗြိတိန် Ford & Land Rover)'
        : 'GERMANY (ဂျာမနီ)'
      : selectedAsiaCountry === 'KOREA' ? 'KOREA (ကိုရီးယား)'
      : selectedAsiaCountry === 'CHINA' ? 'CHINA (တရုတ်)'
      : selectedJapanBrand;

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

  const currentCategories = 
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
      ? SERIES_CATEGORIES
      : selectedJapanBrand === 'ISUZU'
      ? ISUZU_SERIES_CATEGORIES
      : selectedJapanBrand === 'NISSAN'
      ? NISSAN_SERIES_CATEGORIES
      : selectedJapanBrand === 'MITSUBISHI'
      ? MITSUBISHI_SERIES_CATEGORIES
      : HINO_SERIES_CATEGORIES;

  // Continent Switcher Handler
  const handleRegionChange = (region: RegionType) => {
    setViewMode('engines');
    setSelectedRegion(region);
    setSelectedSeries('ALL');
    setSearchQuery('');
    if (region === 'AMERICA') {
      setActiveEngineId('usa-cummins-r28');
    } else if (region === 'EUROPE') {
      setSelectedEuropeCountry('GERMANY');
      setActiveEngineId('euro-om651');
    } else {
      setSelectedAsiaCountry('JAPAN');
      setSelectedJapanBrand('TOYOTA');
      setActiveEngineId('1kd-ftv');
    }
  };

  // Europe Country Switch Handler
  const handleEuropeCountryChange = (country: EuropeCountryType) => {
    setViewMode('engines');
    setSelectedEuropeCountry(country);
    setSelectedSeries('ALL');
    setSearchQuery('');
    if (country === 'SWEDEN') {
      setActiveEngineId('swe-scania-dc13');
    } else if (country === 'UK') {
      setActiveEngineId('uk-ford-puma-32');
    } else {
      setActiveEngineId('euro-om651');
    }
  };

  // Asia Country Switch Handler
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

  // Japan Brand Switch Handler
  const handleJapanBrandChange = (brand: JapanBrandType) => {
    setSelectedJapanBrand(brand);
    setSelectedSeries('ALL');
    setSearchQuery('');
    const engines = 
      brand === 'TOYOTA' ? TOYOTA_DIESEL_ENGINES :
      brand === 'ISUZU' ? ISUZU_DIESEL_ENGINES :
      brand === 'NISSAN' ? NISSAN_DIESEL_ENGINES :
      brand === 'MITSUBISHI' ? MITSUBISHI_DIESEL_ENGINES : HINO_DIESEL_ENGINES;
    if (engines && engines.length > 0) {
      setActiveEngineId(engines[0].id);
    }
  };

  // Filter engines
  const filteredEngines = currentBrandEngines.filter((eng: any) => {
    const matchesSeries = selectedSeries === 'ALL' || eng.series === selectedSeries;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      eng.code.toLowerCase().includes(q) || 
      eng.name.toLowerCase().includes(q) || 
      eng.nameMm.toLowerCase().includes(q) || 
      (eng.commonVehicles && eng.commonVehicles.some((v: string) => v.toLowerCase().includes(q))) ||
      (eng.commonVehiclesMm && eng.commonVehiclesMm.toLowerCase().includes(q));
    return matchesSeries && matchesSearch;
  });

  const displayedEngines = sortByCc
    ? [...filteredEngines].sort((a, b) => a.displacementCc - b.displacementCc)
    : filteredEngines;

  const currentEngine: any = currentBrandEngines.find((e: any) => e.id === activeEngineId) || currentBrandEngines[0] || TOYOTA_DIESEL_ENGINES[0];

  const getThemeColor = () => {
    if (selectedRegion === 'AMERICA') return { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500' };
    if (selectedRegion === 'EUROPE') {
      if (selectedEuropeCountry === 'SWEDEN') return { bg: 'bg-cyan-600', text: 'text-cyan-400', border: 'border-cyan-500' };
      if (selectedEuropeCountry === 'UK') return { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500' };
      return { bg: 'bg-emerald-600', text: 'text-emerald-400', border: 'border-emerald-500' };
    }
    if (selectedAsiaCountry === 'KOREA') return { bg: 'bg-indigo-600', text: 'text-indigo-400', border: 'border-indigo-500' };
    if (selectedAsiaCountry === 'CHINA') return { bg: 'bg-red-600', text: 'text-red-400', border: 'border-red-500' };
    if (selectedJapanBrand === 'TOYOTA') return { bg: 'bg-red-600', text: 'text-red-400', border: 'border-red-500' };
    if (selectedJapanBrand === 'ISUZU') return { bg: 'bg-blue-600', text: 'text-blue-400', border: 'border-blue-500' };
    if (selectedJapanBrand === 'NISSAN') return { bg: 'bg-rose-600', text: 'text-rose-400', border: 'border-rose-500' };
    if (selectedJapanBrand === 'MITSUBISHI') return { bg: 'bg-red-700', text: 'text-red-400', border: 'border-red-600' };
    return { bg: 'bg-amber-600', text: 'text-amber-400', border: 'border-amber-500' };
  };

  const theme = getThemeColor();

  const getActiveCategoryBrand = () => {
    if (selectedRegion === 'ASIA') {
      if (selectedAsiaCountry === 'JAPAN') return selectedJapanBrand;
      if (selectedAsiaCountry === 'KOREA') return 'HYUNDAI';
      if (selectedAsiaCountry === 'CHINA') return 'CUMMINS';
      return selectedJapanBrand;
    }
    if (selectedRegion === 'EUROPE') {
      if (selectedEuropeCountry === 'GERMANY') return 'MERCEDES';
      if (selectedEuropeCountry === 'SWEDEN') return 'SCANIA';
      if (selectedEuropeCountry === 'UK') return 'FORD';
      return 'MERCEDES';
    }
    if (selectedRegion === 'AMERICA') {
      return 'CUMMINS';
    }
    return selectedJapanBrand;
  };

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
              referrerPolicy="no-referrer" 
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

          {/* 3 CONTINENTS SELECTOR TABS (ASIA | EUROPE | AMERICA) */}
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

            {/* DEDICATED TOP BAR BUTTON: UNIT INJECTOR TAPPET */}
            <button
              onClick={() => {
                if (isUnitInjectorEngine(currentEngine)) {
                  setSelectedInjectorEngineId(getUnitInjectorGuideId(currentEngine));
                }
                setViewMode('injectorGuide');
              }}
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

            {/* IN-APP SCREEN ZOOM CONTROL (Guaranteed zoom on any Android APK / WebView) */}
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

        {/* Row 2: SUB-SELECTOR ROW & Row 3: Sub-Series Categories (Only in engines view) */}
        {viewMode === 'engines' && (
          <>
            {selectedRegion === 'ASIA' ? (
              <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800 overflow-x-auto flex items-center justify-between no-scrollbar bg-slate-950/90">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleAsiaCountryChange('JAPAN')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      selectedAsiaCountry === 'JAPAN' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇯🇵 JAPAN</span>
                  </button>

                  <button
                    onClick={() => handleAsiaCountryChange('KOREA')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      selectedAsiaCountry === 'KOREA' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇰🇷 KOREA</span>
                  </button>

                  <button
                    onClick={() => handleAsiaCountryChange('CHINA')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      selectedAsiaCountry === 'CHINA' ? 'bg-red-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇨🇳 CHINA</span>
                  </button>
                </div>

                {/* If JAPAN is active, show the 5 brands quick selector */}
                {selectedAsiaCountry === 'JAPAN' && (
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pl-2">
                    {(['TOYOTA', 'ISUZU', 'NISSAN', 'MITSUBISHI', 'HINO'] as JapanBrandType[]).map((brand) => (
                      <button
                        key={brand}
                        onClick={() => handleJapanBrandChange(brand)}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                          selectedJapanBrand === brand ? 'bg-slate-800 text-white border border-slate-600 shadow-sm' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <BrandLogo brand={brand} size={14} className="shrink-0" />
                        <span>{brand}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : selectedRegion === 'EUROPE' ? (
              /* EUROPE COUNTRIES (GERMANY | SWEDEN | UK) */
              <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800 overflow-x-auto flex items-center justify-between no-scrollbar bg-slate-950/90">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleEuropeCountryChange('GERMANY')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                      selectedEuropeCountry === 'GERMANY'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇩🇪 GERMANY</span>
                  </button>

                  <button
                    onClick={() => handleEuropeCountryChange('SWEDEN')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                      selectedEuropeCountry === 'SWEDEN'
                        ? 'bg-cyan-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇸🇪 SWEDEN</span>
                  </button>

                  <button
                    onClick={() => handleEuropeCountryChange('UK')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 whitespace-nowrap ${
                      selectedEuropeCountry === 'UK'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    <span>🇬🇧 UK (Ford / JLR)</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 font-medium hidden sm:block">
                  {selectedEuropeCountry === 'UK' ? 'Ford Ranger / Raptor & Range Rover' : selectedEuropeCountry === 'SWEDEN' ? 'Volvo (2.0L ~ 17.3L 780HP) & Scania (6.7L ~ 16.4L V8 770HP)' : 'MAN Trucks, Mercedes, BMW, Audi & VW TDI'}
                </div>
              </div>
            ) : (
              /* AMERICA (USA DIESEL GIANTS) */
              <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800 overflow-x-auto flex items-center gap-2 no-scrollbar bg-slate-950/90 text-xs">
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>အမေရိကန် ဒဏ္ဍာရီများ -</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">Cummins (2.8L ~ 15L)</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">Ford Power Stroke (6.7L & 7.3L)</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">GM Duramax (3.0L & 6.6L)</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">Detroit Diesel (DD15)</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">Caterpillar CAT C15</span>
              </div>
            )}

            {/* Row 3: Sub-Series Categories */}
            <div className="max-w-7xl mx-auto px-3 py-1.5 border-t border-slate-800/60 overflow-x-auto flex items-center gap-1.5 no-scrollbar bg-slate-900/60">
              {currentCategories.map((cat: any) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedSeries(cat.id);
                    const first = currentBrandEngines.find((e: any) => cat.id === 'ALL' || e.series === cat.id);
                    if (first) setActiveEngineId(first.id);
                  }}
                  className={`whitespace-nowrap px-2.5 py-0.5 rounded-md text-[11px] font-medium transition ${
                    selectedSeries === cat.id
                      ? `${theme.bg} text-white font-bold shadow-sm`
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </>
        )}
      </header>

      {/* MAIN CONTAINER */}
      {viewMode === 'injectorGuide' ? (
        <div className="max-w-7xl mx-auto px-3 py-4 w-full flex-1">
          <UnitInjectorGuideView 
            initialEngineId={selectedInjectorEngineId}
            onBackToEngines={() => setViewMode('engines')}
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-3 py-3 w-full flex-1 flex flex-col gap-4">
        
        {/* ENGINE SELECTOR BAR (Scrollable pills) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <BrandLogo brand={getActiveCategoryBrand()} size={18} className="text-amber-400 shrink-0" />
                <span>{currentBrandName} အင်ဂျင်များ ({displayedEngines.length})</span>
              </span>
              <button
                type="button"
                onClick={() => setSortByCc(!sortByCc)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border transition flex items-center gap-1 ${
                  sortByCc
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                }`}
                title="အမှတ်တံဆိပ် အတွဲလိုက် သို့မဟုတ် CC အသေးမှ အကြီး ပြောင်းလဲရန်"
              >
                <span>{sortByCc ? '📊 CC အသေး ➔ အကြီး ⬆' : '🏷️ အမှတ်တံဆိပ် အတွဲလိုက်'}</span>
              </button>
            </div>
            <div className="relative w-40 sm:w-56">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="အင်ဂျင်ကုဒ် ရှာရန်..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-2.5 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto flex items-center gap-2 pb-1 no-scrollbar">
            {displayedEngines.map((eng: any) => {
              const isActive = eng.id === currentEngine.id;
              return (
                <button
                  key={eng.id}
                  onClick={() => {
                    setActiveEngineId(eng.id);
                    if (activeTab === 'converter') setActiveTab('torques');
                    const el = document.getElementById('engine-details-section');
                    if (el && window.innerWidth < 1024) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`shrink-0 px-3 py-2 rounded-xl text-left border transition ${
                    isActive
                      ? `${theme.bg} text-white border-transparent shadow-md font-bold scale-[1.02]`
                      : 'bg-slate-950/70 hover:bg-slate-800 text-slate-300 border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-black">{eng.code}</span>
                    <span className={`text-[10px] font-bold font-mono px-1 py-0.2 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-amber-300'
                    }`}>
                      {eng.displacementCc.toLocaleString()}cc
                    </span>
                  </div>
                  <div className="text-[10px] line-clamp-1 opacity-90 max-w-[150px] font-medium">{eng.nameMm}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE ENGINE DETAILS CONTAINER */}
        <div id="engine-details-section" className="flex flex-col gap-4">
          
          {/* Active Engine Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded text-white ${theme.bg}`}>
                    {currentEngine.seriesTitle}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {currentEngine.cylinders} Cyl · {currentEngine.firingOrder}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
                  <div className="p-1.5 bg-slate-950 rounded-xl border border-slate-800 shadow-inner flex items-center justify-center shrink-0">
                    <BrandLogo engine={currentEngine} brand={currentEngine.code} size={24} className="text-white" />
                  </div>
                  <span>{currentEngine.code}</span>
                  <span className="text-xs font-normal text-slate-400">({currentEngine.displacementCc} cc)</span>
                </h2>
                <p className="text-xs text-slate-300 font-medium">{currentEngine.nameMm}</p>
              </div>

              {/* Quick Power/Torque */}
              <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-xl text-left sm:text-right">
                <span className="text-[10px] text-slate-400 block font-medium">စွမ်းအား (Power & Torque)</span>
                <span className={`text-xs font-bold block ${theme.text}`}>
                  {currentEngine.powerOutput}
                </span>
                <span className="text-xs font-bold text-amber-400 block">{currentEngine.torqueOutput}</span>
              </div>
            </div>

            {/* Applicable vehicles */}
            <div className="text-xs bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 text-slate-300 mb-3">
              <strong className="text-white">အသုံးပြုသောကားများ - </strong> {currentEngine.commonVehiclesMm}
            </div>

            {/* Unit Injector Alert Banner if engine has Unit Injectors */}
            {isUnitInjectorEngine(currentEngine) && (
              <div className="bg-gradient-to-r from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/50 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2.5 mb-3 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg border border-amber-500/30">
                    <Zap className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <span>⚡ Unit Injector (နော်ဇယ်တိုက်ပစ်) စနစ်သုံး အင်ဂျင်ဖြစ်ပါသည်</span>
                    </div>
                    <div className="text-[11px] text-slate-300">
                      ကမ်ရှပ်ဖြင့် နော်ဇယ်တိုက်ပစ်ဖိအား ၂,၀၀၀+ bar ထုတ်လုပ်ထားပြီး သီးသန့် တိုက်ပစ်ချိန်ညှိမှု (Rocker Tappet Adjustment) လိုအပ်သည်
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedInjectorEngineId(getUnitInjectorGuideId(currentEngine));
                    setViewMode('injectorGuide');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition hover:scale-105"
                >
                  <Zap className="w-3.5 h-3.5 fill-slate-950" />
                  <span>နော်ဇယ်တိုက်ပစ် ချိန်နည်း လမ်းညွှန် ကြည့်ရန် ➔</span>
                </button>
              </div>
            )}

            {/* Navigation Tabs Bar */}
            <div className="flex overflow-x-auto gap-1.5 pt-2 border-t border-slate-800/80 no-scrollbar">
              <button
                onClick={() => setActiveTab('torques')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  activeTab === 'torques'
                    ? `${theme.bg} text-white shadow-md`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>ကျပ်အား တော်ခ်များ (Torques)</span>
              </button>

              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  activeTab === 'specs'
                    ? `${theme.bg} text-white shadow-md`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>အဆို့ကွာဟချက် (Valves & Specs)</span>
              </button>

              <button
                onClick={() => setActiveTab('timing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  activeTab === 'timing'
                    ? `${theme.bg} text-white shadow-md`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Cog className="w-3.5 h-3.5" />
                <span>တိုက်မင် အမှတ်များ (Timing Guide)</span>
              </button>

              <button
                onClick={() => setActiveTab('fuel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
                  activeTab === 'fuel'
                    ? `${theme.bg} text-white shadow-md`
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Fuel className="w-3.5 h-3.5" />
                <span>ဆီဖိအား & အရည်များ (Fluids)</span>
              </button>
            </div>
          </div>

          {/* TAB 1: TORQUE SPECS & HEAD DIAGRAM */}
          {activeTab === 'torques' && (
            <div className="space-y-4">
              <HeadTighteningDiagram 
                boltsCount={currentEngine.headBoltsCount || 18} 
                engineCode={currentEngine.code} 
              />

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-1.5 rounded-lg bg-slate-800 ${theme.text}`}>
                    <Flame className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-sm">
                    Cylinder Head Bolt Tightening Guide ({currentEngine.code})
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentEngine.headTighteningSteps && currentEngine.headTighteningSteps.map((step: any) => (
                    <div key={step.step} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-[11px] font-bold uppercase tracking-wide ${theme.text}`}>
                            STEP {step.step}
                          </span>
                          {step.torque && (
                            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                              {step.torque}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed font-medium">
                          {step.descriptionMm}
                        </p>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-2 font-mono border-t border-slate-800/60 pt-1.5">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-slate-800 ${theme.text}`}>
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">Full Component Torque Table ({currentEngine.code})</h3>
                      <p className="text-[11px] text-slate-400">ကျပ်ရမည့် အစိတ်အပိုင်းများနှင့် တော်ခ်ပမာဏများ</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    N·m | kgf·cm | lbf·ft
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                      <tr>
                        <th className="py-2.5 px-3">အစိတ်အပိုင်း</th>
                        <th className={`py-2.5 px-3 font-bold ${theme.text}`}>N·m</th>
                        <th className="py-2.5 px-3 text-amber-400">kgf·cm</th>
                        <th className="py-2.5 px-3 text-cyan-400">lbf·ft</th>
                        <th className="py-2.5 px-3 text-slate-400">မှတ်ချက်</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-medium">
                      {currentEngine.tighteningTorques && currentEngine.tighteningTorques.map((t: any, idx: number) => (
                        <tr key={idx} className="hover:bg-slate-800/40 transition">
                          <td className="py-2 px-3">
                            <span className="text-white block font-semibold">{t.componentMm}</span>
                            <span className="text-[10px] text-slate-500 font-mono block">{t.component}</span>
                          </td>
                          <td className={`py-2 px-3 font-mono font-bold whitespace-nowrap ${theme.text}`}>
                            {t.nm}
                          </td>
                          <td className="py-2 px-3 font-mono text-amber-300 whitespace-nowrap">
                            {t.kgfCm}
                          </td>
                          <td className="py-2 px-3 font-mono text-cyan-300 whitespace-nowrap">
                            {t.lbfFt}
                          </td>
                          <td className="py-2 px-3 text-slate-400 text-[10px]">
                            {t.notesMm || t.notes || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GENERAL SPECS & VALVE CLEARANCES */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <ValveAdjustmentGuide engine={currentEngine} />

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Valve Clearance Specification (အဆို့ ကွာဟချက်)</h3>
                    <p className="text-[11px] text-slate-400">{currentEngine.code} အင်ဂျင်အေးချိန် အဆို့ကွာဟချက် စံနှုန်းများ</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider block mb-1">
                      INTAKE VALVE (အဝင်အဆို့ - အေးချိန်)
                    </span>
                    <span className="text-xl font-black text-white font-mono">
                      {currentEngine.valveClearance?.intakeColdMm}
                    </span>
                    {currentEngine.valveClearance?.intakeHotMm && (
                      <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                        ပူချိန်: {currentEngine.valveClearance.intakeHotMm}
                      </span>
                    )}
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider block mb-1">
                      EXHAUST VALVE (အထွက်အဆို့ - အေးချိန်)
                    </span>
                    <span className="text-xl font-black text-white font-mono">
                      {currentEngine.valveClearance?.exhaustColdMm}
                    </span>
                    {currentEngine.valveClearance?.exhaustHotMm && (
                      <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                        ပူချိန်: {currentEngine.valveClearance.exhaustHotMm}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <strong className="text-amber-400">ချိန်ညှိနည်း စနစ် - </strong>
                  {currentEngine.valveClearance?.methodMm}
                </div>
              </div>

              {/* General Engine Specs Grid */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
                <h3 className="font-bold text-white text-sm sm:text-base mb-3">အင်ဂျင် စက်ပိုင်းဆိုင်ရာ အချက်အလက်များ</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Displacement</span>
                    <span className="text-xs font-bold text-white font-mono">{currentEngine.displacementCc} cc</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Bore × Stroke</span>
                    <span className="text-xs font-bold text-white font-mono">{currentEngine.boreStrokeMm}</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Compression Ratio</span>
                    <span className="text-xs font-bold text-white font-mono">{currentEngine.compressionRatio}</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Firing Order</span>
                    <span className={`text-xs font-bold font-mono ${theme.text}`}>
                      {currentEngine.firingOrder}
                    </span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Valves / Cyl</span>
                    <span className="text-xs font-bold text-white font-mono">{currentEngine.valvesPerCyl} Valves</span>
                  </div>
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Timing Drive</span>
                    <span className="text-xs font-bold text-emerald-400">{currentEngine.timingType}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIMING GUIDE */}
          {activeTab === 'timing' && (
            <TimingGuideView engine={currentEngine} />
          )}

          {/* TAB 4: FUEL & FLUIDS */}
          {activeTab === 'fuel' && (
            <FuelAndFluidsView engine={currentEngine} />
          )}

          {/* TAB 5: TORQUE CONVERTER */}
          {activeTab === 'converter' && (
            <TorqueConverter />
          )}

        </div>
      </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/90 py-4 text-center text-xs text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5 px-3">
          <img src="/app-logo.jpg" alt="GreatStar Z.N.W" className="w-5 h-5 rounded-md object-cover ring-1 ring-amber-500/30" referrerPolicy="no-referrer" />
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
