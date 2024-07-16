import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
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
          color: 'fg.disabled',
          background: 'bg.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'fg.disabled',
            background: 'bg.disabled',
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
          background: 'bg.disabled',
          borderColor: 'border.disabled',
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            borderColor: 'border.disabled',
            color: 'fg.disabled',
          },
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
        _disabled: {
          color: 'border.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'border.disabled',
          },
        },
        height: 'auto!',
        px: '0!',
        minW: '0!',
      },
    },
    size: {
      sm: {
        textStyle: 'xs',
        px: '300',
        py: '150',
        gap: '200',
        '& svg': {
          width: '300',
          height: '300',
        },
      },
      md: {
        textStyle: 'sm',
        px: '400',
        py: '200',
        gap: '200',
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
        gap: '200',
        '& svg': {
          width: '600',
          height: '600',
        },
      },
    },
  },
});
