import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { square, SquareProperties } from '@/styled/patterns';

export type SquareProps = HTMLStyledProps<'div'> & SquareProperties;

export const Square = forwardRef<HTMLDivElement, SquareProps>(
  (props: SquareProps, ref) => {
    const { size } = props;
    const StyledCircle = styled('div',{
      base: {
        size,
      } as SquareProps
    });
    return <StyledCircle ref={ref} className={square({ size })} {...props}/>;
  },
);