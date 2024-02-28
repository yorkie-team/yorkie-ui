import { Pagination } from '@/components/ui';

const meta = {
  title: 'DATA DISPLAY / Pagination',
  argTypes: {
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    count: {
      control: { type: 'number' },
      description: 'Total number of data items.',
    },
    onPageChange: {
      description:
        '\nCalled when the page number is changed, and it takes the resulting page number argument. `(details: PageChangeDetails) => void`',
    },
    page: {
      control: { type: 'number' },
      description: 'The active page.',
    },
    pageSize: {
      control: { type: 'number' },
      description: 'Number of data items per page.',
    },
    siblingCount: {
      control: { type: 'number' },
      description: 'Number of pages to show beside active page.',
    },
    translations: {
      control: { type: 'boolean' },
      description:
        '\nFunction called when the pointer is pressed down outside the component. `{ nextTriggerLabel: "Next", prevTriggerLabel: "Prev", itemLabel: (details) => `Page ${details.page}`}`',
    },
    type: {
      control: { type: 'radio' },
      options: ['link', 'button'],
      description: 'The type of the trigger element.',
      default: 'button',
    },
  },
};

export default meta;

export const Overview = {
  render: () => {
    return <Pagination count={5000} pageSize={10} siblingCount={2}></Pagination>;
  },
};
