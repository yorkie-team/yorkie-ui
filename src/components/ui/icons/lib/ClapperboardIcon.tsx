import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { ClapperboardIcon as ClapperboardIconSvgr } from '../svg';

export const ClapperboardIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <ClapperboardIconSvgr />
    </Icon>
  );
};
