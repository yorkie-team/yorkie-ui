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
import { linkRecipe } from '@/components/ui/link/LinkRecipe';
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
    extend: {
      tokens: {
        sizes:{
          '100w': { value: '100%' },
          '50w': {value: '100%'}
        },
        zIndex: {
          xs: { value: '1' },
          sm: { value: '2' },
          md: { value: '3' },
          lg: { value: '4' },
          xl: { value: '5' },
          '2xl': { value: '200' },
          '3xl': { value: '300' },
          '4xl': { value: '400' },
          '5xl': { value: '500' },
          '6xl': { value: '600' },
          '7xl': { value: '700' },
          '8xl': { value: '800' },
          '9xl': { value: '900' },
          '10xl': { value: '1000' },
        },
        borderWidths:{
          xs: { value: '1px' },
          sm: { value: '2px' },
          md: { value: '3px' },
          lg: { value: '4px' },
          xl: { value: '5px' },
          '2xl': { value: '6px' },
          '3xl': { value: '8px' },
          '4xl': { value: '9px' },
          '5xl': { value: '10px' },
          '6xl': { value: '12px' },
          '7xl': { value: '13px' },
          '8xl': { value: '14px' },
          '9xl': { value: '15px' },
          '10xl': { value: '16px' },
        },
      }
    },
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
      label: labelRecipe,
      link: linkRecipe
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
          'position': ['relative', 'absolute','fixed','sticky','sticky','scroll'],
          'top': ['*'],
          'left': ['*'],
          'right': ['*'],
          'bottom': ['*'],
          'float': ['*'],
          'visibility': ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          'display': ['none','inline','block','contents','flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'initial', 'inherit' ],
          'flexBasis': ['*'],
          'flex': ['*'],
          'flexDirection': ['row', 'row-reverse', 'column', 'column-reverse'],
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
          'justifyContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
          'alignContent': ['*'],
          'alignItems': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
          'alignSelf': ['*'],
          'order': ['1', '2','3', '4','5', '6', '7', '8', '9', '10','11', '12', '13', '14', '15', '16', '17','18', '19','20'],
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
          'borderWidth': ['*'],
          'borderRadius': ['*'],
          'borderColor': ['*'],
        },
        responsive: true,
      },
      {
        properties: {
          'fontFamily': ['*'],
          'fontSize': ['*'],
          'lineHeight': ['*'],
          'fontWeight': ['*'],
          'textAlign': ['*'],
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
          'textStyle': ['*']
        },
        responsive: true,
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
          'color': ['*'],
        },
        conditions: ['light', 'dark']
      },{
        properties: {
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
          'borderTopWidth': ['*'],
          'borderLeftWidth': ['*'],
          'borderRightWidth': ['*'],
          'borderBottomWidth': ['*'],
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
          'listStyleType': ['*'],
          'listStylePosition': ['*'],
          'listStyleImage': ['*'],
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
