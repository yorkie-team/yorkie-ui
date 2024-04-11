import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { ContainerProperties } from '@/styled/patterns';

export type ContainerProps = HTMLStyledProps<'div'> & ContainerProperties;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => {

    const StyledContainer = styled('div');
    return <StyledContainer ref={ref} {...props}/>;
  },
);