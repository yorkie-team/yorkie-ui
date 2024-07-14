import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Icon, Link, LinkProps, typeDecoration } from '@/components/ui';

import { styled, HTMLStyledProps } from '@/styled/jsx';
import { forwardRef } from 'react';

type ButtonIconProps = {
  icon?: any;
  position?: 'start' | 'end';
};

type ButtonLinkProps = {
  href?: string;
  as?: 'button' | 'link';
  decoration?: typeDecoration;
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, icon, position, size = 'md', as = 'button', href, wLink, hLink, decoration, ...rest } = props;

  if (as === 'link' && href) {
    return (
      <Link {...rest} href={href} as={as} width={wLink} height={hLink} decoration={decoration} size={size}>
        {position === 'start' && icon && <Icon size={size} icon={icon} />}
        {children}
        {position === 'end' && icon && <Icon size={size} icon={icon} />}
      </Link>
    );
  }

  return (
    <StyledButton {...rest} size={size} ref={ref}>
      {position === 'start' && icon && <Icon size={size} icon={icon} />}
      {children}
      {position === 'end' && icon && <Icon size={size} icon={icon} />}
    </StyledButton>
  );
});

Button.displayName = 'Button';
