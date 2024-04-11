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
  Grids,
  Flex,
  Heading,
  Text,
  Code,
  Shape,
  Aspectratio,
  Container,
  BoxThumb,
  Color,
  Dialog
} from '@/stories/overview/img/thumb';
import Link from 'next/link';

const url = new URL(window.location.href);
const pathname = url.pathname && url.pathname != '/iframe.html' ? url.pathname : '';
const subpath = pathname ? url.origin + '/' + pathname.split('/')[1] : '';

const listComponent = [
  {
    namespace: 'THEME',
    children: [
      {
        title: 'Color',
        component: <Image src={Color} alt="Picture of the color" width={300} height={160} />,
        path: `${subpath}/?path=/docs/theme-colors--docs`,
      },
    ],
  },
  {
    namespace: 'TYPOGRAPHY',
    children: [
      {
        title: 'Text',
        component: <Image src={Text} alt="Picture of the text" width={300} height={160} />,
        path: `${subpath}/?path=/docs/typography-text--docs`,
      },
      {
        title: 'Heading',
        component: <Image src={Heading} alt="Picture of the heading" width={300} height={160} />,
        path: `${subpath}/?path=/docs/typography-heading--docs`,
      },
      {
        title: 'Code',
        component: <Image src={Code} alt="Picture of the code" width={100} height={160} />,
        path: `${subpath}/?path=/docs/typography-code--docs`,
      },
    ],
  },
  {
    namespace: 'LAYOUT',
    children: [
      {
        title: 'Grid',
        component: <Image src={Grids} alt="Picture of the Grid" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-grid--docs`,
      },
      {
        title: 'Flex',
        component: <Image src={Flex} alt="Picture of the Flex" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-flex--docs`,
      },
      {
        title: 'Aspect Ratio',
        component: <Image src={Aspectratio} alt="Picture of the Aspect Ratio" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-aspectratio--docs`,
      },
      {
        title: 'Shape',
        component: <Image src={Shape} alt="Picture of the Shape" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-shape--docs`,
      },
      {
        title: 'Container',
        component: <Image src={Container} alt="Picture of the container" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-container--docs`,
      },
      {
        title: 'Box',
        component: <Image src={BoxThumb} alt="Picture of the box" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-box--docs`,
      },
    ],
  },
  {
    namespace: 'FEEDBACK',
    children: [
      {
        title: 'Checkbox Group',
        component: <Image src={Accordion} alt="Picture of the accordion" width={300} height={160} />,
        path: `${subpath}/?path=/docs/feedback-accordion--docs`,
      },
      {
        title: 'Toast',
        component: <Image src={Toast} alt="Picture of the toast" width={300} height={160} />,
        path: `${subpath}/?path=/docs/feedback-toast--docs`,
      },
    ],
  },
  {
    namespace: 'COMMON',
    children: [
      {
        title: 'Avatar',
        component: <Image src={Avatar} alt="Picture of the avatar" width={300} height={160} />,
        path: `${subpath}/?path=/docs/common-avatar--docs`,
      },
    ],
  },
  {
    namespace: 'DATA DISPLAY',
    children: [
      {
        title: 'Badge',
        component: <Image src={Badge} alt="Picture of the Badge" width={300} height={160} />,
        path: `${subpath}/?path=/docs/data-display-badge--docs`,
      },
      {
        title: 'Card',
        component: <Image src={Cards} alt="Picture of the card" width={180} height={160} />,
        path: `${subpath}/?path=/docs/data-display-card--docs`,
      },
      {
        title: 'Pagination',
        component: <Image src={Pagination} alt="Picture of the pagination" width={200} height={160} />,
        path: `${subpath}/?path=/docs/data-display-pagination--docs`,
      },
      {
        title: 'Tab',
        component: <Image src={Tab} alt="Picture of the tab" width={200} height={160} />,
        path: `${subpath}/?path=/docs/data-display-tab--docs`,
      },
    ],
  },
  {
    namespace: 'FORM',
    children: [
      {
        title: 'Button',
        component: <Image src={Button} alt="Picture of the button" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-button--docs`,
      },
      {
        title: 'Checkbox',
        component: <Image src={Checkbox} alt="Picture of the checkbox" width={60} height={60} />,
        path: `${subpath}/?path=/docs/form-checkbox--docs`,
      },
      {
        title: 'DatePicker',
        component: <Image src={DatePicker} alt="Picture of the datePicker" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-datePicker--docs`,
      },
      {
        title: 'Icon',
        component: <Image src={Icon} alt="Picture of the icon" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-icon--docs`,
      },
      {
        title: 'Input',
        component: <Image src={Input} alt="Picture of the input" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-input--docs`,
      },
      {
        title: 'Radio',
        component: <Image src={Radio} alt="Picture of the radio" width={60} height={160} />,
        path: `${subpath}/?path=/docs/form-radio--docs`,
      },
      {
        title: 'Select',
        component: <Image src={Select} alt="Picture of the select" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-select--docs`,
      },
      {
        title: 'Switch',
        component: <Image src={Switch} alt="Picture of the switch" width={60} height={160} />,
        path: `${subpath}/?path=/docs/form-switch--docs`,
      },
      {
        title: 'Label',
        component: <Image src={Label} alt="Picture of the label" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-label--docs`,
      },
    ],
  },
  {
    namespace: 'NAVIGATION',
    children: [
      {
        title: 'Menu',
        component: <Image src={Menu} alt="Picture of the menu" width={200} height={160} />,
        path: `${subpath}/?path=/docs/navigation-menu--docs`,
      },
    ],
  },
  {
    namespace: 'OVERLAY',
    children: [
      {
        title: 'Popover',
        component: <Image src={Popover} alt="Picture of the popover" width={200} height={160} />,
        path: `${subpath}/?path=/docs/overlay-popover--docs`,
      },
      {
        title: 'Tooltip',
        component: <Image src={Tooltip} alt="Picture of the tooltip" width={200} height={160} />,
        path: `${subpath}/?path=/docs/overlay-tooltip--docs`,
      },
      {
        title: 'Dialog',
        component: <Image src={Dialog} alt="Picture of the dialog" width={300} height={160} />,
        path: `${subpath}/?path=/docs/overlay-dialog--docs`,
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
