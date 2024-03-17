import React from 'react';
import { Flex, Box, Spacer, Button } from '@/components/ui';

const propertyHorizontal = ['flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'center'];
const propertyVertical = ['flex-start', 'flex-end', 'center'];
const propertyWrap = ['nowrap', 'wrap', 'wrap-reverse'];
const propertyBasis = ['<length>', 'auto', 'content', 'initial', 'inherit'];

const meta = {
  title: 'LAYOUT / Flex',
  component: Flex,
  argTypes: {
    justifyContent: {
      options: propertyHorizontal,
      mapping: propertyHorizontal,
      control: {
        type: 'radio',
        labels: propertyHorizontal,
      },
      description: 'Used to align child elements along the main axis of the container.',
    },
    alignItems: {
      options: propertyVertical,
      mapping: propertyVertical,
      control: {
        type: 'radio',
        labels: propertyVertical,
      },
      description: 'Used to align child elements along the main axis of the container.',
    },
    gap: {
      control: { type: 'number' },
      description: 'Controlling the gutters between grid and flexbox items.',
    },
    flexWrap: {
      options: propertyWrap,
      mapping: propertyWrap,
      control: {
        type: 'radio',
        labels: propertyWrap,
      },
      description: 'Typically used within the style attribute to control flex container wrapping behavior.',
    },
    flexBasis: {
      options: propertyBasis,
      mapping: propertyBasis,
      control: {
        type: 'radio',
        labels: propertyBasis,
      },
      description:
        'Determine the initial size of a flex item within a flex container before any available space is distributed or any shrinking occurs.',
    },
    flexGrow: {
      control: { type: 'number' },
      description:
        'Specify how much a flex item should grow relative to the other flex items within the same flex container when there is available space along the main axis.',
    },
    flexShrink: {
      control: { type: 'number' },
      description:
        'Determines how much a flex item will shrink relative to the other flex items in the flex container when there is not enough space along the main axis.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Flex minWidth="max-content" alignItems="center" gap="2" justifyContent="space-between">
        <Box p="2" fontWeight={700}>
          Yorkie UI App
        </Box>
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    );
  },
};

export const UseSpacer = {
  render: () => {
    return (
      <Flex>
        <Box p="10" bg="tomato" />
        <Spacer />
        <Box p="10" bg="tomato" />
      </Flex>
    );
  },
};
