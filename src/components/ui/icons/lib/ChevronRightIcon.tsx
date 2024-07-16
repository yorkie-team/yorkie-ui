import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { ChevronRightIcon as ChevronRightIconSvgr } from '../svg';

export const ChevronRightIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <ChevronRightIconSvgr />
    </Icon>
  );
};
