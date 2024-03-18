"use strict";(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[9437],{"./src/components/ui/menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Group:()=>Group,Options:()=>Options,Overview:()=>Overview,Separating:()=>Separating,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Controlled_parameters,_Controlled_parameters_docs,_Controlled_parameters1,_Group_parameters,_Group_parameters_docs,_Group_parameters1,_Separating_parameters,_Separating_parameters_docs,_Separating_parameters1,_Options_parameters,_Options_parameters_docs,_Options_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),_styled_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styled-system/jsx/index.mjs"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"NAVIGATION / Menu",component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2,argTypes:{anchorPoint:{description:"\nThe positioning point for the menu. Can be set by the context menu trigger or the button trigger. `Point`"},positioning:{description:"\nThe options used to dynamically position the menu. `PositioningOptions`"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},value:{description:"\nThe values of radios and checkboxes in the menu. `Record<string, string | string[]>`"},onFocusOutside:{description:"\nThe callback fired when the state of opened/closed accordion items changes. `(event: FocusOutsideEvent) => void`"},onExitComplete:{description:"\nFunction called when the animation ends in the closed state. `() => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{description:"\nFunction called when the menu opens or closes. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{description:"\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`"},onSelect:{description:"\nFunction called when a menu item is selected. `(details: SelectionDetails) => void`"},onValueChange:{description:"\nCallback to be called when the menu values change (for radios and checkboxes).. `(details: ValueChangeDetails) => void`"},disabled:{control:{type:"boolean"},description:"Whether the accordion items are disabled."},loop:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation."},open:{control:{type:"boolean"},description:"Whether the menu is open."},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting.",default:!1},highlightedId:{control:{type:"text"},description:"The `id` of the active menu item.."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit."}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})})},Controlled=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:()=>setIsOpen(!isOpen),children:"Trigger from the outside"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{open:isOpen,onSelect:id=>console.log(id),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{ml:"4",children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})]})},Group=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:"Open menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"group-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"group-1",children:"Group 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"share",children:"Share..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"move",children:"Move..."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"group-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"group-2",children:"Group 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"rename",children:"Rename..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delete",children:"Delete..."})]})]})})]})}),Separating=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:"Open menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Separator,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})}),Options=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({framework:"",libraries:[]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{value,onValueChange:data=>{setValue((prev=>({...prev,[data.name]:data.value})))},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outline",children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"radio-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"radio-group",children:"Radio Group"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"react",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," React"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"solid",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," Solid"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"vue",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," Vue"]})}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"checkbox-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"checkbox-group",children:"Checkbox Group"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"zag-js",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," zag-js"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"ark",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," ark"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"panda",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," panda"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"chakra",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," chakra"]})}})]})]})})]})})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Box height="240px">\n        <Menu.Root>\n          <Menu.Trigger>\n            <Box>Open menu</Box>\n          </Menu.Trigger>\n          <Menu.Positioner>\n            <Menu.Content>\n              <Menu.Item id="search">Search</Menu.Item>\n              <Menu.Item id="undo">Undo</Menu.Item>\n              <Menu.Item id="delivery" disabled>\n                Delivery\n              </Menu.Item>\n              <Menu.Item id="unlink">Unlink</Menu.Item>\n            </Menu.Content>\n          </Menu.Positioner>\n        </Menu.Root>\n      </Box>;\n  }\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(_Controlled_parameters=Controlled.parameters)||void 0===_Controlled_parameters?void 0:_Controlled_parameters.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <Box height="240px">\n      <Button onClick={() => setIsOpen(!isOpen)}>Trigger from the outside</Button>\n      <Menu.Root open={isOpen} onSelect={id => console.log(id)}>\n        <Menu.Trigger>\n          <Box ml="4">Open menu</Box>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.Item id="search">Search</Menu.Item>\n            <Menu.Item id="undo">Undo</Menu.Item>\n            <Menu.Item id="delivery" disabled>\n              Delivery\n            </Menu.Item>\n            <Menu.Item id="unlink">Unlink</Menu.Item>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Controlled_parameters1=Controlled.parameters)||void 0===_Controlled_parameters1||null===(_Controlled_parameters_docs=_Controlled_parameters1.docs)||void 0===_Controlled_parameters_docs?void 0:_Controlled_parameters_docs.source}}},Group.parameters={...Group.parameters,docs:{...null===(_Group_parameters=Group.parameters)||void 0===_Group_parameters?void 0:_Group_parameters.docs,source:{originalSource:'() => <Box height="240px">\n    <Menu.Root>\n      <Menu.Trigger>Open menu</Menu.Trigger>\n      <Menu.Positioner>\n        <Menu.Content>\n          <Menu.ItemGroup id="group-1">\n            <Menu.ItemGroupLabel htmlFor="group-1">Group 1</Menu.ItemGroupLabel>\n            <Menu.Item id="share">Share...</Menu.Item>\n            <Menu.Item id="move">Move...</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup id="group-2">\n            <Menu.ItemGroupLabel htmlFor="group-2">Group 2</Menu.ItemGroupLabel>\n            <Menu.Item id="rename">Rename...</Menu.Item>\n            <Menu.Item id="delete">Delete...</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.Content>\n      </Menu.Positioner>\n    </Menu.Root>\n  </Box>',...null===(_Group_parameters1=Group.parameters)||void 0===_Group_parameters1||null===(_Group_parameters_docs=_Group_parameters1.docs)||void 0===_Group_parameters_docs?void 0:_Group_parameters_docs.source}}},Separating.parameters={...Separating.parameters,docs:{...null===(_Separating_parameters=Separating.parameters)||void 0===_Separating_parameters?void 0:_Separating_parameters.docs,source:{originalSource:'() => {\n  return <Box height="240px">\n      <Menu.Root>\n        <Menu.Trigger>Open menu</Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.Item id="search">Search</Menu.Item>\n            <Menu.Item id="undo">Undo</Menu.Item>\n            <Menu.Separator />\n            <Menu.Item id="delivery" disabled>\n              Delivery\n            </Menu.Item>\n            <Menu.Item id="unlink">Unlink</Menu.Item>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Separating_parameters1=Separating.parameters)||void 0===_Separating_parameters1||null===(_Separating_parameters_docs=_Separating_parameters1.docs)||void 0===_Separating_parameters_docs?void 0:_Separating_parameters_docs.source}}},Options.parameters={...Options.parameters,docs:{...null===(_Options_parameters=Options.parameters)||void 0===_Options_parameters?void 0:_Options_parameters.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<Record<string, string | string[]>>({\n    framework: \'\',\n    libraries: []\n  });\n  return <Box height="240px">\n      <Menu.Root value={value} onValueChange={data => {\n      setValue(prev => ({\n        ...prev,\n        [data.name]: data.value\n      }));\n    }}>\n        <Menu.Trigger>\n          <Button variant="outline">Open menu</Button>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.ItemGroup id="radio-group">\n              <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>\n              <Menu.OptionItem name="framework" type="radio" value="react">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} React</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="framework" type="radio" value="solid">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} Solid</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="framework" type="radio" value="vue">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} Vue</>}\n              </Menu.OptionItem>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup id="checkbox-group">\n              <Menu.ItemGroupLabel htmlFor="checkbox-group">Checkbox Group</Menu.ItemGroupLabel>\n              <Menu.OptionItem name="libraries" type="checkbox" value="zag-js">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} zag-js</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="ark">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} ark</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="panda">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} panda</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="chakra">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} chakra</>}\n              </Menu.OptionItem>\n            </Menu.ItemGroup>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Options_parameters1=Options.parameters)||void 0===_Options_parameters1||null===(_Options_parameters_docs=_Options_parameters1.docs)||void 0===_Options_parameters_docs?void 0:_Options_parameters_docs.source}}};const __namedExportsOrder=["Overview","Controlled","Group","Separating","Options"]}}]);