import { ark } from '@ark-ui/react';
import { button } from '../../styled-system/recipes';
import { styled } from '../../styled-system/jsx';
import type { ComponentProps } from '../../styled-system/types';

import { forwardRef } from 'react';

export type ButtonProps = ComponentProps<typeof StyledButton>;

const StyledButton = styled(ark.button, button);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, size = 'md', ...rest } = props;

  return (
    <StyledButton {...rest} size={size} ref={ref}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
