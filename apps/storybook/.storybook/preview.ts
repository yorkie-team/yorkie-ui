import type { Preview } from '@storybook/react';
import '@yorkie-ui/components/dist/styles.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'THEME', 'CONFIG', 'COMPONENTS'],
        includeName: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
