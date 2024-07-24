import { defineConfig } from '@pandacss/dev';
import { yorkiePreset } from './panda';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/preset-base', yorkiePreset],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          colorPalette: ['*'],
        },
      },
    ],
  },
  minify: true,
  outExtension: 'js',
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
});
