import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev';
import { avatarSlotRecipe } from '@/components/ui/avatar/AvatarSlotRecipe';
import { buttonRecipe } from '@/components/ui/button/ButtonRecipe';
import { checkboxSlotRecipe } from '@/components/ui/checkbox/CheckboxSlotRecipe';
import { selectSlotRecipe } from '@/components/ui/select/SelectRecipe';
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
import { textRecipe } from '@/components/ui/text/TextRecipe';
import { codeRecipe } from '@/components/ui/code/CodeRecipe';
import { cardSlotRecipe } from '@/components/ui/card/CardRecipe';
import { toastSlotRecipe } from '@/components/ui/toast/ToastRecipe';
import { labelRecipe } from '@/components/ui/label/LabelRecipe';
import { dialogSlotRecipe } from '@/components/ui/dialog/DialogRecipe';
import { linkRecipe } from '@/components/ui/link/LinkRecipe';

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  button: buttonRecipe,
  badge: badgeRecipe,
  input: inputRecipe,
  icon: iconRecipe,
  text: textRecipe,
  code: codeRecipe,
  label: labelRecipe,
  link: linkRecipe,
};

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
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
  select: selectSlotRecipe,
  card: cardSlotRecipe,
  toast: toastSlotRecipe,
  radio: radioGroupSlotRecipe,
  dialog: dialogSlotRecipe,
};
