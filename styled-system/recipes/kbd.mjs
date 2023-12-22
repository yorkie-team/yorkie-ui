import { splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const kbdFn = /* @__PURE__ */ createRecipe('kbd', {
  "size": "md"
}, [])

const kbdVariantMap = {
  "size": [
    "sm",
    "md",
    "lg"
  ]
}

const kbdVariantKeys = Object.keys(kbdVariantMap)

export const kbd = /* @__PURE__ */ Object.assign(kbdFn, {
  __recipe__: true,
  __name__: 'kbd',
  raw: (props) => props,
  variantKeys: kbdVariantKeys,
  variantMap: kbdVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, kbdVariantKeys)
  },
})