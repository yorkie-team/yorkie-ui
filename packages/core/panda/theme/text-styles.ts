import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  xs: { value: { fontSize: 'xs', lineHeight: '10px' } },
  sm: { value: { fontSize: 'sm', lineHeight: '16px' } },
  md: { value: { fontSize: 'md', lineHeight: '22px' } },
  lg: { value: { fontSize: 'lg', lineHeight: '24px' } },
  xl: { value: { fontSize: 'xl', lineHeight: '30px' } },
  '2xl': { value: { fontSize: '2xl', lineHeight: '32px' } },
  '3xl': { value: { fontSize: '3xl', lineHeight: '38px' } },
  '4xl': { value: { fontSize: '4xl', lineHeight: '44px' } },
  '5xl': { value: { fontSize: '5xl', lineHeight: '60px' } },
  '6xl': { value: { fontSize: '6xl', lineHeight: '72px' } },
});
