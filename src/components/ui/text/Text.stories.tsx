import React from 'react';
import { Text } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TYPOGRAPHY / Text',
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'Changes the semantic meaning without affecting the visual style..',
    },
    size: {
      control: { type: 'text' },
      description:
        'Change the font size include: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` and `7xl`.',
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'Change the font weight.',
    },
  },
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export default meta;

export const Overview: Story = {
  render: (args) => {
    return (
      <>
        <Text {...args} as="p">
          This is a <strong>p</strong> element.
        </Text>
        <Text {...args} as="label">
          This is a <strong>label</strong> element.
        </Text>
        <Text {...args} as="div">
          This is a <strong>div</strong> element.
        </Text>
        <Text {...args} as="span">
          This is a <strong>span</strong> element.
        </Text>
      </>
    );
  },
};

export const FontSize = () => {
  return (
    <>
      <Text fontSize="xs">Yorike</Text>
      <Text fontSize="sm">Yorike</Text>
      <Text fontSize="md">Yorike</Text>
      <Text fontSize="lg">Yorike</Text>
      <Text fontSize="xl">Yorike</Text>
      <Text fontSize="2xl">Yorike</Text>
      <Text fontSize="3xl">Yorike</Text>
      <Text fontSize="4xl">Yorike</Text>
      <Text fontSize="5xl">Yorike</Text>
      <Text fontSize="6xl">Yorike</Text>
      <Text fontSize="7xl">Yorike</Text>
      <Text fontSize="8xl">Yorike</Text>
      <Text fontSize="9xl">Yorike</Text>
    </>
  );
};

export const FontWeight = () => {
  return (
    <>
      <Text fontWeight="light">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="normal">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="medium">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="semibold">Sphinx of black quartz, judge my vow.</Text>
      <Text fontWeight="bold">Sphinx of black quartz, judge my vow.</Text>
    </>
  );
};

export const ResponsiveFont = () => {
  return (
    <>
      <Text fontSize={{ base: 'sm', md: 'md', lg: '3xl' }}>Responsive a Text</Text>
      <Text
        fontSize={{ base: 'sm', md: 'md', lg: '3xl' }}
        fontWeight={{ base: 'normal', md: 'medium', lg: 'semibold' }}
      >
        Responsive a Heading
      </Text>
    </>
  );
};
