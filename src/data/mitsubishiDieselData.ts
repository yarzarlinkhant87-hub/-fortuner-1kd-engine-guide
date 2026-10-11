import { MultiBrandEngineSpec } from './isuzuDieselData';

export const MITSUBISHI_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All Mitsubishi (အားလုံး)', desc: 'Mitsubishi & Fuso ဒီဇယ်အင်ဂျင်အားလုံး' },
  { id: 'TRITON_4D_4N', name: '4D56 & 4N15 (Triton/Pajero)', desc: '4D56 (2.5L), 4N15 (2.4L MIVEC), 4M40, 4M41' },
  { id: 'CANTER_4D3', name: 'Canter Trucks (4D33/4D34)', desc: 'Fuso Canter 4.2L & 3.9L Turbo မီနီထရပ်ကား' },
  { id: 'FIGHTER_6D_6M', name: 'Fighter & Super Great (6D16/6M70)', desc: 'Fuso Fighter 7.5L, Super Great 12.8L တွဲကားများ' },
  { id: 'FUSO_HEAVY_V', name: 'Fuso Heavy V8 & V10 (8DC9/10DC11/10M20)', desc: 'Fuso The Great & Super Great V8 (8DC9/8DC11), V10 (10DC11/10M20)' },
];

export const MITSUBISHI_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // 1. MITSUBISHI 4D56 (2.5L 8V / 16V DI-D Triton / Pajero Sport / Strada)
  {
    id: 'mitsu-4d56',
    brand: 'MITSUBISHI',
    code: '4D56 (2.5L 8V / 16V DI-D)',
    series: 'TRITON_4D_4N',
    seriesTitle: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    seriesTitleMm: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    name: '2.5L SOHC/DOHC Turbo / DI-D Common Rail',
    nameMm: '၂.၅ လီတာ သာမန်တာဘို / DI-D ကွန်မန်ရေးလ် (Triton / Pajero Sport)',
    type: 'Inline-4 SOHC 8-Valve / DOHC 16-Valve Turbocharged Intercooler',
    typeMm: '၄ လုံးထိုး တာဘိုဒီဇယ် (မြန်မာပြည် အပေါဆုံး ဒဏ္ဍာရီလာ အင်ဂျင်)',
    fuelSystem: 'Denso Common Rail HP3 System (1,800 bar) / Mechanical VE Pump',
    fuelSystemMm: 'Denso ကွန်မန်ရေးလ် (Common Rail) / သာမန် VE ပန့်လိုင်း',
    displacementCc: 2477,
    boreStrokeMm: '91.1 mm × 95.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1 (Common Rail) / 21.0:1 (Older)',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '90 PS (Older) / 136 – 178 PS (VGT DI-D) @ 4,000 RPM',
    torqueOutput: '196 N·m (Older) / 350 – 400 N·m (DI-D) @ 2,000 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် ၂ ချောင်း (Timing Belt ကြီး + Balancer Belt သေး)',
    commonVehicles: ['Mitsubishi L200 / Strada', 'Mitsubishi Triton 2.5 (2006-2015)', 'Mitsubishi Pajero Sport 2.5', 'Hyundai Galloper / Starex D4BH'],
    commonVehiclesMm: 'Mitsubishi Triton 2.5, Pajero Sport, Strada, L200, Hyundai Starex',
    valveClearance: {
      intakeColdMm: '0.15 mm',
      exhaustColdMm: '0.15 mm',
      intakeHotMm: '0.25 mm',
      exhaustHotMm: '0.25 mm',
      methodMm: 'Screw & Locknut (ဝက်အူနှင့် လော့နတ် - အင်ဂျင်အေးချိန် In & Ex နှစ်ခုစလုံး 0.15 mm စံနှုန်း)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 118, kgfCm: 1200, lbfFt: 87, notesMm: 'အလယ်မှစ၍ ၁၁၈ N·m အပြည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 'Loosen All 0 N·m', kgfCm: '0', lbfFt: '0', notesMm: 'အပြင်မှစ၍ မူလီအားလုံးကို ပြန်လျှော့ပါ (0 N·m)' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: '၄၀ N·m ပြန်လည်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀° မှ ၉၅° လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90° to 95°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀° မှ ၉၅° ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 78, kgfCm: 800, lbfFt: 58 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '27 + 90°', kgfCm: '275 + 90°', lbfFt: '20 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 181, kgfCm: 1850, lbfFt: 134, notesMm: '၁၈၁ N·m တိတိကျကျ ကျပ်ရန် (Loose မဖြစ်စေရန်)' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: 88, kgfCm: 900, lbfFt: 65 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 26, kgfCm: 265, lbfFt: 19.2 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 39, kgfCm: 398, lbfFt: 28.8 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 bolts from center outward to 118 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၁၁၈ N·m အပြည့်ကျပ်ပါ', torque: '118 N·m' },
      { step: 2, description: 'Loosen all bolts completely to 0 N·m in reverse order', descriptionMm: 'မူလီအားလုံးကို အကုန်လုံး ပြန်လျှော့ပါ (0 N·m)', torque: '0 N·m' },
      { step: 3, description: 'Re-torque all bolts to 40 N·m in sequence', descriptionMm: 'ခေါင်းဘルトများကို ၄၀ N·m ပြန်လည်ကျပ်ပါ', torque: '40 N·m' },
      { step: 4, description: 'Turn each bolt 90° to 95° clockwise', descriptionMm: 'ထောင့် ၉၀° မှ ၉၅° လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° to 95° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀° မှ ၉၅° ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft timing sprocket mark with block pointer at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို ဘလောက်တုံး 0° TDC အမှတ်နှင့် တိုက်ဆိုင်ပါ။',
      camshaft: 'Align camshaft sprocket notch with cylinder head timing mark.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အမှတ်ကို ခေါင်းမျက်နှာပြင် အထစ်နှင့် ချိန်ပါ။',
      pump: 'Injection pump sprocket mark alignment.',
      pumpMm: 'ဆီပန့် စပရော့ကတ် အမှတ် တိုက်ဆိုင်ပါ။',
      notesMm: '4D56 တွင် Timing Belt (ခါးပတ်ကြီး) အပြင် Balancer Belt (ခါးပတ်သေး) ပါဝင်သဖြင့် Balancer shaft အမှတ်များကို တိကျစွာ မချိန်ပါက အင်ဂျင်တုန်ခါမှု အလွန်ပြင်းထန်တတ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Suction Control Valve (SCV) ရှည်/တို မော်ဒယ် စစ်ဆေးရန် လိုအပ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '7.5 L',
      oilWithoutFilter: '6.8 L',
      oilGrade: '10W-30 / 15W-40 (API CI-4 / CJ-4)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '75 L'
    }
  },

  // 2. MITSUBISHI 4N15 (2.4L MIVEC Clean Diesel All New Triton / Pajero Sport)
  {
    id: 'mitsu-4n15',
    brand: 'MITSUBISHI',
    code: '4N15 MIVEC (2.4L)',
    series: 'TRITON_4D_4N',
    seriesTitle: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    seriesTitleMm: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    name: '2.4L MIVEC Clean Diesel Turbo (All New Triton / New Pajero Sport)',
    nameMm: '၂.၄ လီတာ MIVEC အလူမီနီယမ် ဒီဇယ်တာဘို (All New Triton / Pajero Sport)',
    type: 'Inline-4 DOHC 16-Valve MIVEC VG-Turbocharged Intercooler Clean Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား အလူမီနီယမ် MIVEC ခေတ်သစ် ဒီဇယ်',
    fuelSystem: 'Denso High-Pressure Common Rail (2,000 bar Multi-injection)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 2442,
    boreStrokeMm: '86.0 mm × 105.1 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '181 PS (133 kW) @ 3,500 RPM',
    torqueOutput: '430 N·m @ 2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Timing Chain) စနစ်',
    commonVehicles: ['All New Mitsubishi Triton (2015-2023)', 'All New Pajero Sport (2015-present)'],
    commonVehiclesMm: 'All New Triton, New Pajero Sport',
    valveClearance: {
      intakeColdMm: '0.15 – 0.25 mm (Hydraulic Lash Adjuster HLA)',
      exhaustColdMm: '0.25 – 0.35 mm',
      methodMm: 'Hydraulic Lash Adjuster (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 49, kgfCm: 500, lbfFt: 36, notesMm: 'အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '45 + 90°', kgfCm: '459 + 90°', lbfFt: '33 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 245, kgfCm: 2500, lbfFt: 181 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 26, kgfCm: 265, lbfFt: 19.2 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 39, kgfCm: 398, lbfFt: 28.8 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all head bolts in spiral order to 49 N·m', descriptionMm: 'ခေါင်းဘルトများကို အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ', torque: '49 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft sprocket timing mark with oil pump casing indicator.',
      crankshaftMm: 'ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို အင်ဂျင်ဝိုင်ပန့် အမှတ်နှင့် တိုက်ဆိုင်ပါ။',
      camshaft: 'Camshaft timing marks aligned with colored chain links.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အမှတ်များကို ချိန်ကြိုးအရောင်ကွင်းများနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel supply pump synchronization.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: 'အလူမီနီယမ် ဘလောက်တုံးဖြစ်သဖြင့် တော်ခ်ပမာဏ အထူးတိကျရပါမည်။ MIVEC စနစ်ပါဝင်၍ ဆီသန့်စင်မှု အထူးလိုအပ်သည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa (350 – 450 bar)',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'DPF ပါဝင်သဖြင့် Low Ash အင်ဂျင်ဝိုင်သာ သုံးရပါမည်။'
    },
    fluids: {
      oilWithFilter: '8.4 L',
      oilWithoutFilter: '7.8 L',
      oilGrade: '5W-30 (ACEA C3 / DL-1 Diesel Oil)',
      coolantCapacity: '9.0 L',
      fuelTankCapacity: '75 L'
    }
  },

  // 3. MITSUBISHI 4M40 / 4M41 (2.8L / 3.2L Pajero V46 / V78 / Canter)
  {
    id: 'mitsu-4m40',
    brand: 'MITSUBISHI',
    code: '4M40 / 4M41 (2.8L / 3.2L)',
    series: 'TRITON_4D_4N',
    seriesTitle: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    seriesTitleMm: 'Mitsubishi Triton & Pajero (4D56 / 4N15 / 4M40)',
    name: '2.8L (4M40) / 3.2L (4M41) Turbo Diesel (Pajero / Canter)',
    nameMm: '၂.၈ လီတာ (4M40) / ၃.၂ လီတာ (4M41) Pajero ကြီးများနှင့် Canter',
    type: 'Inline-4 SOHC 8-Valve (4M40) / DOHC 16-Valve (4M41) Turbo Diesel',
    typeMm: '၄ လုံးထိုး တိုက်မင်ကြိုးသုံး အကြမ်းစားကြီး (Pajero)',
    fuelSystem: 'Mechanical VE Pump (4M40) / Common Rail DI-D (4M41)',
    fuelSystemMm: 'မက္ကင်းနစ် ပန့်လိုင်း / Denso Common Rail',
    displacementCc: 2835,
    boreStrokeMm: '95.0 mm × 100.0 mm (4M40) / 98.5 mm × 105.0 mm (4M41)',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '21.0:1 (4M40) / 17.0:1 (4M41)',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '125 – 140 PS (4M40) / 165 – 200 PS (4M41) @ 4,000 RPM',
    torqueOutput: '294 N·m (4M40) / 373 – 441 N·m (4M41) @ 2,000 RPM',
    timingType: 'Chain + Gear',
    timingTypeMm: 'တိုက်မင်ဂီယာ + တိုက်မင်ကြိုး Chain စနစ်',
    commonVehicles: ['Mitsubishi Pajero V46 2.8', 'Mitsubishi Pajero V78 / V98 3.2 DI-D', 'Delica Space Gear 2.8', 'Fuso Canter 2.8'],
    commonVehiclesMm: 'Pajero V46, Pajero V78/V98 3.2L, Delica Space Gear, Canter',
    valveClearance: {
      intakeColdMm: '0.25 mm (4M40) / 0.10 mm (4M41)',
      exhaustColdMm: '0.25 mm (4M40) / 0.15 mm (4M41)',
      methodMm: 'Screw & Locknut (4M40) / Shim (4M41)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 49, kgfCm: 500, lbfFt: 36 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 147, kgfCm: 1500, lbfFt: 108 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '29 + 90°', kgfCm: '296 + 90°', lbfFt: '21.4 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 323, kgfCm: 3300, lbfFt: 238, notesMm: '၃၂၃ N·m တိကျစွာ ကျပ်ရန်' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 39, kgfCm: 398, lbfFt: 28.8 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 bolts to 49 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၄၉ N·m စတင်ကျပ်ပါ', torque: '49 N·m' },
      { step: 2, description: 'Turn 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Camshaft timing marks aligned with colored chain links.',
      camshaftMm: 'ကမ်ရှပ် အမှတ်များကို ချိန်ကြိုးအရောင်ကွင်းများနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Injection pump gear alignment.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      notesMm: 'တိုက်မင်ချိန်ကြိုး (Double Roller Chain) စနစ်ဖြစ်၍ တာရှည်ခံပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '160 – 180 MPa',
      notesMm: '4M40 သည် VE ပန့်ဖြစ်ပြီး 4M41 သည် Common Rail ဖြစ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '7.8 L (4M40) / 9.8 L (4M41)',
      oilWithoutFilter: '7.0 L',
      oilGrade: '15W-40 (API CI-4)',
      coolantCapacity: '10.5 L',
      fuelTankCapacity: '90 L'
    }
  },

  // 4. FUSO CANTER 4D33 / 4D34-T (4.2L / 3.9L Canter မီနီထရပ်ကား အပေါဆုံး)
  {
    id: 'mitsu-4d33',
    brand: 'MITSUBISHI',
    code: '4D33 / 4D34-T (4.2L / 3.9L)',
    series: 'CANTER_4D3',
    seriesTitle: 'Fuso Canter Trucks (4D33 / 4D34-T / 4D35)',
    seriesTitleMm: 'Fuso Canter ထရပ်ကားငယ်များ (4D33 / 4D34-T / 4D35)',
    name: '4.2L (4D33) / 3.9L Turbo (4D34-T) OHV Diesel (Canter FE)',
    nameMm: '၄.၂ လီတာ (4D33) / ၃.၉ လီတာ (4D34-T) Canter ထရပ်ကား',
    type: 'Inline-4 OHV 8-Valve Naturally Aspirated / Turbocharged Diesel',
    typeMm: '၄ လုံးထိုး OHV ၈ ဗား ထရပ်ကားသုံး အကြမ်းစား ဒီဇယ်',
    fuelSystem: 'In-line Multi-plunger Mechanical Injection Pump (Bosch/Zexel A/PE Type)',
    fuelSystemMm: 'Bosch A/PE မက္ကင်းနစ် ပန့်လိုင်းစနစ်',
    displacementCc: 4214,
    boreStrokeMm: '108.0 mm × 115.0 mm (4D33) / 104.0 mm × 115.0 mm (4D34)',
    cylinders: 4,
    valvesPerCyl: 2,
    compressionRatio: '18.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '120 – 140 PS @ 3,200 RPM',
    torqueOutput: '304 – 333 N·m @ 1,800 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive - ခါးပတ်/ချိန် မပါ)',
    commonVehicles: ['Mitsubishi Fuso Canter FE5 / FE6', 'Fuso Rosa Bus', 'Hyundai Mighty Truck (4D33 OEM)'],
    commonVehiclesMm: 'Fuso Canter FE, Rosa ဘတ်စ်ကား၊ Hyundai Mighty ထရပ်ကား',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm - Firing Order 1-3-4-2 ညှိနည်း)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 98, kgfCm: 1000, lbfFt: 72 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '49 + 60°', kgfCm: '500 + 60°', lbfFt: '36 + 60°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 490, kgfCm: 5000, lbfFt: 362, notesMm: '၄၉၀ N·m အလွန်မြင့်သော တော်ခ်' },
      { component: 'Rocker Arm Bracket Bolts', componentMm: 'ရော့ကာရှပ် ဒေါက်ခုံ ဘルトများ', nm: 54, kgfCm: 550, lbfFt: 40 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 78, kgfCm: 795, lbfFt: 57.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts from center outward to 98 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၉၈ N·m ကျပ်ပါ', torque: '98 N·m' },
      { step: 2, description: 'Torque to 167 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၆၇ N·m ရောက်အောင် တိုးမြှင့်ကျပ်ပါ', torque: '167 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Align camshaft gear mark with idler gear mark.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'In-line injection pump gear timing.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      notesMm: 'မြန်မာပြည် Canter မီနီထရပ်ကားလောကတွင် အပေါဆုံး အင်ဂျင်ဖြစ်ပြီး ဂီယာအပြည့် စနစ်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ၄ လုံး ပန်းထုတ်အား ညီညာမှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '9.0 L',
      oilWithoutFilter: '8.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '13.0 L',
      fuelTankCapacity: '70 L / 100 L'
    }
  },

  // 5. FUSO FIGHTER 6D16 / 6D16-T (7.5L 6-Cylinder ၆ ဘီး/၁၀ ဘီး)
  {
    id: 'mitsu-6d16',
    brand: 'MITSUBISHI',
    code: '6D16 / 6D16-T (7.5L 6-Cyl)',
    series: 'FIGHTER_6D_6M',
    seriesTitle: 'Fuso Fighter & Super Great (6D16 / 6M60 / 6M70)',
    seriesTitleMm: 'Fuso Fighter & Super Great ၆ လုံးထိုး (6D16 / 6M60 / 6M70)',
    name: '7.5L Inline-6 OHC Diesel / Turbo (Fuso Fighter 6-Wheeler/10-Wheeler)',
    nameMm: '၇.၅ လီတာ ၆ လုံးထိုး သာမန်/တာဘို (Fuso Fighter ၆ ဘီး/၁၀ ဘီး)',
    type: 'Inline-6 OHC 12-Valve / 24-Valve Turbocharged Intercooler Diesel',
    typeMm: '၆ လုံးထိုး OHC ကားကြီးသုံး အကြမ်းစား ဒီဇယ် (Fighter)',
    fuelSystem: 'In-line Multi-plunger Mechanical Injection Pump (Zexel)',
    fuelSystemMm: 'Zexel ၆ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 7545,
    boreStrokeMm: '118.0 mm × 115.0 mm',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '18.0:1 (Turbo: 16.5:1)',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '190 – 255 PS @ 2,800 RPM',
    torqueOutput: '510 – 706 N·m @ 1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Fuso Fighter FK / FM 6-Wheeler', 'Fuso Fighter FN 10-Wheeler', 'Fuso Fighter Bus'],
    commonVehiclesMm: 'Fuso Fighter ၆ ဘီးကား၊ ၁၀ ဘီးကား၊ Fuso ဘတ်စ်ကားများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm - 1-5-3-6-2-4 မီးပေါက်စုံတွဲ ညှိနည်း)'
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
      { step: 2, description: 'Torque to 167 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၆၇ N·m ရောက်အောင် တိုးမြှင့်ကျပ်ပါ', torque: '167 N·m' },
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
      notesMm: 'မြန်မာပြည် ၆ ဘီးကားလောကတွင် အအောင်မြင်ဆုံး အင်ဂျင်ဖြစ်ပါသည်။ မီးပေါက်စုံတွဲ (1-6, 5-2, 3-4) အတိုင်း ဘားချိန်ပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ဖိအား ပုံမှန် စစ်ဆေးပေးပါ။'
    },
    fluids: {
      oilWithFilter: '18.0 L',
      oilWithoutFilter: '16.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '26.0 L',
      fuelTankCapacity: '200 L'
    }
  },

  // 6. FUSO SUPER GREAT 6M70 (12.8L Inline-6 Turbo Common Rail တွဲကားကြီး)
  {
    id: 'mitsu-6m70',
    brand: 'MITSUBISHI',
    code: '6M70 (12.8L Super Great)',
    series: 'FIGHTER_6D_6M',
    seriesTitle: 'Fuso Fighter & Super Great (6D16 / 6M60 / 6M70)',
    seriesTitleMm: 'Fuso Fighter & Super Great ၆ လုံးထိုး (6D16 / 6M60 / 6M70)',
    name: '12.8L Inline-6 24-Valve Turbo Common Rail (Fuso Super Great)',
    nameMm: '၁၂.၈ လီတာ ၆ လုံးထိုး ၂၄ ဗား (Fuso Super Great ၁၀ ဘီး/တွဲကားကြီး)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ကွန်တိန်နာဆွဲခေါင်း ကားကြီးအင်ဂျင်',
    fuelSystem: 'Denso High-Pressure Common Rail System (1,800 bar)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 12882,
    boreStrokeMm: '135.0 mm × 150.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '380 – 420 PS @ 2,000 RPM',
    torqueOutput: '1,765 – 2,157 N·m @ 1,100 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Fuso Super Great FS / FV 10-Wheeler', 'Fuso Super Great FP Prime Mover Trailer (တွဲကားကြီးများ)'],
    commonVehiclesMm: 'Fuso Super Great ၁၀ ဘီး၊ ကွန်တိန်နာ တွဲကားဆွဲခေါင်းကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Jake Brake ညှိနည်းပါရှိ)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 118, kgfCm: 1200, lbfFt: 87 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 196, kgfCm: 2000, lbfFt: 145 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '147 + 60°', kgfCm: '1500 + 60°', lbfFt: '108 + 60°' },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '69 + 60°', kgfCm: '700 + 60°', lbfFt: '51 + 60°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 686, kgfCm: 7000, lbfFt: 506 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque heavy head bolts to 118 N·m', descriptionMm: 'ခေါင်းဘルトများကို ၁၁၈ N·m စတင်ကျပ်ပါ', torque: '118 N·m' },
      { step: 2, description: 'Torque to 196 N·m', descriptionMm: '၁၉၆ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '196 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။',
      camshaft: 'Overhead cam gear alignment.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Common rail high pressure pump drive gear.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် ချိန်ညှိပါ။',
      notesMm: 'သယ်ယူပို့ဆောင်ရေး လုပ်ငန်းသုံး ကွန်တိန်နာဆွဲခေါင်း အင်ဂျင်ကြီးဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa',
      pressureMax: '180 – 200 MPa',
      notesMm: 'ဆီလိုင်းစနစ် သန့်ရှင်းမှု အထူးသတိပြုပါ။'
    },
    fluids: {
      oilWithFilter: '35.0 L',
      oilWithoutFilter: '31.0 L',
      oilGrade: '15W-40 (Heavy Duty Turbo Diesel Oil)',
      coolantCapacity: '40.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 7. FUSO 8DC9 / 8DC11 (16.0L / 17.7L V8 The Great ၁၀ ဘီးကားကြီး)
  {
    id: 'mitsu-8dc9',
    brand: 'MITSUBISHI',
    code: '8DC9 / 8DC11 (V8 Heavy)',
    series: 'FUSO_HEAVY_V',
    seriesTitle: 'Fuso Heavy V8 & V10 (8DC9 / 10DC11 / 10M20)',
    seriesTitleMm: 'Fuso ကားကြီး V8 & V10 (8DC9 / 10DC11 / 10M20)',
    name: '16.0L (8DC9) / 17.7L (8DC11) V8 Diesel (Fuso The Great)',
    nameMm: '၁၆.၀ လီတာ (8DC9) / ၁၇.၇ လီတာ (8DC11) V8 (Fuso The Great ၁၀ ဘီး)',
    type: 'V8 90-degree Naturally Aspirated / Twin-Turbo Heavy Duty Diesel Engine',
    typeMm: 'V8 ၉၀ ဒီဂရီ ဆလင်ဒါ ၈ လုံးထိုး ကားကြီးသုံး အကြမ်းစား ဒီဇယ်',
    fuelSystem: 'Mechanical In-line Multi-plunger Injection Pump (Bosch/Zexel PE Type)',
    fuelSystemMm: 'Zexel ၈ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 16031,
    boreStrokeMm: '135.0 mm × 140.0 mm (8DC9) / 142.0 mm × 140.0 mm (8DC11)',
    cylinders: 8,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 5 - 7 - 2 - 6 - 3 - 4 - 8',
    powerOutput: '320 – 380 PS (Twin-Turbo: 440 PS) @ 2,200 RPM',
    torqueOutput: '1,079 – 1,471 N·m @ 1,300 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Fuso The Great FV / FS V8 10-Wheeler', 'Heavy Dump Trucks', 'Concrete Mixer Trucks'],
    commonVehiclesMm: 'Fuso The Great ၁၀ ဘီး V8၊ အကြီးစား ကျောက်တင်ကား၊ ကွန်ကရစ်ဖျော်စက်ယာဉ်ကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.40 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm - V8 Bank 1/Bank 2 ညှိနည်း)'
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
    headBoltsCount: 16,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with 0° TDC pointer.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို TDC အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'အလယ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 8-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၈ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး ဖြစ်၍ မီးပေါက်စဉ် (1-5-7-2-6-3-4-8) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ၈ လုံး ပန်းထွက်အား ညီညာမှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '35.0 L',
      oilWithoutFilter: '30.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '45.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 8. FUSO 10DC11 / 10M20 (22.2L / 25.1L V10 The Great / Super Great ဒဏ္ဍာရီ ၁၀ လုံးထိုး)
  {
    id: 'mitsu-10dc11',
    brand: 'MITSUBISHI',
    code: '10DC11 / 10M20 (V10 Heavy 25.1L)',
    series: 'FUSO_HEAVY_V',
    seriesTitle: 'Fuso Heavy V8 & V10 (8DC9 / 10DC11 / 10M20)',
    seriesTitleMm: 'Fuso ကားကြီး V8 & V10 (8DC9 / 10DC11 / 10M20)',
    name: '22.2L (10DC11) / 25.1L (10M20) V10 Diesel (Fuso Heavy Prime Mover)',
    nameMm: '၂၂.၂ လီတာ (10DC11) / ၂၅.၁ လီတာ (10M20) V10 ကွန်တိန်နာဆွဲခေါင်းကြီး',
    type: 'V10 Naturally Aspirated Heavy Commercial Diesel Engine (Fuso Flagship)',
    typeMm: 'V10 ဆလင်ဒါ ၁၀ လုံးထိုး ကွန်တိန်နာဆွဲခေါင်း အကြီးဆုံး ဒဏ္ဍာရီ (Super Great)',
    fuelSystem: 'Mechanical In-line 10-Plunger Injection Pump (Zexel)',
    fuelSystemMm: 'Zexel ၁၀ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 25120,
    boreStrokeMm: '146.0 mm × 150.0 mm (10M20)',
    cylinders: 10,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 6 - 5 - 10 - 2 - 7 - 3 - 8 - 4 - 9',
    powerOutput: '440 – 480 PS @ 2,200 RPM',
    torqueOutput: '1,620 – 1,770 N·m @ 1,300 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Heavy Gear Drive)',
    commonVehicles: ['Fuso Super Great FV V10 Prime Mover Trailer', 'Heavy Mining Trucks'],
    commonVehiclesMm: 'Fuso Super Great V10 ကွန်တိန်နာ တွဲကားဆွဲခေါင်းကြီးများ၊ သတ္တုတွင်းသုံး ကားကြီးများ',
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
      notesMm: 'ဆလင်ဒါဆံ့အား ၂၅.၁ လီတာရှိသော အကြီးဆုံး V10 အင်ဂျင်ဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-6-5-10-2-7-3-8-4-9) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ၁၀ လုံးစလုံး ပန်းထွက်အား ညီညာမှု စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '45.0 L',
      oilWithoutFilter: '40.0 L',
      oilGrade: '15W-40 (Heavy Commercial Diesel Engine Oil)',
      coolantCapacity: '55.0 L',
      fuelTankCapacity: '400 L / 600 L'
    }
  }
];
