import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon } from '@/components/ui';
import { forwardRef} from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';

type ButtonIconProps = {
    icon?: any,
    position?: 'start' | 'end',
}

export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps & ButtonIconProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps) => {
    const {children, icon, position, size}= props;
    const StyledButton = styled(ark.button, button);
    const IconButton = <Icon size={size}>{icon}</Icon>;
    return <StyledButton {...props}>
        {position == 'start' && icon && IconButton}
        {children}
        {position == 'end' && icon && IconButton}
    </StyledButton>;
  },
);
Button.displayName = 'Button';
