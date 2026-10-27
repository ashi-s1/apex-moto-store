import { Product, DerivedStockInfo, StockState } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "prod-apex-gp-r-carbon-helmet",
    slug: "apex-gp-r-carbon-helmet",
    title: "APEX GP-R Full Carbon Fiber Competition Helmet",
    subtitle: "FIM & ECE 22.06 Homologated Track Helmet with High-Speed Aerodynamic Spoiler",
    category: "Rider Gear & Protection",
    partSku: "APX-CF-HLM-2206",
    price: 54990,
    originalPrice: 64990,
    inventoryCount: 14, // > 5 => "In Stock"
    rating: 4.9,
    reviewCount: 38,
    shortDescription:
      "Engineered in the wind tunnel for speeds exceeding 300 km/h. Constructed with autoclave pre-preg 3K carbon weave, high-density 5-zone EPS shock absorption, and certified under the stringent ECE 22.06 standard.",
    fullDescription: [
      "The APEX GP-R represents the pinnacle of track safety technology. Molded from 100% Japanese Toray 3K aerospace-grade carbon fiber under high-pressure vacuum autoclaves, it delivers unmatched energy dispersion while keeping total mass to a minimum.",
      "Aerodynamics were sculpted through CFD modeling and verified at the BIC track. The integrated tear-off spoiler eliminates turbulent buffeting in full racing tuck. The optical Class-1 panoramic visor provides 190° horizontal and 85° vertical vision with zero distortion.",
      "The interior features moisture-wicking Sanitized® antibacterial textiles, emergency quick-release cheek pads (EQRS) for track paramedics, and dual micro-metric venturi exhaust ports."
    ],
    keyHighlights: [
      "Full Autoclave Pre-Preg 3K Carbon Fiber Shell",
      "ECE 22.06 & DOT FMVSS 218 Double Certified",
      "Titanium Double D-Ring Retention System",
      "Class 1 Optical Visor + Pinlock 120 MaxVision Included",
      "Emergency Quick-Release Cheek Pads (EQRS)",
      "Aero-Stabilized for Speeds up to 320 km/h"
    ],
    specs: {
      material: "3K Toray Aerospace Carbon Fiber Shell & 5-Zone Multi-Density EPS",
      weight: "1,280g ± 30g (Size M, Race Trim)",
      safetyRating: "ECE 22.06 / DOT FMVSS 218 / FIM Racing Homologated",
      partSku: "APX-CF-HLM-2206",
      finish: "Raw Matte Carbon Weave with Gloss UV-Resistant Track Clearcoat",
      torqueSpec: "Visor Pivot Screws: 1.5 Nm (Finger Tight Torx T10)",
      closureOrMount: "Grade 5 Titanium Double D-Ring Fastener with Magnetic Tab",
      certificationBody: "IDIADA Automotive Testing / UTAC European Homologation",
      origin: "Engineered in Bengaluru, Shell Fabricated in Precision Composite Facility",
      warranty: "5-Year Apex Crash-Replacement & Manufacturer Warranty",
      extraAttributes: {
        "Aero Drag Coefficient": "Cd 0.284 at 250 km/h in Full Tuck",
        "Visor Thickness": "4.3mm Optical Grade Polycarbonate with Tear-Off Posts",
        "Ventilation Channels": "3 Ram-Air Front Intakes, 4 Venturi Rear Extractors",
        "Acoustic Rating": "84 dB at 120 km/h with Chin Curtain Deployed"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Aero profile optimized for aggressive clip-on reach & supersport bubble tuck",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390 / 890 Duke R / 990 RC R",
        yearRange: "2020 - 2026",
        fitmentNotes: "High forehead visor cut provides unobstructed forward horizon through high tank humps",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R / ZX-4RR",
        yearRange: "2019 - 2026",
        fitmentNotes: "Wind tunnel tuned for high-velocity bubble protection at top speeds",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Ducati",
        model: "Panigale V4 / V2 / SuperSport 950",
        yearRange: "2020 - 2026",
        fitmentNotes: "Tested in deep-angle track corners; accommodates aero hump racing leathers seamlessly",
        displacementCc: 1103,
        category: "Supersport"
      },
      {
        make: "BMW",
        model: "S1000RR / M1000RR",
        yearRange: "2019 - 2026",
        fitmentNotes: "Calibrated downforce channel matches BMW M-aero winglet air currents",
        displacementCc: 999,
        category: "Supersport"
      },
      {
        make: "Triumph",
        model: "Street Triple 765 RS / Daytona 660",
        yearRange: "2021 - 2026",
        fitmentNotes: "Low buffeting in both upright naked position and track clip-on stances",
        displacementCc: 765,
        category: "Naked"
      },
      {
        make: "Royal Enfield",
        model: "Continental GT 650",
        yearRange: "2019 - 2026",
        fitmentNotes: "Cafe racer friendly with clean aerodynamic chin bar clearances",
        displacementCc: 648,
        category: "Cafe Racer"
      }
    ],
    images: [
      {
        id: "img-1",
        url: "https://images.unsplash.com/photo-1627139737418-c8ff67165454?auto=format&fit=crop&w=1200&q=80",
        alt: "APEX GP-R Full Carbon Fiber Helmet 45 degree angle studio view",
        label: "Front 45° Angle"
      },
      {
        id: "img-2",
        url: "https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=1200&q=80",
        alt: "APEX GP-R Full Carbon Fiber Helmet side profile aerodynamics",
        label: "Side Profile & Aero"
      },
      {
        id: "img-3",
        url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        alt: "APEX GP-R Full Carbon Fiber Helmet raw weave close-up and visor",
        label: "Carbon Weave Detail"
      },
      {
        id: "img-4",
        url: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        alt: "APEX GP-R Helmet track action ready",
        label: "Track Cockpit View"
      }
    ],
    boxContents: [
      "APEX GP-R Full Carbon Helmet (Pre-installed Clear Class-1 Visor)",
      "Dark Smoke 80% Tint Race Visor (Track Use Only)",
      "Pinlock® 120 MaxVision Anti-Fog Insert",
      "Apex Heavy-Duty Padded Helmet Duffle Bag with Fleece Lining",
      "Tear-Off Film 5-Pack for Track Days",
      "Apex High-Vis Reflective Decal Pack (Complies with ECE 22.06 Retro-Reflective Standard)",
      "Technical Calibration & Maintenance Guide"
    ],
    trackApproved: true,
    homologationCode: "E9-22R-06/00-1184"
  },
  {
    id: "prod-apex-corse-titanium-exhaust-ktm-390",
    slug: "apex-corse-titanium-exhaust-ktm-390",
    title: "Apex Corse Titanium Full Race Exhaust System",
    subtitle: "Hydroformed Grade-1 Titanium Manifold with Carbon End Shield & Billet Mounts",
    category: "Performance Exhausts",
    partSku: "APX-EXH-TI-390",
    price: 38500,
    originalPrice: 45000,
    inventoryCount: 3, // <= 5 && > 0 => "Low Stock"
    rating: 4.8,
    reviewCount: 24,
    shortDescription:
      "Saves 4.8 kg over stock while unleashing +4.2 BHP and a deep, crisp race acoustics profile. Hydroformed Grade-1 commercial pure titanium with robotic TIG pie-cut welds and thermal blue oxidization.",
    fullDescription: [
      "The Apex Corse Titanium Full System for the single-cylinder platform is dyno-developed specifically to relieve high-RPM exhaust gas backpressure. Crafted from ultra-thin 0.9mm Grade-1 Commercial Pure Titanium tubing, the system sheds massive rotational mass from the underbelly.",
      "Features a conical stepped header that expands from 35mm to 52mm for optimal scavenging, feeding into a resonance-tuned pre-chamber before exiting via a 60mm carbon-capped silencer.",
      "Includes an integrated M12x1.25 O2 lambda sensor bung, stainless spring retention fasteners, and an easily removable dB killer baffle allowing legal street cruising or full-bore race operation."
    ],
    keyHighlights: [
      "Grade 1 CP Pure Titanium Tubing (0.9mm wall thickness)",
      "Massive 4.8 kg weight reduction over factory system",
      "Dyno Verified: +4.2 BHP @ 9,200 RPM / +3.1 Nm @ 7,100 RPM",
      "Autoclave 3K Carbon Fiber Slanted End-Cap",
      "Removable Precision dB Killer Insert Included",
      "Precision CNC Machined 6061-T6 Billet Mounting Bracket"
    ],
    specs: {
      material: "Grade 1 Commercial Pure Titanium (CP1) & High-Temp 3K Carbon Fiber",
      weight: "2.15 kg total system (OEM is 6.95 kg — 69% weight reduction)",
      safetyRating: "ECE R41-04 Sound Level Compliant (with dB Killer) / Track FIM 107 dB Limit",
      partSku: "APX-EXH-TI-390",
      finish: "Raw Satin Brushed Titanium with Anodized Heat-Treated Blue Welds",
      torqueSpec: "Exhaust Stud Nuts: 18 Nm | Mid-Pipe Clamp: 12 Nm | Subframe Hanger: 22 Nm",
      closureOrMount: "Direct Chassis Bolt-On using OEM Bushings + Billet Adapter",
      certificationBody: "Apex Track Laboratory & Automotive Acoustic Verification Cell",
      origin: "Crafted in Bengaluru High-Precision CNC & TIG Welding Facility",
      warranty: "2-Year Structural Crack & Weld Failure Warranty",
      extraAttributes: {
        "Sound Rating": "92 dB @ 4,500 RPM (with Baffle) / 104 dB (Open Baffle)",
        "Dyno Gains": "+4.2 BHP peak power / +3.1 Nm torque with stock ECU",
        "Header Step": "35mm stepped to 45mm, ending in 52mm collector",
        "Thermal Tolerance": "Stable up to 880°C continuous exhaust gas temperature"
      }
    },
    compatibleMotorcycles: [
      {
        make: "KTM",
        model: "RC 390",
        yearRange: "2020 - 2026",
        fitmentNotes: "Direct bolt-on to cylinder head. Fits inside OEM race belly pan with no trimming",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "390 Duke",
        yearRange: "2017 - 2026",
        fitmentNotes: "Direct bolt-on. Mounts to right-side pillion footpeg hanger or included solo track bracket",
        displacementCc: 373,
        category: "Naked"
      },
      {
        make: "KTM",
        model: "390 Adventure",
        yearRange: "2020 - 2026",
        fitmentNotes: "Compatible with OEM bash plate. Provides 30mm extra ground clearance",
        displacementCc: 373,
        category: "Adventure"
      },
      {
        make: "Husqvarna",
        model: "Vitpilen 401",
        yearRange: "2018 - 2025",
        fitmentNotes: "Plug & play fitment. Retains stock oxygen sensor wiring harness length",
        displacementCc: 373,
        category: "Naked"
      },
      {
        make: "Husqvarna",
        model: "Svartpilen 401",
        yearRange: "2018 - 2025",
        fitmentNotes: "Direct fit. Clears scrambler frame geometry with zero interference",
        displacementCc: 373,
        category: "Naked"
      }
    ],
    images: [
      {
        id: "img-ex-1",
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex Corse Titanium Full Exhaust System profile",
        label: "Silencer & Header Setup"
      },
      {
        id: "img-ex-2",
        url: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=1200&q=80",
        alt: "Titanium TIG welds and blue oxidation detail",
        label: "TIG Weld Craftsmanship"
      },
      {
        id: "img-ex-3",
        url: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80",
        alt: "Mounted exhaust angle on track motorcycle",
        label: "Chassis Mounted Profile"
      }
    ],
    boxContents: [
      "Apex Grade-1 Titanium Full Stepped Header",
      "Apex Race Titanium Muffler with 3K Carbon Fiber End Cap",
      "Removable Precision CNC Sound Baffle (dB Killer)",
      "Billet 6061-T6 Aluminum Solo Exhaust Hanger Bracket",
      "Graphite Flange Gasket & 4x Swivel Tension Springs with Silicone Sleeves",
      "Apex High-Temp Anti-Seize Copper Grease Pack",
      "Dyno Curve Verification Certificate & Assembly Schematic"
    ],
    trackApproved: true,
    homologationCode: "APX-EXH-ECE-R41"
  },
  {
    id: "prod-apex-monobloc-radial-brake-calipers",
    slug: "apex-monobloc-radial-brake-calipers",
    title: "Apex Monobloc 4-Piston Radial Brake Caliper Pair (100mm)",
    subtitle: "Solid Billet 7075-T6 Aerospace Aluminum with Titanium Nitride Coated Pistons",
    category: "Braking & Hydraulics",
    partSku: "APX-BRK-MBL-100",
    price: 62000,
    originalPrice: 72000,
    inventoryCount: 0, // 0 => "Out of Stock"
    rating: 5.0,
    reviewCount: 19,
    shortDescription:
      "Machined from a monolithic 5 kg billet of 7075-T6 alloy. Zero caliper bridge deflection under intense threshold braking into turn 1. Features 30/34mm titanium nitride ventilated pistons for zero brake fade.",
    fullDescription: [
      "When braking from 260 km/h, conventional two-piece bolted calipers flex, resulting in spongy lever feel and fluid boiling. The Apex Monobloc eliminates the central parting plane entirely, carved from a single continuous block of 7075-T6 alloy on high-precision 5-axis DMG Mori CNC mills.",
      "The differential 30mm leading and 34mm trailing piston arrangement prevents tapered pad wear and yields exceptional bite modulation. Titanium nitride (TiN) physical vapor deposition coating reduces piston drag friction by 60% compared to hard anodize.",
      "Equipped with radial cooling fins that accelerate convective heat transfer away from the brake fluid reservoir, keeping lever stroke rock-solid even across 25-lap endurance races."
    ],
    keyHighlights: [
      "Single-Piece 7075-T6 Billet Aluminum Monobloc Architecture",
      "Differential 30mm / 34mm Titanium Nitride Coated Ventilated Pistons",
      "100mm Radial Mounting Pitch with 30mm Offset",
      "Stainless Steel Radial Cooling Bridges & Pad Anti-Rattle Springs",
      "TÜV Rheinland Tested & Component Homologated",
      "Sintered Race Compound Pads (0.62 friction coefficient) Included"
    ],
    specs: {
      material: "Solid 7075-T6 Billet Aerospace Alloy with Hard-Coat Military Anodize",
      weight: "610g per caliper body (without pads) / 720g with Sintered Carbon Pads",
      safetyRating: "TÜV Component Approved / ECE R78 Braking Homologation Compliant",
      partSku: "APX-BRK-MBL-100",
      finish: "Type III Hard Anodized Slate Anthracite with Laser Engraved Apex Crest",
      torqueSpec: "Radial Caliper Bolts: 45 Nm | Banjo Fluid Bolt: 20 Nm | Bleed Nipple: 8 Nm",
      closureOrMount: "Radial 100mm Bolt Spacing (M10 x 1.25mm Pitch)",
      certificationBody: "TÜV Rheinland Kraftfahrt GmbH & Apex Deceleration Testing Cell",
      origin: "CNC Milled in Precision Aerospace Facility, Electronic Assembly & Testing in Bengaluru",
      warranty: "3-Year Unconditional Structural & Hydraulic Seal Warranty",
      extraAttributes: {
        "Piston Count": "4 Opposed Pistons per Caliper (30mm / 34mm Staggered)",
        "Fluid Compatibility": "DOT 4 & DOT 5.1 Racing Synthetic Glycol Fluid Only",
        "Max Working Pressure": "140 Bar Continuous Track Hydraulic Pressure",
        "Heat Dissipation": "18 Integrated Convective Cooling Ribs"
      }
    },
    compatibleMotorcycles: [
      {
        make: "KTM",
        model: "890 Duke R / 990 Duke / 1290 Super Duke R",
        yearRange: "2020 - 2026",
        fitmentNotes: "Direct bolt-on to 100mm WP Apex Pro radial fork bottoms with OEM 320mm rotors",
        displacementCc: 890,
        category: "Naked"
      },
      {
        make: "Aprilia",
        model: "RS 660 / Tuono 660 Factory",
        yearRange: "2021 - 2026",
        fitmentNotes: "Replaces OEM calipers directly. Re-uses stock brake lines and master cylinder",
        displacementCc: 659,
        category: "Supersport"
      },
      {
        make: "Ducati",
        model: "Monster 937 / Hypermotard 950 SP",
        yearRange: "2020 - 2026",
        fitmentNotes: "Direct bolt-on 100mm radial spacing. Pairs perfectly with 19RCS master cylinder",
        displacementCc: 937,
        category: "Naked"
      },
      {
        make: "Triumph",
        model: "Street Triple 765 R / RS",
        yearRange: "2020 - 2026",
        fitmentNotes: "Direct bolt-on to Showa BPF and Ohlins forks. Uses OEM M10 mounting bolts",
        displacementCc: 765,
        category: "Naked"
      },
      {
        make: "BMW",
        model: "F900R / S1000R (Cast Wheel models)",
        yearRange: "2021 - 2026",
        fitmentNotes: "Compatible with 100mm pitch fork mounts. Includes spacer shims for 320mm discs",
        displacementCc: 895,
        category: "Naked"
      }
    ],
    images: [
      {
        id: "img-brk-1",
        url: "https://images.unsplash.com/photo-1698170610927-b64b6f9f5bc3?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex Monobloc Radial Brake Caliper pair studio display",
        label: "Radial Caliper Set"
      },
      {
        id: "img-brk-2",
        url: "https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?auto=format&fit=crop&w=1200&q=80",
        alt: "CNC machining billet toolpaths and radial fin details",
        label: "CNC Billet Details"
      },
      {
        id: "img-brk-3",
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        alt: "Mounted caliper on racing motorcycle wheel rotor",
        label: "Rotor Mounted View"
      }
    ],
    boxContents: [
      "Left & Right Apex 7075 Monobloc Radial Calipers (Pre-bled & Sealed)",
      "Set of 4 Sintered Carbon-Metallic Apex Track Brake Pads",
      "4x Grade-5 Titanium M10 Caliper Mounting Bolts with Safety Wire Holes",
      "4x Precision Caliper Center Spacers (5mm & 10mm options included)",
      "Titanium Double Banjo Bleeder Bolts with Copper Crush Washers",
      "Laser-Etched Inspection Certificate & Pad Wear Gauge"
    ],
    trackApproved: true,
    homologationCode: "TUV-KBA-91482"
  },
  {
    id: "prod-apex-track-spec-cnc-rearsets",
    slug: "apex-track-spec-cnc-rearsets",
    title: "Apex Track-Spec Multi-Adjustable CNC Billet Rearsets",
    subtitle: "12-Position Knurled Footpeg Assembly with Sealed Ball Bearings & GP Shift Capability",
    category: "Chassis & Ergonomics",
    partSku: "APX-CHS-RST-650",
    price: 21990,
    originalPrice: 26500,
    inventoryCount: 8, // > 5 => "In Stock"
    rating: 4.7,
    reviewCount: 31,
    shortDescription:
      "Transform your riding posture with 30mm horizontal and 25mm vertical footpeg adjustability. Machined from 6061-T6 billet aluminum with deeply aggressive knurling for maximum boot grip in torrential rain or dry apexes.",
    fullDescription: [
      "Stock footpegs are rubber-damped, low-mounted, and fold prematurely during high lean angles. The Apex Track-Spec Rearsets unlock up to 6° additional lean angle by elevating and setting back your foot controls.",
      "The shift and brake levers pivot on dual ABEC-5 stainless steel sealed ball bearings for silky-smooth, zero-slop toe action. The shift linkage allows instant conversion between standard street shift (1-down, 5-up) and reverse GP race shift (1-up, 5-down) with no extra parts.",
      "Includes an integrated rear hydraulic brake light pressure switch, keeping your motorcycle street-legal while enjoying race-track performance."
    ],
    keyHighlights: [
      "CNC Machined from solid 6061-T6 Aircraft Grade Billet Aluminum",
      "12-Position Multi-Hole Matrix for Tailored Ergos",
      "Dual ABEC-5 Stainless Sealed Bearings per Lever Pivot",
      "Tool-Free Standard & Reverse GP Shift Conversion",
      "High-Traction Knurled Pegs with Breakaway Engineered Tips",
      "Hydraulic Inline Brake Pressure Switch Included"
    ],
    specs: {
      material: "6061-T6 Aircraft Billet Aluminum & 304 Stainless Steel Linkage Hardware",
      weight: "890g total assembly (including all rods, levers, and fasteners)",
      safetyRating: "TÜV Component Approved / FIM Technical Regulations Compliant (3.12.4)",
      partSku: "APX-CHS-RST-650",
      finish: "Hard Anodized Stealth Matte Black with Contrast Chamfer Highlights",
      torqueSpec: "Main Baseplate Bolts: 28 Nm | Footpeg Stud: 22 Nm (Medium Loctite 243)",
      closureOrMount: "Direct Frame Sub-Bracket Mounting using OEM Threaded Bungs",
      certificationBody: "Apex Dynamics Structural Engineering Laboratory",
      origin: "CNC Precision Machined in Bengaluru",
      warranty: "Lifetime Structural Warranty Against Peg Shearing Under Normal Use",
      extraAttributes: {
        "Adjustability Range": "12 Positions: 15-35mm Back, 10-25mm Up from Stock",
        "Toe Peg Adjustment": "3-Position Eccentric Rubber Foot Roller",
        "Bearing Type": "Double Sealed 608-2RS Stainless Race Bearings",
        "Quickshifter Fit": "Compatible with Translogic, Healtech & Dynojet Sensor Rods"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Royal Enfield",
        model: "Continental GT 650",
        yearRange: "2019 - 2026",
        fitmentNotes: "Direct bolt-on. Resolves stock forward footpeg position for true cafe racer stance",
        displacementCc: 648,
        category: "Cafe Racer"
      },
      {
        make: "Royal Enfield",
        model: "Interceptor 650",
        yearRange: "2019 - 2026",
        fitmentNotes: "Requires routing rear master cylinder with included custom braided linkage rod",
        displacementCc: 648,
        category: "Cafe Racer"
      },
      {
        make: "Kawasaki",
        model: "Ninja 400 / Ninja 500 / Z400",
        yearRange: "2018 - 2026",
        fitmentNotes: "Direct bolt-on track upgrade. Clears standard and Akrapovic exhaust hangers",
        displacementCc: 399,
        category: "Supersport"
      },
      {
        make: "Yamaha",
        model: "YZF-R3 / MT-03",
        yearRange: "2019 - 2026",
        fitmentNotes: "Direct fit. Accommodates factory side stand and safety kill switch without modification",
        displacementCc: 321,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390",
        yearRange: "2022 - 2026",
        fitmentNotes: "Bolt-on to modern trellis subframe. Provides 35mm higher toe clearance on track",
        displacementCc: 373,
        category: "Supersport"
      }
    ],
    images: [
      {
        id: "img-rst-1",
        url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex Track-Spec Adjustable CNC Rearset footpeg pair",
        label: "Billet Assembly Profile"
      },
      {
        id: "img-rst-2",
        url: "https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=1200&q=80",
        alt: "Knurled footpeg and bearing linkage mechanism",
        label: "Knurled Peg Detail"
      },
      {
        id: "img-rst-3",
        url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        alt: "Rearset mounted on motorcycle trellis frame",
        label: "Chassis Mounted Stance"
      }
    ],
    boxContents: [
      "Left (Shift) & Right (Brake) CNC 6061-T6 Billet Rearset Assemblies",
      "High-Traction Knurled Track Pegs with End Sliders",
      "Aircraft Grade Shift Rod with Left/Right Heim Joint Rose Bearings",
      "Hydraulic Brake Light Inline Pressure Switch Wire Assembly",
      "Stainless Steel Grade A4 Mounting Hardware Kit",
      "Apex Setup Guide & Torque Spec Matrix"
    ],
    trackApproved: true,
    homologationCode: "TUV-FIM-CH-2024"
  },
  {
    id: "prod-apex-billet-frame-sliders",
    slug: "apex-billet-frame-sliders",
    title: "Apex Billet Frame Sliders & Crash Protection Kit",
    subtitle: "CNC 6061-T6 Billet Aluminum Pucks with Sacrificial High-Density Delrin Impact Tips",
    category: "Crash Protection",
    partSku: "APX-CP-SLD-01",
    price: 8500,
    originalPrice: 10500,
    inventoryCount: 5, // <= 5 => "Low Stock"
    rating: 4.9,
    reviewCount: 18,
    shortDescription:
      "CNC-machined 6061-T6 aluminum pucks with sacrificial Delrin tips. Engineered to deflect impact forces and prevent frame, engine casing, and cylinder head abrasion during high-speed lowside spills.",
    fullDescription: [
      "Engineered for severe track duty, the Apex Billet Frame Sliders combine aerospace-grade 6061-T6 billet aluminum mounts with press-fit sacrificial DuPont Delrin® slider heads. Under high-speed slide conditions, Delrin provides a controlled kinetic friction coefficient, preventing violent bike cartwheeling while protecting critical frame welds and engine casings.",
      "Each slider features a patented energy-dissipating chromoly steel through-bolt designed to shear or bend at extreme angular loads, safeguarding engine casing threads from catastrophic fracture.",
      "Laser-etched with Apex alignment marks and hard-anodized for maximum UV and chemical resilience against race fluids and synthetic oils."
    ],
    keyHighlights: [
      "CNC-Machined 6061-T6 Billet Aluminum Structure",
      "Replaceable DuPont™ High-Density Delrin® Impact Puck",
      "De-escalating 12.9 Grade Tensile Chromoly Mounting Studs",
      "Direct Bolt-On No-Fairing-Cut Architecture",
      "Verified on Circuito do Estoril & Buddh International Circuit",
      "Resistant to Brake Fluid, Fuel, and Thermal Shock"
    ],
    specs: {
      material: "6061-T6 Aerospace Billet Aluminum & High-Density DuPont™ Delrin®",
      weight: "680g (Pair with Grade 12.9 Fasteners)",
      safetyRating: "FIM Track Safety Compliant / Structural Frame Protection Standard",
      partSku: "APX-CP-SLD-01",
      finish: "Type II Military Matte Black Anodize with Delrin Machined Core",
      torqueSpec: "Engine Mount Through-Bolts: 45 Nm (Loctite 243 Recommended)",
      closureOrMount: "Direct Engine Spar Bolt-On Mount (No Fairing Modification Required)",
      certificationBody: "Apex Structural Impact Cell & FIM Technical Inspection Standard",
      origin: "Engineered and 5-Axis CNC Milled in Bengaluru, India",
      warranty: "Lifetime Replacement Guarantee on Billet Brackets (Post-Crash Discount on Delrin Pucks)",
      extraAttributes: {
        "Friction Coefficient": "0.24 Dynamic Slide on Asphalt",
        "Puck Diameter": "55mm Solid Core",
        "Bolt Tensile Rating": "12.9 High-Yield Chromoly Alloy",
        "Impact Shear Limit": "14.2 kN Impact Threshold"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Direct bolt-on to twin-spar frame engine mount bracket without fairing alteration",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390 / 390 Duke",
        yearRange: "2017 - 2026",
        fitmentNotes: "Engine trellis hanger integration. Provides clearance for crash bars or track bodywork",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R",
        yearRange: "2019 - 2026",
        fitmentNotes: "Direct bolt-on through OEM chassis port. Zero fairing trimming required",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Ducati",
        model: "Panigale V4 / Monster 937",
        yearRange: "2020 - 2026",
        fitmentNotes: "M12 chromoly stud replaces OEM crankcase hanger bolt seamlessly",
        displacementCc: 1103,
        category: "Supersport"
      },
      {
        make: "Triumph",
        model: "Street Triple 765 RS",
        yearRange: "2020 - 2026",
        fitmentNotes: "Twin-point reinforced bracket wraps cleanly around cast cylinder head",
        displacementCc: 765,
        category: "Naked"
      }
    ],
    images: [
      {
        id: "img-sld-1",
        url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex Billet Frame Sliders isometric view",
        label: "Billet Slider Assembly"
      },
      {
        id: "img-sld-2",
        url: "https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=1200&q=80",
        alt: "Delrin puck detail view",
        label: "Sacrificial Delrin Tip"
      },
      {
        id: "img-sld-3",
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        alt: "Mounted frame sliders on motorcycle chassis",
        label: "Chassis Mounted View"
      }
    ],
    boxContents: [
      "Left & Right CNC 6061-T6 Billet Aluminum Base Mounts",
      "2x High-Density DuPont Delrin Impact Slider Pucks (Pre-installed)",
      "Grade 12.9 High-Tensile Chromoly Engine Mount Studs & Spacers",
      "Vibration-Damping O-Rings & Aluminum Chamfer Washers",
      "Apex Precision Torque Specification & Assembly Sheet"
    ],
    trackApproved: true,
    homologationCode: "FIM-CP-2026-08"
  },
  {
    id: "prod-apex-track-spec-monoshock",
    slug: "apex-track-spec-monoshock",
    title: "Apex Track-Spec Multi-Adjustable Nitrogen Mono-Shock",
    subtitle: "Fully Independent High/Low-Speed Compression, Rebound & Hydraulic Preload Damping",
    category: "Suspension",
    partSku: "APX-SUS-MS-02",
    price: 45000,
    originalPrice: 52000,
    inventoryCount: 2, // <= 5 => "Low Stock"
    rating: 4.9,
    reviewCount: 12,
    shortDescription:
      "Fully adjustable compression, rebound, and preload damping. External piggyback nitrogen reservoir and 46mm DLC-coated piston for thermal consistency and fade-free rear tire mechanical grip.",
    fullDescription: [
      "Engineered for supersport and naked competition machines, the Apex Track-Spec Mono-Shock isolates track irregularities and settles the chassis under violent drive-phase throttle application. Features a massive 46mm CNC-machined piston moving within a honed 7075-T6 hard-anodized shock body.",
      "Equipped with an external piggyback nitrogen reservoir with a floating dividing piston to keep damper oil pressurized at 12 bar, preventing cavitation and fluid emulsion during 40-minute race stints in ambient track temperatures up to 45°C.",
      "Offers 24 clicks of rebound damping, 18 clicks of high-speed compression, 20 clicks of low-speed compression, and a remote hydraulic preload adjuster allowing instant setup tweaks between qualifying and race trim."
    ],
    keyHighlights: [
      "46mm CNC Billet 7075 Piston with High-Flow Shims",
      "16mm Hard-Chromed DLC (Diamond-Like Carbon) Low-Friction Shaft",
      "External Piggyback Nitrogen Gas Bladder (12 Bar Factory Charge)",
      "Independent High & Low-Speed Compression Adjusters",
      "Remote Hydraulic Spring Preload Adjuster",
      "Dyno Tested & Calibrated with Individual Damping Curve Sheet"
    ],
    specs: {
      material: "7075-T6 Billet Hard-Anodized Aluminum Body & Chrome-Silicon Cold-Coiled Spring",
      weight: "3,120g (Including Preload Reservoir & Fasteners)",
      safetyRating: "FIM Supersport Homologated / TÜV Component Certified",
      partSku: "APX-SUS-MS-02",
      finish: "Hard-Anodized Anthracite Body with High-Vis Apex Orange Powder-Coated Spring",
      torqueSpec: "Upper/Lower Shock Mount Bolts: 50 Nm (Factory Spec)",
      closureOrMount: "Direct Replacement for OEM Rear Linkage / Trunnion Mount",
      certificationBody: "Apex Suspension Dynamics R&D Center & TÜV Rheinland",
      origin: "Engineered & Hand-Assembled in Bengaluru Precision Suspension Cleanroom",
      warranty: "3-Year Track Warranty Including First Free Oil & Seal Overhaul",
      extraAttributes: {
        "Piston Diameter": "46mm High-Velocity Shimming",
        "Shaft Diameter": "16mm Micro-Finished DLC Shaft",
        "Rebound Adjustment": "24 Precise Clicks",
        "High-Speed Compression": "18 Clicks Dial",
        "Low-Speed Compression": "20 Clicks Dial",
        "Spring Rate": "95 N/mm (Alternative 85 & 105 N/mm Springs Available)"
      }
    },
    compatibleMotorcycles: [
      {
        make: "KTM",
        model: "RC 390 / 390 Duke",
        yearRange: "2017 - 2026",
        fitmentNotes: "Direct bolt-on to swingarm clevis and upper frame mount. Includes reservoir bracket",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Fits factory delta linkage with included aerospace needle bearings",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Triumph",
        model: "Street Triple 765 RS",
        yearRange: "2020 - 2026",
        fitmentNotes: "Replaces OEM unit; remote preload attaches directly to left subframe rail",
        displacementCc: 765,
        category: "Naked"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R",
        yearRange: "2019 - 2026",
        fitmentNotes: "Compatible with OEM horizontal back-link suspension geometry",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Royal Enfield",
        model: "Continental GT 650",
        yearRange: "2019 - 2026",
        fitmentNotes: "Custom mono-shock conversion kit available with Apex subframe gussets",
        displacementCc: 648,
        category: "Cafe Racer"
      }
    ],
    images: [
      {
        id: "img-ms-1",
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex Track-Spec Mono-Shock rear suspension assembly",
        label: "Mono-Shock Reservoir View"
      },
      {
        id: "img-ms-2",
        url: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=1200&q=80",
        alt: "Apex suspension high-low compression dial",
        label: "Billet Adjuster Knobs"
      },
      {
        id: "img-ms-3",
        url: "https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=1200&q=80",
        alt: "Suspension mounted on racing swingarm",
        label: "Swingarm Linkage Mounted"
      }
    ],
    boxContents: [
      "Apex Track-Spec 46mm Rear Mono-Shock with 95 N/mm Spring",
      "Remote Hydraulic Preload Adjustment Bracket",
      "C-Spanner Preload Wrench & Damping Adjustment Key",
      "Stainless Steel Spherical Bearing Inserts & Dust Seals",
      "Apex Dyno Shock Dynamometer Test Curve & Tuning Manual"
    ],
    trackApproved: true,
    homologationCode: "FIM-SUS-2026-11"
  },
  {
    id: "prod-titanium-racing-chain-kit",
    slug: "titanium-racing-chain-kit",
    title: "Titanium Racing Chain & Lightweight Sprocket Conversion Kit (520 Pitch)",
    subtitle: "Lightweight 7075-T6 Hard-Anodized Alloy Rear Sprocket with 520 Gold Sealed X-Ring Chain",
    category: "Drive & Gearing",
    partSku: "APX-DRV-CHN-03",
    price: 14200,
    originalPrice: 16800,
    inventoryCount: 8, // > 5 => "In Stock"
    rating: 4.8,
    reviewCount: 27,
    shortDescription:
      "Lightweight anodized alloy rear sprocket with 520 gold O-ring chain. Drops 1.4 kg of unsprung rotational mass to radically improve acceleration, throttle response, and suspension compliance.",
    fullDescription: [
      "Transitioning from heavy OEM 525/530 steel drive systems to the Apex 520 Racing Conversion Kit yields an instantaneous boost in rear-wheel power delivery. By slashing over 1.4 kg of rotational inertia, the engine revs freely out of apexes and suspension reacts with lower unsprung lag.",
      "The rear sprocket is CNC-machined from 7075-T6 aerospace aluminum with mud/debris clearance grooves and treated with a 50-micron hard-coat anodize layer that rivals steel wear characteristics.",
      "Paired with an Apex Pro-Spec 520 Gold sealed X-Ring race chain boasting an ultimate tensile strength of 39.2 kN and quad-riveted chromoly pins."
    ],
    keyHighlights: [
      "520 Superbike Pitch Narrow-Profile Conversion",
      "Saves 1.4 kg Unsprung Rotational Drive Mass",
      "CNC 7075-T6 Aluminum Alloy Rear Sprocket with Hard Anodize",
      "520 Gold Sealed X-Ring Chain Rated up to 1000cc / 200 BHP",
      "Case-Hardened SCM420 Chromoly Front Engine Sprocket Included",
      "Includes Both Rivet-Type and Clip-Type Master Links"
    ],
    specs: {
      material: "7075-T6 Rear Alloy Sprocket / SCM420 Chromoly Front Sprocket / Gold X-Ring High-Tensile Steel Chain",
      weight: "1,880g (Complete kit with 120 links and 15T/45T sprockets)",
      safetyRating: "FIM Track Approved / ISO 9001 Drive Certification",
      partSku: "APX-DRV-CHN-03",
      finish: "Matte Hard-Anodized Gunmetal Sprocket with Gold-Plate Chain Outer Plates",
      torqueSpec: "Rear Sprocket Nuts: 60 Nm | Front Countershaft Nut: 100 Nm (with Lock Washer)",
      closureOrMount: "Standard 6-Hole or 5-Hole Sprocket Carrier Pattern",
      certificationBody: "Apex Drive Dynamics Testing Cell & ISO/TS 16949 Standards",
      origin: "Front & Rear Sprockets CNC Machined in Bengaluru, Chain Assembled to Spec",
      warranty: "2-Year or 20,000 km Track/Street Drive System Warranty",
      extraAttributes: {
        "Tensile Strength": "39.2 kN (8,810 lbf) Break Strength",
        "Chain Pitch": "520 Race Spec",
        "Pin Treatment": "Quad-Stake Riveted Chromium Carbide Surface",
        "Seal Type": "Low-Friction Low-Drag Nitrile X-Ring"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Complete 520 conversion. Includes front countershaft nut lock-washer",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390 / 390 Duke / 890 Duke R",
        yearRange: "2017 - 2026",
        fitmentNotes: "Standard 6-bolt carrier pattern. Provides smoother low-gear engine braking",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R",
        yearRange: "2019 - 2026",
        fitmentNotes: "Direct bolt-on to OEM forged wheels or aftermarket Marchesini wheels",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Ducati",
        model: "Panigale V4 / Monster 937",
        yearRange: "2020 - 2026",
        fitmentNotes: "Quick-change carrier adapter compatible. Retains OEM cush drives",
        displacementCc: 1103,
        category: "Supersport"
      },
      {
        make: "Triumph",
        model: "Street Triple 765 RS",
        yearRange: "2020 - 2026",
        fitmentNotes: "520 conversion drops rotational drag on quickshifter auto-blipper cuts",
        displacementCc: 765,
        category: "Naked"
      }
    ],
    images: [
      {
        id: "img-drv-1",
        url: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80",
        alt: "Titanium Racing Chain and Sprocket Kit layout",
        label: "520 Chain & Sprocket Set"
      },
      {
        id: "img-drv-2",
        url: "https://images.unsplash.com/photo-1558981420-87aa9dad1c89?auto=format&fit=crop&w=1200&q=80",
        alt: "Gold link craftsmanship and x-ring seals",
        label: "Gold X-Ring Detail"
      },
      {
        id: "img-drv-3",
        url: "https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=1200&q=80",
        alt: "Installed chain and sprocket on swingarm",
        label: "Wheel Hub Installed View"
      }
    ],
    boxContents: [
      "Apex 520 Gold Sealed X-Ring Race Chain (120 Links)",
      "Apex 7075-T6 Hard-Anodized Alloy Rear Sprocket (45T Default)",
      "Apex Case-Hardened SCM420 Front Countershaft Sprocket (15T Default)",
      "Quad-Staked Rivet Master Link & Clip-Type Track Pit Link",
      "High-Velocity Synthetic Chain Wax Sample & Slack Gauge"
    ],
    trackApproved: true,
    homologationCode: "FIM-DRV-2026-04"
  },
  {
    id: "prod-starlane-stealth-gps-lap-timer",
    slug: "starlane-stealth-gps-lap-timer",
    title: "Starlane Stealth GPS Lap Timer",
    subtitle: "High-Precision 10Hz Autonomous GPS Lap Timer with Automated Finish Line Detection",
    category: "Electronics & Data Logging",
    partSku: "ELEC-GPS-01",
    price: 34999,
    originalPrice: 38999,
    inventoryCount: 10,
    rating: 4.8,
    reviewCount: 12,
    shortDescription:
      "High-precision 10Hz GPS receiver with automatic finish line and sector timing detection. Features an internal database of global race tracks with automatic circuit recognition.",
    fullDescription: [
      "The Starlane Stealth represents the benchmark in standalone motorcycle race telemetry and lap timing. Utilizing a 10Hz multi-satellite GPS engine, it samples position and velocity 10 times per second with 1/100th second precision.",
      "Engineered with an internal library of worldwide circuits, the unit automatically identifies the track upon arrival in pit lane and sets the optimal start/finish coordinates.",
      "The high-contrast transflective display is easily readable under direct sunlight, featuring real-time predictive lap timing and illuminated delta time indicators."
    ],
    keyHighlights: [
      "10Hz Precision GPS Engine (1/100s Accuracy)",
      "Automated Finish Line & 3 Split-Sector Detection",
      "Transflective Backlit Track Display",
      "Internal Storage for up to 999 Laps & 16 Sessions",
      "Vibration-Damped Billet Handlebar Mount Included"
    ],
    specs: {
      material: "Billet Aluminum & Polycarbonate Casing",
      weight: "145g",
      safetyRating: "IP67 Weatherproof Homologation",
      partSku: "ELEC-GPS-01",
      finish: "Anodized Black",
      torqueSpec: "Mount Clamps: 4 Nm (M5 Hex)",
      closureOrMount: "22mm / 28mm Clip-On Handlebar Clamp",
      certificationBody: "FIM Europe Certified Electronics",
      origin: "Engineered and Assembled in Italy",
      warranty: "2-Year Manufacturer Warranty",
      extraAttributes: {
        "Refresh Rate": "10Hz GPS Multi-Constellation",
        "Display Type": "Transflective Backlit Monochromatic LCD",
        "Memory Capacity": "999 Laps across 16 Sessions",
        "Power Requirement": "12V Direct Switched Track Loom"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Fits triple-clamp bridge or clip-on bar directly with included billet mount",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390 / 890 Duke R / 990 RC R",
        yearRange: "2020 - 2026",
        fitmentNotes: "Plug-and-play auxiliary power connection under front headstock fairing",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R / ZX-4RR",
        yearRange: "2019 - 2026",
        fitmentNotes: "Clear line-of-sight mounting behind race windscreen bubble",
        displacementCc: 998,
        category: "Supersport"
      }
    ],
    images: [
      {
        id: "img-elec-gps-01-main",
        url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
        alt: "Starlane Stealth GPS Lap Timer Unit",
        label: "Primary Cockpit View"
      }
    ],
    boxContents: [
      "Starlane Stealth 10Hz GPS Lap Timer Display",
      "12V Fused Power Loom Harness",
      "CNC 6061 Billet Aluminum Bar Clamp",
      "Track Configuration Quick-Start Guide"
    ],
    trackApproved: true,
    homologationCode: "FIM-ELEC-2026-01"
  },
  {
    id: "prod-annitori-pro-quick-shifter-module",
    slug: "annitori-pro-quick-shifter-module",
    title: "Annitori Pro Quick-Shifter Module",
    subtitle: "Strain Gauge Bi-Directional Quick-Shifter with Bluetooth Smartphone Calibration",
    category: "Electronics & Data Logging",
    partSku: "ELEC-QS-02",
    price: 24500,
    originalPrice: 27999,
    inventoryCount: 6,
    rating: 4.9,
    reviewCount: 19,
    shortDescription:
      "Seamless push/pull strain gauge quick-shifter for clutchless full-throttle upshifts. Microsecond ignition interrupt tuning via wireless Bluetooth mobile interface.",
    fullDescription: [
      "The Annitori Pro Quick-Shifter delivers MotoGP-level clutchless upshifts with digital precision. Unlike mechanical microswitch shifters that wear out and drift, Annitori uses a solid-state strain gauge load cell with zero moving parts.",
      "Connect wirelessly via Bluetooth to fine-tune kill times per 1,000 RPM increments and set independent push or pull sensitivities for GP shift or standard shift configurations.",
      "Comes with waterproof automotive connectors designed for immediate plug-and-play installation into the ignition coil harness."
    ],
    keyHighlights: [
      "Bi-Directional Strain Gauge Load Cell (Push & Pull)",
      "Zero Moving Parts – Completely Immune to Vibration Wear",
      "Bluetooth 5.0 Wireless Configuration via iOS/Android App",
      "Independent Kill Times per RPM Band (40ms - 80ms Range)",
      "Plug-and-Play Waterproof Ignition Coil Harness"
    ],
    specs: {
      material: "CNC 6061-T6 Aircraft Grade Billet Aluminum",
      weight: "95g Sensor Weight",
      safetyRating: "FIM Homologated Track Spec",
      partSku: "ELEC-QS-02",
      finish: "Hard Anodized Clear",
      torqueSpec: "Shift Rod Jam Nuts: 6 Nm (M6 Left/Right Hand Thread)",
      closureOrMount: "Standard M6 Shift Linkage Rod Attachment",
      certificationBody: "TÜV / FIM Road Racing Homologated",
      origin: "Engineered in USA",
      warranty: "2-Year Manufacturer Warranty",
      extraAttributes: {
        "Sensor Technology": "Digital Strain Gauge Micro-Load Cell",
        "Connectivity": "Bluetooth 5.0 Low Energy",
        "Kill Duration Adjustment": "1ms increments (30ms - 120ms)",
        "Waterproofing": "IP68 Submersible Enclosure"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Replaces OEM mechanical rod with dual-threaded strain gauge link",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "KTM",
        model: "RC 390 / 890 Duke R / 990 RC R",
        yearRange: "2020 - 2026",
        fitmentNotes: "Direct plug into ignition coil harness with dedicated ground lug",
        displacementCc: 373,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja 400 / Ninja 500 / Z400",
        yearRange: "2018 - 2026",
        fitmentNotes: "Compatible with stock rearsets or aftermarket Apex CNC rearsets",
        displacementCc: 399,
        category: "Supersport"
      }
    ],
    images: [
      {
        id: "img-elec-qs-02-main",
        url: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
        alt: "Annitori Pro Quick-Shifter Strain Gauge Load Cell",
        label: "Primary View"
      }
    ],
    boxContents: [
      "Annitori Pro Strain Gauge Sensor Cell",
      "Dual-Ended M6 Shift Rod Extender",
      "Plug-and-Play Multi-Coil Loom",
      "Bluetooth App Pairing Card"
    ],
    trackApproved: true,
    homologationCode: "FIM-QS-2026-08"
  },
  {
    id: "prod-aim-mxs-1-2-race-dash-logger",
    slug: "aim-mxs-1-2-race-dash-logger",
    title: "AIM MXS 1.2 Race Dash Logger",
    subtitle: "Professional 5-inch TFT Color Display with Integrated 4GB Telemetry Data Acquisition",
    category: "Electronics & Data Logging",
    partSku: "ELEC-DASH-03",
    price: 189999,
    originalPrice: 209999,
    inventoryCount: 3,
    rating: 5.0,
    reviewCount: 7,
    shortDescription:
      "Professional 5-inch TFT color display with integrated data logging and wide channels for ECU integration. High-speed sampling of throttle, brake pressure, suspension travel, and engine parameters.",
    fullDescription: [
      "The AIM MXS 1.2 is the gold standard in racing instrumentation. Featuring a sunlight-readable 5-inch high-contrast TFT display enclosed in a milled anodized aluminum chassis, it replaces bulky stock gauges with a pure racing cockpit.",
      "Equipped with CAN-bus ECU protocols for over 1,000 engine management systems, it continuously logs up to 8 analog sensor channels (brake pressure, potentiometers, lambda) and internal 3-axis accelerometer data to 4GB high-speed memory.",
      "Configurable RGB shift light arrays, customizable alarm thresholds, and real-time predictive lap timing ensure the rider has immediate operational feedback on track."
    ],
    keyHighlights: [
      "5.0\" High-Contrast Color TFT Matrix Display (Sunlight Readable)",
      "4GB Internal Motorsport Telemetry Memory",
      "Over 1,000 CAN-Bus ECU Protocols Supported",
      "6 Configurable RGB Shift LEDs & 4 Alarm LEDs",
      "Integrated 3-Axis Gyroscope & Accelerometer"
    ],
    specs: {
      material: "Anodized Billet 6061 Aluminum Enclosure",
      weight: "530g",
      safetyRating: "IP65 Motorsport Weather Resistant",
      partSku: "ELEC-DASH-03",
      finish: "Matte Black Anodized",
      torqueSpec: "Rear Mounting Studs: 3 Nm (M4 Vibration Isolators)",
      closureOrMount: "Standard 4-Hole Motorsport Dash Bracket",
      certificationBody: "FIM & FIA Homologated Data Logging Instrument",
      origin: "Designed and Manufactured in Milan, Italy",
      warranty: "2-Year Factory Warranty",
      extraAttributes: {
        "Display Size": "5.0 inch Color TFT (800x480 resolution)",
        "Internal Memory": "4 Gigabytes Motorsport Non-Volatile Flash",
        "Analog Inputs": "8 Fully Configurable Channels (0-5V, 1000Hz)",
        "Digital Inputs": "2 Speed Inputs + Optical Lap Receiver Port"
      }
    },
    compatibleMotorcycles: [
      {
        make: "Yamaha",
        model: "YZF-R1 / R1M / YZF-R7",
        yearRange: "2018 - 2026",
        fitmentNotes: "Plug-and-play harness communicates directly with OEM Yamaha CAN bus",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Kawasaki",
        model: "Ninja ZX-10R / ZX-6R / ZX-4RR",
        yearRange: "2019 - 2026",
        fitmentNotes: "Transfers gear position, wheel speeds, and traction control modes via CAN",
        displacementCc: 998,
        category: "Supersport"
      },
      {
        make: "Ducati",
        model: "Panigale V4 / V2 / SuperSport 950",
        yearRange: "2020 - 2026",
        fitmentNotes: "Dedicated Bosch ECU protocol mapping supported out of the box",
        displacementCc: 1103,
        category: "Supersport"
      }
    ],
    images: [
      {
        id: "img-elec-dash-03-main",
        url: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8",
        alt: "AIM MXS 1.2 Race Dash Logger Color TFT Screen",
        label: "Primary Race Cockpit View"
      }
    ],
    boxContents: [
      "AIM MXS 1.2 5-Inch TFT Dash Display",
      "37-Pin Motorsport Main Wiring Harness",
      "External High-Precision GPS09 Module",
      "USB Download Cable & Race Studio 3 Analysis Software License"
    ],
    trackApproved: true,
    homologationCode: "FIM-DASH-2026-02"
  }
];

