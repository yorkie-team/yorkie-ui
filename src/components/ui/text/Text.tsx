import { useMemo } from 'react';
import { styled, type HTMLStyledProps, type StyledComponent } from '@/styled/jsx';
import { text, type TextVariantProps } from '@/styled/recipes';

export type TextProps = {
  as?: React.ElementType;
  align?: 'center' | 'right' | 'left';
} & TextVariantProps &
  HTMLStyledProps<React.ElementType>;

export const Text = (props: TextProps) => {
  const { variant, size, as = 'p', className, ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<React.ElementType>, [as]);

  return <Dynamic {...localProps} className={text({ variant, size }) + ' ' + className ?? ''} />;
};
