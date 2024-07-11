"use strict";(self.webpackChunkyorkie_ui=self.webpackChunkyorkie_ui||[]).push([[938],{"./src/components/ui/popover/Popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddingAnArrow:()=>AddingAnArrow,CloseBehavior:()=>CloseBehavior,Controlled:()=>Controlled,Modal:()=>Modal,OpenAndCloseEvent:()=>OpenAndCloseEvent,Overview:()=>Overview,Positioning:()=>Positioning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_components_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"OVERLAY / Popover",argTypes:{dir:{control:{type:"radio"},options:["ltr","rtl"],description:"The documents text/writing direction.",default:"ltr"},autoFocus:{control:{type:"boolean"},description:"Whether to automatically set focus on the first focusable content within the popover when opened."},closeOnEsc:{control:{type:"boolean"},description:"Whether to close the popover when the escape key is pressed."},closeOnInteractOutside:{control:{type:"boolean"},description:"Whether to close the popover when the user clicks outside of the popover."},defaultOpen:{control:{type:"boolean"},description:"The initial open state of the popover."},lazyMount:{control:{type:"boolean"},description:"Whether to enable lazy mounting."},modal:{description:"\nWhether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover."},onEscapeKeyDown:{description:"\nFunction called when the escape key is pressed. `(event: KeyboardEvent) => void`"},onExitComplete:{description:"\nFunction called when the animation ends in the closed state. `() => void`"},onFocusOutside:{description:"\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`"},onInteractOutside:{description:"\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`"},onOpenChange:{control:{type:"boolean"},description:"\nFunction invoked when the popover opens or closes. `(details: OpenChangeDetails) => void`"},onPointerDownOutside:{control:{type:"boolean"},description:"\nFunction called when the pointer is pressed down outside the component. `(event: (event: PointerDownOutsideEvent) => void) => void`"},open:{control:{type:"boolean"},description:"Whether the popover is open."},portalled:{control:{type:"boolean"},description:"Whether the popover is rendered in a portal."},positioning:{control:{type:"boolean"},description:"\nThe user provided options used to position the popover content. `PositioningOptions`"},present:{control:{type:"boolean"},description:"Whether the node is present (controlled by the user)."},unmountOnExit:{control:{type:"boolean"},description:"Whether to unmount on exit."}}};var Overview={render:function render(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Open Popover")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))}},AddingAnArrow={render:function render(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Open Popover")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))}},OpenAndCloseEvent={render:function render(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,{onOpenChange:function onOpenChange(open){return alert(open?"opened":"closed")}},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Click Me ",__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.C1,null,">"))),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Title"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Description")))))}},Controlled=function Controlled(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1];return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,{open:isOpen},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,{onClick:function onClick(){return setIsOpen(!isOpen)}},"Toggle"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))},CloseBehavior=function CloseBehavior(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,{closeOnEsc:!1,closeOnInteractOutside:!1},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Open Popover")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))},Positioning=function Positioning(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,{positioning:{placement:"left-start",gutter:16,offset:{mainAxis:12,crossAxis:12}}},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Open Popover")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))},Modal=function Modal(){return __jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{height:"160px"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.bL,{modal:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.l9,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.$n,null,"Open Popover")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.Pf,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.UC,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.i3,null,__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hf,null)),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.BJ,{gap:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.hE,null,"Favorite Framework"),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.VY,null,"Tell us what is your favorite framework and why you love to use it.")),__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.az,{position:"absolute",top:"1",right:"1"},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.AM.RQ,{asChild:!0},__jsx(_components_ui__WEBPACK_IMPORTED_MODULE_1__.FI.gzW,null)))))))};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <Box height="160px">\n        <Popover.Root>\n          <Popover.Trigger asChild>\n            <Button>Open Popover</Button>\n          </Popover.Trigger>\n          <Popover.Positioner>\n            <Popover.Content>\n              <Popover.Arrow>\n                <Popover.ArrowTip />\n              </Popover.Arrow>\n              <Stack gap="1">\n                <Popover.Title>Favorite Framework</Popover.Title>\n                <Popover.Description>\n                  Tell us what is your favorite framework and why you love to use it.\n                </Popover.Description>\n              </Stack>\n              <Box position="absolute" top="1" right="1">\n                <Popover.CloseTrigger asChild>\n                  <Icons.IconClose />\n                </Popover.CloseTrigger>\n              </Box>\n            </Popover.Content>\n          </Popover.Positioner>\n        </Popover.Root>\n      </Box>;\n  }\n}',...Overview.parameters?.docs?.source}}},AddingAnArrow.parameters={...AddingAnArrow.parameters,docs:{...AddingAnArrow.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return <Box height="160px">\n        <Popover.Root>\n          <Popover.Trigger asChild>\n            <Button>Open Popover</Button>\n          </Popover.Trigger>\n          <Popover.Positioner>\n            <Popover.Content>\n              <Popover.Arrow>\n                <Popover.ArrowTip />\n              </Popover.Arrow>\n              <Stack gap="1">\n                <Popover.Title>Favorite Framework</Popover.Title>\n                <Popover.Description>\n                  Tell us what is your favorite framework and why you love to use it.\n                </Popover.Description>\n              </Stack>\n              <Box position="absolute" top="1" right="1">\n                <Popover.CloseTrigger asChild>\n                  <Icons.IconClose />\n                </Popover.CloseTrigger>\n              </Box>\n            </Popover.Content>\n          </Popover.Positioner>\n        </Popover.Root>\n      </Box>;\n  }\n}',...AddingAnArrow.parameters?.docs?.source}}},OpenAndCloseEvent.parameters={...OpenAndCloseEvent.parameters,docs:{...OpenAndCloseEvent.parameters?.docs,source:{originalSource:"{\n  render: () => {\n    return <Box height=\"160px\">\n        <Popover.Root onOpenChange={open => alert(open ? 'opened' : 'closed')}>\n          <Popover.Trigger>\n            <Button>\n              Click Me <Popover.Indicator>{'>'}</Popover.Indicator>\n            </Button>\n          </Popover.Trigger>\n          <Popover.Positioner>\n            <Popover.Content>\n              <Popover.Title>Title</Popover.Title>\n              <Popover.Description>Description</Popover.Description>\n            </Popover.Content>\n          </Popover.Positioner>\n        </Popover.Root>\n      </Box>;\n  }\n}",...OpenAndCloseEvent.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'() => {\n  const [isOpen, setIsOpen] = useState(false);\n  return <Box height="160px">\n      <Popover.Root open={isOpen}>\n        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>\n        <Popover.Positioner>\n          <Popover.Content>\n            <Popover.Arrow>\n              <Popover.ArrowTip />\n            </Popover.Arrow>\n            <Stack gap="1">\n              <Popover.Title>Favorite Framework</Popover.Title>\n              <Popover.Description>\n                Tell us what is your favorite framework and why you love to use it.\n              </Popover.Description>\n            </Stack>\n            <Box position="absolute" top="1" right="1">\n              <Popover.CloseTrigger asChild>\n                <Icons.IconClose />\n              </Popover.CloseTrigger>\n            </Box>\n          </Popover.Content>\n        </Popover.Positioner>\n      </Popover.Root>\n    </Box>;\n}',...Controlled.parameters?.docs?.source}}},CloseBehavior.parameters={...CloseBehavior.parameters,docs:{...CloseBehavior.parameters?.docs,source:{originalSource:'() => {\n  return <Box height="160px">\n      <Popover.Root closeOnEsc={false} closeOnInteractOutside={false}>\n        <Popover.Trigger asChild>\n          <Button>Open Popover</Button>\n        </Popover.Trigger>\n        <Popover.Positioner>\n          <Popover.Content>\n            <Popover.Arrow>\n              <Popover.ArrowTip />\n            </Popover.Arrow>\n            <Stack gap="1">\n              <Popover.Title>Favorite Framework</Popover.Title>\n              <Popover.Description>\n                Tell us what is your favorite framework and why you love to use it.\n              </Popover.Description>\n            </Stack>\n            <Box position="absolute" top="1" right="1">\n              <Popover.CloseTrigger asChild>\n                <Icons.IconClose />\n              </Popover.CloseTrigger>\n            </Box>\n          </Popover.Content>\n        </Popover.Positioner>\n      </Popover.Root>\n    </Box>;\n}',...CloseBehavior.parameters?.docs?.source}}},Positioning.parameters={...Positioning.parameters,docs:{...Positioning.parameters?.docs,source:{originalSource:'() => <Box height="160px">\n    <Popover.Root positioning={{\n    placement: \'left-start\',\n    gutter: 16,\n    offset: {\n      mainAxis: 12,\n      crossAxis: 12\n    }\n  }}>\n      <Popover.Trigger asChild>\n        <Button>Open Popover</Button>\n      </Popover.Trigger>\n      <Popover.Positioner>\n        <Popover.Content>\n          <Popover.Arrow>\n            <Popover.ArrowTip />\n          </Popover.Arrow>\n          <Stack gap="1">\n            <Popover.Title>Favorite Framework</Popover.Title>\n            <Popover.Description>\n              Tell us what is your favorite framework and why you love to use it.\n            </Popover.Description>\n          </Stack>\n          <Box position="absolute" top="1" right="1">\n            <Popover.CloseTrigger asChild>\n              <Icons.IconClose />\n            </Popover.CloseTrigger>\n          </Box>\n        </Popover.Content>\n      </Popover.Positioner>\n    </Popover.Root>\n  </Box>',...Positioning.parameters?.docs?.source}}},Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:'() => <Box height="160px">\n    <Popover.Root modal>\n      <Popover.Trigger asChild>\n        <Button>Open Popover</Button>\n      </Popover.Trigger>\n      <Popover.Positioner>\n        <Popover.Content>\n          <Popover.Arrow>\n            <Popover.ArrowTip />\n          </Popover.Arrow>\n          <Stack gap="1">\n            <Popover.Title>Favorite Framework</Popover.Title>\n            <Popover.Description>\n              Tell us what is your favorite framework and why you love to use it.\n            </Popover.Description>\n          </Stack>\n          <Box position="absolute" top="1" right="1">\n            <Popover.CloseTrigger asChild>\n              <Icons.IconClose />\n            </Popover.CloseTrigger>\n          </Box>\n        </Popover.Content>\n      </Popover.Positioner>\n    </Popover.Root>\n  </Box>',...Modal.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","AddingAnArrow","OpenAndCloseEvent","Controlled","CloseBehavior","Positioning","Modal"]}}]);