import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { DiscordIcon as DiscordIconSvgr } from '../svg';

export const DiscordIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <DiscordIconSvgr />
    </Icon>
  );
};
