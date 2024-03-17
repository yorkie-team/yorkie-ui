import React from 'react';
import { Text } from '@/components/ui';

const meta = {
  title: 'TYPOGRAPHY / Text',
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'Changes the semantic meaning without affecting the visual style..',
    },
    size: {
      control: { type: 'text' },
      description: 'Change the font size.',
    },
    fontWeight: {
      control: { type: 'text' },
      description: 'Change the font weight.',
    },
  },
};

export default meta;

export const Overview = () => {
  return (
    <>
      <Text as="p">
        This is a <strong>p</strong> element.
      </Text>
      <Text as="label">
        This is a <strong>label</strong> element.
      </Text>
      <Text as="div">
        This is a <strong>div</strong> element.
      </Text>
      <Text as="span">
        This is a <strong>span</strong> element.
      </Text>
    </>
  );
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
