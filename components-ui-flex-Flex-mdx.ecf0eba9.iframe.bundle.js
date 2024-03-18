(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[9487,4807],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/flex/Flex.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Flex_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/flex/Flex.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"flex",children:"Flex"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Flex, Spacer } from '@/component/ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Flex"})}),": A Box with display: flex."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Spacer"})}),": Creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Flex unequivocally generates a small Flex that appears with utmost certainty at the top-right corner of its child elements."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__.Overview}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"using-the-spacer",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#template-columns",children:"Using the Spacer"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Flex and Spacer can be combined to create stackable and responsive layouts, as an alternative to Stack."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Flex_stories__WEBPACK_IMPORTED_MODULE_2__.UseSpacer,source:{format:!0,code:"\n      <Flex>\n        <Box p='4' bg='red.400'>\n          Box 1\n        </Box>\n        <Spacer />\n        <Box p='4' bg='green.400'>\n          Box 2\n        </Box>\n      </Flex>\n    "}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/flex/Flex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Overview:()=>Overview,UseSpacer:()=>UseSpacer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_UseSpacer_parameters,_UseSpacer_parameters_docs,_UseSpacer_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/index.ts"));const propertyHorizontal=["flex-start","flex-end","space-between","space-around","space-evenly","center"],propertyVertical=["flex-start","flex-end","center"],propertyWrap=["nowrap","wrap","wrap-reverse"],propertyBasis=["<length>","auto","content","initial","inherit"],__WEBPACK_DEFAULT_EXPORT__={title:"LAYOUT / Flex",component:_components_ui__WEBPACK_IMPORTED_MODULE_2__.kC,argTypes:{justifyContent:{options:propertyHorizontal,mapping:propertyHorizontal,control:{type:"radio",labels:propertyHorizontal},description:"Used to align child elements along the main axis of the container."},alignItems:{options:propertyVertical,mapping:propertyVertical,control:{type:"radio",labels:propertyVertical},description:"Used to align child elements along the main axis of the container."},gap:{control:{type:"number"},description:"Controlling the gutters between grid and flexbox items."},flexWrap:{options:propertyWrap,mapping:propertyWrap,control:{type:"radio",labels:propertyWrap},description:"Typically used within the style attribute to control flex container wrapping behavior."},flexBasis:{options:propertyBasis,mapping:propertyBasis,control:{type:"radio",labels:propertyBasis},description:"Determine the initial size of a flex item within a flex container before any available space is distributed or any shrinking occurs."},flexGrow:{control:{type:"number"},description:"Specify how much a flex item should grow relative to the other flex items within the same flex container when there is available space along the main axis."},flexShrink:{control:{type:"number"},description:"Determines how much a flex item will shrink relative to the other flex items in the flex container when there is not enough space along the main axis."}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.kC,{minWidth:"max-content",alignItems:"center",gap:"2",justifyContent:"space-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.xu,{p:"2",fontWeight:700,children:"Yorkie UI App"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.zx,{colorScheme:"teal",children:"Log in"})]})},UseSpacer={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.kC,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.xu,{p:"10",bg:"tomato"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.LZ,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.xu,{p:"10",bg:"tomato"})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Flex minWidth="max-content" alignItems="center" gap="2" justifyContent="space-between">\n        <Box p="2" fontWeight={700}>\n          Yorkie UI App\n        </Box>\n        <Button colorScheme="teal">Log in</Button>\n      </Flex>;\n  }\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},UseSpacer.parameters={...UseSpacer.parameters,docs:{...null===(_UseSpacer_parameters=UseSpacer.parameters)||void 0===_UseSpacer_parameters?void 0:_UseSpacer_parameters.docs,source:{originalSource:'{\n  render: () => {\n    return <Flex>\n        <Box p="10" bg="tomato" />\n        <Spacer />\n        <Box p="10" bg="tomato" />\n      </Flex>;\n  }\n}',...null===(_UseSpacer_parameters1=UseSpacer.parameters)||void 0===_UseSpacer_parameters1||null===(_UseSpacer_parameters_docs=_UseSpacer_parameters1.docs)||void 0===_UseSpacer_parameters_docs?void 0:_UseSpacer_parameters_docs.source}}};const __namedExportsOrder=["Overview","UseSpacer"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);