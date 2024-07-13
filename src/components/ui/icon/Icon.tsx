import { ark } from '@ark-ui/react/factory';
import { forwardRef, type ReactElement, ReactNode } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import { icon, type IconVariantProps } from '@/styled/recipes';

export interface IconProps extends IconVariantProps, HTMLStyledProps<'svg'> {
  children?: ReactElement;
  icon: ReactNode;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, ...rest } = props;
  return (
    <StyledIcon {...rest} ref={ref}>
      {icon}
    </StyledIcon>
  );
});

const StyledIcon = styled(ark.svg, icon);
