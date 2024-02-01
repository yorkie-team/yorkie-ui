import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const fileUploadDefaultVariants = {}
const fileUploadCompoundVariants = []

const fileUploadSlotNames = [
  [
    "root",
    "fileUpload__root"
  ],
  [
    "dropzone",
    "fileUpload__dropzone"
  ],
  [
    "trigger",
    "fileUpload__trigger"
  ],
  [
    "label",
    "fileUpload__label"
  ],
  [
    "item",
    "fileUpload__item"
  ],
  [
    "itemName",
    "fileUpload__itemName"
  ],
  [
    "itemPreview",
    "fileUpload__itemPreview"
  ],
  [
    "itemSizeText",
    "fileUpload__itemSizeText"
  ],
  [
    "itemDeleteTrigger",
    "fileUpload__itemDeleteTrigger"
  ],
  [
    "itemGroup",
    "fileUpload__itemGroup"
  ]
]
const fileUploadSlotFns = /* @__PURE__ */ fileUploadSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fileUploadDefaultVariants, getSlotCompoundVariant(fileUploadCompoundVariants, slotName))])

const fileUploadFn = (props = {}) => {
  return Object.fromEntries(fileUploadSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const fileUploadVariantKeys = []

export const fileUpload = /* @__PURE__ */ Object.assign(fileUploadFn, {
  __recipe__: false,
  __name__: 'fileUpload',
  raw: (props) => props,
  variantKeys: fileUploadVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fileUploadVariantKeys)
  },
})