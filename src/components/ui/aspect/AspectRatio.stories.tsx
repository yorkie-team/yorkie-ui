import React from 'react';
import { AspectRatio } from '@/components/ui';
import Image from 'next/image';
import Yorkie from '@/components/ui/aspect/yorkie.png';

const meta = {
  title: 'LAYOUT / AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: 'number' },
      description:
        'The aspect ratio of the box refers to the proportional relationship between its width and height. Common aspect ratio values include `21:9`, `16:9`, `9:16`, `4:3`, and `1.85:1`.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src={Yorkie} alt="Yorkie" objectFit="cover" />
      </AspectRatio>
    );
  },
};
