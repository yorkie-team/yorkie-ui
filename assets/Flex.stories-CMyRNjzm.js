import{j as e}from"./jsx-runtime-DEdD30eg.js";import{F as l,B as n}from"./Flex-Dsiof3wt.js";const r=["flex-start","flex-end","center","space-between","space-around","space-evenly"],o=["flex-start","flex-end","center","baseline","stretch"],p={title:"LAYOUT / Flex",component:l,argTypes:{direction:{options:["row","row-reverse","column","column-reverse"],control:{type:"radio"},description:"The direction of the flex container."},justifyContent:{options:r,mapping:r,control:{type:"radio",labels:r},description:"Used to align child elements along the main axis of the container."},alignItems:{options:o,mapping:o,control:{type:"radio",labels:o},description:"Used to align child elements along the main axis of the container."},gap:{control:{type:"number"},description:"Controlling the gutters between grid and flexbox items."}},args:{direction:"row",gap:"0",justifyContent:"flex-start",alignItems:"stretch"}},t={render:c=>e.jsxs(l,{...c,children:[e.jsx(n,{children:"1"}),e.jsx(n,{children:"2"}),e.jsx(n,{children:"3"}),e.jsx(n,{children:"4"})]})};var s,i,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <Flex {...args}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Flex>;
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const d=["Overview"],x=Object.freeze(Object.defineProperty({__proto__:null,Overview:t,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{x as F,t as O};
