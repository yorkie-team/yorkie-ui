const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import type { AddonOptionsBabel } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsBabel = {
  istanbul: {
    include: ['**/src/*'],
    exclude: ['**/styled-system/**'],
    excludeNodeModules: true,
  },
};

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-coverage',
      options: {
        ...coverageConfig,
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.js'],
      }),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@styled': path.resolve(__dirname, '../styled-system'),
    };
    return config;
  },
  typescript: {
    reactDocgen: false,
  },
};
