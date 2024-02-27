import { defineConfig } from '@pandacss/dev';
import { avatarSlotRecipe } from '@/components/ui/avatar/AvatarSlotRecipe';
import { checkboxSlotRecipe } from '@/components/ui/checkbox/CheckboxSlotRecipe';
import { radioGroupSlotRecipe } from '@/components/ui/radioGroup/RadioGroupSlotRecipe';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      slotRecipes: {
        avatar: avatarSlotRecipe,
        checkbox: checkboxSlotRecipe,
        radioGroup: radioGroupSlotRecipe,
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
