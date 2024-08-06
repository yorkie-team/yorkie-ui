import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex } from '@yorkie-ui/core';
const meta = {
  title: 'COMPONENTS / Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: `Specify the size of the button`,
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'outline', 'link'],
      description: `Set the visual style of the button`,
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Set to `true` to make the button unclickable and visually inactive',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hidden: {
      control: { type: 'boolean' },
      description: 'Set to `true` to hide the button',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'Display text or elements inside the button',
    },
    colorPalette: {
      control: { type: 'radio' },
      options: [
        'accent',
        'neutral',
        'success',
        'info',
        'warning',
        'danger',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
        'gray',
        'white',
        'transparent',
      ],
      description: 'Apply a predefined color palette to the button',
      table: {
        defaultValue: { summary: 'accent' },
      },
    },
  },
  args: {
    size: 'md',
    variant: 'solid',
    colorPalette: 'accent',
    disabled: false,
    hidden: false,
    children: 'Default',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: (args) => {
    return <Button {...args}>{args.children}</Button>;
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="200" alignItems="center">
        <Button {...args} size="sm">
          SM
        </Button>
        <Button {...args} size="md">
          MD
        </Button>
        <Button {...args} size="lg">
          LG
        </Button>
      </Flex>
    );
  },
};

export const Variant: Story = {
  render: (args) => {
    return (
      <Flex gap="200" alignItems="center">
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <>
        <Button {...args} disabled>
          Disabled
        </Button>
      </>
    );
  },
};

export const ColorPalette: Story = {
  render: (args) => {
    return (
      <>
        <Button {...args} colorPalette="red">
          Color Palette
        </Button>
      </>
    );
  },
};
