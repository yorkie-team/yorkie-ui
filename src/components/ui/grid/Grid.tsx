import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { grid, GridProperties } from '@/styled/patterns';
export type GridProps = HTMLStyledProps<'div'> & GridProperties;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (props: GridProps, ref) => {
    const { gap, columnGap, rowGap, columns, minChildWidth} = props;
    const StyledGrid = styled('div',{
      base: {
        gap,
        columnGap,
        rowGap,
        columns,
        minChildWidth,
      } as GridProps
    });
    return <StyledGrid ref={ref} className={grid({ gap, columnGap, rowGap, columns, minChildWidth })} {...props}/>;
  },
);