import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as s}from"./index-CqV40poF.js";import"./index-RYns6xqu.js";import"./iframe-rWO2jiqQ.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"get-started",children:"Get started"}),`
`,n.jsx(e.p,{children:"Yorkie UI is a component library that helps build UIs faster. The goal is to make building UIs more productive."}),`
`,n.jsx(e.h2,{id:"install",children:"Install"}),`
`,n.jsx(e.p,{children:"UI components are written in React. It requires react: ^18."}),`
`,n.jsx(e.p,{children:"Install Yorkie UI to your project."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`npm install --save yorkie-ui
`})}),`
`,n.jsx(e.p,{children:"Add styles imports to the root of your project."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`import 'yorkie-ui/styles.css';

`})}),`
`,n.jsx(e.h3,{id:"use",children:n.jsx(e.strong,{children:"Use"})}),`
`,n.jsx(e.p,{children:"Import components you want into your UI"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button } from 'yorkie-ui';
`})}),`
`,n.jsx(e.p,{children:"and use them like so"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const example = () => (
  <Button
    variant="outline"
    onClick={() => {
      console.log('click!');
    }}
  >
    Click me
  </Button>
);
`})})]})}function u(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{u as default};
