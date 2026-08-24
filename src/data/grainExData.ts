import { ProductModule, SpecialistCapability, AutomationCapability, ServiceOffering, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: '01-introduction', number: '01', label: 'Introduction' },
  { id: '02-product', number: '02', label: 'Products & Modules' },
  { id: '03-automation', number: '03', label: 'Automation & IoT' },
  { id: '04-specialist-in', number: '04', label: 'Specialist In' },
  { id: '05-after-sales', number: '05', label: 'After Sales & Service' },
  { id: '06-contact-us', number: '06', label: 'Contact Us' },
];

export const BRAND_INFO = {
  name: 'GrainEx',
  tagline: 'INNOVATION & TECHNOLOGY',
  motto: 'Smart Solutions for a Better Tomorrow',
  phone: '+91 97893 25252',
  phoneFormatted: '+919789325252',
  email: 'grainex.technology@gmail.com',
  website: 'www.grainex.in',
  address: 'Industrial Machinery & Turnkey Engineering Division, India',
  whatsappUrl: 'https://wa.me/919789325252?text=Hello%20GrainEx%20Team,%20I%20am%20interested%20in%20your%20Paddy%20and%20Rice%20Processing%20Solutions.',
  logoLight: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhQOniUz0k1-lUsqJ5ARqSzJZBhzXzxKKbBQ4D__1TvgKgIxj31-6VaKL32Do5BlHeQywTPE8SLWArixe9P0oEjp4LebszaFNBPclhhLTM6XLlRSo_jtnQ2FdC7noyT7iSvKCWubxnEDlAKDepxZStYzA0U6dnOLGb3CX-zrb6njuhlYfD5wqIW61IjP-jyhchxzxRyHEmPrHi98EKbIJYgJ4Im11ZlTLNFWZJKKGGSy3-TyEms_PSDdNRn6KMhbTzmA',
  logoDark: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhQOniUz0k1-lUsqJ5ARqSzJZBhzXzxKKbBQ4D__1TvgKgIxj31-6VaKL32Do5BlHeQywTPE8SLWArixe9P0oEjp4LebszaFNBPclhhLTM6XLlRSo_jtnQ2FdC7noyT7iSvKCWubxnEDlAKDepxZStYzA0U6dnOLGb3CX-zrb6njuhlYfD5wqIW61IjP-jyhchxzxRyHEmPrHi98EKbIJYgJ4Im11ZlTLNFWZJKKGGSy3-TyEms_PSDdNRn6KMhbTzmA',
};

