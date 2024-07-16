import { defineSemanticTokens } from '@pandacss/dev';
import { shadows } from './shadows';

export const createSemanticTokens = () => {
  return defineSemanticTokens({
    colors: {
      bg: {
        canvas: { value: '{colors.Primitives.Gray.100}' },
        default: { value: { base: 'colors.Primitives.Gray.000', _dark: '{colors.Primitives.Gray.200}' } },
        subtle: { value: { base: '{colors.Primitives.Gray.200}', _dark: '{colors.Primitives.Gray.300}' } },
        muted: { value: { base: '{colors.Primitives.Gray.300}', _dark: '{colors.Primitives.Gray.400}' } },
        emphasized: { value: { base: '{colors.Primitives.Gray.400}', _dark: '{colors.Primitives.Gray.500}' } },
        disabled: { value: { base: '{colors.Primitives.Gray.100}', _dark: '{colors.Primitives.Gray.400}' } },
      },
      fg: {
        muted: { value: '{colors.Primitives.Gray.900}' },
        subtle: { value: '{colors.Primitives.Gray.800}' },
        disabled: { value: '{colors.Primitives.Gray.300}' },
      },
      border: {
        default: { value: '{colors.Primitives.Gray.700}' },
        muted: { value: '{colors.Primitives.Gray.600}' },
        subtle: { value: '{colors.Primitives.Gray.400}' },
        disabled: { value: '{colors.Primitives.Gray.300}' },
        outline: { value: '{colors.Primitives.Gray.900}' },
      },
      logo: {
        yellow: { value: { base: '{colors.Primitives.Yellow.600}', _dark: '{colors.Primitives.Yellow.600}' } },
        gray: { value: { base: '{colors.Primitives.Gray.800}', _dark: '{colors.Primitives.Gray.800}' } },
        text: { Gray: { value: { base: '{colors.Primitives.Gray.900}', _dark: '{colors.Primitives.Gray.000}' } } },
      },
      gray: {
        '000': {
          value: { base: '{colors.Primitives.Gray.000}', _dark: '{colors.Primitives.Gray.900}' },
        },
        '050': {
          value: { base: '{colors.Primitives.Gray.050}', _dark: '{colors.Primitives.Gray.800}' },
        },
        '100': {
          value: { base: '{colors.Primitives.Gray.100}', _dark: '{colors.Primitives.Gray.700}' },
        },
        '200': {
          value: { base: '{colors.Primitives.Gray.200}', _dark: '{colors.Primitives.Gray.600}' },
        },
        '300': {
          value: { base: '{colors.Primitives.Gray.300}', _dark: '{colors.Primitives.Gray.500}' },
        },
        '400': {
          value: { base: '{colors.Primitives.Gray.400}', _dark: '{colors.Primitives.Gray.400}' },
        },
        '500': {
          value: { base: '{colors.Primitives.Gray.500}', _dark: '{colors.Primitives.Gray.300}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Gray.600}', _dark: '{colors.Primitives.Gray.200}' },
        },
        '700': {
          value: { base: '{colors.Primitives.Gray.700}', _dark: '{colors.Primitives.Gray.100}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Gray.800}', _dark: '{colors.Primitives.Gray.050}' },
        },
        '900': {
          value: { base: '{colors.Primitives.Gray.900}', _dark: '{colors.Primitives.Gray.000}' },
        },
        default: { DEFAULT: { value: '{colors.gray.800}' }, alpha: { value: '{colors.gray.050}' } },
        emphasized: { DEFAULT: { value: '{colors.gray.900}' }, alpha: { value: '{colors.gray.100}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.gray.800}' } },
        border: { DEFAULT: { value: '{colors.gray.800}' }, alpha: { value: '{colors.gray.400}' } },
      },
      red: {
        '400': {
          value: { base: '{colors.Primitives.Red.400}', _dark: '{colors.Primitives.Red.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Red.600}', _dark: '{colors.Primitives.Red.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Red.800}', _dark: '{colors.Primitives.Red.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Red.A800}', _dark: '{colors.Primitives.Red.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Red.A600}', _dark: '{colors.Primitives.Red.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Red.A400}', _dark: '{colors.Primitives.Red.A800}' },
        },
        default: { DEFAULT: { value: '{colors.red.600}' }, alpha: { value: '{colors.red.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.red.800}' }, alpha: { value: '{colors.red.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.red.800}' } },
        border: { DEFAULT: { value: '{colors.red.600}' }, alpha: { value: '{colors.red.600}' } },
      },
      orange: {
        '400': {
          value: { base: '{colors.Primitives.Orange.400}', _dark: '{colors.Primitives.Orange.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Orange.600}', _dark: '{colors.Primitives.Orange.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Orange.800}', _dark: '{colors.Primitives.Orange.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Orange.A800}', _dark: '{colors.Primitives.Orange.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Orange.A600}', _dark: '{colors.Primitives.Orange.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Orange.A400}', _dark: '{colors.Primitives.Orange.A800}' },
        },
        default: { DEFAULT: { value: '{colors.orange.600}' }, alpha: { value: '{colors.orange.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.orange.800}' }, alpha: { value: '{colors.orange.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.orange.800}' } },
        border: { DEFAULT: { value: '{colors.orange.600}' }, alpha: { value: '{colors.orange.600}' } },
      },
      yellow: {
        '400': {
          value: { base: '{colors.Primitives.Yellow.400}', _dark: '{colors.Primitives.Yellow.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Yellow.600}', _dark: '{colors.Primitives.Yellow.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Yellow.800}', _dark: '{colors.Primitives.Yellow.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Yellow.A800}', _dark: '{colors.Primitives.Yellow.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Yellow.A600}', _dark: '{colors.Primitives.Yellow.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Yellow.A400}', _dark: '{colors.Primitives.Yellow.A800}' },
        },
        default: { DEFAULT: { value: '{colors.yellow.600}' }, alpha: { value: '{colors.yellow.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.yellow.800}' }, alpha: { value: '{colors.yellow.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.yellow.800}' } },
        border: { DEFAULT: { value: '{colors.yellow.600}' }, alpha: { value: '{colors.yellow.600}' } },
      },
      green: {
        '400': {
          value: { base: '{colors.Primitives.Green.400}', _dark: '{colors.Primitives.Green.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Green.600}', _dark: '{colors.Primitives.Green.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Green.800}', _dark: '{colors.Primitives.Green.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Green.A800}', _dark: '{colors.Primitives.Green.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Green.A600}', _dark: '{colors.Primitives.Green.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Green.A400}', _dark: '{colors.Primitives.Green.A800}' },
        },
        default: { DEFAULT: { value: '{colors.green.600}' }, alpha: { value: '{colors.green.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.green.800}' }, alpha: { value: '{colors.green.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.green.800}' } },
        border: { DEFAULT: { value: '{colors.green.600}' }, alpha: { value: '{colors.green.600}' } },
      },
      blue: {
        '400': {
          value: { base: '{colors.Primitives.Blue.400}', _dark: '{colors.Primitives.Blue.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Blue.600}', _dark: '{colors.Primitives.Blue.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Blue.800}', _dark: '{colors.Primitives.Blue.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Blue.A800}', _dark: '{colors.Primitives.Blue.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Blue.A600}', _dark: '{colors.Primitives.Blue.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Blue.A400}', _dark: '{colors.Primitives.Blue.A800}' },
        },
        default: { DEFAULT: { value: '{colors.blue.600}' }, alpha: { value: '{colors.blue.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.blue.800}' }, alpha: { value: '{colors.blue.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.blue.800}' } },
        border: { DEFAULT: { value: '{colors.blue.600}' }, alpha: { value: '{colors.blue.600}' } },
      },
      purple: {
        '400': {
          value: { base: '{colors.Primitives.Purple.400}', _dark: '{colors.Primitives.Purple.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Purple.600}', _dark: '{colors.Primitives.Purple.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Purple.800}', _dark: '{colors.Primitives.Purple.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Purple.A800}', _dark: '{colors.Primitives.Purple.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Purple.A600}', _dark: '{colors.Primitives.Purple.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Purple.A400}', _dark: '{colors.Primitives.Purple.A800}' },
        },
        default: { DEFAULT: { value: '{colors.purple.600}' }, alpha: { value: '{colors.purple.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.purple.800}' }, alpha: { value: '{colors.purple.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.purple.800}' } },
        border: { DEFAULT: { value: '{colors.purple.600}' }, alpha: { value: '{colors.purple.600}' } },
      },
      white: {
        default: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.gray.000}' } },
        emphasized: { DEFAULT: { value: '{colors.gray.100}' }, alpha: { value: '{colors.gray.100}' } },
        fg: { DEFAULT: { value: '{colors.gray.600}' }, alpha: { value: '{colors.gray.600}' } },
        border: { DEFAULT: { value: '{colors.gray.100}' }, alpha: { value: '{colors.gray.400}' } },
      },
      transparent: {
        default: { DEFAULT: { value: 'transparent' }, alpha: { value: 'transparent' } },
        emphasized: { DEFAULT: { value: '{colors.gray.100}' }, alpha: { value: '{colors.gray.100}' } },
        fg: { DEFAULT: { value: '{colors.gray.600}' }, alpha: { value: '{colors.gray.600}' } },
        border: { DEFAULT: { value: '{colors.gray.100}' }, alpha: { value: '{colors.gray.400}' } },
      },
      accent: {
        '400': {
          value: { base: '{colors.Primitives.Orange.400}', _dark: '{colors.Primitives.Orange.800}' },
        },
        '600': {
          value: { base: '{colors.Primitives.Orange.600}', _dark: '{colors.Primitives.Orange.600}' },
        },
        '800': {
          value: { base: '{colors.Primitives.Orange.800}', _dark: '{colors.Primitives.Orange.400}' },
        },
        A800: {
          value: { base: '{colors.Primitives.Orange.A800}', _dark: '{colors.Primitives.Orange.A400}' },
        },
        A600: {
          value: { base: '{colors.Primitives.Orange.A600}', _dark: '{colors.Primitives.Orange.A600}' },
        },
        A400: {
          value: { base: '{colors.Primitives.Orange.A400}', _dark: '{colors.Primitives.Orange.A800}' },
        },
        default: { DEFAULT: { value: '{colors.orange.600}' }, alpha: { value: '{colors.orange.A400}' } },
        emphasized: { DEFAULT: { value: '{colors.orange.800}' }, alpha: { value: '{colors.orange.A600}' } },
        fg: { DEFAULT: { value: '{colors.gray.000}' }, alpha: { value: '{colors.orange.800}' } },
        border: { DEFAULT: { value: '{colors.orange.600}' }, alpha: { value: '{colors.orange.600}' } },
      },
    },
    shadows,
  });
};
