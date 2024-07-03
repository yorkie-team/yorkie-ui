import { forwardRef } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { BoxProperties } from '@/styled/patterns';

export type BoxProps = HTMLStyledProps<'div'> & BoxProperties;

export const Box = forwardRef<HTMLDivElement, BoxProps>((props: BoxProps, ref) => {
  return <styled.div ref={ref} {...props} />;
});
Box.displayName = 'Box';
