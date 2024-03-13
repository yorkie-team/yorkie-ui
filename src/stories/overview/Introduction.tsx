import { Card } from '@/components/ui';
import { Box, Center, Grid } from '@/styled/jsx';
import Image from 'next/image';
import {
  Accordion,
  Toast,
  Avatar,
  Badge,
  Cards,
  Pagination,
  Tab,
  Button,
  Checkbox,
  DatePicker,
  Icon,
  Input,
  Label,
  Radio,
  Select,
  Switch,
  Menu,
  Popover,
  Tooltip,
} from '@/stories/overview/img/thumb';
import Link from 'next/link';

const listComponent = [
  {
    namespace: 'FEEDBACK',
    children: [
      {
        title: 'Checkbox Group',
        component: <Image src={Accordion} alt="Picture of the accordion" width={300} height={160} />,
        path: '/?path=/docs/feedback-accordion--docs',
      },
      {
        title: 'Toast',
        component: <Image src={Toast} alt="Picture of the toast" width={300} height={160} />,
        path: '/?path=/docs/feedback-toast--docs',
      },
    ],
  },
  {
    namespace: 'COMMON',
    children: [
      {
        title: 'Avatar',
        component: <Image src={Avatar} alt="Picture of the avatar" width={300} height={160} />,
        path: '/?path=/docs/feedback-avatar--docs',
      },
    ],
  },
  {
    namespace: 'DATA DISPLAY',
    children: [
      {
        title: 'Badge',
        component: <Image src={Badge} alt="Picture of the Badge" width={300} height={160} />,
        path: '/?path=/docs/feedback-badge--docs',
      },
      {
        title: 'Card',
        component: <Image src={Cards} alt="Picture of the card" width={180} height={160} />,
        path: '/?path=/docs/feedback-card--docs',
      },
      {
        title: 'Pagination',
        component: <Image src={Pagination} alt="Picture of the pagination" width={200} height={160} />,
        path: '/?path=/docs/feedback-pagination--docs',
      },
      {
        title: 'Tab',
        component: <Image src={Tab} alt="Picture of the tab" width={200} height={160} />,
        path: '/?path=/docs/feedback-tab--docs',
      },
    ],
  },
  {
    namespace: 'FORM',
    children: [
      {
        title: 'Button',
        component: <Image src={Button} alt="Picture of the button" width={200} height={160} />,
        path: '/?path=/docs/feedback-button--docs',
      },
      {
        title: 'Checkbox',
        component: <Image src={Checkbox} alt="Picture of the checkbox" width={200} height={160} />,
        path: '/?path=/docs/feedback-checkbox--docs',
      },
      {
        title: 'DatePicker',
        component: <Image src={DatePicker} alt="Picture of the datePicker" width={200} height={160} />,
        path: '/?path=/docs/feedback-datePicker--docs',
      },
      {
        title: 'Icon',
        component: <Image src={Icon} alt="Picture of the icon" width={200} height={160} />,
        path: '/?path=/docs/feedback-icon--docs',
      },
      {
        title: 'Input',
        component: <Image src={Input} alt="Picture of the input" width={200} height={160} />,
        path: '/?path=/docs/feedback-input--docs',
      },
      {
        title: 'Radio',
        component: <Image src={Radio} alt="Picture of the radio" width={200} height={160} />,
        path: '/?path=/docs/feedback-radio--docs',
      },
      {
        title: 'Select',
        component: <Image src={Select} alt="Picture of the select" width={200} height={160} />,
        path: '/?path=/docs/feedback-select--docs',
      },
      {
        title: 'Switch',
        component: <Image src={Switch} alt="Picture of the switch" width={200} height={160} />,
        path: '/?path=/docs/feedback-switch--docs',
      },
      {
        title: 'Label',
        component: <Image src={Label} alt="Picture of the label" width={200} height={160} />,
        path: '/?path=/docs/feedback-label--docs',
      },
    ],
  },
  {
    namespace: 'NAVIGATION',
    children: [
      {
        title: 'Menu',
        component: <Image src={Menu} alt="Picture of the menu" width={200} height={160} />,
        path: '/?path=/docs/feedback-menu--docs',
      },
    ],
  },
  {
    namespace: 'OVERLAY',
    children: [
      {
        title: 'Popover',
        component: <Image src={Popover} alt="Picture of the popover" width={300} height={160} />,
        path: '/?path=/docs/feedback-popover--docs',
      },
      {
        title: 'Tooltip',
        component: <Image src={Tooltip} alt="Picture of the tooltip" width={200} height={160} />,
        path: '/?path=/docs/feedback-tooltip--docs',
      },
    ],
  },
];

const Overview: React.FC = () => (
  <div>
    {listComponent.map((results, index) => {
      return (
        <Box key={index}>
          <h2 style={{ marginTop: '60px', marginBottom: '40px' }}>
            <strong>{results.namespace}</strong>
          </h2>
          <Grid gap="20px" columns={3}>
            {results.children.map((result, indexes) => {
              return (
                <Link key={indexes} href={result.path}>
                  <Card.Root height="280px" width="auto">
                    <Card.Header>
                      <Card.Title>{result.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Center height="100%">{result.component}</Center>
                    </Card.Body>
                  </Card.Root>
                </Link>
              );
            })}
          </Grid>
        </Box>
      );
    })}
  </div>
);

export default Overview;
