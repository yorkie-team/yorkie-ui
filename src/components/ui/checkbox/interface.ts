import { type ReactNode } from 'react';
import { type CheckboxProps as ArkCheckboxProps } from '@ark-ui/react/checkbox';
import { type CheckboxVariantProps } from '@/styled/recipes';
import type { HTMLStyledProps } from '@/styled/types';

export interface CheckboxProps
  extends ArkCheckboxProps,
    CheckboxVariantProps,
    Omit<HTMLStyledProps<'label'>, 'defaultChecked' | 'dir' | 'translate' | 'content' | 'color'> {
  /*
    "children" is an optional property to display the checkbox's label.
  */
  children?: ReactNode;
}
