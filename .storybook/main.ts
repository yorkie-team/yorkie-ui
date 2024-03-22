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
  ],
  // ref: https://zenn.dev/nitaking/articles/0d5eb19d6d9529
  webpackFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/styles": path.resolve(__dirname, "../src/styles"),
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
