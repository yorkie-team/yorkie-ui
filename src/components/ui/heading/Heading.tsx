import { forwardRef } from 'react';
import { Text, type TextProps } from '@/components/ui';

export const Heading = forwardRef<HTMLHeadingElement, TextProps>((props, ref) => {
  const { as = 'h2', ...textProps } = props;
  return <Text ref={ref} as={as} variant="heading" {...textProps} />;
});

Heading.displayName = 'Heading';
