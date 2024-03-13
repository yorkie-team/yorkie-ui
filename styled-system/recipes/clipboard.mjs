import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const clipboardDefaultVariants = {}
const clipboardCompoundVariants = []

const clipboardSlotNames = [
  [
    "root",
    "clipboard__root"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "input",
    "clipboard__input"
  ],
  [
    "label",
    "clipboard__label"
  ],
  [
    "root",
    "clipboard__root"
  ],
  [
    "control",
    "clipboard__control"
  ],
  [
    "trigger",
    "clipboard__trigger"
  ],
  [
    "indicator",
    "clipboard__indicator"
  ],
  [
    "input",
    "clipboard__input"
  ],
  [
    "label",
    "clipboard__label"
  ]
]
const clipboardSlotFns = /* @__PURE__ */ clipboardSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, clipboardDefaultVariants, getSlotCompoundVariant(clipboardCompoundVariants, slotName))])

const clipboardFn = (props = {}) => {
  return Object.fromEntries(clipboardSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const clipboardVariantKeys = []

export const clipboard = /* @__PURE__ */ Object.assign(clipboardFn, {
  __recipe__: false,
  __name__: 'clipboard',
  raw: (props) => props,
  variantKeys: clipboardVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, clipboardVariantKeys)
  },
})