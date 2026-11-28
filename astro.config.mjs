// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://contentbytes.pl',
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Space Grotesk",
    cssVariable: "--font-space-grotesk",
  }]
});
