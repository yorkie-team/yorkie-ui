import React, { useState } from 'react';
import { Tabs } from '@/components/ui/tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DATA DISPLAY / Tab',
  argTypes: {
    activationMode: {
      description:
        '\nThe activation mode of the tabs. Can be `manual` or `automatic` - `manual`: Tabs are activated when clicked or press `enter` key. - `automatic`: Tabs are activated when receiving focus. `manual | automatic`',
      default: 'automatic',
    },
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
    loop: {
      control: { type: 'boolean' },
      description: 'Whether the keyboard navigation will loop from last tab to first, and vice versa.',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
    },
    onFocusChange: {
      description: '\nCallback to be called when the focused tab changes. `(details: FocusChangeDetails) => void`',
    },
    onValueChange: {
      description:
        '\nCallback to be called when the selected/active tab changes. `(details: ValueChangeDetails) => void`',
    },
    orientation: {
      description:
        '\nThe orientation of the tabs. Can be `horizontal` or `vertical` - `horizontal`: only left and right arrow key navigation will work. - `vertical`: only up and down arrow key navigation will work. `horizontal | vertical`',
    },
    translations: {
      description: 'Specifies the localized strings that identifies the accessibility elements and their states',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
      default: false,
    },
    value: {
      control: { type: 'text' },
      description: 'The selected tab id',
    },
  },
}satisfies Meta<typeof Tabs.Root>;

type Story = StoryObj<typeof Tabs.Root>;

export default meta;

export const Overview: Story  = {
  render: (args) => {
    return (
      <Tabs.Root {...args}>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const TabIndicator = {
  render: () => {
    return (
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const LazyMounting = {
  render: () => {
    return (
      <Tabs.Root lazyMount unmountOnExit>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const DisabledTab = {
  render: () => {
    return (
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2" disabled>
            Tab 2
          </Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const Controlled = () => {
  const [value, setValue] = useState<string | null>('react');

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
      <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
      <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
    </Tabs.Root>
  );
};

export const Vertical = {
  render: () => {
    return (
      <Tabs.Root orientation="vertical" defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};

export const Manual = {
  render: () => {
    return (
      <Tabs.Root activationMode="manual" defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content of Tab Pane 1</Tabs.Content>
        <Tabs.Content value="tab2">Content of Tab Pane 2</Tabs.Content>
        <Tabs.Content value="tab3">Content of Tab Pane 3</Tabs.Content>
      </Tabs.Root>
    );
  },
};
