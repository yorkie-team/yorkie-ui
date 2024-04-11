import React from 'react';
import { Box, HStack, VStack, Stack, Grid, GridItem } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  title: 'LAYOUT / Stack',
  component: Stack,
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const Empty: Story = {};


export const Overview: Story = {
  render: () => {
    return (
      <>
        <HStack gap="6">
          <Box px="6" py="10" bg='orange.3'>
            1
          </Box>
          <Box px="6" py="10" bg='orange.4'>
            2
          </Box>
          <Box px="6" py="10" bg='orange.5'>
            3
          </Box>
        </HStack>
        <Stack direction={['column', 'row']} gap='24px' mt="5">
          <Box px="6" py="10" bg='orange.9'>
            1
          </Box>
          <Box px="6" py="10" bg='orange.10'>
            2
          </Box>
          <Box px="6" py="10" bg='orange.11'>
            3
          </Box>
        </Stack>
        <VStack
          gap="10"
          justify='center'
        >
          <Box px="6" py="10" bg='orange.6'>
            1
          </Box>
          <Box px="6" py="10" bg='orange.7'>
            2
          </Box>
          <Box px="6" py="10" bg='orange.8'>
            3
          </Box>
        </VStack>
      </>
    );
  },
};