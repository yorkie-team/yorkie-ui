import { ark } from '@ark-ui/react/factory';
import { HTMLStyledProps, styled } from '@/styled/jsx';
import { link, LinkVariantProps } from '@/styled/recipes';

export type typeDecoration = {
  decoration?: 'ghost' | 'link';
};
export type LinkProps = {
  decoration?: typeDecoration;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
} & LinkVariantProps &
  HTMLStyledProps<'a'> &
  HTMLStyledProps<'button'>;

export const Link = (props: LinkProps) => {
  const { decoration, children, variant, size } = props;
  const Dynamic = styled(ark.a, link);

  return (
    <Dynamic {...props} className={link({ decoration, variant, size })}>
      {children}
    </Dynamic>
  );
};
