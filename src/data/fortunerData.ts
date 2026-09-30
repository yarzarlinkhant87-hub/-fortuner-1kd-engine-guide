export interface TorqueSpec {
  id: string;
  componentMy: string;
  componentEn: string;
  category: 'head' | 'bottom_end' | 'fuel' | 'timing' | 'external';
  nm: number;
  ftlb: number;
  kgfm: number;
  stepsMy: string[];
  stepsEn: string[];
  cautionMy?: string;
  cautionEn?: string;
  boltSize?: string;
  criticalLevel: 'critical' | 'high' | 'standard';
}

export interface EngineData {
  id: string;
  code: string;
  name: string;
  displacement: string;
  generation: string;
  years: string;
  configuration: string;
  fuelType: string;
  power: string;
  torque: string;
  oilCapacityWithFilter: string;
  oilCapacityWithoutFilter: string;
  recommendedOilViscosity: string;
  oilStandard: string;
  coolantCapacity: string;
  compressionRatio: string;
  compressionStandard: string;
  compressionMinimum: string;
  valveClearance: {
    condition: string;
    intakeMm: string;
    exhaustMm: string;
    adjustmentMethodMy: string;
    adjustmentMethodEn: string;
  };
  timingInfo: {
    systemType: string; // Timing Chain or Timing Belt
    serviceIntervalMy: string;
    serviceIntervalEn: string;
    marksGuideMy: string[];
    marksGuideEn: string[];
    diagramNotesMy: string;
    diagramNotesEn: string;
  };
  cylinderHeadTighteningSequence: number[];
  torqueSpecs: TorqueSpec[];
}

