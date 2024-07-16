import { ark } from '@ark-ui/react/factory';
import { styled } from '@/styled/jsx';
import { icon } from '@/styled/recipes';
import type { ComponentProps } from 'styled-system/types';

export interface IconProps extends ComponentProps<typeof Icon> {}

export const Icon = styled(ark.svg, icon, {
  defaultProps: { asChild: true },
});
