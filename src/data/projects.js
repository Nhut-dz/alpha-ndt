// ============================================================
// Projects Data - All NDT projects
// ============================================================

export const projects = [
  {
    id: 1,
    title: "PWHT Service Provision for Vietnam Block B Gas Project",
    client: "Vietnam",
    industry: "Block B Gas Project",
    description:
      "We take pride in having independently researched, designed, and manufactured the heat treatment furnace system, one of AlphaNDT’s key technologies, enabling heat treatment of large-sized tanks, structures, and equipment - and especially allowing multiple items to be treated simultaneously. The integration of SCADA automation technology with PLC-based data collection and storage enables technicians to optimize the heat treatment process for maximum safety and efficiency.",
    image: "/project/blockbgas.jpg",
    tag: "Gas",
    year: "2025",
    content: {
      scope: [
        "Ultrasonic Thickness Measurement (UTM) for jacket legs and deck legs",
        "API inspection for structural integrity assessment",
        "Baseline corrosion mapping and data recording",
        "Visual Inspection (VI) for surface defects and coating condition",
      ],
      methods: ["UTM", "VI", "API Inspection"],
      standards: ["API 570", "API 653", "ASME B31.3"],
      location: "Offshore Vietnam",
      duration: "3 months",
    },
    image: "https://alpha-ndt.com/Upload/37_1.jpg",
    tag: "Oil & Gas",
    year: "2023",
  },
  {
    id: 2,
    title: " Statfjord C",
    client: "PWHT",
    industry: "Oil & Gas",
    description:
      "Our scope has supported the fabrication of key components, including a concentrator polishing plant, a multi-blade dehumidifier for the deep settling environment, and a framed feedwater tank, fully complying with current international standards.",
    image: "/project/statfjord.jpg",
    content: {
      scope: [
        "Magnetic Particle Testing (MT) for surface and near-surface defects",
        "Ultrasonic Testing (UT) for volumetric inspection",
        "Penetrant Testing (PT) for surface-breaking defects",
        "Radiographic Testing (RT) for weld quality verification",
        "Phased Array UT (PAUT) and Time-of-Flight Diffraction (TOFD) for advanced inspection",
      ],
      methods: ["MT", "UT", "PT", "RT", "PAUT", "TOFD"],
      standards: ["ASME V", "ASME IX", "AWS D1.1", "API 1104"],
      location: "Ghana, West Africa",
      duration: "12 months",
    },
    image: "https://alpha-ndt.com/Upload/41_1.jpg",
    tag: "Oil & Gas",
    year: "2025",
  },
  {
    id: 3,
    title: "NDT SERVICE PROVISION FOR CA MAU FERTILIZER PLANT TURNAROUND",
    client: "PV GAS / PVE SC",
    industry: "Oil & Gas",
    description:
      "Provided NDT and heat exchanger inspection services for Ca Mau Fertilizer Plant turnaround, ensuring equipment integrity, safety, and efficient operation.",
      content: `
      AlphaNDT successfully delivered NDT and heat exchanger inspection services 
      for the turnaround of Ca Mau Fertilizer Plant, supporting equipment integrity 
      and safe operation.

      As a long-term contractor since 2014, AlphaNDT has consistently provided 
      high-quality services, working alongside the plant’s engineering team to 
      ensure safety, efficiency, and on-time completion.

      The project contributed to restoring full operational capacity after 
      scheduled maintenance, meeting high market demand.
        `,
    image: "/project/damcamau.jpg",
    content: {
      scope: [
        "Phased Array Ultrasonic Testing (PAUT) for LPG tank shell and nozzle welds",
        "Volumetric inspection of tank body welds",
        "Heat-affected zone (HAZ) inspection",
        "Post-weld heat treatment (PWHT) verification",
      ],
      methods: ["PAUT", "UT", "VI"],
      standards: ["ASME VIII Div.1", "ASME V", "API 620"],
      location: "Dinh Vu Industrial Zone, Hai Phong",
      duration: "4 months",
    },
    image: "https://alpha-ndt.com/Upload/12.jpg",
    tag: "Oil & Gas",
    year: "2023",
},
  {
    id: 4,
    title: "NDT FOR NSRP OIL TANK FABRICATION",
    client: "NSRP / PTSC Quang Ngai",
    industry: "Oil & Gas",
    description:
      "Comprehensive NDT services including PAUT, RT, MT, UT and PWHT.",
    content: {
      scope: [
        "Full NDT services for oil storage tank fabrication",
        "Radiographic Testing (RT) for butt welds",
        "Magnetic Particle Testing (MT) for fillet welds and surface inspection",
        "Phased Array UT (PAUT) for critical welds",
        "Post-Weld Heat Treatment (PWHT) monitoring and verification",
      ],
      methods: ["PAUT", "RT", "MT", "UT", "PWHT"],
      standards: ["API 650", "ASME V", "ASME IX"],
      location: "Quang Ngai, Vietnam",
      duration: "8 months",
    },
    image: "https://alpha-ndt.com/Upload/32.jpg",
    tag: "Oil & Gas",
    year: "2022",
  },
  {
    id: 5,
    title: "PAUT/TOFD FOR NEARSHORE PIPELINE",
    client: "PV GAS / PTSC",
    industry: "Oil & Gas",
    description:
      "PAUT and TOFD inspection for Thai Binh – Ham Rong gas pipeline.",
    content: {
      scope: [
        "PAUT and TOFD inspection for girth welds on nearshore pipeline",
        "Automated Ultrasonic Testing (AUT) for pipeline construction welds",
        "Corrosion mapping for existing pipeline sections",
        "Weld quality assurance throughout pipeline installation",
      ],
      methods: ["PAUT", "TOFD", "AUT", "UT"],
      standards: ["DNV-OS-F101", "API 1104", "ASME V"],
      location: "Thai Binh Province, Vietnam",
      duration: "6 months",
    },
    image: "https://alpha-ndt.com/Upload/36.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 6,
    title: "NDT PERFORMANCE FOR FENGMIAO PHASE 1 OFFSHORE WIND FARM - CDWE PROJECT",
    client: "ECC",
    industry: "Renewable Energy",
    description:
      "Inspection including VI, UTM and PAUT for gas processing plant equipment.",
    content: {
      scope: [
        "Visual Inspection (VI) for external and internal condition assessment",
        "Ultrasonic Thickness Measurement (UTM) for corrosion monitoring",
        "Phased Array UT (PAUT) for weld inspection on column C-01",
        "Fitness-for-service evaluation per API 579",
      ],
      methods: ["VI", "UTM", "PAUT"],
      standards: ["API 510", "API 579", "ASME V"],
      location: "Dinh Co Gas Processing Plant, Ba Ria - Vung Tau",
      duration: "2 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Plant",
    year: "2021",
  },
  {
    id: 7,
    title: "THAI BINH – HAM RONG GAS PIPELINE PROJECT",
    client: "PV GAS / PTSC",
    industry: "Oil & Gas",
    description:
      "Full NDT services for gas distribution and gathering system.",
    content: {
      scope: [
        "NDT inspection for onshore and nearshore gas pipeline construction",
        "Girth weld inspection using RT and AUT",
        "Hydrostatic test monitoring",
        "As-built documentation and reporting",
      ],
      methods: ["RT", "AUT", "UT", "MT", "VI"],
      standards: ["API 1104", "ASME B31.8", "ASME V"],
      location: "Thai Binh – Thanh Hoa, Vietnam",
      duration: "10 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Pipeline",
    year: "2021",
  },
  {
    id: 8,
    title: "TE GIAC TRANG H5-WHP FABRICATION",
    client: "Hoang Long JOC / PTSC M&C",
    industry: "Oil & Gas",
    description:
      "NDT inspection for offshore platform fabrication.",
    content: {
      scope: [
        "Full NDT services for wellhead platform (WHP) jacket and topside fabrication",
        "Weld inspection for structural members and piping",
        "PAUT inspection for critical joints",
        "Dimensional control and survey support",
      ],
      methods: ["UT", "MT", "PT", "RT", "PAUT"],
      standards: ["AWS D1.1", "ASME V", "ASME IX", "API RP 2A"],
      location: "PTSC M&C Yard, Vung Tau",
      duration: "12 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 9,
    title: "TSN AIRPORT FUEL SYSTEM PROJECT",
    client: "TAPECO / WEC Engineers",
    industry: "Industrial",
    description:
      "NDT services for aviation fueling infrastructure.",
    content: {
      scope: [
        "NDT inspection for fuel pipeline and storage tank construction",
        "Weld quality verification for fuel transfer systems",
        "Hydrostatic testing support",
        "Coating inspection and verification",
      ],
      methods: ["RT", "UT", "MT", "PT", "VI"],
      standards: ["API 1104", "API 650", "ASME B31.3"],
      location: "Tan Son Nhat International Airport, Ho Chi Minh City",
      duration: "6 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Industrial",
    year: "2021",
  },
  {
    id: 10,
    title: "HRD TOPSIDE FABRICATION",
    client: "ONGC / PTSC",
    industry: "Oil & Gas",
    description:
      "PAUT services for offshore topside fabrication.",
    content: {
      scope: [
        "Phased Array UT (PAUT) for topside structural welds",
        "Conventional NDT (RT, MT, PT) for piping and equipment",
        "Weld mapping and quality documentation",
        "Third-party coordination and witness support",
      ],
      methods: ["PAUT", "RT", "MT", "PT", "UT"],
      standards: ["ASME V", "ASME IX", "AWS D1.1"],
      location: "PTSC Yard, Vung Tau",
      duration: "14 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 11,
    title: "BIEN DONG 1 PROJECT",
    client: "Bien Dong JOC / PTSC",
    industry: "Oil & Gas",
    description:
      "NDT services for jackets, topsides and offshore structures.",
    content: {
      scope: [
        "Full NDT for jacket and topside fabrication",
        "Node weld inspection using PAUT and TOFD",
        "Structural member inspection",
        "Pre-commissioning inspection support",
      ],
      methods: ["PAUT", "TOFD", "RT", "MT", "UT", "VI"],
      standards: ["AWS D1.1", "API RP 2A", "ASME V"],
      location: "Vung Tau Fabrication Yard",
      duration: "18 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 12,
    title: "SU TU NAU DEVELOPMENT PROJECT",
    client: "Cuu Long JOC / PTSC",
    industry: "Oil & Gas",
    description:
      "NDT services for vessel and offshore fabrication.",
    content: {
      scope: [
        "NDT for pressure vessel and process equipment fabrication",
        "Offshore jacket and topside weld inspection",
        "PAUT for critical pressure boundary welds",
        "Final inspection and documentation",
      ],
      methods: ["PAUT", "RT", "MT", "UT", "PT"],
      standards: ["ASME VIII", "ASME V", "AWS D1.1"],
      location: "PTSC M&C Yard, Vung Tau",
      duration: "15 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 13,
    title: "SU TU VANG SUBSEA PROJECT",
    client: "Cuu Long JOC / Vietsovpetro",
    industry: "Oil & Gas",
    description:
      "Inspection for subsea template and offshore equipment.",
    content: {
      scope: [
        "NDT for subsea template and manifold fabrication",
        "Pipeline end termination (PLET) inspection",
        "Subsea connector and spool piece weld inspection",
        "Hyperbaric welding inspection support",
      ],
      methods: ["PAUT", "RT", "MT", "UT", "VI"],
      standards: ["DNV-OS-F101", "API 17D", "ASME V"],
      location: "Vietsovpetro Yard, Vung Tau",
      duration: "10 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Subsea",
    year: "2021",
  },
  {
    id: 14,
    title: "DUNG QUAT REFINERY PROJECT",
    client: "BSR / PTSC",
    industry: "Oil & Gas",
    description:
      "NDT for refinery tanks, pipelines and structures.",
    content: {
      scope: [
        "NDT inspection for refinery equipment and storage tanks",
        "In-service inspection for piping systems",
        "Corrosion monitoring and thickness measurement",
        "Turnaround inspection support",
      ],
      methods: ["UT", "MT", "RT", "PT", "UTM", "VI"],
      standards: ["API 510", "API 570", "API 653", "ASME V"],
      location: "Dung Quat Economic Zone, Quang Ngai",
      duration: "6 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Refinery",
    year: "2021",
  },
  {
    id: 15,
    title: "SHIPBUILDING PROJECTS",
    client: "Saigon Shipyard",
    industry: "Marine",
    description:
      "NDT services for vessel fabrication and shipbuilding.",
    content: {
      scope: [
        "Hull structure weld inspection",
        "Piping system NDT for marine vessels",
        "Tank testing and inspection",
        "Classification society survey support (DNV, Lloyd's, BV)",
      ],
      methods: ["UT", "MT", "RT", "PT", "VI"],
      standards: ["DNV Rules", "Lloyd's Rules", "AWS D1.1"],
      location: "Saigon Shipyard, Ho Chi Minh City",
      duration: "Ongoing",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Marine",
    year: "2021",
  },
  {
    id: 16,
    title: "STRATEGIC MARINE VESSEL PROJECT",
    client: "Strategic Marine",
    industry: "Marine",
    description:
      "Inspection for steel and aluminium vessel construction.",
    content: {
      scope: [
        "NDT for aluminium and steel hull construction",
        "Weld inspection for high-speed vessel structures",
        "Piping and mechanical system inspection",
        "Final classification survey support",
      ],
      methods: ["UT", "MT", "PT", "RT", "VI"],
      standards: ["DNV-GL Rules", "AWS D1.2 (Aluminium)", "AWS D1.1"],
      location: "Vung Tau, Vietnam",
      duration: "8 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Marine",
    year: "2021",
  },
  {
    id: 17,
    title: "PHU MY 2.2 POWER PLANT",
    client: "EVN / Agon Pacific",
    industry: "Power",
    description:
      "NDT for power plant piping systems.",
    content: {
      scope: [
        "NDT inspection for high-pressure steam piping",
        "Boiler tube inspection using UT and RT",
        "Weld quality verification for pressure piping",
        "In-service inspection during plant shutdown",
      ],
      methods: ["UT", "RT", "MT", "PT", "PAUT"],
      standards: ["ASME B31.1", "ASME V", "ASME IX"],
      location: "Phu My Industrial Zone, Ba Ria - Vung Tau",
      duration: "4 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Power",
    year: "2021",
  },
  {
    id: 18,
    title: "MONG DUONG 2 POWER PLANT",
    client: "Doosan Heavy Industries",
    industry: "Power",
    description:
      "Inspection services for thermal power construction.",
    content: {
      scope: [
        "NDT for boiler components and pressure parts",
        "Steam drum and header weld inspection",
        "High-energy piping inspection",
        "Construction phase quality control support",
      ],
      methods: ["RT", "UT", "MT", "PT", "PAUT"],
      standards: ["ASME I", "ASME B31.1", "ASME V"],
      location: "Mong Duong, Quang Ninh",
      duration: "18 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Power",
    year: "2021",
  },
  {
    id: 19,
    title: "FPSO INSPECTION PROJECT",
    client: "Greens Power / PTSC",
    industry: "Oil & Gas",
    description:
      "NDT inspection for FPSO boilers and systems.",
    content: {
      scope: [
        "Boiler tube inspection on FPSO vessel",
        "Pressure vessel and heat exchanger inspection",
        "Piping system NDT for process and utility lines",
        "Shutdown turnaround inspection support",
      ],
      methods: ["UT", "RT", "MT", "PT", "UTM", "VI"],
      standards: ["API 510", "API 570", "ASME V", "ASME IX"],
      location: "Offshore Vietnam",
      duration: "3 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Offshore",
    year: "2021",
  },
  {
    id: 20,
    title: "CAN THO BRIDGE PROJECT",
    client: "Vietnam Government",
    industry: "Infrastructure",
    description:
      "NDT for cable-stayed bridge construction.",
    content: {
      scope: [
        "Weld inspection for steel box girder fabrication",
        "Cable anchorage inspection",
        "Structural steel connection inspection",
        "Quality assurance throughout bridge construction phases",
      ],
      methods: ["UT", "MT", "RT", "PT", "PAUT", "VI"],
      standards: ["AWS D1.5 (Bridge Welding)", "AASHTO", "ASME V"],
      location: "Can Tho City, Vietnam",
      duration: "24 months",
    },
    image: "https://alpha-ndt.com/Upload/33.jpg",
    tag: "Bridge",
    year: "2021",
  },
];
