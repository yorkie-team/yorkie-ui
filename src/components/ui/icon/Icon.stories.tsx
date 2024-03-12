import { Icon } from '@/components/ui';

import { DiamondIcon } from 'lucide-react';
import { Flex } from '@/styled/jsx';
import type { Meta, StoryObj } from '@storybook/react';
import { CalendarIcon } from '@/components/ui';
const meta = {
  title: 'FORM / Icon',
  component: Icon,
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Overview: Story = {
  render: (args) => {
    return (
      <Icon {...args}>
        <CalendarIcon />
      </Icon>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Icon size="xs" {...args}>
          <CalendarIcon />
        </Icon>
        <Icon size="sm" {...args}>
          <CalendarIcon />
        </Icon>
        <Icon size="md" {...args}>
          <CalendarIcon />
        </Icon>
        <Icon size="xl" {...args}>
          <CalendarIcon />
        </Icon>
        <Icon size="2xl" {...args}>
          <CalendarIcon />
        </Icon>
      </Flex>
    );
  },
};
