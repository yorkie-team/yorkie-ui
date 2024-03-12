import { ark } from '@ark-ui/react/factory';
import { forwardRef, type ReactElement } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { icon, type IconVariantProps } from '@/styled/recipes';

export interface IconProps extends IconVariantProps, HTMLStyledProps<'svg'> {
  children: ReactElement;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <StyledIcon ref={ref} asChild {...props} />;
});

const StyledIcon = styled(ark.svg, icon);
