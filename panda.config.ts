import { defineConfig } from '@pandacss/dev';
import { avatarSlotRecipe } from '@/components/ui/avatar/AvatarSlotRecipe';
import { Tooltip } from '@/components/ui/tooltip/TooltipRecipe';
import { buttonRecipe } from '@/components/ui/button/ButtonRecipe';
import { selectRecipe } from '@/components/ui/select/SelectRecipe';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      slotRecipes: {
        avatar: avatarSlotRecipe,
      },
      recipes: {
        tooltip: Tooltip,
        button: buttonRecipe,
        select: selectRecipe,
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
