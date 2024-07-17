import { defineRecipe } from '@pandacss/dev';

export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'neutral.12',
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
      textDecorationColor: 'neutral.12',
    },
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
        colorPalette: 'accent',
        _hover: {
          background: 'colorPalette.emphasized',
          textDecorationColor: 'transparent',
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
        color: 'colorPalette.fg',
        colorPalette: 'gray',
        textDecorationColor: 'transparent',
        _hover: {
          background: 'colorPalette.a2',
          textDecorationColor: 'transparent',
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
    },
    decoration: {
      link: {
        textDecorationColor: 'neutral.12',
        _hover: {
          textDecorationColor: 'neutral.11',
        },
      },
    },
  },
  defaultVariants: {
    decoration: 'link',
  },
});
