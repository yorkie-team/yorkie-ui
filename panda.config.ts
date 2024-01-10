import { defineConfig } from '@pandacss/dev';
import { avatarSlotRecipe } from '@/components/ui/avatar/AvatarSlotRecipe';
import { checkboxSlotRecipe } from '@/components/ui/checkbox/CheckboxSlotRecipe';

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
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