export const PRODUCT_MODULES: ProductModule[] = [
  {
    id: 'storage-bins',
    moduleCode: 'MODULE 01',
    title: 'Storage Bins',
    shortDescription: 'Industrial raw & process grain containment systems built for optimal flow, moisture barrier, and batch integrity.',
    fullDescription: 'GrainEx heavy-duty hopper bottom and flat bottom grain storage silos engineered with premium galvanized high-tensile steel. Designed specifically for paddy processing lines with anti-bridging cones, integrated temperature/moisture cable telemetry, and automated slide gates.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAsnYDW9DiY9jFAepM2uCd5RdIl-3Exa4bx6xczrurNlmDKytKecuI6yiPVoHW0Qc_B5mxpUNUVE1pWWSrzQfyK631qPBdKHTw6vhcxTLTza6SuFbmsotni3Auk4IrTVYYv8CZZwrJ1zAhUKHcT9riwlRVbdP01_QsJF4CrYaRpH40NOxKj5mVmN_PCbsXFd-lQdUADkRwfcmMkqlTfvkgwjI6eJrD_9pj3XVY7b4bhWmzsi0f_Q4K',
    capacityRange: '10 TPD to 500 TPD Custom',
    features: [
      'High-grade galvanized corrugated sheet construction',
      'Steep hopper angle for 100% complete cleanout with no residue',
      'Integrated level sensors and multi-point thermal cables',
      'Pneumatic and motorized discharge slide gates with interlocks'
    ],
    specs: {
      'Material': 'Galvanized Structural Steel (275 - 450 g/m² Zinc)',
      'Hopper Angle': '45° / 60° Self-cleaning cone',
      'Sensors': 'Radar Level + Pt100 Temperature probes',
      'Discharge': 'Pneumatic / Rack & Pinion gates'
    },
    applications: ['Raw Paddy Storage', 'Soaked Paddy Holding', 'Dried Paddy Conditioning', 'Buffer Milling Bins']
  },
  {
    id: 'dryers',
    moduleCode: 'MODULE 02',
    title: 'Industrial Dryers',
    shortDescription: 'Uniform moisture reduction column drying units engineered for minimal broken percentage and thermal efficiency.',
    fullDescription: 'State-of-the-art continuous mixed-flow and recirculating column grain dryers. Featuring multi-stage indirect heat exchangers, precision modulated airflow dampers, and automated exhaust humidity feedback loops for uniform moisture extraction down to 13-14% without cracking the grain kernel.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_gcxtwgGJRyLxwEElF1S4jK5NmbLJoeOqqNRtxaqoXb_OTehzBiZjEanGbyu5mnVZ37wpiIyXS5aRFQizbLVOr-1qTqBFq39FYCwEHHqpFOH9tzm3R-GYhqxhGpvedasfs3oHhlytin-x8GRkGowcxYK2RqO-yC4wQVbxvny_IM7lSdOLPBO9YPb6ZOWbQBtu5VR71tUP7iPX2OIbXle5B3dX0CY-FAerE9dzr91BcN5H_5on7mo1',
    capacityRange: '8 TPH to 60 TPH Continuous',
    features: [
      'Gentle multi-stage gradient drying preserving kernel head rice yield',
      'Heavy-duty stainless steel / galvanized air ducts and louvers',
      'High-efficiency low-noise centrifugal blowers with VFD speed control',
      'Integrated online continuous moisture meter and auto-discharge valve'
    ],
    specs: {
      'Drying Mode': 'Mixed Flow / Cross Flow Continuous Column',
      'Moisture Reduction': 'Up to 3-4% extraction per pass safely',
      'Heat Source': 'Steam Heat Exchanger / Husk Fired Furnace / Gas',
      'Control': 'PLC Automated Temperature & Air Velocity Loop'
    },
    applications: ['Raw Paddy Drying', 'Parboiled Paddy Drying', 'Steam Paddy Rapid Drying', 'Basmati & Non-Basmati Varieties']
  },
  {
    id: 'parboiling',
    moduleCode: 'MODULE 03',
    title: 'Parboiling & Steaming',
    shortDescription: 'Controlled hydrothermal gelatinization systems with automated recipe parameters for uniform rice color and hardness.',
    fullDescription: 'Fully automated pressurized and atmospheric parboiling vessels engineered for consistent gelatinization of paddy starch. Delivers maximum nutrient preservation, zero chalky kernels, flawless golden/white parboiled color consistency, and reduced cooking loss in final table rice.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9tIWGX1v5kssmnoF_YLsN8YoXyNYErwnKcM3Em1P3yg2HLU5pTLqxq_4IKMF923RRtJJOrwxh8ymedgcEIzqs3Mfv3MRcrq3svuN0e9mMJvsR0al6m2zuL2fvLU0SXNQLbDQvoUbOVxx8xFqgFs73lE_Tix7Wm8ZAFSC8TNiLhk7y-2tirf4NbhJNixEXrfLjbquoWWc7h1y75QcnAl6lLMKsCsJqE5eDm7MCSA_nb3iYKPC9hsqY',
    capacityRange: '20 TPD to 300 TPD Batch/Continuous',
    features: [
      'Computer-controlled hot water soaking and rapid steam injection cycles',
      'Uniform temperature distribution eliminating dark spots or uneven cooking',
      'Heavy SS304/SS316 food-grade interior contact surfaces',
      'Reduced water & energy consumption with condensate recycling system'
    ],
    specs: {
      'Vessel Vessel Material': 'Stainless Steel 304 Contact / Boiler Grade Outer',
      'Operating Pressure': '1.5 to 3.5 bar steam injection',
      'Cycle Automation': 'Automatic water filling, steam cycle, and bottom dump',
      'Recipe Memory': '100+ Programmable grain variety presets'
    },
    applications: ['Single Parboiled Rice', 'Double Steamed Rice', 'Ponni / Sona Masoori Processing', 'Brown & Parboiled Specialty Grains']
  },
  {
    id: 'water-tank',
    moduleCode: 'MODULE 04',
    title: 'Process Water Systems',
    shortDescription: 'Engineered thermal fluid and process water tanks for consistent temperature control during soaking cycles.',
    fullDescription: 'High-capacity insulated process water storage tanks and hot water circulation loops. Ensures accurate water temperature maintenance for optimum paddy soaking kinetics, preventing odor formation and reducing soaking duration by up to 35%.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqKbgVYRs03-lQ2ec67YzJ_OpFLYBf4knZ1wqEdQLFocA_d1fpIlreFfFLAKbZdk9ukonOn-n_DZGPN4hZJ8qC7b-S7TtkHR3SrVq2bCqz1zhcEI-QtUNVqRNjJTf-rVMcOTpzawB53rP6yrRXrtAd7WDjbKFID-rsT-Tq5KYaJSfaf70Iv0wRhFmCzGZ8nyXzNBNxDlcSaGJ7tC1G-kFAwePAkZx58Bvb_nfLJ6dlAxaZ4EALSCWS',
    capacityRange: '5,000 L to 100,000 L',
    features: [
      'Thermal insulation with high-density rockwool / PUF cladding',
      'Automated proportional steam heating control valves',
      'Heavy-duty stainless steel non-clogging sanitary circulation pumps',
      'Digital multi-level ultrasonic water depth sensing'
    ],
    specs: {
      'Tank Material': 'SS 304 / Heavy Gauge Carbon Steel with Epoxy lining',
      'Insulation': '50mm Rockwool with Aluminium / SS Sheathing',
      'Temperature Range': 'Ambient to 95°C precision controlled',
      'Sensors': 'PT100 RTD with PID digital controller'
    },
    applications: ['Hot Water Soaking Tanks', 'Condensate Recovery Wells', 'Cooling Water Reservoirs', 'Plant Water Management']
  },
  {
    id: 'steam-plant',
    moduleCode: 'MODULE 05',
    title: 'Steam & Boiler Plant',
    shortDescription: 'High-efficiency thermal energy integration using bio-mass (rice husk) and industrial boiler lines.',
    fullDescription: 'Comprehensive industrial steam generation systems optimized for rice milling complexes. Utilizes paddy husk as renewable fuel, delivering steady high-pressure steam for parboiling tanks, heat exchangers, and grain dryers with minimum fuel cost.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD33X7dZ09PT0M2esFy_kfYS8bhCPmQ7EOimFl19cHxHGu9CW-lsmtxVFlhEXNsnZtMkTfhFBnP57qplN3OHqpWz45S2nBxzBX9WsaqPTVG6uVyngmvT73eZE8kl2-j3v37jusIwPaDuDvuqiSe0ip-c9A3mDqoBMUuTWt3DHxabQ1-575e_n5tSwHLfyFY3KTn13IPZY7h9IK83N2NGPRoN5F9twB8fFI9Nh2SBufyWRsPocAUkNdj',
    capacityRange: '1 TPH to 15 TPH Steam Rating',
    features: [
      'High thermal efficiency husk-fired fluidized bed / traveling grate design',
      'Automated pressure regulating stations with safety relief manifolds',
      'Multi-cyclone dust collector and wet scrubber for emission compliance',
      'Integrated boiler feedwater deaerator and chemical dosing unit'
    ],
    specs: {
      'Fuel Compatibility': 'Rice Husk, Wood Chips, Biomass Briquettes',
      'Working Pressure': '10.54 kg/cm² to 17.5 kg/cm²',
      'Thermal Efficiency': 'Up to 82% with economizer integration',
      'Emission Standard': 'Compliant with pollution control board norms'
    },
    applications: ['Hydrothermal Steam Supply', 'Column Dryer Air Heating', 'Plant Co-generation', 'Husk Energy Utilization']
  },
  {
    id: 'cooler',
    moduleCode: 'MODULE 06',
    title: 'Paddy & Rice Coolers',
    shortDescription: 'Counter-flow aerated tempering and cooling towers to stabilize grain temperature before milling.',
    fullDescription: 'High-performance counterflow grain coolers designed to bring down hot dried paddy and processed rice to ambient storage temperature. Prevents moisture rebound, stops condensation in storage silos, and protects milled rice from thermal stress cracking.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdjJUTJWp8s2aT3kSE4vXNGpbyd-J9bdfdz6aRkDUkRSbg8bspY8jKwoPzBC3aZJJaTp40uRO6zK5lz_vbK2bhZqKDaok1kxJNdU3WgslRwBNLD_PrM-aMQjk1sJxS51x3a74VMxFHZmQnD7oiTJRPeKcSsGqFFlSIh368hGJB2FxZ5uIQuLmoa0NcTNUrTEpDG-gAnpzLfrnj2Zw_5B9oDbkLdACFWg3L681A1ZLfNcm8RXWanGkM',
    capacityRange: '5 TPH to 40 TPH',
    features: [
      'True counterflow cooling principle ensuring highest energy efficiency',
      'Even air distribution without dead zones across the entire cross section',
      'Pneumatically actuated discharge grid with variable discharge speed',
      'Heavy-duty cyclone dust separation system'
    ],
    specs: {
      'Cooling Type': 'Octagonal Counter-Flow Air Stream',
      'Temperature Drop': 'Brings grain to within 3°C of ambient air',
      'Air Exhaust': 'High static pressure fan with reverse pulse filter',
      'Construction': 'Wear-resistant galvanized steel chamber'
    },
    applications: ['Post-Dryer Paddy Cooling', 'Milled Polished Rice Cooling', 'Flour & Byproduct Aeration', 'Grain Tempering Silos']
  }
];

