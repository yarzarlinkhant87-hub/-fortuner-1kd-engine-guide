import { MultiBrandEngineSpec } from './isuzuDieselData';

export const USA_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All America (အမေရိက အားလုံး)', desc: 'အမေရိကန် Cummins, ချက်ဗလက် Chevrolet, Ford, Detroit & CAT အားလုံး' },
  { id: 'FORD_RANGER', name: 'Ford Ranger & Everest (2.0L ~ 3.2L)', desc: 'Ranger 2.2L TDCi, 3.2L Wildtrak (5-Cyl) & 2.0L Bi-Turbo Raptor' },
  { id: 'POWER_STROKE_V8', name: 'Ford Power Stroke V8 (6.7L & 7.3L)', desc: 'Ford Super Duty 6.7L Scorpion & 7.3L HEUI V8 ဒဏ္ဍာရီ' },
  { id: 'CUMMINS_USA', name: 'Cummins အတွဲ (2.8L ~ 15L)', desc: 'Cummins R2.8, 5.9L 12V/24V, 6.7L RAM HD & X15 တွဲကားဘုရင်' },
  { id: 'CHEVY_DURAMAX', name: 'ချက်ဗလက် Chevrolet / Duramax (2.8L ~ 6.6L)', desc: 'Colorado 2.8L, Silverado 3.0L I-6 & Silverado HD 6.6L V8' },
  { id: 'DETROIT_DIESEL', name: 'Detroit Diesel အတွဲ (12.7L & 14.8L)', desc: 'Series 60 12.7L DDEC & DD15 Cascadia တွဲကားဘုရင်' },
  { id: 'CAT_C15_HEAVY', name: 'Caterpillar CAT အတွဲ (15.2L)', desc: 'CAT C15 15.2L Twin-Turbo ACERT စက်ယန္တရား & တွဲကားဘုရင်' },
];

