(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[7296,3522],{"./node_modules/@ark-ui/react/avatar/avatar-context.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>useAvatarContext,z:()=>AvatarProvider});var _create_context_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ark-ui/react/create-context.mjs");const[AvatarProvider,useAvatarContext]=(0,_create_context_mjs__WEBPACK_IMPORTED_MODULE_0__.q)({name:"AvatarContext",hookName:"useAvatarContext",providerName:"<AvatarProvider />"})},"./node_modules/@ark-ui/react/avatar/avatar-fallback.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>AvatarFallback});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_zag_js_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@zag-js/core/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_factory_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ark-ui/react/factory.mjs"),_avatar_context_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-context.mjs");const AvatarFallback=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{const api=(0,_avatar_context_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(),mergedProps=(0,_zag_js_react__WEBPACK_IMPORTED_MODULE_3__.v6)(api.fallbackProps,props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_factory_mjs__WEBPACK_IMPORTED_MODULE_4__.X.span,{...mergedProps,ref})}));AvatarFallback.displayName="AvatarFallback"},"./node_modules/@ark-ui/react/avatar/avatar-image.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>AvatarImage});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_zag_js_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@zag-js/core/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_factory_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ark-ui/react/factory.mjs"),_avatar_context_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-context.mjs");const AvatarImage=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>{const api=(0,_avatar_context_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(),mergedProps=(0,_zag_js_react__WEBPACK_IMPORTED_MODULE_3__.v6)(api.imageProps,props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_factory_mjs__WEBPACK_IMPORTED_MODULE_4__.X.img,{...mergedProps,ref})}));AvatarImage.displayName="AvatarImage"},"./node_modules/@ark-ui/react/avatar/avatar-root.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>AvatarRoot});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@zag-js/core/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),create_split_props=__webpack_require__("./node_modules/@ark-ui/react/create-split-props.mjs"),factory=__webpack_require__("./node_modules/@ark-ui/react/factory.mjs"),avatar_context=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-context.mjs"),anatomy_dist=__webpack_require__("./node_modules/@zag-js/anatomy/dist/index.mjs"),dom_query_dist=__webpack_require__("./node_modules/@zag-js/dom-query/dist/index.mjs"),mutation_observer_dist=__webpack_require__("./node_modules/@zag-js/mutation-observer/dist/index.mjs"),utils_dist=__webpack_require__("./node_modules/@zag-js/utils/dist/index.mjs"),types_dist=__webpack_require__("./node_modules/@zag-js/types/dist/index.mjs"),parts=(0,anatomy_dist.y)("avatar").parts("root","image","fallback").build(),dom=(0,dom_query_dist.Ds)({getRootId:ctx=>`avatar:${ctx.id}`,getImageId:ctx=>`avatar:${ctx.id}:image`,getFallbackId:ctx=>`avatar:${ctx.id}:fallback`,getRootEl:ctx=>dom.getById(ctx,dom.getRootId(ctx)),getImageEl:ctx=>dom.getById(ctx,dom.getImageId(ctx))});var props=(0,types_dist.x)()(["dir","id","onLoadingStatusChange","getRootNode"]),react_dist=((0,utils_dist.PM)(props),__webpack_require__("./node_modules/@zag-js/react/dist/index.mjs")),environment_context=__webpack_require__("./node_modules/@ark-ui/react/environment/environment-context.mjs"),use_event=__webpack_require__("./node_modules/@ark-ui/react/use-event.mjs");const useAvatar=(props={})=>{const initialContext={id:(0,react.useId)(),getRootNode:(0,environment_context.w)(),...props},context={...initialContext,onLoadingStatusChange:(0,use_event._)(props.onLoadingStatusChange)},[state,send]=(0,react_dist.zl)(function machine(userContext){const ctx=(0,utils_dist.oE)(userContext);return(0,dist.Op)({id:"avatar",initial:"loading",activities:["trackImageRemoval"],context:ctx,on:{"SRC.CHANGE":{target:"loading"},"IMG.UNMOUNT":{target:"error"}},states:{loading:{activities:["trackSrcChange"],entry:["checkImgStatus"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]},"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}},error:{activities:["trackSrcChange"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]}}},loaded:{activities:["trackSrcChange"],on:{"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}}}},{activities:{trackSrcChange(ctx2,_evt,{send}){const img=dom.getImageEl(ctx2);return(0,mutation_observer_dist.m)(img,["src","srcset"],(()=>{send({type:"SRC.CHANGE"})}))},trackImageRemoval(ctx2,_evt,{send}){const rootEl=dom.getRootEl(ctx2);return(0,mutation_observer_dist.G)(rootEl,(records=>{Array.from(records[0].removedNodes).find((node=>node.matches("[data-scope=avatar][data-part=image]")))&&send({type:"IMG.UNMOUNT"})}))}},actions:{invokeOnLoad(ctx2){ctx2.onLoadingStatusChange?.({status:"loaded"})},invokeOnError(ctx2){ctx2.onLoadingStatusChange?.({status:"error"})},checkImgStatus(ctx2,_evt,{send}){const img=dom.getImageEl(ctx2);img?.complete&&send({type:img.currentSrc?"IMG.LOADED":"IMG.ERROR",src:"ssr"})}}})}(initialContext),{context});return function connect(state,send,normalize){const isLoaded=state.matches("loaded"),showFallback=!isLoaded;return{isLoaded,showFallback,setSrc(src){send({type:"SRC.SET",src})},setLoaded(){send({type:"IMG.LOADED",src:"api"})},setError(){send({type:"IMG.ERROR",src:"api"})},rootProps:normalize.element({...parts.root.attrs,dir:state.context.dir,id:dom.getRootId(state.context),style:{display:"grid",gridTemplateRows:"1fr 1fr",overflow:"hidden"}}),imageProps:normalize.img({...parts.image.attrs,dir:state.context.dir,id:dom.getImageId(state.context),"data-state":isLoaded?"visible":"hidden",onLoad(){send({type:"IMG.LOADED",src:"element"})},onError(){send({type:"IMG.ERROR",src:"element"})},style:{gridArea:"1 / 1 / 2 / 2",visibility:isLoaded?void 0:"hidden"}}),fallbackProps:normalize.element({...parts.fallback.attrs,dir:state.context.dir,id:dom.getFallbackId(state.context),hidden:!showFallback,"data-state":isLoaded?"hidden":"visible",style:{gridArea:"1 / 1 / 2 / 2"}})}}(state,send,react_dist._B)},AvatarRoot=(0,react.forwardRef)(((props,ref)=>{const[useAvatarProps,localProps]=(0,create_split_props.P)()(props,["dir","getRootNode","id","onLoadingStatusChange"]),api=useAvatar(useAvatarProps),mergedProps=(0,dist.v6)(api.rootProps,localProps);return(0,jsx_runtime.jsx)(avatar_context.z,{value:api,children:(0,jsx_runtime.jsx)(factory.X.div,{...mergedProps,ref})})}));AvatarRoot.displayName="AvatarRoot"},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/avatar/Avatar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/avatar/Avatar.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"avatar",children:"Avatar"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Avatar } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["An ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Avatar"})," is a visual representation of a user, usually in the form of a profile picture, initials, or icon that represents the user.\nIt serves as a visual identifier for users, making it easier to distinguish between different individuals in the digital environment."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:'<Avatar src="https://i.pravatar.cc/300" name="John Doe" />'}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.H2,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"sizes",children:"Sizes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The default value for the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," prop is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"md"}),". You can use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," prop to modify the avatar's dimensions, with six available options: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xs"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sm"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"md"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lg"}),", xl, and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"2xl"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarXs,source:{format:!0,code:'\n      <Avatar size="xs" src="https://i.pravatar.cc/300" name="John Doe"/>\n    '}})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"src",children:"Src"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To import the avatar image, you can use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"src"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If not provided, the avatar will be displayed by the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"name"})," prop if provided or the user icon by default."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.AvatarMd,source:{format:!0,code:'<Avatar src="https://i.pravatar.cc/300" name="John Doe" />'}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"name",children:"Name"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By utilizing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"name"})," prop, you can import the name for the avatar. It will be displayed if the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"src"})," prop is omitted."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.WithNameOnly,source:{format:!0,code:'<Avatar name="John Doe" />'}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-no-user-data",children:"With No User Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"src"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"name"})," props are omitted, the avatar will display with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UserIcon"})," by default."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{of:_Avatar_stories__WEBPACK_IMPORTED_MODULE_2__.WithNoUserData,source:{format:!0,code:"<Avatar />"}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar2xl:()=>Avatar2xl,AvatarLg:()=>AvatarLg,AvatarMd:()=>AvatarMd,AvatarSm:()=>AvatarSm,AvatarXl:()=>AvatarXl,AvatarXs:()=>AvatarXs,Overview:()=>Overview,WithNameOnly:()=>WithNameOnly,WithNoUserData:()=>WithNoUserData,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_AvatarXs_parameters,_AvatarXs_parameters_docs,_AvatarXs_parameters1,_AvatarSm_parameters,_AvatarSm_parameters_docs,_AvatarSm_parameters1,_AvatarMd_parameters,_AvatarMd_parameters_docs,_AvatarMd_parameters1,_AvatarLg_parameters,_AvatarLg_parameters_docs,_AvatarLg_parameters1,_AvatarXl_parameters,_AvatarXl_parameters_docs,_AvatarXl_parameters1,_Avatar2xl_parameters,_Avatar2xl_parameters_docs,_Avatar2xl_parameters1,_WithNameOnly_parameters,_WithNameOnly_parameters_docs,_WithNameOnly_parameters1,_WithNoUserData_parameters,_WithNoUserData_parameters_docs,_WithNoUserData_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/avatar/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Common / Avatar",component:_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,argTypes:{size:{control:{type:"radio"},options:["xs","sm","md","lg","xl","2xl"],description:"**Size of Avatar - default: `md`. (Optional prop)**\n      \n `xs:` width: 8px, height: 8px\n      \n `sm:`: width: 9px, height: 9px\n      \n `md:` width: 10px, height: 10px\n      \n `lg:` width: 11px, height: 11px\n      \n `xl:` width: 12px, height: 12px\n      \n `2xl:` width: 16px, height: 16px "},src:{control:{type:"text"},description:"**Image src of Avatar (Optional prop)**\n      \nIf not provided, the avatar will be displayed by the `name` prop if provided or the `UserIcon` by default."},name:{control:{type:"text"},description:"**Name of Avatar (Optional prop)**\n      \nIt will be displayed if the `src` prop is omitted."}}},Overview={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{src:"https://i.pravatar.cc/300",name:"John Doe",...args})},AvatarXs={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"xs",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},AvatarSm={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"sm",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},AvatarMd={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"md",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},AvatarLg={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"lg",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},AvatarXl={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"xl",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},Avatar2xl={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{size:"2xl",src:"https://i.pravatar.cc/300",name:"John Doe",...args})},WithNameOnly={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{name:"John Doe",...args})},WithNoUserData={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_1__.e,{...args})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},AvatarXs.parameters={...AvatarXs.parameters,docs:{...null===(_AvatarXs_parameters=AvatarXs.parameters)||void 0===_AvatarXs_parameters?void 0:_AvatarXs_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="xs" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_AvatarXs_parameters1=AvatarXs.parameters)||void 0===_AvatarXs_parameters1||null===(_AvatarXs_parameters_docs=_AvatarXs_parameters1.docs)||void 0===_AvatarXs_parameters_docs?void 0:_AvatarXs_parameters_docs.source}}},AvatarSm.parameters={...AvatarSm.parameters,docs:{...null===(_AvatarSm_parameters=AvatarSm.parameters)||void 0===_AvatarSm_parameters?void 0:_AvatarSm_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="sm" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_AvatarSm_parameters1=AvatarSm.parameters)||void 0===_AvatarSm_parameters1||null===(_AvatarSm_parameters_docs=_AvatarSm_parameters1.docs)||void 0===_AvatarSm_parameters_docs?void 0:_AvatarSm_parameters_docs.source}}},AvatarMd.parameters={...AvatarMd.parameters,docs:{...null===(_AvatarMd_parameters=AvatarMd.parameters)||void 0===_AvatarMd_parameters?void 0:_AvatarMd_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="md" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_AvatarMd_parameters1=AvatarMd.parameters)||void 0===_AvatarMd_parameters1||null===(_AvatarMd_parameters_docs=_AvatarMd_parameters1.docs)||void 0===_AvatarMd_parameters_docs?void 0:_AvatarMd_parameters_docs.source}}},AvatarLg.parameters={...AvatarLg.parameters,docs:{...null===(_AvatarLg_parameters=AvatarLg.parameters)||void 0===_AvatarLg_parameters?void 0:_AvatarLg_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="lg" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_AvatarLg_parameters1=AvatarLg.parameters)||void 0===_AvatarLg_parameters1||null===(_AvatarLg_parameters_docs=_AvatarLg_parameters1.docs)||void 0===_AvatarLg_parameters_docs?void 0:_AvatarLg_parameters_docs.source}}},AvatarXl.parameters={...AvatarXl.parameters,docs:{...null===(_AvatarXl_parameters=AvatarXl.parameters)||void 0===_AvatarXl_parameters?void 0:_AvatarXl_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="xl" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_AvatarXl_parameters1=AvatarXl.parameters)||void 0===_AvatarXl_parameters1||null===(_AvatarXl_parameters_docs=_AvatarXl_parameters1.docs)||void 0===_AvatarXl_parameters_docs?void 0:_AvatarXl_parameters_docs.source}}},Avatar2xl.parameters={...Avatar2xl.parameters,docs:{...null===(_Avatar2xl_parameters=Avatar2xl.parameters)||void 0===_Avatar2xl_parameters?void 0:_Avatar2xl_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar size="2xl" src="https://i.pravatar.cc/300" name="John Doe" {...args} />\n}',...null===(_Avatar2xl_parameters1=Avatar2xl.parameters)||void 0===_Avatar2xl_parameters1||null===(_Avatar2xl_parameters_docs=_Avatar2xl_parameters1.docs)||void 0===_Avatar2xl_parameters_docs?void 0:_Avatar2xl_parameters_docs.source}}},WithNameOnly.parameters={...WithNameOnly.parameters,docs:{...null===(_WithNameOnly_parameters=WithNameOnly.parameters)||void 0===_WithNameOnly_parameters?void 0:_WithNameOnly_parameters.docs,source:{originalSource:'{\n  render: args => <Avatar name="John Doe" {...args} />\n}',...null===(_WithNameOnly_parameters1=WithNameOnly.parameters)||void 0===_WithNameOnly_parameters1||null===(_WithNameOnly_parameters_docs=_WithNameOnly_parameters1.docs)||void 0===_WithNameOnly_parameters_docs?void 0:_WithNameOnly_parameters_docs.source}}},WithNoUserData.parameters={...WithNoUserData.parameters,docs:{...null===(_WithNoUserData_parameters=WithNoUserData.parameters)||void 0===_WithNoUserData_parameters?void 0:_WithNoUserData_parameters.docs,source:{originalSource:"{\n  render: args => <Avatar {...args} />\n}",...null===(_WithNoUserData_parameters1=WithNoUserData.parameters)||void 0===_WithNoUserData_parameters1||null===(_WithNoUserData_parameters_docs=_WithNoUserData_parameters1.docs)||void 0===_WithNoUserData_parameters_docs?void 0:_WithNoUserData_parameters_docs.source}}};const __namedExportsOrder=["Overview","AvatarXs","AvatarSm","AvatarMd","AvatarLg","AvatarXl","Avatar2xl","WithNameOnly","WithNoUserData"]},"./src/components/ui/avatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),avatar_root=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-root.mjs"),avatar_fallback=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-fallback.mjs"),avatar_image=__webpack_require__("./node_modules/@ark-ui/react/avatar/avatar-image.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recipes=__webpack_require__("./styled-system/recipes/index.mjs"),icons=__webpack_require__("./src/components/ui/icons/index.ts");const getInitials=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ").map((part=>part[0])).splice(0,2).join("").toUpperCase()},Avatar=(0,react.forwardRef)(((props,ref)=>{const[variantProps,localProps]=recipes.my.splitVariantProps(props),{name,src,...rootProps}=localProps,styles=(0,recipes.my)(variantProps);return(0,jsx_runtime.jsxs)(avatar_root.C,{ref,className:styles.root,...rootProps,children:[(0,jsx_runtime.jsx)(avatar_fallback.q,{className:styles.fallback,children:getInitials(name)||(0,jsx_runtime.jsx)(icons.ny,{})}),(0,jsx_runtime.jsx)(avatar_image.B,{className:styles.image,src,alt:name})]})}));Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"Render Avatar component.\n@param {string} name - The name of the avatar.\n@param {string} src - The image src of the avatar .\n@returns {JSX.Element} - The avatar component.",methods:[],displayName:"Avatar"},Avatar.__docgenInfo={description:"Render Avatar component.\n@param {string} name - The name of the avatar.\n@param {string} src - The image src of the avatar .\n@returns {JSX.Element} - The avatar component.",methods:[],displayName:"Avatar"}},"./src/components/ui/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CT:()=>CalendarIcon,YJ:()=>ChevronLeftIcon,vK:()=>ChevronRightIcon,US:()=>CloseIcon,k5:()=>DownIcon,ny:()=>UserIcon});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const UserIcon=props=>(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",...props,children:[(0,jsx_runtime.jsx)("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"7",r:"4"})]});UserIcon.__docgenInfo={description:"",methods:[],displayName:"UserIcon"};const CheckIcon=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...props,children:(0,jsx_runtime.jsx)("path",{d:"M11.6666 3.5L5.24992 9.91667L2.33325 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});CheckIcon.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};const MinusIcon=props=>(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...props,children:(0,jsx_runtime.jsx)("path",{d:"M2.91675 7H11.0834",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});MinusIcon.__docgenInfo={description:"",methods:[],displayName:"MinusIcon"};const DownIcon=props=>(0,jsx_runtime.jsx)("svg",{width:"28px",height:"28px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#000000",...props,children:(0,jsx_runtime.jsx)("path",{d:"M6 9L12 15L18 9",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});DownIcon.__docgenInfo={description:"",methods:[],displayName:"DownIcon"};const CloseIcon=props=>(0,jsx_runtime.jsx)("svg",{width:"28px",height:"28px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#000000",...props,children:(0,jsx_runtime.jsx)("path",{d:"M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426",stroke:"#000000",strokeWidth:"1.5","stroke-linecap":"round","stroke-linejoin":"round"})});CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};const ChevronLeftIcon=props=>(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m15 18l-6-6l6-6"})});ChevronLeftIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronLeftIcon"};const ChevronRightIcon=props=>(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m9 18l6-6l-6-6"})});ChevronRightIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronRightIcon"};const CalendarIcon=props=>(0,jsx_runtime.jsxs)("svg",{width:"28px",height:"28px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"#000000",...props,children:[(0,jsx_runtime.jsx)("path",{d:"M15 4V2M15 4V6M15 4H10.5M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M3 10V6C3 4.89543 3.89543 4 5 4H7",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M7 2V6",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{d:"M21 10V6C21 4.89543 20.1046 4 19 4H18.5",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]});CalendarIcon.__docgenInfo={description:"",methods:[],displayName:"CalendarIcon"},UserIcon.__docgenInfo={description:"",methods:[],displayName:"UserIcon"},CheckIcon.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"},MinusIcon.__docgenInfo={description:"",methods:[],displayName:"MinusIcon"},DownIcon.__docgenInfo={description:"",methods:[],displayName:"DownIcon"},CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"},ChevronLeftIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronLeftIcon"},ChevronRightIcon.__docgenInfo={description:"",methods:[],displayName:"ChevronRightIcon"},CalendarIcon.__docgenInfo={description:"",methods:[],displayName:"CalendarIcon"}},"./node_modules/@zag-js/mutation-observer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function observeAttributes(node,attributes,fn){if(!node)return;const obs=new(node.ownerDocument.defaultView||window).MutationObserver((changes=>{for(const change of changes)"attributes"===change.type&&change.attributeName&&attributes.includes(change.attributeName)&&fn(change)}));return obs.observe(node,{attributes:!0,attributeFilter:attributes}),()=>obs.disconnect()}function observeChildren(node,fn){if(!node)return;const obs=new(node.ownerDocument.defaultView||window).MutationObserver(fn);return obs.observe(node,{childList:!0,subtree:!0}),()=>obs.disconnect()}__webpack_require__.d(__webpack_exports__,{G:()=>observeChildren,m:()=>observeAttributes})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);