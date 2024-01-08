import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/avatar';

const meta = {
  title: 'Common / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    src: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Overview: Story = {
  render: (args) => <Avatar src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

// Examples
export const AvatarXs: Story = {
  render: (args) => <Avatar size="xs" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const AvatarSm: Story = {
  render: (args) => <Avatar size="sm" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const AvatarMd: Story = {
  render: (args) => <Avatar size="md" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const AvatarLg: Story = {
  render: (args) => <Avatar size="lg" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const AvatarXl: Story = {
  render: (args) => <Avatar size="xl" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const Avatar2xl: Story = {
  render: (args) => <Avatar size="2xl" src="https://i.pravatar.cc/300" name="John Doe" {...args} />,
};

export const WithNameOnly: Story = {
  render: (args) => <Avatar name="John Doe" {...args} />,
};

export const WithNoUserData: Story = {
  render: (args) => <Avatar {...args} />,
};
