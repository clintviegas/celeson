export interface InsightArticle {
  slug: string;
  title: string;
  description: string;
  category: 'Fleet Safety' | 'HSE & Compliance' | 'Case Study' | 'Industry Guide';
  region: 'uae' | 'india' | 'both';
  date: string;
  readTime: string;
  image: string;
  keywords: string[];
  serviceIds?: string[];
  youtube?: string;
  download?: { label: string; href: string };
  content: { heading?: string; paragraphs: string[] }[];
}

export const insights: InsightArticle[] = [
  {
    slug: 'fleet-safety-audit-checklist-transport-operators',
    title: 'Fleet Safety Audit Checklist: What Every Transport Operator Should Review',
    description:
      'A practical fleet safety audit checklist for transport operators in the UAE and India — covering vehicles, drivers, journey management, and compliance documentation.',
    category: 'Industry Guide',
    region: 'both',
    date: '2025-11-12',
    readTime: '8 min read',
    image: '/images/insight-fleet-monitoring.png',
    keywords: ['fleet safety audit', 'transport compliance', 'journey management', 'UAE fleet safety', 'India road transport'],
    download: {
      label: 'Download Fleet Safety Checklist (PDF-ready)',
      href: '/downloads/fleet-safety-audit-checklist.html',
    },
    content: [
      {
        paragraphs: [
          'Transport operators face increasing pressure to demonstrate that safety is managed systematically — not reactively. A structured fleet safety audit helps identify gaps before they become incidents, supports insurance and client due diligence, and aligns operations with ISO 39001 and local regulatory expectations.',
          'Celeson recommends reviewing fleet safety across four domains: vehicle condition, driver competency, journey and route risk, and governance documentation. This article outlines what to inspect, what evidence to collect, and how to prioritise corrective actions.',
        ],
      },
      {
        heading: '1. Vehicle & Equipment Readiness',
        paragraphs: [
          'Verify that every active vehicle has current registration, insurance, fitness certificates, and preventive maintenance records. Inspect braking systems, tyres, lighting, fire extinguishers, first-aid kits, and load securing equipment — especially for tankers and heavy commercial vehicles.',
          'For DG and chemical transport, confirm placarding, spill kits, and emergency response equipment are present and staff know how to use them.',
        ],
      },
      {
        heading: '2. Driver Qualification & Behaviour',
        paragraphs: [
          'Audit driver files for valid licences, medical fitness certificates, defensive driving training records, and background verification. Review IVMS or telematics data for overspeeding, harsh braking, fatigue indicators, and route deviations over the last 90 days.',
          'Drivers with repeated violations should have documented coaching, reassessment, or reassignment — not informal warnings alone.',
        ],
      },
      {
        heading: '3. Journey Management & Route Risk',
        paragraphs: [
          'Confirm journey management plans exist for long-haul and high-risk routes. Assess whether rest stops, fatigue breaks, and night-driving restrictions are enforced. Map high-risk zones — sharp curves, construction areas, school zones — and ensure drivers receive pre-trip briefings.',
        ],
      },
      {
        heading: '4. Documentation & Governance',
        paragraphs: [
          'Maintain incident and near-miss registers, audit trails for corrective actions, contractor management records, and management review minutes. Clients increasingly request evidence of Goal Zero commitment — documentation is how you prove it.',
          'Download our printable checklist below or contact Celeson for a third-party fleet safety audit tailored to your operations.',
        ],
      },
    ],
  },
  {
    slug: 'goal-zero-prevention-first-safety-culture',
    title: 'Goal Zero in Logistics: Building a Prevention-First Safety Culture',
    description:
      'How logistics and transport organisations can move from compliance-driven safety to a genuine Goal Zero culture — no harm to people, assets, or the environment.',
    category: 'HSE & Compliance',
    region: 'both',
    date: '2025-10-28',
    readTime: '7 min read',
    image: '/images/about-safety-leadership.png',
    keywords: ['Goal Zero', 'safety culture', 'logistics HSE', 'prevention-first safety', 'operational excellence'],
    content: [
      {
        paragraphs: [
          'Goal Zero is not a slogan on a poster — it is an operating philosophy that places prevention at the centre of every decision. In logistics and transport, where risk is constant and consequences are severe, organisations that treat safety as a checkbox exercise inevitably face incidents, reputational damage, and regulatory scrutiny.',
          'Celeson\'s approach — Predict. Prevent. Protect. — reflects this shift: identify hazards before journeys begin, intervene when behaviour or conditions change, and protect people through systems that work in the field, not just on paper.',
        ],
      },
      {
        heading: 'From Compliance to Culture',
        paragraphs: [
          'Compliance satisfies regulators; culture sustains performance. Leaders must model safe behaviour, allocate resources to training and technology, and treat near-misses as learning opportunities rather than statistics to minimise.',
          'Behaviour-based safety observations, driver coaching, and visible management engagement on site are proven levers for culture change in fleet and facility operations.',
        ],
      },
      {
        heading: 'Practical Steps for Operations Leaders',
        paragraphs: [
          'Start with a honest baseline assessment. Implement journey management and IVMS where feasible. Invest in driver competency programmes — classroom and practical. Establish clear accountability for contractors. Review incidents with cross-functional teams and publish learnings.',
          'Organisations that embed Goal Zero see fewer lost-time injuries, lower insurance costs, and stronger client retention — because safety becomes a competitive advantage, not a cost centre.',
        ],
      },
    ],
  },
  {
    slug: 'ivms-journey-management-gcc-fleet-risk',
    title: 'IVMS & Journey Management: Reducing Fleet Risk in the GCC',
    description:
      'How IVMS monitoring and journey management systems reduce fleet risk for oil & gas, logistics, and corporate transport operators across the UAE and GCC.',
    category: 'Fleet Safety',
    region: 'uae',
    date: '2025-10-15',
    readTime: '9 min read',
    image: '/images/hero-uae-logistics.png',
    keywords: ['IVMS UAE', 'journey management GCC', 'fleet monitoring', 'ADNOC transport safety', 'telematics compliance'],
    youtube: 'https://www.youtube.com/embed/gPbi1xNOtZ8',
    download: {
      label: 'Download Transport Risk Assessment Guide',
      href: '/downloads/transport-risk-assessment-guide.html',
    },
    content: [
      {
        paragraphs: [
          'The GCC transport environment presents unique risks: long desert highways, extreme heat affecting driver fatigue, heavy vehicle mix, and stringent client requirements from oil & gas majors. Intelligent Vehicle Monitoring Systems (IVMS) and structured journey management are no longer optional for operators serving ADNOC, ENOC, Shell, and similar clients.',
        ],
      },
      {
        heading: 'What IVMS Should Deliver',
        paragraphs: [
          'Effective IVMS goes beyond GPS dots on a map. It should provide real-time overspeed alerts, geofence violations, harsh event detection, live camera feeds where required, and integration with compliance dashboards. Control room operators must be empowered to intervene — not just record events after the fact.',
        ],
      },
      {
        heading: 'Journey Management Essentials',
        paragraphs: [
          'Every high-risk journey should have a plan: approved route, rest points, estimated arrival, emergency contacts, and weather or road condition checks. Pre-trip and post-trip briefings create accountability and reduce ad-hoc decision-making under pressure.',
          'Celeson supports clients in designing control room operations, IVMS policy frameworks, and driver coaching workflows aligned with GCC regulatory and client standards.',
        ],
      },
    ],
  },
  {
    slug: 'school-transport-safety-framework-uae-india',
    title: 'School Transport Safety: A Practical Framework for UAE & India',
    description:
      'Essential school transport safety standards — route risk assessment, driver vetting, emergency planning, and parent communication for UAE and Indian school systems.',
    category: 'Industry Guide',
    region: 'both',
    date: '2025-09-22',
    readTime: '8 min read',
    image: '/images/insight-school-transport.png',
    keywords: ['school transport safety', 'student bus safety UAE', 'school fleet India', 'route risk assessment schools'],
    content: [
      {
        paragraphs: [
          'Parents entrust schools with their children\'s safety every morning. School transport systems must therefore meet a higher standard than general commercial fleet operations — with rigorous driver background checks, vehicle standards, route assessments, and emergency preparedness that is tested, not assumed.',
        ],
      },
      {
        heading: 'Route & Premises Risk Assessment',
        paragraphs: [
          'Map every pick-up and drop-off point for traffic density, pedestrian crossings, parking constraints, and visibility. Assess school premises for safe boarding zones, supervision protocols, and evacuation procedures.',
        ],
      },
      {
        heading: 'Driver & Attendant Standards',
        paragraphs: [
          'Drivers and attendants should undergo background verification, medical fitness checks, defensive driving training, and child safeguarding awareness. Behaviour standards — punctuality, communication, emergency response — should be documented and monitored.',
        ],
      },
      {
        heading: 'Emergency & Communication Plans',
        paragraphs: [
          'Maintain updated parent contact lists, GPS tracking accessible to school administrators, and clear escalation paths for breakdowns, medical events, or security incidents. Conduct termly drills and review near-misses with school leadership.',
        ],
      },
    ],
  },
  {
    slug: 'driver-competency-background-verification-india',
    title: 'Driver Competency Management: Why Background Verification Matters in India',
    description:
      'The business case for driver competency programmes, digital driver profiles, and background verification in Indian logistics and industrial transport.',
    category: 'Case Study',
    region: 'india',
    date: '2025-09-08',
    readTime: '10 min read',
    image: '/images/case-reliance-driver-360.png',
    serviceIds: ['transport-safety'],
    keywords: ['driver management India', 'driver background check', 'transport safety India', 'Motor Vehicles Act compliance'],
    youtube: 'https://www.youtube.com/embed/ifSg1Ti2Us0',
    download: {
      label: 'Download Driver Management Center Overview',
      href: '/downloads/driver-management-center-overview.html',
    },
    content: [
      {
        paragraphs: [
          'India\'s road transport sector faces well-documented challenges: fake licences, inadequate medical checks, fragmented driver records, and limited enforcement. For organisations moving goods across state borders or operating large contracted fleets, these gaps translate directly into liability, insurance exposure, and operational disruption.',
          'A Driver Management Center (DMC) approach — screening, competency training, real-time monitoring, and performance ranking — addresses root causes rather than symptoms.',
        ],
      },
      {
        heading: 'Building a Driver 360° Profile',
        paragraphs: [
          'Each driver should have a unique digital record: licence validation, medical fitness history, training certifications, incident history, telematics performance, and background verification outcomes. Dynamic risk scoring (0–100) helps allocate supervision resources to highest-risk drivers.',
        ],
      },
      {
        heading: 'Key Challenges in Indian Road Safety',
        paragraphs: [
          'Driver competency gaps, fake and duplicate licences, lack of unified driver databases, poor medical checks, weak enforcement, criminal history gaps, behavioural issues, and infrastructure problems all contribute to increased fatalities, legal liabilities, insurance costs, and brand risk for fleet operators.',
          'Celeson\'s DMC framework addresses each gap systematically — from Aadhaar-linked verification and RTO API integration to medical fitness tracking, background checks, and behaviour analytics.',
        ],
      },
      {
        heading: 'Alignment with Motor Vehicles Act 2019',
        paragraphs: [
          'The amended Act emphasises stricter penalties, corporate responsibility for fleet operators, and digital enforcement. Organisations that invest in driver qualification systems and IVMS monitoring are better positioned for regulatory inspections and client audits.',
          'Celeson has supported major industrial clients in implementing DMC frameworks, defensive driving programmes, and highway safety engagement — with measurable reductions in violation rates and incident frequency.',
        ],
      },
    ],
  },
  {
    slug: 'warehouse-hse-loading-unloading-safety',
    title: 'HSE Compliance for Warehousing & Loading Operations',
    description:
      'Warehouse HSE essentials — loading bay safety, forklift operations, DG storage, permit-to-work, and contractor management for logistics facilities.',
    category: 'HSE & Compliance',
    region: 'both',
    date: '2025-08-19',
    readTime: '7 min read',
    image: '/images/insight-warehouse-hse.png',
    keywords: ['warehouse HSE', 'loading bay safety', 'logistics facility safety', 'DG storage compliance'],
    content: [
      {
        paragraphs: [
          'Warehouses and distribution centres are high-activity environments where vehicles, pedestrians, forklifts, and manual handling intersect. Incidents often occur during loading and unloading — when pressure to meet dispatch schedules conflicts with safe procedures.',
        ],
      },
      {
        heading: 'Loading Bay & Traffic Management',
        paragraphs: [
          'Define one-way traffic flows, pedestrian walkways, speed limits, and dock scheduling. Use barriers, signage, and spotters during reversing operations. Separate contractor drivers from warehouse staff with clear communication protocols.',
        ],
      },
      {
        heading: 'DG Storage & Permit-to-Work',
        paragraphs: [
          'Dangerous goods require segregated storage, compatible grouping, spill containment, and trained personnel. Hot work, confined space entry, and height work should follow permit-to-work systems with documented authorisation and monitoring.',
        ],
      },
      {
        heading: 'Contractor & Visitor Management',
        paragraphs: [
          'Third-party hauliers and maintenance contractors must receive site inductions, PPE requirements, and scope-of-work briefings. Audit contractor safety performance and integrate findings into vendor selection criteria.',
        ],
      },
    ],
  },
  {
    slug: 'marine-port-safety-uae-gcc',
    title: 'Marine & Port Safety: Vessel Inspection in the UAE',
    description:
      'How Celeson supports oil & gas and logistics operators with vessel readiness inspection, cargo securing verification, and port safety assurance across UAE ports.',
    category: 'Case Study',
    region: 'uae',
    date: '2025-08-05',
    readTime: '6 min read',
    image: '/images/hero-uae-logistics.png',
    keywords: ['marine port safety UAE', 'vessel inspection', 'cargo securing', 'DG cargo UAE'],
    youtube: 'https://www.youtube.com/embed/IHenmgD_Sl8',
    content: [
      {
        paragraphs: [
          'UAE port operations demand rigorous cargo safety verification — particularly for oil & gas, chemicals, and project cargo. Celeson provides vessel readiness inspection, loading and discharge monitoring, and marine compliance checks aligned with client and regulatory requirements.',
          'Applicable for oil & gas cargo, bulk commodities, chemical products, industrial materials, and project cargo — our teams work alongside terminal operators and logistics providers to prevent incidents before cargo moves.',
        ],
      },
      {
        heading: 'Scope of Port & Marine Services',
        paragraphs: [
          'Services include vessel readiness inspection, cargo securing verification, loading & discharge monitoring, marine safety compliance checks, port operations risk assessment, DG cargo handling verification, cargo documentation review, and incident prevention programmes.',
        ],
      },
    ],
  },
  {
    slug: 'oil-gas-contractor-transport-uae',
    title: 'Contractor Transport Safety for Oil & Gas Operators in the GCC',
    description:
      'Structured contractor safety management, fleet compliance programmes, and journey management for ADNOC, ENOC, Shell and major GCC energy operators.',
    category: 'Industry Guide',
    region: 'uae',
    date: '2025-07-18',
    readTime: '7 min read',
    image: '/images/insight-fleet-monitoring.png',
    keywords: ['contractor safety GCC', 'oil gas transport UAE', 'fleet compliance ADNOC'],
    content: [
      {
        paragraphs: [
          'Major GCC operators require contractors to meet stringent transport safety standards — IVMS monitoring, driver qualification, journey management plans, and audit-ready documentation. Celeson helps contractors and operators close compliance gaps before client audits.',
          'Our programmes align with ADNOC, ENOC, Shell, and TotalEnergies transport safety requirements, covering contractor management, driver qualification systems, fleet compliance monitoring, and incident investigation protocols.',
        ],
      },
      {
        heading: 'Contractor Qualification & Fleet Compliance',
        paragraphs: [
          'Every contractor driver and vehicle must meet documented qualification criteria before operating on client sites. Celeson implements digital driver files, vehicle fitness checks, and real-time IVMS monitoring to maintain continuous compliance rather than point-in-time audits.',
        ],
      },
    ],
  },
  {
    slug: 'reliance-supply-chain-safety-india',
    title: 'Supply Chain Safety Audits for Industrial Operations in India',
    description:
      'Warehouse HSE reviews, distribution network assessments, and operational excellence programmes for large-scale Indian industrial and logistics operations.',
    category: 'Case Study',
    region: 'india',
    date: '2025-08-01',
    readTime: '7 min read',
    image: '/images/insight-warehouse-hse.png',
    keywords: ['supply chain safety India', 'warehouse HSE', 'Reliance logistics safety'],
    content: [
      {
        paragraphs: [
          'Industrial supply chains across India face compound risks — multi-state transport, contractor fleets, warehouse loading operations, and regulatory variation. Structured supply chain audits identify priority risks and establish practical corrective action plans.',
          'Celeson has supported major industrial clients including Reliance Industries with warehouse HSE reviews, distribution network assessments, and contractor development programmes spanning multiple states.',
        ],
      },
      {
        heading: 'Warehouse & Distribution Network Reviews',
        paragraphs: [
          'Audits cover loading bay safety, forklift-pedestrian segregation, DG storage compliance, inventory control processes, and last-mile distribution planning. Findings are prioritised by risk severity with clear ownership and timelines.',
        ],
      },
    ],
  },
  {
    slug: 'highway-safety-engagement-india',
    title: 'Highway Safety Engagement Programmes Across India',
    description:
      'Community road safety campaigns, highway engagement, and fleet safety programmes reducing incident rates on national and state highway corridors.',
    category: 'Case Study',
    region: 'india',
    date: '2025-07-10',
    readTime: '6 min read',
    image: '/images/hero-india-highway.png',
    keywords: ['highway safety India', 'road safety campaign', 'fleet safety India'],
    youtube: 'https://www.youtube.com/embed/s4OY773ENX8',
    content: [
      {
        paragraphs: [
          'India\'s highway network carries the majority of freight movement. Celeson delivers highway safety engagement, driver coaching, and community awareness programmes that complement fleet technology and compliance systems.',
          'Programmes include highway safety engagement along national corridors, community safety campaigns in high-incident zones, and fleet safety programmes integrated with driver management centres.',
        ],
      },
      {
        heading: 'Community & Fleet Integration',
        paragraphs: [
          'Effective road safety requires engagement beyond the fleet — community training workshops, youth development programmes, and health awareness campaigns create safer environments for all road users while reinforcing fleet safety culture.',
        ],
      },
    ],
  },
  {
    slug: 'iso-39001-road-traffic-safety-gcc',
    title: 'ISO 39001 Road Traffic Safety Management in the GCC',
    description:
      'Implementing ISO 39001 road traffic safety management systems for fleet operators across the UAE and Gulf — Goal Zero alignment, risk assessments, and continuous improvement.',
    category: 'Industry Guide',
    region: 'uae',
    date: '2025-06-28',
    readTime: '8 min read',
    image: '/images/about-safety-leadership.png',
    keywords: ['ISO 39001 GCC', 'road traffic safety management', 'Goal Zero UAE', 'fleet RTSMS'],
    youtube: 'https://www.youtube.com/embed/R8i157Aw78Y',
    content: [
      {
        paragraphs: [
          'ISO 39001 provides a structured framework for organisations that interact with the road traffic system to reduce death and serious injuries. For GCC fleet operators serving oil & gas, logistics, and industrial clients, certification demonstrates systematic commitment to road traffic safety.',
          'Celeson supports clients in developing RTS policies, setting measurable objectives, conducting transport risk assessments, and building the documentation trail required for ISO 39001 alignment.',
        ],
      },
      {
        heading: 'Four Transportation Pillars in Practice',
        paragraphs: [
          'Safe Operations aligned with ISO 39001 and ISO 45001. Compliance & Governance through contractor management and audit programmes. Technology & Intelligence via IVMS, GPS tracking, and compliance dashboards. People & Capability Development through driver management centres and defensive driving programmes.',
        ],
      },
    ],
  },
  {
    slug: 'facility-management-labour-camps-uae',
    title: 'Facility Management for Industrial & Labour Accommodation — GCC',
    description:
      'HSE management, preventive maintenance, and workplace safety for commercial facilities, industrial sites, and labour accommodation across the UAE and Gulf.',
    category: 'Industry Guide',
    region: 'uae',
    date: '2025-06-15',
    readTime: '7 min read',
    image: '/images/insight-warehouse-hse.png',
    keywords: ['facility management UAE', 'labour accommodation GCC', 'industrial HSE', 'commercial facilities'],
    content: [
      {
        paragraphs: [
          'Celeson delivers integrated facility management for commercial facilities, industrial facilities, labour accommodation, and residential communities across the GCC — covering HSE management, maintenance planning, energy management, and permit-to-work systems.',
          'Services include asset maintenance, workplace safety, building operations, hazard identification, and contractor management for industrial and commercial clients.',
        ],
      },
    ],
  },
  {
    slug: 'school-transport-safety-india',
    title: 'School Transport Safety Framework for Indian Schools',
    description:
      'Route risk assessment, driver vetting, GPS tracking, and emergency planning for school transport systems across Indian cities and highway corridors.',
    category: 'Industry Guide',
    region: 'india',
    date: '2025-06-01',
    readTime: '7 min read',
    image: '/images/insight-school-transport.png',
    keywords: ['school transport safety India', 'student bus safety', 'school fleet India'],
    content: [
      {
        paragraphs: [
          'School transport in India requires rigorous driver background checks, vehicle fitness standards, route assessments, and emergency preparedness. Celeson implements school transport safety frameworks aligned with Motor Vehicles Act requirements and best practice from multinational operators.',
        ],
      },
      {
        heading: 'Framework Components',
        paragraphs: [
          'Driver and attendant background verification, medical fitness checks, defensive driving training, child safeguarding awareness, GPS tracking accessible to school administrators, and termly emergency drills with documented learnings.',
        ],
      },
    ],
  },
  {
    slug: 'vizag-steel-plant-logistics-india',
    title: 'Vizag Steel Plant — Industrial Logistics & Transport Safety',
    description:
      'Heavy industrial transport safety, bulk logistics HSE, and contractor fleet compliance for steel plant operations and distribution networks in India.',
    category: 'Case Study',
    region: 'india',
    date: '2025-05-20',
    readTime: '8 min read',
    image: '/images/hero-india-highway.png',
    keywords: ['Vizag Steel logistics', 'industrial transport safety India', 'steel plant HSE'],
    content: [
      {
        paragraphs: [
          'Steel plant operations involve heavy bulk transport, complex loading operations, and contractor fleets operating across challenging industrial environments. Celeson supported Vizag Steel Plant with industrial transport safety programmes, loading bay reviews, and contractor development.',
        ],
      },
      {
        heading: 'Industrial Services Delivered',
        paragraphs: [
          'Supply chain audits, warehouse assessments, operational excellence programmes, and contractor development — ensuring transport and logistics operations meet both regulatory requirements and internal safety standards.',
        ],
      },
    ],
  },
  {
    slug: 'warehouse-hse-india-distribution',
    title: 'Warehouse HSE for Indian Distribution Networks',
    description:
      'Loading bay safety, DG storage compliance, forklift operations, and permit-to-work systems for large-scale warehousing and distribution across India.',
    category: 'HSE & Compliance',
    region: 'india',
    date: '2025-05-08',
    readTime: '7 min read',
    image: '/images/insight-warehouse-hse.png',
    keywords: ['warehouse HSE India', 'loading bay safety', 'DG storage India', 'distribution safety'],
    youtube: 'https://www.youtube.com/embed/Tf5p7DRCB_4',
    content: [
      {
        paragraphs: [
          'Indian distribution networks face high activity in warehouses where vehicles, pedestrians, forklifts, and manual handling intersect. Celeson delivers warehouse HSE programmes covering loading bay traffic management, DG storage solutions, inventory control, and contractor induction.',
        ],
      },
    ],
  },
  {
    slug: 'dg-cargo-port-operations-uae',
    title: 'DG Cargo & Port Operations Assurance — UAE',
    description:
      'Dangerous goods cargo verification, loading and discharge monitoring, and incident prevention for chemical, oil & gas, and project cargo through UAE ports.',
    category: 'Case Study',
    region: 'uae',
    serviceIds: ['marine'],
    date: '2025-05-01',
    readTime: '6 min read',
    image: '/images/hero-uae-logistics.png',
    keywords: ['DG cargo UAE', 'port operations safety', 'project cargo UAE'],
    content: [
      {
        paragraphs: [
          'Celeson provides professional vessel inspection and cargo safety verification for oil & gas cargo, bulk commodities, chemical products, industrial materials, and project cargo through UAE ports.',
          'Services include vessel readiness inspection, cargo securing verification, loading & discharge monitoring, marine safety compliance checks, and cargo documentation review.',
        ],
      },
    ],
  },
  {
    slug: 'reliance-driver-360-transport-platform-india',
    title: 'Reliance Transport Safety Platform — A National Digital Ecosystem',
    description:
      'How Celeson built a centralized transport safety platform for Reliance — integrating Driver 360° profiles, dynamic risk scoring, and real-time compliance monitoring across India.',
    category: 'Case Study',
    region: 'india',
    serviceIds: ['transport-safety', 'technology'],
    date: '2025-10-01',
    readTime: '9 min read',
    image: '/images/case-reliance-driver-360.png',
    keywords: ['Reliance transport safety', 'Driver 360 India', 'dynamic risk score', 'IVMS India', 'driver management platform'],
    content: [
      {
        paragraphs: [
          'Celeson supported Reliance Industries in creating a single national digital ecosystem that integrates driver identity, haulier capability, vehicle data, live risk monitoring, incident history, and a compliance dashboard — unifying transport safety across multi-state logistics operations.',
        ],
      },
      {
        heading: 'Driver 360° Digital Profile System',
        paragraphs: [
          'Each driver receives a unique digital ID with Aadhaar-linked verification, real-time RTO licence validation, duplicate licence detection, criminal background verification, and previous employment checks. Personal, legal, competency, and medical records are accessible through a unified profile with performance analytics.',
        ],
      },
      {
        heading: 'Dynamic Risk Scoring Model',
        paragraphs: [
          'Every driver receives a Dynamic Risk Score from 0–100 based on speed compliance, past accidents, training compliance, fatigue patterns, violation frequency, medical status, and behaviour trend analytics. Scores below 40 indicate critical risk; 40–69 high risk; 70+ low risk — enabling targeted intervention and coaching.',
        ],
      },
      {
        heading: 'Centralized Platform Outcomes',
        paragraphs: [
          'The platform connects personal & legal records, medical fitness, incident history, compliance dashboards, and intervention tracking into one Reliance transport safety cloud — giving operations teams real-time visibility and the ability to act before incidents occur.',
        ],
      },
    ],
  },
  {
    slug: 'mumbai-pune-expressway-chemical-transport-india',
    title: 'Mumbai–Pune Expressway — Lessons from a Propylene Tanker Rollover',
    description:
      'A recent propylene tanker rollover on the Mumbai–Pune Expressway highlights chemical transport risk — and why defensive driving and real-time monitoring are non-negotiable.',
    category: 'Case Study',
    region: 'india',
    serviceIds: ['transport-safety', 'community'],
    date: '2025-09-20',
    readTime: '7 min read',
    image: '/images/case-mumbai-pune-expressway.png',
    keywords: ['Mumbai Pune Expressway', 'chemical transport safety', 'propylene tanker', 'defensive driving India'],
    content: [
      {
        paragraphs: [
          'The recent rollover of a propylene tanker on the Mumbai–Pune Expressway serves as a stark reminder of chemical transport risk on one of India\'s busiest industrial corridors. Potential consequences include fire, explosion, and toxic exposure — affecting communities, operators, and national logistics efficiency.',
        ],
      },
      {
        heading: 'What Went Wrong',
        paragraphs: [
          'Rollover incidents on expressway curves often involve speed management, load distribution, driver fatigue, and inadequate journey planning. For hazardous cargo, the margin for error is zero.',
        ],
      },
      {
        heading: 'Celeson\'s Response Framework',
        paragraphs: [
          'Celeson reinforces defensive driving programmes, real-time IVMS monitoring, journey management plans, and highway rest point safety engagement for chemical and industrial logistics operators. Prevention through behaviour, monitoring, and intervention — not reactive compliance alone — is critical.',
        ],
      },
    ],
  },
  {
    slug: 'zero-accident-control-room-india',
    title: 'Building a Zero-Accident Culture Through Intelligent Monitoring',
    description:
      'How Celeson\'s control room monitoring, proactive intervention, and real-time risk management help fleet operators shift from reactive to preventive safety.',
    category: 'Industry Guide',
    region: 'india',
    serviceIds: ['technology', 'transport-safety'],
    date: '2025-08-25',
    readTime: '8 min read',
    image: '/images/hero-india-control-room.png',
    keywords: ['zero accident culture', 'control room monitoring India', 'IVMS intervention', 'fleet risk management'],
    content: [
      {
        paragraphs: [
          'Building a zero-accident culture requires more than policies — it demands intelligent monitoring, proactive intervention, and real-time risk management. Celeson operates control rooms that monitor fleet telematics, trigger interventions, and track compliance across industrial transport networks.',
        ],
      },
      {
        heading: 'What We Deliver',
        paragraphs: [
          'End-to-end Driver Lifecycle Management, real-time control room monitoring & intervention, structured defensive driving programmes, accident replay & near-miss learning labs, highway rest point safety engagement, and fatigue risk management with 60-second safety nudges.',
        ],
      },
      {
        heading: 'AI-Based In-Cab Alerts',
        paragraphs: [
          'AI systems detect overspeeding, distraction, fatigue, road hazards, school and city limit violations, blind spots, and downhill high-risk zones — enabling immediate coaching or intervention before incidents occur.',
        ],
      },
    ],
  },
  {
    slug: 'road-safety-india-global-snapshot',
    title: 'Road Safety — India & Global Snapshot',
    description:
      'India accounts for ~11% of global road deaths. Heavy vehicles contribute significantly to fatal crashes — prevention through behaviour, monitoring, and intervention is critical.',
    category: 'Industry Guide',
    region: 'india',
    serviceIds: ['community'],
    date: '2025-08-10',
    readTime: '6 min read',
    image: '/images/insight-road-safety-india.png',
    keywords: ['road safety India', 'WHO road fatalities', 'heavy vehicle safety India', 'fleet safety statistics'],
    content: [
      {
        paragraphs: [
          'Globally, approximately 1.2 million people die in road crashes each year according to WHO data. India accounts for roughly 11% of global road deaths despite having a smaller share of the world\'s vehicles — and heavy commercial vehicles contribute disproportionately to fatal crashes on highways and industrial corridors.',
        ],
      },
      {
        heading: 'Why Prevention Matters',
        paragraphs: [
          'Prevention through behaviour change, real-time monitoring, and proactive intervention is critical — not just for operators facing legal liability and insurance costs, but for communities, national logistics efficiency, and saving human lives across India\'s transport network.',
        ],
      },
      {
        heading: 'Celeson\'s Role',
        paragraphs: [
          'Celeson partners with industrial and logistics operators to implement driver management systems, highway safety engagement, school transport frameworks, and community road safety programmes — translating global best practice into measurable Indian outcomes.',
        ],
      },
    ],
  },
  {
    slug: 'kori-cafe-hospitality-india',
    title: 'Kori Café — From Supply Chain Roots to Your Daily Pause',
    description:
      'How Celeson Group\'s hospitality division brings operational excellence, HACCP food safety, and family warmth to Kori Café in Bandra West — and what it means for corporate catering across India.',
    category: 'Case Study',
    region: 'india',
    serviceIds: ['hospitality'],
    date: '2025-04-15',
    readTime: '8 min read',
    image: '/images/hero-india-highway.png',
    keywords: ['Kori Café', 'hospitality India', 'HACCP', 'Bandra café', 'corporate catering', 'Celeson Group'],
    content: [
      {
        paragraphs: [
          'Kori Café is more than a neighbourhood coffee shop — it is Celeson Group\'s hospitality flagship in Bandra West, Mumbai. Born from a family that built careers in supply chain, investment banking, and marketing, Kori brings the same operational discipline Celeson applies to logistics and safety into food and beverage.',
          'Visit Kori at kori.cafe — open Wednesday to Monday, 7:30am to 10:30pm, just off Linking Road in Bandra West.',
        ],
      },
      {
        heading: 'Why Celeson Entered Hospitality',
        paragraphs: [
          'Celeson\'s founder spent decades in supply chain and logistics — managing complexity, compliance, and people at scale. Hospitality was a natural extension: restaurant operations demand the same rigour as warehouse HSE — standard operating procedures, supplier controls, temperature monitoring, and customer safety.',
          'Kori Café lets Celeson demonstrate that operational excellence translates across industries. The café is a living case study for corporate catering, cloud kitchen management, and HACCP-compliant food services.',
        ],
      },
      {
        heading: 'Kori Café Today',
        paragraphs: [
          'Located at Shop No. 1, Hari Niwas Co-operative Housing Society, 30th Road, Off SV Road, Bandra West, Mumbai 400050, Kori offers an all-day menu from breakfast through dinner.',
          'Signature offerings include Berry Almond, Vietnamese Cold Brew, Spanish Latte, Iced Matcha, Strawberry Matcha, Cajun Spiced Chicken Schnitzel, and the Fiery Chicken Burger. Coffee is sourced from Coorg estates — handpicked for bold aroma and smooth flavour.',
          'The atmosphere is designed for everyday pauses: solo coffee breaks, catch-ups between meetings, or quiet time with a book. Warm lighting, soft music, and no reason to hurry.',
        ],
      },
      {
        heading: 'Operations Behind the Counter',
        paragraphs: [
          'Celeson applies HACCP principles to Kori\'s kitchen operations — food safety programmes, supplier verification, storage controls, and staff training aligned with hospitality best practice.',
          'The same framework supports corporate catering and cloud kitchen management for business clients who need reliable, compliant food services at scale.',
        ],
      },
      {
        heading: 'Broader Hospitality Division Services',
        paragraphs: [
          'Beyond Kori, Celeson\'s Hospitality Division delivers restaurant operations, corporate catering, cloud kitchen management, food safety programmes, and hospitality consulting.',
          'Whether you are planning an employee cafeteria programme, event catering, or evaluating F&B partners for compliance — Celeson brings 33+ years of operational leadership to the table.',
        ],
      },
      {
        heading: 'Visit or Order',
        paragraphs: [
          'Experience Kori in Bandra or order via Swiggy and Zomato. For corporate catering and hospitality consulting enquiries, contact Celeson India at +91 90762 17999 or info@celesongroup.com.',
        ],
      },
    ],
  },
];

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug);
}

export function getInsightsForRegion(region: 'uae' | 'india', limit?: number): InsightArticle[] {
  const filtered = insights.filter((a) => a.region === region || a.region === 'both');
  return limit ? filtered.slice(0, limit) : filtered;
}
