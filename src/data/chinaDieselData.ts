import { MultiBrandEngineSpec } from './isuzuDieselData';

export const CHINA_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All China (တရုတ်ကား အားလုံး)', desc: 'တရုတ် ဒီဇယ်အင်ဂျင် အသေး၊ အလတ်၊ အကြီး အားလုံး' },
  { id: 'LIGHT_PICKUP', name: 'ကားငယ်/ပစ်ကပ် (ISF/JMC/Great Wall)', desc: 'Foton Tunland, ကနော် 4W, Great Wall Wingle, JMC ပစ်ကပ်များ' },
  { id: 'BUS_VAN', name: 'ခေါင်းချွန်း/မှန်လုံ (Joylong/King Long/YC4F)', desc: 'Joylong, King Long, Golden Dragon ခေါင်းချွန်း မီနီဘတ်စ်များ' },
  { id: 'MEDIUM_TRUCK', name: '၆ ဘီး/အလတ် (Yuchai YC4E/Cummins)', desc: 'Forland, Dongfeng, Foton Aumark ၆ ဘီးကားများ' },
  { id: 'YUCHAI_6CYL', name: 'ယွီချိုင်း ၆ လုံးထိုး (YC6J/YC6L)', desc: 'Dongfeng, Forland ၁၀ ဘီး & Yutong ဘတ်စ်ကားများ' },
  { id: 'WEICHAI_HEAVY', name: 'ဝေချိုင်း ကားကြီး (WP10/WP12)', desc: 'Shacman (ရှက်မန်း), Foton Auman ၁၀/၁၂ ဘီး & တွဲကားများ' },
  { id: 'HOWO_WD615', name: 'ဟိုဝို/ဆင်မကား (WD615/D10)', desc: 'Sinotruk Howo 336/371 ကျောက်တင်ကား & တွဲကားကြီးများ' },
];

