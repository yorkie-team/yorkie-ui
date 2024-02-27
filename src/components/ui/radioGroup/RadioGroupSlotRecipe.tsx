import { radioGroupAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

/**
 * Update styles for Avatar component.
 */
export const radioGroupSlotRecipe = defineSlotRecipe({
  className: 'radioGroup',
  slots: radioGroupAnatomy.keys(),
  base: {
    item: {
      width: 'fit-content',
    },
  },
});
