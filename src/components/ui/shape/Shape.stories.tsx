import React from 'react';
import { Box, Center, Circle, HStack, Square, Icons } from '@/components/ui';

const meta = {
  title: 'LAYOUT / Shape',
  component: Center,
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description:
        'The aspect ratio of the box refers to the proportional relationship between its width and height. Common aspect ratio values include `21:9`, `16:9`, `9:16`, `4:3`, and `1.85:1`.',
    },
  },
};

export default meta;

export const CenterShape = {
  render: () => {
    return (
      <Box>
        <Center bg="tomato" h="40px" color="white">
          This is the Center
        </Center>
        <HStack mt="40px">
          <Center w="40px" h="40px" bg="tomato">
            <Icons.IconDate />
          </Center>
          <Center w="40px" h="40px" bg="tomato" color="white">
            <Box fontWeight="bold" fontSize="lg">
              1
            </Box>
          </Center>
        </HStack>
      </Box>
    );
  },
};

export const CircleShape = {
  render: () => {
    return (
      <HStack mt="40px">
        <Circle size="40px" bg="tomato" color="white">
          <Icons.IconDate />
        </Circle>
      </HStack>
    );
  },
};

export const SquareShape = {
  render: () => {
    return (
      <Box>
        <HStack mt="40px">
          <Square size="40px" bg="tomato" color="white">
            <Icons.IconDate />
          </Square>
        </HStack>
      </Box>
    );
  },
};
