import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    minWidth: '0',
    justifyContent: 'center',
    gap: '200',
    outline: 'none',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _hidden: {
      display: 'none',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
        colorPalette: 'accent',
        _hover: {
          background: 'colorPalette.emphasized',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.border',
          outlineOffset: '2px',
        },
        _disabled: {
          color: 'disabled.fg',
          background: 'disabled.default',
          cursor: 'not-allowed',
          _hover: {
            color: 'disabled.fg',
            background: 'disabled.default',
          },
        },
      },
      outline: {
        borderWidth: '1px',
        background: 'colorPalette.default.alpha',
        borderColor: 'colorPalette.border.alpha',
        color: 'colorPalette.fg.alpha',
        colorPalette: 'accent',
        _hover: {
          background: 'colorPalette.emphasized.alpha',
        },
        _disabled: {
          background: 'disabled.default',
          borderColor: 'disabled.border',
          color: 'disabled.fg',
          cursor: 'not-allowed',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.border',
          outlineOffset: '2px',
        },
        _selected: {
          background: 'colorPalette.default',
          borderColor: 'colorPalette.default',
          color: 'colorPalette.fg',
          _hover: {
            background: 'colorPalette.emphasized',
            borderColor: 'colorPalette.emphasized',
          },
        },
      },
      link: {
        verticalAlign: 'baseline',
        height: 'auto!',
        px: '0!',
        minW: '0!',
        _disabled: {
          color: 'disabled.border',
          cursor: 'not-allowed',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.border',
          outlineOffset: '2px',
        },
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        px: '300',
        py: '150',
        minHeight: '800',
        '& svg': {
          width: '300',
          height: '300',
        },
      },
      md: {
        textStyle: 'sm',
        px: '400',
        py: '200',
        minHeight: '1000',
        '& svg': {
          width: '400',
          height: '400',
        },
      },
      lg: {
        textStyle: 'md',
        fontWeight: 'semibold',
        px: '600',
        py: '300',
        minHeight: '1200',
        '& svg': {
          width: '600',
          height: '600',
        },
      },
    },
  },
});
