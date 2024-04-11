import * as React from 'react';
import type { Preview } from '@storybook/react';
import '@/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'THEME', 'CONFIG', 'TYPOGRAPHY', 'LAYOUT'],
        includeName: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

export default preview;
