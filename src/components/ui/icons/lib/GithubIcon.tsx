import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { GithubIcon as GithubIconSvgr } from '../svg';

export const GithubIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <GithubIconSvgr />
    </Icon>
  );
};
