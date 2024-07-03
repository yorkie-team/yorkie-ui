import React, { useState } from 'react';
import { Button, Dialog, Stack, Icons } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from '@ark-ui/react';

const meta = {
  title: 'OVERLAY / Dialog',
  argTypes: {
    closeOnEscapeKeyDown: {
      control: { type: 'boolean' },
      description: 'Whether to close the dialog when the escape key is pressed.',
    },
    closeOnInteractOutside: {
      control: { type: 'boolean' },
      description:
        'Change the font size include: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` and `7xl`.',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'The initial open state of the dialog.',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    finalFocusEl: {
      description: '\nElement to receive focus when the dialog is closed. `HTMLElement | (() => MaybeElement)`',
    },
    initialFocusEl: {
      description: '\nElement to receive focus when the dialog is opened. `HTMLElement | (() => MaybeElement)`',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
    },
    modal: {
      control: { type: 'boolean' },
      description: 'Whether to prevent pointer interaction outside the element and hide all content below it.',
    },
    onEscapeKeyDown: {
      description: '\nCallback to be invoked when the escape key is pressed. `(event: KeyboardEvent) => void`',
    },
    onExitComplete: {
      description: '\nElement to receive focus when the dialog is opened. `() => void`',
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
      description:
        '\nCallback to be invoked when the dialog is opened or closed. `(details: OpenChangeDetails) => void`',
    },
    onPointerDownOutside: {
      description:
        '\nFunction called when the pointer is pressed down outside the component. `(event: PointerDownOutsideEvent) => void`',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the dialog is open.',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user).',
    },
    preventScroll: {
      control: { type: 'boolean' },
      description: "Whether to prevent scrolling behind the dialog when it's opened.",
    },
    restoreFocus: {
      control: { type: 'boolean' },
      description: 'Whether to restore focus to the element that had focus before the dialog was opened.',
    },
    role: {
      description: "\nThe dialog's role. `dialog` | `alertdialog`",
      default: 'dialog',
    },
    trapFocus: {
      control: { type: 'boolean' },
      description: "Whether to trap focus inside the dialog when it's opened.",
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
      default: 'false',
    },
  },
} satisfies Meta<typeof Dialog.Root>;

type Story = StoryObj<typeof Dialog.Root>;

export default meta;

export const Overview: Story = {
  render: (args) => {
    return (
      <Dialog.Root {...args}>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Stack gap="8" p="6">
                <Stack gap="1">
                  <Dialog.Title>Dialog Title</Dialog.Title>
                  <Dialog.Description>Dialog Description</Dialog.Description>
                </Stack>
                <Stack gap="3" flexDirection="row" width="full">
                  <Dialog.CloseTrigger asChild>
                    <Button variant="outline" width="full">
                      Cancel
                    </Button>
                  </Dialog.CloseTrigger>
                  <Button width="full">Confirm</Button>
                </Stack>
              </Stack>
              <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
                <Button aria-label="Close Dialog" variant="ghost" size="sm">
                  <Icons.IconClose />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  },
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Stack gap="8" p="6">
                <Stack gap="1">
                  <Dialog.Title>Dialog Title</Dialog.Title>
                  <Dialog.Description>Dialog Description</Dialog.Description>
                </Stack>
                <Stack gap="3" direction="row" width="full">
                  <Dialog.CloseTrigger asChild>
                    <Button variant="outline" width="full">
                      Cancel
                    </Button>
                  </Dialog.CloseTrigger>
                  <Button width="full">Confirm</Button>
                </Stack>
              </Stack>
              <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
                <Button aria-label="Close Dialog" variant="ghost" size="sm">
                  <Icons.IconClose />
                </Button>
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export const LazyMounting = () => {
  return (
    <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log('onExitComplete invoked')}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Stack gap="8" p="6">
              <Stack gap="1">
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
              </Stack>
              <Stack gap="3" direction="row" width="full">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" width="full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <Button width="full">Confirm</Button>
              </Stack>
            </Stack>
            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
              <Button aria-label="Close Dialog" variant="ghost" size="sm">
                <Icons.IconClose />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export const RenderFn = () => {
  return (
    <Dialog.Root lazyMount unmountOnExit onExitComplete={() => console.log('onExitComplete')}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Stack gap="8" p="6">
              <Stack gap="1">
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
              </Stack>
              <Stack gap="3" direction="row" width="full">
                <Dialog.CloseTrigger asChild>
                  <Button variant="outline" width="full">
                    Cancel
                  </Button>
                </Dialog.CloseTrigger>
                <Button width="full">Confirm</Button>
              </Stack>
            </Stack>
            <Dialog.CloseTrigger asChild position="absolute" top="2" right="2">
              <Button aria-label="Close Dialog" variant="ghost" size="sm">
                <Icons.IconClose />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
