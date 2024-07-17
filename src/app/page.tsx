'use client';

import {
  Text,
  Container,
  Flex,
  Checkbox,
  Box,
  Menu,
  Pagination,
  Popover,
  Button,
  Stack,
  RadioGroup,
  Select,
  BookOpen01Icon,
  ChevronRightIcon,
} from '@/components/ui';

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
      <BookOpen01Icon />
      <Button
        width={{ base: '100w', lg: 'fit' }}
        wLink={{ base: '100w', lg: 'fit' }}
        as="link"
        href="/docs/getting-started"
        variant="solid"
        size="lg"
      >
        <BookOpen01Icon />
        Getting Started
      </Button>
      <Button as="link" href="https://yorkie.dev" variant="link">
        Website Link
      </Button>
      <Box padding="6" bg="grad.yellow"></Box>
      <Text color="success.default">Hello</Text>
      <Text
        fontSize="6xl"
        fontWeight="semibold"
        position="relative"
        borderWidth={{ md: 'sm', lg: 'md' }}
        overflow="hidden"
        borderStyle="dashed"
        borderColor="orange.default"
        borderRadius="2xl"
        className="point"
        zIndex="3"
      >
        collaborative
      </Text>
      <Box bg="orange.2">Open menu</Box>
      <Checkbox size="md" mt="4">
        Label
      </Checkbox>
      <Flex minWidth="max-content" alignItems="center" gap="2" justifyContent="space-between">
        <Box p="2" fontWeight={700}>
          Yorkie UI App
        </Box>
        <Button colorScheme="teal">Log in</Button>
      </Flex>
      <Box height="240px" mt="4">
        <Menu.Root>
          <Menu.Trigger>
            <Box>Open menu</Box>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="search">Search</Menu.Item>
              <Menu.Item value="undo">Undo</Menu.Item>
              <Menu.Item value="delivery" disabled>
                Delivery
              </Menu.Item>
              <Menu.Item value="unlink">Unlink</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </Box>
      <Pagination mt="4" count={5000} pageSize={10} siblingCount={2}></Pagination>
      <Box height="160px" mt="4">
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
                  <ChevronRightIcon />
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
            <ChevronRightIcon />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup id="framework">
              <Select.ItemGroupLabel>Framework</Select.ItemGroupLabel>
              {items.map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator></Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </Container>
  );
}