export const FORTUNER_ENGINES: EngineData[] = [
  {
    id: '1gd-ftv',
    code: '1GD-FTV',
    name: 'Toyota Fortuner 2.8L VN Turbo Diesel',
    displacement: '2,755 cc (2.8 Liters)',
    generation: '2nd Gen Fortuner (AN160 / 2015 – Present)',
    years: '2015 – Present',
    configuration: 'Inline 4-Cylinder, 16-Valve DOHC with Intercooler & Variable Nozzle Turbo (VNT)',
    fuelType: 'Diesel (Common Rail Direct Injection)',
    power: '201 hp (150 kW) @ 3,400 RPM (2020+ Update: 204 PS)',
    torque: '500 N·m (369 lb·ft) @ 1,600–2,800 RPM (Automatic)',
    oilCapacityWithFilter: '7.5 Liters',
    oilCapacityWithoutFilter: '7.0 Liters',
    recommendedOilViscosity: '0W-30 / 5W-30 Full Synthetic',
    oilStandard: 'ACEA C2 / JASO DL-1 (DPF/Catalytic Converter safe)',
    coolantCapacity: '11.1 Liters (Toyota Super Long Life Coolant - Pink)',
    compressionRatio: '15.6 : 1',
    compressionStandard: '2.7 MPa (392 psi) @ 250 RPM',
    compressionMinimum: '2.2 MPa (319 psi)',
    valveClearance: {
      condition: 'Cold Engine (အင်ဂျင်လုံးဝအေးနေချိန်တွင် တိုင်းရန်)',
      intakeMm: '0.20 mm ~ 0.30 mm (စံထား: 0.25 mm)',
      exhaustMm: '0.35 mm ~ 0.45 mm (စံထား: 0.40 mm)',
      adjustmentMethodMy: 'Hydraulic Lash Adjusters (HLA) တပ်ဆင်ထားသော်လည်း overhaul လုပ်ချိန်တွင် Camshaft lobe နှင့် Roller Rocker Arm ကြား ကင်းလွတ်အားကို Feeler Gauge ဖြင့် စစ်ဆေးရန်။',
      adjustmentMethodEn: 'Roller rocker arms with hydraulic lash adjusters (HLA). Verify clearance between rocker pad and cam lobe during overhaul using feeler gauge.'
    },
    timingInfo: {
      systemType: 'Timing Chain (စတီးလ်ချိန်းကြိုးစနစ်)',
      serviceIntervalMy: 'Timing Chain ဖြစ်သောကြောင့် သတ်မှတ်ထားသော ပုံမှန်အင်ဂျင်ဝိုင်လဲလှယ်မှု ပြုလုပ်ပါက တစ်သက်တာ (Lifetime) အသုံးပြုနိုင်ပါသည်။ Tensioner သို့မဟုတ် အသံထွက်လာမှသာ လဲလှယ်ရန်။',
      serviceIntervalEn: 'Lifetime chain under regular synthetic oil changes. Inspect tensioner guide wear if rattle occurs on cold startup.',
      marksGuideMy: [
        'Crankshaft Pulley/Sprocket ကို TDC 0° အမှတ်အသားနှင့် ကိုက်ညီအောင် လှည့်ပါ။',
        'Camshaft Sprocket များပေါ်ရှိ အဝါရောင်/အမဲရောင် အမှတ်အသားများကို Timing Chain Link အမှတ်အသားများနှင့် တည့်တည့်ချိန်ပါ။',
        'Common Rail High-Pressure Supply Pump drive gear ချိန်မှတ်ကို နေရာတကျ တိုက်ဆိုင်ပါ။',
        'Chain Tensioner ကို Pin ဆွဲဖြုတ်ပြီး စနစ်တကျ ပြန်လည်တင်းကျပ်ပါ။'
      ],
      marksGuideEn: [
        'Align Crankshaft sprocket TDC notch with cylinder block timing pointer (0° mark).',
        'Align single/double punch marks on intake and exhaust camshaft sprockets with colored links on timing chain.',
        'Align high-pressure common rail fuel supply pump timing mark with idler gear mark.',
        'Release timing chain auto-tensioner locking pin and rotate crankshaft clockwise 2 full turns to verify TDC sync.'
      ],
      diagramNotesMy: 'Crankshaft ကို လက်ယာရစ် (Clockwise) သာ အမြဲလှည့်ပါ။ ပြောင်းပြန် (Anti-clockwise) ဘယ်တော့မှ မလှည့်ပါနှင့်။',
      diagramNotesEn: 'Always rotate crankshaft clockwise in direction of engine rotation. Never turn backwards.'
    },
    cylinderHeadTighteningSequence: [
      10, 4, 2, 6, 8,
      7, 5, 1, 3, 9
    ],
    torqueSpecs: [
      {
        id: '1gd-head-bolts',
        componentMy: 'ဆလင်ဒါခေါင်း မူလီများ (Cylinder Head Bolts)',
        componentEn: 'Cylinder Head Bolts (10 pcs)',
        category: 'head',
        nm: 45,
        ftlb: 33.2,
        kgfm: 4.6,
        boltSize: '12-point Bi-Hexagon (M12)',
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: အတွင်းမှ အပြင်သို့ ပုံစံအတိုင်း မူလီအားလုံးကို 45 N·m (33 ft-lb) ကြပ်ပါ။',
          'အဆင့် ၂: ဆေးတံဆိပ်ဖြင့် မူလီခေါင်းတွင် မှတ်သားပြီး 90° (ထောင့်မှန်) တစ်လှည့် ထပ်ကြပ်ပါ။',
          'အဆင့် ၃: နောက်ထပ် 90° တစ်လှည့် ထပ်မံကြပ်ပါ (Angle-Torque စနစ် စုစုပေါင်း 180° လှည့်ရပါမည်)။'
        ],
        stepsEn: [
          'Step 1: Tighten all 10 bolts in specified center-outward sequence to 45 N·m (33 ft-lb).',
          'Step 2: Paint a reference mark on each bolt head and tighten 90° further.',
          'Step 3: Tighten an additional 90° in sequence (total 180° angle torque).'
        ],
        cautionMy: 'မူလီချည်များကို အင်ဂျင်ဝိုင် အနည်းငယ်သုတ်ပေးပါ။ အလျားရှည်ထွက်နေသော မူလီအဟောင်းများကို အသစ်လဲလှယ်သုံးစွဲပါ။',
        cautionEn: 'Lightly coat threads and under bolt heads with clean engine oil. Inspect bolt stretch; replace if out of spec.'
      },
      {
        id: '1gd-main-bearing',
        componentMy: 'ခရိုင်းရှပ် အောက်ခံမူလီများ (Main Bearing Cap Bolts)',
        componentEn: 'Crankshaft Main Bearing Cap Bolts',
        category: 'bottom_end',
        nm: 170,
        ftlb: 125.4,
        kgfm: 17.3,
        boltSize: 'M14 High-Tensile',
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: အတွင်းမှ အပြင်သို့ 90 N·m ဖြင့် အရင်ကြပ်ပါ။',
          'အဆင့် ၂: သတ်မှတ်ထားသော အပြည့်အဝ တန်ဖိုး 170 N·m (125 ft-lb) အထိ အညီအမျှ ကြပ်ပေးပါ။'
        ],
        stepsEn: [
          'Step 1: Uniformly pre-torque all bolts from center out to 90 N·m.',
          'Step 2: Final torque to 170 N·m (125.4 ft-lb).'
        ],
        cautionMy: 'Bearing shell မျက်နှာပြင်တွင် ဖုန်သဲ လုံးဝမရှိစေရ။',
        cautionEn: 'Ensure bearing backings and journals are immaculately clean. Oil journals before torquing.'
      },
      {
        id: '1gd-rod-bolts',
        componentMy: 'ကွန်နက်တင်းရော့ဒ် မူလီများ (Connecting Rod Cap Bolts)',
        componentEn: 'Connecting Rod Big-End Bearing Bolts',
        category: 'bottom_end',
        nm: 35,
        ftlb: 25.8,
        kgfm: 3.6,
        boltSize: '12-point Bi-Hexagon (M9)',
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: 35 N·m (26 ft-lb) ဖြင့် အရင်ကြပ်ပါ။',
          'အဆင့် ၂: မူလီခေါင်းတွင် မှတ်သားပြီး 90° (ထောင့်မှန်) တစ်ကွေ့ ထပ်ကြပ်ပါ။'
        ],
        stepsEn: [
          'Step 1: Torque both nuts/bolts to 35 N·m (25.8 ft-lb).',
          'Step 2: Mark bolt head and rotate an additional 90°.'
        ],
        cautionMy: 'Con-rod cap မူလီများသည် plastic region bolt များဖြစ်၍ ဆွဲဆန့်အားလွန်ကွဲထွက်တတ်သဖြင့် 90° ထက်ပိုမလှည့်ပါနှင့်။',
        cautionEn: 'Torque-to-yield bolts. Do not exceed 90° on the angle turn.'
      },
      {
        id: '1gd-crank-pulley',
        componentMy: 'ခရိုင်းရှပ် ပူလီ မူလီကြီး (Crankshaft Harmonic Damper Pulley Bolt)',
        componentEn: 'Crankshaft Pulley Center Bolt',
        category: 'bottom_end',
        nm: 265,
        ftlb: 195.5,
        kgfm: 27.0,
        boltSize: 'M20 Center Bolt',
        criticalLevel: 'critical',
        stepsMy: [
          'Flywheel သို့မဟုတ် Pulley stopper tool ဖြင့် ခရိုင်းရှပ်မလည်အောင် ထိန်းထားပါ။',
          'Torque wrench ကြီးဖြင့် တိကျစွာ 265 N·m (195.5 ft-lb) ကြပ်ပါ။'
        ],
        stepsEn: [
          'Lock flywheel or pulley using dedicated holding tool SST.',
          'Torque firmly to 265 N·m (195.5 ft-lb).'
        ],
        cautionMy: 'ဤမူလီ လျော့ရဲပါက Crankshaft Keyway ပျက်စီးပြီး အင်ဂျင်တိုင်မင် လွဲသွားနိုင်ပါသည်။',
        cautionEn: 'Under-torquing causes keyway damage and catastrophic valve-to-piston contact.'
      },
      {
        id: '1gd-flywheel',
        componentMy: 'ဖလိုက်ဝီး မူလီများ (Flywheel / Drive Plate Bolts)',
        componentEn: 'Flywheel / Torque Converter Drive Plate Bolts',
        category: 'bottom_end',
        nm: 125,
        ftlb: 92.2,
        kgfm: 12.7,
        boltSize: 'M12 Fine Pitch',
        criticalLevel: 'high',
        stepsMy: [
          'ကြက်ခြေခတ် (Criss-cross) ပုံစံဖြင့် 60 N·m ဖြင့် အရင်ကြပ်ပါ။',
          'ဒုတိယအဆင့်တွင် 125 N·m အထိ အပြည့်ကြပ်ပါ။'
        ],
        stepsEn: [
          'Pre-tighten in criss-cross pattern to 60 N·m.',
          'Final torque in diagonal sequence to 125 N·m (92.2 ft-lb).'
        ],
        cautionMy: 'Thread locker (Loctite မူလီကော်) အနည်းငယ် ထည့်သွင်းသုံးစွဲရန် အကြံပြုပါသည်။',
        cautionEn: 'Apply medium-strength thread sealant/locker to bolt threads.'
      },
      {
        id: '1gd-cam-caps',
        componentMy: 'ကမ်ရှပ် အဖုံး မူလီများ (Camshaft Bearing Cap Bolts)',
        componentEn: 'Camshaft Bearing Cap Bolts',
        category: 'head',
        nm: 19,
        ftlb: 14.0,
        kgfm: 1.9,
        boltSize: 'M8',
        criticalLevel: 'high',
        stepsMy: [
          'အတွင်းမှ အပြင်သို့ အညီအမျှ တစ်လှည့်ချင်း ဖြည်းဖြည်းချင်း ကြပ်ပါ။',
          'အပြီးသတ် 19 N·m ဖြင့် အားလုံးကို တိုက်ဆိုင်စစ်ဆေးပါ။'
        ],
        stepsEn: [
          'Tighten incrementally from center outward to pull camshaft down evenly.',
          'Final torque to 19 N·m (14 ft-lb).'
        ],
        cautionMy: 'တစ်ဖက်တည်း အတင်းကြပ်ပါက Camshaft ကျိုးအက်တတ်ပါသည်။',
        cautionEn: 'Do not torque one side down first; camshaft will snap if tilted.'
      },
      {
        id: '1gd-injectors',
        componentMy: 'ဒီဇယ် အင်ဂျက်တာ ညှပ်မူလီများ (Fuel Injector Clamp Bolts)',
        componentEn: 'Fuel Injector Clamp Retaining Bolts',
        category: 'fuel',
        nm: 30,
        ftlb: 22.1,
        kgfm: 3.1,
        boltSize: 'M8 Clamp Bolt',
        criticalLevel: 'critical',
        stepsMy: [
          'ကြေးဝါရှာ (Copper washer) အသစ် အမြဲလဲပါ။',
          'Clamp bolt ကို တိကျစွာ 30 N·m ကြပ်ပါ။'
        ],
        stepsEn: [
          'Always install brand new OEM copper seating washers.',
          'Torque injector clamp bolts to exactly 30 N·m (22.1 ft-lb).'
        ],
        cautionMy: 'ပေါင်အား လျော့ပါက Compression လေယိုပြီး အင်ဂျက်တာ ကာဗွန်ဂျိုးပိတ်တတ်ပါသည်။ ပေါင်အားပိုပါက Clamp ပြား ကွေးသွားတတ်ပါသည်။',
        cautionEn: 'Under-torque causes blow-by and carbon fouling; over-torque bends clamp.'
      },
      {
        id: '1gd-fuel-pipes',
        componentMy: 'ကွန်မွန်းရေး ပိုက်လိုင်း အခွံခေါင်းများ (Common Rail Fuel Pipe Unions)',
        componentEn: 'High Pressure Injection Pipe Union Nuts',
        category: 'fuel',
        nm: 35,
        ftlb: 25.8,
        kgfm: 3.6,
        boltSize: 'Flare Nut 17mm',
        criticalLevel: 'high',
        stepsMy: [
          'လက်ဖြင့် ချည်အပြည့်ဝင်အောင် အရင်လှည့်ထည့်ပါ။',
          'Flare nut wrench ဖြင့် 35 N·m ကြပ်ပါ။'
        ],
        stepsEn: [
          'Thread union nuts on completely by hand to prevent cross-threading.',
          'Torque with slotted flare nut socket to 35 N·m (25.8 ft-lb).'
        ]
      },
      {
        id: '1gd-rocker-cover',
        componentMy: 'ဘားကာဗာ အဖုံး မူလီများ (Cylinder Head Cover / Rocker Cover)',
        componentEn: 'Cylinder Head Rocker Cover Bolts',
        category: 'external',
        nm: 10,
        ftlb: 7.4,
        kgfm: 1.0,
        boltSize: 'M6',
        criticalLevel: 'standard',
        stepsMy: ['အတွင်းမှ အပြင်သို့ 10 N·m ဖြင့် ညီညာစွာ ကြပ်ပါ။'],
        stepsEn: ['Torque evenly from center outward to 10 N·m (7.4 ft-lb).'],
        cautionMy: 'အရမ်းမကြပ်ပါနှင့်၊ ရာဘာဂတ်စကတ် ညပ်ပြားပြီး ဆီယိုတတ်ပါသည်။',
        cautionEn: 'Avoid over-torquing to prevent gasket pinching or cover cracking.'
      },
      {
        id: '1gd-glow-plugs',
        componentMy: 'မီးထိုးပလပ်များ (Glow Plugs)',
        componentEn: 'Glow Plugs',
        category: 'fuel',
        nm: 15,
        ftlb: 11.1,
        kgfm: 1.5,
        boltSize: '10mm Hex',
        criticalLevel: 'standard',
        stepsMy: ['လက်ဖြင့် ဖြည်းဖြည်းချင်း ချည်ဝင်အောင်လှည့်ပြီး 15 N·m သာ ကြပ်ပါ။'],
        stepsEn: ['Carefully screw in by hand, then torque to 15 N·m (11.1 ft-lb).'],
        cautionMy: 'အေးနေချိန်တွင်သာ ဖြုတ်/တပ် ပြုလုပ်ပါ။ ချည်ပြုတ်ထွက်ပါက ခေါင်းဖြုတ်ရတတ်ပါသည်။',
        cautionEn: 'Work only on cold cylinder head. Over-torquing snaps ceramic tip or strips thread.'
      },
      {
        id: '1gd-oil-drain',
        componentMy: 'အင်ဂျင်ဝိုင် ဖောက်မူလီ (Engine Oil Pan Drain Plug)',
        componentEn: 'Oil Pan Drain Plug',
        category: 'external',
        nm: 40,
        ftlb: 29.5,
        kgfm: 4.1,
        boltSize: '14mm Hex',
        criticalLevel: 'standard',
        stepsMy: ['ဝါရှာပြား အသစ်ထည့်ပြီး 40 N·m ဖြင့် ကြပ်ပါ။'],
        stepsEn: ['Fit new crush washer and tighten to 40 N·m (29.5 ft-lb).']
      }
    ]
  },
  {
    id: '2gd-ftv',
    code: '2GD-FTV',
    name: 'Toyota Fortuner 2.4L VN Turbo Diesel',
    displacement: '2,393 cc (2.4 Liters)',
    generation: '2nd Gen Fortuner (AN160 / 2015 – Present)',
    years: '2015 – Present',
    configuration: 'Inline 4-Cylinder, 16-Valve DOHC with Intercooler & Variable Nozzle Turbo (VNT)',
    fuelType: 'Diesel (Common Rail Direct Injection)',
    power: '148 hp (110 kW) @ 3,400 RPM',
    torque: '400 N·m (295 lb·ft) @ 1,600–2,000 RPM',
    oilCapacityWithFilter: '7.5 Liters',
    oilCapacityWithoutFilter: '7.0 Liters',
    recommendedOilViscosity: '0W-30 / 5W-30 Full Synthetic',
    oilStandard: 'ACEA C2 / JASO DL-1',
    coolantCapacity: '10.9 Liters (Toyota Pink Super Long Life)',
    compressionRatio: '15.6 : 1',
    compressionStandard: '2.7 MPa (392 psi)',
    compressionMinimum: '2.2 MPa (319 psi)',
    valveClearance: {
      condition: 'Cold Engine (အင်ဂျင်အေးနေချိန်)',
      intakeMm: '0.20 mm ~ 0.30 mm (စံထား: 0.25 mm)',
      exhaustMm: '0.35 mm ~ 0.45 mm (စံထား: 0.40 mm)',
      adjustmentMethodMy: '1GD နှင့် အတူတူပင်ဖြစ်ပါသည်။ Hydraulic Lash Adjusters စနစ်ပါဝင်ပြီး Overhaul တွင် Feeler gauge ဖြင့် စစ်ဆေးရပါမည်။',
      adjustmentMethodEn: 'Identical design to 1GD-FTV with hydraulic lifters and roller rocker arms.'
    },
    timingInfo: {
      systemType: 'Timing Chain (စတီးလ်ချိန်းကြိုးစနစ်)',
      serviceIntervalMy: 'ပုံမှန်အင်ဂျင်ဝိုင်လဲလှယ်မှု ကောင်းမွန်ပါက တစ်သက်တာ အသုံးပြုနိုင်သော စတီးလ်ချိန်း ဖြစ်ပါသည်။',
      serviceIntervalEn: 'Lifetime chain under recommended service conditions.',
      marksGuideMy: [
        'Crankshaft TDC 0° အမှတ်အသားချိန်ပါ။',
        'Camshaft Sprockets မှတ်များကို Chain အရောင်ခွဲထားသော Link များနှင့် ချိန်ပါ။',
        'High-Pressure Fuel Pump drive gear အမှတ်ကို တိုက်ဆိုင်ပါ။'
      ],
      marksGuideEn: [
        'Crankshaft at TDC cylinder 1.',
        'Intake and exhaust cam gears aligned with colored links on chain.',
        'High-pressure fuel pump timing mark aligned with idler.'
      ],
      diagramNotesMy: '2GD သည် 1GD နှင့် Block & Head ဒီဇိုင်းတူညီပြီး Cylinder Stroke သာ ကွာခြားပါသည်။',
      diagramNotesEn: '2GD shares block architecture with 1GD with a shorter piston stroke.'
    },
    cylinderHeadTighteningSequence: [
      10, 4, 2, 6, 8,
      7, 5, 1, 3, 9
    ],
    torqueSpecs: [
      {
        id: '2gd-head-bolts',
        componentMy: 'ဆလင်ဒါခေါင်း မူလီများ (Cylinder Head Bolts)',
        componentEn: 'Cylinder Head Bolts (10 pcs)',
        category: 'head',
        nm: 45,
        ftlb: 33.2,
        kgfm: 4.6,
        boltSize: '12-point Bi-Hexagon (M12)',
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: အတွင်းမှ အပြင်သို့ စနစ်တကျ 45 N·m (33 ft-lb) ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်လှည့်ပါ။',
          'အဆင့် ၃: နောက်ထပ် 90° ထပ်လှည့်ပါ (စုစုပေါင်း 180° Angle-Torque)။'
        ],
        stepsEn: [
          'Step 1: Torque sequence from center outward to 45 N·m (33 ft-lb).',
          'Step 2: Turn 90°.',
          'Step 3: Turn an additional 90° (total 180°).'
        ],
        cautionMy: 'ဆလင်ဒါခေါင်း မူလီအဟောင်းများ အလျားဆွဲဆန့်မှု မလွန်စေရန် တိုင်းတာစစ်ဆေးပါ။',
        cautionEn: 'Check bolt free length before re-use; replace if stretched.'
      },
      {
        id: '2gd-main-bearing',
        componentMy: 'ခရိုင်းရှပ် အောက်ခံမူလီများ (Main Bearing Cap Bolts)',
        componentEn: 'Crankshaft Main Bearing Bolts',
        category: 'bottom_end',
        nm: 170,
        ftlb: 125.4,
        kgfm: 17.3,
        criticalLevel: 'critical',
        stepsMy: ['အတွင်းမှ အပြင်သို့ 90 N·m ဖြင့် စတင်ပြီး 170 N·m အထိ အပြီးသတ်ကြပ်ပါ။'],
        stepsEn: ['Progressively torque to 90 N·m, then final 170 N·m.']
      },
      {
        id: '2gd-rod-bolts',
        componentMy: 'ကွန်နက်တင်းရော့ဒ် မူလီများ (Connecting Rod Bolts)',
        componentEn: 'Connecting Rod Cap Bolts',
        category: 'bottom_end',
        nm: 35,
        ftlb: 25.8,
        kgfm: 3.6,
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: 35 N·m ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်လှည့်ပါ။'
        ],
        stepsEn: [
          'Step 1: Torque to 35 N·m.',
          'Step 2: Turn 90°.'
        ]
      },
      {
        id: '2gd-crank-pulley',
        componentMy: 'ခရိုင်းရှပ် ပူလီ မူလီကြီး (Crankshaft Damper Pulley Bolt)',
        componentEn: 'Crankshaft Pulley Bolt',
        category: 'bottom_end',
        nm: 265,
        ftlb: 195.5,
        kgfm: 27.0,
        criticalLevel: 'critical',
        stepsMy: ['Flywheel ကို ထိန်းပြီး 265 N·m တိကျစွာ ကြပ်ပါ။'],
        stepsEn: ['Hold crankshaft with holding tool and torque to 265 N·m.']
      },
      {
        id: '2gd-injectors',
        componentMy: 'ဒီဇယ် အင်ဂျက်တာ ညှပ်မူလီများ (Injector Clamp Bolts)',
        componentEn: 'Fuel Injector Clamp Bolts',
        category: 'fuel',
        nm: 30,
        ftlb: 22.1,
        kgfm: 3.1,
        criticalLevel: 'critical',
        stepsMy: ['ကြေးဝါရှာ အသစ်လဲပြီး 30 N·m တိကျစွာ ကြပ်ပါ။'],
        stepsEn: ['Always install new OEM copper seal ring; torque to 30 N·m.']
      }
    ]
  },
  {
    id: '1kd-ftv',
    code: '1KD-FTV',
    name: 'Toyota Fortuner 3.0L D-4D Turbo Diesel',
    displacement: '2,982 cc (3.0 Liters)',
    generation: '1st Gen Fortuner (AN50/AN60 / 2005 – 2015)',
    years: '2005 – 2015',
    configuration: 'Inline 4-Cylinder, 16-Valve DOHC, Intercooler Turbo D-4D',
    fuelType: 'Diesel (Common Rail Direct Injection)',
    power: '169 hp (126 kW) @ 3,600 RPM',
    torque: '360 N·m (266 lb·ft) @ 1,400–3,200 RPM',
    oilCapacityWithFilter: '7.2 Liters',
    oilCapacityWithoutFilter: '6.7 Liters',
    recommendedOilViscosity: '5W-30 / 10W-30 / 15W-40 Diesel Oil',
    oilStandard: 'API CF-4 / CI-4',
    coolantCapacity: '10.5 Liters (Toyota Long Life Coolant - Red or Pink)',
    compressionRatio: '17.9 : 1 (Early) / 15.0 : 1 (Late)',
    compressionStandard: '2.7 MPa (392 psi)',
    compressionMinimum: '1.9 MPa (275 psi)',
    valveClearance: {
      condition: 'Cold Engine (အင်ဂျင်လုံးဝအေးနေချိန်တွင် တိုင်းရန်)',
      intakeMm: '0.20 mm ~ 0.30 mm (စံထား: 0.25 mm)',
      exhaustMm: '0.35 mm ~ 0.45 mm (စံထား: 0.40 mm)',
      adjustmentMethodMy: 'Solid Valve Lifter / Shim စနစ်ဖြစ်ပါသည်။ Valve clearance မမှန်ပါက သင့်တော်သော အထူရှိသည့် Valve Shim အပြားကို လဲလှယ်ချိန်ညှိပေးရပါမည်။',
      adjustmentMethodEn: 'Shim-over-bucket / Solid lifter arrangement. Measure with feeler gauge and swap adjustment shims if out of tolerance.'
    },
    timingInfo: {
      systemType: 'Timing Belt (ရော်ဘာ တိုင်မင်ခါးပတ်ကြိုးစနစ်)',
      serviceIntervalMy: 'ကီလိုမီတာ ၁၅၀,၀၀၀ (150,000 km) သို့မဟုတ် (၇) နှစ်ပြည့်တိုင်း Timing Belt နှင့် Hydraulic Tensioner ကို မဖြစ်မနေ အသစ်လဲလှယ်ပေးရပါမည်။ (Dashboard တွင် T-BELT မီးလင်းပါမည်)',
      serviceIntervalEn: 'Replace Timing Belt, idler bearing, and auto-tensioner every 150,000 km or 7 years. Reset T-BELT warning light on cluster.',
      marksGuideMy: [
        'Crankshaft Pulley တိုင်မင်မှတ်ကို 0° TDC တွင် ချိန်ထားပါ။',
        'Camshaft Timing Pulley အပေါ်ရှိ Notch အမှတ်ကို Cylinder Head မျက်နှာပြင်ရှိ အမှတ်နှင့် တည့်တည့်ချိန်ပါ။',
        'High Pressure Common Rail Supply Pump Pulley အမှတ်ကို ချိန်ပါ။',
        'Timing Belt အသစ်တွင် ပါရှိသော မြှားနှင့် မျဉ်းကြောင်းများကို Pulley အမှတ်များနှင့် ကိုက်ညီအောင် တပ်ဆင်ပါ။',
        'Tensioner bolt ကို 13 N·m ဖြင့် ကြပ်ပြီး Pin ကို ဆွဲထုတ်ပါ။ Crankshaft ကို (၂) ပတ် အပြည့် လက်ယာရစ်လှည့်ပြီး အမှတ်အားလုံး ပြန်စစ်ပါ။'
      ],
      marksGuideEn: [
        'Align crankshaft TDC 0° mark.',
        'Align camshaft timing pulley notch with cylinder head timing mark.',
        'Align injection supply pump timing pulley marks.',
        'Install new timing belt matching directional arrows and alignment marks.',
        'Release tensioner grenade pin, rotate crankshaft 2 complete revolutions, and confirm all timing marks match precisely.'
      ],
      diagramNotesMy: '1KD-FTV တွင် Timing Belt ပြတ်သွားပါက Valve နှင့် Piston ရိုက်မိပြီး အင်ဂျင်အကြီးအကျယ် ပျက်စီးနိုင်သဖြင့် သတ်မှတ်ကီလိုထက် ပိုမသုံးသင့်ပါ။',
      diagramNotesEn: 'Interference engine! Timing belt failure results in severe valve and piston damage.'
    },
    cylinderHeadTighteningSequence: [
      14, 8, 6, 2, 4, 10, 12,
      11, 9, 3, 1, 5, 7, 13
    ],
    torqueSpecs: [
      {
        id: '1kd-head-bolts',
        componentMy: 'ဆလင်ဒါခေါင်း မူလီများ (Cylinder Head Bolts - 18 Pcs)',
        componentEn: 'Cylinder Head Bolts (18 bolts sequence)',
        category: 'head',
        nm: 39,
        ftlb: 28.8,
        kgfm: 4.0,
        boltSize: '12-point Bi-Hexagon (M12)',
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: အတွင်းမှ အပြင်သို့ သတ်မှတ်အစီအစဉ်အတိုင်း 39 N·m (29 ft-lb) ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်မံလှည့်ပါ။',
          'အဆင့် ၃: နောက်ထပ် 90° ထပ်လှည့်ပါ (စုစုပေါင်း 180° Angle-Torque)။'
        ],
        stepsEn: [
          'Step 1: Torque 18 bolts from center criss-cross outward to 39 N·m (28.8 ft-lb).',
          'Step 2: Turn 90° in sequence.',
          'Step 3: Turn another 90° (total 180°).'
        ],
        cautionMy: '1KD ခေါင်းမူလီ အရှည် (under head to tip) ကို တိုင်းပါ။ 168.2 mm ထက် ရှည်နေပါက မူလီအသစ် လဲရပါမည်။',
        cautionEn: 'Measure maximum bolt length. Replace bolts exceeding 168.2 mm.'
      },
      {
        id: '1kd-main-bearing',
        componentMy: 'ခရိုင်းရှပ် အောက်ခံမူလီများ (Main Bearing Cap Bolts)',
        componentEn: 'Crankshaft Main Bearing Bolts',
        category: 'bottom_end',
        nm: 170,
        ftlb: 125.4,
        kgfm: 17.3,
        criticalLevel: 'critical',
        stepsMy: ['အတွင်းမှ အပြင်သို့ အဆင့်ဆင့် 170 N·m အထိ ကြပ်ပါ။'],
        stepsEn: ['Torque in stages to final 170 N·m (125.4 ft-lb).']
      },
      {
        id: '1kd-rod-bolts',
        componentMy: 'ကွန်နက်တင်းရော့ဒ် မူလီများ (Connecting Rod Cap Nuts)',
        componentEn: 'Connecting Rod Cap Nuts',
        category: 'bottom_end',
        nm: 35,
        ftlb: 25.8,
        kgfm: 3.6,
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: 35 N·m (26 ft-lb) ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်လှည့်ပါ။'
        ],
        stepsEn: [
          'Step 1: Torque nuts to 35 N·m (25.8 ft-lb).',
          'Step 2: Tighten 90° further.'
        ]
      },
      {
        id: '1kd-crank-pulley',
        componentMy: 'ခရိုင်းရှပ် ပူလီ မူလီကြီး (Crankshaft Damper Pulley Bolt)',
        componentEn: 'Crankshaft Pulley Center Bolt',
        category: 'bottom_end',
        nm: 235,
        ftlb: 173.3,
        kgfm: 24.0,
        boltSize: '19mm Hex',
        criticalLevel: 'critical',
        stepsMy: ['Flywheel ကို သော့ဖြင့် ထိန်းထားပြီး 235 N·m တိကျစွာ ကြပ်ပါ။'],
        stepsEn: ['Hold crankshaft stationary and torque to 235 N·m (173.3 ft-lb).']
      },
      {
        id: '1kd-flywheel',
        componentMy: 'ဖလိုက်ဝီး မူလီများ (Flywheel Bolts)',
        componentEn: 'Flywheel Bolts',
        category: 'bottom_end',
        nm: 145,
        ftlb: 106.9,
        kgfm: 14.8,
        criticalLevel: 'high',
        stepsMy: ['Criss-cross စနစ်ဖြင့် 145 N·m အညီအမျှ ကြပ်ပါ။'],
        stepsEn: ['Diagonal star pattern to 145 N·m (106.9 ft-lb).']
      },
      {
        id: '1kd-cam-gear',
        componentMy: 'ကမ်ရှပ် ပူလီ မူလီ (Camshaft Timing Pulley Bolt)',
        componentEn: 'Camshaft Timing Belt Pulley Bolt',
        category: 'timing',
        nm: 98,
        ftlb: 72.3,
        kgfm: 10.0,
        criticalLevel: 'high',
        stepsMy: ['Cam gear ကို သော့ဖြင့် ထိန်းထားပြီး 98 N·m ကြပ်ပါ။'],
        stepsEn: ['Hold camshaft gear with holding spanner and torque bolt to 98 N·m.']
      },
      {
        id: '1kd-injectors',
        componentMy: 'ဒီဇယ် အင်ဂျက်တာ ညှပ်မူလီများ (Fuel Injector Clamp Bolts)',
        componentEn: 'Common Rail Injector Clamp Bolts',
        category: 'fuel',
        nm: 26,
        ftlb: 19.2,
        kgfm: 2.7,
        criticalLevel: 'critical',
        stepsMy: [
          'ကြေးဝါရှာပြား (Copper seat washer) အသစ် အမြဲထည့်ပါ။',
          'အညီအမျှ 26 N·m ကြပ်ပါ။'
        ],
        stepsEn: [
          'Always renew OEM copper injector seats.',
          'Torque clamp bolts evenly to 26 N·m (19.2 ft-lb).'
        ],
        cautionMy: '1KD အင်ဂျက်တာ ကြေးဝါရှာပြား ပြားလွန်းခြင်း/ပေါင်အားမှားခြင်းကြောင့် Blow-by ဖြစ်ကာ Engine Oil Screen ပိတ်ပြီး အင်ဂျင်ကျတတ်သော ပြဿနာ ထင်ရှားပါသည်။',
        cautionEn: 'Crucial for 1KD: Defective copper seats cause oil pickup screen sludging and catastrophic engine seizure.'
      },
      {
        id: '1kd-timing-tensioner',
        componentMy: 'တိုင်မင် တင်းရှင်းနာ မူလီများ (Timing Belt Auto-Tensioner Bolts)',
        componentEn: 'Timing Belt Auto-Tensioner Bolts (2 pcs)',
        category: 'timing',
        nm: 13,
        ftlb: 9.6,
        kgfm: 1.3,
        criticalLevel: 'high',
        stepsMy: ['မူလီ (၂) ချောင်းကို 13 N·m ဖြင့် ညီစွာ ကြပ်ပြီး Pin ဖြုတ်ပါ။'],
        stepsEn: ['Torque both mounting bolts to 13 N·m before pulling tensioner release pin.']
      },
      {
        id: '1kd-glow-plugs',
        componentMy: 'မီးထိုးပလပ်များ (Glow Plugs)',
        componentEn: 'Glow Plugs',
        category: 'fuel',
        nm: 13,
        ftlb: 9.6,
        kgfm: 1.3,
        criticalLevel: 'standard',
        stepsMy: ['13 N·m ထက် ပိုမကြပ်ပါနှင့်။'],
        stepsEn: ['Tighten gently to 13 N·m.']
      }
    ]
  },
  {
    id: '2kd-ftv',
    code: '2KD-FTV',
    name: 'Toyota Fortuner 2.5L D-4D Turbo Diesel',
    displacement: '2,494 cc (2.5 Liters)',
    generation: '1st Gen Fortuner (AN50/AN60 / 2005 – 2015)',
    years: '2005 – 2015',
    configuration: 'Inline 4-Cylinder, 16-Valve DOHC Turbo D-4D',
    fuelType: 'Diesel (Common Rail Direct Injection)',
    power: '142 hp (106 kW) @ 3,400 RPM (Intercooler VN)',
    torque: '343 N·m (253 lb·ft) @ 1,600–2,800 RPM',
    oilCapacityWithFilter: '6.9 Liters',
    oilCapacityWithoutFilter: '6.4 Liters',
    recommendedOilViscosity: '5W-30 / 10W-30 / 15W-40 Diesel Oil',
    oilStandard: 'API CF-4 / CI-4',
    coolantCapacity: '9.8 Liters',
    compressionRatio: '18.5 : 1 / 15.6 : 1',
    compressionStandard: '2.7 MPa (392 psi)',
    compressionMinimum: '1.9 MPa (275 psi)',
    valveClearance: {
      condition: 'Cold Engine (အင်ဂျင်အေးနေချိန်)',
      intakeMm: '0.20 mm ~ 0.30 mm (စံထား: 0.25 mm)',
      exhaustMm: '0.35 mm ~ 0.45 mm (စံထား: 0.40 mm)',
      adjustmentMethodMy: '1KD နှင့် တူညီသော Shim-over-bucket စနစ်ဖြစ်ပါသည်။ Feeler gauge ဖြင့် စစ်ဆေး၍ လိုအပ်ပါက shim အသစ် လဲလှယ်ပါ။',
      adjustmentMethodEn: 'Solid lifters with adjustment shims. Measure cold clearance and replace shims as needed.'
    },
    timingInfo: {
      systemType: 'Timing Belt (ရော်ဘာ တိုင်မင်ခါးပတ်ကြိုးစနစ်)',
      serviceIntervalMy: '1KD ကဲ့သို့ပင် ကီလိုမီတာ ၁၅၀,၀၀၀ (150,000 km) သို့မဟုတ် ၇ နှစ်ပြည့်တိုင်း လဲလှယ်ရန်။',
      serviceIntervalEn: '150,000 km or 7-year service interval for belt and tensioner.',
      marksGuideMy: [
        'Crankshaft TDC 0° မှတ်။',
        'Camshaft Pulley အမှတ်နှင့် Cylinder head အမှတ် တိုက်ဆိုင်ပါ။',
        'Fuel supply pump pulley အမှတ် တိုက်ဆိုင်ပါ။'
      ],
      marksGuideEn: [
        'Crankshaft 0° TDC mark.',
        'Camshaft sprocket alignment mark with cylinder head notch.',
        'Supply pump pulley alignment.'
      ],
      diagramNotesMy: '1KD နှင့် Timing Belt အမှတ်အသား အတူတူပင် ဖြစ်ပါသည်။',
      diagramNotesEn: 'Timing layout is identical to 1KD-FTV.'
    },
    cylinderHeadTighteningSequence: [
      14, 8, 6, 2, 4, 10, 12,
      11, 9, 3, 1, 5, 7, 13
    ],
    torqueSpecs: [
      {
        id: '2kd-head-bolts',
        componentMy: 'ဆလင်ဒါခေါင်း မူလီများ (Cylinder Head Bolts)',
        componentEn: 'Cylinder Head Bolts (18 bolts)',
        category: 'head',
        nm: 39,
        ftlb: 28.8,
        kgfm: 4.0,
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: 39 N·m (29 ft-lb) ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်လှည့်ပါ။',
          'အဆင့် ၃: နောက်ထပ် 90° ထပ်လှည့်ပါ (စုစုပေါင်း 180° Angle-Torque)။'
        ],
        stepsEn: [
          'Step 1: Torque in sequence to 39 N·m.',
          'Step 2: Turn 90°.',
          'Step 3: Turn 90° again.'
        ]
      },
      {
        id: '2kd-main-bearing',
        componentMy: 'ခရိုင်းရှပ် အောက်ခံမူလီများ (Main Bearing Bolts)',
        componentEn: 'Main Bearing Bolts',
        category: 'bottom_end',
        nm: 170,
        ftlb: 125.4,
        kgfm: 17.3,
        criticalLevel: 'critical',
        stepsMy: ['170 N·m အထိ အညီအမျှ ကြပ်ပါ။'],
        stepsEn: ['Torque progressively to 170 N·m.']
      },
      {
        id: '2kd-rod-bolts',
        componentMy: 'ကွန်နက်တင်းရော့ဒ် မူလီများ (Connecting Rod Bolts)',
        componentEn: 'Connecting Rod Bolts',
        category: 'bottom_end',
        nm: 35,
        ftlb: 25.8,
        kgfm: 3.6,
        criticalLevel: 'critical',
        stepsMy: [
          'အဆင့် ၁: 35 N·m ကြပ်ပါ။',
          'အဆင့် ၂: 90° ထပ်လှည့်ပါ။'
        ],
        stepsEn: [
          'Step 1: Torque to 35 N·m.',
          'Step 2: Turn 90°.'
        ]
      },
      {
        id: '2kd-crank-pulley',
        componentMy: 'ခရိုင်းရှပ် ပူလီ မူလီကြီး (Crankshaft Pulley Bolt)',
        componentEn: 'Crankshaft Pulley Bolt',
        category: 'bottom_end',
        nm: 235,
        ftlb: 173.3,
        kgfm: 24.0,
        criticalLevel: 'critical',
        stepsMy: ['235 N·m တိကျစွာ ကြပ်ပါ။'],
        stepsEn: ['Torque to 235 N·m (173.3 ft-lb).']
      },
      {
        id: '2kd-injectors',
        componentMy: 'ဒီဇယ် အင်ဂျက်တာ ညှပ်မူလီများ (Injector Clamp Bolts)',
        componentEn: 'Fuel Injector Clamp Bolts',
        category: 'fuel',
        nm: 26,
        ftlb: 19.2,
        kgfm: 2.7,
        criticalLevel: 'critical',
        stepsMy: ['ကြေးဝါရှာပြား အသစ်ဖြင့် 26 N·m ကြပ်ပါ။'],
        stepsEn: ['Install new copper seal washers and torque to 26 N·m.']
      }
    ]
  }
];

