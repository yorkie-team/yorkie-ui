import { defineRecipe } from '@pandacss/dev'

export const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    alignItems: 'center',
    color: 'fg.default',
    colorPalette: 'accent',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '2',
    textDecoration: 'none',
    textDecorationColor: 'none',
    textUnderlineOffset: '0.125em',
    transitionDuration: 'normal',
    transitionProperty: 'text-decoration-color',
    transitionTimingFunction: 'default',
    _hover: {
      textDecoration: 'none',
      textDecorationColor: 'none'
    },
    '& svg': {
      width: '1em',
      height: '1em',
    },
  },
})
