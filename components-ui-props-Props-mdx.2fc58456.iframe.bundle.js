(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[7454,3637],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/props/Props.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Props_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/props/Props.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"props",children:"Props"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Props_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#spacing-token",children:"Spacing Token"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#short-props",children:"Short Props"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"spacing-tokens",children:"Spacing Tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Using a spacing system creates a better user experience and enables responsive design and customizable UI density, improving product accessibility and quality."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Apply use to value props: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mt"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"p"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mb"}),", etc...."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"You can use negative numbers."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Box mt="-4" pd="10">\n  Using Tokens\n</Box>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"0"}),": 0rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"1"}),": 0.25rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"2"}),": 0.5rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"3"}),": 0.75rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"4"}),": 1rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"5"}),": 1.25rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"6"}),": 1.5rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"7"}),": 1.75rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"8"}),": 2rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"9"}),": 2.25rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"10"}),": 2.5rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"11"}),": 2.75rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"12"}),": 3rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"14"}),": 3.5rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"16"}),": 4rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"20"}),": 5rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"24"}),": 6rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"28"}),": 7rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"32"}),": 8rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"36"}),": 9rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"40"}),": 10rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"44"}),": 11rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"48"}),": 12rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"52"}),": 13rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"56"}),": 14rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"60"}),": 15rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"64"}),": 16rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"72"}),": 18rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"80"}),": 20rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"96"}),": 24rem;"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Provides a shorter way to pass styles through props (such as using bg instead of backgroundColor)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Props_stories__WEBPACK_IMPORTED_MODULE_2__.ShortProps,source:{format:!0,code:'\n        <Box bg="orange.1"> Hello Yorkie </Box>\n    '}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/props/Props.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ShortProps:()=>ShortProps,SpacingToken:()=>SpacingToken,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Props_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ui=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./src/components/ui/index.ts"));const PropertyTypes={pos:"position",insetX:"insetInline",insetY:"insetBlock",insetEnd:"insetInlineEnd",end:"insetInlineEnd",insetStart:"insetInlineStart",start:"insetInlineStart",flexDir:"flexDirection",p:"padding",pl:"paddingLeft",pr:"paddingRight",pt:"paddingTop",pb:"paddingBottom",py:"paddingBlock",paddingY:"paddingBlock",paddingX:"paddingInline",px:"paddingInline",pe:"paddingInlineEnd",paddingEnd:"paddingInlineEnd",ps:"paddingInlineStart",paddingStart:"paddingInlineStart",ml:"marginLeft",mr:"marginRight",mt:"marginTop",mb:"marginBottom",m:"margin",my:"marginBlock",marginY:"marginBlock",mx:"marginInline",marginX:"marginInline",me:"marginInlineEnd",marginEnd:"marginInlineEnd",ms:"marginInlineStart",marginStart:"marginInlineStart",ringWidth:"outlineWidth",ringColor:"outlineColor",ring:"outline",ringOffset:"outlineOffset",w:"width",minW:"minWidth",maxW:"maxWidth",h:"height",minH:"minHeight",maxH:"maxHeight",textShadowColor:"textShadowColor",bgPosition:"backgroundPosition",bgPositionX:"backgroundPositionX",bgPositionY:"backgroundPositionY",bgAttachment:"backgroundAttachment",bgClip:"backgroundClip",bg:"background",bgColor:"backgroundColor",bgOrigin:"backgroundOrigin",bgImage:"backgroundImage",bgRepeat:"backgroundRepeat",bgBlendMode:"backgroundBlendMode",bgSize:"backgroundSize",bgGradient:"backgroundGradient",rounded:"borderRadius",roundedTopLeft:"borderTopLeftRadius",roundedTopRight:"borderTopRightRadius",roundedBottomRight:"borderBottomRightRadius",roundedBottomLeft:"borderBottomLeftRadius",roundedTop:"borderTopRadius",roundedRight:"borderRightRadius",roundedBottom:"borderBottomRadius",roundedLeft:"borderLeftRadius",roundedStartStart:"borderStartStartRadius",roundedStartEnd:"borderStartEndRadius",roundedStart:"borderStartRadius",roundedEndStart:"borderEndStartRadius",roundedEndEnd:"borderEndEndRadius",roundedEnd:"borderEndRadius",borderX:"borderInline",borderXWidth:"borderInlineWidth",borderXColor:"borderInlineColor",borderY:"borderBlock",borderYWidth:"borderBlockWidth",borderYColor:"borderBlockColor",borderStart:"borderInlineStart",borderStartWidth:"borderInlineStartWidth",borderStartColor:"borderInlineStartColor",borderEnd:"borderInlineEnd",borderEndWidth:"borderInlineEndWidth",borderEndColor:"borderInlineEndColor",shadow:"boxShadow",shadowColor:"boxShadowColor",x:"translateX",y:"translateY",scrollMarginY:"scrollMarginBlock",scrollMarginX:"scrollMarginInline",scrollPaddingY:"scrollPaddingBlock",scrollPaddingX:"scrollPaddingInline"};var _SpacingToken_parameters,_SpacingToken_parameters_docs,_SpacingToken_parameters1,_ShortProps_parameters,_ShortProps_parameters_docs,_ShortProps_parameters1;const Props_stories={title:"CONFIG / Props",argTypes:{}},SpacingToken={render:()=>{const shortProps=Object.keys(PropertyTypes);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:shortProps.map((value=>(0,jsx_runtime.jsxs)(ui.rj,{borderBottom:1,borderBottomColor:"border.default",borderStyle:"solid",columns:2,mt:"4",p:"4",children:[(0,jsx_runtime.jsxs)("strong",{children:[value,": "]})," ",(0,jsx_runtime.jsx)("span",{children:PropertyTypes[value]})]},value+"props")))})}},ShortProps={render:()=>{const shortProps=Object.keys(PropertyTypes);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:shortProps.map((value=>(0,jsx_runtime.jsxs)(ui.rj,{borderBottom:1,borderBottomColor:"border.default",borderStyle:"solid",columns:2,mt:"-4",p:"4",children:[(0,jsx_runtime.jsxs)("strong",{children:[value,": "]})," ",(0,jsx_runtime.jsx)("span",{children:PropertyTypes[value]})]},value+"props")))})}};SpacingToken.parameters={...SpacingToken.parameters,docs:{...null===(_SpacingToken_parameters=SpacingToken.parameters)||void 0===_SpacingToken_parameters?void 0:_SpacingToken_parameters.docs,source:{originalSource:"{\n  render: () => {\n    const shortProps = Object.keys(PropertyTypes);\n    return <>\n        {shortProps.map((value: string) => {\n        return <Grid borderBottom={1} borderBottomColor={'border.default'} borderStyle={'solid'} columns={2} mt=\"4\" p=\"4\" key={value + 'props'}>\n              <strong>{value}: </strong> <span>{PropertyTypes[value]}</span>\n            </Grid>;\n      })}\n      </>;\n  }\n}",...null===(_SpacingToken_parameters1=SpacingToken.parameters)||void 0===_SpacingToken_parameters1||null===(_SpacingToken_parameters_docs=_SpacingToken_parameters1.docs)||void 0===_SpacingToken_parameters_docs?void 0:_SpacingToken_parameters_docs.source}}},ShortProps.parameters={...ShortProps.parameters,docs:{...null===(_ShortProps_parameters=ShortProps.parameters)||void 0===_ShortProps_parameters?void 0:_ShortProps_parameters.docs,source:{originalSource:"{\n  render: () => {\n    const shortProps = Object.keys(PropertyTypes);\n    return <>\n        {shortProps.map((value: string) => {\n        return <Grid borderBottom={1} borderBottomColor={'border.default'} borderStyle={'solid'} columns={2} mt=\"-4\" p=\"4\" key={value + 'props'}>\n              <strong>{value}: </strong> <span>{PropertyTypes[value]}</span>\n            </Grid>;\n      })}\n      </>;\n  }\n}",...null===(_ShortProps_parameters1=ShortProps.parameters)||void 0===_ShortProps_parameters1||null===(_ShortProps_parameters_docs=_ShortProps_parameters1.docs)||void 0===_ShortProps_parameters_docs?void 0:_ShortProps_parameters_docs.source}}};const __namedExportsOrder=["SpacingToken","ShortProps"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);