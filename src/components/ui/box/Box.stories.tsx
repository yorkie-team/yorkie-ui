import React from 'react';
import { Badge, Box } from '@/components/ui';
import Image from 'next/image';
import Yorkie from '@/stories/overview/yorkie.png';
const meta = {
  title: 'LAYOUT / Box',
  component: Box,
  argTypes: {},
};

export default meta;

export const Overview = {
  render: () => {
    const property = {
      imageUrl: Yorkie,
      imageAlt: 'Thumb yorkie ui',
      views: 312,
      rating: 21,
      title: 'Hello Yorkie',
    };
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} width={400} height={100} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.views} views &bull; {property.rating} ratings
            </Box>
          </Box>

          <Box mt="3" fontWeight="semibold" lineHeight="tight">
            {property.title}
          </Box>
        </Box>
      </Box>
    );
  },
};
