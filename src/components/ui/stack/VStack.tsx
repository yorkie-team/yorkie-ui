import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { vstack, VstackProperties } from '@/styled/patterns';

export type VStackProps = HTMLStyledProps<'div'> & VstackProperties;

export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  (props: VStackProps, ref) => {
    return <styled.div ref={ref} {...props}/>;
  },
);