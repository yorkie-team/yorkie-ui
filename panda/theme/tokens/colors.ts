import { defineTokens } from '@pandacss/dev';

const Primitives = {
  Gray: {
    '100': {
      value: '#f5f3f1',
    },
    '200': {
      value: '#efeceb',
    },
    '300': {
      value: '#e2dedb',
    },
    '400': {
      value: '#c2bdba',
    },
    '500': {
      value: '#a6a19e',
    },
    '600': {
      value: '#807b78',
    },
    '700': {
      value: '#6e6966',
    },
    '800': {
      value: '#514c49',
    },
    '900': {
      value: '#332e2b',
    },
    '050': {
      value: '#faf8f6',
    },
    '000': {
      value: '#fefdfb',
    },
  },
  Red: {
    '400': {
      value: '#f7777e',
    },
    '600': {
      value: '#f44954',
    },
    '800': {
      value: '#e93d47',
    },
    A800: {
      value: 'rgba(233, 61, 71, 0.4000)',
    },
    A600: {
      value: 'rgba(244, 73, 84, 0.3200)',
    },
    A400: {
      value: 'rgba(247, 119, 126, 0.2400)',
    },
  },
  Orange: {
    '400': {
      value: '#fda36a',
    },
    '600': {
      value: '#fc8539',
    },
    '800': {
      value: '#f27b2f',
    },
    A800: {
      value: 'rgba(242, 123, 47, 0.4000)',
    },
    A600: {
      value: 'rgba(252, 133, 57, 0.3200)',
    },
    A400: {
      value: 'rgba(253, 163, 106, 0.2400)',
    },
  },
  Yellow: {
    '400': {
      value: '#fed366',
    },
    '600': {
      value: '#fdc433',
    },
    '800': {
      value: '#f5b103',
    },
    A800: {
      value: 'rgba(245, 177, 3, 0.4000)',
    },
    A600: {
      value: 'rgba(253, 196, 51, 0.3200)',
    },
    A400: {
      value: 'rgba(254, 211, 102, 0.2400)',
    },
  },
  Green: {
    '400': {
      value: '#5ad198',
    },
    '600': {
      value: '#23c176',
    },
    '800': {
      value: '#10b266',
    },
    A800: {
      value: 'rgba(16, 178, 102, 0.4000)',
    },
    A600: {
      value: 'rgba(35, 193, 118, 0.3200)',
    },
    A400: {
      value: 'rgba(90, 209, 152, 0.2400)',
    },
  },
  Blue: {
    '400': {
      value: '#6db4f5',
    },
    '600': {
      value: '#3c9af1',
    },
    '800': {
      value: '#208aed',
    },
    A800: {
      value: 'rgba(32, 138, 237, 0.4000)',
    },
    A600: {
      value: 'rgba(60, 154, 241, 0.3200)',
    },
    A400: {
      value: 'rgba(109, 180, 245, 0.2400)',
    },
  },
  Purple: {
    '400': {
      value: '#a385fb',
    },
    '600': {
      value: '#855cf9',
    },
    '800': {
      value: '#764af3',
    },
    A800: {
      value: 'rgba(118, 74, 243, 0.4000)',
    },
    A600: {
      value: 'rgba(133, 92, 249, 0.3200)',
    },
    A400: {
      value: 'rgba(163, 133, 251, 0.2400)',
    },
  },
};

export const colors = defineTokens.colors({
  Primitives,
});
