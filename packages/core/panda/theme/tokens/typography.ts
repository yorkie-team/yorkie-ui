import type { Tokens } from '@pandacss/dev';

export const fontSizes: Tokens['fontSizes'] = {
  '2xs': { value: '8px', description: '0.5rem' },
  xs: { value: '12px', description: '0.75rem' },
  sm: { value: '14px', description: '0.875rem' },
  md: { value: '16px', description: '1rem' },
  lg: { value: '18px', description: '1.125rem' },
  xl: { value: '20px', description: '1.25rem' },
  '2xl': { value: '24px', description: '1.5rem' },
  '3xl': { value: '30px', description: '1.875rem' },
  '4xl': { value: '36px', description: '2.25rem' },
  '5xl': { value: '48px', description: '3rem' },
  '6xl': { value: '60px', description: '3.75rem' },
  '7xl': { value: '72px', description: '4.5rem' },
  '8xl': { value: '96px', description: '6rem' },
  '9xl': { value: '128px', description: '8rem' },
};

export const fontWeights: Tokens['fontWeights'] = {
  thin: { value: '100' },
  extralight: { value: '200' },
  light: { value: '300' },
  normal: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  bold: { value: '700' },
  extrabold: { value: '800' },
  black: { value: '900' },
};

export const letterSpacings: Tokens['letterSpacings'] = {
  tighter: { value: '-0.05em' },
  tight: { value: '-0.025em' },
  normal: { value: '0em' },
  wide: { value: '0.025em' },
  wider: { value: '0.05em' },
  widest: { value: '0.1em' },
};

export const lineHeights: Tokens['lineHeights'] = {
  none: { value: '1' },
  tight: { value: '1.25' },
  normal: { value: '1.5' },
  relaxed: { value: '1.75' },
  loose: { value: '2' },
};

export const fonts: Tokens['fonts'] = {
  sans: {
    value: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
  },
  mono: {
    value: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  },
};
