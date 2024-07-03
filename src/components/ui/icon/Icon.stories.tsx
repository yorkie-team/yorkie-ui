import type { Meta, StoryObj } from '@storybook/react';
import { Icon, Icons, Flex, Grid, Text, Toast } from '@/components/ui';
import { listIcons } from '@/components/ui/icons';
import copy from 'copy-to-clipboard';
import { createToaster } from '@ark-ui/react';

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

export const Gallery: Story = {
  render: () => {
    const handleClick = (iconName: string) => {
      // Copy icon name to clipboard
      copy(`<Icon icon={<Icons.${iconName}/>} />`);
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
        {Object.keys(listIcons).map((iconName) => {
          const IconComponent = listIcons[iconName];
          return (
            <Flex
              key={iconName}
              marginBottom="10"
              justifyContent="center"
              flexDirection="column"
              onClick={() => handleClick(iconName)}
              cursor="pointer"
            >
              <Icon margin="auto" icon={<IconComponent />} size="lg" />
              <Text margin="auto" size="xs" color="neutral.10" marginTop="2">
                {iconName}
              </Text>
            </Flex>
          );
        })}
        <Toaster />
      </Grid>
    );
  },
};