export const AUTOMATION_CAPABILITIES: AutomationCapability[] = [
  {
    id: 'scada-plc',
    title: 'SCADA & PLC Integration',
    description: 'Centralized supervisory control and data acquisition enabling single-touch plant management with intuitive visual mimic screens.',
    icon: 'Cpu',
    highlight: true,
    colSpan: 'md:col-span-8',
    details: [
      'Siemens / Rockwell / Schneider PLC architectures',
      'Dual-redundant industrial Ethernet communication',
      'Interactive 3D plant flow visual mimic interfaces',
      'One-touch start/stop sequencing with safety interlocks'
    ]
  },
  {
    id: 'sensor-networks',
    title: 'Precision Sensor Networks',
    description: 'Real-time telemetry measuring temperature, humidity, pressure, and throughput across every module in the line.',
    icon: 'Activity',
    colSpan: 'md:col-span-4',
    details: [
      'Continuous dielectric moisture probes',
      'Multi-zone RTD thermal sensor arrays',
      'Ultrasonic & radar bin level sensors'
    ]
  },
  {
    id: 'real-time-analytics',
    title: 'Cloud & Local Analytics',
    description: 'Actionable production intelligence tracking yield percentages, energy consumption per ton, and machine efficiency.',
    icon: 'BarChart3',
    colSpan: 'md:col-span-4',
    details: [
      'Hourly yield & head rice recovery metrics',
      'Specific power (kWh/ton) consumption logs',
      'Automated batch yield reconciliations'
    ]
  },
  {
    id: 'energy-management',
    title: 'Intelligent Energy Management',
    description: 'Dynamic load balancing and automated VFD speed synchronization cutting overall electrical consumption by up to 22%.',
    icon: 'Zap',
    colSpan: 'md:col-span-4',
    details: [
      'Automated power factor optimization',
      'Harmonic filtering & surge suppression',
      'Dynamic blower speed modulation'
    ]
  },
  {
    id: 'remote-access',
    title: 'Mobile & Cloud Monitoring',
    description: 'Secure, encrypted mobile and web dashboards for plant managers to monitor live operational parameters from anywhere.',
    icon: 'Smartphone',
    colSpan: 'md:col-span-4',
    details: [
      'iOS & Android manager dashboard apps',
      'Real-time WhatsApp/SMS fault alerts',
      'Multi-plant aggregated enterprise view'
    ]
  }
];

