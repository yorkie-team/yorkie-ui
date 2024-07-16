import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { PlaySquareIcon as PlaySquareIconSvgr } from '../svg';

export const PlaySquareIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <PlaySquareIconSvgr />
    </Icon>
  );
};
