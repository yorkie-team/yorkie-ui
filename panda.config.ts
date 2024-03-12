import { defineConfig } from '@pandacss/dev';
import { avatarSlotRecipe } from '@/components/ui/avatar/AvatarSlotRecipe';
import { buttonRecipe } from '@/components/ui/button/ButtonRecipe';
import { checkboxSlotRecipe } from '@/components/ui/checkbox/CheckboxSlotRecipe';
import { selectRecipe } from '@/components/ui/select/SelectRecipe';
import { badgeRecipe } from '@/components/ui/badge/BadgeRecipe';
import { paginationSlotRecipe } from '@/components/ui/pagination/PaginationRecipe';
import { popoverSlotRecipe } from '@/components/ui/popover/PopoverRecipe';
import { radioGroupSlotRecipe } from '@/components/ui/radio/RadioRecipe';
import { tabsSlotRecipe } from '@/components/ui/tabs/TabRecipe';
import { tooltipSlotRecipe } from '@/components/ui/tooltip/TooltipRecipe';
import { accordionSlotRecipe } from '@/components/ui/accordion/AccordionRecipe';
import { switchSlotRecipe } from '@/components/ui/switch/SwitchRecipe';
import { datePickerSlotRecipe } from '@/components/ui/datepicker/DatepickerRecipe';
import { inputRecipe } from '@/components/ui/input/InputRecipe';
import { iconRecipe } from '@/components/ui/icon/IconRecipe';

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
        pagination: paginationSlotRecipe,
        popover: popoverSlotRecipe,
        radioGroup: radioGroupSlotRecipe,
        tabs: tabsSlotRecipe,
        tooltip: tooltipSlotRecipe,
        accordion: accordionSlotRecipe,
        switchs: switchSlotRecipe,
        datePicker: datePickerSlotRecipe,
      },
      recipes: {
        button: buttonRecipe,
        select: selectRecipe,
        badge: badgeRecipe,
        input: inputRecipe,
        icon: iconRecipe,
      },
    },
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
});
