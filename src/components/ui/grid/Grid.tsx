import { forwardRef } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { grid, GridProperties } from '@/styled/patterns';
export type GridProps = HTMLStyledProps<'div'> & GridProperties;

export const Grid = forwardRef<HTMLDivElement, GridProps>((props: GridProps, ref) => {
  const { gap, columnGap, rowGap, columns, minChildWidth, className, ...rest } = props;
  return (
    <styled.div
      {...rest}
      ref={ref}
      className={grid({ gap, columnGap, rowGap, columns, minChildWidth }) + ' ' + className ?? ''}
    />
  );
});
