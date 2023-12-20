import { avatarAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

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
});
