const check = `<svg class="mt-0.5 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>`;

export interface ServiceCard {
  id: string;
  title: string;
  desc: string;
  items: string[];
  accent: string;
  iconColor: string;
  icon: string;
  heroImage?: string;
  subsections?: { title: string; items: string[] }[];
}

const truckIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`;
const shieldIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`;
const warehouseIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`;
const buildingIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`;
const leafIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 01-8.716-6.747M12 21a9.004 9.004 0 008.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" /></svg>`;
const peopleIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`;
const anchorIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`;
const monitorIcon = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>`;

/** Full global service catalogue from client brief */
export const globalServices: ServiceCard[] = [
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics Solutions',
    desc: 'End-to-end supply chain assessments, network optimisation, and operational excellence programmes.',
    items: ['Supply Chain Assessments', 'Distribution Network Optimization', 'Warehouse Design', 'Inventory Management', 'Demand Planning', 'Logistics Cost Optimization', 'Control Tower Solutions', 'Operational Excellence Programs'],
    accent: 'from-teal-500/20 to-teal-600/5', iconColor: 'text-teal-500', icon: truckIcon,
  },
  {
    id: 'transport-safety',
    title: 'Transport & Fleet Safety',
    desc: 'Fleet management, driver centres, journey management, and transport safety programmes.',
    items: ['Fleet Management', 'Driver Management Centers', 'Journey Management', 'Transport Audits', 'Road Safety Programs', 'Defensive Driving', 'Fleet Compliance', 'Contractor Development'],
    accent: 'from-blue-500/20 to-blue-600/5', iconColor: 'text-blue-500', icon: shieldIcon,
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    desc: 'Warehouse operations, DG storage, inventory control, and last-mile optimisation.',
    items: ['Warehouse Operations', 'DG Storage Solutions', 'Inventory Control', 'Distribution Planning', 'Last Mile Optimization', 'Warehouse Safety'],
    accent: 'from-amber-500/20 to-amber-600/5', iconColor: 'text-amber-500', icon: warehouseIcon,
  },
  {
    id: 'facility',
    title: 'Facility Management',
    desc: 'Integrated facility operations for residential communities, commercial buildings, and industrial facilities.',
    items: [],
    subsections: [
      { title: 'Residential Communities', items: ['Security Management', 'Housekeeping Services', 'Swimming Pool Management', 'Gym Management', 'Plumbing & Electrical Maintenance', 'HVAC Maintenance', 'Waste Management', 'Landscaping', 'Traffic Management', 'Child Play Area Safety', 'Fire & Emergency Systems'] },
      { title: 'Commercial Buildings', items: ['Asset Maintenance', 'Workplace Safety', 'Building Operations', 'Energy Management', 'Preventive Maintenance'] },
      { title: 'Industrial Facilities', items: ['HSE Management', 'Maintenance Planning', 'Hazard Identification', 'Permit-to-Work Systems', 'Contractor Management'] },
    ],
    accent: 'from-rose-500/20 to-rose-600/5', iconColor: 'text-rose-500', icon: buildingIcon,
  },
  {
    id: 'hospitality',
    title: 'Hospitality Division',
    desc: 'Kori Café and restaurant & catering solutions with food safety and HACCP compliance.',
    items: ['Restaurant Operations', 'Corporate Catering', 'Cloud Kitchen Management', 'Food Safety Programs', 'HACCP Compliance', 'Hospitality Consulting'],
    accent: 'from-orange-500/20 to-orange-600/5', iconColor: 'text-orange-500', icon: peopleIcon,
  },
  {
    id: 'sustainability',
    title: 'Sustainability & ESG Programs',
    desc: 'Environmental and sustainability objectives for responsible business growth.',
    items: ['Carbon Reduction Initiatives', 'Green Logistics Programs', 'Waste Reduction Strategies', 'Resource Optimization', 'ESG Framework Development', 'Sustainability Awareness Campaigns', 'Community Environmental Programs'],
    accent: 'from-green-500/20 to-green-600/5', iconColor: 'text-green-500', icon: leafIcon,
  },
  {
    id: 'community',
    title: 'Community Wellbeing Programs',
    desc: 'Creating safer and healthier communities through education and engagement.',
    items: ['Road Safety Awareness', 'School Safety Programs', 'Driver Welfare Programs', 'Health Awareness Campaigns', 'Community Training Workshops', 'Youth Development Programs'],
    accent: 'from-cyan-500/20 to-cyan-600/5', iconColor: 'text-cyan-500', icon: peopleIcon,
  },
  {
    id: 'sports',
    title: 'Sports Development',
    desc: 'Promoting healthy lifestyles and community engagement through sports programmes.',
    items: ['Sports Events', 'Endurance Programs', 'Marathon Participation', 'Swimming Programs', 'Youth Sports Development', 'Corporate Wellness Programs'],
    accent: 'from-purple-500/20 to-purple-600/5', iconColor: 'text-purple-500', icon: peopleIcon,
  },
  {
    id: 'marine',
    title: 'Marine & Port Services',
    desc: 'Professional vessel inspection and cargo safety verification services through UAE ports — ensuring safe deliveries for oil & gas, bulk commodities, chemicals, and project cargo.',
    items: ['Vessel Readiness Inspection', 'Cargo Securing Verification', 'Loading & Discharge Monitoring', 'Marine Safety Compliance Checks', 'Port Operations Risk Assessment', 'DG Cargo Handling Verification', 'Cargo Documentation Review', 'Incident Prevention Programs'],
    accent: 'from-indigo-500/20 to-indigo-600/5', iconColor: 'text-indigo-500', icon: anchorIcon,
  },
  {
    id: 'technology',
    title: 'Technology & Intelligence',
    desc: 'IVMS monitoring, GPS tracking, AI-based driver alerts, fleet analytics, and compliance dashboards.',
    items: ['IVMS Monitoring', 'GPS Tracking', 'AI-Based Driver Alerts', 'Fleet Analytics', 'Compliance Dashboards', 'Real-time Risk Scoring'],
    accent: 'from-cyan-500/20 to-cyan-600/5', iconColor: 'text-cyan-500', icon: monitorIcon,
  },
];

export const uaeRegionalOverview = {
  headline: 'Integrated Logistics, Safety & Operational Excellence',
  intro: 'Serving the UAE and GCC region with specialized services across logistics, transport safety, facility management, and marine operations.',
  categories: [
    { title: 'Logistics & Supply Chain', items: ['Transport Operations', 'Warehousing', 'Fleet Management', 'Distribution Networks', 'Oil & Gas Logistics'] },
    { title: 'Transport Safety Solutions', items: ['Driver Management Centers', 'IVMS Monitoring Centers', 'Fleet Compliance Programs', 'Journey Management', 'Contractor Safety Management'] },
    { title: 'Facility Management', items: ['Commercial Facilities', 'Industrial Facilities', 'Labour Accommodation', 'Residential Communities'] },
    { title: 'Port & Marine Services', items: ['Vessel Inspection', 'Port Safety Verification', 'Cargo Assurance', 'Marine Compliance'] },
  ],
  industries: ['ADNOC', 'ENOC', 'TotalEnergies', 'Shell', 'ExxonMobil', 'Air Liquide', 'Linde', 'Manufacturing', 'Logistics Operators'],
};

export const indiaRegionalOverview = {
  headline: 'Building a Zero-Accident Culture Across India',
  intro: 'Celeson India delivers end-to-end driver lifecycle management, IVMS control room monitoring, dynamic risk scoring, and road safety programmes for industrial and logistics operators nationwide.',
  categories: [
    { title: 'Supply Chain Consulting', items: ['Network Design', 'Distribution Strategy', 'Demand Planning', 'Inventory Optimization', 'Logistics Assessments'] },
    { title: 'Driver Management Systems', items: ['Driver Competency Programs', 'Driver Digital Profiles', 'Defensive Driving', 'Driver Medical Monitoring', 'Driver Risk Assessment'] },
    { title: 'Road Safety Programs', items: ['Highway Safety Engagement', 'Community Safety Programs', 'School Transport Safety', 'Fleet Safety Programs'] },
    { title: 'Industrial Services', items: ['Supply Chain Audits', 'Warehouse Assessments', 'Operational Excellence', 'Contractor Development'] },
    { title: 'Facility Management', items: ['Residential Societies', 'Commercial Buildings', 'Industrial Facilities', 'Educational Institutions'] },
  ],
  industries: ['Shell India', 'Reliance Industries', "a'XYKno Capital Services Pvt. Ltd.", 'Vizag Steel Plant', 'Kotak Corporation', 'Ramrajya Transport', 'Bal Roadlines', 'V K Patel Road Lines'],
};

export const uaeServices: ServiceCard[] = [
  {
    id: 'energy-transport',
    title: 'Celeson Energy Transport',
    desc: 'Specialist road tanker service for hydrocarbons, petroleum, gas, and petrochemical products — a dedicated fleet with ADR-trained drivers serving the UAE, GCC, and cross-border corridors.',
    items: [
      'Crude & refined petroleum',
      'Natural gas / LPG (where licensed)',
      'Petrochemicals & hydrocarbon derivatives',
      'Dedicated 2–3 specialist tanker fleet',
      'ADR-compliant vehicles & highly trained drivers',
      '24/7 dispatch and operations support',
    ],
    accent: 'from-amber-500/20 to-orange-600/5',
    iconColor: 'text-amber-500',
    icon: truckIcon,
    heroImage: '/images/celeson-energy-tanker.jpeg',
  },
  {
    id: 'supply-chain',
    title: 'Logistics & Supply Chain',
    desc: 'Transport operations, warehousing, fleet management, and oil & gas logistics across the GCC.',
    items: ['Transport Operations', 'Warehousing', 'Fleet Management', 'Distribution Networks', 'Oil & Gas Logistics'],
    accent: 'from-teal-500/20 to-teal-600/5', iconColor: 'text-teal-500', icon: truckIcon,
  },
  {
    id: 'transport-safety',
    title: 'Transport Safety Solutions',
    desc: 'Driver management centres, IVMS monitoring, and fleet compliance for high-risk operations.',
    items: ['Driver Management Centers', 'IVMS Monitoring Centers', 'Fleet Compliance Programs', 'Journey Management', 'Contractor Safety Management'],
    accent: 'from-blue-500/20 to-blue-600/5', iconColor: 'text-blue-500', icon: shieldIcon,
  },
  {
    id: 'facility',
    title: 'Facility Management',
    desc: 'Commercial, industrial, labour accommodation, and residential community management.',
    items: ['Commercial Facilities', 'Industrial Facilities', 'Labour Accommodation', 'Residential Communities'],
    accent: 'from-rose-500/20 to-rose-600/5', iconColor: 'text-rose-500', icon: buildingIcon,
  },
  {
    id: 'marine',
    title: 'Port & Marine Services',
    desc: 'Vessel inspection, port safety verification, and cargo assurance through UAE ports.',
    items: ['Vessel Inspection', 'Port Safety Verification', 'Cargo Assurance', 'Marine Compliance', 'Vessel Readiness Inspection', 'DG Cargo Handling Verification'],
    accent: 'from-indigo-500/20 to-indigo-600/5', iconColor: 'text-indigo-500', icon: anchorIcon,
  },
  {
    id: 'sustainability',
    title: 'Sustainability & ESG',
    desc: 'Environmental programmes and ESG framework development for responsible growth.',
    items: ['Carbon Reduction Initiatives', 'Green Logistics Programs', 'ESG Framework Development', 'Sustainability Awareness Campaigns'],
    accent: 'from-green-500/20 to-green-600/5', iconColor: 'text-green-500', icon: leafIcon,
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Community',
    desc: 'Corporate catering, community wellbeing programmes, and hospitality consulting across the GCC.',
    items: ['Corporate Catering', 'Cloud Kitchen Management', 'Road Safety Awareness', 'Community Training Workshops', 'Sports Events', 'HACCP Compliance'],
    accent: 'from-orange-500/20 to-orange-600/5', iconColor: 'text-orange-500', icon: peopleIcon,
  },
];

export const indiaServices: ServiceCard[] = [
  {
    id: 'energy-transport',
    title: 'Celeson Energy Transport',
    desc: 'Specialist road tanker service for hydrocarbons, petroleum, gas, and petrochemical products — a dedicated fleet with ADR-trained drivers across India and key industrial corridors.',
    items: [
      'Crude & refined petroleum',
      'Natural gas / LPG (where licensed)',
      'Petrochemicals & hydrocarbon derivatives',
      'Dedicated 2–3 specialist tanker fleet',
      'ADR-compliant vehicles & highly trained drivers',
      '24/7 dispatch and operations support',
    ],
    accent: 'from-amber-500/20 to-orange-600/5',
    iconColor: 'text-amber-500',
    icon: truckIcon,
    heroImage: '/images/celeson-energy-tanker.jpeg',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Consulting',
    desc: 'Network design, distribution strategy, and logistics assessments across India.',
    items: ['Network Design', 'Distribution Strategy', 'Demand Planning', 'Inventory Optimization', 'Logistics Assessments'],
    accent: 'from-teal-500/20 to-teal-600/5', iconColor: 'text-teal-500', icon: truckIcon,
  },
  {
    id: 'transport-safety',
    title: 'Driver Management Systems',
    desc: 'End-to-end Driver Lifecycle Management (DMC), digital driver profiles, background verification, and dynamic risk scoring for Indian fleet operators.',
    items: [
      'End-to-end Driver Lifecycle Management (DMC)',
      'Aadhaar-linked verification & RTO licence validation',
      'Duplicate licence detection & criminal background checks',
      'Driver Digital Profiles & Dynamic Risk Score (0–100)',
      'Defensive Driving & Executive Programmes',
      'Accident Replay & Near-Miss Learning Labs',
      'Highway Rest Point Safety Engagement',
      'Fatigue Risk Management & 60-Second Safety Nudges',
    ],
    accent: 'from-blue-500/20 to-blue-600/5', iconColor: 'text-blue-500', icon: shieldIcon,
  },
  {
    id: 'community',
    title: 'Road Safety Programs',
    desc: 'Highway engagement, school transport safety, and community programmes.',
    items: ['Highway Safety Engagement', 'Community Safety Programs', 'School Transport Safety', 'Fleet Safety Programs'],
    accent: 'from-amber-500/20 to-amber-600/5', iconColor: 'text-amber-500', icon: shieldIcon,
  },
  {
    id: 'warehousing',
    title: 'Industrial Services',
    desc: 'Supply chain audits, warehouse assessments, and operational excellence.',
    items: ['Supply Chain Audits', 'Warehouse Assessments', 'Operational Excellence', 'Contractor Development'],
    accent: 'from-purple-500/20 to-purple-600/5', iconColor: 'text-purple-500', icon: monitorIcon,
  },
  {
    id: 'facility',
    title: 'Facility Management',
    desc: 'Residential societies, commercial buildings, and educational institutions.',
    items: ['Residential Societies', 'Commercial Buildings', 'Industrial Facilities', 'Educational Institutions'],
    accent: 'from-rose-500/20 to-rose-600/5', iconColor: 'text-rose-500', icon: buildingIcon,
  },
  {
    id: 'technology',
    title: 'Technology & IVMS',
    desc: 'Real-time control room monitoring, AI in-cab intervention, and compliance dashboards for proactive fleet risk management.',
    items: [
      'Real-Time Control Room Monitoring & Intervention',
      'Dynamic Driver Risk Score (0–100)',
      'AI In-Cab Alerts: Overspeed, Distraction, Fatigue',
      'School Zone, Blind Spot & Downhill Alerts',
      'IVMS Monitoring Centers',
      'Compliance Dashboards & Intervention Tracking',
      'Real-time Risk Scoring & Fleet Analytics',
    ],
    accent: 'from-cyan-500/20 to-cyan-600/5', iconColor: 'text-cyan-500', icon: monitorIcon,
  },
  {
    id: 'hospitality',
    title: 'Hospitality Division',
    desc: 'Kori Café — our flagship Bandra café — plus restaurant operations, corporate catering, and HACCP-compliant food services.',
    items: ['Kori Café', 'Restaurant Operations', 'Corporate Catering', 'Cloud Kitchen Management', 'Food Safety Programs', 'HACCP Compliance'],
    accent: 'from-orange-500/20 to-orange-600/5', iconColor: 'text-orange-500', icon: peopleIcon,
  },
];

export function getServicesForRegion(region: 'uae' | 'india'): ServiceCard[] {
  return region === 'uae' ? uaeServices : indiaServices;
}

export function getServiceById(id: string, region: 'uae' | 'india'): ServiceCard | undefined {
  return getServicesForRegion(region).find((s) => s.id === id);
}

export function getGlobalServiceTitle(id: string): string {
  return globalServices.find((s) => s.id === id)?.title ?? id.replace(/-/g, ' ');
}

export { check };
