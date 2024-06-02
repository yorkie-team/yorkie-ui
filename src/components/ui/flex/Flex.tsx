import { forwardRef } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { flex, FlexProperties } from '@/styled/patterns';

export type FlexProps = HTMLStyledProps<'div'> & FlexProperties;

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props: FlexProps, ref) => {
  const { align, justify, direction, wrap, basis, grow, shrink, className = '', ...rest } = props;
  return (
    <styled.div
      {...rest}
      ref={ref}
      className={flex({ align, justify, direction, wrap, basis, grow, shrink }) + ' ' + className ?? ''}
    />
  );
});