/**
 * Derived stock status badge based on inventory counts:
 * - count <= 0: "Out of Stock" (Red badge, backorder info, disabled CTA)
 * - count > 0 && count <= 5: "Low Stock" (Industrial Amber badge, urgency count, active CTA)
 * - count > 5: "In Stock" (High-contrast Neon Green badge, 24h dispatch, active CTA)
 */
export function getDerivedStockStatus(inventoryCount: number): DerivedStockInfo {
  if (inventoryCount <= 0) {
    return {
      status: "out_of_stock",
      label: "Out of Stock",
      badgeBg: "bg-red-950/80",
      badgeBorder: "border-red-600",
      badgeText: "text-red-400",
      dotBg: "bg-red-500",
      dotPulse: false,
      canAddToCart: false,
      message: "Currently backordered. Next machining run arriving in 10-14 days.",
      urgencyText: "RESTOCKING IN PROGRESS"
    };
  }

  if (inventoryCount <= 5) {
    return {
      status: "low_stock",
      label: "Low Stock",
      badgeBg: "bg-amber-950/80",
      badgeBorder: "border-amber-500",
      badgeText: "text-amber-400",
      dotBg: "bg-amber-400",
      dotPulse: true,
      canAddToCart: true,
      message: `Only ${inventoryCount} ${inventoryCount === 1 ? "unit" : "units"} remaining in Central Bengaluru Depot.`,
      urgencyText: `CRITICAL INVENTORY: ${inventoryCount} LEFT`
    };
  }

  return {
    status: "in_stock",
    label: "In Stock",
    badgeBg: "bg-emerald-950/80",
    badgeBorder: "border-emerald-500",
    badgeText: "text-emerald-400",
    dotBg: "bg-emerald-400",
    dotPulse: true,
    canAddToCart: true,
    message: "Verified inventory in stock. Dispatches within 24 hours with Apex Track logistics.",
    urgencyText: "READY FOR DISPATCH"
  };
}

/**
 * High-contrast price formatting in Indian Rupees (₹ INR)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}
