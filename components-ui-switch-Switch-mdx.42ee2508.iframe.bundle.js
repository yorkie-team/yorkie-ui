(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[1139,6622],{"./node_modules/@ark-ui/react/run-if-fn.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>runIfFn});const runIfFn=(valueOrFn,...args)=>"function"==typeof valueOrFn?valueOrFn(...args):valueOrFn},"./node_modules/@ark-ui/react/switch/switch.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{oT:()=>SwitchControl,__:()=>SwitchLabel,fC:()=>SwitchRoot,bU:()=>SwitchThumb});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@zag-js/core/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),factory=__webpack_require__("./node_modules/@ark-ui/react/factory.mjs"),create_context=__webpack_require__("./node_modules/@ark-ui/react/create-context.mjs");const[SwitchProvider,useSwitchContext]=(0,create_context.k)({name:"SwitchContext",hookName:"useSwitchContext",providerName:"<SwitchProvider />"}),SwitchControl=(0,react.forwardRef)(((props,ref)=>{const api=useSwitchContext(),mergedProps=(0,dist.dG)(api.controlProps,props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(factory.e.span,{...mergedProps,ref}),(0,jsx_runtime.jsx)("input",{...api.hiddenInputProps})]})}));SwitchControl.displayName="SwitchControl";const SwitchLabel=(0,react.forwardRef)(((props,ref)=>{const api=useSwitchContext(),mergedProps=(0,dist.dG)(api.labelProps,props);return(0,jsx_runtime.jsx)(factory.e.span,{...mergedProps,ref})}));SwitchLabel.displayName="SwitchLabel";var create_split_props=__webpack_require__("./node_modules/@ark-ui/react/create-split-props.mjs"),run_if_fn=__webpack_require__("./node_modules/@ark-ui/react/run-if-fn.mjs"),react_dist=__webpack_require__("./node_modules/@zag-js/react/dist/index.mjs"),anatomy_dist=__webpack_require__("./node_modules/@zag-js/anatomy/dist/index.mjs"),dom_query_dist=__webpack_require__("./node_modules/@zag-js/dom-query/dist/index.mjs"),visually_hidden_dist=__webpack_require__("./node_modules/@zag-js/visually-hidden/dist/index.mjs"),form_utils_dist=__webpack_require__("./node_modules/@zag-js/form-utils/dist/index.mjs"),utils_dist=__webpack_require__("./node_modules/@zag-js/utils/dist/index.mjs"),types_dist=__webpack_require__("./node_modules/@zag-js/types/dist/index.mjs"),parts=(0,anatomy_dist.F)("switch").parts("root","label","control","thumb").build(),dom=(0,dom_query_dist.tp)({getRootId:ctx=>ctx.ids?.root??`switch:${ctx.id}`,getLabelId:ctx=>ctx.ids?.label??`switch:${ctx.id}:label`,getThumbId:ctx=>ctx.ids?.thumb??`switch:${ctx.id}:thumb`,getControlId:ctx=>ctx.ids?.control??`switch:${ctx.id}:control`,getHiddenInputId:ctx=>ctx.ids?.input??`switch:${ctx.id}:input`,getHiddenInputEl:ctx=>dom.getById(ctx,dom.getHiddenInputId(ctx))});var{not}=dist.guards;var invoke_change=ctx=>{ctx.onCheckedChange?.({checked:ctx.checked})},set={checked:(ctx,checked)=>{(0,utils_dist.Xy)(ctx.checked,checked)||(ctx.checked=checked,invoke_change(ctx))}},props=(0,types_dist.e)()(["checked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","required","value"]),environment_context=((0,utils_dist.xQ)(props),__webpack_require__("./node_modules/@ark-ui/react/environment/environment-context.mjs")),use_event=__webpack_require__("./node_modules/@ark-ui/react/use-event.mjs");const useSwitch=props=>{const initialContext={id:(0,react.useId)(),getRootNode:(0,environment_context.U)(),...props,checked:props.defaultChecked},context={...initialContext,checked:props.checked,onCheckedChange:(0,use_event.z)(props.onCheckedChange,{sync:!0})},[state,send]=(0,react_dist.eO)(function machine(userContext){const ctx=(0,utils_dist.oA)(userContext);return(0,dist.C8)({id:"switch",initial:"ready",context:{checked:!1,label:"switch",value:"on",disabled:!1,...ctx,fieldsetDisabled:!1},computed:{isDisabled:ctx2=>ctx2.disabled||ctx2.fieldsetDisabled},watch:{disabled:"removeFocusIfNeeded",checked:"syncInputElement"},activities:["trackFormControlState"],on:{"CHECKED.TOGGLE":[{guard:not("isTrusted"),actions:["toggleChecked","dispatchChangeEvent"]},{actions:["toggleChecked"]}],"CHECKED.SET":[{guard:not("isTrusted"),actions:["setChecked","dispatchChangeEvent"]},{actions:["setChecked"]}],"CONTEXT.SET":{actions:["setContext"]}},states:{ready:{}}},{guards:{isTrusted:(_ctx,evt)=>!!evt.isTrusted},activities:{trackFormControlState:(ctx2,_evt,{send,initialContext})=>(0,form_utils_dist.NS)(dom.getHiddenInputEl(ctx2),{onFieldsetDisabledChange(disabled){ctx2.fieldsetDisabled=disabled},onFormReset(){send({type:"CHECKED.SET",checked:!!initialContext.checked,src:"form-reset"})}})},actions:{setContext(ctx2,evt){Object.assign(ctx2,evt.context)},syncInputElement(ctx2){const inputEl=dom.getHiddenInputEl(ctx2);inputEl&&(inputEl.checked=!!ctx2.checked)},removeFocusIfNeeded(ctx2){ctx2.disabled&&ctx2.focused&&(ctx2.focused=!1)},setChecked(ctx2,evt){set.checked(ctx2,evt.checked)},toggleChecked(ctx2,_evt){set.checked(ctx2,!ctx2.checked)},dispatchChangeEvent(ctx2){const inputEl=dom.getHiddenInputEl(ctx2);(0,form_utils_dist.FW)(inputEl,{checked:ctx2.checked})}}})}(initialContext),{context});return function connect(state,send,normalize){const isDisabled=state.context.isDisabled,isFocused=!isDisabled&&state.context.focused,isChecked=state.context.checked,dataAttrs={"data-active":(0,dom_query_dist.PB)(state.context.active),"data-focus":(0,dom_query_dist.PB)(isFocused),"data-hover":(0,dom_query_dist.PB)(state.context.hovered),"data-disabled":(0,dom_query_dist.PB)(isDisabled),"data-state":state.context.checked?"checked":"unchecked","data-invalid":(0,dom_query_dist.PB)(state.context.invalid)};return{isChecked,isDisabled,isFocused,setChecked(checked){send({type:"CHECKED.SET",checked,isTrusted:!1})},toggleChecked(){send({type:"CHECKED.TOGGLE",checked:isChecked,isTrusted:!1})},rootProps:normalize.label({...parts.root.attrs,...dataAttrs,dir:state.context.dir,id:dom.getRootId(state.context),htmlFor:dom.getHiddenInputId(state.context),onPointerMove(){isDisabled||send({type:"CONTEXT.SET",context:{hovered:!0}})},onPointerLeave(){isDisabled||send({type:"CONTEXT.SET",context:{hovered:!1}})},onPointerDown(event){isDisabled||(isFocused&&event.preventDefault(),send({type:"CONTEXT.SET",context:{active:!0}}))},onPointerUp(){isDisabled||send({type:"CONTEXT.SET",context:{active:!1}})},onClick(event){event.target===dom.getHiddenInputEl(state.context)&&event.stopPropagation()}}),labelProps:normalize.element({...parts.label.attrs,...dataAttrs,dir:state.context.dir,id:dom.getLabelId(state.context)}),thumbProps:normalize.element({...parts.thumb.attrs,...dataAttrs,dir:state.context.dir,id:dom.getThumbId(state.context),"aria-hidden":!0}),controlProps:normalize.element({...parts.control.attrs,...dataAttrs,dir:state.context.dir,id:dom.getControlId(state.context),"aria-hidden":!0}),hiddenInputProps:normalize.input({id:dom.getHiddenInputId(state.context),type:"checkbox",required:state.context.required,defaultChecked:isChecked,disabled:isDisabled,"aria-labelledby":dom.getLabelId(state.context),"aria-invalid":state.context.invalid,name:state.context.name,form:state.context.form,value:state.context.value,style:visually_hidden_dist.N,onChange(event){const checked=event.currentTarget.checked;send({type:"CHECKED.SET",checked,isTrusted:!0})},onBlur(){send({type:"CONTEXT.SET",context:{focused:!1}})},onFocus(){send({type:"CONTEXT.SET",context:{focused:!0}})},onKeyDown(event){" "===event.key&&send({type:"CONTEXT.SET",context:{active:!0}})},onKeyUp(event){" "===event.key&&send({type:"CONTEXT.SET",context:{active:!1}})}})}}(state,send,react_dist.vs)},SwitchRoot=(0,react.forwardRef)(((props,ref)=>{const[switchProps,{children,...localProps}]=(0,create_split_props.x)()(props,["checked","defaultChecked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","required","value"]),api=useSwitch(switchProps),mergedProps=(0,dist.dG)(api.rootProps,localProps),view=(0,run_if_fn.P)(children,api);return(0,jsx_runtime.jsx)(SwitchProvider,{value:api,children:(0,jsx_runtime.jsx)(factory.e.label,{...mergedProps,ref,children:view})})}));SwitchRoot.displayName="SwitchRoot";const SwitchThumb=(0,react.forwardRef)(((props,ref)=>{const api=useSwitchContext(),mergedProps=(0,dist.dG)(api.thumbProps,props);return(0,jsx_runtime.jsx)(factory.e.span,{...mergedProps,ref})}));SwitchThumb.displayName="SwitchThumb"},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/ui/switch/Switch.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Switch_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/switch/Switch.stories.tsx");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"swith",children:"Swith"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#import",children:"Import"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import",children:"Import"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Switch } from 'yorkie-ui';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This feature enables users to choose only one option from several available choices."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.Overview,source:{format:!0,code:"\n      <Switch defaultChecked>Label</Switch>\n    "}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"controlled-switch",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#controlled-switch",children:"Controlled Switch"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The state of the toggle for a controlled Switch component is managed using the checked prop, which updates when the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onCheckedChange"})," event handler is called."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.Controlled,source:{format:!0,code:"\n      <Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>\n        Label\n      </Switch>\n    "}})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_JLXM9012KP_Desktop_Naver_yorkie_ui_poc_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/ui/switch/Switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Overview:()=>Overview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Overview_parameters,_Overview_parameters_docs,_Overview_parameters1,_Controlled_parameters,_Controlled_parameters_docs,_Controlled_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ui_switch__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/switch/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"FORM / Switch",argTypes:{defaultValue:{control:"boolean",description:"The initial checked state of the switch."},checked:{control:{type:"boolean"},description:"Whether the switch is checked."},value:{description:"\nThe value of switch input. Useful for form submission. `string | number`",default:"on"},dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},onCheckedChange:{description:"\nFunction to call when the switch is clicked. `(details: CheckedChangeDetails) => void`"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled."},invalid:{control:{type:"boolean"},description:"If `true`, the switch is marked as invalid."},form:{control:{type:"text"},description:"The id of the form that the switch belongs to"}}},Overview={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.r,{defaultChecked:!0,children:"Label"})},Controlled=()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_switch__WEBPACK_IMPORTED_MODULE_2__.r,{checked,onCheckedChange:e=>setChecked(e.checked),children:"Label"})};Overview.parameters={...Overview.parameters,docs:{...null===(_Overview_parameters=Overview.parameters)||void 0===_Overview_parameters?void 0:_Overview_parameters.docs,source:{originalSource:"{\n  render: () => {\n    return <Switch defaultChecked>Label</Switch>;\n  }\n}",...null===(_Overview_parameters1=Overview.parameters)||void 0===_Overview_parameters1||null===(_Overview_parameters_docs=_Overview_parameters1.docs)||void 0===_Overview_parameters_docs?void 0:_Overview_parameters_docs.source}}},Controlled.parameters={...Controlled.parameters,docs:{...null===(_Controlled_parameters=Controlled.parameters)||void 0===_Controlled_parameters?void 0:_Controlled_parameters.docs,source:{originalSource:"() => {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onCheckedChange={(e: any) => setChecked(e.checked)}>\n      Label\n    </Switch>;\n}",...null===(_Controlled_parameters1=Controlled.parameters)||void 0===_Controlled_parameters1||null===(_Controlled_parameters_docs=_Controlled_parameters1.docs)||void 0===_Controlled_parameters_docs?void 0:_Controlled_parameters_docs.source}}};const __namedExportsOrder=["Overview","Controlled"]},"./src/components/ui/switch/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),switch_switch=__webpack_require__("./node_modules/@ark-ui/react/switch/switch.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),css=__webpack_require__("./styled-system/css/index.mjs"),jsx=__webpack_require__("./styled-system/jsx/index.mjs"),recipes=__webpack_require__("./styled-system/recipes/index.mjs");const Switch=(0,react.forwardRef)(((props,ref)=>{const[variantProps,switchProps]=recipes.kA.splitVariantProps(props),[cssProps,localProps]=(0,jsx.wW)(switchProps),{children,className,...rootProps}=localProps,styles=(0,recipes.kA)(variantProps);return(0,jsx_runtime.jsxs)(switch_switch.fC,{ref,className:(0,css.cx)(styles.root,(0,css.iv)(cssProps),className),...rootProps,children:[(0,jsx_runtime.jsx)(switch_switch.oT,{className:styles.control,children:(0,jsx_runtime.jsx)(switch_switch.bU,{className:styles.thumb})}),children&&(0,jsx_runtime.jsx)(switch_switch.__,{className:styles.label,children})]})}));Switch.displayName="Switch",Switch.__docgenInfo={description:"",methods:[],displayName:"Switch"},Switch.__docgenInfo={description:"",methods:[],displayName:"Switch"}},"./node_modules/@zag-js/form-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FW:()=>dispatchInputCheckedEvent,NS:()=>trackFormControl,lG:()=>setElementValue});var _zag_js_mutation_observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@zag-js/mutation-observer/dist/index.mjs"),getWindow=el=>el.ownerDocument.defaultView||window;function getDescriptor(el,options){const{type="HTMLInputElement",property="value"}=options,proto=getWindow(el)[type].prototype;return Object.getOwnPropertyDescriptor(proto,property)??{}}function setElementValue(el,value,option={}){const descriptor=getDescriptor(el,option);descriptor.set?.call(el,value)}function dispatchInputCheckedEvent(el,options){const{checked,bubbles=!0}=options;if(!el)return;const win=getWindow(el);el instanceof win.HTMLInputElement&&(!function setElementChecked(el,checked){const descriptor=getDescriptor(el,{type:"HTMLInputElement",property:"checked"});descriptor.set?.call(el,checked)}(el,checked),el.dispatchEvent(new win.Event("click",{bubbles})),el.dispatchEvent(new win.Event("change",{bubbles})))}function trackFormReset(el,callback){if(!el)return;const form=function getClosestForm(el){return function isFormElement(el){return el.matches("textarea, input, select, button")}(el)?el.form:el.closest("form")}(el);return form?.addEventListener("reset",callback,{passive:!0}),()=>{form?.removeEventListener("reset",callback)}}function trackFieldsetDisabled(el,callback){const fieldset=el?.closest("fieldset");if(fieldset)return callback(fieldset.disabled),(0,_zag_js_mutation_observer__WEBPACK_IMPORTED_MODULE_0__.F)(fieldset,["disabled"],(()=>callback(fieldset.disabled)))}function trackFormControl(el,options){if(!el)return;const{onFieldsetDisabledChange,onFormReset}=options,cleanups=[trackFormReset(el,onFormReset),trackFieldsetDisabled(el,onFieldsetDisabledChange)];return()=>{cleanups.forEach((cleanup=>cleanup?.()))}}},"./node_modules/@zag-js/mutation-observer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function observeAttributes(node,attributes,fn){if(!node)return;const obs=new(node.ownerDocument.defaultView||window).MutationObserver((changes=>{for(const change of changes)"attributes"===change.type&&change.attributeName&&attributes.includes(change.attributeName)&&fn(change)}));return obs.observe(node,{attributes:!0,attributeFilter:attributes}),()=>obs.disconnect()}function observeChildren(node,fn){if(!node)return;const obs=new(node.ownerDocument.defaultView||window).MutationObserver(fn);return obs.observe(node,{childList:!0,subtree:!0}),()=>obs.disconnect()}__webpack_require__.d(__webpack_exports__,{F:()=>observeAttributes,P:()=>observeChildren})},"./node_modules/@zag-js/visually-hidden/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>visuallyHiddenStyle,q:()=>setVisuallyHidden});var visuallyHiddenStyle={border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"};function setVisuallyHidden(el){Object.assign(el.style,visuallyHiddenStyle)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);