import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { AlertSquareIcon as AlertSquareIconSvgr } from '../svg';

export const AlertSquareIcon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <AlertSquareIconSvgr />
    </Icon>
  );
};
