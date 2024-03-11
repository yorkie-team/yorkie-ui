import React from 'react';
import { DatePicker } from '@/components/ui/datepicker';

const meta = {
  title: 'FORM / Datepicker',
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The initial value of the tabs.',
    },
    dir: {
      control: { type: 'radio' },
      options: ['ltr', 'rtl'],
      description: 'The documents text/writing direction.',
      default: 'ltr',
    },
    value: {
      control: { type: 'text' },
      description: 'The selected tab id',
    },
    onValueChange: {
      description: '\nFunction called once a radio is checked. `(details: ValueChangeDetails) => void`',
    },
    orientation: {
      description:
        '\nThe orientation of the tabs. Can be `horizontal` or `vertical` - `horizontal`: only left and right arrow key navigation will work. - `vertical`: only up and down arrow key navigation will work. `horizontal | vertical`',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the radio group will be disabled',
    },
    form: {
      control: { type: 'text' },
      description: 'The associate form of the underlying input.',
    },
  },
};

export default meta;

export const Overview = () => {
  return (
    <DatePicker.Root>
      <DatePicker.Label>Label</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
        <DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
      </DatePicker.Control>
      <>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.YearSelect />
            <DatePicker.MonthSelect />
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
          </DatePicker.Content>
        </DatePicker.Positioner>
      </>
    </DatePicker.Root>
  );
};

export const Standalone = () => {
  return (
    <DatePicker.Root open={true} closeOnSelect={false}>
      <DatePicker.Input />
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
