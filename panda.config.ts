import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
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

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    '@park-ui/panda-preset',
    createPreset({
      accentColor: 'orange',
      grayColor: 'neutral',
      borderRadius: 'sm',
    }),
  ],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &',
    },
  },
  // Useful for theme customization
  theme: {
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
      select: selectSlotRecipe,
      card: cardSlotRecipe,
      toast: toastSlotRecipe,
      radio: radioGroupSlotRecipe,
      dialog: dialogSlotRecipe,
    },
    recipes: {
      button: buttonRecipe,
      badge: badgeRecipe,
      input: inputRecipe,
      icon: iconRecipe,
      text: textRecipe,
      code: codeRecipe,
      label: labelRecipe
    },
  },
  staticCss: {
    css: [
      {
        properties: {
          'aspectRatio': ['*'],
          'zIndex': ['*'],
          'boxSizing': ['*'],
          'objectFit': ['*'],
          'position': ['*'],
          'top': ['*'],
          'left': ['*'],
          'right': ['*'],
          'bottom': ['*'],
          'float': ['*'],
          'visibility': ['*'],
        },
      },
      {
        properties: {
          'display': ['*'],
          'flexBasis': ['*'],
          'flex': ['*'],
          'flexDirection': ['*'],
          'flexGrow': ['*'],
          'flexShrink': ['*'],
          'gridTemplateColumns': ['*'],
          'gridTemplateRows': ['*'],
          'gridRow': ['*'],
          'gridColumn': ['*'],
          'gridColumnStart': ['*'],
          'gridColumnEnd': ['*'],
          'gridAutoFlow': ['*'],
          'gridAutoColumns': ['*'],
          'gridAutoRows': ['*'],
          'gap': ['*'],
          'gridGap': ['*'],
          'gridRowGap': ['*'],
          'gridColumnGap': ['*'],
          'rowGap': ['*'],
          'columnGap': ['*'],
          'justifyContent': ['*'],
          'alignContent': ['*'],
          'alignItems': ['*'],
          'alignSelf': ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          'padding': ['*'],
          'paddingLeft': ['*'],
          'paddingRight': ['*'],
          'paddingTop': ['*'],
          'paddingBottom': ['*'],
          'paddingBlock': ['*'],
          'paddingBlockEnd': ['*'],
          'paddingBlockStart': ['*'],
          'paddingInline': ['*'],
          'paddingInlineEnd': ['*'],
          'paddingInlineStart': ['*'],
          'marginLeft': ['*'],
          'marginRight': ['*'],
          'marginTop': ['*'],
          'marginBottom': ['*'],
          'margin': ['*'],
          'marginBlock': ['*'],
          'marginBlockEnd': ['*'],
          'marginBlockStart': ['*'],
          'marginInline': ['*'],
          'marginInlineEnd': ['*'],
          'marginInlineStart': ['*'],
          'width': ['*'],
          'inlineSize': ['*'],
          'minWidth': ['*'],
          'minInlineSize': ['*'],
          'maxWidth': ['*'],
          'maxInlineSize': ['*'],
          'height': ['*'],
          'minHeight': ['*'],
          'minBlockSize': ['*'],
          'maxHeight': ['*'],
          'maxBlockSize': ['*'],
          'color': ['*'],
          'fontFamily': ['*'],
          'fontSize': ['*'],
          'lineHeight': ['*'],
          'fontWeight': ['*'],
          'textAlign': ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          'fontSmoothing': ['*'],
          'fontVariantNumeric': ['*'],
          'letterSpacing': ['*'],
          'textDecoration': ['*'],
          'textDecorationColor': ['*'],
          'textDecorationStyle': ['*'],
          'textDecorationThickness': ['*'],
          'textUnderlineOffset': ['*'],
          'textTransform': ['*'],
          'textIndent': ['*'],
          'textShadow': ['*'],
          'textShadowColor': ['*'],
          'textOverflow': ['*'],
          'verticalAlign': ['*'],
          'wordBreak': ['*'],
          'textWrap': ['*'],
          'truncate': ['*'],
          'lineClamp': ['*'],
          'listStyleType': ['*'],
          'listStylePosition': ['*'],
          'listStyleImage': ['*'],
        },
      },{
        properties: {
          'backgroundPosition': ['*'],
          'backgroundPositionX': ['*'],
          'backgroundPositionY': ['*'],
          'backgroundAttachment': ['*'],
          'backgroundClip': ['*'],
          'background': ['*'],
          'backgroundColor': ['*'],
          'backgroundOrigin': ['*'],
          'backgroundImage': ['*'],
          'backgroundRepeat': ['*'],
          'backgroundBlendMode': ['*'],
          'backgroundSize': ['*'],
          'backgroundGradient': ['*'],
          'backdropFilter': ['*'],
          'backdropBlur': ['*'],
          'backdropBrightness': ['*'],
          'backdropContrast': ['*'],
          'backdropGrayscale': ['*'],
          'backdropHueRotate': ['*'],
          'backdropInvert': ['*'],
          'backdropOpacity': ['*'],
          'backdropSaturate': ['*'],
          'backdropSepia': ['*'],
        },
        conditions: ['light', 'dark']
      },{
        properties: {
          'borderRadius': ['*'],
          'borderTopLeftRadius': ['*'],
          'borderTopRightRadius': ['*'],
          'borderBottomRightRadius': ['*'],
          'borderBottomLeftRadius': ['*'],
          'borderTopRadius': ['*'],
          'borderRightRadius': ['*'],
          'borderBottomRadius': ['*'],
          'borderLeftRadius': ['*'],
          'borderStartStartRadius': ['*'],
          'borderStartEndRadius': ['*'],
          'borderStartRadius': ['*'],
          'borderEndStartRadius': ['*'],
          'borderEndEndRadius': ['*'],
          'borderEndRadius': ['*'],
          'border': ['*'],
          'borderWidth': ['*'],
          'borderTopWidth': ['*'],
          'borderLeftWidth': ['*'],
          'borderRightWidth': ['*'],
          'borderBottomWidth': ['*'],
          'borderColor': ['*'],
          'borderInline': ['*'],
          'borderInlineWidth': ['*'],
          'borderInlineColor': ['*'],
          'borderBlock': ['*'],
          'borderBlockWidth': ['*'],
          'borderBlockColor': ['*'],
          'borderLeft': ['*'],
          'borderLeftColor': ['*'],
          'borderInlineStart': ['*'],
          'borderInlineStartWidth': ['*'],
          'borderInlineStartColor': ['*'],
          'borderRight': ['*'],
          'borderRightColor': ['*'],
          'borderInlineEnd': ['*'],
          'borderInlineEndWidth': ['*'],
          'borderInlineEndColor': ['*'],
          'borderTop': ['*'],
          'borderTopColor': ['*'],
          'borderBottom': ['*'],
          'borderBottomColor': ['*'],
          'borderBlockEnd': ['*'],
          'borderBlockEndColor': ['*'],
          'borderBlockStart': ['*'],
          'borderBlockStartColor': ['*'],
          'boxShadow': ['*'],
          'boxShadowColor': ['*'],
          'dropShadow': ['*'],
          'blur': ['*'],
          'borderCollapse': ['*'],
          'borderSpacing': ['*'],
          'borderSpacingX': ['*'],
          'borderSpacingY': ['*'],
          'scale': ['*'],
          'scaleX': ['*'],
          'scaleY': ['*'],
          'translate': ['*'],
          'translateX': ['*'],
          'translateY': ['*'],
          'accentColor': ['*'],
          'caretColor': ['*'],
          'fill': ['*'],
          'container': ['*'],
          'containerName': ['*'],
          'containerType': ['*'],
          'textStyle': ['*']
        }
      }
    ]
  },
  minify: true,
  jsxFramework: 'react',
  outExtension: 'js',
  // The output directory for your css system
  outdir: 'styled-system',
});
