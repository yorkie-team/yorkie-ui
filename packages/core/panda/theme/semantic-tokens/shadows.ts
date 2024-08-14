import { defineSemanticTokens } from '@pandacss/dev';

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      base: '0px 8px 4px -8px rgba(0, 0, 0, 0.20)',
      _dark: '0px 8px 4px -8px rgba(255, 255, 255, 0.20)',
    },
  },
  sm: {
    value: {
      base: '0px 8px 8px -8px rgba(0, 0, 0, 0.20)',
      _dark: '0px 8px 8px -8px rgba(255, 255, 255, 0.20)',
    },
  },
  md: {
    value: {
      base: '0px 8px 16px -8px rgba(0, 0, 0, 0.20)',
      _dark: '0px 8px 16px -8px rgba(255, 255, 255, 0.20)',
    },
  },
  lg: {
    value: {
      base: '0px 20px 24px -12px rgba(0, 0, 0, 0.20)',
      _dark: '0px 20px 24px -12px rgba(255, 255, 255, 0.20)',
    },
  },
});
