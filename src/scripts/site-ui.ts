const REGION_KEY = 'celeson-region';

export type SiteRegion = 'uae' | 'india';

export function getStoredRegion(): SiteRegion {
  if (typeof window === 'undefined') return 'uae';
  const stored = localStorage.getItem(REGION_KEY);
  return stored === 'india' ? 'india' : 'uae';
}

export function setStoredRegion(region: SiteRegion) {
  localStorage.setItem(REGION_KEY, region);
  document.documentElement.dataset.region = region;
  updateRegionButtons(region);
}

function updateRegionButtons(active: SiteRegion) {
  document.querySelectorAll<HTMLButtonElement>('.region-btn').forEach((btn) => {
    const r = btn.dataset.region as SiteRegion;
    const isActive = r === active;
    btn.classList.toggle('bg-teal-600', isActive);
    btn.classList.toggle('text-white', isActive);
    btn.classList.toggle('text-slate-400', !isActive);
  });
}

export function initRegionSwitcher() {
  // Legacy MainHeader region switcher removed — regions use dedicated /uae and /india sites.
}

export function initHeaderScroll() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('bg-[#0b1929]/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
    } else {
      header.classList.remove('bg-[#0b1929]/95', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg');
    }
  });
}

export function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const bar3 = document.getElementById('bar3');
  let open = false;

  menuBtn?.addEventListener('click', () => {
    open = !open;
    mobileMenu?.classList.toggle('hidden', !open);
    if (open) {
      bar1?.classList.add('rotate-45', 'translate-y-2');
      bar2?.classList.add('opacity-0');
      bar3?.classList.add('-rotate-45', '-translate-y-2');
    } else {
      bar1?.classList.remove('rotate-45', 'translate-y-2');
      bar2?.classList.remove('opacity-0');
      bar3?.classList.remove('-rotate-45', '-translate-y-2');
    }
  });

  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      open = false;
      mobileMenu?.classList.add('hidden');
      bar1?.classList.remove('rotate-45', 'translate-y-2');
      bar2?.classList.remove('opacity-0');
      bar3?.classList.remove('-rotate-45', '-translate-y-2');
    });
  });
}
