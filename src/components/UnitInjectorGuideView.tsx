import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  SlidersHorizontal, 
  BookOpen, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  Cpu,
  Layers,
  Wrench,
  ArrowLeft,
  Truck,
  Info,
  RotateCw,
  Target,
  Eye,
  Compass,
  Sparkles,
  HelpCircle,
  Activity,
  ShieldCheck,
  Cog,
  Droplets,
  Gauge,
  Flame
} from 'lucide-react';

interface Props {
  initialEngineId?: string;
  onBackToEngines?: () => void;
}

interface OverlapPair {
  overlapCyl: string;
  adjustCyl: string;
  adjustDetails: string;
  note: string;
}

interface FiringOrderStep {
  step: number;
  flywheelMark: string;
  cylToAdjust: string;
  valvesAndInjector: string;
  detailsMm: string;
}

interface InjectorEngineDetail {
  id: string;
  name: string;
  country: string;
  flag: string;
  system: string;
  systemFullName: string;
  displacement: string;
  cylinders: string;
  firingOrder: string;
  valveClearance: {
    intakeMm: string;
    exhaustMm: string;
    jakeBrakeMm?: string;
  };
  methodTitle: string;
  locknutTorque: string;
  summaryMm: string;
  steps: string[];
  notesMm: string;
  vehicleExample: string;
  overlapGuide: {
    ruleName: string;
    explanationMm: string;
    pairs: OverlapPair[];
  };
  firingOrderSequence: FiringOrderStep[];
  timingMarks: {
    flywheelLocation: string;
    camshaftLocation: string;
    howToAlignMm: string;
  };
  emergencyNoToolMethod: {
    title: string;
    toolsReplaced: string;
    fieldTechniqueMm: string[];
    precautionsMm: string;
  };
}

