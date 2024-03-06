import React from 'react';
import { RadioGroup } from '@/components/ui/radio';

const meta = {
  title: 'FORM / Radio',
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial value of the tabs.',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      control: { type: 'text' },
      description: 'The selected tab id',
    },
    onValueChange: {
      description: '\nFunction called once a radio is checked. `(details: ValueChangeDetails) => void`',
    },
    orientation: {
      description:
        '\nThe orientation of the tabs. Can be `horizontal` or `vertical` - `horizontal`: only left and right arrow key navigation will work. - `vertical`: only up and down arrow key navigation will work. `horizontal | vertical`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the radio group will be disabled',
    },
    form: {
      control: { type: 'text' },
      description: 'The associate form of the underlying input.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
      <RadioGroup.Root>
        <RadioGroup.Label>Option</RadioGroup.Label>
        <RadioGroup.Indicator />
        {options.map((option) => (
          <RadioGroup.Item key={option} value={option}>
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};

export const Disabled = {
  render: () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
      <RadioGroup.Root disabled>
        <RadioGroup.Label>Option</RadioGroup.Label>
        <RadioGroup.Indicator />
        {options.map((option) => (
          <RadioGroup.Item key={option} value={option}>
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};

export const InitialValue = {
  render: () => {
    const options = ['Option1', 'Option2', 'Option3'];
    return (
      <RadioGroup.Root defaultValue="Option1">
        <RadioGroup.Label>Option</RadioGroup.Label>
        <RadioGroup.Indicator />
        {options.map((option) => (
          <RadioGroup.Item key={option} value={option}>
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};

export const OnEvent = {
  render: () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
      <RadioGroup.Root onValueChange={(details) => console.log(details.value)}>
        <RadioGroup.Label>Option</RadioGroup.Label>
        <RadioGroup.Indicator />
        {options.map((option) => (
          <RadioGroup.Item key={option} value={option}>
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    );
  },
};
