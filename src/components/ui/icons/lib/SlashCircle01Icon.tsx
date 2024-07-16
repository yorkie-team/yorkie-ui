import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { SlashCircle01Icon as SlashCircle01IconSvgr } from '../svg';

export const SlashCircle01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <SlashCircle01IconSvgr />
    </Icon>
  );
};
