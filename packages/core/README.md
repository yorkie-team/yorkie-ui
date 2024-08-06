# @yorkie-ui/core

`@yorkie-ui/core` is a component library for React. It provides a basic set of styles and components that can be used to build [homepage and dashboard](https://yorkie.dev) of Yorkie.

## Installation

```bash
npm install @yorkie-ui/core
```

## Usage

Import the styles and components you need from `@yorkie-ui/core`:

```tsx
// import the styles
import '@yorkie-ui/core/styles.css';

// import button component
import { Button } from '@yorkie-ui/core';

const App = () => (
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
