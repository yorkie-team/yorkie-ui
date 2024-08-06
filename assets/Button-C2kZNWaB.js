import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as i,af as o,ag as a}from"./index-B6o932E0.js";import{B as l,a as d,S as c,V as h,D as u,C as x,A as j}from"./Button.stories-C3gZtLHI.js";import"./index-RYns6xqu.js";import"./iframe-B36yNtpn.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";import"./Flex-Dsiof3wt.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"button",children:"Button"}),`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#import",children:"Import"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#examples",children:"Examples"})}),`
`]}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from 'yorkie-ui';
`})}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Buttons empower users to take action with a single tap. Incorporate them into your design for a seamless and efficient user experience."}),`
`,e.jsx(o,{of:d,source:{format:!0,code:`
      <Button>
        Default
      </Button>
    `}}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"sizes",children:e.jsx(n.a,{href:"#button-sizes",children:"Sizes"})}),`
`,e.jsxs(n.p,{children:["There are 3 sizes: ",e.jsx(n.code,{children:"sm"}),", ",e.jsx(n.code,{children:"md"})," and ",e.jsx(n.code,{children:"lg"}),"."]}),`
`,e.jsx(o,{of:c,source:{format:!0,code:`
      <Flex gap="200" alignItems="center">
        <Button size="sm">
          SM
        </Button>
        <Button size="md">
          MD
        </Button>
        <Button size="lg">
          LG
        </Button>
      </Flex>
    `}}),`
`,e.jsx(n.h3,{id:"variant",children:e.jsx(n.a,{href:"#button-variant",children:"Variant"})}),`
`,e.jsxs(n.p,{children:["There are 3 types: ",e.jsx(n.code,{children:"solid"}),", ",e.jsx(n.code,{children:"outline"})," and ",e.jsx(n.code,{children:"link"}),"."]}),`
`,e.jsx(n.p,{children:"(The link style has not been implemented yet.)"}),`
`,e.jsx(o,{of:h,source:{format:!0,code:`
      <Flex gap="200" alignItems="center">
        <Button variant="solid">
          Solid
        </Button>
        <Button variant="outline">
          Outline
        </Button>
        <Button variant="link">
          Link
        </Button>
      </Flex>
    `}}),`
`,e.jsx(n.h3,{id:"disabled",children:e.jsx(n.a,{href:"#button-disabled",children:"Disabled"})}),`
`,e.jsxs(n.p,{children:["By using the ",e.jsx(n.code,{children:"disabled"})," prop, you can quickly and easily convey to your users that a button is unavailable for selection."]}),`
`,e.jsx(o,{of:u,source:{format:!0,code:`
        <Button disabled>
          Disabled
        </Button>
    `}}),`
`,e.jsx(n.h3,{id:"color-palette",children:e.jsx(n.a,{href:"#button-color",children:"Color Palette"})}),`
`,e.jsx(n.p,{children:"Use the defined color codes in the system to change the background for the button."}),`
`,e.jsx(o,{of:x,source:{format:!0,code:`
        <Button colorPalette="red">
          Color Palette
        </Button>
    `}}),`
`,e.jsx(n.h3,{id:"renders-as-a-link",children:e.jsx(n.a,{href:"#button-asChild",children:"Renders as a link"})}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"asChild"})," prop to render the button as a link."]}),`
`,e.jsx(o,{of:j,source:{format:!0,code:`
        <Button asChild>
          <a href="https://yorkie.dev/yorkie-ui/" target="_blank">
            Yorkie UI
          </a>
        </Button>
    `}})]})}function w(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{w as default};
