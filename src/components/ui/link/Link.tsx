import { ark } from '@ark-ui/react/factory';
import { HTMLStyledProps, styled } from '@/styled/jsx';
import { link, LinkVariantProps } from '@/styled/recipes';

export type LinkProps = {
  decoration?: string;
} & LinkVariantProps &
  HTMLStyledProps<'a'>;

export const Link = (props: LinkProps) => {
  const { decoration, children, ...rest } = props;
  const Dynamic = styled(ark.a, link);

  return (
    <Dynamic {...rest} className={link({ decoration })}>
      {children}
    </Dynamic>
  );
};
