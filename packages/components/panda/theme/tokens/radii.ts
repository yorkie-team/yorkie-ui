import { defineTokens } from '@pandacss/dev';

export const radii = defineTokens.radii({
  none: { value: '0' },
  '2xs': { value: '1px', description: '0.0625rem' },
  xs: { value: '2px', description: '0.125rem' },
  sm: { value: '4px', description: '0.25rem' },
  md: { value: '6px', description: '0.375rem' },
  lg: { value: '8px', description: '0.5rem' },
  xl: { value: '12px', description: '0.75rem' },
  '2xl': { value: '16px', description: '1rem' },
  '3xl': { value: '24px', description: '1.5rem' },
  full: { value: '9999px' },
});
