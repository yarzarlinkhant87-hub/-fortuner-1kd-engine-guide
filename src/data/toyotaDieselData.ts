// Auto-restored data file
export const SERIES_CATEGORIES = [
  {
    "id": "ALL",
    "name": "All Series (အားလုံး)",
    "desc": "၁၆ မျိုးကျော် Toyota ဒီဇယ်အင်ဂျင်များ"
  },
  {
    "id": "KD",
    "name": "KD Series (D-4D)",
    "desc": "1KD (3.0L), 2KD (2.5L) - Fortuner, Vigo, KDH"
  },
  {
    "id": "GD",
    "name": "GD Series (Clean Diesel)",
    "desc": "1GD (2.8L), 2GD (2.4L) - Revo, New Fortuner"
  },
  {
    "id": "L",
    "name": "L & KZ Series",
    "desc": "5L (3.0L), 3L (2.8L), 1KZ-TE (3.0L Turbo)"
  },
  {
    "id": "HZ_HD",
    "name": "HZ & HD Series (6-Cyl)",
    "desc": "1HZ (4.2L), 1HD-FTE (4.2L 24V) - Land Cruiser"
  },
  {
    "id": "VD",
    "name": "VD Series (V8 Diesel)",
    "desc": "1VD-FTV (4.5L V8 Twin-Turbo) - LC200, LC70"
  },
  {
    "id": "F33A",
    "name": "F33A Series (New V6)",
    "desc": "F33A-FTV (3.3L V6 Twin-Turbo) - LC300"
  },
  {
    "id": "OTHER",
    "name": "Dyna & Van (N04C / 14B / C-Series)",
    "desc": "N04C (4.0L Common Rail), 14B/15B (Dyna), 3C-TE/2C"
  }
];

