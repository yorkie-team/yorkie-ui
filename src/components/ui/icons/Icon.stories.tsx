import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Grid, Text } from '@/components/ui';
import * as Icon from './lib';

const icons = [
  { Component: Icon.SlashCircle01Icon, name: 'SlashCircle01Icon' },
  { Component: Icon.Share04Icon, name: 'Share04Icon' },
  { Component: Icon.InfoCircleIcon, name: 'InfoCircleIcon' },
  { Component: Icon.Copy03Icon, name: 'Copy03Icon' },
  { Component: Icon.CheckCircleIcon, name: 'CheckCircleIcon' },
  { Component: Icon.Tool01Icon, name: 'Tool01Icon' },
  { Component: Icon.GitBranch01Icon, name: 'GitBranch01Icon' },
  { Component: Icon.PackageIcon, name: 'PackageIcon' },
  { Component: Icon.BookOpen01Icon, name: 'BookOpen01Icon' },
  { Component: Icon.AlertSquareIcon, name: 'AlertSquareIcon' },
  { Component: Icon.GithubIcon, name: 'GithubIcon' },
  { Component: Icon.DiscordIcon, name: 'DiscordIcon' },
  { Component: Icon.Diamond01Icon, name: 'Diamond01Icon' },
  { Component: Icon.Stars01Icon, name: 'Stars01Icon' },
  { Component: Icon.Cloud02Icon, name: 'Cloud02Icon' },
  { Component: Icon.ChevronRightIcon, name: 'ChevronRightIcon' },
  { Component: Icon.FlipBackwardIcon, name: 'FlipBackwardIcon' },
  { Component: Icon.ChevronLeftIcon, name: 'ChevronLeftIcon' },
  { Component: Icon.MessageSmileCircleIcon, name: 'MessageSmileCircleIcon' },
  { Component: Icon.MessageSquare01Icon, name: 'MessageSquare01Icon' },
  { Component: Icon.CodeSnippet01Icon, name: 'CodeSnippet01Icon' },
  { Component: Icon.ClapperboardIcon, name: 'ClapperboardIcon' },
  { Component: Icon.Lightbulb02Icon, name: 'Lightbulb02Icon' },
  { Component: Icon.PlaySquareIcon, name: 'PlaySquareIcon' },
];

const meta = {
  title: 'FORM / Icon',
  component: Icon.Stars01Icon,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: `**Size of Icon - default: \`md\`. **
      \n \`xs:\` height: 12px, width: 12px
      \n \`sm:\` height: 16px, width: 16px
      \n \`md:\` height: 20px, width: 20px
      \n \`lg:\` height: 24px, width: 24px
      \n \`xl:\` height: 28px, width: 28px
      \n \`2xl:\` height: 32px, width: 32px`,
    },
  },
} satisfies Meta<typeof Icon.Stars01Icon>;

export default meta;

type Story = StoryObj<typeof Icon.Stars01Icon>;

export const Overview: Story = {
  render: (args) => {
    return <Icon.Stars01Icon {...args} color="accent.default" />;
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <Flex gap="6" align="center">
        <Icon.Stars01Icon color="accent.default" size="xs" />
        <Icon.Stars01Icon color="accent.default" size="sm" />
        <Icon.Stars01Icon color="accent.default" size="md" />
        <Icon.Stars01Icon color="accent.default" size="lg" />
        <Icon.Stars01Icon color="accent.default" size="xl" />
        <Icon.Stars01Icon color="accent.default" size="2xl" />
      </Flex>
    );
  },
};

const IconList = () => {
  return (
    <Grid gridTemplateColumns="6">
      {icons.map(({ Component, name }) => (
        <Flex marginBottom="10" justifyContent="center" alignItems="center" flexDirection="column">
          <Component color="gray.default" />
          <Text size="xs" color="neutral.10" marginTop="2">
            {name}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

export const Gallery: Story = {
  render: (args) => {
    return <IconList {...args} />;
  },
};
