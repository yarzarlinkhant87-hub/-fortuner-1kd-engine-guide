import { MultiBrandEngineSpec } from './isuzuDieselData';

export const EUROPE_SERIES_CATEGORIES = [
  { id: 'ALL', name: 'All Germany (ဂျာမနီ အားလုံး)', desc: 'ဂျာမနီ MAN, Mercedes, BMW, Audi, VW ဒီဇယ်အင်ဂျင်များ အားလုံး' },
  { id: 'MAN_TRUCKS', name: 'MAN Trucks (2.0L ~ 15.2L တွဲကား/ကုန်တင်)', desc: 'MAN TGE (2.0L), TGL (4.6L), TGM (6.9L), TGS (10.5L), TGX (12.4L), D38 (15.2L)' },
  { id: 'BENZ_CARS_VANS', name: 'Mercedes Cars & Vans (2.1L / 3.0L)', desc: 'Sprinter ဗင်ကား၊ C/E/ML Class OM651 (2.1L) & OM642 (3.0L V6 CDI)' },
  { id: 'BENZ_ACTROS', name: 'Mercedes Heavy Trucks (12.0L ~ 15.9L)', desc: 'Actros OM501 (12.0L V6), OM471 (12.8L I6), OM502 (15.9L V8)' },
  { id: 'BMW_DIESEL', name: 'BMW TwinPower (2.0L / 3.0L)', desc: 'BMW 320d, 520d, X3, X5 2.0L 4-Cyl & 3.0L 6-Cyl (N47/B47/N57)' },
  { id: 'VAG_AUDI_VW', name: 'Audi & VW TDI (2.0L / 3.0L / 4.2L)', desc: 'VW Amarok ပစ်ကပ်၊ Audi Q5, Q7 3.0 V6 & 4.2 V8 TDI' },
];

