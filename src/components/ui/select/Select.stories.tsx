import React, { useState } from 'react';
import { Select } from '@/components/ui';
import { DownIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui';

const meta = {
  title: 'COMMUNICATION / Select',
  argTypes: {
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a different element type.',
    },
    closeOnSelect: {
      control: { type: 'boolean' },
      description: 'Whether the select should close after an item is selected',
    },
    defaultValue: {
      control: { type: 'string[]' },
      description: 'The initial value of the select.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    form: {
      control: { type: 'text' },
      description: 'The associate form of the underlying select.',
    },
    highlightedValue: {
      control: { type: 'text' },
      description: 'The key of the highlighted item',
    },
    isItemDisabled: {
      control: { type: 'text' },
      description: '\nWhether the item is disabled `(item: T) => boolean`.',
    },
    itemToString: {
      control: { type: 'text' },
      description: '\nThe label of the item `(item: T) => string`.',
    },
    itemToValue: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '\nThe value of the item `(item: T) => boolean`.',
    },
    loop: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Whether to loop the keyboard navigation through the options',
    },
    name: {
      control: { type: 'name' },
      defaultValue: false,
      description: 'The `name` attribute of the underlying select.',
    },
    onFocusOutside: {
      control: { type: '' },
      description:
        '\nFunction called when the animation ends in the closed state. `(event: FocusOutsideEvent) => void`.',
    },
    onExitComplete: {
      control: { type: '' },
      description: '\nFunction called when the animation ends in the closed state. `() => void`.',
    },
    onHighlightChange: {
      control: { type: '' },
      description:
        '\nThe callback fired when the highlighted item changes. `(details: HighlightChangeDetails<T>) => void`.',
    },
    onInteractOutside: {
      control: { type: '' },
      description: '\nThe label of the item `(event: InteractOutsideEvent) => void`.',
    },
    onOpenChange: {
      control: { type: '' },
      description: '\nFunction called when the popup is opened `(details: OpenChangeDetails) => void`.',
    },
    onPointerDownOutside: {
      control: { type: '' },
      description: '\nThe callback fired when the selected item changes. `(event: PointerDownOutsideEvent) => void`.',
    },
    onValueChange: {
      control: { type: '' },
      description: '\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`.',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the select menu is open.',
    },
    positioning: {
      control: { type: '' },
      description: '\nWhether the select menu is open. Type of `PositioningOptions`',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user)',
    },
    readOnly: {
      control: { type: 'boolean' },
      description: 'Whether the select is read-only',
    },
    selectOnBlur: {
      control: { type: 'boolean' },
      description: 'Whether to select the highlighted item when the user presses Tab, and the menu is open.',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Whether to select the highlighted item when the user presses Tab, and the menu is open.',
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
      <Select.Root positioning={{ sameWidth: true }} width="2xs" items={items}>
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
      <Select.Root items={items} width="2xs">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <DownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>
            <Button variant="solid">Clear</Button>
          </Select.ClearTrigger>
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

export const Multiple = {
  render: () => {
    type Item = { label: string; value: string; disabled?: boolean };
    const items: Item[] = [
      { label: 'React', value: 'react' },
      { label: 'Solid', value: 'solid' },
      { label: 'Vue', value: 'vue' },
      { label: 'Svelte', value: 'svelte', disabled: true },
    ];

    return (
      <Select.Root items={items} multiple width="2xs">
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select a Framework" />
            <Select.Indicator>
              <DownIcon />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>
            <Button variant="solid">Clear</Button>
          </Select.ClearTrigger>
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

export const Controlled = () => {
  type Item = { label: string; value: string; disabled?: boolean };
  const [, setSelectedItems] = useState({});
  const items: Item[] = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte', disabled: true },
  ];

  return (
    <Select.Root items={items} width="2xs" onValueChange={(e) => setSelectedItems(e.items)}>
      <Select.Label>Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a Framework" />
          <Select.Indicator>
            <DownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger>
          <Button variant="solid">Clear</Button>
        </Select.ClearTrigger>
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
};
