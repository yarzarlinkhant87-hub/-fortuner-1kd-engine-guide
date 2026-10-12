// Auto-restored data file
export const KOREA_SERIES_CATEGORIES = [
  {
    "id": "ALL",
    "name": "All Korea (ကိုရီးယား အားလုံး)",
    "desc": "Hyundai, Kia, SsangYong, Daewoo ဒီဇယ်အင်ဂျင်အားလုံး"
  },
  {
    "id": "BONGO_STAREX",
    "name": "Bongo, Porter & Starex (D4CB/J3)",
    "desc": "Kia Bongo III (2.5L/2.9L), Hyundai Starex, Porter II"
  },
  {
    "id": "COMPACT_DIESEL",
    "name": "ဒီဇယ်ကားငယ်များ (1.6L U2 D4FB)",
    "desc": "Hyundai Accent, Kia Pride, Kia Soul, Avante (1.6L CRDi)"
  },
  {
    "id": "SUV_R_ENGINE",
    "name": "SUV & MPV (Carnival/Sorento/Santa Fe)",
    "desc": "Kia Carnival, Sorento, Hyundai Santa Fe, Sportage (2.0L/2.2L)"
  },
  {
    "id": "MIGHTY_COUNTY",
    "name": "Mighty & County (D4DD/D4AL)",
    "desc": "Hyundai Mighty 3.9L & County Bus"
  },
  {
    "id": "AERO_POWERTEC",
    "name": "Aero Bus & Heavy (D6AC/D6CA)",
    "desc": "Hyundai Aero Express Bus & HD370 Powertec တွဲကားများ"
  },
  {
    "id": "SSANGYONG_DAEWOO",
    "name": "SsangYong & Daewoo (OM662/DE12)",
    "desc": "SsangYong Korando 5-Cyl & Daewoo Novus"
  }
];

