import React, { useState } from 'react';
import { Popover } from '@/components/ui';
import { Button, Stack, Box, Icons } from '@/components/ui';

const meta = {
  title: 'OVERLAY / Popover',
  argTypes: {
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    autoFocus: {
      control: { type: 'boolean' },
      description: 'Whether to automatically set focus on the first focusable content within the popover when opened.',
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      description: 'Whether to close the popover when the escape key is pressed.',
    },
    closeOnInteractOutside: {
      control: { type: 'boolean' },
      description: 'Whether to close the popover when the user clicks outside of the popover.',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'The initial open state of the popover.',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
    },
    modal: {
      description:
        '\nWhether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover.',
    },
    onEscapeKeyDown: {
      description: '\nFunction called when the escape key is pressed. `(event: KeyboardEvent) => void`',
    },
    onExitComplete: {
      description: '\nFunction called when the animation ends in the closed state. `() => void`',
    },
    onFocusOutside: {
      description:
        '\nFunction called when the focus is moved outside the component. `(event: FocusOutsideEvent) => void`',
    },
    onInteractOutside: {
      description:
        '\nFunction called when an interaction happens outside the component. `(event: InteractOutsideEvent) => void`',
    },
    onOpenChange: {
      control: { type: 'boolean' },
      description: '\nFunction invoked when the popover opens or closes. `(details: OpenChangeDetails) => void`',
    },
    onPointerDownOutside: {
      control: { type: 'boolean' },
      description:
        '\nFunction called when the pointer is pressed down outside the component. `(event: (event: PointerDownOutsideEvent) => void) => void`',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the popover is open.',
    },
    portalled: {
      control: { type: 'boolean' },
      description: 'Whether the popover is rendered in a portal.',
    },
    positioning: {
      control: { type: 'boolean' },
      description: '\nThe user provided options used to position the popover content. `PositioningOptions`',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user).',
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
      <Box height="160px">
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button>Open Popover</Button>
          </Popover.Trigger>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Stack gap="1">
                <Popover.Title>Favorite Framework</Popover.Title>
                <Popover.Description>
                  Tell us what is your favorite framework and why you love to use it.
                </Popover.Description>
              </Stack>
              <Box position="absolute" top="1" right="1">
                <Popover.CloseTrigger asChild>
                  <Icons.IconClose />
                </Popover.CloseTrigger>
              </Box>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </Box>
    );
  },
};

export const AddingAnArrow = {
  render: () => {
    return (
      <Box height="160px">
        <Popover.Root>
          <Popover.Trigger asChild>
            <Button>Open Popover</Button>
          </Popover.Trigger>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Arrow>
                <Popover.ArrowTip />
              </Popover.Arrow>
              <Stack gap="1">
                <Popover.Title>Favorite Framework</Popover.Title>
                <Popover.Description>
                  Tell us what is your favorite framework and why you love to use it.
                </Popover.Description>
              </Stack>
              <Box position="absolute" top="1" right="1">
                <Popover.CloseTrigger asChild>
                  <Icons.IconClose />
                </Popover.CloseTrigger>
              </Box>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </Box>
    );
  },
};

export const OpenAndCloseEvent = {
  render: () => {
    return (
      <Box height="160px">
        <Popover.Root onOpenChange={(open) => alert(open ? 'opened' : 'closed')}>
          <Popover.Trigger>
            <Button>
              Click Me <Popover.Indicator>{'>'}</Popover.Indicator>
            </Button>
          </Popover.Trigger>
          <Popover.Positioner>
            <Popover.Content>
              <Popover.Title>Title</Popover.Title>
              <Popover.Description>Description</Popover.Description>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </Box>
    );
  },
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box height="160px">
      <Popover.Root open={isOpen}>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Stack gap="1">
              <Popover.Title>Favorite Framework</Popover.Title>
              <Popover.Description>
                Tell us what is your favorite framework and why you love to use it.
              </Popover.Description>
            </Stack>
            <Box position="absolute" top="1" right="1">
              <Popover.CloseTrigger asChild>
                <Icons.IconClose />
              </Popover.CloseTrigger>
            </Box>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </Box>
  );
};

export const CloseBehavior = () => {
  return (
    <Box height="160px">
      <Popover.Root closeOnEsc={false} closeOnInteractOutside={false}>
        <Popover.Trigger asChild>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Stack gap="1">
              <Popover.Title>Favorite Framework</Popover.Title>
              <Popover.Description>
                Tell us what is your favorite framework and why you love to use it.
              </Popover.Description>
            </Stack>
            <Box position="absolute" top="1" right="1">
              <Popover.CloseTrigger asChild>
                <Icons.IconClose />
              </Popover.CloseTrigger>
            </Box>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </Box>
  );
};

export const Positioning = () => (
  <Box height="160px">
    <Popover.Root positioning={{ placement: 'left-start', gutter: 16, offset: { mainAxis: 12, crossAxis: 12 } }}>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <Icons.IconClose />
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  </Box>
);

export const Modal = () => (
  <Box height="160px">
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Stack gap="1">
            <Popover.Title>Favorite Framework</Popover.Title>
            <Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </Popover.Description>
          </Stack>
          <Box position="absolute" top="1" right="1">
            <Popover.CloseTrigger asChild>
              <Icons.IconClose />
            </Popover.CloseTrigger>
          </Box>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  </Box>
);