export const WORKSHOP_CHECKLIST_ITEMS = [
  {
    id: 'clean_threads',
    textMy: 'မူလီချည်ပေါက်များ (Bolt Holes) အတွင်း ရေနှင့် ဆီများ မကျန်အောင် လေမှုတ်သန့်စင်ထားခြင်း (Hydraulic lock မဖြစ်စေရန်)',
    textEn: 'Blow out and clean all cylinder block bolt blind holes to prevent hydraulic lock.'
  },
  {
    id: 'lube_threads',
    textMy: 'မူလီချည်များနှင့် ခေါင်းအောက်ခံဝါရှာမျက်နှာပြင်တွင် အင်ဂျင်ဝိုင်အသစ် အနည်းငယ် သုတ်လိမ်းထားခြင်း',
    textEn: 'Lightly coat bolt threads and underhead washer contact surfaces with fresh engine oil.'
  },
  {
    id: 'torque_wrench_calibrated',
    textMy: 'Torque Wrench ပေါင်ဂိတ် သေချာတိကျမှုရှိမရှိ စစ်ဆေးထားခြင်း',
    textEn: 'Verify torque wrench calibration and lock mechanism.'
  },
  {
    id: 'new_gaskets',
    textMy: 'Head Gasket နှင့် Injector Copper Washer များ မူရင်း OEM အသစ် လဲလှယ်ထားခြင်း',
    textEn: 'Ensure brand new OEM head gasket and copper injector seal washers are installed.'
  },
  {
    id: 'angle_marks',
    textMy: 'Angle-Torque (90° လှည့်ရမည့် မူလီများ) ကို ဆေးမှတ်ဖြင့် အမှတ်အသား သေချာပြုလုပ်ထားခြင်း',
    textEn: 'Paint reference angle indicator marks on bolt heads for 90° angle torque stages.'
  },
  {
    id: 'two_revolutions',
    textMy: 'တိုင်မင်တပ်ဆင်ပြီးပါက Crankshaft ကို လက်ဖြင့် လက်ယာရစ် (၂) ပတ် အပြည့် လှည့်၍ Valve နှင့် Piston ထိခိုက်မှု မရှိကြောင်း စစ်ဆေးပြီးခြင်း',
    textEn: 'Hand-rotate crankshaft clockwise 2 full revolutions to verify free rotation and TDC mark alignment.'
  }
];
