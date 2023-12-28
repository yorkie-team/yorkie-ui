import type { Meta, StoryObj } from '@storybook/react';
import * as Checkbox from '@components/ui/checkbox';

const meta = {
  title: 'Common / Checkbox',
  component: Checkbox.Root,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: { type: 'radio' },
      options: [true, false, 'indeterminate'],
    },
    colorPalette: {
      control: { type: 'radio' },
      options: ['black', 'primary', 'secondary', 'red', 'amber'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox.Root>;

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.91675 7H11.0834" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default meta;
type Story = StoryObj<typeof Checkbox.Root>;

export const Overview: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

//Examples
export const Default: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Checkbox.Root size="sm" {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Checkbox.Root size="lg" {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const DefaultChecked: Story = {
  render: (args) => (
    <Checkbox.Root defaultChecked {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const Indeterminate: Story = {
  render: (args) => (
    <Checkbox.Root checked="indeterminate" {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const WithRedColor: Story = {
  render: (args) => (
    <Checkbox.Root defaultChecked colorPalette="red" {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Checkbox.Root defaultChecked disabled {...args}>
      {(state) => (
        <>
          <Checkbox.Control>
            {state.isChecked && <CheckIcon />}
            {state.isIndeterminate && <MinusIcon />}
          </Checkbox.Control>
          <Checkbox.Label>Label</Checkbox.Label>
        </>
      )}
    </Checkbox.Root>
  ),
};
