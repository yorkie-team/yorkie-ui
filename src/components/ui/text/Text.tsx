import { useMemo } from 'react';
import { styled, type HTMLStyledProps, type StyledComponent } from '@/styled/jsx';
import { text, type TextVariantProps } from '@/styled/recipes';

type As = 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextProps = {
  as?: As;
  align?: 'center' | 'right' | 'left';
} & TextVariantProps &
  HTMLStyledProps<As>;

export const Text = (props: TextProps) => {
  const { variant, size, as = 'p', ...localProps } = props;
  const Dynamic = useMemo(() => styled(as, text) as StyledComponent<As>, [as]);

  return <Dynamic {...localProps} className={text({ variant, size})} />;
};
