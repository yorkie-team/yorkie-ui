import { checkboxAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const checkboxSlotRecipe = defineSlotRecipe({
  className: 'checkbox',
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      cursor: 'pointer',
      _disabled: {
        opacity: '0.6',
        cursor: 'not-allowed',
      },
      _indeterminate: {
        cursor: 'default',
      },
    },
    control: {
      _disabled: {
        cursor: 'not-allowed',
      },
      _indeterminate: {
        cursor: 'default',
      },
    },
  },
});
