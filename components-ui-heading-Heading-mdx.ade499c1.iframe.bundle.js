(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[2568,8134],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/heading/Heading.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Heading_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/heading/Heading.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"heading",children:"Heading"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Heading_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Heading } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Heading_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:'\n      <Heading as="h1">\n        This is a <strong>H1</strong> element.\n      </Heading>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"font-size",children:"Font Size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"textStyle"})," for text size. It makes line height and spacing smaller as text size grows and also ensures text size is even for better layout."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Heading_stories__WEBPACK_IMPORTED_MODULE_2__.FontSize,source:{format:!0,code:'\n     <>\n        <Heading size="xs">Ag</Heading>\n        <Heading size="sm">Ag</Heading>\n        <Heading size="md">Ag</Heading>\n        <Heading size="lg">Ag</Heading>\n        <Heading size="xl">Ag</Heading>\n        <Heading size="2xl">Ag</Heading>\n        <Heading size="3xl">Ag</Heading>\n        <Heading size="4xl">Ag</Heading>\n        <Heading size="5xl">Ag</Heading>\n        <Heading size="6xl">Ag</Heading>\n        <Heading size="7xl">Ag</Heading>\n    </>\n    '}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"font-weight",children:"Font Weight"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To adjust the weight of text, use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fontWeight"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Heading_stories__WEBPACK_IMPORTED_MODULE_2__.FontWeight,source:{format:!0,code:'\n     <>\n        <Heading fontWeight="light">Sphinx of black quartz, judge my vow.</Heading>\n        <Heading fontWeight="normal">Sphinx of black quartz, judge my vow.</Heading>\n        <Heading fontWeight="medium">Sphinx of black quartz, judge my vow.</Heading>\n        <Heading fontWeight="semibold">Sphinx of black quartz, judge my vow.</Heading>\n        <Heading fontWeight="bold">Sphinx of black quartz, judge my vow.</Heading>\n    </>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/heading/Heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FontSize:()=>FontSize,FontWeight:()=>FontWeight,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_FontSize_parameters,_FontSize_parameters_docs,_FontSize_parameters1,_FontWeight_parameters,_FontWeight_parameters_docs,_FontWeight_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/index.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"TYPOGRAPHY / Heading",argTypes:{as:{control:{type:"text"},description:"Changes the semantic meaning without affecting the visual style.."},size:{control:{type:"text"},description:"Change the font size."},fontWeight:{control:{type:"text"},description:"Change the font weight."}}},Overview=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{as:"h1",children:["This is a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"H1"})," element."]})}),FontSize=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"xs",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"sm",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"md",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"lg",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"2xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"3xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"4xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"5xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"6xl",children:"Ag"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{size:"7xl",children:"Ag"})]}),FontWeight=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{fontWeight:"light",children:"Sphinx of black quartz, judge my vow."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{fontWeight:"normal",children:"Sphinx of black quartz, judge my vow."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{fontWeight:"medium",children:"Sphinx of black quartz, judge my vow."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{fontWeight:"semibold",children:"Sphinx of black quartz, judge my vow."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.X6,{fontWeight:"bold",children:"Sphinx of black quartz, judge my vow."})]});Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'() => {\n  return <>\n      <Heading as="h1">\n        This is a <strong>H1</strong> element.\n      </Heading>\n    </>;\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},FontSize.parameters={...FontSize.parameters,docs:{...null===(_FontSize_parameters=FontSize.parameters)||void 0===_FontSize_parameters?void 0:_FontSize_parameters.docs,source:{originalSource:'() => {\n  return <>\n      <Heading size="xs">Ag</Heading>\n      <Heading size="sm">Ag</Heading>\n      <Heading size="md">Ag</Heading>\n      <Heading size="lg">Ag</Heading>\n      <Heading size="xl">Ag</Heading>\n      <Heading size="2xl">Ag</Heading>\n      <Heading size="3xl">Ag</Heading>\n      <Heading size="4xl">Ag</Heading>\n      <Heading size="5xl">Ag</Heading>\n      <Heading size="6xl">Ag</Heading>\n      <Heading size="7xl">Ag</Heading>\n    </>;\n}',...null===(_FontSize_parameters1=FontSize.parameters)||void 0===_FontSize_parameters1||null===(_FontSize_parameters_docs=_FontSize_parameters1.docs)||void 0===_FontSize_parameters_docs?void 0:_FontSize_parameters_docs.source}}},FontWeight.parameters={...FontWeight.parameters,docs:{...null===(_FontWeight_parameters=FontWeight.parameters)||void 0===_FontWeight_parameters?void 0:_FontWeight_parameters.docs,source:{originalSource:'() => {\n  return <>\n      <Heading fontWeight="light">Sphinx of black quartz, judge my vow.</Heading>\n      <Heading fontWeight="normal">Sphinx of black quartz, judge my vow.</Heading>\n      <Heading fontWeight="medium">Sphinx of black quartz, judge my vow.</Heading>\n      <Heading fontWeight="semibold">Sphinx of black quartz, judge my vow.</Heading>\n      <Heading fontWeight="bold">Sphinx of black quartz, judge my vow.</Heading>\n    </>;\n}',...null===(_FontWeight_parameters1=FontWeight.parameters)||void 0===_FontWeight_parameters1||null===(_FontWeight_parameters_docs=_FontWeight_parameters1.docs)||void 0===_FontWeight_parameters_docs?void 0:_FontWeight_parameters_docs.source}}};const __namedExportsOrder=["Overview","FontSize","FontWeight"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);