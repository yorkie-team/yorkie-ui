import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { ChevronLeftIcon as ChevronLeftIconSvgr } from '../svg';

export const ChevronLeftIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <ChevronLeftIconSvgr />
    </Icon>
  );
};
