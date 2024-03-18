(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[2989,9437],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/menu/Menu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Menu_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/menu/Menu.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"menu",children:"Menu"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Menu } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Menus empower users to take action with a single tap. Incorporate them into your design for a seamless and efficient user experience."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:'\n      <Box height="240px">\n        <Menu.Root>\n          <Menu.Trigger>\n            <Box>Open menu</Box>\n          </Menu.Trigger>\n          <Menu.Positioner>\n            <Menu.Content>\n              <Menu.Item id="search">Search</Menu.Item>\n              <Menu.Item id="undo">Undo</Menu.Item>\n              <Menu.Item id="delivery" disabled>\n                Delivery\n              </Menu.Item>\n              <Menu.Item id="unlink">Unlink</Menu.Item>\n            </Menu.Content>\n          </Menu.Positioner>\n        </Menu.Root>\n      </Box>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"listening-to-item-selection",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#controlled-menu",children:"Listening to item selection"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Pass the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onSelect"})," prop to the Menu component to execute custom logic when an item is selected. The callback receives the id of the item as an argument."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__.Controlled,source:{format:!0,code:'\n      const [isOpen, setIsOpen] = useState(false);\n      return (\n        <>\n          <Button onClick={() => setIsOpen(!isOpen)}>Trigger from the outside</Button>\n          <Menu.Root open={isOpen} onSelect={(id) => console.log(id)}>\n            <Menu.Trigger>\n              <Box ml="4">Open menu</Box>\n            </Menu.Trigger>\n            <Menu.Positioner>\n              <Menu.Content>\n                <Menu.Item id="search">Search</Menu.Item>\n                <Menu.Item id="undo">Undo</Menu.Item>\n                <Menu.Item id="delivery" disabled>\n                  Delivery\n                </Menu.Item>\n                <Menu.Item id="unlink">Unlink</Menu.Item>\n              </Menu.Content>\n            </Menu.Positioner>\n          </Menu.Root>\n        </>\n      );\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"grouping-menu-items",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#group-menu",children:"Grouping menu items"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When the number of menu items becomes large, it can be helpful to group items that are related. This can be achieved by placing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Item"})," components inside the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.ItemGroup"})," component.\nYou can also use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.ItemGroupLabel"})," component to add a label to the group."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__.Group,source:{format:!0,code:'\n      <Menu.Root>\n        <Menu.Trigger>\n          <Button variant="outline">Open menu</Button>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.ItemGroup id="group-1">\n              <Menu.ItemGroupLabel htmlFor="group-1">Group 1</Menu.ItemGroupLabel>\n              <Menu.Item id="share">Share...</Menu.Item>\n              <Menu.Item id="move">Move...</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup id="group-2">\n              <Menu.ItemGroupLabel htmlFor="group-2">Group 2</Menu.ItemGroupLabel>\n              <Menu.Item id="rename">Rename...</Menu.Item>\n              <Menu.Item id="delete">Delete...</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"separating-menu-items",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#separating-menu",children:"Separating menu items"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To create a visual separation between menu items, utilize the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.Separator"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__.Separating,source:{format:!0,code:'\n      <Menu.Root>\n        <Menu.Trigger>\n          <Button variant="outline">Open menu</Button>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.Item id="search">Search</Menu.Item>\n            <Menu.Item id="undo">Undo</Menu.Item>\n            <Menu.Separator />\n            <Menu.Item id="delivery" disabled>\n              Delivery\n            </Menu.Item>\n            <Menu.Item id="unlink">Unlink</Menu.Item>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"checkbox-and-radio-option-items",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#options-menu",children:"Checkbox and Radio option items"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display a checkbox or radio option item, use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Menu.OptionItem"})," component with type, name, and value props.\nTo manage the state of the option items, pass value and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onValueChange"})," props to the Menu component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Menu_stories__WEBPACK_IMPORTED_MODULE_2__.Options,source:{format:!0,code:'\n      const [value, setValue] = useState<Record<string, string | string[]>>({\n        framework: \'\',\n        libraries: [],\n      })\n      return (\n        <Menu.Root\n          value={value}\n          onValueChange={(data) => {\n            setValue((prev) => ({\n              ...prev,\n              [data.name]: data.value,\n            }))\n          }}\n        >\n          <Menu.Trigger>Open menu</Menu.Trigger>\n          <Menu.Positioner>\n            <Menu.Content>\n              <Menu.ItemGroup id="radio-group">\n                <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>\n                <Menu.OptionItem name="framework" type="radio" value="react">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} React</>}\n                </Menu.OptionItem>\n                <Menu.OptionItem name="framework" type="radio" value="solid">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} Solid</>}\n                </Menu.OptionItem>\n                <Menu.OptionItem name="framework" type="radio" value="vue">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} Vue</>}\n                </Menu.OptionItem>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup id="checkbox-group">\n                <Menu.ItemGroupLabel htmlFor="checkbox-group">Checkbox Group</Menu.ItemGroupLabel>\n                <Menu.OptionItem name="libraries" type="checkbox" value="zag-js">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} zag-js</>}\n                </Menu.OptionItem>\n                <Menu.OptionItem name="libraries" type="checkbox" value="ark">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} ark</>}\n                </Menu.OptionItem>\n                <Menu.OptionItem name="libraries" type="checkbox" value="panda">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} panda</>}\n                </Menu.OptionItem>\n                <Menu.OptionItem name="libraries" type="checkbox" value="chakra">\n                  {({ isChecked }) => <>{isChecked ? \'✅\' : \'\'} chakra</>}\n                </Menu.OptionItem>\n              </Menu.ItemGroup>\n            </Menu.Content>\n          </Menu.Positioner>\n        </Menu.Root>\n      )\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Group:()=>Group,Options:()=>Options,Overview:()=>Overview,Separating:()=>Separating,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Controlled_parameters,_Controlled_parameters_docs,_Controlled_parameters1,_Group_parameters,_Group_parameters_docs,_Group_parameters1,_Separating_parameters,_Separating_parameters_docs,_Separating_parameters1,_Options_parameters,_Options_parameters_docs,_Options_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),_styled_jsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./styled-system/jsx/index.mjs"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"NAVIGATION / Menu",component:_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2,argTypes:{anchorPoint:{description:"\nThe positioning point for the menu. Can be set by the context menu trigger or the button trigger. `Point`"},positioning:{description:"\nThe options used to dynamically position the menu. `PositioningOptions`"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},value:{description:"\nThe values of radios and checkboxes in the menu. `Record<string, string | string[]>`"},onFocusOutside:{description:"\nThe callback fired when the state of opened/closed accordion items changes. `(event: FocusOutsideEvent) => void`"},onExitComplete:{description:"\nFunction called when the animation ends in the closed state. `() => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{description:"\nFunction called when the menu opens or closes. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{description:"\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`"},onSelect:{description:"\nFunction called when a menu item is selected. `(details: SelectionDetails) => void`"},onValueChange:{description:"\nCallback to be called when the menu values change (for radios and checkboxes).. `(details: ValueChangeDetails) => void`"},disabled:{control:{type:"boolean"},description:"Whether the accordion items are disabled."},loop:{control:{type:"boolean"},description:"Whether to loop the keyboard navigation."},open:{control:{type:"boolean"},description:"Whether the menu is open."},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting.",default:!1},highlightedId:{control:{type:"text"},description:"The `id` of the active menu item.."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit."}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})})},Controlled=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{onClick:()=>setIsOpen(!isOpen),children:"Trigger from the outside"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{open:isOpen,onSelect:id=>console.log(id),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{ml:"4",children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})]})},Group=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:"Open menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"group-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"group-1",children:"Group 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"share",children:"Share..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"move",children:"Move..."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"group-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"group-2",children:"Group 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"rename",children:"Rename..."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delete",children:"Delete..."})]})]})})]})}),Separating=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:"Open menu"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"search",children:"Search"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"undo",children:"Undo"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Separator,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"delivery",disabled:!0,children:"Delivery"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Item,{id:"unlink",children:"Unlink"})]})})]})}),Options=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({framework:"",libraries:[]});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styled_jsx__WEBPACK_IMPORTED_MODULE_2__.xu,{height:"240px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Root,{value,onValueChange:data=>{setValue((prev=>({...prev,[data.name]:data.value})))},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Trigger,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.zx,{variant:"outline",children:"Open menu"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Positioner,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"radio-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"radio-group",children:"Radio Group"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"react",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," React"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"solid",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," Solid"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"framework",type:"radio",value:"vue",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," Vue"]})}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroup,{id:"checkbox-group",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.ItemGroupLabel,{htmlFor:"checkbox-group",children:"Checkbox Group"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"zag-js",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," zag-js"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"ark",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," ark"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"panda",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," panda"]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.v2.OptionItem,{name:"libraries",type:"checkbox",value:"chakra",children:param=>{let{isChecked}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[isChecked?"✅":""," chakra"]})}})]})]})})]})})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Box height="240px">\n        <Menu.Root>\n          <Menu.Trigger>\n            <Box>Open menu</Box>\n          </Menu.Trigger>\n          <Menu.Positioner>\n            <Menu.Content>\n              <Menu.Item id="search">Search</Menu.Item>\n              <Menu.Item id="undo">Undo</Menu.Item>\n              <Menu.Item id="delivery" disabled>\n                Delivery\n              </Menu.Item>\n              <Menu.Item id="unlink">Unlink</Menu.Item>\n            </Menu.Content>\n          </Menu.Positioner>\n        </Menu.Root>\n      </Box>;\n  }\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(_Controlled_parameters=Controlled.parameters)||void 0===_Controlled_parameters?void 0:_Controlled_parameters.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <Box height="240px">\n      <Button onClick={() => setIsOpen(!isOpen)}>Trigger from the outside</Button>\n      <Menu.Root open={isOpen} onSelect={id => console.log(id)}>\n        <Menu.Trigger>\n          <Box ml="4">Open menu</Box>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.Item id="search">Search</Menu.Item>\n            <Menu.Item id="undo">Undo</Menu.Item>\n            <Menu.Item id="delivery" disabled>\n              Delivery\n            </Menu.Item>\n            <Menu.Item id="unlink">Unlink</Menu.Item>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Controlled_parameters1=Controlled.parameters)||void 0===_Controlled_parameters1||null===(_Controlled_parameters_docs=_Controlled_parameters1.docs)||void 0===_Controlled_parameters_docs?void 0:_Controlled_parameters_docs.source}}},Group.parameters={...Group.parameters,docs:{...null===(_Group_parameters=Group.parameters)||void 0===_Group_parameters?void 0:_Group_parameters.docs,source:{originalSource:'() => <Box height="240px">\n    <Menu.Root>\n      <Menu.Trigger>Open menu</Menu.Trigger>\n      <Menu.Positioner>\n        <Menu.Content>\n          <Menu.ItemGroup id="group-1">\n            <Menu.ItemGroupLabel htmlFor="group-1">Group 1</Menu.ItemGroupLabel>\n            <Menu.Item id="share">Share...</Menu.Item>\n            <Menu.Item id="move">Move...</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup id="group-2">\n            <Menu.ItemGroupLabel htmlFor="group-2">Group 2</Menu.ItemGroupLabel>\n            <Menu.Item id="rename">Rename...</Menu.Item>\n            <Menu.Item id="delete">Delete...</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.Content>\n      </Menu.Positioner>\n    </Menu.Root>\n  </Box>',...null===(_Group_parameters1=Group.parameters)||void 0===_Group_parameters1||null===(_Group_parameters_docs=_Group_parameters1.docs)||void 0===_Group_parameters_docs?void 0:_Group_parameters_docs.source}}},Separating.parameters={...Separating.parameters,docs:{...null===(_Separating_parameters=Separating.parameters)||void 0===_Separating_parameters?void 0:_Separating_parameters.docs,source:{originalSource:'() => {\n  return <Box height="240px">\n      <Menu.Root>\n        <Menu.Trigger>Open menu</Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.Item id="search">Search</Menu.Item>\n            <Menu.Item id="undo">Undo</Menu.Item>\n            <Menu.Separator />\n            <Menu.Item id="delivery" disabled>\n              Delivery\n            </Menu.Item>\n            <Menu.Item id="unlink">Unlink</Menu.Item>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Separating_parameters1=Separating.parameters)||void 0===_Separating_parameters1||null===(_Separating_parameters_docs=_Separating_parameters1.docs)||void 0===_Separating_parameters_docs?void 0:_Separating_parameters_docs.source}}},Options.parameters={...Options.parameters,docs:{...null===(_Options_parameters=Options.parameters)||void 0===_Options_parameters?void 0:_Options_parameters.docs,source:{originalSource:'() => {\n  const [value, setValue] = useState<Record<string, string | string[]>>({\n    framework: \'\',\n    libraries: []\n  });\n  return <Box height="240px">\n      <Menu.Root value={value} onValueChange={data => {\n      setValue(prev => ({\n        ...prev,\n        [data.name]: data.value\n      }));\n    }}>\n        <Menu.Trigger>\n          <Button variant="outline">Open menu</Button>\n        </Menu.Trigger>\n        <Menu.Positioner>\n          <Menu.Content>\n            <Menu.ItemGroup id="radio-group">\n              <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>\n              <Menu.OptionItem name="framework" type="radio" value="react">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} React</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="framework" type="radio" value="solid">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} Solid</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="framework" type="radio" value="vue">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} Vue</>}\n              </Menu.OptionItem>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup id="checkbox-group">\n              <Menu.ItemGroupLabel htmlFor="checkbox-group">Checkbox Group</Menu.ItemGroupLabel>\n              <Menu.OptionItem name="libraries" type="checkbox" value="zag-js">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} zag-js</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="ark">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} ark</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="panda">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} panda</>}\n              </Menu.OptionItem>\n              <Menu.OptionItem name="libraries" type="checkbox" value="chakra">\n                {({\n                isChecked\n              }) => <>{isChecked ? \'✅\' : \'\'} chakra</>}\n              </Menu.OptionItem>\n            </Menu.ItemGroup>\n          </Menu.Content>\n        </Menu.Positioner>\n      </Menu.Root>\n    </Box>;\n}',...null===(_Options_parameters1=Options.parameters)||void 0===_Options_parameters1||null===(_Options_parameters_docs=_Options_parameters1.docs)||void 0===_Options_parameters_docs?void 0:_Options_parameters_docs.source}}};const __namedExportsOrder=["Overview","Controlled","Group","Separating","Options"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);