export const USA_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // ==========================================
  // [အုပ်စု ၁] CUMMINS LEGENDS (အသေးမှ အကြီး အတွဲလိုက်)
  // ==========================================

  // 1. Cummins R2.8 Turbo Diesel (2,776 cc)
  {
    id: 'usa-cummins-r28',
    brand: 'ISUZU',
    code: 'Cummins R2.8 / ISF 2.8 Turbo',
    series: 'CUMMINS_USA',
    seriesTitle: 'Cummins Compact (R2.8 Crate / ISF)',
    seriesTitleMm: 'Cummins အမေရိကန် အသေးစား ၄ လုံးထိုး (R2.8 / ISF 2.8L)',
    name: '2.8L Inline-4 16-Valve Turbocharged Common Rail Diesel (Cummins R2.8)',
    nameMm: '၂.၈ လီတာ ၄ လုံးထိုး ၁၆ ဗား တာဘို ကွန်မန်ရေးလ် (Cummins R2.8 / ISF 2.8)',
    type: 'Inline-4 DOHC 16-Valve Turbocharged Intercooler Bosch Common Rail Compact Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား ဖိအားမြင့် ကွန်မန်ရေးလ် အကြမ်းခံ အသေးစား ကားငယ်ဒီဇယ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,600 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,600 bar)',
    displacementCc: 2776,
    boreStrokeMm: '94.0 mm × 100.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.9:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '161 PS @ 3,600 RPM',
    torqueOutput: '360 – 420 N·m @ 1,500 – 3,000 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Front Single Roller Chain with Hydraulic Tensioner)',
    commonVehicles: [
      'Jeep Wrangler JK / TJ (Cummins R2.8 Crate Engine Repower)',
      'Toyota Land Cruiser / Hilux Engine Swap (USA Repower)',
      'Foton Tunland / Sauvana 2.8 (Cummins ISF 2.8 OEM)'
    ],
    commonVehiclesMm: 'Jeep Wrangler ပြုပြင်ပြောင်းလဲတပ်ဆင်ယာဉ်များ၊ 4WD ကားငယ်များ၊ Foton Tunland 2.8',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကနဦး ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '35 + 90°', kgfCm: '357 + 90°', lbfFt: '25.8 + 90°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 18, kgfCm: 184, lbfFt: 13.3, notesMm: 'ဟီတာပလပ် (ချက်ပလပ်) တပ်ဆင်ကျပ်အား ၁၈ N·m' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルト', nm: '100 + 60°', kgfCm: '1020 + 60°', lbfFt: '74 + 60°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 40, kgfCm: 408, lbfFt: 29.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 10 bolts from center outward to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft timing mark at 0° TDC Cylinder 1.',
      crankshaftMm: 'ခရိုင်းရှပ် အမှတ်ကို 0° TDC တွင် ချိန်ပါ။',
      camshaft: 'Align double camshaft gear punch marks flat with head surface.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်များကို ခေါင်းမျက်နှာပြင်နှင့် တန်းညီချိန်ပါ။',
      pump: 'High pressure common rail pump driven by timing chain.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့်ကို တိုက်မင်ကြိုးဖြင့် မောင်းနှင်ပါသည်။',
      notesMm: 'Cummins ၏ အလွယ်တကူ ပြုပြင်ပြောင်းလဲနိုင်သော Crate Engine အဖြစ် နာမည်ကျော်ပြီး အကြမ်းခံမှု စံချိန်မီပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '160 MPa (1,600 bar)',
      notesMm: 'Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '5.5 L',
      oilWithoutFilter: '5.0 L',
      oilGrade: '5W-40 / 15W-40 (API CK-4 / CJ-4)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '70 L'
    }
  },

  // 2. Cummins 5.9L 6BT 12V/24V (5,883 cc)
  {
    id: 'usa-cummins-59',
    brand: 'ISUZU',
    code: 'Cummins 5.9L 6BT (12V / 24V)',
    series: 'CUMMINS_USA',
    seriesTitle: 'Cummins Legendary 6BT (Dodge RAM 2500 / 3500)',
    seriesTitleMm: 'Cummins ဒဏ္ဍာရီလာ ၅.၉ လီတာ (6BT 12V & 24V ISB)',
    name: '5.9L Inline-6 Turbocharged Mechanical & Electronic Diesel (6BT 5.9)',
    nameMm: '၅.၉ လီတာ ၆ လုံးထိုး (Dodge RAM 2500/3500 12-Valve P7100 & 24-Valve)',
    type: 'Inline-6 OHV 12/24-Valve Turbocharged Intercooler Mechanical / Common Rail Diesel',
    typeMm: '၆ လုံးထိုး OHV ဂီယာအပြည့် ကမ္ဘာ့အကြမ်းဆုံး သံမဏိဘလောက် အမေရိကန် ဒဏ္ဍာရီအင်ဂျင်',
    fuelSystem: 'Bosch P7100 Inline Mechanical Pump (12V) / VP44 / Common Rail (24V)',
    fuelSystemMm: 'Bosch P7100 စက်ပိုင်းပန့် (12V) / Bosch Common Rail (24V)',
    displacementCc: 5883,
    boreStrokeMm: '102.0 mm × 120.0 mm',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '160 – 325 PS @ 2,500 RPM',
    torqueOutput: '540 – 827 N·m @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Helical Bulletproof Gear Train - ရှေ့ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Dodge RAM 2500 / 3500 Heavy Duty Pickup (1989–2007)',
      'Ford F-650 Commercial Medium Duty Truck',
      'Freightliner FL60 / FL70 Medium Truck',
      'School Buses & Industrial Generators'
    ],
    commonVehiclesMm: 'Dodge RAM 2500/3500 12V & 24V၊ ကုန်တင်ကားကြီးများ၊ ကျောင်းကားကြီးများ၊ စက်မှုမီးစက်များ',
    valveClearance: {
      intakeColdMm: '0.25 mm (0.010 in)',
      exhaustColdMm: '0.51 mm (0.020 in)',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.25 mm / Exhaust 0.51 mm တိုက်ရိုက်ချိန်နည်း)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 54, kgfCm: 551, lbfFt: 40, notesMm: 'အလယ်မှစ၍ ၅၄ N·m (40 ft-lb) ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 95, kgfCm: 969, lbfFt: 70, notesMm: 'ဒုတိယအဆင့် ၉၅ N·m (70 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 135, kgfCm: 1377, lbfFt: 100, notesMm: 'တတိယအဆင့် ၁၃၅ N·m (100 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 176, kgfCm: 1795, lbfFt: 130 },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '100 + 60°', kgfCm: '1020 + 60°', lbfFt: '74 + 60°' },
      { component: 'Grid Heater / Intake Plugs', componentMm: 'အင်တိတ် ဟီတာ (Grid Heater / ချက်ပလပ်)', nm: 24, kgfCm: 245, lbfFt: 17.7 },
      { component: 'Crankshaft Damper Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: 125, kgfCm: 1275, lbfFt: 92 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 60, kgfCm: 612, lbfFt: 44.3 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 bolts in spiral pattern to 54 N·m (40 ft-lb)', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၅၄ N·m ကျပ်ပါ', torque: '54 N·m' },
      { step: 2, description: 'Torque to 95 N·m (70 ft-lb)', descriptionMm: '၉၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '95 N·m' },
      { step: 3, description: 'Torque to 135 N·m (100 ft-lb)', descriptionMm: '၁၃၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '135 N·m' },
      { step: 4, description: 'Turn long bolts an additional 90° clockwise', descriptionMm: 'မူလီရှည်များကို ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Push timing pin under injection pump into camshaft gear at TDC.',
      crankshaftMm: 'ဆီပန့်အောက်ရှိ တိုက်မင်ပင် (Timing Pin) ကို တွန်းသွင်း၍ No.1 TDC ချိန်ပါ။',
      camshaft: 'Crankshaft gear dot aligns with camshaft gear double dots.',
      camshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ် (၁) စက်ကို ကမ်ရှပ်ဂီယာ အမှတ် (၂) စက်ကြား ထည့်ချိန်ပါ။',
      pump: 'Bosch P7100 spill timing at 14° – 16° BTDC.',
      pumpMm: 'Bosch P7100 ပန့်တွင် စပရေးတိုင်မင် ၁၄° မှ ၁၆° BTDC ချိန်ပါ။',
      notesMm: 'ကမ္ဘာ့အကြမ်းဆုံးနှင့် ပြုပြင်ရအရိုးရှင်းဆုံး အင်ဂျင်အဖြစ် နာမည်ကျော်ပြီး Killer Dowel Pin (KDP) ကို သော့ခတ်ထားရန် သတိပြုရပါမည်။ မီးပေါက်စဉ် 1-5-3-6-2-4 ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '18 – 25 psi (P7100 Low Pressure Lift)',
      pressureMax: 'In-line Mechanical Injection / Common Rail',
      notesMm: 'Bosch P7100 Mechanical / VP44'
    },
    fluids: {
      oilWithFilter: '11.4 L (12 Quarts)',
      oilWithoutFilter: '10.5 L',
      oilGrade: '15W-40 (API CK-4 / CI-4 Heavy Duty)',
      coolantCapacity: '22.7 L',
      fuelTankCapacity: '132 L (35 Gallons)'
    }
  },

  // 3. Cummins 6.7L Turbo HO (6,690 cc)
  {
    id: 'usa-cummins-67',
    brand: 'ISUZU',
    code: 'Cummins 6.7L Turbo (RAM HD)',
    series: 'CUMMINS_USA',
    seriesTitle: 'Cummins Heavy Duty (RAM 2500 / 3500)',
    seriesTitleMm: 'Cummins ၆.၇ လီတာ ၆ လုံးထိုး (RAM 2500/3500 High Output)',
    name: '6.7L Inline-6 24-Valve High Output Turbo Diesel (Cummins ISB 6.7)',
    nameMm: '၆.၇ လီတာ ၆ လုံးထိုး ၂၄ ဗား (RAM 2500 / 3500 Heavy Duty တွဲဆွဲဘုရင်)',
    type: 'Inline-6 OHV 24-Valve Variable Geometry Turbo Bosch Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHV ၂၄ ဗား သံမဏိဘလောက် ဖိအားမြင့် ကွန်မန်ရေးလ် ကမ္ဘာကျော် တွဲဆွဲအင်ဂျင်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (2,000 bar / 29,000 psi)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 6690,
    boreStrokeMm: '107.0 mm × 124.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.2:1 (HO) / 19.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '370 – 420 PS @ 2,800 RPM',
    torqueOutput: '1,152 – 1,458 N·m (1,075 lb-ft) @ 1,800 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Helical Gear Train - ရှေ့ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'RAM 2500 Heavy Duty Pickup (4x4 တွဲဆွဲယာဉ်ကြီးများ)',
      'RAM 3500 Heavy Duty Dually (တန် ၃၀+ တွဲဆွဲနိုင်သော စွမ်းအားရှင်)',
      'RAM 4500 / 5500 Commercial Chassis Cab',
      'Freightliner M2 106 Medium Duty Truck'
    ],
    commonVehiclesMm: 'RAM 2500/3500 HD တွဲဆွဲပစ်ကပ်ကြီးများ၊ Freightliner M2 106 ကုန်တင်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.254 mm (0.010 in)',
      exhaustColdMm: '0.660 mm (0.026 in)',
      methodMm: 'Feeler Gauge & Locknut (အေးချိန် Intake 0.254 mm / Exhaust 0.660 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'အလယ်မှစ၍ ၇၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 140, kgfCm: 1428, lbfFt: 103.3, notesMm: 'ဒုတိယအဆင့် ၁၄၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '80 + 120°', kgfCm: '816 + 120°', lbfFt: '59 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '95 + 60°', kgfCm: '969 + 60°', lbfFt: '70 + 60°' },
      { component: 'Grid Heater Element Bolts', componentMm: 'ဟီတာအပူပေးကွိုင် (ချက်ပလပ် / Heater)', nm: 24, kgfCm: 245, lbfFt: 17.7 },
      { component: 'Crankshaft Damper Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '135', kgfCm: '1377', lbfFt: '100' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 50, kgfCm: 510, lbfFt: 37 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 bolts in spiral sequence to 70 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ခရုပတ်ပုံစံ ၇၀ N·m ကျပ်ပါ', torque: '70 N·m' },
      { step: 2, description: 'Torque to 140 N·m', descriptionMm: '၁၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '140 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear dot with camshaft gear double dots at 0° TDC Cylinder 1.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ကမ်ရှပ်ဂီယာ အမှတ်နှစ်စက်ကြား No.1 TDC တွင် တိုက်ဆိုင်ပါ။',
      camshaft: 'Front helical camshaft gear alignment.',
      camshaftMm: 'ရှေ့ဘက် ကမ်ရှပ်ဂီယာ အမှတ်တိုက်ပါ။',
      pump: 'Bosch CP3 / CP4.2 high pressure fuel pump gear alignment.',
      pumpMm: 'Bosch ဖိအားမြင့်ဆီပန့် ဂီယာ ချိန်ညှိပါ။',
      notesMm: 'Cummins 6.7L သည် CGI (Compacted Graphite Iron) ဘလောက်ဖြင့် ပြုလုပ်ထားပြီး အပူဒဏ်နှင့် ဝန်ဒဏ်ကို အလွန်ခံနိုင်ရည်ရှိပါသည်။ မီးပေါက်စဉ် (1-5-3-6-2-4) အတိုင်း အလုပ်လုပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 40 MPa',
      pressureMax: '200 MPa (29,000 psi)',
      notesMm: 'Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '11.4 L (12 Quarts)',
      oilWithoutFilter: '10.5 L',
      oilGrade: '15W-40 / 5W-40 (API CK-4 Heavy Duty Specification)',
      coolantCapacity: '21.5 L',
      fuelTankCapacity: '117 L – 189 L (31 – 50 Gallons)'
    }
  },

  // 4. Cummins X15 / ISX15 (14,945 cc / 15.0L)
  {
    id: 'usa-cummins-x15',
    brand: 'ISUZU',
    code: 'Cummins X15 / ISX15 (15.0L Flagship)',
    series: 'CUMMINS_USA',
    seriesTitle: 'Cummins Flagship Hauler (X15 / ISX15)',
    seriesTitleMm: 'Cummins X15 / ISX15 (၁၅.၀ လီတာ တွဲကားဘုရင် - Peterbilt & Kenworth)',
    name: '14.9L Inline-6 24-Valve XPI High-Pressure Common Rail Diesel (Cummins X15)',
    nameMm: '၁၄.၉ လီတာ ၆ လုံးထိုး ၂၄ ဗား (Peterbilt 579, Kenworth T680, International Lonestar)',
    type: 'Inline-6 24-Valve Variable Geometry Turbo XPI Common Rail Heavy Duty Commercial Diesel',
    typeMm: '၆ လုံးထိုး ၂၄ ဗား အကြမ်းဆုံး ကမ္ဘာ့အကြီးဆုံး Cummins X15 အဝေးပြေးတွဲကားဘုရင်',
    fuelSystem: 'XPI Extra-High Pressure Common Rail (2,600 bar / 37,700 psi)',
    fuelSystemMm: 'XPI အလွန်မြင့်မားသော ဖိအား ကွန်မန်ရေးလ် စနစ် (2,600 bar)',
    displacementCc: 14945,
    boreStrokeMm: '137.0 mm × 169.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.9:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '450 – 605 PS (King of the Highway) @ 1,800 RPM',
    torqueOutput: '2,237 – 2,780 N·m (2,050 lb-ft) @ 1,000–1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Heavy Duty Gear Train - ရှေ့ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Peterbilt 579 / 389 Highway Tractor Trailer (ကွန်တိန်နာဆွဲခေါင်းကြီးများ)',
      'Kenworth T680 / W990 Heavy Duty Long Haul',
      'International Lonestar / LT Series',
      'Freightliner Cascadia (Cummins X15 Option)'
    ],
    commonVehiclesMm: 'Peterbilt 579/389 တွဲကားကြီးများ၊ Kenworth T680၊ International Lonestar တွဲကားဆွဲခေါင်းများ',
    valveClearance: {
      intakeColdMm: '0.36 mm (0.014 in)',
      exhaustColdMm: '0.69 mm (0.027 in) / Engine Brake: 7.00 mm',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် In 0.36 mm / Ex 0.69 mm - Engine Brake 7.00 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 203, kgfCm: 2070, lbfFt: 150, notesMm: 'အလယ်မှစ၍ ၂၀၃ N·m (150 ft-lb) ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 407, kgfCm: 4151, lbfFt: 300, notesMm: 'ဒုတိယအဆင့် ၄၀၇ N·m (300 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 353, kgfCm: 3600, lbfFt: 260 },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '95 + 190 + 60°', kgfCm: '969 + 1938 + 60°', lbfFt: '70 + 140 + 60°' },
      { component: 'Crankshaft Vibration Damper', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: 271, kgfCm: 2764, lbfFt: 200 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 100, kgfCm: 1020, lbfFt: 74 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 38 bolts in spiral sequence to 203 N·m (150 ft-lb)', descriptionMm: 'ခေါင်းဘルト ၃၈ လုံးကို အလယ်မှစ၍ ၂၀၃ N·m ကျပ်ပါ', torque: '203 N·m' },
      { step: 2, description: 'Torque to 407 N·m (300 ft-lb)', descriptionMm: '၄၀၇ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '407 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 38,
    timingMarksGuide: {
      crankshaft: 'Insert timing pin into flywheel hole at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်ထဲ တိုက်မင်ပင်ထိုး၍ No.1 TDC ချိန်ပါ။',
      camshaft: 'Align front camshaft gear timing marks with idler gear.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်ကို အိုင်ဒလာဂီယာ အမှတ်နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'XPI common rail fuel pump timing.',
      pumpMm: 'XPI ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'အမေရိကန် Peterbilt နှင့် Kenworth တွဲကားကြီးများတွင် အင်အားအကြီးဆုံး တပ်ဆင်ထားသော Cummins ၏ အထင်ကရ တွဲကားဘုရင် ဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-5-3-6-2-4) ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '260 MPa (37,700 psi XPI)',
      notesMm: 'Cummins XPI Common Rail'
    },
    fluids: {
      oilWithFilter: '45.4 L (12 Gallons)',
      oilWithoutFilter: '41.0 L',
      oilGrade: '10W-30 / 15W-40 (Valvoline Premium Blue / API CK-4)',
      coolantCapacity: '52.0 L',
      fuelTankCapacity: '800 L – 1,200 L'
    }
  },

  // ==========================================
  // [အုပ်စု ၂] ချက်ဗလက် CHEVROLET & GM DURAMAX (အသေးမှ အကြီး အတွဲလိုက်)
  // ==========================================

  // 5. Chevrolet Colorado / Trailblazer 2.8L Duramax (XLD28) (2,776 cc - မြန်မာပြည်လူကြိုက်များ ချက်ဗလက်)
  {
    id: 'usa-chevy-duramax-28',
    brand: 'ISUZU',
    code: 'Chevrolet 2.8L Duramax (Colorado)',
    series: 'CHEVY_DURAMAX',
    seriesTitle: 'Chevrolet ချက်ဗလက် 4WD (Colorado / Trailblazer)',
    seriesTitleMm: 'ချက်ဗလက် Chevrolet ၂.၈ လီတာ Duramax (Colorado / Trailblazer)',
    name: '2.8L Inline-4 16-Valve DOHC Common Rail Turbo Diesel (Duramax XLD28 / LWN)',
    nameMm: '၂.၈ လီတာ ၄ လုံးထိုး ၁၆ ဗား Duramax (Chevrolet Colorado & Trailblazer 4WD)',
    type: 'Inline-4 DOHC 16-Valve Variable Geometry Turbo Bosch Common Rail Compact Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တိုက်မင်ခါးပတ် ၂၀၀ မြင်းကောင်ရေ ချက်ဗလက် 4WD ဒီဇယ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 2776,
    boreStrokeMm: '94.0 mm × 100.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '200 PS @ 3,600 RPM',
    torqueOutput: '500 N·m @ 2,000 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် (Heavy Duty Timing Belt with Auto Tensioner)',
    commonVehicles: [
      'Chevrolet Colorado High Country 2.8L 4x4 (မြန်မာပြည်လူကြိုက်များ ချက်ဗလက် ပစ်ကပ်)',
      'Chevrolet Trailblazer 2.8L 4WD 7-Seater SUV (ချက်ဗလက် ဇိမ်ခံ SUV ကြီး)',
      'Holden Colorado 2.8 Duramax Pickup'
    ],
    commonVehiclesMm: 'Chevrolet Colorado High Country ပစ်ကပ်၊ Trailblazer 4WD SUV (မြန်မာပြည်လူကြိုက်များ ချက်ဗလက်)',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'အလယ်မှစ၍ ၃၅ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'ဒုတိယအဆင့် ၇၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'ထောင့် ၆၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+60°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'နောက်ထပ် ထောင့် ၆၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '60 + 60°', kgfCm: '612 + 60°', lbfFt: '44 + 60°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '35 + 45°', kgfCm: '357 + 45°', lbfFt: '25.8 + 45°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 18, kgfCm: 184, lbfFt: 13.3, notesMm: 'ဟီတာပလပ် (ချက်ပလပ်) တပ်ဆင်ကျပ်အား ၁၈ N·m' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルト', nm: '160 + 45°', kgfCm: '1632 + 45°', lbfFt: '118 + 45°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 bolts from center outward in spiral sequence to 35 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 70 N·m', descriptionMm: '၇၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '70 N·m' },
      { step: 3, description: 'Turn each bolt 60° clockwise', descriptionMm: 'ထောင့် ၆၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+60°' },
      { step: 4, description: 'Turn each bolt another 60° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၆၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၂၀°)', torque: '+60°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft at TDC Cylinder 1 using crankshaft locking tool.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို သီးသန့် လော့ကင်းတူးလ်ဖြင့် TDC တွင် လော့ခတ်ပါ။',
      camshaft: 'Insert camshaft locking pins into intake and exhaust camshaft gear alignment holes.',
      camshaftMm: 'ကမ်ရှပ် အင်တိတ်နှင့် အိတ်ဇော စပရော့ကတ်များထဲ လော့ကင်းပင် (Pin) ထိုးသွင်းပါ။',
      pump: 'High pressure common rail pump driven by timing belt.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့်ကို တိုက်မင်ခါးပတ်ဖြင့် မောင်းနှင်ပါသည်။',
      notesMm: 'မြန်မာပြည်တွင် အသုံးများဆုံး ချက်ဗလက် (Chevrolet) ဒီဇယ်အင်ဂျင်ဖြစ်ပြီး ကီလို ၁ သိန်း သို့မဟုတ် ၅ နှစ်ပြည့်လျှင် တိုက်မင်ခါးပတ်နှင့် Auto Tensioner ကို လဲလှယ်ပေးရပါမည်။ မီးပေါက်စဉ် 1-3-4-2 ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '6.0 L',
      oilWithoutFilter: '5.5 L',
      oilGrade: '5W-30 (dexos2 Specification)',
      coolantCapacity: '9.0 L',
      fuelTankCapacity: '76 L'
    }
  },

  // 6. Chevrolet Silverado 1500 / Tahoe 3.0L Duramax (LM2 / LZ0) (2,993 cc)
  {
    id: 'usa-duramax-30',
    brand: 'ISUZU',
    code: 'Chevrolet 3.0L Duramax I-6 (LM2)',
    series: 'CHEVY_DURAMAX',
    seriesTitle: 'Chevrolet ချက်ဗလက် ဇိမ်ခံ SUV (Silverado 1500 / Tahoe)',
    seriesTitleMm: 'ချက်ဗလက် Chevrolet ၃.၀ လီတာ ၆ လုံးထိုး (Silverado 1500 / Tahoe / Yukon)',
    name: '3.0L Inline-6 DOHC 24-Valve Turbo Diesel (Duramax LM2 / LZ0)',
    nameMm: '၃.၀ လီတာ ၆ လုံးထိုး ၂၄ ဗား (Chevrolet Silverado 1500, Tahoe, Suburban)',
    type: 'Inline-6 DOHC 24-Valve Variable Geometry Turbo Denso Common Rail Aluminum Block Diesel',
    typeMm: '၆ လုံးထိုး DOHC ၂၄ ဗား အလူမီနီယမ်ဘလောက် ဆိတ်ငြိမ်အဆင့်မြင့် ချက်ဗလက် ဇိမ်ခံဒီဇယ်',
    fuelSystem: 'Denso High-Pressure Common Rail System (2,500 bar / 36,250 psi)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် (2,500 bar)',
    displacementCc: 2993,
    boreStrokeMm: '84.0 mm × 90.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '15.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '277 – 305 PS @ 3,750 RPM',
    torqueOutput: '624 – 671 N·m @ 1,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Timing Chain + အောက်ဘက် အင်ဂျင်ဝိုင်ပန့် စိုစွတ်ခါးပတ်စနစ်)',
    commonVehicles: [
      'Chevrolet Silverado 1500 Duramax Diesel (လူကြိုက်များ 1/2-Ton ပစ်ကပ်)',
      'Chevrolet Tahoe / Suburban 3.0 Duramax ဇိမ်ခံ SUV ကြီးများ',
      'GMC Sierra 1500 AT4 / Denali 3.0L Diesel',
      'Cadillac Escalade 3.0L Duramax Turbo Diesel'
    ],
    commonVehiclesMm: 'ချက်ဗလက် Silverado 1500၊ Tahoe၊ Suburban၊ Cadillac Escalade Diesel',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'အလယ်မှစ၍ ၃၅ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'ဒုတိယအဆင့် ၇၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '30 + 110°', kgfCm: '306 + 110°', lbfFt: '22 + 110°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 100°', kgfCm: '255 + 100°', lbfFt: '18.4 + 100°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 15, kgfCm: 153, lbfFt: 11.1, notesMm: 'ဟီတာပလပ် (ချက်ပလပ်) တပ်ဆင်ကျပ်အား ၁၅ N·m' },
      { component: 'Crankshaft Balancer Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルト', nm: '150 + 90°', kgfCm: '1530 + 90°', lbfFt: '110 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 14 head bolts from center outward to 35 N·m', descriptionMm: 'ခေါင်းဘルト ၁၄ လုံးကို အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 70 N·m', descriptionMm: '၇၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '70 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 14,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft at TDC Cylinder 1 with locking tool.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို TDC ပင်ဖြင့် လော့ခတ်ပါ။',
      camshaft: 'Rear DOHC timing chain alignment marks match camshaft sprockets.',
      camshaftMm: 'အနောက်ဘက် တိုက်မင်ကြိုး အမှတ်သားများကို ကမ်ရှပ်စပရော့ကတ်နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Denso 2,500 bar high pressure pump timing.',
      pumpMm: 'Denso ဖိအားမြင့်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'Baby Duramax ဟု လူသိများပြီး အင်ဂျင်အနောက်ဘက်ရှိ အင်ဂျင်ဝိုင်ပန့် မောင်းနှင်သည့် Wet Belt ကို မိုင် ၁၅၀,၀၀၀ (ကီလို ၂ သိန်း ၄ သောင်း) တွင် လဲလှယ်ရန် GM က ညွှန်ကြားထားပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '250 MPa (36,250 psi)',
      notesMm: 'Denso Solenoid Common Rail'
    },
    fluids: {
      oilWithFilter: '6.6 L (7.0 Quarts)',
      oilWithoutFilter: '6.0 L',
      oilGrade: '0W-20 (dexosD Diesel Specification Only)',
      coolantCapacity: '11.0 L',
      fuelTankCapacity: '91 L (24 Gallons)'
    }
  },

  // 7. Chevrolet Silverado HD 6.6L V8 Duramax (L5P / LBZ) (6,619 cc)
  {
    id: 'usa-gm-duramax-66',
    brand: 'ISUZU',
    code: 'Chevrolet 6.6L Duramax V8 (L5P)',
    series: 'CHEVY_DURAMAX',
    seriesTitle: 'Chevrolet ချက်ဗလက် Heavy Duty (Silverado HD 6.6L V8)',
    seriesTitleMm: 'ချက်ဗလက် Chevrolet ၆.၆ လီတာ V8 (Silverado 2500/3500 HD)',
    name: '6.6L 90° V8 32-Valve Turbocharged Common Rail Diesel (Duramax L5P / LBZ)',
    nameMm: '၆.၆ လီတာ V8 ၃၂ ဗား တာဘို (Chevrolet Silverado 2500/3500 HD & GMC Sierra)',
    type: '90-degree V8 OHV 32-Valve Variable Geometry Turbo Denso Common Rail Heavy Duty Diesel',
    typeMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး OHV ၃၂ ဗား ချက်ဗလက် Heavy Duty တွဲဆွဲပစ်ကပ်ဘုရင်',
    fuelSystem: 'Denso High-Pressure Common Rail System (2,000 bar / 29,000 psi)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 6619,
    boreStrokeMm: '103.0 mm × 99.0 mm',
    cylinders: 8,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 2 - 7 - 8 - 4 - 5 - 6 - 3',
    powerOutput: '445 – 470 PS @ 2,800 RPM',
    torqueOutput: '1,234 – 1,322 N·m (975 lb-ft) @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Heavy Duty Helical Gear Train)',
    commonVehicles: [
      'Chevrolet Silverado 2500 HD / 3500 HD Dual Rear Wheel (ချက်ဗလက် အကြီးစား တွဲဆွဲကားကြီးများ)',
      'GMC Sierra 2500 HD / 3500 HD Denali',
      'Chevrolet Silverado 4500 HD / 5500 HD Medium Duty Commercial'
    ],
    commonVehiclesMm: 'ချက်ဗလက် Silverado HD၊ GMC Sierra HD တွဲဆွဲပစ်ကပ်ကြီးများ၊ စီးပွားရေးသုံး ကုန်တင်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.30 mm (0.012 in)',
      exhaustColdMm: '0.30 mm (0.012 in)',
      methodMm: 'Feeler Gauge & Adjusting Screw (အေးချိန် Intake 0.30 mm / Exhaust 0.30 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 52, kgfCm: 530, lbfFt: 38.3, notesMm: 'အလယ်မှစ၍ ၅၂ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 108, kgfCm: 1102, lbfFt: 79.7, notesMm: 'ဒုတိယအဆင့် ၁၀၈ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+60°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'နောက်ထပ် ထောင့် ၆၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts (Inner)', componentMm: 'ခရိုင်းကပ် အတွင်းဘルトများ', nm: '148 + 45°', kgfCm: '1509 + 45°', lbfFt: '109 + 45°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '73 + 45°', kgfCm: '744 + 45°', lbfFt: '54 + 45°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 18, kgfCm: 184, lbfFt: 13.3, notesMm: 'ဟီတာပလပ် (ချက်ပလပ်) တပ်ဆင်ကျပ်အား ၁၈ N·m' },
      { component: 'Crankshaft Harmonic Balancer', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '350 + 90°', kgfCm: '3570 + 90°', lbfFt: '258 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 bolts per bank in spiral sequence to 52 N·m', descriptionMm: 'ဘဏ်တစ်ခုစီရှိ ဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၅၂ N·m ကျပ်ပါ', torque: '52 N·m' },
      { step: 2, description: 'Torque to 108 N·m', descriptionMm: '၁၀၈ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '108 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 60° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၆၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+60°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear mark with camshaft gear mark at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ကမ်ရှပ်ဂီယာ အမှတ်နှင့် 0° TDC ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Denso high-pressure pump gear timing.',
      pumpMm: 'Denso ဆီပန့်ဂီယာ အမှတ် ချိန်ညှိပါ။',
      notesMm: 'Duramax V8 သည် GM ချက်ဗလက် နှင့် Isuzu တို့ ပူးပေါင်းတည်ဆောက်ခဲ့ခြင်းဖြစ်ပြီး မီးပေါက်စဉ် (1-2-7-8-4-5-6-3) အတိုင်း အလုပ်လုပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 40 MPa',
      pressureMax: '200 MPa (29,000 psi)',
      notesMm: 'Denso Common Rail HP4 စနစ်'
    },
    fluids: {
      oilWithFilter: '9.5 L (10 Quarts)',
      oilWithoutFilter: '9.0 L',
      oilGrade: '15W-40 / 5W-40 (Dexos 2 / API CK-4 Heavy Duty)',
      coolantCapacity: '23.5 L',
      fuelTankCapacity: '136 L (36 Gallons)'
    }
  },

  // ==========================================
  // [အုပ်စု ၃] FORD RANGER & POWER STROKE (မြန်မာပြည်သုံး & အမေရိကန် အကြီးစားများ)
  // ==========================================

  // 7.1 Ford Ranger & Everest 2.2L Duratorq TDCi (P4AT - မြန်မာပြည်အပေါဆုံး Ranger)
  {
    id: 'usa-ford-ranger-22',
    brand: 'ISUZU',
    code: 'Ford Ranger 2.2L TDCi (P4AT)',
    series: 'FORD_RANGER',
    seriesTitle: 'Ford Ranger & Everest (2.2L / 3.2L / 2.0L)',
    seriesTitleMm: 'Ford Ranger & Everest 4WD (မြန်မာပြည်အသုံးများဆုံး)',
    name: '2.2L Inline-4 DOHC 16-Valve Duratorq TDCi Turbo Diesel (Ranger / Everest)',
    nameMm: '၂.၂ လီတာ ၄ လုံးထိုး ၁၆ ဗား Duratorq TDCi (Ford Ranger & Everest 4WD)',
    type: 'Inline-4 DOHC 16-Valve Variable Geometry Turbo Continental Common Rail Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တိုက်မင်ကြိုးသုံး Continental Piezo ကွန်မန်ရေးလ်',
    fuelSystem: 'Continental / Siemens Piezo Common Rail System (1,800 bar)',
    fuelSystemMm: 'Continental / Siemens Piezo ဖိအားမြင့် ကွန်မန်ရေးလ် (1,800 bar)',
    displacementCc: 2198,
    boreStrokeMm: '86.0 mm × 94.6 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '150 – 160 PS @ 3,700 RPM',
    torqueOutput: '375 – 385 N·m @ 1,500 – 2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Duplex Timing Chain with Hydraulic Tensioner)',
    commonVehicles: [
      'Ford Ranger T6 2.2L XLS / XLT / Wildtrak (မြန်မာပြည် အပေါဆုံး Ford ပစ်ကပ်)',
      'Ford Everest 2.2L Titanium / Trend 4WD (7-Seater SUV)',
      'Mazda BT-50 2.2L Pro Pickup'
    ],
    commonVehiclesMm: 'Ford Ranger 2.2 (T6 XLS/XLT), Ford Everest 2.2 4WD SUV, Mazda BT-50 2.2',
    valveClearance: {
      intakeColdMm: 'Hydraulic Lash Adjusters (HLA)',
      exhaustColdMm: 'Hydraulic Lash Adjusters (HLA)',
      methodMm: 'Hydraulic Roller Finger Follower (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 20, kgfCm: 204, lbfFt: 15, notesMm: 'အလယ်မှစ၍ ၂၀ N·m ကနဦး ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: 'ဒုတိယအဆင့် ၄၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '15 + 45 + 120°', kgfCm: '153 + 459 + 120°', lbfFt: '11 + 33 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '20 + 45 + 90°', kgfCm: '204 + 459 + 90°', lbfFt: '15 + 33 + 90°' },
      { component: 'Crankshaft Pulley Damper Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 80°', kgfCm: '1020 + 80°', lbfFt: '74 + 80°' },
      { component: 'Camshaft Sprocket Bolts', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルトများ', nm: 35, kgfCm: 357, lbfFt: 25.8 },
      { component: 'Piezo Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト (Continental Clamp)', nm: '6 + 180°', kgfCm: '61 + 180°', lbfFt: '4.4 + 180°', notesMm: '၆ N·m ကျပ်ပြီး ၁၈၀° လှည့်ပါ (ကြေးဝါဆီးလ် အသစ်လဲရန်)' },
      { component: 'Common Rail High Pressure Pipe Nuts', componentMm: 'ကွန်မန်ရေးလ် ပိုက်နတ်များ', nm: 25, kgfCm: 255, lbfFt: 18.5 },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 15, kgfCm: 153, lbfFt: 11 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 34, kgfCm: 347, lbfFt: 25 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 main head bolts in spiral order from center to 20 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၂၀ N·m ကျပ်ပါ', torque: '20 N·m' },
      { step: 2, description: 'Torque all bolts to 40 N·m in sequence', descriptionMm: 'ခေါင်းဘルトအားလုံးကို ၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '40 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Insert crankshaft TDC timing locking pin into the cylinder block/flywheel.',
      crankshaftMm: 'ခရိုင်းရှပ် 0° TDC နေရာတွင် ဖလိုင်းဝီးလ်/ဘလောက်တုံးထဲ တိုက်မင်လော့ကင်းပင် (Pin) ထိုးထည့်ပါ။',
      camshaft: 'Insert 6mm camshaft locking pins through camshaft sprockets into the cylinder head.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် ၂ ခုလုံးထဲ ၆ မီလီ လော့ကင်းပင် (Pins) ထိုး၍ ခေါင်းပေါက်နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel pump alignment.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် စပရော့ကတ် အမှတ် ချိန်ညှိပါ။',
      notesMm: 'Continental Piezo နော်ဇယ်ဖြစ်၍ စပါယ်ရာပစ္စည်း ဈေးကြီးသလို ဆီသန့်စင်မှု အထူးလိုအပ်ပါသည်။ Return ပိုက်လိုင်းမှ O-ring များ ပျက်စီးပါက လေခိုပြီး စက်နိုးရခက်တတ်ပါသည်။ မီးပေါက်စဉ် 1-3-4-2 ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '25 – 30 MPa (250 – 300 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Continental / Siemens Piezo Injectors (0.2 – 0.4 Ohm). နော်ဇယ်လဲလှယ်ပါက 16-Digit IQA/IMA Code ကို စကင်နာဖြင့် ကွန်ပျူတာထဲ သင်ပေးရန် (Coding) လိုအပ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '8.6 L',
      oilWithoutFilter: '8.0 L',
      oilGrade: '5W-30 (Ford WSS-M2C913-C / WSS-M2C913-D)',
      coolantCapacity: '11.5 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 7.2 Ford Ranger & Everest 3.2L Wildtrak (Puma P5AT - ၅ လုံးထိုး 5-Cylinder!)
  {
    id: 'usa-ford-ranger-32',
    brand: 'ISUZU',
    code: 'Ford Ranger 3.2L Wildtrak (P5AT)',
    series: 'FORD_RANGER',
    seriesTitle: 'Ford Ranger & Everest (2.2L / 3.2L / 2.0L)',
    seriesTitleMm: 'Ford Ranger & Everest 4WD (မြန်မာပြည်အသုံးများဆုံး)',
    name: '3.2L Inline-5 DOHC 20-Valve Duratorq TDCi Wildtrak Turbo Diesel (Ranger / Everest)',
    nameMm: '၃.၂ လီတာ ၅ လုံးထိုး ၂၀ ဗား Wildtrak (Ford Ranger Wildtrak 3.2 & Everest 4WD)',
    type: 'Inline-5 DOHC 20-Valve Variable Nozzle Turbo Intercooler Continental Common Rail Diesel',
    typeMm: 'ဆလင်ဒါ ၅ လုံးထိုး DOHC ၂၀ ဗား တိုက်မင်ကြိုးသုံး Wildtrak အကြမ်းစားကြီး',
    fuelSystem: 'Continental / Siemens Piezo High-Pressure Common Rail (1,800 bar)',
    fuelSystemMm: 'Continental / Siemens Piezo ဖိအားမြင့် ကွန်မန်ရေးလ် (1,800 bar)',
    displacementCc: 3198,
    boreStrokeMm: '89.9 mm × 100.76 mm',
    cylinders: 5,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 2 - 4 - 5 - 3 (၅ လုံးထိုး ထူးခြားသော မီးပေါက်စဉ်!)',
    powerOutput: '200 PS (147 kW) @ 3,000 RPM',
    torqueOutput: '470 N·m @ 1,500 – 2,750 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Duplex Roller Timing Chain with Balance Shaft)',
    commonVehicles: [
      'Ford Ranger Wildtrak 3.2L 4x4 (မြန်မာပြည် လူကြိုက်အလွန်များ Wildtrak ကြီး)',
      'Ford Everest 3.2L Titanium Plus 4WD (ဇိမ်ခံ အဆင့်မြင့် 4WD SUV)',
      'Mazda BT-50 Pro 3.2L 4x4 Pickup'
    ],
    commonVehiclesMm: 'Ford Ranger Wildtrak 3.2 4WD၊ Ford Everest 3.2 Titanium SUV၊ Mazda BT-50 3.2',
    valveClearance: {
      intakeColdMm: 'Hydraulic Lash Adjusters (HLA)',
      exhaustColdMm: 'Hydraulic Lash Adjusters (HLA)',
      methodMm: 'Hydraulic Roller Finger Follower (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၁)', nm: 20, kgfCm: 204, lbfFt: 15, notesMm: 'အလယ်မှစ၍ ၂၀ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၂)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: 'ဒုတိယအဆင့် ၄၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Cylinder Head Front Sub Bolts (M8)', componentMm: 'ခေါင်းဘルトသေး (ရှေ့ခြမ်း M8)', nm: 23, kgfCm: 235, lbfFt: 17, notesMm: 'ခေါင်းရှေ့ M8 မူလီသေးများ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '15 + 45 + 120°', kgfCm: '153 + 459 + 120°', lbfFt: '11 + 33 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '20 + 45 + 90°', kgfCm: '204 + 459 + 90°', lbfFt: '15 + 33 + 90°' },
      { component: 'Crankshaft Pulley Damper Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 80°', kgfCm: '1020 + 80°', lbfFt: '74 + 80°' },
      { component: 'Piezo Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト (Wildtrak Clamp)', nm: '6 + 180°', kgfCm: '61 + 180°', lbfFt: '4.4 + 180°', notesMm: '၆ N·m ကျပ်ပြီး ၁၈၀° လှည့်ပါ' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 15, kgfCm: 153, lbfFt: 11 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 34, kgfCm: 347, lbfFt: 25 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 12 main head bolts from center outward in spiral sequence to 20 N·m', descriptionMm: 'ခေါင်းဘルトကြီး ၁၂ လုံးကို အလယ်မှစ၍ ၂၀ N·m ကျပ်ပါ', torque: '20 N·m' },
      { step: 2, description: 'Torque all main bolts to 40 N·m', descriptionMm: '၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '40 N·m' },
      { step: 3, description: 'Turn each main bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each main bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' },
      { step: 5, description: 'Tighten front M8 sub bolts to 23 N·m', descriptionMm: 'ရှေ့ဘက် M8 မူလီသေးများကို ၂၃ N·m နောက်ဆုံးကျပ်ပါ', torque: '23 N·m' }
    ],
    headBoltsCount: 14,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft at TDC using flywheel timing peg tool.',
      crankshaftMm: 'ခရိုင်းရှပ် 0° TDC နေရာတွင် ဖလိုင်းဝီးလ် အပေါက်ထဲ လော့ကင်းပင် (Peg) ထိုးထည့်ပါ။',
      camshaft: 'Insert alignment pins into camshaft sprockets.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အပေါက်များထဲ လော့ကင်းပင် ထိုး၍ အမှတ်တိုက်ပါ။',
      pump: 'High pressure fuel pump chain synchronization.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: '၅ လုံးထိုး အင်ဂျင်ဖြစ်သဖြင့် မီးပေါက်စဉ်မှာ (1 - 2 - 4 - 5 - 3) ဖြစ်ပါသည်။ တုန်ခါမှုထိန်း Balance shaft တပ်ဆင်ရာတွင် အမှတ်မလွဲစေရန် အထူးဂရုပြုရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '25 – 35 MPa (250 – 350 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Continental Piezo နော်ဇယ် ၅ လုံးသုံးထားပြီး ဆီဖိအားမြင့် စနစ်ဖြစ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '9.8 L',
      oilWithoutFilter: '9.0 L',
      oilGrade: '5W-30 (Ford WSS-M2C913-C / WSS-M2C913-D)',
      coolantCapacity: '13.0 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 7.3 Ford Ranger Raptor & New Everest 2.0L Bi-Turbo EcoBlue (Panther)
  {
    id: 'usa-ford-ranger-20-biturbo',
    brand: 'ISUZU',
    code: 'Ford 2.0L Bi-Turbo Raptor (Panther)',
    series: 'FORD_RANGER',
    seriesTitle: 'Ford Ranger & Everest (2.2L / 3.2L / 2.0L)',
    seriesTitleMm: 'Ford Ranger & Everest 4WD (မြန်မာပြည်အသုံးများဆုံး)',
    name: '2.0L Inline-4 DOHC 16-Valve EcoBlue Sequential Bi-Turbo Clean Diesel (Ranger Raptor)',
    nameMm: '၂.၀ လီတာ ၄ လုံးထိုး Bi-Turbo နှစ်ထပ်တာဘို EcoBlue (Ford Ranger Raptor & New Everest)',
    type: 'Inline-4 DOHC 16-Valve Sequential Bi-Turbocharged Intercooler Bosch Common Rail Clean Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား နှစ်ထပ်တာဘို (Bi-Turbo) ၂၁၃ မြင်းကောင်ရေ Raptor ဒီဇယ်သစ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (2,200 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,200 bar)',
    displacementCc: 1996,
    boreStrokeMm: '84.01 mm × 90.03 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '213 PS (157 kW) @ 3,750 RPM',
    torqueOutput: '500 N·m @ 1,750 – 2,000 RPM',
    timingType: 'Belt',
    timingTypeMm: 'အင်ဂျင်ဝိုင်စိမ်ခါးပတ် (Belt-in-Oil BIO System with Oil Pump Belt)',
    commonVehicles: [
      'Ford Ranger Raptor 2.0L Bi-Turbo 4x4 (မြန်မာပြည် ရေပန်းအစားဆုံး Raptor ဘုရင်)',
      'All New Ford Ranger Wildtrak 2.0L Bi-Turbo 10-Speed Auto',
      'All New Ford Everest 2.0L Bi-Turbo Titanium 4WD'
    ],
    commonVehiclesMm: 'Ford Ranger Raptor 2.0 Bi-Turbo၊ All New Wildtrak 2.0၊ All New Everest 4WD',
    valveClearance: {
      intakeColdMm: 'Hydraulic Roller Finger Followers',
      exhaustColdMm: 'Hydraulic Roller Finger Followers',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကနဦး ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 65, kgfCm: 663, lbfFt: 48, notesMm: 'ဒုတိယအဆင့် ၆၅ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '20 + 70°', kgfCm: '204 + 70°', lbfFt: '14.8 + 70°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '200 + 90°', kgfCm: '2040 + 90°', lbfFt: '148 + 90°' },
      { component: 'Common Rail Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト (Raptor Clamp)', nm: '8 + 180°', kgfCm: '82 + 180°', lbfFt: '5.9 + 180°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 12, kgfCm: 122, lbfFt: 8.8 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 28, kgfCm: 285, lbfFt: 20.6 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 10 bolts in spiral sequence from center to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque all bolts to 65 N·m', descriptionMm: '၆၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '65 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft locking tool at TDC Cylinder 1.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို သီးသန့် လော့ကင်းတူးလ်ဖြင့် 0° TDC တွင် လော့ခတ်ပါ။',
      camshaft: 'Insert camshaft locking bridge/pins into camshaft slots.',
      camshaftMm: 'ကမ်ရှပ် အထစ်များထဲ သီးသန့် ကမ်ရှပ်လော့ကင်းတူးလ် ထိုးထည့်ပါ။',
      pump: 'High pressure pump driven by belt-in-oil system.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့်ကို အင်ဂျင်ဝိုင်စိမ် ခါးပတ်ဖြင့် မောင်းနှင်ပါသည်။',
      notesMm: '🚨 အထူးသတိပြုရန် (Belt-in-Oil System): 2.0 Panther အင်ဂျင်သည် တိုက်မင်ခါးပတ်နှင့် ဝိုင်ပန့်ခါးပတ်ကို အင်ဂျင်ဝိုင်ထဲတွင် စိမ်၍ အလုပ်လုပ်သော (Belt-in-Oil) စနစ်ဖြစ်ပါသည်။ သတ်မှတ်ထားသော Ford WSS-M2C950-A (0W-30) ဆီစစ်စစ်ကိုသာ သုံးရပါမည်။ သာမန်အင်ဂျင်ဝိုင် မှားထည့်ပါက ခါးပတ်ကြိုး အရည်ပျော်/စားပြီး ဆီစစ်ကာ (Oil pickup strainer) ပိတ်ကာ အင်ဂျင်ဝိုင်ပြတ်ပြီး အင်ဂျင်ဂျမ်း (Seize) တတ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 40 MPa (300 – 400 bar)',
      pressureMax: '220 MPa (2,200 bar)',
      notesMm: 'Bosch Piezo Common Rail စနစ်ဖြစ်ပြီး အလွန်မြင့်မားသော ၂,၂၀၀ bar ဖိအားဖြင့် အလုပ်လုပ်ပါသည်။'
    },
    fluids: {
      oilWithFilter: '7.2 L',
      oilWithoutFilter: '6.5 L',
      oilGrade: '0W-30 (Ford WSS-M2C950-A အင်ဂျင်ဝိုင်စစ်စစ်သာ သုံးရန် မဖြစ်မနေ လိုအပ်ပါသည်)',
      coolantCapacity: '10.5 L',
      fuelTankCapacity: '80 L'
    }
  },

  // ==========================================
  // [အုပ်စု ၄] FORD POWER STROKE V8 (အမေရိကန် အကြီးစား တွဲဆွဲကားကြီးများ)
  // ==========================================

  // 8. Ford 6.7L Power Stroke V8 (Scorpion) (6,651 cc)
  {
    id: 'usa-ford-powerstroke-67',
    brand: 'ISUZU',
    code: 'Ford 6.7L Power Stroke V8 Turbo',
    series: 'POWER_STROKE_V8',
    seriesTitle: 'Ford Super Duty Heavy Commercial (Scorpion 6.7L V8)',
    seriesTitleMm: 'Ford Power Stroke ၆.၇ လီတာ V8 (F-250 / F-350 / F-450)',
    name: '6.7L 90° V8 32-Valve Power Stroke Turbocharged Diesel (Scorpion V8)',
    nameMm: '၆.၇ လီတာ V8 ၃၂ ဗား Power Stroke တာဘို (Ford F-250, F-350, F-450 Super Duty)',
    type: '90-degree V8 OHV 32-Valve Inboard Exhaust Reverse-Flow Turbocharged Bosch Common Rail Diesel',
    typeMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး OHV ၃၂ ဗား Inboard Turbo စနစ် အမေရိကန် Ford တွဲဆွဲဘုရင်',
    fuelSystem: 'Bosch CP4.2 High-Pressure Common Rail System (2,000 bar / 29,000 psi)',
    fuelSystemMm: 'Bosch CP4.2 ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 6651,
    boreStrokeMm: '99.0 mm × 108.0 mm',
    cylinders: 8,
    valvesPerCyl: 4,
    compressionRatio: '16.2:1',
    firingOrder: '1 - 3 - 7 - 2 - 6 - 5 - 4 - 8',
    powerOutput: '475 – 500 PS @ 2,600 RPM (High Output Version)',
    torqueOutput: '1,424 – 1,627 N·m (1,200 lb-ft) @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Heavy Duty Front Crankshaft & Camshaft Gear Train)',
    commonVehicles: [
      'Ford F-250 Super Duty (အကြမ်းခံ အမေရိကန် ပစ်ကပ်ကြီးများ)',
      'Ford F-350 Super Duty Dually (ဘီး ၄ ဘီးစုံ တွဲဆွဲခေါင်းကြီးများ)',
      'Ford F-450 / F-550 Commercial Chassis Cab'
    ],
    commonVehiclesMm: 'Ford F-250၊ F-350 Super Duty တွဲဆွဲပစ်ကပ်ကြီးများ၊ F-450/F-550 စီးပွားရေးယာဉ်ကြီးများ',
    valveClearance: {
      intakeColdMm: 'Hydraulic Roller Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Roller Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 68, kgfCm: 693, lbfFt: 50, notesMm: 'အလယ်မှစ၍ ၆၈ N·m (50 ft-lb) စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 122, kgfCm: 1244, lbfFt: 90, notesMm: 'ဒုတိယအဆင့် ၁၂၂ N·m (90 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '130 + 90°', kgfCm: '1326 + 90°', lbfFt: '96 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '70 + 90°', kgfCm: '714 + 90°', lbfFt: '51.6 + 90°' },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 15, kgfCm: 153, lbfFt: 11.1 },
      { component: 'Crankshaft Vibration Damper', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '287', kgfCm: '2927', lbfFt: '212' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 26, kgfCm: 265, lbfFt: 19 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 head bolts per cylinder head in spiral pattern to 68 N·m (50 ft-lb)', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၆၈ N·m ကျပ်ပါ', torque: '68 N·m' },
      { step: 2, description: 'Torque to 122 N·m (90 ft-lb)', descriptionMm: '၁၂၂ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '122 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear dot with camshaft gear double dots at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ကမ်ရှပ်ဂီယာ အမှတ်နှစ်စက်ကြား 0° TDC တွင် ချိန်ပါ။',
      camshaft: 'Single central camshaft in engine block.',
      camshaftMm: 'အင်ဂျင်ဘလောက် အလယ်ဗဟိုရှိ ကမ်ရှပ်ဂီယာ အမှတ်တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel pump timed to camshaft.',
      pumpMm: 'Bosch CP4.2 ဆီပန့်ဂီယာ အမှတ် ချိန်ညှိပါ။',
      notesMm: 'Scorpion ဟု ခေါ်ဆိုကြပြီး Exhaust Manifold နှင့် တာဘိုကို အင်ဂျင်အလယ်ဗဟို (V-Valley) ထဲတွင် ထည့်သွင်းထားသော Reverse-Flow ဒီဇိုင်းဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-3-7-2-6-5-4-8) ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '200 MPa (29,000 psi)',
      notesMm: 'Bosch Piezo Common Rail CP4.2'
    },
    fluids: {
      oilWithFilter: '12.3 L (13 Quarts)',
      oilWithoutFilter: '11.5 L',
      oilGrade: '10W-30 / 5W-40 (Ford WSS-M2C171-F1 Specification)',
      coolantCapacity: '27.9 L',
      fuelTankCapacity: '128 L – 181 L (34 – 48 Gallons)'
    }
  },

  // 9. Ford 7.3L Power Stroke V8 HEUI (T444E) (7,274 cc)
  {
    id: 'usa-ford-powerstroke-73',
    brand: 'ISUZU',
    code: 'Ford 7.3L Power Stroke V8 (T444E)',
    series: 'POWER_STROKE_V8',
    seriesTitle: 'Ford Bulletproof Legend (7.3L HEUI V8)',
    seriesTitleMm: 'Ford ဒဏ္ဍာရီလာ ၇.၃ လီတာ V8 HEUI (F-250 / F-350 / Excursion)',
    name: '7.3L 90° V8 16-Valve Turbocharged HEUI Diesel (Navistar T444E)',
    nameMm: '၇.၃ လီတာ V8 ၁၆ ဗား HEUI တာဘို (Ford F-250/F-350, Excursion, E-350 Van)',
    type: '90-degree V8 OHV 16-Valve Turbocharged Intercooler HEUI Hydraulic Electronic Unit Injector Diesel',
    typeMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး OHV ၁၆ ဗား အင်ဂျင်ဝိုင်ဖိအားသုံး HEUI နော်ဇယ် အမေရိကန် ဒဏ္ဍာရီ V8',
    fuelSystem: 'HEUI Hydraulic Electronic Unit Injector (21,000 psi injection via HPOP High Pressure Oil Pump)',
    fuelSystemMm: 'HEUI အင်ဂျင်ဝိုင်ဖိအားမြင့် နော်ဇယ်စနစ် (HPOP 3,000 psi)',
    displacementCc: 7274,
    boreStrokeMm: '104.4 mm × 106.2 mm',
    cylinders: 8,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 2 - 7 - 3 - 4 - 5 - 6 - 8',
    powerOutput: '215 – 275 PS @ 2,800 RPM',
    torqueOutput: '576 – 712 N·m (525 lb-ft) @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Heavy Duty Cast Iron Gear Train)',
    commonVehicles: [
      'Ford F-250 / F-350 Super Duty (1994–2003 Million-Mile Legend)',
      'Ford Excursion 7.3L 4WD (အကြီးဆုံး SUV ဘုရင်)',
      'Ford E-350 Econoline Super Duty Van',
      'International 3800 School Bus'
    ],
    commonVehiclesMm: 'Ford F-250/F-350 ဒဏ္ဍာရီ V8၊ Ford Excursion SUV ကြီး၊ ကျောင်းကားကြီးများ',
    valveClearance: {
      intakeColdMm: 'Hydraulic Roller Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Roller Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 88, kgfCm: 897, lbfFt: 65, notesMm: 'အလယ်မှစ၍ ၈၈ N·m (65 ft-lb) စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 115, kgfCm: 1173, lbfFt: 85, notesMm: 'ဒုတိယအဆင့် ၁၁၅ N·m (85 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 142, kgfCm: 1448, lbfFt: 105, notesMm: 'တတိယအဆင့် ၁၄၂ N·m (105 ft-lb) သို့ တိုးမြှင့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 142, kgfCm: 1448, lbfFt: 105 },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: 68, kgfCm: 693, lbfFt: 50 },
      { component: 'Glow Plugs', componentMm: 'ဟီတာပလပ် (ချက်ပလပ် / Glow Plugs)', nm: 20, kgfCm: 204, lbfFt: 14.7, notesMm: 'ဟီတာပလပ် (ချက်ပလပ်) တပ်ဆင်ကျပ်အား ၂၀ N·m' },
      { component: 'Crankshaft Vibration Damper', componentMm: 'ခရိုင်းပူးလီး ဘルト', nm: 287, kgfCm: 2927, lbfFt: 212 },
      { component: 'Injector Hold-Down Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 16, kgfCm: 163, lbfFt: 12 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 68, kgfCm: 693, lbfFt: 50 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 bolts per head in sequence to 88 N·m (65 ft-lb)', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၈၈ N·m ကျပ်ပါ', torque: '88 N·m' },
      { step: 2, description: 'Torque to 115 N·m (85 ft-lb)', descriptionMm: '၁၁၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '115 N·m' },
      { step: 3, description: 'Torque to 142 N·m (105 ft-lb)', descriptionMm: '၁၄၂ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '142 N·m' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear dot with camshaft gear dot at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ကမ်ရှပ်ဂီယာ အမှတ်နှင့် 0° TDC တိုက်ဆိုင်ပါ။',
      camshaft: 'Center single camshaft in cylinder block.',
      camshaftMm: 'အင်ဂျင်ဘလောက် အလယ် ကမ်ရှပ်ဂီယာ အမှတ်တိုက်ပါ။',
      pump: 'HPOP High-Pressure Oil Pump driven by camshaft gear.',
      pumpMm: 'ဖိအားမြင့် အင်ဂျင်ဝိုင်ပန့် (HPOP) ဂီယာ ချိန်ညှိပါ။',
      notesMm: 'Ford ၏ မိုင် ၁ သန်းကျော် အကြမ်းခံဆုံး Bulletproof အင်ဂျင်အဖြစ် နာမည်ကျော်ပြီး HEUI နော်ဇယ်ကို အင်ဂျင်ဝိုင်ဖိအားဖြင့် ဖွင့်သောကြောင့် အင်ဂျင်ဝိုင် သန့်ရှင်းမှု အထူးအရေးကြီးပါသည်။ မီးပေါက်စဉ် (1-2-7-3-4-5-6-8) ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'HPOP: 500 – 600 psi (Fuel Injection: ~3,500 psi)',
      pressureMax: 'HPOP: 3,000 psi (Fuel Injection: ~21,000 psi)',
      notesMm: 'HEUI Hydraulic Electronic Unit Injector'
    },
    fluids: {
      oilWithFilter: '14.2 L (15 Quarts)',
      oilWithoutFilter: '13.2 L',
      oilGrade: '15W-40 (API CK-4 / CI-4 Heavy Duty)',
      coolantCapacity: '31.0 L',
      fuelTankCapacity: '144 L (38 Gallons)'
    }
  },

  // ==========================================
  // [အုပ်စု ၄] DETROIT DIESEL (အသေးမှ အကြီး အတွဲလိုက်)
  // ==========================================

  // 10. Detroit Diesel Series 60 (12,700 cc / 12.7L DDEC)
  {
    id: 'usa-detroit-series60',
    brand: 'ISUZU',
    code: 'Detroit Diesel Series 60 (12.7L DDEC)',
    series: 'DETROIT_DIESEL',
    seriesTitle: 'Detroit Diesel Highway King (Series 60 12.7L)',
    seriesTitleMm: 'Detroit Diesel Series 60 (၁၂.၇ လီတာ DDEC ခေါင်းရှည်တွဲကားဘုရင်)',
    name: '12.7L Inline-6 OHC 24-Valve Turbocharged DDEC Diesel (Detroit Series 60)',
    nameMm: '၁၂.၇ လီတာ ၆ လုံးထိုး OHC ၂၄ ဗား (Freightliner, Peterbilt, Kenworth တွဲကားကြီးများ)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler DDEC Electronic Unit Injector Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား DDEC လျှပ်စစ်နော်ဇယ် အမေရိကန် အဝေးပြေးလမ်းမများ၏ အကြမ်းဆုံးတွဲကားဘုရင်',
    fuelSystem: 'DDEC Electronic Unit Injector (EUI up to 1,800 bar)',
    fuelSystemMm: 'DDEC ဆလင်ဒါတစ်လုံးချင်း သီးခြားယူနစ်နော်ဇယ်စနစ် (1,800 bar)',
    displacementCc: 12700,
    boreStrokeMm: '130.0 mm × 160.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '430 – 500 PS @ 1,800–2,100 RPM',
    torqueOutput: '1,966 – 2,237 N·m (1,650 lb-ft) @ 1,200 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Heavy Duty Helical Gear Train - ရှေ့ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Freightliner Classic XL / FLD120 (အမေရိကန် ခေါင်းရှည်တွဲကားကြီးများ)',
      'Freightliner Century Class / Columbia Trailer',
      'Peterbilt 379 / Kenworth W900 Classic Tractor',
      'MCI / Prevost Luxury Highway Motorcoaches (အဝေးပြေးဘတ်စ်ကြီးများ)'
    ],
    commonVehiclesMm: 'Freightliner Classic XL ခေါင်းရှည်တွဲကားကြီးများ၊ Century Class၊ Peterbilt 379၊ အဝေးပြေးဘတ်စ်ကြီးများ',
    valveClearance: {
      intakeColdMm: '0.20 mm (0.008 in)',
      exhaustColdMm: '0.51 mm (0.020 in) / Jake Brake: 0.51 mm (0.020 in)',
      methodMm: 'Feeler Gauge & Adjusting Screw (အေးချိန် In 0.20 mm / Ex 0.51 mm - Jake Brake 0.51 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 298, kgfCm: 3039, lbfFt: 220, notesMm: 'အလယ်မှစ၍ ၂၉၈ N·m (220 ft-lb) ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 470, kgfCm: 4794, lbfFt: 347 },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: 186, kgfCm: 1897, lbfFt: 137 },
      { component: 'Crankshaft Pulley Bolts', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: 244, kgfCm: 2488, lbfFt: 180 },
      { component: 'EUI Injector Hold-Down Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 55, kgfCm: 561, lbfFt: 40.5 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 61, kgfCm: 622, lbfFt: 45 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 38 bolts from center outward to 298 N·m (220 ft-lb)', descriptionMm: 'ခေါင်းဘルト ၃၈ လုံးကို အလယ်မှစ၍ ၂၉၈ N·m ကျပ်ပါ', torque: '298 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 38,
    timingMarksGuide: {
      crankshaft: 'Insert timing pin into flywheel hole at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်ထဲ တိုက်မင်ပင်ထိုး၍ No.1 TDC ချိန်ပါ။',
      camshaft: 'Align camshaft gear timing mark with thrust plate mark.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ်ကို သရပ်စ်ပလိတ် အမှတ်နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'DDEC unit injector height set with 78.2 mm gauge tool.',
      pumpMm: 'DDEC နော်ဇယ် အမြင့်ကို ၇၈.၂ မမ ဂိတ်တူးလ်ဖြင့် ချိန်ညှိပါ။',
      notesMm: 'အမေရိကန် သမိုင်းတွင် အအောင်မြင်ဆုံးနှင့် အကြမ်းဆုံး တွဲကားအင်ဂျင်ဖြစ်ပြီး မီးပေါက်စဉ် (1-5-3-6-2-4) အတိုင်း အလုပ်လုပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 35 MPa',
      pressureMax: '180 MPa (DDEC EUI)',
      notesMm: 'Detroit Diesel DDEC System'
    },
    fluids: {
      oilWithFilter: '38.0 L (10 Gallons)',
      oilWithoutFilter: '34.0 L',
      oilGrade: '15W-40 (Power Guard / API CK-4 Heavy Duty)',
      coolantCapacity: '45.0 L',
      fuelTankCapacity: '600 L / 1,000 L'
    }
  },

  // 11. Detroit Diesel DD15 (14,800 cc / 14.8L Cascadia)
  {
    id: 'usa-detroit-dd15',
    brand: 'ISUZU',
    code: 'Detroit Diesel DD15 (14.8L Cascadia)',
    series: 'DETROIT_DIESEL',
    seriesTitle: 'Detroit Modern Highway King (DD15 14.8L)',
    seriesTitleMm: 'Detroit Diesel DD15 (၁၄.၈ လီတာ Freightliner Cascadia တွဲကားဘုရင်)',
    name: '14.8L Inline-6 DOHC 24-Valve ACRS Common Rail Diesel (Detroit DD15)',
    nameMm: '၁၄.၈ လီတာ ၆ လုံးထိုး DOHC ၂၄ ဗား (Freightliner Cascadia, Western Star 49X/57X)',
    type: 'Inline-6 DOHC 24-Valve Turbocharged Intercooler ACRS Amplified Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး DOHC ၂၄ ဗား ကွန်ပိုစစ်ကမ်ရှပ် ဖိအားမြှင့် ACRS ကွန်မန်ရေးလ် တွဲကားဘုရင်',
    fuelSystem: 'ACRS Amplified Common Rail System (up to 2,500 bar / 36,000 psi)',
    fuelSystemMm: 'ACRS ဖိအားမြှင့် ကွန်မန်ရေးလ် စနစ် (2,500 bar)',
    displacementCc: 14800,
    boreStrokeMm: '139.0 mm × 163.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.4:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '400 – 505 PS @ 1,625 RPM',
    torqueOutput: '2,102 – 2,373 N·m (1,750 lb-ft) @ 975 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Precision Helical Gear Train - အနောက်ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Freightliner Cascadia Evolution Trailer (အမေရိကန် လမ်းမများ၏ အရောင်းရဆုံး တွဲကားကြီးများ)',
      'Western Star 49X / 57X Severe Duty & Highway Tractor',
      'Freightliner 122SD Severe Duty Heavy Hauler'
    ],
    commonVehiclesMm: 'Freightliner Cascadia ဆိပ်ကမ်းဆွဲ တွဲကားကြီးများ၊ Western Star 49X၊ 122SD ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm (0.016 in)',
      exhaustColdMm: '0.60 mm (0.024 in) / Jake Brake: 0.60 mm (0.024 in)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် In 0.40 mm / Ex 0.60 mm - Jake Brake 0.60 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'အလယ်မှစ၍ ၆၀ N·m ကနဦး ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 200, kgfCm: 2040, lbfFt: 147.5, notesMm: 'ဒုတိယအဆင့် ၂၀၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ပထမအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ဒုတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'တတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ (စုစုပေါင်း ၂၇၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '150 + 90° + 90°', kgfCm: '1530 + 90° + 90°', lbfFt: '110 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Crankshaft Pulley Bolts', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '200 + 90°', kgfCm: '2040 + 90°', lbfFt: '148 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 60, kgfCm: 612, lbfFt: 44.3 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 38 bolts in spiral sequence to 60 N·m', descriptionMm: 'ခေါင်းဘルト ၃၈ လုံးကို အလယ်မှစ၍ ၆၀ N·m ကျပ်ပါ', torque: '60 N·m' },
      { step: 2, description: 'Torque to 200 N·m', descriptionMm: '၂၀၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '200 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ပထမအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'ဒုတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt third 90° clockwise', descriptionMm: 'တတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ (စုစုပေါင်း ၂၇၀°)', torque: '+90°' }
    ],
    headBoltsCount: 38,
    timingMarksGuide: {
      crankshaft: 'Align flywheel TDC pointer with 0° timing mark.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် TDC 0° ချိန်ပါ။',
      camshaft: 'Rear DOHC composite camshaft alignment marks.',
      camshaftMm: 'အနောက်ဘက် DOHC ကမ်ရှပ်ဂီယာ အမှတ်သားများ တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel pump driven off rear gear train.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'Freightliner Cascadia တွင် အဓိကတပ်ဆင်ထားပြီး အမေရိကန်တွင် ဆီစားအသက်သာဆုံး တွဲကားအင်ဂျင်အဖြစ် နာမည်ကျော်ပါသည်။ မီးပေါက်စဉ် (1-5-3-6-2-4) ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '250 MPa (36,000 psi ACRS)',
      notesMm: 'Detroit ACRS Common Rail'
    },
    fluids: {
      oilWithFilter: '45.0 L (11.9 Gallons)',
      oilWithoutFilter: '40.0 L',
      oilGrade: '10W-30 / 15W-40 (DFS 93K222 / API CK-4 Heavy Duty)',
      coolantCapacity: '50.0 L',
      fuelTankCapacity: '800 L – 1,200 L'
    }
  },

  // ==========================================
  // [အုပ်စု ၅] CATERPILLAR (15.2L Twin-Turbo ACERT)
  // ==========================================

  // 12. Caterpillar CAT C15 / 3406E (15,200 cc)
  {
    id: 'usa-cat-c15',
    brand: 'ISUZU',
    code: 'Caterpillar CAT C15 (15.2L Twin-Turbo)',
    series: 'CAT_C15_HEAVY',
    seriesTitle: 'Caterpillar Heavy Diesel (CAT C15 / 3406E)',
    seriesTitleMm: 'ကတ်တာပီလာ ကားကြီး & စက်ယန္တရား (CAT C15 15.2L Twin-Turbo)',
    name: '15.2L Inline-6 24-Valve ACERT Twin-Turbocharged Diesel (Peterbilt / Kenworth)',
    nameMm: '၁၅.၂ လီတာ ၆ လုံးထိုး ၂၄ ဗား ACERT တာဘို ၂ လုံးစုံ (CAT C15 တွဲကား & စက်ယန္တရားဘုရင်)',
    type: 'Inline-6 OHC 24-Valve Twin-Turbocharged Intercooler ACERT Heavy Duty Commercial Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ကမ္ဘာ့အကြမ်းဆုံး Caterpillar အဝါရောင် တွဲကားနှင့် စက်ယန္တရားအင်ဂျင်',
    fuelSystem: 'MEUI Mechanical Electronic Unit Injector (2,000 bar)',
    fuelSystemMm: 'MEUI စက်ပိုင်းနှင့် လျှပ်စစ်ပေါင်းစပ် နော်ဇယ်ကြီးများ (2,000 bar)',
    displacementCc: 15200,
    boreStrokeMm: '137.2 mm × 171.4 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '435 – 625 PS (King of Hauling) @ 1,800–2,100 RPM',
    torqueOutput: '2,237 – 2,779 N·m (2,050 lb-ft) @ 1,200 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Caterpillar Heavy Front Gear Train)',
    commonVehicles: [
      'Peterbilt 379 / 389 Classic Highway Tractor',
      'Kenworth W900 Heavy Hauler (ခေါင်းရှည်တွဲကားကြီးများ)',
      'Cat Heavy Mining Trucks & Excavators'
    ],
    commonVehiclesMm: 'Peterbilt 379/389 ခေါင်းရှည်တွဲကားကြီးများ၊ Kenworth W900၊ CAT သတ္တုတွင်းကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.38 mm (0.015 in)',
      exhaustColdMm: '0.76 mm (0.030 in) / Jake Brake: 0.69 mm (0.027 in)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် In 0.38 mm / Ex 0.76 mm - Jake Brake & MEUI နော်ဇယ် ညှိနည်းပါဝင်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 270, kgfCm: 2754, lbfFt: 200, notesMm: 'အလယ်မှစ၍ ၂၇၀ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 450, kgfCm: 4590, lbfFt: 330, notesMm: 'ဒုတိယအဆင့် ၄၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '260 + 120°', kgfCm: '2652 + 120°', lbfFt: '190 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '90 + 90°', kgfCm: '918 + 90°', lbfFt: '66 + 90°' },
      { component: 'Crankshaft Pulley Bolts', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '200 + 90°', kgfCm: '2040 + 90°', lbfFt: '148 + 90°' },
      { component: 'MEUI Injector Hold-down Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 65, kgfCm: 663, lbfFt: 48 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 100, kgfCm: 1020, lbfFt: 74 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 head bolts from center outward to 270 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၂၇၀ N·m ကျပ်ပါ', torque: '270 N·m' },
      { step: 2, description: 'Torque all bolts to 450 N·m', descriptionMm: '၄၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '450 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Insert timing bolt into flywheel through timing hole at 0° TDC Cylinder 1.',
      crankshaftMm: 'တိုက်မင်မူလီကို ဖလိုင်းဝီးလ် အပေါက်ထဲထည့်၍ No.1 TDC တွင် သော့ခတ်ပါ။',
      camshaft: 'Insert camshaft timing pin through cylinder head into cam gear.',
      camshaftMm: 'ကမ်ရှပ် လော့ပင် (Pin) ကို ခေါင်းဘေးမှထိုး၍ ကမ်ဂီယာထဲ ထည့်ချိန်ပါ။',
      pump: 'MEUI unit injector timing adjustment height.',
      pumpMm: 'MEUI နော်ဇယ် တွန်းတံ အမြင့်ကို တိကျစွာ ချိန်ညှိပါ။',
      notesMm: 'ကမ္ဘာ့အကြီးဆုံးနှင့် အကြမ်းဆုံး အမေရိကန် တွဲကားအင်ဂျင်ဖြစ်ပြီး မီးပေါက်စဉ် (1-5-3-6-2-4) အတိုင်း ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 35 MPa',
      pressureMax: '200 MPa (30,000 psi MEUI Injector)',
      notesMm: 'Caterpillar MEUI နော်ဇယ်စနစ်'
    },
    fluids: {
      oilWithFilter: '38.0 L (10 Gallons)',
      oilWithoutFilter: '34.0 L',
      oilGrade: '15W-40 (Cat DEO-ULS / API CK-4 Heavy Duty)',
      coolantCapacity: '48.0 L',
      fuelTankCapacity: '600 L / 1,000 L'
    }
  }
];
