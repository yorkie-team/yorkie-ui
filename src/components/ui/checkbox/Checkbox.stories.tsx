import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';

const meta = {
  title: 'FORM / Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: `**Size of Checkbox control - default: \`md\`.**
      \n \`sm:\`: width: 4px, height: 4px
      \n \`md:\` width: 5px, height: 5px
      \n \`lg:\` width: 6px, height: 6px`,
    },
    checked: {
      control: { type: 'radio' },
      options: ['indeterminate', false, true],
      description: `**Checked state**
      \nUsing \`checked = "indeterminate"\` to signifies a checkbox with only some of its related options selected.
      \n\`true\` and \`false\` states are set automatically and **cannot be passed** to the \`checked\` prop`,
    },
    colorPalette: {
      control: { type: 'radio' },
      options: ['red'],
      description: `**Color of Checkbox control**
      \nThe color specified in the **color system is required.**`,
    },
    disabled: {
      control: { type: 'boolean' },
      description: `**Disabled state of Checkbox**
      \nUsing \`true\` state to prevent interaction or \`false\` to enable it.`,
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
