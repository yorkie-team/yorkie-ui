import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Icons, Flex, Grid, Text, Toast } from '@/components/ui';
import { listIcons } from '@/components/ui/icons';
import copy from 'copy-to-clipboard';
import { createToaster } from '@ark-ui/react';
import { useEffect, useRef, useState } from 'react';

const meta = {
  title: 'FORM / Icon',
  component: Icon,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: `**Size of Icon - default: \`md\`. **
      \n \`xs:\` height: 12px, width: 12px
      \n \`sm:\` height: 16px, width: 16px
      \n \`md:\` height: 20px, width: 20px
      \n \`lg:\` height: 24px, width: 24px
      \n \`xl:\` height: 28px, width: 28px
      \n \`2xl:\` height: 32px, width: 32px`,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Overview: Story = {
  render: (args) => {
    return <Icon {...args} stroke="orange.default" icon={<Icons.IconDate />} />;
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <Flex gap="6" align="center">
        <Icon icon={<Icons.IconBook />} />
        <Icon {...args} size="xs" stroke="black.a6" icon={<Icons.IconDate />} />
        <Icon {...args} size="sm" stroke="black.a7" icon={<Icons.IconDate />} />
        <Icon {...args} size="md" stroke="black.a8" icon={<Icons.IconDate />} />
        <Icon {...args} size="lg" stroke="black.a9" icon={<Icons.IconDate />} />
        <Icon {...args} size="xl" stroke="black.a10" icon={<Icons.IconDate />} />
        <Icon {...args} size="2xl" stroke="black.a11" icon={<Icons.IconDate />} />
      </Flex>
    );
  },
};

type handleClickCopy = {
  iconName: string;
  strokeColor: string;
};
interface IconComponentWrapperProps {
  iconName: string;
  IconComponent: any;
  handleClick: ({ iconName, strokeColor }: handleClickCopy) => void;
}

const IconList = () => {
  const handleClick = ({ iconName, strokeColor }: handleClickCopy) => {
    const strokeProp = strokeColor === 'initial' ? '' : ` stroke={${strokeColor}}`;
    // Copy icon name to clipboard
    copy(`<Icon icon={<Icons.${iconName}/>} ${strokeProp}  />`);
    toast.create({
      title: 'Success',
      description: 'You copied icon successfully',
      type: 'success',
      duration: 20000,
      removeDelay: 250,
    });
  };

  const [Toaster, toast] = createToaster({
    placement: 'top-start',
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger cursor="pointer">
            <Icon icon={<Icons.IconClose />} size="sm" />
          </Toast.CloseTrigger>
        </Toast.Root>
      );
    },
  });

  return (
    <Grid gridTemplateColumns="6">
      {Object.keys(listIcons).map((iconName) => (
        <IconComponentWrapper
          key={iconName}
          iconName={iconName}
          IconComponent={listIcons[iconName]}
          handleClick={handleClick}
        />
      ))}
      <Toaster />
    </Grid>
  );
};
const IconComponentWrapper: React.FC<IconComponentWrapperProps> = ({ iconName, IconComponent, handleClick }) => {
  const [strokeColor, setStrokeColor] = useState('initial');
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      let hasFill = false;

      paths.forEach((path) => {
        const fillValue = path.getAttribute('fill');
        if (fillValue && fillValue !== 'none') {
          hasFill = true;
        }
      });

      if (hasFill) {
        setStrokeColor('initial');
      } else {
        setStrokeColor('neutral.12');
      }
    }
  }, [IconComponent]);

  return (
    <Flex
      marginBottom="10"
      justifyContent="center"
      flexDirection="column"
      onClick={() => handleClick({ iconName, strokeColor })}
      cursor="pointer"
    >
      <Icon margin="auto" icon={<Icon icon={<IconComponent />} ref={svgRef} />} size="lg" stroke={strokeColor} />
      <Text margin="auto" size="xs" color="neutral.10" marginTop="2">
        {iconName}
      </Text>
    </Flex>
  );
};

export const Gallery: Story = {
  render: (args) => {
    return <IconList {...args} />;
  },
};
