import React from 'react';
import { Grid } from '@/components/ui';
import { PropertyTypes, SpacingTokens } from '@/components/ui/props/constant';

const meta = {
  title: 'CONFIG / Props',
  argTypes: {},
};

export default meta;

export const SpacingToken = {
  render: () => {
    const shortProps = Object.keys(SpacingTokens);
    return (
      <>
        <Grid
          bg="gray.2"
          borderBottom={1}
          borderBottomColor={'border.default'}
          borderStyle={'solid'}
          columns={2}
          mt="4"
          p="4"
        >
          <strong>Name </strong> <strong>Size (16px base)</strong>
        </Grid>
        {shortProps.map((value: string) => {
          return (
            <Grid
              borderBottom={1}
              borderBottomColor={'border.default'}
              borderStyle={'solid'}
              columns={2}
              mt="4"
              p="4"
              key={value + 'props'}
            >
              <strong>{value}: </strong> <span>{SpacingTokens[value]}</span>
            </Grid>
          );
        })}
      </>
    );
  },
};

export const ShortProps = {
  render: () => {
    const shortProps = Object.keys(PropertyTypes);
    return (
      <>
        <Grid
          bg="gray.2"
          borderBottom={1}
          borderBottomColor={'border.default'}
          borderStyle={'solid'}
          columns={2}
          mt="4"
          p="4"
        >
          <strong>Short Props </strong> <strong>Full Props</strong>
        </Grid>
        {shortProps.map((value: string) => {
          return (
            <Grid
              borderBottom={1}
              borderBottomColor={'border.default'}
              borderStyle={'solid'}
              columns={2}
              mt="2"
              p="4"
              key={value + 'props'}
            >
              <strong>{value}: </strong> <span>{PropertyTypes[value]}</span>
            </Grid>
          );
        })}
      </>
    );
  },
};
