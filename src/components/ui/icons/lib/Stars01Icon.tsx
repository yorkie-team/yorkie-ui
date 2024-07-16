import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { Stars01Icon as Stars01IconSvgr } from '../svg';

export const Stars01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Stars01IconSvgr />
    </Icon>
  );
};
