/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwitchsVariant {
  size: "sm" | "md" | "lg"
}

type SwitchsVariantMap = {
  [key in keyof SwitchsVariant]: Array<SwitchsVariant[key]>
}

export type SwitchsVariantProps = {
  [key in keyof SwitchsVariant]?: ConditionalValue<SwitchsVariant[key]> | undefined
}

export interface SwitchsRecipe {
  __type: SwitchsVariantProps
  (props?: SwitchsVariantProps): Pretty<Record<"root" | "label" | "control" | "thumb", string>>
  raw: (props?: SwitchsVariantProps) => SwitchsVariantProps
  variantMap: SwitchsVariantMap
  variantKeys: Array<keyof SwitchsVariant>
  splitVariantProps<Props extends SwitchsVariantProps>(props: Props): [SwitchsVariantProps, Pretty<DistributiveOmit<Props, keyof SwitchsVariantProps>>]
}


export declare const switchs: SwitchsRecipe