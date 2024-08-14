import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev';

import { button } from './button';
import { select } from './select';

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  button,
};

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  select,
};
