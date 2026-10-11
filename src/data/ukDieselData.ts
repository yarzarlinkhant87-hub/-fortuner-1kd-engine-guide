import { MultiBrandEngineSpec } from './isuzuDieselData';

export const UK_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All UK (ဗြိတိန် အားလုံး)', desc: 'ဗြိတိန် Ford & Land Rover ဒီဇယ်အင်ဂျင် ကားငယ်၊ ပစ်ကပ်၊ SUV အားလုံး' },
  { id: 'FORD_PUMA', name: 'Ford Puma (2.2L / 3.2L TDCi)', desc: 'Ford Ranger, Everest, Transit Van (မြန်မာပြည် အပေါဆုံး Ford ပစ်ကပ်)' },
  { id: 'FORD_PANTHER', name: 'Ford EcoBlue (2.0L Bi-Turbo)', desc: 'Ranger Raptor, Everest New Model (Panther Engine)' },
  { id: 'LANDROVER_INGENIUM', name: 'Land Rover Ingenium (2.0L)', desc: 'Range Rover Evoque, Discovery Sport, Defender New' },
  { id: 'LANDROVER_TDV6', name: 'Land Rover TDV6 / SDV6 (3.0L)', desc: 'Range Rover Sport, Discovery 3 / 4 (3.0L Twin-Turbo V6)' },
];

