import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui';

const meta = {
  title: 'Common / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Overview: Story = {
  args: {
    size: 'md',
    children: (
      <>
        <AvatarFallback>PA</AvatarFallback>
        <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
      </>
    ),
  },
};

// Examples
export const AvatarXs: Story = {
  render: (args) => (
    <Avatar size="xs" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const AvatarSm: Story = {
  render: (args) => (
    <Avatar size="sm" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const AvatarMd: Story = {
  render: (args) => (
    <Avatar size="md" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const AvatarLg: Story = {
  render: (args) => (
    <Avatar size="lg" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const AvatarXl: Story = {
  render: (args) => (
    <Avatar size="xl" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const Avatar2xl: Story = {
  render: (args) => (
    <Avatar size="2xl" {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar>
  ),
};

export const WithErrorImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>PA</AvatarFallback>
      <AvatarImage src="" alt="avatar" />
    </Avatar>
  ),
};
