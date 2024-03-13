import React from 'react';
import { Grid, GridItem } from '@/styled/jsx';

const meta = {
  title: 'LAYOUT / Grid',
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Grid gap="5">
        <GridItem>Hello</GridItem>
        <GridItem>Hello</GridItem>
        <GridItem>Hello</GridItem>
      </Grid>
    );
  },
};
