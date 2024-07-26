import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '../../styled-system/recipes';
import { styled, HTMLStyledProps } from '../../styled-system/jsx';
import { forwardRef } from 'react';

export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps;

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
