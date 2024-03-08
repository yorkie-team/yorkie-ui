import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const switchsDefaultVariants = {
  "size": "md"
}
const switchsCompoundVariants = []

const switchsSlotNames = [
  [
    "root",
    "switchRecipe__root"
  ],
  [
    "label",
    "switchRecipe__label"
  ],
  [
    "control",
    "switchRecipe__control"
  ],
  [
    "thumb",
    "switchRecipe__thumb"
  ]
]
const switchsSlotFns = /* @__PURE__ */ switchsSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, switchsDefaultVariants, getSlotCompoundVariant(switchsCompoundVariants, slotName))])

const switchsFn = (props = {}) => {
  return Object.fromEntries(switchsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const switchsVariantKeys = [
  "size"
]

export const switchs = /* @__PURE__ */ Object.assign(switchsFn, {
  __recipe__: false,
  __name__: 'switchs',
  raw: (props) => props,
  variantKeys: switchsVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, switchsVariantKeys)
  },
})