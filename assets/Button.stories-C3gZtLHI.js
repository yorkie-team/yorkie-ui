import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as t,F as P}from"./Flex-Dsiof3wt.js";const D={title:"COMPONENTS / Button",component:t,argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"],description:"Specify the size of the button",table:{defaultValue:{summary:"md"}}},variant:{control:{type:"radio"},options:["solid","outline","link"],description:"Set the visual style of the button",table:{defaultValue:{summary:"solid"}}},disabled:{control:{type:"boolean"},description:"Set to `true` to make the button unclickable and visually inactive",table:{defaultValue:{summary:"false"}}},hidden:{control:{type:"boolean"},description:"Set to `true` to hide the button",table:{defaultValue:{summary:"false"}}},children:{description:"Display text or elements inside the button"},colorPalette:{control:{type:"radio"},options:["accent","neutral","success","info","warning","danger","red","orange","yellow","green","blue","purple","gray","white","transparent"],description:"Apply a predefined color palette to the button",table:{defaultValue:{summary:"accent"}}}},args:{size:"md",variant:"solid",colorPalette:"accent",disabled:!1,hidden:!1,children:"Default"}},n={render:r=>e.jsx(t,{...r,children:r.children})},a={render:r=>e.jsxs(P,{gap:"200",alignItems:"center",children:[e.jsx(t,{...r,size:"sm",children:"SM"}),e.jsx(t,{...r,size:"md",children:"MD"}),e.jsx(t,{...r,size:"lg",children:"LG"})]})},s={render:r=>e.jsxs(P,{gap:"200",alignItems:"center",children:[e.jsx(t,{...r,variant:"solid",children:"Solid"}),e.jsx(t,{...r,variant:"outline",children:"Outline"}),e.jsx(t,{...r,variant:"link",children:"Link"})]})},o={render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...r,disabled:!0,children:"Disabled"})})},i={render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{...r,colorPalette:"red",children:"Color Palette"})})},l={render:r=>e.jsx(e.Fragment,{children:e.jsx(t,{asChild:!0,...r,children:e.jsx("a",{href:"https://yorkie.dev/yorkie-ui/",target:"_blank",children:"Yorkie UI"})})})};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Flex gap="200" alignItems="center">
        <Button {...args} size="sm">
          SM
        </Button>
        <Button {...args} size="md">
          MD
        </Button>
        <Button {...args} size="lg">
          LG
        </Button>
      </Flex>;
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    return <Flex gap="200" alignItems="center">
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </Flex>;
  }
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var x,y,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Button {...args} disabled>
          Disabled
        </Button>
      </>;
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,j,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Button {...args} colorPalette="red">
          Color Palette
        </Button>
      </>;
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var v,z,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <>
        <Button asChild {...args}>
          <a href="https://yorkie.dev/yorkie-ui/" target="_blank">
            Yorkie UI
          </a>
        </Button>
      </>;
  }
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const F=["Basic","Sizes","Variant","Disabled","ColorPalette","AsChild"],O=Object.freeze(Object.defineProperty({__proto__:null,AsChild:l,Basic:n,ColorPalette:i,Disabled:o,Sizes:a,Variant:s,__namedExportsOrder:F,default:D},Symbol.toStringTag,{value:"Module"}));export{l as A,O as B,i as C,o as D,a as S,s as V,n as a};
