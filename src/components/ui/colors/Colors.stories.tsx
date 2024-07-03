import React from 'react';
import { Box, Grid } from '@/components/ui';
import { token } from '@/styled/tokens';
import type { Token } from '@/styled/tokens/tokens';

import {
  defaultColorLight,
  defaultColorDark,
  blackColor,
  whiteColor,
  grayColorLight,
  grayColorDark,
  neutralColorLight,
  neutralColorDark,
  neutralColor,
  orangeColor,
  grayColor,
  accentColor,
  functionColor,
  borderColor,
  statusColor,
  gradientColor,
} from '@/components/ui/colors/constant';

const meta = {
  title: 'THEME / Colors',
};

export default meta;

interface ColorItem {
  name: string;
  path?: string;
  color: string[];
}

const colors: ColorItem[] = [
  {
    name: 'Primary Color',
    path: 'primarycolor',
    color: orangeColor,
  },
  {
    name: 'Light Primary Color',
    path: 'lightprimarycolor',
    color: defaultColorLight,
  },
  {
    name: 'Dark Primary Color',
    path: 'darkprimarycolor',
    color: defaultColorDark,
  },
  {
    name: 'Black Color',
    path: 'blackcolor',
    color: blackColor,
  },
  {
    name: 'White Color',
    path: 'whitecolor',
    color: whiteColor,
  },
  {
    name: 'Gray Color',
    path: 'graycolor',
    color: grayColor,
  },
  {
    name: 'Light Gray Color',
    path: 'lightgraycolor',
    color: grayColorLight,
  },
  {
    name: 'Dark Gray Color',
    path: 'darkgraycolor',
    color: grayColorDark,
  },
  {
    name: 'Dark Neutral Color',
    path: 'darkneutralcolor',
    color: neutralColorDark,
  },
  {
    name: 'Light Neutral Color',
    path: 'lightneutralcolor',
    color: neutralColorLight,
  },
  {
    name: 'Neutral Color',
    path: 'neutralcolor',
    color: neutralColor,
  },
  {
    name: 'Accent Color',
    path: 'accentcolor',
    color: accentColor,
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
  {
    name: 'Status Color',
    path: 'statuscolor',
    color: statusColor,
  },
  {
    name: 'Gradient Color',
    path: 'gradientcolor',
    color: gradientColor,
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
                        style={{ background: token.var(colors as Token) }}
                        borderRadius="md"
                        borderWidth="thin"
                        borderColor="gray.2 "
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
