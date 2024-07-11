import { defineRecipe } from '@pandacss/dev';

export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'neutral.11',
    colorPalette: 'accent',
    cursor: 'pointer',
    display: 'inline-flex',
    borderRadius: '4',
    fontWeight: 'medium',
    gap: '2',
    textUnderlineOffset: '0.125em',
    '& svg': {
      width: '1em',
      height: '1em',
    },
    _hover: {
      textDecorationColor: 'orange.default',
    },
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
        colorPalette: 'accent',
        textDecorationColor: 'transparent',
        _hover: {
          background: 'colorPalette.emphasized',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
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
        borderColor: 'colorPalette.a8',
        color: 'colorPalette.text',
        colorPalette: 'gray',
        textDecorationColor: 'transparent',
        _hover: {
          background: 'colorPalette.a2',
        },
        _disabled: {
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
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
        _selected: {
          background: 'accent.default',
          borderColor: 'accent.default',
          color: 'accent.fg',
          _hover: {
            background: 'accent.emphasized',
            borderColor: 'accent.emphasized',
          },
        },
      },
      ghost: {
        color: 'colorPalette.text',
        colorPalette: 'gray',
        textDecorationColor: 'transparent',
        _hover: {
          background: 'colorPalette.a3',
        },
        _selected: {
          background: 'colorPalette.a3',
        },
        _disabled: {
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            color: 'fg.disabled',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
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
      subtle: {
        background: 'colorPalette.a3',
        color: 'colorPalette.text',
        colorPalette: 'gray',
        _hover: {
          background: 'colorPalette.a4',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
        _disabled: {
          background: 'bg.disabled',
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'bg.disabled',
            color: 'fg.disabled',
          },
        },
      },
    },
    size: {
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '3',
        gap: '2',
        '& svg': {
          fontSize: 'md',
          width: '4',
          height: '4',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '4.5',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
        '& svg': {
          width: '6',
          height: '6',
        },
      },
    },
    decoration: {
      ghost: {
        textDecorationColor: 'transparent',
        _hover: {
          textDecorationColor: 'orange.default',
        },
      },
      link: {
        textDecorationColor: 'neutral.12',
        _hover: {
          textDecorationColor: 'orange.default',
        },
      },
    },
  },
  defaultVariants: {
    decoration: 'ghost',
    variant: 'outline',
    size: 'md',
  },
});
