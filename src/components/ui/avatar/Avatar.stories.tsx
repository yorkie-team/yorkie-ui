import type { Meta, StoryObj } from '@storybook/react';
import * as Avatar from '@components/ui/avatar';

const meta = {
  title: 'Common / Avatar',
  component: Avatar.Root,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof Avatar.Root>;

export const Overview: Story = {
  args: {
    size: 'md',
    children: (
      <>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
      </>
    ),
  },
};

// Examples
export const AvatarXs: Story = {
  render: (args) => (
    <Avatar.Root size="xs" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const AvatarSm: Story = {
  render: (args) => (
    <Avatar.Root size="sm" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const AvatarMd: Story = {
  render: (args) => (
    <Avatar.Root size="md" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const AvatarLg: Story = {
  render: (args) => (
    <Avatar.Root size="lg" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const AvatarXl: Story = {
  render: (args) => (
    <Avatar.Root size="xl" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const Avatar2xl: Story = {
  render: (args) => (
    <Avatar.Root size="2xl" {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  ),
};

export const WithErrorImage: Story = {
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback>PA</Avatar.Fallback>
      <Avatar.Image src="" alt="avatar" />
    </Avatar.Root>
  ),
};
