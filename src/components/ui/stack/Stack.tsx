import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { stack, StackProperties } from '@/styled/patterns';

export type StackProps = HTMLStyledProps<'div'> & StackProperties;

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (props: StackProps, ref) => {
    return <styled.div ref={ref} {...props}/>;
  },
);