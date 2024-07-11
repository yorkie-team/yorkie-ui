(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[8046,4424],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/dialog/Dialog.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/dialog/Dialog.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dialog",children:"Dialog"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Dialog } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A modal window overlays the main content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:'\n      <Dialog.Root>\n        <Dialog.Trigger asChild>\n          <Button>Open Dialog</Button>\n        </Dialog.Trigger>\n        <Dialog.Backdrop />\n        <Dialog.Positioner>\n          <Dialog.Content>\n            <Stack gap="8" p="6">\n              <Stack gap="1">\n                <Dialog.Title>Dialog Title</Dialog.Title>\n                <Dialog.Description>Dialog Description</Dialog.Description>\n              </Stack>\n              <Flex gap="3" direction="row" width="full">\n                <Dialog.CloseTrigger asChild>\n                  <Button variant="outline" width="full">\n                    Cancel\n                  </Button>\n                </Dialog.CloseTrigger>\n                <Button width="full">Confirm</Button>\n              </Flex>\n            </Stack>\n            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n              <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                <Icons.IconClose />\n              </Button>\n            </Dialog.CloseTrigger>\n          </Dialog.Content>\n        </Dialog.Positioner>\n      </Dialog.Root>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"controlled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#dialog-controlled",children:"Controlled"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To implement a controlled Dialog component, you can handle the state of the dialog using the open and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onOpenChange"})," props."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__.Controlled,source:{format:!0,code:'\n      const [isOpen, setIsOpen] = useState(false);\n      return (\n         <div>\n          <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>\n          <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>\n            <Dialog.Backdrop />\n            <Dialog.Positioner>\n              <Dialog.Content>\n                <Stack gap="8" p="6">\n                  <Stack gap="1">\n                    <Dialog.Title>Dialog Title</Dialog.Title>\n                    <Dialog.Description>Dialog Description</Dialog.Description>\n                  </Stack>\n                  <Stack gap="3" direction="row" width="full">\n                    <Dialog.CloseTrigger asChild>\n                      <Button variant="outline" width="full">\n                        Cancel\n                      </Button>\n                    </Dialog.CloseTrigger>\n                    <Button width="full">Confirm</Button>\n                  </Stack>\n                </Stack>\n                <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n                  <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                    <Icons.IconClose />\n                  </Button>\n                </Dialog.CloseTrigger>\n              </Dialog.Content>\n            </Dialog.Positioner>\n          </Dialog.Root>\n        </div>\n      );\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"lazy-mounting",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#lazy-mounting",children:"Lazy Mounting"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Lazy mounting renders dialog content only when the dialog is opened, enhancing performance. Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lazyMount"})," prop on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Dialog.Root"})," to enable this feature. Additionally, employ ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"unmountOnExit"})," to unmount dialog content when it's closed, freeing up resources for subsequent rendering upon reopening."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__.LazyMounting,source:{format:!0,code:'\n      <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log(\'onExitComplete invoked\')}>\n        <Dialog.Trigger>Open Dialog</Dialog.Trigger>\n        <Dialog.Backdrop />\n        <Dialog.Positioner>\n          <Dialog.Content>\n            <Stack gap="8" p="6">\n              <Stack gap="1">\n                <Dialog.Title>Dialog Title</Dialog.Title>\n                <Dialog.Description>Dialog Description</Dialog.Description>\n              </Stack>\n              <Stack gap="3" direction="row" width="full">\n                <Dialog.CloseTrigger asChild>\n                  <Button variant="outline" width="full">\n                    Cancel\n                  </Button>\n                </Dialog.CloseTrigger>\n                <Button width="full">Confirm</Button>\n              </Stack>\n            </Stack>\n            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n              <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                <Icons.IconClose />\n              </Button>\n            </Dialog.CloseTrigger>\n          </Dialog.Content>\n        </Dialog.Positioner>\n      </Dialog.Root>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"using-render-function",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#using-render-function",children:"Using Render Function"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The Dialog component offers the option to use a render function as a child, providing greater control. This approach allows access to dialog states such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"isOpen"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Dialog_stories__WEBPACK_IMPORTED_MODULE_2__.RenderFn,source:{format:!0,code:'\n      <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log(\'onExitComplete\')}>\n        <Dialog.Trigger>Open Dialog</Dialog.Trigger>\n        <Dialog.Backdrop />\n        <Dialog.Positioner>\n          <Dialog.Content>\n            <Stack gap="8" p="6">\n              <Stack gap="1">\n                <Dialog.Title>Dialog Title</Dialog.Title>\n                <Dialog.Description>Dialog Description</Dialog.Description>\n              </Stack>\n              <Stack gap="3" direction="row" width="full">\n                <Dialog.CloseTrigger asChild>\n                  <Button variant="outline" width="full">\n                    Cancel\n                  </Button>\n                </Dialog.CloseTrigger>\n                <Button width="full">Confirm</Button>\n              </Stack>\n            </Stack>\n            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n              <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                <Icons.IconClose />\n              </Button>\n            </Dialog.CloseTrigger>\n          </Dialog.Content>\n        </Dialog.Positioner>\n      </Dialog.Root>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/dialog/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,LazyMounting:()=>LazyMounting,Overview:()=>Overview,RenderFn:()=>RenderFn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ui=__webpack_require__("./src/components/ui/index.ts"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react_dom=__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),environment_context=__webpack_require__("./node_modules/@ark-ui/react/environment/environment-context.mjs");const Portal=props=>{const{children,container,disabled}=props,isServer=(()=>{const[isServer,setServer]=(0,react.useState)(!0);return(0,react.useEffect)((()=>{setServer(!1)}),[]),isServer})(),getRootNode=(0,environment_context.w)();if(isServer||disabled)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children});const doc=getRootNode?.().ownerDocument??document,mountNode=container?.current??doc.body;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:react.Children.map(children,(child=>(0,react_dom.createPortal)(child,mountNode)))})};var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;const Dialog_stories={title:"OVERLAY / Dialog",argTypes:{closeOnEscapeKeyDown:{control:{type:"boolean"},description:"Whether to close the dialog when the escape key is pressed."},closeOnInteractOutside:{control:{type:"boolean"},description:"Change the font size include: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` and `7xl`."},defaultOpen:{control:{type:"boolean"},description:"The initial open state of the dialog."},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},finalFocusEl:{description:"\nElement to receive focus when the dialog is closed. `HTMLElement | (() => MaybeElement)`"},initialFocusEl:{description:"\nElement to receive focus when the dialog is opened. `HTMLElement | (() => MaybeElement)`"},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting."},modal:{control:{type:"boolean"},description:"Whether to prevent pointer interaction outside the element and hide all content below it."},onEscapeKeyDown:{description:"\nCallback to be invoked when the escape key is pressed. `(event: KeyboardEvent) => void`"},onExitComplete:{description:"\nElement to receive focus when the dialog is opened. `() => void`"},onFocusOutside:{description:"\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{description:"\nCallback to be invoked when the dialog is opened or closed. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{description:"\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`"},open:{control:{type:"boolean"},description:"Whether the dialog is open."},present:{control:{type:"boolean"},description:"Whether the node is present (controlled by the user)."},preventScroll:{control:{type:"boolean"},description:"Whether to prevent scrolling behind the dialog when it's opened."},restoreFocus:{control:{type:"boolean"},description:"Whether to restore focus to the element that had focus before the dialog was opened."},role:{description:"\nThe dialog's role. `dialog` | `alertdialog`",default:"dialog"},trapFocus:{control:{type:"boolean"},description:"Whether to trap focus inside the dialog when it's opened."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit.",default:"false"}}};var Overview={render:function render(args){return __jsx(ui.lG.bL,args,__jsx(ui.lG.l9,{asChild:!0},__jsx(ui.$n,null,"Open Dialog")),__jsx(Portal,null,__jsx(ui.lG.zs,null),__jsx(ui.lG.Pf,null,__jsx(ui.lG.UC,null,__jsx(ui.BJ,{gap:"8",p:"6"},__jsx(ui.BJ,{gap:"1"},__jsx(ui.lG.hE,null,"Dialog Title"),__jsx(ui.lG.VY,null,"Dialog Description")),__jsx(ui.BJ,{gap:"3",flexDirection:"row",width:"full"},__jsx(ui.lG.RQ,{asChild:!0},__jsx(ui.$n,{variant:"outline",width:"full"},"Cancel")),__jsx(ui.$n,{width:"full"},"Confirm"))),__jsx(ui.lG.RQ,{asChild:!0,position:"absolute",top:"2",right:"2"},__jsx(ui.$n,{"aria-label":"Close Dialog",variant:"ghost",size:"sm"},__jsx(ui.FI.gzW,null)))))))}},Controlled=function Controlled(){var _useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return __jsx(react.Fragment,null,__jsx(ui.$n,{onClick:function onClick(){return setIsOpen(!0)}},"Open Dialog"),__jsx(ui.lG.bL,{open:isOpen,onOpenChange:function onOpenChange(e){return setIsOpen(e.open)}},__jsx(Portal,null,__jsx(ui.lG.zs,null),__jsx(ui.lG.Pf,null,__jsx(ui.lG.UC,null,__jsx(ui.BJ,{gap:"8",p:"6"},__jsx(ui.BJ,{gap:"1"},__jsx(ui.lG.hE,null,"Dialog Title"),__jsx(ui.lG.VY,null,"Dialog Description")),__jsx(ui.BJ,{gap:"3",direction:"row",width:"full"},__jsx(ui.lG.RQ,{asChild:!0},__jsx(ui.$n,{variant:"outline",width:"full"},"Cancel")),__jsx(ui.$n,{width:"full"},"Confirm"))),__jsx(ui.lG.RQ,{asChild:!0,position:"absolute",top:"2",right:"2"},__jsx(ui.$n,{"aria-label":"Close Dialog",variant:"ghost",size:"sm"},__jsx(ui.FI.gzW,null))))))))},LazyMounting=function LazyMounting(){return __jsx(ui.lG.bL,{lazyMount:!0,unmountOnExit:!0,onExitComplete:function onExitComplete(){return console.log("onExitComplete invoked")}},__jsx(ui.lG.l9,null,"Open Dialog"),__jsx(Portal,null,__jsx(ui.lG.zs,null),__jsx(ui.lG.Pf,null,__jsx(ui.lG.UC,null,__jsx(ui.BJ,{gap:"8",p:"6"},__jsx(ui.BJ,{gap:"1"},__jsx(ui.lG.hE,null,"Dialog Title"),__jsx(ui.lG.VY,null,"Dialog Description")),__jsx(ui.BJ,{gap:"3",direction:"row",width:"full"},__jsx(ui.lG.RQ,{asChild:!0},__jsx(ui.$n,{variant:"outline",width:"full"},"Cancel")),__jsx(ui.$n,{width:"full"},"Confirm"))),__jsx(ui.lG.RQ,{asChild:!0,position:"absolute",top:"2",right:"2"},__jsx(ui.$n,{"aria-label":"Close Dialog",variant:"ghost",size:"sm"},__jsx(ui.FI.gzW,null)))))))},RenderFn=function RenderFn(){return __jsx(ui.lG.bL,{lazyMount:!0,unmountOnExit:!0,onExitComplete:function onExitComplete(){return console.log("onExitComplete")}},__jsx(ui.lG.l9,null,"Open Dialog"),__jsx(Portal,null,__jsx(ui.lG.zs,null),__jsx(ui.lG.Pf,null,__jsx(ui.lG.UC,null,__jsx(ui.BJ,{gap:"8",p:"6"},__jsx(ui.BJ,{gap:"1"},__jsx(ui.lG.hE,null,"Dialog Title"),__jsx(ui.lG.VY,null,"Dialog Description")),__jsx(ui.BJ,{gap:"3",direction:"row",width:"full"},__jsx(ui.lG.RQ,{asChild:!0},__jsx(ui.$n,{variant:"outline",width:"full"},"Cancel")),__jsx(ui.$n,{width:"full"},"Confirm"))),__jsx(ui.lG.RQ,{asChild:!0,position:"absolute",top:"2",right:"2"},__jsx(ui.$n,{"aria-label":"Close Dialog",variant:"ghost",size:"sm"},__jsx(ui.FI.gzW,null)))))))};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Dialog.Root {...args}>\n        <Dialog.Trigger asChild>\n          <Button>Open Dialog</Button>\n        </Dialog.Trigger>\n        <Portal>\n          <Dialog.Backdrop />\n          <Dialog.Positioner>\n            <Dialog.Content>\n              <Stack gap="8" p="6">\n                <Stack gap="1">\n                  <Dialog.Title>Dialog Title</Dialog.Title>\n                  <Dialog.Description>Dialog Description</Dialog.Description>\n                </Stack>\n                <Stack gap="3" flexDirection="row" width="full">\n                  <Dialog.CloseTrigger asChild>\n                    <Button variant="outline" width="full">\n                      Cancel\n                    </Button>\n                  </Dialog.CloseTrigger>\n                  <Button width="full">Confirm</Button>\n                </Stack>\n              </Stack>\n              <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n                <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                  <Icons.IconClose />\n                </Button>\n              </Dialog.CloseTrigger>\n            </Dialog.Content>\n          </Dialog.Positioner>\n        </Portal>\n      </Dialog.Root>;\n  }\n}',...Overview.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <>\n      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>\n      <Dialog.Root open={isOpen} onOpenChange={e => setIsOpen(e.open)}>\n        <Portal>\n          <Dialog.Backdrop />\n          <Dialog.Positioner>\n            <Dialog.Content>\n              <Stack gap="8" p="6">\n                <Stack gap="1">\n                  <Dialog.Title>Dialog Title</Dialog.Title>\n                  <Dialog.Description>Dialog Description</Dialog.Description>\n                </Stack>\n                <Stack gap="3" direction="row" width="full">\n                  <Dialog.CloseTrigger asChild>\n                    <Button variant="outline" width="full">\n                      Cancel\n                    </Button>\n                  </Dialog.CloseTrigger>\n                  <Button width="full">Confirm</Button>\n                </Stack>\n              </Stack>\n              <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n                <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                  <Icons.IconClose />\n                </Button>\n              </Dialog.CloseTrigger>\n            </Dialog.Content>\n          </Dialog.Positioner>\n        </Portal>\n      </Dialog.Root>\n    </>;\n}',...Controlled.parameters?.docs?.source}}},LazyMounting.parameters={...LazyMounting.parameters,docs:{...LazyMounting.parameters?.docs,source:{originalSource:'() => {\n  return <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log(\'onExitComplete invoked\')}>\n      <Dialog.Trigger>Open Dialog</Dialog.Trigger>\n      <Portal>\n        <Dialog.Backdrop />\n        <Dialog.Positioner>\n          <Dialog.Content>\n            <Stack gap="8" p="6">\n              <Stack gap="1">\n                <Dialog.Title>Dialog Title</Dialog.Title>\n                <Dialog.Description>Dialog Description</Dialog.Description>\n              </Stack>\n              <Stack gap="3" direction="row" width="full">\n                <Dialog.CloseTrigger asChild>\n                  <Button variant="outline" width="full">\n                    Cancel\n                  </Button>\n                </Dialog.CloseTrigger>\n                <Button width="full">Confirm</Button>\n              </Stack>\n            </Stack>\n            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n              <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                <Icons.IconClose />\n              </Button>\n            </Dialog.CloseTrigger>\n          </Dialog.Content>\n        </Dialog.Positioner>\n      </Portal>\n    </Dialog.Root>;\n}',...LazyMounting.parameters?.docs?.source}}},RenderFn.parameters={...RenderFn.parameters,docs:{...RenderFn.parameters?.docs,source:{originalSource:'() => {\n  return <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log(\'onExitComplete\')}>\n      <Dialog.Trigger>Open Dialog</Dialog.Trigger>\n      <Portal>\n        <Dialog.Backdrop />\n        <Dialog.Positioner>\n          <Dialog.Content>\n            <Stack gap="8" p="6">\n              <Stack gap="1">\n                <Dialog.Title>Dialog Title</Dialog.Title>\n                <Dialog.Description>Dialog Description</Dialog.Description>\n              </Stack>\n              <Stack gap="3" direction="row" width="full">\n                <Dialog.CloseTrigger asChild>\n                  <Button variant="outline" width="full">\n                    Cancel\n                  </Button>\n                </Dialog.CloseTrigger>\n                <Button width="full">Confirm</Button>\n              </Stack>\n            </Stack>\n            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">\n              <Button aria-label="Close Dialog" variant="ghost" size="sm">\n                <Icons.IconClose />\n              </Button>\n            </Dialog.CloseTrigger>\n          </Dialog.Content>\n        </Dialog.Positioner>\n      </Portal>\n    </Dialog.Root>;\n}',...RenderFn.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Controlled","LazyMounting","RenderFn"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);