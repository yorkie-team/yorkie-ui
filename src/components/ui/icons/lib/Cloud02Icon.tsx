import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { Cloud02Icon as Cloud02IconSvgr } from '../svg';

export const Cloud02Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Cloud02IconSvgr />
    </Icon>
  );
};
