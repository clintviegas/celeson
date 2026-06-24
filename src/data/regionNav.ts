import type { BusinessRegion } from './brief';

export type RegionBase = '/uae' | '/india';

export function getRegionBase(region: BusinessRegion): RegionBase {
  return region === 'uae' ? '/uae' : '/india';
}

export function getRegionNav(region: BusinessRegion) {
  const base = getRegionBase(region);
  return [
    { href: base, label: 'Home' },
    { href: `${base}/case-studies`, label: 'Case Studies' },
    { href: `${base}/insights`, label: 'Insights' },
    { href: `${base}/contact`, label: 'Contact' },
  ] as const;
}

export function getRegionLabel(region: BusinessRegion): string {
  return region === 'uae' ? 'UAE & GCC' : 'India';
}
