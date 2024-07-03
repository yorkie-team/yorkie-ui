import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, Input, Button, Icons, Icon, Box } from '@/components/ui';

const meta = {
  title: 'FORM / Datepicker',
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '\nThe initial value of the tabs. `string[]`',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      control: { type: 'text' },
      description: '\nThe keys of the selected items. `string[]`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the select is disabled',
    },
    closeOnSelect: {
      control: { type: 'boolean' },
      description: 'Whether the select should close after an item is selected.',
    },
    lazyMount: {
      control: { type: 'boolean' },
      description: 'Whether to enable lazy mounting.',
    },
    name: {
      control: { type: 'text' },
      description: 'The `name` attribute of the underlying select.',
    },
    onExitComplete: {
      description: '\nFunction called when the animation ends in the closed state. `() => void`',
    },
    onOpenChange: {
      description: '\nFunction called when the popup is opened. `(details: OpenChangeDetails) => void`',
    },
    onValueChange: {
      description: '\nThe callback fired when the selected item changes. `(details: ValueChangeDetails<T>) => void`',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Whether the select menu is open.',
    },
    positioning: {
      description: 'The positioning options of the menu.',
    },
    present: {
      control: { type: 'boolean' },
      description: 'Whether the node is present (controlled by the user).',
    },
    unmountOnExit: {
      control: { type: 'boolean' },
      description: 'Whether to unmount on exit.',
    },
  },
} satisfies Meta<typeof DatePicker.Root>;

type Story = StoryObj<typeof DatePicker.Root>;

export default meta;

export const Overview: Story = {
  render: (args) => {
    return (
      <Box {...args} height="160px">
        <DatePicker.Root>
          <DatePicker.Label>Date Picker</DatePicker.Label>
          <DatePicker.Control>
            <DatePicker.Input asChild>
              <Input />
            </DatePicker.Input>
            <DatePicker.Trigger asChild>
              <Button size="md" variant={'outline'}>
                <Icon size="md" icon={<Icons.IconDate />} />
              </Button>
            </DatePicker.Trigger>
          </DatePicker.Control>
          <DatePicker.Positioner>
            <DatePicker.Content>
              <DatePicker.View view="day">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevLeft />
                        </Button>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <DatePicker.RangeText />
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevRight />
                        </Button>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {api.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader key={id}>{weekDay.narrow}</DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {api.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{day.day}</Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view="month">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevLeft />
                        </Button>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <DatePicker.RangeText />
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevRight />
                        </Button>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                          <DatePicker.TableRow key={id}>
                            {months.map((month, id) => (
                              <DatePicker.TableCell key={id} value={month.value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{month.label}</Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
              <DatePicker.View view="year">
                {(api) => (
                  <>
                    <DatePicker.ViewControl>
                      <DatePicker.PrevTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevLeft />
                        </Button>
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <DatePicker.RangeText />
                        </Button>
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Icons.IconChevRight />
                        </Button>
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>
                    <DatePicker.Table>
                      <DatePicker.TableBody>
                        {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                          <DatePicker.TableRow key={id}>
                            {years.map((year, id) => (
                              <DatePicker.TableCell key={id} value={year.value}>
                                <DatePicker.TableCellTrigger asChild>
                                  <Button variant="ghost">{year.label}</Button>
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.View>
            </DatePicker.Content>
          </DatePicker.Positioner>
        </DatePicker.Root>
      </Box>
    );
  },
};

export const Standalone = () => {
  return (
    <DatePicker.Root open={true} closeOnSelect={false}>
      <DatePicker.Input asChild>
        <Input />
      </DatePicker.Input>
      <DatePicker.View view="day">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableHead>
                <DatePicker.TableRow>
                  {api.weekDays.map((weekDay, id) => (
                    <DatePicker.TableHeader key={id}>{weekDay.short}</DatePicker.TableHeader>
                  ))}
                </DatePicker.TableRow>
              </DatePicker.TableHead>
              <DatePicker.TableBody>
                {api.weeks.map((week, id) => (
                  <DatePicker.TableRow key={id}>
                    {week.map((day, id) => (
                      <DatePicker.TableCell key={id} value={day}>
                        <DatePicker.TableCellTrigger>{day.day}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
      <DatePicker.View view="month">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableBody>
                {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                  <DatePicker.TableRow key={id}>
                    {months.map((month, id) => (
                      <DatePicker.TableCell key={id} value={month.value}>
                        <DatePicker.TableCellTrigger>{month.label}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
      <DatePicker.View view="year">
        {(api) => (
          <>
            <DatePicker.ViewControl>
              <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
              <DatePicker.ViewTrigger>
                <DatePicker.RangeText />
              </DatePicker.ViewTrigger>
              <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
            </DatePicker.ViewControl>
            <DatePicker.Table>
              <DatePicker.TableBody>
                {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                  <DatePicker.TableRow key={id}>
                    {years.map((year, id) => (
                      <DatePicker.TableCell key={id} value={year.value}>
                        <DatePicker.TableCellTrigger>{year.label}</DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
              </DatePicker.TableBody>
            </DatePicker.Table>
          </>
        )}
      </DatePicker.View>
    </DatePicker.Root>
  );
};
