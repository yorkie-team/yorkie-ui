import React from 'react';
import { Heading } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TYPOGRAPHY / Heading',
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'Changes the semantic meaning without affecting the visual style.',
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
}satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof Heading>;

export default meta;

export const Overview: Story  = {
  render: (args) => {
    return (
      <Heading {...args} as="h1">
        This is a <strong>H1</strong> element.
      </Heading>
    );
  },
};

export const FontSize = () => {
  return (
    <>
      <Heading fontSize="xs">Ag</Heading>
      <Heading fontSize="sm">Ag</Heading>
      <Heading fontSize="md">Ag</Heading>
      <Heading fontSize="lg">Ag</Heading>
      <Heading fontSize="xl">Ag</Heading>
      <Heading fontSize="2xl">Ag</Heading>
      <Heading fontSize="3xl">Ag</Heading>
      <Heading fontSize="4xl">Ag</Heading>
      <Heading fontSize="5xl">Ag</Heading>
      <Heading fontSize="6xl">Ag</Heading>
      <Heading fontSize="7xl">Ag</Heading>
      <Heading fontSize="8xl">Ag</Heading>
      <Heading fontSize="9xl">Ag</Heading>
    </>
  );
};

export const FontWeight = () => {
  return (
    <>
      <Heading fontWeight="light">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="normal">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="medium">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="semibold">Sphinx of black quartz, judge my vow.</Heading>
      <Heading fontWeight="bold">Sphinx of black quartz, judge my vow.</Heading>
    </>
  );
};

export const ResponsiveFont = () => {
  return (
    <>
      <Heading as="h1" fontSize={{ base: 'sm', md: 'md', lg: '3xl' }}>Responsive a Heading</Heading>
      <Heading as="h1" fontSize={{ base: 'sm', md: 'md', lg: '3xl' }} fontWeight={{ base: 'normal', md: 'medium', lg: 'semibold' }}>Responsive a Heading</Heading>
    </>
  )
}