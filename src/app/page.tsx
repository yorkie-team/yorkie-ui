'use client'

import { Accordion, Container, DownIcon, Badge, Flex, Checkbox, Box, Menu, Pagination, Popover,Button, Stack, RadioGroup, CloseIcon, Select } from '@/components/ui';

export default function Home() {
  const frameworks = ['Option 1', 'Option 2', 'Option 3'];
  const items = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid' },
    { label: 'Svelte', value: 'svelte', disabled: true },
    { label: 'Vue', value: 'vue' },
  ];
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Box bg="orange.2">Open menu</Box>
       <Accordion.Root defaultValue={['Accordion-1']} collapsible>
        {['Accordion-1', 'Accordion-2', 'Accordion-3'].map((item, id) => (
          <Accordion.Item key={id} value={item}>
            <Accordion.ItemTrigger>
              {item}
              <Accordion.ItemIndicator>
                <DownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <div>{item} is a JavaScript library for building user interfaces.</div>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <Checkbox size="md" mt="4">
        Label
      </Checkbox>
      <Flex gap="6" align="center"  mt="4">
        <Badge size="sm">
          SM
        </Badge>
        <Badge size="md">
          MD
        </Badge>
        <Badge size="lg">
          LG
        </Badge>
      </Flex>
      <Box height="240px"  mt="4">
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
      <Pagination  mt="4" count={5000} pageSize={10} siblingCount={2}></Pagination>
      <Box height="160px"  mt="4">
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
                  <CloseIcon />
                </Popover.CloseTrigger>
              </Box>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </Box>
      <RadioGroup.Root>
        <RadioGroup.Label>Option</RadioGroup.Label>
        <RadioGroup.Indicator />
        {frameworks.map((option) => (
          <RadioGroup.Item key={option} value={option}>
            <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            <RadioGroup.ItemControl />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
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
    </Container>
  )
}