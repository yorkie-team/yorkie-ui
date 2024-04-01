import React from 'react';
import classNames from 'classnames/bind';
import { Grid, GridItem, Box } from '@/components/ui';
import styles from '@/components/ui/grid/grid.module.css';
const cx = classNames.bind(styles);

const gridTemplateColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridTemplateRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridColumn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full'];
const gridRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'full'];
const gridAutoColumns = ['min', 'max', 'fr'];
const gridAutoRows = ['min', 'max', 'fr'];

const meta = {
  title: 'LAYOUT / Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'number' },
      description: 'Column widths are integer values between 1 and 12.',
    },
    gap: {
      control: { type: 'number' },
      description: 'Controlling the gutters between grid and flexbox items.',
    },
    gridAutoFlow: {
      control: { type: 'number' },
      description: 'Control the flow of grid items within.',
    },
    gridArea: {
      control: { type: 'text' },
      description:
        'Property allows you to assign a name to a grid item, which can then be referenced in the placement of grid items within the grid container..',
    },
    gridTemplateColumns: {
      options: gridTemplateColumns,
      mapping: gridTemplateColumns,
      control: {
        type: 'radio',
        labels: gridTemplateColumns,
      },
      description: 'Define the columns.',
    },
    gridTemplateRows: {
      options: gridTemplateRows,
      mapping: gridTemplateRows,
      control: {
        type: 'radio',
        labels: gridTemplateRows,
      },
      description: 'Define the rows.',
    },
    gridColumn: {
      options: gridColumn,
      mapping: gridColumn,
      control: {
        type: 'radio',
        labels: gridColumn,
      },
      description: 'Control the placement of grid items along the column axis.',
    },
    gridColumnEnd: {
      control: { type: 'number' },
      description: 'Control the flow of grid items within a Grid container.',
    },
    gridColumnGap: {
      control: { type: 'number' },
      description: 'Control the flow of grid items within a Grid container.',
    },
    gridColumnStart: {
      control: { type: 'number' },
      description: 'Control the flow of grid items within a Grid container.',
    },
    gridRow: {
      options: gridRow,
      mapping: gridRow,
      control: {
        type: 'radio',
        labels: gridRow,
      },
      description: 'Control the placement of grid items along the row axis.',
    },

    gridRowEnd: {
      control: { type: 'number' },
      description: 'Specify where the grid item should end along the row axis.',
    },
    gridRowGap: {
      control: { type: 'number' },
      description: 'Define the size of the gap between rows.',
    },
    gridRowStart: {
      control: { type: 'number' },
      description: 'Specify where the grid item should start along the row axis.',
    },
    gridAutoColumns: {
      options: gridAutoColumns,
      mapping: gridAutoColumns,
      control: {
        type: 'radio',
        labels: gridAutoColumns,
      },
      description: 'Define the size of implicitly-created columns.',
    },
    gridAutoRows: {
      options: gridAutoRows,
      mapping: gridAutoRows,
      control: {
        type: 'radio',
        labels: gridAutoRows,
      },
      description: 'Define the size of implicitly-created rows.',
    },
    colSpan: {
      control: { type: 'number' },
      description: '\n use in`<GridItem />`: The number of span columns.',
    },
    rowSpan: {
      control: { type: 'number' },
      description: '\n use in`<GridItem />`: The number of span row.',
    },
    GridRow: {
      control: { type: 'number' },
      description: '\n use in`<GridItem />`: The placement of grid items along the row axis .',
    },
    colStar: {
      control: { type: 'number' },
      description: '\n use in`<GridItem />`: Set columns to stretch proportionally based on available space.',
    },
    colEnd: {
      control: { type: 'number' },
      description: '\n use in`<GridItem />`: Set rows to stretch proportionally based on available space.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Grid columns={4}>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          Column 1
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          Column 2
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          Column 3
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          Column 4
        </Box>
      </Grid>
    );
  },
};

export const ResponsiveGrid = {
  render: () => {
    return (
      <Grid gap={6} gridTemplateColumns={{ base: 1, sm: 4, md: 6, lg: 10, xl: 12 }}>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          1
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          2
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          3
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          4
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          5
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          6
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          7
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          8
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          9
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          10
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          11
        </Box>
        <Box className={cx('item')} color="accent.fg" bg="accent.default">
          12
        </Box>
      </Grid>
    );
  },
};

export const TemplateColumns = {
  render: () => {
    return (
      <Grid gap={6} columns={4}>
        <GridItem h="10" bg="accent.default" />
        <GridItem h="10" bg="accent.default" />
        <GridItem h="10" bg="accent.default" />
        <GridItem h="10" bg="accent.default" />
      </Grid>
    );
  },
};

export const Spanning = {
  render: () => {
    return (
      <Grid h="200px" gridTemplateRows={'repeat(2, 1fr)'} gridTemplateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem gridRow={2} colSpan={1} bg="accent.default" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="accent.default" />
      </Grid>
    );
  },
};

export const StartingEnding = {
  render: () => {
    return (
      <Grid gridTemplateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={2} h="10" bg="tomato" />
        <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip" />
      </Grid>
    );
  },
};

export const StartEndRow = {
  render: () => {
    return (
      <Grid gap={4} gridRow={3} gridAutoFlow="row">
        <GridItem h="20" bg="tomato" gridRowStart={2} gridRow={2} />
        <GridItem h="20" bg="papayawhip" gridRowEnd={3} gridRow={2} />
        <GridItem h="20" bg="tomato" gridRowStart={1} gridRowEnd={4} />
      </Grid>
    );
  },
};

export const StartEndColumns = {
  render: () => {
    return (
      <Grid gap={4} gridColumn={3}>
        <GridItem h="16" bg="tomato" gridColumnStart={2} gridColumn={4} />
        <GridItem h="16" bg="papayawhip" gridColumnStart={1} gridColumnEnd={3} />
        <GridItem h="16" bg="tomato" gridColumnEnd={7} gridColumn={2} />
        <GridItem h="16" bg="tomato" gridColumnStart={1} gridColumnEnd={7} />
      </Grid>
    );
  },
};

export const TemplateAreas = {
  render: () => {
    return (
      <Grid
        gridTemplateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="tomato" gridArea={'header'}>
          Header
        </GridItem>
        <GridItem pl="2" bg="tomato" gridArea={'nav'}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="tomato" gridArea={'main'}>
          Main
        </GridItem>
        <GridItem pl="2" bg="tomato" gridArea={'footer'}>
          Footer
        </GridItem>
      </Grid>
    );
  },
};
