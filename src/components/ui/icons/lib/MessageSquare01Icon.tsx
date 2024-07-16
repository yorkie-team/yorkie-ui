import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { MessageSquare01Icon as MessageSquare01IconSvgr } from '../svg';

export const MessageSquare01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <MessageSquare01IconSvgr />
    </Icon>
  );
};
