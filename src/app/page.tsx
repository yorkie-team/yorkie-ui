'use client';
import { Container } from '@styled/jsx';
import { Button } from '@components/ui';

export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Button size="md">Hello Park UI</Button>
    </Container>
  );
}
