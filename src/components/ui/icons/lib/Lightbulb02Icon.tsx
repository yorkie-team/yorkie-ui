import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { Lightbulb02Icon as Lightbulb02IconSvgr } from '../svg';

export const Lightbulb02Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Lightbulb02IconSvgr />
    </Icon>
  );
};
