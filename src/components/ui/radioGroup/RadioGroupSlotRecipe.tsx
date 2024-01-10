import { radioGroupAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const radioGroupSlotRecipe = defineSlotRecipe({
  className: 'radioGroup',
  slots: radioGroupAnatomy.keys(),
  base: {
    item: {
      width: 'fit-content',
    },
  },
});
