import { Avatar as ArkAvatar } from '@ark-ui/react/avatar';
import { forwardRef } from 'react';
import { avatar } from '@/styled/recipes';
import { AvatarProps } from '@/components/ui/avatar/interface';
import { MessageSmileCircleIcon } from '@/components/ui/icons';
import { getInitials } from '@/lib/utils/getInitials';

/**
 * Render Avatar component.
 * @param {string} name - The name of the avatar.
 * @param {string} src - The image src of the avatar .
 * @returns {JSX.Element} - The avatar component.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const [variantProps, localProps] = avatar.splitVariantProps(props);
  const { name, src, ...rootProps } = localProps;
  const styles = avatar(variantProps);
  return (
    <ArkAvatar.Root ref={ref} className={styles.root} {...rootProps}>
      <ArkAvatar.Fallback className={styles.fallback}>
        {getInitials(name) || <MessageSmileCircleIcon />}
      </ArkAvatar.Fallback>
      <ArkAvatar.Image className={styles.image} src={src} alt={name} />
    </ArkAvatar.Root>
  );
});

Avatar.displayName = 'Avatar';
