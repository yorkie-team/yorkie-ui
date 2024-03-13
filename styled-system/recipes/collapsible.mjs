import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const collapsibleDefaultVariants = {}
const collapsibleCompoundVariants = []

const collapsibleSlotNames = [
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ],
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "content",
    "collapsible__content"
  ]
]
const collapsibleSlotFns = /* @__PURE__ */ collapsibleSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, collapsibleDefaultVariants, getSlotCompoundVariant(collapsibleCompoundVariants, slotName))])

const collapsibleFn = (props = {}) => {
  return Object.fromEntries(collapsibleSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const collapsibleVariantKeys = []

export const collapsible = /* @__PURE__ */ Object.assign(collapsibleFn, {
  __recipe__: false,
  __name__: 'collapsible',
  raw: (props) => props,
  variantKeys: collapsibleVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, collapsibleVariantKeys)
  },
})