export const CHINA_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // 1. FOTON CUMMINS ISF 2.8 (2.8L CRDi - Foton Tunland / Aumark / JAC)
  {
    id: 'china-isf28',
    brand: 'ISUZU',
    code: 'Cummins ISF 2.8 (2.8L CRDi)',
    series: 'LIGHT_PICKUP',
    seriesTitle: 'Foton Cummins Light Diesel (ISF 2.8)',
    seriesTitleMm: 'ဖူတွန် ခမင်း ကားငယ်/ပစ်ကပ် (ISF 2.8L)',
    name: '2.8L 16-Valve DOHC Common Rail Turbo Intercooler (Foton Tunland / Aumark)',
    nameMm: '၂.၈ လီတာ DOHC ၁၆ ဗား CRDi တာဘို (Foton Tunland / Aumark / JAC)',
    type: 'Inline-4 DOHC 16-Valve Common Rail Turbocharged Intercooler Diesel Engine',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား ခမင်းနည်းပညာသုံး ပစ်ကပ်နှင့် ၆ ဘီးကားငယ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,600 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,600 bar)',
    displacementCc: 2776,
    boreStrokeMm: '94.0 mm × 100.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '130 – 163 PS @ 3,600 RPM',
    torqueOutput: '310 – 360 N·m @ 1,800–3,000 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Single Chain Rear Drive - အနောက်ဘက်စနစ်)',
    commonVehicles: ['Foton Tunland Pickup', 'Foton Aumark Light Truck', 'JAC Light Truck', 'GAZelle Next'],
    commonVehiclesMm: 'Foton Tunland ပစ်ကပ်၊ Foton Aumark ၆ ဘီးငယ်၊ JAC ထရပ်ကားငယ်',
    valveClearance: {
      intakeColdMm: '0.25 mm',
      exhaustColdMm: '0.50 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.25 mm / Exhaust 0.50 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 60, kgfCm: 612, lbfFt: 44, notesMm: 'အလယ်မှစ၍ ၆၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 120°', kgfCm: '510 + 120°', lbfFt: '37 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '35 + 90°', kgfCm: '357 + 90°', lbfFt: '26 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '170 – 180', kgfCm: '1730 – 1830', lbfFt: '125 – 133' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: 75, kgfCm: 765, lbfFt: 55 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 40, kgfCm: 408, lbfFt: 29.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts in spiral sequence to 60 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၆၀ N·m စတင်ကျပ်ပါ', torque: '60 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'တစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft timing pin with flywheel 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ် ပင်အပ်ကို ဖလိုင်းဝီးလ် TDC အပေါက်နှင့် ချိန်ပါ။',
      camshaft: 'Rear camshaft sprocket alignment marks.',
      camshaftMm: 'အင်ဂျင်နောက်ဘက် ကမ်ရှပ်စပရော့ကတ် အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure pump drive timing.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် တိုက်မင်ချိန်ညှိပါ။',
      notesMm: 'Cummins ISF 2.8 တွင် တိုက်မင်ကြိုးသည် အင်ဂျင်နောက်ဘက် (Flywheel ဘက်) တွင် ရှိသည်ကို သတိပြုပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '160 MPa (1,600 bar)',
      notesMm: 'Bosch Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '6.0 L',
      oilWithoutFilter: '5.2 L',
      oilGrade: '15W-40 / 10W-30 (API CI-4 Heavy Duty)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '76 L'
    }
  },

  // 2. FOTON CUMMINS ISF 3.8 (3.8L CRDi - Foton Aumark / Forland / JAC ၆ ဘီးကားငယ်)
  {
    id: 'china-isf38',
    brand: 'ISUZU',
    code: 'Cummins ISF 3.8 (3.8L CRDi)',
    series: 'LIGHT_PICKUP',
    seriesTitle: 'Foton Cummins 3.8L Light Commercial',
    seriesTitleMm: 'ဖူတွန် ခမင်း ၃.၈ လီတာ (၆ ဘီးကားငယ်)',
    name: '3.8L 16-Valve DOHC Turbocharged Intercooler Common Rail Diesel',
    nameMm: '၃.၈ လီတာ DOHC ၁၆ ဗား CRDi တာဘို (Foton Aumark / Forland ၆ ဘီး)',
    type: 'Inline-4 DOHC 16-Valve Turbocharged Intercooler Diesel Engine',
    typeMm: '၄ လုံးထိုး ၁၆ ဗား ခမင်းအင်ဂျင် (တရုတ် ၆ ဘီး အပေါဆုံး)',
    fuelSystem: 'Bosch Common Rail High-Pressure Injection System (1,600 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 3760,
    boreStrokeMm: '102.0 mm × 115.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '17.2:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '141 – 168 PS @ 2,600 RPM',
    torqueOutput: '450 – 600 N·m @ 1,200–2,200 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Gear Train - အနောက်ဂီယာစနစ်)',
    commonVehicles: ['Foton Aumark TX / S', 'Forland ၆ ဘီး ကုန်တင်ကားငယ်', 'JAC Gallop Light Truck', 'King Long Mini Bus'],
    commonVehiclesMm: 'Foton Aumark၊ Forland ၆ ဘီးကား၊ JAC ထရပ်ကား၊ King Long မီနီဘတ်စ်',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.55 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.30 mm / Exhaust 0.55 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 70, kgfCm: 714, lbfFt: 51.6 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '60 + 120°', kgfCm: '612 + 120°', lbfFt: '44 + 120°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '40 + 90°', kgfCm: '408 + 90°', lbfFt: '29.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 210, kgfCm: 2140, lbfFt: 155 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 45, kgfCm: 459, lbfFt: 33.2 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts to 70 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၇၀ N·m ကျပ်ပါ', torque: '70 N·m' },
      { step: 2, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 3, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align flywheel timing pin at TDC 0°.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်ကို တိုက်မင်ပင် (Pin) ဖြင့် TDC ချိန်ပါ။',
      camshaft: 'Rear camshaft gear marks alignment.',
      camshaftMm: 'အနောက်ကမ်ရှပ်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      pump: 'Common rail supply pump drive gear.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် ချိန်ညှိပါ။',
      notesMm: 'ခရီးဝေး ကုန်တင် ၆ ဘီးကားငယ်များတွင် အသုံးအများဆုံး အင်ဂျင်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '160 MPa',
      notesMm: 'ဆီသန့်စင်မှု အထူးဂရုစိုက်ပါ'
    },
    fluids: {
      oilWithFilter: '8.5 L',
      oilWithoutFilter: '7.5 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '11.0 L',
      fuelTankCapacity: '100 L / 120 L'
    }
  },

  // 3. YUCHAI YC4E / YC4D (4.3L / 4.2L ၄ လုံးထိုး - Forland / Dongfeng ၆ ဘီးဘုရင်)
  {
    id: 'china-yc4e',
    brand: 'ISUZU',
    code: 'Yuchai YC4E / YC4D (4.3L 4-Cyl)',
    series: 'MEDIUM_TRUCK',
    seriesTitle: 'Yuchai Medium Commercial (YC4E / YC4D)',
    seriesTitleMm: 'ယွီချိုင်း ၆ ဘီး အပေါဆုံး (YC4E / YC4D)',
    name: '4.3L (YC4E) / 4.2L (YC4D) Turbocharged Diesel (Forland / Dongfeng 6-Wheeler)',
    nameMm: '၄.၃ လီတာ (YC4E) / ၄.၂ လီတာ (YC4D) တာဘို (Forland / Dongfeng ၆ ဘီး)',
    type: 'Inline-4 OHV 8-Valve Turbocharged Intercooler Diesel Engine',
    typeMm: '၄ လုံးထိုး OHV တရုတ် ၆ ဘီးကားလောကတွင် အပေါဆုံး အကြမ်းစား ယွီချိုင်း',
    fuelSystem: 'Mechanical In-line Multi-plunger Pump / Bosch Common Rail',
    fuelSystemMm: 'မက္ကင်းနစ် ပန့်လိုင်းကြီး / Bosch ကွန်မန်ရေးလ်',
    displacementCc: 4260,
    boreStrokeMm: '110.0 mm × 112.0 mm',
    cylinders: 4,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '140 – 160 PS @ 2,600 RPM',
    torqueOutput: '450 – 550 N·m @ 1,400–1,800 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Front Gear Drive)',
    commonVehicles: ['Forland ၆ ဘီး ကုန်တင်ကား/မြေသယ်ကား', 'Dongfeng ၆ ဘီးကား', 'Foton ၆ ဘီး', 'Yutong Mini Bus'],
    commonVehiclesMm: 'Forland ၆ ဘီးကား၊ Dongfeng၊ Foton ၆ ဘီး၊ Yutong မီနီဘတ်စ်',
    valveClearance: {
      intakeColdMm: '0.35 mm',
      exhaustColdMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.35 mm / Exhaust 0.40 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 100, kgfCm: 1020, lbfFt: 74, notesMm: 'အလယ်မှစ၍ ၁၀၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 180, kgfCm: 1836, lbfFt: 133, notesMm: 'ဒုတိယအဆင့် ၁၈၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '220 – 240', kgfCm: '2240 – 2450', lbfFt: '162 – 177' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '120 – 140', kgfCm: '1220 – 1430', lbfFt: '88 – 103' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '380 – 420', kgfCm: '3870 – 4280', lbfFt: '280 – 310' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 75, kgfCm: 765, lbfFt: 55 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts from center outward to 100 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၁၀၀ N·m ကျပ်ပါ', torque: '100 N·m' },
      { step: 2, description: 'Torque to 180 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၈၀ N·m ရောက်အောင် တိုးမြှင့်ကျပ်ပါ', torque: '180 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear notch with idler gear at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် TDC ချိန်ပါ။',
      camshaft: 'Camshaft gear timing marks alignment.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line injection pump drive gear alignment.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ် ချိန်ညှိပါ။',
      notesMm: 'မြန်မာပြည် Forland ၆ ဘီးကားလောကတွင် အပေါဆုံး အကြမ်းခံဆုံး အင်ဂျင်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 200 – 220 bar',
      pressureMax: 'In-line Mechanical / Common Rail',
      notesMm: 'နော်ဇယ် ဖိအား ညီညာမှု စစ်ဆေးပါ'
    },
    fluids: {
      oilWithFilter: '12.0 L',
      oilWithoutFilter: '10.5 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '16.0 L',
      fuelTankCapacity: '120 L'
    }
  },

  // 4. YUCHAI YC6J (6.5L Inline-6 - Dongfeng / JAC / Yutong Express Bus)
  {
    id: 'china-yc6j',
    brand: 'ISUZU',
    code: 'Yuchai YC6J (6.5L 6-Cyl)',
    series: 'YUCHAI_6CYL',
    seriesTitle: 'Yuchai 6-Cylinder Heavy (YC6J)',
    seriesTitleMm: 'ယွီချိုင်း ၆ လုံးထိုး နာမည်ကျော် (YC6J)',
    name: '6.5L Inline-6 OHC Turbocharged Intercooler Diesel (Dongfeng / Yutong)',
    nameMm: '၆.၅ လီတာ ၆ လုံးထိုး တာဘို (Dongfeng ၁၀ ဘီး / Yutong Express Bus)',
    type: 'Inline-6 OHV 12-Valve Turbocharged Intercooler Commercial Diesel Engine',
    typeMm: '၆ လုံးထိုး OHV ကားကြီးနှင့် အဝေးပြေးဘတ်စ်ကားသုံး ဒဏ္ဍာရီလာ ယွီချိုင်း',
    fuelSystem: 'Mechanical In-line Multi-plunger Injection Pump / Bosch Common Rail',
    fuelSystemMm: 'Bosch / Zexel မက္ကင်းနစ် ပန့်လိုင်းကြီး / Common Rail',
    displacementCc: 6494,
    boreStrokeMm: '105.0 mm × 125.0 mm (YC6J220)',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '190 – 245 PS @ 2,500 RPM',
    torqueOutput: '680 – 890 N·m @ 1,400–1,700 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (All Gear Drive)',
    commonVehicles: ['Dongfeng ၁၀ ဘီး ကုန်တင်ကားကြီးများ', 'Forland ၁၀ ဘီးကား', 'Yutong / King Long Express Bus', 'JAC Heavy Truck'],
    commonVehiclesMm: 'Dongfeng ၁၀ ဘီး၊ Forland ၁၀ ဘီး၊ Yutong အဝေးပြေးဘတ်စ်ကား၊ JAC',
    valveClearance: {
      intakeColdMm: '0.35 mm',
      exhaustColdMm: '0.40 mm',
      methodMm: 'Screw & Locknut (အေးချိန် In 0.35 mm / Ex 0.40 mm - မီးပေါက်စုံတွဲ ညှိနည်း)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 100, kgfCm: 1020, lbfFt: 74 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 190, kgfCm: 1938, lbfFt: 140 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '230 – 250', kgfCm: '2340 – 2550', lbfFt: '170 – 184' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '120 – 140', kgfCm: '1220 – 1430', lbfFt: '88 – 103' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '450 – 500', kgfCm: '4590 – 5100', lbfFt: '332 – 368' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 26 head bolts to 100 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၁၀၀ N·m ကျပ်ပါ', torque: '100 N·m' },
      { step: 2, description: 'Torque to 190 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၉၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '190 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/6 TDC mark.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Camshaft gear alignment with idler gear.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line 6-cylinder injection pump timing.',
      pumpMm: 'ဆီပန့် ၆ လုံးထိုး တိုက်မင် ချိန်ညှိပါ။',
      notesMm: 'အဝေးပြေး ခရီးသည်တင် ယာဉ်များနှင့် ၁၀ ဘီးကားများတွင် အောင်မြင်ကျော်ကြားသော ၆ လုံးထိုး ယွီချိုင်း ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 220 – 240 bar',
      pressureMax: 'In-line Mechanical Pump',
      notesMm: 'နော်ဇယ် ဖိအား ပုံမှန် စစ်ဆေးပါ'
    },
    fluids: {
      oilWithFilter: '18.0 L',
      oilWithoutFilter: '16.0 L',
      oilGrade: '15W-40 (Heavy Duty Commercial Turbo Diesel Oil)',
      coolantCapacity: '25.0 L',
      fuelTankCapacity: '200 L / 260 L'
    }
  },

  // 5. WEICHAI WP10 / WP12 (9.7L / 11.6L Heavy - Shacman ရှက်မန်း / Howo / Foton Auman)
  {
    id: 'china-wp10',
    brand: 'ISUZU',
    code: 'Weichai WP10 / WP12 (9.7L / 11.6L)',
    series: 'WEICHAI_HEAVY',
    seriesTitle: 'Weichai Heavy Duty (WP10 / WP12)',
    seriesTitleMm: 'ဝေချိုင်း ကားကြီးအင်ဂျင် (WP10 / WP12)',
    name: '9.7L (WP10) / 11.6L (WP12) Heavy Commercial Diesel (Shacman / Howo / Auman)',
    nameMm: '၉.၇ လီတာ (WP10) / ၁၁.၆ လီတာ (WP12) Shacman ရှက်မန်း/ဟိုဝို/ဖူတွန်',
    type: 'Inline-6 OHC Turbocharged Intercooler Common Rail Heavy Duty Diesel Engine',
    typeMm: '၆ လုံးထိုး တရုတ်တွဲကားနှင့် ၁၂ ဘီးကားကြီးများ၏ နံပါတ် ၁ နှလုံးသား',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,600 – 1,800 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 9726,
    boreStrokeMm: '126.0 mm × 130.0 mm (WP10) / 126.0 mm × 155.0 mm (WP12)',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '17.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '290 – 380 PS (WP10) / 400 – 480 PS (WP12) @ 1,900 RPM',
    torqueOutput: '1,460 – 1,900 N·m (WP10) / 2,100 N·m (WP12) @ 1,200–1,500 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear / Front Heavy Gear Drive)',
    commonVehicles: ['Shacman F3000 / X3000 Dump Truck / Prime Mover (ရှက်မန်း)', 'Foton Auman GTL 10-Wheeler / Trailer', 'Sinotruk Howo Dump Truck', 'CAMC Heavy Dump Truck'],
    commonVehiclesMm: 'Shacman ရှက်မန်း ၁၀ ဘီး/တွဲကား၊ Foton Auman၊ Howo ကျောက်တင်ကား၊ CAMC',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm (Jake Brake: 0.80 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Jake Brake ချိန်နည်းပါဝင်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Individual Head Step 1)', componentMm: 'ခေါင်းဘルト (ခေါင်းတစ်လုံးချင်း အဆင့် ၁)', nm: 60, kgfCm: 612, lbfFt: 44, notesMm: 'ဆလင်ဒါခေါင်း တစ်လုံးချင်းဆီ ၆၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 140, kgfCm: 1428, lbfFt: 103, notesMm: '၁၄၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '120 + 90° + 90°', kgfCm: '1220 + 90° + 90°', lbfFt: '88 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '80 + 90°', kgfCm: '816 + 90°', lbfFt: '59 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '680 – 750', kgfCm: '6930 – 7650', lbfFt: '501 – 553' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 100, kgfCm: 1020, lbfFt: 74 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual cylinder head 4 bolts to 60 N·m', descriptionMm: 'ခေါင်းတစ်လုံးစီရှိ မူလီ ၄ လုံးကို ၆၀ N·m ကျပ်ပါ', torque: '60 N·m' },
      { step: 2, description: 'Torque to 140 N·m', descriptionMm: '၁၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '140 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 24,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/6 TDC mark with pointer.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်နှင့် ညွှန်တံ ချိန်ပါ။',
      camshaft: 'Overhead camshaft gear timing marks.',
      camshaftMm: 'အပေါ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Bosch common rail high-pressure pump gear timing.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ဂီယာအမှတ် ချိန်ညှိပါ။',
      notesMm: 'Weichai WP10/WP12 သည် ဆလင်ဒါခေါင်း တစ်လုံးချင်းခွဲထားသော (Single Head Per Cylinder) စနစ်ဖြစ်၍ ခေါင်းတစ်လုံးချင်းစီ သီးခြားကျပ်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 45 MPa',
      pressureMax: '180 MPa',
      notesMm: 'Bosch Common Rail ဖိအားမြင့်စနစ်'
    },
    fluids: {
      oilWithFilter: '28.0 L',
      oilWithoutFilter: '24.0 L',
      oilGrade: '15W-40 (Heavy Duty Diesel Engine Oil API CI-4/CK-4)',
      coolantCapacity: '40.0 L',
      fuelTankCapacity: '380 L / 400 L'
    }
  },

  // 6. SINOTRUK HOWO WD615 / D10 (9.7L Steyr Austria Base - Howo 336 / 371 ကျောက်တင်ကားကြီးများ)
  {
    id: 'china-wd615',
    brand: 'ISUZU',
    code: 'Sinotruk WD615 / D10 (9.7L Steyr)',
    series: 'HOWO_WD615',
    seriesTitle: 'Sinotruk Howo 371 / 336 (WD615 Steyr)',
    seriesTitleMm: 'ဟိုဝို ၃၇၁ / ၃၃၆ ဆင်မကားကြီးများ (WD615)',
    name: '9.7L Inline-6 Turbocharged Intercooler Diesel (Steyr Austria Technology)',
    nameMm: '၉.၇ လီတာ ၆ လုံးထိုး တာဘို (Sinotruk Howo 336 / 371 ကျောက်တင်ကားကြီး)',
    type: 'Inline-6 OHV 12-Valve / 24-Valve Turbocharged Intercooler Heavy Commercial Engine',
    typeMm: '၆ လုံးထိုး Steyr နည်းပညာသုံး မြန်မာပြည် အပေါဆုံး ဆင်မ ကျောက်တင်ကားကြီး အင်ဂျင်',
    fuelSystem: 'Bosch / Denso Mechanical In-line Pump / Common Rail (EGR / Euro II & III)',
    fuelSystemMm: 'Bosch P8500 မက္ကင်းနစ် ပန့်လိုင်းကြီး / Common Rail',
    displacementCc: 9726,
    boreStrokeMm: '126.0 mm × 130.0 mm',
    cylinders: 6,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '336 – 371 PS (420 PS New) @ 2,200 RPM',
    torqueOutput: '1,350 – 1,500 N·m @ 1,100–1,600 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Steyr Heavy Gear Train)',
    commonVehicles: ['Sinotruk Howo 371 10-Wheeler Dump Truck', 'Sinotruk Howo 336 Concrete Mixer', 'Sinotruk Howo A7 Prime Mover Trailer (တွဲကားကြီးများ)'],
    commonVehiclesMm: 'Sinotruk Howo ၃၇၁/၃၃၆ ၁၀ ဘီး ကျောက်တင်ကား၊ ကွန်ကရစ်ဖျော်ကား၊ ကွန်တိန်နာဆွဲခေါင်းကြီးများ',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.40 mm (EVB Exhaust Valve Brake: 0.40 mm)',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.30 mm / Exhaust 0.40 mm - EVB ဘရိတ်စနစ်ပါဝင်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Individual Head Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 60, kgfCm: 612, lbfFt: 44, notesMm: 'ခေါင်းတစ်လုံးချင်းစီ ၆၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 120, kgfCm: 1224, lbfFt: 88.5, notesMm: '၁၂၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '100 + 90° + 90°', kgfCm: '1020 + 90° + 90°', lbfFt: '74 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '80 + 90°', kgfCm: '816 + 90°', lbfFt: '59 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '650 – 700', kgfCm: '6630 – 7140', lbfFt: '479 – 516' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 100, kgfCm: 1020, lbfFt: 74 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual head 4 bolts to 60 N·m', descriptionMm: 'ဆလင်ဒါခေါင်းတစ်လုံးစီရှိ မူလီ ၄ လုံးကို ၆၀ N·m စတင်ကျပ်ပါ', torque: '60 N·m' },
      { step: 2, description: 'Torque to 120 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၂၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '120 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 24,
    timingMarksGuide: {
      crankshaft: 'Align flywheel 1/6 TDC mark with timing pointer.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်ကို ဘေးအမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Center camshaft gear alignment.',
      camshaftMm: 'အလယ်ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'In-line injection pump timing at 14° to 16° BTDC.',
      pumpMm: 'ဆီပန့်ကြီးကို အပေါ်ဆုံးမရောက်မီ ၁၄° မှ ၁၆° BTDC ချိန်ပါ။',
      notesMm: 'Steyr နည်းပညာသုံး ခေါင်းတစ်လုံးချင်းစီခွဲထားသော စနစ်ဖြစ်၍ EVB ဘရိတ်ဘား ကွာဟချက်ကို သေချာစစ်ဆေးပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 220 – 240 bar',
      pressureMax: 'In-line Mechanical / Common Rail',
      notesMm: 'ဆီပန့် ၆ လုံးထိုး ပန့်လိုင်းကြီး'
    },
    fluids: {
      oilWithFilter: '28.0 L',
      oilWithoutFilter: '24.0 L',
      oilGrade: '15W-40 (Heavy Commercial Turbo Diesel Oil API CF-4/CH-4/CI-4)',
      coolantCapacity: '40.0 L',
      fuelTankCapacity: '300 L / 400 L'
    }
  },

  // 7. JMC 4JB1 / JX493ZLQ (2.8L CRDi - ကနော် 4W ပက်လက် / JMC Baodian / Forland)
  {
    id: 'china-jmc4jb1',
    brand: 'ISUZU',
    code: 'JMC 4JB1 / JX493 (2.8L CRDi)',
    series: 'LIGHT_PICKUP',
    seriesTitle: 'JMC & Kano 4x4 Pickup (JX493 / 4JB1 CRDi)',
    seriesTitleMm: 'ကနော် 4W ပက်လက် & JMC (JX493 / 4JB1 ၂.၈ လီတာ CRDi)',
    name: '2.8L OHV 8-Valve Common Rail Turbocharged Diesel (Kano 4W / JMC / Forland)',
    nameMm: '၂.၈ လီတာ OHV ၈ ဗား ကွန်မန်ရေးလ် တာဘို (ကနော် 4W ပက်လက် / JMC / Forland)',
    type: 'Inline-4 OHV 8-Valve Direct Injection Turbocharged Common Rail Diesel Engine',
    typeMm: '၄ လုံးထိုး OHV အကြမ်းခံ Isuzu မျိုးရိုး တရုတ် ကွန်မန်ရေးလ် ပစ်ကပ် အင်ဂျင်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,600 bar) / VP44 Electronic Pump',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် (1,600 bar) / Bosch အီလက်ထရောနစ် ပန့်',
    displacementCc: 2771,
    boreStrokeMm: '93.0 mm × 102.0 mm',
    cylinders: 4,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '109 – 116 PS @ 3,600 RPM',
    torqueOutput: '260 – 285 N·m @ 1,800–2,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'တိုက်မင်ဂီယာ အပြည့် (All Gear Drive - 1-1, 2-2, 3-3 အမှတ်များ)',
    commonVehicles: ['Kano 4W Pickup (ကနော် 4W ပက်လက်)', 'JMC Baodian / Vigus Pickup', 'Forland Light Truck', 'Grand Tiger Pickup', 'JAC Light Pickup'],
    commonVehiclesMm: 'ကနော် 4W ပက်လက်၊ JMC Baodian / Vigus၊ Forland ကားငယ်၊ Grand Tiger',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.30 mm',
      intakeHotMm: '0.40 mm',
      exhaustHotMm: '0.40 mm',
      methodMm: 'Screw & Locknut (ဝက်အူနှင့် လော့နတ် - အင်ဂျင်အေးချိန် In & Ex နှစ်ခုစလုံး 0.30 mm တူညီသည်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 49, kgfCm: 500, lbfFt: 36, notesMm: 'အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 98, kgfCm: 1000, lbfFt: 72, notesMm: 'ဒုတိယအဆင့် ၉၈ N·m သို့ တိုးကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ (သို့ ၁၁၈ N·m)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: 167, kgfCm: 1700, lbfFt: 123 },
      { component: 'Connecting Rod Cap Nuts', componentMm: 'ကွန်ရော့ကပ် နတ်များ', nm: 83, kgfCm: 850, lbfFt: 61 },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 206, kgfCm: 2100, lbfFt: 152 },
      { component: 'Camshaft Thrust Plate Bolt', componentMm: 'ကမ်ရှပ် ထရပ်ပလိတ် ဘルト', nm: 25, kgfCm: 255, lbfFt: 18.4 },
      { component: 'Rocker Arm Shaft Bracket Bolts', componentMm: 'ရော့ကာရှပ် ဒေါက်ခုံ ဘルトများ', nm: 54, kgfCm: 550, lbfFt: 40 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 26, kgfCm: 265, lbfFt: 19.2 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 78, kgfCm: 795, lbfFt: 57.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 head bolts from center outward to 49 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ', torque: '49 N·m' },
      { step: 2, description: 'Torque to 98 N·m', descriptionMm: 'ဒုတိယအဆင့် ၉၈ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '98 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise (or final 118 N·m)', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ (သို့ ၁၁၈ N·m)', torque: '+60°~90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear timing mark (1-1) with idler gear A.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ် (1-1) ကို အလယ်ဂီယာ (Idler Gear A) နှင့် တိုက်ဆိုင်ပါ။',
      camshaft: 'Align camshaft gear timing mark (2-2) with idler gear A.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် (2-2) ကို အလယ်ဂီယာ A နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'Align injection pump gear timing mark (3-3) with idler gear B.',
      pumpMm: 'ဆီပန့်ဂီယာ အမှတ် (3-3) ကို အလယ်ဂီယာ B နှင့် တိုက်ဆိုင်ပါ။',
      notesMm: 'ဂီယာအပြည့် စနစ်ဖြစ်၍ တိုက်မင်ပြုတ်ကျခြင်း မရှိပါ။ ဂီယာအမှတ် 1-1, 2-2, 3-3 များကို သေချာစစ်ဆေးပါက အလွယ်တကူ စက်နိုးပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '160 MPa (1,600 bar)',
      notesMm: 'Common Rail ဆီလိုင်းဖြစ်ပါက SCV Valve နှင့် Bosch နော်ဇယ်များကို သန့်ရှင်းစွာ ထားရှိရပါမည်။'
    },
    fluids: {
      oilWithFilter: '5.5 L',
      oilWithoutFilter: '5.0 L',
      oilGrade: '15W-40 / 10W-30 (API CI-4)',
      coolantCapacity: '8.0 L',
      fuelTankCapacity: '65 L'
    }
  },

  // 8. GREAT WALL GW4D20 / GW4D20D (2.0L CRDi - Wingle 5/6/7 / Haval SUV)
  {
    id: 'china-gw4d20',
    brand: 'ISUZU',
    code: 'Great Wall GW4D20 / GW4D20D (2.0L CRDi)',
    series: 'LIGHT_PICKUP',
    seriesTitle: 'Great Wall Wingle & Haval (GW4D20 2.0L)',
    seriesTitleMm: 'ဂရိတ်ဝေါ ဝင်ဂဲလ် 4W ပက်လက် & ဟာဗယ် (GW4D20 ၂.၀ လီတာ)',
    name: '2.0L DOHC 16-Valve Variable Geometry Turbo Common Rail (Wingle 5/6/7 / Haval)',
    nameMm: '၂.၀ လီတာ DOHC ၁၆ ဗား VGT ကွန်မန်ရေးလ် ဒီဇယ်တာဘို (Great Wall Wingle / Haval)',
    type: 'Inline-4 DOHC 16-Valve Turbocharged Intercooler Common Rail Clean Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား ခေတ်သစ် တရုတ် 4W ပက်လက်အင်ဂျင်',
    fuelSystem: 'Delphi / Bosch High-Pressure Common Rail (1,800 bar)',
    fuelSystemMm: 'Delphi / Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,800 bar)',
    displacementCc: 1996,
    boreStrokeMm: '83.1 mm × 92.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.7:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '143 – 163 PS @ 4,000 RPM',
    torqueOutput: '315 – 400 N·m @ 1,400–2,800 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် (Timing Belt + Auto Tensioner)',
    commonVehicles: ['Great Wall Wingle 5 4WD Pickup', 'Great Wall Wingle 6 / 7 4WD', 'Haval H5 / H6 Diesel SUV'],
    commonVehiclesMm: 'Great Wall Wingle 5/6/7 4W ပက်လက်၊ Haval H5/H6 ဒီဇယ်',
    valveClearance: {
      intakeColdMm: 'Hydraulic Lash Adjuster (HLA)',
      exhaustColdMm: 'Hydraulic Lash Adjuster (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်ဖြစ်၍ ဗားကင်းချိန်ရန် မလိုပါ)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 45, kgfCm: 459, lbfFt: 33, notesMm: 'အလယ်မှစ၍ ၄၅ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 90, kgfCm: 918, lbfFt: 66, notesMm: 'ဒုတိယအဆင့် ၉၀ N·m သို့ တိုးကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: 195, kgfCm: 1990, lbfFt: 144 },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: 110, kgfCm: 1120, lbfFt: 81 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 40, kgfCm: 408, lbfFt: 29.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 18 head bolts from center outward to 45 N·m', descriptionMm: 'ခေါင်းဘルトများကို အလယ်မှစ၍ ၄၅ N·m ကျပ်ပါ', torque: '45 N·m' },
      { step: 2, description: 'Torque to 90 N·m', descriptionMm: 'ဒုတိယအဆင့် ၉၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '90 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft sprocket TDC mark with oil pump housing notch.',
      crankshaftMm: 'ခရိုင်းရှပ် စပရော့ကတ် TDC အမှတ်ကို အင်ဂျင်ဝိုင်ပန့် ဘောင်အမှတ်နှင့် ချိန်ပါ။',
      camshaft: 'Align intake and exhaust camshaft sprocket notches with rear cover pointers.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အမှတ်များကို အနောက်ကာဗာ အမှတ်များနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure fuel pump synchronization.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် စပရော့ကတ် အမှတ် ချိန်ညှိပါ။',
      notesMm: 'တိုက်မင်ခါးပတ် စနစ်ဖြစ်ပြီး အော်တိုတန်ရှင်နာပါရှိသည်။ ၈၀,၀၀၀ ကီလိုမီတာတိုင်း ခါးပတ် အသစ်လဲသင့်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Delphi / Bosch Piezo/Solenoid Injectors စနစ်'
    },
    fluids: {
      oilWithFilter: '6.0 L',
      oilWithoutFilter: '5.5 L',
      oilGrade: '5W-30 / 10W-40 (ACEA C3 / API CJ-4)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '70 L'
    }
  },

  // 9. YUCHAI YC4FA / YC4F (2.7L / 3.0L CRDi - Joylong / King Long / Golden Dragon ခေါင်းချွန်း Minibus)
  {
    id: 'china-yc4fa',
    brand: 'ISUZU',
    code: 'Yuchai YC4FA / YC4F (2.7L / 3.0L CRDi)',
    series: 'BUS_VAN',
    seriesTitle: 'Yuchai Minibus & Van (YC4FA / YC4F)',
    seriesTitleMm: 'ယွီချိုင်း မှန်လုံခေါင်းချွန်း & မီနီဘတ်စ် (YC4FA / YC4F ၂.၇ / ၃.၀ လီတာ)',
    name: '2.7L (YC4FA) / 3.0L (YC4F) Turbocharged Common Rail (Joylong / King Long / Golden Dragon)',
    nameMm: '၂.၇ လီတာ / ၃.၀ လီတာ တာဘို ကွန်မန်ရေးလ် (Joylong ခေါင်းချွန်း / King Long)',
    type: 'Inline-4 OHV 8-Valve Turbocharged Intercooler Common Rail Diesel Engine',
    typeMm: '၄ လုံးထိုး OHV တရုတ် မှန်လုံခေါင်းချွန်းနှင့် လိုင်းကား အပေါဆုံး ယွီချိုင်း ကွန်မန်ရေးလ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,600 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,600 bar)',
    displacementCc: 2982,
    boreStrokeMm: '92.0 mm × 100.0 mm (YC4FA) / 96.0 mm × 103.0 mm (YC4F)',
    cylinders: 4,
    valvesPerCyl: 2,
    compressionRatio: '17.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '90 – 115 PS @ 3,200 RPM',
    torqueOutput: '260 – 340 N·m @ 1,600–2,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Front Gear Drive Train - အရှေ့ဂီယာစနစ်)',
    commonVehicles: ['Joylong Minibus / Van (ဂျွိုင်းလောင်း ခေါင်းချွန်း)', 'King Long Mini Bus (ကင်းလောင်း)', 'Golden Dragon Van (ရွှေနဂါး ခေါင်းချွန်း)', 'Jinbei Minibus (ဂျင်ဘေ)'],
    commonVehiclesMm: 'Joylong ဂျွိုင်းလောင်း ခေါင်းချွန်း၊ King Long မီနီဘတ်စ်၊ Golden Dragon ရွှေနဂါး၊ Jinbei',
    valveClearance: {
      intakeColdMm: '0.30 mm',
      exhaustColdMm: '0.35 mm',
      methodMm: 'Screw & Locknut (အေးချိန် Intake 0.30 mm / Exhaust 0.35 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 60, kgfCm: 612, lbfFt: 44, notesMm: 'အလယ်မှစ၍ ၆၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 120, kgfCm: 1224, lbfFt: 88.5, notesMm: 'ဒုတိယအဆင့် ၁၂၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+60° to 90°', kgfCm: '+60°', lbfFt: '+60°', notesMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '170 – 190', kgfCm: '1730 – 1940', lbfFt: '125 – 140' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '90 – 110', kgfCm: '918 – 1120', lbfFt: '66 – 81' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '260 – 300', kgfCm: '2650 – 3060', lbfFt: '192 – 221' },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 55, kgfCm: 561, lbfFt: 40.5 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 head bolts from center outward to 60 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၆၀ N·m စတင်ကျပ်ပါ', torque: '60 N·m' },
      { step: 2, description: 'Torque to 120 N·m', descriptionMm: 'ဒုတိယအဆင့် ၁၂၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '120 N·m' },
      { step: 3, description: 'Turn each bolt 60° to 90° clockwise', descriptionMm: 'ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ', torque: '+60°~90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft gear mark with idler gear at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် TDC ချိန်ပါ။',
      camshaft: 'Camshaft gear alignment mark.',
      camshaftMm: 'ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။',
      pump: 'Bosch CP3/CP1H high pressure pump gear timing.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် တိုက်ဆိုင်ပါ။',
      notesMm: 'မြို့တွင်း/ခရီးတို လိုင်းဆွဲ ခေါင်းချွန်း မှန်လုံကားများတွင် အသုံးများပြီး အကြမ်းခံသော ယွီချိုင်း ကွန်မန်ရေးလ် ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '160 MPa (1,600 bar)',
      notesMm: 'Bosch Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '7.5 L',
      oilWithoutFilter: '6.5 L',
      oilGrade: '15W-40 (API CI-4 Heavy Duty Diesel Engine Oil)',
      coolantCapacity: '10.0 L',
      fuelTankCapacity: '70 L'
    }
  }
];
