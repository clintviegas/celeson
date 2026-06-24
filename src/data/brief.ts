export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/verticals', label: 'Verticals' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
] as const;

export const keyServices = [
  {
    id: 'supply-chain',
    title: 'Supply Chain & Logistics',
    desc: 'Assessments, network optimisation, warehouse design, and control tower solutions.',
    href: '/services#supply-chain',
  },
  {
    id: 'transport-safety',
    title: 'Transport & Fleet Safety',
    desc: 'Fleet management, driver centres, journey management, and transport audits.',
    href: '/services#transport-safety',
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    desc: 'Warehouse operations, DG storage, inventory control, and last-mile optimisation.',
    href: '/services#warehousing',
  },
  {
    id: 'facility',
    title: 'Facility Management',
    desc: 'Residential communities, commercial buildings, and industrial facility operations.',
    href: '/services#facility',
  },
  {
    id: 'sustainability',
    title: 'Sustainability & ESG',
    desc: 'Carbon reduction, green logistics, ESG frameworks, and environmental programmes.',
    href: '/services#sustainability',
  },
  {
    id: 'marine',
    title: 'Marine & Port Services',
    desc: 'Vessel inspection, cargo verification, and port safety assurance in the UAE.',
    href: '/services#marine',
  },
];

export const businessVerticals = [
  {
    title: 'Sustainability & ESG Programs',
    desc: 'Celeson supports organizations in achieving environmental and sustainability objectives through carbon reduction, green logistics, and ESG framework development.',
    items: ['Carbon Reduction Initiatives', 'Green Logistics Programs', 'Waste Reduction Strategies', 'ESG Framework Development', 'Community Environmental Programs'],
  },
  {
    title: 'Community Wellbeing Programs',
    desc: 'Creating safer and healthier communities through road safety awareness, school programmes, and community training workshops.',
    items: ['Road Safety Awareness', 'School Safety Programs', 'Driver Welfare Programs', 'Health Awareness Campaigns', 'Youth Development Programs'],
  },
  {
    title: 'Sports Development',
    desc: 'Promoting healthy lifestyles and community engagement through sports events, endurance programmes, and corporate wellness.',
    items: ['Sports Events', 'Endurance Programs', 'Marathon Participation', 'Swimming Programs', 'Corporate Wellness Programs'],
  },
  {
    title: 'Hospitality Division',
    desc: 'Kori Café and restaurant & catering solutions with food safety and HACCP compliance.',
    items: ['Kori Café', 'Restaurant Operations', 'Corporate Catering', 'Cloud Kitchen Management', 'HACCP Compliance'],
  },
  {
    title: 'Technology & Intelligence',
    desc: 'IVMS monitoring, GPS tracking, AI-based driver alerts, fleet analytics, and compliance dashboards.',
    items: ['IVMS Monitoring', 'GPS Tracking', 'AI-Based Driver Alerts', 'Fleet Analytics', 'Compliance Dashboards'],
  },
];

export { caseStudies, getCaseStudiesForRegion } from './caseStudies';
export type { CaseStudy } from './caseStudies';

export const careers = {
  intro: 'Celeson Group invests in people through continuous learning, competency development, and leadership growth. We seek professionals passionate about safety, logistics, and operational excellence across India and the GCC.',
  values: ['Safety-first culture', 'Practical field experience', 'Multinational exposure', 'Continuous development'],
  applyEmail: 'info@celesongroup.com',
};

export const offices = [
  {
    name: 'Head Office — Mumbai, India',
    address: 'Shop No. 4095, II Floor, Eaze, Zone Mall, Off Link Road, Goregaon (West), Mumbai 400104, Maharashtra, India',
    region: 'india' as const,
  },
  {
    name: 'Regional Operations — UAE & GCC',
    address: 'Serving the UAE and Gulf region with integrated logistics, safety, and facility management services.',
    region: 'uae' as const,
  },
];

export type BusinessRegion = 'uae' | 'india';

export function parseRegion(searchParams: URLSearchParams): BusinessRegion {
  const r = searchParams.get('region');
  return r === 'india' ? 'india' : 'uae';
}
