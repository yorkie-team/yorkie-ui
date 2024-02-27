import React from 'react';
import { Select } from '@/components/ui';
import { DownIcon } from '@/components/ui/icons';

const meta = {
  title: 'COMMUNICATION / Select',
  argTypes: {
    closeOnSelect: {
      control: { type: 'boolean' },
      description: 'Whether the select should close after an item is selected',
    },
    defaultValue: {
      control: 'string',
      description: '\nThe initial value of the select. `string[]`',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    form: {
      control: { type: 'boolean' },
      description: 'The associate form of the underlying select.',
    },
    getRootNode: {
      control: { type: 'boolean' },
      description:
        '\nA root node to correctly resolve document in custom environments. E.x.: Iframes, Electron. `() => ShadowRoot | Node | Document',
    },
    highlightedValue: {
      control: { type: 'string' },
      description: 'The key of the highlighted item',
    },
    invalid: {
      control: { type: 'boolean' },
      description: 'Whether the select is invalid',
    },
    isItemDisabled: {
      description: '\nWhether the item is disabled. `(item: T) => boolean`',
    },
    itemToString: {
      description: '\nThe label of the item. `(item: T) => string`',
    },
    itemToValue: {
      description: '\nThe value of the item. `(item: T) => string`',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting',
    },
    loop: {
      control: { type: 'boolean' },
      description: 'Whether to loop the keyboard navigation through the options',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Whether to loop the keyboard navigation through the options',
    },
    name: {
      control: { type: 'text' },
      description: 'The `name` attribute of the underlying select.',
    },
    onExitComplete: {
      description: '\nFunction called when the animation ends in the closed state. `() => void`',
    },
    onFocusOutside: {
      description:
        '\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`',
    },
    onHighlightChange: {
      description:
        '\nThe callback fired when the highlighted item changes. `(details: HighlightChangeDetails<T>) => void`',
    },
    onInteractOutside: {
      description:
        '\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`',
    },
    onOpenChange: {
      description: '\nFunction called when the popup is opened. `(details: OpenChangeDetails) => void`',
    },
    onPointerDownOutside: {
      description:
        '\nFunction called when the pointer is pressed down outside the component. `(details: ValueChangeDetails<T>) => void`',
    },
    onValueChange: {
      description: '\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the select menu is open',
    },
    positioning: {
      description: '\nThe positioning options of the menu. `PositioningOptions`',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user)',
    },
    openreadOnly: {
      control: { type: 'boolean' },
      description: 'Whether the select is read-only',
    },
    selectOnBlur: {
      control: { type: 'boolean' },
      description: 'Whether to select the highlighted item when the user presses Tab, and the menu is open.',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
    },
    value: {
      control: 'string',
      description: 'The keys of the selected items',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    const items = [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Svelte', value: 'svelte', disabled: true },
      { label: 'Vue', value: 'vue' },
    ];

    return (
      <Select.Root positioning={{ sameWidth: true }} width="2xs" height="280px" items={items}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={'Select a Framework'} />
            <DownIcon />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel htmlFor="framework">Framework</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <DownIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );
  },
};

export const Customization = {
  render: () => {
    type Item = { label: string; value: string; disabled?: boolean };
    const items: Item[] = [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true },
    ];

    return (
      <Select.Root positioning={{ sameWidth: true }} width="2xs" height="280px" items={items}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <DownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );
  },
};

export const MultipleSelection = {
  render: () => {
    type Item = { label: string; value: string; disabled?: boolean };
    const items: Item[] = [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true },
    ];

    return (
      <Select.Root positioning={{ sameWidth: true }} width="2xs" height="280px" items={items}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <DownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>Clear</Select.ClearTrigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel htmlFor="framework">Frameworks</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );
  },
};