const UNIT_INJECTOR_ENGINES: InjectorEngineDetail[] = [
  {
    id: 'scania-124g',
    name: 'Scania 124G / 114G (DC12 / DSC12)',
    country: 'Sweden',
    flag: '🇸🇪',
    system: 'PDE',
    systemFullName: 'Scania PDE Electronic Unit Injector (1,800–2,000 bar)',
    displacement: '11,705 cc (11.7L)',
    cylinders: '6-Cylinder In-line',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.45 mm (အေးချိန်)',
      exhaustMm: '0.70 mm (အေးချိန်)'
    },
    methodTitle: 'Bottom Out ➔ Back-off 66° (၆၆ ဒီဂရီ ပြန်လျှော့နည်း)',
    locknutTorque: '39 N·m (4.0 kgf·m / 29 lbf·ft)',
    summaryMm: 'အောက်ဆုံးထိ စကရူထောက်ပြီး ၆၆ ဒီဂရီ (၀.၇၅ မီလီခန့်) ပြန်လျှော့ပါ',
    steps: [
      'ဆလင်ဒါတစ်ခုချင်းစီ၏ ကမ်ရှပ်ရော့ကာရိုလာ (Roller) အောက်ခြေသို့ရောက်ပြီး ကမ်လော့အမြင့်ဆုံးဖိထားချိန် (Cam Peak Lift) ထိ အင်ဂျင်ဖလိုင်းဝီး လှည့်ပါ။',
      'နော်ဇယ်ထိပ်က Adjusting Screw ကို လက်ဖြင့် သို့မဟုတ် ဂွဖြင့် Zero Lash (အောက်ဆုံးထိ သွားမရတော့သည်အထိ) တင်းတင်းကျပ်ကျပ် ထောက်ပါ။',
      'ထိုအနေအထားမှ ထောင့် ၆၆ ဒီဂရီ (၆၆° - သို့မဟုတ် စကရူ ၃ ပုံ ၂ ပုံခန့် / ၀.၇၅ မီလီ) နောက်သို့ တိကျစွာ ပြန်လျှော့ပါ (Turn Back)။',
      'ချိန်ထားသော စကရူမရွေ့စေဘဲ Locknut (လော့နတ်) ကို ၃၉ N·m ဖြင့် ကျပ်ပါ။'
    ],
    notesMm: 'မြန်မာပြည် ရန်ကုန်-မန္တလေး အဝေးပြေး VIP Express (Elite, JJ, ရွှေမန္တလာ) နှင့် ၁၂၄G တွဲကားများ၏ ဒဏ္ဍာရီအင်ဂျင် ဖြစ်ပါသည်။',
    vehicleExample: 'Scania 124G 360 / 420, 114G 380, K124EB VIP Coach',
    overlapGuide: {
      ruleName: 'စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7 - ပေါင်းလဒ် ၇ နိယာမ)',
      explanationMm: 'ဖလိုင်းဝီးအမှတ်တန်း ရှာမရသည့် အခြေအနေတွင် ဆလင်ဒါတစ်ခု၏ အဆို့ရှင်နှစ်ခု Overlap ဖြစ်ချိန် (အထွက်ပိတ်စ အဝင်ပွင့်စ ကခုန်ချိန်) တွင် ၎င်းနှင့် စုံတွဲဆလင်ဒါကို TDC Compression ရောက်နေသဖြင့် အဝင်/အထွက်ဘားနှင့် အင်ဂျက်တာ ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင်ဘား (0.45mm)၊ အထွက်ဘား (0.70mm) နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်ဘား၊ အထွက်ဘား နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်ဘား၊ အထွက်ဘား နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်ဘား၊ အထွက်ဘား နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်ဘား၊ အထွက်ဘား နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်ဘား၊ အထွက်ဘား နှင့် PDE နော်ဇယ် ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'TDC Down (0°)', cylToAdjust: 'ဆလင်ဒါ ၁', valvesAndInjector: 'Intake + Exhaust + PDE 1', detailsMm: 'No. 1 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 2, flywheelMark: '120° လှည့်ပြီး (V5)', cylToAdjust: 'ဆလင်ဒါ ၅', valvesAndInjector: 'Intake + Exhaust + PDE 5', detailsMm: 'No. 5 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 3, flywheelMark: '240° လှည့်ပြီး (V3)', cylToAdjust: 'ဆလင်ဒါ ၃', valvesAndInjector: 'Intake + Exhaust + PDE 3', detailsMm: 'No. 3 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 4, flywheelMark: '360° (TDC Up)', cylToAdjust: 'ဆလင်ဒါ ၆', valvesAndInjector: 'Intake + Exhaust + PDE 6', detailsMm: 'No. 6 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 5, flywheelMark: '480° လှည့်ပြီး (V2)', cylToAdjust: 'ဆလင်ဒါ ၂', valvesAndInjector: 'Intake + Exhaust + PDE 2', detailsMm: 'No. 2 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 6, flywheelMark: '600° လှည့်ပြီး (V4)', cylToAdjust: 'ဆလင်ဒါ ၄', valvesAndInjector: 'Intake + Exhaust + PDE 4', detailsMm: 'No. 4 TDC Compression တွင် ဘား ၂ ချောင်းနှင့် နော်ဇယ်ကို ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing အောက်ခြေ/ဘေးဘက် စစ်ဆေးပေါက် (Inspection Window) တွင် TDC, 0°, PMS, V1~V6 ရိုက်ထားပါသည်',
      camshaftLocation: 'ကမ်ရှပ်ဂီယာနှင့် Cylinder Block အမှတ်တန်းများ တည့်နေရပါမည်',
      howToAlignMm: 'Flywheel တူးလ်ဖြင့် အင်ဂျင်ကို ပုံမှန်လည်ပတ်ရာဘက်သို့ လှည့်ပြီး ပေါက်တွင် အမှတ်တန်းကျသည်နှင့် ရော့ကာတံလွတ်/မလွတ် လက်ဖြင့် စစ်ဆေးပါ။'
    },
    emergencyNoToolMethod: {
      title: 'Scania 124G SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း (No Degree Wheel Method)',
      toolsReplaced: 'Scania သီးသန့် 66° Degree Gauge 99 414 မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ - ဖလိုင်းဝီး window မှ သက်ဆိုင်ရာ ဆလင်ဒါ၏ အမှတ်တန်း (ဥပမာ Cyl 1 ချိန်မည်ဆိုပါက V1 အမှတ် သို့မဟုတ် Cyl 6 Overlap ဖြစ်ချိန်) သို့ လှည့်ပါ။ ဆလင်ဒါ ၁ ၏ ကမ်ရှပ်ရော့ကာရိုလာသည် နော်ဇယ်ကို အောက်ခြေသို့ အမြင့်ဆုံးဖိထားချိန် (Cam Peak Lift - ရော့ကာအောက်ဆုံးကျချိန်) ဖြစ်ကြောင်း သေချာစစ်ဆေးပါ။ အခြားဆလင်ဒါ အမှတ်ရောက်နေချိန် စကရူကို လုံးဝ မကိုင်ရပါ!',
        '၂။ နတ်မျက်နှာပြင် Flats စနစ်ဖြင့် ချိန်နည်း - ဂွမ်းသီးလော့နတ်သည် ၆ မျက်နှာ (Hexagon) ဖြစ်သဖြင့် မျက်နှာတစ်ခုလျှင် ၆၀ ဒီဂရီ (60°) ရှိသည်။ စကရူကို အောက်ဆုံးထိ လက်ဖြင့် ကစားအားမရှိတော့သည်အထိ ထောက်ပါ။ ထို့နောက် မျက်နှာပြင် ၁ ကွက် (60°) နှင့် အနည်းငယ် (၆ ဒီဂရီခန့် = စကရူခေါင်းတွင် သံချောင်း/အမှတ်ခြစ်၍ ၁ ပုံ ၁၀ ပုံခန့်) နောက်သို့ ပြန်လျှော့ပါက ၆၆ ဒီဂရီ တိကျစွာ ရရှိပါသည်။',
        '၃။ စကရူပတ်လမ်း Thread Pitch တွက်ချက်နည်း - Scania PDE Adjusting screw ၏ Thread pitch သည် 1.0 mm ဖြစ်ပါသည်။ ၃၆၀ ဒီဂရီ တစ်ပတ်ပြည့်လျှင် ၁ မီလီရွေ့သဖြင့် ၆၆ ဒီဂရီသည် ၀.၇၅ မီလီ (0.75 mm) ခန့် စကရူပွရွေ့လျားမှု ဖြစ်ပါသည်။ Feeler Gauge 0.75 mm ပြားကို စကရူအောက်ခံပြားနှင့် ကြားခံထည့်၍ ချိန်ညှိနိုင်ပါသည်။',
        '၄။ ချိန်ပြီးပါက စကရူကို ဂွဖြင့် မရွေ့အောင် သေချာထိန်းကိုင်ထားပြီးမှ Locknut ကို ၃၉ N·m ဖြင့် တင်းကျပ်စွာ ကျပ်ပါ။'
      ],
      precautionsMm: '၆၆ ဒီဂရီထက် ပိုကြပ်လျှင် အင်ဂျင်ပူလာပါက နော်ဇယ်ပလန်ဂျာအောက်ခြေထိပြီး နော်ဇယ်ခေါင်းကျိုးထွက်တတ်ပါသည်။ လျှော့လွန်းပါက မီးခိုးမည်းထွက်ပြီး အင်ဂျင်ဆွဲအားကျသွားပါမည်။'
    }
  },
  {
    id: 'volvo-d12',
    name: 'Volvo FH12 / FM12 (D12 / D9 / D16)',
    country: 'Sweden',
    flag: '🇸🇪',
    system: 'Delphi EUI',
    systemFullName: 'Lucas / Delphi Electronic Unit Injector (2,000 bar)',
    displacement: '12,130 cc (12.1L)',
    cylinders: '6-Cylinder In-line (OHC)',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.20 mm (အေးချိန်)',
      exhaustMm: '0.50 mm (အေးချိန်)',
      jakeBrakeMm: 'VEB Engine Brake: 1.60 mm'
    },
    methodTitle: '5 N·m Bottom Out ➔ Back-off 3–4 Flats (180°–240°)',
    locknutTorque: '45 N·m + 60° (သို့မဟုတ် ၆၅ N·m တင်းကျပ်စွာ)',
    summaryMm: '၅ N·m ဖြင့် အောက်ဆုံးထောက်ပြီး ၃ မှ ၄ Flats (၁၈၀°–၂၄၀°) ပြန်လျှော့ပါ',
    steps: [
      'ကမ်ရှပ်ပေါ်ရှိ ဆလင်ဒါနံပါတ်အမှတ် (ဥပမာ U1~U6) တွင် အင်ဂျက်တာရော့ကာတံ အမြင့်ဆုံးဖိထားချိန်ကို ချိန်ပါ။',
      'အင်ဂျက်တာ ရော့ကာစကရူကို ၅ N·m တော်ခ်ဖြင့် (သို့မဟုတ် လက်ဖြင့် အောက်ဆုံးထိ) တင်းတင်းကျပ်ကျပ် ထောက်ကျပ်ပါ။',
      'ထိုအနေအထားမှ နတ်မျက်နှာပြင် ၃ ကွက် မှ ၄ ကွက် (3–4 Flats = ၁၈၀° မှ ၂၄၀° / ပတ်လည်တစ်ဝက်ခန့်) နောက်သို့ ပြန်လျှော့ပါ။',
      'လော့နတ်ကို ၄၅ N·m + ၆၀° ဖြင့် သေချာစွာ လော့ခတ်ပါ။'
    ],
    notesMm: 'ကမ္ဘာကျော် မိုင်သန်းချီခံ Volvo FH12 / FM12 နှင့် B12R အဝေးပြေးဘတ်စ်ကားများ၏ အသည်းနှလုံး ဖြစ်ပါသည်။',
    vehicleExample: 'Volvo FH12 380/420/460, FM12, FM9 (D9), FH16 (D16)',
    overlapGuide: {
      ruleName: 'Volvo စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7 နိယာမ)',
      explanationMm: 'Volvo ကဲ့သို့ ကမ်ရှပ်အပေါ်တင် (Overhead Camshaft) အင်ဂျင်များတွင် ဖလိုင်းဝီးအမှတ်တန်းအပြင် ကမ်ရှပ်ဖလန့်ပေါ်ရှိ မျဉ်းအမှတ်များဖြင့် စုံတွဲဆလင်ဒါကို ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.20mm)၊ အထွက် (0.50mm)၊ VEB Brake (1.60mm) နှင့် EUI 3-4 Flats ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက်၊ VEB Brake နှင့် EUI ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက်၊ VEB Brake နှင့် EUI ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက်၊ VEB Brake နှင့် EUI ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက်၊ VEB Brake နှင့် EUI ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက်၊ VEB Brake နှင့် EUI ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'Camshaft Mark 1 (TDC 0°)', cylToAdjust: 'ဆလင်ဒါ ၁', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 1', detailsMm: 'ကမ်ရှပ်ပေါ်တွင် နံပါတ် ၁ အမှတ်တန်းချိန်တွင် ဆလင်ဒါ ၁ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 2, flywheelMark: 'Camshaft Mark 5 (120°)', cylToAdjust: 'ဆလင်ဒါ ၅', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 5', detailsMm: 'နံပါတ် ၅ အမှတ်တန်းတွင် ဆလင်ဒါ ၅ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 3, flywheelMark: 'Camshaft Mark 3 (240°)', cylToAdjust: 'ဆလင်ဒါ ၃', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 3', detailsMm: 'နံပါတ် ၃ အမှတ်တန်းတွင် ဆလင်ဒါ ၃ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 4, flywheelMark: 'Camshaft Mark 6 (360°)', cylToAdjust: 'ဆလင်ဒါ ၆', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 6', detailsMm: 'နံပါတ် ၆ အမှတ်တန်းတွင် ဆလင်ဒါ ၆ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 5, flywheelMark: 'Camshaft Mark 2 (480°)', cylToAdjust: 'ဆလင်ဒါ ၂', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 2', detailsMm: 'နံပါတ် ၂ အမှတ်တန်းတွင် ဆလင်ဒါ ၂ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' },
      { step: 6, flywheelMark: 'Camshaft Mark 4 (600°)', cylToAdjust: 'ဆလင်ဒါ ၄', valvesAndInjector: 'Intake + Exhaust + VEB + EUI 4', detailsMm: 'နံပါတ် ၄ အမှတ်တန်းတွင် ဆလင်ဒါ ၄ ဘားများနှင့် နော်ဇယ်ကို ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing ပေါ်ရှိ အပေါက်တွင် 0° မှ 360° အထိ ဒီဂရီမှတ်များ ပါဝင်သည်',
      camshaftLocation: 'Camshaft ရှေ့ဖလန့်ပေါ်တွင် 1, 5, 3, 6, 2, 4 နံပါတ်မျဉ်းများနှင့် TDC အမှတ်များ တိုက်ရိုက်ရိုက်ထားပါသည်',
      howToAlignMm: 'ကမ်ရှပ်ပေါ်ရှိ နံပါတ်မျဉ်းသည် Cam bearing cap မျက်နှာပြင်နှင့် တည့်နေပါက ထိုဆလင်ဒါအတွက် အချိန်မှန်ဖြစ်ပါသည်။'
    },
    emergencyNoToolMethod: {
      title: 'Volvo D12 SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း (Flats Counting Method)',
      toolsReplaced: '5 N·m Torque Wrench နှင့် Angle Gauge မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ - ကမ်ရှပ်ဖလန့်ပေါ်ရှိ U1~U6 အမှတ်တန်း (ဥပမာ Cyl 1 ချိန်မည်ဆိုပါက U1 အမှတ် သို့မဟုတ် Cyl 6 Overlap ချိန်) သို့ လှည့်ပါ။ ဆလင်ဒါ ၁ ၏ EUI နော်ဇယ်ရော့ကာရိုလာသည် ကမ်အမြင့်ဆုံးဖိထားချိန် (Cam Peak Lift) ဖြစ်ကြောင်း သေချာစစ်ဆေးပါ။ အမှတ်မတန်းဘဲ စကရူကို လုံးဝ မကိုင်ရပါ!',
        '၂။ နတ်မျက်နှာပြင် (Flats) ရေတွက်နည်း - Volvo တွင် ၆ မျက်နှာနတ် ဖြစ်သဖြင့် 3 Flats = 180° (ပတ်လည်တစ်ဝက်တိတိ)၊ 4 Flats = 240° (ပတ်လည် သုံးပုံ နှစ်ပုံ) ဖြစ်သည်။',
        '၃။ စကရူထောက်ခြင်း - ၅ N·m တော်ခ်ဂွ မရှိလျှင် လက်ချောင်းဖြင့် စကရူကို အောက်ဆုံးထိ သုညကစားအား (Zero lash) ရောက်သည်အထိ တင်းတင်းကျပ်ကျပ် ထောက်ပါ။ ထို့နောက် ပေါ့ပေါ့ပါးပါး ဂွဖြင့် အနည်းငယ်ဖိထောက်ပြီးနောက် မျက်နှာပြင် ၃ ကွက် မှ ၄ ကွက် (၃ မှ ၄ Flats) နောက်သို့ ပြန်လျှော့ပါ။',
        '၄။ D12D / D12C အတွက် အများစုသည် 3.5 Flats (၂၁၀ ဒီဂရီ) တွင် အကောင်းဆုံး အင်ဂျင်ဆွဲအားနှင့် ဆီစားသက်သာမှု ရရှိပါသည်။'
      ],
      precautionsMm: 'ချိန်ညှိပြီးပါက စကရူမရွေ့စေဘဲ Locknut ကို ၆၅ N·m ခန့် တင်းကျပ်စွာ သေချာကျပ်ပေးရပါမည်။ လျော့ရဲပါက မောင်းနေစဉ် ပြုတ်ထွက်နိုင်ပါသည်။'
    }
  },
  {
    id: 'ud-ge13',
    name: 'UD Trucks Quon (Nissan Diesel GE13 / GH11)',
    country: 'Japan',
    flag: '🇯🇵',
    system: 'UD EUI',
    systemFullName: 'UD Trucks / Volvo Group Technology EUI (2,000 bar)',
    displacement: '13,074 cc (13.1L)',
    cylinders: '6-Cylinder In-line',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.35 mm (အေးချိန်)',
      exhaustMm: '0.65 mm (အေးချိန်)',
      jakeBrakeMm: 'UD EEB Brake: 1.50 mm'
    },
    methodTitle: 'Volvo စနစ်အတိုင်း 5 N·m ➔ Back-off 3–4 Flats (180°–240°)',
    locknutTorque: '45 N·m + 60° (သို့မဟုတ် ၆၅ N·m)',
    summaryMm: 'ဂျပန်ကားများထဲတွင် တစ်ခုတည်းသော Volvo အနွယ်တော် Unit Injector အင်ဂျင်',
    steps: [
      'UD Quon GE13 သည် Volvo Group နှင့် ပူးပေါင်းထုတ်လုပ်ထားသဖြင့် Volvo D12 စနစ်နှင့် တစ်ထေရာတည်း တူညီပါသည်။',
      'ကမ်ရှပ်နံပါတ်အမှတ်တွင် အင်ဂျက်တာရော့ကာစကရူကို ၅ N·m (သို့မဟုတ် လက်ဖြင့် အောက်ဆုံးထိ) ထောက်ပါ။',
      'မျက်နှာပြင် ၃ မှ ၄ Flats (၁၈၀° မှ ၂၄၀°) နောက်သို့ ပြန်လျှော့ပါ။',
      'လော့နတ်ကို ၄၅ N·m ကျပ်ပြီး ထောင့် ၆၀ ဒီဂရီ ထပ်မံလှည့်ကျပ်ပါ။'
    ],
    notesMm: 'ဂျပန်ကားကြီးများထဲတွင် သာမန်နော်ဇယ်မဟုတ်ဘဲ EUI နော်ဇယ်တိုက်ပစ်ချိန်ရသည့် တစ်ခုတည်းသော ဂျပန်အင်ဂျင် ဖြစ်ပါသည်။',
    vehicleExample: 'Nissan Diesel UD Quon GE13 (13.0L), GH11 (10.8L)',
    overlapGuide: {
      ruleName: 'UD Quon စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7 နိယာမ)',
      explanationMm: 'UD Quon တွင် Flywheel အမှတ်တန်းများအပြင် ကမ်ရှပ်အမှတ်များဖြင့် စုံတွဲဆလင်ဒါ Overlap စနစ်အတိုင်း အလွယ်တကူ ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.35mm)၊ အထွက် (0.65mm) နှင့် EUI ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက် နှင့် EUI ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက် နှင့် EUI ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက် နှင့် EUI ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက် နှင့် EUI ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက် နှင့် EUI ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'Flywheel 1-6 TDC (No. 1 Compression)', cylToAdjust: 'ဆလင်ဒါ ၁', valvesAndInjector: 'Intake + Exhaust + UD EUI 1', detailsMm: 'No. 1 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' },
      { step: 2, flywheelMark: '120° လှည့်ပြီး (No. 5 Compression)', cylToAdjust: 'ဆလင်ဒါ ၅', valvesAndInjector: 'Intake + Exhaust + UD EUI 5', detailsMm: 'No. 5 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' },
      { step: 3, flywheelMark: '240° လှည့်ပြီး (No. 3 Compression)', cylToAdjust: 'ဆလင်ဒါ ၃', valvesAndInjector: 'Intake + Exhaust + UD EUI 3', detailsMm: 'No. 3 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' },
      { step: 4, flywheelMark: '360° လှည့်ပြီး (No. 6 Compression)', cylToAdjust: 'ဆလင်ဒါ ၆', valvesAndInjector: 'Intake + Exhaust + UD EUI 6', detailsMm: 'No. 6 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' },
      { step: 5, flywheelMark: '480° လှည့်ပြီး (No. 2 Compression)', cylToAdjust: 'ဆလင်ဒါ ၂', valvesAndInjector: 'Intake + Exhaust + UD EUI 2', detailsMm: 'No. 2 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' },
      { step: 6, flywheelMark: '600° လှည့်ပြီး (No. 4 Compression)', cylToAdjust: 'ဆလင်ဒါ ၄', valvesAndInjector: 'Intake + Exhaust + UD EUI 4', detailsMm: 'No. 4 အဝင်၊ အထွက်ဘားနှင့် EUI နော်ဇယ် ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing ပေါ်ရှိ Inspection window တွင် 1/6, 2/5, 3/4 TDC အမှတ်များ ရိုက်ထားပါသည်',
      camshaftLocation: 'Cam gear ပေါ်တွင် အမှတ်တန်းများ ပါရှိပါသည်',
      howToAlignMm: 'Flywheel turning gear tool ဖြင့် လှည့်ကာ သက်ဆိုင်ရာ ဆလင်ဒါ၏ TDC အမှတ်တန်းရောက်ချိန်တွင် ချိန်ညှိပါ။'
    },
    emergencyNoToolMethod: {
      title: 'UD Quon GE13 SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း',
      toolsReplaced: 'Special Angle Gauge မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ Volvo နည်းအတိုင်း နတ်မျက်နှာပြင် (Flats) စနစ်ကို တိုက်ရိုက်အသုံးပြုပါ။',
        '၂။ စကရူကို လက်ဖြင့် အောက်ဆုံးထိ သုညကစားအားအထိ ထောက်ပြီး နတ်မျက်နှာပြင် ၃ မှ ၄ Flats (၁၈၀° မှ ၂၄၀°) နောက်သို့ ပြန်လျှော့ပါ။',
        '၃။ ဂျပန်ဝပ်ရှော့အများစုတွင် 3 Flats (၁၈၀ ဒီဂရီ) ပြန်လျှော့ပြီး လော့နတ်ကို ၆၀ N·m တင်းကျပ်စွာ ကျပ်လေ့ရှိပါသည်။'
      ],
      precautionsMm: 'UD ကားများသည် သာမန်ဂျပန်ကားများကဲ့သို့ နော်ဇယ်လွတ်ထည့်ထားခြင်းမဟုတ်ဘဲ ရော့ကာတံဖိအားဖြင့် မောင်းသဖြင့် လော့နတ်ကျပ်အား လျော့ရဲမသွားစေရန် အထူးဂရုပြုပါ။'
    }
  },
  {
    id: 'cat-c15',
    name: 'Caterpillar CAT C15 / 3406E',
    country: 'USA',
    flag: '🇺🇸',
    system: 'MEUI',
    systemFullName: 'Caterpillar Mechanical Electronic Unit Injector (2,100 bar)',
    displacement: '15,200 cc (15.2L)',
    cylinders: '6-Cylinder In-line',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.38 ± 0.08 mm (0.015 in)',
      exhaustMm: '0.76 ± 0.08 mm (0.030 in)',
      jakeBrakeMm: 'Jake Brake Slave Piston: 0.69 mm (0.027 in)'
    },
    methodTitle: 'Cat Injector Height Gauge (78.0 ± 0.2 mm)',
    locknutTorque: '100 ± 10 N·m (75 ± 7 lbf·ft)',
    summaryMm: 'Cat Tool 9U-7227 အမြင့်တိုင်းကိရိယာဖြင့် 78.0 mm အတိအကျ ချိန်ညှိပါ',
    steps: [
      'သက်ဆိုင်ရာ ဆလင်ဒါ၏ Intake Valve ပိတ်ပြီးချိန် (Compression Stroke) တွင် ချိန်ညှိရပါမည်။',
      'Cat သီးသန့် အမြင့်တိုင်းတူးလ် (Height Gauge Tool 9U-7227) ကို ဆလင်ဒါခေါင်းမျက်နှာပြင်ပေါ်တွင် ထောက်ပါ။',
      'Injector Follower ၏ ပခုံးစွန်း (Shoulder) ပေါ်တွင် တိုင်းကိရိယာအပြား တည့်တည့်ထိနေစေရန် စကရူကို လှည့်ညှိပါ။',
      'အကွာအဝေး 78.0 ± 0.2 mm သေချာပါက Locknut ကို ၁၀၀ N·m (၇၅ lbf·ft) ဖြင့် တင်းကျပ်စွာ ကျပ်ပါ။'
    ],
    notesMm: 'အမေရိကန် Kenworth, Peterbilt တွဲကားကြီးများနှင့် ရေနံတွင်း၊ ကျောက်မိုင်း ယန္တရားကြီးများ၏ ဘုရင် ဖြစ်ပါသည်။',
    vehicleExample: 'CAT C15 ACERT, CAT 3406E, CAT C12, CAT C13',
    overlapGuide: {
      ruleName: 'CAT C15 စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7 နိယာမ)',
      explanationMm: 'CAT C15 တွင် Flywheel Timing Pin ထိုးရန် မလွယ်ကူသည့်အခါ အိုဘာလက်ပ်စနစ်ဖြင့် ဆလင်ဒါ ၆ လုံးစလုံးကို မမှားအောင် ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.38mm)၊ အထွက် (0.76mm) နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.0mm ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'TC 1-6 (Pin in Flywheel - No. 1 Compression)', cylToAdjust: 'ဆလင်ဒါ ၁, ၂, ၄ (Valves) & ၃, ၅, ၆ (Injectors)', valvesAndInjector: '2-Turn Cat Method', detailsMm: 'No. 1 TDC တွင် Intake 1,2,4 / Exhaust 1,3,5 နှင့် Injectors 3,5,6 ကို ချိန်ပါ' },
      { step: 2, flywheelMark: '360° လှည့်ပြီး (Pin in Flywheel - No. 6 Compression)', cylToAdjust: 'ဆလင်ဒါ ၃, ၅, ၆ (Valves) & ၁, ၂, ၄ (Injectors)', valvesAndInjector: '2-Turn Cat Method', detailsMm: 'No. 6 TDC တွင် Intake 3,5,6 / Exhaust 2,4,6 နှင့် Injectors 1,2,4 ကို ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing လက်ယာဘက်တွင် 3/8" Bolt Timing Pin ထိုးပေါက် ပါရှိသည်',
      camshaftLocation: 'Camshaft Gear အနောက်ဘက် Cylinder Head Face တွင် Cam Timing Pin အပေါက် ပါရှိသည်',
      howToAlignMm: 'Flywheel ကို လှည့်ပြီး 3/8" bolt တံ ထိုးပေါက်ထဲ ကွက်တိဝင်သွားချိန်သည် TDC အတိအကျ ဖြစ်ပါသည်။'
    },
    emergencyNoToolMethod: {
      title: 'CAT C15 SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း (Vernier Depth Gauge Method)',
      toolsReplaced: 'Cat သီးသန့် အမြင့်တိုင်းတူးလ် 9U-7227 မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ - Flywheel Housing ၏ 3/8" Bolt Timing Pin အပေါက်ထဲသို့ ပင်တံဝင်သည်အထိ လှည့်ပါ။ ဆလင်ဒါ ၁ ၏ Intake Valve ပိတ်ပြီးနောက် TDC Compression ဖြစ်ကြောင်း သေချာစစ်ဆေးပါ။ (ဆလင်ဒါ ၆ ပေါက်ကွဲချိန် ဖြစ်နေပါက အင်ဂျက်တာ ချိန်နည်း မှားသွားပါမည်)!',
        '၂။ Caliper Depth Bar ဖွင့်ခြင်း - သာမန် Vernier Caliper (ဗာနီယာ) ၏ အမြီးဘက်ရှိ Depth Bar (အတိမ်အနက်တိုင်းတံ) ကို 78.0 mm အတိအကျ ဖွင့်ပြီး လော့ခတ်ပါ။',
        '၃။ တိုင်းတာထောက်ခြင်း - ဗာနီယာအောက်ခြေမျက်နှာပြင်ကို Cylinder Head ၏ နော်ဇယ်စိုက်သည့် အပြားမျက်နှာပြင်ပေါ်တွင် ထောက်ပြီး၊ ဒက်သ်တံထိပ်ကို Injector Follower Shoulder (ပခုံးစွန်းအပြား) ပေါ်သို့ ထောက်ပါ။',
        '၄။ စကရူလှည့်ပြီး လော့ခတ်ခြင်း - စကရူကို လှည့်၍ ဗာနီယာတံထိပ်နှင့် အင်ဂျက်တာပခုံး ထိစပ်ရုံ အနေအထား (Slight Drag) တွင် ရပ်ပြီး Locknut ကို ၁၀၀ N·m ကျပ်ပါ။ (သို့မဟုတ် 78.0 mm အတိအကျ ဖြတ်ထားသော စတီးပြားတုံးကို တိုင်းကိရိယာအဖြစ် ကြားခံသုံးနိုင်ပါသည်)။'
      ],
      precautionsMm: 'CAT C15 တွင် အမြင့်မှားယွင်းပါက နော်ဇယ်မီးခိုးမည်းထွက်ခြင်း၊ ဆီဖိအားမပြည့်ခြင်းနှင့် နော်ဇယ် follower ကျိုးထွက်ခြင်း ဖြစ်တတ်သဖြင့် 78.0 mm ကို အထူးသတိထားပါ။'
    }
  },
  {
    id: 'detroit-s60',
    name: 'Detroit Diesel Series 60 (12.7L / 14.0L)',
    country: 'USA',
    flag: '🇺🇸',
    system: 'DDEC EUI',
    systemFullName: 'Detroit Diesel DDEC Electronic Unit Injector (2,000 bar)',
    displacement: '12,700 cc / 14,000 cc (12.7L & 14.0L)',
    cylinders: '6-Cylinder In-line (OHC)',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.20 mm (0.008 in)',
      exhaustMm: '0.51 mm (0.020 in)',
      jakeBrakeMm: 'Jake Brake: 0.51 mm ~ 0.66 mm'
    },
    methodTitle: 'Height Gauge Pin (78.2 mm သို့မဟုတ် 80.3 mm)',
    locknutTorque: '55 N·m (41 lbf·ft)',
    summaryMm: 'Height Gauge Pin တံလေးဖြင့် Follower ထိပ်အမြင့်ကို ချိန်ညှိပါ',
    steps: [
      'အင်ဂျင်မော်ဒယ်အလိုက် သတ်မှတ်ထားသော Height Gauge Pin (၇၈.၂ မမ သို့မဟုတ် ၈၀.၃ မမ) ကို အသုံးပြုပါ။',
      'Injector Body အပေါက်ထဲသို့ Gauge Pin ထိုးသွင်းပြီး စကရူကို လှည့်၍ ချိန်ပါ။',
      'Gauge Pin သည် အနည်းငယ် ပွတ်တိုက်ရုံ (Slight drag) ဖြင့် ဝင်ထွက်နိုင်သည့် အနေအထားတွင် စကရူကို ရပ်ပါ။',
      'လော့နတ်ကို ၅၅ N·m ဖြင့် ကျပ်ပါ။'
    ],
    notesMm: 'အမေရိကန် Freightliner, Western Star တွဲကားများတွင် မိုင်သန်းချီ အကြမ်းခံခဲ့သော ဒဏ္ဍာရီအင်ဂျင် ဖြစ်ပါသည်။',
    vehicleExample: 'Detroit Diesel Series 60 (12.7L DDEC III/IV & 14.0L DDEC V)',
    overlapGuide: {
      ruleName: 'Detroit Series 60 စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7)',
      explanationMm: 'အမေရိကန် တွဲကားကြီးများတွင် ဖလိုင်းဝီးအမှတ် ရှာမရပါက Overlap စနစ်ဖြင့် အင်ဂျက်တာနှင့် ဘားများကို တိကျစွာ ချိန်ညှိနိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.20mm)၊ အထွက် (0.51mm) နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာအမြင့် 78.2mm ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'Flywheel Timing Pin (No. 1 TDC)', cylToAdjust: 'ဆလင်ဒါ ၁ (Valves & Injector)', valvesAndInjector: 'Cyl 1 Intake, Exhaust & Injector', detailsMm: 'No. 1 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 2, flywheelMark: '120° လှည့်ပြီး', cylToAdjust: 'ဆလင်ဒါ ၅ (Valves & Injector)', valvesAndInjector: 'Cyl 5 Intake, Exhaust & Injector', detailsMm: 'No. 5 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 3, flywheelMark: '240° လှည့်ပြီး', cylToAdjust: 'ဆလင်ဒါ ၃ (Valves & Injector)', valvesAndInjector: 'Cyl 3 Intake, Exhaust & Injector', detailsMm: 'No. 3 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 4, flywheelMark: '360° လှည့်ပြီး', cylToAdjust: 'ဆလင်ဒါ ၆ (Valves & Injector)', valvesAndInjector: 'Cyl 6 Intake, Exhaust & Injector', detailsMm: 'No. 6 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 5, flywheelMark: '480° လှည့်ပြီး', cylToAdjust: 'ဆလင်ဒါ ၂ (Valves & Injector)', valvesAndInjector: 'Cyl 2 Intake, Exhaust & Injector', detailsMm: 'No. 2 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 6, flywheelMark: '600° လှည့်ပြီး', cylToAdjust: 'ဆလင်ဒါ ၄ (Valves & Injector)', valvesAndInjector: 'Cyl 4 Intake, Exhaust & Injector', detailsMm: 'No. 4 TDC တွင် ဘား ၂ ချောင်းနှင့် အင်ဂျက်တာကို ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing ဘေးဘက်တွင် Timing Pointer နှင့် Flywheel အမှတ်တန်းများ ရှိသည်',
      camshaftLocation: 'Camshaft Gear ပေါ်တွင် Diamond (စိန်ပုံ) နှင့် Triangle (တြိဂံ) အမှတ်များ ရှိသည်',
      howToAlignMm: 'Flywheel 0° TDC တွင် Cam gear ၏ diamond အမှတ်သည် thrust plate အမှတ်နှင့် တည့်နေရပါမည်။'
    },
    emergencyNoToolMethod: {
      title: 'Detroit S60 SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း',
      toolsReplaced: 'Detroit သီးသန့် Gauge Pin J-35667-A (78.2mm) မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ - Flywheel pointer နှင့် Cam gear timing diamond အမှတ်တန်းကျအောင် အရင်လှည့်ပါ။ သက်ဆိုင်ရာ ဆလင်ဒါ၏ Intake Valve ပိတ်ပြီးချိန် (Compression Stroke) ဖြစ်ကြောင်း သေချာစစ်ဆေးပါ။ အမှတ်မကျဘဲ စကရူကို လုံးဝ မကိုင်ရပါ!',
        '၂။ Gauge Pin သို့မဟုတ် Depth Bar တိုင်းနည်း - Gauge Pin မရှိပါက 5/32" Allen Key သို့မဟုတ် သင့်တော်သော စတီးပင်တံကို Caliper ဖြင့် 78.2 mm မှတ်သား၍ သုံးနိုင်ပါသည်။ သို့မဟုတ် သာမန် Caliper Depth Bar ဖြင့် အင်ဂျက်တာ body အပေါက်မှ follower အောက်ခြေအကွာအဝေးကို တိုင်းတာချိန်ညှိနိုင်ပါသည်။',
        '၃။ အင်ဂျင်မော်ဒယ်စစ်ဆေးခြင်း - အင်ဂျင်အဟောင်းများတွင် 78.2 mm သုံးပြီး၊ မော်ဒယ်အသစ် DDEC IV/V အချို့တွင် 80.3 mm သုံးရသဖြင့် အင်ဂျင်ဆာဗစ်တံဆိပ်ပြားကို သေချာဖတ်ပါ။',
        '၄။ လော့နတ်ကို ၅၅ N·m တင်းကျပ်စွာ ကျပ်ပါ။ စကရူမရွေ့စေရန် ဝက်အူလှည့်ဖြင့် သေချာထိန်းကိုင်ပါ။'
      ],
      precautionsMm: 'လော့နတ်ကို ၅၅ N·m တင်းကျပ်စွာ ကျပ်ပါ။ စကရူမရွေ့စေရန် သေချာထိန်းကိုင်ပါ။'
    }
  },
  {
    id: 'cummins-pt',
    name: 'Cummins PT System (NTA855 / KTA19 / KTA38)',
    country: 'USA',
    flag: '🇺🇸',
    system: 'PT System',
    systemFullName: 'Cummins Pressure-Time Mechanical Unit Injector (ဝါယာမပါ စက်မှုစစ်စစ်)',
    displacement: '14,000 cc (NTA855) / 19,000 cc (KTA19)',
    cylinders: '6-Cyl In-line / V12 (KTA38)',
    firingOrder: '1-5-3-6-2-4 (In-line 6)',
    valveClearance: {
      intakeMm: '0.28 mm (0.011 in)',
      exhaustMm: '0.58 mm (0.023 in)'
    },
    methodTitle: 'Torque Method 44–72 in-lb (၅–၈ N·m) / Dial Indicator',
    locknutTorque: '60–65 N·m (45 lbf·ft)',
    summaryMm: 'မီးစက်ကြီးများတွင် အလယ်က နော်ဇယ်ရော့ကာကို တော်ခ်ဖိကျပ် ချိန်ညှိပါ',
    steps: [
      'Cummins မီးစက်ကြီးများ၏ ဆလင်ဒါတစ်ခုစီတွင် ရော့ကာတံ ၃ ချောင်းပါပြီး အလယ်တံသည် အင်ဂျက်တာတိုက်ပစ်တံ ဖြစ်ပါသည်။',
      'အင်ဂျင်ကို အမှတ်တန်းအောင် လှည့်ပြီး သက်ဆိုင်ရာ ဆလင်ဒါ၏ အင်ဂျက်တာစကရူကို လက်ကိုင် Inch-Pound တော်ခ်ဂွဖြင့် ချိန်ပါ။',
      'Torque Method: စကရူကို 44 မှ 72 in-lb (အကြမ်းဖျင်း ၅ မှ ၈ N·m) ရောက်သည်အထိ အောက်ဆုံးထိ ဖိကျပ်ပါ။',
      'Top Stop Injector ဖြစ်ပါက Dial Indicator (ဒိုင်ခွက်ဂေ့ချ်) ဖြင့် Travel အကွာအဝေးကို တိုင်းတာချိန်ညှိပါ။',
      'လော့နတ်ကို ၆၀–၆၅ N·m တင်းကျပ်စွာ ကျပ်ပါ။'
    ],
    notesMm: 'မြန်မာပြည် စက်ရုံ၊ ဆေးရုံ၊ ဟိုတယ်များတွင် အသုံးပြုသော Cummins မီးစက်ကြီးများ၏ အသည်းနှလုံး ဖြစ်ပါသည်။',
    vehicleExample: 'Cummins NTA855, KTA19 (500-650 kVA), KTA38 (V12), KTA50 (V16)',
    overlapGuide: {
      ruleName: 'Cummins NTA855 စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7)',
      explanationMm: 'Cummins မီးစက်ကြီးများတွင် Pulley အမှတ်များ ညစ်ပေနေပါက Overlap စနစ်ဖြင့် အမှားအယွင်းမရှိ ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.28mm)၊ အထွက် (0.58mm) နှင့် အလယ်အင်ဂျက်တာရော့ကာ 44-72 in-lb ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက် နှင့် အလယ်အင်ဂျက်တာရော့ကာ ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက် နှင့် အလယ်အင်ဂျက်တာရော့ကာ ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက် နှင့် အလယ်အင်ဂျက်တာရော့ကာ ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက် နှင့် အလယ်အင်ဂျက်တာရော့ကာ ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက် နှင့် အလယ်အင်ဂျက်တာရော့ကာ ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'Pulley Mark A (1-6 VS)', cylToAdjust: 'ဆလင်ဒါ ၁ သို့မဟုတ် ၆', valvesAndInjector: 'Intake + Exhaust + Injector', detailsMm: 'အမှတ် A တွင် ရော့ကာတံ လွတ်နေသော ဆလင်ဒါ၏ ဘားများနှင့် အလယ်အင်ဂျက်တာကို ချိန်ပါ' },
      { step: 2, flywheelMark: 'Pulley Mark B (2-5 VS)', cylToAdjust: 'ဆလင်ဒါ ၂ သို့မဟုတ် ၅', valvesAndInjector: 'Intake + Exhaust + Injector', detailsMm: 'အမှတ် B တွင် ရော့ကာတံ လွတ်နေသော ဆလင်ဒါကို ချိန်ပါ' },
      { step: 3, flywheelMark: 'Pulley Mark C (3-4 VS)', cylToAdjust: 'ဆလင်ဒါ ၃ သို့မဟုတ် ၄', valvesAndInjector: 'Intake + Exhaust + Injector', detailsMm: 'အမှတ် C တွင် ရော့ကာတံ လွတ်နေသော ဆလင်ဒါကို ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Crankshaft Damper Pulley မျက်နှာပြင်တွင် A, B, C အမှတ်များနှင့် 1-6, 2-5, 3-4 VS (Valve Set) အမှတ်များ ရိုက်ထားသည်',
      camshaftLocation: 'Cam gear timing pin အမှတ်များ ပါဝင်သည်',
      howToAlignMm: 'Pulley ပေါ်ရှိ မျဉ်းအမှတ်သည် Gear Case ပေါ်ရှိ ညွှန်တံ (Pointer) နှင့် ကွက်တိ တည့်နေရပါမည်။'
    },
    emergencyNoToolMethod: {
      title: 'Cummins PT SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း (Finger-Feel Zero Lash Method)',
      toolsReplaced: 'Inch-Pound Torque Wrench မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ (မဖြစ်မနေ စစ်ရန်) - နံပါတ် ၁ ကို ချိန်မည်ဆိုပါက Damper Pulley ၏ Mark A (1-6 VS) အမှတ်တန်း တည့်အောင် အင်ဂျင်ကို အရင်လှည့်ပါ။ အမှတ်တန်းကျရုံနှင့် မပြီးသေးဘဲ ဆလင်ဒါ ၁ ၏ Intake/Exhaust တွန်းတံ (Pushrod) များကို လက်ဖြင့် လှည့်ကြည့်ပါ။ ချောင်လည်နေမှသာ ဆလင်ဒါ ၁ သည် TDC Compression (ချိန်ရန် အဆင်သင့်ဖြစ်သော အနေအထား) ရောက်နေခြင်း ဖြစ်သည်။ (အကယ်၍ Pushrod များ ကျပ်နေပါက ဆလင်ဒါ ၆ နေရာ ရောက်နေခြင်း ဖြစ်သဖြင့် ဖူလီကို ၃၆၀ ဒီဂရီ နောက်တစ်ပတ် ထပ်လှည့်ပါ)။ အမှတ်မကျဘဲ သို့မဟုတ် ဆလင်ဒါ ၃၊ ဆလင်ဒါ ၅ စသည့် အခြားနေရာ ရောက်နေချိန်တွင် စကရူကို လုံးဝ မကိုင်ရပါ!',
        '၂။ အဆင့် (၁) စကရူထောက်ခြင်း - ဆလင်ဒါ ၁ အနေအထား သေချာမှသာ အလယ်က နော်ဇယ်တိုက်ပစ်စကရူကို ဝက်အူလှည့် သို့မဟုတ် လက်ချောင်းဖြင့် Zero lash (အောက်ဆုံးထိ လုံးဝ ချောင်ခြင်းမရှိတော့သည်အထိ) ထောက်ပါ။',
        '၃။ အဆင့် (၂) လက်တွေ့စစ်ဆေးခြင်း - ထိုအနေအထားတွင် လက်ဖြင့် အင်ဂျက်တာရော့ကာတံကို အထက်အောက် လှုပ်ကြည့်ပါက လုံးဝ မလှုပ်တော့ဘဲ တင်းတင်းရင်းရင်း ဖြစ်နေရပါမည်။',
        '၄။ အဆင့် (၃) အနည်းငယ်ဖိကျပ်ပြီး လော့ခတ်ခြင်း - ထိုအနေအထားမှ ဝက်အူလှည့်ဖြင့် ၁၅ ဒီဂရီခန့် (စကရူတစ်စိတ်ခန့်) သာသာလေး ဖိကျပ်ပြီးနောက် စကရူမရွေ့အောင် ဝက်အူလှည့်ဖြင့် သေချာထိန်းကိုင်ကာ လော့နတ်ကို ၆၀ N·m တင်းကျပ်စွာ ကျပ်ပါ။'
      ],
      precautionsMm: 'ဂိတ်နှင့် ချိန်တာတောင် TDC မကျလျှင် လွဲတတ်သဖြင့်၊ လက်ဗလာချိန်သည့်အခါ အင်ဂျင်လည်ပတ်မှု အနေအထား (Crank Position) ကို ပို၍ပင် အထူးဂရုစိုက်ရပါမည်။ အမှတ်မကျဘဲ ဆလင်ဒါမှားချိန်မိပါက နော်ဇယ် Linkage ကျိုးထွက်တတ်သဖြင့် သတိထားပါ။'
    }
  },
  {
    id: 'cummins-isx',
    name: 'Cummins ISX15 / QSX15 (DOHC)',
    country: 'USA',
    flag: '🇺🇸',
    system: 'DOHC EUI',
    systemFullName: 'Cummins Dual Overhead Cam Electronic Unit Injector',
    displacement: '14,900 cc (14.9L)',
    cylinders: '6-Cylinder In-line (DOHC)',
    firingOrder: '1-5-3-6-2-4',
    valveClearance: {
      intakeMm: '0.36 mm (0.014 in)',
      exhaustMm: '0.69 mm (0.027 in)',
      jakeBrakeMm: 'Engine Brake: 7.0 mm (Wedge Tool)'
    },
    methodTitle: '8 N·m (71 in-lb) Bottom Out ➔ Back-off 2 Flats (120°)',
    locknutTorque: '60 N·m (45 lbf·ft)',
    summaryMm: '၈ N·m ဖြင့် အောက်ဆုံးထောက်ပြီး ၂ Flats (၁၂၀ ဒီဂရီ) ပြန်လျှော့ပါ',
    steps: [
      'ISX15 တွင် ကမ်ရှပ် ၂ ချောင်းပါပြီး အနောက်ကမ်ရှပ်က အင်ဂျက်တာကို သီးသန့် မောင်းနှင်ပါသည်။',
      'အင်ဂျက်တာ ရော့ကာစကရူကို ၈ N·m (၇၁ in-lb) တော်ခ်ဖြင့် အောက်ဆုံးထိ ဖိကျပ်ပါ။',
      'ထိုအနေအထားမှ ၂ Flats (၁၂၀ ဒီဂရီ) နောက်သို့ ပြန်လျှော့ပါ။',
      'လော့နတ်ကို ၆၀ N·m တင်းကျပ်စွာ ကျပ်ပါ။'
    ],
    notesMm: 'Cummins ၏ ၆၀၀ မြင်းကောင်ရေ စွမ်းအားရှင် DOHC တွဲကားများနှင့် QSX15 မီးစက်ကြီးများတွင် သုံးပါသည်။',
    vehicleExample: 'Cummins ISX15 / Signature 600, QSX15 Generator',
    overlapGuide: {
      ruleName: 'Cummins ISX15 စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 7)',
      explanationMm: 'ISX15 တွင် DOHC ကမ်ရှပ် ၂ ချောင်း ဖြစ်သော်လည်း Overlap စနစ်ဖြင့် အဝင်/အထွက်ဘားများနှင့် အင်ဂျက်တာကို အမှားကင်းစွာ ချိန်နိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 6 Overlap', adjustCyl: 'No. 1 ချိန်ပါ', adjustDetails: 'Cyl 1 အဝင် (0.36mm)၊ အထွက် (0.69mm) နှင့် အင်ဂျက်တာ 2 Flats back-off ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 5 ချိန်ပါ', adjustDetails: 'Cyl 5 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာ ချိန်ပါ', note: '2 + 5 = 7' },
        { overlapCyl: 'No. 4 Overlap', adjustCyl: 'No. 3 ချိန်ပါ', adjustDetails: 'Cyl 3 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာ ချိန်ပါ', note: '4 + 3 = 7' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 6 ချိန်ပါ', adjustDetails: 'Cyl 6 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာ ချိန်ပါ', note: '1 + 6 = 7' },
        { overlapCyl: 'No. 5 Overlap', adjustCyl: 'No. 2 ချိန်ပါ', adjustDetails: 'Cyl 2 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာ ချိန်ပါ', note: '5 + 2 = 7' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 4 ချိန်ပါ', adjustDetails: 'Cyl 4 အဝင်၊ အထွက် နှင့် အင်ဂျက်တာ ချိန်ပါ', note: '3 + 4 = 7' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'Flywheel Pin Position 1 (No. 1 Compression)', cylToAdjust: 'ဆလင်ဒါ ၁', valvesAndInjector: 'Intake + Exhaust + Injector 1', detailsMm: 'No. 1 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' },
      { step: 2, flywheelMark: '120° လှည့်ပြီး Position 5', cylToAdjust: 'ဆလင်ဒါ ၅', valvesAndInjector: 'Intake + Exhaust + Injector 5', detailsMm: 'No. 5 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' },
      { step: 3, flywheelMark: '240° လှည့်ပြီး Position 3', cylToAdjust: 'ဆလင်ဒါ ၃', valvesAndInjector: 'Intake + Exhaust + Injector 3', detailsMm: 'No. 3 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' },
      { step: 4, flywheelMark: '360° လှည့်ပြီး Position 6', cylToAdjust: 'ဆလင်ဒါ ၆', valvesAndInjector: 'Intake + Exhaust + Injector 6', detailsMm: 'No. 6 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' },
      { step: 5, flywheelMark: '480° လှည့်ပြီး Position 2', cylToAdjust: 'ဆလင်ဒါ ၂', valvesAndInjector: 'Intake + Exhaust + Injector 2', detailsMm: 'No. 2 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' },
      { step: 6, flywheelMark: '600° လှည့်ပြီး Position 4', cylToAdjust: 'ဆလင်ဒါ ၄', valvesAndInjector: 'Intake + Exhaust + Injector 4', detailsMm: 'No. 4 TDC တွင် ဘားများနှင့် အင်ဂျက်တာ ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Flywheel Housing ဘေးဘက် Timing Pin အပေါက်',
      camshaftLocation: 'Camshaft Gear အရှေ့ဘက်တွင် Timing wedges တပ်ဆင်ရန် အမှတ်များ ပါဝင်သည်',
      howToAlignMm: 'Flywheel pin ထိုးပြီး ကမ်ရှပ်နှစ်ခုလုံး၏ timing mark များကို တိုက်ဆိုင်စစ်ဆေးပါ။'
    },
    emergencyNoToolMethod: {
      title: 'Cummins ISX15 SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း',
      toolsReplaced: '8 N·m Torque Wrench မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ စကရူကို လက်ဖြင့် အောက်ဆုံးထိ သုညကစားအား (Zero lash) အထိ တင်းတင်းကျပ်ကျပ် ထောက်ပါ။',
        '၂။ ထိုအနေအထားမှ နတ်မျက်နှာပြင် ၂ ကွက် တိတိ (2 Flats = 120 ဒီဂရီ) နောက်သို့ ပြန်လျှော့ပါ။',
        '၃။ လော့နတ်ကို ၆၀ N·m တင်းကျပ်စွာ ကျပ်ပါ။'
      ],
      precautionsMm: 'ISX15 တွင် 2 Flats ထက် ပိုမလျှော့ပါနှင့်။ ၂ ကွက်ထက် ပိုလျှော့ပါက ဆီစားများပြီး မီးခိုးထွက်ပါမည်။'
    }
  },
  {
    id: 'vw-tdi-pd',
    name: 'VW / Audi 1.9 & 2.0 TDI (Pumpe Düse)',
    country: 'Germany',
    flag: '🇩🇪',
    system: 'Bosch PD',
    systemFullName: 'Bosch Pumpe-Düse Einheit (2,050 bar)',
    displacement: '1,896 cc / 1,968 cc (1.9L & 2.0L)',
    cylinders: '4-Cylinder In-line',
    firingOrder: '1-3-4-2',
    valveClearance: {
      intakeMm: 'Hydraulic Lifters (HLA - အလိုအလျောက် ချိန်ညှိစနစ်)',
      exhaustMm: 'Hydraulic Lifters (HLA - အလိုအလျောက် ချိန်ညှိစနစ်)'
    },
    methodTitle: 'Bottom Out ➔ Back-off 180° (ပတ်လည်တစ်ဝက် ပြန်လျှော့နည်း)',
    locknutTorque: '30 N·m (22 lbf·ft)',
    summaryMm: 'အောက်ဆုံးထိ စကရူထောက်ပြီး ၁၈၀ ဒီဂရီ ပြန်လျှော့ကာ လော့နတ် ၃၀ N·m ကျပ်ပါ',
    steps: [
      'ဘားများသည် Hydraulic Lifter ဖြစ်၍ ချိန်စရာမလိုဘဲ နော်ဇယ်တိုက်ပစ် တစ်ခုတည်းကိုသာ ချိန်ရပါသည်။',
      'Dial Indicator ဂေ့ချ်ကို အင်ဂျက်တာရော့ကာပေါ်ထောက်ပြီး အနိမ့်ဆုံးပွိုင့် (ကမ်လော့အမြင့်ဆုံးဖိချိန်) ရှာပါ။',
      'Adjusting Screw ကို ခံစားသိရှိသည်အထိ အောက်ဆုံးထိ တင်းတင်းကျပ်ကျပ် လှည့်ထောက်ပါ။',
      'ထိုအနေအထားမှ ၁၈၀ ဒီဂရီ (ပတ်လည်တစ်ဝက် - 3 Flats) တိကျစွာ နောက်သို့ ပြန်လျှော့ပါ။',
      'လော့နတ်အသစ်ကို ၃၀ N·m ဖြင့် ကျပ်ပါ။'
    ],
    notesMm: 'ဂျာမနီ အိမ်စီးကားများနှင့် ဗင်ကားများတွင် ဆီစားအလွန်သက်သာပြီး ရုန်းအားဒုံးပျံလိုကောင်းခဲ့သော နာမည်ကျော် အင်ဂျင် ဖြစ်ပါသည်။',
    vehicleExample: 'VW Golf, Passat, Audi A4/A6 1.9 TDI & 2.0 TDI (PD)',
    overlapGuide: {
      ruleName: '၄ လုံးထိုး စုံတွဲဆလင်ဒါ Overlap ချိန်နည်း (Rule of 5 နိယာမ - ပေါင်းလဒ် ၅)',
      explanationMm: '၄ လုံးထိုး TDI တွင် ကမ်ရှပ်ရော့ကာ အနိမ့်ဆုံးဖိချိန်ကို အိုဘာလက်ပ် စုံတွဲဆလင်ဒါဖြင့် လွယ်ကူစွာ ရှာနိုင်ပါသည်။',
      pairs: [
        { overlapCyl: 'No. 4 Overlap (Cam Peak Lift)', adjustCyl: 'No. 1 PD ချိန်ပါ', adjustDetails: 'Cyl 1 Bosch Pumpe Düse နော်ဇယ်ကို အောက်ဆုံးထောက်ပြီး 180° ပြန်လျှော့ပါ', note: '1 + 4 = 5' },
        { overlapCyl: 'No. 2 Overlap', adjustCyl: 'No. 3 PD ချိန်ပါ', adjustDetails: 'Cyl 3 Bosch Pumpe Düse နော်ဇယ်ကို အောက်ဆုံးထောက်ပြီး 180° ပြန်လျှော့ပါ', note: '2 + 3 = 5' },
        { overlapCyl: 'No. 1 Overlap', adjustCyl: 'No. 4 PD ချိန်ပါ', adjustDetails: 'Cyl 4 Bosch Pumpe Düse နော်ဇယ်ကို အောက်ဆုံးထောက်ပြီး 180° ပြန်လျှော့ပါ', note: '1 + 4 = 5' },
        { overlapCyl: 'No. 3 Overlap', adjustCyl: 'No. 2 PD ချိန်ပါ', adjustDetails: 'Cyl 2 Bosch Pumpe Düse နော်ဇယ်ကို အောက်ဆုံးထောက်ပြီး 180° ပြန်လျှော့ပါ', note: '2 + 3 = 5' }
      ]
    },
    firingOrderSequence: [
      { step: 1, flywheelMark: 'No. 1 Injector Rocker Lowest Point', cylToAdjust: 'ဆလင်ဒါ ၁', valvesAndInjector: 'Bosch PD Unit Injector 1', detailsMm: 'နံပါတ် ၁ အင်ဂျက်တာ ရော့ကာအောက်ဆုံးရောက်ချိန်တွင် 180° ပြန်လျှော့ချိန်ပါ' },
      { step: 2, flywheelMark: 'No. 3 Injector Rocker Lowest Point', cylToAdjust: 'ဆလင်ဒါ ၃', valvesAndInjector: 'Bosch PD Unit Injector 3', detailsMm: 'နံပါတ် ၃ အင်ဂျက်တာ ရော့ကာအောက်ဆုံးရောက်ချိန်တွင် 180° ပြန်လျှော့ချိန်ပါ' },
      { step: 3, flywheelMark: 'No. 4 Injector Rocker Lowest Point', cylToAdjust: 'ဆလင်ဒါ ၄', valvesAndInjector: 'Bosch PD Unit Injector 4', detailsMm: 'နံပါတ် ၄ အင်ဂျက်တာ ရော့ကာအောက်ဆုံးရောက်ချိန်တွင် 180° ပြန်လျှော့ချိန်ပါ' },
      { step: 4, flywheelMark: 'No. 2 Injector Rocker Lowest Point', cylToAdjust: 'ဆလင်ဒါ ၂', valvesAndInjector: 'Bosch PD Unit Injector 2', detailsMm: 'နံပါတ် ၂ အင်ဂျက်တာ ရော့ကာအောက်ဆုံးရောက်ချိန်တွင် 180° ပြန်လျှော့ချိန်ပါ' }
    ],
    timingMarks: {
      flywheelLocation: 'Crankshaft Sprocket ပေါ်ရှိ Lock Tool T10050 / T10100 အမှတ်တန်းများ',
      camshaftLocation: 'Camshaft Sprocket အပေါက်တွင် 3359 Pin တံ ထိုးပေါက်',
      howToAlignMm: 'Crankshaft နှင့် Camshaft pin တံများ ဝင်နေချိန်သည် TDC အမှတ် ဖြစ်ပါသည်။'
    },
    emergencyNoToolMethod: {
      title: 'VW TDI PD SST တူးလ်မရှိဘဲ ဗလာချိန်နည်း (Eyeball Rocker Peak Method)',
      toolsReplaced: 'Dial Indicator Gauge မရှိသည့်အခါ',
      fieldTechniqueMm: [
        '၁။ အဆင့် (၀) အင်ဂျင်အနေအထား အရင်စစ်ဆေးပါ - Dial Indicator မရှိပါက အင်ဂျင်ကို ရှေ့တိုးနောက်ဆုတ် အသာအယာ လှည့်ပြီး သက်ဆိုင်ရာ ဆလင်ဒါ၏ ရော့ကာရိုလာတံသည် ကမ်လော့ပေါ်သို့ အမြင့်ဆုံးတက်ကာ နော်ဇယ်ကို အောက်ဆုံးထိ ဖိထားသည့် အနေအထား (Lowest Rocker Travel) ဖြစ်ကြောင်း မျက်စိဖြင့် သေချာစစ်ဆေးပါ။ အခြားဆလင်ဒါအနေအထားတွင် လုံးဝ မကိုင်ရပါ!',
        '၂။ စကရူထောက်ခြင်း - ထိုအနေအထားတွင် Adjusting Screw ကို ဝက်အူလှည့်ဖြင့် Zero lash အောက်ဆုံးထိ တင်းကျပ်စွာ ထောက်ပါ။',
        '၃။ ပြန်လျှော့ခြင်း - ထိုအနေအထားမှ ၁၈၀ ဒီဂရီ (ပတ်လည်တစ်ဝက်တိတိ = 3 Flats) တိကျစွာ နောက်သို့ ပြန်လျှော့ပါ။',
        '၄။ လော့ခတ်ခြင်း - Locknut အသစ်ကို ၃၀ N·m သေချာကျပ်ပါ။'
      ],
      precautionsMm: 'VW TDI တွင် Locknut ပြုတ်ထွက်ပါက Cylinder Head အလူမီနီယမ် ကိုယ်ထည် ပျက်စီးနိုင်သဖြင့် Locknut အဟောင်းကို သေချာစစ်ဆေးပါ (ဖြစ်နိုင်လျှင် အသစ်လဲပါ)။'
    }
  }
];

