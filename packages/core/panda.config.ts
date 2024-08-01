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
      {
        properties: {
          hideFrom: ['*'],
          hideBelow: ['*'],
        },
      },
      {
        properties: {
          display: ['none', 'inline', 'block', 'flex', 'inline-block', 'inline-flex'],
          flex: ['*', '1', '2', '3', '4'],
          flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
          flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
          gap: ['*'],
          justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
          alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
          order: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        },
        responsive: true,
      },
      {
        properties: {
          zIndex: ['*'],
          position: ['relative', 'absolute', 'fixed', 'sticky', 'scroll'],
          top: ['*'],
          left: ['*'],
          right: ['*'],
          bottom: ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          width: ['*'],
          minWidth: ['*'],
          height: ['*'],
          minHeight: ['*'],
          marginTop: ['*'],
          marginBottom: ['*'],
          marginLeft: ['*'],
          marginRight: ['*'],
          marginX: ['*'],
          paddingTop: ['*'],
          paddingBottom: ['*'],
          paddingLeft: ['*'],
          paddingRight: ['*'],
        },
        responsive: true,
      },
    ],
  },
  minify: true,
  outExtension: 'js',
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',
});
