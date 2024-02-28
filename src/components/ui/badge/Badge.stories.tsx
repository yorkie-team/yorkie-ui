import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge, type BadgeProps } from '@/components/ui';
import { Flex } from '@/styled/jsx';

const meta = {
  title: 'DISPLAY / Badge',
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: `**Size of Badge - default: \`sm\`. **
    \n \`sm:\` height: 20px
    \n \`md:\` height: 24px
    \n \`lg:\` height: 28px`,
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'outline', 'subtle'],
      description: `**Variant of Badge - default: \`solid\`. **
        \n \`solid:\` uniform background color for buttons.
        \n \`outline:\` the border or edge surrounding buttons.
        \n \`subtle:\` typically have a minimalist design and may not draw much attention.
        `,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Overview = (props: BadgeProps) => {
  return <Badge {...props}>Yorkie UI</Badge>;
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Badge {...args} size="sm">
          SM
        </Badge>
        <Badge {...args} size="md">
          MD
        </Badge>
        <Badge {...args} size="lg">
          LG
        </Badge>
      </Flex>
    );
  },
};

export const Variant: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Badge {...args} variant="solid">
          Solid
        </Badge>
        <Badge {...args} variant="outline">
          Outline
        </Badge>
        <Badge {...args} variant="subtle">
          Subtle
        </Badge>
      </Flex>
    );
  },
};
