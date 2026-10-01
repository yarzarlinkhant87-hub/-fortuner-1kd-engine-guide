/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Wrench,
  Gauge,
  Search,
  CheckCircle2,
  AlertTriangle,
  RotateCw,
  Flame,
  Droplet,
  Layers,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Bookmark,
  Printer,
  Info,
  Car,
  Smartphone
} from 'lucide-react';
import { FORTUNER_ENGINES, WORKSHOP_CHECKLIST_ITEMS, EngineData, TorqueSpec } from './data/fortunerData.ts';
import { HeadTighteningDiagram } from './components/HeadTighteningDiagram.tsx';
import { TorqueConverter } from './components/TorqueConverter.tsx';
import { TimingGearDiagram } from './components/TimingGearDiagram.tsx';
import { FuelInjectionPressure } from './components/FuelInjectionPressure.tsx';

export default function App() {
  const [selectedEngineId, setSelectedEngineId] = useState<string>('1kd-ftv');
  const [activeTab, setActiveTab] = useState<'torque' | 'valve' | 'timing' | 'fuel' | 'specs' | 'checklist'>('torque');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [checkedList, setCheckedList] = useState<Record<string, boolean>>({});
  const [expandedSpecId, setExpandedSpecId] = useState<string | null>('1kd-head-bolts');
  const [lang, setLang] = useState<'my' | 'en'>('my');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [showLogoModal, setShowLogoModal] = useState<boolean>(false);

  React.useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert(
        lang === 'my' 
          ? 'ဖုန်း Browser ရဲ့ ညာဘက်အပေါ်ထောင့်က အစက် ၃ စက် (⋮) ကို နှိပ်ပြီး "Install app" (သို့မဟုတ် "Add to Home screen") ကို ရွေးချယ်နိုင်ပါသည်ခင်ဗျာ။' 
          : 'Tap browser menu (⋮) and select "Install app" or "Add to Home screen".'
      );
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };


  // Currently selected engine
  const currentEngine: EngineData = useMemo(() => {
    return FORTUNER_ENGINES.find((e) => e.id === selectedEngineId) || FORTUNER_ENGINES[0];
  }, [selectedEngineId]);

  // Filtered torque specs based on search and category
  const filteredTorqueSpecs = useMemo(() => {
    return currentEngine.torqueSpecs.filter((spec) => {
      const matchesCategory = categoryFilter === 'all' || spec.category === categoryFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        spec.componentMy.toLowerCase().includes(q) ||
        spec.componentEn.toLowerCase().includes(q) ||
        (spec.cautionMy && spec.cautionMy.toLowerCase().includes(q)) ||
        spec.nm.toString().includes(q) ||
        spec.ftlb.toString().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [currentEngine, categoryFilter, searchQuery]);

  const toggleCheckItem = (id: string) => {
    setCheckedList((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header */}
      <header className="border-b border-neutral-800/80 bg-neutral-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/icon.svg" 
              alt="Toyota Fortuner Engine Spec Logo" 
              className="w-10 h-10 rounded-xl shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-500/40 object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setShowLogoModal(true)}
              title="Click to view App Logo"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-base sm:text-lg">
                  Fortuner Pro Spec Guide
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 hidden sm:inline">
                  TOYOTA 1KD-FTV
                </span>
              </div>
              <div className="text-[11px] text-neutral-400">
                1KD (3.0L) · 2KD (2.5L) · 1GD (2.8L) · 2GD (2.4L)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 shadow-md shadow-cyan-500/20 transition-all"
              title="Install as App"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>{lang === 'my' ? 'App သွင်းရန်' : 'Install App'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/60 transition-colors"
              title="Print Specs for Workshop"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet</span>
            </button>

            {/* Language Switch */}
            <div className="inline-flex rounded-lg bg-neutral-800 p-1 border border-neutral-700/60">
              <button
                type="button"
                onClick={() => setLang('my')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  lang === 'my'
                    ? 'bg-neutral-700 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                မြန်မာ
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-neutral-700 text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* Engine Selection Bar */}
        <section className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-cyan-400" />
            {lang === 'my' ? 'Toyota Fortuner အင်ဂျင်မော်ဒယ် ရွေးချယ်ပါ' : 'Select Toyota Fortuner Engine Model'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {FORTUNER_ENGINES.map((engine) => {
              const isSelected = engine.id === selectedEngineId;
              return (
                <button
                  key={engine.id}
                  type="button"
                  onClick={() => {
                    setSelectedEngineId(engine.id);
                    setExpandedSpecId(engine.torqueSpecs[0]?.id || null);
                  }}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-gradient-to-b from-neutral-900 to-neutral-900/90 border-cyan-500/80 ring-1 ring-cyan-500/40 shadow-lg shadow-cyan-950/40'
                      : 'bg-neutral-900/40 hover:bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-base font-bold ${isSelected ? 'text-cyan-400' : 'text-neutral-200'}`}>
                      {engine.code}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono">
                      {engine.displacement.split(' ')[0]}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-300 font-medium truncate mt-1">
                    {engine.name.replace('Toyota Fortuner ', '')}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    {engine.years}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Engine Summary Banner */}
        <section className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {currentEngine.name}
                </h1>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {currentEngine.generation}
                </span>
              </div>
              <p className="text-xs text-neutral-400 max-w-2xl leading-relaxed">
                {currentEngine.configuration} · {currentEngine.fuelType}
              </p>
            </div>

            {/* Quick Engine Stat Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Oil + Filter</span>
                <span className="font-semibold text-emerald-400 font-mono">{currentEngine.oilCapacityWithFilter}</span>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Coolant</span>
                <span className="font-semibold text-cyan-400 font-mono">{currentEngine.coolantCapacity}</span>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 px-3 py-2 rounded-xl">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Head Torque</span>
                <span className="font-semibold text-amber-400 font-mono">
                  {currentEngine.torqueSpecs[0]?.nm} N·m + 90° + 90°
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 border-b border-neutral-800/80 scrollbar-none">
          {[
            { id: 'torque', labelMy: 'ပေါင်ကြပ်အားများ (Torque)', labelEn: 'Torque Specs', icon: Gauge },
            { id: 'valve', labelMy: 'ဘားအကွာအဝေး (Valve Clearance)', labelEn: 'Valve Clearance', icon: SlidersHorizontal },
            { id: 'timing', labelMy: 'တိုင်မင်ဂီယာနှင့် အမှတ်များ (Timing & Gears)', labelEn: 'Timing & Gears', icon: RotateCw },
            { id: 'fuel', labelMy: 'အင်ဂျက်တာ/ပန့် ဖိအား (Fuel Injection)', labelEn: 'Fuel & Rail Pressure', icon: Droplet },
            { id: 'specs', labelMy: 'အထွေထွေ အင်ဂျင်အချက်အလက် (All Specs)', labelEn: 'Full Technical Specs', icon: Info },
            { id: 'checklist', labelMy: 'အလုပ်ရုံ စစ်ဆေးရန်စာရင်း (Checklist)', labelEn: 'Rebuild Checklist', icon: CheckCircle2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-neutral-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lang === 'my' ? tab.labelMy : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: TORQUE SPECIFICATIONS */}
        {activeTab === 'torque' && (
          <div className="space-y-6">
            {/* Quick Torque Calculator Component */}
            <TorqueConverter />

            {/* Search & Category Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    lang === 'my'
                      ? 'မူလီအမျိုးအစား ရှာရန် (ဥပမာ- Head, Rod, Pulley, Injector)...'
                      : 'Search component (e.g. head, rod, pulley, injector)...'
                  }
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-2 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'head', label: 'Cylinder Head' },
                  { id: 'bottom_end', label: 'Bottom End' },
                  { id: 'fuel', label: 'Fuel & Injector' },
                  { id: 'timing', label: 'Timing' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryFilter(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      categoryFilter === cat.id
                        ? 'bg-neutral-800 text-cyan-400 border border-cyan-500/30'
                        : 'text-neutral-400 hover:text-white bg-neutral-950/60 border border-neutral-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cylinder Head Tightening Diagram (shown when head category or viewing all) */}
            {(categoryFilter === 'all' || categoryFilter === 'head') && !searchQuery && (
              <HeadTighteningDiagram
                sequence={currentEngine.cylinderHeadTighteningSequence}
                engineCode={currentEngine.code}
              />
            )}

            {/* Torque Spec List */}
            <div className="space-y-3">
              {filteredTorqueSpecs.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 text-sm bg-neutral-900/30 rounded-xl border border-neutral-800">
                  {lang === 'my' ? 'ရှာဖွေမှုနှင့် ကိုက်ညီသော မူလီအချက်အလက် မရှိပါ။' : 'No matching torque specifications found.'}
                </div>
              ) : (
                filteredTorqueSpecs.map((spec: TorqueSpec) => {
                  const isExpanded = expandedSpecId === spec.id;
                  const isCritical = spec.criticalLevel === 'critical';

                  return (
                    <div
                      key={spec.id}
                      className={`border rounded-xl transition-all ${
                        isExpanded
                          ? 'bg-neutral-900/90 border-neutral-700 shadow-lg'
                          : 'bg-neutral-900/40 hover:bg-neutral-900/70 border-neutral-800'
                      }`}
                    >
                      {/* Spec Header Bar */}
                      <button
                        type="button"
                        onClick={() => setExpandedSpecId(isExpanded ? null : spec.id)}
                        className="w-full text-left p-4 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                              isCritical ? 'bg-red-400 ring-4 ring-red-400/20' : 'bg-cyan-400 ring-2 ring-cyan-400/20'
                            }`}
                          />
                          <div>
                            <div className="font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                              <span>{lang === 'my' ? spec.componentMy : spec.componentEn}</span>
                              {spec.boltSize && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700 hidden sm:inline">
                                  {spec.boltSize}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-neutral-400 mt-0.5">
                              {lang === 'my' ? spec.componentEn : spec.componentMy}
                            </div>
                          </div>
                        </div>

                        {/* Torque Value Badges */}
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="font-mono font-bold text-base sm:text-lg text-cyan-400">
                              {spec.nm} <span className="text-xs font-normal text-cyan-500">N·m</span>
                            </div>
                            <div className="text-[11px] font-mono text-neutral-400">
                              {spec.ftlb} ft-lb · {spec.kgfm} kgf-m
                            </div>
                          </div>
                          <div className="text-neutral-500">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>
                      </button>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <div className="px-4 pb-4 pt-2 border-t border-neutral-800/80 bg-neutral-950/40 rounded-b-xl space-y-3">
                          {/* Step-by-Step Instructions */}
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                              {lang === 'my' ? 'ကြပ်နည်း အဆင့်ဆင့် (Tightening Steps)' : 'Step-by-Step Tightening Process'}
                            </div>
                            <div className="space-y-1.5">
                              {(lang === 'my' ? spec.stepsMy : spec.stepsEn).map((step, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs text-neutral-300 flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60 font-mono"
                                >
                                  <span className="text-cyan-400 font-bold shrink-0">{idx + 1}.</span>
                                  <span className="leading-relaxed">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Caution Warning */}
                          {(spec.cautionMy || spec.cautionEn) && (
                            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-950/30 border border-amber-900/50 text-xs text-amber-200">
                              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                              <div className="leading-relaxed">
                                <span className="font-semibold text-amber-300">
                                  {lang === 'my' ? 'အထူးသတိပြုရန်: ' : 'Critical Note: '}
                                </span>
                                {lang === 'my' ? spec.cautionMy : spec.cautionEn}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 2: VALVE CLEARANCE */}
        {activeTab === 'valve' && (
          <div className="space-y-6">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <SlidersHorizontal className="w-5 h-5" />
                <h3 className="font-bold text-white text-base">
                  {lang === 'my' ? 'ဘားအကွာအဝေး တန်ဖိုးများ (Valve Clearance Specs)' : 'Valve Lash / Clearance Specifications'}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                {currentEngine.valveClearance.condition}
              </p>

              {/* Intake vs Exhaust Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Intake Valve */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                    ▲ INTAKE VALVE (အဝင်ဘား)
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                    {currentEngine.valveClearance.intakeMm.split(' ')[0]}
                    <span className="text-sm font-normal text-neutral-400 ml-1">
                      {currentEngine.valveClearance.intakeMm.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-neutral-400 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800">
                    <span className="text-cyan-300 font-medium">စံသတ်မှတ်ချက်:</span> 0.20 – 0.30 mm (အကောင်းဆုံး: 0.25 mm)
                  </div>
                </div>

                {/* Exhaust Valve */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="text-xs font-mono uppercase tracking-wider text-orange-400 mb-1">
                    ▼ EXHAUST VALVE (အထွက်ဘား)
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                    {currentEngine.valveClearance.exhaustMm.split(' ')[0]}
                    <span className="text-sm font-normal text-neutral-400 ml-1">
                      {currentEngine.valveClearance.exhaustMm.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  <div className="mt-3 text-xs text-neutral-400 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800">
                    <span className="text-orange-300 font-medium">စံသတ်မှတ်ချက်:</span> 0.35 – 0.45 mm (အကောင်းဆုံး: 0.40 mm)
                  </div>
                </div>
              </div>

              {/* Adjustment Method */}
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-cyan-400" />
                  {lang === 'my' ? 'ဘားချိန်ညှိနည်း စနစ် (Adjustment Method)' : 'Clearance Adjustment System'}
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'my' ? currentEngine.valveClearance.adjustmentMethodMy : currentEngine.valveClearance.adjustmentMethodEn}
                </p>
              </div>
            </div>

            {/* Workshop Feeler Gauge Advice */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-300 space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                {lang === 'my' ? 'မက္ကင်းနစ် လက်တွေ့တိုင်းတာနည်း အကြံပြုချက်:' : 'Workshop Feeler Gauge Best Practices:'}
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-400 leading-relaxed">
                <li>
                  {lang === 'my'
                    ? 'အင်ဂျင်ကို အနည်းဆုံး ၂ နာရီအထက် အေးအောင်ထားပြီးမှသာ Feeler gauge ဖြင့် တိုင်းတာပါ။'
                    : 'Allow engine to cool down completely (at least 2 hours) before measuring with feeler gauge.'}
                </li>
                <li>
                  {lang === 'my'
                    ? 'Feeler gauge ထည့်သွင်းချိန်တွင် ကပ်မနေဘဲ ချောမွေ့စွာ ရွေ့လျားနိုင်သော အနေအထား (Slight drag) ဖြစ်ရပါမည်။'
                    : 'Feeler gauge blade should feel a slight smooth drag without binding or bending.'}
                </li>
                <li>
                  {lang === 'my'
                    ? 'ဆလင်ဒါနံပါတ် ၁ TDC အမှတ်တွင် Intake / Exhaust သတ်မှတ်ဘားများကို တိုင်းပြီးနောက် Crankshaft ကို ၃၆၀ ဒီဂရီ (၁ ပတ်) ထပ်လှည့်၍ ကျန်ဘားများကို ဆက်လက်တိုင်းတာပါ။'
                    : 'Measure at Cylinder 1 TDC for initial valves, rotate crankshaft 360° to measure remaining valves.'}
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: TIMING GUIDE */}
        {activeTab === 'timing' && (
          <div className="space-y-6">
            {/* Interactive Internal Timing Gear Train Diagram with Torque Specs */}
            <TimingGearDiagram engineId={currentEngine.id} lang={lang} />

            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4 mb-4">
                <div>
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <RotateCw className="w-5 h-5 text-cyan-400" />
                    {currentEngine.timingInfo.systemType}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {lang === 'my' ? currentEngine.timingInfo.serviceIntervalMy : currentEngine.timingInfo.serviceIntervalEn}
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-neutral-800 text-cyan-300 border border-neutral-700 w-fit">
                  {currentEngine.id.includes('kd') ? 'Belt Interval: 150,000 KM' : 'Chain: Lifetime'}
                </span>
              </div>

              {/* Timing Alignment Steps */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  {lang === 'my' ? 'တိုင်မင်မှတ်များ တိုက်ဆိုင်ချိန်ညှိပုံ (Timing Alignment Steps)' : 'Step-by-Step Timing Mark Synchronization'}
                </div>
                <div className="space-y-2.5">
                  {(lang === 'my' ? currentEngine.timingInfo.marksGuideMy : currentEngine.timingInfo.marksGuideEn).map(
                    (step, idx) => (
                      <div
                        key={idx}
                        className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-3.5 flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <div className="text-xs text-neutral-200 leading-relaxed pt-0.5">
                          {step}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Important Caution Box */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-xs text-amber-200">
                <div className="font-bold text-amber-300 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  {lang === 'my' ? 'မဖြစ်မနေ လိုက်နာရမည့် အချက်:' : 'Mandatory Engine Precaution:'}
                </div>
                <p className="leading-relaxed">
                  {lang === 'my' ? currentEngine.timingInfo.diagramNotesMy : currentEngine.timingInfo.diagramNotesEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FUEL INJECTION & COMMON RAIL PRESSURE */}
        {activeTab === 'fuel' && (
          <div className="space-y-6">
            <FuelInjectionPressure engineId={currentEngine.id} lang={lang} />
          </div>
        )}

        {/* TAB 5: FULL TECHNICAL SPECS */}
        {activeTab === 'specs' && (
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
            <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-cyan-400" />
              {currentEngine.name} - Technical Data Sheet
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {[
                { labelMy: 'အင်ဂျင်ကုဒ် / Displacement', labelEn: 'Engine Code & Displacement', val: `${currentEngine.code} (${currentEngine.displacement})` },
                { labelMy: 'ထုတ်လုပ်သည့် ကာလ', labelEn: 'Production Years', val: currentEngine.years },
                { labelMy: 'အင်ဂျင်ဖွဲ့စည်းပုံ', labelEn: 'Configuration', val: currentEngine.configuration },
                { labelMy: 'လောင်စာဆီစနစ်', labelEn: 'Fuel Delivery', val: currentEngine.fuelType },
                { labelMy: 'အမြင့်ဆုံးမြင်းကောင်ရေ (Power)', labelEn: 'Max Power', val: currentEngine.power },
                { labelMy: 'အမြင့်ဆုံးရုန်းအား (Torque)', labelEn: 'Max Torque', val: currentEngine.torque },
                { labelMy: 'အင်ဂျင်ဝိုင် ပမာဏ (Oil + Filter)', labelEn: 'Engine Oil Capacity (with filter)', val: currentEngine.oilCapacityWithFilter },
                { labelMy: 'အင်ဂျင်ဝိုင် ပမာဏ (Filter မပါ)', labelEn: 'Engine Oil Capacity (without filter)', val: currentEngine.oilCapacityWithoutFilter },
                { labelMy: 'အကြံပြု အင်ဂျင်ဝိုင် အပြစ်အကျဲ', labelEn: 'Recommended Viscosity', val: currentEngine.recommendedOilViscosity },
                { labelMy: 'အင်ဂျင်ဝိုင် စံချိန်စံညွှန်း', labelEn: 'Oil Specification Standard', val: currentEngine.oilStandard },
                { labelMy: 'ရေတိုင်ကီ ရေပမာဏ (Coolant)', labelEn: 'Coolant Capacity', val: currentEngine.coolantCapacity },
                { labelMy: 'ဖိသိပ်ဆ (Compression Ratio)', labelEn: 'Compression Ratio', val: currentEngine.compressionRatio },
                { labelMy: 'ဆလင်ဒါ ဖိအား စံတန်ဖိုး', labelEn: 'Standard Compression Pressure', val: currentEngine.compressionStandard },
                { labelMy: 'အနိမ့်ဆုံး မကျသင့်သော ဖိအား', labelEn: 'Minimum Compression Limit', val: currentEngine.compressionMinimum }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-neutral-800/80 rounded-xl p-3 flex flex-col justify-between"
                >
                  <span className="text-neutral-400 font-medium">
                    {lang === 'my' ? item.labelMy : item.labelEn}
                  </span>
                  <span className="text-white font-mono font-semibold text-sm mt-1">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: WORKSHOP REBUILD CHECKLIST */}
        {activeTab === 'checklist' && (
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  {lang === 'my' ? 'အင်ဂျင် တပ်ဆင်စစ်ဆေးရန်စာရင်း (Engine Assembly Checklist)' : 'Engine Assembly Checklist'}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {lang === 'my' ? 'ဆလင်ဒါခေါင်း မကြပ်မီနှင့် အင်ဂျင်မနှိုးမီ မဖြစ်မနေ စစ်ဆေးရမည့် အချက်များ' : 'Mandatory pre-torque and pre-startup inspections'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCheckedList({})}
                className="text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded bg-neutral-800"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-3">
              {WORKSHOP_CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!checkedList[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleCheckItem(item.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-950/20 border-emerald-800/60 text-emerald-200'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:bg-neutral-900/80'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-400 text-neutral-950'
                          : 'border-neutral-600 bg-neutral-900'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      {lang === 'my' ? item.textMy : item.textEn}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 bg-neutral-900/40 py-6 text-xs text-neutral-500 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLogoModal(true)}
              className="text-cyan-400 hover:text-cyan-300 font-medium underline flex items-center gap-1.5"
            >
              <span>{lang === 'my' ? '🔍 App လိုဂိုတံဆိပ် ကြည့်ရန်' : '🔍 View App Logo & Icon'}</span>
            </button>
            <span>·</span>
            <p>© {new Date().getFullYear()} Toyota Fortuner Engine Workshop Reference Guide.</p>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span className="text-cyan-400 font-semibold">1KD-FTV (Default)</span>
            <span>·</span>
            <span>2KD-FTV</span>
            <span>·</span>
            <span>1GD-FTV</span>
            <span>·</span>
            <span>2GD-FTV</span>
          </div>
        </div>
      </footer>

      {/* App Logo & Identity Preview Modal */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">App လိုဂိုတံဆိပ် (App Icon & Identity)</span>
              </div>
              <button
                onClick={() => setShowLogoModal(false)}
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-6 flex flex-col items-center text-center">
              {/* Large Logo Display */}
              <div className="relative group">
                <img
                  src="/icon.svg"
                  alt="Toyota Fortuner Engine Spec App Icon"
                  className="w-36 h-36 rounded-3xl shadow-2xl shadow-cyan-500/30 ring-4 ring-cyan-500/40"
                />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">FORTUNER PRO SPEC GUIDE</h3>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">TOYOTA 1KD / 2KD / 1GD / 2GD</p>
              
              <div className="mt-4 p-3 bg-neutral-950/80 rounded-xl border border-neutral-800/80 text-left text-xs text-neutral-300 space-y-2 w-full">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>ဒီဇိုင်းပုံစံ:</strong> Engine Timing Gear (အင်ဂျင်ဂီယာသွား) နှင့် Torque Wrench (ပေါင်ဂွစပန်နာ) ကို ပေါင်းစပ်ထားသော Pro Workshop Icon။</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>အသုံးပြုထားသောနေရာ:</strong> ဖုန်း Home Screen ပေါ်တွင် App Icon အဖြစ်လည်းကောင်း၊ Browser Favicon နှင့် App Header တွင်လည်းကောင်း အသုံးပြုထားပါသည်။</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Android APK:</strong> APK ထုတ်ယူရာတွင်လည်း ဖုန်းမျက်နှာပြင်ပေါ်တွင် ဤတံဆိပ်ဖြင့် တိုက်ရိုက် ပေါ်လာမည်ဖြစ်ပါသည်။</span>
                </div>
              </div>

              <button
                onClick={() => setShowLogoModal(false)}
                className="mt-5 w-full py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 text-xs transition-all"
              >
                နားလည်ပါပြီ (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
