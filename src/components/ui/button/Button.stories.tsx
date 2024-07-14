import type { Meta, StoryObj } from '@storybook/react';
import { Button, Icons, Flex, Text } from '@/components/ui';
const meta = {
  title: 'FORM / Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: `**Size of Button - default: \`md\`. **
      \n \`xs:\` fontSize: 12px, height: 32px
      \n \`sm:\`: fontSize: 14px, height: 36px
      \n \`md:\` fontSize: 14px, height: 40px
      \n \`lg:\` fontSize: 16px, height: 44px
      \n \`xl:\` fontSize: 16px, height: 48px
      \n \`2xl:\` fontSize: 18px, height: 64px `,
    },
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'outline', 'ghost', 'link'],
      description: `**Variant of Button - default: \`solid\`. **
      \n \`solid:\` uniform background color for buttons
      \n \`outline:\` the border or edge surrounding buttons
      \n \`ghost:\` style characterized by a transparent or semi-transparent background and a visible border
      \n \`link:\` styles designed to resemble traditional hyperlinks`,
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Unavailable for selection',
    },
    hidden: {
      control: { type: 'boolean' },
      description: 'hidden for buttons',
    },
    children: {},
    colorPalette: {
      control: { type: 'text' },
      description: 'Use the defined color codes in the system to change the background for the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  args: {
    children: 'Default',
  },
};

export const Basic: Story = {
  render: (args) => {
    return (
      <Button {...args} variant="outline">
        Default
      </Button>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Button {...args} size="xs">
          XS
        </Button>
        <Button {...args} size="sm">
          SM
        </Button>
        <Button {...args} size="md">
          MD
        </Button>
        <Button {...args} size="lg">
          LG
        </Button>
        <Button {...args} size="xl">
          XL
        </Button>
        <Button {...args} size="2xl">
          2XL
        </Button>
      </Flex>
    );
  },
};

export const Variant: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="ghost">
          Ghost
        </Button>
        <Button {...args} variant="link">
          Link
        </Button>
      </Flex>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Button {...args} disabled>
          Disabled
        </Button>
      </Flex>
    );
  },
};

export const ColorPalette: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Button {...args} colorPalette="red">
          Color Palette
        </Button>
      </Flex>
    );
  },
};

export const Icon: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Button {...args} icon={<Icons.IconCheck />} position="start">
          Icon Check
        </Button>
      </Flex>
    );
  },
};

export const Link: Story = {
  render: (args) => {
    return (
      <div>
        <Text fontSize="sm" fontWeight="500">
          No Decoration
        </Text>
        <Button {...args} variant="link" decoration="ghost" as="link" href="https://yorkie.dev">
          Button Link
        </Button>
        <Text fontSize="sm" fontWeight="500" marginTop="10">
          Decoration
        </Text>
        <Button {...args} variant="link" decoration="link" as="link" href="https://yorkie.dev">
          Button Link
        </Button>
        <Text fontSize="sm" fontWeight="500" marginTop="10">
          Variant
        </Text>
        <Flex gap="6" align="center">
          <Button {...args} variant="solid" as="link" href="https://yorkie.dev">
            Solid
          </Button>
          <Button {...args} variant="ghost" as="link" href="https://yorkie.dev">
            Outline
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev">
            Ghost
          </Button>
          <Button {...args} variant="link" as="link" href="https://yorkie.dev">
            Link
          </Button>
        </Flex>
        <Text fontSize="sm" fontWeight="500" marginTop="10">
          Size
        </Text>
        <Flex gap="6" align="center">
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="xs">
            XS
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="sm">
            SM
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="md">
            MD
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="lg">
            LG
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="xl">
            XL
          </Button>
          <Button {...args} variant="outline" as="link" href="https://yorkie.dev" size="2xl">
            2XL
          </Button>
        </Flex>
      </div>
    );
  },
};