export const UnitInjectorGuideView: React.FC<Props> = ({ 
  initialEngineId, 
  onBackToEngines 
}) => {
  const [selectedEngineId, setSelectedEngineId] = useState<string>(
    initialEngineId && UNIT_INJECTOR_ENGINES.some(e => e.id === initialEngineId)
      ? initialEngineId
      : 'scania-124g'
  );

  const [activeSubTab, setActiveSubTab] = useState<'injector' | 'overlap' | 'timing' | 'notool' | 'principles'>('injector');
  const [historyOpen, setHistoryOpen] = useState<boolean>(false);

  useEffect(() => {
    if (initialEngineId && UNIT_INJECTOR_ENGINES.some(e => e.id === initialEngineId)) {
      setSelectedEngineId(initialEngineId);
    }
  }, [initialEngineId]);

  const selectedEngine = UNIT_INJECTOR_ENGINES.find(e => e.id === selectedEngineId) || UNIT_INJECTOR_ENGINES[0];

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-1 sm:px-0">
      
      {/* 1. HEADER BANNER */}
      <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3">
            {onBackToEngines && (
              <button
                onClick={onBackToEngines}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition flex items-center gap-1.5 text-xs font-bold border border-slate-700 shadow-md"
                title="ပုံမှန် အင်ဂျင်စာရင်းသို့ ပြန်သွားရန်"
              >
                <ArrowLeft className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">အင်ဂျင်များသို့ ပြန်သွားရန်</span>
              </button>
            )}
            <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
              <Zap className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-extrabold text-white text-base sm:text-lg tracking-wide flex items-center gap-1.5">
                  Unit Injector Tappet (နော်ဇယ်တိုက်ပစ် & ဘားချိန်နည်း အထူးလမ်းညွှန်)
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-bold uppercase tracking-wider">
                  Master Workshop Guide
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                ဆွီဒင် Scania 124G၊ Volvo FH12၊ အမေရိကန် CAT C15၊ Detroit S60 & Cummins မီးစက်ကြီးများ နော်ဇယ်တိုက်ပစ်၊ Overlap စုံတွဲချိန်နည်းနှင့် SST မရှိ ဗလာချိန်နည်းများ
              </p>
            </div>
          </div>

          {onBackToEngines && (
            <button
              onClick={onBackToEngines}
              className="text-xs font-semibold text-amber-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-amber-500/30 transition sm:hidden"
            >
              ← အင်ဂျင်များသို့ ပြန်သွားရန်
            </button>
          )}
        </div>
      </div>

      {/* 2. QUICK ENGINE SELECTOR CHIPS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-lg">
        <div className="text-[11px] font-bold text-slate-400 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            <span>Unit Injector တပ်ဆင်ထားသော အင်ဂျင်ကို ရွေးချယ်ပါ ({UNIT_INJECTOR_ENGINES.length} မျိုး) :</span>
          </span>
          <span className="text-[10px] text-amber-400 font-mono hidden sm:inline">
            လက်ရှိ: {selectedEngine.name} ({selectedEngine.system})
          </span>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-1 no-scrollbar">
          {UNIT_INJECTOR_ENGINES.map((eng) => {
            const isSelected = eng.id === selectedEngineId;
            return (
              <button
                key={eng.id}
                onClick={() => setSelectedEngineId(eng.id)}
                className={`shrink-0 px-3 py-2 rounded-xl text-left border transition text-xs flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{eng.flag}</span>
                <div className="leading-tight">
                  <div className="font-bold whitespace-nowrap">{eng.name}</div>
                  <div className={`text-[10px] font-mono ${isSelected ? 'text-slate-950 font-semibold' : 'text-slate-400'}`}>
                    {eng.system} · {eng.displacement}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. SELECTED ENGINE CARD WITH 4 SUB-TABS */}
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4">
        
        {/* Header Info of the Engine */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="text-3xl">{selectedEngine.flag}</div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{selectedEngine.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {selectedEngine.system}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                {selectedEngine.systemFullName} · <span className="text-slate-300 font-mono font-bold">{selectedEngine.cylinders}</span> · Firing Order: <span className="text-amber-400 font-mono font-bold">{selectedEngine.firingOrder}</span>
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] text-slate-400 block">အသုံးပြုယာဉ်များ:</span>
            <span className="text-xs font-semibold text-slate-200">{selectedEngine.vehicleExample}</span>
          </div>
        </div>

        {/* 4 SUB-TABS NAVIGATION BAR */}
        <div className="flex overflow-x-auto gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 no-scrollbar">
          <button
            onClick={() => setActiveSubTab('injector')}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
              activeSubTab === 'injector'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Zap className={`w-3.5 h-3.5 ${activeSubTab === 'injector' ? 'fill-slate-950' : 'text-amber-400'}`} />
            <span>၁။ နော်ဇယ်တိုက်ပစ် (Pre-load & Height)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('overlap')}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
              activeSubTab === 'overlap'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${activeSubTab === 'overlap' ? 'text-slate-950' : 'text-cyan-400'}`} />
            <span>၂။ အိုဘာလက်ပ် & Firing Order ချိန်နည်း</span>
          </button>

          <button
            onClick={() => setActiveSubTab('timing')}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
              activeSubTab === 'timing'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Target className={`w-3.5 h-3.5 ${activeSubTab === 'timing' ? 'text-slate-950' : 'text-emerald-400'}`} />
            <span>၃။ ဖလိုင်းဝီး & ကမ်ရှပ် မာကင်အမှတ်များ</span>
          </button>

          <button
            onClick={() => setActiveSubTab('notool')}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
              activeSubTab === 'notool'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Wrench className={`w-3.5 h-3.5 ${activeSubTab === 'notool' ? 'text-slate-950' : 'text-rose-400'}`} />
            <span>၄။ SST တူးလ်မရှိ ဗလာချိန်နည်း (Emergency)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('principles')}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition whitespace-nowrap shrink-0 ${
              activeSubTab === 'principles'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-black'
                : 'text-slate-300 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${activeSubTab === 'principles' ? 'text-slate-950 fill-slate-950' : 'text-amber-400'}`} />
            <span>၅။ ကမ်သီးဒီဂရီ & အတွဲလိုက်ချိန်နည်း သဘောတရား (Master Principles)</span>
          </button>
        </div>

        {/* SUB-TAB 1: INJECTOR TAPPET ADJUSTMENT */}
        {activeSubTab === 'injector' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">တိုက်ပစ်ချိန်ညှိနည်း စံချိန်:</span>
                <span className="text-sm font-bold text-emerald-400 font-mono block">
                  {selectedEngine.methodTitle}
                </span>
                <p className="text-[11px] text-slate-300">{selectedEngine.summaryMm}</p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[11px] text-slate-400 block font-medium">Locknut (လော့နတ်) ကျပ်အား တော်ခ်:</span>
                <span className="text-sm font-bold text-cyan-300 font-mono block">
                  {selectedEngine.locknutTorque}
                </span>
                <p className="text-[11px] text-slate-300">ချိန်ပြီးပါက စကရူမရွေ့စေဘဲ လော့နတ်ကို သတ်မှတ်တော်ခ်အတိုင်း သေချာကျပ်ပါ</p>
              </div>
            </div>

            {/* Quick Valve Spec Mini Bar */}
            <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-slate-400">အဝင်အဆို့ (Intake Valve): <strong className="text-blue-400 font-mono">{selectedEngine.valveClearance.intakeMm}</strong></span>
                <span className="text-slate-400">အထွက်အဆို့ (Exhaust Valve): <strong className="text-rose-400 font-mono">{selectedEngine.valveClearance.exhaustMm}</strong></span>
                {selectedEngine.valveClearance.jakeBrakeMm && (
                  <span className="text-slate-400">Jake Brake: <strong className="text-amber-400 font-mono">{selectedEngine.valveClearance.jakeBrakeMm}</strong></span>
                )}
              </div>
              <span className="text-[10px] text-slate-500 font-mono">အေးချိန် စံနှုန်းများ</span>
            </div>

            {/* Step-by-step instructions */}
            <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>လက်တွေ့ ချိန်ညှိနည်း အဆင့်ဆင့်:</span>
              </h4>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-200 leading-relaxed">
                {selectedEngine.steps.map((st, idx) => (
                  <li key={idx} className="pl-1">
                    {st}
                  </li>
                ))}
              </ol>
            </div>

            {/* Special Note Box */}
            <div className="bg-amber-950/30 p-3 rounded-xl border border-amber-800/40 text-amber-200 text-xs flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>မှတ်ချက်: </strong> {selectedEngine.notesMm}
              </p>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: OVERLAP & FIRING ORDER METHOD */}
        {activeSubTab === 'overlap' && (
          <div className="space-y-4">
            
            {/* Overlap Rule Explanation */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <RotateCw className="w-4 h-4" />
                <span>{selectedEngine.overlapGuide.ruleName}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedEngine.overlapGuide.explanationMm}
              </p>
              <div className="p-2.5 bg-cyan-950/30 border border-cyan-800/40 rounded-lg text-xs text-cyan-200">
                <strong>💡 Overlap (အိုဘာလက်ပ်) ရှာဖွေနည်း -</strong> ဆလင်ဒါတစ်ခု၏ Exhaust Valve (အထွက်အဆို့) ပြန်ပိတ်လုနီးပါးအချိန်တွင် Intake Valve (အဝင်အဆို့) စတင်ပွင့်လာပြီး ရော့ကာတံ ၂ ချောင်း ကခုန်ချိန် (Rocking point) ဖြစ်ပါသည်။ ထိုအချိန်တွင် ၎င်းနှင့် စုံတွဲဖြစ်သော ဆလင်ဒါသည် TDC Compression (ပေါက်ကွဲမှုအစ) ရောက်နေသဖြင့် အဝင်/အထွက်ဘားများနှင့် အင်ဂျက်တာကို လွတ်လပ်စွာ စိတ်ချလက်ချ ချိန်နိုင်ပါသည်။
              </div>
            </div>

            {/* Overlap Pairs Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3 text-cyan-400">၁။ Overlap ဖြစ်နေသော ဆလင်ဒါ</th>
                    <th className="py-2.5 px-3 text-emerald-400">၂။ ချိန်ရမည့် ဆလင်ဒါ</th>
                    <th className="py-2.5 px-3 text-white">ချိန်ညှိရမည့် အစိတ်အပိုင်း</th>
                    <th className="py-2.5 px-3 text-amber-400">နိယာမမှတ်ချက်</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium bg-slate-950/60">
                  {selectedEngine.overlapGuide.pairs.map((pair, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition">
                      <td className="py-2.5 px-3 font-bold text-cyan-300">
                        {pair.overlapCyl}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-emerald-400">
                        {pair.adjustCyl}
                      </td>
                      <td className="py-2.5 px-3 text-slate-200">
                        {pair.adjustDetails}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-amber-300 text-[11px]">
                        {pair.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Firing Order Steps Table */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Firing Order အစဉ်လိုက် ({selectedEngine.firingOrder}) အပြည့်အစုံ ချိန်ညှိမှု စာရင်း:</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {selectedEngine.firingOrderSequence.map((fo) => (
                  <div key={fo.step} className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300 font-mono">အဆင့် {fo.step} ➔ {fo.flywheelMark}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">{fo.cylToAdjust}</span>
                    </div>
                    <div className="text-white font-semibold text-[11px]">• {fo.valvesAndInjector}</div>
                    <div className="text-slate-400 text-[10px]">{fo.detailsMm}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: TIMING MARKS & FLYWHEEL / CAM MARKS */}
        {activeSubTab === 'timing' && (
          <div className="space-y-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Target className="w-4 h-4" />
                <span>{selectedEngine.name} ဖလိုင်းဝီးနှင့် ကမ်ရှပ် မာကင်အမှတ်များ (Timing Guide)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-[11px] text-amber-400 font-bold block flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>ဖလိုင်းဝီး အမှတ်အသား ကြည့်ရှုနည်း (Flywheel Window):</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedEngine.timingMarks.flywheelLocation}
                  </p>
                </div>

                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-[11px] text-cyan-400 font-bold block flex items-center gap-1">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>ကမ်ရှပ် အမှတ်အသား (Camshaft Marks):</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedEngine.timingMarks.camshaftLocation}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1 text-slate-300">
                <strong className="text-emerald-400 font-bold">စစ်ဆေးတိုက်ဆိုင်နည်း: </strong>
                <span>{selectedEngine.timingMarks.howToAlignMm}</span>
              </div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-800/40 p-3.5 rounded-xl text-emerald-200 text-xs space-y-1.5">
              <h5 className="font-bold text-emerald-300">💡 ဝပ်ရှော့ လျှို့ဝှက်ချက် - အမှတ်တန်းကျသော်လည်း ဘာကြောင့် မချိန်ရသေးသနည်း?</h5>
              <p className="leading-relaxed">
                4-Stroke ဒီဇယ်အင်ဂျင်များတွင် ဖလိုင်းဝီးအမှတ်တန်း (ဥပမာ TDC 0°) သည် ပစ္စတင်ထိပ်ဆုံးသို့ ၂ ကြိမ် ရောက်ရှိတတ်ပါသည်။ 
                တစ်ကြိမ်သည် Compression Stroke (ပေါက်ကွဲမှုအစ - ရော့ကာတံများ လွတ်ချိန်) ဖြစ်ပြီး၊ နောက်တစ်ကြိမ်သည် Exhaust/Intake Overlap (အဆို့ရှင်ကချိန်) ဖြစ်သည်။ 
                အမှတ်တန်းကျချိန်တွင် လက်ဖြင့် သက်ဆိုင်ရာ ဆလင်ဒါ၏ ရော့ကာတံကို လှုပ်ကြည့်၍ လွတ်မှသာ ချိန်ရပါမည်။ ကျပ်နေပါက ဖလိုင်းဝီးကို နောက်ထပ် ၃၆၀ ဒီဂရီ (၁ ပတ် အပြည့်) ထပ်လှည့်ပေးရပါမည်။
              </p>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: EMERGENCY NO-TOOL (SST မရှိ ဗလာချိန်နည်း) */}
        {activeSubTab === 'notool' && (
          <div className="space-y-4">
            <div className="bg-rose-950/30 border border-rose-800/40 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <Wrench className="w-4 h-4 text-rose-400" />
                <span>{selectedEngine.emergencyNoToolMethod.title}</span>
              </div>
              <p className="text-xs text-rose-200">
                <strong>အစားထိုးသည့် အခြေအနေ: </strong> {selectedEngine.emergencyNoToolMethod.toolsReplaced}
              </p>
            </div>

            {/* Critical Engine Position Rule Warning Box */}
            <div className="bg-amber-950/40 border-2 border-amber-500/80 p-4 rounded-xl space-y-2.5 shadow-xl">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>⚠️ အဆင့် (၀) ရွှေစည်းမျဉ်း - မချိန်မီ အင်ဂျင်အနေအထား (TDC / Crank Position) မဖြစ်မနေ အရင်စစ်ဆေးရန်:</span>
              </div>
              <p className="text-xs text-amber-100 leading-relaxed font-medium">
                လက်ဗလာဖြင့် ချိန်သည့်အခါ ဂိတ်တူးလ်နှင့် ချိန်သည်ထက် အင်ဂျင်လည်ပတ်မှု အနေအထား (Crankshaft & Cam Position) ကို ပို၍ပင် အထူးသတိထားရပါမည်! 
                <strong> ဥပမာ - နံပါတ် ၁ ဆလင်ဒါကို ချိန်မည်ဆိုပါက အင်ဂျင်သည် နံပါတ် ၁ နေရာ (TDC Compression) သို့ အတိအကျ ရောက်နေရပါမည်။</strong> 
                အကယ်၍ အင်ဂျင်သည် ဆလင်ဒါ ၃ သို့မဟုတ် ၆ နေရာ ရောက်နေချိန် (ကမ်ရှပ်က နော်ဇယ်/ဘားကို ဖိထားချိန်) တွင် စကရူကို လက်ဗလာဖြင့် လှည့်ကျပ်မိပါက နော်ဇယ်ပလန်ဂျာနှင့် ရော့ကာတံများ ကျိုးထွက်ပြီး ဆလင်ဒါခေါင်း ကွဲထွက်သွားပါမည်။
              </p>
              <div className="p-3 bg-slate-950/90 rounded-lg border border-amber-600/50 text-xs text-slate-200 space-y-1">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>💡 လက်တွေ့ စစ်ဆေးနည်း (Pushrod & Rocker Check):</span>
                </div>
                <p className="leading-relaxed">
                  သက်ဆိုင်ရာ ဆလင်ဒါ၏ ရော့ကာတံ (Intake & Exhaust) နှင့် တွန်းတံ (Pushrod) များကို လက်ဖြင့် လှုပ်ကြည့်၊ လှည့်ကြည့်ပါ။ 
                  တွန်းတံများ ချောင်လည်နေမှသာ (Zero pressure on cam) ထိုဆလင်ဒါသည် ချိန်ရန် အဆင်သင့်ဖြစ်သော အနေအထား (TDC) ဖြစ်ပါသည်။ အကယ်၍ ကျပ်နေပါက ဖလိုင်းဝီး နောက်တစ်ပတ် ထပ်လှည့်ရပါမည်။
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
              <h4 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ဝပ်ရှော့ လက်တွေ့ ဗလာချိန်နည်း လမ်းညွှန်များ:</span>
              </h4>
              <div className="space-y-2.5">
                {selectedEngine.emergencyNoToolMethod.fieldTechniqueMm.map((tech, idx) => (
                  <div key={idx} className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 leading-relaxed">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-950/40 p-3.5 rounded-xl border border-amber-800/50 text-amber-200 text-xs space-y-1">
              <h5 className="font-bold text-amber-300 flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>အထူးသတိပြုရန် (Warning & Caution):</span>
              </h5>
              <p className="leading-relaxed">
                {selectedEngine.emergencyNoToolMethod.precautionsMm}
              </p>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER ENGINEERING PRINCIPLES & CAM LOBE DEGREE CONCEPTS */}
        {activeSubTab === 'principles' && (
          <div className="space-y-4">
            {/* Header / Manifesto Card */}
            <div className="bg-gradient-to-r from-purple-950/60 via-slate-950 to-slate-900 border border-purple-500/40 p-4 sm:p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-sm sm:text-base">
                <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>လှေနံဓားထစ် မဟုတ်သော စက်မှုဗိသုကာ သဘောတရား (Master Engineering Principles)</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                ဝပ်ရှော့လောကတွင် <strong className="text-amber-300">"၁ မီးပေါက်ရင် ၁ ပဲ ချိန်ရမယ်"</strong> ဟု ပုံသေမှတ်လေ့ရှိကြသော်လည်း၊ 
                အင်ဂျင်နီယာများ၏ <strong>Cam Lobe Angle (ကမ်သီးဒီဂရီအစောင်း)</strong>၊ <strong>Base Circle (အပြားခြမ်း)</strong> နှင့် 
                <strong> Firing Order (မီးပေါက်စဉ်)</strong> ချိတ်ဆက်မှုကို အရင်းအမြစ်က သဘောပေါက်ထားပါက မာကင်မရှိ၊ အထူးတူးလ်မရှိသည့် အခြေအနေတွင်ပင် 
                မျက်စိထဲ ကွင်းကွင်းကွက်ကွက် မြင်သာပြီး မည်သည့်အင်ဂျင်မဆို စိတ်ချလက်ချ ချိန်ညှိနိုင်မည် ဖြစ်ပါသည်။
              </p>
            </div>

            {/* Principle 1: Cam Lobe Anatomy & Motion (အောက်ဆုံးထောက်ချိန် vs အပေါ်ဆုံးလွတ်ချိန်) */}
            <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Target className="w-4 h-4 text-amber-400" />
                <span>၁။ Cam Lobe (ကမ်သီးဒီဂရီအစောင်း) ၏ အဓိက အပိုင်း (၂) ပိုင်းနှင့် နော်ဇယ်ရော့ကာ လှုပ်ရှားပုံ</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Toe / Peak Lift Card */}
                <div className="bg-slate-900 p-4 rounded-xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>(က) Cam Toe / Nose (ကမ်သီးအချွန်ခြမ်း - အောက်ဆုံးဖိချချိန်)</span>
                    </span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                      Maximum Cam Lift
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1.5">
                    <p>• <strong>အသုံးပြုသော အင်ဂျင်များ:</strong> <span className="text-white font-semibold">VW TDI (Pumpe-Düse PD), Scania PDE အချို့</span></p>
                    <p>• <strong>ချိန်ပုံချိန်နည်း:</strong> ကမ်သီးအချွန်က ရော့ကာကို အောက်ဆုံးထိ ဖိချထားသော အမှတ်ကို ရှာပြီး၊ စကရူကို လက်ဖြင့် အောက်ဆုံးထိ သံချင်းထိအောင် ထောက်ပါ (Zero Lash)။ ထို့နောက် <strong>၁၈၀° (ဝက်ရစ်) သို့မဟုတ် ၆၆° နောက်သို့ ပြန်လျှော့ပါ (Back-off)</strong>။</p>
                    <div className="p-2.5 bg-amber-950/40 border border-amber-800/40 rounded-lg text-amber-200 text-[11px] leading-relaxed">
                      <strong>💡 ဘာကြောင့် ပြန်လျှော့ရသနည်း (Why?): </strong> 
                      အင်ဂျင်ပူလာပါက သတ္တုကားထွက်မှု (Thermal Expansion) ကြောင့် ပလန်ဂျာအောက်ခြေ ဖင်စောင့်မိပြီး နော်ဇယ်ခေါင်းကွဲထွက်ခြင်း၊ ရော့ကာတံကျိုးခြင်း မဖြစ်စေရန် 0.5 mm ခန့် အသက်ရှူပေါက် ချန်ထားခြင်း ဖြစ်ပါသည်။
                    </div>
                  </div>
                </div>

                {/* Heel / Base Circle Card */}
                <div className="bg-slate-900 p-4 rounded-xl border border-cyan-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300 text-xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>(ခ) Cam Heel / Base Circle (ကမ်သီးဖနောင့် - အဝိုင်းပြားခြမ်း / အနားယူချိန်)</span>
                    </span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono font-bold">
                      Resting / Dwell Phase
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-1.5">
                    <p>• <strong>အသုံးပြုသော အင်ဂျင်များ:</strong> <span className="text-white font-semibold">Volvo D12/D13 (VEB), Detroit S60, Cummins (OBC)</span></p>
                    <p>• <strong>ချိန်ပုံချိန်နည်း:</strong> ကမ်သီးအဝိုင်းပြားခြမ်းက ရော့ကာလက်တံကို လုံးဝမဖိဘဲ လွတ်နေချိန် (နော်ဇယ် အပေါ်ဆုံးသို့ ရောက်နေချိန်) တွင် Height Gauge ဖြင့် အမြင့်တိုင်းခြင်း သို့မဟုတ် တော်ခ်ရင့်ချ် 5 N·m တင်ပြီးမှ မျက်နှာပြင် (Flats/Degrees) ချိန်ခြင်း။</p>
                    <div className="p-2.5 bg-cyan-950/40 border border-cyan-800/40 rounded-lg text-cyan-200 text-[11px] leading-relaxed">
                      <strong>💡 ဘာကြောင့် ဒီအချိန်မှာ ချိန်သနည်း (Why?): </strong> 
                      ကမ်သီးအပြားခြမ်းပေါ် ရောက်နေသရွေ့ အင်ဂျင်ဒီဂရီ အနည်းငယ် လွဲနေစေကာမူ တိုက်ပစ် Clearance မပြောင်းလဲသောကြောင့် တိကျစွာ အမြင့်တိုင်းနိုင်ခြင်း ဖြစ်ပါသည်။
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Principle 2: "အဖွင့်ချိန် / အပိတ်ချိန်" ဟု ခေါ်ဆိုမှု မှား/မှန် စိစစ်ချက် */}
            <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-rose-400" />
                <span>၂။ "အဖွင့်ချိန် / အပိတ်ချိန်" ဟု ခေါ်ဆိုမှု မှား/မှန် စိစစ်ချက် (Engineering Truth vs Workshop Slang)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-rose-950/20 border border-rose-800/40 p-3.5 rounded-xl space-y-1.5">
                  <span className="text-rose-300 font-bold block flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>ဝပ်ရှော့ အခေါ်အဝေါ် လွဲမှားမှု (Workshop Misconception):</span>
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    ကမ်သီးက နော်ဇယ်ကို အောက်ဆုံးထိ ဖိချထားတာကို တွေ့တော့ ဆီပန်းမည့် အနေအထားဟု ထင်ပြီး <strong>"အဖွင့်ချိန်"</strong> ဟု ခေါ်ကြသည်။ 
                    ကမ်သီးလွတ်နေပြီး အပေါ်ဆုံးရောက်နေတာကို <strong>"အပိတ်ချိန်"</strong> ဟု ခေါ်ကြသည်။
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-800/40 p-3.5 rounded-xl space-y-1.5">
                  <span className="text-emerald-300 font-bold block flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>စက်မှုအင်ဂျင်နီယာ အမှန်တရား (True Engineering Fact):</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    တိုက်ပစ်စကရူ လှည့်ချိန်ခြင်းသည် <strong>ဆီပန်းမည့်အချိန် (Timing) ကို ချိန်ခြင်း မဟုတ်ပါ!</strong> ဆီပန်းမည့်အချိန်ကို ECU ကွန်ပျူတာက Solenoid Valve သို့ မိုက်ခရိုစက္ကန့်ဖြင့် လျှပ်စစ်ပို့ပြီး ထိန်းချုပ်ခြင်း ဖြစ်သည်။ 
                    ကျွန်ုပ်တို့ ချိန်ညှိသည်မှာ နော်ဇယ်၏ <strong>Plunger Pre-load (ဖိအားခံနိုင်စွမ်း)</strong> နှင့် <strong>Bottoming Clearance (အောက်ခြေလွတ်ကင်းမှု)</strong> ကို ချိန်ခြင်းသာ ဖြစ်သည်။
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 3: "၁ မီးပေါက်ချိန် ၅ နော်ဇယ်/ဘား တွဲချိန်ရခြင်း" ၏ အင်ဂျင်နီယာ တွက်ချက်မှု */}
            <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <RotateCw className="w-4 h-4 text-cyan-400" />
                <span>၃။ "၁ မီးပေါက်ချိန် ၅ နော်ဇယ်/ဘား တွဲချိန်ရခြင်း" ၏ အင်ဂျင်နီယာ သဘောတရား (Cross-Cylinder Companion Pairing)</span>
              </div>

              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <p>
                  ၆ လုံးထိုး 4-Stroke အင်ဂျင်များတွင် Crankshaft ၂ ပတ် (၇၂၀ ဒီဂရီ) လည်ပတ်စဉ် ဆလင်ဒါတစ်ခုနှင့်တစ်ခု <strong>၁၂၀ ဒီဂရီစီ (720° ÷ 6 = 120°)</strong> အလှည့်တိုင်း မီးတစ်ပေါက် ပေါက်ပါသည်။
                  မီးပေါက်စဉ်မှာ <strong className="text-amber-400 font-mono">1 - 5 - 3 - 6 - 2 - 4</strong> ဖြစ်ပါသည်။
                </p>

                {/* Companion Cylinder Concept */}
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Companion Cylinders (အမွှာ ဆလင်ဒါအတွဲများ) :</span>
                  </h5>
                  <p className="text-slate-300 text-[11px]">
                    ပစ္စတင်များသည် အောက်ပါအတွဲများအတိုင်း အတူတူ အပေါ်သေမှတ် (TDC) သို့ တက်သော်လည်း <strong>၃၆၀ ဒီဂရီ စထရုတ် (Stroke) ကွာခြားပါသည်</strong> —
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-cyan-800/40 text-center">
                      <span className="font-bold text-cyan-300 block">အတွဲ (၁) ➔ No. 1 & No. 6</span>
                      <span className="text-slate-400 text-[10px]">၁ က Compression TDC ဖြစ်ချိန်တွင် ၆ သည် Overlap ဖြစ်နေမည်</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-cyan-800/40 text-center">
                      <span className="font-bold text-cyan-300 block">အတွဲ (၂) ➔ No. 2 & No. 5</span>
                      <span className="text-slate-400 text-[10px]">၂ က Compression TDC ဖြစ်ချိန်တွင် ၅ သည် Overlap ဖြစ်နေမည်</span>
                    </div>
                    <div className="p-2.5 bg-slate-950 rounded-lg border border-cyan-800/40 text-center">
                      <span className="font-bold text-cyan-300 block">အတွဲ (၃) ➔ No. 3 & No. 4</span>
                      <span className="text-slate-400 text-[10px]">၃ က Compression TDC ဖြစ်ချိန်တွင် ၄ သည် Overlap ဖြစ်နေမည်</span>
                    </div>
                  </div>
                </div>

                {/* Why 1 pairs with 5? */}
                <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl space-y-1.5 text-slate-200">
                  <div className="font-bold text-amber-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>လျှို့ဝှက်ချက် - အဘယ်ကြောင့် ၁ မီးပေါက်ချိန်တွင် ၅ ၏ နော်ဇယ်/ဘားကို တွဲချိန်ခိုင်းသနည်း?</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    ဆလင်ဒါ (၁) မီးပေါက်နေချိန်တွင် ဆလင်ဒါ (၅) ၏ ကမ်သီးဒီဂရီသည် ဘားများနှင့် နော်ဇယ်ကို လုံးဝမဖိဘဲ <strong>Base Circle (အပြားခြမ်း)</strong> ပေါ် အတိအကျ ရောက်နှင့်နေပြီ ဖြစ်သည်။ 
                    အင်ဂျင်ကြီးတစ်ခုလုံးကို ၆ ခါ ၇ ခါ ပတ်ချာလည် လှည့်မနေရဘဲ <strong>၂ ပတ် သို့မဟုတ် ၃ ပတ်အတွင်း တစ်ပြိုင်တည်း ပြီးစီးစေရန်</strong> ထုတ်လုပ်သူ စက်ရုံ Service Manual များက ကမ်အစောင်းဒီဂရီအလိုက် တွက်ချက်ဖော်ထုတ်ထားသော ဇယားဖြစ်ပါသည်။
                  </p>
                </div>
              </div>
            </div>

            {/* Principle 4: Degree Wheel / Firing Order Sequence Matrix Table */}
            <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>၄။ ၆ လုံးထိုး အင်ဂျင် ဒီဂရီအလှည့်နှင့် မီးပေါက်ဆင် (Degree Wheel Matrix)</span>
                </div>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">1-5-3-6-2-4</span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-2.5 px-3 text-amber-400">Crankshaft ဒီဂရီ</th>
                      <th className="py-2.5 px-3 text-emerald-400">မီးပေါက်သော ဆလင်ဒါ (Compression TDC)</th>
                      <th className="py-2.5 px-3 text-cyan-400">Overlap ဖြစ်နေသော ဆလင်ဒါ</th>
                      <th className="py-2.5 px-3 text-white">ကမ်အခြေအနေနှင့် ချိန်ညှိမှု</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium bg-slate-950/80">
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">0° (သို့မဟုတ် 720°)</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၁ (Cyl 1)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၆ (Cyl 6)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 1 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 5 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">120°</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၅ (Cyl 5)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၂ (Cyl 2)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 5 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 3 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">240°</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၃ (Cyl 3)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၄ (Cyl 4)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 3 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 6 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">360°</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၆ (Cyl 6)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၁ (Cyl 1)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 6 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 2 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">480°</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၂ (Cyl 2)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၅ (Cyl 5)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 2 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 4 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                    <tr className="hover:bg-slate-800/40">
                      <td className="py-2.5 px-3 font-mono text-amber-300 font-bold">600°</td>
                      <td className="py-2.5 px-3 text-emerald-300 font-bold">ဆလင်ဒါ ၄ (Cyl 4)</td>
                      <td className="py-2.5 px-3 text-cyan-300">ဆလင်ဒါ ၃ (Cyl 3)</td>
                      <td className="py-2.5 px-3 text-slate-300">Cyl 4 အဝင်/အထွက်ဘား နှင့် နော်ဇယ် ချိန်နိုင် (Cyl 1 အထွက်ဘား တွဲချိန်နိုင်)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Principle 5: Master Mechanic Summary & Field Pro-Tips */}
            <div className="bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 p-4 sm:p-5 rounded-2xl border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>၅။ ဝပ်ရှော့ပညာရှင်အတွက် ရွှေစည်းမျဉ်း လက်တွေ့စမ်းသပ်ချက်များ (Master Field Rules)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Pushrod Spin Test (တွန်းတံလှည့်စမ်းသပ်နည်း):</strong> အမှတ်တန်းကျသော်လည်း မချိန်မီ သက်ဆိုင်ရာ ဆလင်ဒါ၏ တွန်းတံ (Pushrod) များကို လက်ချောင်းဖြင့် လှည့်ကြည့်ပါ။ ချောင်လည်နေမှသာ ကမ်သီးက မဖိထားသော အနေအထား (TDC Compression) ဖြစ်ပါသည်။</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Rocker Arm Play (ရော့ကာတံ လှုပ်စမ်းသပ်နည်း):</strong> အကယ်၍ ရော့ကာတံ ကျပ်နေပါက ဖလိုင်းဝီး နောက်ထပ် ၃၆၀ ဒီဂရီ (၁ ပတ်အပြည့်) ထပ်လှည့်ရပါမည်။</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>သတိပေးချက်:</strong> အောက်ဆုံးထောက်ရမည့် အင်ဂျင် (VW/Scania) ကို အပေါ်ဆုံးတွင် ထောက်ခြင်း၊ သို့မဟုတ် အပေါ်ဆုံးလွတ်ချိန် ချိန်ရမည့် အင်ဂျင် (Volvo/Detroit) ကို အောက်ဆုံးတွင် ထောက်ခြင်း မပြုရပါ။ စနစ် ၂ မျိုးကို မရောထွေးပါစေနှင့်။</span>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>

      {/* 4. ALL 8 ENGINES COMPARISON TABLE CARDS */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">
              ဝပ်ရှော့ ကားကြီးများ၏ နော်ဇယ်တိုက်ပစ် အမြန်ကြည့်ဇယား (Quick Reference)
            </h3>
            <p className="text-[11px] text-slate-400">
              အင်ဂျင် ၈ မျိုးစလုံး၏ တိုက်ပစ်စံချိန်များကို တစ်ချက်တည်း နှိုင်းယှဉ်ကြည့်ရှုနိုင်ပါသည်
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          {UNIT_INJECTOR_ENGINES.map((eng) => (
            <div 
              key={eng.id}
              onClick={() => setSelectedEngineId(eng.id)}
              className={`p-3 rounded-xl border transition cursor-pointer ${
                eng.id === selectedEngineId
                  ? 'bg-amber-950/40 border-amber-500/50 ring-1 ring-amber-400/30'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span>{eng.flag}</span>
                  <span>{eng.name}</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                  {eng.system}
                </span>
              </div>
              <div className="space-y-1 text-slate-300 text-[11px]">
                <div>• <strong>ချိန်နည်း:</strong> <strong className="text-emerald-400">{eng.methodTitle}</strong></div>
                <div>• <strong>Locknut:</strong> {eng.locknutTorque}</div>
                <div>• <strong>Firing Order:</strong> <span className="text-amber-300 font-mono">{eng.firingOrder}</span></div>
                <div className="text-slate-400 text-[10px] truncate">{eng.vehicleExample}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. ENGINEERING MASTERCLASS & HISTORY ACCORDION */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setHistoryOpen(!historyOpen)}
        >
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <span>စက်မှုဗိသုကာနှင့် သမိုင်းကြောင်း လေ့လာရန် (Engineering Masterclass)</span>
              </h3>
              <p className="text-xs text-slate-400">
                ဝါယာမလိုဘဲ တည်ဆောက်ခဲ့ပုံ၊ ၂,၂၀၀ bar ဖိအားထုတ်ခဲ့ပုံနှင့် ခေတ်သစ်ပြောင်းလဲမှုများ
              </p>
            </div>
          </div>
          <button className="p-1.5 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700">
            {historyOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {historyOpen && (
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-4 text-xs text-slate-300">
            {/* Story 1 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
                <Cpu className="w-4 h-4 text-amber-400" />
                ၁။ ဝါယာကြိုးမလိုဘဲ တည်ဆောက်ခဲ့သည့် စက်ပိုင်းစစ်စစ် Unit Injector (MUI) သမိုင်း
              </h4>
              <p className="leading-relaxed text-slate-300">
                ကွန်ပျူတာ ECU တွေ၊ လျှပ်စစ်ဝါယာလိုင်းတွေ မပေါ်ခင် <strong>၁၉၃၈ ခုနှစ် Detroit Diesel</strong> နှင့် <strong>၁၉၅၀ ခုနှစ် Cummins PT စနစ်</strong> ကာလကတည်းက အင်ဂျင်နီယာကြီးများသည် ဝါယာကြိုးတစ်ပင်မှ မပါဘဲ ဤစနစ်ကို တည်ဆောက်ခဲ့ကြပါသည်။
                ဆီအတိုး/အလျှော့ကို သွားစိပ်ချောင်း (Control Rack) နှင့် စက်ပိုင်း Governor ဖြင့် ထိန်းပြီး၊ ကမ်ရှပ်ရော့ကာတံဖြင့် ဆီဖိအားကို အတိအကျ ထုတ်လုပ်ခဲ့သည်။
                ထို့ကြောင့် ဒုတိယကမ္ဘာစစ်သုံး တင့်ကားများ၊ သမုဒ္ဒရာဖြတ် သင်္ဘောများနှင့် သဲကန္တာရထဲက မီးစက်ကြီးများသည် လျှပ်စစ်ပြတ်တောက်စေကာမူ၊ ရေစိုစို ရွှံ့ပေပေ မည်သည့်အခါမှ မရပ်တန့်ဘဲ ဆယ်စုနှစ်ချီ မောင်းနှင်နိုင်ခဲ့ခြင်း ဖြစ်သည်။
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-cyan-400 flex items-center gap-1.5 text-sm">
                <Layers className="w-4 h-4 text-cyan-400" />
                ၂။ ဆီဖိအား 2,200 bar အထိ အဆမတန်ထုတ်ပြီး အစိတ်အပိုင်း လျှော့ချခဲ့သည့် လျှို့ဝှက်ချက်
              </h4>
              <p className="leading-relaxed text-slate-300">
                ဘေးထိုင်စက်ပိုင်းပန့် (Inline Pump) စနစ်တွင် သံပိုက်လိုင်းရှည်ကြီးများဖြင့် ဆီပို့ရသဖြင့် ဖိအား 1,000 bar ကျော်လျှင် ပိုက်လိုင်းပွလာခြင်း (Piping Elasticity) နှင့် ပေါက်ထွက်မည့်အန္တရာယ် ရှိခဲ့သည်။
                Unit Injector သည် ပိုက်လိုင်းရှည်ကြီးများကို ရှင်းထုတ်ပစ်ကာ <strong>Pump နှင့် Nozzle ကို တစ်လုံးတည်းပေါင်းစပ်၍ ဆလင်ဒါခေါင်းထဲ တိုက်ရိုက်ထည့်ပစ်ခဲ့သည်</strong>။
                ပန့်နှင့် နော်ဇယ်အကွာအဝေး ၂ လက်မတောင် မရှိတော့သဖြင့် ဖိအားလျော့မသွားဘဲ <strong>2,000–2,200 bar (30,000+ PSI)</strong> ဖိအားအဆမတန် ထုတ်နိုင်ခဲ့သည်။
                ဆီမှုန်သည် မြူခိုးငွေ့ကဲ့သို့ ညက်သွားကာ တစ်စက်မှ မကျန်အောင် လောင်ကျွမ်းသဖြင့် Scania 124G နှင့် Volvo FH12 တို့သည် ကုန်တန် ၅၀ ကျော်တင်ဆောင်၍ တောင်တက်လမ်းများတွင် လိုက်မမီသော ရုန်းအားဘုရင်များ ဖြစ်လာခဲ့သည်။
              </p>
            </div>

            {/* Story 3 */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4 text-emerald-400" />
                ၃။ ခေတ်သစ်တွင် Common Rail (CRDi) ဘက်သို့ အဘယ်ကြောင့် ပြောင်းလဲသွားသနည်း?
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                <li><strong>ကမ်ရှပ်လည်နှုန်းပေါ် မှီခိုမှု:</strong> Unit Injector သည် ကမ်ရှပ်ရော့ကာဖိမှ ဖိအားရသဖြင့် အင်ဂျင်အနှေး (Idle RPM) တွင် ဖိအားနည်းသည်။ Common Rail ကမူ အင်ဂျင်လည်နှုန်းမရွေး ၂,၅၀၀ bar အပြည့် အမြဲထုတ်နိုင်သည်။</li>
                <li><strong>ဆလင်ဒါခေါင်း နေရာကျဉ်းကျပ်မှု:</strong> နော်ဇယ်ကိုယ်ထည် တုတ်ခဲသဖြင့် ခေါင်းပေါ်တွင် 4-Valves အဆို့ရှင် ၄ ချောင်း တပ်ဆင်ရန် နေရာအခက်အခဲ ရှိလာသည်။</li>
                <li><strong>ဆီဖျန်းသည့် အကြိမ်ရေ (Multiple Injections):</strong> Unit Injector သည် တစ်ချက်တက်လျှင် ၁ သို့မဟုတ် ၂ ကြိမ်သာ ဖျန်းနိုင်သော်လည်း၊ Common Rail သည် Euro 6 စံချိန်မီရန် ပစ္စတင်တစ်ချက်တက်စဉ် <strong>၅ ကြိမ်မှ ၈ ကြိမ်အထိ (Pilot, Main, Post Injection)</strong> စိတ်ကြိုက် ခွဲဖျန်းနိုင်သောကြောင့် ဖြစ်သည်။</li>
              </ul>
            </div>

            {/* Story 4: Real Workshop Insights & Beyond Rote Memorization */}
            <div className="bg-gradient-to-r from-purple-950/40 via-slate-950 to-slate-950 p-4 rounded-xl border border-purple-500/40 space-y-2">
              <h4 className="font-bold text-purple-300 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                ၄။ မြန်မာပြည် ဝပ်ရှော့လက်တွေ့ဘဝနှင့် လှေနံဓားထစ်မှ ခွဲထွက်သော စက်မှုသဘောတရား အလင်းရောင်
              </h4>
              <p className="leading-relaxed text-slate-300">
                မြန်မာပြည် စက်ပြင်လောကတွင် ဆရာသမားများထံမှ အစဉ်အလာအရ လက်ဆင့်ကမ်း သင်ယူရာ၌ အင်္ဂလိပ်စာ အခက်အခဲနှင့် စက်ရုံထုတ် Service Manual အပြည့်အစုံ မရရှိနိုင်မှုတို့ကြောင့် 
                <strong> "၁ ဆိုရင် ၁ ပဲ ချိန်ရမယ်"</strong> စသည့် ပုံသေမှတ်နည်းများကိုသာ မှတ်သားခဲ့ကြရပါသည်။
              </p>
              <p className="leading-relaxed text-slate-300">
                သို့သော် အင်ဂျင်၏ <strong>Cam Lobe Angle (ကမ်သီးဒီဂရီ)</strong>၊ <strong>Cam Base Circle (အပြားခြမ်း လွတ်ချိန်)</strong>၊ 
                <strong> Firing Order (၁၂၀ ဒီဂရီစီ ခြားသော မီးပေါက်စဉ်)</strong> နှင့် <strong>Companion Cylinders (၁-၆၊ ၂-၅၊ ၃-၄ အမွှာအတွဲများ)</strong> ၏ 
                စက်မှုအပေးအယူ သဘောတရားကို အရင်းအမြစ်က ရှင်းရှင်းလင်းလင်း သဘောပေါက်ထားပါက မည်သည့်အမှတ်အသား ပျက်နေသည့် အင်ဂျင်မဆို၊ တူးလ်အထူး မရှိသည့် အခြေအနေတွင်မဆို 
                မိမိ၏ ဉာဏ်နှင့် ပညာဖြင့် ယုံကြည်စိတ်ချစွာ အမှားကင်းဆုံး တည်ဆောက်ချိန်ညှိနိုင်မည် ဖြစ်ပါသည်။
              </p>
            </div>

            {/* Warning Box */}
            <div className="bg-rose-950/40 p-4 rounded-xl border border-rose-800/40 space-y-1.5 text-rose-200">
              <h4 className="font-bold text-rose-300 flex items-center gap-1.5 text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                ဝပ်ရှော့ ဆရာသမားများအတွက် မဖြစ်မနေ သတိပြုရမည့် အချက် (၂) ချက်:
              </h4>
              <p>
                <strong>၁။ အရမ်းကြပ်လွန်းသွားလျှင် (Too Tight):</strong> အင်ဂျင်ပူလာသည့်အခါ သတ္တုပွလာပြီး နော်ဇယ်ပလန်ဂျာ အောက်ခြေထိသွားကာ အင်ဂျက်တာခေါင်းကျိုးခြင်း၊ ရော့ကာတံကျိုးခြင်း၊ ကမ်ရှပ်လိုက်စားခြင်း အန္တရာယ် ကြီးမားစွာ ဖြစ်တတ်ပါသည်။
              </p>
              <p>
                <strong>၂။ အရမ်းချောင်လွန်းသွားလျှင် (Too Loose):</strong> နော်ဇယ်ဆီဖိအားမပြည့်တော့ဘဲ အင်ဂျင်ဆွဲအားကျခြင်း၊ မီးခိုးမည်းထွက်ခြင်း၊ ဆီစားအလွန်များခြင်းတို့ ဖြစ်တတ်ပါသည်။
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 6. UNIT INJECTOR INTERNAL ANATOMY, SOLENOID/SPILL VALVE, HEUI & OVER-RETURN MASTER GUIDE */}
      <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-cyan-500/20 text-cyan-400 rounded-xl border border-cyan-500/30">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2">
                <span>Unit Injector အတွင်းပိုင်း တည်ဆောက်ပုံ၊ Solenoid၊ HEUI နှင့် Over-Return အလုပ်လုပ်ပုံ အနှစ်ချုပ်</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold uppercase">
                  Technical Deep-Dive
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                ဆီစပန်းချိန် (SOI) ဖန်တီးပုံ၊ ဝါယာမပါသည့် စက်ပိုင်း Helix ဖြတ်ဘား၊ အင်ဂျင်ဝိုင် Hydraulic ဖြင့် ဖိအားအဆပွားပုံနှင့် နော်ဇယ် အအေးခံ ဆီပြန်လိုင်းများ
              </p>
            </div>
          </div>
        </div>

        {/* 4 INTERNAL PARTS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Gauge className="w-4 h-4 text-amber-400" />
              <span>၁။ Plunger & Barrel</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              ကမ်ရှပ်ရော့ကာဖိချမှုဖြင့် ဆီကို ၂,၀၀၀+ bar (၃၀,၀၀၀ PSI) အထိ ဖိအားမြင့် ထုတ်ပေးသော အတွင်းပိုင်း ပလန်ဂျာနှင့် ဆလင်ဒါအိမ် ဖြစ်ပါသည်။
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>၂။ Spill Valve (ဖြတ်ဘား)</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              လျှပ်စစ် Solenoid (သို့) စက်ပိုင်း Rack ဖြင့် ဆီထွက်ပေါက်ကို ပိတ်/ဖွင့် လုပ်ပြီး ဆီစပန်းမည့်အချိန်နှင့် ရပ်တန့်မည့်အချိန်ကို တိကျစွာ ထိန်းပေးပါသည်။
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Target className="w-4 h-4 text-emerald-400" />
              <span>၃။ Needle Valve & Spring</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              နော်ဇယ်အပ်ဖျားနှင့် စပရိန်ဖြစ်ပြီး ဆီဖိအားက NOP (၃၀၀–၄၀၀ bar) ကျော်မှ အပ်ကြွကာ အပေါက်ငယ်များမှ ဆီကို မြူမှုန်အဖြစ် ညက်ညက်ဖျန်းပေးပါသည်။
            </p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>၄။ Dual Sealing O-Rings</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              နော်ဇယ်ကိုယ်ထည်ပေါ်ရှိ အထက်/အောက် အိုကွင်းများဖြစ်ပြီး ဆီဝင် (Feed)၊ ဆီပြန် (Return) နှင့် အင်ဂျင်ဝိုင်များ မရောနှောစေရန် တာဆီးပေးပါသည်။
            </p>
          </div>
        </div>

        {/* DETAILED EXPLANATION SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Section 1: Electronic Solenoid Control in EUI */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>၁။ ဝါယာ Solenoid Valve သည် Common Rail လို ဆီဖျန်းချိန်ကို ဘယ်လို ဖန်တီးပေးသလဲ?</span>
            </h4>
            <div className="space-y-2 text-slate-300 leading-relaxed text-[11px]">
              <p>
                <strong>ဟုတ်ပါသည်!</strong> ကမ်ရှပ်ရော့ကာက ပလန်ဂျာကို အမြဲတစေ ဖိချနေသော်လည်း <strong>Solenoid Spill Valve မပိတ်မချင်း မည်သည့်အခါမှ ဆီမပန်းပါ!</strong>
              </p>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                <div>
                  <strong className="text-cyan-300">• အဆင့် (၁) - Spill Valve ပွင့်နေချိန် (De-energized):</strong> ကမ်က ပလန်ဂျာကို စတင်ဖိချသော်လည်း Spill Valve ပွင့်နေသဖြင့် ဆီများသည် ဖိအားမတက်ဘဲ ဆီပြန်လိုင်း (Return Line) ထဲသို့ လွတ်ထွက်နေသည် (No Pressure Build-up)။
                </div>
                <div>
                  <strong className="text-emerald-300">• အဆင့် (၂) - Solenoid အားသွင်းပြီး ပိတ်လိုက်ချိန် (Energized):</strong> ECU က ကွန်ပျူတာဖြင့် မိုက်ခရိုစက္ကန့်အတွင်း လျှပ်စစ်လွှတ်လိုက်သည်နှင့် Solenoid က Spill Valve ကို ဆွဲပိတ်လိုက်သည်။ ထွက်ပေါက်မဲ့သွားသော ဆီသည် ဖိအား ၂,၀၀၀ bar အထိ ချက်ချင်းထိုးတက်သွားပြီး နော်ဇယ်အပ်ကြွကာ အင်ဂျင်ထဲသို့ မြူခိုးငွေ့ကဲ့သို့ ညက်ညက်ဖျန်းသည် (Start of Injection - SOI)။
                </div>
                <div>
                  <strong className="text-rose-300">• အဆင့် (၃) - လျှပ်စစ်ဖြတ်တောက်ပြီး ပြန်ပွင့်ချိန် (De-energized):</strong> ECU က လျှပ်စစ်ဖြတ်လိုက်သည်နှင့် Spill Valve ပြန်ပွင့်သွားပြီး ဖိအား ချက်ချင်း ပြုတ်ကျသွားသည်။ နော်ဇယ်အပ်က စပရိန်တွန်းကန်အားဖြင့် ချက်ချင်း ပြန်ထိုင်ပိတ်သွားသည် (Abrupt Cut-off)။ ထို့ကြောင့် ဆီစက်မကျန်ဘဲ မီးခိုးမည်းမထွက်ခြင်း ဖြစ်သည်။
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Mechanical Unit Injector (MUI) Without Wires */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-cyan-300 flex items-center gap-1.5 text-sm">
              <Cog className="w-4 h-4 text-cyan-400" />
              <span>၂။ ဝါယာကြိုးမပါလျှင် (MUI) ဖြတ်ဘားကို ဘာဖြင့် ထိန်းသနည်း?</span>
            </h4>
            <div className="space-y-2 text-slate-300 leading-relaxed text-[11px]">
              <p>
                <strong>Control Rack (သွားစိပ်တံချောင်း) နှင့် Helical Helix (ခရုပတ်အစောင်းအပေါက်):</strong>
              </p>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                <p>
                  • <strong>Detroit Diesel 71/92 Series နှင့် CAT 3406B MUI</strong> တို့တွင် ဝါယာတစ်ပင်မှ မပါပါ။ ပလန်ဂျာကိုယ်ထည်ပေါ်တွင် ကောက်ကွေ့စောင်းနေသော <strong>Helix (ခရုပတ်ဖြတ်လမ်း)</strong> ကို စက်ပညာဖြင့် ဖောက်လုပ်ထားပါသည်။
                </p>
                <p>
                  • ယာဉ်မောင်း လီဗာနင်းသည့်အခါ အင်ဂျင်အပြင်ဘက်က <strong>Control Rack (သွားစိပ်တံချောင်း)</strong> က ပလန်ဂျာကို လှည့်ပေးပါသည်။
                </p>
                <p>
                  • ပလန်ဂျာ လှည့်သွားသော အစောင်းထောင့်ဒီဂရီပေါ် မူတည်၍ ဆီလျှံပေါက် (Spill port) ကို စောစောပိတ်မလား၊ ကြာကြာပိတ်မလား စက်ပိုင်းစစ်စစ်ဖြင့် ဆီပမာဏ (Fuel Quantity) ကို ထိန်းချုပ်ပေးခဲ့ခြင်း ဖြစ်ပါသည်။
                </p>
                <p>
                  • <strong>Cummins PT စနစ်:</strong> အဝင်ဆီဖိအား (Pressure) နှင့် နော်ဇယ်အပေါက်ပွင့်ချိန် (Time) အချိုးဖြင့် ထိန်းချုပ်ခဲ့ပါသည်။
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: HEUI Oil Hydraulic Technology */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-emerald-300 flex items-center gap-1.5 text-sm">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>၃။ Engine Oil Hydraulic Pressure ဖြင့် ဆီဖိအားထုတ်ယူသော စနစ် (HEUI Technology)</span>
            </h4>
            <div className="space-y-2 text-slate-300 leading-relaxed text-[11px]">
              <p>
                <strong>အသုံးပြုသောအင်ဂျင်များ:</strong> <span className="text-white font-semibold">CAT 3126, C7, C9, Navistar / Ford PowerStroke 7.3L & 6.0L</span>
              </p>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                <p>
                  • <strong>ကမ်ရှပ်ရော့ကာ မလိုဘဲ</strong> အင်ဂျင်ဝိုင်ဖိအားမြင့်ပန့် (High Pressure Oil Pump - HPOP, 3,000 PSI / 200 bar) ကို အသုံးပြုပါသည်။
                </p>
                <p>
                  • <strong>Intensifier Piston (ဖိအား ၇ ဆ အဆပွား ပစ္စတင်):</strong> မျက်နှာပြင်ဧရိယာ ၇ ဆ ကြီးသော အပေါ်ပစ္စတင်ကို အင်ဂျင်ဝိုင် ၂၀၀ bar ဖြင့် ဖိချပြီး၊ မျက်နှာပြင်ဧရိယာ ၇ ဆ သေးငယ်သော အောက်ဆီပလန်ဂျာကနေ ဒီဇယ်ဆီကို <strong>၇ ဆ (200 bar x 7 = 1,400–1,800 bar)</strong> ဖိအားအဖြစ် ဟိုက်ဒရောလစ် အဆပွား ထုတ်ယူခြင်း ဖြစ်ပါသည်။
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Fuel Feed & Over-Return Flow */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
            <h4 className="font-bold text-rose-300 flex items-center gap-1.5 text-sm">
              <Droplets className="w-4 h-4 text-rose-400" />
              <span>၄။ ဆီဝင်လမ်း (Fuel Feed) နှင့် Over-Return (ဆီပြန်လိုင်း) ဖန်တီးထားပုံ</span>
            </h4>
            <div className="space-y-2 text-slate-300 leading-relaxed text-[11px]">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5">
                <p>
                  • <strong>ဆလင်ဒါခေါင်း Fuel Gallery:</strong> ဆလင်ဒါခေါင်းအတွင်း၌ ဆီဝင်လိုင်း (Supply Gallery) နှင့် ဆီပြန်လိုင်း (Return Gallery) ကို ပြွန်လမ်းဖောက်လုပ်ထားပြီး နော်ဇယ်ကိုယ်ထည်ပေါ်ရှိ အထက်/အောက် အိုကွင်းများဖြင့် သီးခြားစီ စည်းခတ်ထားပါသည်။
                </p>
                <p>
                  • <strong>အအေးခံစနစ် (Cooling Function):</strong> Feed Pump (၄ မှ ၆ bar) မှ အေးမြသော ဒီဇယ်ဆီသည် နော်ဇယ်တွင်းသို့ အဆက်မပြတ် စီးဝင်ပါသည်။
                </p>
                <p>
                  • <strong>Over-Return (ဆီပိုဆီလျှံ ပြန်လမ်း):</strong> ဆီဖျန်းရာတွင် ပလန်ဂျာဖိလိုက်သော ဆီပမာဏ၏ ၂၀-၃၀% ခန့်သာ ဆလင်ဒါထဲသို့ ဖျန်းပြီး၊ ကျန်ရှိသော <strong>၇၀-၈၀% ဆီပမာဏသည် နော်ဇယ်ကိုယ်ထည်ကို ဖြတ်သန်းကာ အပူများကို စုပ်ယူပြီး Return Port ➔ Fuel Tank ဆီသို့ Over-Return အဖြစ် အဆက်မပြတ် ပြန်လည်စီးဆင်းသွားပါသည်</strong>။ ထို့ကြောင့် နော်ဇယ်သည် မီးတောက်အပူချိန် မြင့်မားသော ဆလင်ဒါထဲတွင် ထိုင်နေသော်လည်း မလောင်ကျွမ်းဘဲ အမြဲ အေးမြနေခြင်း ဖြစ်ပါသည်။
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
