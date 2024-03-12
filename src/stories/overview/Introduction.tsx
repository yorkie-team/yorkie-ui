import { Accordion, DownIcon } from '@/components/ui';
import { Box } from '@/styled/jsx';

const listComponent = [
  {
    namespace: 'FEEDBACK',
    children: [
      {
        title: 'CheckboxGroup',
        component: (
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
        ),
        path: '/?path=/docs/feedback-accordion--docs',
      },
    ],
  },
];

export const Overview = {
  render: () => {
    return (
      <Box>
        {listComponent.map((results, index) => {
          return (
            <div key={index}>
              <p>{results.namespace}</p>
              <div>
                {results.children.map((result, indexes) => {
                  return (
                    <a key={indexes}>
                      <p>{result.title}</p>
                      {result.component}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Box>
    );
  },
};
