import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { FlipBackwardIcon as FlipBackwardIconSvgr } from '../svg';

export const FlipBackwardIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <FlipBackwardIconSvgr />
    </Icon>
  );
};
