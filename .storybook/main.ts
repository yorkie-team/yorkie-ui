import * as path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  webpackFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/styles': path.resolve(__dirname, '../src/styles'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/styled': path.resolve(__dirname, '../styled-system'),
        '@/stories': path.resolve(__dirname, '../src/stories'),
        '@/lib': path.resolve(__dirname, '../src/lib'),
      };
    }
    if (config.module) {
      config.module.rules = config.module.rules || []; // Ensure rules is initialized
      config.module.rules.unshift({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false, // Disable SVGO if needed
            },
          },
        ],
      });
    }
    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  features: {
    experimentalRSC: true,
  },
};

export default config;
