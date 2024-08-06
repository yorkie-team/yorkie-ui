import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Button } from '@yorkie-ui/core';

const propertyHorizontal = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const propertyVertical = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

const meta = {
  title: 'LAYOUT / Flex',
  component: Flex,
  argTypes: {
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: { type: 'radio' },
      description: 'The direction of the flex container.',
    },
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
  },
  args: {
    direction: 'row',
    gap: '0',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Overview: Story = {
  render: (args) => {
    return (
      <Flex {...args}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </Flex>
    );
  },
};
