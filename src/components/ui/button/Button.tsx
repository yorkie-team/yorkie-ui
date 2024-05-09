import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon, Link } from '@/components/ui';
import { forwardRef} from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';

type ButtonIconProps = {
    icon?: any,
    position?: 'start' | 'end',
}

type ButtonLinkProps = {
  href?: string,
  as?: 'button' | 'link'
}

export type ButtonProps = HTMLStyledProps<'button'> & ButtonVariantProps & ButtonIconProps & ButtonLinkProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps) => {
    const {children, icon, position, size, as ='button', href, ...rest }= props;
    const StyledButton = styled(ark.button,button);
    const IconButton = <Icon size={size} icon={icon} />;
    if(as == 'link') {
      return <Link href={href}>
        <StyledButton size={size} {...rest}>
          {position == 'start' && icon && IconButton}
          {children}
          {position == 'end' && icon && IconButton}
        </StyledButton>
      </Link>
    }
    return <StyledButton size={size} {...rest}>
        {position == 'start' && icon && IconButton}
        {children}
        {position == 'end' && icon && IconButton}
    </StyledButton>;
  },
);
Button.displayName = 'Button';
