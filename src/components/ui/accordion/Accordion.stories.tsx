import type { Meta, StoryObj } from '@storybook/react';
import * as Accordion from '@components/ui/accordion';

const meta = {
  title: 'Common / Accordion',
  component: Accordion.Root,
  argTypes: {
    multiple: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

const items = [
  { name: 'React', content: 'content of React item' },
  { name: 'Solid', content: 'content of Solid item' },
  { name: 'Svelte', content: 'content of Svelte item' },
  { name: 'Vue', content: 'content of Vue item' },
];

export const Overview: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.name}>
          <Accordion.ItemTrigger>
            {item.name}
            <Accordion.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

//Example

export const Basic: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.name}>
          <Accordion.ItemTrigger>
            {item.name}
            <Accordion.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const WithMultipleOptions: Story = {
  render: (args) => (
    <Accordion.Root multiple {...args}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.name}>
          <Accordion.ItemTrigger>
            {item.name}
            <Accordion.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const WithDefaultOption: Story = {
  render: (args) => (
    <Accordion.Root multiple defaultValue={['Solid', 'React']} {...args}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.name}>
          <Accordion.ItemTrigger>
            {item.name}
            <Accordion.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const WithDisabledOption: Story = {
  render: (args) => (
    <Accordion.Root {...args}>
      {items.map((item, id) => (
        <Accordion.Item key={id} value={item.name} disabled={item.name === 'Svelte'}>
          <Accordion.ItemTrigger>
            {item.name}
            <Accordion.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div>{item.content}</div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};
