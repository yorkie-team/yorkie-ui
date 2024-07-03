import { defineRecipe } from '@pandacss/dev';

export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'neutral.11',
    colorPalette: 'accent',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '2',
    textUnderlineOffset: '0.125em',
    '& svg': {
      width: '1em',
      height: '1em',
    },
    _hover: {
      textDecorationColor: 'orange.default',
    },
  },
  defaultVariants: {
    decoration: 'ghost',
  },
  variants: {
    decoration: {
      ghost: {
        textDecorationColor: 'transparent',
        _hover: {
          textDecorationColor: 'orange.default',
        },
      },
      link: {
        textDecorationColor: 'neutral.12',
      },
    },
  },
});
