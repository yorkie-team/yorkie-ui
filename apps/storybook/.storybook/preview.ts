import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import '@yorkie-ui/core/dist/styles.css';
import './preview.css';

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
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
