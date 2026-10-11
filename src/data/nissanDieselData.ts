import { MultiBrandEngineSpec } from './isuzuDieselData';

export const NISSAN_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All Nissan (အားလုံး)', desc: 'Nissan ဒီဇယ်အင်ဂျင်အားလုံး' },
  { id: 'NAVARA_YD', name: 'YD25 & YS23 (Navara/Urvan)', desc: 'Navara D40, NP300, Urvan NV350, Terra' },
  { id: 'PATROL_ZD_TD', name: 'ZD30 & TD42 (Patrol/D22)', desc: 'ZD30, TD42 (6-Cyl), QD32, TD27' },
  { id: 'UD_TRUCK_6CYL', name: 'UD Trucks 6-Cyl (FE6/GH11)', desc: 'UD Condor 6.9L, UD Quon 11L~13L တွဲကားများ' },
  { id: 'UD_HEAVY_V_TYPE', name: 'UD Trucks V8/V10/V12 (RG8/RH10/RE12)', desc: 'UD Big Thumb V8 (RG8), V10 (RH10), V12 (RE12/RD10)' },
];

export const NISSAN_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // 1. NISSAN YD25DDTi (2.5L Navara D40 / NV350 Urvan)
  {
    id: 'nissan-yd25',
    brand: 'NISSAN',
    code: 'YD25DDTi (2.5L Common Rail)',
    series: 'NAVARA_YD',
    seriesTitle: 'Nissan YD-Series (Navara D40 / Urvan NV350)',
    seriesTitleMm: 'Nissan YD-စီးရီး (Navara D40 / Urvan NV350)',
    name: '2.5L DOHC 16V Common Rail Turbo Intercooler',
    nameMm: '၂.၅ လီတာ DOHC ၁၆ ဗား ကွန်မန်ရေးလ် တာဘို (Navara / Urvan)',
    type: 'Inline-4 DOHC 16-Valve Variable Nozzle Turbocharger Intercooler',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား VN တာဘို ကွန်မန်ရေးလ် ဒီဇယ်',
    fuelSystem: 'Denso Common Rail HP3 System (1,800 bar)',
    fuelSystemMm: 'Denso ကွန်မန်ရေးလ် ဖိအားမြင့်စနစ် (HP3 ပန့်)',
    displacementCc: 2488,
    boreStrokeMm: '89.0 mm × 100.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1 (High Power: 15.0:1)',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '144 – 190 PS @ 3,600–4,000 RPM',
    torqueOutput: '356 – 450 N·m @ 2,000 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Double Duplex Chain ၂ ထပ်စနစ်)',
    commonVehicles: ['Nissan Navara D40 (2005-2015)', 'Nissan Urvan NV350 E26', 'Nissan Pathfinder R51'],
    commonVehiclesMm: 'Nissan Navara D40, Urvan NV350, Pathfinder',
    valveClearance: {
      intakeColdMm: '0.24 – 0.32 mm',
      exhaustColdMm: '0.26 – 0.34 mm',
      intakeHotMm: '0.28 – 0.36 mm',
      exhaustHotMm: '0.30 – 0.38 mm',
      methodMm: 'Shimless Tappet (ဖလားခွက် အထူရွေးချယ် လဲလှယ်သော စနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 29, kgfCm: 296, lbfFt: 21.4, notesMm: 'အလယ်မှစ၍ ၂၉ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+100° to 105°', kgfCm: '+100°', lbfFt: '+100°', notesMm: 'ထောင့် ၁၀၀° မှ ၁၀၅° လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 'Loosen All 0 N·m', kgfCm: '0', lbfFt: '0', notesMm: 'အလယ်မှစ၍ မူလီအားလုံးကို ပြန်လျှော့ပါ (Loose)' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: 39, kgfCm: 398, lbfFt: 28.8, notesMm: '၃၉ N·m ပြန်လည်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀° မှ ၉၅° ထပ်လှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 6)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၆)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀° မှ ၉၅° ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '34 + 90°', kgfCm: '347 + 90°', lbfFt: '25 + 90°' },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '15 + 90°', kgfCm: '153 + 90°', lbfFt: '11 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 373, kgfCm: 3804, lbfFt: 275, notesMm: '၃၇၃ N·m တိတိကျကျ ကျပ်ရန်' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: 108, kgfCm: 1100, lbfFt: 80 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 25, kgfCm: 255, lbfFt: 18.5 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 34, kgfCm: 347, lbfFt: 25 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 bolts to 29 N·m in sequence', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၂၉ N·m ကျပ်ပါ', torque: '29 N·m' },
      { step: 2, description: 'Turn each bolt 100° to 105° clockwise', descriptionMm: 'ထောင့် ၁၀၀° မှ ၁၀၅° လှည့်ကျပ်ပါ', torque: '+100°' },
      { step: 3, description: 'Loosen all bolts completely to 0 N·m in reverse sequence', descriptionMm: 'အပြင်မှ စတင်၍ မူလီအားလုံးကို အကုန်ပြန်လျှော့ပါ (0 N·m)', torque: 'Loosen (0 N·m)' },
      { step: 4, description: 'Re-torque all bolts to 39 N·m in sequence', descriptionMm: 'ခေါင်းဘルトများကို ၃၉ N·m ပြန်လည်စတင်ကျပ်ပါ', torque: '39 N·m' },
      { step: 5, description: 'Turn each bolt 90° to 95° clockwise', descriptionMm: 'ထောင့် ၉၀° မှ ၉၅° လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 6, description: 'Turn each bolt another 90° to 95° clockwise (Nissan 6-step method)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀° မှ ၉၅° ထပ်မံလှည့်ပါ (Nissan အထူး ၆ ဆင့်နည်း)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft sprocket mark with lower chain colored link.',
      crankshaftMm: 'ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို အောက်ဘက် ချိန်ကြိုးအရောင်ပါကွင်းနှင့် ချိန်ပါ။',
      camshaft: 'Align intake and exhaust camshaft dots with upper chain colored links.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အစက်များကို အပေါ်ဘက် ချိန်ကြိုးအရောင်ပါကွင်းများနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Vacuum pump/fuel pump idler sprocket alignment.',
      pumpMm: 'အလယ်အိုင်ဒလာ စပရော့ကတ် အမှတ်သား တိုက်ဆိုင်ပါ။',
      notesMm: 'YD25 တွင် Primary Chain (အောက်ခြမ်း) နှင့် Secondary Chain (အပေါ်ခြမ်း) ၂ ထပ်စနစ် ဖြစ်သဖြင့် Tensioner နှင့် ကြိုးအလျော့အတင်း အထူးသတိပြုပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '160 – 180 MPa (1,600 – 1,800 bar)',
      injectorResistance: 'Denso Solenoid / Common Rail',
      notesMm: 'Fuel Suction Control Valve (SCV) ပြဿနာကြောင့် စက်သေတတ်သဖြင့် SCV စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '7.6 L',
      oilWithoutFilter: '6.9 L',
      oilGrade: '5W-30 / 10W-40 (API CF-4 / ACEA B3/B4)',
      coolantCapacity: '10.0 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 2. NISSAN YS23DDTT (2.3L Twin-Turbo Navara NP300 / Terra)
  {
    id: 'nissan-ys23',
    brand: 'NISSAN',
    code: 'YS23DDTT (2.3L Twin-Turbo)',
    series: 'NAVARA_YD',
    seriesTitle: 'Nissan YD-Series (Navara D40 / Urvan NV350)',
    seriesTitleMm: 'Nissan YD-စီးရီး (Navara D40 / Urvan NV350)',
    name: '2.3L Twin-Turbo DOHC 16V Clean Diesel (NP300 / Terra)',
    nameMm: '၂.၃ လီတာ တွင်းတာဘို DOHC ၁၆ ဗား (Navara NP300 / Terra)',
    type: 'Inline-4 DOHC 16-Valve Twin-Turbo Clean Diesel Intercooler (Renault-Nissan M9T)',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တွင်းတာဘို ခေတ်သစ် Clean Diesel',
    fuelSystem: 'Bosch Common Rail Direct Injection (2,000 bar Piezo/Solenoid)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 2298,
    boreStrokeMm: '85.0 mm × 101.3 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.4:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '190 PS (140 kW) @ 3,750 RPM',
    torqueOutput: '450 N·m @ 1,500–2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Timing Chain) စနစ်',
    commonVehicles: ['Nissan Navara NP300 (D23) (2015-present)', 'Nissan Terra (2018-present)', 'Renault Alaskan'],
    commonVehiclesMm: 'Nissan Navara NP300, Nissan Terra, Renault Alaskan',
    valveClearance: {
      intakeColdMm: '0.15 – 0.25 mm (Hydraulic auto lash adjuster in most variants)',
      exhaustColdMm: '0.25 – 0.35 mm',
      methodMm: 'Hydraulic Roller Finger Follower (ဟိုက်ဒရောလစ် အလိုအလျောက် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+100°', kgfCm: '+100°', lbfFt: '+100°', notesMm: 'ထောင့် ၁၀၀ ဒီဂရီ လှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+100°', kgfCm: '+100°', lbfFt: '+100°', notesMm: 'နောက်ထပ် ထောင့် ၁၀၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '45 + 90°', kgfCm: '459 + 90°', lbfFt: '33 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 110°', kgfCm: '255 + 110°', lbfFt: '18.5 + 110°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '50 + 85°', kgfCm: '510 + 85°', lbfFt: '37 + 85°' },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 26, kgfCm: 265, lbfFt: 19.2 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 44, kgfCm: 449, lbfFt: 32.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all head bolts to 30 N·m in sequence', descriptionMm: 'ခေါင်းဘルトများကို ၃၀ N·m စတင်ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Turn each bolt 100° clockwise', descriptionMm: 'နာရီလက်တံအတိုင်း ထောင့် ၁၀၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+100°' },
      { step: 3, description: 'Turn each bolt another 100° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၁၀၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+100°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Crankshaft sprocket alignment notch with colored chain link.',
      crankshaftMm: 'ခရိုင်းရှပ် အမှတ်နှင့် ကြိုးရောင်ကွင်း ချိန်ပါ။',
      camshaft: 'Camshaft timing marks aligned with colored chain links.',
      camshaftMm: 'ကမ်ရှပ် အမှတ်များကို ချိန်ကြိုးအရောင်ကွင်းများနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel pump synchronization.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: 'Renault-Nissan မဟာမိတ်စနစ်သုံး အဆင့်မြင့် Twin-Turbo ဖြစ်၍ သန့်ရှင်းသော ဝပ်ရှော့ပတ်ဝန်းကျင် လိုအပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa (350 – 450 bar)',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'DPF Low-ash ဆီနှင့် အချိန်မှန် ဆီစစ် လဲလှယ်မှု အထူးလိုအပ်သည်။'
    },
    fluids: {
      oilWithFilter: '6.7 L',
      oilWithoutFilter: '6.0 L',
      oilGrade: '5W-30 (ACEA C4 / C3 Low SAPS DPF Oil)',
      coolantCapacity: '9.2 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 3. NISSAN ZD30DDTi (3.0L Patrol GU / Caravan E25)
  {
    id: 'nissan-zd30',
    brand: 'NISSAN',
    code: 'ZD30DDTi (3.0L Turbo)',
    series: 'PATROL_ZD_TD',
    seriesTitle: 'Nissan Patrol & Classic Diesels (ZD30 / TD42 / QD32)',
    seriesTitleMm: 'Nissan Patrol & မော်ဒယ်ဟောင်း ဒီဇယ်များ (ZD30 / TD42 / QD32)',
    name: '3.0L DOHC 16V Turbo Direct Injection (Patrol / Caravan)',
    nameMm: '၃.၀ လီတာ DOHC ၁၆ ဗား တာဘို (Patrol GU / Caravan E25)',
    type: 'Inline-4 DOHC 16-Valve Direct Injection Turbocharged Intercooler',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား Direct Injection တာဘိုဒီဇယ်',
    fuelSystem: 'Bosch VP44 Electronic Radial Plunger Distributor Pump',
    fuelSystemMm: 'Bosch VP44 လျှပ်စစ်ထိန်းချုပ် ပန့်လိုင်းစနစ်',
    displacementCc: 2953,
    boreStrokeMm: '96.0 mm × 102.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '17.9:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '130 – 170 PS @ 3,600 RPM',
    torqueOutput: '354 N·m @ 1,800 RPM',
    timingType: 'Chain + Gear',
    timingTypeMm: 'တိုက်မင်ဂီယာ (အောက်ခြမ်း) + တိုက်မင်ကြိုး Chain (အပေါ်ခြမ်း)',
    commonVehicles: ['Nissan Patrol GU (Y61) 3.0 Di', 'Nissan Caravan / Urvan E25 3.0', 'Nissan Terrano II', 'Nissan Navara D22 3.0'],
    commonVehiclesMm: 'Nissan Patrol GU (Y61), Caravan E25, Terrano II, D22 3.0',
    valveClearance: {
      intakeColdMm: '0.35 – 0.45 mm',
      exhaustColdMm: '0.35 – 0.45 mm',
      methodMm: 'Shim စနစ် (ချိန်ညှိဖလားပြား လဲလှယ်ခြင်း - အေးချိန် In & Ex နှစ်ခုစလုံး 0.35~0.45 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 100, kgfCm: 1020, lbfFt: 74, notesMm: 'အလယ်မှစ၍ ၁၀၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 'Loosen All 0 N·m', kgfCm: '0', lbfFt: '0', notesMm: 'အကုန်ပြန်လျှော့ပါ (0 N·m)' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: '၄၀ N·m ပြန်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀° လှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀° ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '29 + 45°', kgfCm: '296 + 45°', lbfFt: '21.4 + 45°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 392, kgfCm: 4000, lbfFt: 289, notesMm: '၃၉၂ N·m တိတိကျကျ ကျပ်ရန်' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 54, kgfCm: 550, lbfFt: 40 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 bolts to 100 N·m in sequence', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၁၀၀ N·m ကျပ်ပါ', torque: '100 N·m' },
      { step: 2, description: 'Loosen all bolts completely to 0 N·m', descriptionMm: 'မူလီအားလုံးကို အကုန်ပြန်လျှော့ပါ (0 N·m)', torque: '0 N·m' },
      { step: 3, description: 'Re-torque all bolts to 40 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၄၀ N·m ပြန်လည်ကျပ်ပါ', torque: '40 N·m' },
      { step: 4, description: 'Turn each bolt 90° to 95° clockwise', descriptionMm: 'ထောင့် ၉၀° လှည့်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° to 95° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀° ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear with idle gear.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် ချိန်ပါ။',
      camshaft: 'Camshaft timing chain links matching sprocket dots.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အမှတ်များကို ချိန်ကြိုးရောင်ကွင်းများနှင့် ချိန်ပါ။',
      pump: 'VP44 pump gear alignment.',
      pumpMm: 'VP44 ဆီပန့်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      notesMm: 'ZD30 တွင် အပူတက်၍ ခေါင်းကွဲအက်ခြင်း မဖြစ်စေရန် ရေတိုင်ကီနှင့် တာဘို Booster ဖိအားကို အထူးဂရုစိုက်ရပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening Pressure: 195 – 205 bar (20 MPa)',
      pressureMax: 'VP44 Radial Plunger (Up to 1,000+ bar internal)',
      notesMm: 'VP44 စနစ်သည် လျှပ်စစ် Control Module ပါရှိသဖြင့် ဆီပူလွန်ကဲခြင်း ရှောင်ရှားပါ။'
    },
    fluids: {
      oilWithFilter: '8.2 L',
      oilWithoutFilter: '7.4 L',
      oilGrade: '15W-40 / 10W-40 (API CH-4 / CI-4)',
      coolantCapacity: '11.5 L',
      fuelTankCapacity: '95 L (Patrol)'
    }
  },

  // 4. NISSAN TD42 (4.2L Inline-6 Patrol GQ / GU - ဒဏ္ဍာရီလာ ၆ လုံးထိုး)
  {
    id: 'nissan-td42',
    brand: 'NISSAN',
    code: 'TD42 / TD42-T (4.2L 6-Cyl)',
    series: 'PATROL_ZD_TD',
    seriesTitle: 'Nissan Patrol & Classic Diesels (ZD30 / TD42 / QD32)',
    seriesTitleMm: 'Nissan Patrol & မော်ဒယ်ဟောင်း ဒီဇယ်များ (ZD30 / TD42 / QD32)',
    name: '4.2L Inline-6 OHV 12V Diesel (Nissan Patrol GQ/GU)',
    nameMm: '၄.၂ လီတာ ၆ လုံးထိုး သာမန်/တာဘို (Nissan Patrol GQ/GU)',
    type: 'Inline-6 OHV 12-Valve Naturally Aspirated / Turbocharged Diesel',
    typeMm: '၆ လုံးထိုး OHV ၁၂ ဗား ဒဏ္ဍာရီလာ အကြမ်းဆုံး ဒီဇယ် (Patrol)',
    fuelSystem: 'Bosch / Diesel Kiki VE Distributor Type Mechanical Injection',
    fuelSystemMm: 'Bosch VE မက္ကင်းနစ် ပန့်လိုင်းစနစ်',
    displacementCc: 4169,
    boreStrokeMm: '96.0 mm × 96.0 mm',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '22.7:1 (Turbo: 20.0:1)',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '115 – 160 PS @ 4,000 RPM',
    torqueOutput: '264 – 330 N·m @ 2,000 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive - ခါးပတ်/ချိန် မပါ)',
    commonVehicles: ['Nissan Patrol GQ (Y60)', 'Nissan Patrol GU (Y61) TD42', 'Nissan Civilian Bus'],
    commonVehiclesMm: 'Nissan Patrol GQ/GU 4.2L, Civilian Bus ခရီးသည်တင် မီနီဘတ်စ်',
    valveClearance: {
      intakeColdMm: '0.35 mm',
      exhaustColdMm: '0.35 mm',
      intakeHotMm: '0.38 mm',
      exhaustHotMm: '0.38 mm',
      methodMm: 'Screw & Locknut (ဝက်အူနှင့် လော့နတ် - အေးချိန် In & Ex နှစ်ခုစလုံး 0.35 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 39, kgfCm: 400, lbfFt: 29 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 78, kgfCm: 800, lbfFt: 58 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90° to 100°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: 78, kgfCm: 800, lbfFt: 58 },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 441, kgfCm: 4500, lbfFt: 325, notesMm: '၄၄၁ N·m အလွန်မြင့်သော တော်ခ်' },
      { component: 'Rocker Arm Shaft Bolts', componentMm: 'ရော့ကာရှပ် ဘルトများ', nm: 25, kgfCm: 255, lbfFt: 18.5 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 54, kgfCm: 550, lbfFt: 40 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 26 head bolts to 39 N·m from center outward', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၃၉ N·m ကျပ်ပါ', torque: '39 N·m' },
      { step: 2, description: 'Torque all bolts to 78 N·m in sequence', descriptionMm: 'ဒုတိယအဆင့် ၇၈ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '78 N·m' },
      { step: 3, description: 'Turn each bolt 90° to 100° clockwise', descriptionMm: 'ထောင့် ၉၀° မှ ၁၀၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°~100°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Align camshaft gear mark with idler gear mark.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Injection pump gear timing mark aligned.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      notesMm: 'Toyota 1HZ ကဲ့သို့ ဒဏ္ဍာရီလာ အကြမ်းခံဆုံး ၆ လုံးထိုး အင်ဂျင်ဖြစ်ပါသည်။ Firing Order (1-5-3-6-2-4) အတိုင်း ဘားချိန်ပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 108 – 118 bar',
      pressureMax: 'Mechanical Pump',
      notesMm: 'ဒီဇယ်အညံ့ဆုံးဆီကိုပင် ခံနိုင်ရည်ရှိသော စနစ်ဖြစ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '9.2 L',
      oilWithoutFilter: '8.3 L',
      oilGrade: '15W-40 / 20W-50 (API CF-4 / CH-4)',
      coolantCapacity: '13.0 L',
      fuelTankCapacity: '95 L + 30 L (125 L)'
    }
  },

  // 5. NISSAN QD32 / TD27 (3.2L / 2.7L D22 Pickup / Mistral)
  {
    id: 'nissan-qd32',
    brand: 'NISSAN',
    code: 'QD32 / TD27 (3.2L / 2.7L)',
    series: 'PATROL_ZD_TD',
    seriesTitle: 'Nissan Patrol & Classic Diesels (ZD30 / TD42 / QD32)',
    seriesTitleMm: 'Nissan Patrol & မော်ဒယ်ဟောင်း ဒီဇယ်များ (ZD30 / TD42 / QD32)',
    name: '3.2L (QD32) / 2.7L (TD27) OHV Diesel',
    nameMm: '၃.၂ လီတာ (QD32) / ၂.၇ လီတာ (TD27) D22 ပစ်ကပ်သုံး',
    type: 'Inline-4 OHV 8-Valve Naturally Aspirated Diesel',
    typeMm: '၄ လုံးထိုး OHV ၈ ဗား သာမန်ဒီဇယ် (မြန်မာပြည် အပေါဆုံး)',
    fuelSystem: 'Mechanical VE Distributor Injection Pump',
    fuelSystemMm: 'Bosch VE မက္ကင်းနစ် ပန့်လိုင်းစနစ်',
    displacementCc: 3153,
    boreStrokeMm: '99.2 mm × 102.0 mm (QD32) / 96.0 mm × 92.0 mm (TD27)',
    cylinders: 4,
    valvesPerCyl: 2,
    compressionRatio: '22.0:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '100 PS (QD32) / 85 PS (TD27) @ 3,600 RPM',
    torqueOutput: '216 N·m (QD32) / 180 N·m (TD27) @ 2,000 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Nissan D22 Frontier / Pickup', 'Nissan Terrano / Mistral', 'Nissan Caravan E24', 'D21 Big-M'],
    commonVehiclesMm: 'Nissan D22, D21 Big-M, Mistral, Caravan E24',
    valveClearance: {
      intakeColdMm: '0.35 mm',
      exhaustColdMm: '0.35 mm',
      intakeHotMm: '0.38 mm',
      exhaustHotMm: '0.38 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.35 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 39, kgfCm: 400, lbfFt: 29 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 78, kgfCm: 800, lbfFt: 58 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90° to 100°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: 78, kgfCm: 800, lbfFt: 58 },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 294, kgfCm: 3000, lbfFt: 217 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 54, kgfCm: 550, lbfFt: 40 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 bolts to 39 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၃၉ N·m စတင်ကျပ်ပါ', torque: '39 N·m' },
      { step: 2, description: 'Torque to 78 N·m', descriptionMm: '၇၈ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '78 N·m' },
      { step: 3, description: 'Turn each bolt 90° to 100° clockwise', descriptionMm: 'ထောင့် ၉၀° မှ ၁၀၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°~100°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Align camshaft gear mark with idler gear mark.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Align pump gear mark.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      notesMm: 'မြန်မာပြည်တွင် အကြမ်းဆုံးအဖြစ် လူသုံးများပြီး ဂီယာအပြည့်စနစ်ဖြစ်၍ တိုက်မင်ခါးပတ် ပြတ်ခြင်းမရှိပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 108 – 118 bar',
      pressureMax: 'Mechanical Pump',
      notesMm: 'နော်ဇယ် ၁၁၅ bar ဝန်းကျင် ပန်းထွက်မှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '6.0 L',
      oilWithoutFilter: '5.2 L',
      oilGrade: '15W-40 / 20W-50 (API CF-4)',
      coolantCapacity: '8.8 L',
      fuelTankCapacity: '60 L'
    }
  },

  // 6. UD TRUCKS FE6 / FE6T (6.9L 6-Cyl UD Condor ၆ ဘီး/၁၀ ဘီး)
  {
    id: 'nissan-fe6',
    brand: 'NISSAN',
    code: 'FE6 / FE6T (6.9L 6-Cyl)',
    series: 'UD_TRUCK_6CYL',
    seriesTitle: 'Nissan UD Trucks 6-Cylinder (FE6 / MD92 / GH11 / GE13)',
    seriesTitleMm: 'Nissan UD ထရပ်ကား ၆ လုံးထိုး (FE6 / MD92 / GH11 / GE13)',
    name: '6.9L Inline-6 OHC Diesel / Turbo (UD Condor)',
    nameMm: '၆.၉ လီတာ ၆ လုံးထိုး သာမန်/တာဘို (UD Condor ၆ ဘီး/၁၀ ဘီး)',
    type: 'Inline-6 OHC 12-Valve / 24-Valve Diesel Turbocharged',
    typeMm: '၆ လုံးထိုး OHC ကားကြီးသုံး အကြမ်းစား ဒီဇယ် (UD Condor)',
    fuelSystem: 'In-line Multi-plunger Mechanical Injection Pump / Common Rail (Later)',
    fuelSystemMm: 'မက္ကင်းနစ် ပန့်လိုင်းကြီး (နောက်ပိုင်း Common Rail)',
    displacementCc: 6925,
    boreStrokeMm: '110.0 mm × 122.0 mm',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '18.0:1 (Turbo: 16.5:1)',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '160 – 260 PS @ 2,800 RPM',
    torqueOutput: '430 – 686 N·m @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['UD Condor 6-Wheeler & 10-Wheeler', 'Nissan Diesel PK / MK Series', 'Nissan Diesel Bus'],
    commonVehiclesMm: 'UD Condor ၆ ဘီးကား၊ ၁၀ ဘီးကား၊ Nissan Diesel ဘတ်စ်ကားများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake & Exhaust နှစ်ခုစလုံး 0.40 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 98, kgfCm: 1000, lbfFt: 72 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 186, kgfCm: 1900, lbfFt: 137 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '49 + 60°', kgfCm: '500 + 60°', lbfFt: '36 + 60°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 539, kgfCm: 5500, lbfFt: 398, notesMm: '၅၃၉ N·m အလွန်မြင့်သော တော်ခ်' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 78, kgfCm: 795, lbfFt: 57.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 26 head bolts to 98 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၉၈ N·m ကျပ်ပါ', torque: '98 N·m' },
      { step: 2, description: 'Torque to 167 N·m', descriptionMm: '၁၆၇ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '167 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Camshaft gear alignment with idler gear.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 6-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၆ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'UD ထရပ်ကားလောကတွင် အပေါဆုံး အင်ဂျင်ဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-5-3-6-2-4) အတိုင်း ဘားချိန်ပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ဖိအား ပုံမှန် စစ်ဆေးပေးပါ။'
    },
    fluids: {
      oilWithFilter: '17.5 L',
      oilWithoutFilter: '15.5 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '25.0 L',
      fuelTankCapacity: '200 L'
    }
  },

  // 7. UD TRUCKS GE13 / GH11 (13.0L / 10.8L UD Quon ကွန်တိန်နာ တွဲကားကြီးများ)
  {
    id: 'nissan-ge13',
    brand: 'NISSAN',
    code: 'GE13 / GH11 (13.0L / 10.8L UD Quon)',
    series: 'UD_TRUCK_6CYL',
    seriesTitle: 'Nissan UD Trucks 6-Cylinder (FE6 / MD92 / GH11 / GE13)',
    seriesTitleMm: 'Nissan UD ထရပ်ကား ၆ လုံးထိုး (FE6 / MD92 / GH11 / GE13)',
    name: '13.0L (GE13) / 10.8L (GH11) Turbo Common Rail (UD Quon)',
    nameMm: '၁၃.၀ လီတာ (GE13) / ၁၀.၈ လီတာ (GH11) UD Quon တွဲကားကြီး',
    type: 'Inline-6 OHC 24-Valve Heavy Duty Turbocharged Intercooler Common Rail',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ကွန်တိန်နာဆွဲခေါင်း ကားကြီးအင်ဂျင် (UD Quon)',
    fuelSystem: 'Electronic Unit Injector (EUI) / High Pressure Common Rail (Volvo-UD)',
    fuelSystemMm: 'EUI ယူနစ်အင်ဂျက်တာ / ဖိအားမြင့် Common Rail',
    displacementCc: 13074,
    boreStrokeMm: '136.0 mm × 150.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '380 – 440 PS @ 1,800 RPM',
    torqueOutput: '1,814 – 2,200 N·m @ 1,200 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Gear Train နောက်ဂီယာစနစ်)',
    commonVehicles: ['UD Quon GK / GW Prime Mover Trailer (တွဲကားကြီးများ)', 'UD Quon 12-Wheeler Dump Truck'],
    commonVehiclesMm: 'UD Quon ကွန်တိန်နာ တွဲကားဆွဲခေါင်းကြီးများ၊ ၁၂ ဘီးကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Jake Brake ညှိနည်းပါရှိ)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 100, kgfCm: 1020, lbfFt: 74 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 200, kgfCm: 2040, lbfFt: 147 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90° to 120°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '150 + 90°', kgfCm: '1530 + 90°', lbfFt: '110 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '60 + 90°', kgfCm: '612 + 90°', lbfFt: '44 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 686, kgfCm: 7000, lbfFt: 506 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque heavy head bolts to 100 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၁၀၀ N·m စတင်ကျပ်ပါ', torque: '100 N·m' },
      { step: 2, description: 'Torque to 200 N·m', descriptionMm: '၂၀၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '200 N·m' },
      { step: 3, description: 'Turn each bolt 90° to 120° clockwise', descriptionMm: 'ထောင့် ၉၀° မှ ၁၂၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°~120°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel timing marks at TDC.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အမှတ်ကို TDC အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Rear gear train camshaft alignment.',
      camshaftMm: 'အင်ဂျင်နောက်ဘက်ရှိ ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Electronic Unit Injection synchronization.',
      pumpMm: 'EUI လျှပ်စစ်နော်ဇယ် အချိန်အဆ ချိန်ညှိပါ။',
      notesMm: 'Volvo-UD နည်းပညာသုံး ကွန်တိန်နာဆွဲခေါင်း အင်ဂျင်ကြီးဖြစ်ပြီး Jake Brake (အိတ်ဇောဘရိတ်) အကွာအဝေးပါ သေချာညှိရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'အလွန်မြင့်မားသော ဆီဖိအားသုံး ကွန်တိန်နာဆွဲခေါင်း စနစ်ဖြစ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '38.0 L',
      oilWithoutFilter: '34.0 L',
      oilGrade: '15W-40 (Heavy Duty Turbo Engine Oil)',
      coolantCapacity: '42.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 8. UD TRUCKS RG8 / RH8 / RF8 (V8 Diesel 18.0L Big Thumb ၁၀ ဘီး)
  {
    id: 'nissan-rg8',
    brand: 'NISSAN',
    code: 'RG8 / RH8 / RF8 (V8 Heavy)',
    series: 'UD_HEAVY_V_TYPE',
    seriesTitle: 'Nissan UD Trucks V8 / V10 / V12 (RG8 / RH10 / RE12)',
    seriesTitleMm: 'Nissan UD ထရပ်ကား V8 / V10 / V12 ကားကြီးများ (RG8 / RH10 / RE12)',
    name: '18.0L V8 Naturally Aspirated Diesel (UD Big Thumb V8)',
    nameMm: '၁၈.၀ လီတာ V8 ဆလင်ဒါ ၈ လုံးထိုး (UD Big Thumb ၁၀ ဘီး V8)',
    type: 'V8 90-degree Heavy Duty Commercial Diesel Engine',
    typeMm: 'V8 ၉၀ ဒီဂရီ ဆလင်ဒါ ၈ လုံးထိုး ကားကြီးသုံး အကြမ်းစား ဒီဇယ်',
    fuelSystem: 'Mechanical In-line Multi-plunger Injection Pump (Zexel)',
    fuelSystemMm: 'Zexel ၈ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 17990,
    boreStrokeMm: '135.0 mm × 157.0 mm',
    cylinders: 8,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 5 - 7 - 2 - 6 - 3 - 4 - 8',
    powerOutput: '350 – 370 PS @ 2,200 RPM',
    torqueOutput: '1,245 N·m @ 1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Nissan Diesel Big Thumb CW / CD V8 10-Wheeler', 'Nissan Diesel Resona V8'],
    commonVehiclesMm: 'UD Big Thumb ၁၀ ဘီး V8၊ အကြီးစား ကုန်တင်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm - Bank 1/Bank 2 ချိန်နည်း)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 147, kgfCm: 1500, lbfFt: 108 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 245, kgfCm: 2500, lbfFt: 181 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 294, kgfCm: 3000, lbfFt: 217 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '98 + 45°', kgfCm: '1000 + 45°', lbfFt: '72 + 45°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 785, kgfCm: 8000, lbfFt: 579 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual cylinder heads to 147 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၁၄၇ N·m စတင်ကျပ်ပါ', torque: '147 N·m' },
      { step: 2, description: 'Torque to 245 N·m', descriptionMm: '၂၄၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '245 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 16,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'အလယ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 8-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၈ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး ဖြစ်၍ မီးပေါက်စဉ် (1-5-7-2-6-3-4-8) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'Zexel ပန့်လိုင်းကြီး စနစ်ဖြစ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '36.0 L',
      oilWithoutFilter: '32.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '48.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 9. UD TRUCKS RH10 / RD10 (V10 Diesel 21.0L UD Big Thumb ၁၀ လုံးထိုး)
  {
    id: 'nissan-rh10',
    brand: 'NISSAN',
    code: 'RH10 / RD10 (V10 Heavy)',
    series: 'UD_HEAVY_V_TYPE',
    seriesTitle: 'Nissan UD Trucks V8 / V10 / V12 (RG8 / RH10 / RE12)',
    seriesTitleMm: 'Nissan UD ထရပ်ကား V8 / V10 / V12 ကားကြီးများ (RG8 / RH10 / RE12)',
    name: '21.0L V10 Naturally Aspirated Diesel (UD Big Thumb V10)',
    nameMm: '၂၁.၀ လီတာ V10 ဆလင်ဒါ ၁၀ လုံးထိုး (UD Big Thumb ၁၀ ဘီး V10)',
    type: 'V10 Naturally Aspirated Heavy Commercial Diesel Engine',
    typeMm: 'V10 ဆလင်ဒါ ၁၀ လုံးထိုး ဒဏ္ဍာရီလာ အကြမ်းစား ကားကြီးအင်ဂျင်',
    fuelSystem: 'Mechanical In-line 10-Plunger Injection Pump (Zexel)',
    fuelSystemMm: 'Zexel ၁၀ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 21205,
    boreStrokeMm: '135.0 mm × 157.0 mm',
    cylinders: 10,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 6 - 5 - 10 - 2 - 7 - 3 - 8 - 4 - 9',
    powerOutput: '420 – 450 PS @ 2,200 RPM',
    torqueOutput: '1,520 N·m @ 1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Nissan Diesel Big Thumb CW / CK V10', 'Nissan Diesel Heavy Bus'],
    commonVehiclesMm: 'UD Big Thumb ၁၀ ဘီး V10၊ အကြီးစား ဆောက်လုပ်ရေး မြေသယ်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 147, kgfCm: 1500, lbfFt: 108 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 245, kgfCm: 2500, lbfFt: 181 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 294, kgfCm: 3000, lbfFt: 217 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '98 + 45°', kgfCm: '1000 + 45°', lbfFt: '72 + 45°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 785, kgfCm: 8000, lbfFt: 579 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual heads to 147 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၁၄၇ N·m စတင်ကျပ်ပါ', torque: '147 N·m' },
      { step: 2, description: 'Torque to 245 N·m', descriptionMm: '၂၄၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '245 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 20,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'အလယ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 10-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၁၀ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'V10 ဆလင်ဒါ ၁၀ လုံးထိုး ဖြစ်၍ မီးပေါက်စဉ် (1-6-5-10-2-7-3-8-4-9) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ၁၀ လုံးစလုံး ပန်းထွက်အား ညီညာမှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '42.0 L',
      oilWithoutFilter: '37.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '52.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 10. UD TRUCKS RE12 / RD12 (V12 Diesel 25.0L အကြီးဆုံး ဒဏ္ဍာရီ ၁၂ လုံးထိုး တွဲကားကြီး)
  {
    id: 'nissan-re12',
    brand: 'NISSAN',
    code: 'RE12 / RD12 (V12 Heavy 25.0L)',
    series: 'UD_HEAVY_V_TYPE',
    seriesTitle: 'Nissan UD Trucks V8 / V10 / V12 (RG8 / RH10 / RE12)',
    seriesTitleMm: 'Nissan UD ထရပ်ကား V8 / V10 / V12 ကားကြီးများ (RG8 / RH10 / RE12)',
    name: '25.0L V12 Naturally Aspirated / Twin-Turbo Diesel (UD Big Thumb V12)',
    nameMm: '၂၅.၀ လီတာ V12 ဆလင်ဒါ ၁၂ လုံးထိုး (UD Big Thumb အကြီးဆုံး V12 တွဲကား)',
    type: 'V12 60-degree Heavy Duty Commercial Diesel Engine (Nissan Diesel Flagship)',
    typeMm: 'V12 ဆလင်ဒါ ၁၂ လုံးထိုး ကွန်တိန်နာဆွဲခေါင်း/သတ္တုတွင်း အကြီးဆုံး ဒဏ္ဍာရီ',
    fuelSystem: 'Mechanical In-line 12-Plunger Injection Pump (Zexel PE Type)',
    fuelSystemMm: 'Zexel ၁၂ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 25124,
    boreStrokeMm: '135.0 mm × 157.0 mm',
    cylinders: 12,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 12 - 5 - 8 - 3 - 10 - 6 - 7 - 2 - 11 - 4 - 9',
    powerOutput: '500 – 550 PS @ 2,200 RPM',
    torqueOutput: '1,863 N·m @ 1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Heavy Gear Drive)',
    commonVehicles: ['Nissan Diesel Big Thumb CW / CK V12 Heavy Hauler Trailer', 'Mining Dump Trucks'],
    commonVehiclesMm: 'UD Big Thumb V12 ကွန်တိန်နာ တွဲကားဆွဲခေါင်းကြီးများ၊ သတ္တုတွင်းသုံး ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm - Firing Order အတိုင်း ချိန်ရန်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 147, kgfCm: 1500, lbfFt: 108 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 245, kgfCm: 2500, lbfFt: 181 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 294, kgfCm: 3000, lbfFt: 217 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '98 + 45°', kgfCm: '1000 + 45°', lbfFt: '72 + 45°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 882, kgfCm: 9000, lbfFt: 650, notesMm: 'အလွန်ကြီးမားသော ၈၈၂ N·m လိုအပ်သည်' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual cylinder heads to 147 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၁၄၇ N·m စတင်ကျပ်ပါ', torque: '147 N·m' },
      { step: 2, description: 'Torque to 245 N·m', descriptionMm: '၂၄၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '245 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 24,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'အလယ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 12-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၁၂ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'ဂျပန်ထရပ်ကား သမိုင်းတွင် အကြီးဆုံး ၂၅.၀ လီတာ V12 အင်ဂျင်ဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-12-5-8-3-10-6-7-2-11-4-9) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ၁၂ လုံးစလုံး ပန်းထွက်အား ညီညာမှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '50.0 L',
      oilWithoutFilter: '45.0 L',
      oilGrade: '15W-40 (Heavy Commercial Diesel Engine Oil)',
      coolantCapacity: '65.0 L',
      fuelTankCapacity: '400 L / 600 L'
    }
  }
];
