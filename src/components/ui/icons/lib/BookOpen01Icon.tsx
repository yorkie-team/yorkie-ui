import { Icon, IconProps } from '@/components/ui/icons/Icon';
import { BookOpen01Icon as BookOpen01IconSvgr } from '../svg';

export const BookOpen01Icon = (props: IconProps) => {
  return (
    <Icon {...props}>
      <BookOpen01IconSvgr />
    </Icon>
  );
};
