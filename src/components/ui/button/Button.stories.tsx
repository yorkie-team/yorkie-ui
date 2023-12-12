import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/ui';

const meta = {
  title: 'Form / Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  args: {
    children: 'Default',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['link', 'outline', 'ghost', 'fill'],
      },
    },
  },
};
// Examples
export const Basic: Story = {
  render: (args) => {
    return (
      <Button {...args} variant="outline">
        Default
      </Button>
    );
  },
};