export const TOYOTA_DIESEL_ENGINES = [
  {
    "id": "1kd-ftv",
    "code": "1KD-FTV",
    "series": "KD",
    "seriesTitle": "KD Series (Common Rail D-4D)",
    "seriesTitleMm": "KD စီးရီး (Common Rail D-4D)",
    "name": "3.0L D-4D Common Rail Turbo Intercooler",
    "nameMm": "၃.၀ လီတာ တာဘို အင်တာကူလာ ဒီဇယ်",
    "type": "Inline-4 DOHC 16-Valve Turbo Diesel Intercooler",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား တာဘိုဒီဇယ်",
    "fuelSystem": "Denso Common Rail Direct Injection (D-4D)",
    "fuelSystemMm": "Denso ကွန်မန်ရေးလ် စနစ် (D-4D)",
    "displacementCc": 2982,
    "boreStrokeMm": "96.0 mm × 103.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "17.9:1 (Early: 18.4:1)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "170 PS (125 kW) @ 3,400 RPM",
    "torqueOutput": "352 N·m (260 lb·ft) @ 1,800–3,400 RPM (Auto: 360 N·m)",
    "timingType": "Belt + Gear",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Belt) + ဂီယာ အတွဲလိုက်",
    "commonVehicles": [
      "Fortuner (2005-2015)",
      "Hilux Vigo (2004-2015)",
      "Prado 120/150",
      "HiAce KDH200"
    ],
    "commonVehiclesMm": "Fortuner (2005-2015), Hilux Vigo, Prado 120/150, HiAce Commuter",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.35 – 0.45 mm",
      "methodMm": "Shim စနစ် (ချိန်ညှိဖလားပြား လဲလှယ်ခြင်း)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 85,
        "kgfCm": 867,
        "lbfFt": 63,
        "notes": "Follow sequence center outward",
        "notesMm": "အလယ်မှ စတင်၍ ဘေးသို့ ခရုပတ်ပုံစံ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notes": "Paint mark then turn 90 degrees",
        "notesMm": "အမှတ်ခြစ်ပြီး ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notes": "Turn another 90 degrees (180° total)",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ (စုစုပေါင်း ၁၈၀°)"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "50 + 90°",
        "kgfCm": "510 + 90°",
        "lbfFt": "37 + 90°",
        "notesMm": "50 N·m အရင်ကျပ်ပြီး ထောင့် ၉၀° လှည့်ပါ"
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "35 + 90°",
        "kgfCm": "357 + 90°",
        "lbfFt": "26 + 90°",
        "notesMm": "35 N·m အရင်ကျပ်ပြီး ထောင့် ၉၀° လှည့်ပါ"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 365,
        "kgfCm": 3722,
        "lbfFt": 269,
        "notesMm": "ကျပ်အား ပြည့်အောင် သေချာကျပ်ရန် လိုသည်"
      },
      {
        "component": "Camshaft Bearing Caps",
        "componentMm": "ကမ်ရှပ်ကပ် ဘルトများ",
        "nm": 19,
        "kgfCm": 194,
        "lbfFt": 14,
        "notesMm": "ညီညာစွာ အဆင့်ဆင့်ကျပ်ပါ"
      },
      {
        "component": "Flywheel Bolts (Manual)",
        "componentMm": "ဖလိုင်းဝီးလ် ဘルトများ (မန်နျူရယ်)",
        "nm": 178,
        "kgfCm": 1815,
        "lbfFt": 131,
        "notesMm": "Thread locker ကော်ထည့်ကျပ်ပါ"
      },
      {
        "component": "Drive Plate Bolts (Auto)",
        "componentMm": "ဒရိုက်ပလိတ် ဘルトများ (အော်တို)",
        "nm": 130,
        "kgfCm": 1325,
        "lbfFt": 96,
        "notesMm": "အော်တိုဂီယာ ပန်းကန်ပြား ဘルト"
      },
      {
        "component": "Injector Clamp Bolts",
        "componentMm": "နော်ဇယ် ဖိဘルトများ",
        "nm": 22,
        "kgfCm": 224,
        "lbfFt": 16,
        "notesMm": "ဝါရှာအသစ်လဲပြီး ၂၂ N·m တိတိကျပ်ပါ"
      },
      {
        "component": "Injection Pipe Flare Nuts",
        "componentMm": "ကွန်မန်ရေးလ် ဆီပိုက်ခေါင်း နတ်များ",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 26,
        "notesMm": "ဆီမယိုစေရန် သင့်တင့်သော တော်ခ်ဖြင့်ကျပ်ပါ"
      },
      {
        "component": "Glow Plugs",
        "componentMm": "အပူပေး ပလပ်များ",
        "nm": 18,
        "kgfCm": 184,
        "lbfFt": 13,
        "notesMm": "ကြိုးမပြတ်စေရန် အားမလွန်ပါစေနှင့်"
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 38,
        "kgfCm": 387,
        "lbfFt": 28,
        "notesMm": "ကြေးဝါရှာ သို့မဟုတ် အလူမီနီယမ်ဝါရှာ ထည့်ပါ"
      },
      {
        "component": "Oil Filter Housing",
        "componentMm": "အင်ဂျင်ဝိုင် စစ်ဘူး",
        "nm": 18,
        "kgfCm": 184,
        "lbfFt": 13
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Tighten all 18 bolts evenly in 2-3 passes up to 85 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးစလုံးကို အလယ်မှစတင်၍ ၈၅ N·m ရောက်အောင် ညီညာစွာ အဆင့်ဆင့်ကျပ်ပါ",
        "torque": "85 N·m"
      },
      {
        "step": 2,
        "description": "Mark bolt heads with paint, turn each bolt exactly 90° clockwise",
        "descriptionMm": "ဘルトခေါင်းများတွင် ဆေးအမှတ်အသားခြစ်ပြီး တစ်လုံးချင်းစီကို နာရီလက်တံအတိုင်း ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise (total 180° rotation)",
        "descriptionMm": "ထိုအစီအစဉ်အတိုင်း နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ (စုစုပေါင်း ၁၈၀° လှည့်ပြီးဖြစ်ရမည်)",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear notch with oil pump housing timing dot (0° TDC).",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အထစ်ကို ဝိုင်ပန့်အိမ်ပေါ်ရှိ အစက် (0° TDC) နှင့် တည့်တည့်ချိန်ပါ။",
      "camshaft": "Align camshaft pulley timing line with cylinder head cover arrow mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်သားလိုင်းကို ခေါင်းကာဗာပေါ်ရှိ မြှားခေါင်းအမှတ်နှင့် တည့်အောင်ထားပါ။",
      "pump": "Align injection pump pulley mark with oil pump housing mark.",
      "pumpMm": "ဆီပန့်ပူးလီး အမှတ်သားကို ဝိုင်ပန့်အိမ်အမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "Belt တပ်ဆင်ပြီးနောက် Crankshaft ကို နာရီလက်တံအတိုင်း ၂ ပတ် အပြည့်လှည့်၍ အမှတ်များ ပြန်တိုက်စစ်ဆေးပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "30 – 35 MPa (300 – 350 bar)",
      "pressureMax": "160 – 180 MPa (1,600 – 1,800 bar)",
      "injectorResistance": "0.85 – 1.05 Ω (Solenoid) / High Impedance",
      "notesMm": "ဆီပိုက်ခေါင်းဖြုတ်ပြီး ပြန်တပ်လျှင် လေလွတ်စနစ် (Priming pump) ဖြင့် လက်ဖြင့်ဆီတင်းသည်အထိ ဖိပေးပါ။"
    },
    "fluids": {
      "oilWithFilter": "7.0 L (စစ်ဘူးပါ)",
      "oilWithoutFilter": "6.6 L (စစ်ဘူးမပါ)",
      "oilGrade": "5W-30 / 10W-30 (API CF-4 / ACEA B3/B4)",
      "coolantCapacity": "9.8 L (Toyota Super Long Life Coolant)",
      "fuelTankCapacity": "80 L"
    }
  },
  {
    "id": "2kd-ftv",
    "code": "2KD-FTV",
    "series": "KD",
    "seriesTitle": "KD Series (Common Rail D-4D)",
    "seriesTitleMm": "KD စီးရီး (Common Rail D-4D)",
    "name": "2.5L D-4D Common Rail Turbo",
    "nameMm": "၂.၅ လီတာ တာဘို ကွန်မန်ရေးလ် ဒီဇယ်",
    "type": "Inline-4 DOHC 16-Valve Turbo Diesel",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား တာဘိုဒီဇယ်",
    "fuelSystem": "Denso Common Rail Direct Injection (D-4D)",
    "fuelSystemMm": "Denso ကွန်မန်ရေးလ် စနစ် (D-4D)",
    "displacementCc": 2494,
    "boreStrokeMm": "92.0 mm × 93.8 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "18.5:1 (Early: 17.4:1)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "102 – 144 PS @ 3,400 RPM (Intercooled: 144 PS)",
    "torqueOutput": "260 – 343 N·m @ 1,600–2,800 RPM",
    "timingType": "Belt + Gear",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Belt) + ဂီယာ",
    "commonVehicles": [
      "Hilux Vigo 2.5",
      "HiAce KDH 200/222",
      "Innova 2.5",
      "Fortuner 2.5 (2009-2015)"
    ],
    "commonVehiclesMm": "Hilux Vigo 2.5, HiAce KDH200, Innova 2.5, Fortuner 2.5",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.35 – 0.45 mm",
      "methodMm": "Shim စနစ် (ချိန်ညှိဖလားပြား)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 85,
        "kgfCm": 867,
        "lbfFt": 63,
        "notesMm": "အလယ်မှ ဘေးသို့ စနစ်တကျ ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "50 + 90°",
        "kgfCm": "510 + 90°",
        "lbfFt": "37 + 90°"
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "35 + 90°",
        "kgfCm": "357 + 90°",
        "lbfFt": "26 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 365,
        "kgfCm": 3722,
        "lbfFt": 269
      },
      {
        "component": "Camshaft Bearing Caps",
        "componentMm": "ကမ်ရှပ်ကပ် ဘルトများ",
        "nm": 19,
        "kgfCm": 194,
        "lbfFt": 14
      },
      {
        "component": "Injector Clamp Bolts",
        "componentMm": "နော်ဇယ် ဖိဘルトများ",
        "nm": 22,
        "kgfCm": 224,
        "lbfFt": 16
      },
      {
        "component": "Injection Pipe Flare Nuts",
        "componentMm": "ဆီပိုက်ခေါင်း နတ်များ",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 26
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 38,
        "kgfCm": 387,
        "lbfFt": 28
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Tighten all 18 bolts evenly to 85 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၈၅ N·m ညီညာစွာကျပ်ပါ",
        "torque": "85 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "တစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft timing gear notch with mark on oil pump housing.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အထစ်နှင့် ဝိုင်ပန့်အိမ်အမှတ် တည့်အောင်ထားပါ။",
      "camshaft": "Camshaft gear mark aligned with cylinder head mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်သားလိုင်းကို ခေါင်းကာဗာ မြှားအမှတ်နှင့် ချိန်ပါ။",
      "pump": "Injection pump gear aligned with housing mark.",
      "pumpMm": "ဆီပန့်ပူးလီး အမှတ်နှင့် အိမ်အမှတ် ချိန်ညှိပါ။",
      "notesMm": "1KD နှင့် အခြေခံ တိုက်မင်တိုက်ပုံစံ တူညီပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "30 – 35 MPa (300 – 350 bar)",
      "pressureMax": "140 – 160 MPa (1,400 – 1,600 bar)",
      "injectorResistance": "0.85 – 1.05 Ω",
      "notesMm": "ဆီစားသက်သာပြီး ရေရှည်ခံသော စနစ်ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "6.9 L",
      "oilWithoutFilter": "6.5 L",
      "oilGrade": "5W-30 / 10W-30",
      "coolantCapacity": "9.4 L",
      "fuelTankCapacity": "76 L"
    }
  },
  {
    "id": "1gd-ftv",
    "code": "1GD-FTV",
    "series": "GD",
    "seriesTitle": "GD Series (ESTEC Clean Diesel)",
    "seriesTitleMm": "GD စီးရီး (ခေတ်သစ် ESTEC Clean Diesel)",
    "name": "2.8L D-4D Common Rail VN Turbo",
    "nameMm": "၂.၈ လီတာ D-4D VN တာဘို ဒီဇယ် (Revo/Fortuner အသစ်)",
    "type": "Inline-4 DOHC 16-Valve Variable Nozzle Turbocharger Intercooler",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား VN တာဘိုဒီဇယ်",
    "fuelSystem": "Common Rail Direct Injection (2,500 bar high pressure)",
    "fuelSystemMm": "ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (2,500 bar အထိ)",
    "displacementCc": 2755,
    "boreStrokeMm": "92.0 mm × 103.6 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "15.6:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "177 – 204 PS (150 kW) @ 3,400 RPM (GR Sport: 224 PS)",
    "torqueOutput": "450 – 500 N·m @ 1,600–2,800 RPM",
    "timingType": "Chain + Gear",
    "timingTypeMm": "တိုက်မင်ကြိုး (Timing Chain) + ဂီယာ",
    "commonVehicles": [
      "Hilux Revo / Rocco 2.8",
      "Fortuner (2015-present) 2.8",
      "Land Cruiser Prado 150/250",
      "GranAce / Majesty"
    ],
    "commonVehiclesMm": "Hilux Revo / Rocco 2.8, Fortuner New Model 2.8, Prado 150/250, Majesty",
    "valveClearance": {
      "intakeColdMm": "0.15 – 0.25 mm (Hydraulic auto lash adjuster in some variants)",
      "exhaustColdMm": "0.30 – 0.40 mm",
      "methodMm": "Hydraulic Lash Adjuster / Shimless Lifter"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 26,
        "notesMm": "အလယ်မှစ၍ အဆင့် ၁ ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ (စုစုပေါင်း ၁၈၀°)"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "50 + 90°",
        "kgfCm": "510 + 90°",
        "lbfFt": "37 + 90°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 280,
        "kgfCm": 2855,
        "lbfFt": 206,
        "notesMm": "၂၈၀ N·m တိတိကျပ်ရန်"
      },
      {
        "component": "Camshaft Sprocket Bolt",
        "componentMm": "ကမ်ရှပ် စပရော့ကတ် ဘルト",
        "nm": 100,
        "kgfCm": 1020,
        "lbfFt": 74
      },
      {
        "component": "Timing Chain Tensioner Bolts",
        "componentMm": "တိုက်မင်ချိန် တင်းကလစ် ဘルト",
        "nm": 10,
        "kgfCm": 102,
        "lbfFt": 7.4
      },
      {
        "component": "Injector Clamp Bolts",
        "componentMm": "နော်ဇယ် ဖိဘルトများ",
        "nm": 26,
        "kgfCm": 265,
        "lbfFt": 19.2,
        "notesMm": "Piezo/Solenoid clamp တော်ခ်"
      },
      {
        "component": "Injection Pipe Flare Nuts",
        "componentMm": "ဆီပိုက်ခေါင်း နတ်များ",
        "nm": 32,
        "kgfCm": 326,
        "lbfFt": 23.6
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 37,
        "kgfCm": 377,
        "lbfFt": 27.3
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Initial torque to 35 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルトများကို အလယ်မှစ၍ ၃၅ N·m စတင်ကျပ်ပါ",
        "torque": "35 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "နာရီလက်တံအတိုင်း ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align colored chain link with crankshaft sprocket mark (TDC 0°).",
      "crankshaftMm": "ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို တိုက်မင်ကြိုးပေါ်ရှိ အရောင်ပါသော ကွင်းဆက်နှင့် တည့်တည့်ချိန်ပါ။",
      "camshaft": "Align camshaft sprockets timing dots with matching colored chain links.",
      "camshaftMm": "ကမ်ရှပ် စပရော့ကတ် အစက်များကို ချိန်ကြိုးအရောင်ပါကွင်းများနှင့် ချိန်ပါ။",
      "pump": "High pressure pump drive gear aligned with idler gear marks.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ဂီယာကို အလယ်ဂီယာ အမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "Timing Chain စနစ်ဖြစ်သောကြောင့် Tensioner ဖိအားနှင့် အသံကို စစ်ဆေးရန် အရေးကြီးပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "35 – 45 MPa (350 – 450 bar)",
      "pressureMax": "220 – 250 MPa (2,200 – 2,500 bar)",
      "notesMm": "အလွန်မြင့်မားသော ဖိအားသုံးစနစ်ဖြစ်၍ အင်ဂျင်လည်နေစဉ် ဆီပိုက် လုံးဝမဖြုတ်ရပါ။"
    },
    "fluids": {
      "oilWithFilter": "7.5 L",
      "oilWithoutFilter": "7.0 L",
      "oilGrade": "0W-20 / 5W-30 (Toyota Genuine Low Ash DPF Oil / ACEA C2)",
      "coolantCapacity": "10.5 L",
      "fuelTankCapacity": "80 L"
    }
  },
  {
    "id": "2gd-ftv",
    "code": "2GD-FTV",
    "series": "GD",
    "seriesTitle": "GD Series (ESTEC Clean Diesel)",
    "seriesTitleMm": "GD စီးရီး (ခေတ်သစ် ESTEC Clean Diesel)",
    "name": "2.4L D-4D Common Rail VN Turbo",
    "nameMm": "၂.၄ လီတာ D-4D VN တာဘို ဒီဇယ် (Revo/Innova/Fortuner)",
    "type": "Inline-4 DOHC 16-Valve Variable Nozzle Turbocharger Intercooler",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား VN တာဘိုဒီဇယ်",
    "fuelSystem": "Common Rail Direct Injection (D-4D)",
    "fuelSystemMm": "ကွန်မန်ရေးလ် စနစ် (D-4D)",
    "displacementCc": 2393,
    "boreStrokeMm": "92.0 mm × 90.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "15.6:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "150 PS (110 kW) @ 3,400 RPM",
    "torqueOutput": "400 N·m @ 1,600–2,000 RPM",
    "timingType": "Chain + Gear",
    "timingTypeMm": "တိုက်မင်ကြိုး (Timing Chain) + ဂီယာ",
    "commonVehicles": [
      "Hilux Revo 2.4",
      "Fortuner 2.4 (2015-present)",
      "Innova Crysta 2.4"
    ],
    "commonVehiclesMm": "Hilux Revo 2.4, Fortuner 2.4, Innova Crysta 2.4",
    "valveClearance": {
      "intakeColdMm": "0.15 – 0.25 mm",
      "exhaustColdMm": "0.30 – 0.40 mm",
      "methodMm": "Hydraulic Lash Adjuster / Lifter"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 26
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "50 + 90°",
        "kgfCm": "510 + 90°",
        "lbfFt": "37 + 90°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 280,
        "kgfCm": 2855,
        "lbfFt": 206
      },
      {
        "component": "Injector Clamp Bolts",
        "componentMm": "နော်ဇယ် ဖိဘルトများ",
        "nm": 26,
        "kgfCm": 265,
        "lbfFt": 19.2
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 37,
        "kgfCm": 377,
        "lbfFt": 27.3
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Initial torque to 35 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルトများကို ၃၅ N·m ညီညာစွာကျပ်ပါ",
        "torque": "35 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn additional 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align colored chain link with crankshaft sprocket mark.",
      "crankshaftMm": "ခရိုင်းရှပ် အမှတ်နှင့် ကြိုးရောင်ကွင်း ချိန်ပါ။",
      "camshaft": "Align camshaft sprocket dots with chain colored marks.",
      "camshaftMm": "ကမ်ရှပ် စပရော့ကတ် အမှတ်များနှင့် ကြိုးအရောင်ကွင်းများ ချိန်ပါ။",
      "pump": "High pressure pump idler gear alignment.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် ချိန်ညှိပါ။",
      "notesMm": "1GD နှင့် တိုက်မင် တပ်ဆင်ပုံ ထပ်တူဖြစ်ပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "35 – 45 MPa (350 – 450 bar)",
      "pressureMax": "200 – 220 MPa (2,000 – 2,200 bar)",
      "notesMm": "ဆီသန့်စင်မှု အထူးဂရုစိုက်ရန် လိုအပ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "7.5 L",
      "oilWithoutFilter": "7.0 L",
      "oilGrade": "0W-20 / 5W-30 (ACEA C2 / DPF Low Ash)",
      "coolantCapacity": "10.2 L",
      "fuelTankCapacity": "80 L"
    }
  },
  {
    "id": "5l",
    "code": "5L / 5L-E",
    "series": "L",
    "seriesTitle": "L & KZ Series (Legendary Tough Diesels)",
    "seriesTitleMm": "L & KZ စီးရီး (အကြမ်းခံ ဒဏ္ဍာရီလာ ဒီဇယ်များ)",
    "name": "3.0L SOHC Non-Turbo Diesel",
    "nameMm": "၃.၀ လီတာ အကြမ်းခံ သာမန်ဒီဇယ် (Tiger / HiAce)",
    "type": "Inline-4 SOHC 8-Valve Naturally Aspirated Diesel",
    "typeMm": "၄ လုံးထိုး SOHC ၈ ဗား သာမန်ဒီဇယ်",
    "fuelSystem": "Bosch VE Distributor Type Mechanical Injection (5L-E: EFI Electronic Pump)",
    "fuelSystemMm": "Bosch VE ပန့်လိုင်း (5L-E တွင် EFI လျှပ်စစ်ပန့်)",
    "displacementCc": 2986,
    "boreStrokeMm": "99.5 mm × 96.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "22.2:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "91 – 105 PS @ 4,000 RPM",
    "torqueOutput": "192 – 200 N·m @ 2,400 RPM",
    "timingType": "Belt",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Timing Belt)",
    "commonVehicles": [
      "Hilux Tiger 3.0",
      "LN106 / LN167",
      "HiAce LH113 / LH172",
      "Prado 95 (5L-E)"
    ],
    "commonVehiclesMm": "Hilux Tiger 3.0, LN106/167, HiAce LH113/172, Prado 95",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.40 – 0.50 mm",
      "intakeHotMm": "0.25 – 0.35 mm",
      "exhaustHotMm": "0.45 – 0.55 mm",
      "methodMm": "Shim စနစ် (ဖလားပြား ချိန်ညှိခြင်း)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 39,
        "kgfCm": 400,
        "lbfFt": 29
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 103,
        "kgfCm": 1050,
        "lbfFt": 76
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "54 + 90°",
        "kgfCm": "550 + 90°",
        "lbfFt": "40 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 235,
        "kgfCm": 2400,
        "lbfFt": 173
      },
      {
        "component": "Camshaft Pulley Bolt",
        "componentMm": "ကမ်ရှပ်ပူးလီး ဘルト",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      },
      {
        "component": "Injection Pump Pulley Nut",
        "componentMm": "ဆီပန့်ပူးလီး နတ်",
        "nm": 64,
        "kgfCm": 650,
        "lbfFt": 47
      },
      {
        "component": "Glow Plugs",
        "componentMm": "အပူပေး ပလပ်များ",
        "nm": 13,
        "kgfCm": 130,
        "lbfFt": 9.4
      },
      {
        "component": "Nozzle Holder Body",
        "componentMm": "နော်ဇယ်အိမ် ကျပ်အား",
        "nm": 64,
        "kgfCm": 650,
        "lbfFt": 47
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "ဝိုင်ဖောက်ပေါက်နတ်",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 25.8
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 head bolts to 39 N·m in spiral sequence from center",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၃၉ N·m ကျပ်ပါ",
        "torque": "39 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt another 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Crankshaft pulley notch aligned with 0 timing mark on timing cover.",
      "crankshaftMm": "ခရိုင်းပူးလီး အထစ်ကို တိုက်မင်ကာဗာပေါ်ရှိ 0 အမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Camshaft pulley mark aligned with cylinder head timing mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ခေါင်းကာဗာ မြှားအမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Injection pump pulley notch aligned with mark on pump bracket.",
      "pumpMm": "ဆီပန့်ပူးလီး အထစ်ကို ပန့်ဒေါက်ခုံအမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "Belt တပ်ပြီး Tensioner စပရင်ကို လွှတ်၍ မူလီပြန်ကျပ်ပါ။ ခရိုင်း ၂ ပတ်လှည့်စစ်ဆေးပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Injection Opening Pressure: 147 – 157 bar (15 – 16 MPa)",
      "pressureMax": "Mechanical Pump System",
      "notesMm": "နော်ဇယ်စစ်ဆေးရာတွင် 150 bar ဝန်းကျင် ပန်းထွက်မှု စစ်ဆေးပါ။"
    },
    "fluids": {
      "oilWithFilter": "6.0 L",
      "oilWithoutFilter": "5.3 L",
      "oilGrade": "10W-30 / 15W-40 (API CF / CF-4)",
      "coolantCapacity": "9.0 L",
      "fuelTankCapacity": "66 L"
    }
  },
  {
    "id": "1kz-te",
    "code": "1KZ-TE",
    "series": "KZ",
    "seriesTitle": "L & KZ Series (Legendary Tough Diesels)",
    "seriesTitleMm": "L & KZ စီးရီး (အကြမ်းခံ ဒဏ္ဍာရီလာ ဒီဇယ်များ)",
    "name": "3.0L SOHC Turbo Diesel EFI",
    "nameMm": "၃.၀ လီတာ တာဘိုဒီဇယ် (Prado 78/90/95 / Surf)",
    "type": "Inline-4 SOHC 8-Valve Turbo Diesel Intercooler",
    "typeMm": "၄ လုံးထိုး SOHC ၈ ဗား တာဘိုဒီဇယ်",
    "fuelSystem": "Electronically Controlled Distributor Type (Denso EFI)",
    "fuelSystemMm": "Denso EFI လျှပ်စစ်ထိန်းချုပ် ပန့်လိုင်းစနစ်",
    "displacementCc": 2982,
    "boreStrokeMm": "96.0 mm × 103.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "21.2:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "130 – 145 PS @ 3,600 RPM",
    "torqueOutput": "287 – 343 N·m @ 2,000 RPM",
    "timingType": "Belt + Gear",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Belt) + ဂီယာ",
    "commonVehicles": [
      "Land Cruiser Prado 78 / 90 / 95",
      "Hilux Surf KZN130 / KZN185",
      "HiAce Grandia",
      "Granvia"
    ],
    "commonVehiclesMm": "Land Cruiser Prado 78/90/95, Hilux Surf 130/185, Granvia",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.25 – 0.35 mm",
      "methodMm": "Shim စနစ် (ချိန်ညှိဖလားပြား)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 39,
        "kgfCm": 400,
        "lbfFt": 29
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "103 + 90°",
        "kgfCm": "1050 + 90°",
        "lbfFt": "76 + 90°"
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "54 + 90°",
        "kgfCm": "550 + 90°",
        "lbfFt": "40 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 275,
        "kgfCm": 2800,
        "lbfFt": 203
      },
      {
        "component": "Camshaft Pulley Bolt",
        "componentMm": "ကမ်ရှပ်ပူးလီး ဘルト",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      },
      {
        "component": "Injector Nozzle Holder",
        "componentMm": "နော်ဇယ်အိမ် ကျပ်အား",
        "nm": 64,
        "kgfCm": 650,
        "lbfFt": 47
      },
      {
        "component": "Glow Plugs",
        "componentMm": "အပူပေး ပလပ်များ",
        "nm": 13,
        "kgfCm": 130,
        "lbfFt": 9.4
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 38,
        "kgfCm": 387,
        "lbfFt": 28
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 bolts to 39 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို ၃၉ N·m စတင်ကျပ်ပါ",
        "torque": "39 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Crankshaft gear timing mark aligned with oil pump mark.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်နှင့် ဝိုင်ပန့်အိမ်အမှတ် တည့်အောင်ထားပါ။",
      "camshaft": "Camshaft pulley mark aligned with cylinder head cover mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ကာဗာအမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Injection pump gear timing mark aligned.",
      "pumpMm": "ဆီပန့်ဂီယာ အမှတ်သား တည့်အောင်ချိန်ညှိပါ။",
      "notesMm": "Scissor gear စနစ်ပါရှိသဖြင့် ဂီယာဖြုတ်တပ်ရာတွင် Service bolt အသုံးပြုရန် မမေ့ပါနှင့်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Injection Opening: 147 – 157 bar",
      "pressureMax": "EFI Spill Valve controlled",
      "notesMm": "Spill Control Valve (SPV) အခြေအနေနှင့် ဆီဖိအား ပုံမှန်ရှိမရှိ စစ်ဆေးပါ။"
    },
    "fluids": {
      "oilWithFilter": "7.0 L",
      "oilWithoutFilter": "6.3 L",
      "oilGrade": "10W-30 / 15W-40 (API CF-4 / CH-4)",
      "coolantCapacity": "10.0 L",
      "fuelTankCapacity": "90 L (Prado)"
    }
  },
  {
    "id": "3l",
    "code": "3L / 2L-TE",
    "series": "L",
    "seriesTitle": "L & KZ Series (Legendary Tough Diesels)",
    "seriesTitleMm": "L & KZ စီးရီး (အကြမ်းခံ ဒဏ္ဍာရီလာ ဒီဇယ်များ)",
    "name": "2.8L (3L) / 2.4L Turbo (2L-TE)",
    "nameMm": "၂.၈ လီတာ (3L) / ၂.၄ လီတာ တာဘို (2L-TE)",
    "type": "Inline-4 SOHC 8-Valve Diesel",
    "typeMm": "၄ လုံးထိုး SOHC ၈ ဗား ဒီဇယ်",
    "fuelSystem": "Mechanical Distributor Pump (2L-TE: Electronic EFI)",
    "fuelSystemMm": "မက္ကင်းနစ် ပန့်လိုင်း (2L-TE တွင် EFI လျှပ်စစ်ပန့်)",
    "displacementCc": 2779,
    "boreStrokeMm": "96.0 mm × 96.0 mm (3L) / 92.0 mm × 92.0 mm (2L)",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "22.2:1 (2L-TE: 21.0:1)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "91 PS (3L) / 97 PS (2L-TE)",
    "torqueOutput": "188 N·m (3L) / 221 N·m (2L-TE)",
    "timingType": "Belt",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Timing Belt)",
    "commonVehicles": [
      "Hilux LN106 / LN107",
      "HiAce Commuter LH113",
      "Surf LN130",
      "Land Cruiser LJ70"
    ],
    "commonVehiclesMm": "Hilux LN106/107, HiAce LH113, Surf LN130",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.40 – 0.50 mm",
      "methodMm": "Shim စနစ် (ဖလားပြား)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 39,
        "kgfCm": 400,
        "lbfFt": 29
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 103,
        "kgfCm": 1050,
        "lbfFt": 76
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "54 + 90°",
        "kgfCm": "550 + 90°",
        "lbfFt": "40 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 235,
        "kgfCm": 2400,
        "lbfFt": 173
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "ဝိုင်ဖောက်ပေါက်နတ်",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 25.8
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque to 39 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို ၃၉ N·m စတင်ကျပ်ပါ",
        "torque": "39 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align pulley notch with 0 on cover.",
      "crankshaftMm": "ခရိုင်းပူးလီး အထစ်ကို 0 အမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Align cam pulley mark with head mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ခေါင်းကာဗာအမှတ်နှင့် ချိန်ပါ။",
      "pump": "Align pump pulley notch with bracket line.",
      "pumpMm": "ဆီပန့်ပူးလီး အမှတ်ကို ပန့်ဒေါက်ခုံအမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "Belt တင်းအား ချိန်ညှိရာတွင် စပရင်အားအတိုင်း သေချာညှိပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Opening: 147 – 157 bar",
      "pressureMax": "Mechanical Pump",
      "notesMm": "ဆီကျွေးအား မီးတိုင်မင် ချိန်ညှိမှု သေချာပြုလုပ်ပါ။"
    },
    "fluids": {
      "oilWithFilter": "5.8 L",
      "oilWithoutFilter": "5.0 L",
      "oilGrade": "15W-40 / 10W-30 (API CF-4)",
      "coolantCapacity": "8.8 L",
      "fuelTankCapacity": "65 L"
    }
  },
  {
    "id": "1hz",
    "code": "1HZ",
    "series": "HZ_HD",
    "seriesTitle": "HZ, HD & VD Series (Land Cruiser Heavy Duty)",
    "seriesTitleMm": "HZ, HD & VD စီးရီး (Land Cruiser ၆ လုံးထိုး & V8 အကြမ်းစားများ)",
    "name": "4.2L Inline-6 SOHC 12-Valve Diesel",
    "nameMm": "၄.၂ လီတာ ၆ လုံးထိုး သာမန်ဒီဇယ် (Land Cruiser 70/80/105)",
    "type": "Inline-6 SOHC 12-Valve Naturally Aspirated Diesel",
    "typeMm": "၆ လုံးထိုး SOHC ၁၂ ဗား သာမန်ဒီဇယ် (အကြမ်းဆုံးအင်ဂျင်)",
    "fuelSystem": "Mechanical In-line/Distributor Injection Pump (Bosch VE)",
    "fuelSystemMm": "Bosch VE မက္ကင်းနစ် ပန့်လိုင်းစနစ်",
    "displacementCc": 4164,
    "boreStrokeMm": "94.0 mm × 100.0 mm",
    "cylinders": 6,
    "valvesPerCyl": 2,
    "compressionRatio": "22.7:1",
    "firingOrder": "1 - 5 - 3 - 6 - 2 - 4",
    "powerOutput": "131 PS (96 kW) @ 3,800 RPM",
    "torqueOutput": "285 N·m (210 lb·ft) @ 2,200 RPM",
    "timingType": "Belt + Gear",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Belt) + ဂီယာ",
    "commonVehicles": [
      "Land Cruiser 70 Series (HZJ71/76/78/79)",
      "Land Cruiser 80 (HZJ80)",
      "Land Cruiser 105 (HZJ105)",
      "Toyota Coaster HZB50"
    ],
    "commonVehiclesMm": "Land Cruiser 70/80/105, Toyota Coaster Bus",
    "valveClearance": {
      "intakeColdMm": "0.15 – 0.25 mm",
      "exhaustColdMm": "0.35 – 0.45 mm",
      "intakeHotMm": "0.20 – 0.30 mm",
      "exhaustHotMm": "0.40 – 0.50 mm",
      "methodMm": "Shim စနစ် (ချိန်ညှိဖလားပြား)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 69,
        "kgfCm": 700,
        "lbfFt": 51,
        "notesMm": "အလယ်မှစ၍ အဆင့် ၁ ၆၉ N·m ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 103,
        "kgfCm": 1050,
        "lbfFt": 76
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "37 + 90°",
        "kgfCm": "380 + 90°",
        "lbfFt": "27 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 490,
        "kgfCm": 5000,
        "lbfFt": 362,
        "notesMm": "အလွန်မြင့်သော တော်ခ် ၄၉၀ N·m လိုအပ်သည်"
      },
      {
        "component": "Camshaft Pulley Bolt",
        "componentMm": "ကမ်ရှပ်ပူးလီး ဘルト",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      },
      {
        "component": "Injection Pump Drive Gear Nut",
        "componentMm": "ဆီပန့်ဂီယာ နတ်",
        "nm": 103,
        "kgfCm": 1050,
        "lbfFt": 76
      },
      {
        "component": "Glow Plugs",
        "componentMm": "အပူပေး ပလပ်များ",
        "nm": 18,
        "kgfCm": 184,
        "lbfFt": 13
      },
      {
        "component": "Injector Nozzle Holder",
        "componentMm": "နော်ဇယ်အိမ် ကျပ်အား",
        "nm": 64,
        "kgfCm": 650,
        "lbfFt": 47
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 38,
        "kgfCm": 387,
        "lbfFt": 28
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 26 head bolts to 69 N·m from center outward",
        "descriptionMm": "ခေါင်းဘルト ၂၆ လုံးကို အလယ်မှစ၍ ၆၉ N·m အညီအမျှကျပ်ပါ",
        "torque": "69 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "တစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 26,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear notch with 0 on oil pump body.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ဝိုင်ပန့်အိမ် 0 အမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Align camshaft gear mark with cylinder head cover arrow.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ခေါင်းကာဗာ မြှားအမှတ်နှင့် တည့်အောင်ထားပါ။",
      "pump": "Injection pump gear marks aligned with idler gear.",
      "pumpMm": "ဆီပန့်ဂီယာ အမှတ်ကို အလယ်ဂီယာ အမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "၆ လုံးထိုး အင်ဂျင်ဖြစ်၍ Firing Order (1-5-3-6-2-4) အတိုင်း အဆို့ကွာဟချက် ချိန်ညှိပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Opening: 147 – 157 bar (15 – 16 MPa)",
      "pressureMax": "Mechanical Pump",
      "notesMm": "ဒီဇယ်အညံ့ဆုံးအဆင့်ကိုပင် ခံနိုင်ရည်ရှိသော အကြမ်းဆုံး စနစ်ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "9.3 L",
      "oilWithoutFilter": "8.3 L",
      "oilGrade": "15W-40 / 10W-30 (API CF-4 / CH-4)",
      "coolantCapacity": "11.9 L",
      "fuelTankCapacity": "90 L + 45 L (Dual Tank: 135 L)"
    }
  },
  {
    "id": "1hd-fte",
    "code": "1HD-FTE / 1HD-T",
    "series": "HZ_HD",
    "seriesTitle": "HZ, HD & VD Series (Land Cruiser Heavy Duty)",
    "seriesTitleMm": "HZ, HD & VD စီးရီး (Land Cruiser ၆ လုံးထိုး & V8 အကြမ်းစားများ)",
    "name": "4.2L Inline-6 24-Valve Turbo EFI (1HD-FTE)",
    "nameMm": "၄.၂ လီတာ ၆ လုံးထိုး ၂၄ ဗား တာဘိုဒီဇယ် (Land Cruiser 100)",
    "type": "Inline-6 SOHC 24-Valve Turbocharged Direct Injection Intercooler",
    "typeMm": "၆ လုံးထိုး SOHC ၂၄ ဗား တာဘို Direct Injection",
    "fuelSystem": "Denso ECD-V4 Electronic Controlled Injection Pump",
    "fuelSystemMm": "Denso ECD လျှပ်စစ်ထိန်းချုပ် တိုက်ရိုက်ပန်းစနစ်",
    "displacementCc": 4164,
    "boreStrokeMm": "94.0 mm × 100.0 mm",
    "cylinders": 6,
    "valvesPerCyl": 4,
    "compressionRatio": "18.8:1 (1HD-T: 18.6:1)",
    "firingOrder": "1 - 5 - 3 - 6 - 2 - 4",
    "powerOutput": "204 PS (150 kW) @ 3,400 RPM",
    "torqueOutput": "430 N·m (317 lb·ft) @ 1,400–3,200 RPM",
    "timingType": "Belt + Gear",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Belt) + ဂီယာ",
    "commonVehicles": [
      "Land Cruiser 100 (HDJ100)",
      "Land Cruiser 70 (HDJ78/79)",
      "Toyota Coaster Turbo"
    ],
    "commonVehiclesMm": "Land Cruiser 100, Land Cruiser 70 Turbo, Coaster",
    "valveClearance": {
      "intakeColdMm": "0.17 – 0.23 mm",
      "exhaustColdMm": "0.47 – 0.53 mm",
      "methodMm": "Bridge Adjuster & Screw (ဝက်အူနှင့် လော့နတ် စနစ်)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 69,
        "kgfCm": 700,
        "lbfFt": 51
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 103,
        "kgfCm": 1050,
        "lbfFt": 76
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "37 + 90°",
        "kgfCm": "380 + 90°",
        "lbfFt": "27 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 490,
        "kgfCm": 5000,
        "lbfFt": 362
      },
      {
        "component": "Injector Clamp Bolt",
        "componentMm": "နော်ဇယ် ဖိဘルト",
        "nm": 25,
        "kgfCm": 255,
        "lbfFt": 18.5
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 38,
        "kgfCm": 387,
        "lbfFt": 28
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 26 bolts to 69 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルト ၂၆ လုံးကို ၆၉ N·m ကျပ်ပါ",
        "torque": "69 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn another 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 26,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear notch with 0 on oil pump.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ဝိုင်ပန့်အိမ် 0 အမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Cam gear mark aligned with timing cover mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ကာဗာအမှတ်နှင့် ချိန်ပါ။",
      "pump": "Electronic spill pump timing notch aligned.",
      "pumpMm": "ဆီပန့်ဂီယာ အမှတ်သား တည့်အောင်ချိန်ညှိပါ။",
      "notesMm": "24-Valve စနစ်ဖြစ်၍ Valve Bridge ညှိရာတွင် သေချာဂရုစိုက်ပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "2-Stage Injection: 1st 180 bar / 2nd 240 bar",
      "pressureMax": "ECD-V4 System",
      "notesMm": "အဆင့် ၂ ဆင့် ပန်းထုတ်သော နော်ဇယ်စနစ် ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "10.0 L",
      "oilWithoutFilter": "9.0 L",
      "oilGrade": "10W-30 / 15W-40 (API CF-4 / CI-4)",
      "coolantCapacity": "12.0 L",
      "fuelTankCapacity": "96 L + 45 L (141 L)"
    }
  },
  {
    "id": "1vd-ftv",
    "code": "1VD-FTV",
    "series": "VD",
    "seriesTitle": "HZ, HD & VD Series (Land Cruiser Heavy Duty)",
    "seriesTitleMm": "HZ, HD & VD စီးရီး (Land Cruiser ၆ လုံးထိုး & V8 အကြမ်းစားများ)",
    "name": "4.5L V8 32-Valve D-4D Twin-Turbo",
    "nameMm": "၄.၅ လီတာ V8 ၃၂ ဗား တွင်းတာဘို ဒီဇယ် (Land Cruiser 200 / LC70 V8)",
    "type": "V8 32-Valve DOHC Twin-Turbo / Single Turbo Diesel Intercooler",
    "typeMm": "V8 ၃၂ ဗား DOHC တွင်းတာဘို ဒီဇယ် (LC200)",
    "fuelSystem": "Denso Common Rail Direct Injection (D-4D)",
    "fuelSystemMm": "Denso ကွန်မန်ရေးလ် စနစ် (D-4D)",
    "displacementCc": 4461,
    "boreStrokeMm": "86.0 mm × 96.0 mm",
    "cylinders": 8,
    "valvesPerCyl": 4,
    "compressionRatio": "16.8:1",
    "firingOrder": "1 - 2 - 7 - 3 - 4 - 5 - 6 - 8",
    "powerOutput": "268 – 286 PS (195 kW) @ 3,600 RPM (Single Turbo: 205 PS)",
    "torqueOutput": "650 N·m (479 lb·ft) @ 1,600–2,600 RPM",
    "timingType": "Chain + Gear",
    "timingTypeMm": "တိုက်မင်ကြိုး (Timing Chain) ၂ ချောင်း + ဂီယာ",
    "commonVehicles": [
      "Land Cruiser 200 (VDJ200)",
      "Land Cruiser 70 V8 (VDJ76/78/79)",
      "Lexus LX450d"
    ],
    "commonVehiclesMm": "Land Cruiser 200 (LC200 V8), Land Cruiser 70 V8, Lexus LX450d",
    "valveClearance": {
      "intakeColdMm": "0.15 – 0.25 mm",
      "exhaustColdMm": "0.35 – 0.45 mm",
      "methodMm": "Shimless Tappet (ဖလားခွက် အလိုက် အထူရွေးလဲလှယ်ခြင်း)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 40,
        "kgfCm": 408,
        "lbfFt": 29.5
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "60 + 90°",
        "kgfCm": "612 + 90°",
        "lbfFt": "44 + 90°"
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "30 + 90°",
        "kgfCm": "306 + 90°",
        "lbfFt": "22 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 450,
        "kgfCm": 4590,
        "lbfFt": 332
      },
      {
        "component": "Camshaft Sprocket Bolt",
        "componentMm": "ကမ်ရှပ် စပရော့ကတ် ဘルト",
        "nm": 100,
        "kgfCm": 1020,
        "lbfFt": 74
      },
      {
        "component": "Injector Clamp Bolt",
        "componentMm": "နော်ဇယ် ဖိဘルト",
        "nm": 26,
        "kgfCm": 265,
        "lbfFt": 19.2
      },
      {
        "component": "Common Rail Flare Nuts",
        "componentMm": "ကွန်မန်ရေးလ် ပိုက်နတ်များ",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 25.8
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 40,
        "kgfCm": 408,
        "lbfFt": 29.5
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 10 main head bolts per bank to 40 N·m in sequence",
        "descriptionMm": "ဆလင်ဒါဘဏ်တစ်ခုစီရှိ ခေါင်းဘルト ၁၀ လုံးကို အလယ်မှစ၍ ၄၀ N·m ကျပ်ပါ",
        "torque": "40 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt an additional 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 20,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear with oil pump housing notch.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို ဝိုင်ပန့်အိမ် အထစ်နှင့် ချိန်ပါ။",
      "camshaft": "Bank 1 and Bank 2 cam sprockets aligned with matching chain link colors.",
      "camshaftMm": "ဘယ်/ညာ ကမ်ရှပ် စပရော့ကတ်များကို သတ်မှတ်ထားသော တိုက်မင်ကြိုး အရောင်ကွင်းများနှင့် တိုက်ဆိုင်ပါ။",
      "pump": "High pressure pump drive gear timing marks aligned.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ်များ တည့်အောင်ချိန်ပါ။",
      "notesMm": "V8 အင်ဂျင်ဖြစ်၍ Bank 1 (ညာဘက်) နှင့် Bank 2 (ဘယ်ဘက်) တိုက်မင်ကြိုး ၂ ချောင်း သီးသန့် ချိန်ညှိရပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "30 – 35 MPa (300 – 350 bar)",
      "pressureMax": "160 – 180 MPa (1,600 – 1,800 bar)",
      "notesMm": "ဆီလိုင်းတွင် လေခိုပါက နိုးရခက်တတ်သဖြင့် စနစ်တကျ လေလွတ်ပေးပါ။"
    },
    "fluids": {
      "oilWithFilter": "9.2 L (Single Turbo: 9.0 L)",
      "oilWithoutFilter": "8.4 L",
      "oilGrade": "5W-30 / 10W-30 (API CF-4 / DL-1)",
      "coolantCapacity": "15.5 L",
      "fuelTankCapacity": "93 L + 45 L (138 L)"
    }
  },
  {
    "id": "f33a-ftv",
    "code": "F33A-FTV",
    "series": "F33A",
    "seriesTitle": "F33A Series (New Generation V6 Clean Diesel)",
    "seriesTitleMm": "F33A စီးရီး (ခေတ်သစ် V6 Clean Diesel - LC300)",
    "name": "3.3L V6 24-Valve D-4D Twin-Turbo",
    "nameMm": "၃.၃ လီတာ V6 ၂၄ ဗား တွင်းတာဘို ဒီဇယ် (Land Cruiser 300)",
    "type": "V6 24-Valve DOHC Twin-Turbo Clean Diesel Intercooler",
    "typeMm": "V6 ၂၄ ဗား DOHC တွင်းတာဘို Clean Diesel (LC300 / LX500d)",
    "fuelSystem": "Common Rail Direct Injection (2,500+ bar piezo/solenoid system)",
    "fuelSystemMm": "အလွန်မြင့်မားသော ကွန်မန်ရေးလ် စနစ် (2,500+ bar)",
    "displacementCc": 3346,
    "boreStrokeMm": "86.0 mm × 96.0 mm",
    "cylinders": 6,
    "valvesPerCyl": 4,
    "compressionRatio": "15.4:1",
    "firingOrder": "1 - 2 - 3 - 4 - 5 - 6",
    "powerOutput": "309 PS (227 kW) @ 4,000 RPM",
    "torqueOutput": "700 N·m (516 lb·ft) @ 1,600–2,600 RPM",
    "timingType": "Chain",
    "timingTypeMm": "တိုက်မင်ကြိုး (Timing Chain) စနစ်",
    "commonVehicles": [
      "Land Cruiser 300 (FJA300)",
      "Lexus LX500d"
    ],
    "commonVehiclesMm": "Land Cruiser 300, Lexus LX500d",
    "valveClearance": {
      "intakeColdMm": "0.15 – 0.25 mm (Hydraulic auto lash)",
      "exhaustColdMm": "0.30 – 0.40 mm",
      "methodMm": "Hydraulic Lash Adjusters (အလိုအလျောက် ချိန်ညှိ)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 45,
        "kgfCm": 459,
        "lbfFt": 33.2
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "55 + 90°",
        "kgfCm": "561 + 90°",
        "lbfFt": "40.5 + 90°"
      },
      {
        "component": "Connecting Rod Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "28 + 90°",
        "kgfCm": "285 + 90°",
        "lbfFt": "20.6 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 320,
        "kgfCm": 3260,
        "lbfFt": 236
      },
      {
        "component": "Injector Clamp Bolt",
        "componentMm": "နော်ဇယ် ဖိဘルト",
        "nm": 28,
        "kgfCm": 285,
        "lbfFt": 20.6
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 40,
        "kgfCm": 408,
        "lbfFt": 29.5
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all head bolts to 45 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルトများကို ၄၅ N·m စတင်ကျပ်ပါ",
        "torque": "45 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn additional 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 16,
    "timingMarksGuide": {
      "crankshaft": "Crank sprocket mark aligned with engine block arrow.",
      "crankshaftMm": "ခရိုင်းရှပ် အမှတ်ကို ဘလောက်တုံး မြှားအမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Both bank camshaft sprockets match yellow/gold chain links.",
      "camshaftMm": "ဘဏ်နှစ်ဖက်စလုံး၏ ကမ်ရှပ်စပရော့ကတ်များကို အဝါရောင်/ရွှေရောင် ချိန်ကြိုးကွင်းများနှင့် တိုက်ဆိုင်ပါ။",
      "pump": "High pressure fuel pump chain synchronization.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။",
      "notesMm": "ကွန်ပျူတာထိန်းချုပ် V6 Twin-Turbo အသစ်ဖြစ်၍ အလွန်သန့်ရှင်းသော လုပ်ငန်းခွင်လိုအပ်ပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "35 – 45 MPa",
      "pressureMax": "250 MPa (2,500 bar)",
      "notesMm": "AdBlue (DEF) နှင့် DPF စနစ် အပြည့်အစုံ ပါဝင်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "7.5 L",
      "oilWithoutFilter": "7.0 L",
      "oilGrade": "0W-20 (Toyota Genuine Motor Oil C5 / ACEA C2/C5)",
      "coolantCapacity": "11.8 L",
      "fuelTankCapacity": "80 L + 30 L (110 L)"
    }
  },
  {
    "id": "14b",
    "code": "14B / 15B-FTE",
    "series": "OTHER",
    "seriesTitle": "B Series & C Series (Commercial Dyna & Classic)",
    "seriesTitleMm": "B & C စီးရီး (Dyna ထရပ်ကား & ခေတ်ဟောင်း မီနီဗင်များ)",
    "name": "3.7L (14B) / 4.1L Turbo (15B-FTE)",
    "nameMm": "၃.၇ လီတာ (14B) / ၄.၁ လီတာ တာဘို (15B-FTE) ထရပ်ကားသုံး",
    "type": "Inline-4 OHV 8V / 16V Direct Injection Diesel",
    "typeMm": "၄ လုံးထိုး OHV တိုက်ရိုက်ပန်း ဒီဇယ် (Dyna Truck)",
    "fuelSystem": "Direct Injection In-line Pump / 15B-FTE: Electronic ECD Pump",
    "fuelSystemMm": "တိုက်ရိုက်ပန်း ပန့်လိုင်း (15B-FTE တွင် ECD လျှပ်စစ်ပန့်)",
    "displacementCc": 3661,
    "boreStrokeMm": "102.0 mm × 112.0 mm (14B) / 108.0 mm × 112.0 mm (15B)",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "18.0:1 (15B-FTE: 17.8:1)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "98 – 115 PS (14B) / 155 PS (15B-FTE)",
    "torqueOutput": "235 N·m (14B) / 380 N·m (15B-FTE)",
    "timingType": "Gear",
    "timingTypeMm": "ဂီယာအပြည့် (All Gear Drive - ခါးပတ်/ချိန် မပါ)",
    "commonVehicles": [
      "Toyota Dyna Truck",
      "ToyoAce",
      "Coaster Bus",
      "Mega Cruiser",
      "Land Cruiser BJ70"
    ],
    "commonVehiclesMm": "Toyota Dyna Truck, ToyoAce, Coaster Mini Bus",
    "valveClearance": {
      "intakeColdMm": "0.20 mm",
      "exhaustColdMm": "0.36 mm",
      "intakeHotMm": "0.20 mm",
      "exhaustHotMm": "0.36 mm",
      "methodMm": "Screw and Locknut (ဝက်အူနှင့် လော့နတ် စနစ်)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 49,
        "kgfCm": 500,
        "lbfFt": 36
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 137,
        "kgfCm": 1400,
        "lbfFt": 101
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "49 + 90°",
        "kgfCm": "500 + 90°",
        "lbfFt": "36 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 360,
        "kgfCm": 3670,
        "lbfFt": 265
      },
      {
        "component": "Rocker Arm Shaft Bolts",
        "componentMm": "ရော့ကာရှပ် ဘルトများ",
        "nm": 25,
        "kgfCm": 255,
        "lbfFt": 18.5
      },
      {
        "component": "Injector Nozzle Holder",
        "componentMm": "နော်ဇယ်အိမ် ကျပ်အား",
        "nm": 74,
        "kgfCm": 750,
        "lbfFt": 54.5
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 49,
        "kgfCm": 500,
        "lbfFt": 36
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 head bolts to 49 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို ၄၉ N·m အရင်ကျပ်ပါ",
        "torque": "49 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align timing gear marks 1-1, 2-2, 3-3.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာနှင့် အလယ်ဂီယာ အမှတ် ၁-၁ ကို ချိန်ပါ။",
      "camshaft": "Camshaft gear mark 2-2 aligned with idler gear.",
      "camshaftMm": "ကမ်ရှပ်ဂီယာ အမှတ် ၂-၂ ကို အလယ်ဂီယာနှင့် ချိန်ပါ။",
      "pump": "Injection pump gear mark 3-3 aligned.",
      "pumpMm": "ဆီပန့်ဂီယာ အမှတ် ၃-၃ ကို ချိန်ညှိပါ။",
      "notesMm": "ဂီယာအပြည့်စနစ်ဖြစ်၍ တိုက်မင်ခါးပတ် ပြတ်ကျိုးခြင်း မရှိဘဲ အလွန်အကြမ်းခံပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Direct Injection Opening: 196 – 206 bar (20 MPa)",
      "pressureMax": "In-line / ECD Pump",
      "notesMm": "ထရပ်ကားသုံး တိုက်ရိုက်ပန်း စနစ်ဖြစ်၍ နော်ဇယ်ဖိအား မြင့်မားပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "8.5 L",
      "oilWithoutFilter": "7.5 L",
      "oilGrade": "15W-40 (API CF-4 / CH-4)",
      "coolantCapacity": "11.0 L",
      "fuelTankCapacity": "80 L"
    }
  },
  {
    "id": "n04c",
    "code": "N04C / N04C-T (4.0L Common Rail)",
    "series": "OTHER",
    "seriesTitle": "Dyna & Dutro Series (N04C / 14B / 15B Trucks)",
    "seriesTitleMm": "Dyna & Dutro စီးရီး (N04C / 14B / 15B ထရပ်ကားများ)",
    "name": "4.0L Inline-4 DOHC 16-Valve Common Rail Turbo (Toyota Dyna / Hino Dutro)",
    "nameMm": "၄.၀ လီတာ ၄ လုံးထိုး DOHC ၁၆ ဗား ကွန်မန်ရေးလ် (Toyota Dyna & Hino Dutro)",
    "type": "Inline-4 DOHC 16-Valve Turbocharged Intercooled Denso Common Rail Diesel",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား တိုက်မင်ဂီယာသုံး ခေတ်သစ် ကွန်မန်ရေးလ် ထရပ်ကားအင်ဂျင်",
    "fuelSystem": "Denso High-Pressure Common Rail System (HP3/HP4 Pump, 1,800 bar)",
    "fuelSystemMm": "Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (HP3/HP4 ပန့်၊ 1,800 bar)",
    "displacementCc": 4009,
    "boreStrokeMm": "104.0 mm × 118.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "18.0:1 (Intercooled: 17.0:1)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "136 – 180 PS @ 2,500 – 3,000 RPM",
    "torqueOutput": "390 – 500 N·m @ 1,400 – 2,400 RPM",
    "timingType": "Gear",
    "timingTypeMm": "ဂီယာအပြည့် (All Gear Drive with Scissor Gears - ခါးပတ်/ချိန် မပါ)",
    "commonVehicles": [
      "Toyota Dyna 200 / 300 / 400 (XZU Series)",
      "Toyota ToyoAce (XZU Series)",
      "Hino Dutro Light Truck",
      "Hino 300 Series Truck",
      "Toyota Coaster Bus (XZB Series)"
    ],
    "commonVehiclesMm": "Toyota Dyna (XZU မော်ဒယ်သစ်များ)၊ ToyoAce၊ Hino Dutro၊ Hino 300၊ Coaster မီနီဘတ်စ်",
    "valveClearance": {
      "intakeColdMm": "0.30 mm",
      "exhaustColdMm": "0.45 mm",
      "intakeHotMm": "0.30 mm",
      "exhaustHotMm": "0.45 mm",
      "methodMm": "Crosshead (Bridge) & Adjusting Screw (ဘား ၂ လုံးကြား တန်းတူဖိတုံး Bridge အရင်ညှိရန်)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Main M14 Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၁)",
        "nm": 59,
        "kgfCm": 600,
        "lbfFt": 43.5,
        "notesMm": "အလယ်မှစ၍ ဘေးသို့ ၅၉ N·m စတင်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Main M14 Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Main M14 Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルトကြီး (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ"
      },
      {
        "component": "Cylinder Head Sub Bolts (M10 Front)",
        "componentMm": "ခေါင်းဘルトသေး (ရှေ့ခြမ်း M10)",
        "nm": 44,
        "kgfCm": 450,
        "lbfFt": 32.5,
        "notesMm": "ရှေ့ရှိ M10 မူလီငယ်များ ၄၄ N·m ကျပ်ပါ"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "167 + 90°",
        "kgfCm": "1700 + 90°",
        "lbfFt": "123 + 90°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "49 + 90°",
        "kgfCm": "500 + 90°",
        "lbfFt": "36 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 440,
        "kgfCm": 4490,
        "lbfFt": 324,
        "notesMm": "၄၄၀ N·m တိတိကျကျ ကျပ်ရန်"
      },
      {
        "component": "Rocker Arm Support Bolts",
        "componentMm": "ရော့ကာရှပ် ဒေါက်ခုံ ဘルトများ",
        "nm": 31,
        "kgfCm": 316,
        "lbfFt": 22.8
      },
      {
        "component": "Injector Clamp Bolt",
        "componentMm": "နော်ဇယ် ဖိဘルト",
        "nm": 25,
        "kgfCm": 255,
        "lbfFt": 18.5
      },
      {
        "component": "Oil Pan Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 49,
        "kgfCm": 500,
        "lbfFt": 36
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 main M14 bolts in spiral order from center to 59 N·m",
        "descriptionMm": "ခေါင်းဘルトကြီး ၁၈ လုံးကို အလယ်မှစ၍ ၅၉ N·m အညီအမျှကျပ်ပါ",
        "torque": "59 N·m"
      },
      {
        "step": 2,
        "description": "Turn each main bolt 90° clockwise",
        "descriptionMm": "ဘルトတစ်လုံးချင်းစီကို ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each main bolt another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ (စုစုပေါင်း ၁၈၀°)",
        "torque": "+90°"
      },
      {
        "step": 4,
        "description": "Tighten front sub M10 bolts to 44 N·m",
        "descriptionMm": "ရှေ့ဘက် M10 မူလီသေးများကို ၄၄ N·m နောက်ဆုံးကျပ်ပါ",
        "torque": "44 N·m"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear mark (0) with idler gear (0-0).",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ် (0) ကို အလယ်အိုင်ဒလာဂီယာ (0-0) နှင့် ချိန်ပါ။",
      "camshaft": "Align camshaft gear mark (1) with idler gear (1-1).",
      "camshaftMm": "ကမ်ရှပ်ဂီယာ အမှတ် (1) ကို အိုင်ဒလာဂီယာ (1-1) နှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Denso high-pressure fuel pump gear mark (2) aligned with idler gear (2-2).",
      "pumpMm": "ဖိအားမြင့်ဆီပန့်ဂီယာ အမှတ် (2) ကို အိုင်ဒလာဂီယာ (2-2) နှင့် ချိန်ညှိပါ။",
      "notesMm": "N04C တွင် Idler Gear များ၌ Scissor Gear (တုန်ခါမှုထိန်း ဂီယာခွဲ) ပါရှိသဖြင့် ဖြုတ်တပ်ချိန်တွင် M6 Service Bolt ထိုးထားရန် လိုအပ်ပါသည်။ ဂီယာအပြည့်နှင့် Denso Common Rail စနစ်သုံးထား၍ အလွန်အကြမ်းခံပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "32 – 38 MPa (320 – 380 bar)",
      "pressureMax": "180 MPa (1,800 bar)",
      "notesMm": "Denso High-Pressure Common Rail စနစ်ဖြစ်ပြီး ဆီစစ်ဘူး သန့်ရှင်းမှု အထူးဂရုစိုက်ရပါမည်။"
    },
    "fluids": {
      "oilWithFilter": "9.2 L",
      "oilWithoutFilter": "8.2 L",
      "oilGrade": "15W-40 / 10W-30 (API CI-4 / CJ-4 / JASO DH-1)",
      "coolantCapacity": "12.5 L",
      "fuelTankCapacity": "100 L"
    }
  },
  {
    "id": "3c-te",
    "code": "3C-TE / 2C",
    "series": "OTHER",
    "seriesTitle": "B Series & C Series (Commercial Dyna & Classic)",
    "seriesTitleMm": "B & C စီးရီး (Dyna ထရပ်ကား & ခေတ်ဟောင်း မီနီဗင်များ)",
    "name": "2.2L Turbo (3C-TE) / 2.0L (2C)",
    "nameMm": "၂.၂ လီတာ တာဘို (3C-TE) / ၂.၀ လီတာ (2C) TownAce/LiteAce",
    "type": "Inline-4 SOHC 8-Valve Diesel",
    "typeMm": "၄ လုံးထိုး SOHC ၈ ဗား ဒီဇယ် (TownAce / LiteAce / Caldina)",
    "fuelSystem": "Mechanical / 3C-TE: EFI Electronic Distributor Pump",
    "fuelSystemMm": "3C-TE တွင် EFI လျှပ်စစ်ပန့်",
    "displacementCc": 2184,
    "boreStrokeMm": "86.0 mm × 94.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "22.6:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "94 PS @ 4,000 RPM (2C: 73 PS)",
    "torqueOutput": "216 N·m @ 2,200 RPM",
    "timingType": "Belt",
    "timingTypeMm": "တိုက်မင်ခါးပတ် (Timing Belt)",
    "commonVehicles": [
      "TownAce CR40/CR50",
      "LiteAce CR30",
      "Caldina CT190/CT216",
      "Corolla CE100"
    ],
    "commonVehiclesMm": "TownAce, LiteAce, Caldina, Corolla Diesel",
    "valveClearance": {
      "intakeColdMm": "0.20 – 0.30 mm",
      "exhaustColdMm": "0.25 – 0.35 mm",
      "methodMm": "Shim စနစ် (ဖလားပြား)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 44,
        "kgfCm": 450,
        "lbfFt": 32.5
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 88,
        "kgfCm": 900,
        "lbfFt": 65
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18.5 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 167,
        "kgfCm": 1700,
        "lbfFt": 123
      },
      {
        "component": "Camshaft Pulley Bolt",
        "componentMm": "ကမ်ရှပ်ပူးလီး ဘルト",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      },
      {
        "component": "Glow Plugs",
        "componentMm": "အပူပေး ပလပ်များ",
        "nm": 13,
        "kgfCm": 130,
        "lbfFt": 9.4
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 34,
        "kgfCm": 350,
        "lbfFt": 25
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 bolts to 44 N·m in sequence",
        "descriptionMm": "ခေါင်းဘルトများကို ၄၄ N·m စတင်ကျပ်ပါ",
        "torque": "44 N·m"
      },
      {
        "step": 2,
        "description": "Turn 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn another 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ ထပ်လှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft pulley notch with 0 on timing cover.",
      "crankshaftMm": "ခရိုင်းပူးလီး အထစ်ကို 0 နှင့် ချိန်ပါ။",
      "camshaft": "Camshaft pulley mark aligned with head mark.",
      "camshaftMm": "ကမ်ရှပ်ပူးလီး အမှတ်ကို ခေါင်းကာဗာအမှတ်နှင့် ချိန်ပါ။",
      "pump": "Injection pump mark aligned with pump bracket notch.",
      "pumpMm": "ဆီပန့်အမှတ်ကို ဒေါက်ခုံအမှတ်နှင့် ချိန်ညှိပါ။",
      "notesMm": "Belt အဟောင်းလဲလှယ်ချိန်တွင် ဝါတာပန့် အခြေအနေပါ စစ်ဆေးပါ။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Opening: 147 – 157 bar",
      "pressureMax": "Distributor Pump",
      "notesMm": "အအေးခံစနစ် အပူမတက်စေရန် အထူးဂရုစိုက်ရသော ခေါင်းအလူမီနီယမ် အင်ဂျင်ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "4.8 L",
      "oilWithoutFilter": "4.3 L",
      "oilGrade": "10W-30 / 15W-40 (API CF-4)",
      "coolantCapacity": "7.5 L",
      "fuelTankCapacity": "55 L"
    }
  }
];
