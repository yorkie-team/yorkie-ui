import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, Icon, Icons } from '@/components/ui';

const meta = {
  title: 'FEEDBACK / Accordion',
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial value of the accordion.',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      control: { type: 'text' },
      description: 'The selected accordion id.',
    },
    onValueChange: {
      description:
        '\nThe callback fired when the state of opened/closed accordion items changes. `(details: ValueChangeDetails) => void`',
    },
    onFocusChange: {
      description:
        '\nThe callback fired when the focused accordion item changes. `(details: ValueChangeDetails) => void`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the accordion items are disabled.',
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Whether an accordion item can be collapsed after it has been opened.',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
      default: false,
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Whether multiple accordion items can be open at the same time.',
    },
  },
} satisfies Meta<typeof Accordion.Root>;

type Story = StoryObj<typeof Accordion.Root>;

export default meta;

export const Overview: Story = {
  render: (args) => {
    return (
      <Accordion.Root {...args} defaultValue={['Accordion-1']} collapsible>
        {['Accordion-1', 'Accordion-2', 'Accordion-3'].map((item, id) => (
          <Accordion.Item key={id} value={item}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>
                <Icon size="md" icon={<Icons.IconArrow />} />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>{item} is a JavaScript library for building user interfaces.</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  },
};

export const Multiple = {
  render: () => {
    return (
      <Accordion.Root defaultValue={['Accordion1']} multiple>
        {['Accordion-1', 'Accordion-2', 'Accordion-3'].map((item, id) => (
          <Accordion.Item key={id} value={item}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>
                <Icon size="md" icon={<Icons.IconArrow />} />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>{item} is a JavaScript library for building user interfaces.</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  },
};

export const Controlled = () => {
  const items = ['panel-1', 'panel-2', 'panel-3'];
  const [value, setValue] = useState<string[]>([]);

  return (
    <Accordion.Root value={value} onValueChange={(details: any) => setValue(details.value)}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item}>
          <Accordion.ItemTrigger>
            <div>{item} trigger</div>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item} content</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export const Vertical = {
  render: () => {
    const items = ['panel-1', 'panel-2', 'panel-3'];
    return (
      <Accordion.Root orientation="vertical">
        {items.map((item, id) => (
          <Accordion.Item key={id} value={item} disabled={item === 'panel-2'}>
            <Accordion.ItemTrigger>
              <div>{item} trigger</div>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>{item} content</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  },
};

export const Disabled = {
  render: () => {
    const items = ['panel-1', 'panel-2', 'panel-3'];
    return (
      <Accordion.Root>
        {items.map((item, id) => (
          <Accordion.Item key={id} value={item} disabled={item === 'panel-2'}>
            <Accordion.ItemTrigger>
              <div>{item} trigger</div>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>{item} content</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    );
  },
};
