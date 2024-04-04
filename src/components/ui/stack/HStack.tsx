import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { hstack,HstackProperties } from '@/styled/patterns';

export type HStackProps = HTMLStyledProps<'div'> & HstackProperties;

export const HStack = forwardRef<HTMLDivElement, HStackProps>(
  (props: HStackProps, ref) => {
    const { justify, gap} = props;
    const StyledHStack = styled('div',{
      base: {
        justify,
        gap,
      } as HStackProps
    });
    return <StyledHStack ref={ref} className={hstack({ justify, gap })} {...props}/>;
  },
);