# Yorkie UI

Welcome to the Yorkie UI component library!

# Get started

Yorkie UI is a component library that helps build UIs faster. The goal is to make building UIs more productive.

## Install

UI components are written in React. It requires Storybook version 8.0.0, and up. types/react: ^18.2.68, react: ^18.

Add Yorkie UI to your project.

```

npm install --save yorkie-ui

```

### **Use**

Import components you want into your UI

```jsx

import { Button, Badge } from'yorkie-ui';

```

and use them like so

```jsx

const example = () => (

<div>

    <Buttonvariant="solid"onClick={()=>0}>

        Do something

    </Button>

    <BadgeonClick={this.clear}>+1</Badge>

</div>

);

```
