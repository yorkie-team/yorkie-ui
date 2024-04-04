import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { aspectRatio, AspectRatioProperties } from '@/styled/patterns';

export type AspectRatioProps = HTMLStyledProps<'div'> & AspectRatioProperties;

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props: AspectRatioProps, ref) => {
    const { ratio } = props;
    const StyledAspectRatio = styled('div',{
      base: {
        ratio,
      } as AspectRatioProps
    });
    return <StyledAspectRatio ref={ref} className={aspectRatio({ ratio })} {...props}/>;
  },
);