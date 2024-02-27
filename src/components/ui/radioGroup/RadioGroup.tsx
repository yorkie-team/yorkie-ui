import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group';
import { styled } from '@/styled/jsx';
import { radioGroup } from '@/styled/recipes';
import { createStyleContext } from '@/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(radioGroup);

/*
  A RadioGroup include `Indicator`, `Label` and `Item`.
  An `Item` include `ItemControl` and `ItemText`.
*/
const RadioGroup = withProvider(styled(ArkRadioGroup.Root), 'root');
const RadioGroupIndicator = withContext(styled(ArkRadioGroup.Indicator), 'indicator');
const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), 'item');
const RadioGroupItemControl = withContext(styled(ArkRadioGroup.ItemControl), 'itemControl');
const RadioGroupItemText = withContext(styled(ArkRadioGroup.ItemText), 'itemText');
const RadioGroupLabel = withContext(styled(ArkRadioGroup.Label), 'label');

const Root = RadioGroup;
const Indicator = RadioGroupIndicator;
const Item = RadioGroupItem;
const ItemControl = RadioGroupItemControl;
const ItemText = RadioGroupItemText;
const Label = RadioGroupLabel;

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
  Root,
};
