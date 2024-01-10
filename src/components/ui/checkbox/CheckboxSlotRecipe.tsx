import { checkboxAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxSlotRecipe = defineSlotRecipe({
  className: 'checkbox',
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      display: 'inline-flex',
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    label: {
      cursor: 'pointer',
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    control: {
      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.6',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