export const UK_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // 1. FORD DURATORQ 3.2L (Inline-5 Puma Engine - Ford Ranger Wildtrak / Everest 3.2L)
  {
    id: 'uk-ford-puma-32',
    brand: 'ISUZU',
    code: 'Ford Duratorq 3.2L (Puma 5-Cyl)',
    series: 'FORD_PUMA',
    seriesTitle: 'Ford Ranger & Everest 3.2L (Puma P5AT)',
    seriesTitleMm: 'Ford Ranger & Everest ၃.၂ လီတာ (၅ လုံးထိုး)',
    name: '3.2L Inline-5 DOHC 20-Valve TDCi Turbo (Ford Ranger Wildtrak / Everest)',
    nameMm: '၃.၂ လီတာ ၅ လုံးထိုး DOHC ၂၀ ဗား TDCi တာဘို (Ranger Wildtrak / Everest)',
    type: 'Inline-5 DOHC 20-Valve Common Rail Direct Injection Variable Geometry Turbocharger',
    typeMm: '၅ လုံးထိုး DOHC ၂၀ ဗား မြန်မာပြည် အကြမ်းဆုံး Ford ပစ်ကပ်နှင့် SUV အင်ဂျင်',
    fuelSystem: 'Continental / Siemens VDO High-Pressure Common Rail (1,800 bar)',
    fuelSystemMm: 'Continental / Siemens VDO ဖိအားမြင့် ကွန်မန်ရေးလ် (1,800 bar)',
    displacementCc: 3198,
    boreStrokeMm: '89.9 mm × 100.76 mm',
    cylinders: 5,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 2 - 4 - 5 - 3',
    powerOutput: '200 PS @ 3,000 RPM',
    torqueOutput: '470 N·m @ 1,500–2,750 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Heavy Timing Chain စနစ်)',
    commonVehicles: ['Ford Ranger Wildtrak 3.2 4x4', 'Ford Everest 3.2 Titanium 4WD', 'Mazda BT-50 3.2 (Ford OEM)', 'Ford Transit 3.2 Van'],
    commonVehiclesMm: 'Ford Ranger Wildtrak 3.2၊ Ford Everest 3.2၊ Mazda BT-50 3.2',
    valveClearance: {
      intakeColdMm: 'Hydraulic Auto Lash Adjuster (HLA အလိုအလျောက်ညှိစနစ်)',
      exhaustColdMm: 'Hydraulic Auto Lash Adjuster (HLA)',
      methodMm: 'Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက်ညှိဖလား - ချိန်စရာမလို)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4, notesMm: 'အလယ်မှစ၍ ၁၀ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: 'ဒုတိယအဆင့် ၄၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°', notesMm: 'အင်ဂျင်ပူးလီး ဘလော့ခတ်ကျပ်ရန်' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: 35, kgfCm: 357, lbfFt: 25.8 },
      { component: 'Injector Clamp Bolt', componentMm: 'နော်ဇယ် ဖိဘルト', nm: 28, kgfCm: 285, lbfFt: 20.6 },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 34, kgfCm: 347, lbfFt: 25 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 18 head bolts from center outward to 10 N·m', descriptionMm: 'ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၁၀ N·m ကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque all bolts to 40 N·m', descriptionMm: 'ဒုတိယအဆင့် ၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '40 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise (total 180°)', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Insert crankshaft locking pin into flywheel TDC hole behind starter motor.',
      crankshaftMm: 'ခရိုင်းရှပ် လော့ပင် (Locking Pin) ကို စတာတာမော်တာအနောက်ဘက် အပေါက်ထဲ ထိုးချိန်ပါ။',
      camshaft: 'Insert 6mm locking pins through intake and exhaust camshaft sprockets.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အပေါက်ထဲ ၆ မမ လော့ကင်းပင် (Pins) ထိုးသွင်းပါ။',
      pump: 'High pressure fuel pump sprocket alignment.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် စပရော့ကတ် တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: '၅ လုံးထိုး အင်ဂျင်ဖြစ်ပြီး မီးပေါက်စဉ် (1-2-4-5-3) အတိုင်း အလုပ်လုပ်ပါသည်။ အင်ဂျင်ဝိုင်လဲလှယ်ရာတွင် ပန့်ဆီမခမ်းစေရန် ၁၀ မိနစ်အတွင်း ပြီးစီးအောင် လဲလှယ်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Siemens VDO ပီဇိုနော်ဇယ် စနစ်'
    },
    fluids: {
      oilWithFilter: '9.8 L',
      oilWithoutFilter: '9.0 L',
      oilGrade: '5W-30 (Ford WSS-M2C913-C / WSS-M2C913-D Specification)',
      coolantCapacity: '12.0 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 2. FORD DURATORQ 2.2L (Inline-4 Puma Engine - Ford Ranger 2.2 / Everest 2.2)
  {
    id: 'uk-ford-puma-22',
    brand: 'ISUZU',
    code: 'Ford Duratorq 2.2L (Puma 4-Cyl)',
    series: 'FORD_PUMA',
    seriesTitle: 'Ford Ranger & Everest 2.2L (Puma P4AT)',
    seriesTitleMm: 'Ford Ranger & Everest ၂.၂ လီတာ (၄ လုံးထိုး)',
    name: '2.2L Inline-4 DOHC 16-Valve TDCi Turbo (Ford Ranger / Everest / Transit)',
    nameMm: '၂.၂ လီတာ ၄ လုံးထိုး DOHC ၁၆ ဗား TDCi တာဘို (Ranger 2.2 / Everest 2.2)',
    type: 'Inline-4 DOHC 16-Valve Common Rail Turbocharged Intercooler Diesel Engine',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား မြန်မာပြည်တွင် အစီးရေ အများဆုံး Ford ပစ်ကပ်အင်ဂျင်',
    fuelSystem: 'Continental / Siemens VDO Common Rail System (1,800 bar)',
    fuelSystemMm: 'Continental / Siemens VDO ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 2198,
    boreStrokeMm: '86.0 mm × 94.6 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '125 – 160 PS @ 3,700 RPM',
    torqueOutput: '330 – 385 N·m @ 1,600–2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Single Heavy Timing Chain စနစ်)',
    commonVehicles: ['Ford Ranger XLT / XLS 2.2L', 'Ford Everest 2.2L Trend / Titanium', 'Mazda BT-50 2.2L', 'Ford Transit 2.2'],
    commonVehiclesMm: 'Ford Ranger 2.2 ပစ်ကပ်၊ Ford Everest 2.2 SUV၊ Mazda BT-50 2.2',
    valveClearance: {
      intakeColdMm: 'Hydraulic Auto Lash Adjuster (HLA)',
      exhaustColdMm: 'Hydraulic Auto Lash Adjuster (HLA)',
      methodMm: 'Hydraulic Lash Adjuster (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 40, kgfCm: 408, lbfFt: 29.5 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 34, kgfCm: 347, lbfFt: 25 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 head bolts from center outward to 10 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၁၀ N·m ကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque all bolts to 40 N·m', descriptionMm: '၄၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '40 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Insert crankshaft timing pin into flywheel hole at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ် လော့ပင်ကို ဖလိုင်းဝီးလ် အပေါက်ထဲ 0° TDC ချိန်ပါ။',
      camshaft: 'Insert 6mm pins into camshaft sprockets.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အပေါက်ထဲ ၆ မမ ပင် ထိုးချိန်ပါ။',
      pump: 'High pressure pump drive gear alignment.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'အင်ဂျင်ဝိုင်လဲလှယ်ပါက အင်ဂျင်ဝိုင်ပန့် (Variable Oil Pump) ဆီမခမ်းစေရန် ၁၀ မိနစ်အတွင်း ပြီးစီးအောင် ဖြည့်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '180 MPa',
      notesMm: 'Continental Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '8.6 L',
      oilWithoutFilter: '8.0 L',
      oilGrade: '5W-30 (Ford WSS-M2C913-D Specification)',
      coolantCapacity: '10.5 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 3. FORD ECOBLUE 2.0L (Panther Bi-Turbo - Ranger Raptor / Everest New Generation)
  {
    id: 'uk-ford-ecoblue-20',
    brand: 'ISUZU',
    code: 'Ford 2.0L EcoBlue (Bi-Turbo Panther)',
    series: 'FORD_PANTHER',
    seriesTitle: 'Ford Ranger Raptor & Everest New (Panther 2.0L)',
    seriesTitleMm: 'Ford Ranger Raptor & Everest (၂.၀ လီတာ တာဘိုစုံ)',
    name: '2.0L DOHC 16-Valve Bi-Turbo EcoBlue Clean Diesel (Ranger Raptor / Everest)',
    nameMm: '၂.၀ လီတာ DOHC ၁၆ ဗား Bi-Turbo EcoBlue (Ranger Raptor / Everest New)',
    type: 'Inline-4 DOHC 16-Valve Twin-Turbocharged Common Rail EcoBlue Diesel Engine',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တာဘို ၂ လုံးစုံ ခေတ်သစ် Raptor အင်ဂျင်',
    fuelSystem: 'Bosch Piezoelectric Common Rail System (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် (2,000 bar)',
    displacementCc: 1996,
    boreStrokeMm: '84.0 mm × 90.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '213 PS @ 3,750 RPM',
    torqueOutput: '500 N·m @ 1,750–2,000 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် (Belt-in-Oil / BIO အင်ဂျင်ဝိုင်စိမ် ခါးပတ်စနစ်)',
    commonVehicles: ['Ford Ranger Raptor 2.0 Bi-Turbo', 'Ford Ranger Wildtrak 2.0 Bi-Turbo', 'Ford Everest Titanium+ 2.0 Bi-Turbo 4WD', 'Ford Transit Custom EcoBlue'],
    commonVehiclesMm: 'Ford Ranger Raptor၊ Ranger Wildtrak 2.0၊ Ford Everest Titanium+ 2.0 Bi-Turbo',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 65, kgfCm: 663, lbfFt: 48 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.5 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 28, kgfCm: 285, lbfFt: 20.6 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 10 head bolts from center outward to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 65 N·m', descriptionMm: '၆၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '65 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with Ford Panther alignment tool at TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို Panther သီးသန့် တိုက်မင်တူးလ်ဖြင့် 0° TDC ချိန်ပါ။',
      camshaft: 'Lock camshafts with dedicated alignment pin plate.',
      camshaftMm: 'ကမ်ရှပ် ၂ ချောင်းကို အနောက်ဘက်မှ ပလိတ်ပြားဖြင့် လော့ခတ်ပါ။',
      pump: 'High pressure fuel pump alignment.',
      pumpMm: 'ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'Ford EcoBlue တွင် တိုက်မင်ခါးပတ်သည် အင်ဂျင်ဝိုင်ထဲတွင် လည်ပတ်သော (Belt-in-Oil / Wet Belt) စနစ်ဖြစ်သဖြင့် Ford WSS-M2C950-A စံနှုန်းပြည့် 0W-30 အင်ဂျင်ဝိုင် သီးသန့်သာ သုံးရပါမည် (မဟုတ်ပါက ခါးပတ်ကြွေကျ ပျက်စီးတတ်သည်)။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 40 MPa',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'Bosch Piezo Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '7.0 L',
      oilWithoutFilter: '6.5 L',
      oilGrade: '0W-30 (Ford WSS-M2C950-A Low SAPS Synthetic - အထူးသတိပြုရန်)',
      coolantCapacity: '9.5 L',
      fuelTankCapacity: '80 L'
    }
  },

  // 4. LAND ROVER 3.0L TDV6 / SDV6 (AJD-V6 - Range Rover Sport / Discovery 4)
  {
    id: 'uk-landrover-tdv6',
    brand: 'ISUZU',
    code: 'Range Rover 3.0L TDV6 / SDV6',
    series: 'LANDROVER_TDV6',
    seriesTitle: 'Land Rover & Range Rover (3.0L TDV6 / SDV6)',
    seriesTitleMm: 'Range Rover & Discovery (၃.၀ လီတာ V6 တာဘိုစုံ)',
    name: '3.0L 60° V6 24-Valve Sequential Twin-Turbo Diesel (Range Rover Sport / Discovery)',
    nameMm: '၃.၀ လီတာ V6 ၂၄ ဗား Twin-Turbo တာဘိုစုံ (Range Rover Sport / Discovery 4)',
    type: '60-degree V6 DOHC 24-Valve Twin-Turbocharged Common Rail Diesel Engine',
    typeMm: 'V6 ဆလင်ဒါ ၆ လုံးထိုး ၂၄ ဗား ဗြိတိန် ဇိမ်ခံ SUV ဘုရင် ဒီဇယ်အင်ဂျင်',
    fuelSystem: 'Bosch Piezo Common Rail High-Pressure Injection (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် (2,000 bar)',
    displacementCc: 2993,
    boreStrokeMm: '84.0 mm × 90.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 4 - 2 - 5 - 3 - 6',
    powerOutput: '245 – 306 PS @ 4,000 RPM',
    torqueOutput: '600 – 700 N·m @ 1,500–2,500 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် ၂ ချောင်း (Front Timing Belt + Rear High-Pressure Pump Belt)',
    commonVehicles: ['Range Rover Sport 3.0 SDV6 (မြန်မာပြည် ဇိမ်ခံ SUV အပေါဆုံး)', 'Land Rover Discovery 4 3.0 TDV6', 'Range Rover Vogue 3.0 TDV6', 'Jaguar XF / XJ 3.0 Diesel'],
    commonVehiclesMm: 'Range Rover Sport 3.0 SDV6၊ Land Rover Discovery 4၊ Range Rover Vogue',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 25, kgfCm: 255, lbfFt: 18.5, notesMm: 'အလယ်မှစ၍ ၂၅ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '30 + 90°', kgfCm: '306 + 90°', lbfFt: '22 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '23 + 90°', kgfCm: '235 + 90°', lbfFt: '17 + 90°' },
      { component: 'Crankshaft Pulley Center Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 8 head bolts per cylinder bank to 25 N·m', descriptionMm: 'ဘဏ်တစ်ခုစီရှိ ခေါင်းဘルト ၈ လုံးကို ၂၅ N·m ကျပ်ပါ', torque: '25 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 16,
    timingMarksGuide: {
      crankshaft: 'Insert crankshaft locking pin into flywheel at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ် လော့ပင်ကို ဖလိုင်းဝီးလ် TDC အပေါက်ထဲ ထိုးချိန်ပါ။',
      camshaft: 'Insert locking pins into front intake camshaft sprockets.',
      camshaftMm: 'အရှေ့ကမ်ရှပ် စပရော့ကတ် အပေါက်များထဲ လော့ပင် ထိုးချိန်ပါ။',
      pump: 'Rear high-pressure fuel pump timing belt marks alignment.',
      pumpMm: 'အင်ဂျင်နောက်ဘက်ရှိ ဆီပန့်ခါးပတ် အမှတ်သား တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: 'TDV6 အင်ဂျင်တွင် အရှေ့ဘက် တိုက်မင်ခါးပတ်အပြင် အနောက်ဘက်တွင် ဖိအားမြင့်ဆီပန့်မောင်း ခါးပတ် ၁ ချောင်း သီးခြားပါရှိသည်ကို သတိပြုပါ။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 – 40 MPa',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'Bosch Piezo Injector စနစ်'
    },
    fluids: {
      oilWithFilter: '6.0 L',
      oilWithoutFilter: '5.5 L',
      oilGrade: '5W-30 (Castrol Edge Professional / Jaguar Land Rover STJLR.03.5005)',
      coolantCapacity: '11.0 L',
      fuelTankCapacity: '85 L'
    }
  },

  // 5. LAND ROVER INGENIUM 2.0L (AJ200D - Range Rover Evoque / Defender / Discovery Sport)
  {
    id: 'uk-landrover-ingenium-20',
    brand: 'ISUZU',
    code: 'Range Rover Ingenium 2.0L (AJ200D)',
    series: 'LANDROVER_INGENIUM',
    seriesTitle: 'Land Rover Ingenium Clean Diesel (2.0L)',
    seriesTitleMm: 'Land Rover Ingenium ဒီဇယ် (၂.၀ လီတာ)',
    name: '2.0L Inline-4 DOHC 16-Valve Ingenium Turbo Diesel (Evoque / Defender)',
    nameMm: '၂.၀ လီတာ DOHC ၁၆ ဗား Ingenium တာဘို (Evoque / Defender / Discovery Sport)',
    type: 'Inline-4 DOHC 16-Valve All-Aluminum Common Rail Turbocharged Clean Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား အလူမီနီယမ် ခေတ်သစ် ဗြိတိန် Ingenium ဒီဇယ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,800 – 2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်',
    displacementCc: 1999,
    boreStrokeMm: '83.0 mm × 92.4 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '150 – 240 PS @ 4,000 RPM',
    torqueOutput: '380 – 500 N·m @ 1,500–2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Timing Chain System - အနောက် Flywheel ဘက်ခြမ်းစနစ်)',
    commonVehicles: ['Range Rover Evoque 2.0 Diesel', 'Land Rover Defender New Model (D200/D240)', 'Land Rover Discovery Sport', 'Jaguar F-Pace 2.0d'],
    commonVehiclesMm: 'Range Rover Evoque၊ Land Rover Defender အသစ်၊ Discovery Sport',
    valveClearance: {
      intakeColdMm: 'Hydraulic Lash Adjusters (HLA)',
      exhaustColdMm: 'Hydraulic Lash Adjusters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '40 + 90°', kgfCm: '408 + 90°', lbfFt: '29.5 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '20 + 90°', kgfCm: '204 + 90°', lbfFt: '14.7 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 24, kgfCm: 245, lbfFt: 17.7 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 head bolts from center outward to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with JLR special tool at 0° TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို JLR သီးသန့် တိုက်မင်တူးလ်ဖြင့် 0° TDC ချိန်ပါ။',
      camshaft: 'Rear camshaft timing sprockets locking plate.',
      camshaftMm: 'အနောက်ကမ်ရှပ် စပရော့ကတ်များကို လော့ကင်းပလိတ်ဖြင့် သော့ခတ်ပါ။',
      pump: 'High pressure fuel pump chain synchronization.',
      pumpMm: 'ဆီပန့်ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: 'Ingenium အင်ဂျင်တွင် တိုက်မင်ကြိုးသည် အင်ဂျင်နောက်ဘက်တွင် ရှိပြီး ချိန်ကြိုးနှင့် Tensioner သံဆူညံပါက အသစ်လဲလှယ်ရန် လိုအပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '200 MPa',
      notesMm: 'Bosch Common Rail စနစ်'
    },
    fluids: {
      oilWithFilter: '6.5 L',
      oilWithoutFilter: '6.0 L',
      oilGrade: '0W-30 (Jaguar Land Rover STJLR.03.5007 Specification)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '65 L / 85 L'
    }
  }
];
