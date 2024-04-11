import { Input, Label } from '@/components/ui';
import { Flex, Stack } from '@/styled/jsx';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'FORM / Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: `**Size of Input - default: \`md\`. **
      \n \`2xs:\` fontSize: 12px, height: 28px
      \n \`xs:\` fontSize: 12px, height: 32px
      \n \`sm:\`: fontSize: 14px, height: 36px
      \n \`md:\` fontSize: 16px, height: 40px
      \n \`lg:\` fontSize: 16px, height: 44px
      \n \`xl:\` fontSize: 18px, height: 48px
      \n \`2xl:\` fontSize: 30px, height: 64px`,
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled.',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the number input is readonly.',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute of the input. Useful for form submission.',
    },
    title: {
      control: { type: 'text' },
      description: 'The custom id optionally set at `id` if it needs to differ from the id generated.',
    },
    onChange: {
      description: '\nFunction callback when the input is changed. `() => void`',
    },
    onFocus: {
      description: '\nFunction callback when the input is focus. `() => void`',
    },
    onMouseEnter: {
      description: '\nFunction when the input is mouse enter. `() => void`',
    },
    onMouseLeave: {
      description: '\nFunction when the input is mouse leave. `() => void`',
    },
    onMouseOver: {
      description: '\nFunction when the input is mouse over. `() => void`',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Text displayed in the input field when it is empty, serving as a hint or suggestion for the user.',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Specifies the maximum number of characters that a user can input into the field.',
    },
    type: {
      control: { type: 'text' },
      description:
        'The type of input, such as "text," "password," "number,"... determining the data type the input field will accept.',
    },
    onBlur: {
      description: '\n Events triggered when the input field gains or loses focus. `() => void`',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Overview: Story = {
  render: (args) => {
    return (
      <Stack gap="1.5" width="2xs">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your Name" {...args} />
      </Stack>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Input {...args} size="2xs" />
        <Input {...args} size="xs" />
        <Input {...args} size="sm" />
        <Input {...args} size="md" />
        <Input {...args} size="lg" />
        <Input {...args} size="xl" />
        <Input {...args} size="2xl" />
      </Flex>
    );
  },
};
