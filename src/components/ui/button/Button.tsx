import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon, Link } from '@/components/ui';
import { forwardRef } from 'react';
import { styled, type HTMLStyledProps } from '@/styled/jsx';
import type { Tokens } from '@/styled/tokens';

type ButtonIconProps = {
  icon?: any;
  position?: 'start' | 'end';
};

type ButtonLinkProps = {
  href?: string;
  as?: 'button' | 'link';
};

type ButtonNormalProps = {
  wLink?: string | object;
  hLink?: string | object;
};
export type ButtonProps = HTMLStyledProps<'button'> &
  ButtonVariantProps &
  ButtonIconProps &
  ButtonLinkProps &
  ButtonNormalProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps) => {
  const { children, icon, position, size, as = 'button', href, wLink, hLink, ...rest } = props;
  const StyledButton = styled(ark.button, button);
  const IconButton = <Icon size={size} icon={icon} />;
  if (as == 'link') {
    return (
      <Link href={href} width={wLink} height={hLink}>
        <StyledButton size={size} {...rest}>
          {position == 'start' && icon && IconButton}
          {children}
          {position == 'end' && icon && IconButton}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton size={size} {...rest}>
      {position == 'start' && icon && IconButton}
      {children}
      {position == 'end' && icon && IconButton}
    </StyledButton>
  );
});
Button.displayName = 'Button';
