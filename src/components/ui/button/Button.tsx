import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon, Link, LinkProps, typDecoration } from '@/components/ui';

import { styled, HTMLStyledProps } from '@/styled/jsx';

type ButtonIconProps = {
  icon?: any;
  position?: 'start' | 'end';
};

type ButtonLinkProps = {
  href?: string;
  as?: 'button' | 'link';
  decoration?: typDecoration;
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

export const Button = (props: ButtonProps) => {
  const { children, icon, position, size = 'md', as = 'button', href, wLink, hLink, decoration, ...rest } = props;

  if (as === 'link' && href) {
    return (
      <Link {...rest} href={href} width={wLink} height={hLink} decoration={decoration} size={size}>
        {position === 'start' && icon && <Icon size={size} icon={icon} />}
        {children}
        {position === 'end' && icon && <Icon size={size} icon={icon} />}
      </Link>
    );
  }

  return (
    <StyledButton {...rest} size={size}>
      {position === 'start' && icon && <Icon size={size} icon={icon} />}
      {children}
      {position === 'end' && icon && <Icon size={size} icon={icon} />}
    </StyledButton>
  );
};

Button.displayName = 'Button';
