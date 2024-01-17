import { type AvatarProps as ArkAvatarProps } from '@ark-ui/react/avatar';
import { type AvatarVariantProps } from '@/styled/recipes';

export interface AvatarProps extends ArkAvatarProps, AvatarVariantProps {
  /*
    "name" is an optional property for the avatar's name.
    It will be displayed if the `src` property is omitted.
  */
  name?: string;
  /*
    "src" is an optional property for the avatar's image. If not provided, the avatar
    will be displayed by the name if provided or the user icon by default.
  */
  src?: string;
}
