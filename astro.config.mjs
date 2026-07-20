// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/about': '/#about',
    '/services': '/',
    '/contact': '/',
    '/verticals': '/',
    '/case-studies': '/',
    '/careers': '/',
    '/insights': '/',
    '/uae/about': '/#about',
    '/india/about': '/#about',
  },
});
