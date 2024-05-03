import React from 'react';
import { Link } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TYPOGRAPHY / Link',
  argTypes: {
    href: {
      control: { type: 'text' },
      description: 'Changes the semantic meaning without affecting the visual style..',
    },
    textStyle: {
      control: { type: 'text' },
      description: 'Change the font size include: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` and `7xl`.',
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'Change the font weight.',
    },
  },
}satisfies Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export default meta;

export const Overview: Story  = {
  render: (args) => {
    return (
      <>
      <Link {...args} href="https://yorkie.dev" >
        This is a <strong>a</strong> element.
      </Link>
    </>
    );
  },
};

export const FontSize = () => {
  return (
    <>
      <Link textStyle="xs">Yorike</Link>
      <Link textStyle="sm">Yorike</Link>
      <Link textStyle="md">Yorike</Link>
      <Link textStyle="lg">Yorike</Link>
      <Link textStyle="xl">Yorike</Link>
      <Link textStyle="2xl">Yorike</Link>
      <Link textStyle="3xl">Yorike</Link>
      <Link textStyle="4xl">Yorike</Link>
      <Link textStyle="5xl">Yorike</Link>
      <Link textStyle="6xl">Yorike</Link>
      <Link textStyle="7xl">Yorike</Link>
    </>
  );
};

export const FontWeight = () => {
  return (
    <>
      <Link fontWeight="light">Sphinx of black quartz, judge my vow.</Link>
      <Link fontWeight="normal">Sphinx of black quartz, judge my vow.</Link>
      <Link fontWeight="medium">Sphinx of black quartz, judge my vow.</Link>
      <Link fontWeight="semibold">Sphinx of black quartz, judge my vow.</Link>
      <Link fontWeight="bold">Sphinx of black quartz, judge my vow.</Link>
    </>
  );
};