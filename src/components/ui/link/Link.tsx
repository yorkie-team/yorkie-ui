import { ark } from '@ark-ui/react/factory';
import { HTMLStyledProps, styled } from '@/styled/jsx';
import { link, LinkVariantProps } from '@/styled/recipes';

export type LinkProps = {
  decoration?: 'ghost' | 'link';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
} & LinkVariantProps &
  HTMLStyledProps<'a'>;

export const Link = (props: LinkProps) => {
  const { decoration, children, variant, size } = props;
  const Dynamic = styled(ark.a, link);

  return (
    <Dynamic {...props} className={link({ decoration, variant, size })}>
      {children}
    </Dynamic>
  );
};
