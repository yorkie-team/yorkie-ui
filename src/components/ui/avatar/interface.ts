import { type AvatarProps as ArkAvatarProps } from '@ark-ui/react/avatar';
import { type AvatarVariantProps } from '@/styled/recipes';

export interface AvatarProps extends ArkAvatarProps, AvatarVariantProps {
  name?: string;
  src?: string;
}
