export interface CaseStudy {
  slug?: string;
  title: string;
  client: string;
  region: 'uae' | 'india';
  summary: string;
  outcomes: string[];
  serviceIds: string[];
}

export const caseStudies: CaseStudy[] = [
  // UAE & GCC
  {
    slug: 'ivms-journey-management-gcc-fleet-risk',
    title: 'IVMS Control Room & Journey Management — GCC Oil & Gas',
    client: 'Major GCC Energy Operator',
    region: 'uae',
    summary: 'Deployed IVMS monitoring centres, real-time fleet compliance dashboards, and journey management plans for high-risk desert highway transport serving ADNOC and ENOC contractor fleets.',
    outcomes: ['Real-time overspeed & fatigue alerts', 'Contractor compliance uplift', 'Journey plans standardised across 200+ vehicles'],
    serviceIds: ['transport-safety'],
  },
  {
    slug: 'marine-port-safety-uae-gcc',
    title: 'Marine & Port Safety — Vessel Inspection UAE',
    client: 'Port & Logistics Operator',
    region: 'uae',
    summary: 'Vessel readiness inspection, cargo securing verification, and DG cargo handling checks for oil & gas and chemical shipments through UAE ports.',
    outcomes: ['Zero cargo incidents over audit period', 'DG documentation compliance', 'Port operations risk assessment completed'],
    serviceIds: ['marine'],
  },
  {
    slug: 'oil-gas-contractor-transport-uae',
    title: 'Contractor Transport Safety — ADNOC & ENOC Standards',
    client: 'GCC Oil & Gas Sector',
    region: 'uae',
    summary: 'Structured contractor qualification, fleet compliance programmes, and transport audits aligned with major operator requirements across the UAE and Gulf.',
    outcomes: ['Audit-ready documentation', 'Driver qualification systems', 'Fleet compliance monitoring deployed'],
    serviceIds: ['transport-safety'],
  },
  {
    slug: 'facility-management-labour-camps-uae',
    title: 'Facility Management — Industrial & Labour Accommodation',
    client: 'Industrial Facilities — UAE',
    region: 'uae',
    summary: 'HSE management, preventive maintenance, and workplace safety programmes for commercial facilities, industrial sites, and labour accommodation across the GCC.',
    outcomes: ['HSE management system implemented', 'Permit-to-work systems', 'Energy & maintenance optimisation'],
    serviceIds: ['facility'],
  },
  {
    slug: 'iso-39001-road-traffic-safety-gcc',
    title: 'ISO 39001 Road Traffic Safety Framework — GCC',
    client: 'Multinational Logistics Operator',
    region: 'uae',
    summary: 'Implementation of ISO 39001-aligned road traffic safety management systems including fleet risk assessments, driver competency programmes, and Goal Zero culture development.',
    outcomes: ['ISO 39001 framework established', 'Transport risk assessments completed', 'Goal Zero safety culture rollout'],
    serviceIds: ['transport-safety'],
  },
  {
    slug: 'dg-cargo-port-operations-uae',
    title: 'DG Cargo Handling & Port Operations Assurance',
    client: 'Chemical & Industrial Logistics',
    region: 'uae',
    summary: 'Dangerous goods cargo verification, loading and discharge monitoring, and incident prevention programmes for bulk commodities and project cargo through UAE ports.',
    outcomes: ['DG cargo handling verified', 'Loading & discharge monitoring', 'Incident prevention programmes active'],
    serviceIds: ['marine'],
  },
  // India
  {
    slug: 'reliance-driver-360-transport-platform-india',
    title: 'Reliance Transport Safety Platform — Driver 360° Digital Profiles',
    client: 'Reliance Industries',
    region: 'india',
    summary: 'Centralized national digital ecosystem integrating driver identity, haulier capability, vehicle data, live risk monitoring, incident history, and compliance dashboards with dynamic risk scoring.',
    outcomes: ['Driver 360° digital profiles deployed', 'Aadhaar & RTO verification integrated', 'Dynamic risk score (0–100) operational', 'Real-time compliance dashboard live'],
    serviceIds: ['transport-safety', 'technology'],
  },
  {
    slug: 'mumbai-pune-expressway-chemical-transport-india',
    title: 'Mumbai–Pune Expressway — Chemical Transport Safety Lesson',
    client: 'Multi-sector Chemical Logistics',
    region: 'india',
    summary: 'Following a propylene tanker rollover on the Mumbai–Pune Expressway, Celeson reinforced the need for defensive driving, real-time monitoring, and journey risk management for hazardous cargo corridors.',
    outcomes: ['Defensive driving programme accelerated', 'Real-time IVMS monitoring expanded', 'High-risk corridor journey plans updated'],
    serviceIds: ['transport-safety', 'community'],
  },
  {
    slug: 'driver-competency-background-verification-india',
    title: 'Shell India — Driver Management Center Programme',
    client: 'Shell India',
    region: 'india',
    summary: 'Driver competency programmes, digital driver profiles, background verification, and defensive driving training across industrial transport operations.',
    outcomes: ['Driver digital profiles deployed', 'Background verification standardised', 'Violation rates reduced measurably'],
    serviceIds: ['transport-safety'],
  },
  {
    slug: 'reliance-supply-chain-safety-india',
    title: 'Reliance Industries — Supply Chain & Warehouse Safety',
    client: 'Reliance Industries',
    region: 'india',
    summary: 'Supply chain audits, warehouse HSE assessments, distribution network reviews, and operational excellence programmes across multi-state logistics operations.',
    outcomes: ['Warehouse safety improvements', 'Distribution network optimised', 'Contractor development programme launched'],
    serviceIds: ['supply-chain'],
  },
  {
    slug: 'highway-safety-engagement-india',
    title: 'Highway Safety Engagement — National Corridors',
    client: 'Multi-sector Transport Operators',
    region: 'india',
    summary: 'Highway safety engagement, community road safety campaigns, and fleet safety programmes on national and state highway corridors across India.',
    outcomes: ['Community training workshops delivered', 'Highway engagement programmes active', 'Measurable safety engagement metrics'],
    serviceIds: ['community'],
  },
  {
    slug: 'vizag-steel-plant-logistics-india',
    title: 'Vizag Steel Plant — Industrial Logistics Safety',
    client: 'Vizag Steel Plant',
    region: 'india',
    summary: 'Heavy industrial transport safety, bulk logistics HSE reviews, and contractor fleet compliance for steel plant operations and distribution networks.',
    outcomes: ['Industrial transport safety framework', 'Contractor fleet audits', 'Loading bay safety improvements'],
    serviceIds: ['warehousing'],
  },
  {
    slug: 'school-transport-safety-india',
    title: 'School Transport Safety Framework — India',
    client: 'Educational Institutions',
    region: 'india',
    summary: 'Route risk assessment, driver vetting, emergency planning, and GPS tracking frameworks for school transport systems across Indian cities and highways.',
    outcomes: ['School transport safety framework', 'Driver background verification', 'Emergency communication plans tested'],
    serviceIds: ['community'],
  },
  {
    slug: 'warehouse-hse-india-distribution',
    title: 'Warehouse HSE — Loading & Distribution India',
    client: 'National Distribution Network',
    region: 'india',
    summary: 'Warehouse HSE compliance, loading bay traffic management, DG storage reviews, and permit-to-work systems for large-scale distribution facilities.',
    outcomes: ['Loading bay safety standardised', 'DG storage compliance verified', 'Contractor induction programme'],
    serviceIds: ['warehousing'],
  },
  {
    slug: 'kori-cafe-hospitality-india',
    title: 'Kori Café — Hospitality Division, Bandra West',
    client: 'Celeson Group / Kori Café',
    region: 'india',
    summary: 'Family-run café extending Celeson\'s operational discipline into F&B — HACCP-aligned kitchen operations, corporate catering capability, and community-facing hospitality in Bandra.',
    outcomes: ['HACCP food safety framework', 'All-day café operations 7:30am–10:30pm', 'Corporate catering pipeline', 'Brand presence on Swiggy & Zomato'],
    serviceIds: ['hospitality'],
  },
];

export function getCaseStudiesForRegion(region: 'uae' | 'india'): CaseStudy[] {
  return caseStudies.filter((c) => c.region === region);
}

export function getCaseStudiesForService(serviceId: string, region: 'uae' | 'india'): CaseStudy[] {
  return caseStudies.filter((c) => c.region === region && c.serviceIds.includes(serviceId));
}

export function countCaseStudiesForService(serviceId: string, region: 'uae' | 'india'): number {
  return getCaseStudiesForService(serviceId, region).length;
}
