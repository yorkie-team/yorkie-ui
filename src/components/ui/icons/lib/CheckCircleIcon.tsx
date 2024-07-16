import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { CheckCircleIcon as CheckCircleIconSvgr } from '../svg';

export const CheckCircleIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <CheckCircleIconSvgr />
    </Icon>
  );
};
