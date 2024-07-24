import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev';

import { button } from './button';
export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  button,
};
