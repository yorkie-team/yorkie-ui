'use client'

import { Accordion, Container, DownIcon, Badge, Flex, Checkbox, Box, Menu, Pagination, Popover,Button, Stack, RadioGroup, CloseIcon, Select, Label, Input } from '@/components/ui';
import { useState } from 'react';
export default function Home() {
  const [data, setData] = useState('');
  return (
    <Stack w="300" p="4">
      <Label htmlFor="title">Title</Label>
      <Input onChange={(e) => setData(e.target.value)} value={data} />
    </Stack>
  );
}