export const EUROPE_DIESEL_ENGINES: MultiBrandEngineSpec[] = [
  // ==========================================
  // MAN TRUCKS & COMMERCIAL (အသေးမှ အကြီး အစဉ်လိုက်)
  // ==========================================

  // 1. MAN TGE 2.0 TDI (1,968 cc - အသေးစား ဗင်ကား)
  {
    id: 'euro-man-tge',
    brand: 'ISUZU',
    code: 'MAN TGE 2.0 TDI (D038)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Light Commercial (TGE Van)',
    seriesTitleMm: 'MAN ဂျာမနီ အသေးစား ကုန်တင်ဗင်ကား (TGE 2.0 TDI)',
    name: '2.0L Inline-4 Common Rail Bi-Turbo Diesel (MAN TGE Series)',
    nameMm: '၂.၀ လီတာ ၄ လုံးထိုး Bi-Turbo ကွန်မန်ရေးလ် (MAN TGE ဗင်ကား / အသေးစား)',
    type: 'Inline-4 DOHC 16-Valve Bi-Turbocharged Intercooler Bosch Common Rail Light Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား Bi-Turbo တာဘိုစုံတွဲ ကွန်မန်ရေးလ် အသေးစား ဒီဇယ်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 1968,
    boreStrokeMm: '81.0 mm × 95.5 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '15.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '140 – 177 PS @ 3,600 RPM',
    torqueOutput: '340 – 410 N·m @ 1,500 – 2,000 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် (Heavy Duty Timing Belt with Auto Tensioner)',
    commonVehicles: [
      'MAN TGE 3.140 / 3.180 Panel Van (ကုန်စည်ပို့ဆောင်ရေး ဗင်ကား)',
      'MAN TGE 5.180 Cab Chassis (ပေါ့ပါးဝန်ဆောင်မှု ကုန်တင်ယာဉ်)',
      'MAN TGE Camper Van & Minibus'
    ],
    commonVehiclesMm: 'MAN TGE ကုန်စည်ပို့ဆောင်ရေး ဗင်ကား၊ အသေးစား ကုန်တင်ကား၊ ခရီးသည်တင် မီနီဗင်',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ဘားချိန်စနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ အဆင့် ၁ ၃၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 50, kgfCm: 510, lbfFt: 36.9, notesMm: 'အဆင့် ၂ ၅၀ N·m သို့ တိုးကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '65 + 90°', kgfCm: '663 + 90°', lbfFt: '48 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '30 + 90°', kgfCm: '306 + 90°', lbfFt: '22 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '60 + 90°', kgfCm: '612 + 90°', lbfFt: '44 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 bolts in spiral sequence to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 50 N·m', descriptionMm: '၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '50 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with VW/MAN locking tool at TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို သီးသန့် လော့ကင်းတူးလ်ဖြင့် TDC အမှတ်တွင် လော့ခတ်ပါ။',
      camshaft: 'Insert 6mm locking pin into camshaft sprocket hole.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အပေါက်ထဲ ၆ မမ လော့ကင်းပင် (Pin) ထိုးသွင်းပါ။',
      pump: 'Lock high-pressure fuel pump sprocket with pin.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့် စပရော့ကတ်ကို ပင်ဖြင့် ထိန်းထားပါ။',
      notesMm: 'MAN TGE သည် VW Crafter နှင့် ညီနောင်ဖြစ်ပြီး အကြမ်းခံ အရည်အသွေးမြင့် ကုန်စည်ပို့ဆောင်ရေး ဗင်ကားများတွင် အသုံးများပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '25 – 30 MPa (250 – 300 bar)',
      pressureMax: '200 MPa (2,000 bar)',
      notesMm: 'Bosch Common Rail ဖိအားမြင့်စနစ်'
    },
    fluids: {
      oilWithFilter: '7.4 L',
      oilWithoutFilter: '7.0 L',
      oilGrade: '5W-30 (VW 507.00 / MAN M 3677 Low SAPS)',
      coolantCapacity: '9.0 L',
      fuelTankCapacity: '75 L'
    }
  },

  // 2. MAN D0834 (4,580 cc / 4.6L - အလတ်/အသေး ကုန်တင်ကား TGL)
  {
    id: 'euro-man-d0834',
    brand: 'ISUZU',
    code: 'MAN D0834 (4.6L 4-Cyl)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Medium Duty (TGL 7.5t – 12t)',
    seriesTitleMm: 'MAN ဂျာမနီ အလတ်/အသေးစား ကုန်တင်ကား (TGL ၄ လုံးထိုး)',
    name: '4.6L Inline-4 OHC 16-Valve Common Rail Turbo Diesel (MAN TGL Series)',
    nameMm: '၄.၆ လီတာ ၄ လုံးထိုး ၁၆ ဗား ကွန်မန်ရေးလ် တာဘို (MAN TGL 7.5t – 12t ကုန်တင်ကား)',
    type: 'Inline-4 OHC 16-Valve Turbocharged Intercooler Bosch Common Rail EDC Diesel',
    typeMm: '၄ လုံးထိုး OHC ၁၆ ဗား ဂီယာအပြည့် တာဘို ကွန်မန်ရေးလ် အလတ်စား ကုန်တင်ကားအင်ဂျင်',
    fuelSystem: 'Bosch High-Pressure Common Rail EDC System (1,600 – 1,800 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် EDC စနစ် (1,800 bar)',
    displacementCc: 4580,
    boreStrokeMm: '108.0 mm × 125.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '150 – 220 PS @ 2,400 RPM',
    torqueOutput: '570 – 850 N·m @ 1,200 – 1,750 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Helical Gear Train - အနောက်ဘက် တိကျဂီယာစနစ်)',
    commonVehicles: [
      'MAN TGL 8.180 / 8.220 Distribution Truck (၇.၅ တန် ကုန်တင်ကား)',
      'MAN TGL 10.180 / 12.220 Box / Refrigerated Truck (၁၂ တန် အလတ်စား ကုန်တင်ကား)',
      'MAN TGL Light Tipper & Recovery Truck'
    ],
    commonVehiclesMm: 'MAN TGL 7.5t / 12t ကုန်တင်ကား၊ ကုန်စည်ပို့ဆောင်ရေး ကား၊ အအေးခန်းကား၊ မီးသတ်ကား',
    valveClearance: {
      intakeColdMm: '0.50 mm',
      exhaustColdMm: '0.50 mm (EVB Exhaust Valve Brake: 0.35 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.50 mm / Exhaust 0.50 mm - EVB 0.35 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (M14 Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'ဒုတိယအဆင့် ၇၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '110 + 90° + 90°', kgfCm: '1120 + 90° + 90°', lbfFt: '81 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '80 + 90°', kgfCm: '816 + 90°', lbfFt: '59 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all M14 bolts from center outward to 30 N·m', descriptionMm: 'ခေါင်းဘルトများကို အလယ်မှစ၍ အပြင်သို့ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 70 N·m', descriptionMm: '၇၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '70 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 18,
    timingMarksGuide: {
      crankshaft: 'Align flywheel TDC pointer with mark at 0° on timing case.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် TDC အမှတ်ကို 0° တွင် တည့်တည့်ချိန်ပါ။',
      camshaft: 'Rear camshaft gear timing marks match idler gear punch mark.',
      camshaftMm: 'အနောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်ကို အိုင်ဒလာဂီယာ အမှတ်နှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure pump gear alignment.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ဂီယာ အမှတ်တိုက်ပါ။',
      notesMm: 'EVB (Exhaust Valve Brake) စနစ်ပါဝင်ပြီး ဘားချိန်ရာတွင် ကင်းပွန်းအထူးဂရုပြုရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Bosch EDC Common Rail'
    },
    fluids: {
      oilWithFilter: '15.0 L',
      oilWithoutFilter: '13.5 L',
      oilGrade: '10W-40 (MAN M 3277 / M 3477 Low SAPS)',
      coolantCapacity: '20.0 L',
      fuelTankCapacity: '150 L / 200 L'
    }
  },

  // 3. MAN D0836 (6,871 cc / 6.9L - အလတ်စား ကုန်တင်ကား & ဘတ်စ်ကား TGM)
  {
    id: 'euro-man-d0836',
    brand: 'ISUZU',
    code: 'MAN D0836 (6.9L 6-Cyl)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Medium Heavy (TGM 12t – 26t)',
    seriesTitleMm: 'MAN ဂျာမနီ အလတ်စား ၆ လုံးထိုး ကုန်တင်ကား (TGM / ဘတ်စ်)',
    name: '6.9L Inline-6 OHC 24-Valve Common Rail Turbo Diesel (MAN TGM & Bus Series)',
    nameMm: '၆.၉ လီတာ ၆ လုံးထိုး ၂၄ ဗား ကွန်မန်ရေးလ် တာဘို (MAN TGM 12t – 26t & ခရီးသည်တင်ဘတ်စ်)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Bosch Common Rail EDC Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ဂီယာအပြည့် တာဘို ကွန်မန်ရေးလ် အလတ်စား ကုန်တင်ကားနှင့် ဘတ်စ်ကား',
    fuelSystem: 'Bosch High-Pressure Common Rail EDC System (1,800 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် EDC စနစ် (1,800 bar)',
    displacementCc: 6871,
    boreStrokeMm: '108.0 mm × 125.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '250 – 340 PS @ 2,300 RPM',
    torqueOutput: '1,000 – 1,250 N·m @ 1,200 – 1,750 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Helical Gear Train - အနောက်ဘက် တိကျဂီယာစနစ်)',
    commonVehicles: [
      'MAN TGM 18.250 / 18.290 Heavy Rigid Truck (၁၈ တန် ကုန်တင်ကား)',
      'MAN TGM 26.340 6x4 Dump / Mixer Truck (၂၆ တန် ကားကြီး)',
      'MAN Lion’s City City Bus & Lion’s Intercity Coach (ခရီးသည်တင် အဝေးပြေးဘတ်စ်)'
    ],
    commonVehiclesMm: 'MAN TGM ၁၈ တန် / ၂၆ တန် ကုန်တင်ကား၊ MAN Lion’s Coach အဝေးပြေးဘတ်စ်ကားကြီးများ',
    valveClearance: {
      intakeColdMm: '0.50 mm',
      exhaustColdMm: '0.50 mm (EVB Exhaust Valve Brake: 0.35 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.50 mm / Exhaust 0.50 mm - EVB 0.35 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (M14 Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'ဒုတိယအဆင့် ၇၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (M14 Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '110 + 90° + 90°', kgfCm: '1120 + 90° + 90°', lbfFt: '81 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '80 + 90°', kgfCm: '816 + 90°', lbfFt: '59 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all M14 bolts in sequence from center to 30 N·m', descriptionMm: 'ခေါင်းဘルトများကို အလယ်မှစ၍ အပြင်သို့ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 70 N·m', descriptionMm: '၇၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '70 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC အမှတ် 0° တွင် တည့်တည့်ချိန်ပါ။',
      camshaft: 'Rear camshaft gear timing marks match intermediate gear.',
      camshaftMm: 'အနောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure pump timing alignment.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ဂီယာ အမှတ်တိုက်ပါ။',
      notesMm: '၆ လုံးထိုး အင်ဂျင်ဖြစ်၍ မီးပေါက်စဉ် 1-5-3-6-2-4 ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Bosch EDC Common Rail'
    },
    fluids: {
      oilWithFilter: '23.0 L',
      oilWithoutFilter: '21.0 L',
      oilGrade: '10W-40 (MAN M 3277 / M 3477 Heavy Duty)',
      coolantCapacity: '28.0 L',
      fuelTankCapacity: '200 L / 300 L'
    }
  },

  // 4. MAN D2066 (10,518 cc / 10.5L - ၁၀ ဘီး မြေသယ်ယာဉ် & တွဲကားဆွဲခေါင်း TGA / TGS)
  {
    id: 'euro-man-d2066',
    brand: 'ISUZU',
    code: 'MAN D2066 (10.5L Common Rail)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Heavy Construction (TGS / TGA 10.5L)',
    seriesTitleMm: 'MAN ဂျာမနီ ၁၀ ဘီး မြေသယ်ယာဉ် & တွဲကား (TGS / TGA)',
    name: '10.5L Inline-6 OHC 24-Valve Common Rail Turbo (MAN TGS / TGA Series)',
    nameMm: '၁၀.၅ လီတာ ၆ လုံးထိုး ၂၄ ဗား ကွန်မန်ရေးလ် (MAN TGS / TGA ၁၀ ဘီး & တွဲကား)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Bosch Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား အနောက်ဂီယာစနစ် ဖိအားမြင့် ကွန်မန်ရေးလ် ကားကြီးအင်ဂျင်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,800 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,800 bar)',
    displacementCc: 10518,
    boreStrokeMm: '120.0 mm × 155.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '310 – 440 PS @ 1,900 RPM',
    torqueOutput: '1,550 – 2,100 N·m @ 1,000 – 1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Precision Gear Train - အနောက်ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'MAN TGS 26.400 / 33.400 Construction Tipper (၁၀ ဘီး မြေသယ်ယာဉ်ကြီးများ)',
      'MAN TGS Concrete Mixer & Heavy Crane Truck',
      'MAN TGA 18.360 / 18.400 Regional Tractor Trailer (ဒေသတွင်းဆွဲ တွဲကားဆွဲခေါင်းများ)'
    ],
    commonVehiclesMm: 'MAN TGS ၁၀ ဘီး မြေသယ်ယာဉ်၊ ကွန်ကရစ်ဖျော်ကား၊ MAN TGA တွဲကားဆွဲခေါင်းများ',
    valveClearance: {
      intakeColdMm: '0.50 mm',
      exhaustColdMm: '0.80 mm (EVB Exhaust Valve Brake: 0.60 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.50 mm / Exhaust 0.80 mm - EVB 0.60 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4, notesMm: 'အလယ်မှစ၍ ၁၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 150, kgfCm: 1530, lbfFt: 110, notesMm: 'ဒုတိယအဆင့် ၁၅၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 300, kgfCm: 3060, lbfFt: 221, notesMm: 'တတိယအဆင့် ၃၀၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '100 + 90° + 90°', kgfCm: '1020 + 90° + 90°', lbfFt: '74 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '100 + 90° + 90°', kgfCm: '1020 + 90° + 90°', lbfFt: '74 + 90° + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all head bolts in spiral pattern to 10 N·m', descriptionMm: 'ခေါင်းဘルトများကို အလယ်မှစ၍ ခရုပတ်ပုံစံ ၁၀ N·m ကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque to 150 N·m', descriptionMm: '၁၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '150 N·m' },
      { step: 3, description: 'Torque to 300 N·m', descriptionMm: '၃၀၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '300 N·m' },
      { step: 4, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC 0° ချိန်ပါ။',
      camshaft: 'Rear camshaft gear timing marks match intermediate gear.',
      camshaftMm: 'အနောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure Bosch common rail pump alignment.',
      pumpMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'D2066 သည် D2676 နှင့် ဘလောက်တူညီပြီး ဆလင်ဒါအချင်း Bore (120mm) သာကွာခြားပါသည်။ တရုတ် Howo MC11 ၏ မူရင်းမိခင်အင်ဂျင်ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '180 MPa (1,800 bar)',
      notesMm: 'Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '38.0 L',
      oilWithoutFilter: '34.0 L',
      oilGrade: '10W-40 / 15W-40 (MAN M 3477 / M 3677 Heavy Duty)',
      coolantCapacity: '45.0 L',
      fuelTankCapacity: '400 L / 500 L'
    }
  },

  // 5. MAN D2676 (12,419 cc / 12.4L - ဆိပ်ကမ်းဆွဲ တွဲကားဘုရင် TGX & Howo MC11/13 မိခင်)
  {
    id: 'euro-man-d26',
    brand: 'ISUZU',
    code: 'MAN D2676 (12.4L Prime Mover)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Long-Haul Highway (TGX 12.4L)',
    seriesTitleMm: 'MAN ဂျာမနီ ဆိပ်ကမ်းဆွဲ တွဲကားဘုရင် (TGX 18.440/480/540)',
    name: '12.4L Inline-6 OHC 24-Valve Common Rail Turbo (MAN TGX Long-Haul)',
    nameMm: '၁၂.၄ လီတာ ၆ လုံးထိုး ၂၄ ဗား (MAN TGX တွဲကားဘုရင် & Howo MC11/MC13 မိခင်)',
    type: 'Inline-6 OHC 24-Valve Turbocharged Intercooler Bosch Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား ကမ္ဘာ့အကြမ်းဆုံး ဂျာမနီ MAN TGX အဝေးပြေးဆိပ်ကမ်းဆွဲ တွဲကားကြီး',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,800 – 2,200 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,200 bar)',
    displacementCc: 12419,
    boreStrokeMm: '126.0 mm × 166.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.0:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '440 – 540 PS @ 1,800 RPM',
    torqueOutput: '2,100 – 2,600 N·m @ 930–1,400 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Precision Gear Train - အနောက်ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'MAN TGX 18.440 / 18.480 / 18.540 Prime Mover Trailer (ကွန်တိန်နာဆွဲခေါင်းကြီးများ)',
      'MAN TGA Heavy Hauler Trailer',
      'MAN TGS Heavy Construction Dump Truck',
      'Sinotruk Howo T7H / A7 (MAN License MC11/MC13 OEM မိခင်)'
    ],
    commonVehiclesMm: 'MAN TGX/TGA ဆိပ်ကမ်းဆွဲ တွဲကားဆွဲခေါင်းကြီးများ၊ Sinotruk Howo MC11/MC13 ၏ မူရင်းမိခင်',
    valveClearance: {
      intakeColdMm: '0.50 mm',
      exhaustColdMm: '0.80 mm (EVB Exhaust Valve Brake: 0.60 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.50 mm / Exhaust 0.80 mm - EVB ဘရိတ်စနစ် 0.60 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4, notesMm: 'အလယ်မှစ၍ ၁၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 150, kgfCm: 1530, lbfFt: 110, notesMm: 'ဒုတိယအဆင့် ၁၅၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 300, kgfCm: 3060, lbfFt: 221, notesMm: 'တတိယအဆင့် ၃၀၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '100 + 90° + 90°', kgfCm: '1020 + 90° + 90°', lbfFt: '74 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '100 + 90° + 90°', kgfCm: '1020 + 90° + 90°', lbfFt: '74 + 90° + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 head bolts from center outward to 10 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ အပြင်သို့ ၁၀ N·m ကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque to 150 N·m', descriptionMm: '၁၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '150 N·m' },
      { step: 3, description: 'Torque to 300 N·m', descriptionMm: '၃၀၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '300 N·m' },
      { step: 4, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC 0° ချိန်ပါ။',
      camshaft: 'Rear camshaft gear timing marks match intermediate gear.',
      camshaftMm: 'အနောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure Bosch common rail pump synchronization.',
      pumpMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ဂီယာ ချိန်ညှိပါ။',
      notesMm: 'ဂျာမနီ MAN သည် တရုတ် Sinotruk Howo တွင် သုံးသော MC11/MC13 အင်ဂျင်၏ မူရင်းနည်းပညာဖြစ်ပြီး EVB (Exhaust Valve Brake) စနစ် ပါဝင်သောကြောင့် အိတ်ဇောဘား ညှိရာတွင် အထူးသတိပြုရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa (300 – 350 bar)',
      pressureMax: '220 MPa (2,200 bar)',
      notesMm: 'Bosch High-Pressure Common Rail System'
    },
    fluids: {
      oilWithFilter: '42.0 L',
      oilWithoutFilter: '38.0 L',
      oilGrade: '10W-40 / 15W-40 (MAN M 3677 / M 3477 Heavy Duty Specification)',
      coolantCapacity: '50.0 L',
      fuelTankCapacity: '600 L / 800 L'
    }
  },

  // 6. MAN D3876 (15,256 cc / 15.2L - ၂၅၀ တန်ဆွဲ အကြီးဆုံးတွဲကားဘုရင် TGX D38)
  {
    id: 'euro-man-d3876',
    brand: 'ISUZU',
    code: 'MAN D3876 (15.2L 640HP Heavy)',
    series: 'MAN_TRUCKS',
    seriesTitle: 'MAN Extreme Heavy Transport (TGX D38)',
    seriesTitleMm: 'MAN ဂျာမနီ ၂၅၀ တန်ဆွဲ အကြီးဆုံးတွဲကားဘုရင် (TGX D38 - 640 HP)',
    name: '15.2L Inline-6 OHC 24-Valve Two-Stage Turbo Diesel (MAN TGX D38 Flagship)',
    nameMm: '၁၅.၂ လီတာ ၆ လုံးထိုး ၂၄ ဗား တာဘိုစုံတွဲ (MAN TGX D38 640 HP အကြီးဆုံးတွဲကားဘုရင်)',
    type: 'Inline-6 OHC 24-Valve 2-Stage Turbocharged Common Rail Extreme Heavy Haulage Diesel',
    typeMm: '၆ လုံးထိုး OHC ၂၄ ဗား တာဘိုစုံတွဲ စတီးပစ္စတင် သံမဏိဘလောက် အကြီးဆုံးတွဲကားဘုရင်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (2,500 bar)',
    fuelSystemMm: 'Bosch အလွန်မြင့်မားသော ဖိအား ကွန်မန်ရေးလ် စနစ် (2,500 bar)',
    displacementCc: 15256,
    boreStrokeMm: '138.0 mm × 170.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '540 – 640 PS @ 1,800 RPM',
    torqueOutput: '2,700 – 3,000 N·m @ 930 – 1,350 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Extra Heavy Duty Gear Train - အနောက်ဘက် အကြီးစားဂီယာစနစ်)',
    commonVehicles: [
      'MAN TGX 41.640 8x4 Heavy Haulage Tractor (၂၅၀ တန် ဝန်အလေးဆုံးဆွဲ တွဲကားကြီးများ)',
      'MAN TGX 18.560 / 18.640 Long Distance Flagship Trailer',
      'MAN Heavy Timber & Mining Special Hauler (သစ်လုံးတင်ကားကြီးနှင့် မိုင်းတွင်းယာဉ်ကြီးများ)'
    ],
    commonVehiclesMm: 'MAN TGX D38 640 HP ၂၅၀ တန်ဆွဲ အကြီးစားတွဲကားကြီး၊ သစ်လုံးတင်တွဲကား၊ မိုင်းတွင်းသုံး ယာဉ်ကြီးများ',
    valveClearance: {
      intakeColdMm: '0.50 mm',
      exhaustColdMm: '0.80 mm (Turbo EVB Exhaust Valve Brake: 0.60 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.50 mm / Exhaust 0.80 mm - Turbo EVB 0.60 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 20, kgfCm: 204, lbfFt: 14.7, notesMm: 'အလယ်မှစ၍ ၂၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 180, kgfCm: 1836, lbfFt: 132.7, notesMm: 'ဒုတိယအဆင့် ၁၈၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 350, kgfCm: 3570, lbfFt: 258, notesMm: 'တတိယအဆင့် ၃၅၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '120 + 90° + 90°', kgfCm: '1220 + 90° + 90°', lbfFt: '88 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '110 + 90°', kgfCm: '1120 + 90°', lbfFt: '81 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '120 + 90° + 90°', kgfCm: '1220 + 90° + 90°', lbfFt: '88 + 90° + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 90, kgfCm: 918, lbfFt: 66.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 head bolts from center outward to 20 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၂၀ N·m ကျပ်ပါ', torque: '20 N·m' },
      { step: 2, description: 'Torque to 180 N·m', descriptionMm: '၁၈၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '180 N·m' },
      { step: 3, description: 'Torque to 350 N·m', descriptionMm: '၃၅၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '350 N·m' },
      { step: 4, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC 0° တိကျစွာ ချိန်ပါ။',
      camshaft: 'Rear camshaft gear timing marks match intermediate gear.',
      camshaftMm: 'အနောက်ဘက် ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။',
      pump: 'High pressure common rail pump alignment.',
      pumpMm: 'Bosch 2,500 bar ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ချိန်ညှိပါ။',
      notesMm: 'MAN ၏ အကြီးဆုံးနှင့် စွမ်းအားအမြင့်ဆုံး အင်ဂျင်ဖြစ်ပြီး ၂၅၀ တန် အလေးချိန်ဆွဲနိုင်သော ကမ္ဘာ့အထင်ကရ တွဲကားဘုရင် ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '250 MPa (2,500 bar)',
      notesMm: 'Two-Stage Turbocharger with Common Rail'
    },
    fluids: {
      oilWithFilter: '46.0 L',
      oilWithoutFilter: '42.0 L',
      oilGrade: '10W-40 / 15W-40 (MAN M 3677 Heavy Duty)',
      coolantCapacity: '55.0 L',
      fuelTankCapacity: '600 L / 900 L'
    }
  },

  // ==========================================
  // MERCEDES-BENZ PASSENGER & VAN (အသေး/အလတ်)
  // ==========================================

  // 7. MERCEDES-BENZ OM651 (2,143 cc / 2.1L CDI 4-Cylinder)
  {
    id: 'euro-om651',
    brand: 'ISUZU',
    code: 'Mercedes OM651 (2.1L CDI)',
    series: 'BENZ_CARS_VANS',
    seriesTitle: 'Mercedes Passenger & Van (OM651 2.1L)',
    seriesTitleMm: 'Mercedes Sprinter ဗင်ကား & C/E Class (OM651)',
    name: '2.1L Inline-4 16-Valve CDI Twin-Turbo Diesel (OM651)',
    nameMm: '၂.၁ လီတာ ၄ လုံးထိုး ၁၆ ဗား CDI Twin-Turbo (Sprinter, Vito, C220 CDI, E220 CDI)',
    type: 'Inline-4 DOHC 16-Valve Twin-Turbocharged Common Rail Diesel with Rear Timing Chain',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား CDI ကွန်မန်ရေးလ် (အနောက်ဘက် တိုက်မင်ကြိုးစနစ်)',
    fuelSystem: 'Delphi / Bosch Solenoid/Piezo Common Rail System (1,800 – 2,000 bar)',
    fuelSystemMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 2143,
    boreStrokeMm: '83.0 mm × 99.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.2:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '136 – 204 PS @ 3,800 RPM',
    torqueOutput: '360 – 500 N·m @ 1,600 – 1,800 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Simplex Timing Chain - အနောက်ဘက် တိုက်မင်ကြိုးစနစ်)',
    commonVehicles: [
      'Mercedes-Benz Sprinter 313 / 316 / 516 CDI (ခရီးသည်တင်နှင့် ကုန်စည်ပို့ဆောင်ရေး ဗင်ကားများ)',
      'Mercedes-Benz Vito / V-Class 220 CDI',
      'Mercedes-Benz C220 CDI / C250 CDI (W204 / W205)',
      'Mercedes-Benz E220 CDI / E250 CDI (W212)'
    ],
    commonVehiclesMm: 'Sprinter ဗင်ကားများ၊ Vito၊ C220 CDI၊ E220 CDI၊ GLK 220 CDI',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '60 + 90°', kgfCm: '612 + 90°', lbfFt: '44 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.4 + 90°' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: '18 + 60°', kgfCm: '184 + 60°', lbfFt: '13.3 + 60°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 bolts from center outward in spiral sequence to 30 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ခရုပတ်ပုံစံ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft pulley TDC 0° mark with timing cover pointer.',
      crankshaftMm: 'ခရိုင်းပူးလီး TDC 0° အမှတ်ကို တိုက်မင်ကာဗာနှင့် တိုက်ဆိုင်ပါ။',
      camshaft: 'Rear camshaft sprockets have timing punch marks aligned flat at cylinder head level.',
      camshaftMm: 'အင်ဂျင်အနောက်ဘက် ကမ်ရှပ်စပရော့ကတ် အမှတ်အသားများကို ဆလင်ဒါခေါင်းမျက်နှာပြင်နှင့် ညီညာစွာတိုက်ဆိုင်ပါ။',
      pump: 'High pressure pump driven by intermediate gear.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့်ကို အလယ်ဂီယာမှ မောင်းနှင်ပါသည်။',
      notesMm: 'OM651 အင်ဂျင်၏ ထူးခြားချက်မှာ တိုက်မင်ကြိုးသည် အင်ဂျင်အနောက်ဘက် (ဂီယာဘောက်စ်ဘက်) တွင် ရှိသောကြောင့် တိုက်မင်ကြိုးလဲရာတွင် အင်ဂျင်ချရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '25 – 30 MPa (250 – 300 bar)',
      pressureMax: '180 – 200 MPa (1,800 – 2,000 bar)',
      notesMm: 'Delphi / Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '6.5 L (C/E-Class) / 11.0 L (Sprinter Van)',
      oilWithoutFilter: '6.0 L',
      oilGrade: '5W-30 / 5W-40 (Mercedes MB 229.51 / MB 229.52 Low SAPS)',
      coolantCapacity: '10.5 L',
      fuelTankCapacity: '75 L / 100 L'
    }
  },

  // 8. MERCEDES-BENZ OM642 (2,987 cc / 3.0L 72° V6 CDI)
  {
    id: 'euro-om642',
    brand: 'ISUZU',
    code: 'Mercedes OM642 (3.0L V6 CDI)',
    series: 'BENZ_CARS_VANS',
    seriesTitle: 'Mercedes Luxury & Van (OM642 3.0L V6)',
    seriesTitleMm: 'Mercedes Sprinter V6 & ML/GL/E-Class (OM642 3.0L V6 CDI)',
    name: '3.0L 72° V6 24-Valve Common Rail Turbo Diesel (OM642)',
    nameMm: '၃.၀ လီတာ ၇၂ ဒီဂရီ V6 ၂၄ ဗား CDI တာဘို (Sprinter 319/519, ML350, GL350, E350 CDI)',
    type: '72-degree V6 DOHC 24-Valve Turbocharged Intercooler Bosch Piezo Common Rail Diesel',
    typeMm: '၇၂ ဒီဂရီ V6 ၂၄ ဗား အလူမီနီယမ်ဘလောက် Piezo ကွန်မန်ရေးလ် ဇိမ်ခံဒီဇယ်',
    fuelSystem: 'Bosch Piezoelectric Common Rail System (1,600 – 2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 2987,
    boreStrokeMm: '83.0 mm × 92.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 4 - 2 - 5 - 3 - 6',
    powerOutput: '190 – 265 PS @ 3,800 RPM',
    torqueOutput: '440 – 620 N·m @ 1,600 – 2,400 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Double Roller Duplex Chain with Balance Shaft)',
    commonVehicles: [
      'Mercedes-Benz Sprinter 319 / 519 CDI V6 (အင်အားပြင်း ဗင်ကားကြီးများ)',
      'Mercedes-Benz ML350 CDI / GLE 350d (W164 / W166)',
      'Mercedes-Benz GL350 CDI / GLS 350d (X164 / X166)',
      'Mercedes-Benz E350 CDI / S350 CDI (W212 / W221)',
      'Jeep Grand Cherokee 3.0 CRD'
    ],
    commonVehiclesMm: 'Sprinter 319/519 V6 ဗင်ကား၊ ML350 CDI၊ GL350 CDI၊ E350/S350 CDI၊ Jeep Grand Cherokee CRD',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 30, kgfCm: 306, lbfFt: 22.1, notesMm: 'ဘဏ်တစ်ခုစီရှိ ဘルトများကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '60 + 90° + 90°', kgfCm: '612 + 90° + 90°', lbfFt: '44 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '25 + 90°', kgfCm: '255 + 90°', lbfFt: '18.4 + 90°' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: '20 + 60°', kgfCm: '204 + 60°', lbfFt: '14.7 + 60°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 8 bolts per bank from center outward to 30 N·m', descriptionMm: 'ဘဏ်တစ်ခုစီရှိ ဘルト ၈ လုံးကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ', torque: '30 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 16,
    timingMarksGuide: {
      crankshaft: 'Align crankshaft harmonic balancer 0° mark at 12 o’clock TDC.',
      crankshaftMm: 'ခရိုင်းပူးလီး 0° အမှတ်ကို ၁၂ နာရီ TDC တွင် တိုက်ဆိုင်ပါ။',
      camshaft: 'Insert camshaft locking pins in both left and right cylinder heads.',
      camshaftMm: 'ဘယ်/ညာ ကမ်ရှပ်နှစ်ဖက်စလုံးကို သီးသန့် လော့ကင်းပင်များဖြင့် ထိန်းထားပါ။',
      pump: 'High pressure pump driven by intermediate gear.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့်ကို အလယ်ဂီယာမှ မောင်းနှင်ပါသည်။',
      notesMm: 'OM642 တွင် Oil Cooler O-ring ပေါက်ပြဲခြင်းနှင့် Swirl Flap ပြဿနာ အဖြစ်များသောကြောင့် ဆီယိုစိမ့်မှုကို အထူးသတိပြု စစ်ဆေးရပါမည်။ မီးပေါက်စဉ် 1-4-2-5-3-6 ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '28 – 32 MPa',
      pressureMax: '160 – 200 MPa (1,600 – 2,000 bar)',
      notesMm: 'Bosch Piezo Common Rail'
    },
    fluids: {
      oilWithFilter: '8.5 L (ML/GL/E) / 12.5 L (Sprinter V6)',
      oilWithoutFilter: '8.0 L',
      oilGrade: '5W-30 / 5W-40 (Mercedes MB 229.51 / MB 229.52 Low SAPS)',
      coolantCapacity: '11.5 L',
      fuelTankCapacity: '80 L / 100 L'
    }
  },

  // ==========================================
  // MERCEDES-BENZ HEAVY TRUCKS (ကားကြီး/တွဲကား)
  // ==========================================

  // 9. MERCEDES-BENZ OM501LA (11,946 cc / 12.0L V6 Actros)
  {
    id: 'euro-benz-actros',
    brand: 'ISUZU',
    code: 'Mercedes OM501LA (12.0L V6 Actros)',
    series: 'BENZ_ACTROS',
    seriesTitle: 'Mercedes-Benz Heavy Commercial (Actros V6)',
    seriesTitleMm: 'Mercedes Actros တွဲကားကြီး (OM501LA 12.0L V6)',
    name: '12.0L 90° V6 24-Valve Turbocharged Actros Diesel (OM501LA)',
    nameMm: '၁၂.၀ လီတာ V6 ၂၄ ဗား တာဘို (Mercedes Actros ဆိပ်ကမ်းဆွဲ တွဲကားကြီးများ)',
    type: '90-degree V6 OHC 24-Valve Turbocharged Intercooler Electronic PLD Unit Pump Heavy Duty Diesel',
    typeMm: 'V6 ဆလင်ဒါ ၆ လုံးထိုး ၂၄ ဗား ဂျာမနီ Mercedes Actros တွဲကားဆွဲခေါင်းကြီးများ',
    fuelSystem: 'PLD Electronic Unit Pump System (1,800 bar)',
    fuelSystemMm: 'PLD ဆလင်ဒါတစ်လုံးချင်း သီးခြားလျှပ်စစ်ပန့်စနစ် (1,800 bar)',
    displacementCc: 11946,
    boreStrokeMm: '130.0 mm × 150.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '17.75:1',
    firingOrder: '1 - 4 - 2 - 5 - 3 - 6',
    powerOutput: '310 – 460 PS @ 1,800 RPM',
    torqueOutput: '1,550 – 2,100 N·m @ 1,080 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Heavy V6 Gear Train)',
    commonVehicles: [
      'Mercedes-Benz Actros 1840 / 2640 / 3340 Prime Mover Trailer (မြန်မာပြည် ဆိပ်ကမ်းဆွဲ တွဲကားကြီးများ)',
      'Mercedes-Benz Actros Dump Truck',
      'Mercedes-Benz Axor Heavy Truck'
    ],
    commonVehiclesMm: 'Mercedes Actros တွဲကားဆွဲခေါင်းကြီးများ၊ Actros ၁၀ ဘီး မြေသယ်ယာဉ်ကြီးများ',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm (Turbobrake: 0.80 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Turbobrake ပါဝင်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (ခေါင်းတစ်လုံးချင်း အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4, notesMm: 'ခေါင်းတစ်လုံးချင်းစီ ၁၀ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'ဒုတိယအဆင့် ၃၅ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'တတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '90 + 90°', kgfCm: '918 + 90°', lbfFt: '66 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '200 + 90°', kgfCm: '2040 + 90°', lbfFt: '148 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual cylinder head 4 bolts to 10 N·m', descriptionMm: 'ခေါင်းတစ်လုံးစီရှိ မူလီ ၄ လုံးကို ၁၀ N·m ကနဦးကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque to 35 N·m', descriptionMm: '၃၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '35 N·m' },
      { step: 3, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 4, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 24,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC ချိန်ပါ။',
      camshaft: 'Rear V6 camshaft gear timing marks.',
      camshaftMm: 'အနောက် V6 ကမ်ရှပ်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      pump: 'PLD unit pump synchronization.',
      pumpMm: 'PLD ဆလင်ဒါတစ်လုံးချင်း သီးခြားပန့် ချိန်ညှိပါ။',
      notesMm: 'V6 ဆလင်ဒါ ၆ လုံးထိုး အင်ဂျင်ဖြစ်ပြီး ဆလင်ဒါခေါင်း တစ်လုံးချင်းခွဲထားသော စနစ်ဖြစ်ပါသည်။ မီးပေါက်စဉ် (1-4-2-5-3-6) ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 35 MPa',
      pressureMax: '180 MPa (1,800 bar PLD)',
      notesMm: 'Mercedes-Benz PLD စနစ်'
    },
    fluids: {
      oilWithFilter: '34.0 L',
      oilWithoutFilter: '30.0 L',
      oilGrade: '10W-40 / 15W-40 (Mercedes MB 228.5 / MB 228.51 Specification)',
      coolantCapacity: '40.0 L',
      fuelTankCapacity: '400 L / 500 L'
    }
  },

  // 10. MERCEDES-BENZ OM471 (12,809 cc / 12.8L Inline-6 New Actros / Arocs)
  {
    id: 'euro-benz-om471',
    brand: 'ISUZU',
    code: 'Mercedes OM471 (12.8L New Actros)',
    series: 'BENZ_ACTROS',
    seriesTitle: 'Mercedes-Benz Modern Flagship (New Actros 12.8L)',
    seriesTitleMm: 'Mercedes New Actros / Arocs ၆ လုံးထိုး (OM471 12.8L)',
    name: '12.8L Inline-6 DOHC 24-Valve X-PULSE Common Rail Diesel (OM471)',
    nameMm: '၁၂.၈ လီတာ ၆ လုံးထိုး DOHC ၂၄ ဗား (New Actros 1845 / 1848 / 1851 & Arocs)',
    type: 'Inline-6 DOHC 24-Valve Turbocharged Intercooler X-PULSE Common Rail Heavy Duty Diesel',
    typeMm: '၆ လုံးထိုး DOHC ၂၄ ဗား ကွန်ပိုစစ်ကမ်ရှပ် ဖိအားမြှင့် X-PULSE ကွန်မန်ရေးလ် တွဲကားဘုရင်',
    fuelSystem: 'X-PULSE Common Rail with Pressure Booster (up to 2,700 bar)',
    fuelSystemMm: 'X-PULSE ကွန်မန်ရေးလ် ဖိအားမြှင့်စနစ် (2,700 bar)',
    displacementCc: 12809,
    boreStrokeMm: '132.0 mm × 156.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '18.3:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '421 – 530 PS @ 1,600 RPM',
    torqueOutput: '2,100 – 2,600 N·m @ 1,100 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear Precision Helical Gear Train - အနောက်ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Mercedes-Benz New Actros 1845 / 1848 / 1851 StreamSpace Trailer (ဆိပ်ကမ်းဆွဲ တွဲကားကြီးများ)',
      'Mercedes-Benz Arocs Heavy Construction Dump Truck (မြေသယ်ယာဉ်ကြီးများ)',
      'Mercedes-Benz Antos Heavy Distribution Truck'
    ],
    commonVehiclesMm: 'New Actros 1845/1848/1851 တွဲကားဆွဲခေါင်းများ၊ Arocs မြေသယ်ယာဉ်၊ Antos ကုန်တင်ကား',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm (Jake Brake: 0.60 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Jake Brake 0.60 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 50, kgfCm: 510, lbfFt: 36.9, notesMm: 'အလယ်မှစ၍ ၅၀ N·m ကနဦး ထိန်းကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 200, kgfCm: 2040, lbfFt: 147.5, notesMm: 'ဒုတိယအဆင့် ၂၀၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ဒုတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'တတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၂၇၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '150 + 90° + 90°', kgfCm: '1530 + 90° + 90°', lbfFt: '110 + 90° + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '120 + 90° + 90°', kgfCm: '1220 + 90° + 90°', lbfFt: '88 + 90° + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 26 bolts in spiral sequence to 50 N·m', descriptionMm: 'ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၅၀ N·m ကျပ်ပါ', torque: '50 N·m' },
      { step: 2, description: 'Torque to 200 N·m', descriptionMm: '၂၀၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '200 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ပထမအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'ဒုတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt third 90° clockwise', descriptionMm: 'တတိယအကြိမ် ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ (စုစုပေါင်း ၂၇၀°)', torque: '+90°' }
    ],
    headBoltsCount: 26,
    timingMarksGuide: {
      crankshaft: 'Align flywheel TDC pointer with flywheel zero mark.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် TDC 0° ချိန်ပါ။',
      camshaft: 'Rear DOHC composite camshaft gear timing alignment marks.',
      camshaftMm: 'အနောက်ဘက် DOHC ကမ်ရှပ်ဂီယာ အမှတ်သားများကို တိုက်ဆိုင်ပါ။',
      pump: 'High pressure common rail pump driven off rear gear train.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'New Actros ၏ အဆင့်မြင့် ၆ လုံးထိုး အင်ဂျင်ဖြစ်ပြီး Composite Camshaft နှင့် X-PULSE ဆီဖြန်းစနစ် ပါဝင်သောကြောင့် ဆီစားအလွန်သက်သာပြီး ရုန်းအားကောင်းမွန်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '270 MPa (2,700 bar X-PULSE)',
      notesMm: 'X-PULSE Electronic Booster System'
    },
    fluids: {
      oilWithFilter: '40.0 L',
      oilWithoutFilter: '36.0 L',
      oilGrade: '5W-30 / 10W-40 (Mercedes MB 228.51 Low SAPS)',
      coolantCapacity: '48.0 L',
      fuelTankCapacity: '500 L / 800 L'
    }
  },

  // 11. MERCEDES-BENZ OM502LA (15,928 cc / 15.9L V8 Actros Heavy Duty)
  {
    id: 'euro-benz-om502',
    brand: 'ISUZU',
    code: 'Mercedes OM502LA (15.9L V8 Actros)',
    series: 'BENZ_ACTROS',
    seriesTitle: 'Mercedes-Benz V8 Monster (Actros 15.9L V8)',
    seriesTitleMm: 'Mercedes Actros V8 ၈ လုံးထိုး တွဲကားဘုရင် (OM502LA 600 HP)',
    name: '15.9L 90° V8 32-Valve Turbocharged Actros V8 Diesel (OM502LA)',
    nameMm: '၁၅.၉ လီတာ V8 ၃၂ ဗား တာဘို (Actros 1853/1857/1860 V8 တွဲကားဘုရင်)',
    type: '90-degree V8 OHC 32-Valve Turbocharged Intercooler Electronic PLD Unit Pump Heavy Hauler Diesel',
    typeMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး ၃၂ ဗား တစ်လုံးချင်းခေါင်း PLD စနစ် အကြီးစားတွဲကားဘုရင်',
    fuelSystem: 'PLD Electronic Unit Pump System (1,800 bar)',
    fuelSystemMm: 'PLD ဆလင်ဒါတစ်လုံးချင်း သီးခြားလျှပ်စစ်ပန့်စနစ် (1,800 bar)',
    displacementCc: 15928,
    boreStrokeMm: '130.0 mm × 150.0 mm',
    cylinders: 8,
    valvesPerCyl: 4,
    compressionRatio: '17.75:1',
    firingOrder: '1 - 5 - 7 - 2 - 6 - 3 - 4 - 8',
    powerOutput: '530 – 600 PS @ 1,800 RPM',
    torqueOutput: '2,400 – 2,800 N·m @ 1,080 RPM',
    timingType: 'Gear',
    timingTypeMm: 'ဂီယာအပြည့် (Rear V8 Gear Train - အနောက်ဘက် ဂီယာစနစ်)',
    commonVehicles: [
      'Mercedes-Benz Actros 1853 / 1857 / 1860 V8 Prime Mover (အဝေးပြေး ဆိပ်ကမ်းဆွဲ တွဲကားကြီးများ)',
      'Mercedes-Benz Actros 3357 / 4160 8x4 Heavy Timber & Heavy Equipment Transporter',
      'Mercedes Special Heavy Transport Prime Mover'
    ],
    commonVehiclesMm: 'Actros 1853/1857/1860 V8 တွဲကားဆွဲခေါင်းကြီးများ၊ သစ်လုံးတင်ကားကြီးများ၊ အကြီးစား စက်ယန္တရားဆွဲယာဉ်',
    valveClearance: {
      intakeColdMm: '0.40 mm',
      exhaustColdMm: '0.60 mm (Turbobrake: 0.80 mm)',
      methodMm: 'Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Turbobrake 0.80 mm)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (ခေါင်းတစ်လုံးချင်း အဆင့် ၁)', nm: 10, kgfCm: 102, lbfFt: 7.4, notesMm: 'ခေါင်းတစ်လုံးချင်းစီ ၁၀ N·m စတင်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'ဒုတိယအဆင့် ၃၅ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'တတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 5)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '100 + 90°', kgfCm: '1020 + 90°', lbfFt: '74 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '90 + 90°', kgfCm: '918 + 90°', lbfFt: '66 + 90°' },
      { component: 'Flywheel Bolts', componentMm: 'ဖလိုင်းဝီးလ် ဘルトများ', nm: '200 + 90°', kgfCm: '2040 + 90°', lbfFt: '148 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 80, kgfCm: 816, lbfFt: 59 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque individual head 4 bolts to 10 N·m', descriptionMm: 'ခေါင်းတစ်လုံးစီရှိ ဘルト ၄ လုံးကို ၁၀ N·m ကျပ်ပါ', torque: '10 N·m' },
      { step: 2, description: 'Torque to 35 N·m', descriptionMm: '၃၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '35 N·m' },
      { step: 3, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 4, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 5, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 32,
    timingMarksGuide: {
      crankshaft: 'Align flywheel window pointer at 0° TDC Cylinder 1.',
      crankshaftMm: 'ဖလိုင်းဝီးလ် အပေါက်မှ No.1 TDC ချိန်ပါ။',
      camshaft: 'Rear V8 camshaft gear timing marks.',
      camshaftMm: 'အနောက် V8 ကမ်ရှပ်ဂီယာ အမှတ်သား တိုက်ဆိုင်ပါ။',
      pump: 'PLD electronic unit pump synchronization.',
      pumpMm: 'ဆလင်ဒါ ၈ လုံးစီအတွက် PLD ယူနစ်ပန့် ချိန်ညှိပါ။',
      notesMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး အင်ဂျင်ဖြစ်ပြီး မီးပေါက်စဉ် 1-5-7-2-6-3-4-8 ဖြစ်ပါသည်။ ဆလင်ဒါခေါင်း ၈ လုံး သီးခြားစီ တပ်ဆင်ရပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: 'Opening: 35 MPa',
      pressureMax: '180 MPa (1,800 bar PLD)',
      notesMm: 'Mercedes-Benz PLD စနစ်'
    },
    fluids: {
      oilWithFilter: '38.0 L',
      oilWithoutFilter: '34.0 L',
      oilGrade: '10W-40 / 15W-40 (Mercedes MB 228.5 / MB 228.51)',
      coolantCapacity: '48.0 L',
      fuelTankCapacity: '500 L / 600 L'
    }
  },

  // ==========================================
  // BMW TWINPOWER TURBO DIESEL (2.0L / 3.0L)
  // ==========================================

  // 12. BMW N47 / B47 (1,995 cc / 2.0L 4-Cylinder TwinPower)
  {
    id: 'euro-bmw-b47',
    brand: 'ISUZU',
    code: 'BMW N47 / B47 (2.0L Diesel)',
    series: 'BMW_DIESEL',
    seriesTitle: 'BMW TwinPower Turbo (N47 / B47 2.0d)',
    seriesTitleMm: 'BMW 320d, 520d, X3 (N47 / B47 ၂.၀ လီတာ)',
    name: '2.0L Inline-4 DOHC 16-Valve TwinPower Turbo Diesel (N47 / B47)',
    nameMm: '၂.၀ လီတာ ၄ လုံးထိုး ၁၆ ဗား TwinPower Turbo (BMW 320d / 520d / X1 / X3)',
    type: 'Inline-4 DOHC 16-Valve Variable Geometry Turbo Bosch Piezo/Solenoid Common Rail Diesel',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား အလူမီနီယမ်ဘလောက် ဂျာမနီ BMW နာမည်ကျော် ဒီဇယ်အင်ဂျင်',
    fuelSystem: 'Bosch High-Pressure Common Rail System (1,800 – 2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 1995,
    boreStrokeMm: '84.0 mm × 90.0 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '143 – 190 PS @ 4,000 RPM',
    torqueOutput: '320 – 400 N·m @ 1,750 – 2,500 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Simplex Chain - အနောက်ဘက် တိုက်မင်ကြိုး ၂ ထပ်စနစ်)',
    commonVehicles: [
      'BMW 320d (E90 / F30 / G20)',
      'BMW 520d (E60 / F10 / G30)',
      'BMW X1 sDrive18d / xDrive20d (E84 / F48)',
      'BMW X3 xDrive20d (E83 / F25 / G01)'
    ],
    commonVehiclesMm: 'BMW 320d၊ BMW 520d၊ BMW X1၊ BMW X3 xDrive20d',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 70, kgfCm: 714, lbfFt: 51.6, notesMm: 'ဒုတိယအဆင့် ၇၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '20 + 70°', kgfCm: '204 + 70°', lbfFt: '14.7 + 70°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '5 + 20 + 70°', kgfCm: '51 + 204 + 70°', lbfFt: '3.7 + 14.7 + 70°' },
      { component: 'Crankshaft Pulley (Harmonic)', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '40 + 120°', kgfCm: '408 + 120°', lbfFt: '29.5 + 120°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 10 bolts from center outward to 35 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 70 N·m', descriptionMm: '၇၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '70 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock flywheel with BMW flywheel locking mandrel at TDC.',
      crankshaftMm: 'ဖလိုင်းဝီးလ်ကို အောက်ခြေအပေါက်မှ BMW သီးသန့် မန်ဒရယ် (Pin) ဖြင့် TDC တွင် လော့ခတ်ပါ။',
      camshaft: 'Lock both camshafts flat on top with BMW alignment bridge tool.',
      camshaftMm: 'ကမ်ရှပ်နှစ်ချောင်းကို ကမ်ရှပ်အထိုင် ဘရစ်ချ်တူးလ်ဖြင့် ညီညာစွာ သော့ခတ်ပါ။',
      pump: 'High pressure fuel pump locked with pin.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့်ကို လော့ကင်းပင်ဖြင့် ထိန်းထားပါ။',
      notesMm: 'BMW N47 တွင် အနောက်ဘက်တိုက်မင်ကြိုး (Timing Chain) ချောင်ခြင်းကြောင့် အသံမြည်သံထွက်တတ်ပြီး ကီလို ၁ သိန်းကျော်လျှင် တိုက်မင်ကြိုးနှင့် Tensioner အစုံ လဲလှယ်သင့်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '180 – 200 MPa',
      notesMm: 'Bosch Common Rail'
    },
    fluids: {
      oilWithFilter: '5.2 L',
      oilWithoutFilter: '4.8 L',
      oilGrade: '5W-30 (BMW Longlife-04 Specification)',
      coolantCapacity: '7.5 L',
      fuelTankCapacity: '57 L / 67 L'
    }
  },

  // 13. BMW N57 / B57 (2,993 cc / 3.0L 6-Cylinder TwinPower)
  {
    id: 'euro-bmw-n57',
    brand: 'ISUZU',
    code: 'BMW N57 / B57 (3.0L 6-Cyl Diesel)',
    series: 'BMW_DIESEL',
    seriesTitle: 'BMW Inline-6 TwinPower (N57 / B57 3.0d)',
    seriesTitleMm: 'BMW 530d, 730d, X5 30d/40d/M50d (၃.၀ လီတာ ၆ လုံးထိုး)',
    name: '3.0L Inline-6 DOHC 24-Valve TwinPower Turbo Diesel (N57 / B57)',
    nameMm: '၃.၀ လီတာ ၆ လုံးထိုး ၂၄ ဗား TwinPower Turbo (BMW 530d / 730d / X5 / X6)',
    type: 'Inline-6 DOHC 24-Valve Single/Twin/Triple Turbocharged Bosch Piezo Common Rail Diesel',
    typeMm: '၆ လုံးထိုး DOHC ၂၄ ဗား အလူမီနီယမ်ဘလောက် ကမ္ဘာ့နာမည်ကျော် ၆ လုံးထိုး ဇိမ်ခံဒီဇယ်',
    fuelSystem: 'Bosch Piezoelectric Common Rail System (2,000 – 2,500 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် စနစ် (2,500 bar)',
    displacementCc: 2993,
    boreStrokeMm: '84.0 mm × 90.0 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 5 - 3 - 6 - 2 - 4',
    powerOutput: '245 – 400 PS (M50d Quad-Turbo: 400 PS) @ 4,000 RPM',
    torqueOutput: '540 – 760 N·m @ 1,500 – 3,000 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Simplex Chain System - အနောက်ဘက် တိုက်မင်ကြိုးစနစ်)',
    commonVehicles: [
      'BMW 530d / 535d / M550d (F10 / G30)',
      'BMW 730d / 740d (F01 / G11)',
      'BMW X5 xDrive30d / xDrive40d / M50d (E70 / F15 / G05)',
      'BMW X6 xDrive30d / xDrive40d (E71 / F16 / G06)'
    ],
    commonVehiclesMm: 'BMW 530d၊ BMW 730d၊ BMW X5 30d/40d/M50d၊ BMW X6 30d',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 40, kgfCm: 408, lbfFt: 29.5, notesMm: 'အလယ်မှစ၍ ၄၀ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 80, kgfCm: 816, lbfFt: 59, notesMm: 'ဒုတိယအဆင့် ၈၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '20 + 70°', kgfCm: '204 + 70°', lbfFt: '14.7 + 70°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '5 + 20 + 70°', kgfCm: '51 + 204 + 70°', lbfFt: '3.7 + 14.7 + 70°' },
      { component: 'Crankshaft Pulley (Harmonic)', componentMm: 'ခရိုင်းပူးလီး ဘルトများ', nm: '40 + 120°', kgfCm: '408 + 120°', lbfFt: '29.5 + 120°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 25, kgfCm: 255, lbfFt: 18.4 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 14 bolts in spiral sequence to 40 N·m', descriptionMm: 'ခေါင်းဘルト ၁၄ လုံးကို အလယ်မှစ၍ ၄၀ N·m ကျပ်ပါ', torque: '40 N·m' },
      { step: 2, description: 'Torque to 80 N·m', descriptionMm: '၈၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '80 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 14,
    timingMarksGuide: {
      crankshaft: 'Lock flywheel with BMW flywheel pin at TDC.',
      crankshaftMm: 'ဖလိုင်းဝီးလ်ကို အောက်ခြေအပေါက်မှ TDC ပင်ဖြင့် လော့ခတ်ပါ။',
      camshaft: 'Lock camshafts with BMW 6-cylinder alignment jig tool.',
      camshaftMm: '၆ လုံးထိုး ကမ်ရှပ်များကို သီးသန့် အလိုင်းမန့် ဂျစ်တူးလ်ဖြင့် သော့ခတ်ပါ။',
      pump: 'High pressure fuel pump alignment.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ညှိပါ။',
      notesMm: 'BMW ၏ နာမည်အကြီးဆုံး ၆ လုံးထိုး ဒီဇယ်ဖြစ်ပြီး မီးပေါက်စဉ် 1-5-3-6-2-4 ဖြစ်ပါသည်။ စွမ်းဆောင်ရည်နှင့် ရုန်းအား အထူးကောင်းမွန်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '200 – 250 MPa',
      notesMm: 'Bosch Piezo Common Rail'
    },
    fluids: {
      oilWithFilter: '6.5 L (530d) / 7.2 L (X5 30d)',
      oilWithoutFilter: '6.0 L',
      oilGrade: '5W-30 (BMW Longlife-04 Specification)',
      coolantCapacity: '9.0 L',
      fuelTankCapacity: '70 L / 85 L'
    }
  },

  // ==========================================
  // AUDI & VOLKSWAGEN TDI (2.0L / 3.0L / 4.2L)
  // ==========================================

  // 14. VW / AUDI 2.0L TDI (EA189 / EA288 - Amarok / Passat / Golf / Q5)
  {
    id: 'euro-vag-20tdi',
    brand: 'ISUZU',
    code: 'VW / Audi 2.0L TDI (EA189 / EA288)',
    series: 'VAG_AUDI_VW',
    seriesTitle: 'Volkswagen & Audi Group (2.0L TDI)',
    seriesTitleMm: 'VW Amarok ပစ်ကပ် & Audi Q5 2.0L TDI',
    name: '2.0L Inline-4 16-Valve Common Rail Turbo Diesel (EA189 / EA288)',
    nameMm: '၂.၀ လီတာ ၄ လုံးထိုး ၁၆ ဗား TDI တာဘို (VW Amarok / Passat / Golf / Audi Q5)',
    type: 'Inline-4 DOHC 16-Valve Turbocharged Common Rail Diesel with Timing Belt',
    typeMm: '၄ လုံးထိုး DOHC ၁၆ ဗား တိုက်မင်ခါးပတ် Common Rail တာဘိုဒီဇယ်',
    fuelSystem: 'Bosch / Delphi Common Rail System (1,800 – 2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,000 bar)',
    displacementCc: 1968,
    boreStrokeMm: '81.0 mm × 95.5 mm',
    cylinders: 4,
    valvesPerCyl: 4,
    compressionRatio: '16.5:1',
    firingOrder: '1 - 3 - 4 - 2',
    powerOutput: '140 – 190 PS (Bi-TDI: 180 PS) @ 4,000 RPM',
    torqueOutput: '320 – 420 N·m @ 1,750 – 2,500 RPM',
    timingType: 'Belt',
    timingTypeMm: 'တိုက်မင်ခါးပတ် (Toothed Timing Belt with Automatic Tensioner)',
    commonVehicles: [
      'Volkswagen Amarok 2.0 TDI / BiTDI Pickup (မြန်မာပြည်လူကြိုက်များ 4WD ပစ်ကပ်)',
      'Audi Q5 2.0 TDI Quattro',
      'Volkswagen Passat / Tiguan 2.0 TDI',
      'Audi A4 / A6 2.0 TDI'
    ],
    commonVehiclesMm: 'VW Amarok 4WD ပစ်ကပ်၊ Audi Q5၊ VW Tiguan၊ Passat၊ Audi A4/A6',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '65 + 90°', kgfCm: '663 + 90°', lbfFt: '48 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '30 + 90°', kgfCm: '306 + 90°', lbfFt: '22 + 90°' },
      { component: 'Camshaft Sprocket Bolt', componentMm: 'ကမ်ရှပ် စပရော့ကတ် ဘルト', nm: '100', kgfCm: '1020', lbfFt: '73.8' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque all 10 bolts from center outward in spiral sequence to 35 N·m', descriptionMm: 'ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)', torque: '+90°' }
    ],
    headBoltsCount: 10,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with VW T10050 or T10100 locking tool at 12 o’clock TDC.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို VW သီးသန့် လော့ကင်းတူးလ် (T10050) ဖြင့် ၁၂ နာရီ TDC တွင် သော့ခတ်ပါ။',
      camshaft: 'Insert 6mm locking pin into camshaft sprocket hole.',
      camshaftMm: 'ကမ်ရှပ် စပရော့ကတ် အပေါက်ထဲ ၆ မမ လော့ကင်းပင် (Pin) ထိုးသွင်းပါ။',
      pump: 'Lock high-pressure fuel pump sprocket with pin.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် စပရော့ကတ်ကို ပင်ဖြင့် ထိန်းထားပါ။',
      notesMm: 'Amarok ပစ်ကပ်များတွင် တိုက်မင်ခါးပတ် (Timing Belt) ကို ကီလို ၁ သိန်း သို့မဟုတ် ၅ နှစ်တစ်ကြိမ် Tensioner နှင့် အတူ လဲလှယ်ရပါမည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '25 – 30 MPa (250 – 300 bar)',
      pressureMax: '180 – 200 MPa (1,800 – 2,000 bar)',
      notesMm: 'VW 507.00 စံနှုန်းပြည့် အင်ဂျင်ဝိုင်သာ ထည့်ရပါမည်။'
    },
    fluids: {
      oilWithFilter: '7.0 L (Amarok) / 4.7 L (Passat/Q5)',
      oilWithoutFilter: '6.5 L',
      oilGrade: '5W-30 (VW 504.00 / 507.00 Longlife III)',
      coolantCapacity: '8.5 L',
      fuelTankCapacity: '80 L (Amarok)'
    }
  },

  // 15. AUDI / VW 3.0L V6 TDI (EA897 - Audi Q7 / Touareg / Porsche Cayenne Diesel)
  {
    id: 'euro-vag-30tdi',
    brand: 'ISUZU',
    code: 'Audi / VW 3.0L V6 TDI (EA897)',
    series: 'VAG_AUDI_VW',
    seriesTitle: 'Audi & Porsche V6 TDI (EA897)',
    seriesTitleMm: 'Audi & Porsche V6 TDI ၃.၀ လီတာ',
    name: '3.0L V6 24-Valve Common Rail Turbo Diesel (Audi Q7 / Touareg / Cayenne)',
    nameMm: '၃.၀ လီတာ V6 ၂၄ ဗား TDI တာဘို (Audi Q7 / VW Touareg / Porsche Cayenne)',
    type: 'V6 90-degree DOHC 24-Valve Turbocharged Common Rail Diesel',
    typeMm: 'V6 ဆလင်ဒါ ၆ လုံးထိုး ၂၄ ဗား ဥရောပ အဆင့်မြင့် ဇိမ်ခံ SUV ဒီဇယ်',
    fuelSystem: 'Bosch Piezoelectric Common Rail System (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် (2,000 bar)',
    displacementCc: 2967,
    boreStrokeMm: '83.0 mm × 91.4 mm',
    cylinders: 6,
    valvesPerCyl: 4,
    compressionRatio: '16.0:1',
    firingOrder: '1 - 4 - 3 - 6 - 2 - 5',
    powerOutput: '245 – 272 PS (Bi-Turbo: 320 PS) @ 4,000 RPM',
    torqueOutput: '550 – 600 N·m @ 1,500–3,000 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear Simplex Chain System ကြိုး ၄ ချောင်းစနစ်)',
    commonVehicles: [
      'Audi Q7 3.0 TDI Quattro',
      'Volkswagen Touareg 3.0 TDI',
      'Porsche Cayenne 3.0 Diesel',
      'Audi A6 / A8 3.0 TDI'
    ],
    commonVehiclesMm: 'Audi Q7၊ VW Touareg၊ Porsche Cayenne Diesel၊ Audi A6/A8',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8 },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3 },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '30 + 90°', kgfCm: '306 + 90°', lbfFt: '22 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '20 + 90°', kgfCm: '204 + 90°', lbfFt: '14.7 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 8 head bolts per bank to 35 N·m', descriptionMm: 'ဘဏ်တစ်ခုစီရှိ ခေါင်းဘルト ၈ လုံးကို ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 16,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with TDC locking pin in engine block.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို ဘလောက်တုံးအောက်ခြေရှိ အပေါက်မှ TDC ပင်ဖြင့် လော့ခတ်ပါ။',
      camshaft: 'Use Audi V6 camshaft lock clamp tools on Bank 1 & 2.',
      camshaftMm: 'Bank 1 နှင့် Bank 2 ရှိ ကမ်ရှပ်များကို Audi သီးသန့် လော့ကလန်ဖြင့် ချိန်ပါ။',
      pump: 'High pressure pump drive alignment.',
      pumpMm: 'ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။',
      notesMm: 'V6 ဆလင်ဒါ ၆ လုံးထိုး ဖြစ်၍ မီးပေါက်စဉ် (1-4-3-6-2-5) အတိုင်း အလုပ်လုပ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '30 – 35 MPa',
      pressureMax: '200 MPa',
      notesMm: 'Piezo Injector စနစ်'
    },
    fluids: {
      oilWithFilter: '8.2 L',
      oilWithoutFilter: '7.5 L',
      oilGrade: '5W-30 (VW 507.00 / Porsche C30 Low SAPS)',
      coolantCapacity: '12.0 L',
      fuelTankCapacity: '85 L / 100 L'
    }
  },

  // 16. AUDI 4.2L V8 TDI (EA898 - Audi Q7 4.2 TDI / Touareg V8 TDI / A8 4.2 TDI)
  {
    id: 'euro-vag-42tdi',
    brand: 'ISUZU',
    code: 'Audi 4.2L V8 TDI (EA898 Monster)',
    series: 'VAG_AUDI_VW',
    seriesTitle: 'Audi V8 Bi-Turbo Flagship (4.2L V8 TDI)',
    seriesTitleMm: 'Audi Q7 & Touareg V8 TDI (၄.၂ လီတာ V8 ၈ လုံးထိုး)',
    name: '4.2L 90° V8 32-Valve Bi-Turbo Common Rail Diesel (Audi Q7 4.2 TDI)',
    nameMm: '၄.၂ လီတာ V8 ၃၂ ဗား Bi-Turbo TDI (Audi Q7 4.2 TDI, Touareg V8, Audi A8)',
    type: '90-degree V8 DOHC 32-Valve Bi-Turbocharged Common Rail Ultra High Performance Diesel',
    typeMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး ၃၂ ဗား တာဘိုစုံတွဲ အလူမီနီယမ်ဘလောက် ဇိမ်ခံ SUV ဘုရင်',
    fuelSystem: 'Bosch Piezoelectric Common Rail System (2,000 bar)',
    fuelSystemMm: 'Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် (2,000 bar)',
    displacementCc: 4134,
    boreStrokeMm: '83.0 mm × 95.5 mm',
    cylinders: 8,
    valvesPerCyl: 4,
    compressionRatio: '16.4:1',
    firingOrder: '1 - 5 - 4 - 8 - 6 - 3 - 7 - 2',
    powerOutput: '340 – 385 PS @ 3,750 RPM',
    torqueOutput: '760 – 850 N·m @ 1,750 – 2,750 RPM',
    timingType: 'Chain',
    timingTypeMm: 'တိုက်မင်ကြိုး (Rear 4-Chain Drive System - အနောက်ဘက် တိုက်မင်ကြိုး ၄ ချောင်းစနစ်)',
    commonVehicles: [
      'Audi Q7 4.2 TDI Quattro (ကမ္ဘာ့အကြမ်းဆုံး V8 ဒီဇယ် SUV)',
      'Volkswagen Touareg 4.2 V8 TDI',
      'Audi A8 4.2 TDI Quattro Limousine'
    ],
    commonVehiclesMm: 'Audi Q7 4.2 TDI Quattro၊ VW Touareg 4.2 V8 TDI၊ Audi A8 4.2 TDI',
    valveClearance: {
      intakeColdMm: 'Hydraulic Valve Lifters (HLA)',
      exhaustColdMm: 'Hydraulic Valve Lifters (HLA)',
      methodMm: 'Hydraulic Tappet (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)'
    },
    tighteningTorques: [
      { component: 'Cylinder Head Bolts (Step 1)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)', nm: 35, kgfCm: 357, lbfFt: 25.8, notesMm: 'ဘဏ်တစ်ခုစီရှိ ဘルト ၁၀ လုံးကို ၃၅ N·m ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 2)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)', nm: 60, kgfCm: 612, lbfFt: 44.3, notesMm: 'ဒုတိယအဆင့် ၆၀ N·m သို့ တိုးမြှင့်ပါ' },
      { component: 'Cylinder Head Bolts (Step 3)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ' },
      { component: 'Cylinder Head Bolts (Step 4)', componentMm: 'ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)', nm: '+90°', kgfCm: '+90°', lbfFt: '+90°', notesMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ' },
      { component: 'Main Bearing Cap Bolts', componentMm: 'ခရိုင်းကပ် ဘルトများ', nm: '50 + 90°', kgfCm: '510 + 90°', lbfFt: '37 + 90°' },
      { component: 'Connecting Rod Cap Bolts', componentMm: 'ကွန်ရော့ကပ် ဘルトများ', nm: '30 + 90°', kgfCm: '306 + 90°', lbfFt: '22 + 90°' },
      { component: 'Crankshaft Pulley Bolt', componentMm: 'ခရိုင်းပူးလီး ဘルトကြီး', nm: '20 + 90°', kgfCm: '204 + 90°', lbfFt: '14.7 + 90°' },
      { component: 'Oil Drain Plug', componentMm: 'အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်', nm: 30, kgfCm: 306, lbfFt: 22.1 }
    ],
    headTighteningSteps: [
      { step: 1, description: 'Torque 10 bolts per bank to 35 N·m', descriptionMm: 'ဘဏ်တစ်ခုစီရှိ ဘルト ၁၀ လုံးကို ၃၅ N·m ကျပ်ပါ', torque: '35 N·m' },
      { step: 2, description: 'Torque to 60 N·m', descriptionMm: '၆၀ N·m သို့ တိုးမြှင့်ကျပ်ပါ', torque: '60 N·m' },
      { step: 3, description: 'Turn each bolt 90° clockwise', descriptionMm: 'ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ', torque: '+90°' },
      { step: 4, description: 'Turn each bolt another 90° clockwise', descriptionMm: 'နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ', torque: '+90°' }
    ],
    headBoltsCount: 20,
    timingMarksGuide: {
      crankshaft: 'Lock crankshaft with TDC pin at engine block underside.',
      crankshaftMm: 'ခရိုင်းရှပ်ကို ဘလောက်တုံးအောက်ခြေရှိ အပေါက်မှ TDC ပင်ဖြင့် လော့ခတ်ပါ။',
      camshaft: 'Use Audi V8 camshaft alignment lock brackets on both banks.',
      camshaftMm: 'ဘဏ် ၁ နှင့် ဘဏ် ၂ ကမ်ရှပ်များကို Audi သီးသန့် ကလန်ဖြင့် သော့ခတ်ပါ။',
      pump: 'High pressure common rail pump timing alignment.',
      pumpMm: 'ဖိအားမြင့် ကွန်မန်ရေးလ်ပန့် ချိန်ညှိပါ။',
      notesMm: 'V8 ဆလင်ဒါ ၈ လုံးထိုး တာဘိုစုံတွဲ ဖြစ်ပြီး မီးပေါက်စဉ် 1-5-4-8-6-3-7-2 ဖြစ်ပါသည်။ ဥရောပ၏ စွမ်းအားအကြီးဆုံး V8 ဒီဇယ်အင်ဂျင်များတွင် တစ်ခုအပါအဝင် ဖြစ်ပါသည်။'
    },
    fuelSystemSpecs: {
      pressureIdle: '35 MPa',
      pressureMax: '200 MPa',
      notesMm: 'Bi-Turbo Piezo Common Rail'
    },
    fluids: {
      oilWithFilter: '9.5 L',
      oilWithoutFilter: '9.0 L',
      oilGrade: '5W-30 (VW 507.00 Specification)',
      coolantCapacity: '14.0 L',
      fuelTankCapacity: '100 L'
    }
  }
];
