import { forwardRef } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { gridItem, GridItemProperties } from '@/styled/patterns';

export type GridItemProps = HTMLStyledProps<'div'> & GridItemProperties;

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>((props: GridItemProps, ref) => {
  const { colSpan, rowSpan, colStart, rowStart, colEnd, rowEnd, ...rest } = props;
  return (
    <styled.div
      ref={ref}
      className={gridItem({
        colSpan,
        rowSpan,
        colStart,
        rowStart,
        colEnd,
        rowEnd,
      })}
      {...rest}
    />
  );
});
