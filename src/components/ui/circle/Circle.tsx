import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { circle, CircleProperties } from '@/styled/patterns';

export type CircleProps = HTMLStyledProps<'div'> & CircleProperties;

export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  (props: CircleProps, ref) => {
    const { size } = props;
    const StyledCircle = styled('div',{
      base: {
        size,
      } as CircleProps
    });
    return <StyledCircle ref={ref} className={circle({ size })} {...props}/>;
  },
);