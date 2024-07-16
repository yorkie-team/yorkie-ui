import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { PackageIcon as PackageIconSvgr } from '../svg';

export const PackageIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <PackageIconSvgr />
    </Icon>
  );
};
