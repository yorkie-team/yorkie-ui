import { type HTMLStyledProps } from '@/styled/jsx';
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
} from '@/components/ui/radioGroup/RadioGroup';

export interface RadioGroupProps extends HTMLStyledProps<typeof RadioGroup> {}
export interface RadioGroupIndicatorProps extends HTMLStyledProps<typeof RadioGroupIndicator> {}
export interface RadioGroupItemProps extends HTMLStyledProps<typeof RadioGroupItem> {}
export interface RadioGroupItemControlProps extends HTMLStyledProps<typeof RadioGroupItemControl> {}
export interface RadioGroupItemTextProps extends HTMLStyledProps<typeof RadioGroupItemText> {}
export interface RadioGroupLabelProps extends HTMLStyledProps<typeof RadioGroupLabel> {}
