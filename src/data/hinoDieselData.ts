import { MultiBrandEngineSpec } from './isuzuDieselData';

export const HINO_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All Hino (အားလုံး)', desc: 'Hino ဒီဇယ်အင်ဂျင်အားလုံး' },
  { id: 'HINO_J_SERIES', name: '300 & 500 (N04C / J08E / J05E)', desc: 'Hino 300 / Dutro (4.0L N04C) & Hino 500 (7.7L 6-Cyl)' },
  { id: 'HINO_HEAVY_SERIES', name: 'Heavy (P11C / E13C)', desc: 'Hino 700 Profia 10.5L & 12.9L တွဲကားဆွဲခေါင်းများ' },
  { id: 'HINO_CLASSIC_SERIES', name: 'Classic (H07D / W04D)', desc: 'Hino ခေါင်းရှည်/ခေါင်းတို အကြမ်းစားများ' },
];

export const HINO_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // 0. HINO DUTRO & 300 SERIES N04C (4.0L 4-Cylinder Common Rail)
  {
    id: 'hino-n04c',
    brand: 'ISUZU',
    code: 'Hino Dutro N04C (4.0L Common Rail)',
    series: 'HINO_J_SERIES',
    seriesTitle: 'Hino 300 & Dutro (N04C 4.0L)',
    seriesTitleMm: 'Hino 300 & Dutro ထရပ်ကား (N04C ၄.၀ လီတာ)',
    name: '4.0L Inline-4 DOHC 16-Valve Common Rail Turbo (Hino Dutro / 300 Series)',
    nameMm: '၄.၀ လီတာ ၄ လုံးထိုး DOHC ၁၆ ဗား ကွန်မန်ရေးလ် (Hino Dutro & Toyota Dyna)',
    type: 'Inline-4 DOHC 16-Valve Turbocharged Intercooled Denso Common Rail Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တိုက်မင်ဂီယာသုံး ခေတ်သစ် ကွန်မန်ရေးလ် ထရပ်ကားအင်ဂျင်',
    fuelSystem: 'Denso High-Pressure Common Rail System (HP3/HP4 Pump, 1,800 bar)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (HP3/HP4 ပန့်၊ 1,800 bar)',
    displacementCc: 4009,
    boreStrokeMm: '104.0 mm × 118.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1 (Intercooled: 17.0:1)',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '136 – 180 PS @ 2,500 – 3,000 RPM',
    torqueOutput: '390 – 500 N·m @ 1,400 – 2,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive with Scissor Gears - ခါးပတ်/ချိန် မပါ)',
    commonVehicles: [
      'Hino Dutro Light Truck',
      'Hino 300 Series Truck',
      'Toyota Dyna 200 / 300 / 400 (XZU Series)',
      'Toyota ToyoAce',
      'Hino Poncho Bus'
    ],
    commonVehiclesMm: 'Hino Dutro ထရပ်ကား၊ Hino 300၊ Toyota Dyna (XZU မော်ဒယ်သစ်များ)၊ Coaster/Poncho ဘတ်စ်',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.45 mm',
      intakeHotMm: '0.30 mm',
      exhaustHotMm: '0.45 mm',
      methodMm: 'Crosshead (Bridge) & Adjusting Screw (ဘား ၂ လုံးကြား တန်းတူဖိတုံး Bridge အရင်ညှိရန်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Main M14 Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၁)', nm: 59, kgfCm: 600, lbfFt: 43.5, notesMm: 'အလယ်မှစ၍ ဘေးသို့ ၅၉ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Main M14 Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Main M14 Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Cylinder Head Sub Bolts (M10 Front)', componentMm: 'ခေါင်းဘルトသေး (ရှေ့ခြမ်း M10)', nm: 44, kgfCm: 450, lbfFt: 32.5, notesMm: 'ရှေ့ရှိ M10 မူလီငယ်များ ၄၄ N·m ကျပ်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '167 + 90°', kgfCm: '1700 + 90°', lbfFt: '123 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '49 + 90°', kgfCm: '500 + 90°', lbfFt: '36 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 440, kgfCm: 4490, lbfFt: 324, notesMm: '၄၄၀ N·m တိတိကျကျ ကျပ်ရန်' },
      { component: 'Rocker Arm Support Bolts', componentMm: 'ရော့ကာရှပ် ဒေါက်ခုံ ဘルトများ', nm: 31, kgfCm: 316, lbfFt: 22.8 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 25, kgfCm: 255, lbfFt: 18.5 },
      { component: 'Oil Pan Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 49, kgfCm: 500, lbfFt: 36 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 main M14 bolts in spiral order from center to 59 N·m', descriptionMm: 'ခေါင်းဘルトကြီး ၁၈ လုံးကို အလယ်မှစ၍ ၅၉ N·m အညီအမျှကျပ်ပါ', torque: '59 N·m' },
      { step: 2, description: 'Turn each main bolt 90° clockwise', descriptionMm: 'ဘルトတစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each main bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' },
      { step: 4, description: 'Tighten front sub M10 bolts to 44 N·m', descriptionMm: 'ရှေ့ဘက် M10 မူလီသေးများကို ၄၄ N·m နောက်ဆုံးကျပ်ပါ', torque: '44 N·m' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear mark (0) with idler gear (0-0).',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ် (0) ကို အလယ်အိုင်ဒလာဂီယာ (0-0) နှင့် ချိန်ပါ။',
      camshaft: 'Align camshaft gear mark (1) with idler gear (1-1).',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် (1) ကို အိုင်ဒလာဂီယာ (1-1) နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Denso high-pressure fuel pump gear mark (2) aligned with idler gear (2-2).',
      pumpMm: 'ဖိအားမြင့်ဆီပန့်ဂီယာ အမှတ် (2) ကို အိုင်ဒလာဂီယာ (2-2) နှင့် ချိန်ညှိပါ။',
      notesMm: 'N04C တွင် Idler Gear များ၌ Scissor Gear (တုန်ခါမှုထိန်း ဂီယာခွဲ) ပါရှိသဖြင့် ဖြုတ်တပ်ချိန်တွင် M6 Service Bolt ထိုးထားရန် လိုအပ်ပါသည်။ ဂီယာအပြည့်နှင့် Denso Common Rail စနစ်သုံးထား၍ အလွန်အကြမ်းခံပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '32 – 38 MPa (320 – 380 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Denso High-Pressure Common Rail စနစ်ဖြစ်ပြီး ဆီစစ်ဘူး သန့်ရှင်းမှု အထူးဂရုစိုက်ရပါမည်။'
    },
    fluids: {
      oilWithFilter: '9.2 L',
      oilWithoutFilter: '8.2 L',
      oilGrade: '15W-40 / 10W-30 (API CI-4 / CJ-4 / JASO DH-1)',
      coolantCapacity: '12.5 L',
      fuelTankCapacity: '100 L'
    }
  },

  // 1. HINO J08E / J08C (7.7L Inline-6 Hino 500 Ranger / Express Bus)
  {
    id: 'hino-j08e',
    brand: 'ISUZU', // using supported brand or extended
    code: 'J08E / J08C (7.7L 6-Cyl)',
    series: 'HINO_J_SERIES',
    seriesTitle: 'Hino 500 Series & Ranger (J08E / J08C)',
    seriesTitleMm: 'Hino 500 စီးရီး & Ranger (J08E / J08C ၆ လုံးထိုး)',
    name: '7.7L Inline-6 OHC 24-Valve Common Rail Turbo (Hino 500 / Ranger)',
    nameMm: '၇.၇ လီတာ ၆ လုံးထိုး ၂၄ ဗား (Hino 500 ၁၀ ဘီး / Express Bus)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ထရပ်ကား/ဘတ်စ်ကားသုံး ဒုတိယဒီဇယ်ဘုရင်',
    fuelSystem: 'Denso Common Rail HP4 Supply Pump (1,800 bar)',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (HP4 ပန့်)',
    displacementCc: 7684,
    boreStrokeMm: '112.0 mm × 130.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1 (Common Rail: 17.0:1)',
    firingOrder: '1 - 4 - 2 - 6 - 3 - 5',
    powerOutput: '240 – 280 PS @ 2,500 RPM',
    torqueOutput: '686 – 883 N·m @ 1,500 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Main Gear Train)',
    commonVehicles: ['Hino 500 Series (FG / FL / FM 10-Wheeler)', 'Hino Ranger Pro', 'Hino Selega / Blue Ribbon Express Bus', 'Kobelco Excavator SK200/SK330'],
    commonVehiclesMm: 'Hino 500 ၁၀ ဘီးကား၊ Ranger၊ အဝေးပြေး Express Bus၊ Kobelco ဘက်ဟိုးစက်ကြီးများ',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.45 mm',
      methodMm: 'Crosshead / Bridge Adjuster & Screw (အေးချိန် Intake 0.30 mm / Exhaust 0.45 mm - Bridge အရင်ညှိရန်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 118, kgfCm: 1200, lbfFt: 87, notesMm: 'အလယ်မှစ၍ ၁၁၈ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ③)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '167 + 90°', kgfCm: '1700 + 90°', lbfFt: '123 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '69 + 90°', kgfCm: '700 + 90°', lbfFt: '51 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 588, kgfCm: 6000, lbfFt: 434, notesMm: '၅၈၈ N·m တိတိကျကျ ကျပ်ရန်' },
      { component: 'Rocker Arm Support Bolts', componentMm: 'ရော့ကာရှပ် ဒေါက်ခုံ ဘルトများ', nm: 56, kgfCm: 571, lbfFt: 41.3 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 98, kgfCm: 1000, lbfFt: 72 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 26 head bolts to 118 N·m in sequence', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၁၁၈ N·m ကျပ်ပါ', torque: '118 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'တစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/6 TDC mark with pointer.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်ကို ဘေးအမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Rear gear train camshaft alignment marks.',
      camshaftMm: 'အင်ဂျင်နောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      pump: 'Denso supply pump timing gear alignment.',
      pumpMm: 'ဖိအားမြင့် Common rail ပန့်ဂီယာအမှတ် ချိန်ညှိပါ။',
      notesMm: 'Hino တွင် Firing Order သည် 1-4-2-6-3-5 ဖြစ်ပြီး (Toyota/Isuzu နှင့် မတူဘဲ သီးခြားဖြစ်သည်) ကို အထူးသတိပြုပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa (350 – 450 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'အဝေးပြေး ဘတ်စ်ကားနှင့် ထရပ်ကားများတွင် ဆီစစ်ပုံမှန်လဲလှယ်ရန် အရေးကြီးပါသည်။'
    },
    fluids: {
      oilWithFilter: '21.0 L',
      oilWithoutFilter: '18.5 L',
      oilGrade: '15W-40 (API CI-4 / CJ-4 Heavy Commercial)',
      coolantCapacity: '28.0 L',
      fuelTankCapacity: '200 L / 300 L'
    }
  },

  // 2. HINO J05E / J05C (5.1L Inline-4 Hino 300 / Dutro)
  {
    id: 'hino-j05e',
    brand: 'ISUZU',
    code: 'J05E / J05C (5.1L 4-Cyl)',
    series: 'HINO_J_SERIES',
    seriesTitle: 'Hino 300 Series & Dutro (J05E / J05C)',
    seriesTitleMm: 'Hino 300 စီးရီး & Dutro (J05E / J05C ၄ လုံးထိုး)',
    name: '5.1L Inline-4 OHC 16-Valve Common Rail Turbo (Hino 300 / Dutro)',
    nameMm: '၅.၁ လီတာ ၄ လုံးထိုး ၁၆ ဗား (Hino 300 / Dutro ၆ ဘီးကားငယ်)',
    type: 'Inline-4 OHC 16-Valve Turbocharged Intercooler Common Rail Diesel',
    typeMm: '၄ လုံးထိုး OHC ၁၆ ဗား ထရပ်ကားငယ်သုံး ကွန်မန်ရေးလ် ဒီဇယ်',
    fuelSystem: 'Denso High Pressure Common Rail (HP3/HP4)',
    fuelSystemMm: 'Denso ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 5123,
    boreStrokeMm: '112.0 mm × 130.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '17.0:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '150 – 190 PS @ 2,500 RPM',
    torqueOutput: '440 – 510 N·m @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Main Gear Train)',
    commonVehicles: ['Hino 300 Series (XZU)', 'Hino Dutro Light Truck', 'Toyota Dyna / ToyoAce (Hino OEM)', 'Kobelco SK135 Excavator'],
    commonVehiclesMm: 'Hino 300, Dutro ၆ ဘီးကားငယ်၊ Toyota Dyna၊ Kobelco စက်ယန္တရားများ',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.45 mm',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.30 mm / Exhaust 0.45 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 118, kgfCm: 1200, lbfFt: 87 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '167 + 90°', kgfCm: '1700 + 90°', lbfFt: '123 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '69 + 90°', kgfCm: '700 + 90°', lbfFt: '51 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 490, kgfCm: 5000, lbfFt: 362 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 83, kgfCm: 846, lbfFt: 61 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts to 118 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို ၁၁၈ N·m စတင်ကျပ်ပါ', torque: '118 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/4 TDC mark.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/4 TDC အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Rear camshaft gear alignment.',
      camshaftMm: 'အနောက်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Supply pump gear timing.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ် ချိန်ညှိပါ။',
      notesMm: 'Dutro / Hino 300 သုံး အလွန်အကြမ်းခံသော အင်ဂျင်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '32 – 40 MPa',
      pressureMax: '180 MPa',
      notesMm: 'Denso Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '12.0 L',
      oilWithoutFilter: '10.5 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '15.0 L',
      fuelTankCapacity: '100 L'
    }
  },

  // 3. HINO P11C / E13C (10.5L / 12.9L Hino 700 Profia တွဲကားဆွဲခေါင်းကြီးများ)
  {
    id: 'hino-p11c',
    brand: 'ISUZU',
    code: 'P11C / E13C (10.5L / 12.9L)',
    series: 'HINO_HEAVY_SERIES',
    seriesTitle: 'Hino 700 Series & Profia (P11C / E13C)',
    seriesTitleMm: 'Hino 700 စီးရီး & Profia (P11C / E13C ကွန်တိန်နာဆွဲခေါင်း)',
    name: '10.5L (P11C) / 12.9L (E13C) Turbo Common Rail (Hino 700 Profia)',
    nameMm: '၁၀.၅ လီတာ (P11C) / ၁၂.၉ လီတာ (E13C) Hino 700 တွဲကားကြီး',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Heavy Duty Diesel Engine',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ကွန်တိန်နာဆွဲခေါင်း (Prime Mover) ကားကြီးအင်ဂျင်',
    fuelSystem: 'Denso High Pressure Common Rail (1,800–2,000 bar) / Electronic EUI',
    fuelSystemMm: 'Denso ဖိအားမြင့် ကွန်မန်ရေးလ် / EUI စနစ်',
    displacementCc: 10520,
    boreStrokeMm: '122.0 mm × 150.0 mm (P11C) / 137.0 mm × 146.0 mm (E13C)',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '17.0:1',
    firingOrder: '1 - 4 - 2 - 6 - 3 - 5',
    powerOutput: '360 – 480 PS @ 1,800 RPM',
    torqueOutput: '1,450 – 2,157 N·m @ 1,100 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Heavy Gear Drive)',
    commonVehicles: ['Hino 700 Profia SS Prime Mover Trailer', 'Hino 700 FS / FY 10-Wheeler Dump Truck', 'Heavy Concrete Pump Trucks'],
    commonVehiclesMm: 'Hino 700 Profia ကွန်တိန်နာဆွဲခေါင်းကြီးများ၊ ၁၀ ဘီး မြေသယ်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.35 mm',
      exhaustColdMm: '0.50 mm (Jake Brake: 0.60 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် In 0.35 mm / Ex 0.50 mm - Engine Brake ချိန်ညှိမှုပါဝင်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 147, kgfCm: 1500, lbfFt: 108 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '196 + 90°', kgfCm: '2000 + 90°', lbfFt: '145 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '98 + 90°', kgfCm: '1000 + 90°', lbfFt: '72 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 785, kgfCm: 8000, lbfFt: 579, notesMm: '၇၈၅ N·m အလွန်ကြီးမားသော တော်ခ်' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 118, kgfCm: 1200, lbfFt: 87 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque heavy head bolts to 147 N·m', descriptionMm: 'ခေါင်းဘルトကြီးများကို ၁၄၇ N·m ကျပ်ပါ', torque: '147 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/6 TDC mark.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Rear overhead camshaft gear alignment.',
      camshaftMm: 'အနောက်ကမ်ရှပ်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      pump: 'Denso heavy duty common rail pump drive gear.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် ချိန်ညှိပါ။',
      notesMm: 'Hino 700 တွဲကားကြီးဖြစ်၍ Firing Order (1-4-2-6-3-5) အတိုင်း စနစ်တကျ ဘားချိန်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa',
      pressureMax: '180 – 200 MPa',
      notesMm: 'ကွန်တိန်နာဆွဲခေါင်းသုံး အကြီးစား ဆီလိုင်းစနစ်'
    },
    fluids: {
      oilWithFilter: '38.0 L',
      oilWithoutFilter: '34.0 L',
      oilGrade: '15W-40 (Heavy Commercial Turbo Diesel Oil)',
      coolantCapacity: '45.0 L',
      fuelTankCapacity: '350 L / 400 L'
    }
  },

  // 4. HINO H07D / W04D (7.4L / 4.0L Classic မော်ဒယ်ဟောင်း အကြမ်းစားများ)
  {
    id: 'hino-h07d',
    brand: 'ISUZU',
    code: 'H07D / W04D (7.4L / 4.0L)',
    series: 'HINO_CLASSIC_SERIES',
    seriesTitle: 'Hino Classic Trucks (H07D / W04D / H06C)',
    seriesTitleMm: 'Hino မော်ဒယ်ဟောင်း ခေါင်းရှည်/ခေါင်းတိုများ (H07D / W04D)',
    name: '7.4L (H07D) / 4.0L (W04D) Naturally Aspirated Diesel',
    nameMm: '၇.၄ လီတာ (H07D) / ၄.၀ လီတာ (W04D) Hino မော်ဒယ်ဟောင်း',
    type: 'Inline-6 / Inline-4 OHV Naturally Aspirated Diesel Engine',
    typeMm: '၆ လုံးထိုး / ၄ လုံးထိုး ဒဏ္ဍာရီလာ အကြမ်းဆုံး သာမန်ဒီဇယ်',
    fuelSystem: 'Mechanical In-line Multi-plunger Injection Pump (Bosch/Zexel A-Type)',
    fuelSystemMm: 'Bosch A-Type မက္ကင်းနစ် ပန့်လိုင်းကြီး',
    displacementCc: 7412,
    boreStrokeMm: '110.0 mm × 130.0 mm (H07D)',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '18.5:1',
    firingOrder: '1 - 4 - 2 - 6 - 3 - 5',
    powerOutput: '175 PS @ 2,900 RPM',
    torqueOutput: '470 N·m @ 1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Hino ခေါင်းရှည် ကုန်တင်ကားကြီးများ', 'Hino Ranger မော်ဒယ်ဟောင်း', 'Hino မီနီဘတ်စ်ကားများ'],
    commonVehiclesMm: 'Hino ခေါင်းရှည် ကုန်တင်ကား၊ မြေသယ်ကား၊ မော်ဒယ်ဟောင်း ဘတ်စ်ကားများ',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.45 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.30 mm / Exhaust 0.45 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 98, kgfCm: 1000, lbfFt: 72 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 186, kgfCm: 1900, lbfFt: 137 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: '49 + 60°', kgfCm: '500 + 60°', lbfFt: '36 + 60°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 539, kgfCm: 5500, lbfFt: 398 },
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
      pump: 'In-line injection pump timing.',
      pumpMm: 'ဆီပန့် ၆ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'မြန်မာပြည်တွင် အကြမ်းဆုံးအဖြစ် နာမည်ကျော်သော ခေါင်းရှည်ကား အင်ဂျင်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 175 – 185 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ပန်းထွက်အား စစ်ဆေးပါ။'
    },
    fluids: {
      oilWithFilter: '16.0 L',
      oilWithoutFilter: '14.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '24.0 L',
      fuelTankCapacity: '200 L'
    }
  }
];
