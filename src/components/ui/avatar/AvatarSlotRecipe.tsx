import { avatarAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

/**
 * Update styles for Avatar component.
 */
export const avatarSlotRecipe = defineSlotRecipe({
  className: 'avatar',
  description: 'The styles for the Checkbox component',
  slots: avatarAnatomy.keys(),
  base: {
    fallback: {
      width: 'inherit',
      borderWidth: '0',
    },
  },
  variants: {
    size: {
      xs: {
        fallback: {
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      sm: {
        fallback: {
          '& svg': {
            width: '4',
            height: '4',
          },
        },
      },
      md: {
        fallback: {
          '& svg': {
            width: '5',
            height: '5',
          },
        },
      },
      lg: {
        fallback: {
          '& svg': {
            width: '6',
            height: '6',
          },
        },
      },
      xl: {
        fallback: {
          '& svg': {
            width: '7',
            height: '7',
          },
        },
      },
      '2xl': {
        fallback: {
          '& svg': {
            width: '8',
            height: '8',
          },
        },
      },
    },
  },
});
