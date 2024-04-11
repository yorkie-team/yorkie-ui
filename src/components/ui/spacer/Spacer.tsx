import { forwardRef } from 'react';
import {
  styled,
  type HTMLStyledProps,
} from '@/styled/jsx';
import { spacer, SpacerProperties } from '@/styled/patterns';

export type SpacerProps = HTMLStyledProps<'div'> & SpacerProperties;

export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  (props: SpacerProps, ref) => {
    const { size } = props;
    const StyledSquare = styled('div',{
      base: {
        size,
      } as SpacerProps
    });
    return <StyledSquare ref={ref} className={spacer({ size })} {...props}/>;
  },
);