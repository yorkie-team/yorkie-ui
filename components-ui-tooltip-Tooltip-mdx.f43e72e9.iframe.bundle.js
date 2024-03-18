(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[6271,2260],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/tooltip/Tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/tooltip/Tooltip.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Tooltip } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Providing information through a label that appears when the user hovers or focuses on an element can be a helpful way to enhance the user experience. Default open delay 3s."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:"\n      <Tooltip.Root closeDelay={3}>\n        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n        <Tooltip.Positioner>\n          <Tooltip.Content>I am a Tooltip!</Tooltip.Content>\n        </Tooltip.Positioner>\n      </Tooltip.Root>\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"controlled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#tooltip-Controlled",children:"Controlled"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In order to create a controlled Tooltip component, it is essential to manage the state of whether the tooltip is open by utilizing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"open"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Controlled,source:{format:!0,code:"\n      const [isOpen, setIsOpen] = useState(false);\n      return (\n        <div>\n          <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>\n          <Tooltip.Root open={isOpen}>\n            <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n            <Tooltip.Positioner>\n              <Tooltip.Content>I am a tooltip!</Tooltip.Content>\n            </Tooltip.Positioner>\n          </Tooltip.Root>\n        </div>\n      );\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"arrow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#tooltip-arrow",children:"Arrow"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use Tooltip.Arrow and Tooltip.ArrowTip components to add an arrow to your tooltip trigger."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Arrow,source:{format:!0,code:"\n      <Tooltip.Root>\n        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n        <Tooltip.Positioner>\n          <Tooltip.Content>\n            <Tooltip.Arrow>\n              <Tooltip.ArrowTip />\n            </Tooltip.Arrow>\n            I am a tooltip!\n          </Tooltip.Content>\n        </Tooltip.Positioner>\n      </Tooltip.Root>\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"delay-timings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#tooltip-delay-timings",children:"Delay Timings"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use closeDelay and openDelay to configure the Tooltip delay timings."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.TimeDelays,source:{format:!0,code:"\n      <Tooltip.Root closeDelay={300} openDelay={100}>\n        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n        <Tooltip.Positioner>\n          <Tooltip.Content>I am a tooltip!</Tooltip.Content>\n        </Tooltip.Positioner>\n      </Tooltip.Root>\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"positioning",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#tooltip-positioning",children:"Positioning"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Take charge of your Tooltip's position. Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"positioning"})," prop to dictate its location relative to the trigger."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_2__.Positioning,source:{format:!0,code:"\n      <Tooltip.Root\n        positioning={{ placement: 'left-start', gutter: 16, offset: { mainAxis: 12, crossAxis: 12 } }}\n      >\n        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n        <Tooltip.Positioner>\n          <Tooltip.Content>I am a tooltip!</Tooltip.Content>\n        </Tooltip.Positioner>\n      </Tooltip.Root>\n    "}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Arrow:()=>Arrow,Controlled:()=>Controlled,Overview:()=>Overview,Positioning:()=>Positioning,TimeDelays:()=>TimeDelays,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Controlled_parameters,_Controlled_parameters_docs,_Controlled_parameters1,_Arrow_parameters,_Arrow_parameters_docs,_Arrow_parameters1,_TimeDelays_parameters,_TimeDelays_parameters_docs,_TimeDelays_parameters1,_Positioning_parameters,_Positioning_parameters_docs,_Positioning_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"OVERLAY / Tooltip",argTypes:{openDelay:{control:{type:"number"},description:"The open delay of the tooltip.",default:3},closeDelay:{control:{type:"number"},description:"The close delay of the tooltip."},closeOnPointerDown:{control:{type:"boolean"},description:"Whether to close the tooltip on pointerdown."},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting.",default:!1},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit.",default:!1},closeOnEsc:{control:{type:"boolean"},description:"Whether to close the tooltip when the Escape key is pressed."},interactive:{control:{type:"boolean"},description:"Whether the tooltips content is interactive. In this mode, the tooltip will remain open when user hovers over the content."},onOpenChange:{control:{type:"boolean"},description:"\nFunction called when the tooltip is opened `(details: OpenChangeDetails) => void`."},positioning:{description:"\nThe user provided options used to position the popover content `PositioningOptions`.",default:"PositioningOptions"},disabled:{control:{type:"boolean"},description:"Whether the tooltip is disabled."},open:{control:{type:"boolean"},description:"Whether the tooltip is open."}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.fC,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.xz,{children:"Hover Me, waiting 3s"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.sX,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.VY,{children:"I am a Tooltip!"})})]})},Controlled=()=>{const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>setIsOpen(!isOpen),children:"Toggle "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.xu,{display:"inline",ml:"20",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.fC,{open:isOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.xz,{children:"Tooltip"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.sX,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.VY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.Eh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.do,{})}),"I am a tooltip!"]})})]})})]})},Arrow=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.fC,{openDelay:300,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.xz,{children:"Hover Me"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.sX,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.VY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.Eh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.do,{})}),"I am a tooltip!"]})})]}),TimeDelays=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.fC,{closeDelay:600,openDelay:300,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.xz,{children:"Hover Me"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.sX,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.VY,{children:"I am a tooltip!"})})]}),Positioning=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.fC,{openDelay:300,positioning:{placement:"left-start",gutter:16,offset:{mainAxis:12,crossAxis:12}},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.xz,{children:"Hover Me"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.sX,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.u.VY,{children:"I am a tooltip!"})})]});Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: () => {\n    return <Tooltip.Root>\n        <Tooltip.Trigger>Hover Me, waiting 3s</Tooltip.Trigger>\n        <Tooltip.Positioner>\n          <Tooltip.Content>I am a Tooltip!</Tooltip.Content>\n        </Tooltip.Positioner>\n      </Tooltip.Root>;\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(_Controlled_parameters=Controlled.parameters)||void 0===_Controlled_parameters?void 0:_Controlled_parameters.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <>\n      <Button onClick={() => setIsOpen(!isOpen)}>Toggle </Button>\n      <Box display="inline" ml="20">\n        <Tooltip.Root open={isOpen}>\n          <Tooltip.Trigger>Tooltip</Tooltip.Trigger>\n          <Tooltip.Positioner>\n            <Tooltip.Content>\n              <Tooltip.Arrow>\n                <Tooltip.ArrowTip />\n              </Tooltip.Arrow>\n              I am a tooltip!\n            </Tooltip.Content>\n          </Tooltip.Positioner>\n        </Tooltip.Root>\n      </Box>\n    </>;\n}',...null===(_Controlled_parameters1=Controlled.parameters)||void 0===_Controlled_parameters1||null===(_Controlled_parameters_docs=_Controlled_parameters1.docs)||void 0===_Controlled_parameters_docs?void 0:_Controlled_parameters_docs.source}}},Arrow.parameters={...Arrow.parameters,docs:{...null===(_Arrow_parameters=Arrow.parameters)||void 0===_Arrow_parameters?void 0:_Arrow_parameters.docs,source:{originalSource:"() => {\n  return <Tooltip.Root openDelay={300}>\n      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n      <Tooltip.Positioner>\n        <Tooltip.Content>\n          <Tooltip.Arrow>\n            <Tooltip.ArrowTip />\n          </Tooltip.Arrow>\n          I am a tooltip!\n        </Tooltip.Content>\n      </Tooltip.Positioner>\n    </Tooltip.Root>;\n}",...null===(_Arrow_parameters1=Arrow.parameters)||void 0===_Arrow_parameters1||null===(_Arrow_parameters_docs=_Arrow_parameters1.docs)||void 0===_Arrow_parameters_docs?void 0:_Arrow_parameters_docs.source}}},TimeDelays.parameters={...TimeDelays.parameters,docs:{...null===(_TimeDelays_parameters=TimeDelays.parameters)||void 0===_TimeDelays_parameters?void 0:_TimeDelays_parameters.docs,source:{originalSource:"() => {\n  return <Tooltip.Root closeDelay={600} openDelay={300}>\n      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n      <Tooltip.Positioner>\n        <Tooltip.Content>I am a tooltip!</Tooltip.Content>\n      </Tooltip.Positioner>\n    </Tooltip.Root>;\n}",...null===(_TimeDelays_parameters1=TimeDelays.parameters)||void 0===_TimeDelays_parameters1||null===(_TimeDelays_parameters_docs=_TimeDelays_parameters1.docs)||void 0===_TimeDelays_parameters_docs?void 0:_TimeDelays_parameters_docs.source}}},Positioning.parameters={...Positioning.parameters,docs:{...null===(_Positioning_parameters=Positioning.parameters)||void 0===_Positioning_parameters?void 0:_Positioning_parameters.docs,source:{originalSource:"() => {\n  return <Tooltip.Root openDelay={300} positioning={{\n    placement: 'left-start',\n    gutter: 16,\n    offset: {\n      mainAxis: 12,\n      crossAxis: 12\n    }\n  }}>\n      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>\n      <Tooltip.Positioner>\n        <Tooltip.Content>I am a tooltip!</Tooltip.Content>\n      </Tooltip.Positioner>\n    </Tooltip.Root>;\n}",...null===(_Positioning_parameters1=Positioning.parameters)||void 0===_Positioning_parameters1||null===(_Positioning_parameters_docs=_Positioning_parameters1.docs)||void 0===_Positioning_parameters_docs?void 0:_Positioning_parameters_docs.source}}};const __namedExportsOrder=["Overview","Controlled","Arrow","TimeDelays","Positioning"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);