import type { Tokens } from '@pandacss/dev';

export const fontSizes: Tokens['fontSizes'] = {
  xs: { value: '10px', description: '0.625rem' },
  sm: { value: '12px', description: '0.75rem' },
  md: { value: '14px', description: '0.875rem' },
  lg: { value: '16px', description: '1rem' },
  xl: { value: '20px', description: '1.25rem' },
  '2xl': { value: '24px', description: '1.5rem' },
  '3xl': { value: '30px', description: '1.875rem' },
  '4xl': { value: '36px', description: '2.25rem' },
  '5xl': { value: '48px', description: '3rem' },
  '6xl': { value: '60px', description: '3.75rem' },
};

export const fontWeights: Tokens['fontWeights'] = {
  light: { value: '300' },
  regular: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  extrabold: { value: '800' },
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
