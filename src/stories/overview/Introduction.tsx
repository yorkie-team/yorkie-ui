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
        path: `${subpath}/?path=/docs/theme-colors--documentation`,
      },
    ],
  },
  {
    namespace: 'TYPOGRAPHY',
    children: [
      {
        title: 'Text',
        component: <Image src={Text} alt="Picture of the text" width={300} height={160} />,
        path: `${subpath}/?path=/docs/typography-text--documentation`,
      },
      {
        title: 'Heading',
        component: <Image src={Heading} alt="Picture of the heading" width={300} height={160} />,
        path: `${subpath}/?path=/docs/typography-heading--documentation`,
      },
      {
        title: 'Code',
        component: <Image src={Code} alt="Picture of the code" width={100} height={160} />,
        path: `${subpath}/?path=/docs/typography-code--documentation`,
      },
    ],
  },
  {
    namespace: 'LAYOUT',
    children: [
      {
        title: 'Grid',
        component: <Image src={Grids} alt="Picture of the Grid" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-grid--documentation`,
      },
      {
        title: 'Flex',
        component: <Image src={Flex} alt="Picture of the Flex" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-flex--documentation`,
      },
      {
        title: 'Aspect Ratio',
        component: <Image src={Aspectratio} alt="Picture of the Aspect Ratio" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-aspectratio--documentation`,
      },
      {
        title: 'Shape',
        component: <Image src={Shape} alt="Picture of the Shape" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-shape--documentation`,
      },
      {
        title: 'Container',
        component: <Image src={Container} alt="Picture of the container" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-container--documentation`,
      },
      {
        title: 'Box',
        component: <Image src={BoxThumb} alt="Picture of the box" width={300} height={160} />,
        path: `${subpath}/?path=/docs/layout-box--documentation`,
      },
    ],
  },
  {
    namespace: 'FEEDBACK',
    children: [
      {
        title: 'Checkbox Group',
        component: <Image src={Accordion} alt="Picture of the accordion" width={300} height={160} />,
        path: `${subpath}/?path=/docs/feedback-accordion--documentation`,
      },
      {
        title: 'Toast',
        component: <Image src={Toast} alt="Picture of the toast" width={300} height={160} />,
        path: `${subpath}/?path=/docs/feedback-toast--documentation`,
      },
    ],
  },
  {
    namespace: 'COMMON',
    children: [
      {
        title: 'Avatar',
        component: <Image src={Avatar} alt="Picture of the avatar" width={300} height={160} />,
        path: `${subpath}/?path=/docs/common-avatar--documentation`,
      },
    ],
  },
  {
    namespace: 'DATA DISPLAY',
    children: [
      {
        title: 'Badge',
        component: <Image src={Badge} alt="Picture of the Badge" width={300} height={160} />,
        path: `${subpath}/?path=/docs/data-display-badge--documentation`,
      },
      {
        title: 'Card',
        component: <Image src={Cards} alt="Picture of the card" width={180} height={160} />,
        path: `${subpath}/?path=/docs/data-display-card--documentation`,
      },
      {
        title: 'Pagination',
        component: <Image src={Pagination} alt="Picture of the pagination" width={200} height={160} />,
        path: `${subpath}/?path=/docs/data-display-pagination--documentation`,
      },
      {
        title: 'Tab',
        component: <Image src={Tab} alt="Picture of the tab" width={200} height={160} />,
        path: `${subpath}/?path=/docs/data-display-tab--documentation`,
      },
    ],
  },
  {
    namespace: 'FORM',
    children: [
      {
        title: 'Button',
        component: <Image src={Button} alt="Picture of the button" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-button--documentation`,
      },
      {
        title: 'Checkbox',
        component: <Image src={Checkbox} alt="Picture of the checkbox" width={60} height={60} />,
        path: `${subpath}/?path=/docs/form-checkbox--documentation`,
      },
      {
        title: 'DatePicker',
        component: <Image src={DatePicker} alt="Picture of the datePicker" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-datePicker--documentation`,
      },
      {
        title: 'Icon',
        component: <Image src={Icon} alt="Picture of the icon" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-icon--documentation`,
      },
      {
        title: 'Input',
        component: <Image src={Input} alt="Picture of the input" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-input--documentation`,
      },
      {
        title: 'Radio',
        component: <Image src={Radio} alt="Picture of the radio" width={60} height={160} />,
        path: `${subpath}/?path=/docs/form-radio--documentation`,
      },
      {
        title: 'Select',
        component: <Image src={Select} alt="Picture of the select" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-select--documentation`,
      },
      {
        title: 'Switch',
        component: <Image src={Switch} alt="Picture of the switch" width={60} height={160} />,
        path: `${subpath}/?path=/docs/form-switch--documentation`,
      },
      {
        title: 'Label',
        component: <Image src={Label} alt="Picture of the label" width={200} height={160} />,
        path: `${subpath}/?path=/docs/form-label--documentation`,
      },
    ],
  },
  {
    namespace: 'NAVIGATION',
    children: [
      {
        title: 'Menu',
        component: <Image src={Menu} alt="Picture of the menu" width={200} height={160} />,
        path: `${subpath}/?path=/docs/navigation-menu--documentation`,
      },
    ],
  },
  {
    namespace: 'OVERLAY',
    children: [
      {
        title: 'Popover',
        component: <Image src={Popover} alt="Picture of the popover" width={200} height={160} />,
        path: `${subpath}/?path=/docs/overlay-popover--documentation`,
      },
      {
        title: 'Tooltip',
        component: <Image src={Tooltip} alt="Picture of the tooltip" width={200} height={160} />,
        path: `${subpath}/?path=/docs/overlay-tooltip--documentation`,
      },
      {
        title: 'Dialog',
        component: <Image src={Dialog} alt="Picture of the dialog" width={300} height={160} />,
        path: `${subpath}/?path=/docs/overlay-dialog--documentation`,
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
