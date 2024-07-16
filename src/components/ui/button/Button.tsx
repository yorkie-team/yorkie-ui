import { ark } from '@ark-ui/react';
import { ButtonVariantProps, button } from '@/styled/recipes';
import { Link, LinkProps } from '@/components/ui';

import { styled, HTMLStyledProps } from '@/styled/jsx';
import { forwardRef } from 'react';

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
  ButtonLinkProps &
  ButtonNormalProps &
  LinkProps;

const StyledButton = styled(ark.button, button);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, size = 'md', as = 'button', href, wLink, hLink, decoration, ...rest } = props;

  if (as === 'link' && href) {
    return (
      <Link {...rest} href={href} as={as} width={wLink} height={hLink} decoration={decoration} size={size}>
        {children}
      </Link>
    );
  }

  return (
    <StyledButton {...rest} size={size} ref={ref}>
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