export const SPECIALIST_CAPABILITIES: SpecialistCapability[] = [
  {
    id: 'plant-automation',
    title: 'Plant Automation',
    description: 'Custom programmable logic systems, automated grain routing, motor control centers (MCC), and intelligent sensor arrays designed for continuous 24/7 industrial production.',
    statusBadge: {
      label: 'Automation Level',
      value: 'Level 4 Industry Ready',
      icon: 'Sliders'
    },
    tags: ['MCC & PCC Panels', 'VFD Speed Synchronization', 'Recipe Batch Management', 'Safety Interlock Systems'],
    colSpan: 6
  },
  {
    id: 'steam-rice',
    title: 'Steam Rice Process',
    description: 'Precision temperature and pressurized steam processing ensuring uniform translucent color, reduced chalky grain, and optimum starch gelatinization for premium market grades.',
    statusBadge: {
      label: 'Grain Recovery',
      value: 'Up to 99.2% Whole Grain',
      icon: 'Layers'
    },
    tags: ['Controlled Steam Injection', 'Low Moisture Gradient', 'Zero Grain Breakage', 'Rapid Cooling Transition'],
    colSpan: 6
  },
  {
    id: 'parboiled-process',
    title: 'Parboiled Process',
    description: 'Complete hydrothermal soaking, pressurized steaming, and graduated multi-pass continuous column drying pipelines tailored for high yield and zero off-odor.',
    statusBadge: {
      label: 'Process Reliability',
      value: '100% Odor-Free Soaking',
      icon: 'Sparkles'
    },
    tags: ['Vacuum Degasification', 'Multi-Temp Water Circulation', 'Nutrient Lock Tech', 'High Head Rice Output'],
    colSpan: 6
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    description: 'End-to-end architectural engineering, custom fabrication, civil foundation guidance, electrical installation, commissioning, and operator training from concept to commercial run.',
    statusBadge: {
      label: 'Project Scope',
      value: 'Concept to Production',
      icon: 'Compass'
    },
    tags: ['Site Survey & Layout', 'Process Engineering', 'Civil & Structural Design', 'Commissioning & Handover'],
    colSpan: 6
  },
  {
    id: 'tamil-nadu-process',
    title: 'Tamil Nadu Type Processes',
    description: 'Deep specialized expertise in regional south Indian paddy varieties (Ponni, Deluxe, CR1009, ADT, BPT) with customized parboiling recipes for authentic aroma, texture, and high market value.',
    statusBadge: {
      label: 'Regional Expertise',
      value: 'Deep Variety Optimization',
      icon: 'CheckCircle2'
    },
    tags: ['Ponni Parboiled', 'Single Steam Ponni', 'Idli Rice Optimization', 'Traditional Flavor Retention'],
    colSpan: 12
  }
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'control-room-247',
    title: '24/7 Monitoring & Telemetry',
    description: 'Round-the-clock remote plant surveillance, diagnostic tele-support, and predictive maintenance alerts to prevent unplanned downtime.',
    icon: 'Radio',
    badge: 'LIVE TELE-DIAGNOSTICS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4GebLmRbNKiL_OKzFvvd6pKEUvpB2-9ortKahL5vNfY2HdwBvIXNVTB6VFQhpHWZBtvbmK4hxclQctjZqYzKrHRSZtEZdNETP7F5V4GNAl29Xqt8RkcZjvuXKZucRdS4QNIneifTK5GeFwLxtfPY9GZUVt6DFWQH6jQ_I94EMBazEz5S585LbSiJez5CPC8GKYv_WhxBolbaQeBWsw4v7nq9bWewxWrXr6qQg6bYne72uc0By90o2',
    colSpan: 'md:col-span-6',
    features: ['Real-time remote PLC diagnostics', 'Automated anomaly detection', 'Monthly plant performance reviews']
  },
  {
    id: 'circuit-engineering',
    title: 'Installation & Commissioning',
    description: 'Expert field engineers on-site for mechanical erection, precision laser alignment, electrical panel wiring, and rigorous dry & wet load trials.',
    icon: 'Wrench',
    badge: 'CERTIFIED ENGINEERS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-j5Rf9nkOlhvrtT9fawdWfShjzsCqnqlE12qOaU6j_p2Wu42yH8Cpdp1wV9Dv0Rm5r5fOFxaM5udcFhsP-nTjlxeBIsbkenJzlIIfNCD7iBComsUaxGEYB17eAlg93r2YvVlaN28lA0wSOU_RyJ_nsukXAajDh_MHpIwofvO_Iq7sii6zM06Ebd_vc6pYWiedZ4lZUrG_v67YvqSWuFy6f7HAW2J3S3AymKlQGQptfY4rASecRgwg',
    colSpan: 'md:col-span-6',
    features: ['Turnkey on-site mechanical erection', 'PLC code loading & calibration', 'Staff training & operational SOP handbooks']
  },
  {
    id: 'preventive-maintenance',
    title: 'Preventive Maintenance (AMC)',
    description: 'Scheduled seasonal maintenance contracts, vibration analysis, thermal imaging, and bearing lubrication routines ensuring zero seasonal stoppage.',
    icon: 'ShieldCheck',
    badge: 'ANNUAL AMC COVERAGE',
    colSpan: 'md:col-span-4',
    features: ['Pre-milling season comprehensive audit', 'Thermal imaging of control panels', 'Vibration analysis on blowers & motors']
  },
  {
    id: 'modernization-upgrades',
    title: 'Plant Upgrades & Modernization',
    description: 'Retrofit existing legacy paddy processing lines with GrainEx modern automation, high-efficiency dryers, and automated steam systems.',
    icon: 'TrendingUp',
    badge: 'RETROFIT SOLUTIONS',
    colSpan: 'md:col-span-4',
    features: ['Retrofitting manual valves with pneumatic actuators', 'Adding SCADA supervision to existing machinery', 'Capacity debottlenecking studies']
  },
  {
    id: 'spare-parts',
    title: 'Genuine Spare Parts Supply',
    description: 'Direct inventory of OEM replacement elevator buckets, dryer screens, steam valves, temperature sensors, and conveyor chains with rapid dispatch.',
    icon: 'PackageCheck',
    badge: 'GENUINE OEM PARTS',
    colSpan: 'md:col-span-4',
    features: ['Guaranteed 24-48h dispatch for critical parts', '100% OEM precision tolerance guarantee', 'Long-life wear-resistant alloy components']
  }
];

export const TURNKEY_PHASES = [
  { step: '01', title: 'Consultation & Site Survey', desc: 'Understanding your grain variety, production capacity target, land parcel, and energy resources.' },
  { step: '02', title: 'Engineering & 3D Layout', desc: 'Comprehensive civil foundation drawings, equipment schematics, and material flow optimization.' },
  { step: '03', title: 'Precision Fabrication', desc: 'CNC manufacturing, laser-cut components, and premium zinc-galvanized sheet metal assemblies.' },
  { step: '04', title: 'Installation & Erection', desc: 'Certified mechanical, electrical, and automation engineers deploying the complete system on site.' },
  { step: '05', title: 'Commissioning & Trial Runs', desc: 'Rigorous wet and dry load testing to achieve designated moisture curves and recovery rates.' },
  { step: '06', title: 'Handover & AMC Support', desc: 'Full operator training, SCADA software calibration, and 24/7 dedicated after-sales coverage.' },
];
