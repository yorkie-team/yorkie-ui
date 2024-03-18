import { Button, Menu } from '@/components/ui';
import { Box } from '@/styled/jsx';
import { useState } from 'react';

const meta = {
  title: 'NAVIGATION / Menu',
  component: Menu,
  argTypes: {
    anchorPoint: {
      description:
        '\nThe positioning point for the menu. Can be set by the context menu trigger or the button trigger. `Point`',
    },
    positioning: {
      description: '\nThe options used to dynamically position the menu. `PositioningOptions`',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      description: '\nThe values of radios and checkboxes in the menu. `Record<string, string | string[]>`',
    },
    onFocusOutside: {
      description:
        '\nThe callback fired when the state of opened/closed accordion items changes. `(event: FocusOutsideEvent) => void`',
    },
    onExitComplete: {
      description: '\nFunction called when the animation ends in the closed state. `() => void`',
    },
    onInteractOutside: {
      description:
        '\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`',
    },
    onOpenChange: {
      description: '\nFunction called when the menu opens or closes. `(details: OpenChangeDetails) => void`',
    },
    onPointerDownOutside: {
      description:
        '\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`',
    },
    onSelect: {
      description: '\nFunction called when a menu item is selected. `(details: SelectionDetails) => void`',
    },
    onValueChange: {
      description:
        '\nCallback to be called when the menu values change (for radios and checkboxes).. `(details: ValueChangeDetails) => void`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the accordion items are disabled.',
    },
    loop: {
      control: { type: 'boolean' },
      description: 'Whether to loop the keyboard navigation.',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the menu is open.',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
      default: false,
    },
    highlightedId: {
      control: { type: 'text' },
      description: 'The `id` of the active menu item..',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Box height="240px">
        <Menu.Root>
          <Menu.Trigger>
            <Box>Open menu</Box>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item id="search">Search</Menu.Item>
              <Menu.Item id="undo">Undo</Menu.Item>
              <Menu.Item id="delivery" disabled>
                Delivery
              </Menu.Item>
              <Menu.Item id="unlink">Unlink</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </Box>
    );
  },
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box height="240px">
      <Button onClick={() => setIsOpen(!isOpen)}>Trigger from the outside</Button>
      <Menu.Root open={isOpen} onSelect={(id) => console.log(id)}>
        <Menu.Trigger>
          <Box ml="4">Open menu</Box>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item id="search">Search</Menu.Item>
            <Menu.Item id="undo">Undo</Menu.Item>
            <Menu.Item id="delivery" disabled>
              Delivery
            </Menu.Item>
            <Menu.Item id="unlink">Unlink</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export const Group = () => (
  <Box height="240px">
    <Menu.Root>
      <Menu.Trigger>Open menu</Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.ItemGroup id="group-1">
            <Menu.ItemGroupLabel htmlFor="group-1">Group 1</Menu.ItemGroupLabel>
            <Menu.Item id="share">Share...</Menu.Item>
            <Menu.Item id="move">Move...</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup id="group-2">
            <Menu.ItemGroupLabel htmlFor="group-2">Group 2</Menu.ItemGroupLabel>
            <Menu.Item id="rename">Rename...</Menu.Item>
            <Menu.Item id="delete">Delete...</Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  </Box>
);

export const Separating = () => {
  return (
    <Box height="240px">
      <Menu.Root>
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item id="search">Search</Menu.Item>
            <Menu.Item id="undo">Undo</Menu.Item>
            <Menu.Separator />
            <Menu.Item id="delivery" disabled>
              Delivery
            </Menu.Item>
            <Menu.Item id="unlink">Unlink</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export const Options = () => {
  const [value, setValue] = useState<Record<string, string | string[]>>({
    framework: '',
    libraries: [],
  });
  return (
    <Box height="240px">
      <Menu.Root
        value={value}
        onValueChange={(data) => {
          setValue((prev) => ({
            ...prev,
            [data.name]: data.value,
          }));
        }}
      >
        <Menu.Trigger>
          <Button variant="outline">Open menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id="radio-group">
              <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>
              <Menu.OptionItem name="framework" type="radio" value="react">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} React</>}
              </Menu.OptionItem>
              <Menu.OptionItem name="framework" type="radio" value="solid">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} Solid</>}
              </Menu.OptionItem>
              <Menu.OptionItem name="framework" type="radio" value="vue">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} Vue</>}
              </Menu.OptionItem>
            </Menu.ItemGroup>
            <Menu.ItemGroup id="checkbox-group">
              <Menu.ItemGroupLabel htmlFor="checkbox-group">Checkbox Group</Menu.ItemGroupLabel>
              <Menu.OptionItem name="libraries" type="checkbox" value="zag-js">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} zag-js</>}
              </Menu.OptionItem>
              <Menu.OptionItem name="libraries" type="checkbox" value="ark">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} ark</>}
              </Menu.OptionItem>
              <Menu.OptionItem name="libraries" type="checkbox" value="panda">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} panda</>}
              </Menu.OptionItem>
              <Menu.OptionItem name="libraries" type="checkbox" value="chakra">
                {({ isChecked }) => <>{isChecked ? '✅' : ''} chakra</>}
              </Menu.OptionItem>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};
