import React from 'react';
import { Box, Grid } from '@/components/ui';
import type { Token } from '@/styled/tokens/tokens';

import {
  redColor,
  orangeColor,
  yellowColor,
  greenColor,
  blueColor,
  purpleColor,
  grayColor,
  functionColor,
  borderColor,
} from '@/components/ui/colors/constant';

const meta = {
  title: 'THEME / Colors',
};

export default meta;

interface ColorItem {
  name: string;
  path?: string;
  color: Token[];
}

const colors: ColorItem[] = [
  {
    name: 'Red',
    path: 'redcolor',
    color: redColor,
  },
  {
    name: 'Orange',
    path: 'orangecolor',
    color: orangeColor,
  },
  {
    name: 'Yellow',
    path: 'yellowcolor',
    color: yellowColor,
  },
  {
    name: 'Green',
    path: 'greencolor',
    color: greenColor,
  },
  {
    name: 'Blue',
    path: 'bluecolor',
    color: blueColor,
  },
  {
    name: 'Purple',
    path: 'purplecolor',
    color: purpleColor,
  },
  {
    name: 'Gray',
    path: 'graycolor',
    color: grayColor,
  },
  {
    name: 'Function Color',
    path: 'functioncolor',
    color: functionColor,
  },
  {
    name: 'Border Color',
    path: 'bordercolor',
    color: borderColor,
  },
];
export const Overview = {
  render: () => {
    return (
      <>
        {colors.map((color, index) => {
          return (
            <div key={index}>
              <Box fontSize={'2xl'} fontWeight="semibold" pt="30" id={color.path}>
                {color.name}
              </Box>
              <Grid columns={6}>
                {color.color.map((colors, index) => {
                  console.log(colors);
                  return (
                    <div key={index}>
                      <Box
                        h="50px"
                        mt="10"
                        width="100%"
                        borderRadius="md"
                        borderWidth="thin"
                        borderColor="gray.200"
                        bg={colors.substring('colors.'.length)}
                      ></Box>
                      <p>{colors.substring('colors.'.length)}</p>
                    </div>
                  );
                })}
              </Grid>
            </div>
          );
        })}
      </>
    );
  },
};
