import React from 'react';
import { Toast } from '@/components/ui';
import { CloseIcon } from '@/components/ui/icons';
import { createToaster } from '@ark-ui/react/toast';
import { Button } from '../button/Button';

const meta = {
  title: 'FEEDBACK / Toast',
  argTypes: {
    placement: {
      description: 'The placement of the toast.',
    },
    count: {
      control: { type: 'number' },
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    duration: {
      control: { type: 'number' },
      description: 'The duration the toast will be visible.',
    },
    gutter: {
      control: { type: 'text' },
      description: 'The gutter or spacing between toasts.',
    },
    max: {
      control: { type: 'number' },
      description: 'The maximum number of toasts that can be shown at once.',
    },
    offsets: {
      description:
        '\nThe offset from the safe environment edge of the viewport. `string | Record<"left" | "right" | "top" | "bottom", string>`',
    },
    pauseOnInteraction: {
      control: { type: 'boolean' },
      description: 'Whether to pause the toast when interacted with.',
    },
    pauseOnPageIdle: {
      control: { type: 'boolean' },
      description: 'Whether to pause toast when the user leaves the browser tab.',
    },
    removeDelay: {
      control: { type: 'number' },
      description: 'The duration for the toast to kept alive before it is removed. Useful for exit transitions.',
    },
    zIndex: {
      control: { type: 'number' },
      description: 'The z-index applied to each toast group.',
    },
  },
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

export const ConfiguringToast = () => {
  const [Toaster, toast] = createToaster({
    placement: 'bottom-start',
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>Close</Toast.CloseTrigger>
        </Toast.Root>
      );
    },
  });

  return (
    <>
      <Button
        onClick={() =>
          toast.create({
            title: 'Success',
            description: 'This is a success toast',
            type: 'success',
            duration: 20000,
            removeDelay: 250,
          })
        }
      >
        Toast
      </Button>
      <Toaster />
    </>
  );
};

export const CustomRenderedToast = () => {
  const [Toaster, toast] = createToaster({
    placement: 'top-end',
    // custom render may go directly into the function below
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>Close</Toast.CloseTrigger>
        </Toast.Root>
      );
    },
  });

  return (
    <>
      <Button
        onClick={() =>
          toast.create({
            title: 'Please checkout',
            render: (toast) => (
              <div>
                {toast.title} <a href="#">Yorkie UI</a>
              </div>
            ),
          })
        }
      >
        Toast
      </Button>
      <Toaster />
    </>
  );
};
