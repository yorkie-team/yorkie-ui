'use client';
import { Container, Flex } from '@/styled/jsx';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Flex gap="3">
        <Button colorPalette="red" variant="solid">
          Button
        </Button>
        <Button colorPalette="red" variant="outline">
          Button
        </Button>
        <Button colorPalette="red" variant="ghost">
          Button
        </Button>
      </Flex>
    </Container>
  );
}