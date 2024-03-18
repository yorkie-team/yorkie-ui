(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[2364,8926],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/toast/Toast.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Toast_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/toast/Toast.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"toast",children:"Toast"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"toast-1",children:"Toast"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Select } from '@/component/ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Get real-time feedback on your actions with our on-screen messages.\nTo use the Toast component, set it up with createToaster hook. This hook manages grouping and placement of toasts. Use toast.create method to display a notification."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:"\n      const [Toaster, toast] = createToaster({\n        placement: 'top-end',\n        render(toast) {\n          return (\n            <Toast.Root>\n              <Toast.Title>{toast.title}</Toast.Title>\n              <Toast.Description>{toast.description}</Toast.Description>\n              <Toast.CloseTrigger asChild>\n                <CloseIcon />\n              </Toast.CloseTrigger>\n            </Toast.Root>\n          );\n        },\n      });\n\n      return (\n        <>\n          <Button variant=\"outline\" onClick={() => toast.create({ title: 'Title', description: 'Description' })}>\n            Create Toast\n          </Button>\n          <Toaster />\n        </>\n      );\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"configuring-toast",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#configuring-toast",children:"Configuring Toast"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To effectively configure the Toast component, it is imperative that you pass diverse options to the toast.create method. These options include, but are not limited to, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"title"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"description"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"type"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"duration"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"removeDelay"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.ConfiguringToast,source:{format:!0,code:"\n      const [Toaster, toast] = createToaster({\n        placement: 'bottom-start',\n        render(toast) {\n          return (\n            <Toast.Root>\n              <Toast.Title>{toast.title}</Toast.Title>\n              <Toast.Description>{toast.description}</Toast.Description>\n              <Toast.CloseTrigger>Close</Toast.CloseTrigger>\n            </Toast.Root>\n          )\n        },\n      })\n\n      return (\n        <>\n          <Button\n            onClick={() =>\n              toast.create({\n                title: 'Success',\n                description: 'This is a success toast',\n                type: 'success',\n                duration: 20000,\n                removeDelay: 250,\n              })\n            }\n          >\n            Toast\n          </Button>\n          <Toaster />\n        </>\n      )\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"custom-rendered-toast",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#custom-rendered-toast",children:"Custom Rendered Toast"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Toast component provides the ability to use custom render functions, granting users greater flexibility in rendering content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Toast_stories__WEBPACK_IMPORTED_MODULE_2__.CustomRenderedToast,source:{format:!0,code:"\n      const [Toaster, toast] = createToaster({\n        placement: 'bottom-end',\n        // custom render may go directly into the function below\n        render(toast) {\n          return (\n            <Toast.Root>\n              <Toast.Title>{toast.title}</Toast.Title>\n              <Toast.Description>{toast.description}</Toast.Description>\n              <Toast.CloseTrigger>Close</Toast.CloseTrigger>\n            </Toast.Root>\n          )\n        },\n      })\n\n      return (\n        <>\n          <Button\n            onClick={() =>\n              toast.create({\n                title: 'Please checkout',\n                render: (toast) => (\n                  <div>\n                    {toast.title} <a href=\"https://yorkie.io\">Yorkie UI</a>\n                  </div>\n                ),\n              })\n            }\n          >\n            Toast\n          </Button>\n          <Toaster />\n        </>\n      )\n    "}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/toast/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfiguringToast:()=>ConfiguringToast,CustomRenderedToast:()=>CustomRenderedToast,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),ui=__webpack_require__("./src/components/ui/index.ts"),icons=__webpack_require__("./src/components/ui/icons/index.ts"),dist=__webpack_require__("./node_modules/@zag-js/react/dist/index.mjs"),core_dist=__webpack_require__("./node_modules/@zag-js/core/dist/index.mjs"),store_dist=__webpack_require__("./node_modules/@zag-js/store/dist/index.mjs"),utils_dist=__webpack_require__("./node_modules/@zag-js/utils/dist/index.mjs"),anatomy_dist=__webpack_require__("./node_modules/@zag-js/anatomy/dist/index.mjs"),dom_query_dist=__webpack_require__("./node_modules/@zag-js/dom-query/dist/index.mjs"),dom_event_dist=__webpack_require__("./node_modules/@zag-js/dom-event/dist/index.mjs"),parts=(0,anatomy_dist.F)("toast").parts("group","root","title","description","closeTrigger").build(),dom=(0,dom_query_dist.tp)({getGroupId:placement=>`toast-group:${placement}`,getRootId:ctx=>`toast:${ctx.id}`,getTitleId:ctx=>`toast:${ctx.id}:title`,getDescriptionId:ctx=>`toast:${ctx.id}:description`,getCloseTriggerId:ctx=>`toast${ctx.id}:close`});var defaultTimeouts={info:5e3,error:5e3,success:2e3,loading:1/0,custom:5e3};function getToastDuration(duration,type){return duration??defaultTimeouts[type]}function getGroupPlacementStyle(ctx,placement){const offset=ctx.offsets,computedOffset="string"==typeof offset?{left:offset,right:offset,bottom:offset,top:offset}:offset,rtl="rtl"===ctx.dir,computedPlacement=placement.replace("-start",rtl?"-right":"-left").replace("-end",rtl?"-left":"-right"),isRighty=computedPlacement.includes("right"),isLefty=computedPlacement.includes("left"),styles={position:"fixed",pointerEvents:ctx.count>0?void 0:"none",display:"flex",flexDirection:"column","--toast-gutter":ctx.gutter,zIndex:ctx.zIndex};let alignItems="center";if(isRighty&&(alignItems="flex-end"),isLefty&&(alignItems="flex-start"),styles.alignItems=alignItems,computedPlacement.includes("top")){const offset2=computedOffset.top;styles.top=`calc(env(safe-area-inset-top, 0px) + ${offset2})`}if(computedPlacement.includes("bottom")){const offset2=computedOffset.bottom;styles.bottom=`calc(env(safe-area-inset-bottom, 0px) + ${offset2})`}if(!computedPlacement.includes("left")){const offset2=computedOffset.right;styles.right=`calc(env(safe-area-inset-right, 0px) + ${offset2})`}if(!computedPlacement.includes("right")){const offset2=computedOffset.left;styles.left=`calc(env(safe-area-inset-left, 0px) + ${offset2})`}return styles}var{not,and,or}=core_dist.guards;var group={connect:function groupConnect(state,send,normalize){const toastsByPlacement=function getToastsByPlacement(toasts){const result={};for(const toast of toasts){const placement=toast.state.context.placement;result[placement]||(result[placement]=[]),result[placement].push(toast)}return result}(state.context.toasts);function isVisible(id){return!!state.context.toasts.length&&!!state.context.toasts.find((toast=>toast.id==id))}function create(options){const uid=`toast:${(0,utils_dist.Vj)()}`,id=options.id?options.id:uid;if(!isVisible(id))return send({type:"ADD_TOAST",toast:{...options,id}}),id}function update(id,options){if(isVisible(id))return send({type:"UPDATE_TOAST",id,toast:options}),id}function upsert(options){const{id}=options;return!!id&&isVisible(id)&&null!=id?update(id,options):create(options)}function dismiss(id){null==id?send("DISMISS_ALL"):isVisible(id)&&send({type:"DISMISS_TOAST",id})}return{count:state.context.count,toasts:state.context.toasts,toastsByPlacement,isVisible,create,update,upsert,dismiss,remove(id){null==id?send("REMOVE_ALL"):isVisible(id)&&send({type:"REMOVE_TOAST",id})},dismissByPlacement(placement){const toasts=toastsByPlacement[placement];toasts&&toasts.forEach((toast=>dismiss(toast.id)))},loading:options=>upsert({...options,type:"loading"}),success:options=>upsert({...options,type:"success"}),error:options=>upsert({...options,type:"error"}),promise(promise,options,shared={}){const id=upsert({...shared,...options.loading,type:"loading"});return promise.then((response=>{const successOptions=(0,utils_dist.Pu)(options.success,response);upsert({...shared,...successOptions,id,type:"success"})})).catch((error=>{const errorOptions=(0,utils_dist.Pu)(options.error,error);upsert({...shared,...errorOptions,id,type:"error"})})),promise},pause(id){null==id?send("PAUSE_ALL"):isVisible(id)&&send({type:"PAUSE_TOAST",id})},resume(id){null==id?send("RESUME_ALL"):isVisible(id)&&send({type:"RESUME_TOAST",id})},getGroupProps(options){const{placement,label="Notifications"}=options;return normalize.element({...parts.group.attrs,dir:state.context.dir,tabIndex:-1,"aria-label":`${placement} ${label}`,id:dom.getGroupId(placement),"data-placement":placement,"aria-live":"polite",role:"region",style:getGroupPlacementStyle(state.context,placement)})},subscribe:fn=>(0,store_dist.Ld)(state.context.toasts,(()=>fn(state.context.toasts)))}},machine:function groupMachine(userContext){const ctx=(0,utils_dist.oA)(userContext);return(0,core_dist.C8)({id:"toaster",initial:"active",context:{dir:"ltr",max:Number.MAX_SAFE_INTEGER,toasts:[],gutter:"1rem",zIndex:dom_query_dist.dw,pauseOnPageIdle:!1,pauseOnInteraction:!0,offsets:{left:"0px",right:"0px",top:"0px",bottom:"0px"},...ctx},computed:{count:ctx2=>ctx2.toasts.length},on:{PAUSE_TOAST:{actions:(_ctx,evt,{self})=>{self.sendChild("PAUSE",evt.id)}},PAUSE_ALL:{actions:ctx2=>{ctx2.toasts.forEach((toast=>toast.send("PAUSE")))}},RESUME_TOAST:{actions:(_ctx,evt,{self})=>{self.sendChild("RESUME",evt.id)}},RESUME_ALL:{actions:ctx2=>{ctx2.toasts.forEach((toast=>toast.send("RESUME")))}},ADD_TOAST:{guard:ctx2=>ctx2.toasts.length<ctx2.max,actions:(ctx2,evt,{self})=>{const toast=function createToastMachine(options={}){const{type="info",duration,id="toast",placement="bottom",removeDelay=0,...restProps}=options,ctx=(0,utils_dist.oA)(restProps),computedDuration=getToastDuration(duration,type);return(0,core_dist.C8)({id,entry:"invokeOnOpen",initial:"loading"===type?"persist":"active",context:{id,type,remaining:computedDuration,duration:computedDuration,removeDelay,createdAt:Date.now(),placement,...ctx},on:{UPDATE:[{guard:and("hasTypeChanged","isChangingToLoading"),target:"persist",actions:["setContext","invokeOnUpdate"]},{guard:or("hasDurationChanged","hasTypeChanged"),target:"active:temp",actions:["setContext","invokeOnUpdate"]},{actions:["setContext","invokeOnUpdate"]}]},states:{"active:temp":{tags:["visible","updating"],after:{0:"active"}},persist:{tags:["visible","paused"],activities:"trackDocumentVisibility",on:{RESUME:{guard:not("isLoadingType"),target:"active",actions:["setCreatedAt"]},DISMISS:"dismissing"}},active:{tags:["visible"],activities:"trackDocumentVisibility",after:{VISIBLE_DURATION:"dismissing"},on:{DISMISS:"dismissing",PAUSE:{target:"persist",actions:"setRemainingDuration"}}},dismissing:{entry:"invokeOnClosing",after:{REMOVE_DELAY:{target:"inactive",actions:"notifyParentToRemove"}}},inactive:{entry:"invokeOnClose",type:"final"}}},{activities:{trackDocumentVisibility(ctx2,_evt,{send}){if(!ctx2.pauseOnPageIdle)return;const doc=dom.getDoc(ctx2);return(0,dom_event_dist.EV)(doc,"visibilitychange",(()=>{send("hidden"===doc.visibilityState?"PAUSE":"RESUME")}))}},guards:{isChangingToLoading:(_,evt)=>"loading"===evt.toast?.type,isLoadingType:ctx2=>"loading"===ctx2.type,hasTypeChanged:(ctx2,evt)=>evt.toast?.type!==ctx2.type,hasDurationChanged:(ctx2,evt)=>evt.toast?.duration!==ctx2.duration},delays:{VISIBLE_DURATION:ctx2=>ctx2.remaining,REMOVE_DELAY:ctx2=>ctx2.removeDelay},actions:{setRemainingDuration(ctx2){ctx2.remaining-=Date.now()-ctx2.createdAt},setCreatedAt(ctx2){ctx2.createdAt=Date.now()},notifyParentToRemove(_ctx,_evt,{self}){self.sendParent({type:"REMOVE_TOAST",id:self.id})},invokeOnClosing(ctx2){ctx2.onClosing?.()},invokeOnClose(ctx2){ctx2.onClose?.()},invokeOnOpen(ctx2){ctx2.onOpen?.()},invokeOnUpdate(ctx2){ctx2.onUpdate?.()},setContext(ctx2,evt){const{duration:duration2,type:type2}=evt.toast,time=getToastDuration(duration2,type2);Object.assign(ctx2,{...evt.toast,duration:time,remaining:time})}}})}({placement:ctx2.placement,duration:ctx2.duration,removeDelay:ctx2.removeDelay,render:ctx2.render,...evt.toast,pauseOnPageIdle:ctx2.pauseOnPageIdle,pauseOnInteraction:ctx2.pauseOnInteraction,dir:ctx2.dir,getRootNode:ctx2.getRootNode}),actor=self.spawn(toast);ctx2.toasts.push(actor)}},UPDATE_TOAST:{actions:(_ctx,evt,{self})=>{self.sendChild({type:"UPDATE",toast:evt.toast},evt.id)}},DISMISS_TOAST:{actions:(_ctx,evt,{self})=>{self.sendChild("DISMISS",evt.id)}},DISMISS_ALL:{actions:ctx2=>{ctx2.toasts.forEach((toast=>toast.send("DISMISS")))}},REMOVE_TOAST:{actions:(ctx2,evt,{self})=>{self.stopChild(evt.id);const index=ctx2.toasts.findIndex((toast=>toast.id===evt.id));ctx2.toasts.splice(index,1)}},REMOVE_ALL:{actions:(ctx2,_evt,{self})=>{for(ctx2.toasts.forEach((toast=>self.stopChild(toast.id)));ctx2.toasts.length;)ctx2.toasts.pop()}}}})}},environment_context=__webpack_require__("./node_modules/@ark-ui/react/environment/environment-context.mjs"),toast_context=__webpack_require__("./node_modules/@ark-ui/react/toast/toast-context.mjs"),toast_group=__webpack_require__("./node_modules/@ark-ui/react/toast/toast-group.mjs");const createToaster=props=>{const{placement,...rest}=props,service=group.machine({id:"1",placement,...rest}).start();let api=group.connect(service.getState(),service.send,dist.vs);const Toaster=(0,react.forwardRef)(((props2,ref)=>{const getRootNode=(0,environment_context.U)(),[state,send]=(0,dist.Lm)(service);api=group.connect(state,send,dist.vs),(0,react.useEffect)((()=>(service.setContext({getRootNode}),()=>{service.stop()})),[]);const mergedProps=(0,core_dist.dG)(api.getGroupProps({placement}),props2),toasts=api.toastsByPlacement[placement]??[];return(0,jsx_runtime.jsx)(toast_group.Y,{...mergedProps,ref,children:toasts.map((toast2=>(0,jsx_runtime.jsx)(ToastProviderFactory,{service:toast2},toast2.id)))})}));return Toaster.displayName="ToastGroup",[Toaster,Object.assign(api,{subscribe:fn=>service.subscribe((state=>fn(state.context.toasts)))})]},ToastProviderFactory=props=>{const[state,send]=(0,dist.Lm)(props.service),api=function connect(state,send,normalize){const isVisible=state.hasTag("visible"),isPaused=state.hasTag("paused"),pauseOnInteraction=state.context.pauseOnInteraction,placement=state.context.placement;return{type:state.context.type,title:state.context.title,description:state.context.description,placement,isVisible,isPaused,isRtl:"rtl"===state.context.dir,pause(){send("PAUSE")},resume(){send("RESUME")},dismiss(){send("DISMISS")},rootProps:normalize.element({...parts.root.attrs,dir:state.context.dir,id:dom.getRootId(state.context),"data-state":isVisible?"open":"closed","data-type":state.context.type,"data-placement":placement,role:"status","aria-atomic":"true",tabIndex:0,style:{position:"relative",pointerEvents:"auto",margin:"calc(var(--toast-gutter) / 2)","--remove-delay":`${state.context.removeDelay}ms`,"--duration":`${state.context.duration}ms`},onKeyDown(event){"Escape"==event.key&&(send("DISMISS"),event.preventDefault())},onFocus(){pauseOnInteraction&&send("PAUSE")},onBlur(){pauseOnInteraction&&send("RESUME")},onPointerEnter(){pauseOnInteraction&&send("PAUSE")},onPointerLeave(){pauseOnInteraction&&send("RESUME")}}),titleProps:normalize.element({...parts.title.attrs,id:dom.getTitleId(state.context)}),descriptionProps:normalize.element({...parts.description.attrs,id:dom.getDescriptionId(state.context)}),closeTriggerProps:normalize.button({id:dom.getCloseTriggerId(state.context),...parts.closeTrigger.attrs,type:"button","aria-label":"Dismiss notification",onClick(){send("DISMISS")}})}}(state,send,dist.vs);return(0,jsx_runtime.jsx)(toast_context.V,{value:api,children:state.context.render?.(api)})};var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_ConfiguringToast_parameters,_ConfiguringToast_parameters_docs,_ConfiguringToast_parameters1,_CustomRenderedToast_parameters,_CustomRenderedToast_parameters_docs,_CustomRenderedToast_parameters1,Button=__webpack_require__("./src/components/ui/button/Button.tsx");const Toast_stories={title:"FEEDBACK / Toast",argTypes:{placement:{description:"The placement of the toast."},count:{control:{type:"number"}},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},duration:{control:{type:"number"},description:"The duration the toast will be visible."},gutter:{control:{type:"text"},description:"The gutter or spacing between toasts."},max:{control:{type:"number"},description:"The maximum number of toasts that can be shown at once."},offsets:{description:'\nThe offset from the safe environment edge of the viewport. `string | Record<"left" | "right" | "top" | "bottom", string>`'},pauseOnInteraction:{control:{type:"boolean"},description:"Whether to pause the toast when interacted with."},pauseOnPageIdle:{control:{type:"boolean"},description:"Whether to pause toast when the user leaves the browser tab."},removeDelay:{control:{type:"number"},description:"The duration for the toast to kept alive before it is removed. Useful for exit transitions."},zIndex:{control:{type:"number"},description:"The z-index applied to each toast group."}}},Overview=()=>{const[Toaster,toast]=createToaster({placement:"top-end",render:toast=>(0,jsx_runtime.jsxs)(ui.FN.fC,{children:[(0,jsx_runtime.jsx)(ui.FN.Dx,{children:toast.title}),(0,jsx_runtime.jsx)(ui.FN.dk,{children:toast.description}),(0,jsx_runtime.jsx)(ui.FN.xk,{asChild:!0,children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(icons.Tw,{})})})]})});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{variant:"outline",onClick:()=>toast.create({title:"Title",description:"Description"}),children:"Create Toast"}),(0,jsx_runtime.jsx)(Toaster,{})]})},ConfiguringToast=()=>{const[Toaster,toast]=createToaster({placement:"bottom-end",render:toast=>(0,jsx_runtime.jsxs)(ui.FN.fC,{children:[(0,jsx_runtime.jsx)(ui.FN.Dx,{children:toast.title}),(0,jsx_runtime.jsx)(ui.FN.dk,{children:toast.description}),(0,jsx_runtime.jsx)(ui.FN.xk,{children:"Close"})]})});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:()=>toast.create({title:"Success",description:"This is a success toast",type:"success",duration:2e4,removeDelay:250}),children:"Toast"}),(0,jsx_runtime.jsx)(Toaster,{})]})},CustomRenderedToast=()=>{const[Toaster,toast]=createToaster({placement:"top-end",render:toast=>(0,jsx_runtime.jsxs)(ui.FN.fC,{children:[(0,jsx_runtime.jsx)(ui.FN.Dx,{children:toast.title}),(0,jsx_runtime.jsx)(ui.FN.dk,{children:toast.description}),(0,jsx_runtime.jsx)(ui.FN.xk,{children:"Close"})]})});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:()=>toast.create({title:"Please checkout",render:toast=>(0,jsx_runtime.jsxs)("div",{children:[toast.title," ",(0,jsx_runtime.jsx)("a",{href:"#",children:"Yorkie UI"})]})}),children:"Toast"}),(0,jsx_runtime.jsx)(Toaster,{})]})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"() => {\n  const [Toaster, toast] = createToaster({\n    placement: 'top-end',\n    render(toast) {\n      return <Toast.Root>\n          <Toast.Title>{toast.title}</Toast.Title>\n          <Toast.Description>{toast.description}</Toast.Description>\n          <Toast.CloseTrigger asChild>\n            <span>\n              <CloseIcon />\n            </span>\n          </Toast.CloseTrigger>\n        </Toast.Root>;\n    }\n  });\n  return <>\n      <Button variant=\"outline\" onClick={() => toast.create({\n      title: 'Title',\n      description: 'Description'\n    })}>\n        Create Toast\n      </Button>\n      <Toaster />\n    </>;\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},ConfiguringToast.parameters={...ConfiguringToast.parameters,docs:{...null===(_ConfiguringToast_parameters=ConfiguringToast.parameters)||void 0===_ConfiguringToast_parameters?void 0:_ConfiguringToast_parameters.docs,source:{originalSource:"() => {\n  const [Toaster, toast] = createToaster({\n    placement: 'bottom-end',\n    render(toast) {\n      return <Toast.Root>\n          <Toast.Title>{toast.title}</Toast.Title>\n          <Toast.Description>{toast.description}</Toast.Description>\n          <Toast.CloseTrigger>Close</Toast.CloseTrigger>\n        </Toast.Root>;\n    }\n  });\n  return <>\n      <Button onClick={() => toast.create({\n      title: 'Success',\n      description: 'This is a success toast',\n      type: 'success',\n      duration: 20000,\n      removeDelay: 250\n    })}>\n        Toast\n      </Button>\n      <Toaster />\n    </>;\n}",...null===(_ConfiguringToast_parameters1=ConfiguringToast.parameters)||void 0===_ConfiguringToast_parameters1||null===(_ConfiguringToast_parameters_docs=_ConfiguringToast_parameters1.docs)||void 0===_ConfiguringToast_parameters_docs?void 0:_ConfiguringToast_parameters_docs.source}}},CustomRenderedToast.parameters={...CustomRenderedToast.parameters,docs:{...null===(_CustomRenderedToast_parameters=CustomRenderedToast.parameters)||void 0===_CustomRenderedToast_parameters?void 0:_CustomRenderedToast_parameters.docs,source:{originalSource:"() => {\n  const [Toaster, toast] = createToaster({\n    placement: 'top-end',\n    // custom render may go directly into the function below\n    render(toast) {\n      return <Toast.Root>\n          <Toast.Title>{toast.title}</Toast.Title>\n          <Toast.Description>{toast.description}</Toast.Description>\n          <Toast.CloseTrigger>Close</Toast.CloseTrigger>\n        </Toast.Root>;\n    }\n  });\n  return <>\n      <Button onClick={() => toast.create({\n      title: 'Please checkout',\n      render: toast => <div>\n                {toast.title} <a href=\"#\">Yorkie UI</a>\n              </div>\n    })}>\n        Toast\n      </Button>\n      <Toaster />\n    </>;\n}",...null===(_CustomRenderedToast_parameters1=CustomRenderedToast.parameters)||void 0===_CustomRenderedToast_parameters1||null===(_CustomRenderedToast_parameters_docs=_CustomRenderedToast_parameters1.docs)||void 0===_CustomRenderedToast_parameters_docs?void 0:_CustomRenderedToast_parameters_docs.source}}};const __namedExportsOrder=["Overview","ConfiguringToast","CustomRenderedToast"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);