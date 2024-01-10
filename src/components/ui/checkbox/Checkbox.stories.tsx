import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';

const meta = {
  title: 'Common / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: { type: 'radio' },
      options: ['indeterminate', false, true],
    },
    colorPalette: {
      control: { type: 'radio' },
      options: ['red'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Overview: Story = {
  render: (args) => <Checkbox {...args}>Label</Checkbox>,
};

//Examples
export const Small: Story = {
  render: (args) => (
    <Checkbox size="sm" {...args}>
      Label
    </Checkbox>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Checkbox size="md" {...args}>
      Label
    </Checkbox>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Checkbox size="lg" {...args}>
      Label
    </Checkbox>
  ),
};

export const DefaultChecked: Story = {
  render: (args) => (
    <Checkbox defaultChecked {...args}>
      Label
    </Checkbox>
  ),
};

export const Indeterminate: Story = {
  render: (args) => (
    <Checkbox checked="indeterminate" {...args}>
      Label
    </Checkbox>
  ),
};

export const WithRedColor: Story = {
  render: (args) => (
    <Checkbox colorPalette="red" defaultChecked {...args}>
      Label
    </Checkbox>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Checkbox disabled {...args}>
      Label
    </Checkbox>
  ),
};
