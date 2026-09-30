# Toyota Fortuner Engine Torque & Spec Guide

A modern workshop reference web application for Toyota Fortuner Turbo Diesel engines (**1GD-FTV 2.8L**, **2GD-FTV 2.4L**, **1KD-FTV 3.0L**, and **2KD-FTV 2.5L**).

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Features Included

1. **Torque Specifications (ပေါင်ကြပ်အားများ)**:
   - Cylinder Head Bolts (including angle-torque 90° + 90° specifications)
   - Crankshaft Main Bearings & Con-Rod Cap Bolts
   - Harmonic Damper Crankshaft Pulley Bolt (High torque 265 N·m / 235 N·m)
   - Common Rail Injector Clamp Bolts & Fuel Unions
   - Camshaft Caps & Flywheel Bolts

2. **Interactive Cylinder Head Tightening Diagram (ခေါင်းမူလီကြပ်ရမည့် အစီအစဉ်)**:
   - Visual numbered sequence diagram (1 to 10 for 1GD/2GD, 1 to 18 for 1KD/2KD)
   - Center-outward pattern to prevent cylinder head warpage
   - Intake & Exhaust side orientation

3. **Valve Clearance Specifications (ဘားအကွာအဝေးများ)**:
   - Cold engine intake & exhaust valve lash tolerances
   - Hydraulic Lash Adjusters (HLA) vs. Solid Shim-over-bucket mechanisms
   - Workshop feeler gauge best practices

4. **Timing System Guide (တိုင်မင်မှတ်များ)**:
   - Timing Chain (1GD / 2GD) vs. Timing Belt (1KD / 2KD 150,000 km replacement)
   - Alignment steps for Crankshaft TDC 0°, Camshaft sprockets, and High-Pressure Fuel Pump
   - Pre-startup 2-revolution safety checks

5. **Torque Unit Converter (ပေါင်အား ယူနစ်တွက်ချက်ပေးသည့် စနစ်)**:
   - Instant conversion between **N·m** (Newton-meter), **ft-lb** (Foot-pound), and **kgf·m** (Kilogram-meter)
   - Quick one-click presets for common engine bolts

6. **Engine Rebuild Checklist (အလုပ်ရုံ စစ်ဆေးရန်စာရင်း)**:
   - Interactive checklist for blind-hole hydraulic lock prevention, thread lubrication, angle torque marking, and rotation check

7. **Bilingual Support**:
   - Seamless toggling between **Burmese (မြန်မာ)** and **English**.

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production / GitHub
```bash
npm run build
```
This produces optimized static assets in the `dist` folder, ready for deployment to **GitHub Pages**, **Vercel**, **Netlify**, or **Cloud Run**.

---

## 🔧 Technologies
- **Vite**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons**
