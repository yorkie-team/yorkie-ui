import { selectAnatomy } from '@ark-ui/react';
import { defineSlotRecipe } from '@pandacss/dev';

export const select = defineSlotRecipe({
  className: 'select',
  slots: selectAnatomy.keys(),
  base: {
    root: {
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: 'column',
      gap: '150',
      width: 'full',
      color: 'gray.900',
      bg: 'gray.000',
    },
    content: {
      border: '1px solid',
      borderColor: 'neutral.border.alpha',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      py: '200',
      zIndex: 'dropdown',
      _hidden: {
        display: 'none',
      },
      _open: {
        animation: 'fadeIn 0.25s ease-out',
      },
      _closed: {
        animation: 'fadeOut 0.2s ease-out',
      },
      _focusVisible: {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: 'neutral.border.alpha',
      },
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      transitionDuration: 'fast',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      _hover: {
        background: 'colorPalette.default.alpha',
      },
      _highlighted: {
        background: 'colorPalette.default.alpha',
      },
      _selected: {
        background: 'colorPalette.default.alpha',
      },
      _disabled: {
        color: 'disabled.fg',
        cursor: 'not-allowed',
        _hover: {
          background: 'transparent',
          color: 'disabled.fg',
        },
      },
    },
    itemGroupLabel: {
      fontWeight: 'light',
      textStyle: 'xs',
      color: 'gray.500',
    },
    itemIndicator: {
      color: 'neutral.border.alpha',
    },
    label: {
      fontWeight: 'medium',
    },
    trigger: {
      appearance: 'none',
      alignItems: 'center',
      borderColor: 'neutral.border.alpha',
      borderWidth: '1px',
      borderRadius: 'sm',
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'space-between',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _placeholderShown: {
        color: 'neutral.fg.alpha',
      },
      _disabled: {
        color: 'disabled.fg',
        cursor: 'not-allowed',
        '& :where(svg)': {
          color: 'disabled.fg',
        },
      },
      '& :where(svg)': {
        color: 'neutral.default.fg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        content: { p: '50', gap: '100', borderRadius: 'sm' },
        item: { textStyle: 'sm', px: '200', height: '900' },
        itemIndicator: {
          '& :where(svg)': {
            width: '400',
            height: '400',
          },
        },
        itemGroupLabel: {
          px: '200',
          py: '150',
        },
        label: { textStyle: 'xs' },
        trigger: {
          px: '250',
          h: '900',
          minW: '900',
          fontSize: 'sm',
          gap: '200',
          '& :where(svg)': {
            width: '400',
            height: '400',
          },
        },
      },
      md: {
        content: { p: '100', gap: '100', borderRadius: 'md' },
        item: { textStyle: 'md', px: '200', height: '1000' },
        itemIndicator: {
          '& :where(svg)': {
            width: '400',
            height: '400',
          },
        },
        itemGroupLabel: {
          px: '200',
          py: '150',
        },
        label: { textStyle: 'xs' },
        trigger: {
          px: '300',
          h: '1000',
          minW: '1000',
          fontSize: 'md',
          gap: '200',
          '& :where(svg)': {
            width: '400',
            height: '400',
          },
        },
      },
      lg: {
        content: { p: '150', gap: '100', borderRadius: 'md' },
        item: { textStyle: 'md', px: '200', height: '1100' },
        itemIndicator: {
          '& :where(svg)': {
            width: '500',
            height: '500',
          },
        },
        itemGroupLabel: {
          px: '200',
          py: '150',
        },
        label: { textStyle: 'sm' },
        trigger: {
          px: '350',
          h: '1100',
          minW: '1100',
          fontSize: 'md',
          gap: '200',
          '& :where(svg)': {
            width: '500',
            height: '500',
          },
        },
      },
    },
  },
});
