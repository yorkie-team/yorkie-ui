import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon, Link } from '@/components/ui';
import type { LinkProps } from '@/components/ui';
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
  ButtonNormalProps &
  LinkProps;

const StyledButton = styled(ark.button, button);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps) => {
  const { children, icon, position, size, as = 'button', href, wLink, hLink, ...rest } = props;
  const IconButton = <Icon size={size} icon={icon} />;

  if (as === 'link' && href) {
    return (
      <Link href={href} width={wLink} height={hLink} decoration="ghost" {...rest}>
        {position === 'start' && icon && IconButton}
        {children}
        {position === 'end' && icon && IconButton}
      </Link>
    );
  }

  return (
    <StyledButton size={size} {...rest}>
      {position === 'start' && icon && IconButton}
      {children}
      {position === 'end' && icon && IconButton}
    </StyledButton>
  );
});

Button.displayName = 'Button';
