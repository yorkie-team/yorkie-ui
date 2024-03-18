"use strict";(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[3013],{"./src/components/ui/checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultChecked:()=>DefaultChecked,Disabled:()=>Disabled,Indeterminate:()=>Indeterminate,Large:()=>Large,Medium:()=>Medium,Overview:()=>Overview,Small:()=>Small,WithRedColor:()=>WithRedColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Small_parameters,_Small_parameters_docs,_Small_parameters1,_Medium_parameters,_Medium_parameters_docs,_Medium_parameters1,_Large_parameters,_Large_parameters_docs,_Large_parameters1,_DefaultChecked_parameters,_DefaultChecked_parameters_docs,_DefaultChecked_parameters1,_Indeterminate_parameters,_Indeterminate_parameters_docs,_Indeterminate_parameters1,_WithRedColor_parameters,_WithRedColor_parameters_docs,_WithRedColor_parameters1,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Checkbox",component:_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"**Size of Checkbox control - default: `md`.**\n      \n `sm:`: width: 4px, height: 4px\n      \n `md:` width: 5px, height: 5px\n      \n `lg:` width: 6px, height: 6px"},checked:{control:{type:"radio"},options:["indeterminate",!1,!0],description:'**Checked state**\n      \nUsing `checked = "indeterminate"` to signifies a checkbox with only some of its related options selected.\n      \n`true` and `false` states are set automatically and **cannot be passed** to the `checked` prop'},colorPalette:{control:{type:"radio"},options:["red"],description:"**Color of Checkbox control**\n      \nThe color specified in the **color system is required.**"},disabled:{control:{type:"boolean"},description:"**Disabled state of Checkbox**\n      \nUsing `true` state to prevent interaction or `false` to enable it."}}},Overview={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{...args,children:"Label"})},Small={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{size:"sm",...args,children:"Label"})},Medium={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{size:"md",...args,children:"Label"})},Large={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{size:"lg",...args,children:"Label"})},DefaultChecked={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{defaultChecked:!0,...args,children:"Label"})},Indeterminate={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{checked:"indeterminate",...args,children:"Label"})},WithRedColor={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{colorPalette:"red",defaultChecked:!0,...args,children:"Label"})},Disabled={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui___WEBPACK_IMPORTED_MODULE_1__.XZ,{disabled:!0,...args,children:"Label"})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: args => <Checkbox {...args}>Label</Checkbox>\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Small.parameters={...Small.parameters,docs:{...null===(_Small_parameters=Small.parameters)||void 0===_Small_parameters?void 0:_Small_parameters.docs,source:{originalSource:'{\n  render: args => <Checkbox size="sm" {...args}>\n      Label\n    </Checkbox>\n}',...null===(_Small_parameters1=Small.parameters)||void 0===_Small_parameters1||null===(_Small_parameters_docs=_Small_parameters1.docs)||void 0===_Small_parameters_docs?void 0:_Small_parameters_docs.source}}},Medium.parameters={...Medium.parameters,docs:{...null===(_Medium_parameters=Medium.parameters)||void 0===_Medium_parameters?void 0:_Medium_parameters.docs,source:{originalSource:'{\n  render: args => <Checkbox size="md" {...args}>\n      Label\n    </Checkbox>\n}',...null===(_Medium_parameters1=Medium.parameters)||void 0===_Medium_parameters1||null===(_Medium_parameters_docs=_Medium_parameters1.docs)||void 0===_Medium_parameters_docs?void 0:_Medium_parameters_docs.source}}},Large.parameters={...Large.parameters,docs:{...null===(_Large_parameters=Large.parameters)||void 0===_Large_parameters?void 0:_Large_parameters.docs,source:{originalSource:'{\n  render: args => <Checkbox size="lg" {...args}>\n      Label\n    </Checkbox>\n}',...null===(_Large_parameters1=Large.parameters)||void 0===_Large_parameters1||null===(_Large_parameters_docs=_Large_parameters1.docs)||void 0===_Large_parameters_docs?void 0:_Large_parameters_docs.source}}},DefaultChecked.parameters={...DefaultChecked.parameters,docs:{...null===(_DefaultChecked_parameters=DefaultChecked.parameters)||void 0===_DefaultChecked_parameters?void 0:_DefaultChecked_parameters.docs,source:{originalSource:"{\n  render: args => <Checkbox defaultChecked {...args}>\n      Label\n    </Checkbox>\n}",...null===(_DefaultChecked_parameters1=DefaultChecked.parameters)||void 0===_DefaultChecked_parameters1||null===(_DefaultChecked_parameters_docs=_DefaultChecked_parameters1.docs)||void 0===_DefaultChecked_parameters_docs?void 0:_DefaultChecked_parameters_docs.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...null===(_Indeterminate_parameters=Indeterminate.parameters)||void 0===_Indeterminate_parameters?void 0:_Indeterminate_parameters.docs,source:{originalSource:'{\n  render: args => <Checkbox checked="indeterminate" {...args}>\n      Label\n    </Checkbox>\n}',...null===(_Indeterminate_parameters1=Indeterminate.parameters)||void 0===_Indeterminate_parameters1||null===(_Indeterminate_parameters_docs=_Indeterminate_parameters1.docs)||void 0===_Indeterminate_parameters_docs?void 0:_Indeterminate_parameters_docs.source}}},WithRedColor.parameters={...WithRedColor.parameters,docs:{...null===(_WithRedColor_parameters=WithRedColor.parameters)||void 0===_WithRedColor_parameters?void 0:_WithRedColor_parameters.docs,source:{originalSource:'{\n  render: args => <Checkbox colorPalette="red" defaultChecked {...args}>\n      Label\n    </Checkbox>\n}',...null===(_WithRedColor_parameters1=WithRedColor.parameters)||void 0===_WithRedColor_parameters1||null===(_WithRedColor_parameters_docs=_WithRedColor_parameters1.docs)||void 0===_WithRedColor_parameters_docs?void 0:_WithRedColor_parameters_docs.source}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:"{\n  render: args => <Checkbox disabled {...args}>\n      Label\n    </Checkbox>\n}",...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source}}};const __namedExportsOrder=["Overview","Small","Medium","Large","DefaultChecked","Indeterminate","WithRedColor","Disabled"]}}]);