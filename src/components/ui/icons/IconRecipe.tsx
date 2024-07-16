import { defineRecipe } from '@pandacss/dev';

export const iconRecipe = defineRecipe({
  className: 'icon',
  base: {
    color: 'currentcolor',
    display: 'inline-block',
    flexShrink: '0',
    verticalAlign: 'middle',
    lineHeight: '1em',
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      xs: {
        w: '300',
        h: '300',
      },
      sm: {
        w: '400',
        h: '400',
      },
      md: {
        w: '500',
        h: '500',
      },
      lg: {
        w: '600',
        h: '600',
      },
      xl: {
        w: '700',
        h: '700',
      },
      '2xl': {
        w: '800',
        h: '800',
      },
    },
  },
});
