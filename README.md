# Yorkie UI

Welcome to the Yorkie UI component library!

# Get started

Yorkie UI is a component library that helps build UIs faster. The goal is to make building UIs more productive.

## Install

UI components are written in React. It requires react: ^18.

Install Yorkie UI to your project.

```
npm install --save yorkie-ui
```

Add styles imports to the root of your project.

```
import 'yorkie-ui/styles.css';
```

### **Use**

Import components you want into your UI

```jsx
import { Button } from 'yorkie-ui';
```

and use them like so

```jsx
const example = () => (
  <Button
    variant="outline"
    onClick={() => {
      console.log('click!');
    }}
  >
    Click me
  </Button>
);
```
