import { ark } from '@ark-ui/react/factory';
import { HTMLStyledProps, styled } from '@/styled/jsx';
import { link, LinkVariantProps, button } from '@/styled/recipes';
import { forwardRef } from 'react';

// Combining anchor and button props
export type LinkProps = { as?: 'button' | 'link' } & LinkVariantProps &
  HTMLStyledProps<'a'> &
  HTMLStyledProps<'button'>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { children, size, variant = 'link', decoration, as, ...rest } = props;
  const Dynamic = as === 'link' ? styled(ark.a) : styled(ark.a, link);
  if (as === 'link') {
    return (
      <Dynamic {...rest} className={button({ size, variant })} ref={ref}>
        {children}
      </Dynamic>
    );
  } else {
    return (
      <Dynamic {...rest} ref={ref} className={link({ size, decoration, variant })}>
        {children}
      </Dynamic>
    );
  }
});

Link.displayName = 'Link';
