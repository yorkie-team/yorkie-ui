import React from 'react';
import { Toast } from '@/components/ui';
import { CloseIcon } from '@/components/ui/icons';
import { createToaster } from '@ark-ui/react/toast';
import { Button } from '../button/Button';

const meta = {
  title: 'COMMUNICATION / Toast',
};

export default meta;

export const Overview = () => {
  const [Toaster, toast] = createToaster({
    placement: 'top-end',
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger asChild>
            <span>
              <CloseIcon />
            </span>
          </Toast.CloseTrigger>
        </Toast.Root>
      );
    },
  });

  return (
    <>
      <Button variant="outline" onClick={() => toast.create({ title: 'Title', description: 'Description' })}>
        Create Toast
      </Button>
      <Toaster />
    </>
  );
};
