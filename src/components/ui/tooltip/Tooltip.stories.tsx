import React, { useState } from 'react';
import { Tooltip } from '@/components/ui';

const meta = {
  title: 'COMMUNICATION / Tooltip',
  argTypes: {
    openDelay: {
      control: { type: 'number' },
      description: 'The open delay of the tooltip.',
    },
    closeDelay: {
      control: { type: 'number' },
      description: 'The close delay of the tooltip.',
    },
    closeOnPointerDown: {
      control: { type: 'boolean' },
      description: 'Whether to close the tooltip on pointerdown.',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
      default: false,
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
      default: false,
    },
    closeOnEsc: {
      control: { type: 'boolean' },
      description: 'Whether to close the tooltip when the Escape key is pressed.',
    },
    interactive: {
      control: { type: 'boolean' },
      description:
        'Whether the tooltips content is interactive. In this mode, the tooltip will remain open when user hovers over the content.',
    },
    onOpenChange: {
      control: { type: 'boolean' },
      description: '\nFunction called when the tooltip is opened `(details: OpenChangeDetails) => void`.',
    },
    positioning: {
      description: '\nThe user provided options used to position the popover content `PositioningOptions`.',
      default: 'PositioningOptions',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is disabled.',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is open.',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Tooltip.Root lazyMount unmountOnExit>
        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    );
  },
};

export const Basic = {
  render: () => {
    return (
      <Tooltip.Root lazyMount unmountOnExit>
        <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    );
  },
};

export const Controlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle </button>
      <Tooltip.Root open={isOpen}>
        <Tooltip.Trigger> Hover Me</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>I am a tooltip!</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </>
  );
};

export const Arrow = () => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};

export const TimeDelays = () => {
  return (
    <Tooltip.Root closeDelay={300} openDelay={100}>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};

export const Positioning = () => {
  return (
    <Tooltip.Root positioning={{ placement: 'left-start', gutter: 16, offset: { mainAxis: 12, crossAxis: 12 } }}>
      <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>I am a tooltip!</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
