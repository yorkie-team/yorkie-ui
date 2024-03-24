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
      description: 'Change the font size include: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` and `7xl`.',
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'Change the font weight.',
    },
  },
}satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export default meta;

export const Overview: Story  = {
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
      <Text size="xs">Yorike</Text>
      <Text size="sm">Yorike</Text>
      <Text size="md">Yorike</Text>
      <Text size="lg">Yorike</Text>
      <Text size="xl">Yorike</Text>
      <Text size="2xl">Yorike</Text>
      <Text size="3xl">Yorike</Text>
      <Text size="4xl">Yorike</Text>
      <Text size="5xl">Yorike</Text>
      <Text size="6xl">Yorike</Text>
      <Text size="7xl">Yorike</Text>
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
