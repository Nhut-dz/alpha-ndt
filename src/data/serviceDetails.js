// ============================================================
// Service Detail Data - Full content for each service page
// ============================================================

export const serviceDetails = {
  1: {
    title: "Inspection Services",
    subtitle: "Ensuring Safety, Quality & Compliance",
    heroImage: "/service-1.jpg",
    content: `
Alpha NDT provides comprehensive inspection and quality supervision services
for industrial structures, equipment, and facilities. Our certified inspectors
ensure that products, assets, and systems meet specified requirements while
prioritizing safety and regulatory compliance.

With over 20 years of experience, our inspection team has supported major projects
across oil & gas, petrochemical, power generation, and marine industries. We deploy
qualified personnel certified to international standards including PCN, CSWIP, ASNT,
and AWS to deliver reliable and accurate inspection results.
    `,
    subServices: [
      {
        title: "Visual Testing (VT)",
        description:
          "Direct and remote visual inspection of welds, surfaces, and structural components to identify surface discontinuities, misalignment, and coating conditions.",
        image: "/service-1.jpg",
      },
      {
        title: "Welding Inspection",
        description:
          "Comprehensive welding quality control including WPS/PQR review, welder qualification monitoring, in-process inspection, and final weld acceptance per AWS, ASME, and EN standards.",
      },
      {
        title: "Third Party Inspection",
        description:
          "Independent inspection services acting as client representative to verify fabrication quality, material compliance, and testing procedures during manufacturing and construction.",
      },
      {
        title: "Corrosion Survey & Monitoring",
        description:
          "Systematic corrosion assessment using UTM mapping, remaining life calculation, and fitness-for-service evaluation per API 579 to support asset integrity management.",
      },
    ],
    standards: ["API 510", "API 570", "API 653", "API 579", "AWS D1.1", "ASME V"],
    industries: ["Oil & Gas", "Petrochemical", "Marine", "Power Generation", "Infrastructure"],
  },

  2: {
    title: "Advanced NDT Services",
    subtitle: "Next-Generation Testing Technology",
    heroImage: "/service-2.jpg",
    content: `
Alpha NDT's Advanced NDT division addresses the increasing demands for speed, accuracy,
and reliability in modern industrial inspection. Our advanced techniques expand the range
of inspectable components and provide superior defect characterization compared to
conventional methods.

We continuously invest in state-of-the-art equipment and personnel training to deliver
cutting-edge inspection solutions. Our advanced NDT engineers hold Level II and Level III
certifications from PCN, CSWIP, and ASNT, ensuring the highest quality of service delivery.
    `,
    subServices: [
      {
        title: "Phased Array UT (PAUT)",
        description:
          "Multi-element ultrasonic inspection providing real-time imaging of internal defects. Capable of sector scanning, linear scanning, and encoded inspections for comprehensive weld and material evaluation.",
        image: "/service-2.jpg",
      },
      {
        title: "Time of Flight Diffraction (TOFD)",
        description:
          "Highly accurate sizing technique for weld defects using diffracted signals. Provides precise through-wall sizing for crack depth measurement, widely used for critical pressure boundary welds.",
      },
      {
        title: "Automated Ultrasonic Testing (AUT)",
        description:
          "Mechanized UT inspection using Alpha NDT's self-developed AE MAX AUT® Scanner System. Designed for pipeline girth weld inspection with full compliance to API 5L and DNV-ST-F101.",
      },
      {
        title: "Eddy Current Testing (ECT)",
        description:
          "Electromagnetic inspection for detecting surface and near-surface defects in conductive materials. Ideal for heat exchanger tube inspection, surface crack detection, and coating thickness measurement.",
      },
      {
        title: "Remote Field ECT (RFECT)",
        description:
          "Specialized eddy current technique for ferromagnetic tube inspection, capable of detecting both internal and external defects in boiler and heat exchanger tubes.",
      },
      {
        title: "Magnetic Flux Leakage (MFL)",
        description:
          "Advanced technique for detecting corrosion and metal loss in storage tank floors and pipelines without removing coatings or insulation.",
      },
    ],
    standards: ["ASME V", "ASME IX", "DNV-ST-F101", "API 5L", "EN 13018", "ISO 10893"],
    industries: ["Oil & Gas", "Pipeline", "Petrochemical", "Power Generation", "Offshore"],
  },

  3: {
    title: "Conventional Non-Destructive Testing",
    subtitle: "Proven Methods, Reliable Results",
    heroImage: "/service-3.jpg",
    content: `
Alpha NDT provides a full range of conventional NDT services using proven and reliable
methods to inspect, test, and evaluate materials, components, and assemblies for
discontinuities without compromising their future usability.

Our conventional NDT technicians are certified to international standards (PCN, ASNT,
ISO 9712) with extensive field experience across diverse industries. We maintain a
comprehensive inventory of calibrated equipment to ensure accuracy and compliance with
project specifications.
    `,
    subServices: [
      {
        title: "Ultrasonic Testing (UT)",
        description:
          "High-frequency sound wave inspection for detecting internal flaws, measuring material thickness, and evaluating weld quality. Applicable to metals, composites, and concrete structures.",
        image: "/service-3.jpg",
      },
      {
        title: "Radiographic Testing (RT)",
        description:
          "X-ray and gamma ray inspection providing permanent film or digital records of internal weld and material conditions. Essential for critical weld acceptance in pressure vessels and pipelines.",
      },
      {
        title: "Magnetic Particle Testing (MT)",
        description:
          "Detection of surface and near-surface discontinuities in ferromagnetic materials using magnetic fields and fine iron particles. Fast and reliable for weld inspection and crack detection.",
      },
      {
        title: "Liquid Penetrant Testing (PT)",
        description:
          "Surface-breaking defect detection method applicable to all non-porous materials including metals, ceramics, and plastics. Uses fluorescent or visible dye penetrants for high sensitivity.",
      },
    ],
    standards: ["ASME V", "ASME IX", "AWS D1.1", "API 1104", "EN ISO 17636", "EN ISO 17640"],
    industries: ["Oil & Gas", "Marine", "Construction", "Manufacturing", "Aerospace"],
  },

  4: {
    title: "Wind Energy Service (WES)",
    subtitle: "Comprehensive Wind Turbine Inspection & Maintenance",
    heroImage: "/service-4.jpg",
    content: `
Alpha NDT provides specialized inspection and maintenance services for the wind energy
sector, supporting both onshore and offshore wind farm operations. Our WES division
combines NDT expertise with rope access capabilities to deliver efficient and safe
wind turbine inspection solutions.

As Vietnam's renewable energy sector grows rapidly, Alpha NDT has positioned itself
as a trusted partner for wind farm operators and developers, offering end-to-end
inspection services from construction through operation and maintenance phases.
    `,
    subServices: [
      {
        title: "Blade Inspection",
        description:
          "Comprehensive wind turbine blade inspection using visual, UT, and thermography methods. Detection of delamination, lightning damage, erosion, and structural cracks in composite blades.",
        image: "/service-4.jpg",
      },
      {
        title: "Tower & Foundation Inspection",
        description:
          "NDT inspection for tower section welds, bolt connections, and foundation structures. Includes UT thickness measurement for corrosion monitoring and MT/PT for weld crack detection.",
      },
      {
        title: "Gearbox & Drivetrain Inspection",
        description:
          "Vibration analysis, oil sampling, and visual inspection of gearbox components. Early detection of bearing failures, gear tooth damage, and lubrication issues.",
      },
      {
        title: "Rope Access Services",
        description:
          "IRATA-certified rope access technicians for safe and efficient access to wind turbine components at height, eliminating the need for expensive crane mobilization.",
      },
    ],
    standards: ["IEC 61400", "DNV-GL-ST-0376", "ASTM E2582", "EN 13018"],
    industries: ["Wind Energy", "Renewable Energy", "Offshore Wind"],
  },

  5: {
    title: "Wind Turbine Gear Oil Exchange by GOES",
    subtitle: "Professional Gearbox Oil Management System",
    heroImage: "/service-5.jpg",
    content: `
Alpha NDT offers professional gearbox oil exchange services for wind turbines using
the advanced GOES (Gear Oil Exchange System). This specialized service ensures optimal
gearbox performance, extends equipment lifespan, and minimizes unplanned downtime.

The GOES system enables complete oil exchange without disassembling the gearbox,
significantly reducing maintenance time and costs. Our trained technicians perform
oil analysis, filtration, and replacement following manufacturer specifications
and industry best practices.
    `,
    subServices: [
      {
        title: "Complete Oil Exchange",
        description:
          "Full gearbox oil replacement using the GOES system, ensuring 100% oil change without gearbox disassembly. Removes contaminated oil and replaces with fresh lubricant meeting OEM specifications.",
        image: "/service-5.jpg",
      },
      {
        title: "Oil Condition Monitoring",
        description:
          "Regular oil sampling and laboratory analysis to monitor oil degradation, contamination levels, and wear particle counts. Early detection of gearbox component wear.",
      },
      {
        title: "Filtration & Flushing",
        description:
          "High-efficiency filtration to remove particulate contamination and water from gearbox oil. System flushing to clean internal surfaces before fresh oil fill.",
      },
      {
        title: "Preventive Maintenance Support",
        description:
          "Scheduled oil management programs tailored to each wind farm's operational requirements, optimizing maintenance intervals and reducing total cost of ownership.",
      },
    ],
    standards: ["ISO 4406", "ANSI/AGMA 9005", "DIN 51524"],
    industries: ["Wind Energy", "Renewable Energy"],
  },
};
