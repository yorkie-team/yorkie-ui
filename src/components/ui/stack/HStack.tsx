import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { HstackProperties} from '@/styled/patterns';

export type HStackProps = HTMLStyledProps<'div'> & HstackProperties;

export const HStack = forwardRef<HTMLDivElement, HStackProps>(
  (props: HStackProps, ref) => {
    return <styled.div ref={ref} {...props}/>;
  },
);