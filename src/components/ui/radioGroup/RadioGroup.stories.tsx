import type { Meta, StoryObj } from '@storybook/react';
import * as RadioGroup from '@/components/ui/radioGroup';

const meta = {
  title: 'Common / RadioGroup',
  component: RadioGroup.Root,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: `**Size of RadioGroup - default: \`md\`**
      \n With \`ItemControl\`:
      \n \`sm:\` width: 4px, height: 4px
      \n \`md:\` width: 5px, height: 5px
      \n \`lg:\` width: 6px, height: 6px`,
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: `**Radio items direction**
      \n \`horizontal\`: align radio items in horizontal
      \n \`vertical\`: align radio items in vertical`,
    },
  },
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof RadioGroup.Root>;

const options = [
  { id: 'react', label: 'React' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte', disabled: false },
  { id: 'vue', label: 'Vue' },
];

const optionsWithDisabled = [
  { id: 'react', label: 'React' },
  { id: 'solid', label: 'Solid' },
  { id: 'svelte', label: 'Svelte', disabled: true },
  { id: 'vue', label: 'Vue' },
];

export const Overview: Story = {
  render: (args) => (
    <RadioGroup.Root size="md" orientation="vertical" defaultValue="react" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const Small: Story = {
  render: (args) => (
    <RadioGroup.Root size="sm" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <RadioGroup.Root size="md" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const Large: Story = {
  render: (args) => (
    <RadioGroup.Root size="lg" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup.Root orientation="horizontal" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const WithDefaultOption: Story = {
  render: (args) => (
    <RadioGroup.Root defaultValue="react" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const WithDisabledOption: Story = {
  render: (args) => (
    <RadioGroup.Root {...args}>
      {optionsWithDisabled.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};

export const WithColor: Story = {
  render: (args) => (
    <RadioGroup.Root colorPalette="red" defaultValue="react" {...args}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  ),
};
