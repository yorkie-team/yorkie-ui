import { Icon } from '@/components/ui';

import { Flex } from '@/styled/jsx';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCalendar } from '@/components/ui';
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
    return <Icon {...args} stroke="orange.default" icon={<IconCalendar />} />;
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Icon {...args} size="xs" stroke="black.a11" icon={<IconCalendar />} />
        <Icon {...args} size="sm" stroke="black.a10" icon={<IconCalendar />} />
        <Icon {...args} size="md" stroke="black.a9" icon={<IconCalendar />} />
        <Icon {...args} size="lg" stroke="black.a8" icon={<IconCalendar />} />
        <Icon {...args} size="xl" stroke="black.a7" icon={<IconCalendar />} />
        <Icon {...args} size="2xl" stroke="black.a6" icon={<IconCalendar />} />
      </Flex>
    );
  },
};
