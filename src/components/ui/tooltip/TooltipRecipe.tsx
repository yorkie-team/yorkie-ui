import { tooltipAnatomy } from '@ark-ui/anatomy';
import { defineSlotRecipe } from '@pandacss/dev';

export const tooltipSlotRecipe = defineSlotRecipe({
  className: 'tooltip',
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      background: 'accent.default',
      borderRadius: 'l2',
      boxShadow: 'sm',
      color: 'accent.fg',
      fontWeight: 'semibold',
      px: '3',
      py: '2',
      textStyle: 'xs',
      maxWidth: '2xs',
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
    },
    arrow: {
      '--arrow-size': 'var(--sizes-3)',
      '--arrow-background': '#141313',
    },
  },
});
