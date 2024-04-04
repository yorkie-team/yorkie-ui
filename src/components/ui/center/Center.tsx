import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { center, CenterProperties } from '@/styled/patterns';

export type CenterProps = HTMLStyledProps<'div'> & CenterProperties;

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  (props: CenterProps, ref) => {
    const { inline } = props;
    const StyledCenter = styled('div',{
      base: {
        inline,
      } as CenterProps
    });
    return <StyledCenter ref={ref} className={center({ inline })} {...props}/>;
  },
);