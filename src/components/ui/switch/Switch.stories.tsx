import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';

const meta = {
  title: 'FORM / Switch',
  argTypes: {
    defaultValue: {
      control: 'boolean',
      description: 'The initial checked state of the switch.',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked.',
    },
    value: {
      description: '\nThe value of switch input. Useful for form submission. `string | number`',
      default: 'on',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    onCheckedChange: {
      description: '\nFunction to call when the switch is clicked. `(details: CheckedChangeDetails) => void`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled.',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'If `true`, the switch is marked as invalid.',
    },
    form: {
      control: { type: 'text' },
      description: 'The id of the form that the switch belongs to',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return <Switch defaultChecked>Label</Switch>;
  },
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch checked={checked} onCheckedChange={(e) => setChecked(e.checked)}>
      Label
    </Switch>
  );
};
