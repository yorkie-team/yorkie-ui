import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { InfoCircleIcon as InfoCircleIconSvgr } from '../svg';

export const InfoCircleIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <InfoCircleIconSvgr />
    </Icon>
  );
};
