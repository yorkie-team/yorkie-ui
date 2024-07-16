import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { MessageSmileCircleIcon as MessageSmileCircleIconSvgr } from '../svg';

export const MessageSmileCircleIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <MessageSmileCircleIconSvgr />
    </Icon>
  );
};
