import * as path from "path";
import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces existing CSS rules to support PostCSS
          {
            test: /\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 },
              },
              {
                // Gets options from `postcss.config.js` in your project root
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },
        ],
      },
    },
  ],
  // ref: https://zenn.dev/nitaking/articles/0d5eb19d6d9529
  webpackFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/styled": path.resolve(__dirname, "../styled-system"),
        "@/stories": path.resolve(__dirname, "../src/stories"),
        "@/lib": path.resolve(__dirname, "../src/lib"),
      };
    }
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    experimentalRSC: true,
  },
};
export default config;
