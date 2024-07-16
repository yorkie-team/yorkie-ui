import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { Diamond01Icon as Diamond01IconSvgr } from '../svg';

export const Diamond01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Diamond01IconSvgr />
    </Icon>
  );
};
