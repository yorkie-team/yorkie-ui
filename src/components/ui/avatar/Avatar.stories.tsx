import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/avatar';

const meta = {
  title: 'Common / Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: `**Size of Avatar (default: \`md\`)**
      \n \`xs:\` width: 8px, height: 8px
      \n \`sm:\`: width: 9px, height: 9px
      \n \`md:\` width: 10px, height: 10px
      \n \`lg:\` width: 11px, height: 11px
      \n \`xl:\` width: 12px, height: 12px
      \n \`2xl:\` width: 16px, height: 16px `,
    },
    src: {
      control: { type: 'text' },
      description: `**Image src of Avatar**
      \nIf not provided, the avatar will be displayed by the \`name\` prop if provided or the \`UserIcon\` by default.`,
    },
    name: {
      control: { type: 'text' },
      description: `**Name of Avatar.**
      \nIt will be displayed if the \`src\` prop is omitted.`,
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
