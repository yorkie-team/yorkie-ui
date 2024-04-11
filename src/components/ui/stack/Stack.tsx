import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { stack, StackProperties } from '@/styled/patterns';

export type StackProps = HTMLStyledProps<'div'> & StackProperties;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (props: StackProps, ref) => {
    const { align, justify, direction, gap} = props;
    const StyledStack = styled('div',{
      base: {
        align,
        justify,
        direction,
        gap
      } as StackProps
    });
    return <StyledStack ref={ref} className={stack({ align, justify, direction, gap })} {...props}/>;
  },
);