export const KOREA_DIESEL_ENGINES = [
  {
    "id": "korea-d4cb",
    "brand": "ISUZU",
    "code": "D4CB (2.5L CRDi 16V)",
    "series": "BONGO_STAREX",
    "seriesTitle": "Hyundai & Kia Commercial (D4CB CRDi)",
    "seriesTitleMm": "Hyundai & Kia စီးပွားရေးသုံး (D4CB ကွန်မန်ရေးလ်)",
    "name": "2.5L DOHC 16-Valve CRDi Turbo / VGT (Bongo III / Grand Starex / Porter II)",
    "nameMm": "၂.၅ လီတာ DOHC ၁၆ ဗား CRDi တာဘို (Bongo III / Starex / Porter II)",
    "type": "Inline-4 DOHC 16-Valve Common Rail Direct Injection Variable Geometry Turbocharger",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား CRDi VGT ဒီဇယ် (မြန်မာပြည် ကိုရီးယားမင်းသား)",
    "fuelSystem": "Bosch / Delphi Common Rail High Pressure System (1,600 – 1,800 bar)",
    "fuelSystemMm": "Bosch / Delphi ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်",
    "displacementCc": 2497,
    "boreStrokeMm": "91.0 mm × 96.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "17.6:1 (WGT) / 16.4:1 (VGT)",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "126 – 175 PS @ 3,600–3,800 RPM",
    "torqueOutput": "392 – 450 N·m @ 2,000–2,500 RPM",
    "timingType": "Chain",
    "timingTypeMm": "တိုက်မင်ကြိုး ၃ ထပ်စနစ် (Chain A-အောက်ခြမ်း, Chain B-ဆီပန့်, Chain C-ကမ်ရှပ်)",
    "commonVehicles": [
      "Kia Bongo III 1-Ton & 1.4-Ton",
      "Hyundai Grand Starex (H-1)",
      "Hyundai Porter II",
      "Kia Sorento 2.5 CRDi"
    ],
    "commonVehiclesMm": "Kia Bongo III၊ Hyundai Grand Starex၊ Porter II၊ Sorento 2.5",
    "valveClearance": {
      "intakeColdMm": "Hydraulic Auto Lash Adjuster (HLA အလိုအလျောက်ညှိစနစ်)",
      "exhaustColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "methodMm": "Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက်ညှိဖလား - လက်ဖြင့်ညှိရန်မလို)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 49,
        "kgfCm": 500,
        "lbfFt": 36,
        "notesMm": "အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+120°",
        "kgfCm": "+120°",
        "lbfFt": "+120°",
        "notesMm": "ထောင့် ၁၂၀ ဒီဂရီ လှည့်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "29 + 120°",
        "kgfCm": "300 + 120°",
        "lbfFt": "21.7 + 120°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18.5 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": "275 – 294",
        "kgfCm": "2800 – 3000",
        "lbfFt": "203 – 217",
        "notesMm": "၂၈၅ N·m ဝန်းကျင် တိကျစွာ ကျပ်ရန်"
      },
      {
        "component": "Camshaft Sprocket Bolt",
        "componentMm": "ကမ်ရှပ် စပရော့ကတ် ဘルト",
        "nm": "93 – 113",
        "kgfCm": "950 – 1150",
        "lbfFt": "69 – 83"
      },
      {
        "component": "Injector Clamp Bolt",
        "componentMm": "နော်ဇယ် ဖိဘルト",
        "nm": "28 – 32",
        "kgfCm": "285 – 326",
        "lbfFt": "20.6 – 23.6",
        "notesMm": "နော်ဇယ်မီးလောင်ကွင်း ကြေးပြားအသစ် အမြဲလဲပါ"
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": "34 – 44",
        "kgfCm": "350 – 450",
        "lbfFt": "25 – 32"
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque 18 head bolts from center outward in spiral sequence to 49 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ",
        "torque": "49 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 120° clockwise",
        "descriptionMm": "တစ်လုံးချင်းစီကို ထောင့် ၁၂၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+120°"
      },
      {
        "step": 3,
        "description": "Turn each bolt another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၂၁၀°)",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft sprocket timing mark with oil pump housing at 0° TDC.",
      "crankshaftMm": "ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို အင်ဂျင်ဝိုင်ပန့် အိမ်အမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "camshaft": "Align intake and exhaust camshaft dots with colored links on Chain C.",
      "camshaftMm": "ကမ်ရှပ် အမှတ်များကို အပေါ်ချိန်ကြိုး (Chain C) ၏ အရောင်ပါကွင်းများနှင့် ချိန်ပါ။",
      "pump": "High pressure fuel pump sprocket alignment with Chain A & B.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် စပရော့ကတ်ကို အလယ်ချိန်ကြိုး (Chain B) နှင့် တိုက်ဆိုင်ပါ။",
      "notesMm": "D4CB တွင် ချိန်ကြိုး ၃ ချောင်း (Chain A-ခရိုင်းရှပ်မှ ဆီပန့်၊ Chain B-ဆီပန့်မှ အလယ်ရိုး၊ Chain C-ကမ်ရှပ် ၂ ချောင်း) ပါဝင်သဖြင့် Tensioner ၃ ခုစလုံး အသစ်လဲလှယ်ရန် အကြံပြုပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "25 – 30 MPa (250 – 300 bar)",
      "pressureMax": "160 – 180 MPa (1,600 – 1,800 bar)",
      "notesMm": "နော်ဇယ် ကြေးပြား (Injector Washer) ချောင်ကျွံပါက အင်ဂျင်ဝိုင်ထဲ ကာဗွန်ကျပြီး အင်ဂျင်ဝိုင်စကာ ပိတ်တတ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "7.4 L",
      "oilWithoutFilter": "6.5 L",
      "oilGrade": "5W-30 / 10W-30 (ACEA C3 / API CH-4 or CI-4)",
      "coolantCapacity": "9.0 L",
      "fuelTankCapacity": "65 L / 75 L"
    }
  },
  {
    "id": "korea-d4bh",
    "brand": "ISUZU",
    "code": "D4BH / D4BF (2.5L TCI)",
    "series": "BONGO_STAREX",
    "seriesTitle": "Hyundai Starex & Porter Classic (D4BH)",
    "seriesTitleMm": "Hyundai Starex & Porter မော်ဒယ်ဟောင်း (D4BH)",
    "name": "2.5L SOHC 8-Valve Turbocharged Intercooler Diesel (Mitsubishi 4D56 Base)",
    "nameMm": "၂.၅ လီတာ SOHC ၈ ဗား တာဘိုအင်တာကူလာ (Starex ဟောင်း / Porter ဟောင်း)",
    "type": "Inline-4 SOHC 8-Valve Turbocharged Intercooler Diesel",
    "typeMm": "၄ လုံးထိုး SOHC ၈ ဗား တာဘိုဒီဇယ် (Mitsubishi 4D56 အမျိုးအစား)",
    "fuelSystem": "Bosch VE Type Mechanical / Electronic Distributor Injection Pump (COVEC)",
    "fuelSystemMm": "Bosch VE မက္ကင်းနစ် / လျှပ်စစ် ပန့်လိုင်းစနစ်",
    "displacementCc": 2476,
    "boreStrokeMm": "91.1 mm × 95.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 2,
    "compressionRatio": "21.0:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "100 – 103 PS @ 3,800 RPM",
    "torqueOutput": "226 – 240 N·m @ 2,000 RPM",
    "timingType": "Belt",
    "timingTypeMm": "တိုက်မင်ခါးပတ် ၂ ချောင်း (Timing Belt ကြီး + Balancer Belt သေး)",
    "commonVehicles": [
      "Hyundai Starex (H-1) Gen 1",
      "Hyundai Porter Classic",
      "Hyundai Galloper 2.5",
      "Hyundai Grace Van"
    ],
    "commonVehiclesMm": "Hyundai Starex မော်ဒယ်ဟောင်း၊ Porter၊ Galloper၊ Grace ဗင်ကား",
    "valveClearance": {
      "intakeColdMm": "0.15 mm",
      "exhaustColdMm": "0.15 mm",
      "intakeHotMm": "0.25 mm",
      "exhaustHotMm": "0.25 mm",
      "methodMm": "Screw & Locknut (ဝက်အူနှင့် လော့နတ် - အေးချိန် In & Ex နှစ်ခုစလုံး 0.15 mm)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 118,
        "kgfCm": 1200,
        "lbfFt": 87,
        "notesMm": "အလယ်မှစ၍ ၁၁၈ N·m အပြည့်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "Loosen All 0 N·m",
        "kgfCm": "0",
        "lbfFt": "0",
        "notesMm": "မူလီအားလုံးကို အကုန်ပြန်လျှော့ပါ (0 N·m)"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": 40,
        "kgfCm": 408,
        "lbfFt": 29.5,
        "notesMm": "၄၀ N·m ပြန်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 4)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)",
        "nm": "+90° to 95°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 5)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၅)",
        "nm": "+90° to 95°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 78,
        "kgfCm": 800,
        "lbfFt": 58
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "27 + 90°",
        "kgfCm": "275 + 90°",
        "lbfFt": "20 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 181,
        "kgfCm": 1850,
        "lbfFt": 134
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 39,
        "kgfCm": 398,
        "lbfFt": 28.8
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 18 bolts to 118 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၁၁၈ N·m ကျပ်ပါ",
        "torque": "118 N·m"
      },
      {
        "step": 2,
        "description": "Loosen all bolts completely to 0 N·m",
        "descriptionMm": "မူလီအားလုံးကို အကုန်ပြန်လျှော့ပါ (0 N·m)",
        "torque": "0 N·m"
      },
      {
        "step": 3,
        "description": "Re-torque to 40 N·m",
        "descriptionMm": "၄၀ N·m ပြန်လည်ကျပ်ပါ",
        "torque": "40 N·m"
      },
      {
        "step": 4,
        "description": "Turn 90° to 95° clockwise",
        "descriptionMm": "ထောင့် ၉၀° မှ ၉၅° လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 5,
        "description": "Turn another 90° to 95° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀° မှ ၉၅° ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear notch with 0° TDC pointer.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC အမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "camshaft": "Align camshaft sprocket mark with cylinder head notch.",
      "camshaftMm": "ကမ်ရှပ် စပရော့ကတ် အမှတ်ကို ခေါင်းမျက်နှာပြင် အမှတ်နှင့် ချိန်ပါ။",
      "pump": "Injection pump sprocket alignment.",
      "pumpMm": "ဆီပန့် စပရော့ကတ် အမှတ် တိုက်ဆိုင်ပါ။",
      "notesMm": "Mitsubishi 4D56 နှင့် အစိတ်အပိုင်း အများစု အတူတူဖြစ်ပြီး Balancer Belt အမှတ် တိကျစွာ ချိန်ရပါမည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Opening: 120 – 130 bar",
      "pressureMax": "Mechanical / Electronic VE Pump",
      "notesMm": "အလွန်အကြမ်းခံသော ပန့်လိုင်းစနစ်ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "6.5 L",
      "oilWithoutFilter": "5.8 L",
      "oilGrade": "15W-40 (API CF-4 / CH-4)",
      "coolantCapacity": "8.5 L",
      "fuelTankCapacity": "65 L"
    }
  },
  {
    "id": "korea-d4hb",
    "brand": "ISUZU",
    "code": "D4HB (2.2L R-Engine CRDi)",
    "series": "SUV_R_ENGINE",
    "seriesTitle": "Hyundai & Kia R-Engine (Santa Fe / Carnival)",
    "seriesTitleMm": "Hyundai & Kia R-အင်ဂျင် (Santa Fe / Carnival)",
    "name": "2.2L DOHC 16-Valve CRDi R-Engine Clean Diesel (Santa Fe / Carnival)",
    "nameMm": "၂.၂ လီတာ DOHC ၁၆ ဗား R-အင်ဂျင် CRDi (Santa Fe / Carnival / Sorento)",
    "type": "Inline-4 DOHC 16-Valve Common Rail Direct Injection E-VGT All-Aluminum",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား အလူမီနီယမ် ခေတ်သစ် R-အင်ဂျင် Clean Diesel",
    "fuelSystem": "Bosch Piezoelectric Common Rail System (1,800 – 2,000 bar)",
    "fuelSystemMm": "Bosch ဖိအားမြင့် Piezo ကွန်မန်ရေးလ် (2,000 bar)",
    "displacementCc": 2199,
    "boreStrokeMm": "85.4 mm × 96.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "16.0:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "197 – 202 PS @ 3,800 RPM",
    "torqueOutput": "441 N·m @ 1,750–2,750 RPM",
    "timingType": "Chain",
    "timingTypeMm": "တိုက်မင်ကြိုး (Double Timing Chain စနစ်)",
    "commonVehicles": [
      "Hyundai Santa Fe (DM / TM)",
      "Kia Grand Carnival (Sedona)",
      "Kia Sorento (XM / UM)",
      "Hyundai Palisade Diesel"
    ],
    "commonVehiclesMm": "Hyundai Santa Fe, Kia Grand Carnival, Kia Sorento, Palisade Diesel",
    "valveClearance": {
      "intakeColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "exhaustColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "methodMm": "Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက်ညှိစနစ်)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 49,
        "kgfCm": 500,
        "lbfFt": 36,
        "notesMm": "အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": "+120°",
        "kgfCm": "+120°",
        "lbfFt": "+120°",
        "notesMm": "ထောင့် ၁၂၀ ဒီဂရီ လှည့်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "30 + 120°",
        "kgfCm": "306 + 120°",
        "lbfFt": "22 + 120°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18.5 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": "275 – 294",
        "kgfCm": "2800 – 3000",
        "lbfFt": "203 – 217"
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
        "nm": 39,
        "kgfCm": 398,
        "lbfFt": 28.8
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all head bolts to 49 N·m",
        "descriptionMm": "ခေါင်းဘルトများကို အလယ်မှစ၍ ၄၉ N·m ကျပ်ပါ",
        "torque": "49 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 120° clockwise",
        "descriptionMm": "ထောင့် ၁၂၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+120°"
      },
      {
        "step": 3,
        "description": "Turn each bolt another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear mark with oil pump casing indicator.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို အင်ဂျင်ဝိုင်ပန့် အမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "camshaft": "Camshaft sprockets aligned with colored timing chain links.",
      "camshaftMm": "ကမ်ရှပ် စပရော့ကတ် အမှတ်များကို ချိန်ကြိုးအရောင်ကွင်းများနှင့် ချိန်ပါ။",
      "pump": "High pressure fuel pump chain synchronization.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။",
      "notesMm": "မြင်းကောင်ရေ ၂၀၀ ကျော်ထွက်ပြီး အလူမီနီယမ် ဘလောက်တုံးဖြစ်သဖြင့် အပူချိန်လွန်ကဲခြင်း မဖြစ်စေရန် အထူးဂရုစိုက်ရပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "35 – 45 MPa (350 – 450 bar)",
      "pressureMax": "200 MPa (2,000 bar)",
      "notesMm": "DPF ပါဝင်သဖြင့် Low Ash အင်ဂျင်ဝိုင်သာ သုံးစွဲရပါမည်။"
    },
    "fluids": {
      "oilWithFilter": "6.7 L",
      "oilWithoutFilter": "6.0 L",
      "oilGrade": "5W-30 (ACEA C3 / C2 Low SAPS Diesel)",
      "coolantCapacity": "8.4 L",
      "fuelTankCapacity": "71 L / 80 L"
    }
  },
  {
    "id": "korea-d4dd",
    "brand": "ISUZU",
    "code": "D4DD (3.9L CRDi Mighty / County)",
    "series": "MIGHTY_COUNTY",
    "seriesTitle": "Hyundai Commercial (Mighty & County Bus)",
    "seriesTitleMm": "Hyundai ကုန်တင်နှင့် ခရီးသည်တင် (Mighty & County Bus)",
    "name": "3.9L Inline-4 16-Valve CRDi Turbo Intercooler (Mighty II / County Bus)",
    "nameMm": "၃.၉ လီတာ ၄ လုံးထိုး ၁၆ ဗား CRDi တာဘို (Mighty II / County Bus)",
    "type": "Inline-4 OHC 16-Valve Common Rail Turbocharged Intercooler Diesel",
    "typeMm": "၄ လုံးထိုး OHC ၁၆ ဗား ထရပ်ကား/မီနီဘတ်စ်သုံး ကွန်မန်ရေးလ် ဒီဇယ်",
    "fuelSystem": "Denso High-Pressure Common Rail System (1,600 – 1,800 bar)",
    "fuelSystemMm": "Denso ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ်",
    "displacementCc": 3907,
    "boreStrokeMm": "104.0 mm × 115.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "17.5:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "140 – 150 PS @ 2,500 RPM",
    "torqueOutput": "380 – 392 N·m @ 1,600 RPM",
    "timingType": "Gear",
    "timingTypeMm": "ဂီယာအပြည့် (All Gear Drive - ခါးပတ်/ချိန် မပါ)",
    "commonVehicles": [
      "Hyundai Mighty II (HD65 / HD72 / HD78)",
      "Hyundai County 29-Seater Mini Bus",
      "Hyundai e-County"
    ],
    "commonVehiclesMm": "Hyundai Mighty ကုန်တင်ကား၊ Hyundai County ခရီးသည်တင် မီနီဘတ်စ်",
    "valveClearance": {
      "intakeColdMm": "0.40 mm",
      "exhaustColdMm": "0.40 mm",
      "methodMm": "Bridge Adjuster & Screw (အေးချိန် In & Ex နှစ်ခုစလုံး 0.40 mm)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": 167,
        "kgfCm": 1700,
        "lbfFt": 123
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+60° to 90°",
        "kgfCm": "+60°",
        "lbfFt": "+60°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 167,
        "kgfCm": 1700,
        "lbfFt": 123
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "49 + 60°",
        "kgfCm": "500 + 60°",
        "lbfFt": "36 + 60°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 490,
        "kgfCm": 5000,
        "lbfFt": 362
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 78,
        "kgfCm": 795,
        "lbfFt": 57.5
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque 18 head bolts from center outward to 98 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၉၈ N·m ကျပ်ပါ",
        "torque": "98 N·m"
      },
      {
        "step": 2,
        "description": "Torque to 167 N·m",
        "descriptionMm": "ဒုတိယအဆင့် ၁၆၇ N·m ရောက်အောင် တိုးမြှင့်ကျပ်ပါ",
        "torque": "167 N·m"
      },
      {
        "step": 3,
        "description": "Turn each bolt 60° to 90° clockwise",
        "descriptionMm": "ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ",
        "torque": "+60°~90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft gear notch with 0° TDC.",
      "crankshaftMm": "ခရိုင်းရှပ်ဂီယာ အမှတ်ကို 0° TDC ချိန်ပါ။",
      "camshaft": "Camshaft gear alignment with idler gear.",
      "camshaftMm": "ကမ်ရှပ်ဂီယာ အမှတ်ကို အလယ်ဂီယာနှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Denso common rail pump drive gear.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ဂီယာအမှတ် ချိန်ညှိပါ။",
      "notesMm": "မြန်မာပြည်တွင် ခရီးသည်တင် County ဘတ်စ်ကားများတွင် အပေါဆုံး အင်ဂျင်ဖြစ်ပြီး ဂီယာအပြည့်စနစ် ဖြစ်ပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "32 – 40 MPa",
      "pressureMax": "180 MPa",
      "notesMm": "Denso Common Rail စနစ်"
    },
    "fluids": {
      "oilWithFilter": "10.0 L",
      "oilWithoutFilter": "9.0 L",
      "oilGrade": "15W-40 (Heavy Duty Diesel Engine Oil)",
      "coolantCapacity": "14.0 L",
      "fuelTankCapacity": "100 L"
    }
  },
  {
    "id": "korea-d6ac",
    "brand": "ISUZU",
    "code": "D6AC / D6CA Powertec (11.1L / 12.9L)",
    "series": "AERO_POWERTEC",
    "seriesTitle": "Hyundai Heavy (Aero Express Bus & Powertec)",
    "seriesTitleMm": "Hyundai ကားကြီးများ (Aero Express Bus & Powertec တွဲကား)",
    "name": "11.1L (D6AC) / 12.9L (D6CA Powertec EUI) Heavy Diesel",
    "nameMm": "၁၁.၁ လီတာ (D6AC) / ၁၂.၉ လီတာ (D6CA Powertec) ဘတ်စ်ကားနှင့် တွဲကားကြီး",
    "type": "Inline-6 OHC Turbocharged Intercooler Heavy Duty Diesel (Mitsubishi 8DC/6D Base & Modern Powertec)",
    "typeMm": "၆ လုံးထိုး OHC အဝေးပြေးဘတ်စ်ကားကြီးနှင့် ကွန်တိန်နာဆွဲခေါင်း အင်ဂျင်ကြီး",
    "fuelSystem": "Mechanical In-line Pump (D6AC) / Electronic Unit Injector EUI (D6CA Powertec)",
    "fuelSystemMm": "မက္ကင်းနစ် ပန့်လိုင်းကြီး (D6AC) / EUI လျှပ်စစ်နော်ဇယ် (Powertec)",
    "displacementCc": 12920,
    "boreStrokeMm": "133.0 mm × 155.0 mm (D6CA)",
    "cylinders": 6,
    "valvesPerCyl": 4,
    "compressionRatio": "17.0:1",
    "firingOrder": "1 - 5 - 3 - 6 - 2 - 4",
    "powerOutput": "340 PS (D6AC) / 380 – 440 PS (D6CA) @ 1,900 RPM",
    "torqueOutput": "1,450 – 1,850 N·m @ 1,200 RPM",
    "timingType": "Gear",
    "timingTypeMm": "ဂီယာအပြည့် (All Heavy Gear Drive)",
    "commonVehicles": [
      "Hyundai Aero Space / Aero Express Bus (အဝေးပြေး ဘတ်စ်ကားကြီးများ)",
      "Hyundai HD370 / HD500 Prime Mover Trailer (တွဲကားကြီးများ)",
      "Hyundai Trago Dump Truck"
    ],
    "commonVehiclesMm": "Hyundai Aero Space/Express ဘတ်စ်ကားကြီးများ၊ HD370 ကွန်တိန်နာဆွဲခေါင်းကြီးများ",
    "valveClearance": {
      "intakeColdMm": "0.40 mm",
      "exhaustColdMm": "0.60 mm",
      "methodMm": "Bridge Adjuster & Screw (အေးချိန် Intake 0.40 mm / Exhaust 0.60 mm - Jake Brake ချိန်နည်းပါရှိ)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 118,
        "kgfCm": 1200,
        "lbfFt": 87
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": 196,
        "kgfCm": 2000,
        "lbfFt": 145
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+60° to 90°",
        "kgfCm": "+60°",
        "lbfFt": "+60°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "147 + 60°",
        "kgfCm": "1500 + 60°",
        "lbfFt": "108 + 60°"
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": "69 + 60°",
        "kgfCm": "700 + 60°",
        "lbfFt": "51 + 60°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 686,
        "kgfCm": 7000,
        "lbfFt": 506
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 98,
        "kgfCm": 1000,
        "lbfFt": 72
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque heavy head bolts to 118 N·m",
        "descriptionMm": "ခေါင်းဘルトများကို ၁၁၈ N·m စတင်ကျပ်ပါ",
        "torque": "118 N·m"
      },
      {
        "step": 2,
        "description": "Torque to 196 N·m",
        "descriptionMm": "၁၉၆ N·m သို့ တိုးမြှင့်ကျပ်ပါ",
        "torque": "196 N·m"
      },
      {
        "step": 3,
        "description": "Turn each bolt 60° to 90° clockwise",
        "descriptionMm": "ထောင့် ၆၀° မှ ၉၀° ထပ်မံလှည့်ကျပ်ပါ",
        "torque": "+60°~90°"
      }
    ],
    "headBoltsCount": 26,
    "timingMarksGuide": {
      "crankshaft": "Align flywheel 1/6 TDC mark.",
      "crankshaftMm": "ဖလိုင်းဝီးလ် 1/6 TDC အမှတ်နှင့် ချိန်ပါ။",
      "camshaft": "Overhead camshaft gear alignment.",
      "camshaftMm": "ကမ်ရှပ်ဂီယာ အမှတ် တိုက်ဆိုင်ပါ။",
      "pump": "Electronic Unit Injection synchronization.",
      "pumpMm": "EUI နော်ဇယ် အချိန်အဆ ချိန်ညှိပါ။",
      "notesMm": "မြန်မာပြည် အဝေးပြေး ခရီးသည်တင် ယာဉ်ကြီးများတွင် အသုံးအများဆုံး အင်ဂျင်ကြီးဖြစ်ပြီး မီးပေါက်စဉ် (1-5-3-6-2-4) အတိုင်း ဘားချိန်ရပါမည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "35 – 45 MPa",
      "pressureMax": "180 – 200 MPa",
      "notesMm": "အဝေးပြေး အင်ဂျင်ကြီးဖြစ်၍ ဆီသန့်စင်မှု အထူးလိုအပ်သည်။"
    },
    "fluids": {
      "oilWithFilter": "35.0 L",
      "oilWithoutFilter": "31.0 L",
      "oilGrade": "15W-40 (Heavy Duty Commercial Turbo Diesel Oil)",
      "coolantCapacity": "42.0 L",
      "fuelTankCapacity": "350 L / 400 L"
    }
  },
  {
    "id": "korea-om662",
    "brand": "ISUZU",
    "code": "OM662 / 661 (2.9L 5-Cyl Mercedes Base)",
    "series": "SSANGYONG_DAEWOO",
    "seriesTitle": "SsangYong Mercedes Diesel (OM662 5-Cylinder)",
    "seriesTitleMm": "SsangYong မာစီးဒီးစ်ဒီဇယ် (OM662 ၅ လုံးထိုး)",
    "name": "2.9L Inline-5 SOHC 10-Valve Diesel (Mercedes-Benz License)",
    "nameMm": "၂.၉ လီတာ ၅ လုံးထိုး SOHC ၁၀ ဗား (SsangYong Korando / Musso / Rexton)",
    "type": "Inline-5 SOHC 10-Valve Naturally Aspirated / Turbocharged Diesel",
    "typeMm": "၅ လုံးထိုး SOHC ၁၀ ဗား ဒဏ္ဍာရီလာ မာစီးဒီးစ်လိုင်စင်သုံး ဒီဇယ်",
    "fuelSystem": "Bosch In-line 5-Plunger Mechanical Injection Pump",
    "fuelSystemMm": "Bosch ၅ လုံးထိုး မက္ကင်းနစ် ပန့်လိုင်းကြီး",
    "displacementCc": 2874,
    "boreStrokeMm": "89.0 mm × 92.4 mm",
    "cylinders": 5,
    "valvesPerCyl": 2,
    "compressionRatio": "22.0:1",
    "firingOrder": "1 - 2 - 4 - 5 - 3",
    "powerOutput": "95 – 120 PS (Turbo: 132 PS) @ 4,000 RPM",
    "torqueOutput": "192 – 256 N·m @ 2,400 RPM",
    "timingType": "Chain",
    "timingTypeMm": "တိုက်မင်ကြိုး (Heavy Duplex Roller Chain စနစ်)",
    "commonVehicles": [
      "SsangYong Korando",
      "SsangYong Musso",
      "SsangYong Rexton 2.9 TD",
      "Mercedes-Benz MB100 / MB140 Van"
    ],
    "commonVehiclesMm": "SsangYong Korando၊ Musso၊ Rexton 2.9 TD၊ Mercedes MB140 ဗင်ကား",
    "valveClearance": {
      "intakeColdMm": "Hydraulic Valve Lifters (အလိုအလျောက် ဟိုက်ဒရောလစ် ညှိစနစ်)",
      "exhaustColdMm": "Hydraulic Valve Lifters",
      "methodMm": "Hydraulic Tappet (မာစီးဒီးစ် ဟိုက်ဒရောလစ်စနစ် - ဘားချိန်ရန်မလို)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 15,
        "kgfCm": 153,
        "lbfFt": 11
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 25.8
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Cylinder Head Bolts (Step 4)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "55 + 90°",
        "kgfCm": "560 + 90°",
        "lbfFt": "40 + 90°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "30 + 90°",
        "kgfCm": "306 + 90°",
        "lbfFt": "22 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": "200 – 220",
        "kgfCm": "2040 – 2240",
        "lbfFt": "147 – 162"
      },
      {
        "component": "Oil Drain Plug",
        "componentMm": "အင်ဂျင်ဝိုင် ဖောက်ပေါက်နတ်",
        "nm": 30,
        "kgfCm": 306,
        "lbfFt": 22
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all head bolts to 15 N·m",
        "descriptionMm": "ခေါင်းဘルトများကို ၁၅ N·m စတင်ကျပ်ပါ",
        "torque": "15 N·m"
      },
      {
        "step": 2,
        "description": "Torque all bolts to 35 N·m",
        "descriptionMm": "၃၅ N·m သို့ တိုးမြှင့်ကျပ်ပါ",
        "torque": "35 N·m"
      },
      {
        "step": 3,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 4,
        "description": "Turn each bolt another 90° clockwise",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 22,
    "timingMarksGuide": {
      "crankshaft": "Align OT (0° TDC) mark on crankshaft pulley pointer.",
      "crankshaftMm": "ခရိုင်းပူးလီးရှိ OT (0° TDC) အမှတ်နှင့် ညွှန်တံ ချိန်ပါ။",
      "camshaft": "Align notch on camshaft flange with bearing cap mark.",
      "camshaftMm": "ကမ်ရှပ် အထစ်အမှတ်ကို ကမ်ကပ် အမှတ်နှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Lock injection pump at 15° after OT using Mercedes locking pin.",
      "pumpMm": "ဆီပန့်ကို OT လွန်ပြီး ၁၅ ဒီဂရီတွင် လော့ပင် (Locking Pin) ဖြင့် သော့ခတ်ချိန်ညှိပါ။",
      "notesMm": "Mercedes-Benz OM602 အင်ဂျင်ကို လိုင်စင်ယူ ထုတ်လုပ်ထားခြင်းဖြစ်ပြီး ၅ လုံးထိုး မီးပေါက်စဉ် (1-2-4-5-3) ဖြစ်ပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "Opening: 115 – 125 bar",
      "pressureMax": "In-line Mechanical Pump",
      "notesMm": "Bosch ၅ လုံးထိုး မက္ကင်းနစ်ပန့်ကြီး ဖြစ်ပါသည်။"
    },
    "fluids": {
      "oilWithFilter": "9.5 L",
      "oilWithoutFilter": "8.5 L",
      "oilGrade": "15W-40 (API CF-4 / CH-4)",
      "coolantCapacity": "11.0 L",
      "fuelTankCapacity": "75 L"
    }
  },
  {
    "id": "korea-j3",
    "brand": "ISUZU",
    "code": "Kia J3 (2.9L CRDi 16V)",
    "series": "BONGO_STAREX",
    "seriesTitle": "Kia Commercial & Van (J3 2.9L CRDi)",
    "seriesTitleMm": "Kia ဘွန်ဂို & ကာနီဗယ် သီးသန့် (J3 ၂.၉ လီတာ ကွန်မန်ရေးလ်)",
    "name": "2.9L DOHC 16-Valve Turbocharged Intercooler CRDi (Kia Bongo III 2.9 / Carnival)",
    "nameMm": "၂.၉ လီတာ DOHC ၁၆ ဗား CRDi တာဘို (Kia Bongo III 2.9 / Carnival Sedona)",
    "type": "Inline-4 DOHC 16-Valve Common Rail Direct Injection Turbocharged Intercooler Diesel",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား Kia သီးသန့် နာမည်ကျော် ၂.၉ လီတာ ကွန်မန်ရေးလ် အင်ဂျင်",
    "fuelSystem": "Delphi High-Pressure Common Rail System (1,600 bar)",
    "fuelSystemMm": "Delphi ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,600 bar)",
    "displacementCc": 2902,
    "boreStrokeMm": "97.1 mm × 98.0 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "18.4:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "126 – 144 PS (Carnival: 160–185 PS) @ 3,800 RPM",
    "torqueOutput": "300 – 343 N·m @ 2,000 RPM",
    "timingType": "Belt",
    "timingTypeMm": "တိုက်မင်ခါးပတ် စနစ် (Timing Belt)",
    "commonVehicles": [
      "Kia Bongo III 1.4-Ton / 1-Ton (2.9 CRDi)",
      "Kia Carnival II / Grand Carnival (Sedona 2.9 CRDi)",
      "Kia K2900 Light Truck",
      "Hyundai Terracan 2.9 CRDi"
    ],
    "commonVehiclesMm": "Kia Bongo III (2.9L)၊ Kia Carnival (Sedona 2.9)၊ Kia K2900၊ Terracan 2.9",
    "valveClearance": {
      "intakeColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "exhaustColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "methodMm": "Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက်ညှိစနစ် - ဘားချိန်ရန်မလို)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 29,
        "kgfCm": 300,
        "lbfFt": 21.4,
        "notesMm": "အလယ်မှစ၍ ၂၉ N·m ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 2)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၂)",
        "nm": 64,
        "kgfCm": 650,
        "lbfFt": 47.2,
        "notesMm": "ဒုတိယအဆင့် ၆၄ N·m သို့ တိုးကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 3)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၃)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ"
      },
      {
        "component": "Cylinder Head Bolts (Step 4)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၄)",
        "nm": "+90°",
        "kgfCm": "+90°",
        "lbfFt": "+90°",
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": 83,
        "kgfCm": 850,
        "lbfFt": 61
      },
      {
        "component": "Connecting Rod Cap Nuts",
        "componentMm": "ကွန်ရော့ကပ် နတ်များ",
        "nm": 54,
        "kgfCm": 550,
        "lbfFt": 40
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 343,
        "kgfCm": 3500,
        "lbfFt": 253,
        "notesMm": "၃၄၃ N·m တိကျစွာ ကျပ်ရန်"
      },
      {
        "component": "Camshaft Sprocket Bolt",
        "componentMm": "ကမ်ရှပ် စပရော့ကတ် ဘルト",
        "nm": 118,
        "kgfCm": 1200,
        "lbfFt": 87
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
        "description": "Torque 18 head bolts from center outward in spiral sequence to 29 N·m",
        "descriptionMm": "ခေါင်းဘルト ၁၈ လုံးကို အလယ်မှစ၍ ၂၉ N·m ကျပ်ပါ",
        "torque": "29 N·m"
      },
      {
        "step": 2,
        "description": "Torque to 64 N·m",
        "descriptionMm": "ဒုတိယအဆင့် ၆၄ N·m သို့ တိုးမြှင့်ကျပ်ပါ",
        "torque": "64 N·m"
      },
      {
        "step": 3,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 4,
        "description": "Turn each bolt another 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 18,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft timing notch with oil pump housing at 0° TDC.",
      "crankshaftMm": "ခရိုင်းရှပ် အမှတ်ကို အင်ဂျင်ဝိုင်ပန့် အမှတ်နှင့် 0° TDC ချိန်ပါ။",
      "camshaft": "Intake and exhaust camshaft sprocket timing marks aligned with rear plate notches.",
      "camshaftMm": "ကမ်ရှပ် စပရော့ကတ် အမှတ်များကို အနောက်ပလိတ် အမှတ်များနှင့် တိုက်ဆိုင်ပါ။",
      "pump": "Delphi high-pressure pump sprocket timing mark alignment.",
      "pumpMm": "Delphi ဖိအားမြင့်ဆီပန့် စပရော့ကတ် အမှတ် ချိန်ညှိပါ။",
      "notesMm": "Kia Bongo III 2.9 တွင် Delphi Common Rail စနစ်သုံးထားပြီး တိုက်မင်ခါးပတ် (Timing Belt) စနစ် ဖြစ်ပါသည်။ ဆီသန့်စင်မှု အထူးလိုအပ်သည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "23 – 28 MPa (230 – 280 bar)",
      "pressureMax": "160 MPa (1,600 bar)",
      "notesMm": "Delphi Common Rail စနစ်"
    },
    "fluids": {
      "oilWithFilter": "7.1 L",
      "oilWithoutFilter": "6.4 L",
      "oilGrade": "10W-30 / 15W-40 (API CH-4 / CI-4)",
      "coolantCapacity": "9.5 L",
      "fuelTankCapacity": "65 L"
    }
  },
  {
    "id": "korea-d4fb",
    "brand": "ISUZU",
    "code": "D4FB (1.6L U2 CRDi)",
    "series": "COMPACT_DIESEL",
    "seriesTitle": "Hyundai & Kia Compact Diesel (1.6L U2)",
    "seriesTitleMm": "ကိုရီးယား ဒီဇယ်ကားငယ်များ (1.6L U2 D4FB CRDi)",
    "name": "1.6L DOHC 16-Valve Variable Geometry Turbo CRDi (Accent / Pride / Soul / Avante)",
    "nameMm": "၁.၆ လီတာ DOHC ၁၆ ဗား VGT ကွန်မန်ရေးလ် ဒီဇယ် (Accent / Pride / Soul / Avante)",
    "type": "Inline-4 DOHC 16-Valve Common Rail Turbocharged Intercooler Clean Diesel",
    "typeMm": "၄ လုံးထိုး DOHC ၁၆ ဗား ခေတ်သစ် ကိုရီးယား ဒီဇယ်ဆလွန်းနှင့် ဟက်ချ်ဘတ် ကားငယ်အင်ဂျင်",
    "fuelSystem": "Bosch High-Pressure Common Rail System (1,600 – 1,800 bar)",
    "fuelSystemMm": "Bosch ဖိအားမြင့် ကွန်မန်ရေးလ် စနစ် (1,600 – 1,800 bar)",
    "displacementCc": 1582,
    "boreStrokeMm": "77.2 mm × 84.5 mm",
    "cylinders": 4,
    "valvesPerCyl": 4,
    "compressionRatio": "17.3:1",
    "firingOrder": "1 - 3 - 4 - 2",
    "powerOutput": "128 PS @ 4,000 RPM",
    "torqueOutput": "260 N·m @ 1,900–2,750 RPM",
    "timingType": "Chain",
    "timingTypeMm": "တိုက်မင်ကြိုး ၂ ထပ်စနစ် (Upper & Lower Timing Chain)",
    "commonVehicles": [
      "Hyundai Accent Diesel",
      "Kia Pride Diesel",
      "Kia Soul Diesel",
      "Hyundai Avante / Elantra Diesel",
      "Kia Cerato / Forte Diesel",
      "Hyundai i30 Diesel"
    ],
    "commonVehiclesMm": "Hyundai Accent ဒီဇယ်၊ Kia Pride၊ Kia Soul၊ Avante ဒီဇယ်၊ Kia Cerato၊ i30",
    "valveClearance": {
      "intakeColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "exhaustColdMm": "Hydraulic Auto Lash Adjuster (HLA)",
      "methodMm": "Hydraulic Lash Adjuster (ဟိုက်ဒရောလစ် အလိုအလျောက်ညှိစနစ် - ဘားချိန်ရန်မလို)"
    },
    "tighteningTorques": [
      {
        "component": "Cylinder Head Bolts (Step 1)",
        "componentMm": "ဆလင်ဒါခေါင်းဘルト (အဆင့် ၁)",
        "nm": 30,
        "kgfCm": 306,
        "lbfFt": 22.1,
        "notesMm": "အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ"
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
        "notesMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)"
      },
      {
        "component": "Main Bearing Cap Bolts",
        "componentMm": "ခရိုင်းကပ် ဘルトများ",
        "nm": "25 + 90°",
        "kgfCm": "255 + 90°",
        "lbfFt": "18.5 + 90°"
      },
      {
        "component": "Connecting Rod Cap Bolts",
        "componentMm": "ကွန်ရော့ကပ် ဘルトများ",
        "nm": "15 + 90°",
        "kgfCm": "153 + 90°",
        "lbfFt": "11 + 90°"
      },
      {
        "component": "Crankshaft Pulley Bolt",
        "componentMm": "ခရိုင်းပူးလီး ဘルトကြီး",
        "nm": 235,
        "kgfCm": 2400,
        "lbfFt": 173
      },
      {
        "component": "Camshaft Sprocket Bolt",
        "componentMm": "ကမ်ရှပ် စပရော့ကတ် ဘルト",
        "nm": 70,
        "kgfCm": 714,
        "lbfFt": 51.6
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
        "nm": 35,
        "kgfCm": 357,
        "lbfFt": 25.8
      }
    ],
    "headTighteningSteps": [
      {
        "step": 1,
        "description": "Torque all 10 head bolts from center outward to 30 N·m",
        "descriptionMm": "ခေါင်းဘルトများကို အလယ်မှစ၍ ၃၀ N·m ကျပ်ပါ",
        "torque": "30 N·m"
      },
      {
        "step": 2,
        "description": "Turn each bolt 90° clockwise",
        "descriptionMm": "ထောင့် ၉၀ ဒီဂရီ လှည့်ကျပ်ပါ",
        "torque": "+90°"
      },
      {
        "step": 3,
        "description": "Turn each bolt another 90° clockwise (total 180°)",
        "descriptionMm": "နောက်ထပ် ထောင့် ၉၀ ဒီဂရီ ထပ်မံလှည့်ပါ (စုစုပေါင်း ၁၈၀°)",
        "torque": "+90°"
      }
    ],
    "headBoltsCount": 10,
    "timingMarksGuide": {
      "crankshaft": "Align crankshaft sprocket mark with timing pointer at 0° TDC.",
      "crankshaftMm": "ခရိုင်းရှပ် စပရော့ကတ် အမှတ်ကို 0° TDC ချိန်ပါ။",
      "camshaft": "Intake and exhaust camshaft dots aligned with colored links on upper chain.",
      "camshaftMm": "ကမ်ရှပ် အမှတ်များကို အပေါ်ချိန်ကြိုး အရောင်ကွင်းများနှင့် တိုက်ဆိုင်ပါ။",
      "pump": "High pressure pump drive sprocket chain alignment.",
      "pumpMm": "ဖိအားမြင့်ဆီပန့် ချိန်ကြိုး တိုက်ဆိုင်ချိန်ညှိပါ။",
      "notesMm": "ဆီစားအလွန်သက်သာသော ကိုရီးယား ဒီဇယ်ကားငယ် အင်ဂျင်ဖြစ်ပြီး တိုက်မင်ကြိုး ၂ ထပ်စနစ် ဖြစ်ပါသည်။"
    },
    "fuelSystemSpecs": {
      "pressureIdle": "25 – 30 MPa (250 – 300 bar)",
      "pressureMax": "180 MPa (1,800 bar)",
      "notesMm": "Bosch High-Pressure Common Rail စနစ်"
    },
    "fluids": {
      "oilWithFilter": "5.3 L",
      "oilWithoutFilter": "4.8 L",
      "oilGrade": "5W-30 (ACEA C3 Low SAPS)",
      "coolantCapacity": "6.5 L",
      "fuelTankCapacity": "43 L / 50 L"
    }
  }
];
