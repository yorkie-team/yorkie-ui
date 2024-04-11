import React from 'react';
import { Button, Card, Input, Label } from '@/components/ui';
import { Stack } from '@/styled/jsx';

const meta = {
  title: 'DATA DISPLAY / Card',
  component: Card,
};

export default meta;

export const Overview = {
  render: () => {
    return (
      <Card.Root width="sm">
        <Card.Header>
          <Card.Title>Team Members</Card.Title>
          <Card.Description>Add new members to your organization.</Card.Description>
        </Card.Header>
        <Card.Body>
          <Stack gap="4">
            <Stack gap="1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" />
            </Stack>
            <Stack gap="1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Email" />
            </Stack>
          </Stack>
        </Card.Body>
        <Card.Footer gap="3">
          <Button variant="outline">Cancel</Button>
          <Button>Invite</Button>
        </Card.Footer>
      </Card.Root>
    );
  },
};
