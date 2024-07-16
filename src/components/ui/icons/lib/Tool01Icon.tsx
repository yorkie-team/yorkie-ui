import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { Tool01Icon as Tool01IconSvgr } from '../svg';

export const Tool01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Tool01IconSvgr />
    </Icon>
  );
};
