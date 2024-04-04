import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { vstack, VstackProperties } from '@/styled/patterns';

export type VStackProps = HTMLStyledProps<'div'> & VstackProperties;

export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  (props: VStackProps, ref) => {

    const { justify, gap} = props;
    const StyledHStack = styled('div',{
      base: {
        justify,
        gap,
      } as VStackProps
    });
    return <StyledHStack ref={ref} className={vstack({ justify, gap })} {...props}/>;
  },
);